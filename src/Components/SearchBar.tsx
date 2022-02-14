import { useContext, useState } from "react";
import { StreamContext } from "../Context/StreamsContext";


export function SearchBar(props: {onSubmit: (channelSearch:string) => void}) {

    const [channelSearch, setChannelSearch] = useState('')

    const { setSearch } = useContext(StreamContext)

    return (

        <div>
            <input value={channelSearch} onChange={(e) => setChannelSearch(e.target.value)} type='text' name='channelSearch'/>
            <button onClick={() => setSearch(channelSearch)}>Search</button>
        </div>
    );
}