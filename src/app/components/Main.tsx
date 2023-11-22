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
    <main className='m-5 ml-10 flex justify-start flex-wrap'>
      {CardInfo.map(({title, createdBy, resume, category}, key)=>(
        <CardIOP
          key={key}
          title={title}
          category={category}
          createdBy={createdBy} 
          resume={resume} 
          numberIop={key}></CardIOP>
      ))}
    </main>
  )
}

export default Main