import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import './Search.css';


export default function Search() {
    const [value, setValue] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //console.log(params.title);
        if (params.title)
            setValue(params.title);
        else
            setValue("");
    }, [params]);

    return <div className="search_wrapper">
        <div className="input_wrapper">
            <input id="search_input" key={value}
                defaultValue={value} type="search" autoComplete="off"
                placeholder="Enter the Title of Content" onKeyPress={(event)=>{
                    if(event.key==='Enter'){
                        navigate(`/Search/${event.target.value}`)
                    }
                }}
            />
        </div>
        <Outlet />
    </div>
}

