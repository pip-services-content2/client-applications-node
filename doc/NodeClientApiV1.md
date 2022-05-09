# Client API (version 1) <br/> Applications Microservices Client SDK for Node.js / ES2017

Node.js client API for Applications microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [ApplicationV1 class](#class1)
* [IApplicationClientV1 interface](#interface)
    - [getApplications()](#operation1)
    - [getRandomApplication()](#operation2)
    - [getApplicationById()](#operation3)
    - [createApplication()](#operation4)
    - [updateApplication()](#operation5)
    - [deleteApplicationById()](#operation6)
* [ApplicationsDirectClientV1 class](#client_direct)
* [ApplicationsHttpClientV1 class](#client_http)
* [ApplicationsSenecaClientV1 class](#client_seneca)
* [ApplicationsLambdaClientV1 class](#client_lambda)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "client-applications-node": "^1.1.0",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
let sdk = new require('client-applications-node');

// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
let client = sdk.ApplicationsHttpClientV1(config);

// Open client connection to the microservice
await client.open(null, null);
    
console.log('Opened connection');
    
// Create a new application
let application = {
    text: { en: 'Get in hurry slowly' },
    author: { en: 'Russian proverb' },
    tags: ['time management'],
    status: 'completed'
};

let application = await client.createApplication(null, application);
            
console.log('Create application is');
console.log(application);
            
// Get the list of applications on 'time management' topic
let page = await client.getApplications(
    {
        tags: 'time management',
        status: 'completed'
    },
    {
        paging: true,
        skip: 0,
        take: 10
    }
);

console.log('Applications on time management are');
console.log(page.data);
                    
// Close connection
await client.close(correlationId); 
```

### <a name="class1"></a> ApplicationV1 class

Represents an inspirational application

**Properties:**
- id: string - unique application id
- text: MultiString - application text in different languages
- author: MultiString - name of the application author in different languages
- status: string - editing status of the application: 'new', 'writing', 'translating', 'completed' (default: 'new')
- tags: string[] - (optional) search tags that represent topics associated with the application
- all_tags: string[] - (read only) explicit and hash tags in normalized format for searching  

## <a name="interface"></a> IApplicationsClientV1 interface

If you are using Typescript, you can use IApplicationsClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IApplicationsClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IApplicationsClientV1 {
    getApplications(correlationId, filter, paging);
    getRandomApplication(correlationId, filter);
    getApplicationById(correlationId, applicationId);
    createApplication(correlationId, application);
    updateApplication(correlationId, application);
    deleteApplicationById(correlationId, applicationId);
}
```

### <a name="operation1"></a> getApplications(correlationId, filter, paging)

Retrieves a collection of applications according to specified criteria

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - tags: string[] - (optional) list tags with topic names
  - status: string - (optional) application editing status
  - author: string - (optional) author name in any language 
  - except_ids: string[] - (optional) application ids to exclude 
- paging: any - paging parameters
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
  - paging: bool - (optional) true to enable paging and return total count
- returns: DataPage<ApplicationV1> - retrieved applications in page format

### <a name="operation2"></a> getRandomApplication(correlationId, filter)

Retrieves a random application from filtered resultset

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - tags: string[] - (optional) list tags with topic names
  - status: string - (optional) application editing status
  - author: string - (optional) author name in any language
  - except_ids: string[] - (optional) application ids to exclude 
- returns: ApplicationV1 - random application, null if object wasn't found 

### <a name="operation3"></a> getApplicationById(correlationId, applicationId)

Retrieves a single application specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- applicationId: string - unique Application id
- returns: ApplicationV1 - retrieved application, null if object wasn't found 

### <a name="operation4"></a> createApplication(correlationId, application)

Creates a new application

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- application: ApplicationV1 - Application object to be created. If object id is not defined it is assigned automatically.
- returns: ApplicationV1 - created application object

### <a name="operation5"></a> updateApplication(correlationId, application)

Updates application specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- application: ApplicationV1 - application object with new values. Partial updates are supported
- returns: Application - updated application object 

### <a name="operation6"></a> deleteApplicationById(correlationId, applicationId)

Deletes application specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- applicationId: string - unique application id
 
## <a name="client_direct"></a> ApplicationsDirectClientV1 class

ApplicationsDirectClientV1 is a direct client to call controller inside microservice container

```javascript
class ApplicationsDirectClientV1 extends DirectClient implements IApplicationsClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getApplications(correlationId, filter, paging);
    getRandomApplication(correlationId, filter);
    getApplicationById(correlationId, applicationId);
    createApplication(correlationId, application);
    updateApplication(correlationId, applicationId, application);
    deleteApplicationById(correlationId, applicationId);
}
```

**Constructor config properties:** 
- ...

## <a name="client_http"></a> ApplicationsHttpClientV1 class

ApplicationsHttpClientV1 is a client that implements HTTP protocol

```javascript
class ApplicationsHttpClientV1 extends CommandableHttpClient implements IApplicationsClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getApplications(correlationId, filter, paging);
    getRandomApplication(correlationId, filter);
    getApplicationById(correlationId, applicationId);
    createApplication(correlationId, application);
    updateApplication(correlationId, application);
    deleteApplicationById(correlationId, applicationId);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> ApplicationsSenecaClientV1 class

ApplicationsSenecaClientV1 is a client that implements Seneca protocol

```javascript
class ApplicationsSenecaClientV1 extends SenecaClient implements IApplicationsClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getApplications(correlationId, filter, paging);
    getRandomApplication(correlationId, filter);
    getApplicationById(correlationId, applicationId);
    createApplication(correlationId, application);
    updateApplication(correlationId, application);
    deleteApplicationById(correlationId, applicationId);
}
```

**Constructor config properties:** 
- connection: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - protocol: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_lambda"></a> ApplicationsLambdaClientV1 class

ApplicationsLambdaClientV1 is a client that calls AWS Lamba functions

```javascript
class ApplicationsLambdaClientV1 extends LambdaClient implements IApplicationsClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getApplications(correlationId, filter, paging);
    getRandomApplication(correlationId, filter);
    getApplicationById(correlationId, applicationId);
    createApplication(correlationId, application);
    updateApplication(correlationId, application);
    deleteApplicationById(correlationId, applicationId);
}
```

**Constructor config properties:** 
- connection: object - AWS Lambda connection properties
  - protocol: "aws"
  - region: string - AWS availability region like "us-east-1"
  - function: string - unique function name or arn like "arn:aws:lambda:us-east-1:268549927901:function:pip-services-template-node"
- credential: object - AWS Lambda access keys and additional parameters
  - access\_key\_id: string - AWS access key id
  - secret\_access\_key: string - AWS secret access key
- options: object
  - timeout: number - communication timeout in milliseconds (default: 30,000)
  