#!/usr/bin/env bash
# coding: utf-8

BUILD_FOLDER="$HOME/.jekyll/build/"
yes | rm -rf "$BUILD_FOLDER"  # clean builds

cd ..
bundle exec jekyll serve --watch --profile --trace -d "$BUILD_FOLDER" # run server and profiler
