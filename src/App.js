// importing Libraries and Modules
import React from 'react';
import './App.css';
import Select from './selectComponent';

const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "banana",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Fruit Selected!!");
    this.setState({ fruit: e.target.value });
  }

  render() {
    return (
      <div id="App" className='App'>
        <div className="select-container">
          <Select options={options} defaultValue={"fruits"}></Select>
        </div>
      </div>
    );
  }
}

export default App;
