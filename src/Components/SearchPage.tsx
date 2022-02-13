import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Stream, Streams } from  "../Models/Stream";
import { getStreamResponse } from "../Service/TwitchApi";
import { Result } from "./Result";



export function SearchPage() {

     const { streamList} = useContext(StreamContext)


       return(
   
           <div>

            { streamList.map(stream => <Result key={stream.user_id} stream={stream}></Result>)}
              
           </div>
   
       );
   

   }
   
   
   

