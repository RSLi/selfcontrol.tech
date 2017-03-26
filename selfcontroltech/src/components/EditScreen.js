import React, { Component } from 'react';
import PageButton from './PageButton';

export default class EditScreen extends Component {
    render() {
        return (
            <div className="App-toolbar">
                <PageButton label="BACK" pageName="MainScreen" onPageChange={this.props.onPageChange}/>
            </div>
        );
    }
}
