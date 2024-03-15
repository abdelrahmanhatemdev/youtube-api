import { useState } from "react";

function SearchBar({getSearch}) {
    const [search, setSearch] = useState("")

    function handlesubmit(e){
        e.preventDefault();
        getSearch(search)
    }

    return (
        <>
            <search>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
                    <button type="submit">Sreach</button>
                </form>
                
            </search>
        </>
    )
}
export default SearchBar;