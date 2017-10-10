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


import csv

from bs4 import BeautifulSoup
from hal.wrappers.methods import handle_exceptions

PATH_TO_PAGE = "/home/stefano/Projects/Raceup/members/members/wordpress-backup/"
OUTPUT_FILE = "/home/stefano/Projects/Raceup/members/members/wordpress-backup/"


def parse_member(m):
    """
    :param m: str
        Raw html soup with member data
    :return: dict
        Member data as a dict
    """

    try:
        name_surname = m.find_all("div", {"class": "eg-herbert-hoover-element-0"})[0].text
    except:
        name_surname = "dnf dnf"

    name = str(name_surname.split(" ")[0]).strip()
    surname = " ".join(name_surname.split(" ")[1:]).strip()
    division = "combustion"  # all same division prior to 2016

    try:
        team = " ".join(m.find_all("div", {"class": "eg-herbert-hoover-element-6"})[0].text.split(" ")[1:]).strip()
    except:
        team = "dnf"

    try:
        school = m.find_all("div", {"class": "eg-herbert-hoover-element-30"})[0].text
    except:
        school = "dnf"

    try:
        linkedin = m.find_all("div", {"class": "eg-herbert-hoover-element-9-a"})[0].a["href"]
        if "linkedin" not in linkedin:
            raise ValueError("dnf linkedin")
    except:
        linkedin = "https://www.linkedin.com/"

    email = "info@raceup.it"  # no emails prior to 2016
    image = ""

    return {
        "name": name,
        "surname": surname,
        "division": division,
        "team": team,
        "school": school,
        "linkedin": linkedin,
        "email": email
    }


def parse_image(m):
    """
    :param m: str
        Raw html soup with image member data
    :return: dict
        Member data as a dict
    """

    img_div = m.find_all("div", {"class": "esg-entry-media"})[0]
    img_src = img_div.img["src"]

    return {
        "src": img_src
    }


def get_members(soup):
    """
    :param soup: str
        Html soup of webpage containing members
    :return: list
        All members in webpage as dicts
    """

    raw_members = soup.find_all("div", {"class": "esg-entry-content"})  # find members data
    members = []
    for m in raw_members:
        members.append(
            parse_member(m)
        )

    return members


def get_images(soup):
    """
    :param soup: str
        Html soup of webpage containing members
    :return: list
        All members in webpage as dicts
    """

    raw_images = soup.find_all("div", {"class": "esg-media-cover-wrapper"})  # find images
    images = []
    for m in raw_images:
        images.append(
            parse_image(m)
        )

    return images


def write_members_to_file(members, out_file):
    """
    :param members: list of dict
        List of members to write
    :param out_file: str
        Path to output file
    :return: void
        Saves members data to file
    """

    with open(out_file, "w") as csv_file:
        # write header
        header = {
            "name": "Name",
            "surname": "Surname",
            "division": "Division",
            "team": "Team",
            "school": "School",
            "linkedin": "Linkedin",
            "email": "Email"
        }

        w = csv.DictWriter(csv_file, header.keys())
        w.writerow(header)

        for m in members:
            w = csv.DictWriter(csv_file, m.keys())
            w.writerow(m)


def parse_page(in_file, out_file):
    """
    :param in_file: str
        Path to input file
    :param out_file: str
        Path to output file
    :return: void
        Parses old wordpress webpage to get info about team members
    """

    page_content = open(in_file, "r").read()  # read page
    soup = BeautifulSoup(page_content, "lxml")
    members = get_members(soup)
    images = get_images(soup)
    for i in range(len(members)):
        members[i]["img"] = images[i]["src"]  # add image field
        members[i]["img_id"] = images[i]["src"].split(".png")[0].split("-")[-1]  # add image id field

        # write_members_to_file(members, out_file)


@handle_exceptions
def main():
    """"
    :return: void
        Parses old wordpress webpages to get info about team members
    """

    for year in range(2015, 2016):
        parse_page(
            PATH_TO_PAGE + str(year) + ".html",
            OUTPUT_FILE + str(year) + ".csv"
        )


if __name__ == '__main__':
    main()
