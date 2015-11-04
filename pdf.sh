CURR=$(pwd)

cd /home/hadim/local/decktape
./phantomjs/bin/phantomjs decktape.js --width 1280 --height 930 \
                                      --pause 1000 \
                                      http://localhost:8000/ \
                                      $CURR/talk.pdf
