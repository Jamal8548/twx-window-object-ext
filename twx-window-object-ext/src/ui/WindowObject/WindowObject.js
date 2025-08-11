TW.Runtime.Widgets.WindowObject = function () {
    var thiz = this;
    var openedWindow = null;

    this.renderHtml = function () {
        return '<div class="widget-content"></div>';
    };

    // Optional: If we want to react when the URL property changes
    this.updateProperty = function (updatePropertyInfo) {
        if (updatePropertyInfo.TargetProperty === "url") {
            thiz.setProperty("url", updatePropertyInfo.SinglePropertyValue);
        }
    };


    this.serviceInvoked = function (serviceName) {
        if (serviceName === "OpenWindow") {
            var url = thiz.getProperty("url");
            if (url) {
                openedWindow = window.open(url, "_blank");
                thiz.setProperty("opened", true);
            }
        }

        if (serviceName === "CloseWindow") {
            if (openedWindow && !openedWindow.closed) {
                openedWindow.close();
                thiz.setProperty("opened", false);
            }
        }
    };
};


