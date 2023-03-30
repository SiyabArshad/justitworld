import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Home from "./app/screens/Home"
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import Ux from './app/screens/Ux';
import Testing from "./app/screens/Testing"
import Cyber from "./app/screens/Cyber"
import BuisenessAnalysis from './app/screens/BuisenessAnalysis';
import Scrum from './app/screens/Scrum';
import Curricula from './app/screens/Curricula';
import Projects from './app/screens/Projects';
import Career from './app/screens/Career';
import More from './app/screens/More';
import Mentor from './app/screens/Mentor';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SplashScreen from "react-native-splash-screen";
import * as React from "react"
export default function App() {
  React.useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen options={{headerShown:false}} name="home" component={Home} />
      <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="signup" component={Signup} />
      <Stack.Screen options={{headerShown:false}} name="curi" component={Curricula} />
      <Stack.Screen options={{headerShown:false}} name="career" component={Career} />
      <Stack.Screen options={{headerShown:false}} name="ux" component={Ux} />
      <Stack.Screen options={{headerShown:false}} name="testing" component={Testing} />
      <Stack.Screen options={{headerShown:false}} name="projects" component={Projects} />
      <Stack.Screen options={{headerShown:false}} name="scrum" component={Scrum} />
      <Stack.Screen options={{headerShown:false}} name="mentore" component={Mentor} />
      <Stack.Screen options={{headerShown:false}} name="more" component={More} />
      <Stack.Screen options={{headerShown:false}} name="cyber" component={Cyber} />
      <Stack.Screen options={{headerShown:false}} name="bas" component={BuisenessAnalysis} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
