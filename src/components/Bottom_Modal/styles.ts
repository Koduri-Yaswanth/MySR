import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  separotor: {
    borderWidth: 1,
    width: 50,
    marginBottom: 0,
    marginTop: -15,
  },
  modalHeading: {
    fontWeight: '500',
    fontSize: 17,
    marginTop: 20,
  },
  modalText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1B2E72',
    marginTop: 20,
    textAlign: 'center',
  },
});
export default styles;
