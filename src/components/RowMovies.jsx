import React, {useState, useEffect} from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import axios from 'axios';

const RowMovies = (props) => {
  
  const [movies, setMovies] = useState([]);
  const [saveMovie, setSaveMovie] = useState(false);

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
                    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                            <p> {saveMovie ? <FaHeart className='absolute top-6 left-6 text-gray-400'/> : <FaRegHeart className='absolute top-6 left-6 text-gray-400'/>} </p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    </div>
  );
}

export default RowMovies;