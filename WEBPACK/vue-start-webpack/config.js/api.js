const NODE_ENV = process.env.NODE_ENV;
const config = {
     production: {
        FOO_API: 'production.foo.api.com',
        BAR_API: 'production.bar.api.com',
        BAZ_API: 'production.baz.api.com',
     },
     development: {
        FOO_API: 'development.foo.api.com',
        BAR_API: 'development.bar.api.com',
        BAZ_API: 'development.baz.api.com',
     },
     test: {
        FOO_API: 'test.foo.api.com',
        BAR_API: 'test.bar.api.com',
        BAZ_API: 'test.baz.api.com',
     }
}
module.exports = config[NODE_ENV];
