#!/usr/bin/env bash

#echo $#
if [[ $# -ne 1 ]]; then
    echo "usage git_update_push.sh <tag_name>"
    exit 1
fi

echo "passed argument check"
echo " tag is : ${1}"

git add .
git commit -m "${1}"
git tag "${1}"
git push origin master
git push --tags


# delete local tag '12345'
#git tag -d 12345
# delete remote tag '12345' (eg, GitHub version too)
#git push origin :refs/tags/12345
# alternative approach
#git push --delete origin tagName
#git tag -d tagName