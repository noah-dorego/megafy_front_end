import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import background from "../../images/megafy_background1.png"

import styles from './styles';

import { useNavigate } from "react-router-dom";

function Home() {
  const classes = styles;
  let navigate = useNavigate();

  const nextPage = () => {
    navigate("/upload");
  }

  return (
    <div style={{ backgroundImage: `url(${background})`, overflow: "hidden" }}>
      <Box sx={classes.mainBox}>
        <Container sx={classes.buttonContainer}>
          <Box sx={classes.uploadButton} >
            <FileUploadRoundedIcon sx={classes.pageIcon}></FileUploadRoundedIcon>
          </Box>
          <Box sx={classes.disabledButton} >
            <TuneRoundedIcon sx={classes.pageIcon}></TuneRoundedIcon>
          </Box> 
          <Box sx={classes.disabledButton} >
            <DownloadRoundedIcon sx={classes.pageIcon}></DownloadRoundedIcon>
          </Box>
        </Container>
        
        <Typography variant="h4" sx={classes.title}>Welcome to MEGAFY</Typography>
        
        <Container sx={classes.barContainer}>
          <Box>
            <Box sx={classes.textHoversBox}>
              <Typography sx={classes.textHoversMed} variant="body1" >Free for everyone</Typography>
            </Box>

            <Box sx={classes.barDeco1} />
          </Box>
          <Box>
            <Box sx={classes.textHoversBox}>
              <Typography sx={classes.textHoversLarge} variant="body1" >Easy audio editing</Typography>
            </Box>

            <Box sx={classes.barDeco2} />
          </Box>
          <Box>
            <Box sx={classes.textHoversBox}>
              <Typography sx={classes.textHoversSmall} variant="body1" >Made by 2 university students</Typography>
            </Box>

            <Box sx={classes.barDeco3} />
          </Box>
        </Container>

        <div onClick={nextPage}>
          <ArrowForwardIosRoundedIcon sx={classes.next} ></ArrowForwardIosRoundedIcon>
        </div>
        
      </Box>

    </div>
  )
}

export default Home;