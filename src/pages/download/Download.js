import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import background from "../../images/megafy_background1.png";
import logo from "../../images/logo_dark.png";

import styles from './styles';
import { Container, Typography } from '@mui/material';

import { useNavigate } from "react-router-dom";

function Download() {
  const classes = styles;
  let navigate = useNavigate();

  const backPage = () => {
    navigate("/edit");
  }

  const downloadFiles = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./download.txt";
    link.click();
  }

  return (
    <div style={{ backgroundImage: `url(${background})`, overflow: "hidden" }}>
      <Box sx={classes.mainBox}>
        <Container sx={classes.buttonContainer}>
          <Box sx={classes.uploadButton} >
            <FileUploadRoundedIcon sx={classes.pageIcon}></FileUploadRoundedIcon>
          </Box>
          <Box sx={classes.editButton} >
            <TuneRoundedIcon sx={classes.pageIcon}></TuneRoundedIcon>
          </Box> 
          <Box sx={classes.downloadButton} >
            <DownloadRoundedIcon sx={classes.pageIcon}></DownloadRoundedIcon>
          </Box>
        </Container>
        
        <Typography variant="h4" sx={classes.title}>Download</Typography>

        <Box sx={classes.downloadBox}>
          <Box component="img" sx={classes.logo} src={logo} alt="Logo"/>
          <Button sx={classes.downloadConfirm} size="large" variant='contained' component="label" onClick={downloadFiles} disableElevation>
            Download
          </Button>
          <Typography variant="h4" sx={classes.numSongsText}>__ songs</Typography>
        </Box>
        
        <IconButton onClick={backPage} color="default">
          <ArrowBackIosRoundedIcon sx={classes.back} ></ArrowBackIosRoundedIcon>
        </IconButton>
        
      </Box>

    </div>
  )
}

export default Download;