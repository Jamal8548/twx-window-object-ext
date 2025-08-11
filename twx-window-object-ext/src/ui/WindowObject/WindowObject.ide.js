TW.IDE.Widgets.WindowObject = function() {

    this.widgetProperties = function() {
        return {
            'name': 'TW WindowObject',
            'description': 'Allows use of the window object, enabling opening and closing browser windows directly from Mashup',
            'defaultBindingTargetProperty': 'url',
            'properties': {
                    'url': { 
                        'baseType': 'STRING', 
                        'description': 'URL to open in new window', 
                        'isBindingTarget': true, 
                        'warnIfNotBoundAsTarget': true
                    },
                    'opened': { 
                        'baseType': 'BOOLEAN', 
                        'description': 'Indicates whether the window is currently open', 
                        'isBindingSource': true
                    }
                },
            'services': {
                'OpenWindow': {
                    'description': 'Opens a new window with the given URL'
                },
                'CloseWindow': {
                    'description': 'Closes the previously opened window'
                }
            }

        };
    };

    this.renderHtml = function() {
        return '<div class="widget-content">🪟</div>';
    };

};


