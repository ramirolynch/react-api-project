import {  ReactNode, useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Stream, Streams } from "../Models/Stream";
import { StreamContext } from "../Context/StreamsContext";
import { getStreamResponse, getTop } from "../Service/TwitchApi";
import axios from "axios";


const accessToken = process.env.REACT_APP_TWITCH_ACCESS_TOKEN || '';
const clientID = process.env.REACT_APP_TWITCH_CLIENT_ID || '';


interface Props {children:ReactNode;}

export function StreamContextProvider({children}:Props) {

    const [streamList, setStreamList] = useState<Stream[]>([]);

    function fetchStreams() {
        axios.get<Streams>(`https://api.twitch.tv/helix/streams`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-Id': `${clientID}`
            }})
            .then(response =>setStreamList(response.data.data))
    }

    useEffect(()=> {
        fetchStreams();
    },[]);

    const [favorites, setFavorites] = useState<Stream[]>([])

    function addFave(stream:Stream) {
        setStreamList([...favorites,stream]);
    }

    function removeFave(id:string) {
        setFavorites(favorites.filter((stream)=> stream.user_id != id));
    
    }

    return (

        <StreamContext.Provider value={{ streamList, favorites, addFave, removeFave}}>
            {children}
        </StreamContext.Provider>  
    );
}
