import React from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'
//import styled from 'styled-components';


//how to use inline styles for particular elements
/*const photo =  styled.div` 
    width: calc(100% + 4rem);
    margin-left: -2rem;
    margin-top: -2rem;
    max-width: none;
   `;*/
   
function PhotoWall(props){

 return<div>
        <Link className="addIcon" to="/addPhoto"></Link> 
        <div className="photoGrid">
        {props.posts.map((post , index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>     
}



export default PhotoWall;