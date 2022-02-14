import { Channel, Game, Stream } from "../Models/Stream";
import { createContext} from 'react';



export interface StreamContextModel {
    searchTerm:string;
    streamList:Stream[];
    channelList:Channel[];
    gamesList:Game[];
    favorites:Stream[];
    addFave:(stream:Stream)=>void;
    removeFave:(id:string)=>void;
    setSearch:(str:string)=>void;
    setChannel:(channel:Channel[])=>void;
}


const defaultValue:StreamContextModel = {
    searchTerm:'',
    channelList:[],
    gamesList:[],
    streamList:[],
    favorites:[],
    addFave:()=>{},
    removeFave:()=>{},
    setSearch:()=>{},
    setChannel:()=>{},
}

export const StreamContext = createContext<StreamContextModel>(defaultValue);
