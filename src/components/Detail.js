import React from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './Detail.css';

function Detail({media}) {
    let params = useParams();

    if (media === "movie"){
        console.log(media);
        return <MovieDetail key={params.movieId} id={params.movieId} />;
    }
    else if(media==="TV"){
        console.log(media);
        return <TVDetail key={params.tvId} id={params.tvId}/>;
    }
}

class MovieDetail extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            info: undefined,
            cast: undefined,
            trailer: undefined,
            recommend: undefined,
            review: undefined,
        };
    }

    getData = async () => {

        const { data: info } = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR`);
        this.setState({ info });

        const { data: {
            results: trailer
        } } = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR`)
        this.setState({ trailer })
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        return <div className="detail_wrapper">
            <MovieInfo data={this.state.info} trailer={this.state.trailer} />
        </div>

    }
}

class TVDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: undefined,
            cast: undefined,
            trailer: undefined,
            recommend: undefined,
            review: undefined,
            season:undefined,
        };
    }

    getData = async () => {

        const { data: info } = await axios.get(`https://api.themoviedb.org/3/tv/${this.props.id}?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR`);
        this.setState({ info });

        const { data: {
            results: trailer
        } } = await axios.get(`https://api.themoviedb.org/3/tv/${this.props.id}/videos?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR`)
        this.setState({ trailer })
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        return <div className="detail_wrapper">
            <TVInfo data={this.state.info} trailer={this.state.trailer} />
        </div>

    }
}

function MovieInfo(props) {
    const data = props.data;
    const trailer = props.trailer;
    return props.data ?
        <div className="info_wrapper">
            <div className="info_back" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }}>
            </div>
            <div className="info">
                <div className="info_main">             
                        <h1>{data.title}</h1>
                        <p>🌟{data.vote_average}<span> ⚬ </span>{data.release_date}<span> ⚬ </span> {data.runtime} min  <span> ⚬ </span>
                            {(data.genres.map((genre) => {
                                return genre.name
                            })).join(' / ')}
                        </p>
                        <p className ="info_overview">{data.overview}</p>
                        <Trailer trailer={trailer} />
                    </div>
                <div className="info_poster" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}>
                </div>
            </div>
        </div> : null
}

function TVInfo(props) {
    const data = props.data;
    const trailer = props.trailer;
    return props.data ?
        <div className="info_wrapper">
            <div className="info_back" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }}>
            </div>
            <div className="info">
                <div className="info_main">             
                        <h1>{data.name}</h1>
                        <p>🌟{data.vote_average}<span> ⚬ </span>{data.first_air_date}<span> ⚬ </span> {data.episode_run_time[0]} min  <span> ⚬ </span>
                            {(data.genres.map((genre) => {
                                return genre.name
                            })).join(' / ')}
                        </p>
                        <p className ="info_overview">{data.overview}</p>
                        <Trailer trailer={trailer} />
                    </div>
                <div className="info_poster" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}>
                </div>
            </div>
        </div> : null
}

function Cast() {

}

function Trailer({ trailer }) {

    return (trailer ?

        <div className="trailer">{
            trailer.map((video) => {
                return <iframe key={video.key} title={video.name} allowFullScreen
                    src={`https://www.youtube.com/embed/${video.key}`}></iframe>
            })
        }

        </div> : null
    );
}

function Recommend() {

}

function Review() {

}

function Seasons() {

}

export default Detail;