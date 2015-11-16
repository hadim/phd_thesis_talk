#!/usr/bin/env sh

if [ ! -d ".node_modules" ]; then
  rm -fr node_modules/
  mkdir -p ~/.node_modules/
  ln -s ~/.node_modules/ node_modules
fi
