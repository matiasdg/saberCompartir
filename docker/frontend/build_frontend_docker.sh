#!/bin/sh
cd ../../frontend
echo "Construyendo el proyecto SaberCompartir frontend"
grunt clean
grunt build
if [ $? -ne 0 ];
    then exit 1
fi
sudo cp dist ../docker/frontend/dist
cd ../docker/frontend
echo "Construyendo la imagen matiasdg/sabercompartir_frontend"
docker build --no-cache --rm=true -t matiasdg/sabercompartir_frontend .
echo "Publicando la imagen matiasdg/sabercompartir_frontend"
docker push matiasdg/sabercompartir_frontend