import React, { Component } from 'react'
import './todo.css'

export default class Todoinput extends Component {
    handleInput = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            this.props.add(e.target.value);
            e.target.value = '';
        }
    }

    componentDidMount() {
        console.log(this.refs.a);
        this.refs.a.focus();
    }
    render() {
        return (
            <div className='topH'>
                <div className='header'>
                    <label htmlFor="title">ToDoList</label>
                    <input id="title" name='title' ref="a" required='required' onKeyDown={this.handleInput} type='text' placeholder='添加ToDo'></input>
                </div>
            </div>
        )
    }
}
