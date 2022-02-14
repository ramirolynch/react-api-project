import { useState } from "react";
import { SearchBar } from "./SearchBar";


export function Header() {

    const [channelSearch, setChannelSearch] = useState('');

    function setSearch(search:string) {

        setChannelSearch(search);
    }

    return (

        <div>
            Twitch App
            <SearchBar onSubmit={setSearch}></SearchBar>
        </div>
    );
}