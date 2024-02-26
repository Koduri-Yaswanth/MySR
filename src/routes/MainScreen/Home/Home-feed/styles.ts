import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
  },

  image1: {
    width: 68,
    height: 68,
    borderRadius: 100,
    margin: 5,
  },
  image2: {
    width: 400,
    height: 144,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  image3: {
    width: 113,
    height: 74,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#F9E7A2',
  },
  text1: {
    fontWeight: '500',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  text2: {
    width: '90%',
    fontWeight: '500',
    fontSize: 17,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
  },
  text3: {
    fontWeight: '500',
    fontSize: 9,
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 5,
    paddingRight: 2,
  },
  text4: {
    fontWeight: '400',
    fontSize: 7,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 5,
  },
  text5: {
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 5,
    color: 'white',
  },
  text6: {
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 5,
    color: 'white',
  },
  view3: {
    width: 125,
    height: 180,
    marginLeft: 10,
    borderRadius: 5,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 7,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 10,
  },
});
export default styles;