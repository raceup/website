#!/usr/bin/env bash
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


HOST="ftp://195.167.144.90"
USER="raceup"

echo "Password for user '$USER' in $HOST:"
read PASS

TRG_FOLDER="/raceup.it"
SRC_FOLDER="$HOME/Projects/raceup/projects/webpage/raceup.it/"
excludes="--exclude-glob .* --exclude-glob .*/"  # exclude hidden files/directories
OPTIONS="--reverse --only-newer --verbose $excludes"

lftp -f "
open $HOST
user $USER $PASS
lcd $SRC_FOLDER
mirror $OPTIONS $SRC_FOLDER $TRG_FOLDER
"