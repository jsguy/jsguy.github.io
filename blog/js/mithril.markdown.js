//	Mithril component that renders markdown, with Prism syntax highlighting, and js-sequence-diagrams
var renderer = new marked.Renderer(),

	idIndex = 0,

	applyHandler = function(func){
		return requestAnimationFrame(func);
	},

	handlers = {
		codepen: function(lang, code, id){
			//	Pass
		},
		mermaid: function(lang, code, id){
			//	Ref: http://knsv.github.io/mermaid/#api-usage
			mermaidAPI.initialize({ startOnLoad: false });

			applyHandler(function(){
				//	Optionally add headers
				if(lang == "sequence" && code.indexOf("sequenceDiagram") !== 0) {
					code = "sequenceDiagram\n" + code;
				}
				if(lang == "gantt" && code.indexOf("gantt") !== 0) {
					code = "gantt\n" + code;
				}
				mermaidAPI.render(id + '-internal', code, function(svgCode, bindFunctions){
					var element = document.getElementById(id);
					element.innerHTML = svgCode;
				});
			});
		},
		chartist: function(lang, code, id){
			try{
				var args = JSON.parse(code);
			} catch(ex){
				console.error("Problem with your chart - note it must be valid JSON", ex.stack);
			}

			if(lang == "barchart") {
				applyHandler(function(){
					var el = document.getElementById(id);
					if(el){
						new Chartist.Bar(el, args.data, args.options);
					}
				});
			} else {
				console.log('Chartist: I dont understand how to render', lang);
			}
		},
		prism: function(lang, code, id) {
			applyHandler(function(){
				var el = document.getElementById(id);
				if(el) {
					el.innerHTML = Prism.highlight(code, Prism.languages[lang]);
				}
			});
		}
	};

//	Heading links plugin
renderer.heading = function (text, level) {
	var ref = text.toLowerCase().replace(/[^\w]+/g, '-');
	return [
		'<h' + level + '>',
			'<a name="' + ref + '" class="anchor" href="#' + ref + '">',
				'<span class="header-link">'+text+'</span>',
			'</a>',
        '</h' + level + '>'
	].join("\n");
};


//	DEL hook for slide sections
renderer.del = function(text){
	if(text === "$$reveal:start$$") {
		return "<section>";
	} else if(text === "$$reveal:end$$") {
		return "</section>";
	} else {
		return "<del>" + text + "</del>";
	}
};


renderer.code = function(code, lang){
	var prismLangs = ['javascript', 'css', 'bash', 'markup'];
	if(prismLangs.indexOf(lang)!== -1) {
		var id = lang + "-" + idIndex;
		ulib.loadAndCallback(["js/syntaxify/prism.min.js", "js/syntaxify/prism.annotate/prism.annotate.js", "js/syntaxify/prism.min.css", "js/syntaxify/prism.annotate/prism.annotate.css"],
			handlers.prism, lang, code, id
		);

		idIndex += 1;

		return [
			'<pre class="language-'+lang+'">',
				'<code id="'+id+'" class="language-'+lang+'">',
				'</code>',
			'</pre>'
		].join("");
	} else {
		//	Using Mermaid: http://knsv.github.io/mermaid/#initialization64
		if(lang == "sequence" || lang == "flow" || lang == "gantt") {
			var id = lang + "-" + idIndex;
			ulib.loadAndCallback(["js/mermaid/mermaid.forest.css", "js/mermaid/mermaidAPI.min.js"],
				handlers.mermaid, lang, code, id
			);

			idIndex += 1;

			return [
				'<div id='+id+'>',
				'</div>'
			].join("");
		} else if(lang == "barchart") {
			// TODO: Add a few more chart types
			var id = lang + "-" + idIndex;

			ulib.loadAndCallback( [ "js/chartist/chartist.min.css", "js/chartist/chartist.min.js" ],
				handlers.chartist, lang, code, id
			);

			idIndex += 1;

			return [
				'<div id='+id+'>',
				'</div>'
			].join("");

		} else if(lang == "codepen") {
			var id = lang + "-" + idIndex;

			ulib.loadAndCallback( [ "https://production-assets.codepen.io/assets/embed/ei.js" + "?t=" + (new Date()).getTime() ],
				handlers.codepen, lang, code, id
			);

			idIndex += 1;

			return [
				'<div id='+id+'>',
					'<p data-height="460" data-theme-id="light" data-slug-hash="'+code+'" data-default-tab="js,result" data-embed-version="2" data-pen-title="'+code+'" data-preview="false" class="codepen">',
						'See the Pen <a href="http://codepen.io/pen/'+code+'">'+code+'</a> on <a href="http://codepen.io">CodePen</a>.',
					'</p>',
				'</div>'
			].join("");
		} else {
			//	Not sure what this is, so just return it
			return [
				'<pre>',
					'<code>',
						code,
					'</code>',
				'</pre>'
			].join("");
		}
	}
};

//	Make tables scrollable (for mobile)
renderer.table = function(header, body){
	return [
		'<div class="table">',
			'<table>',
				'<thead>',
					header,
				'</thead>',
				'<tbody>',
					body,
				'</tbody>',
			'</table>',
		'</div>'
	].join("\n");
};

var initialMarkdown;

var MarkdownComponent = {
	onbeforeupdate: function(vnode){
		return initialMarkdown !== vnode.attrs.markdown;
	},
	onupdate: function(vnode){
		initialMarkdown = vnode.attrs.markdown;
	},
	oninit: function(vnode){
		//	Ensure we have a string
		vnode.attrs.markdown = vnode.attrs.markdown || "";
	},
	view: function(vnode){
		return m.trust(marked(vnode.attrs.markdown, {
			renderer: renderer
		}));
	}
};

var SlideMarkdownComponent = {
	oninit: function(vnode){
		//	Ensure we have a string
		vnode.attrs.markdown = vnode.attrs.markdown || "";
	},
	onupdate: function(){
		console.log('smc update...');
	},
	view: function(vnode){
		var rev = {
			start: "[//]: # (Reveal: Start)",
			end: "[//]: # (Reveal: End)"
		},
		md = {
			start: "~~$$reveal:start$$~~",
			end: "~~$$reveal:end$$~~"
		};

//	Make sure only the sideshow bits are used
//console.log('MARKDOWN', vnode.attrs.markdown);

		var tmpSlides = vnode.attrs.markdown.split(rev.start),
			mySlides = [];
		for(var i = 1; i < tmpSlides.length; i += 1) {
			//console.log(tmpSlides[i]);
			mySlides.push(tmpSlides[i].split(rev.end)[0]);
		}

		var myMd = md.start + "\n" + mySlides.join("\n"+md.end+"\n" + md.start) + "\n" + md.end;

		console.log('myMd', myMd);

		//return m.trust(marked(vnode.attrs.markdown, {
		return m.trust(marked(myMd, {
			renderer: renderer
		}));
	}
};
