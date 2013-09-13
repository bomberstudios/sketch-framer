# Sketch Framer

![](logo_small.png?raw=true)

A plugin to export [Sketch.app](http://www.bohemiancoding.com/sketch) documents into [FramerJS](http://framerjs.com) to make interactive prototypes.

**Not ready for general consumption yet**, but if you're a developer, here's how to get the code and help us make it better.

See <https://vimeo.com/67393477> for a sneak peek :)

## Installation
1. Clone the repository. Open *Terminal* and type:
```
cd ~/
git clone git@github.com:bomberstudios/sketch-framer.git
```

2. Download the [Beta version of Sketch](http://www.bohemiancoding.com/sketch/beta/)
3. Enable scripting in Sketch by going to *Preferences > General* and clicking the *Enable Scripting* button.
4. In Terminal go to `~/Library/Application Support/sketch/Plugins` (Create these directories if they don't exist)
6. Type `ln -s "~/sketch-framer/sketch-plugin/Sketch Framer" "./Sketch Framer"`
7. Now you should see the option in your Plugins menu.

![Plugins menu](https://f.cloud.github.com/assets/200566/1139282/491116ce-1c88-11e3-807e-e0d8430814d0.png)

## Tips
* By default, Sketch Framer will export every object in your document as individual Views in Framer. To have a group flattened and exported as a single View, prepend `*` to its name. Example: `*Card`
* Multiple artboards work funky. Ideally don't have any artboards in the document, and make sure the top left of all your contents align to (0,0)
* Masks currently don't work. Workaround: flatten the group that has a mask (by prepending `*` to its name).

## Help us improve Sketch Framer

To propose changes, fork the repository

1. `git checkout -b new-branch-name`
2. Commit and push your changes

## Questions?

Reach out to @bomberstudios or @gem_ray on Twitter!
