import { Game } from "../Models/Stream";

export function TopGame(props:{game:Game}) {
    

    return (
        <div>
            <ul>
                <li>User name: {props.game.name}</li> 
                <li><img src={(props.game.box_art_url).replace('{width}', '250').replace('{height}', '141')}/></li>
            </ul>
        
        </div>
    
);
}
           