import React, { Component } from 'react';
import PageButton from './PageButton';
import moment from 'moment';
import models from '../models/models';


export default class EditScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().format('Y-M-D')
        };
    }

    render() {
        return (
            <div>
                <div className="App-toolbar">
                    <PageButton label="BACK" pageName="MainScreen" onPageChange={this.props.onPageChange}/>
                </div>
                <div className="App-datePicker">
                    {this.state.date}
                </div>
            </div>
        );
    }
}
