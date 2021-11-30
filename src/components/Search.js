import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import './Search.css';


export default function Search() {
    const [value, setValue] = useState("");
    const params = useParams();

    useEffect(() => {
        console.log(params.title);
        if (params.title)
            setValue(params.title);
        else
            setValue("");
    }, [params]);



    return <div>
        <div className="input_wrapper">
            <input key={value}
                defaultValue={value}
            ></input>
        </div>
        <Outlet />;
    </div>
}

