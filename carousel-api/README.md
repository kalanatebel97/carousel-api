## Carousel Application API (Image Slider)

- Serverless Rest API (GET) on AWS with Lambda and API Gateway using SAM (Serverless Application Model)


   #####  This project contains source code and supporting files for a serverless application that you can deploy with the SAM CLI. It includes the following files and folders.

- carousel - Code for the application's Lambda function.
- events - Invocation events that you can use to invoke the function.
- template.yaml - A template that defines the application's AWS resources.

The application uses several AWS resources, including Lambda functions and an API Gateway API. These resources are defined in the template.yaml file in this project. You can update the template to add AWS resources through the same deployment process that updates your application code.

## Live Endpoint URL
[https://kikzkol8q7.execute-api.ap-south-1.amazonaws.com/Prod/api/carousel?slides=5](https://kikzkol8q7.execute-api.ap-south-1.amazonaws.com/Prod/api/carousel?slides=5 "CarouselAPI")
-------------

##Prerequisites:
- NojeJS
- AWS CLI
- AWS SAM CLI
- Basic understanding of,  AWS Lambda Function, SAM Templates ,API Gateway

## What is this API
This is a Serverless Rest API endpoint using AWS Lambda and SAM template with the following details :

-  Method: GET
-  Query parameter : slides
- Endpoint: https://kikzkol8q7.execute-api.ap-south1.amazonaws.com/Prod/api/carousel?slides=5

This endpoint will retrive a set of array of objects which is having some data about the images that is stored in a collection inside a MongoDB database. 

 I used MongoDB Atlas as the hosting service for this database.

User  can pass a query parameter called `slides` to the endpoint and can retrieve of images stored in the db according to the value specified for the query parameter.

Example - If user puts `slides?=5` , API will return 5 image objects in an array.

#### Conditions
- User can retrieve maximum 10 images at once.

###Installation

- Clone the application to your local machine
- Move to the project directory and run `sam local start-api`

### Installed Dependencies

- MongoDB
-  Axios (By default it is creating when creting a SAM template)

## Deploy the sample application

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

To use the SAM CLI, you need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 16](https://nodejs.org/en/), including the NPM package management tool.
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

You can find your API Gateway Endpoint URL in the output values displayed after deployment.

## Use the SAM CLI to build and test locally

Build your application with the `sam build` command.

```bash
carousel-api$ sam build
```

The SAM CLI installs dependencies defined in `carousel/package.json`, creates a deployment package, and saves it in the `.aws-sam/build` folder.

Test a single function by invoking it directly with a test event. An event is a JSON document that represents the input that the function receives from the event source. Test events are included in the `events` folder in this project.

Run functions locally and invoke them with the `sam local invoke` command.

```bash
carousel-api$ sam local invoke CarouselFunction --event events/event.json
```

The SAM CLI can also emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
carousel-api$ sam local start-api
carousel-api$ curl http://localhost:3000/
```

The SAM CLI reads the application template to determine the API's routes and the functions that they invoke. The `Events` property on each function's definition includes the route and method for each path.

```yaml
      Events:
        Carousel:
          Type: Api
          Properties:
            Path: /api/carousel
            Method: get
```



![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)



