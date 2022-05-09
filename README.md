# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Applications Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-applications](https://github.com/pip-services-content2/service-applications-node) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client (see https://aws.amazon.com/lambda)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-applications-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('client-applications-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.ApplicationsHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
}
catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Create a new application
var application = {
    id: 'my_app',
    name: 'My Application',
    product: 'My Samples'
};

let application = await client.createApplication(
    null,
    application
);
```

```javascript
// Get the list of applications for 'My Samples' product
let page = await client.getApplications(
    null,
    {
        product: 'My Samples'
    },
    {
        total: true,
        skip: 0,
        take: 10
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

