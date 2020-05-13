import React, { Component, useState, useEffect} from 'react';
import Ride from './Ride.js';
import db from './db.js';
import { StyleSheet, Text, View } from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'; 
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const RideList = ({ridesState}) => {
    const classes = useStyles();

    var rides = [];
    if (ridesState.rides) {
        rides = Object.values(ridesState.rides);
    }


    return (
        <div className={classes.root}>
        <Container>
            <List>
            {

            rides.map(ride => (
                <div>
                <ListItem><Ride ride={ride}></Ride></ListItem>
                <Divider />
                </div>
                )
            ) 
            }   
            </List>
        </Container>
        </div>
    )

}

export default RideList; 