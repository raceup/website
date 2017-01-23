# !/usr/bin/bash
# coding: utf_8

# Copyright 2017 RaceUp Team
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


BUILD_FOLDER="/home/stefano/Projects/Raceup/webpage/raceup.github.io/"

echo "Building"
jekyll build
cp -r _site $BUILD_FOLDER
cd $BUILD_FOLDER

echo "Pushing online"
git add --all
git commit -m "built sources, see CHANGELOG here https://github.com/sirfoga/raceup.github.io/blob/master/CHANGELOG.md for more info"
git push origin master
