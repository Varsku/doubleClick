/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {TouchableHighlight, Text, SafeAreaView} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clicks = 0;
    this.timeOut = '';
  }

  singleClick = () => {
    console.log('Button clicked once');
  };

  doubleClick = () => {
    console.log('Button clicked twice');
  };

  handleClicks = () => {
    this.clicks++;
    if (this.clicks === 1) {
      this.timeOut = setTimeout(() => {
        this.clicks = 0;
        this.singleClick();
      }, 500);
    } else if (this.clicks === 2) {
      clearTimeout(this.timeOut);
      this.clicks = 0;
      this.doubleClick();
    }
  };

  render() {
    return (
      <SafeAreaView>
        <TouchableHighlight onPress={() => this.handleClicks()}>
          <Text>Click me!</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
};

export default App;
