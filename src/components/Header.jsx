
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
        <div className="container" >
            <Link className="navbar-brand" to='#' >Sergio Calbiño</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle navigation'  >
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"  > 
                <ul className="navbar-nav" >
                    <li className="nav-item" >
                        <Link className="nav-link"  to='/' > Home </Link>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link" href='https://www.canva.com/design/DAFBDcG6fJg/1DZeImaVNj2YwpepJfndcg/view?utm_content=DAFBDcG6fJg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' download > Descargar CV </a>
                    </li>
                    {/* <li className="nav-item">
                        <Link  className="nav-link" to='/favoritos' > Favoritos </Link>
                    </li>
                    <li className="nav-item d-flex align-items-center ">
                        <span  className="text-success"> 
                        </span>
                        
                    </li> */}
                </ul>

            </div>
            
        </div>
    </nav>
</header>
  )
}

export default Header