import React from 'react';
import { History, Team } from '../Hero/Heroelement';
import { HandTeamStickyNav, StickyNavWrapper, LALogo } from './NavElement';

function Nav() {
  return (
    <StickyNavWrapper>
      <a href='#'>
        <LALogo src='Photos/Logo2.png' />
      </a>
      <HandTeamStickyNav>
        <History href='#history'>01. History</History>
        <Team href='#team'>02. Team</Team>
      </HandTeamStickyNav>
    </StickyNavWrapper>
  )
}

export default Nav;