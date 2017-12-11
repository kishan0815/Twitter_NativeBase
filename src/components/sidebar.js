import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail,
   Text, List, Icon, ListItem, Left, Body, Right } from 'native-base';


export default class Sidebar extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#FFFFFF' }}>

        <Content>
          <Card style={styles.card}>
            <CardItem>
              <Thumbnail
                large
                onPress={() => this.openDrawer()}
                source={require('../img/dp.jpg')}
              />
            </CardItem>
            <CardItem cardBody>
              <Left>
              <Text style={styles.left}>Deadpool</Text>
              </Left>
              <Right>
                <Icon style={styles.right} name="md-arrow-dropdown" />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Left>
              <Text note style={styles.left}>@WadeWilson</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                  <Text>200</Text>
                  <Text note>Following</Text>
                  <Text>240</Text>
                  <Text note>Followers</Text>
              </Left>
            </CardItem>
          </Card>
          <View style={styles.line} />
          <List>

            <ListItem icon>
              <Left>
                <Icon name="md-person" />
              </Left>
              <Body>
                <Text>Profile</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-paper" />
              </Left>
              <Body>
                <Text>Lists</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="md-flash" />
              </Left>
              <Body>
                <Text>Moments</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.bottom}>
              <Left>
                <Icon name="ios-browsers-outline" />
              </Left>
              <Body>
                <Text>Highlights</Text>
              </Body>
            </ListItem>
          </List>
          <View style={styles.line} />
          <List>
            <ListItem>
              <Left>
                <Text>Settings and Privacy</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Help Center</Text>
              </Left>
            </ListItem>
          </List>
          <List>
            <ListItem>
            <Left>
              <Icon name="ios-moon" />
            </Left>
            <Right>
              <Icon name="ios-qr-scanner" />
            </Right>
            </ListItem>
            </List>
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
    marginRight: 16
  },
  bottom: {
    marginBottom: 25
  },
  card: {
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#FFFFFF'
  },
  line: {
      borderBottomColor: '#CCCCCC',
      borderBottomWidth: 1,
      marginBottom: 5
  },
  line2: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 20
  }
});
