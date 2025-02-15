#!/bin/bash

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed. Please install it first."
    exit 1
fi

# Function to show timestamp
show_timestamp() {
    date "+[%H:%M:%S]"
}

# Directory containing videos
videos_dir="public/videos"

# Check if directory exists
if [ ! -d "$videos_dir" ]; then
    echo "Error: Directory '$videos_dir' does not exist"
    exit 1
fi

# Counter for progress
total_videos=$(find "$videos_dir" -maxdepth 1 -type f \( -name "*.mp4" -o -name "*.MP4" -o -name "*.mov" -o -name "*.MOV" \) | wc -l)
current=0

echo "$(show_timestamp) Found $total_videos video files to compress"
echo "============================================================"

# Process each video file
find "$videos_dir" -maxdepth 1 -type f \( -name "*.mp4" -o -name "*.MP4" -o -name "*.mov" -o -name "*.MOV" \) -print0 | while IFS= read -r -d '' video_file; do
    ((current++))
    filename=$(basename "$video_file")
    
    # Get original size
    original_size=$(ls -lh "$video_file" | awk '{print $5}')
    
    echo "$(show_timestamp) [$current/$total_videos] Starting: $filename"
    echo "Original size: $original_size"
    
    # Create temporary file in the same directory
    temp_dir=$(dirname "$video_file")
    temp_name="temp_${RANDOM}_${RANDOM}.mp4"
    temp_file="${temp_dir}/${temp_name}"
    
    echo "Compressing... (This may take several minutes)"
    echo "A new progress marker (.) will appear every 30 seconds"
    
    # Compress the video with progress display
    start_time=$(date +%s)
    
    # Start the compression in the background
    ffmpeg -loglevel warning -i "$video_file" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "$temp_file" 2>/dev/null &
    ffmpeg_pid=$!
    
    # Show progress while ffmpeg is running
    while kill -0 $ffmpeg_pid 2>/dev/null; do
        echo -n "."
        sleep 30
    done
    
    # Wait for ffmpeg to complete and get its exit status
    wait $ffmpeg_pid
    if [ $? -ne 0 ]; then
        echo -e "\nError: Compression failed for $filename"
        rm -f "$temp_file"
        continue
    fi
    
    # Check if temporary file was created and has size
    if [ ! -f "$temp_file" ] || [ ! -s "$temp_file" ]; then
        echo -e "\nError: Failed to create compressed file for $filename"
        rm -f "$temp_file"
        continue
    fi
    
    # Replace original with compressed version
    if ! mv "$temp_file" "$video_file"; then
        echo -e "\nError: Failed to replace original file for $filename"
        rm -f "$temp_file"
        continue
    fi
    
    # Get new size and calculate savings
    new_size=$(ls -lh "$video_file" | awk '{print $5}')
    end_time=$(date +%s)
    total_time=$((end_time - start_time))
    
    echo -e "\n$(show_timestamp) ✓ Completed: $filename"
    echo "Original: $original_size → New: $new_size"
    echo "Time taken: $(date -u -r $total_time +"%H:%M:%S")"
    echo "============================================================"
done

echo "$(show_timestamp) All videos processed!"
