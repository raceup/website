# !/usr/bin/bash
# coding: utf-8

## optimize
find -type f -name "*.jpg" -exec jpegoptim -f --max=80 --strip-all {} \;  # optimize jpg images recursively
find -type f -name "*.png" -exec optipng {} \;  # optimize png images recursively

## crop
for f in *.jpg; do convert "$f" -resize '512x>' "$f"; done  # resize jpg images to 512 pixels wide

## convert
for f in *.png; do convert "$f" -quality 90 "$f.jpg"; done  # quality 90
for f in *.JPG; do mv $f "${f%.*}.jpg"; done  # JPG -> jpg
