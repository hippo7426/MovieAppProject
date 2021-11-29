import React, {useState} from 'react';
import { useSearchParams} from 'react-router-dom';
import './Search.css'


function Search() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [title, setTitle] = useState("");
    let [main, setMain] = useState(true);

    if (searchParams.get("title")===null){
        if(!main){
            setMain(true);
            setTitle(null);
        }
    }
    
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
                onKeyPress={(event)=>{
                    if(event.key === 'Enter'){
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

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.title === this.props.title)
            return false;
        return true;
    }

    //for test
    componentDidUpdate(){
        console.log(this.props.title);
        console.log("updated!");
    }

    render(){
        return <h1>{this.props.title}</h1>
    }
}


function MovieResult() {

}

function TVResult() {

}

export default Search;