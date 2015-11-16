docker run --rm --net=host -v `pwd`:/pwd astefanutti/decktape --size 1280x930 \
                                                              --pause 1000 \
                                                              http://localhost:8000 \
                                                              /pwd/slides.pdf
