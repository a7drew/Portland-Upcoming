(function () {

    function get(url) {

        // TODO: add timeout, retry and error handling

        var url = 'http://padnug.org/api/upcoming';

        return WinJS.xhr({
            url: url,
            responseType: 'json'
        });

    }

    WinJS.Namespace.define("DataService", {
        getEvents: function () {

            return get('http://padnug.org/api/upcoming').then(function (result) {

                if (!result || result.length < 1)
                    return [];

                var list = JSON.parse(result.response);

                if (!list || list.length < 1)
                    return [];

                for (var i = 0; i < list.length; i++) {

                    var item = list[i];

                    if (item.Speakers && item.Speakers.length > 0) {
                        item.firstSpeaker = item.Speakers[0];
                        item.firstSpeaker.formattedImageUrl = 'http://padnug.org' + item.firstSpeaker.ImageUrl;
                    }

                    var d = item.Date.replace(/[^0-9 +]/g, '');
                    item.formattedDate = new Date(parseInt(d));

                    item.Location.formattedCityStateZipCode =
                        item.Location.City + ', ' +
                        item.Location.State + ' ' +
                        item.Location.ZipCode;
                }

                return list;

            });
        }
    });

})();