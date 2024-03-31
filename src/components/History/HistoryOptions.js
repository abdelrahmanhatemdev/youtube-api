import { useState, useCallback } from 'react'
import { searchHistory, clearHistory, getHistory } from "../../helpers/data";
import Modal from "../Root/Modal";

export default function HistoryOptions({setVideos}) {
    const [search, setSearch] = useState();  
    const [showModal, setShowModal] = useState(false);   
    const handleSearch = useCallback(() => searchHistory(search) ,[search])
    const videos = getHistory();
   

    return (
        <>
            {videos && <div className="options">
                <div className='option search'>
                    <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M400 208A192 192 0 1 0 16 208a192 192 0 1 0 384 0zM349.3 360.6C312.2 395 262.6 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 54.6-21 104.2-55.4 141.3l149 149c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-149-149z"/>
                    </svg>
                    </span>
                    <input name="search" type="text" placeholder="Search watch history" value={search} onChange={(e) => {
                        setSearch(e.target.value)
                        
                        const searchVideos = handleSearch(e.target.value);
                        setVideos(searchVideos)
                    }}/>
                        
                        
                </div>

                 <div className="option" onClick={() => setShowModal(true)}>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M177.7 16h92.5c8.3 0 16 4.3 20.4 11.3l23 36.7H134.4l23-36.7c4.4-7 12.1-11.3 20.4-11.3zm-33.9 2.8L115.6 64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H332.4L304.2 18.8C296.9 7.1 284.1 0 270.3 0H177.7c-13.8 0-26.6 7.1-33.9 18.8zM48 119.3c-.4-4.4-4.2-7.7-8.6-7.3s-7.7 4.2-7.3 8.6l28.3 340c2.4 29 26.7 51.4 55.8 51.4H331.8c29.1 0 53.4-22.3 55.8-51.4l28.3-340c.4-4.4-2.9-8.3-7.3-8.6s-8.3 2.9-8.6 7.3l-28.3 340C370 480.1 352.6 496 331.8 496H116.2c-20.8 0-38.1-15.9-39.9-36.7L48 119.3z"/>
                        </svg>
                    </span>
                    <span className="title">Clear watch history ?</span>
                </div>
                
                
            </div>}
            <Modal show={showModal} setShow = {setShowModal}>
                        <div className='header'>
                            <h1 className='title'>Warning</h1>
                        </div>
                        <div className='body'>
                            <p>Your YouTube watch history will be cleared, are you sure?</p>
                        </div>
                        <div className='footer'>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                            <button className='active' onClick={() => {
                                clearHistory();
                                setShowModal(false)
                                setVideos(() => getHistory())
                                }}>Ok</button>
                        </div>
                </Modal>
        </>
        
    )
}
