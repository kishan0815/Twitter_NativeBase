import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Title, Right,
   Tab, Tabs, TabHeading, Icon, Drawer, Thumbnail } from 'native-base';
import Home from './src/components/home';
import Search from './src/components/search';
import SideBar from './src/components/sidebar';
//create a component 1BA1F2


export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
      <Drawer
        style={styles.tb}
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header hasTabs style={styles.header} >
            <Left>
              <TouchableHighlight onPress={() => this.openDrawer()}>
              <Thumbnail
                small
                onPress={() => this.openDrawer()}
                source={require('./src/img/dp.jpg')}
              />
              </TouchableHighlight>
            </Left>
            <Body>
              <Title style={{ color: '#000000' }}>Home</Title>
            </Body>
            <Right />
          </Header>
          <Tabs tabBgColor="#FFFFFF" tabBarUnderlineStyle={{ borderBottomWidth: 1 }}>
            <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
              <Home />
            </Tab>
            <Tab heading={<TabHeading><Icon name="md-search" /></TabHeading>}>
              <Search />
            </Tab>
            <Tab heading={<TabHeading><Icon name="md-notifications" /></TabHeading>} />
            <Tab heading={<TabHeading><Icon name="md-mail" /></TabHeading>} />
          </Tabs>
        </Container>
      </Drawer>
    );
  }
}



const styles = StyleSheet.create({
  header: {
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#FFFFFF'
  },
  tb: {
    backgroundColor: '#FFFFFF'
  },
});
// Render to device
AppRegistry.registerComponent('albums', () => App);
