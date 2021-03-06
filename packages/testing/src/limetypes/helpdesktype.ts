import { getBackreference, getLimetype, getProperty } from '.';

export const helpdesktype = {
    name: 'helpdesktype',
    localname: {
        singular: 'Helpdesk type',
        plural: 'Helpdesk type',
    },
    sort_order: 15,
    label: null,
    getProperty: (property: string) => getProperty('helpdesktype', property),
    properties: {
        name: {
            name: 'name',
            required: true,
            label: 'none',
            fieldorder: 1,
            defaultvalue: '',
            localname: 'Name',
            type: 'string',
            has_sql: false,
            length: 32,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        inactive: {
            name: 'inactive',
            required: false,
            label: 'none',
            fieldorder: 2,
            defaultvalue: false,
            localname: 'Inactive',
            type: 'yesno',
            has_sql: false,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        helpdesk: {
            name: 'helpdesk',
            required: false,
            label: 'none',
            fieldorder: 3,
            defaultvalue: '',
            localname: 'Helpdesk',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('helpdesk', 'helpdesktype'),
                getLimetype: () => getLimetype('helpdesk'),
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
        icon: 'decision',
        color: 'lime-light-grey',
        create: false,
        descriptive: ['_id'],
    },
};
