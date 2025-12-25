#!/bin/bash

# DNS Verification Script for forrovivo.com
# This script checks if DNS is correctly configured for GitHub Pages

echo "🔍 Checking DNS configuration for forrovivo.com..."
echo ""

# Expected GitHub Pages IPs
EXPECTED_IPS=(
  "185.199.108.153"
  "185.199.109.153"
  "185.199.110.153"
  "185.199.111.153"
)

# Get current DNS records
CURRENT_IPS=$(dig forrovivo.com +short | sort)

echo "Current DNS A records:"
echo "$CURRENT_IPS"
echo ""

# Check if we got any results
if [ -z "$CURRENT_IPS" ]; then
  echo "❌ ERROR: No DNS records found for forrovivo.com"
  echo "   The domain may not be configured yet."
  exit 1
fi

# Check each expected IP
MISSING_IPS=()
FOUND_COUNT=0

for expected_ip in "${EXPECTED_IPS[@]}"; do
  if echo "$CURRENT_IPS" | grep -q "$expected_ip"; then
    echo "✅ Found: $expected_ip"
    ((FOUND_COUNT++))
  else
    echo "❌ Missing: $expected_ip"
    MISSING_IPS+=("$expected_ip")
  fi
done

echo ""
echo "Summary:"
echo "  Found: $FOUND_COUNT/4 GitHub Pages IPs"

# Check for Squarespace parking page IPs
SQUARESPACE_IPS=$(echo "$CURRENT_IPS" | grep -E "198\.185\.159\.|198\.49\.23\.")
if [ ! -z "$SQUARESPACE_IPS" ]; then
  echo ""
  echo "⚠️  WARNING: Found Squarespace parking page IPs:"
  echo "$SQUARESPACE_IPS"
  echo "   These need to be removed and replaced with GitHub Pages IPs."
fi

# Final status
if [ $FOUND_COUNT -eq 4 ] && [ -z "$SQUARESPACE_IPS" ]; then
  echo ""
  echo "✅ SUCCESS: DNS is correctly configured for GitHub Pages!"
  echo "   Your domain should work at https://forrovivo.com"
  exit 0
elif [ $FOUND_COUNT -gt 0 ]; then
  echo ""
  echo "⚠️  PARTIAL: Some GitHub Pages IPs are configured."
  echo "   Missing IPs: ${MISSING_IPS[*]}"
  echo "   Please add the missing A records in Squarespace DNS settings."
  exit 1
else
  echo ""
  echo "❌ NOT CONFIGURED: DNS is not pointing to GitHub Pages."
  echo "   Please follow the setup guide: SQUARESPACE_DNS_SETUP.md"
  exit 1
fi

