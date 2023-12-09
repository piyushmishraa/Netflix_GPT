import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import Header from './Header';

import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';




const Browse = () => {

  useGetNowPlayingMovies();
 
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse