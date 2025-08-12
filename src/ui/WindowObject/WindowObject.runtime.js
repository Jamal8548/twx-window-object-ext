TW.Runtime.Widgets.WindowObject = function () {
  var thiz = this;
  var openedWindow = null;

  this.renderHtml = function () {
    return '<div class="widget-content"></div>';
  };

  // Optional: react to URL changes
  this.updateProperty = function (u) {
    if (u.TargetProperty === 'url') {
      thiz.setProperty('url', u.SinglePropertyValue);
    }
  };

  // Explicit service implementations
  this.OpenWindow = function () {
    var url = thiz.getProperty('url');
    if (!url) { thiz.jqElement.triggerHandler && thiz.jqElement.triggerHandler('Failed'); return; }

    openedWindow = window.open(url, '_blank');
    if (openedWindow) {
      thiz.setProperty('opened', !openedWindow.closed);
      thiz.jqElement.triggerHandler && thiz.jqElement.triggerHandler('Opened');
    } else {
      thiz.jqElement.triggerHandler && thiz.jqElement.triggerHandler('Failed'); // popup blocker, etc.
    }
  };

  this.CloseWindow = function () {
    if (openedWindow && !openedWindow.closed) {
      openedWindow.close();
      thiz.setProperty('opened', false);
      thiz.jqElement.triggerHandler && thiz.jqElement.triggerHandler('Closed');
    }
  };

  // (Optional) also support the generic dispatcher
  this.serviceInvoked = function (name) {
    if (name === 'OpenWindow')  { thiz.OpenWindow();  }
    if (name === 'CloseWindow') { thiz.CloseWindow(); }
  };
};
