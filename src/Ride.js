import React, { Component, useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%'
    },
    name: {
        fontWeight: "bold"
    }
}));

const Ride = (rideObj) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <List>
                <ListItem>
                    <div className = {classes.name}>{rideObj.ride.name}</div> {rideObj.ride.startLoc} (0.5 mi away) --> {rideObj.ride.endLoc}
                </ListItem>
                <ListItem>
                    Departure: {rideObj.ride.departTime}, {rideObj.ride.departDate}
                </ListItem>
                <ListItem>
                    Return: {rideObj.ride.departTime}, {rideObj.ride.departDate}
                </ListItem>
                <ListItem>
                    Contact: {rideObj.ride.phoneNum}
                </ListItem>
                <ListItem>
                    Note: {rideObj.ride.desc}
                </ListItem>
            </List>
            
        </Card> 
    )
}

export default Ride;