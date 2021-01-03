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
  movies: {
    marginTop: 20,
  },
  departmentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  departmentOption: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  movieList: {
    display: 'flex',
    flexDirection: 'column',
  },
  option20: {
    width: '20%',
  },
  option40: {
    width: '50%',
  },
  text: {
    color: '#FFFFFF',
  },
  name: { width: '100%', fontSize: 25, color: 'white', marginBottom: '2%' },
});
