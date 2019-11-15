import React, { Component } from 'react';
import nanoid from 'nanoid';
import Card from "./Components/Card/Card";
import './App.css';


class App extends Component {
    state = {
        text: '',
        tasks: [
            {task: 'Wash dishes', id: nanoid()},
            {task: 'Clean kitchen', id: nanoid()},
            {task: 'Read the book', id: nanoid()},
        ]
    };

    change = event =>{
        this.setState({text: event.target.value});
    };

    addTask = () =>{
        const newTask = {
            task: this.state.text,
            id: nanoid()
        };

        this.setState({tasks: [...this.state.tasks, newTask]});
    };


    remove = id => {
        const taskId = this.state.tasks.findIndex(t => t.id === id);
        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);
        this.setState({tasks});
    };

  render() {
     let tasks = this.state.tasks.map(task => (
         <Card
            key={task.id}
            remove={() => this.remove(task.id)}
            task={task.task}
         />
     ));

    return (
      <div className="App">
        <div style={{paddingTop: '1%'}}>
            <input onChange={this.change} type="text"/>
            <button onClick={this.addTask}>Add</button>
        </div>
          <div style={{paddingLeft: "40%", marginTop: '3%'}}>
          {tasks}
          </div>
      </div>
    );
  }
}

export default App;
