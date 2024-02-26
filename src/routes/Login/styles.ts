import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  text1: TextStyle;
  text2: TextStyle;
  text3: TextStyle;
  text4: TextStyle;
  seperator: ViewStyle;
  img: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 36,
    color: '#1B2E72',
    width: 328,
  },
  text2: {
    fontSize: 12,
    lineHeight: 18,
    color: '#1B2E72',
    width: 328,
    textAlign: 'right',
    marginTop: 10,
  },
  text3: {
    fontSize: 13,
    lineHeight: 19.5,
    color: '#1B2E72',
    width: 328,
    textAlign: 'center',
    marginTop: 20,
  },
  text4: {
    fontSize: 11,
    lineHeight: 16.5,
    color: '#1B2E72',
    textAlign: 'center',
  },
  seperator: {
    width: 122,
    height: 1,
    marginTop: 9,
    borderBottomWidth: 1,
    borderColor: '#1B2E72',
  },
  img: {
    width: 240,
    height: 241,
    marginBottom: 20,
    marginTop: 30,
  },
  rowIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  eyeIcon: {
    position: 'absolute',
    paddingHorizontal: 14,
    paddingTop: 25,
    zIndex: 1,
  },
});

export default styles;
