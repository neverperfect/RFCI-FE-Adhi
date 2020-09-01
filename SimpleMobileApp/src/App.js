import React, { Component } from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";

class App extends Component {
    state= {
      myComment: '',
      output: '',
      undo: true,
      value: '',
      prevValue: '',
      nextValue: '',
    };

    handleTextChange = (inputText) => {
      this.setState({ 
        myComment: inputText,
        value: inputText})
    }
    onPress = () => {
      this.setState({ 
        output: this.state.myComment,
        prevValue: this.state.value})
    };

    onUndo = () => {
      if (this.state.undo === true) {
      this.setState( {
        undo: !this.state.undo,
        nextValue: this.state.value,
        value: this.state.prevValue,
      })
      console.log("undo = true", this.state.nextValue, this.state.value)
    } else {
      this.setState( {
        undo: !this.state.undo,
        prevValue: this.state.value,
        value: this.state.nextValue
      })
      console.log("undo = false", this.state.prevValue, this.state.value)
    }
  }

  render() {
    return (
      <View style={{padding:30, backgroundColor: "darkblue"}}>
        <TextInput 
          style={styles.textinput}
          placeholder="Masukkan input"
          onChangeText={this.handleTextChange}
          value={this.state.value}
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
