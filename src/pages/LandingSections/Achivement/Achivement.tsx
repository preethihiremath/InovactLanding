import React from 'react';
import Feature from './feature';
import {Box,Container,Typography,Grid} from '@material-ui/core';
import data from './dataAchivement';
import useStyles from './styles.js';

const Achivement: React.FC =()=>{
    const styles =useStyles();
    return(
        <Box>
        <Container className={styles.container}>
        <Typography className={styles.webTitle} >Our Achivements</Typography>
            <Grid className={styles.leftContent}>
              {data?.map((item) => (
                <Feature key={item?.id} feature={item} />
              ))}
            </Grid>
        </Container>
      </Box>
    );
}

export default Achivement;
