[![Amplience Dynamic Content](media/header.png)](https://amplience.com/dynamic-content)

# dc-algolia-blog-demo

![License - Apache 2](https://img.shields.io/badge/license-Apache%202-blue.svg)
![](https://img.shields.io/badge/node-v8%2B-blue.svg)
![https://travis-ci.org/amplience/dc-algolia-blog-demo](https://travis-ci.org/amplience/dc-algolia-blog-demo.svg?branch=master)

This is an example blog that demonstrates how you can integrate Algolia Search indexes populated from published content in Dynamic Content.

## Prerequisites

A requirement for running this demo application is that a blogpost content item must have been published from Dynamic Content and indexed within Algolia. The rendering templates must also have been added to your Content Hub. Following the steps below will get you to this starting point:

- Register the blogpost content type in Dynamic Content: [Blog Post Content Type](https://github.com/amplience/dc-accelerators-content-rendering-service/blob/master/dist/contentTypes/blogpost.json) | [Docs](https://github.com/amplience/dc-accelerators-content-rendering-service/blob/master/docs/CONFIGURE-DYNAMIC-CONTENT.md#content-types).
- Create an integration between Dynamic Content and Algolia: [dc-integrations-algolia](https://github.com/amplience/dc-integrations-algolia).
- In Dynamic Content, create a content item using the previously registered blogpost content type. Once created, publish the content item. This will then add it to your Algolia index.
- Add the rendering templates to your Content Hub: [HTML Templates](https://github.com/amplience/dc-accelerators-content-rendering-service/tree/master/dist/templates) | [Docs](https://github.com/amplience/dc-accelerators-content-rendering-service/blob/master/docs/CONFIGURE-DYNAMIC-CONTENT.md#content-rendering-templates)

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

Configuration values required to run the application should be saved in a `.env` file within the root of the project. Example is shown below:

```
# Taken from the 'Api Keys' page on the Algolia
ALGOLIA_APPLICATION_ID=<my-algolia-app-id>

# Taken from the 'API Keys' page on the Algolia site. This needs to be the Search-Only API Key, not the Write or Admin key
ALGOLIA_SEARCH_API_KEY=<my-algolia-api-key>

# Taken from the 'Indices' page on the Algolia site
ALGOLIA_INDEX_NAME=<my-algolia-blog-index>

# The name of your rendering template uploaded to DAM (without the file extension)
DC_BLOG_POST_RENDERING_TEMPLATE=<acc-template-blogPost>

# Taken from your hub's publishing settings
DC_RENDERING_SERVICE_ACCOUNT_ID=<my-rendering-svc-id>

```

### 1.1 Using a different Dynamic Content environment

You can override the Dynamic Content API and Amplience Auth URLs by defining these optional environment variables:

```
# Alternative rendering service base url
DC_RENDERING_SERVICE_BASE_URL=<alternative-rendering-service-base-url>

# Dynamic Content Virtual Staging Environment domain
DC_RENDERING_SERVICE_STAGING_DOMAIN=<rendering-service-domain>

# Number of search results to display on the landing page: default = 9
NUMBER_OF_SEARCH_RESULTS=<no-of-results>
```

These optional variables should be removed completely if they are not required.

### 2. Start the application

To run this application locally, run the following (default port is 3000)

```
npm run dev
```

To run the application on a different port

```
npm run dev -- --port 8080
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
