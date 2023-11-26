# Basic react boilerplate

<p class="main-intro">
The basic react boilerplate uses various technologies, conventions and techniques for the client-side ReactJS stack - we have implemented ES6 (via babel loaders), are using modular CSS, material-ui components plus themes and fontawesome icons. It implments a simple todo app.
</p>

![Framework or library](img/locomotive_45.jpg#main-img)

There are numerous ways to build a React app - though I think Tomas Fuchs captured the user experience for the first-time developer perfectly in [this tweet](https://twitter.com/thomasfuchs/status/708675139253174273?lang=en). The fact is, there is a heck of a lot of information, concepts and ideas to absorb, in order to devlop a decent React app, such as [components](https://facebook.github.io/react/docs/react-component.html), [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html), [routing](https://reacttraining.com/react-router/), [bundling](http://www.pro-react.com/materials/appendixA/), [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/), [context](https://facebook.github.io/react/docs/context.html), [testing](https://facebook.github.io/jest/), [modular CSS](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e), [babel](https://babeljs.io/), [ES6](https://github.com/lukehoban/es6features), [material-ui](http://www.material-ui.com/#/), [query-strings](https://www.npmjs.com/package/query-string), [redux](http://redux.js.org/), [and](https://medium.com/@chris.kobrzak/a-few-dos-and-don-ts-in-react-e5504bce7b9d) [so](https://gist.github.com/zbyte64/16f936d39e6562dfa663) [on](http://jsfiddle.net/ryansukale/3yLn5qzc/3/)[.](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)[.](https://jaketrent.com/post/smart-dumb-components-react/)[.](https://github.com/airbnb/enzyme/) There are some decent getting started tutorials:

* https://facebook.github.io/react/tutorial/tutorial.html
* http://buildwithreact.com/tutorial

And the links in the above paragraph will get you some of the way to understanding what it all does.

At this point, you might be wondering, why is it so complex - and why is there so much to learn? The answer is: React is just the view, ([well sort of](https://medium.com/javascript-inside/what-if-react-was-really-only-the-v-in-mvc-5854fd6f601c)). That means you need to implement almost everything else yourself. 

In effect it means that in order to implement best-practice React, you need to do the work and reasearch, and then eventually, you'll come up with a [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code).


## So, did you re-invent the wheel?

Yeah pretty much - there are plenty of [decent](https://github.com/facebookincubator/create-react-app#getting-started) [ways](https://zeit.co/blog/next2) to get into [React development](https://www.reactboilerplate.com/), however if you simply jump into one of those solutions, will you ever really bother to understand how it all hangs together, and most importantly, why it works the way it does? And why are [all these dependencies](https://github.com/react-boilerplate/react-boilerplate/blob/master/package.json) included, do we really need them all? These are questions you can only answer by taking a step back, and examining the details.

## How does it work?

The Boilerplate provides a way to create a static Single Page App ([SPA](https://en.wikipedia.org/wiki/Single-page_application)) that talks to a [JSON RPC 2.0](http://www.jsonrpc.org/specification) server.

We have the following structure in our boilerplate code:

* **/src** - This is where you put your application code, and it includes a few pre-built parts
* **/src/index.js** - entrypoint into the app, this loads any global [providers](https://medium.com/@bloodyowl/the-provider-and-higher-order-component-patterns-with-react-d16ab2d1636) and the theme, plus global styling
* **/src/html.ejs** - this is a template that renders the HTML our App uses
* **/src/App.js** - this renders the App layout, and the associated event handlers
* **/src/Reset.js** - this is a special route that allows React router to reset a page
* **/src/Home.js** - this is our home page - which is simply a component, composed of more components, [and so on](https://en.wikipedia.org/wiki/Turtles_all_the_way_down).
* **/config** - in this directory you'll find the configuration files for the project, such as the webpack definitions, and application settings for [various environments](https://stackoverflow.com/questions/16978256/what-is-node-env-in-express).
* **/config/settings.js** - This is included in the app by default, and will load the config file matching the given NODE_ENV, "development by default."
* **/dist** - This directory includes any static assets you want to distribute with, such as fonts, images and 3rd party non-bundle-able assets.
* **__tests__** - This contains our tests for the whole app - by default we've used a snapshot for the TodoBuilder component.

## How do you build a new page?

Add a new file in the "/src" directory named after the entity it represents, starting with a capital letter, and camel-cased. For example: "AboutUs". In this file, create a React component, that renders what you'd like to do, for example:

```javascript
import React, { Component } from 'react';

class AboutUs extends Component {
	render() {
		return &lt;div className="page aboutus">
			&lt;h2>About us&lt;/h2>
		&lt;/div>
	}
}

export default AboutUs;
```

Now in App.js, import the new file add a route for it:

```javascript
...
import AboutUs from './AboutUs';
...
&lt;Route exact path="/aboutus" component={AboutUs} />
...
``` 

And your component should now be accessible at `/aboutus` in your app.
Note: We use the convention of lowercase for pathes in routes. You can read more about routing [here](https://reacttraining.com/react-router/).

## What about styling?

We are using [Modular CSS](https://github.com/css-modules/icss), which means CSS that is scoped locally in the context it is being used. It is alse composable, and can do a [bunch of neat things](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e) for us, that isn;t possible, or easily maintainable with old-school CSS.
The convention is to name the CSS file for your page the same as your page and with `.icss` as the extension. You then load it in your file like so:

```javascript
import styles from './AboutUs.icss'
```

And then assign the className the value like so:

```javascript
&lt;div className={styles.aboutHeading}>
```

This works for any className you define in the icss file, for example:

```css
.generalHeadings {
	font-size: 2rem;
	font-weight: bold;
}
.aboutHeading {
	composes: generalHeadings;
	padding-bottom: 8rem;
	color: blue
}
```

You can access both style.generalHeadings or style.aboutHeading from that stylesheet.

## What about the server?

This boilerplate uses JSON RPC 2.0, and there is an [example server here](https://github.com/jsguy/basic-jsonrpc-server), which works with the example todo app. As part of the boilerplate, we have created a simple [Promise-based](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) JSON RPC client, which can retreive and update our todos. For example, to get the todos:

```javascript
rpc.request({method: "listTodos"}).then((json) => {
	if(json.error) {
		alert(json.error.message);
	} else {
		this.setInitialState(json.result);
	}
});
```

This way of calling remote procedures make it easy to use a standard and clean way to handle messaging. Here is another example, where we 

```javascript
rpc.request({
	method: "updateTodo",
	params: todo
}).then( (json) => {
	if(json.error) {
		alert(json.error.message);
	}
});
```

We use the standard `params` attribute to pass parameters to the remote procedure. The "todo" is an object that represents a todo. 

## 