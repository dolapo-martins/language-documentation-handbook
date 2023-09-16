#!/bin/bash

# Define the directory containing PDF files
dir="./corpus_sources/full_text/"

# Iterate through all PDF files in the directory
for pdf_file in "$dir"*.pdf; do
  # Run the npx fixie command on each PDF file
  npx fixie corpus source upload 31083406-0001-49d1-aafd-fee6130eeb49 application/pdf "$pdf_file"
done
