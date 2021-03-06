import React from 'react';
import { FlatList, View } from 'react-native';
import { genres } from '../../helpers/constants';
import GenreItem from '../../views/GenreItem';
import styles from './styles';
import Header from '../../views/Header/Header';

const Genres = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Header text="Genres" />
      <FlatList
        style={styles.list}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        data={genres}
        renderItem={({ item }) => (
          <GenreItem genre={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Genres;
