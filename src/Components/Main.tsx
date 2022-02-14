import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Stream, Streams } from "../Models/Stream";
import { getStreamResponse } from "../Service/TwitchApi";
import { SearchResults } from "./SearchResults";


export function Main() {

    const[streams, setStreams] = useState<Stream[]>([]);
    const [searchTerm, setSearchTerm]= useState('')
    
   
    useEffect(()=>{ 
        
    getStreamResponse().then(response => setStreams(response.data));
             

    },[])
   
      
    
   
       
           function setSearch(searchTerm: string){
               setSearchTerm(searchTerm)
           }
   

    return (

        <div>
            <NavLink to='/'>Search</NavLink>
            <NavLink to='/topgames'>Top Games</NavLink>
            <NavLink to='/Favorites'>Favorites</NavLink>
    
        </div>
    );
}