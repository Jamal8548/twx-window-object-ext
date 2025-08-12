# **TWX Window Object Extension**

A **ThingWorx custom widget** that allows you to **open** and **close** browser windows or tabs directly from a Mashup, with full **service bindings** support.

---

## **✨ Features**
- **Open any URL** in a new browser window/tab from a Mashup.  
- **Close** the opened window programmatically.  
- **Bindable URL property** — dynamically set the URL at runtime.  
- **Opened state tracking** — `opened` boolean property indicates if the window is currently open.  
- **Two Mashup services**:
  - `OpenWindow` → Opens the configured URL.
  - `CloseWindow` → Closes the opened window.  

---

## **📦 Installation**
1.  ## Download
[📥 Download Extension ZIP](https://github.com/Jamal8548/twx-window-object-ext/raw/main/twx-window-object-ext.zip)


2. In **ThingWorx Composer**:
   - Go to **Import/Export** → **Import**.
   - Select the `.zip` file.
   - Click **Import**.

3. The widget will now be available in the **Widgets** panel in Mashup Builder.

---

## **🛠 Usage**
1. **Add the widget**  
   - Search for **TW WindowObject** in the widget list.  
   - Drag it into your Mashup.  

2. **Configure properties**  
   - **`url`** *(STRING)* → URL to open in the new window.  
   - **`opened`** *(BOOLEAN)* → True if the window is open (read-only).  

3. **Bind services**  
   - **Button.Clicked → WindowObject.OpenWindow** (to open the URL)  
   - **Button.Clicked → WindowObject.CloseWindow** (to close the window)  

---

## **🔗 Example Mashup Binding**

| **Mashup Element** | **Binding** |
|--------------------|-------------|
| **Open Button**    | `Clicked → WindowObject.OpenWindow` |
| **Close Button**   | `Clicked → WindowObject.CloseWindow` |
| **Text Field**     | `Text → WindowObject.url` *(isBindingTarget)* |
| **Label**          | `WindowObject.opened → Text` *(isBindingSource)* |

---

## **📂 Development Details**

### **IDE File (`WindowObject.ide.js`)**
- Defines widget **properties**, **services**, and **metadata**.  
- **Correct structure** → Services are declared separately, not inside `properties`.  

```javascript
'services': {
    'OpenWindow': { 'description': 'Opens a new window with the given URL' },
    'CloseWindow': { 'description': 'Closes the previously opened window' }
}
Runtime File (WindowObject.runtime.js)
Implements service logic:

OpenWindow() → Opens new window & sets opened = true.

CloseWindow() → Closes window & sets opened = false.

Responds to Mashup service calls via serviceInvoked(serviceName).
