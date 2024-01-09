import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import Header from './Header';

import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTrendingMovies from '../hooks/useGetTrendingMovies';
import { addUpcomingMovies } from '../utils/movieSlice';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies';




const Browse = () => {

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTrendingMovies();
  useGetUpcomingMovies();

 
  return (
    <div className="">
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse