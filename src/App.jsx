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
          // console.log('res:', res);
          this.setState({ data: res.data });
        });
  }

  render() {
    const music = this.state.data;
    console.log('music:', music);
    const categories = music.map((category) => {
      return <li>{category.type.toUpperCase()}</li>;
    });
    return (
      <div className="App">
        <section>
          <div>
            <p>Given some JSON data about music, let's practice parsing values.</p>
          </div>
        </section>
        <section>
          <div>
            <ul className="categories">
              {categories}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
