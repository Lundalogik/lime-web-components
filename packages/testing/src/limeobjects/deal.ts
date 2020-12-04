import { getLimetype } from '.';

export const deal = [
    {
        dealstatus: 'tender',
        value: 20000,
        quotesent: '2016-06-07T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Basemetrics Oy - tekninen konsultointi',
        probability: 0.64,
        weightedvalue: 12800,
        id: 1023,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Basemetrics Oy - tekninen konsultointi',
        person: 1019,
        coworker: null,
        company: 1009,
        todo2: null,
    },
    {
        dealstatus: 'agreement',
        value: 50000,
        quotesent: '2016-04-29T00:00:00+02:00',
        expecteddate: '2016-08-01T00:00:00+02:00',
        closeddate: '2016-08-30T00:00:00+02:00',
        wonlostreason:
            'Meidän järjestelmä vastaa tarpeisiin ja mahdollistaa integraatiot 2016-06-04',
        name: 'Basemetrics Oy - järjestelmän käyttöönotto',
        probability: 1,
        weightedvalue: 50000,
        id: 1022,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Basemetrics Oy - järjestelmän käyttöönotto',
        person: 1019,
        coworker: null,
        company: 1009,
        todo2: null,
    },
    {
        dealstatus: 'rejection',
        value: 0,
        quotesent: null,
        expecteddate: null,
        closeddate: '2017-03-07T00:00:00+01:00',
        wonlostreason: 'Test',
        name: 'Byggeløsning til Dansk Byg',
        probability: 0,
        weightedvalue: 0,
        id: 1021,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Byggeløsning til Dansk Byg',
        person: 1027,
        coworker: null,
        company: 1012,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 1000000,
        quotesent: null,
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Lime CRM til medlemmer - 5 brugere',
        probability: 0,
        weightedvalue: 0,
        id: 1020,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Lime CRM til medlemmer - 5 brugere',
        person: 1063,
        coworker: null,
        company: 1019,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-05-03T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '2016-05-17',
        name: 'Kosulentløsning Lime CRM',
        probability: 0,
        weightedvalue: 0,
        id: 1019,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Kosulentløsning Lime CRM',
        person: 1038,
        coworker: null,
        company: 1017,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-05-17T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Lime CRM Maskin 5 brugere',
        probability: 0,
        weightedvalue: 0,
        id: 1018,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Lime CRM Maskin 5 brugere',
        person: 1044,
        coworker: null,
        company: 1024,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-05-17T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Ekstra brugeruddannelse 2 dage',
        probability: 0,
        weightedvalue: 0,
        id: 1017,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Ekstra brugeruddannelse 2 dage',
        person: 1054,
        coworker: null,
        company: 1022,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-05-11T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '2016-05-17',
        name: 'Lime CRM 50 brugere plus integrationer',
        probability: 0,
        weightedvalue: 0,
        id: 1016,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Lime CRM 50 brugere plus integrationer',
        person: 1059,
        coworker: null,
        company: 1022,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-02-09T00:00:00+01:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '2016-02-11',
        name: 'Lime CRM Ejendom 25 brugere',
        probability: 0,
        weightedvalue: 0,
        id: 1015,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Lime CRM Ejendom 25 brugere',
        person: 1050,
        coworker: null,
        company: 1008,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: null,
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Lime CRM 10 brugere inkl. integration',
        probability: 0.1,
        weightedvalue: 0,
        id: 1014,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Lime CRM 10 brugere inkl. integration',
        person: 1036,
        coworker: null,
        company: 1014,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-05-17T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Byggeløsning Lime CRM',
        probability: 0,
        weightedvalue: 0,
        id: 1013,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Byggeløsning Lime CRM',
        person: 1030,
        coworker: null,
        company: 1023,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: null,
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Lime CRM Ejendom til 20 brugere',
        probability: 0,
        weightedvalue: 0,
        id: 1012,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Lime CRM Ejendom til 20 brugere',
        person: 1047,
        coworker: null,
        company: 1020,
        todo2: null,
    },
    {
        dealstatus: 'requirement',
        value: 1000,
        quotesent: null,
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Processkonsult till chokladfabriken',
        probability: 0.3,
        weightedvalue: 300,
        id: 1011,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Processkonsult till chokladfabriken',
        person: 1028,
        coworker: null,
        company: 1027,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: null,
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Nytt CRM-system med reklammatinoer för HBA',
        probability: 0,
        weightedvalue: 0,
        id: 1010,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Nytt CRM-system med reklammatinoer för HBA',
        person: 1016,
        coworker: null,
        company: 1015,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: null,
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: '20 cykelkomponenter',
        probability: 0,
        weightedvalue: 0,
        id: 1009,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: '20 cykelkomponenter',
        person: 1011,
        coworker: null,
        company: 1011,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: null,
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Lime CRM - 6 användare',
        probability: 0,
        weightedvalue: 0,
        id: 1008,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Lime CRM - 6 användare',
        person: 1007,
        coworker: null,
        company: 1016,
        todo2: null,
    },
    {
        dealstatus: 'agreement',
        value: 1000,
        quotesent: null,
        expecteddate: null,
        closeddate: '2017-05-26T00:00:00+02:00',
        wonlostreason: 'test',
        name: 'Tobleroneaffären',
        probability: 1,
        weightedvalue: 1000,
        id: 1007,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Tobleroneaffären',
        person: 1003,
        coworker: null,
        company: 1025,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-04-17T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'LEGO Big Deal!',
        probability: 0,
        weightedvalue: 0,
        id: 1006,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'LEGO Big Deal!',
        person: 1021,
        coworker: null,
        company: 1018,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-03-12T00:00:00+01:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Superaffären',
        probability: 0,
        weightedvalue: 0,
        id: 1005,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Superaffären',
        person: 1031,
        coworker: null,
        company: 1013,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2016-03-11T00:00:00+01:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '',
        name: 'Supertech Deal',
        probability: 0,
        weightedvalue: 0,
        id: 1004,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Supertech Deal',
        person: 1005,
        coworker: null,
        company: 1026,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2015-09-14T00:00:00+02:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '2015-09-19',
        name: 'CRM för byggbolag',
        probability: 0,
        weightedvalue: 0,
        id: 1003,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'CRM för byggbolag',
        person: 1004,
        coworker: null,
        company: 1010,
        todo2: null,
    },
    {
        dealstatus: 'contact',
        value: 0,
        quotesent: '2014-12-22T00:00:00+01:00',
        expecteddate: null,
        closeddate: null,
        wonlostreason: '2015-02-28',
        name: 'CRM-system, Lime CRM',
        probability: 0,
        weightedvalue: 0,
        id: 1002,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'CRM-system, Lime CRM',
        person: 1009,
        coworker: null,
        company: 1007,
        todo2: null,
    },
    {
        dealstatus: 'tender',
        value: 500000,
        quotesent: '2016-08-25T00:00:00+02:00',
        expecteddate: '2016-08-01T00:00:00+02:00',
        closeddate: null,
        wonlostreason: '',
        name: 'Big business',
        probability: 0.7,
        weightedvalue: 350000,
        id: 1001,
        createdtime: '2018-06-21T14:38:38.883000+02:00',
        timestamp: '2018-06-21T14:38:38.883000+02:00',
        descriptive: 'Big business',
        person: null,
        coworker: 1003,
        company: 1001,
        todo2: null,
    },
].map((data) => {
    return {
        ...data,
        getLimetype: () => getLimetype('deal'),
    };
});
