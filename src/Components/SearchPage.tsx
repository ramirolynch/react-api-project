import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { Stream } from  "../Models/Stream";
import { Result } from "./Result";



export function SearchPage() {

    const { streamList } = useContext(StreamContext)

   
       return(
   
           <div>
   
               
            {/* {props.streams.map(stream => <Result key={stream.user_id} ></Result>)} */}
              
           </div>
   
       )
   
   
   }
   
   
   

