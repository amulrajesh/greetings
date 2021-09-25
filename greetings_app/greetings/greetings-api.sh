#!/bin/bash

APP_VERSION=$1

#docker build -t amulrajesh/greetings-api:${APP_VERSION} .

#docker push amulrajesh/greetings-api:${APP_VERSION}

kubectl apply -f deployment/service.yaml --validate=false

sed "s/APP_VERSION/${APP_VERSION}/g" \
    deployment/deployment.yaml \
    > deployment/deployment_current.yaml

kubectl apply -f deployment/deployment_current.yaml --validate=false