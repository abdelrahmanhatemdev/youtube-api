import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Aside() {
    const [isOpen, setIsOpen ] = useState(false) 
    

    return (
        <div className={'list ' + (isOpen ? "open" : "")}>
            <Link to="/" className='toggle'>
                <span className={'icon'} onClick={() => setIsOpen(!isOpen)}>
                    <svg>
                        <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
                    </svg>
                </span>
            </Link>
            <span className='separator'></span>
            <Link to="/">
                <span className='icon'>
                    <svg >
                        <path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path>
                    </svg>
                </span>
                <span class="title">Home</span>
            </Link>
            <Link to="/">
                <span className='icon'>
                    <svg>
                        <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                    </svg>
                </span>
                <span class="title">Shorts</span>
            </Link>
            <span className='separator'></span>
            <Link to="/">
                <span className='icon'>
                    <svg>
                        <g>
                            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
                        </g>
                    </svg>
                </span>
                <span class="title">History</span>
            </Link>
            <Link to="/">
                <span className='icon'>
                    <svg>
                        <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                    </svg>
                </span>
                <span class="title">Watch Later</span>
            </Link>
          
        </div>
    )
}
