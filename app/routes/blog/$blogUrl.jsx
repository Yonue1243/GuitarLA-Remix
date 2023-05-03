import { useLoaderData } from '@remix-run/react'
import {getPost} from '~/models/posts.server'
import {formatearFecha} from '~/utils/helpers.js'

export function meta({data}){
  if(!data){
      return {
          title: 'GuitarLA - Entrada No Encontrada',
          description: 'Guitarras, venta de guitarras, entrada no encontrada'
      }
  }
  return {
      title: `GuitarLA - ${data.data[0].attributes.Titulo}`,
      description: `Guitarras, venta de guitarras, guitarra $${data.data[0].attributes.Titulo}`
  }
}

export async function loader({params}){
  const {blogUrl} = params
  const post = await getPost(blogUrl)
  if(post.data.length ===0){
    throw new Response('',{
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  return post
}

export default function Blog() {
  const post = useLoaderData()
  const {Titulo, Contenido, imagen, publishedAt} = post?.data[0].attributes
  return (
    <article className='post mt-3'>
            <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${Titulo}`} />
      <div className="contenido">
      <h3>{Titulo}</h3>
      <p className="fecha">{formatearFecha(publishedAt)}</p>
      <p className="texto">{Contenido}</p>
      </div>
    </article>
  )
}
