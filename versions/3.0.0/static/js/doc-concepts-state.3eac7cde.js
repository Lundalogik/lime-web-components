(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./doc/concepts/state.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"state"}},"State"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The state in the webclient stores all information related to data. It can be limetypes, loaded limeobjects, the current user etc."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"connecting-to-the-state"}},"Connecting to the state"),o.a.createElement(r.MDXTag,{name:"p",components:t},"To use the state, a property in a web component must be connected to it. This is done by decorating the property with a state decorator. The example below shows how to connect to the state to get the current logged in user."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx",metaString:""}},"export class MyComponent implements LimeWebComponent {\n\n    @CurrentUser()\n    @State()\n    private user: object;\n\n    public render() {\n        return <p>Hello {this.user.fullname}!</p>;\n    }\n}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"filtering-the-result-with-arguments"}},"Filtering the result with arguments"),o.a.createElement(r.MDXTag,{name:"p",components:t},"It's also possible to send arguments into the decorator in order to make it more specific. The following example will load all loaded limeobjects into the connected property."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx",metaString:""}},"export class MyComponent implements LimeWebComponent {\n\n    @Limeobjects()\n    @State()\n    private limeobjects: object;\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"If we only want objects of a specific limetype, we can specify that limetype when decorating the property. The following will give us all currenyly loaded persons"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx",metaString:""}},"export class MyComponent implements LimeWebComponent {\n\n    @Limeobjects({\n        limetype: 'person'\n    })\n    @State()\n    private persons = [];\n}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"using-a-mapping-function"}},"Using a mapping function"),o.a.createElement(r.MDXTag,{name:"p",components:t},"While this is useful, it can be made even more useful if combined with a mapping function. Let's say we have a web component that is displayed on the company card, and we want a list of all persons connected to that company. First, we can define a filtering function that filters out our persons like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},"function currentPersons(persons = []) {\n    return persons.filter(person => person.company === this.context.id);\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"This function takes a list of persons, and returns a new list which only contains persons of the company in the current context."),o.a.createElement(r.MDXTag,{name:"p",components:t},"We can apply this filtering function by specifying it when decorating our property."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx",metaString:""}},"export class MyComponent implements LimeWebComponent {\n\n    @Limeobjects({\n        limetype: 'person',\n        map: [currentPersons]\n    })\n    @State()\n    private persons = [];\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"This will map the original result (a list of all persons) to a new result (a filtered list of persons) that is stored in the connected property."),o.a.createElement(r.MDXTag,{name:"p",components:t},"There are also two specific decorators that can be used to get the limetype and limeobject of the current context. Under the hood, these are just implemented with the map functionality used above."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx",metaString:""}},"import { CurrentLimeobject, CurrentLimetype } from 'lime-web-component-interfaces/state';\n\nexport class MyComponent implements LimeWebComponent {\n\n    @CurrentLimeobject()\n    @State()\n    private limeobject: object;\n\n    @CurrentLimetype()\n    @State()\n    private limetype: object;\n}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"available-state-decorators"}},"Available state decorators"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"ApplicationName - Name of the current application"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Configs - Configuration"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"CurrentUser - Currently logged in user"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Device - Rough indication of how big the viewport is (desktop, tablet, phone)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Filters - Filters usable with query objects API"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Limeobjects - Loaded limeobjects"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"CurrentLimeobject - The limeobject of the current context"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Limetypes - List of limetypes"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"CurrentLimetype - The limetype of the current context"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Session - Information regarding the session")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"reloading-data-in-the-webclient"}},"Reloading data in the webclient"),o.a.createElement(r.MDXTag,{name:"p",components:t},"While information is always kept up to date in web components thanks to the state decorators, this is not true for every part of the webclient. In the best of worlds, things like the card and related lists should update automatically when data is saved. While the aim is for this to be true in the future, we are not there yet. We also understand that there is a need to reload data without refreshing the entire page."),o.a.createElement(r.MDXTag,{name:"p",components:t},"While working on getting all the parts of the webclient state aware, we have provided a temporary solution that can be used to manually reload data in the card, activity feed and related lists. The method is deprecated and code should be made backwards compatible by making sure it exists before calling it. When the webclient has been updated to read all its data from the state, this method will not be needed any longer and will be removed."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The example below illustrates how this can be used. Please note that if there are any unsaved changes on the card, these will be lost when invoking this method."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-tsx",metaString:""}},"export class MyComponent implements LimeWebComponent {\n\n    @Prop()\n    public context: LimeWebComponentContext;\n\n    @Prop()\n    public platform: LimeWebComponentPlatform;\n\n    private async saveData(data: any) {\n        const http: HttpService = this.platform.http;\n        const url = `my_addon/my_endpoint/?id=${this.context.id}`;\n        const objectService: LimeobjectsStateService = this.platform.state.limeobjects;\n\n        // Call endpoint that will save some data on the object\n        await http.put(url, data);\n\n        // Manually refresh the object in the webclient, if the method is available\n        if (objectService.reload) {\n            objectService.reload(this.context.limetype, this.context.id);\n        }\n    }\n}\n")))}}}]);