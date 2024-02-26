import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
  },
  red: {
    color: '#FF1F26',
    fontFamily: 'Poppins-Regular',
    fontSize: Platform.OS === 'ios' ? 14 : 16,
  },
  placeholder1: {
    paddingHorizontal: 14,
    paddingTop: Platform.OS === 'ios' ? 14 : 16,
    paddingBottom: Platform.OS === 'ios' ? 14 : 0,
    fontFamily: 'Poppins-Regular',
    fontSize: Platform.OS === 'ios' ? 14 : 14,
    color: 'gray',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  style: {
    borderWidth: 0.6,
    borderColor: '#1B2E72',
    borderRadius: 5,
    flexDirection: 'row',
  },
  code: {
    flex: 0.5,
    alignSelf: 'center',
    textAlignVertical: 'center',
    paddingRight: 5,
    fontFamily: 'Poppins-Regular',
    color: '#1B2E72',
    paddingTop: Platform.OS === 'android' ? 5 : 0,
    fontSize: Platform.OS === 'ios' ? 14 : 16,
  },
  spacer: {
    width: 0.6,
    backgroundColor: '#1B2E72',
  },
  flagIcon: {
    flex: 0.3,
    alignSelf: 'center',
    paddingVertical: 14,
    paddingLeft: 12,
  },
  placeholder: {
    flex: 3,
    paddingHorizontal: 14,
    paddingTop: Platform.OS === 'ios' ? 14 : 5,
    paddingBottom: Platform.OS === 'ios' ? 14 : 0,
  },
  input: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: Platform.OS === 'ios' ? 14 : 16,
  },
  padding: {
    marginTop: 15
  }
});

export default styles;
