import { StyleSheet } from 'react-native';
import { widthScreen } from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  listContainer: {
    width: widthScreen,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
