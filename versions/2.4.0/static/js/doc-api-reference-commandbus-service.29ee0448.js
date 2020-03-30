(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./doc/api-reference/commandbus-service.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var p=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n},"Service for registering and executing commands"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"methods"}},"Methods"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"handle"}},"handle"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"handle"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"command"),": object): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"any")),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"Overrides CommandHandler.handle")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Execute the given command with it's registered command handler"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"command")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"command to execute")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"any")),m.a.createElement(o.MDXTag,{name:"p",components:n},"result from the command handler"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"issupported"}},"isSupported"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isSupported"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"commandId"),": CommandIdentifier): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"boolean")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Check if a command is supported"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"commandId")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"CommandIdentifier"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"identifier of the command. Can be either the class or the string the class was registered with")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"boolean")),m.a.createElement(o.MDXTag,{name:"p",components:n},"true if the command is supported, false otherwise"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"register"}},"register"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"register"),"(",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"commandClass"),": CommandClass, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"handler"),": CommandHandler): ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Register a command to be executed by the given handler"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"commandClass")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"CommandClass"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"type of command")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"handler")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"CommandHandler"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the handler instance used to execute the command")))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"void")),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function c(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var l=function(e){var n=e.components;c(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n},"Events dispatched by the commandbus event middleware"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"enumeration-members"}},"Enumeration members"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"failed"}},"Failed"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Failed"),': = "command.failed"'),m.a.createElement(o.MDXTag,{name:"p",components:n},"Dispatched if an error occurs while handling the command"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"detail"))," { command, error }"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"handled"}},"Handled"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Handled"),': = "command.handled"'),m.a.createElement(o.MDXTag,{name:"p",components:n},"Dispatched when the command has been handled by the commandbus"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"detail"))," { command, result }"),m.a.createElement(o.MDXTag,{name:"hr",components:n}),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"received"}},"Received"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u2022 ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Received"),': = "command.received"'),m.a.createElement(o.MDXTag,{name:"p",components:n},"Dispatched when the command has been received by the commandbus.\nCalling ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"preventDefault()")," on the event will stop the command from being handled"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"detail"))," { command }"),m.a.createElement(o.MDXTag,{name:"hr",components:n}))};function s(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;s(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"commandbusservice"}},"CommandBusService"),m.a.createElement(p,null),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"commandevent"}},"CommandEvent"),m.a.createElement(l,null))}}}]);