import React, { Component } from "react";
import logo from './logo.png';
import './App.css';
import Memos from './Memos';
import createButton from "./create.png"

class App extends Component {
    id = 0

    state = {
        title: '',
        content: '',
        information: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleCreate = (e) => {
        const { information } = this.state;

        this.setState({
            information: information.concat({ id: this.id++, title: this.state.title, content: this.state.content })
        })
    }

    render() {
        return (
            <div>
                <img src={logo} />
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
                    <img src={createButton} onClick={this.handleCreate} />
                </form>
                <Memos data={this.state.information} />
            </div>
        );
    }
}

export default App;
