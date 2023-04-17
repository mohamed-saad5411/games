import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.png'

export default function NavBar() {

  return (
    <>
      <nav id='navBar' className="navbar top-0 start-0 end-0 position-fixed index navbar-expand-sm navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand w-25 text-white" to="/">
            <div className='d-flex align-items-center'>
              <img className='w-25' src={logoImg} to="/" />
              <h5 className={styles.head}>Game Over</h5>
            </div>
          </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="all">All</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle text-muted" to="platforms" role="button" data-bs-toggle="dropdown" aria-expanded="false">Platforms</Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="pc">PC</Link></li>
                  <li><Link class="dropdown-item" to="browser">Browser</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle text-muted" to="platforms" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort-by</Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="release-date">release-date</Link></li>
                  <li><Link class="dropdown-item" to="popularity">popularity</Link></li>
                  <li><Link class="dropdown-item" to="alphabetical">alphabetical</Link></li>
                  <li><Link class="dropdown-item" to="relevance">relevance</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle text-muted" to="platforms" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</Link>
                <ul class="dropdown-menu">
                  <li><Link className="dropdown-item" to="racing">racing</Link></li>
                  <li><Link className="dropdown-item" to="sports">sports</Link></li>
                  <li><Link className="dropdown-item" to="social">social</Link></li>
                  <li><Link className="dropdown-item" to="shooter">shooter</Link></li>
                  <li><Link className="dropdown-item" to="open-world">open-world</Link></li>
                  <li><Link className="dropdown-item" to="zombie">zombie</Link></li>
                  <li><Link className="dropdown-item" to="fantasy">fantasy</Link></li>
                  <li><Link className="dropdown-item" to="action-rpg">action-rpg</Link></li>
                  <li><Link className="dropdown-item" to="action">action</Link></li>
                  <li><Link className="dropdown-item" to="flight">flight</Link></li>
                  <li><Link className="dropdown-item" to="battle-royale">battle-royale</Link></li>

                </ul>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-muted" to="login">Login</Link>
              </li>                  
            </ul>
          <button className='btn btn-outline-info'>Log Out</button>
          <Link className="btn btn-outline-info" to="signup">Join Free</Link>
        </div>
      </nav>



    </>
  )



}
