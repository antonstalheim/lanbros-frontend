import React from 'react';
import { Grid, Box, Card, CardHeader, CardContent } from '@material-ui/core';
import lanbrosTextLogotype from '../assets/lanbros_logo.png';
import { useHistory } from 'react-router-dom';

interface GameserverProps {
    isWide: boolean;
}

function Gameservers(props: GameserverProps) {
    const history = useHistory();
    const routeToHome = () => history.push('/');

    return (
        <React.Fragment>
            <Box pt={2} pb={2} pl={10} style={{ backgroundColor: 'white' }}>
                <Grid container>
                    <Grid item xs={4}>
                        <img onClick={routeToHome} height="auto" width="100%"
                            style={{ maxWidth: '200px', cursor: 'pointer', mixBlendMode: 'difference', display: 'flex' }}
                            src={lanbrosTextLogotype} />
                    </Grid>
                </Grid>
            </Box>
            <Box mt={5} ml={props.isWide ? 40 : 5} mr={props.isWide ? 40 : 5}>
                <Box mt={20}></Box>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Vår spelserverfilosofi"></CardHeader>
                            <CardContent>Sedan LANBROS grundades 2013 har vi till och från haft ett antal aktiva spelservrar. Minecraft var starten, men sedan testades även Rust, Counter-strike och Garry's Mod.
                                Vår filosofi är att hänga med i svängarna, och utifrån våra medlemmars önskemål hyr och administrerar vi tillsammans de spelservrar vi vill. Saknar du något spel i listan nedan? Lägg ett förslag i vår #requests-kanal på Discord. 
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardHeader title="Minecraft"></CardHeader>
                            <CardContent>Tre servrar finurligt uppsnurrade i ett Kuberneteskluster med hjälp av Docker. Vår egen hemmasnickare lösning, vilket också ger oss tillgång till extra cool statistik som du kan se nedan.</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardHeader title="Valheim"></CardHeader>
                            <CardContent>Plocka fram din inre viking och bygg dig en stilig liten koja.</CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default Gameservers;