import React, {useState, useEffect} from 'react';

import axios from 'axios';
import OneMovie from './OneMovie';

const RowMovies = (props) => {
  
  const [movies, setMovies] = useState([]);


  useEffect( () => {
    axios.get(props.fetchURL).then((response) => {
        setMovies(response.data.results);
    })
  }, [props.fetchURL]);


  
    return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{props.title}</h2>
        <div className='relative flex items-center'>

            <div id={'slider'}>

                {movies.map((item, id) => (
                    <OneMovie key = {id} item = {item}/>
                ))}

            </div>

        </div>
    </div>
  );
}

export default RowMovies;