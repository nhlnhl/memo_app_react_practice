import React, { Component } from "react";
import './App.css';
import MemoList from './MemoList';
import logoImg from './logo.png';
import createButtonImg from './create.png';

class App extends Component {
    state = {
        id: 0,
        title: '',
        content: '',
        data: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleCreate = () => {
        const { id, data } = this.state;

        this.setState({
            id: id + 1,
            data: data.concat({ id: this.state.id, title: this.state.title, content: this.state.content })
        });

        this.handleInitialize();
    }

    handleInitialize = () => {
        this.setState({
            title: '',
            content: ''
        });
    }

    handleRemove = (id) => {
        const { data } = this.state;

        this.setState({
            data: data.filter(info => info.id !== id)
        });
    }

    render() {
        return (
            <div>
                <img name="logo" alt="Logo of the app" src={logoImg} />
                <form>
                    <input
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name="title"
                    />
                    <input
                        placeholder="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        name="content"
                    />
                    <img name="createButton" alt="Button to create a new memo" src={createButtonImg} onClick={this.handleCreate} />
                </form>
                <MemoList data={this.state.data} onRemove={this.handleRemove} />
            </div>
        );
    }
}

export default App;
