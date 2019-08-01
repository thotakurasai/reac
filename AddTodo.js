import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }

    onChange = (e) => this.setState({title : e.target.value})
    onSubmit = (e) => {
        e.preventdefault();
        this.props.addTodo(this.state.title);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                Adduser:<input
                    type ="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <br>
                </br>
                <input
                    type ="submit"
                    value="submit"
                    
                />
            </form>
        )
    }
}

export default AddTodo
