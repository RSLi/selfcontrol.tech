import React, { Component } from 'react';

export default class PageButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onPageChange(this.props.pageName);
    }

    render() {
        return (
            <div className="App-button">
                <a onClick={this.handleClick}>{this.props.label}</a>
            </div>
        );
    }
}
