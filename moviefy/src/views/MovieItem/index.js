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

const MovieItem = ({ title, imageUrl, navigation, size, id }) => {
  const [widthContainer, setWidthContainer] = useState();
  const [heightContainer, setHeightContainer] = useState();
  const [titleSize, setTitleSize] = useState();
  const [ready, setReady] = useState(true);

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
    setReady(true);
  };

  useEffect(() => {
    setStyles(size);
  }, [size]);

  if (ready) {
    return (
      <View
        style={[
          styles.container,
          { width: widthContainer, height: heightContainer },
        ]}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.push('MovieDetail', { movieId: id })}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.title, { fontSize: titleSize }]}>
            {title}
          </Text>
          <View style={styles.info}>
            <View style={styles.rating}>
              <Icon name="star" size={20} color={starYellow} />
              <Text style={styles.text}>5.7</Text>
            </View>

            <Text style={styles.text}>128 min</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

export default MovieItem;
