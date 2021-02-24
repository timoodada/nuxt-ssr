#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

temp="temp"
npm run build
rm -rf $temp
mkdir $temp
cp .nuxt/ -rf $temp
cp static/ -rf $temp
cp scripts/* -rf $temp
cp nuxt.config.js -f $temp
cp .npmrc -f $temp
cp package.json -f $temp
cd $temp

# deploy to github
echo "Push to branch server-side"
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:timoodada/nuxt-ssr.git
else
  msg='来自github action的自动部署'
  githubUrl=https://timoodada:${GITHUB_TOKEN}@github.com/timoodada/nuxt-ssr.git
  git config --global user.name "ChenJiYuan"
  git config --global user.email "chenjiyuan.123@qq.com"
fi
git init
git add .
git commit -m "${msg}"
echo "上传github开始"
git push -f $githubUrl master:server-side # 推送到github
echo "上传github完成"

cd -
rm -rf $temp
