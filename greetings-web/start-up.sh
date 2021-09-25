#!/bin/bash

echo "Starting application..."
echo "API_URL = ${API_URL}"
envsubst < "/usr/share/nginx/html/assets/json/runtime.json" > "/usr/share/nginx/html/assets/json/runtime.json"
nginx -g 'daemon off;'