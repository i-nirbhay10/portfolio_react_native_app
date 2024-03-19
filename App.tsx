import React from 'react';
import AllProjects from './src/screens/AllProjects';
import DetailsProject from './src/screens/DetailsProject';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Allskills from './src/screens/AllSkills';
import ProjectVideos from './src/screens/ProjectVideos';
import About from './src/screens/About';

const stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="AllProjects" component={AllProjects} />
        <stack.Screen name="DetailsProject" component={DetailsProject} />
        <stack.Screen name="Allskills" component={Allskills} />
        <stack.Screen name="ProjectVideos" component={ProjectVideos} />
        <stack.Screen name="About" component={About} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
