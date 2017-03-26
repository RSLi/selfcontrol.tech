import React, { Component } from 'react';
import PageButton from './PageButton';
import moment from 'moment';
import models from '../models/models';
import DailyReportForm from '../components/DailyReportForm';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


export default class EditScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().format('YYYY-MM-DD')
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    handleChangeDate(date) {
        this.setState({
            date: moment(date).format('YYYY-MM-DD')
        });
    }

    render() {

        let label_has_report = null;
        if (!models.getDailyReport(this.state.date)) {
            label_has_report = (
                <div>There is no record for this day :(</div>
            );
        } else {
            label_has_report = null;
        }
        return (
            <div>
                <div className="App-toolbar">
                    <PageButton label="BACK" pageName="MainScreen" onPageChange={this.props.onPageChange}/>
                </div>
                <div className="App-reportForm">
                    {label_has_report}
                    <DailyReportForm date={this.state.date}/>
                </div>
                <div className="App-datePicker">
                    <InfiniteCalendar onSelect={this.handleChangeDate}/>
                </div>
            </div>
        );
    }
}
