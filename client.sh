#!/bin/bash

if [ $(docker container ls -a -q --filter name=client_c) != '' ]; then
    docker container stop client_c 
    docker container rm client_c
fi

# remove the image if exists
if [ $(docker image ls -q --filter reference=client) != '' ]; then
    docker image rm client
fi

# build the image
docker build -t client .

# start the container
docker container run -itd -p 8888:80 --name client_c client