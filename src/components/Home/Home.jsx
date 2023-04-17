import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {

  const [recommendationsGamesList1, setRecommendationsGamesList1] = useState([])
  const [recommendationsGamesList2, setRecommendationsGamesList2] = useState([])
  const [recommendationsGamesList3, setRecommendationsGamesList3] = useState([])

  async function getRecommendationsGames1() {

    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: '452' },
      headers: {
        'X-RapidAPI-Key': '14943b72e7mshcd54d538d7abf71p18bfaajsnacbfc639325b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let { data } = await axios.request(options)
    setRecommendationsGamesList1(data)

  }

  async function getRecommendationsGames2() {

    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: '412' },
      headers: {
        'X-RapidAPI-Key': '14943b72e7mshcd54d538d7abf71p18bfaajsnacbfc639325b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let { data } = await axios.request(options)
    setRecommendationsGamesList2(data)
  }

  async function getRecommendationsGames3() {

    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: '441' },
      headers: {
        'X-RapidAPI-Key': '14943b72e7mshcd54d538d7abf71p18bfaajsnacbfc639325b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let { data } = await axios.request(options)
    setRecommendationsGamesList3(data)
  }

  useEffect(() => {
    //call api
    getRecommendationsGames1()
    getRecommendationsGames2()
    getRecommendationsGames3()

  }, [])

  return (
    <>
      <header className={styles.home}>
        <div className='text-center h-100 d-flex align-items-center justify-content-center'>
          <div>
            <h6 className='h1'>Find & track the best <span className='text-info'>free-to-play</span> games!</h6>
            <p className='fw-light h5'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <Link className='my-3 btn btn-outline-secondary' to='all'>Browser Games</Link>
          </div>
        </div>
      </header>
      <section id='card' className='container my-5'>
        <div className='d-flex my-5 align-items-center'>
          <i class="fa-solid fa-robot fa-2xl"></i>
          <h2 className='my-0 ps-2'>Personalized Recommendations</h2>
        </div>
        <div className="row">
          <Link key={recommendationsGamesList1.id} to={`../details/${recommendationsGamesList1.id}`} className="col-md-4 text-muted text-decoration-none">
            <div class="card pointer bg-dark">
              <img src={recommendationsGamesList1.thumbnail} class="card-img-top" alt="..." />
              <div class="card-body d-flex justify-content-between align-items-center">
                <h5 class="card-title">{recommendationsGamesList1.title}</h5>
                <a href="#" class="btn btn-primary btn-sm">FREE</a>
              </div>
            </div>
          </Link>
          <Link key={recommendationsGamesList2.id} to= {`../details/${recommendationsGamesList2.id}`} className="col-md-4 text-muted text-decoration-none">
            <div class="card pointer bg-dark">
              <img src={recommendationsGamesList2.thumbnail} class="card-img-top" alt="..." />
              <div class="card-body d-flex justify-content-between align-items-center">
                <h5 class="card-title">{recommendationsGamesList2.title}</h5>
                <a href="#" class="btn btn-primary btn-sm">FREE</a>
              </div>
            </div>
          </Link>
          <Link key={recommendationsGamesList3.id} to= {`../details/${recommendationsGamesList3.id}`} className="col-md-4 text-muted text-decoration-none">
            <div class="card pointer bg-dark">
              <img src={recommendationsGamesList3.thumbnail} class="card-img-top" alt="..." />
              <div class="card-body d-flex justify-content-between align-items-center">
                <h5 class="card-title">{recommendationsGamesList3.title}</h5>
                <a href="#" class="btn btn-primary btn-sm">FREE</a>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )

}
