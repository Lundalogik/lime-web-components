git checkout master
git remote rm origin
git remote add origin "https://${GH_TOKEN}@github.com/lundalogik/lime-web-components.git"
git push --set-upstream origin master

npm run build

cat << EOL >> ".npmrc"
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
EOL

npx lerna version --loglevel=DEBUG --conventional-prerelease --create-release=github --yes
npx lerna --loglevel=INFO publish from-git --yes

rm .npmrc
