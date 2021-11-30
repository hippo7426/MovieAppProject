import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './Search.css'

// 2가지 큰 문제로 인한 대규모 수정 필요
// 1. URL이 타이핑 할때마다 변경되어 뒤로가기를 한참해야함 -> input의 value값 동기화를 고려하면 해결 난해
// 2. URL로 이동 시 검색결과 안바뀜 -> title State가 Enter 시에만 변경되기 때문

function Search() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [title, setTitle] = useState(searchParams.get("title"));
    let [main, setMain] = useState(true);

    console.log(searchParams.get("title"));
    console.log(title);
    if (searchParams.get("title") === null) {
        if (!main) {
            setMain(true);
            setTitle(null);
            console.log("default!");
        }
    }

    // console.log(title);
    return <div className="search_wrapper">
        <div className="input_wrapper">
            <input
                placeholder="제목을 입력하세요 (Enter)"
                value={(searchParams.get("title") || "")}
                onChange={(event) => {
                    {
                        let title = event.target.value;
                        if (title) {
                            setSearchParams({ title });
                            setMain(false);
                        } else {
                            setSearchParams({});
                        }
                    }
                }}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        setTitle(searchParams.get("title"));
                    }
                }}
            >
            </input>
        </div>
        <div className="result_wrapper">
            <SearchResult title={title} />
        </div>
    </div>
}

//const MemoSearchResult = React.memo(SearchResult);

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foundMovie: false,
            foundTV: false,
            movie: {},
            tv: {},
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.title);
        console.log(this.props.title);
        // console.log(nextState.movie.total_result);
        // console.log(this.state.movie.total_results);

        // console.log(!(nextProps.title === this.props.title && nextState.movie.total_results === this.state.movie.total_results));
        if (nextProps.title === this.props.title && nextState.movie.total_results === this.state.movie.total_results && nextState.tv.total_results === this.state.tv.total_results) 
            return false;
        return true;
    }

    searchMovie = async () => {
        const { data: movie }
            = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US&query=${this.props.title}&page=1&include_adult=false`);
        //console.log(movie);
        if (movie.total_results === 0) {
            this.setState({ foundMovie: false, movie: {} })
        }
        else {
            this.setState({ foundMovie: true, movie });
        }
        //console.log(this.state.movie);
    }

    searchTV = async () => {
        const { data: tv }
            = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US&query=${this.props.title}&page=1&include_adult=false`);
        //console.log(movie);
        if (tv.total_results === 0) {
            this.setState({ foundTV: false, tv: {} })
        }
        else {
            this.setState({ foundTV: true, tv });
        }
    }
    searchData = () => {
        this.searchMovie();
        this.searchTV();
    }

    componentDidMount() {
        //console.log(this.props.title);
        if (this.props.title !== null)
            this.searchData();
    }

    componentDidUpdate() {
        //console.log(this.props.title);
        if (this.props.title !== null)
            this.searchData();
    }

    render() {
        //console.log("render1");
        //console.log(this.state.movie);
        const movie = this.state.movie.results;
        const tv = this.state.tv.results;
        return <div>
            <MovieResult movie={movie} />
            <TVResult tv={tv}/>
        </div>
    }
}


function MovieResult(props) {
    //console.log("render2");
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
    //console.log("render3");
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

export default Search;