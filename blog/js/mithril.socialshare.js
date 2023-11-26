//	Mithril component that shows icons for sharing on social networks
var SocialshareComponent = {
	networks: {
		"Facebook": {
			icon: [
				'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 266.893 266.895" enable-background="new 0 0 266.893 266.895" xml:space="preserve">',
				'	<path id="Blue_1_" fill="#3C5A99" d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812 c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225 H248.082z"/>',
				'	<path id="f" fill="#FFFFFF" d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z"/>',
				'</svg>'
			].join("\n"),
			url: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(location.href),
			text: "Facebook"
		},
		"Twitter": {
			icon: [
				'<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.00006 244.18703" height="26px" width="32px" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">',
				'	<g style="" transform="translate(-539.18 -568.86)">',
				'		<path d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464" fill="#1da1f2"/>',
				'	</g>',
				'</svg>'
			].join("\n"),
			url: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(location.href),
			text: "Twitter"
		},
		"Google plus": {
			icon: [
				'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="31px" viewBox="0 0 134.658 131.646" enable-background="new 0 0 134.658 131.646" xml:space="preserve">',
				'	<g>',
				'		<path fill="#DC4A38" d="M126.515,4.109H8.144c-2.177,0-3.94,1.763-3.94,3.938v115.546c0,2.179,1.763,3.942,3.94,3.942h118.371 c2.177,0,3.94-1.764,3.94-3.942V8.048C130.455,5.872,128.691,4.109,126.515,4.109z"/>',
				'		<g>',
				'			<path fill="#FFFFFF" d="M70.479,71.845l-3.983-3.093c-1.213-1.006-2.872-2.334-2.872-4.765c0-2.441,1.659-3.993,3.099-5.43 c4.64-3.652,9.276-7.539,9.276-15.73c0-8.423-5.3-12.854-7.84-14.956h6.849l7.189-4.517H60.418 c-5.976,0-14.588,1.414-20.893,6.619c-4.752,4.1-7.07,9.753-7.07,14.842c0,8.639,6.633,17.396,18.346,17.396 c1.106,0,2.316-0.109,3.534-0.222c-0.547,1.331-1.1,2.439-1.1,4.32c0,3.431,1.763,5.535,3.317,7.528 c-4.977,0.342-14.268,0.893-21.117,5.103c-6.523,3.879-8.508,9.525-8.508,13.51c0,8.202,7.731,15.842,23.762,15.842 c19.01,0,29.074-10.519,29.074-20.932C79.764,79.709,75.344,75.943,70.479,71.845z M56,59.107 c-9.51,0-13.818-12.294-13.818-19.712c0-2.888,0.547-5.87,2.428-8.199c1.773-2.218,4.861-3.657,7.744-3.657 c9.168,0,13.923,12.404,13.923,20.382c0,1.996-0.22,5.533-2.762,8.09C61.737,57.785,58.762,59.107,56,59.107z M56.109,103.65 c-11.826,0-19.452-5.657-19.452-13.523c0-7.864,7.071-10.524,9.504-11.405c4.64-1.561,10.611-1.779,11.607-1.779 c1.105,0,1.658,0,2.538,0.111c8.407,5.983,12.056,8.965,12.056,14.629C72.362,98.542,66.723,103.65,56.109,103.65z"/>',
				'			<polygon fill="#FFFFFF" points="98.393,58.938 98.393,47.863 92.923,47.863 92.923,58.938 81.866,58.938 81.866,64.469 92.923,64.469 92.923,75.612 98.393,75.612 98.393,64.469 109.506,64.469 109.506,58.938"/>',
				'		</g>',
				'	</g>',
				'</svg>'
			].join("\n"),
			url: "https://plus.google.com/share?url=" + encodeURIComponent(location.href),
			text: "Google+"
		}
	},
	oninit: function(vnode){
		var offsetX = 310,
			prevInside,
			doc = document.documentElement,
			getOffset = function(){
				var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

				vnode.state.inside = !!(top >= offsetX);

				if(prevInside !== vnode.state.inside) {
					m.redraw();
					prevInside = vnode.state.inside;
				}
				requestAnimationFrame(getOffset);
			};

		requestAnimationFrame(getOffset);
	},
	view: function(vnode){
		return m('div', {className: 'share-widget' + (vnode.state.inside? ' show': '')},
			Object.keys(SocialshareComponent.networks).map(function(key){
				var soc = SocialshareComponent.networks[key];
				return m('a', {
					title: "Share on " + soc.text,
					href: soc.url,
					target: "_blank"
				}, m.trust(soc.icon));
			})
		)
	}
};
