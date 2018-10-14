import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { green } from "ansi-colors";

class App extends React.Component {
  state = {
    todo: "This is our message on screen"
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Hello World, this app is great</Text>
        <TextInput
          style={styles.inputStyle}
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ todo: text })}
        />
        <Button title="Add Todo" color="green" />
        <Text>{this.state.todo}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  inputStyle: {
    height: 40,
    width: "100%",
    borderColor: "green",
    borderWidth: 1
  }
};

export default App;
