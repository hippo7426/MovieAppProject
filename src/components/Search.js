import React from 'react';
import {Outlet} from 'react-router-dom';
import './Search.css';


export default function Search(){
    return <div>
        <h1 style={{color:'white'}}>main</h1>
        <Outlet/>;
        </div>
}