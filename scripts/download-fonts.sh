#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Cormorant fonts
curl -L "https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFk6NJQ.woff2" -o "public/fonts/Cormorant-Regular.woff2"
curl -L "https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFkGNJQ.woff2" -o "public/fonts/Cormorant-Medium.woff2"
curl -L "https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFkqNJQ.woff2" -o "public/fonts/Cormorant-SemiBold.woff2"

echo "Fonts downloaded successfully!"
