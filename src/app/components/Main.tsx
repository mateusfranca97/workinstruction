import React, { useState } from 'react'
import CardIOP from './Card';
import { Instruction } from '../models/Instruction';

export let CardInfo:Instruction[] = [
  {title: 'Titulo', category:'Avaya Communicator', createdBy:'Mateus Gomes', resume:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {title: 'Titulo', category:'', createdBy:'Mateus Gomes', resume:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {title: 'Titulo', category:'', createdBy:'Mateus Gomes', resume:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {title: 'Titulo', category:'', createdBy:'Mateus Gomes', resume:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {title: 'Titulo', category:'', createdBy:'Mateus Gomes', resume:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
]

const Main = () => {
  const [unused, setCard] = useState(CardInfo);

  return (
    <main className='my-5 flex justify-center items-center flex-wrap'>
      {CardInfo.map(({title, createdBy, resume, category}, key)=>(
        <CardIOP
          key={key}
          title={title}
          category={category}
          createdBy={createdBy} 
          resume={resume} 
          numberIop={key+1}></CardIOP>
      ))}
    </main>
  )
}

export default Main