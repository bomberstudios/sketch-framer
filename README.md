# Sketch Framer

![](sketch-framer-logo.png?raw=true)

A plugin to export [Sketch.app](http://www.bohemiancoding.com/sketch) documents into [FramerJS](http://framerjs.com) to make interactive prototypes.

## Common questions
* Only works with Sketch Beta right now because the App Store version is sandboxed. [Download Sketch Beta here](http://www.bohemiancoding.com/sketch/beta/).
* Make sure you copy **both** files as specified below.

## Installation
1. Download the repository using [this link](https://github.com/bomberstudios/sketch-framer/archive/master.zip)
2. Grab these two files from the ZIP: `Export to Framer.sketchplugin` and `sketch-framer-config.js`
3. Copy them to `~/Library/Application Support/sketch/Plugins` (if you're using the App Store version of Sketch, you need to copy them to `~/Library/Containers/com.bohemiancoding.sketch/Data/Library/Application Support/sketch/Plugins`)

This is what your plugins folder should look like after you copy them:

![Directory structure](https://f.cloud.github.com/assets/200566/2225432/decec214-9a8d-11e3-9482-07561a01964f.png)

Then you'll see the plugin in the plugins menu:

![Plugins menu](https://f.cloud.github.com/assets/200566/2153606/d9fd17be-9429-11e3-9d15-674f17f9953f.png)

## Usage
1. Create your layered Sketch file, and save it somewhere
2. Run the plugin from the plugins menu
3. The framer prototype will be generated in a folder right next to where the Sketch file is saved

![Exported files](https://f.cloud.github.com/assets/200566/2153636/3be2cbf4-942a-11e3-9def-01dc19d83324.png)

## Tips
* Use only one artboard, or no artboards.
* Make sure the top left of all your contents align to (0,0)
* Use unique names for each group in your document to avoid conflicts.
* Grouping everything in your document in a main "phone" group might help.
* Every group in your document will become a Framer view.

## Special operations
* **Flatten** To have a group flattened so its child groups don't export individually, append `*` to its name. Example: `Card*`. Flattening complex groups will improve performance.
* **Shape/text layers** To export a shape or a text layer as a view, put it in a group, or append `+` to its name. Otherwise they will export as a background image.
* **Ignore** To ignore a layer, append `-` to its name. Example: `Ignored-`
* **Hidden layers** Hidden layers in Sketch will be exported as hidden layers in Framer. To show the layer in framer, try `view.visible = true`
* **Masks** Native masks don't work. Instead of making a native mask, keep the mask rectangle as a regular object, and add "maskframe" to its name. Sketch-Framer will define a mask for a group, if it has a direct child whose name includes "maskframe".

## Configuration
You can customize the exported files (index.html, app.js) by tweaking sketch-framer-config.js. The most common thing you might want to do is import a library file and include it in all your projects.

## Known bugs
* Masks currently don't work. Workaround: flatten the group that includes a mask (by appending `*` to its name), or use the mask solution described above.


## Help us improve Sketch Framer

To propose changes, fork the repository and submit a pull request!

## Questions?

Reach out to [@bomberstudios](https://twitter.com/bomberstudios) or [@gem_ray](https://twitter.com/gem_ray) on Twitter!
