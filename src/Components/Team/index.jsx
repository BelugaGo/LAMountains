import React from 'react'
import { Team2, TeamWrapper } from './TeamElement';

function Team() {
  return (
    <TeamWrapper>
      <Team2>
        <span className='Number'>02.</span>
        <span className='Text'>Climb</span>
        <p className='Paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus doloremque delectus nulla quis. Dignissimos, exercitationem.</p>
      </Team2>
    </TeamWrapper>
  )
}

export default Team;