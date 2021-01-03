import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './styles';

const Person = ({ navigation, route }) => {
  const {
    params: { personId, name },
  } = route;

  const person = {
    biography:
      'A Chilean-born Amercian stage and screen director and actor, best known for his character in HBO\'s "Game of Thrones" and the title role in the popular Disney+ series “Star Wars: The Mandalorian”. Pedro studied acting at the Orange County High School of the Arts and New York University\'s Tisch School of the Arts.',
    birthday: '1975-04-02',
    deathday: null,
    gender: 2,
    homepage: null,
    id: 1253360,
    known_for_department: 'Acting',
    name: 'Pedro Pascal',
    place_of_birth: 'Santiago, Chile',
    profile_path:
      'https://image.tmdb.org/t/p/w400/kpaBw1oyfu2vGS2t9gGBz1Pz7vk.jpg',
  };

  return (
    <ScrollView style={styles.wrapper}>
      {person ? (
        <>
          <View style={styles.top}>
            <Image
              resizeMode="contain"
              source={{ uri: person.profile_path }}
              style={styles.image}
            />
            <View style={styles.information}>
              <Text style={[styles.text, styles.name]}>{person.name}</Text>
              <Text style={styles.text}>{person.place_of_birth}</Text>
              <Text style={styles.text}>{person.known_for_department}</Text>
              <Text style={styles.text}>
                {person.birthday} -{' '}
                {person.deathday ? person.deathday : 'present'}
              </Text>
              <Text style={styles.text}></Text>
            </View>
          </View>
          <View style={styles.biography}>
            <Text style={[styles.biography, styles.text]}>
              {person.biography}
            </Text>
          </View>
          <View style={styles.movies}></View>
        </>
      ) : null}
    </ScrollView>
  );
};

export default Person;
