import React, { Component } from 'react';
import models from '../models/models';

export default class DailyReportForm extends Component {
    constructor(props) {
        super(props);

        //if data exist for this day, use not defaultValue
        var report = models.getDailyReport(this.props.date);
        var hasReport = true;
        if (!report) {
            hasReport = false;
        }
        this.state = {
            "hasReport": hasReport,
            "report": report
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        var report = {};
        for (var i = 0; i < 24; i++) {
            report[i] = {
                "tag": this.input[i].value,
                "efficiency": 1
            }
        }
        models.submitDailyReport(this.props.date,report);
        this.setState({
            "report": report
        });
        alert('Successful Submission: ');
        event.preventDefault();
    }

    render() {
        const hour_num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
        const listItems = hour_num.map((hour) =>
            <li key={hour.toString()}>
                <label>{hour.toString()}</label>
                <select id="{'hour_select_' + hour.toString()}"
                    ref={(input) => {
                        if (!this.input) {
                            this.input = [];
                        }
                        this.input[hour] = input;
                    }}
                    className="App-formSelect" defaultValue={this.state.hasReport?this.state.report[hour].tag:"idle"}>
                    <option value="idle">idle</option>
                    <option value="sleep">sleep</option>
                    <option value="entertainment">entertainment</option>
                    <option value="homework">homework</option>
                    <option value="work">work</option>
                    <option value="meeting">meeting</option>
                    <option value="social">social</option>
                    <option value="exercise">exercise</option>
                    <option value="other">other</option>
                </select>
            </li>
        );

        return (
            <form onSubmit={this.handleSubmit}>
                <ul style={{"listStyle": "none"}}>
                    {listItems}
                </ul>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}
