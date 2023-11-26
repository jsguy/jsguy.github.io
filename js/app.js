/* Super-basic mithril-based Markdown website */
var loadArticle = function(page, docs, callback){
		//	Load our page
		return m.request({
			method: "GET",
			url: "pages/"+page+".md",
			deserialize: function(data){ return data; },
			background: true
		}).then(function(data){
			errorOccured = false;
			docs().push({
				page: page,
				markdown: data,
				meta: getPageMeta(page)
			});
			pagesShown.push(page);
			m.redraw();
			if(callback) {
				callback();
			}
			//	HACKY: Set hash again after the page has rendered
			if(window.location.hash !== ""){
				var theHash = window.location.hash;
				setTimeout(function(){
					window.location.hash = "";
					window.location.hash = theHash;
				}, 500);
			}
			updateRoute(page);
		}).catch(function(e) {
			errorOccured = true;
			docs().push({
				page: '404',
				markdown: "Not found: " + page + " Error: " + e.toString(),
				meta: {}
			});
		});
	},

	updateRoute = function(page){
		//	Update the route if we need to.
		if(m.route.get() !== '/' + page) {
			var route = '/' + page;
			m.route.set(route, {}, {});
		}
	},

	//	Ref: https://jsfiddle.net/jonathansampson/m7G64/
	throttle = function(callback, limit) {
		var wait = false;
		return function () {
			if (!wait) {
				callback.call();
				wait = true;
				setTimeout(function () {
					wait = false;
				}, limit);
			}
		}
	},

	scrollEvents = [],

	scrollEventListener = window.addEventListener('scroll', throttle(function(e){
		for(var i = 0; i < scrollEvents.length; i += 1) {
			scrollEvents[i](e);
		}
	}, 250));

	//	TODO: Allow watching several offsets, with a function that receives the offset...
	//	Note: need to be able to determine which article we're in, and set the route appropriately.
	watchScroll = function(func){
		scrollEvents.push(func);
	},

	//	TODO: These should be loaded from a JSON file
	pagesMeta = [
		{
			date: "01/02/2017",
			author: "jsguy",
			tags: ["react", "knockout", "library", "framework", "discussion"],
			file: "fastidius_yet_logical_guide_to_choosing_a_ui_framework"
		},
		{
			date: "12/02/2017",
			author: "jsguy",
			tags: ["react", "vue", "angular", "discussion"],
			file: "discussion_of_ui_framework_libraries"
		},
		{
			date: "04/03/2017",
			author: "jsguy",
			tags: ["react", "knockout", ""],
			file: "ko-to-react"
		}
	],

	pages = pagesMeta.map(function(page){
		return page.file
	}),

	getPageMeta = function(file) {
		var result;
		pagesMeta.map(function(page){
			if(file === page.file) {
				result = page;
			}
		});
		return result;
	},

	pagesShown = [],
	isLoadingNextArticle = false,
	errorOccured = false,
	app = {
		model: function(slug){
			return {
				docs: m.p([]),
				slug: slug
			};
		},
		oninit: function(vnode){
			var me = this,
				page = encodeURIComponent(vnode.attrs.page || "home"),
				loadNextArticle = function(){
					var nextPageIndex;
					if(!errorOccured && !isLoadingNextArticle) {
						isLoadingNextArticle = true;
						nextPageIndex = pages.indexOf(page) + 1;
						if(nextPageIndex > (pages.length - 1)) {
							nextPageIndex = 0;
						}
						page = pages[nextPageIndex];

						var hasShown = pagesShown.indexOf(page) !== -1;

						if(!hasShown) {
							loadArticle(pages[nextPageIndex], me.model.docs, function(){
								isLoadingNextArticle = false;
							});
						}
						//	TODO: Should trigger a thing to show at the bottom maybe to subscribe to RSS?
					}
				};

			me.model = new app.model(page);
			loadArticle(page, me.model.docs);

			watchScroll(function(e){
				var offsetPct = 90;
				var pct = ((window.innerHeight + window.scrollY) / document.body.offsetHeight)*100;
				if (pct >= offsetPct) {
					loadNextArticle();
				}
			});

			watchScroll(function(e){
				var isInView = function(el, page) {
					var rect = el.getBoundingClientRect();
					var isVisible = (rect.top <= 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom <= 0);
					return isVisible;
				},
				docs = me.model.docs();

				for(var i = 0; i < docs.length; i += 1) {
					if(isInView(document.getElementById(docs[i].page), docs[i].page)) {
						updateRoute(docs[i].page);
					}
				}
			});

			return me;
		},
		view: function(vnode){
			var slug = this.model.slug;
			return [
				//m(SocialshareComponent),
				//m(MarkdownComponent, {markdown: this.model.doc()}),
				this.model.docs().map(function(doc, idx){
					return m('article', {key: idx, className: 'blog-article', id: doc.page},
						m('section', {className: "container"}, [
							m(MarkdownComponent, {markdown: doc.markdown}),
							m('div', {className: 'blog-article-meta-info'},[
								m('h4', "SHARE"),
								m('div', [
									SocialLinkComponent('facebook', document.location.href),
									SocialLinkComponent('twitter', document.location.href),
									SocialLinkComponent('googleplus', document.location.href)
									//,StaticmanComponent(page)

								])
								//	TODO: Meta
								//m('div', JSON.stringify(doc.meta)),
							])
							//,m('h2', "Comments")
							//,m('div', StaticmanComponent(slug))
						])
					);
				})
			];
		}
	};

//	Use querystring-based URLs
m.route.prefix("?");

m.route(document.getElementById('target'), '/', {
	'/': app,
	'/:page': app
});
