import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import background from "../../images/megafy_background1.png"

import styles from './styles';
import { Container, Typography } from '@mui/material';

import { useNavigate } from "react-router-dom";

function Upload() {
  const classes = styles;
  const [audio, setAudio] = useState();

  let navigate = useNavigate();

  const nextPage = () => {
    navigate("/edit");
  }

  const backPage = () => {
    navigate("/");
  }

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

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

        <Typography variant="h4" sx={classes.title}>Upload</Typography>

        <Box sx={classes.uploadBox}>
          <Button sx={classes.uploadConfirm} size="large" variant='contained' component="label" color='success' disableElevation>
            Upload
            <input hidden multiple accept="audio/*" type="file" onChange={addFile}/>
          </Button>
        </Box>


        <IconButton onClick={backPage} color="default">
          <ArrowBackIosRoundedIcon sx={classes.back} ></ArrowBackIosRoundedIcon>
        </IconButton>

        <IconButton onClick={nextPage} color="default">
          <ArrowForwardIosRoundedIcon sx={classes.next} ></ArrowForwardIosRoundedIcon>
        </IconButton>

      </Box>

    </div>
  )
}

export default Upload;