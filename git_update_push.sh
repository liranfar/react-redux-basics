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
