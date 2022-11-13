

import RowMovies from '../components/RowMovies';
import Wall from '../components/Wall';
import requests from '../Requests';


const Home = () => {

  return (
    <div>
        <Wall/>
        <RowMovies title='Popular ' fetchURL={requests.requestPopular}/>
        <RowMovies title='Trending ' fetchURL={requests.requestTrending}/>
        <RowMovies title='UpComing' fetchURL={requests.requestUpcoming}/>
        <RowMovies title='What people loves ' fetchURL={requests.requestTopRated}/>
        <RowMovies title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  );
}

export default Home;