import React, { Component } from 'react';
import PageButton from './PageButton';
import DonutChart from './DonutChart';

export default class AnalyticsScreen extends Component {
    render() {
        return (
            <div>
                <div className="App-toolbar">
                    <PageButton label="BACK" pageName="MainScreen" onPageChange={this.props.onPageChange}/>
                </div>
                <div id="donut-charts"></div>
                <DonutChart/>
            </div>
        );
    }
}
