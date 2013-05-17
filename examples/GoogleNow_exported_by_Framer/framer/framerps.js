var loadViews = function() {
	
	var Views = []
	var ViewsByName = {}
	
	createView = function(info, superView) {
		
		// console.log("createView", info.name, "superView: ", superView)
		
		var viewType, viewFrame
		var viewInfo = {
			clip: false
		}
		
		if (info.image) {
			viewType = ImageView
			viewFrame = info.image.frame
			viewInfo.image = "images/" + info.name + "." + info.imageType
		}
		
		else {
			viewType = View
			viewFrame = info.layerFrame
		}
		
		// If this layer group has a mask, we take the mask bounds
		// as the frame and clip the layer
		if (info.maskFrame) {
			viewFrame = info.maskFrame
			viewInfo.clip = true
			
			// If the layer name has "scroll" we make this a scroll view
			if (info.name.toLowerCase().indexOf("scroll") != -1) {
				viewType = ScrollView
			}
			
			// If the layer name has "paging" we make this a paging view
			if (info.name.toLowerCase().indexOf("paging") != -1) {
				viewType = ui.PagingView
			}

		}
		
		var view = new viewType(viewInfo)
		
		view.frame = viewFrame
		
		// If the view has a contentview (like a scrollview) we add it
		// to that one instead.
		if (superView && superView.contentView) {
			view.superView = superView.contentView
		} else {
			view.superView = superView
		}
		
		view.name = info.name
		view.viewInfo = info
		
		Views.push(view)
		ViewsByName[info.name] = view

		// If the layer name contains draggable we create a draggable for this layer
		if (info.name.toLowerCase().indexOf("draggable") != -1) {
			view.draggable = new ui.Draggable(view)
		}

		for (var i in info.children) {
			createView(info.children[info.children.length - 1 - i], view)
		}

	}
		
	// Loop through all the photoshop documents
	for (var documentName in FramerPS) {
		// Load the layers for this document
		for (var layerIndex in FramerPS[documentName]) {
			createView(FramerPS[documentName][layerIndex])
		}
	}
	
	
	for (var i in Views) {
		
		var view = Views[i]
		
		// // Views without subviews and image should be 0x0 pixels
		if (!view.image && !view.viewInfo.maskFrame && !view.subViews.length) {
			console.log(view.name, view.viewInfo.maskFrame)
			view.frame = {x:0, y:0, width:0, height:0}
		}
		
		function shouldCorrectView(view) {
			return !view.image && !view.viewInfo.maskFrame
		}

		// If a view has no image or mask, make it the size of it's combined subviews
		if (shouldCorrectView(view)) {

			var frame = null
			
			function traverse(views) {
				views.map(function(view) {

					if (shouldCorrectView(view)) {
						return
					}

					if (!frame) {
						frame = view.frame
					} else {
						frame = frame.merge(view.frame)
					}

					traverse(view.subViews)
				})
			}
			
			traverse(view.subViews)
			view.frame = frame
			
		}
		
		// Correct all the view frames for the superView coordinate system
		if (view.superView) {
			view.frame = view.superView.convertPoint(view.frame)
		}
		
	}
	
	return ViewsByName

}

window.PSD = loadViews()
