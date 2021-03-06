import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SliderlItem from '../SliderlItem';
import MovieItem from '../MovieItem';

const HorizontalSlider = ({ sliderType, navigation, list }) => {
  const itemToShow = (item) => {
    switch (sliderType) {
      case 'cast':
        return (
          <SliderlItem
            image={item.profile_path}
            title={item.name}
            subtitle={item.character}
          />
        );
      case 'movies':
        return (
          <MovieItem
            size="small"
            navigation={navigation}
            movie={item}></MovieItem>
        );
    }
  };

  return (
    <SafeAreaView /* horizontal={true} */>
      {list && (
        <FlatList
          horizontal={true}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          data={list}
          renderItem={({ item }) => itemToShow(item)}></FlatList>
      )}
    </SafeAreaView>
  );
};

export default HorizontalSlider;
