import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from './styles'

const Footer = () => {
  const location = useLocation()

  let footerContent
  if (location.pathname === '/home') {
    footerContent = 'Home Footer'
  } else if (location.pathname === '/about') {
    footerContent = 'About Footer'
  } else {
    footerContent = 'Default Footer'
  }

  return <Container>{footerContent}</Container>
}

export default Footer
