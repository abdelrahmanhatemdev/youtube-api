import { useState } from "react";

function SearchBar({getSearch}) {
    const [search, setSearch] = useState("")

    function handlesubmit(e){
        e.preventDefault();
        // getSearch(search)
    }

    return (
        <>
            <search>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
                    <button type="submit">
                    <svg>
                        <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    </svg>
                    </button>
                </form>
                
            </search>
        </>
    )
}
export default SearchBar;