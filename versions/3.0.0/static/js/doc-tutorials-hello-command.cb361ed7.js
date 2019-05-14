(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./doc/tutorials/hello-command.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),m=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;r(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"hello-command"}},"Hello, Command!"),o.a.createElement(m.MDXTag,{name:"p",components:n},"This guide will show how to generate a new command, connect it to a handler, and trigger the command from a menu in the\nwebclient."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"generate-a-command"}},"Generate a command"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Start by generating a new command with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lime-project")," inside your plugin"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"lime-project generate command hello\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"This will generate a command class and its corresponding handler."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},'// src/commands/hello/hello.command.ts\nimport { Command } from "lime-web-component-interfaces";\n\n@Command({\n    id: "my-plugin.hello"\n})\nexport class HelloCommand {}\n')),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},'// src/commands/hello/hello.handler.ts\nimport { CommandHandler } from "lime-web-component-interfaces";\n\nexport class HelloHandler implements CommandHandler {\n    public handle(command: HelloCommand) {\n\n    }\n}\n')),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"implement-the-handler"}},"Implement the handler"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Our command is only going to show a notification when the command is handled, but a more common use case when it is\ntriggered from a menu is probably to open a dialog."),o.a.createElement(m.MDXTag,{name:"p",components:n},"To be able to show a notification when executing the command, we need to inject the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"notifications")," service in the\nconstructor of the handler, and then use the service in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"handle")," method when the command is executed."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"import { CommandHandler, NotificationService } from \"lime-web-component-interfaces\";\n\nexport class HelloHandler implements CommandHandler {\n    constructor(private notifications: NotificationService) {}\n\n    public handle(command: HelloCommand) {\n        this.notifications.notify('Running HelloCommand!');\n        console.log(command);\n    }\n}\n")),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"register-the-command"}},"Register the command"),o.a.createElement(m.MDXTag,{name:"p",components:n},"In order to run this command, we need to register it with the handler when the application starts. A good place to do\nthis is in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Loader")," component that is generated together with the first web component. In the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"componentWillLoad"),"\nlifecycle hook, we can add the code that registers our command and make it useable in the application."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"// src/components/lwc-my-plugin-loader/lwc-my-plugin-loader.tsx\nexport class Loader implements LimePluginLoader {\n    public componentWillLoad() {\n        const helloHandler = new HelloHandler(this.platform.notifications);\n        this.platform.commandBus.register(HelloCommand, helloHandler);\n    }\n}\n")),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"trigger-the-command"}},"Trigger the command"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To trigger the command by yourself, you can simply send it to the commandbus from a component, e.g."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript",metaString:""}},"function onButtonClick() {\n    const command = new HelloCommand();\n    this.platform.commandbus.handle(command);\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"However, in order to add it to an existing menu in the webclient, we need to configure the menu to list our command."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},"{\n    actions: [{\n        id: 'my-plugin.hello'\n    }]\n}\n")))}}}]);