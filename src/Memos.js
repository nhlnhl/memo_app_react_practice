import React, { Component } from "react";
import Memo from './Memo';

class Memos extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const { data } = this.props;

        const list = data.map(
            info => (<Memo key={info.id} info={info} />)
        );

        return (
            <div>
                <div>{list}</div>
            </div>
        );
    }
}

export default Memos;

