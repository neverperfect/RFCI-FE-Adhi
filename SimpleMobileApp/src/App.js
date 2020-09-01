import React, { Component } from "react";
import { TextInput, Button, Image, StyleSheet, Text, View } from "react-native";

class App extends Component {
    state= {
      myComment: '',
      output: '',
      undo: true,
    };

    handleTextChange = (inputText) => {
      this.setState({ myComment: inputText})
    }
    onPress = () => {
      this.setState({ output: this.state.myComment})
    };

    onUndo = () => {
      this.setState( {
        undo: !this.state.undo,
      })
    }

  render() {
    return (
      <View style={{padding:30, backgroundColor: "darkblue"}}>
        <TextInput 
          style={styles.textinput}
          placeholder="Masukkan input"
          onChangeText={this.handleTextChange}
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.onPress}
              title="Reverse"/>
            <Button
              onPress={this.onUndo}
              title={this.state.undo ? "Undo" : "Redo"}/>
          </View>
          <Text style={styles.title}>Output: {this.state.output.split("").reverse().join("")} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
    color: "white"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  buttonContainer: {
    paddingTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default App;
