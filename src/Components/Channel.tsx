import { useState } from "react";
import { isTemplateExpression } from "typescript";
import { Channel } from "../Models/Stream";


export function ChannelSearched(props:{channel:Channel}) {
    

    return (
        <div>
            <ul>
                <li>Game name: {props.channel.game_name}</li> 
                <li>Channel title: {props.channel.title}</li> 
               <li>Is live?: {props.channel.is_live === false ? 'Offline' : 'Online'}</li>
               <li><img src={(props.channel.thumbnail_url).replace('{width}', '250').replace('{height}', '141')}/></li>
            </ul>
        
        </div>
    
);
}