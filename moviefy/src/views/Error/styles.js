import { StyleSheet } from 'react-native';
import {
  heightScreen,
  logoBackground,
  whiteColor,
  widthScreen,
} from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: logoBackground,
    display: 'flex',
    flexDirection: 'column',
    height: heightScreen,
    justifyContent: 'flex-start',
    paddingTop: '30%',
  },

  image: {
    height: '30%',
  },

  text: {
    color: whiteColor,
    fontSize: 18,
    marginTop: '10%',
    textAlign: 'center',
    width: widthScreen * 0.9,
  },
});
