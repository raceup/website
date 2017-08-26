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
OUTPUT_FOLDER="/home/stefano/Projects/Raceup/projects/webpage/raceup.github.io/"

echo "Cleaning"
cd ..  # go to root folder
jekyll clean  # clean pre-existent website

echo "Building"
jekyll build
yes | rsync -av --exclude=".*" _site/* $OUTPUT_FOLDER
cd $OUTPUT_FOLDER

echo "Pushing online"
git add --all
git commit -m "$COMMIT_MSG | see https://github.com/raceup/website/blob/master/CHANGELOG.md for more info"
git push origin master
