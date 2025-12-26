#!/bin/bash

# Analyze log file for errors
LOG_FILE=${1:-"C:\Users\91812\Desktop\fullstack-workshop\01-linux\sample-log.txt"}
echo""

echo "======== Log Analysis Report ========"
echo "File: $LOG_FILE"
echo ""
echo "Total Lines: $(wc -l < "$LOG_FILE")"
echo ""
echo "-------------------------------------"
echo "Error count: $(grep -c -i 'error' "$LOG_FILE")"
echo "Warning count: $(grep -c -i 'warning' "$LOG_FILE")"
echo "INFO count: $(grep -c -i 'INFO' "$LOG_FILE")"
echo ""

echo "--------------------------------------"
echo "=== Unique IP Addresses ==="
grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' "$LOG_FILE" | sort -u
