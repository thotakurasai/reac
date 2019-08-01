import React from 'react';
import {Todos} from "./Homepage/Todos";
import {AddTodo} from "./Homepage/AddTodo";
import './App.css';


class App extends React.Component{
  addTodo = (title) =>{
    const newTodo={
      id:4,
      title
    }
    this.setState({todos:[newTodo]})
  }
  state={
    todos:[
      {
        id:1,
        title:"lol"
      },
      {
        id:2,
        title:"haha"
      }
    ]
  }
  render(){
    return (
        <div className="App">
          <AddTodo addtodo={this.addTodo}/>
          <Todos todos={this.state.todos} />

    </div>
  );
}
}

export default App;
