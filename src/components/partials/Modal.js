import React, {useEffect, useRef } from 'react'
import "./Modal.css";

export default function Modal({ children, show, setShow}) {
    
    const ref = useRef();

    useEffect(() => {
        document.getElementsByClassName("root")[0].appendChild(ref.current)

    }, [])

    return (
        <div className= {'modal-container ' + (show ? "open" : "")} ref={ref}>
            <div className='modal-backdrop' onClick={() => setShow(false)}></div>
            <div className='modal'>
              {children}
            </div>
        </div>
        
    )
}
