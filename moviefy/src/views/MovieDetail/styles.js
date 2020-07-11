import { StyleSheet } from 'react-native';
import {
  heightScreen,
  widthScreen,
  greyText,
  buttonBackgroundColor,
  greenColor,
  itemBackgroundColor,
} from '../../helpers/GlobalStyles';

export default StyleSheet.create({
  rootView: {},

  imageContainer: {
    flex: 1,
    height: heightScreen / 3,
  },

  image: {
    flex: 1,
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: heightScreen / 3,
    zIndex: 1,
  },

  mainContainer: {
    width: widthScreen,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  rating: {
    width: '28%',
    height: '100%',
    backgroundColor: itemBackgroundColor,
    display: 'flex',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    marginRight: '3%',
  },
  ratingStar: {
    fontSize: 70,
  },
  ratingText: {
    color: 'white',
    fontSize: 20,
  },

  specs: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    marginHorizontal: '2%',
    flexWrap: 'wrap',
  },

  specsText: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  title: {
    width: '100%',
    fontSize: 25,
    color: 'white',
    marginBottom: '2%',
  },

  specsTextItem: {
    fontSize: 13,
    color: greyText,
    marginLeft: '1%',
  },

  runtime: {
    marginLeft: '10%',
    width: 90,
  },

  director: {
    marginLeft: '1%',
    fontSize: 13,
    width: '100%',
  },

  overview: {
    width: '95%',
    marginVertical: '3%',
    marginHorizontal: '2%',
    textAlign: 'left',
    color: greyText,
  },

  genres: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    paddingHorizontal: '3%',
    flexWrap: 'wrap',
  },

  genreTouchable: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    marginHorizontal: '6%',
    marginVertical: '4%',
  },

  genreText: {
    color: 'white',
  },

  subtitle: {
    marginHorizontal: '3%',
    //marginTop: '8%',
  },

  subtitleText: {
    color: 'white',
    fontSize: 20,
    marginTop: '8%',
  },

  buttonContainer: {
    width: 'auto',
    alignItems: 'center',
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: buttonBackgroundColor,
    alignItems: 'center',
    padding: 5,
    width: widthScreen / 1.03,
    height: heightScreen / 17,
    borderRadius: 5,
  },

  buttonText: {
    color: greenColor,
    fontSize: 17,
  },
});
