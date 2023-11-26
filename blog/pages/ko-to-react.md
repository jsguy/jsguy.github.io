# From Knockout to React?

<p class="main-intro">
Knockout is a DOM-based 2 way bindings library which has served us very well for the past 1/2 decade (yes, it really has been 5 years!), however as technologies evolve, it is no longer the library du[-](https://www.youtube.com/watch?v=fXSO6I5YHyY)jour, (and hasn't been for a while).
</p>

![Framework or library](img/cross_the_bridge.jpg#main-img)

So, it's been a case of "we should probably upgrade to something newer" for a while, however we haven't really had a good technical reason to do so - it still serves our purposes very well. You could however now say that we have a subjective reason to do so: namely that it is nigh on impossible to hire developers that specialise in, (or even know), KnockoutJS - everyone seems to use other libraries these days. One library is [React](https://facebook.github.io/react/) - a virtual DOM based library that is very popular, this article discusses the uses of React compared to our particular implementation of Knockout.

## Cognitive load

Switching to a different (modern) library will also mean we will need to switch to using something other than ES5 - mainly because all the newer libraries are developed in ES6 or TypeScript - all the examples are also delivered in such a format, so it is a given that we should convert to one of those as well - it is after all [the way of the future](https://medium.com/@basarat/should-i-learn-es5-es6-or-typescript-46c625c25d95). Of course it will [take some getting used to](https://medium.com/@stevewalsh/why-im-throwing-out-react-and-going-back-to-angular-1-x-3aa2b54e907e#.gh3uxmp74), but in theory [the](http://stackoverflow.com/a/28444648/6637365) [benefits](https://facebook.github.io/react/blog/2013/06/05/why-react.html) [should](http://blog.andrewray.me/reactjs-for-stupid-people/) [be](http://blog.andrewray.me/youre-missing-the-point-of-jsx/) [real, right](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)?. So I guess the first step is to learn ES6 or TypeScript.

## Additional steps

So switching to ES6 or TypeScript means an additional step - you now need to be able to compile down to ES5, as that is what browsers work with - most support a subset of ES6, but none support it all just yet. This means using Babel or the TypeScript compiler each time you make a change - and you may well need to add polyfills for older browsers, if you use certain features - luckily setting this up isn't too hard, and can be semi-automated when setup correctly. 

## Components, components everywhere and not a library to express.

React wants you to [make components](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html). This is great if you have the time and good reasons to do so; some would argue you shouldn't be making [so many libraries](http://blog.felipe.rs/2017/02/25/id-software-programming-principles/), and you're better off concentrating on what you're supposed to get done - after all being [expressive](http://gafter.blogspot.com.au/2007/03/on-expressive-power-of-programming.html) is tantamount to being productive - making components arguably adds extra code and can somewhat obscure the immediate end goal. Obviously it is good to write testable code and ensure single responsibility is adhered to, but not every little thing needs to be a compartmentalised piece of code if it affects expressiveness too much.
Experienced React developers will argue that it's simply a learning-curve issue, and that their code is so much better than it used to be. That might be so, however there is arguably little technical difference what you can achieve with Knockout and React - the key difference seems to be in the recommended approaches of each libray, (such as unit tastablilty), and of course some (rudimentary) performance improvements.

## So what's the difference in code?

Here is a, (somewhat old), example of how we use Knockout JS in one of our current projects - the HTML is generated from an MVC Razor view, which is why the data looks "hard coded":

```codepen
wJewqP
```

As you can see, we use [Kotools](https://github.com/jsguy/kotools) to allow us to re-use pre-rendered HTML and existing values in the fields - the main benefit is avoiding [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content), and binding to a the existing C# viewmodel architecture allows us to (easily) use the built-in annotated validation framework, and avoid various other things that would have otherwise meant writing a large amount of work-around code.

To rewrite this in React we might do something like so:

```codepen
BWZyVK
```

Here we have re-created the example with React components - the [recommended approach](https://facebook.github.io/react/docs/react-component.html) - the key advantage here is that the each component can be separately unit-tested based on the HTML output, whereas in Knockout, (with our implementation), you can really only unit-test the functionality of the view model, (which is arguable adequate for most situations). The key difference is that for React to work, you need to create JSON data models in the page, or (preferably) use a vastly different architecture, such as [GraphQL](http://graphql.org/), [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) [JSON RPC 2.0](http://www.jsonrpc.org/specification) endpoints or even a [serverless](https://en.wikipedia.org/wiki/Serverless_computing) implementation, all of which are quite different to a traditional dotnet MVC setup.

It should be noted that you can also create [components with Knockout](http://knockoutjs.com/documentation/component-overview.html), which would also work with any of the given architectures, and whilst there are performance improvements in the DOM rendering speed for complex pages of React, it is worth considering that React and the associated JavaScript is larger than jQuery + Knockout alone, by a significant amount, with default settings, however this can probably be optimised [somewhat](https://facebook.github.io/react/docs/optimizing-performance.html).

## Paradigm shift, or rearranging of the deck chairs?

So is React really all that different to Knockout or is it simply shifting the traditional pain points of dynamic web application development? I'd like to think it's a little bit of both - on the one hand, the recommended React web app implementations encourage good practice which leads to well maintainable code and decent performance, but on the other hand, there isn't much to be gained from a technical point of view - that is unless you go all the way with your React implementation - some have suggested using React and Knockout [together](http://www.intelligiblebabble.com/making-reactjs-and-knockoutjs-play-nice), however this approach should be discouraged, as it wll give you the worst of both worlds - ie: is Knockout making the React fail, or maybe vice-versa, or is there some other issue?

## Why should we switch?

1. It is easier to hire React developers (compared to "KnockoutJS" developers, which arguably don't exist)
1. We get an implied opportunity to create unit-testable JavaScript code, which we haven't done before (though could have, if it were deemed necessary...)
1. We have a chance to re-write some pages that have heavy technical debt due to being re-developed and added to over the years.
1. Clearer use of a single library should be more maintainable than mixing several (eg: jQuery and KnockoutJS).
1. We can switch to a different style of architecture, which is considered a more "modern" way to do things. *

\* Note: Switching will be a MAJOR shift away from how the team has traditionally completed this kind of task - typically the backend developers would do the unit testing and they would control exactly what data is exposed in which query, plus create extensive view-models that tie the backend and frontend and the data together - this paradigm shift completely decouples this workflow, and allows more control from the frontend, thus becoming more flexible.

## Potential negative impacts

1. There are no immediate advantages as this is a long-term strategic shift in archiecture
1. We will increase the congnitive load, which means that in some cases frontend development will be slower, eg: adding a column to a search result would mean updating not just the view, but also unit tests for the query and the view, etc...
1. There will be a long period of time where we maintain both Knockout and React side-by-side - this is not an ideal state for the project to be in.
