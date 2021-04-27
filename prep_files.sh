rm -rf contract
mv web-app/* .
mv client/* .
rm -rf web-app client
rm .gitignore
git prune; git gc