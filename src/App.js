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
                <div id="logo">
                    <img alt="Logo of the app" src={logoImg} />
                    <h2>Memo App</h2>
                    <h4>
                        You can add or delete a memo here.<br/>
                        The website was implemented in JavaScript using React.<br/>
                        Feel free to test !
                    </h4>
                </div>
                <form>
                    <textarea
                        id="title"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name="title"
                    />
                    <br/>
                    <textarea
                        id="content"
                        placeholder="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        name="content"
                    />
                    <img id="createButton" alt="Button to create a new memo" src={createButtonImg} onClick={this.handleCreate} />
                </form>
                <MemoList data={this.state.data} onRemove={this.handleRemove} />
            </div>
        );
    }
}

export default App;
