(function () {

    var vm = WinJS.Class.define(
        function () {
            // c'tor
            this.start = this.start.bind(this);
            this.itemInvoked = WinJS.Utilities.markSupportedForProcessing(this.itemInvoked.bind(this));
        },
        {
            // instance members

            itemDataSource: {
                get: function () {
                    return this._itemDataSource;
                }
            },

            start: function () {

                var that = this;

                return DataService.getEvents().then(function (list) {

                    that._list = list;

                    var bindingList = new WinJS.Binding.List(list);
                    that._itemDataSource = bindingList.dataSource;

                });
            },

            itemInvoked: function (e) {

                var item = this._list[e.detail.itemIndex];
                var options = { item: item };

                WinJS.Navigation.navigate("/pages/detail/detail.html", options)

            }
        },
        {
            // static members
        }
    );

    WinJS.Namespace.define('PortlandUpcoming', {
        HomeViewModel: vm
    });

})();