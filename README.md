TWX Window Object Extension
A custom ThingWorx widget that enables you to open and close browser windows or tabs directly from a Mashup.
You can now bind to services and use properties to control window behavior programmatically.

Features
Open any URL in a new browser window or tab from a ThingWorx Mashup.

Close the opened window programmatically.

Bindable URL property so the link can be set dynamically.

opened boolean property that indicates if the window is currently open.

Two Mashup services:

OpenWindow → Opens the configured URL in a new browser window/tab.

CloseWindow → Closes the opened window.

Works with runtime bindings (Button Click → Widget Service).

Installation
Download the ZIP file:
📥 twx-window-object-ext.zip

In ThingWorx Composer:

Go to Import/Export → Import.

Select the downloaded .zip file.

Click Import.

The widget will appear in the Widgets panel in Mashup Builder.

How to Use
Drag the Widget to Your Mashup

Search for TW WindowObject in the widget list.

Drop it into your mashup.

Set Properties

url → The URL to open.

opened (read-only) → Will be true if the window is open.

Trigger Services

Bind Button.Clicked → WindowObject.OpenWindow to open the URL.

Bind Button.Clicked → WindowObject.CloseWindow to close it.

Mashup Example
Element	Binding
Button "Open"	Clicked → WindowObject.OpenWindow
Button "Close"	Clicked → WindowObject.CloseWindow
Text Field	Text → WindowObject.url (bind target)
Label	WindowObject.opened → Text (bind source)

Development Notes
IDE File (WindowObject.ide.js)
Defines:

Widget properties (URL, opened flag)

Services (OpenWindow, CloseWindow)

Mashup display name and description

Correct structure: services are not defined inside properties — they are declared in their own services object returned from widgetProperties().

Runtime File (WindowObject.runtime.js)
Implements:

OpenWindow() → Opens a new window and sets opened = true

CloseWindow() → Closes the window and sets opened = false

Handles Mashup service invocations via serviceInvoked(serviceName).
