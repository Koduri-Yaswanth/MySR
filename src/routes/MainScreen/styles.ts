import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export default styles;