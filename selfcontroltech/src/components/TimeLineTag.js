import React, { Component } from 'react';

export default class TimeLineTag extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

    }

    render() {
        return (
            <div className="App-timeLineTag" onClick={this.handleClick}>
                {this.props.tagName}
            </div>
        );
    }

}
