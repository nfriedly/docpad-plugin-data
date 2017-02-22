#!/usr/bin/env bash

git clone https://github.com/bevry/docpad.git
cd docpad
npm install
npm run compile
npm link
cd ..
npm link docpad
