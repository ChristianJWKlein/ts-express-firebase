# Typscript Project. Cars API with firestore db

mkdir ts-express

git init

mkdir src test

touch .gitignore src/index.ts

yarn add -D typescript

npx tsc --init

### Enter the folder in vs code

Change the tsconfig file. Uncomment out "OutDir: "/.dist", add in the dist

## install dist

npx tsc -b

### Edit the package.json file

"scripts": {
"start": "node ./dist/src/index.js",
"build": "tsc -b"
//"dev": "npm build && npm start"

## To run

yarn build

yarn start

## For Express

yarn add -D @types/express

yarn install express

## For Firebase.. Added in firebase project

firebase init firstore

In this project, we set up as a new prject --> specify the project name then follow questions to the link to finish set up on firebase.

yarn add firebase-admin
