import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import the different screens
import Loading from './src/Loading.js'
import SignUp from './src/SignUp'
import Login from './src/Login'
import Main from './src/Main'
// create our app's navigation stack
// export default function App() {
//     const Stack = createStackNavigator();
    
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="AddRideModal" component={AddRideModal} options={{ title: 'Add a New Ride' }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }


const App = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
))
export default App