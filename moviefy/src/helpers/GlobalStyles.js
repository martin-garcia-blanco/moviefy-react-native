import { StyleSheet, Dimensions } from 'react-native';

export const blackColor = '#000000';
export const whiteColor = '#FFFFFF';
export const starYellow = '#f6c90e';
export const greenColor = '#61d4b3';
export const greyText = '#cccccc';
export const itemBackgroundColor = '#222831';
export const buttonBackgroundColor = '#303841';
export const logoBackground = '#033249';
export const logoColor = '#ff8038';

export const globalStyles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: blackColor,
    //paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;
