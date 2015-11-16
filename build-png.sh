#!/usr/bin/env sh
for i in $(find data/ -name \*.svg); do
    fname=`echo $i | sed -e 's/svg$/png/'`
    if [ ! -f $fname ]
    then
        echo "Converting $fname"
        inkscape $i --export-png=$fname -d 200 > /dev/null
    fi
done
