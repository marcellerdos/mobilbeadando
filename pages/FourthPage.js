// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, SafeAreaView , ScrollView, Image, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
//import all the components we are going to use.
 
export default class FourthPage extends React.Component {
  render() {
    return (
    <WebView source={{ uri: 'https://www.facebook.com/pages/category/Winery-Vineyard/Erd%C5%91s-Pince-Borkatakomba-218730594813246/' }} />
    );
  }
}
const styles = StyleSheet.create({
});