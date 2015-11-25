#!/usr/bin/env sh
for i in $(find data/ -name \*.svg); do
    fname=`echo $i | sed -e 's/svg$/png/'`
    echo "Converting $fname"
    inkscape $i --export-png=$fname -d 300 > /dev/null
done
