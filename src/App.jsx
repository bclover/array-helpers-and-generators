import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor (props) {
    super();
    this.state = {
      data: [],
    };
    axios.get('http://localhost:3000/music.json')
        .then(res => {
          this.setState({ data: res.data });
        });
  }

  render() {
    return (
      <div className="App">
        <section>
          <div>
            <p>Given the following data, let's practice parsing values.</p>
            <p className="json-data">
              {this.state.data}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
