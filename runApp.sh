#!/bin/sh

cd backend/
sudo yarn start $1 &

cd ../$2
sudo yarn start