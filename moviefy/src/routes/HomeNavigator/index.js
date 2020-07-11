import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MovieDetail from '../../views/MovieDetail';
import MovieItem from '../../views/MovieItem';
import Home from '../Home';
import MovieList from '../../views/MovieList';
import styles from './styles';
import { blackColor } from '../../helpers/GlobalStyles';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: 'white',
          cardStyle: { backgroundColor: blackColor },
        }}>
        <Stack.Screen name="Home" component={Home} options={{ header: Home }} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="MovieItem" component={MovieItem} />
        <Stack.Screen name="MovieList" component={MovieList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
