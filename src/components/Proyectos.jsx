import { BsGithub } from "react-icons/bs"



const Proyectos = () => {
  return (
   <>
   {/* pokemon */}
   <div className="row  "  >
   <header  className= "card-title text-center "> <h1> Proyectos </h1>   </header>
  <div className="col-sm-6 mt-2   "  >
    <div className="card h-100 ">
      <div className="card-body">
        <h5 className="card-title text-center "> <strong> Proyecto Pokemon </strong> </h5>
        <img src="https://res.cloudinary.com/sergio-developer/image/upload/v1656707966/pokemon_utc61c.png" className="card-img-top " alt="..."/>
        <p className="card-text fw-semibold ">SPA que permite mostrar todos los pokemons de la pokeApi. Asimismo, perimite ordenarlos de forma alfebética, por fuerza y origen; realizar búsquedas por nombre; crear nuevos pokemones.</p>
        <h5 className="text-center" > <a href="https://pokeclient.herokuapp.com/" target='_blank'  className="btn btn-dark">Ir a la PokeApi</a> </h5>
        <h3 className='text-center text-dark' >  GitHub  <a  href='https://github.com/SergioCalbino/PT04-POKEMON-PI' target='_blank'> <BsGithub/> </a> </h3>

      </div>
    </div>
  </div>
  
  {/* Ecommerce */}
  <div className="col-sm-6 mt-2   "  >
    <div className="card h-100 ">
      <div className="card-body">
        <h5 className="card-title text-center "> <strong> Ecommerce </strong> </h5>
        <img src='https://res.cloudinary.com/sergio-developer/image/upload/v1656708230/Ecommerce_hk8hrk.png' className="card-img-top  " alt="..."/>
        <p className="card-text fw-semibold ">Ecommerce de Grfieria. Permite la creación de Productos y Categorias desde el lado de administrador. Permite al usuario realizar compras, añadir productos a favoritos. Se aceptan todo tipo de pagos.</p>
        <h5 className="text-center" > <a href="https://atoch.herokuapp.com/" target='_blank'  className="btn btn-dark">Ir al Ecommerce</a> </h5>
        <h3 className='text-center text-dark' >  GitHub  <a  href='https://github.com/orgs/Grupo03-PF/repositories' target='_blank'> <BsGithub/> </a> </h3>

      </div>
    </div>
  </div>

  
  {/* gif */}
  <div className="col-sm-6 mt-2   "  >
    <div className="card h-100 ">
      <div className="card-body">
        <h5 className="card-title text-center "> <strong> Gifs </strong> </h5>
        <img src='https://res.cloudinary.com/sergio-developer/image/upload/v1657385035/giphy_adhd5h.gif' className="card-img-top   " alt="..."/>
        <p className="card-text fw-semibold ">Esta página permite buscar gifs animados de cualquier tipo.</p>
        <h5 className="text-center" > <a href="https://gif-copados-ser.netlify.app/" target='_blank'  className="btn btn-dark">Buscador de Gif</a> </h5>
        <h3 className='text-center text-dark' >  GitHub  <a  href='https://github.com/SergioCalbino/react-gif-public' target='_blank'> <BsGithub/> </a> </h3>

      </div>
    </div>
  </div>
  
  {/* Carrito */}
  <div className="col-sm-6 mt-2   "  >
    <div className="card h-100 ">
      <div className="card-body">
        <h5 className="card-title text-center "> <strong> Carrito de Compras </strong> </h5>
        <img src="https://res.cloudinary.com/sergio-developer/image/upload/v1664240289/carrito-compras-online2_mvtutr.jpg" className="card-img-top" alt="..."/>
        <p className="card-text fw-semibold ">Simulador de carrito de compras. Las tecnologias utilizadas son HTML, CSS y Javascript.</p>
        <h5 className="text-center" > <a href="https://proyectocarritohtml.netlify.app/" target='_blank'  className="btn btn-dark">Ir al Carrito</a> </h5>
        <h3 className='text-center text-dark' >  GitHub  <a  href='https://github.com/SergioCalbino/CarritohtmlyJavascript' target='_blank'> <BsGithub/> </a> </h3>

      </div>
    </div>
  </div>
  
  {/* cotizador */}
  <div className="col-sm-6 mt-2   "  >
    <div className="card h-100 ">
      <div className="card-body">
        <h5 className="card-title text-center "> <strong> Corizador de Prestamos </strong> </h5>
        <img src="https://res.cloudinary.com/sergio-developer/image/upload/v1666217597/images_ye7tik.png" className="card-img-top" alt="..."/>
        <p className="card-text fw-semibold ">Cotizador de prestamos. Para este proyecto utilicé Javascript, React.Js y Tailwind.</p>
       

        <h5 className="text-center" > <a href="https://cotizareactseguros.netlify.app/" target='_blank'  className="btn btn-dark">Ir al Corizador</a> </h5>
        <h3 className='text-center text-dark' >  GitHub  <a  href='https://github.com/SergioCalbino/cotizador-de-prestamos' target='_blank'> <BsGithub/> </a> </h3>
        

        
      </div>
    </div>
  </div>
  
  <div className="col-sm-6 mt-2   "  >
    <div className="card h-100 ">
      <div className="card-body">
        <h5 className="card-title text-center "> <strong> Proximamente</strong> </h5>
        <img src="https://res.cloudinary.com/sergio-developer/image/upload/v1667756179/descarga_gfiyja.jpg" className="card-img-top" alt="..."/>
        <p className="card-text fw-semibold ">En desarrollo.</p>
       

        {/* <h5 className="text-center" > <a href="#" target='_blank'  className="btn btn-dark">Ir al Corizador</a> </h5>
        <h3 className='text-center text-dark' >  GitHub  <a  href='#' target='_blank'> <BsGithub/> </a> </h3> */}
        

        
      </div>
    </div>
  </div>
  
  
  
  
</div>
   </>
  )
}

export default Proyectos