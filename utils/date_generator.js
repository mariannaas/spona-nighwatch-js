require('datejs');

let currentDate = {

    getCurrentDate: function (optionalAddMonth) {
        let monthToAdd = (typeof optionalAddMonth === 'undefined') ? 0 : optionalAddMonth;
        let today = new Date();
        let dd = today.getDate();
        let mm = today.add(monthToAdd).month().getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        return dd + '.' + mm + '.' + yyyy;
    },

};


module.exports = currentDate;

