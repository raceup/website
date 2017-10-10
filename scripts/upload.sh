# !/usr/bin/bash
# coding: utf-8

# Copyright 2017 Stefano Fogarollo
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


COMMIT_MSG=$(git log -1 --pretty=%B)
OUTPUT_FOLDER="$HOME/Projects/Raceup/projects/webpage/raceup.it/"
BUILD_FOLDER="$HOME/.jekyll_build/"

cd ..
yes | rm -R "$BUILD_FOLDER"  # clean builds
jekyll build -d "$BUILD_FOLDER"  # build
yes | rsync -av --delete --exclude=".*" "$BUILD_FOLDER"/* $OUTPUT_FOLDER  # copy

cd $OUTPUT_FOLDER
git add --all  # git
git commit -m "$COMMIT_MSG | see https://github.com/raceup/website/blob/master/CHANGELOG.md for complete CHANGELOG"
git push origin master
