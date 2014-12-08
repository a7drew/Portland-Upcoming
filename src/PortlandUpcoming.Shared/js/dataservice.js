(function () {

    function get(url) {

        // TODO: add timeout, retry and error handling

        var url = 'http://padnug.org/api/upcoming';

        return WinJS.xhr({
            url: url,
            responseType: 'json'
        });

    }

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function formatItem(item) {

        if (item.Speakers && item.Speakers.length > 0) {
            item.firstSpeaker = item.Speakers[0];
            item.firstSpeaker.formattedImageUrl = 'http://padnug.org' + item.firstSpeaker.ImageUrl;
        }

        var d = item.Date.replace(/[^0-9 +]/g, '');
        d = new Date(parseInt(d));

        var h = d.getHours() + 3;
        var m = d.getMinutes();

        var amPM = (h > 11) ? 'PM' : 'AM';

        if (h > 12)
            h -= 12;

        var t = h + ':' + pad(m, 2) + ' ' + amPM;

        item.formattedDate = d.toDateString() + ', ' + t;

        item.Location.formattedCityStateZipCode =
            item.Location.City + ', ' +
            item.Location.State + ' ' +
            item.Location.ZipCode;
    }

    WinJS.Namespace.define("DataService", {
        getEvents: function () {

            return get('http://padnug.org/api/upcoming').then(function (result) {

                if (!result || result.length < 1)
                    return [];

                var list = JSON.parse(result.response);

                if (!list || list.length < 1)
                    return [];

                for (var i = 0; i < list.length; i++)
                    formatItem(list[i]);

                return list;

            });
        }
    });

})();