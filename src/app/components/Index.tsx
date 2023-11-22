"use client"
import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Theme } from '@radix-ui/themes'

const Index = () => {
  return (
    <Theme>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Theme>
  )
}

export default Index