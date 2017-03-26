import sample_model from './sample_model.json';

export default {
    init: function() {
        if (!window.localStorage.getItem("scdata")) {
            window.localStorage.setItem("scdata", JSON.stringify(sample_model));
        }
        window.scdata = JSON.parse(window.localStorage.getItem("scdata"));
    },
    getData: function() {
        return window.scdata;
    },
    updateData: function() {
        window.localStorage.setItem("scdata", JSON.stringify(window.scdata));
    },
    getDailyReport: function(date) {
        // data is supposed to be in the format like 2017-03-25
        return window.scdata.reportData[date];
    },
    submitDailyReport: function(date, dailyReport) {
        // data is supposed to be in the format like 2017-03-25
        window.scdata.reportData[date] = dailyReport;
        this.updateData();
    }
}
