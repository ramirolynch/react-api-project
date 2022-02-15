import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Channel, Searched } from "../Models/Stream";
import { searchChannels } from "../Service/TwitchApi";
import { ChannelSearched } from "./Channel";
import { Result } from "./Result";

const accessToken = process.env.REACT_APP_TWITCH_ACCESS_TOKEN || '';
const clientID = process.env.REACT_APP_TWITCH_CLIENT_ID || '';



export function SearchPage() {

    const { streamList } = useContext(StreamContext);

     const [channelSearch, setChannelSearch] = useState('')

     const [channelList, setChannels] = useState<Channel[]>([]);


 function getChannels(searchTerm:string) {

    axios({
        method: 'get',
        url: `https://api.twitch.tv/helix/search/channels`,
        headers : {
            'Authorization': `Bearer ${accessToken}`,
            'Client-Id': `${clientID}`
        },
        params : {
            'query':channelSearch,
        }
    })
        .then(response=> { console.log(response.data)
            setChannels(response.data)})
        //.then(response=>{console.log(response)})

 }


       return(
   
        <div>

        <input value={channelSearch} onChange={(e) => setChannelSearch(e.target.value)} type='text' name='channelSearch'/>
        <button onClick={() =>{getChannels(channelSearch); console.log(channelSearch)}}>Search</button>

        { channelList.length > 0 ? channelList.map(channel => <ChannelSearched key={channel.id} channel={channel}></ChannelSearched>)  : streamList.map((stream, i)=> <Result key={i} stream={stream}></Result>) }
            
        </div>

    );

   }
   
   
   

