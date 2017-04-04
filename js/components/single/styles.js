import { Dimensions } from 'react-native';
const React = require('react-native');

const { StyleSheet } = React;
const { width, height } = Dimensions.get('window');

export default {

  header:{
    paddingRight: 0,
    paddingLeft: 0,
    height:300,
    zIndex: 1,
  },
  body:{
    flexDirection: 'row',
    bottom: 130,

  },
  image:{
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    height: 300,

  },
  fontIconHeart:{
    fontSize: 24,
    color: '#fff',
  },
  headerRight:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonMaps:{
    justifyContent: 'center',

  },
  gridDescription:{
    padding: 15,
  },
  colDescription:{
    flexDirection: 'row',
  },
  rowDescription:{
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
    marginTop: 5,
  },
  rowMain:{
    paddingTop: 10,
    maxWidth: 270,
  },
  fontText:{
    fontSize: 10,
    paddingBottom: 7,
  },
  textRow:{
    marginTop: 2,
    marginLeft: 5,
    fontSize: 11,
    color: 'dimgray'
  },
  iconGray:{
    color: 'darkgray',
    fontSize: 18,
  },
  iconFooter:{
    marginRight: 13,
    marginTop: 5,
    marginBottom: 5,
    color: 'dodgerblue',
  },
  fontFooter:{
    fontSize: 10,
    color: 'gray',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
  fab:{
    backgroundColor: '#5067FF',

  },
  buttonW:{
    backgroundColor: '#34A34F',

  },
  buttonF:{
    backgroundColor: '#3B5998',

  },
  buttonM:{
    backgroundColor: '#DD5144',

  },

};
