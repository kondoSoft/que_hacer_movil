
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Content, Thumbnail, Button, Text  } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import { setZone } from '../../actions/listZone';
import styles from './styles';
import Swiper from 'react-native-swiper'

const {
  reset,
  pushRoute,

} = actions;

class Classified extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    listZone: React.PropTypes.arrayOf(React.PropTypes.object),
    setZone: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setZone(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  render() {
    const listZone = Object.keys(this.props.listZone)
    return (
        <View style={styles.view} showsVerticalScrollIndicator={false}>
          <StatusBar barStyle='light-content' style={{ backgroundColor: 'yellow'}}/>
            <Swiper style={styles.wrapper}
              showsPagination={false}
              horizontal={true}
              loop={false}>
              <View style={styles.slide} showsVerticalScrollIndicator={false}>
                <Row style={styles.row}>
                  {listZone.map((item, i) =>

                    <Col key= {i} style={{ width: 150 }}>
                      <TouchableOpacity
                        onPress={() => this.pushRoute('blankPage', i)}
                      >
                        <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                        <Text>{this.props.listZone[i].name_zone}</Text>
                      </TouchableOpacity>
                    </Col>
                  )}
                </Row>
                <Row style={styles.row}>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                </Row>
              </View>
              <View style={styles.slide}>
                <Row style={styles.row}>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                  <Col style={{ width: 150 }}>
                    <Thumbnail style={{width: 150, height: 70}} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
                  </Col>
                </Row>
              </View>
            </Swiper>
        </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    setZone: index => dispatch(setZone(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
  listZone: state.listZone.results,
});

export default connect(mapStateToProps, bindAction)(Classified);
