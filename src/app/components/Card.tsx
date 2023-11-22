"use client"
import React from 'react'
import { Instruction } from '../models/Instruction'

type CardProps = Instruction;

const CardIOP = (props:CardProps) => {
  return (
    <div className='w-72 h-72 border border-black m-2 cursor-pointer hover:bg-slate-950 hover:text-white transition-colors ease-in'>
        <div className='m-4 h-64 flex flex-col justify-around'>
            <header className='flex justify-between items-center'>
                <h1 className='font-bold text-xl'>{props.title}</h1>
                <p className='text-sm'>#{props.numberIop}</p>
            </header>
            <main className='mt-5'>
                <p className='text-xs'>Resumo</p>
                <h1 className='text-sm'>{props.resume}</h1>
            </main>
            <footer className='h-20 flex justify-start items-end'>
                <span className='text-xs'>{props.category}</span>
            </footer>
        </div>
    </div>
  )
}

export default CardIOP