import React from "react";
import {connect} from 'react-redux';
import {searchMovie,fetchMovies,searchByTitle,sortMovies,isActiveSearchBy,isActiveSortBy,setLoading} from '../../actions/index';
import './Search.css';

class Search extends React.Component {

    onChange = (e) => {
       this.props.searchMovie(e.target.value);
    };

    onSubmit = (e) => {
       e.preventDefault();
       this.props.fetchMovies(this.props.text, this.props.searchBy);
        this.props.setLoading();
    }

    sortBy = (e) => {
       e.preventDefault();
       this.props.sortMovies(e.target.textContent)
       this.props.isActiveSortBy();

    }
    searchBy = (e) => {
      e.preventDefault();
      this.props.isActiveSearchBy();
      this.props.searchByTitle(e.target.value)

    }
    componentDidMount() {
        this.props.isActiveSearchBy();
        this.props.searchByTitle('title')
    }

    render() {
        return (
            <div className='search__tools'>
                <div className='header'>
                    <div className='overlay'>
                        <div className="container">
                            <h2>Find your movie</h2>
                            <form className='form'
                                  onSubmit={this.onSubmit}
                                  action="">
                                <input type="text"
                                       className='input__search'
                                       placeholder='Input movie'
                                       onChange={this.onChange}/>
                                <div className='search__settings'>
                                    <p className='search__by__inscription'>Search by</p>
                                    <button className={`button search__by ${this.props.isActiveSearch && this.props.searchBy==='title'  ? 'active':''}`}
                                            onClick={this.searchBy}
                                            value='title'
                                            id='title'>Title</button>
                                    <button className={`button search__by ${this.props.isActiveSearch && this.props.searchBy==='genres' ? 'active':' '}`}
                                            onClick={this.searchBy}
                                            value='genres'
                                            id='genres'>Genre</button>
                                    <button type='submit' className='button'>Submit</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className ='section__result'>
                    <div className='container'>
                        <div className='settings'>
                            <p className='result__movies'>{this.props.movies.movies.length} movies found</p>
                            <div className='sort'>
                                <p className='sort__by__inscription'>Sort by</p>
                                <p  onClick={this.sortBy} className={`sort__by release ${this.props.isActiveSort && this.props.sortBy==='release date'  ? 'activeSort':''}`}>release date</p>
                                <p   onClick={this.sortBy} className={`sort__by rating ${this.props.isActiveSort && this.props.sortBy==='rating'  ? 'activeSort':''}`} >rating</p>
                            </div></div>
                    </div>

                </div>
            </div>

        )
    }
}
const  mapStateToProps = (state) => ({
    text: state.movies.text,
    searchBy: state.movies.searchBy,
    sortBy:state.movies.sortBy,
    movies:state.movies,
    isActiveSearch: state.movies.isActiveSearchBy,
    isActiveSort:state.movies.isActiveSortBy


} )

export default connect(mapStateToProps,{searchMovie,fetchMovies,searchByTitle,sortMovies,isActiveSearchBy,isActiveSortBy,setLoading})(Search);
