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
import CampaignIcon from '@mui/icons-material/Campaign';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import WavesIcon from '@mui/icons-material/Waves';

import background from "../../images/megafy_background1.png"

import styles from './styles';
import { Container, Typography } from '@mui/material';

import { useNavigate } from "react-router-dom";

function Edit() {
    const classes = styles;
    let navigate = useNavigate();

    const nextPage = () => {
        navigate("/download");
    }

    const backPage = () => {
        navigate("/upload");
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
                    <Box sx={classes.disabledButton} >
                        <DownloadRoundedIcon sx={classes.pageIcon}></DownloadRoundedIcon>
                    </Box>
                </Container>

                <Typography variant="h4" sx={classes.title}>Presets</Typography>

                

                <Container sx={classes.presetContainer}>
                    <Box sx={classes.beastPreset}>
                        <CampaignIcon sx={classes.presetIcon}></CampaignIcon>
                    </Box>

                    <Box sx={classes.slowedPreset}>
                        <WbTwilightIcon sx={classes.presetIcon}></WbTwilightIcon>
                    </Box>

                    <Box sx={classes.vibePreset}>
                        <WavesIcon sx={classes.presetIcon}></WavesIcon>
                    </Box>
                </Container>

                <Container sx={classes.presetTextContainer}>
                    <Typography variant="h4">BEAST</Typography>

                    <Typography variant="h4">Slowed + Reverb</Typography>

                    <Typography variant="h4">V I B E S</Typography>
                </Container>

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

export default Edit;