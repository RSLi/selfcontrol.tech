import React, { Component } from 'react';
import MainLabel from './MainLabel';
import PageButton from './PageButton';

export default class MainScreen extends Component {
    render() {
        return (
            <div className="App-mainLabel">
                <MainLabel/><br/>
                <div>
                    <PageButton label="Analytics" pageName="AnalyticsScreen" onPageChange={this.props.onPageChange}/>
                    <PageButton label="Edit Report" pageName="EditScreen" onPageChange={this.props.onPageChange}/>
                </div>
            </div>
        );
    }
}
