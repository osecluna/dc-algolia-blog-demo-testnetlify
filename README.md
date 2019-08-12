[![Amplience Dynamic Content](media/header.png)](https://amplience.com/dynamic-content)

# dc-algolia-blog-demo

![License - Apache 2](https://img.shields.io/badge/license-Apache%202-blue.svg)
![](https://img.shields.io/badge/node-v8%2B-blue.svg)
![https://travis-ci.org/amplience/dc-algolia-blog-demo](https://travis-ci.org/amplience/dc-algolia-blog-demo.svg?branch=master)

This is an example blog that demonstrates how you can integrate Algolia Search indexes populated from published content in Dynamic Content.

A requirement for running this demo application is that some content must have been published from DC and indexed within Algolia - this must have been modelled using the [Blog Accelerator content type](https://github.com/amplience/dc-accelerators-content-types/blob/master/blogpost.json).

## Installation

Checkout this repo and install the dependencies via npm:

```
npm install
```

## Running tests

The below command will run unit tests for the project:

```
npm run test
```

## Running in Development mode

### 1. Configure your environment

Configuration values required to run the application should be saved in a .env file within the root of the project. Example is shown below:

```
ALGOLIA_APP_ID=my-algolia-app-id
ALGOLIA_API_KEY=my-algolia-api-key
ALGOLIA_INDEX_NAME=my-algolia-blog-index
BLOG_POST_RENDERING_TEMPLATE=acc-template-blogPost
RENDERING_SERVICE_ACCOUNT_ID=my-rendering-svc-id
```

The *ALGOLIA_API_KEY* in this instance is the search API key and not the one which has write functionality. 

### 2. Start the application

To run this application locally, run the following (default port is 3000)

```
npm run dev
```

## Built with

- [Nuxtjs](https://nuxtjs.org/)
- [Algolia vue-instantsearch](https://github.com/algolia/vue-instantsearch)
- [Amplience Dynamic Content Delivery API SDK](https://github.com/amplience/dc-delivery-sdk-js)

## Contributing

If you would like to contribute to this project, please follow our [contributing guide](./CONTRIBUTING.md).

## License

This software is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),

Copyright 2019 Amplience

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
