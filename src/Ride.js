import React, { Component, useState, useEffect} from 'react';
import db from './db.js';
import {Card, CardItem, Body, Text, Container, Content } from 'native-base';


const Ride = (ride) => {

    return (
        <Container>
            <Content>
            <Card>
            <CardItem>
              <Text>My Ride</Text>
             </CardItem>
           </Card>
            </Content>
        </Container>
          
    );
}

export default Ride;