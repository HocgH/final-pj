

import RowMovies from '../components/RowMovies';
import Wall from '../components/Wall';
import requests from '../Requests';


const Home = () => {

  return (
    <div>
        <Wall/>
        <RowMovies ownID= '1' title='Popular ' fetchURL={requests.requestPopular}/>
        <RowMovies ownID= '2' title='Trending ' fetchURL={requests.requestTrending}/>
        <RowMovies ownID= '3' title='UpComing' fetchURL={requests.requestUpcoming}/>
        <RowMovies ownID= '4' title='What people loves ' fetchURL={requests.requestTopRated}/>
        <RowMovies ownID= '5' title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  );
}

export default Home;