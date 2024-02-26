import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';


interface Styles {
  container: ViewStyle;
  welcome: TextStyle;
  text1: TextStyle;
  img: ImageStyle;
  text2: TextStyle;
  textip: ViewStyle;
}


const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontWeight: '600',
    fontSize: 24,
    color: '#1B2E72',
    lineHeight: 36,
    marginTop: 30,
  },
  text1: {
    fontWeight: '400',
    fontSize: 13,
    color: '#1B2E72',
    lineHeight: 19.5,
  },
//   img: {
//     width: 100,
//     height: 100,
//   },
  text2: {
    height: 48,
    width: 328,
    borderWidth: 0.6,
    borderColor: '#6C6A6A',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    paddingTop: 8,
    color: '#1B2E72',
    marginBottom: 15,
  },
  textip: {
    width: 328,
    height: 48,
    borderWidth: 0.6,
    borderColor: '#6C6A6A',
    marginTop: 15,
    paddingLeft: 15,
  },
  img: {
    width: 290,
    height: 265,
    marginTop: 80,
    marginBottom: 50,
  },
});

export default styles;
