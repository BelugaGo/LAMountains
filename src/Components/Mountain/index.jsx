import React, { useState } from 'react'
import { MountainBox, MountainImage, ImageSwitch, Dates, Title } from './MountainElement';
import { Accordion, AccordionDetails, AccordionSummary, createTheme, ThemeProvider, Typography } from '@mui/material';

function Mountain() {

  const CardInfo1 = (<div className='text'><div className='div1'>25 Nov 2016</div><div className='div2'>Vestibulum viverra</div>
    <div className='div3'>28 Nov 2016</div><div className='div4'>Vestibulum viverra</div>
    <div className='div5'>18 Dec 2016</div><div className='div6'>Vestibulum viverra</div>
    <div className='div7'>7 Jan 2017</div> <div className='div8'>Vestibulum viverra</div></div>);

  const CardInfo2 = (<div className='text'><div className='div1'>17 Nov 2016</div><div className='div2'>Vestibulum viverra</div>
    <div className='div3'>13 Dec 2016</div><div className='div4'>Vestibulum viverra</div>
    <div className='div5'>28 Dec 2016</div><div className='div6'>Vestibulum viverra</div>
    <div className='div7'>9 Feb 2017</div> <div className='div8'>Vestibulum viverra</div></div>)

    // Got assistance from chatgpt on toggling different elements onClick
  const [currentImage, setCurrentImage] = useState('Photos/Mountain2.jpg');
  const [showCardInfo2, setShowCardInfo2] = useState(false);
  const [expanded, setExpanded] = useState('panel1');


   //copied accordion toggle from material ui accordian
  const handleExpand = (panel) => (e, isExpanded) => { 
       setExpanded(isExpanded ? panel : false);
  }

  const handleCardInfo = (toggle) => {
    setShowCardInfo2(toggle)
  }

  const handleMountainChange = (Image) => {
    setCurrentImage(Image)
  }


  // copied this theme const from materialui.com 
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 669,
        lg: 1200,
        xl: 1536,
      },
    },

    typography: {
      fontFamily: 'Oswald, sans-serif'
    }
  });
  return (
    <div id='team'>
      <MountainBox>
        <MountainImage src={currentImage} />
        <ImageSwitch>
          <div className='Adjust'>
            <a className='Mountain1' href='#target1' id='target1' onClick={() => { handleMountainChange('Photos/Mountain2.jpg'); handleCardInfo(false); }}> Mountain1</a>
            <a className='Mountain2' href='#target2' id='target2' onClick={() => { handleMountainChange('Photos/Mountain3.jpg'); handleCardInfo(true); }}> Mountain2</a>
          </div>
        </ImageSwitch>
        <Dates>
          <Title>Schedule</Title>
          <div id='switch'>
            {showCardInfo2 ? CardInfo2 : CardInfo1}
          </div>
        </Dates>
      </MountainBox>


{/*
Outside source ( Accordion - https://mui.com/material-ui/react-accordion/ )
*/}
      <ThemeProvider theme={theme}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')} sx={{ display: { md: 'none' }, overflow: 'hidden', backgroundColor: '#414f6b' }}>
          <AccordionSummary>
            <Typography className='Mountain1' style={{ textTransform: 'uppercase', textDecoration: 'underline' }}>Mountain 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Dates id='team'>
              <Title>Schedule</Title>
              <div id='switch'>
                {CardInfo1}
              </div>
            </Dates>
            <img src='Photos/Mountain2.jpg' style={{ width: '100%' }} />
          </AccordionDetails>
        </Accordion>



        <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')} sx={{ display: { md: 'none' }, overflow: 'hidden', backgroundColor: '#b0b4be' }}>
          <AccordionSummary>
            <Typography style={{ textTransform: 'uppercase', textDecoration: 'underline' }}>Mountain 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Dates id='team'>
              <Title>Schedule</Title>
              <div id='switch'>
                {CardInfo1}
              </div>
            </Dates>
            <img src='Photos/Mountain3.jpg' style={{ width: '100%' }} />
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  )
}

export default Mountain;
