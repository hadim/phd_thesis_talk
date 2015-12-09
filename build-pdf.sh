set -e

# cp index.html index.html.back
# sed -i 's/\.svg/\.png/g' index.html
# sed -i 's/<svg/<img/g' index.html
# sed -i 's/data-src=/src=/g' index.html
# sed -i 's/<\/svg>/<\/img>/g' index.html

# docker run -ti --rm --net=host -v `pwd`:/pwd astefanutti/decktape --size 1280x930 \
#                                                                   --pause 1000 \
#                                                                   http://localhost:8000 \
#                                                                   /pwd/slides.pdf

# rm index.html
# mv index.html.back index.html

mkdir -p ./temp_pdf/
SLIMERJS="/home/hadim/local/slimerjs/src/slimerjs"
$SLIMERJS /home/hadim/.phd/dev/contrib/js/decktape/decktape.js http://localhost:8000 \
                                                               --pause 2000 \
                                                               --screenshots \
                                                               --screenshots-directory ./temp_pdf/ \
                                                               --size 1280x930

convert ./temp_pdf/*.png slides.pdf
#rm -fr ./temp_pdf/
