import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { green } from "ansi-colors";

class App extends React.Component {
  state = {
    text: "",
    todo: ["Learn react", "Learn react native", "react apps"]
  };

  addTodo = () => {
    this.setState({ todo: this.state.text });
  };

  renderTodos = () => {
    return this.state.todo.map(t => {
      return <Text key={t}>{t}</Text>;
    });
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Hello World, this app is great</Text>
        <TextInput
          style={styles.inputStyle}
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ text })}
        />
        <Button title="Add Todo" color="green" onPress={this.addTodo} />
        {this.renderTodos()}
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
