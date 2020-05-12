import React, { Component, useState, useEffect} from 'react';
import Ride from './Ride.js';
import db from './db.js';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';

const RideList = ({ridesState}) => {

    var rides = [];
    if (ridesState.rides) {
        rides = Object.values(ridesState.rides);
    }

    return (
        <Container>
            {
            rides.map(ride => (
                <Ride ride={ride}></Ride>
                )
            ) 
        }
        </Container>
        
    )

}

export default RideList; 