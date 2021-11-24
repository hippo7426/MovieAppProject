import React from 'react';
import './Home.css';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
    }

    getMovies = async () => {
        const { data: {
            results
        } } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=219db60224db73e0c3bf1948f3e9a86a&language=ko-KR&page=1");
        this.setState({movies:results});
    }

    componentDidMount() {
        this.getMovies();
    }
    render() {
        return (
            // 'children' props 를 사용하여 수정 가능
            <div className="home_wrapper">
                <HomeSection movies={this.state.movies}/>
                <HomeSection />
                <HomeSection />
            </div>
        )
    }
}

function HomeSection(props) {

    return (
        <div className="home_section">
            <HomeCategory />
            <HomeMovies movies={props.movies}/>
        </div>

    )
}

function HomeCategory() {

    return <div className="movies_category"> Movie Category</div>;
} 

function HomeMovies(props) {
    console.log(props.movies);
    return (<div className="movies">
        {props.movies && props.movies.map(movie=>{
            return <img className="movies_poster" key={movie.id} alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} height="200"/>;
        })}
    </div>);
}


export default Home;