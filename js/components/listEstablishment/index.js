import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail  } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

import styles from './styles'
import Swiper from 'react-native-swiper';



const {
  reset,
  pushRoute,

} = actions;


class ListEstablishment extends Component {

  pushRoute(route, index) {
    this.props.setZone(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
          <Content>
              <Card>
              <CardItem header style={styles.leftHeader}>
                <Text >Hotel del Gobernador</Text>
              </CardItem>
              <CardItem style={styles.bodyText}>

                <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>

                <Body>
                  <CardItem style={styles.cardText}>
                    <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
                    <Right style={styles.iconFav}>
                       <Text style={styles.textIconFav}><Icon name="heart" />000</Text>
                    </Right>
                  </CardItem>
                </Body>
              </CardItem>
             </Card>
          </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
  listZone: state.listZone.results,
});

export default connect(mapStateToProps)(ListEstablishment);
