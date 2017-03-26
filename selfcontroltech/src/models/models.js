import moment from 'moment';
import sample_model from './sample_model.json';

export default models_localStorage = {
    init: function() {
        if (!window.localStorage.username) {
            window.localStorage = sample_model;
        }
        window.scdata = window.localStorage;
    },
    getData: function() {
        return window.scdata;
    },
    updateData: function() {
        window.localStorage = window.scdata;
    },
    getDailyReport: function(date) {
        // data is supposed to be in the format like 2017-03-25
        return window.scdata.reportData.[date];
    },
    submitDailyReport: function(date, dailyReport) {
        // data is supposed to be in the format like 2017-03-25
        window.scdata.reportData.[date] = dailyReport;
        this.updateData();
    }
}
