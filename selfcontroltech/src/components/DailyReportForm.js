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
        this.onSlotSelected = this.onSlotSelected.bind(this);
        this.onTagSelected = this.onTagSelected.bind(this);
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

    onSlotSelected(hour) {

    }

    onTagSelected(tagName) {

    }

    // render() {
    //     const listOptions = models.getData().preference.tags.map((tagName) =>
    //         <option key={tagName} value={tagName}>{tagName}</option>
    //     );
    //     const hour_num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    //     const listItems = hour_num.map((hour) =>
    //         <tr key={hour.toString()}>
    //             <td>{hour.toString()}</td>
    //             <td>
    //                 <select
    //                     ref={(input) => {
    //                         if (!this.input) {
    //                             this.input = [];
    //                         }
    //                         this.input[hour] = input;
    //                     }}
    //                     className="App-formSelect" defaultValue={this.state.hasReport?this.state.report[hour].tag:"idle"}>
    //                     {listOptions}
    //                 </select>
    //             </td>
    //         </tr>
    //     );
    //
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <table>
    //                 <tbody>
    //                     {listItems}
    //                 </tbody>
    //                 <tfoot>
    //                     <tr><td></td><td><input className="App-button" type="submit" value="Submit" /></td></tr>
    //                 </tfoot>
    //             </table>
    //         </form>
    //     );
    // }

}
