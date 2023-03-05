import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import Certificates from "./Certificates";
import Experiencia from "./Experiencia";
import Proyectos from "./Proyectos";

const AboutMe = () => {
  return (
    <>
      <div className="card mb-3  ">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/sergio-developer/image/upload/v1663461073/perfil_whur7b.jpg"
              className="card-img-top h-100   "
              alt="..."
            />
          </div>
          <div className="col-md-8 bg-success p-2 text-dark bg-opacity-50 ">
            <div className="card-body ">
              <h3 className="card-title text-center ">
                Web Developer Full Stack
              </h3>
              <h5 className="card-title text-center  ">Sergio Oscar Calbiño</h5>
              <br />
              <br />
              <p className="card-text text-center fst-italic ">
              <p>Sobre Mi:</p>
                Como desarrollador web full stack y abogado, tengo
                habilidades tanto en el desarrollo de software como en el campo
                legal. En mi papel de desarrollador, soy capaz de trabajar como Full Stack de las aplicaciones web
                utilizando diversas tecnologías como HTML, CSS, JavaScript, React.Js,
                Node.Js y Base de datos. <br/>Además, como abogado, Tengo conocimientos
                especializados en las leyes, normativas y políticas que rigen el
                mundo empresarial y las tecnologías de la información. 
                Como desarrollador web full stack y
                abogado, tengo una combinación única de habilidades que me
                permiten enfrentar desafíos complejos desde una perspectiva
                técnica y legal, y contribuir significativamente al éxito de los
                proyectos empresariales.
              </p>
              <p className="card-text">
                <br />
                <br />
                {/* <h3 className='text text-success  ' >  Whatsapp <a className='link-success text-decoration-none ' href='https://web.whatsapp.com/' target='_blanck'> <BsWhatsapp/> </a> <span className='fs-5 text text-dark ' >:  +54-01161219480 </span>   </h3>  */}
                {/* <h3 className='text text-dark' >  Instagram  <a  href='https://www.instagram.com/sergio_mortchikian/' target='_blanck'> <BsInstagram/> </a> </h3> */}
                {/* <h3 className='text text-primary' >  Linkelind  <a  href='https://www.linkedin.com/in/sergio-oscar/' target='_blanck'> <BsLinkedin/> </a> </h3> */}
              </p>
            </div>
          </div>
        </div>
        {/* <Certificates/> */}
        <Experiencia />
        <Proyectos />
      </div>
    </>
  );
};

export default AboutMe;
