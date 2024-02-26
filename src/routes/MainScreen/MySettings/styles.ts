import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rowView: {
    flexDirection: 'row',
    width: 347,
    alignItems: 'center',
  },
  text1: {
    width: 172,
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 10,
  },
  text2: {
    width: 347,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 30,
  },
  box: {
    width: 347,
    height: 99,
    backgroundColor: '#F1C40F',
    borderRadius: 5,
    marginTop: 30,
    padding: 15,
  },
  text3: {
    width: 121,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 120,
  },
  vectorIcon: {
    marginLeft: -10,
    marginTop: 5,
    color: '#2C2C2C',
  },
  notification: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#1B2E72',
    marginHorizontal: 10,
    paddingBottom: 15,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 13,
  },
  backgroundNotification: {
    backgroundColor: 'white',
    opacity: 0.9,
    flex: 1,
    borderRadius: 5,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.12,
    shadowRadius: 5,
    marginTop: 5,
  },
});

export default styles;
