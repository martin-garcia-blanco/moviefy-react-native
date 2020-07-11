import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen,
  greenColor,
  itemBackgroundColor,
  buttonBackgroundColor,
} from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: itemBackgroundColor,
    marginHorizontal: (widthScreen / 100) * 2,
    marginVertical: heightScreen / 100,
    paddingBottom: heightScreen / 100,
    paddingHorizontal: widthScreen / 100,
    paddingTop: widthScreen / 100,

    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  imageContainer: {
    height: heightScreen / 3,
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 5,
  },

  textContainer: {
    marginTop: 5,
    paddingHorizontal: '2%',
  },

  info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  text: {
    color: 'white',
    fontSize: 13,
    margin: 1.5,
  },

  title: {
    color: 'white',
  },

  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '35%',
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 5,
  },

  button: {
    backgroundColor: buttonBackgroundColor,
    alignItems: 'center',
    padding: 5,
    width: '98%',
    borderRadius: 5,
  },

  buttonText: {
    color: greenColor,
  },
});
