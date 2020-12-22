import React from 'react';
import {Row, Col} from 'antd';
import useFetch from '../hooks/useFetch';
import { URL_API, API} from '../utils/constants';
import SliderMovies from '../components/SliderMovies';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export default function Home(){
    // const movies = useFetch(
    //     'https://api.themoviedb.org/3/movie/popular?api_key=abb68e00ebb4286d4cc59331aa867476&language=es-ES&page=1')

    const newMovies = useFetch(
        `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
    )

    const popularMovies = useFetch(
        `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
    )

    const topRatedMovies = useFetch(
        `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
    )

    return (
        <>
            <SliderMovies movies={newMovies}/>
            <Row>
                <Col span={12}
                >
                <MovieList title='Peliculas Populares' movies={popularMovies}/>
                </Col>
                <Col span={12}>
                
                <MovieList title='Top Mejores Peliculas Puntuadas' movies={topRatedMovies}/>
                </Col>
            </Row>
            <Footer/>
            </>
    )
}