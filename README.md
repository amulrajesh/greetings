# Spring Boot + Angular + Kubernetes + Helm

## Prerequisites
```curl
        Eclipse IDE
        Jdk 11
        Spring Boot - 2.5.5
        Maven - 3
        Visual Studio Code
        Node - 14.17.6
        Angular - 12.2.7
        Kubernetes - 1.22.1
        Docker 20.10.8 
        Kubectl (Client 18.09.2 && Server 18.09.2)
        Helm 3
        Minikube (Hyper V for Windows)
```

## Application Details
```curl
        Greetings API
            An API (/api/greetings) returns 'Hello <<ENV_VARIABLE_NAME_VALUE>>', If env variable name exists it will return Hello env name variable value else it will return 'Hello Guest' where Guest is the default value.
        
        Greetings Web
            -In envrionment.prod.ts - update the BASEURL value with API hostname
            -On page load, service calls API greetings methods and display the concated value of current date and API response
```

## Git Clone
```curl
    git clone https://github.com/amulrajesh/greetings.git
```

## Running Without Helm
```curl
        Greetings API
            1. cd greetings\greetings_app\greetings
            
            2. Open Gitbash
            
            3. Run ./greetings-api.sh <<DOCKER_IMG_VERSION> <<DOCKER_CMD_FLAG>> <<KUBECTL_CMD_FLAG>>
                Example: ./greetings-api.sh 0.0.1-SNAPHSOT true true
                If DOCKER_CMD_FLAG version is true
                    1. Build docker image
                    2. Push docker image 
                If KUBECTL_CMD_FLAG is true
                    1. Create Kubernetes service
                    2. Replace deployment.yaml image API_VERSION with DOCKER_IMG_VERSION
                    3. Create kubernetes deployment
            
            4. To verify execute "kubectl get all"
                $ kubectl get pod,svc,deploy
                NAME                                READY   STATUS    RESTARTS   AGE
                pod/greetings-api-788869b4c-27hjl   1/1     Running   0          26m
                pod/greetings-api-788869b4c-ghf7x   1/1     Running   0          26m

                NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
                service/greetings-api-service   NodePort    10.109.114.188   <none>        8080:30004/TCP   26m
                service/kubernetes              ClusterIP   10.96.0.1        <none>        443/TCP          64m

                NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
                deployment.apps/greetings-api   2/2     2            2           26m

```

```curl
        Greetings Web
            1. cd greetings\greetings_web
            
            2. Run cmd prompt as administrator
            
            3. Excecute command "minikube service greetings-api-service --url" and copy the API url
            
            4. Open environment.prod.ts file -> Replace BASE_URL with copied API url.
            
            5. Open Gitbash
            
            6. Run ./greetings-web.sh <<DOCKER_IMG_VERSION> <<DOCKER_CMD_FLAG>> <<KUBECTL_CMD_FLAG>>
                Example: ./greetings-web.sh 0.0.1 true true

                If DOCKER_CMD_FLAG version is true
                    1. Build docker image
                    2. Push docker image 
                    
                If KUBECTL_CMD_FLAG is true
                    1. Create Kubernetes service
                    2. Replace deployment.yaml image API_VERSION with DOCKER_IMG_VERSION
                    3. Create kubernetes deployment
            
            7. Excecute command "minikube service greetings-web-service --url" and copy the WEB url and hit in browser
```

## Running with Helm
```curl
        Greetings API

            1. cd greetings/helm/

            2. Execute command "helm install greetings-api greetings-api --values greetings-api/values.yaml"

            3. To verify deployment execute "helm list"
        
```

```curl
        Greetings WEB

            1. cd greetings/helm/

            2. Excecute command "minikube service greetings-api-service --url" and copy the API url
            
            3. Open environment.prod.ts file -> Replace BASE_URL with copied API url.

            4. Execute command to push images "./greetings-web.sh 0.0.1 false true"

            5. Execute command "helm install greetings-web greetings-web --values greetings-web/values.yaml"

            6. To verify deployment execute "helm list"
        
```