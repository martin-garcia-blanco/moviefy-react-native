import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen,
  itemBackgroundColor,
  blackColor,
} from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: widthScreen / 3,
    height: 'auto',
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
    //paddingBottom: '10%',
  },

  imageContainer: {
    flex: 1,
    //height: heightScreen / 4,
    width: '100%',
  },

  image: {
    //flex: 1,
    resizeMode: 'cover',
    height: heightScreen / 3,
    borderRadius: 5,
  },

  title: {
    color: 'white',
  },

  subtitle: {
    color: 'white',
  },
});
