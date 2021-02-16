import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import React from 'react';

interface ServerCardProps {
    title: string;
    version: string;
    description: string; // or is this title?
    players: number;
    ping: number;
    motd: string;
    imageSrc: string;
}

function ServerCard(props: ServerCardProps) {
    return (
        <Card>
            <CardContent>
                <CardMedia
                    component="img"
                    height="140"
                    image={require(`../assets/${props.imageSrc}`).default}
                />
                <Typography variant="h5" component="h2">{props.title}</Typography>
                <Typography variant="body2" component="p">
                    test
          </Typography>
            </CardContent>
        </Card>
    );
}

export default ServerCard;