import React, {useState, useEffect} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
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
        <div className='relative flex items-center group'>

            <MdChevronLeft className='bg-white rounded-full opacity-40 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block ml-3' size={30}/>

            <div id={'slider'} className=" relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide " >

                {movies.map((item, id) => (
                    <OneMovie key = {id} item = {item}/>
                ))}

            </div>

            <MdChevronRight className='bg-white rounded-full opacity-40 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block mr-3' size={30}/>

        </div>
    </div>
  );
}

export default RowMovies;