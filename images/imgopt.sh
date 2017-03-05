# !/usr/bin/bash
# coding: utf_8

# Copyright 2017 Race UP Team
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


# jpg/jpeg
find -type f -name "*.jpg" -exec jpegoptim -f --max=80 --strip-all {} \;  # optimize jpg images recursively
find -type f -name "*.jpeg" -exec jpegoptim -f --max=80 --strip-all {} \;  # optimize jpg images recursively
# for f in *.jpg; do convert "$f" -resize '512x>' "$f"; done  # resize jpg images to 512 pixels wide

# png
find -type f -name "*.png" -exec optipng {} \;  # optimize png images recursively
# for f in *.png; do optipng "$f"; done  # optimize png image
