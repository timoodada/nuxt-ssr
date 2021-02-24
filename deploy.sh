#!/usr/bin/env sh
# 确保脚本抛出遇到的错误

temp="server-side"
npm run build
rm -rf $temp
mkdir $temp
cp .nuxt/ -rf $temp
cp static/ -rf $temp
cp scripts/* -rf $temp
cp nuxt.config.js -f $temp
cp .npmrc -f $temp
cp package.json -f $temp
