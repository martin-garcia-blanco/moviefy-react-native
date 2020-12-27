import FeatherIcon from 'react-native-vector-icons/Feather';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import ComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

FeatherIcon.loadFont();
OcticonIcon.loadFont();
ComunityIcon.loadFont();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { globalStyles, greenColor } from './src/helpers/GlobalStyles';
import HomeNavigator from './src/routes/HomeNavigator';
import Search from './src/routes/Search';
import User from './src/routes/User';
import GenresNavigator from './src/routes/GenresNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case 'Home':
                  return <OcticonIcon name="home" size={size} color={color} />;

                case 'Genres':
                  return (
                    <ComunityIcon name="movie-roll" size={size} color={color} />
                  );
                // case 'Search':
                //   return (
                //     <OcticonIcon name="search" size={size} color={color} />
                //   );

                // case 'You':
                //   return <FeatherIcon name="user" size={size} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: greenColor,
            inactiveTintColor: '#ededed',
            inactiveBackgroundColor: '#323232',
            activeBackgroundColor: '#323232',
            adaptive: true,
            allowFontScaling: true,
            labelStyle: {
              fontSize: 12,
            },
            tabStyle: {
              height: 55,
              paddingTop: 6,
              paddingBottom: 6,
            },
          }}>
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Genres" component={GenresNavigator} />
          {/* <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="You" component={User} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
