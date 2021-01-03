import { StyleSheet } from 'react-native';
import { heightScreen, widthScreen } from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  wrapper: { marginHorizontal: 5 },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    height: heightScreen / 3,
    width: widthScreen / 2.1,
    backgroundColor: '#FFFFFF',
  },
  information: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  biography: {
    marginTop: 10,
  },
  movies: {},
  text: {
    color: '#FFFFFF',
  },
  name: { width: '100%', fontSize: 25, color: 'white', marginBottom: '2%' },
});
