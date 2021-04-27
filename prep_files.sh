rm -rf contract
mv web-app/* .
rm -rf server/static/ 
mkdir -p server/static/ 
cp client/dist/* server/static/
rm -rf web-app client
mv server/* .
rm .gitignore
git prune; git gc