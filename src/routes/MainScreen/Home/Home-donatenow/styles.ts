import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textip: {
    borderWidth: 0.6,
    borderColor: '#6C6A6A',
    width: 328,
    paddingLeft: 15,
    paddingTop: 15,
    marginTop: 15,
    borderRadius: 5,
  },
  calendar: {
    color: '#6D6A6A',
    position: 'absolute',
    marginHorizontal: 15,
    marginTop: 30,
    zIndex: 1,
    alignSelf: 'flex-start',
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
  downIcon: {
    position: 'absolute',
    paddingHorizontal: 14,
    marginTop: 25,
  },
  img: {
    width: 327,
    height: 265,
    marginTop: 5,
  },
});
export default styles;