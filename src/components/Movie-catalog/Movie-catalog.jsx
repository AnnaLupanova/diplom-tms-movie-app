import React from 'react';
import {connect } from 'react-redux';
import MovieItem from "./MovieItem";


class MovieCatalog extends React.Component{
    render() {
        const { movies } = this.props;
        let content = '';

        content =
            movies.length>0
                ? movies.map((movie, index) => (
                    <MovieItem key={index} movie={movie} />
                ))
                : null;
        return <div className="container movieCatalog">{content}</div>;



    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})


export default connect(mapStateToProps)(MovieCatalog);


