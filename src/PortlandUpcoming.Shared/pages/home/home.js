(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        ready: function (element, options) {

            var vm = new PortlandUpcoming.HomeViewModel();

            vm.start().then(function () {
                WinJS.Binding.processAll(element, vm);
            });
        }
    });
})();
