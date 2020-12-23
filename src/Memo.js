import React, { Component } from "react";
import deleteButtonImg from './delete.png';

class Memo extends Component {
    static defaultProps = {
        info: {
            id: 0,
            title: 'title',
            content: 'content'
        },
        onRemove: () => console.warn('onRemove method is not defined !')
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const {
            id, title, content
        } = this.props.info;

        return (
            <div id="memo">
                <div>{id}th memo: <b>{title}</b></div>
                <div>{content}</div>
                <img id="deleteButton" alt="Button to delete this memo" src={deleteButtonImg} onClick={this.handleRemove} />
            </div>
        );
    }
}

export default Memo;