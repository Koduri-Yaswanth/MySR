import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // position: 'relative',
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
  textip1: {
    borderWidth: 0.6,
    borderColor: '#6C6A6A',
    width: 158,
    height: 48,
    paddingLeft: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  asterisk: {
    color: 'red',
  },
  text2: {
    fontSize: 13,
    lineHeight: 19.5,
    color: '#1B2E72',
    width: 328,
    textAlign: 'center',
    marginTop: 20,
  },
  text3: {
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
    width: 201,
    height: 54,
    marginTop: 20,
    marginBottom: 10,
  },
  arrow: {
    bottom: 27,
    left: 138,
  },
  dropdownView: {
    width: 328,
    borderRadius: 5,
    marginTop: 12,
    borderWidth: 0.6,
    borderColor: '#6C6A6A',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6C6A6A',
  },
  dropdownText: {
    fontSize: 16,
    color: '#1B2E72',
    textAlign: 'left',
  },
  dropdowncontainer: {
    width: 328,
    marginBottom: 20,
    borderRadius: 5,
    margin: 2,
    backgroundColor: '#F1C40F',
  },
  rowIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  eyeIcon: {
    // bottom: 12,
    // left: 120,
    position: 'absolute',
    paddingHorizontal: 14,
    paddingTop: 25,
    zIndex: 1,
  },
  downIcon: {
    position: 'absolute',
    paddingHorizontal: 14,
    marginTop: 25,
  },

  options: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  holder: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  mainView: {
    marginTop: 15,
    paddingBottom: 5,
    borderRadius: 5,
    width: 328,
  },
  style1: {
    borderWidth: 0.6,
    borderColor: '#F1C40F',
    backgroundColor: '#F1C40F',
    paddingTop: Platform.OS === 'android' ? 5 : 14,
    paddingBottom: Platform.OS === 'android' ? 0 : 14,
    paddingHorizontal: 17,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  style: {
    borderWidth: 0.6,
    borderColor: '#1B2E72',
    paddingTop: Platform.OS === 'android' ? 5 : 14,
    paddingBottom: Platform.OS === 'android' ? 0 : 14,
    paddingHorizontal: 17,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 15,
    width: '90%',
  },
  svgHolder: {
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  svg: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    paddingHorizontal: 5,
  },
});

export default styles;
