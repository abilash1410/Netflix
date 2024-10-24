import React from 'react'

import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const PrimaryContainer = () => {
const movieList = useSelector((store) => store.moviesNow?.moviesNow);
if(!movieList) return;

const mainMovie = movieList[0];
const {original_title,overview,id} = mainMovie;

console.log(mainMovie);
  return (
    <div className="bg-black">
        <VideoTitle title = {original_title} overview = {overview}/>
        <VideoBackground  page = {'mainTrailer'} movieID ={id} /></div>
  )
}
export default PrimaryContainer
