import { Box, Grid } from '@material-ui/core';
import React from 'react';
import ServerCard from '../common/ServerCard';


function Frontpage() {
    return (
        <Box ml={5} mr={5}>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <ServerCard title="Foobar" version="1.3.7" description="a foobar life"
                        players={5} ping={97} motd="a mc server" imageSrc="minecraft.jpg"></ServerCard>
                </Grid>
                <Grid item xs={4}>
                    <ServerCard title="Foobar" version="1.3.7" description="a foobar life"
                        players={5} ping={97} motd="a mc server" imageSrc="minecraft.jpg"></ServerCard>
                </Grid>
                <Grid item xs={4}>
                    <ServerCard title="Foobar" version="1.3.7" description="a foobar life"
                        players={5} ping={97} motd="a mc server" imageSrc="minecraft.jpg"></ServerCard>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frontpage;