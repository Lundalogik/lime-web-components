/**
 * Docz config
 */
export default {
    title: 'Lime Web Components',
    description: 'Documentation for Lime Web Components',
    typescript: true,
    base: '/lime-web-component-interfaces/',
    hashRouter: true,
    themeConfig: {
        colors: {
            primary: '#00b3a7',
        },
    },
    menu: [
        'Index',
        'Installation',
        {
            name: 'Concepts',
            menu: [
                'Lime Web Component',
                'Slots',
                'Context',
                'Platform services',
                'State',
                'Actions',
                'Lime Elements'
            ]
        },
        {
            name: 'Tutorials',
            menu: [
                'Hello, world!',
                'Hello, CRM!'
            ]
        },
        {
            name: 'API reference',
            menu: [
                'LimeWebComponent',
                'LimeWebComponentPlatform',
                'LimeWebComponentContext',
                'LimeWebComponentAction'
            ]
        }
    ]
};
