#!/usr/bin/env bash
# coding: utf-8

# ftp 195.167.144.90 to connect interactive
HOST="ftp://195.167.144.90"
USER="raceup"

echo "Password for user '$USER' in $HOST:"
read PASS

TRG_FOLDER="/raceup.it"
SRC_FOLDER="$HOME/Projects/raceup/2017-18/projects/webpage/raceup.github.io/"
excludes="--exclude-glob .* --exclude-glob .*/"  # exclude hidden files/directories
OPTIONS="--reverse --only-newer --verbose $excludes"

lftp -f "
open $HOST
user $USER $PASS
lcd $SRC_FOLDER
mirror $OPTIONS $SRC_FOLDER $TRG_FOLDER
"
