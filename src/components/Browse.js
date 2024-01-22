import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import Header from './Header';

import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTrendingMovies from '../hooks/useGetTrendingMovies';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';




const Browse = () => {

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTrendingMovies();
  useGetUpcomingMovies();

  const showGptsearch=useSelector(store=>store.gpt.showGptsearch)

 
  return (
    <div className="">
    <Header/>
    {
      showGptsearch?
      ( <GptSearch/>):
      (
        <> 
         <MainContainer/>
         <SecondaryContainer/>
        </>
      )
    }
   
   
    </div>
  )
}

export default Browse