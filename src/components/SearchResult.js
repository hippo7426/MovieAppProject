import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Search.css';

export default function SearchResult() {
    const params = useParams();
    const [data, setData] = useState({
        movie: [],
        tv: [],
    })

    // params.title = null 일 때, 즉 /Search/ 에 있을 때는 SearchResult 컴포넌트가 렌더링 되지 않음, 따라서 체크할 필요 없음
    useEffect(() => {

        async function searchData() {
            const { data: {
                results: movie
            } } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US&query=${params.title}&page=1&include_adult=false`);
            // console.log(movie);
            const { data: {
                results: tv
            } } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US&query=${params.title}&page=1&include_adult=false`);
            // console.log(tv);
            setData({ tv, movie });
        }
        searchData();
        //console.log(data);
        //console.log(params.title);
    }, [params]);

    // 에러 발생 코드 - 이유 확인 및 관련 사항 공부
    // useEffect(()=>{
    //     function getData(){
    //         searchMovie();
    //         searchTV();
    //     }

    //     async function searchMovie(){
    //         const {data :{
    //             results : movie
    //         }} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US&query=${params.title}&page=1&include_adult=false`);
    //         console.log(movie);
    //         setData({...data, movie}); // <= setData가 2개라 개별적인 통신이 끝날 때마다 리 렌더링 발생.

    //     }

    //     async function searchTV(){
    //         const {data:{
    //             results :tv
    //         }} = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US&query=${params.title}&page=1&include_adult=false`);
    //         console.log(tv);
    //         setData({...data, tv}); // <= API 에서 데이터를 받아오는데 시간차가 발생하면 추후에 실행된 setDate의 ...data 는 기존 빈 배열 프로퍼티를 가리키므로 오류 발생
    //                                  // 클래스형 컴포넌트는 항상 최신 state를 가져오므로 오류가 없었음, 함수형 컴포넌트라서 생긴 문제로 보임
    // }
    //     getData();
    //     console.log(data);
    //     console.log(params.title);
    // }, [params]);


    return <div>
        <h1 id="searchTitle" >{params.title}</h1>
        <MovieResult movie={data.movie} />
        <TVResult tv={data.tv} />
    </div>
}

function MovieResult(props) {
    //console.log("movie!");
    //console.log(props.movie);
    return (
        <div className="home_section">
            <div className="contents_category">{
                props.movie.length ? "Movie" : null}</div>
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
                props.tv.length ? "TV" : null}</div>
            <ContentResult media="TV" contents={props.tv} />
        </div>
    )
}

function ContentResult(props) {
    return (
        <div className="contents">
            {props.contents.length && props.contents.map(content => {
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
