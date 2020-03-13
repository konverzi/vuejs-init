yarn build;

cp -r _headers ./dist;
cp -r .netlify ./dist;
cp -r netlify.toml ./dist;

cd dist;
netlify deploy --prod
cd ..;
