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


  const slideLeft = () => {
    let slider = document.getElementById('slider' + props.ownID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  
  const slideRight = () => {
    let slider = document.getElementById('slider' + props.ownID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }


  
    return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{props.title}</h2>
        <div className='relative flex items-center group'>

            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full opacity-40 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block ml-2' size={30}/>

            <div id={'slider' + props.ownID} className=" relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide " >

                {movies.map((item, id) => (
                    <OneMovie key = {id} item = {item}/>
                ))}

            </div>

            <MdChevronRight onClick={slideRight} className='bg-white rounded-full opacity-40 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block mr-2' size={30}/>

        </div>
    </div>
  );
}

export default RowMovies;