# Discussion of UI frameworks / libraries

<p class="main-intro">
Following on from my [previous article](?/fastidius_yet_logical_guide_to_choosing_a_ui_framework), we take a look at the leading UI framework/libraries in order to discuss which might be more suitable in particular circumstances and situations.
</p>

![Framework or library](img/library_or_framework.jpg#main-img)

In this article we will be using three distinct <a href="https://en.wikipedia.org/wiki/Persona_(user_experience)">personas</a> to examine which is the most appropriate library or framework for a particular user or situation. The personas are:

* **A**: Lone developer - just one person, working on things that they have a passion for, for example: [Lord British](https://richardgarriott.com/).
* **B**: Focused team - a (usually small) focused team that is constantly communicating and usually work on a single project, for example: [the google V8 team](http://dtrace.org/blogs/bmc/2012/10/08/a-systems-software-double-header-surge-and-goto/).
* **C**: Broad-scoped team - a team that has multiple projects and concerns, and may be on multiple time zones and continents, for example: [the windows 95 alumni](http://www.geekwire.com/2015/party-like-its-1995-microsoft-vets-to-host-epic-party-to-celebrate-20-year-anniversary-of-windows-95/).

![Personas](img/personas.jpg)

**Note**: The *Subjective* part of this article is largely based on my personal experience working in teams with the above personas, so some of it is quite opinion-based as a subjective evaluation is intended to be.

For our purposes:

* A library is a collection of functions and or objects that serves a particular purpose.
* A framework is a collection of patterns and libraries that help with building an application.

For the scope of this article, we will assert that a library concentrates on just the "view part", and a framework provides more, such as a built in router or extended controller-like behavior and other functionality you might need to create a [SPA](https://en.wikipedia.org/wiki/Single-page_application).

## The frameworks / libraries

We will take a look at the top 3 most popular framework/libraries, and also look at an up-and-coming framework.

![Frameworks and libraries](img/frameworks-libraries.png)

* **[Vue.js](https://vuejs.org/)** - *library* - "Intuitive, Fast and Composable MVVM for building interactive interfaces"
* **[React](https://facebook.github.io/react/)** - *library* - "A JavaScript library for building user interfaces"
* **[Angular](https://angular.io/)** - *framework* - "Superheroic JavaScript MVW Framework"
* **[Mithril](http://mithril.js.org/)** - *framework* - "Mithril is a modern client-side Javascript framework for building Single Page Applications."

This list is based on https://risingstars2016.js.org/#framework


## Objective evaluation methods


### Performance

Here we take a look at performance based on [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark), I ran each benchmark 3 times, and took the average. You can also see the online [full result set here]( http://stefankrause.net/js-frameworks-benchmark4/webdriver-ts/table.html). Note: we used [keyed](http://www.stefankrause.net/wp/?p=342) benchmarks, as non-keyed runs varied too much.

#### Desktop

Recent iMac, OSX 10.12.3, Chrome Version 56.0.2924.87 (64-bit)

|         | Slowdown | Memory loaded | Memory after 1000 row benchmark |
|---------|--------------------------|-------------------|
| Vue.js  |     1.22 |          3.66 |              9.28 |
| React   |     <font style="color:red">1.37</font> |          4.72 |             11.62 |
| Angular |     1.24 |          <font style="color:red">5.79</font> |             <font style="color:red">12.07</font> |
| Mithril |     <font style="color:green">**1.20**</font> |          <font style="color:green">**3.13**</font> |              <font style="color:green">**8.97**</font> |


#### Mobile

Samsung S6, Chrome 55, [OS Monitor](https://play.google.com/store/apps/details?id=com.eolwral.osmonitor&hl=en) used to measure memory usage

|         | Slowdown | Memory loaded | Memory after 1000 row benchmark |
|---------|--------------------------|-------------------|
| Vue.js  |     6.71 |          3.51 |             10.03 |
| React   |     <font style="color:red">7.15</font> |          5.32 |             <font style="color:red">13.09</font> |
| Angular |     7.02 |          <font style="color:red">5.98</font> |             11.53 |
| Mithril |     <font style="color:green">**6.31**</font> |          <font style="color:green">**3.07**</font> |              <font style="color:green">**9.87**</font> |


As you can see, technically speaking, Mithril wins each of these benchmarks, but in real-world usage this really isn't all that important - each library and framework performs quite adequately; if we'd had any DOM-based libraries or frameworks in the mix, performance would have been a much more important aspect. The most interesting part here is the memory usage - in real-world usage that is more important than slowdown when using a SPA.

### Integrations

Each of the frameworks have component capabilities, and are able to [integrate](http://codepen.io/nicolebek/pen/oxgvxe) [nicely](http://jsfiddle.net/jhudson8/pnsf0sky/) with [other](https://codepen.io/tutorialab/pen/JDxkn) frameworks.

### Level of control

#### Compatibility

Here we look at how compatible each library / framework is for different aspects of the development and deployment cycle.

|         | Oldest browser support | JavaScript support | Deployment instructions |
|---------|------------------------|--------------------|-------------------------|
| Vue.js  | [IE9+](https://github.com/vuejs/vue#intro) | ES5, recommends ES6 | [Basic](https://vuejs.org/v2/guide/deployment.html) |
| React   | [IE9+](https://facebook.github.io/react/docs/react-dom.html#browser-support) | ES5, recommends ES6 | [Basic](https://facebook.github.io/react/docs/installation.html#development-and-production-versions) |
| Angular | [IE9+](https://angular.io/docs/ts/latest/guide/browser-support.html) | [ES5](https://blog.thoughtram.io/angular/2015/05/09/writing-angular-2-code-in-es5.html), TypeScript recommended | [Extensive](https://angular.io/docs/ts/latest/guide/deployment.html) |
| Mithril | IE9+ | ES5, no particular recommendation | [Minimal](http://mithril.js.org/es6.html#setup) |

**Note**: Whilst you can technically write Angular in ES5, all the examples and documentation is in TypeScript, so it would be quite an uphill battle, ie: you should learn TypeScript, if you're planning on using Angular. [Polyfills](https://www.npmjs.com/package/babel-es6-polyfill) will need to be used to support IE9 in all frameworks and libraries, some less than others, but overall, it's pretty much the same experience.

### Overheads

#### Download sizes

The following are compressed download sizes of the [CDN version](https://cdnjs.com/libraries/) for each of the given library or framework.

|         | Download size |
|---------|---------------|
| [Vue.js](pages/resource/vue-2.1.10.min.js.zip)  | <span style="display: inline-block; background: #bada55; width: 108px; height: 8px"></span>  27kb  |
| [React](pages/resource/react-15.4.2.min.js.zip) [DOM](pages/resource/react-dom-min.js.zip)   | <span style="display: inline-block; background: #bada55; width: 224px; height: 8px"></span>  56kb |
| [Angular](pages/resource/angular2-beta.17.min.js.zip) | <span style="display: inline-block; background: #bada55; width: 504px; height: 8px"></span> 126kb |
| [Mithril](pages/resource/mithril-1.0.1.min.js) | <span style="display: inline-block; background: #bada55; width: 32px; height: 8px"></span>  8kb |

**Note**: React also includes react DOM, otherwise you could not use it in a browser, so this way it is on the same level as the other libraries as discussed in this article. Mithril really is tiny for the functionality you get out of the box, as the other libraries and frameworks will obviously be missing routing, controller behaviour, etc...


## Subjective evaluation methods

**Disclaimer**: As mentioned, the evaluation here is mainly the opinion of the author, however some of the scores and opinions are based online reviews and articles as seen in the [References](#references) section.


## Practical considerations

It is worth looking at the implementation of components, here are some links to examples from [TodoMVC](http://todomvc.com/):

* https://github.com/tastejs/todomvc/tree/master/examples/vue
* https://github.com/tastejs/todomvc/tree/master/examples/react
* https://github.com/tastejs/todomvc/tree/master/examples/angular2
* https://github.com/tastejs/todomvc/tree/master/examples/mithril

Below we examine the basic layout of each component, to see how the structure of a component is implements - however we leave out the actual implementation details - click the links above if you want to see that.

**Note**: Whilst implementations below are considered best-practice for each framework, it should be noted that you can easily style your code implementation in a similar fashion to each of these, eg: you can use React with TypeScript, and Mithril with ES6 if you like - so this is more of a look at what to expect if you look at the documentation and examples.

### Vue component implementation

[app.js](https://github.com/tastejs/todomvc/blob/master/examples/vue/js/app.js)

```javascript
(function (exports) {
	var filters = {
		all: function (todos) { ... },
		active: function (todos) { ... },
		completed: function (todos) { ... }
	};

	exports.app = new Vue({
		el: '.todoapp',
		data: { ... },
		watch: {
			todos: { ... }
		},
		computed: {
			filteredTodos: function () { ... },
			remaining: function () { ... },
			allDone: { ... }
		},
		methods: {
			pluralize: function (word, count) { ... },
			addTodo: function () { ... },
			removeTodo: function (todo) { ... },
			editTodo: function (todo) { ... },
			doneEdit: function (todo) { ... },
			cancelEdit: function (todo) { ... },
			removeCompleted: function () { ... }
		},
		directives: {
			'todo-focus': function (el, binding) {  ... }
		}
	});
})(window);
```

Vue.js has directive convenience methods built in, which will strongly encourage a particular style of development, which is good for maintainability, and makes it easy to spot what a component is doing.

### React component implementation

[app.jsx](https://github.com/tastejs/todomvc/blob/master/examples/react/js/app.jsx)

```javascript
var app = app || {};
(function () {
	app.ALL_TODOS = 'all';
	app.ACTIVE_TODOS = 'active';
	app.COMPLETED_TODOS = 'completed';
	var TodoFooter = app.TodoFooter;
	var TodoItem = app.TodoItem;
	var ENTER_KEY = 13;
	var TodoApp = React.createClass({
		getInitialState: function () { ... },
		componentDidMount: function () { ... },
		handleChange: function (event) { ... },
		handleNewTodoKeyDown: function (event) { ... },
		toggleAll: function (event) { ... },
		toggle: function (todoToToggle) { ... },
		destroy: function (todo) { ... },
		edit: function (todo) { ... },
		save: function (todoToSave, text) { ... },
		cancel: function () { ... },
		clearCompleted: function () { ... },
		render: function () { ... }
	});

	var model = new app.TodoModel('react-todos');

	function render() { ... }

	model.subscribe(render);
	render();
})();
```

React has helper methods, such as createClass, which make it possible to use ES5 - they do however recommend you use ES6 classes if possible.

### Angular component implementation

[app.ts](https://github.com/tastejs/todomvc/blob/master/examples/angular2/app/app.ts)

```javascript
import {Component} from 'angular2/core';
import {TodoStore, Todo} from './services/store';

@Component({
	selector: 'todo-app',
	templateUrl: 'app/app.html'
})
export default class TodoApp {
	todoStore: TodoStore;
	newTodoText = '';

	constructor(todoStore: TodoStore) { ... }
	stopEditing(todo: Todo, editedTitle: string) { ... }
	cancelEditingTodo(todo: Todo) { ... }
	updateEditingTodo(todo: Todo, editedTitle: string) { ... }
	editTodo(todo: Todo) { ... }
	removeCompleted() { ... }
	toggleCompletion(todo: Todo) { ... }
	remove(todo: Todo){ ... }
	addTodo() { ... }
}
```

With Angular using TypeScript, it leads to nicely readable code, plus you have type checking enforced (depending on the editor/IDE you use).

### Mithril component implementation

[todomvc.js](https://github.com/lhorie/mithril.js/blob/next/examples/todomvc/todomvc.js)

```javascript
var state = {
	...
	computed: function(vnode) { .... }
	...
};

var Todos = {
	add: function(e) { ... },
	toggleAll: function() { ... },
	toggle: function(todo) { ... },
	focus: function(vnode, todo) { ... },
	save: function(e) { ... },
	oninit: state.computed,
	onbeforeupdate: state.computed,
	view: function(vnode) { ... }
}

m.route(document.getElementById("todoapp"), "/", {
	"/": Todos,
	"/:status": Todos,
})
```

Mithril has distinct lifecycle methods, (eg: oninit), that makes it extremely easy to see what the component is doing.

#### Code considerations

* Out of these, the Angular has the "neatest" looking code - TypeScript is however something you'll need to learn before getting up and running.
* When using React or Vue, ES6 is encouraged, which will require [some](https://skyronic.com/blog/vue-project-scratch) [setup]( https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html) steps before you're ready to go.
* Mithril can be coded in ES5, though of course you can [use it with TypeScript](https://github.com/spacejack/mithril-ts-example) or [setup ES6](http://mithril.js.org/es6.html) in a similar fashion to the other libraries and frameworks.
* Whilst each supports IE9, the effort to get it working well varies, though [most](https://www.picnet.com.au/blogs/guido/post/2016/07/03/angular-2-and-internet-explorer-9-ie9/) [have](https://facebook.github.io/react/docs/react-dom.html#browser-support) a set of steps to get it working. None officially support IE8 and below, though [it is possible](https://gist.github.com/jsguy/edc7e51ae56e0ab37a5c) with Mithril, not that [anyone cares](https://en.wikipedia.org/wiki/Internet_Explorer_8#Adoption).
* React advocate the use of [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) or similar, and all of them support it in [one way](http://kerryritter.com/angularjsx-angularjs-with-jsx/) [or](https://medium.com/js-dojo/whats-new-in-vue-js-2-0-beyond-templates-with-jsx-4b8cda05f95f#.3fdosti2b) [another](http://mithril.js.org/jsx.html).
* Some libraries are [explicit](http://mithril.js.org/autoredraw.html#when-mithril-does-not-redraw) about their redraw control, [others](http://stackoverflow.com/a/28488131/6637365) are more [automatic](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats).


### Business and related considerations

Here we compare:

* Available components: How many (useful) pre-built components are available
* Scope: Overall benefits of the framework/library, ie: how much of the stack does it take care of.
* Market perception: How popular does this framework seem to be in the job-market, ie: how easily can you find developers?

|         | Components available | Scope                | Perception |
|---------|----------------------|----------------------|------------|
| Vue.js  |                    5 | **A**: 8, B: 7, C: 7 |          5 |
| React   |               **10** | A: 6, B: 7, **C**: 9 |      **9** |
| Angular |                    8 | A: 7, B: **8**, C: 8 |          8 |
| Mithril |                    4 | A: **9**, B: 8, C: 7 |          1 |

So from a component and perception point of view, React is the most mature of the current crop of libraries and frameworks, and scope-wise it is also good, especially for Broad-scoped teams, mainly due to the testable nature of the library.

**Note:** In order to create the above, I used google to see what components and jobs were available for each library, and my own experience for the scope, ie: not at all scientific...

### Maintainable, Expressive, Performant

Below is a table with scores out of 10 for each persona, based on [public opinion](https://www.quora.com/Which-should-I-learn-Mithril-Vue-or-Angular), [research](http://todomvc.com/), and of course what I feel is "about right" from personal experience.

|  			| Maintainable                                                    | Expressive           | Performant |
|-----------|-----------------------------------------------------------------|----------------------|------------|
| Vue.JS   	| 24 - A: 8, **B**: 9, C: 7                                       | 21 - A: 7, **B**: 7, C: 7 | 23 - A: 8, B: 8, C: 7 |
| React   	| <font style="color:green">**28**</font> - A: 9, B: 9, **C**: 10 | 21 - A: 7, **B**: 8, C: 6 | <font style="color:green">**24**</font> - A: 8, B: 8, C: 8 |
| Angular   | 27 - A: 8, B: 9, **C**: 10                                      | 15 - A: <font style="color:red">4\*</font>, B: 5, **C**: 6 | <font style="color:green">**24**</font> - A: 8, B: 8, C: 8 |
| Mithril   | 24 - A: 8, **B**: 9, C: 7                                       | <font style="color:green">**24**</font> - **A**: 9, B: 8, C: 7 | 23 - A: 8, B: 8, C: 7 |

**Note<font style="color:red">*</font> **: [Angular uses TypeScript](https://toddmotto.com/typescript-the-missing-introduction), which is very good for *broad* teams, especially for Maintainability, though it may not be so good for [Expressiveness](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.uj9o94rm3), as it enforces type checking, etc.

* **Maintainable winner** React - has the most testable best-practice code, and is steered towards long-term clean code for any persona - it edges out Angular as it is more focused.
* **Expressive winner** Mithril - you can write a complete app with a single framework, and it has a router and data-fetching built right in - you can go from 0 to SPA faster than [an escaping Jeff Goldblum](https://professionalmorondotcom.files.wordpress.com/2015/06/must-go-faster.gif?w=723).
* **Performant winner** It's a draw between React and Angular. Each framework has a virtual DOM engine, and perform roughly the same in real-world circumstances; in really complex pages with large data sets all of the frameworks and libraries were quite forgiving, and using the vDOM, auto-optimised for performance quite well. Note again: this is not based on synthetic benchmarks.

**Note:** There are a bunch of sites that [compare](https://auth0.com/blog/more-benchmarks-virtual-dom-vs-angular-12-vs-mithril-js-vs-the-rest/) [frameworks](http://www.stefankrause.net/wp/?p=316), but every single one provides differing results, so I'm calling it a draw. Of course none of them can beat [this one](http://vanilla-js.com/). ;)

![Frameworks and libraries MEP](pages/img/mep-with-libs.jpg)

This venn diagram shows roughly how each library or framework is compared to eachother -

## Summing up

Before settling on a particular framework or library it is important that you consider and understand the aspects and repercussions of all of the above arguments and discussion. So which would you consider? Below is a table that describes in which order you should consider the discussed frameworks, based on the arguments made in this article.

|                          | Frameworks / libraries in order |
|--------------------------|---------------------------------|
| **A**: Lone developer    | Mithril, Vue.js, React, Angular |
| **B**: Focused team      | Vue.js, React, Angular, Mithril |
| **C**: Broad-scoped team | React, Vue.js, Angular, Mithril |

The main reasons for each person framework / library order are:

* **A**: The more features out of the box, the better - you can quickly create something amazing, without worrying too much about popularity of your chosen framework or library, as long as it is technically excellent.
* **B**: Vue.js seems to have a nicely balanced approach to handling most things, plus it is very popular at the moment, and as such would be a good choice for focused teams.
* **C**: React is still king in the broad sense - it has great testability and a very large set of components, so it would be a good fit for broadly focused teams.

**Note**: An important aspect of this article is to realise that your team might not fit distinctly into one persona, so it may well be appropriate to consider more than one library or framework.

**A final thought**: your particular wants and needs might not line up with mine, for example you might value market perception over technical excellence in a library or framework - or perhaps the number of available 3rd party components is more important, but whatever the case might be I hope that I have given you enough information to start making a decision on which libraries to choose.


## References

Here are some of the URLs used to develop this article.

* https://auth0.com/blog/more-benchmarks-virtual-dom-vs-angular-12-vs-mithril-js-vs-the-rest/
* http://www.stefankrause.net/wp/?p=301
* https://www.quora.com/Which-should-I-learn-Mithril-Vue-or-Angular
* https://medium.com/tastejs-blog/yet-another-framework-syndrome-yafs-cf5f694ee070#.pmd9urwuz
* https://en.wikipedia.org/wiki/Not_invented_here#In_computing
* https://the-pastry-box-project.net/addy-osmani/2014-January-19
* https://about.gitlab.com/2016/10/20/why-we-chose-vue/
* https://www.airpair.com/angularjs/posts/angular-vs-react-the-tie-breaker
* https://au.indeed.com/jobs?q=javascript
* https://www.google.com.au/search?q=vue.js+component, https://www.google.com.au/search?q=react+component, https://www.google.com.au/search?q=angular+component, https://www.google.com.au/search?q=mithril+component
* https://github.com/brillout/awesome-react-components#ui-frameworks
