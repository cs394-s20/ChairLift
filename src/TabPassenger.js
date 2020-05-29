import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const TabPassenger = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(authUser => {
            setUser(authUser);
            });
    }, []);

    //user_id = user.uid

    return (
        <Container>
            <Text>passenger tab</Text>
        </Container>
        
    )
}

export default TabPassenger;