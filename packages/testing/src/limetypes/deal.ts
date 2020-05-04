import { getBackreference, getLimetype } from '.';

export const deal = {
    name: 'deal',
    localname: {
        singular: 'Deal',
        plural: 'Deals',
    },
    sort_order: 3,
    label: 'project',
    properties: {
        dealstatus: {
            name: 'dealstatus',
            required: false,
            label: 'category',
            fieldorder: 5,
            defaultvalue: {
                key: 'contact',
                text: '1. Customer contact',
                inactive: false,
            },
            localname: 'Status',
            type: 'option',
            has_sql: false,
            options: [
                {
                    key: 'contact',
                    text: '1. Customer contact',
                    inactive: false,
                },
                {
                    key: 'requirement',
                    text: '2. Demand analysis',
                    inactive: false,
                },
                {
                    key: 'tender',
                    text: '3. Quote',
                    inactive: false,
                },
                {
                    key: 'agreement',
                    text: '4. Agreement',
                    inactive: false,
                },
                {
                    key: 'rejection',
                    text: 'Rejection',
                    inactive: false,
                },
                {
                    key: 'onhold',
                    text: 'On hold',
                    inactive: false,
                },
            ],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        value: {
            name: 'value',
            required: true,
            label: 'none',
            fieldorder: 6,
            defaultvalue: 0,
            localname: 'Value',
            type: 'decimal',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        quotesent: {
            name: 'quotesent',
            required: false,
            label: 'none',
            fieldorder: 10,
            defaultvalue: null,
            localname: 'Quote sent',
            type: 'date',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        expecteddate: {
            name: 'expecteddate',
            required: false,
            label: 'none',
            fieldorder: 11,
            defaultvalue: null,
            localname: 'Expected order',
            type: 'month',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        closeddate: {
            name: 'closeddate',
            required: false,
            label: 'none',
            fieldorder: 12,
            defaultvalue: null,
            localname: 'Order/Lost date',
            type: 'date',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        person: {
            name: 'person',
            required: false,
            label: 'none',
            fieldorder: 3,
            defaultvalue: null,
            localname: 'Responsible at customer',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('person', 'deal'),
                getLimetype: () => getLimetype('person'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        document: {
            name: 'document',
            required: false,
            label: 'none',
            fieldorder: 15,
            defaultvalue: '',
            localname: 'Documents',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('document', 'deal'),
                getLimetype: () => getLimetype('document'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        coworker: {
            name: 'coworker',
            required: false,
            label: 'responsiblecoworker',
            fieldorder: 4,
            defaultvalue: null,
            localname: 'Responsible salesperson',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('coworker', 'deal'),
                getLimetype: () => getLimetype('coworker'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        wonlostreason: {
            name: 'wonlostreason',
            required: false,
            label: 'none',
            fieldorder: 9,
            defaultvalue: '',
            localname: 'Won/Lost reason',
            type: 'text',
            has_sql: false,
            length: 512,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        company: {
            name: 'company',
            required: false,
            label: 'none',
            fieldorder: 2,
            defaultvalue: null,
            localname: 'Company',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('company', 'deal'),
                getLimetype: () => getLimetype('company'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        name: {
            name: 'name',
            required: true,
            label: 'name',
            fieldorder: 1,
            defaultvalue: '',
            localname: 'Deal name',
            type: 'string',
            has_sql: false,
            length: 64,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        history: {
            name: 'history',
            required: false,
            label: 'none',
            fieldorder: 14,
            defaultvalue: '',
            localname: 'History',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('history', 'deal'),
                getLimetype: () => getLimetype('history'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        todo: {
            name: 'todo',
            required: false,
            label: 'none',
            fieldorder: 16,
            defaultvalue: '',
            localname: 'To-dos',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('todo', 'deal'),
                getLimetype: () => getLimetype('todo'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        probability: {
            name: 'probability',
            required: true,
            label: 'none',
            fieldorder: 7,
            defaultvalue: 0,
            localname: 'Probability',
            type: 'percent',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        weightedvalue: {
            name: 'weightedvalue',
            required: true,
            label: 'none',
            fieldorder: 8,
            defaultvalue: 0,
            localname: 'Weighted value',
            type: 'decimal',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        todo2: {
            name: 'todo2',
            required: false,
            label: 'none',
            fieldorder: 13,
            defaultvalue: null,
            localname: 'Next to-do',
            type: 'belongsto',
            has_sql: true,
            relation: {
                getBackreference: () => getBackreference('todo', 'deal2'),
                getLimetype: () => getLimetype('todo'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        id: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'id',
            localname: 'Record ID (System)',
            name: 'id',
            required: false,
            type: 'system',
            ui: {},
        },
        createduser: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'createduser',
            localname: 'Created by (System)',
            name: 'createduser',
            required: false,
            type: 'system',
            ui: {},
        },
        createdtime: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'createdtime',
            localname: 'Created (System)',
            name: 'createdtime',
            required: false,
            type: 'system',
            ui: {},
        },
        timestamp: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'timestamp',
            localname: 'Last updated (System)',
            name: 'timestamp',
            required: false,
            type: 'system',
            ui: {},
        },
        updateduser: {
            acl: {},
            defaultvalue: null,
            fieldorder: 1,
            label: 'updateduser',
            localname: 'Last updated by (System)',
            name: 'updateduser',
            required: false,
            type: 'system',
            ui: {},
        },
    },
    acl: {
        read: true,
        update: true,
        create: true,
        delete: true,
    },
    ui: {
        icon: 'money',
        color: 'lime-green',
        create: true,
        descriptive: ['name'],
    },
};