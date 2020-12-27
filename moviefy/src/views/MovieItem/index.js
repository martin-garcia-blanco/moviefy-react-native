import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
Icon.loadFont();
import {
  starYellow,
  widthScreen,
  heightScreen,
} from '../../helpers/GlobalStyles';

const MovieItem = ({ movie, navigation, size }) => {
  const { poster_path, id, title, vote_average } = movie;
  const [widthContainer, setWidthContainer] = useState();
  const [heightContainer, setHeightContainer] = useState();
  const [titleSize, setTitleSize] = useState();

  const setStyles = (size) => {
    switch (size) {
      case 'small':
        setWidthContainer(widthScreen / 2.5);
        setHeightContainer(heightScreen / 2.3);
        setTitleSize(15);

      case 'medium':
        setWidthContainer(widthScreen / 2.2);
        setHeightContainer(heightScreen / 1.9);
        setTitleSize(19);

      default:
        setWidthContainer(widthScreen / 2.2);
        setHeightContainer(heightScreen / 1.9);
        setTitleSize(15);
    }
  };

  useEffect(() => {
    setStyles(size);
  }, [size]);

  return (
    <View
      style={[
        styles.container,
        { width: widthContainer, height: heightContainer },
      ]}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.push('MovieDetail', { movieId: id })}>
        <Image source={{ uri: poster_path }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title, { fontSize: titleSize }]}>
          {title.length > 25 ? `${title.substring(0, 25)} ...` : title}
        </Text>
        <View style={styles.rating}>
          <Icon name="star" size={20} color={starYellow} />
          <Text style={styles.text}>{vote_average}</Text>
        </View>
      </View>

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to List</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default MovieItem;
