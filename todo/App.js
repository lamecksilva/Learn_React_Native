import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { green } from "ansi-colors";

class App extends React.Component {
  state = {
    text: "",
    todo: []
  };

  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: "" });
  };

  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <Text
          style={{ fontSize: 25 }}
          onPress={() => {
            this.deleteTodo(t);
          }}
          key={t}
        >
          {t}
        </Text>
      );
    });
  };

  deleteTodo = t => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({ todo: arr });
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.container}>
          <Text style={styles.title}>Todo App</Text>
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button title="Add Todo" color="green" onPress={this.addTodo} />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    padding: 10,
    flex: 1
  },
  title: {
    fontSize: 40,
    textAlign: "center"
  },
  container: {
    paddingTop: "4%"
  },
  inputStyle: {
    padding: 10,
    height: 40,
    width: "100%",
    borderColor: "green",
    borderWidth: 1
  }
};

export default App;
