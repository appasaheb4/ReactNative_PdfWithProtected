/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules
} from "react-native";
import RNHTMLtoPDF from "react-native-html-to-pdf";
//var QRCode = require("qrcode-svg");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  createPdf = async () => {
    let options = {
      padding: 0,
      height: 842,
      width: 595,
      html:
        "<h1>" +
        "Testing pdf" +
        "</h1>" +
        "<h3 style='text-decoration: underline;'>Part 1<h3>"
      //new QRCode("part1").svg()
    };
    let file = await RNHTMLtoPDF.convert(options);
    console.log({ file });
    // pdf passwod
    var PdfPassword = NativeModules.PdfPassword;
    PdfPassword.addEvent(file, "123456");
    //resolve( file.filePath );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Create Pdf" onPress={() => this.createPdf()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
