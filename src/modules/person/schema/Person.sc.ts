export default {
    $schema: '/demo/person/schema/Person',
    title: 'Person',
    description: 'Person',
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        age: {
            type: 'integer',
        },
        sex: {
            type: 'string',
        },
        address: {
            type: 'string',
        },
        phone: {
            type: 'string',
        },
    },
    required: ['name', 'age', 'sex', 'address', 'phone'],

};
