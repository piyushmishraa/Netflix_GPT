

import Header from './Header';

import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';




const Browse = () => {

  useGetNowPlayingMovies();
 
  return (
    <div>
    <Header/>
    
    </div>
  )
}

export default Browse