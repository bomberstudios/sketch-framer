# Sketch Framer

![](sketch-framer-logo.png?raw=true)

A plugin to export [Sketch.app](http://www.bohemiancoding.com/sketch) documents into [FramerJS](http://framerjs.com) to make interactive prototypes.

## Common questions
* Only works with Sketch Beta right now because the App Store version is sandboxed. [Download Sketch Beta here](http://www.bohemiancoding.com/sketch/beta/).
* Make sure you copy **both** files as specified below.


## Sketch 3 Support
We're hard at work updating the plugin for Sketch 3! You can use the plugin with a few caveats:

* Artboards aren't supported yet. Please ungroup your artboard and have elements directly on the canvas. We suggest you group everything at top level, and move the parent group to 0,0 position.
* Symbols aren't supported. We suggest making a copy of your file, going to *Manage Symbols* and deleting the symbols, which will effectively detach all the symbol layers from the symbol (but keep them on the canvas).

## Installation
1. Download the repository using [this link](https://github.com/bomberstudios/sketch-framer/archive/master.zip)
2. Grab these files from the ZIP: `Export to Framer.sketchplugin`, `sandbox.js` and `sketch-framer-config.js`
3. In Sketch 3, select `Plugins > Reveal Plugins Folder...` from the menu bar, and put those files in this folder.

This is what your plugins folder should look like after you copy them:

![Directory structure](https://cloud.githubusercontent.com/assets/3832/2870262/086f5c10-d2b9-11e3-8e6a-88a5c3d96587.png)

Then you'll see the plugin in the plugins menu:

![Plugins menu](https://f.cloud.github.com/assets/200566/2153606/d9fd17be-9429-11e3-9d15-674f17f9953f.png)

## Usage
1. Create your layered Sketch file, and save it somewhere
2. Run the plugin from the plugins menu
3. The framer prototype will be generated in a folder right next to where the Sketch file is saved

![Exported files](https://f.cloud.github.com/assets/200566/2153636/3be2cbf4-942a-11e3-9def-01dc19d83324.png)

## Tips
* Don't use artboards (Known bug, trying to fix it)
* Group everything in your document in a main "Phone" group, and align it to (0,0)
* Use unique names for each group in your document to avoid conflicts
* Every group in your document will become a Framer view

## Special operations
* **Flatten** To have a group flattened so its child groups don't export individually, append `*` to its name. Example: `Card*`. Flattening complex groups will improve performance.
* **Shape/text layers** To export a shape or a text layer as a view, put it in a group, or append `+` to its name. Otherwise they will export as a background image.
* **Ignore** To ignore a layer, append `-` to its name. Example: `Ignored-`
* **Hidden layers** Hidden layers in Sketch will be exported as hidden layers in Framer. To show the layer in framer, try `view.visible = true`
* **Masks** Native masks now work! You can also use `Scroll` in the name of a group that includes a mask to make that group scrollable.

## Configuration
You can customize the exported files (index.html, app.js) by tweaking sketch-framer-config.js. The most common thing you might want to do is import a library file and include it in all your projects.

## Known bugs
* Very complicated files may cause the plugin to crash, or result in a sluggish Framer mockup. Flatten groups (by appending `*` to their names or using Sketch 3's `Layer > Flatten Selection to Bitmap` command) where you don't need to access the contents individually.
* Only rectangular masks work. If you're masking with an odd shape, try flattening the group (by appending `*` to its name)
* Effects that expand beyond the boundaries of a layer (eg. drop shadows, outside borders) cause minor positioning bugs. Try flattening these layers to bitmaps.
* Avoid background blur, it causes bugs in positioning.


## Help us improve Sketch Framer

To propose changes, fork the repository and submit a pull request!

## Questions?

Reach out to [@bomberstudios](https://twitter.com/bomberstudios) or [@gem_ray](https://twitter.com/gem_ray) on Twitter!
