(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./doc/api-reference/commands.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),m=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=function(e){var n=e.components;r(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"p",components:n},"Open a dialog for bulk creating limeobjects"),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"flow-example"}},"Flow example"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Let's have a look at the general flow by going through the concrete example of adding several persons to a marketing activity:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Go to the table view of persons."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Filter everyone who should be included in the marketing activity."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Select 'Bulk create objects' form the action menu."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Select marketing activity as type of content."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Fill out the rest of the form and click 'create'."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"A toast message appears and gives you 5 seconds to undo the action before it creates the corresponding task."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Another toast message will inform you after the task is completed."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"If the task ended successful you can go to the participant table view and check the result.")),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"configuration"}},"Configuration"),o.a.createElement(m.MDXTag,{name:"p",components:n},"In order to activate the feature go to a table configuration in lime-admin to the limetype you want to bulk create from\nand add the following configuration:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'"actions": [\n{\n"id": "limeobject.bulk-create-dialog",\n"params": {\n"relations": [<LIST OF CREATABLE, RELATED FIELDS (AS STRINGS)>]\n}\n}\n],\n')),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"id"))," ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limeobject.bulk-create-dialog")),o.a.createElement(m.MDXTag,{name:"hr",components:n}),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"filter"}},"filter"),o.a.createElement(m.MDXTag,{name:"p",components:n},"\u25cf ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"filter"),": ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"Expression"))),o.a.createElement(m.MDXTag,{name:"p",components:n},"A query describing what limeobjects to create new limeobjects from. Each object from the result will result in a\nnew related limeobject to be created"),o.a.createElement(m.MDXTag,{name:"hr",components:n}),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"limetype"}},"limetype"),o.a.createElement(m.MDXTag,{name:"p",components:n},"\u25cf ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"limetype"),": ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"Limetype"))),o.a.createElement(m.MDXTag,{name:"p",components:n},"The limetype of the objects to create new objects from"),o.a.createElement(m.MDXTag,{name:"hr",components:n}),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"relations"}},"relations"),o.a.createElement(m.MDXTag,{name:"p",components:n},"\u25cf ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"relations"),": ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"string[]")," =  []"),o.a.createElement(m.MDXTag,{name:"p",components:n},"A list of relation names that are possible to create from the limetype"),o.a.createElement(m.MDXTag,{name:"hr",components:n}))};function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=function(e){var n=e.components;p(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"p",components:n},"Open a dialog for creating a new limeobject"),o.a.createElement(m.MDXTag,{name:"p",components:n},'The create dialog is implemented as a command so a plugin can easily replace the original dialog with a custom one.\nCheck out the "Hello, Event!" tutorial for a detailed description on how to implement your own create dialog.'),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"id"))," ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limeobject.create-dialog")),o.a.createElement(m.MDXTag,{name:"hr",components:n}),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"optional-limeobject"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"Optional")," limeobject"),o.a.createElement(m.MDXTag,{name:"p",components:n},"\u25cf ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"limeobject"),"? : ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"any")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Default data to populate the form with"),o.a.createElement(m.MDXTag,{name:"hr",components:n}),o.a.createElement(m.MDXTag,{name:"h3",components:n,props:{id:"limetype"}},"limetype"),o.a.createElement(m.MDXTag,{name:"p",components:n},"\u25cf ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"limetype"),": ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"Limetype"))),o.a.createElement(m.MDXTag,{name:"p",components:n},"The limetype of the object to create"),o.a.createElement(m.MDXTag,{name:"hr",components:n}))};function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;i(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"commands"}},"Commands"),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"bulkcreatedialogcommand"}},"BulkCreateDialogCommand"),o.a.createElement(c,null),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"createlimeobjectdialogcommand"}},"CreateLimeobjectDialogCommand"),o.a.createElement(l,null))}}}]);