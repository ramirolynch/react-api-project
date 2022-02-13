import { useState } from "react";
import { isTemplateExpression } from "typescript";
import { Stream } from "../Models/Stream";


export function Result(props:{stream:Stream}) {
    

    return (
        <div>
            <ul><li>This is one result</li>
                <li>User name: {props.stream.user_name}</li> 
                <li>Channel title: {props.stream.title}</li> 
                { props.stream.thumbnail_url.length > 0 ? <li>Channel Thumbnail:<img src={props.stream.thumbnail_url}/></li> : <li>There is no thumbnail</li> }
            </ul>
        
        </div>
    
);
}
            
