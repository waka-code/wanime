import React from 'react'
import { NavLink } from 'react-router-dom';
import { ChildProps } from '../InterfaceListAnime';
import "./Animesearch.css"




function Animesearch(props: ChildProps ) {
  return (
    <div className='boxAnimeSearch'>
      {props.filteredSearch.map((items) => {
          return (
            <NavLink to={`/${items._id}`} className="boxListSearchAnime">
              <span>{items.title}</span>
            </NavLink>
          );
        })}
    </div>
  )
}

export default Animesearch