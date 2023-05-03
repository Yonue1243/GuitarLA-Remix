import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
export function meta(){
  return{
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}


export function links(){
  return [
      { rel: 'stylesheet',
        href: styles
      },
      {
        rel: 'preload',
        href: imagen,
        as: 'image'
      }
  ]
}



function Nosotros() {
  return (

    <main className="contenedor nosotros">

      <h2 className="heading">Nosotros</h2>

      <dir className="contenido">

        <img src={imagen} alt="imagen sobre nosotros" />

        <div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ipsum ut est viverra placerat
            . Nullam ultricies sed urna vulputate tincidunt. Integer consectetur tempor accumsan
            . Mauris condimentum luctus tincidunt. Nullam tempus quis elit sed scelerisque.
            Maecenas tempus sapien non magna interdum pretium. Maecenas sodales fringilla tempus. Cras sit 
            amet purus lorem. Sed finibus, augue sed auctor molestie,</p>

        </div>

      </dir>

    </main>

  )
}

export default Nosotros