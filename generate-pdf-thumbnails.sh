#!/bin/bash
# Script to generate thumbnails from PDFs
# Requires: ImageMagick (convert) or pdftoppm

GRAPHICS_DIR="static/img/graphics"

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
    echo "Using ImageMagick to generate thumbnails..."
    
    for pdf in "$GRAPHICS_DIR"/*.pdf; do
        if [ -f "$pdf" ]; then
            filename=$(basename "$pdf" .pdf)
            thumb_path="$GRAPHICS_DIR/${filename}-thumb.jpg"
            
            echo "Generating thumbnail for: $filename"
            convert -thumbnail 400x300 -background white -alpha remove "$pdf[0]" "$thumb_path"
        fi
    done
    
    echo "Done! Thumbnails generated."
    
# Check if pdftoppm is available (part of poppler-utils)
elif command -v pdftoppm &> /dev/null; then
    echo "Using pdftoppm to generate thumbnails..."
    
    for pdf in "$GRAPHICS_DIR"/*.pdf; do
        if [ -f "$pdf" ]; then
            filename=$(basename "$pdf" .pdf)
            thumb_path="$GRAPHICS_DIR/${filename}-thumb.jpg"
            
            echo "Generating thumbnail for: $filename"
            pdftoppm -jpeg -f 1 -l 1 -scale-to-x 400 -scale-to-y 300 "$pdf" "$GRAPHICS_DIR/${filename}-thumb"
            mv "$GRAPHICS_DIR/${filename}-thumb-1.jpg" "$thumb_path" 2>/dev/null || true
        fi
    done
    
    echo "Done! Thumbnails generated."
    
else
    echo "Error: Neither ImageMagick nor pdftoppm is installed."
    echo ""
    echo "To install ImageMagick:"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  macOS: brew install imagemagick"
    echo ""
    echo "To install pdftoppm (poppler-utils):"
    echo "  Ubuntu/Debian: sudo apt-get install poppler-utils"
    echo "  macOS: brew install poppler"
    exit 1
fi
