#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 /path/to/messy-folder"
  exit 1
fi

DIR="$1"

if [ ! -d "$DIR" ]; then
  echo "Directory not found"
  exit 1
fi

declare -A count

for file in "$DIR"/*; do
  if [ -f "$file" ]; then
    ext="${file##*.}"
    mkdir -p "$DIR/$ext"
    mv "$file" "$DIR/$ext/"
    ((count[$ext]++))
  fi
done
echo ""

for ext in "${!count[@]}"; do
  echo "Organized ${count[$ext]} .$ext files"
done
