(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./doc/api-reference/event-dispatcher-service.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var p=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n},"Service for handling application level events"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"addlistener"}},"addListener"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"addListener"),"<",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"T"),">(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"eventName"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"listener"),": function): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Add a new listener for a specific event"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Type parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"T")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"eventName"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"string")),m.a.createElement(o.MDXTag,{name:"p",components:n},"name of the event to listen to"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"listener"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"listener to invoke when the event is dispatched"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"event"),": CustomEvent\u2039T\u203a): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"event")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"CustomEvent\u2039T\u203a")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"dispatch"}},"dispatch"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"dispatch"),"<",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"T"),">(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"eventName"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"data"),": T): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"CustomEvent\u2039T\u203a")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Dispatch a new event"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Type parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"T")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"eventName")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"name of the event to dispatch")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"data")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"T"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"data attached to the event")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"CustomEvent\u2039T\u203a")),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"removelistener"}},"removeListener"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"removeListener"),"<",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"T"),">(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"eventName"),": string, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"listener"),": function): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Stop listening for a specific event"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Type parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"T")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"eventName"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"string")),m.a.createElement(o.MDXTag,{name:"p",components:n},"name of the event to stop listening to"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25aa ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"listener"),": ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"function")),m.a.createElement(o.MDXTag,{name:"p",components:n},"listener to remove from the dispatcher"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 (",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"event"),": CustomEvent\u2039T\u203a): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"event")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"CustomEvent\u2039T\u203a")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function c(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;c(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"eventdispatcherservice"}},"EventDispatcherService"),m.a.createElement(p,null))}}}]);