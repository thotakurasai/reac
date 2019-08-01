import React from 'react';
import {TodoItem} from "./TodoItem";

export class Todos extends React.Component{
    render(){
        //console.log(this.props.todos)
        //return this.props.todos.map((todo)=>(
        //    <h3>{todo.id}</h3>
        //    <h3>{todo.title}</h3>
        //));
        
        return this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>

        ));
    }
} 
export default Todos;