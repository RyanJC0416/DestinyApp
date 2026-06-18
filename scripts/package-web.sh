#!/bin/sh
set -eu

destination="${1:-build/web}"

rm -rf "$destination"
mkdir -p "$destination"
cp -R platforms/web/. "$destination/"
cp -R shared assets "$destination/"
touch "$destination/.nojekyll"

test -f "$destination/index.html"
test -f "$destination/js/shared-core-loader.js"
test -f "$destination/shared/core/liuyaoEngine.js"
test -f "$destination/shared/data/hexagramData.js"
test -f "$destination/assets/images/tarot/rws-1909/ar00.jpg"
