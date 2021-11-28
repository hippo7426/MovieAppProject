import React from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            fav: {},
        };
    }
    categoryMovie = ["Popular", "Upcoming", "Top Rated"];
    categoryTV = ["Popular", "On Air", "Top Rated"];

    getMovies = async () => {
        console.log("getMovies!");
        const movies = [];
        const { data: {
            results: popular
        } } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");
        movies.push(popular);

        const { data: {
            results: upComing
        } } = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");
        movies.push(upComing);

        const { data: {
            results: top
        } } = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");
        movies.push(top);
        this.setState({ contents: movies });

        const { data: fav } = await axios.get("https://api.themoviedb.org/3/movie/313369?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US");
        this.setState({ fav });
    }

    getTVs = async () => {
        console.log("getTVs!");
        const TVs = [];
        const { data: {
            results: popular
        } } = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");
        TVs.push(popular);

        const { data: {
            results: upComing
        } } = await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");
        TVs.push(upComing);

        const { data: {
            results: top
        } } = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");
        TVs.push(top);
        this.setState({ contents: TVs });

        const { data: fav
        } = await axios.get("https://api.themoviedb.org/3/tv/66732?api_key=219db60224db73e0c3bf1948f3e9a86a&language=en-US");
        this.setState({ fav });
    }

    componentDidMount() {
        const field = this.props.field;
        if (field === "movie")
            this.getMovies();
        else if (field === "TV")
            this.getTVs();
    }
    render() {
        const field = this.props.field;
        return (
            // 'children' props 를 사용하여 수정 가능
            <div className="home_wrapper">
                <div className="fav" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.fav.backdrop_path})` }}>
                    <h1>Welcome!</h1>
                </div>
                {
                    (() => {
                        if (field === "movie") {
                            return this.categoryMovie.map((title, index) => {
                                return <HomeSection key={title} category={title} media="movie" contents={this.state.contents[index]} />
                            }, this);
                        } else if (field === "TV") {
                            return this.categoryTV.map((title, index) => {
                                return <HomeSection key={title} category={title} media="TV" contents={this.state.contents[index]} />
                            }, this);
                        }
                    })()
                }

            </div>
        )
    }
}

function HomeSection(props) {
    return (
        <div className="home_section">
            <div className="contents_category">{props.category ? props.category : "N/A"}</div>;
            <HomeContents media={props.media} contents={props.contents} />
        </div>

    )
}

function HomeContents(props) {
    //console.log(props.contents);
    return (
        <div className="contents">
            {props.contents && props.contents.map(content => {
                // return <img className="contents_poster" key={content.id} alt={content.title}
                //     src={`https://image.tmdb.org/t/p/w500${content.poster_path}`} height="300px" />;
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


export default Home;
