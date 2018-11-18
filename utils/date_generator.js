require('datejs');

let currentDate = {

    getCurrentDate: function () {
        let currentDate = new Date();

        return this.getFormattedDate(currentDate);
    },
    getCurrentDateAndXDays: function (days) {
        let currentDate = new Date();
        let dd = currentDate.add(days).day().getDate();
        let mm = currentDate.getMonth();
        let yyyy = currentDate.getFullYear();

        return this.getFormattedDate(new Date(yyyy, mm, dd));
    },

    getCurrentDateAndXMonths: function (months) {
        let currentDate = new Date();
        let dd = currentDate.getDate();
        let mm = currentDate.add(months).month().getMonth();
        let yyyy = currentDate.getFullYear();

        return this.getFormattedDate(new Date(yyyy, mm, dd));
    },

    getDateAndAddXMonths: function (actualDate, months) {
        let newDate = this.parseDate(actualDate);
        let dd = newDate.getDate() + 1;
        let mm = newDate.add(months).month().getMonth();
        let yyyy = newDate.getFullYear() + 1;

        return this.getFormattedDate(new Date(yyyy, mm, dd));
    },

    getFormattedDate: function (date) {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        return dd + '.' + mm + '.' + yyyy;
    },

    parseDate: function (dateString) {
        let dd = parseInt(dateString.toString().substring(0, 2)) - 1;
        let mm = parseInt(dateString.toString().substring(3, 5)) - 1;
        let yyyy = parseInt(dateString.toString().substring(6, 10)) - 1;

        return new Date(yyyy, mm, dd);
    }

};


module.exports = currentDate;

