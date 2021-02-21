import React from 'react';
import { useHistory } from 'react-router-dom';
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

    const history = useHistory();
    const routeToGameservers = () => history.push('/gameservers');
    const routeToDiscord = () => {
        window.location.assign('http://discord.lanbros.net');
    };

    return (
        <Box mt={'45vh'}>
            <Grid container>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <img height="auto" width="100%" style={{maxWidth: '600px'}} src={lanbrosTextLogotype} />
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center', color: 'white' }}>
                    <Typography component="span" variant="body1">Vi spelar spel. Tillsammans.</Typography>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Box mt={5}>
                        <Button onClick={routeToDiscord} style={{marginRight: '5px'}} variant="outlined" size="large" className={classes.jumboButton}>
                            Discord
                    </Button>
                        <Button onClick={routeToGameservers} style={{marginLeft: '5px'}} variant="outlined" size="large" className={classes.jumboButton}>
                            Spelservrar
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frontpage;