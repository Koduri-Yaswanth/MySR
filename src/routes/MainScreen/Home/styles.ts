import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: 115,
    backgroundColor: '#F1C40F',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1C40F',
    // elevation: 4,
    width: 355,
    height: 45,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  tabItem: {
    flex: 1,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
  },
  activeTabItem: {
    backgroundColor: '#1B2E72',
    borderColor: '#F1C40F',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  searchbox: {
    width: '90%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#1B2E7233',
    padding: 15,
    paddingLeft: 40,
    marginTop: 40,
    alignSelf: 'center',
  },
  searchIcon: {
    position: 'absolute',
    paddingHorizontal: 30,
    paddingTop: 40,
    zIndex: 1,
  },
  microphoneIcon: {
    position: 'absolute',
    paddingHorizontal: 35,
    paddingTop: 40,
    zIndex: 1,
    alignSelf: 'flex-end',
  },
});
export default styles;