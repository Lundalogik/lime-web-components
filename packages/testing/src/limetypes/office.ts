import { getBackreference, getLimetype, getProperty } from '.';

export const office = {
    name: 'office',
    localname: {
        singular: 'Office',
        plural: 'Offices',
    },
    sort_order: 10,
    label: null,
    getProperty: (property: string) => getProperty('office', property),
    properties: {
        name: {
            name: 'name',
            required: true,
            label: 'name',
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
        phone: {
            name: 'phone',
            required: false,
            label: 'businesstelephonenumber',
            fieldorder: 2,
            defaultvalue: '',
            localname: 'Phone',
            type: 'phone',
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
        fax: {
            name: 'fax',
            required: false,
            label: 'businessfaxnumber',
            fieldorder: 3,
            defaultvalue: '',
            localname: 'Fax',
            type: 'phone',
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
        www: {
            name: 'www',
            required: false,
            label: 'businesshomepage',
            fieldorder: 4,
            defaultvalue: '',
            localname: 'Homepage',
            type: 'link',
            has_sql: false,
            length: 32,
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        registrationno: {
            name: 'registrationno',
            required: false,
            label: 'companynumber',
            fieldorder: 5,
            defaultvalue: '',
            localname: 'Registration number',
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
        vatno: {
            name: 'vatno',
            required: false,
            label: 'none',
            fieldorder: 6,
            defaultvalue: '',
            localname: 'VAT registration number',
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
        pg: {
            name: 'pg',
            required: false,
            label: 'none',
            fieldorder: 7,
            defaultvalue: '',
            localname: 'Post giro',
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
        bg: {
            name: 'bg',
            required: false,
            label: 'none',
            fieldorder: 8,
            defaultvalue: '',
            localname: 'Bank giro',
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
        misc: {
            name: 'misc',
            required: false,
            label: 'none',
            fieldorder: 15,
            defaultvalue: '',
            localname: 'Other information',
            type: 'string',
            has_sql: false,
            length: 256,
            options: [],
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
            label: 'none',
            fieldorder: 16,
            defaultvalue: '',
            localname: 'Coworkers',
            type: 'hasmany',
            has_sql: false,
            relation: {
                getBackreference: () => getBackreference('coworker', 'office'),
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
        address: {
            name: 'address',
            required: false,
            label: 'streetaddress',
            fieldorder: 9,
            defaultvalue: '',
            localname: 'Address',
            type: 'string',
            has_sql: false,
            length: 256,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        zipcode: {
            name: 'zipcode',
            required: false,
            label: 'zipcode',
            fieldorder: 11,
            defaultvalue: '',
            localname: 'Zip code',
            type: 'string',
            has_sql: false,
            length: 10,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        city: {
            name: 'city',
            required: false,
            label: 'city',
            fieldorder: 12,
            defaultvalue: '',
            localname: 'City',
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
        visitingaddress1: {
            name: 'visitingaddress1',
            required: false,
            label: 'none',
            fieldorder: 10,
            defaultvalue: '',
            localname: 'Visiting address ',
            type: 'string',
            has_sql: false,
            length: 256,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        visitingzipcode: {
            name: 'visitingzipcode',
            required: false,
            label: 'none',
            fieldorder: 13,
            defaultvalue: '',
            localname: 'Visiting zip code',
            type: 'string',
            has_sql: false,
            length: 10,
            options: [],
            acl: {
                read: true,
                update: true,
                create: true,
                delete: true,
            },
            ui: {},
        },
        visitingcity: {
            name: 'visitingcity',
            required: false,
            label: 'none',
            fieldorder: 14,
            defaultvalue: '',
            localname: 'Visiting city',
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
        descriptive: ['name'],
    },
};
