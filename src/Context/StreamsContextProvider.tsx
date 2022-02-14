import {  ReactNode, useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import { Channel, Game, Games, Searched, Stream, Streams } from "../Models/Stream";
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

    const [gamesList, setGamesList] = useState<Game[]>([]);

    function fetchGames() {
        axios.get<Games>(`https://api.twitch.tv/helix/games/top`, {
            headers : {
                'Authorization': `Bearer ${accessToken}`,
                'Client-Id': `${clientID}`
            }
        })
        .then(response =>setGamesList(response.data.data))
    } 

    useEffect(()=> {
        fetchStreams();
        fetchGames();
        searchChannels();
    },[]);

    const [favorites, setFavorites] = useState<Stream[]>([])

    function addFave(stream:Stream) {
        setStreamList([...favorites,stream]);
    }

    function removeFave(id:string) {
        setFavorites(favorites.filter((stream)=> stream.user_id != id));
    
    }

    const [searchTerm, setSearchTerm] = useState('')

    function setSearch(str:string) {
        setSearchTerm(str)
        console.log(str)
    }

    const [channelList, setChannels] = useState<Channel[]>([]);

    function setChannel(channel:Channel[]) {
        setChannels(channel)
    }

    function searchChannels(){

        return axios.get<Searched>(`https://api.twitch.tv/helix/search/channels`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Client-Id': `${clientID}`,
                'query': searchTerm,
            }
        })
        .then(response=>setChannels(response.data.data))
    }

    return (

        <StreamContext.Provider value={{ channelList, setChannel, searchTerm, setSearch, gamesList, streamList, favorites, addFave, removeFave}}>
            {children}
        </StreamContext.Provider>  
    );
}
