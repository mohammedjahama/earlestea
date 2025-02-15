#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0 <video_file>"
    echo "Compresses the given video file in place using ffmpeg"
    exit 1
}

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed. Please install it first."
    exit 1
}

# Check if a file was provided
if [ $# -ne 1 ]; then
    usage
fi

# Check if input file exists
input_file="$1"
if [ ! -f "$input_file" ]; then
    echo "Error: File '$input_file' does not exist"
    exit 1
}

# Get the directory and filename
dir_name=$(dirname "$input_file")
file_name=$(basename "$input_file")
temp_file="${dir_name}/${file_name}.tmp"

echo "Compressing video: $input_file"

# Compress the video with moderate settings
# -c:v libx264: Use H.264 codec
# -crf 23: Constant Rate Factor (18-28 is visually lossless)
# -preset medium: Balance between compression speed and quality
# -c:a aac: Use AAC for audio
# -b:a 128k: Moderate audio bitrate
if ! ffmpeg -i "$input_file" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "$temp_file" 2>/dev/null; then
    echo "Error: Compression failed"
    rm -f "$temp_file"
    exit 1
fi

# Check if temporary file was created and has size
if [ ! -f "$temp_file" ] || [ ! -s "$temp_file" ]; then
    echo "Error: Failed to create compressed file"
    rm -f "$temp_file"
    exit 1
fi

# Replace original with compressed version
if ! mv "$temp_file" "$input_file"; then
    echo "Error: Failed to replace original file"
    rm -f "$temp_file"
    exit 1
fi

echo "Successfully compressed video: $input_file"
