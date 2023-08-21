import React from 'react'
import { HeroBox, HeroImg, Icon, IconAndNavWrapper, History, Team, HandTeamNav } from './Heroelement';

function HeroSection() {
  return (
    <HeroBox>
      <HeroImg src='Photos/Mountain.jpg' />
      <IconAndNavWrapper>
        <a href='#'>
          <Icon src='Photos/Logo.png' />
        </a>
        <HandTeamNav>
          <History href='#history'>01. History</History>
          <Team href='#team'>02. Team</Team>
        </HandTeamNav>
      </IconAndNavWrapper>
    </HeroBox>
  )
}

export default HeroSection;