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


import codecs

from bs4 import BeautifulSoup
from hal.wrappers.methods import handle_exceptions

PATH_TO_PAGE = "/home/stefano/Downloads/chrome/Electric Partners - Race UP Team - Università degli Studi di Padova.html"
OUTPUT_FILE = "/home/stefano/examples/out.txt"


def write_sponsors_to_file(sponsors, out_file):
    """
    :param sponsors: list of dict
        List of members to write
    :param out_file: str
        Path to output file
    :return: void
        Saves members data to file
    """

    with codecs.open(out_file, "w", encoding="utf8") as o:
        for s in sponsors:
            o.write(s["url"] + "\n")
            o.write(s["description"])
            o.write("\n\n")


def parse_sponsor(d):
    """
    :param d: str
        Raw html soup with sponsor data
    :return: dict
        Sponsor data as a dict
    """

    try:
        url = d.find_all("div", {"class": "esg-bottom"})[0].a["href"]
    except:
        url = "dnf"

    try:
        description = d.find_all("div", {"class": "esg-center"})[-1].p.text
    except:
        description = "dnf"

    return {
        "url": url,
        "description": description
    }


def get_sponsors(soup):
    """
    :param soup: str
        Html soup of webpage containing sponsors
    :return: list
        All sponsors in webpage as dicts
    """

    raw_sponsors = soup.find_all("div", {"class": "esg-entry-cover esg-fade"})  # find sponsors data
    sponsors = []
    for d in raw_sponsors:
        sponsors.append(
            parse_sponsor(d)
        )

    good_ones = 0
    for s in sponsors:  # a bit of stats
        if s["url"] != "dnf" and s["description"] != "dnf":
            good_ones += 1
    print("Found", good_ones, "well parsed sponsors")

    return sponsors


def parse_page(in_file, out_file):
    """
    :param in_file: str
        Path to input file
    :param out_file: str
        Path to output file
    :return: void
        Parses old wordpress webpage to get info about sponsors
    """

    page_content = open(in_file, "r").read()  # read page
    soup = BeautifulSoup(page_content, "lxml")
    sponsors = get_sponsors(soup)
    write_sponsors_to_file(sponsors, out_file)


@handle_exceptions
def main():
    """"
    :return: void
        Parses old wordpress webpages to get info about sponsors
    """

    parse_page(PATH_TO_PAGE, OUTPUT_FILE)


if __name__ == '__main__':
    main()
