import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase/app';
import db from './db.js';

export default class SignUp extends React.Component {
  state = { email: '', password: '', fullName: '', phoneNum: '', errorMessage: null }
  handleSignUp = () => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((result) => {
          const userID = result.user.uid;
          var item = {
            "name": this.state.fullName,
            "email": this.state.email,
            "phoneNum": this.state.phoneNum
          };

          firebase.database().ref("users/" + userID + "/profile").set(item);
          return result.user.updateProfile({
            displayName: this.state.fullName
          })
        })
        .then((result) => {
          this.props.navigation.navigate('Main')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
  }
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Full Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={fullName => this.setState({ fullName })}
          value={this.state.fullName}
        />
        <TextInput
          placeholder="Phone Number"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={phoneNum => this.setState({ phoneNum })}
          value={this.state.phoneNum}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})