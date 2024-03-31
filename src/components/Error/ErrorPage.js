import { useState } from 'react';
import { useRouteError } from "react-router-dom";
import {Aside, NavBar} from "..";
import Categories from "../Category/Categories";
import ErrorIcon from "../Error/ErrorIcon";
import "./ErrorPage.css";

export default function ErrorPage({type}) {
    let error = useRouteError();
    
    if (error) {
        error = error.data;
    }
    let header, details, more;
    const [infoShow, setInfoShow] = useState(false);

    console.log(error);

    if (error==="requestLimit") {
        header = <h1>Youtube API Quota</h1>;
        details= <>
                    <p>You exceeded your Daily Request <strong> Quota Limit</strong> !</p>
                    <p>Give it another try <strong className='bold'>tomorrow</strong> !</p>

                </>;
        more = <div className='more'>
                    <span onClick={() => setInfoShow(!infoShow)}>More</span>
                    <div className={'info ' + (infoShow ? "open" : "")}>
                        <p>
                            The YouTube Data API uses a quota system to ensure that developers use the service as intended and do not create API clients that unfairly reduce service quality or limit access for others.
                        </p>
                        <p>
                            Projects that enable the YouTube Data API have a default quota allocation of 10,000 units per day, an amount sufficient for the majority of our API users. You can see your quota usage on the Quotas page in the API Console.
                        </p>
                
                    </div>
                </div>;
    }else{
        header = <h1>Not Found</h1>;
        details= <p> <strong>Error: </strong>{error ? error.replace("Error:", "") : <span>Something went <strong className='bold'>wrong</strong>!</span>}</p>
    }

    return (
        <>
        <aside>
            <Aside/>
        </aside>
        <main>
            <NavBar/>
            <section className='content'>
                <Categories/>
                <div className='error-page'>
                    <div className='panel'>
                        <div className='header'>
                            {header}
                        </div>
                        <div className="body">
                            <div className='details'>
                                {details}
                                {more}
                            </div>
                            <div className='icon'>
                                <ErrorIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
        
    )
}
