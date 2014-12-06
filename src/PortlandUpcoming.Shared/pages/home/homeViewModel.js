(function () {

    var homeViewModel = WinJS.Class.define(
        function () {
            // c'tor
        },
        {
            // instance members

            itemDataSource: {
                get: function () {
                    return _itemDataSource;
                }
            },

            start: function() {

                return DataService.getEvents().then(function (list) {

                    var bindingList = new WinJS.Binding.List(list);
                    this._itemDataSource = bindingList.dataSource;

                });
            }
        },
        {
            // static members
        }
    );

    WinJS.Namespace.define('PortlandUpcoming', {
        HomeViewModel : homeViewModel
    });

})();