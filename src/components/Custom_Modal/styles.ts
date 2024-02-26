import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView1: {
    width: 300,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalView2: {
    width: 285,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'center'
  },
  modalText1: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
    color: '#1B2E72',
  },
  modalText2: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  leftButton: {
    backgroundColor: '#F1C40F',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    margin: 10,
  },
  rightButton: {
    backgroundColor: '#6C6A6A',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    margin: 10,
  },
  rightButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  leftButtonText: {
    color: '#1B2E72',
    fontSize: 18,
    fontWeight: '400',
  },
  icon: {
    color: 'red',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default styles;
