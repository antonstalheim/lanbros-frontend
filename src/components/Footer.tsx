import { Grid, makeStyles, createStyles, IconButton } from "@material-ui/core";
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';


const useStyles = makeStyles(() =>
    createStyles({
        footer: {
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            '& svg': {
                fontSize: '1.4em'
            }
        },
        footerIconButton: {
            color: '#fff',
            opacity: '0.3',
            transition: 'opacity 0.2s',
            '&:hover': {
                opacity: '1'
            }
        }
    })
)

function Footer() {
    const classes = useStyles();

    const routeToGithub = () => {
        window.location.assign('https://github.com/antonpettersson/lanbros-minecraft-frontend');
    };
    const routeToDiscord = () => {
        window.location.assign('http://discord.lanbros.net');
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <div className={classes.footer}>
                    <IconButton onClick={routeToGithub} className={classes.footerIconButton} aria-label="delete">
                        <FaGithub />
                    </IconButton>
                    <IconButton onClick={routeToDiscord} className={classes.footerIconButton} aria-label="delete">
                        <FaDiscord />
                    </IconButton>
                </div>
            </Grid>
        </Grid>
    )
}

export default Footer;
