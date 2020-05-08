import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "./App.css";
import axios from "axios";
import { thistle } from "color-name";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then(response => {
      
      this.setState({
        values: response.data
      });
    });
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <div>
          <List>
            {this.state.values.map((x: any) => (
              <List.Item key={x.id}> {x.name} </List.Item>
            ))}
          </List>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default App;
