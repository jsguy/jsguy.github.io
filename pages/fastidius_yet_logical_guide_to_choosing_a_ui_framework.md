# Choosing a web UI framework or library

<p class="main-intro">
There are numerous factors you need to consider when choosing a web UI framework or library - the foremost technical consideration is: do you need a framework, or would a library be a better fit for your needs? Here we examine some aspects that you'll need to consider when deciding on a framework or library.
</p>

![Fork](img/forkinroad.jpg#main-img)

A library is a collection of functions and or objects that serves a particular purpose, whereas a framework is a collection of patterns and libraries that help with building an application. When deciding which you need, the questions to ask include:

* Do you need the flexibility that comes with choosing a library over a framework?
* Are you able to take on board the extra responsibilities that will be required to use a library?
* Will a framework be flexible enough to cover all your requirements?
* Will you miss out on any features by choosing a particular framework or library?

A library is usually lean, and serves one purpose well, and allows (forces?) the developer(s) to supply the rest of of the stack in their development environment, whereas a framework comes with it's own set of tools, (and possibly quirks), that your development team will need to take on board.

The main benefit of a framework is that it solves most of the common tasks and issues that a developer needs to solve when developing an app, and the main benefit of a library is the flexibility to work with other tools and patterns that a framework might not allow for.

![Framework vs library](pages/img/framework_vs_library.jpg)

## Evaluation methods

We will discuss both Subjective and Objective evaluation methods in order to help you consider a library or framework.

* **An objective perspective** is one that is not influenced by emotions, opinions, or personal feelings - it is a perspective based in fact, in things quantifiable and measurable.
* **A subjective perspective** is one open to greater interpretation based on personal feeling, emotion, aesthetics, etc. In our case, we will consider the opinions of the whole development team, and collectively the business as having a subjective perspective.

## Objective evaluation methods

### Popularity

See how much a framework/library [is used](https://risingstars2016.js.org/#framework), so that you can gauge what the community thinks of it.

* Available UI components
* Backing (Company)
* Community help Available

### Integrations

You may need to integrate your new framework/library with existing sites, and each will have a unique set of integration points, it is worth looking at what your integration point needs are, and how they might be affected by your UI framework/library decisions. For example if you add in a framework/library that requires building each time something is changed, you inherently add to the development time - it might only be 10 - 15 seconds extra build, but that adds up after a while - and it also effects things down the pipeline, for example: your deployment process now has an extra build-step.

### Level of control

With any UI framework or library you lose control of certain things such as:

* Compatibility with browsers
* Direct access to the DOM (which might affect legacy tools)
* Complete control over certain performance aspects, eg: you might be limited to working in the virtual DOM, which means some tricks or tools you're used to, may not work with your new framework or library.
* Performance tuning options will be framework/library specific and limited

### Overheads

Some of these technologies come with certain overheads that need to be considered, such as:

* The download size of the base framework or library, and what the means for your users
* Capabilities for optimisation without needing to "hack" the framework functionality
* Ways to extend the the framework, eg: is there good component support?

It is very worthwhile to examine these, as once you start using a particular framework or library it may well be difficult to discover overhead limitations.



## Subjective evaluation methods

These evaluation methods will be specific to the entity evaluating the frameworks/libraries, and the outcome of each method might provide more value for one organisation over another. For example if your deadlines are usually really short, you might value expressiveness over maintainability, and if you have long projects with basic needs, maintainability is probably more important than performance.


### Business related considerations

When evaluating a framework or library, consider what the business needs - do you want to create a collection of customisable components that will be re-used in various flexible scenarios, or do you have a more narrow scope, such as web-only, and maybe just re-used in a few, more common scenarios. Make sure you pick something that fits the level of expertise of the developers - are they expert Front-enders that like to swap libraries in and out, or are they more all-round full-stack developers that might prefer a more focused approach, such as a framework?
Also consider how quickly you need to be able to develop bespoke solutions - this is particularly important when looking at [certain libraries](http://pixeljets.com/blog/why-we-chose-vuejs-over-react), as they tend to encourage the developer to break components down into relatively small parts, which can be quite time consuming, though more (forcibly) testable, and hence robust in the long run. Such strictness is great if there are many developers, and they have time allocated to write tests and build scripts. In a smaller team full-coverage unit tests are considered a luxury that there is often not enough resource/time to implement.
Some of the more [popular libraries](https://www.npmjs.com/browse/keyword/jquery-plugin) have a very [large amount of components](https://github.com/brillout/awesome-react-components#ui-frameworks) available for use, which may be something to consider if your implementations include a broad range of use cases.


### Maintainable, Expressive, Performant

I like the aphorism: "Cheap, Fast, Good - choose any 2" - we can apply similar criteria when assessing frameworks:

* **Maintainable** - how easy is it for [any developer](https://www.reddit.com/r/web_design/comments/3yhn6k/i_just_found_out_about_semantic_ui_seems_pretty/cye4ohx/) to modify and keep the UI up to date, aka: "Cheap"
* **Expressive** - how quickly can a developer get a solution out the door, aka: "Fast"
* **Performant** - how well does the UI perform both from an implementation and speed point of view, especially when there are multiple levels of nested UI components, aka: "Good"

Pick any two. This criteria is quite dependent on the experience that individual developers have with a particular framework, and it can be quite subjective how we measure each - however for this discussion, we will assume the user has basic experience with each of the frameworks and can comfortably create a UI widget from scratch in any of the libraries/frameworks.

![Maintain, Express, Perform](pages/img/mep.jpg)

As you can see, there's always a tradeoff; this applies equally when evaluating a library or a framework, however in the case of evaluating a library, you need to include thoughts on the tools that it will be used with, in order to contrast it with frameworks in the same comparison model.


## Practical considerations

When selecting a UI framework, and time comes to write a significant application, all theoretical and philosophical discussion aside, you are in one way or another limited by the following:

* The underlying framework or library.
* The UI library or widgets/components that runs on top of the underlying framework or library

The selection of both of these will have a profound effects on how your development cycle looks, and also how your app is built and deployed - the more [well written components](https://github.com/callemall/material-ui) and [well tested UI support libraries](https://jqueryui.com/) you can find, the easier the development lifecycle is likely to be.

An important practical factor to consider is if your framework of choice will work with legacy components. Sometimes you can find adaptors, or [write your own adaptor](http://stackoverflow.com/questions/38836553/how-to-use-jquery-ui-with-react-js/38839508), which means you can mix and match well tested and existing components, instead of rewriting or using immature libraries when speed and ease of development is key (purists would argue you should never mix and match, however practically this is not always avoidable).


## Summing up

Before settling on a particular framework or library it is important that you consider and understand the aspects and repercussions of your choice - in this article we have touched on some of these aspects, without going into too much detail on any particular framework or library; this was intentional, so as to not try and influence your choice, but rather make sure you understand what you should be looking for when evaluating the suitability of features for your needs.

So, good luck, and be sure to consider all the relevant questions, most of all: will a library or framework suit your needs best?
