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
import math

from hal.wrappers.methods import handle_exceptions

PATH_TO_DATA = "/home/stefano/Projects/Raceup/projects/webpage/data/members/"
OUTPUT_FILE = "/home/stefano/Projects/Raceup/projects/webpage/data/members/"


def build_member(m):
    """
    :param m: dict
        Member data
    :return: str
        Html representation of member
    """

    return "        <div class=\"3u\">\n\
            <a class=\"image featured\"><img src=\"/images/account.png\" /></a>\n\
            <h2>" + str(m["Name"]) + " " + str(m["Surname"]) + "</h2>\n\
            <h6>" + str(m["School"]) + "</h6>\n\
            <footer>\n\
                <ul class=\"icons\">\n\
                    <li><a href=\"" + str(m["Linkedin"]) + "\" class=\"icon circle fa-linkedin\"><span class=\"label\">Linkedin</span></a></li>\n\
                    <li><a href=\"mailto:" + str(m["Email"]) + "\" class=\"icon circle fa-envelope\"><span class=\"label\">Email</span></a></li>\n\
                </ul>\n\
            </footer>\n\
        </div>"


def build_members(members, team="another team"):
    """
    :param members: list of dicts
        List of members in team
    :param team: str
        Name of team
    :return: str
        Html representation of team
    """

    number_of_people_in_row = 4
    number_of_rows = int(math.ceil((len(members) / number_of_people_in_row)))

    o = "<!-- " + str(team) + " -->\n"
    o += "<section class=\"wrapper style1 container special\">\n\
    <!-- title -->\n\
        <header class=\"special-title\">\n\
            <h3>" + str(team) + "</h3>\n\
        </header>\n\
    \n\
    <!-- members -->\n"

    for r in range(number_of_rows):
        o += "    <div class=\"row\">\n"  # open row

        for p in range(number_of_people_in_row):
            try:
                index = r * number_of_people_in_row + p  # index of people to put next
                member = members[index]
                o += build_member(member) + "\n"
            except:  # no more people
                break

        o += "    </div>\n"  # close row

    o += "</section>\n"
    return o


def build_team(members):
    """
    :param members: list of dict
        List of members with data
    :return: str
        Html output of all team with members
    """

    teams = {}
    for m in members:  # divide all members based on team
        team = m["Team"]
        if team.lower() != "leader":
            if team not in teams.keys():  # team not recognized -> create one
                teams[team] = []

            if m not in teams[team]:  # avoid duplicates
                teams[team].append(m)

    o = ""
    for t in teams.keys():  # build all teams
        team_page = build_members(teams[t], t)
        o += team_page + "\n"

    return o


def parse_data(in_file):
    """
    :param in_file: str
        Path to input file
    :return: list of dict
        List of members with data
    """

    raw_data = csv.DictReader(open(in_file), delimiter=",")  # read csv file
    members = []
    for m in raw_data:
        members.append(m)

    return members


def write_output_file(out, out_file):
    """
    :param out: str
        Html content to write
    :param out_file: str
        Path to output file
    :return: void
        Writes content to output file
    """

    with open(out_file, "w") as o:
        o.write(out)


def build_page(year, in_file, out_file):
    """
    :param in_file: str
        Path to input file
    :param out_file: str
        Path to output file
    :return: void
        Reads csv data file and builds webpage with members
    """

    members = parse_data(in_file)  # get list of members to build

    page = "<article id=\"main\">\n\
    <!-- title -->\n\
    <header class=\"special container\">\n\
        <span class=\"icon fa-steam\"></span>\n\
        <h2>La squadra del " + str(year) + "</h2>\n\
    </header>\n\n"

    raw_page = build_team(members)
    raw_page = raw_page.replace("\n", "\n    ")  # add tab
    page += "    " + raw_page + "\n</article>"
    page = page.replace("    \n    \n", "    \n")

    write_output_file(page, out_file)


@handle_exceptions
def main():
    """"
    :return: void
        Reads csv data file and builds webpages with members
    """

    for year in range(2006, 2017):
        build_page(
            year,
            PATH_TO_DATA + str(year) + ".csv",
            OUTPUT_FILE + str(year) + ".html"
        )


if __name__ == '__main__':
    main()
