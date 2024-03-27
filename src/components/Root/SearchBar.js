import { useState } from "react";
import { Form, useNavigate, useParams  } from "react-router-dom";

function SearchBar({getSearch}) {
    const params = useParams();
    const searchParam = params.search ? params.search : "";
    const [search, setSearch] = useState(searchParam);
    const navigate = useNavigate();
    

    function onSubmit(e) {
        e.preventDefault()
        const url = "/search/" + search;

        navigate(url)
    }

    return (
        <>
            <search>
                <Form onSubmit={onSubmit} action="/search">
                    <input name="search" type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
                        <button type="submit">
                        <svg>
                            <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                        </svg>
                    </button>
                </Form>
                
            </search>
        </>
    )
}
export default SearchBar;