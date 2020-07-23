import { StyleSheet } from 'react-native';
import {
  itemBackgroundColor,
  widthScreen,
  greenColor,
} from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: greenColor,
    margin: 10,
    width: widthScreen * 0.29,
    height: widthScreen * 0.29,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  image: {
    height: '65%',
    width: '65%',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
