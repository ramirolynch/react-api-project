export interface Streams {
    
    data:Stream[];
}

export interface Stream {
    user_id:string;
    user_name:string;
    game_name:string;
    title:number;
    viewer_count:number;
    thumbnail_url:string;
    is_mature:boolean;
}

export interface Games {
    data:Game[];
}

export interface Game {
    id:string;
    name:string;
    box_art_url:string;
}

export interface Searched {
    data:Channel[];
}

export interface Channel {
    broadcaster_language:string;
    broadcaster_login:string;
    display_name:string;
    game_id:string;
    game_name:string;
    id:string;
    is_live:boolean;
    tags_ids:string[];
    thumbnail_url:string;
    title:string;
    started_at:string;
}

