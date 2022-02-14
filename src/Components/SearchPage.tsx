import { useContext, useEffect, useState } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Channel, Searched } from "../Models/Stream";
import { searchChannel } from "../Service/TwitchApi";
import { ChannelSearched } from "./Channel";
import { Result } from "./Result";



export function SearchPage() {

     const {searchTerm, channelList, streamList } = useContext(StreamContext)

     

    //  useEffect(() => {
    //      if (searchTerm !== '') {            
    //      searchChannel(searchTerm).then(response =>setChannels(response.data))
    //  }},[searchTerm])


    // channels.map(channel => <ChannelSearched key={channel.id} channel={channel}></ChannelSearched>) 


       return(
   
           <div>

            { channelList.length > 0 ? channelList.map(channel => <ChannelSearched key={channel.id} channel={channel}></ChannelSearched>)  : streamList.map((stream, i)=> <Result key={i} stream={stream}></Result>) }
              
           </div>
   
       );
   

   }
   
   
   

