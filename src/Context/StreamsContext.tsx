import { Stream } from "../Models/Stream";
import { createContext} from 'react';



export interface StreamContextModel {
    streamList:Stream[];
    favorites:Stream[];
  
    addFave:(stream:Stream)=>void;
    removeFave:(id:string)=>void;
}


const defaultValue:StreamContextModel = {
    streamList:[],
    favorites:[],
    addFave:()=>{},
    removeFave:()=>{}
}

export const StreamContext = createContext<StreamContextModel>(defaultValue);
