import { useState } from "react";
import { isTemplateExpression } from "typescript";
import { Stream } from "../Models/Stream";


export function Result(props:{stream:Stream}) {
    

    return (
        <div>
            <ul>
                <li>User name: {props.stream.user_name}</li> 
                <li>Channel title: {props.stream.title}</li> 
               <li>Channel's viewer count: {props.stream.viewer_count}</li>
               <li><img src={(props.stream.thumbnail_url).replace('{width}', '250').replace('{height}', '141')}/></li>
            </ul>
        
        </div>
    
);
}
            
