import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    width: "95%",
    height: 635,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  text1: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B2E72',
  },
  row: {
    marginTop:20,
    marginBottom:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  x: {
    left:75,
  }
});

export default styles;
