import React, { Component } from "react";
import deleteButton from './delete.png';

class Memo extends Component {
    static defaultProps = {
        info: {
            title: 'title',
            content: 'content'
        }
    }

    // TODO: handleDelete method

    render() {
        const {
            title, content
        } = this.props.info;

        return (
            <div>
                <div><b>{title}</b></div>
                <div>{content}</div>
                <img src={deleteButton} />
            </div>
        );
    }
}

export default Memo;