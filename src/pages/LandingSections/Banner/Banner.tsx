import React from 'react';
import Box from '@material-ui/core/Box';
import BannerThumb from '../assets/img/banner-thumb.png';
import {Container,Typography,Grid} from '@material-ui/core';
import useStyles from './styles.js';

export const Banner: React.FC<{}>=() =>
{
    const styles = useStyles();
    return (
        <section className={styles.banner} id="home">
            <Container className={styles.container}>
            <Grid>
                <Box className={styles.contentBox}>
                    <h1
                        className={styles.webTitle}>
                        Inovact 
                        <br />
                    <Typography className={styles.tagline}>Build a skill for the future </Typography>
                    </h1>
                    
                    <Box className={styles.horizontal}></Box>
                
                    <Typography   className={styles.webText}>
                    INOVACT-social is the one-stop socializing website created by the students, for the students. 
                    </Typography >
                </Box>
            </Grid>

            <Box className={styles.imageBox}>
                <img src={BannerThumb} alt="banner" className={styles.img} />
            </Box>

            </Container>
        </section>
    );
}