f = "/home/stefano/Coding/Webpages/projects/raceup.github.io/tmp/social_links.csv"
lines = open(f, "r").readlines()
lines = [l.strip() for l in lines]
lines
def get_soc_html(linkedin, email):
    out =
    "<footer>\n" +
    "\t<ul class=\"icons\">\n" +
    "\t\t<li><a href=\"" + linkedin   + "\" class=\"icon circle fa-linkedin\"><span class=\"label\">Linkedin</span></a></li>\n" +
    "\t\t<li><a href=\"" + email + "\" class=\"icon circle fa-envelope\"><span class=\"label\">Email</span></a></li>\n" +
    "\t</ul>\n" +
    "</footer>"
def get_soc_html(linkedin, email):
    return
    "<footer>\n" +
    "\t<ul class=\"icons\">\n" +
    "\t\t<li><a href=\"" + linkedin   + "\" class=\"icon circle fa-linkedin\"><span class=\"label\">Linkedin</span></a></li>\n" +
    "\t\t<li><a href=\"" + email + "\" class=\"icon circle fa-envelope\"><span class=\"label\">Email</span></a></li>\n" +
    "\t</ul>\n" +
    "</footer>"
def get_soc_html(linkedin, email):
    return "<footer>\n\t<ul class=\"icons\">\n\t\t<li><a href=\"" + linkedin  + "\" class=\"icon circle fa-linkedin\"><span class=\"label\">Linkedin</span></a></li>\n\t\t<li><a href=\"" + email + "\" class=\"icon circle fa-envelope\"><span class=\"label\">Email</span></a></li>\n\t</ul>\n</footer>"
get_soc_html(str(https://www.linkedin.com/in/andrea-zingale-969661110), str(andreazingale92@gmail.com))
get_soc_html("https://www.linkedin.com/in/andrea-zingale-969661110", "andreazingale92@gmail.com)
get_soc_html("https://www.linkedin.com/in/andrea-zingale-969661110", "andreazingale92@gmail.com")
clear
lines
socials = []
socials = []
for l in lines:
    linkedin = l.split(",")[2]
    email = l.split(",")[3]
    s = l.append(get_soc_html(linkedin, email))
    socials.append(s)
socials = []
for l in lines:
    linkedin = l.split(",")[2]
    email = l.split(",")[3]
    s = l + "," + get_soc_html(linkedin, email)
    socials.append(s)
socials
with open("/home/stefano/tmp/socials.csv", "w") as o:
    o.writelines(socials)
%history -f h.py
