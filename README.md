# Woof

[![build status](https://github.com/coryrylan/angular-github-actions/workflows/Build/badge.svg)](https://github.com/coryrylan/angular-github-actions/actions)

## Step 1 (Downloading Source Code)

* clone the project

## Step 2 (Installing Dependacies)

* Install [Node.js](https://nodejs.org/en/download/)
* open a terminal within the downloaded project folder
* ```npm install --prefix ./frontend``` To install angular dependancies
* ```python3 -m pip install pipenv```
* ```pipenv install``` To install and manage python dependacies

## Step 3

* ### To launch frontend and backend seperately
  
* ```cd frontend; ng serve```
* Open a second terminal and go to the project directory
* ```pipenv run python app.py```
* Go to [localhost:4200](http://localhost:4200)

* ### To launch frontend and backend together like in production

* ```npm run build:prod --prefix ./frontend```
* ```npm run deploy:prod --prefix ./frontend```
* ```pipenv run python app.py```
* Go to [localhost:5000](http://localhost:5000)

## To visit the actual frontend go here [https://hot-luxurious-paste.glitch.me/static/](https://hot-luxurious-paste.glitch.me/static/)
