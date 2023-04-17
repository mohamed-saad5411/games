import React, { useEffect, useState } from 'react'
import styles from './Details.module.css'
import myimg from '../../assets/thumbnail.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'


export default function Details() {
  let { id } = useParams()
  const [DetailsGamesList, setDetailsGamesList] = useState([])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  async function getDetailsGames() {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: `${id}` },
      headers: {
        'X-RapidAPI-Key': '14943b72e7mshcd54d538d7abf71p18bfaajsnacbfc639325b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let { data } = await axios.request(options)
    setDetailsGamesList(data)
    // console.log(data);
    // console.log(data.minimum_system_requirements.graphics);

  }

  useEffect(() => {
    //call api
    getDetailsGames()
  }, [])


  return (
    <>
      <section id='details' className='custom-margin container'>
        <div className="row">
          <div className="col-md-4">
            <img src={DetailsGamesList.thumbnail} className='w-100 rounded-3 mb-3' alt="" />
            <div className='d-flex justify-content-between align-items-center px-2'>
              <button className='btn btn-dark text-muted me-3'>FREE</button>
              <a href=""></a>
              <a href={DetailsGamesList.freetogame_profile_url} className='btn btn-success text-white w-75' target='_blank'>PLAY NOW <i class="fa-solid fa-right-to-bracket"></i></a>
            </div>
          </div>
          <div className="col-md-8">
            <h2 className='mb-4'>{DetailsGamesList.title}</h2>
            <p className='h4 text-decoration-underline'>About Genshin Impact</p>
            <p className='ps-3'>{DetailsGamesList.description}</p>
            <p className='h4 text-decoration-underline'>Minimum System Requirements</p>
            {/* <p><span className='h5 ps-3'>graphics : </span>{DetailsGamesList.minimum_system_requirements.graphics}</p> */}
            <p><span className='h5 ps-3'>memory  :</span> NVIDIA GeForce GTX 1060 6GB or better</p>
            {/* <p><span className='h5 ps-3'>os  :</span>{DetailsGamesList.minimum_system_requirements}</p> */}
            <p><span className='h5 ps-3'>processor  :</span> NVIDIA GeForce GTX 1060 6GB or better</p>
            <p><span className='h5 ps-3'>storage   :</span> NVIDIA GeForce GTX 1060 6GB or better</p>

            {DetailsGamesList.screenshots ? <p className='h4 mb-4 text-decoration-underline'>Genshin Impact Screenshots</p> : null}
            <Slider {...settings}>
              {DetailsGamesList.screenshots?.map((img) => <div>
                <img src={img.image} className='w-100' alt="" /></div>)}
            </Slider>


            <p className='h4 mt-4 text-decoration-underline'>Additional Information</p>
            <div className="row ps-3">
              <div className="col-md-4">
                <p className='h4'>Title</p>
                <p>{DetailsGamesList.title}</p>
              </div>
              <div className="col-md-4">
                <p className='h4'>Developer</p>
                <p>{DetailsGamesList.developer}</p>
              </div>
              <div className="col-md-4">
                <p className='h4'>Publisher</p>
                <p>{DetailsGamesList.publisher}</p>
              </div>
              <div className="col-md-4">
                <p className='h4'>{DetailsGamesList.release_date}</p>
                <p>2020-09-28</p>
              </div>
              <div className="col-md-4">
                <p className='h4'>Genre</p>
                <p>{DetailsGamesList.genre}</p>
              </div>
              <div className="col-md-4">
                <p className='h4'>Platform</p>
                <div className='d-flex justify-content-start align-items-center'>
                  {DetailsGamesList.platform == "Windows" ? <i className="fa-brands fa-windows ps-2"></i> : <i className="fa-solid fa-window-maximize ps-2"></i>}
                  <p className='mb-0 ps-2'>{DetailsGamesList.platform}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )

}
