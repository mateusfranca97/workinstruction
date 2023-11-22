"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Header from '../components/Header'
import { CardInfo } from '../components/Main'
import { Button, Card, TextArea, TextField, Theme } from '@radix-ui/themes'
import { CaretRightIcon, UpdateIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'



const AddInstruction = () => {
    
    const router = useRouter();
    
    function SaveInstrucion(data: any) {
        CardInfo.push(data)
        router.push('/', { scroll: false })
    }
    type CreateUserFormData = z.infer<typeof createUserFormSchema>
  
    const createUserFormSchema = z.object({
      title: z.string().min(1,'Titulo é obrigatorio'),
      resume: z.string().min(1,'Resumo é Obrigatorio'),
    })
    
  
    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
      resolver: zodResolver(createUserFormSchema),
    });

    return (
    <Theme>
        <Header/>
        <div className='h-[36.96rem] w-screen'>
            <div className='h-24 flex flex-col justify-center pl-20'>
                <h1 className='text-2xl font-bold'>Criar Instrução de trabalho</h1>
                <p className='text-xs'>Siga 4 passos simples para criação da instrução</p>
            </div>
            <div className='flex justify-center items-center'>
                <Card style={{ minWidth:300, minHeight: 350 }} className='shadow-xl flex justify-center items-center'>
                    <form className='flex justify-center items-center' onSubmit={handleSubmit(SaveInstrucion)}>
                        <div>
                            <label>Titulo</label>
                            {errors.title && <p className='text-xs text-red-400'>{errors.title.message}</p>}
                            <TextField.Root>
                                <TextField.Input {...register('title')} placeholder="Titulo da instrução" className='w-60' />
                            </TextField.Root>
                            <label>Resumo</label>
                            {errors.resume && <p className='text-xs text-red-400'>{errors.resume.message}</p>}
                            <TextArea placeholder="Breve Descrição…" {...register('resume')}/>
                            <div className='flex gap-3 justify-center mt-5'>
                                <Button color='blue' variant='outline' type='reset'>
                                    <UpdateIcon width="16" height="16" /> Reset
                                </Button>
                                <Button  color='blue'>
                                    Proximo <CaretRightIcon width="16" height="16" />
                                </Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    </Theme>
)
}

export default AddInstruction