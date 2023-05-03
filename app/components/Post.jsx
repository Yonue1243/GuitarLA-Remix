import { Link } from "@remix-run/react"
import {formatearFecha} from '~/utils/helpers.js'

export default function Post({post}) {
  const {Contenido, imagen, Titulo, url, publishedAt} = post
  return (
    <article className="post">
      <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${Titulo}`} />
      <div className="contenido">
      <h3>{Titulo}</h3>
      <p className="fecha">{formatearFecha(publishedAt)}</p>
      <p className="resumen">{Contenido}</p>

      <Link className="enlace" to={`/blog/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
}
