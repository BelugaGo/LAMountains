import React from 'react'
import { FooterWrapper, LALogo, CopyWrapper, CopyRight } from './FooterElement'

function Footer() {
  return (
    <FooterWrapper>
      <a href='#'>
        <LALogo src='Photos/Logo3.png' />
      </a>
      <CopyWrapper>
        <CopyRight>COPYRIGHT 2016. ALL RIGHTS RESERVED.</CopyRight>
      </CopyWrapper>
    </FooterWrapper>
  )
}

export default Footer;