import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const SliderItem = ({ image, title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,1)']}
        style={styles.gradient}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 0, y: 1 }}></LinearGradient>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SliderItem;
