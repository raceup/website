#!/usr/bin/env bash
# coding: utf-8

git push
COMMIT_MSG=$(git log -1 --pretty=%B)
OUTPUT_FOLDER="$HOME/Projects/raceup/projects/webpage/raceup.it/"
BUILD_FOLDER="$HOME/.jekyll_build/"

cd ..
yes | rm -R "$BUILD_FOLDER"  # clean builds
jekyll build -d "$BUILD_FOLDER"  # build
yes | rsync -av --delete --exclude=".*" "$BUILD_FOLDER"/* ${OUTPUT_FOLDER}  # copy

cd ${OUTPUT_FOLDER}
git add --all  # git
git commit -m "$COMMIT_MSG | see https://github.com/raceup/website/blob/master/CHANGELOG.md for complete CHANGELOG"
git push origin master
