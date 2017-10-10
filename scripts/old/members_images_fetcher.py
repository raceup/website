# !/usr/bin/python3
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


"""
Refactor website team pages to include members images
"""

from bs4 import BeautifulSoup
from hal.wrappers.methods import handle_exceptions

PATH_TO_DATA = "/home/stefano/Coding/Webpages/projects/raceup.github.io/_i18n/it/team/"
OUTPUT_FILE = "/home/stefano/examples/team/"
IMAGE_REGEX = "<a class=\"image.*</a>"


def build_new_members(div_members, year):
    """
    :param div_members: list of BeautifulSoup
        Html member
    :return: list of str
        New html member with right image link
    """

    new_images = []
    for d in div_members:  # build new members
        name_surname = d.find_all("h2")[0].text.lower().replace(" ", "-")  # parse name and surname
        new_image = "<a class=\"image featured\"><img src=\"/images/team/" + str(year) + "/" + str(
            name_surname) + ".png" + "\" /></a>"  # build new image
        new_images.append(new_image)  # add to list

    return new_images


def build_new_page(soup):
    """
    :param soup: BeautifulSoup html page
        Html member
    :return: str
        New html page
    """

    out = str(soup)  # str(soup)
    out = out.replace("&lt;", "<")
    out = out.replace("&gt;", ">")
    out = out.replace("&amp;", "&")

    out = out.replace("<html><body>", "")
    out = out.replace("</body></html>", "")

    out = out.replace("<!-- ", "\n<!-- ")

    return out


def build_page(year, in_file, out_file):
    """
    :param in_file: str
        Path to input file
    :param out_file: str
        Path to output file
    :return: void
        Reads page and includes members images
    """

    content = open(in_file, "r").read()
    soup = BeautifulSoup(content, "lxml")

    div_members = soup.find_all("div", {"class": "3u"}) + soup.find_all("div",
                                                                        {"class": "4u"})  # team leaders and others
    new_images = build_new_members(div_members, year)

    for i in range(len(div_members)):  # replace old members
        div_image = div_members[i].find_all("a", {"class": "image"})[0]
        div_image.replaceWith(new_images[i])  # replace

    with open(out_file, "w") as o:
        o.write(build_new_page(soup))


@handle_exceptions
def main():
    """"
    :return: void
        Main subroutine
    """

    for year in range(2006, 2017):
        build_page(
            year,
            PATH_TO_DATA + str(year) + ".html",
            OUTPUT_FILE + str(year) + ".html"
        )


if __name__ == '__main__':
    main()
