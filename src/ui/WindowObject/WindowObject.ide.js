TW.IDE.Widgets.WindowObject = function () {

  this.widgetProperties = function () {
    return {
      name: 'TW WindowObject',
      description: 'Open/close a browser window from a Mashup',
      category: ['Common'],
      defaultBindingTargetProperty: 'url',
      properties: {
        url: {
          baseType: 'STRING',
          description: 'URL to open in a new window',
          isBindingTarget: true,
          warnIfNotBoundAsTarget: true
        },
        opened: {
          baseType: 'BOOLEAN',
          description: 'Indicates whether the window is currently open',
          isBindingSource: true
        }
      }
    };
  };

  // ⬇️ Services must be returned from a separate function
  this.widgetServices = function () {
    return {
      OpenWindow:  { description: 'Opens a new window with the current URL' },
      CloseWindow: { description: 'Closes the previously opened window' }
    };
  };

  // ⬇️ (Optional) Outbound events in their own function
  this.widgetEvents = function () {
    return {
      Opened: { description: 'Fired after window opened' },
      Closed: { description: 'Fired after window closed' },
      Failed: { description: 'Fired if opening the window failed' }
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content">🪟</div>';
  };
};
