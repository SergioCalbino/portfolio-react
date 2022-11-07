
import React from 'react'
import { BsBootstrapFill, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { SiCss3, SiHtml5, SiJavascript, SiMongodb, SiPostgresql, SiReact } from "react-icons/si";
import { DiNodejs, DiNodejsSmall } from "react-icons/di";

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
//    <!-- Footer -->
   <>
    <footer className="text-center text-lg-start bg-light text-muted">
  {/* <!-- Section: Social media --> */}
     <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div className="me-5 d-none d-lg-block">
      <span>Podes contactarme a traves de los siguientes canales:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div  >
      <a  className='me-4  text text-primary' href="https://www.facebook.com/sergio.calbino" >
      <BsFacebook/>
      </a>
      <a className='me-4 link-success text-decoration-none' href='https://web.whatsapp.com/' target='_blank'> <BsWhatsapp/> </a>   
        <a  className='me-4 text-dark text-decoration-none' href='https://www.instagram.com/sergio_mortchikian/' target='_blank'> <BsInstagram/> </a> 
          <a  className='me-4  text text-primary text-decoration-none ' href='https://www.linkedin.com/in/sergio-oscar/' target='_blank'> <BsLinkedin/> </a> 
         <a  className='me-4  text-dark text-decoration-none' href='https://github.com/SergioCalbino' target='_blank'> <BsGithub/> </a> 
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>
          </h6>
          <p>
           Desarrollador Freelance
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Stack de tecnologías
          </h6>
          <p>
            <h3  className="text-warning">Javascript <SiJavascript/> </h3>
          </p>
          <p>
            <h3  className="text-primary">React <SiReact/> </h3>
          </p>
          <p>
            <h3  className="text-success">Node & Express <DiNodejs/> </h3>
          </p>
          <p>
            <h3  className="text-danger">HTML <SiHtml5/></h3>
          </p>
          <p>
            <h3  className="text-primary">CSS <SiCss3/></h3>
          </p>
          <p>
            <h3  className="text-purple-100">Bootstrap <BsBootstrapFill/></h3>
          </p>
          <p>
            <h3  className="text-success">MongoDB <SiMongodb/></h3>
          </p>
          <p>
            <h3  className="text-dark">PostgreSQL <SiPostgresql/></h3>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> */}
          {/* <!-- Links --> */}
          {/* <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div> */}
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
          <p><i className="fas fa-home me-3"></i> Ciudad de Buenos Aires, Argentina</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            serggio.c86@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 54-1161219480</p>
          {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4" styleClass="background-color: rgba(0, 0, 0, 0.05);">
    © 2022 Copyright: Sergio Calbiño
    {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
</>
  )
}

export default Footer

{/* <h3 className='text text-primary' > */}