import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import { Navegacion } from './Navegacion'

export const Header = () => {





  return (
    <header className="header">

        <div className="contenedor barra">

            <Link to="/">
                <img className="logo" src={logo} alt="imagen logo"/>

            </Link>
            <Navegacion/>

            </div>
            


    </header>
  )
}
