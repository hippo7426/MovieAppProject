import React from 'react';
import './Home.css';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            movies: [],
            category:["Popular", "Upcoming", "Top Rated",]
         };
    } 
   
    getMovies = async () => {
        const movies=[];
        const { data: {
            results : popular
        } } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");
        movies.push(popular);

        const { data: {
            results : upComing
        }} = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");
        movies.push(upComing);

        const { data : {
            results : top
        }} = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=2");
        movies.push(top);
        this.setState({movies});
    }


    componentDidMount() {
        this.getMovies();
    }
    render() {
        return (
            // 'children' props 를 사용하여 수정 가능
            <div className="home_wrapper">
                {this.state.category.map((title, index)=>{
                    console.log(title);
                    return <HomeSection key={title} category={title} movies={this.state.movies[index]} />
                }, this)}
            </div>
        )
    }
}

function HomeSection(props) {

    return (
        <div className="home_section">
            <HomeCategory title={props.category} />
            <HomeMovies movies={props.movies}/>
        </div>

    )
}

function HomeCategory(props) {

    return <div className="movies_category">{props.title?props.title:"N/A"}</div>;
} 

function HomeMovies(props) {
    console.log(props.movies);
    return (<div className="movies">
        {props.movies && props.movies.map(movie=>{
            return <img className="movies_poster" key={movie.id} alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} height="300px"/>;
        })}
    </div>);
}


export default Home;