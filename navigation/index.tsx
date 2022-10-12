/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */ 

 import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import  HomeScreen from '../screens/HomeScreen/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MovieDetailsScreen from '../screens/MovieDetailsScreen/MovieDetailsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
     // linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const HomeStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <HomeStack.Navigator> 
      <HomeStack.Screen name="Home" component={ HomeScreen} options={{ headerShown: false }} /> 
      <HomeStack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} options={{ headerShown: true ,  headerTintColor: "white"  }} />
      <HomeStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      
    </HomeStack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={RootNavigator} 
        
        options={{
          tabBarIcon: ({ color }) =>  <AntDesign name="home" size={24} color ={color}   / > ,
           headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoScreen}
        options={{
         // title: 'Tab Two',
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color ={color} />,
        }}
      /> 
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
        //  title: 'Tab Two',
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color}/>,
        }}
      />    
       <BottomTab.Screen
        name="Downloads"
        component={TabTwoScreen}
        options={{
       //   title: 'Tab Two',
          tabBarIcon: ({ color }) =>   <AntDesign name="download" size={24} color={color} />,
        }}
      /> 

      
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

