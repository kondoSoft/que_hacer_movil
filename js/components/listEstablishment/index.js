import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, Body, Thumbnail  } from 'native-base';
import { setEstablishment } from '../../actions/listEstablishment';
import { openDrawer } from '../../actions/drawer';

import styles from './styles'


const {
  reset,
  pushRoute,

} = actions;


class ListEstablishment extends Component {

  static propTypes = {

    setEstablishment: React.PropTypes.func,
    listEstablishment: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setEstablishment(index);
    this.props.pushRoute({ key: route, index: 1}, this.props.navigation.key);
  }

  render() {
    const listEstablishment = Object.keys(this.props.listEstablishment)
    return (
      <Container>
        <Content style= {styles.content}>
          {this.props.listEstablishment.map((item, i) =>
          <Card  key={i} style={styles.card}>
            <CardItem header  style={styles.header}>
              <TouchableOpacity
                onPress={() => this.pushRoute('single', i)}
                >
                <Text style={styles.textHeader}>{this.props.listEstablishment[i].name}</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={styles.bodyText}>
              <TouchableOpacity
                onPress={() => this.pushRoute('single', i)}
                >
                <Thumbnail style={styles.thumbnail} square source={{uri:'https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%9770&w=150&h=70'}}></Thumbnail>
              </TouchableOpacity>
              <Body>
                <CardItem style={styles.cardText}>
                  <TouchableOpacity
                    onPress={() => this.pushRoute('single', i)}
                    >
                    <Text style={styles.textDescription}>{this.props.listEstablishment[i].description}</Text>
                  </TouchableOpacity>
                  <Right style={styles.iconFav}>
                    <Button transparent textStyle={{color: '#87838B'}}>
                      <Icon style={styles.fontIcon} name="heart" />
                      <Text style={styles.textIconFav} >{this.props.listEstablishment[i].favorites}</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Body>
            </CardItem>
          </Card>
        )}
        </Content>
      </Container>

    );
  }
}
function bindAction(dispatch) {
  return {
    setEstablishment: index => dispatch(setEstablishment(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'home' }], key, 0)),
  };
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  listEstablishment: state.listEstablishment.results,
});

export default connect(mapStateToProps, bindAction)(ListEstablishment);
