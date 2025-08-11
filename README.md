# twx-window-object-ext

ThingWorx UI extension that exposes simple services to open and close a browser window/tab from a Mashup.
Since the `window` object is blocked in Mashup Expressions, this widget provides `OpenWindow` and `CloseWindow` services you can call from events.

## Download

- **Latest release (recommended):** [Download ZIP](../../releases/latest)
- Or direct file: [`twx-window-object-ext-1.0.0.zip`](./twx-window-object-ext-1.0.0.zip)  
  *(If no file appears here, grab it from the Releases page.)*

## Installation

In ThingWorx Composer:
1. **Import/Export → Import → Extension**
2. Click **Browse**, select `twx-window-object-ext-1.0.0.zip`
3. Click **Import**, then refresh Composer

> Do **not** unzip the file. The ZIP contains `metadata.xml` and the `/ui` folder at the root as required.

## Uninstallation

Composer → **Manage → Installed Extensions** → find **TW WindowObject** → click **X**, confirm → refresh.

## Widget: TW WindowObject

**Properties**
- `url` *(STRING, binding target)* – URL to open in a new window/tab  
- `opened` *(BOOLEAN, binding source)* – `true` if the widget has an open window/tab reference

**Services**
- `OpenWindow` – Opens `url` in a new window/tab (`_blank`) and sets `opened = true`
- `CloseWindow` – Closes the previously opened window/tab (if still open) and sets `opened = false`

**Typical usage**
1. Bind a STRING to `url` (static or dynamic).
2. Trigger `OpenWindow` from a button or event.
3. Later, call `CloseWindow` to close that specific tab (works only if it was opened by this widget and the browser still allows it).

> Note: Modern browsers restrict closing tabs not opened by the same script. This widget stores a handle to the tab it opened so `CloseWindow` works reliably in that flow.

## Compatibility

- Tested on ThingWorx 9.x (UI extension/widget)
- Should work on newer 9.x/10.x, subject to platform security settings and browser popup blockers

## Development

Source layout:
