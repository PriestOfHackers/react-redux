import React from 'react'
import Photo from './Photo'


function PhotoWall(props){

 return<div>
        <a onClick={props.onNavigate} className="addIcon" href="#addPhoto"></a> 
        <div className="photoGrid">
        {props.posts.map((post , index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>     
}



export default PhotoWall;