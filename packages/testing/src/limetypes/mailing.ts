import { getBackreference, getLimetype } from '.';

export const mailing = {
    name: 'mailing',
    localname: {
        singular: 'Mailing',
        plural: 'Mailings',
    },
    sort_order: 20,
    label: null,
    properties: {
        mailingid: {
            name: 'mailingid',
            required: false,
            label: 'none',
            fieldorder: 1,
            defaultvalue: '',
            localname: 'Newsletter ID',
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
        campaign: {
            name: 'campaign',
            required: false,
            label: 'none',
            fieldorder: 2,
            defaultvalue: null,
            localname: 'Campaign',
            type: 'belongsto',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('campaign', 'mailing'),
                getLimetype: () => getLimetype('campaign'),
            },
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        subject: {
            name: 'subject',
            required: false,
            label: 'none',
            fieldorder: 3,
            defaultvalue: '',
            localname: 'Subject',
            type: 'string',
            has_sql: false,
            length: 1024,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        sendoutlink: {
            name: 'sendoutlink',
            required: false,
            label: 'none',
            fieldorder: 4,
            defaultvalue: '',
            localname: 'Sendout link',
            type: 'link',
            has_sql: false,
            length: 1024,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        statisticlink: {
            name: 'statisticlink',
            required: false,
            label: 'none',
            fieldorder: 5,
            defaultvalue: '',
            localname: 'Statistics link',
            type: 'link',
            has_sql: false,
            length: 1024,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        senddate: {
            name: 'senddate',
            required: false,
            label: 'none',
            fieldorder: 6,
            defaultvalue: null,
            localname: 'Sent',
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
        recipient: {
            name: 'recipient',
            required: false,
            label: 'none',
            fieldorder: 7,
            defaultvalue: '',
            localname: 'Mailing recipients',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () =>
                    getBackreference('recipient', 'mailing'),
                getLimetype: () => getLimetype('recipient'),
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