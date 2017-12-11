
import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Left, Button, Icon, Right, Thumbnail, Body, Text } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem style={styles.bottom}>
              <Left>
                <Thumbnail small source={require('../img/mk1.jpg')} />
                <Body>
                  <Text>Marques Brownlee <Text note> @MKBHD   Dec 6</Text></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>NEW VIDEO - Portrait Mode: Explained!</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../img/mk2.jpg')} style={{ height: 125, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                  <Icon style={styles.isize} name="ios-undo" />
                  <Text note style={styles.right}>60</Text>
                  <Icon style={styles.isize} name="md-repeat" />
                  <Text note style={styles.right}>25</Text>
                  <Icon style={styles.isize} name="md-heart-outline" />
                  <Text note style={styles.right}>10000</Text>
                  <Icon style={styles.isize} name="md-mail" />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.bottom}>
              <Left>
                <Thumbnail small source={require('../img/op1.jpg')} />
                <Body>
                  <Text>OnePlus <Text note> @oneplus   3 hours ago</Text></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>Ready to take charge?</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../img/op2.jpg')} style={{ height: 125, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Icon style={styles.isize} name="ios-undo" />
                <Text note style={styles.right}>40</Text>
                <Icon style={styles.isize} name="md-repeat" />
                <Text note style={styles.right}>12</Text>
                <Icon style={styles.isize} name="md-heart-outline" />
                <Text note style={styles.right}>2000</Text>
                <Icon style={styles.isize} name="md-mail" />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.bottom}>
              <Left>
                <Thumbnail small source={require('../img/icc1.jpg')} />
                <Body>
                  <Text>ICC <Text note> @ICC   2 hours ago</Text></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>@amlahash and @QuinnyDeKock69 pulled off the biggest unbeaten ODI chases</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../img/icc2.jpg')} style={{ height: 125, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Icon style={styles.isize} name="ios-undo" />
                <Text note style={styles.right}>48</Text>
                <Icon style={styles.isize} name="md-repeat" />
                <Text note style={styles.right}>59</Text>
                <Icon style={styles.isize} name="md-heart-outline" />
                <Text note style={styles.right}>6000</Text>
                <Icon style={styles.isize} name="md-mail" />
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    paddingLeft: 16
  },
  right: {
    marginRight: 43
  },
  bottom: {
    marginBottom: 0,
    height: 36
  },
  isize: {
    fontSize: 20,
    color: '#555555'
  }
});
