docker run --rm --net=host -v `pwd`:/pwd astefanutti/decktape --width 1280 \
                                                              --height 930 \
                                                              --pause 1000 \
                                                              http://localhost:8000 \
                                                              /pwd/slides.pdf
