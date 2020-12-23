import React, { Component } from "react";
import Memo from './Memo';

class MemoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove method is not defined !')
    }

    render() {
        const { data, onRemove } = this.props;

        const list = data.map(
            info => (<Memo key={info.id} info={info} onRemove={onRemove} />)
        );

        return (
            <div id="memoList">{list}</div>
        );
    }
}

export default MemoList;

