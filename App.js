/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './components/Landing'
import LaunchesScreen from './components/LaunchTab'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ApolloClient, InMemoryCache, ApolloProvider,gql,useQuery } from '@apollo/client';

const Stack = createNativeStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
        <Stack.Navigator initialouteName='Landing'>
          <Stack.Screen name ='Landing' component={LandingScreen}options = {{headerShown:false, title:'',}}/>
          <Stack.Screen name ='Launches' component={LaunchesScreen}options = {{headerShown:false, title:'',}}/>
        </Stack.Navigator> 
      </NavigationContainer>
  </ApolloProvider>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
