#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

npm install --production
npm run start
