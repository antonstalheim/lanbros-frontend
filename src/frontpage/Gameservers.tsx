import React from 'react';
import { Grid, Box, makeStyles, createStyles, Button, Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import lanbrosTextLogotype from '../assets/lanbros_logo.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() =>
    createStyles({

    })
);


function Gameservers() {
    const classes = useStyles();

    const history = useHistory();
    const routeToHome = () => history.push('/');

    return (
        <Box mt={5} ml={10} mr={10}>
            <Grid container>
                <Grid item xs={4}>
                    <img onClick={routeToHome} height="auto" width="100%" style={{ maxWidth: '200px', cursor: 'pointer' }} src={lanbrosTextLogotype} />
                </Grid>
            </Grid>
            <Box mt={30}></Box>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="En testtitel"></CardHeader>
                        <CardContent>hurr burr</CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="En testtitel"></CardHeader>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="En testtitel"></CardHeader>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Gameservers;