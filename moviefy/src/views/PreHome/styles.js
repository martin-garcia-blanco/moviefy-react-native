import { StyleSheet } from 'react-native';
import { heightScreen, logoBackground } from '../../helpers/GlobalStyles';

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

  spinner: {
    height: 50,
    marginTop: '10%',
  },
});
