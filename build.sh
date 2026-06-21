#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

APP_NAME="DestinyFortune"
PROJECT="platforms/macos/DestinyFortune/DestinyFortune.xcodeproj"
SCHEME="DestinyFortune"
INFO_PLIST="platforms/macos/DestinyFortune/DestinyFortune/Info.plist"
DERIVED_DATA="build/DerivedData"
WEB_BUILD="build/web"
RELEASE_DIR="build/release"

VERSION="$(/usr/libexec/PlistBuddy -c 'Print :CFBundleShortVersionString' "$INFO_PLIST")"
TAG="v$VERSION"
MACOS_ZIP="$RELEASE_DIR/${APP_NAME}-${TAG}-macOS.zip"
WEB_ZIP="$RELEASE_DIR/${APP_NAME}-${TAG}-web.zip"

publish=0
if [ "${1:-}" = "--publish" ]; then
  publish=1
elif [ "${1:-}" != "" ]; then
  echo "Usage: ./build.sh [--publish]" >&2
  exit 2
fi

rm -rf "$RELEASE_DIR"
mkdir -p "$RELEASE_DIR"

echo "Building macOS app $TAG..."
xcodebuild \
  -project "$PROJECT" \
  -scheme "$SCHEME" \
  -configuration Release \
  -derivedDataPath "$DERIVED_DATA" \
  CODE_SIGNING_ALLOWED=NO \
  ONLY_ACTIVE_ARCH=NO \
  ARCHS="arm64 x86_64" \
  build

APP_PATH="$DERIVED_DATA/Build/Products/Release/${APP_NAME}.app"
codesign --force --deep --sign - "$APP_PATH"
ditto -c -k --sequesterRsrc --keepParent "$APP_PATH" "$MACOS_ZIP"

echo "Packaging web app $TAG..."
sh scripts/package-web.sh "$WEB_BUILD"
ditto -c -k --sequesterRsrc --keepParent "$WEB_BUILD" "$WEB_ZIP"

echo "Built:"
echo "  $MACOS_ZIP"
echo "  $WEB_ZIP"

if [ "$publish" -eq 1 ]; then
  if ! command -v gh >/dev/null 2>&1; then
    echo "gh is required for --publish" >&2
    exit 1
  fi

  if ! git rev-parse "$TAG" >/dev/null 2>&1; then
    echo "Tag $TAG does not exist. Create and push the tag before publishing." >&2
    exit 1
  fi

  if ! gh release view "$TAG" >/dev/null 2>&1; then
    gh release create "$TAG" --verify-tag --title "DestinyFortune $TAG" --generate-notes
  fi

  gh release upload "$TAG" "$MACOS_ZIP" "$WEB_ZIP" --clobber
  echo "Published: https://github.com/RyanJC0416/DestinyApp/releases/tag/$TAG"
fi
