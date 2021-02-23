import React from 'react';
import { Grid, Box, Card, CardHeader, CardContent, CardMedia, makeStyles, createStyles, Typography } from '@material-ui/core';
import lanbrosTextLogotype from '../assets/lanbros_logo.png';
import minecraftHeader from '../assets/minecraft.jpg';
import valheimHeader from '../assets/valheim.jpg';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() =>
    createStyles({
        cardImage: {
            height: '200px'
        },
        cardTransform: {
            transition: 'all 0.2s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }
    })
);


interface GameserverProps {
    isWide: boolean;
    isUltraWide: boolean;
}

function Gameservers(props: GameserverProps) {
    const classes = useStyles();
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
            <Box mt={5} ml={props.isUltraWide ? 60 : props.isWide ? 40 : 5} mr={props.isUltraWide ? 60 : props.isWide ? 40 : 5}>
                <Box mt={(props.isWide || props.isUltraWide) ? 20 : 5}></Box>
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
                        <Card className={classes.cardTransform}>
                            <CardHeader title="Minecraft"></CardHeader>
                            <CardMedia
                                className={classes.cardImage}
                                image={minecraftHeader}
                                title="Minecraft"
                            />
                            <CardContent>
                                <Typography variant="subtitle2">mc.lanbros.net</Typography>
                                Tre servrar finurligt uppsnurrade i ett Kuberneteskluster med hjälp av Docker. Vår egen hemmasnickare lösning, vilket också ger oss tillgång till extra cool statistik som du kan se nedan.</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardTransform}>
                            <CardHeader title="Valheim"></CardHeader>
                            <CardMedia
                                className={classes.cardImage}
                                image={valheimHeader}
                                title="Minecraft"
                            />
                            <CardContent>
                                <Typography variant="subtitle2">valheim.lanbros.net</Typography>
                                Plocka fram din inre viking och bygg dig en stilig liten koja.</CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default Gameservers;