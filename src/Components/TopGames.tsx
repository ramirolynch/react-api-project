import { useContext } from "react";
import { StreamContext } from "../Context/StreamsContext";
import { TopGame } from "./TopGame";

export function TopGames() {

    const { gamesList} = useContext(StreamContext)


      return(
  
          <div>

           { gamesList.map(game=> <TopGame key={game.id} game={game}></TopGame>)}
             
          </div>
  
      );

  }
  


  
  