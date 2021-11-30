import React from 'react';
import { useParams } from 'react-router';
import './Search.css';

export default function SearchResult(){
    let params = useParams();
    return <h1 style={{color:'white'}}>{params.title}</h1>
}