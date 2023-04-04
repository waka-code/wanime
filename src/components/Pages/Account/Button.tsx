import React from 'react'
import ListAnimeLogic from '../listAnime/useListAnimeLogic';

export default function Button() {
    const { currentPage, totalPages, prev, next } =
    ListAnimeLogic();
  return (
    <section className="box_btn">
        <button onClick={prev}>Prev</button>
        <span>{currentPage / totalPages}</span>
        <button onClick={next}>Next</button>
      </section>
  )
}
