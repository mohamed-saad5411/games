import React, { useEffect, useState } from 'react'
import styles from './Shooter.module.css'
import axios from 'axios'


export default function Shooter() {

  const [shooterList, setShooterList] = useState([])

  async function getShooterGames() {

    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: { category: 'shooter' },
      headers: {
        'X-RapidAPI-Key': '14943b72e7mshcd54d538d7abf71p18bfaajsnacbfc639325b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let { data } = await axios.request(options)
    setShooterList(data)
  }

  useEffect(() => {
    //call api
    getShooterGames()
  }, [])

  return (
    <>
      <section id='card' className='custom-margin container'>
        <div className="row gy-4">
          {shooterList.map((game) =>
            <div className="col-md-3">
              <div className="card pointer bg-dark">
                <img src={game.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='d-flex justify-content-between align-items-center'>
                  <h5 className="card-title">{game.title.length > 13 ? game.title.slice(0,13) + ' ....' : game.title}</h5>
                    <a href="#" className="btn btn-primary btn-sm py-0">FREE</a>
                  </div>
                  <p>{game.short_description.slice(0,24) +' ....'}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <i class="fa-solid fa-square-plus"></i>
                    <div className='d-flex align-items-center'>
                      <button className='text-black btn btn-secondary btn-sm py-0'>{game.genre}</button>
                      {game.platform == "PC (Windows)" ? <i className="fa-brands fa-windows ps-2"></i> : <i className="fa-solid fa-window-maximize ps-2"></i>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
        <button className='btn btn-outline-primary btn-custom m-auto my-5'>SEE MORE <i class="fa-solid fa-chevron-right"></i></button>
      </section>
    </>

  )

}
