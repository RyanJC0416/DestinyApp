#!/bin/sh
set -eu

destination="${1:-build/web}"

rm -rf "$destination"
mkdir -p "$destination"
cp -R web/. "$destination/"
cp -R core data "$destination/"
touch "$destination/.nojekyll"

test -f "$destination/index.html"
test -f "$destination/js/shared-core-loader.js"
test -f "$destination/core/liuyaoEngine.js"
test -f "$destination/data/hexagramData.js"
