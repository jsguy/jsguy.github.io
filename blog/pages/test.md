# Test page for MD rendering

<p class="main-intro">
Main intro has slightly larger font rendering
</p>

Using `#main-img` as a anchor makes the image large and in charge.

![Framework or library](img/blue_mountains.jpg#main-img)

**Note**: The *text here* is how notes should look.

## Some code

**Note:** Code syntax highlighting and graphs / charts is loaded on demand, for the sake of efficiency

```javascript
var app = app || {};
(function () {
	...
	function render() { ... }
	model.subscribe(render);
	render();
})();
```

## A list

* one
* two

A link [SPA](https://en.wikipedia.org/wiki/Single-page_application).

## Definition list-like

* **[Vue.js](https://vuejs.org/)** - *library* - "Intuitive, Fast and Composable MVVM for building interactive interfaces"
* **[React](https://facebook.github.io/react/)** - *library* - "A JavaScript library for building user interfaces"
* **[Angular](https://angular.io/)** - *framework* - "Superheroic JavaScript MVW Framework"
* **[Mithril](http://mithril.js.org/)** - *framework* - "Mithril is a modern client-side Javascript framework for building Single Page Applications."

## A table, with internal colours and links

|         | Slowdown | Memory loaded | Memory after 1000 row benchmark |
|---------|--------------------------|-------------------|
| Vue.js  |     1.22 |          3.66 |              9.28 |
| React   |     <font style="color:red">1.37</font> |          4.72 |             11.62 |
| Angular |     1.24 |          <font style="color:red">5.79</font> |             <font style="color:red">12.07</font> |
| Mithril |     <font style="color:green">**1.20**</font> |          <font style="color:green">**3.13**</font> |              <font style="color:green">**8.97**</font> |

## Codepen

You can add inline codepens like so:

```codepen
BWZyVK
```

## Diagrams

The diagrams are provided by [Mermaid](http://knsv.github.io/mermaid/), see the documentation for each chart type here:

* [Flowchart](http://knsv.github.io/mermaid/#flowcharts-basic-syntax5)
* [Sequence](http://knsv.github.io/mermaid/#sequence-diagrams6)
* [Gantt](http://knsv.github.io/mermaid/#gant-diagrams7)

Also check out the [Demos](http://knsv.github.io/mermaid/#demos9) section for some examples.

### Using sequence diagram

```sequence
Alice->>Bob: Hello Bob, how are you?
Note right of Bob: Bob cogitates
Bob-->>Alice: I am good thanks!
```

### Flowcharts

```flow
graph LR
    A[Square Rect] -- Link text --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D
```

### Gantt

```gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram functionality to mermaid
section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
section Critical tasks
Completed task in the critical line :crit, done, 2014-01-06,24h
Implement parser and jison          :crit, done, after des1, 2d
Create tests for parser             :crit, active, 3d
Future task in critical line        :crit, 5d
Create tests for renderer           :2d
Add to mermaid                      :1d
```

## Using charts

```barchart
{
	"data": {
  		"labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	    "series": [
			[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
			[3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
		]
	},
	"options": {
		"seriesBarDistance": 15
	}
}
```

## Adding comments for reveal.js

~~yo~~

[//]: # (Reveal: Start)
## This is slide title 1
* These
* Are slide
* points
[//]: # (Reveal: End)


[//]: # (Reveal: Start)
## This is slide title 2
* These too
* Are two slide
* points 2
[//]: # (Reveal: End)

[//]: # (Reveal: Start)
## This is slide title 3

```barchart
{
	"data": {
  		"labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	    "series": [
			[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
			[3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
		]
	},
	"options": {
		"seriesBarDistance": 15
	}
}
```
[//]: # (Reveal: End)
