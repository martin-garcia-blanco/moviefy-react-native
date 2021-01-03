import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { blackColor } from '../../helpers/GlobalStyles';
import MovieDetail from '../../views/MovieDetail';
import MovieItem from '../../views/MovieItem';
import MovieList from '../../views/MovieList';
import Person from '../../views/Person/Person';
import GenreMovies from '../GenreMovies';
import Home from '../Home';
import styles from './styles';

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={() => ({ title: '' })}
        />
        <Stack.Screen name="MovieItem" component={MovieItem} />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen
          name="GenreMovies"
          component={GenreMovies}
          options={({ route }) => ({ title: route.params.genreName })}
        />
        <Stack.Screen
          name="PersonDetail"
          component={Person}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
