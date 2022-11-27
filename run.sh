rm -rf ../build 
bundler exec jekyll build -d ../build -s .
bundler exec jekyll serve -s ../build 