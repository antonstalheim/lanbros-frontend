import React from 'react';
import { Grid, Box, makeStyles, createStyles, Button, Typography } from '@material-ui/core';
import lanbrosTextLogotype from '../assets/lanbros_logo.png';

const useStyles = makeStyles(() =>
    createStyles({
        jumboButton: {
            borderRadius: '0px',
            borderColor: 'white',
            color: 'white',
            '&:hover': {
                background: 'white',
                color: 'black'
            }
        }
    })
);


function Frontpage() {
    const classes = useStyles();

    return (
        <Box mt={'45vh'}>
            <Grid container>
                <Grid item xs={12} style={{ textAlign: 'center', mixBlendMode: 'overlay' }}>
                    <img height="auto" style={{maxWidth: '50%'}} src={lanbrosTextLogotype} />
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center', color: 'white' }}>
                    <Typography component="span" variant="body1">Vi spelar spel. Tillsammans.</Typography>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Box mt={5}>
                        <Button style={{marginRight: '5px'}} variant="outlined" size="large" className={classes.jumboButton}>
                            Gå med
                    </Button>
                        <Button style={{marginLeft: '5px'}} variant="outlined" size="large" className={classes.jumboButton}>
                            Spelservrar
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frontpage;