# Sketch Framer

![](sketch-framer-logo.png?raw=true)

A plugin to export [Sketch.app](http://www.bohemiancoding.com/sketch) documents into [FramerJS](http://framerjs.com) to make interactive prototypes.

## Installation
1. Download the repository using [this link](https://github.com/bomberstudios/sketch-framer/archive/master.zip)
2. Unzip the file, and double click on `Export to Framer.sketchplugin`
3. Sketch will open and install the plugin. Now you can see it in the plugins menu.

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
* **Flatten** To have a group flattened so its child groups don't export individually, append `*` to its name. Example: `Card*`
* **Shape/text layers** To export a shape or a text layer as a view, put it in a group.
* **Ignore** To ignore a layer, append `-` to its name. Example: `Ignored-`
* **Hidden layers** Hidden layers in Sketch will be exported as hidden layers in Framer. To show the layer in framer, try `view.visible = true`


## Known bugs
* Masks currently don't work. Workaround: flatten the group that includes a mask (by appending `*` to its name).


## Help us improve Sketch Framer

To propose changes, fork the repository and submit a pull request!

## Questions?

Reach out to @bomberstudios or @gem_ray on Twitter!
