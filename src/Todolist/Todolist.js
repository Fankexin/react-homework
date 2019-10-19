import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
export default class Todolist extends Component {
    constructor() {
        super();
        // 获取 localStorage
        let todo = JSON.parse(localStorage.getItem('todo'));
        if (todo === null) {
            this.state = {
                todoList: []
            }
        } else {
            this.state = {
                todoList: todo
            }
        }
    }

    addItem = (data) => {
        let todo = {"title": data, "done": false}
        this.setState({
            todoList: [...this.state.todoList, todo]
        })
    }
    changeItem = (idx) => {
        let todoList = [...this.state.todoList];
        todoList[idx].done = !todoList[idx].done;
        this.setState({
            todoList: todoList
        })
    }
    delItem = (idx) => {
        let todoList = [...this.state.todoList];
        todoList.splice(idx, 1);
        this.setState({
            todoList: todoList
        });
    }

    render() {
        // 更新 localStorage
        localStorage.setItem('todo', JSON.stringify(this.state.todoList));
        let doing = 0;
        let done = 0;

        // 获取正在进行和已完成的数量
        this.state.todoList.forEach((item) => {
            if (item.done === false) {
                doing++;
            } else {
                done++;
            }
        });
    
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing change={this.changeItem} del={this.delItem} todoList={this.state.todoList} doing={doing} done={done}/>
            </div>
        )
    }
}
