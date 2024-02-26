import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  close: {alignSelf: 'flex-end'},
  mainView: {
    width: '88%',
    padding: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {
      height: 10,
      width: 5,
    },
    shadowOpacity: 0.2,
    shadowColor: '#696969',
    zIndex: 9,
    elevation: 5,
    justifyContent: 'center'
  },
  mainTitle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#1B2E72',
    marginTop: 5,
  },
  spacer: {
    height: 10,
  },
});
export default styles;
