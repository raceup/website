##
# @author freakie guy <freakie2007@gmail.com>
# @package Batch Optimize Image for web performance
# @requirement jpegoptim, optipng
##

echo $1

#
# Folder path
#
FOLDER=$1  # "/var/www/tank-and-kinis/image/data/"

#
# OS check
#
DEBIAN="/etc/debian_version"

#
# check jpeg cmd if not install
#
jpegoptimize() {
    if type -P jpegoptim &>/dev/null ; then
       for f in *.jpg
       do
        jpegoptim "$f"
       done
    else
        apt-get install jpegoptim
        jpegoptimize
    fi
}

#
# check jpeg cmd if not install
#
pngoptimize() {
    if type -P optipng &>/dev/null ; then
    for f in *.png
    do
        optipng -o7 -preserve "$f"
    done
    else
        apt-get install optipng
        pngoptimize
    fi
}


if [ -f "$DEBIAN" ]
then
    cd $FOLDER
    echo "jpeg Optimization start ...."
    jpegoptimize
    echo -e "jpeg Done.\n"
    echo "png Optimization start ...."
    pngoptimize
    echo "png Done."
    cd -
else
    echo "Non Supported OS"
fi
