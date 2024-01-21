import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import Header from './Header';

import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTrendingMovies from '../hooks/useGetTrendingMovies';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies';
import GptSearch from './GptSearch';




const Browse = () => {

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTrendingMovies();
  useGetUpcomingMovies();

 
  return (
    <div className="">
    <Header/>
    <GptSearch/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse