import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './Search.css';

export default function SearchResult(){
    const params = useParams();
    const [ data, setData ] = useState({
        movie:[],
        tv:[], 
    })
    useEffect(()=>{
        

    }, [params]);

    return <h1 style={{color:'white'}}>{params.title}</h1>
}

function MovieResult(props) {
    //console.log("movie!");
    //console.log(props.movie);
    return (
        <div className="home_section">
            <div className="contents_category">{
                props.movie ? "Movie" : null}</div>
            <ContentResult media="movie" contents={props.movie} />
        </div>
    )
}

function TVResult(props) {
    //console.log("tv!");
    //console.log(props.tv);
    return (
        <div className="home_section">
            <div className="contents_category">{
                props.tv ? "TV" : null}</div>
            <ContentResult media="TV" contents={props.tv} />
        </div>
    )
}

function ContentResult(props) {
    return (
        <div className="contents">
            {props.contents && props.contents.map(content => {
                return <Link key={content.id} to={
                    (() => {
                        if (props.media === "movie") {
                            return `/movie/${content.id}`;
                        } else if (props.media === "TV") {
                            return `/TV/${content.id}`;
                        }
                    })()
                } >
                    <div className="contents_poster"
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${content.poster_path})` }}>
                    </div>
                </Link>;
            })}
        </div>
    );
}
