set -e

cp index.html index.html.back
sed -i 's/\.svg/\.png/g' index.html
sed -i 's/<svg/<img/g' index.html
sed -i 's/data-src=/src=/g' index.html
sed -i 's/<\/svg>/<\/img>/g' index.html

docker run --rm --net=host -v `pwd`:/pwd astefanutti/decktape --size 1280x930 \
                                                              --pause 1000 \
                                                              http://localhost:8000 \
                                                              /pwd/slides.pdf

rm index.html
mv index.html.back index.html
