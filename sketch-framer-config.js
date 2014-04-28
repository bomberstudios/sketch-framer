/*
	If you remove any variables from this file, the plugin won't work. If the plugin stops working, replace this file with a fresh copy from Github.
*/


/*
	If you have a common library file you'd like to include in your mocks, put a valid URL in FramerLibraryUrl. This will create a copy of the file in the Framer folder of the prototype, also insert a line to index.html to include the script.

	By default this is undefined, so no library will get included.

	Example:
	var FramerLibraryUrl = "http://www.website.com/library.js";
*/

var FramerLibraryUrl;
var show_errors = true;




/* Don't touch the following. They are auto-generated based on the Library URL. */
var extra_script_line;
var FramerLibraryFileName;

if(FramerLibraryUrl) {
	FramerLibraryFileName = FramerLibraryUrl.replace(/^.*(\\|\/|\:)/, '');
	extra_script_line = "\n\t\t<script src=\"framer/" + FramerLibraryFileName + "\"></script>"
}
/* End of auto-generated block */




/* Contents of index.html */
var FramerIndexFileContents = "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t\n\t\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n\t\t<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n\t\t<meta name=\"format-detection\" content=\"telephone=no\">\n\t\t<meta name=\"viewport\" content=\"width=640,initial-scale=0.5,user-scalable=no\">\n\t\t\n\t\t<style type=\"text/css\" media=\"screen\">\n\t\t\n\t\t* {\n\t\t\tmargin:0;\n\t\t\tpadding:0;\n\t\t\tborder:none;\n\t\t\t-webkit-user-select:none;\n\t\t}\n\n\t\tbody {\n\t\t\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFMzMzDBMatgEYWQAAABhJREFUeNpiYIADRjhgGNKCw8UfcAAQYACltADJ8fw9RwAAAABJRU5ErkJggg==);\n\t\t\tfont: 28px/1em \"Helvetica\";\n\t\t\tcolor: #FFF;\n\t\t\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\t\t\t-webkit-perspective: 1000px;\n\t\t}\n\t\t\n\t\t::-webkit-scrollbar {\n\t\t\twidth: 0px;\n\t\t\theight: 0px;\n\t\t}\n\t\t\n\t\t</style>\n\t\t\n\t</head>\n\t<body>\n\t\t{{ views }}\n\t\t<script src=\"framer/framer.js\"></script>\n\t\t<script src=\"framer/framerps.js\"></script>" + (extra_script_line || "") + "\n\t\t<script src=\"app.js\"></script>\n\t</body>\n</html>";


/* Contents of FramerPS.js */
var FramerPSJSContents = "var loadViews = function() {\n\t\n\tvar Views = []\n\tvar ViewsByName = {}\n\t\n\tcreateView = function(info, superView) {\n\t\t\n\t\t// console.log(\"createView\", info.name, \"superView: \", superView)\n\t\t\n\t\tvar viewType, viewFrame\n\t\tvar viewInfo = {\n\t\t\tclip: false\n\t\t}\n\t\t\n\t\tif (info.image) {\n\t\t\tviewType = ImageView\n\t\t\tviewFrame = info.image.frame\n\t\t\tviewInfo.image = \"images/\" + info.name + \".\" + info.imageType\n\t\t}\n\t\t\n\t\telse {\n\t\t\tviewType = View\n\t\t\tviewFrame = info.layerFrame\n\t\t\tviewInfo.style = { background: 'transparent' }\n\t\t}\n\n\t\tviewInfo.visible = info.visible\n\t\t\n\t\t// If this layer group has a mask, we take the mask bounds\n\t\t// as the frame and clip the layer\n\t\tif (info.maskFrame) {\n\t\t\tviewFrame = info.maskFrame\n\t\t\tviewInfo.clip = true\n\t\t\t\n\t\t\t// If the layer name has \"scroll\" we make this a scroll view\n\t\t\tif (info.name.toLowerCase().indexOf(\"scroll\") != -1) {\n\t\t\t\tviewType = ScrollView\n\t\t\t}\n\t\t\t\n\t\t\t// If the layer name has \"paging\" we make this a paging view\n\t\t\tif (info.name.toLowerCase().indexOf(\"paging\") != -1) {\n\t\t\t\tviewType = ui.PagingView\n\t\t\t}\n\n\t\t}\n\t\t\n\t\tvar view = new viewType(viewInfo)\n\t\t\n\t\tview.frame = viewFrame\n\t\t\n\t\t// If the view has a contentview (like a scrollview) we add it\n\t\t// to that one instead.\n\t\tif (superView && superView.contentView) {\n\t\t\tview.superView = superView.contentView\n\t\t} else {\n\t\t\tview.superView = superView\n\t\t}\n\t\t\n\t\tview.name = info.name\n\t\tview.viewInfo = info\n\t\t\n\t\tViews.push(view)\n\t\tViewsByName[info.name] = view\n\n\t\t// If the layer name contains draggable we create a draggable for this layer\n\t\tif (info.name.toLowerCase().indexOf(\"draggable\") != -1) {\n\t\t\tview.draggable = new ui.Draggable(view)\n\t\t}\n\n\t\tfor (var i in info.children) {\n\t\t\tcreateView(info.children[info.children.length - 1 - i], view)\n\t\t}\n\n\t}\n\t\t\n\t// Loop through all the photoshop documents\n\tfor (var documentName in FramerPS) {\n\t\t// Load the layers for this document\n\t\tfor (var layerIndex in FramerPS[documentName]) {\n\t\t\tcreateView(FramerPS[documentName][layerIndex])\n\t\t}\n\t}\n\t\n\t\n\tfor (var i in Views) {\n\t\t\n\t\tvar view = Views[i]\n\t\t\n\t\t// // Views without subviews and image should be 0x0 pixels\n\t\tif (!view.image && !view.viewInfo.maskFrame && !view.subViews.length) {\n\t\t\tconsole.log(view.name, view.viewInfo.maskFrame)\n\t\t\tview.frame = {x:0, y:0, width:0, height:0}\n\t\t}\n\t\t\n\t\tfunction shouldCorrectView(view) {\n\t\t\treturn !view.image && !view.viewInfo.maskFrame\n\t\t}\n\n\t\t// If a view has no image or mask, make it the size of it's combined subviews\n\t\tif (shouldCorrectView(view)) {\n\n\t\t\tvar frame = null\n\t\t\t\n\t\t\tfunction traverse(views) {\n\t\t\t\tviews.map(function(view) {\n\n\t\t\t\t\tif (shouldCorrectView(view)) {\n\t\t\t\t\t\treturn\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!frame) {\n\t\t\t\t\t\tframe = view.frame\n\t\t\t\t\t} else {\n\t\t\t\t\t\tframe = frame.merge(view.frame)\n\t\t\t\t\t}\n\n\t\t\t\t\ttraverse(view.subViews)\n\t\t\t\t})\n\t\t\t}\n\t\t\t\n\t\t\ttraverse(view.subViews)\n\t\t\tview.frame = frame\n\t\t\t\n\t\t}\n\t\t\n\t\t// Correct all the view frames for the superView coordinate system\n\t\tif (view.superView) {\n\t\t\tview.frame = view.superView.convertPoint(view.frame)\n\t\t}\n\t\t\n\t}\n\t\n\treturn ViewsByName\n\n}\n\nwindow.PSD = loadViews()\n"


/* The default app.js that will be created, and its contents */
/* eg. you could set this to make a blank app.coffee file instead. */
var FramerScriptFileName = "app.js";
var FramerScriptFileContents = "// Hello, welcome to your new Framer project. This is where you should \n// start coding. Feel free to remove all of this code.\n// \n// Just to rehash: Framer just converted all your layer groups into framer\n// views. Just drop index.html (next to this file) on your browser to see\n// the result. Every view is available under the global PSD object, so if you\n// had a layer group called MyPhoto you can find it under PSD[\"MyPhoto\"].\n// \n// You can safely re-run the Framer app any time and this code will stay \n// intact. Framer will only update the graphics.\n// \n// Some links that could come in handy:\n// \n// \t- Docs: \thttp://www.framer.com/documentation\n// \t- Examples: http://www.framer.com/examples\n\n\n// ==============================================================\n// Example: bounce all the views!\n\n\n// Simple reusable function that binds a bounce to a click on a view\nfunction bounceOnClick(view) {\n\t\n\t// If the view is a normal view (not a scrollview)\n\tif (view instanceof View) {\n\t\t\n\t\t// Listen to a click event\n\t\tview.on(\"click\", function(event) {\n\t\t\t\n\t\t\t// Stop sending the click event to underlying views after this\n\t\t\tevent.stopPropagation()\n\t\t\t\n\t\t\t// \"Wind up\" the spring\n\t\t\tview.scale = 0.7\n\t\t\t\n\t\t\t// And scale back to full size with a spring curve\n\t\t\tview.animate({\n\t\t\t\tproperties:{scale:1.0},\n\t\t\t\tcurve: \"spring(1000,15,500)\"\n\t\t\t})\n\t\t})\n\t}\n}\n\n\n// Loop through all the exported views\nfor (var layerGroupName in PSD) {\n\tbounceOnClick(PSD[layerGroupName]);\n}";