(function () {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    Date.prototype.getMonthName = function () {
        return months[this.getMonth()];
    };

    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };

    Date.prototype.getFormattedTime = function () {

        var hours = this.getHours();
        var isPM = hours > 11;
        if (hours > 12)
            hours -= 12
        var min = this.getMinutes();
        if (min < 10)
            min = '0' + min;

        return hours + ':' + min;
    };

})();