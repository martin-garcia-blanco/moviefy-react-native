import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen,
  blackColor,
} from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: widthScreen / 3,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: blackColor,
    marginVertical: heightScreen / 100,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: heightScreen / 3,
    zIndex: 1,
  },

  text: {
    zIndex: 2,
    display: 'flex',
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
    marginBottom: '1%',
  },

  imageContainer: {
    flex: 1,
    width: '100%',
  },

  image: {
    resizeMode: 'cover',
    height: heightScreen / 3,
    borderRadius: 5,
    marginBottom: '-1%',
  },

  title: {
    color: 'white',
  },

  subtitle: {
    color: 'white',
  },
});
