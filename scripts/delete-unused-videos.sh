#!/bin/bash

cd public/videos

# Keep only these specific files
keep_files=(
    "Alicia Keys in Paris ｜ A Take Away Show.mp4"
    "Jay Z & Alicia Keys - Empire State of Mind LIVE.mp4"
    "AFROPUNK FEST BROOKLYN 2015： DAY 2 RECAP.mp4"
)

echo "Deleting unused videos..."
echo "----------------------------------------"

# Create a temporary file with the list of files to keep
printf "%s\n" "${keep_files[@]}" > .keep_files

# Delete all mp4 files except those listed in .keep_files
for file in *.mp4; do
    if ! grep -Fxq "$file" .keep_files; then
        echo "Deleting: $file"
        rm -f "$file"
    else
        echo "Keeping: $file"
    fi
done

# Clean up
rm .keep_files

echo "----------------------------------------"
echo "Cleanup complete! Only required videos remain."
