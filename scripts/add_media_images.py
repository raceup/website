#!/usr/bin/env python
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


""" Creates html-formatted list (<ul>) of images in folder to be added in the
'media' section """

import os


def a_img(src_path, href_path):
    """
    :param src_path: str
        Path to image of 'src' attr
    :param href_path: str
        Path to image of 'href' attr
    :return: str
        Html-formatted link to image
    """

    out = "<a href=\"" + href_path + "\">"
    out += "\n\t<img src=\"" + src_path + "\" />"
    out += "\n</a>"
    return out


def a_folder(src_folder, href_folder):
    """
    :param src_folder: str
        Path to folder where images in 'src' attr should be stored
    :param href_folder: str
        Path to folder where images in 'href' attr should be stored
    :return: str
        Html-formatted list of images in folder
    """

    src_imgs = os.listdir(src_folder)
    src_imgs = [
        "/" + src_folder + img for img in src_imgs
        if not img.startswith("/")
    ]
    href_imgs = os.listdir(href_folder)
    href_imgs = [
        "/" + href_folder + img for img in href_imgs
        if not img.startswith("/")
    ]
    out = ""
    for i, img in enumerate(src_imgs):
        out += a_img(img, href_imgs[i])
        out += "\n"
    return out


def main():
    """
    :return: void
        Prints to stdout html list of images in 'media' section (example of
        usage)
    """

    src_folder = "images/media/2017/varano-ed/"
    full_folder = "images/media/full/2017/varano-ed/"
    print(
        a_folder(src_folder, full_folder)
    )


if __name__ == '__main__':
    main()
