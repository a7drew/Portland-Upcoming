(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        ready: function (element, options) {

            DataService.getEvents().then(function (list) {

                var bindingList = new WinJS.Binding.List(list);
                eventListView.winControl.itemDataSource = bindingList.dataSource;

            });
        }
    });
})();
