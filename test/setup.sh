#!/usr/bin/env bash

# when testing plugins, docpad must be installed from source and linked to - the npm version is missing things
# per instructions at https://github.com/docpad/documentation/blob/master/extend/plugin-write.html.md#running-the-tests

git clone https://github.com/bevry/docpad.git
cd docpad
npm install
npm run compile
npm link
cd ..
npm link docpad
