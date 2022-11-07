
import { BsWhatsapp, BsInstagram,BsLinkedin } from 'react-icons/bs';
import Proyectos from './Proyectos';


const AboutMe = () => {
  return (
    <>
      <div className="card mb-3  "  >
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
                ¡Hola!😀 ❇Me llamo Sergio Calbiño y soy Desarrollador Web Full
                Stack.
                <br />
                Actualmente me sigo capacitando de forma autodidacta ❇ Cursé y
                me certifique como desarrollador web full stack en Henry, el
                cual cuenta con más de 800 horas de práctica y aprendizaje.
                Muchos de mis proyectos se encuentran en mi portFolio al cual te
                invito que conozcas y tambíen en mi repositorio de GitHub
                encontraras otros proyectos.
                Busco la oportunidad de poner a prueba mis habilidades en un entorno laboral real y seguir mejorando mis habilidades 💪 tanto con las que ya conozco como con las nuevas tecnologías.
                lisis, confianza, capacidad de trabajar en equipo, conocimiento y respeto de las normas, 
              </p>
              <p className="card-text">
              <br/>
              <br/>
              {/* <h3 className='text text-success  ' >  Whatsapp <a className='link-success text-decoration-none ' href='https://web.whatsapp.com/' target='_blanck'> <BsWhatsapp/> </a> <span className='fs-5 text text-dark ' >:  +54-01161219480 </span>   </h3>  */}
              {/* <h3 className='text text-dark' >  Instagram  <a  href='https://www.instagram.com/sergio_mortchikian/' target='_blanck'> <BsInstagram/> </a> </h3> */}
              {/* <h3 className='text text-primary' >  Linkelind  <a  href='https://www.linkedin.com/in/sergio-oscar/' target='_blanck'> <BsLinkedin/> </a> </h3> */}
             
              </p>
            </div>
          </div>
        </div>
        <Proyectos/>
      </div>
    </>
  );
};

export default AboutMe;
