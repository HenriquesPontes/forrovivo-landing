# Remote DNS Setup Guide for GitHub Pages

## Important Note

**Squarespace DNS must be configured through their web interface** - there's no API to automate this. However, you can:
- ✅ Configure DNS from anywhere (any computer with internet)
- ✅ Verify DNS configuration remotely using scripts
- ✅ Monitor DNS propagation from any location

---

## Step 1: Configure DNS in Squarespace (Web Interface)

You need to access Squarespace's web interface to add DNS records. This can be done from any computer:

### Quick Steps:
1. Go to: https://www.squarespace.com
2. Log in to your account
3. Navigate to: **Settings** → **Domains** → **forrovivo.com** → **DNS Settings**
4. Add the 4 A records (see below)
5. Save changes

### The 4 A Records to Add:

```
Record 1:
Type: A
Host: @
Points to: 185.199.108.153
TTL: 3600

Record 2:
Type: A
Host: @
Points to: 185.199.109.153
TTL: 3600

Record 3:
Type: A
Host: @
Points to: 185.199.110.153
TTL: 3600

Record 4:
Type: A
Host: @
Points to: 185.199.111.153
TTL: 3600
```

**Note:** You can do this from any computer - just log into Squarespace's website.

---

## Step 2: Verify DNS Remotely

After configuring DNS in Squarespace, you can verify from anywhere:

### Option 1: Using the Verification Script (Local)

If you have the repository cloned locally:

```bash
cd "/Users/dev/Developer/FORRO Landing Page"
./verify-dns.sh
```

This will check if DNS is correctly configured.

### Option 2: Using dig Command (Any Computer)

On Mac/Linux:
```bash
dig forrovivo.com +short
```

Expected output (GitHub Pages IPs):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Option 3: Online DNS Checkers

Use these websites from any computer:
- https://www.whatsmydns.net/#A/forrovivo.com
- https://dnschecker.org/#A/forrovivo.com
- https://www.dnswatch.info/dns/dnslookup?la=en&host=forrovivo.com&type=A

Enter `forrovivo.com` and check for Type `A` records. You should see the 4 GitHub Pages IPs.

### Option 4: Check via Terminal (SSH to Remote Server)

If you have SSH access to a remote server:

```bash
ssh user@your-server.com
dig forrovivo.com +short
```

---

## Step 3: Monitor DNS Propagation

DNS changes can take 1-48 hours to propagate globally. You can monitor this remotely:

### Check from Multiple Locations:

```bash
# Check from your current location
dig forrovivo.com +short

# Or use online tools that check from multiple locations:
# https://www.whatsmydns.net/#A/forrovivo.com
```

### What to Look For:

✅ **Correct Configuration:**
- Shows 4 IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- No Squarespace IPs (198.185.159.x or 198.49.23.x)

❌ **Still Wrong:**
- Shows Squarespace IPs (198.185.159.x or 198.49.23.x)
- Shows old/cached IPs
- Shows no results

---

## Step 4: Verify GitHub Pages Configuration

You can also verify GitHub Pages setup remotely:

### Check GitHub Pages Status:

1. Go to: https://github.com/HenriquesPontes/forrovivo-landing/settings/pages
2. Check:
   - ✅ Custom domain: `forrovivo.com` is entered
   - ✅ Green checkmark (✓) appears when DNS is verified
   - ✅ "Enforce HTTPS" is enabled

### Check GitHub Actions Deployment:

1. Go to: https://github.com/HenriquesPontes/forrovivo-landing/actions
2. Verify the "Deploy to GitHub Pages" workflow completed successfully
3. Check the deployment URL

### Test the Site:

Once DNS propagates:
- Visit: https://forrovivo.com
- Should show your ForroVivo landing page
- Should have HTTPS enabled (green lock icon)

---

## Remote Verification Checklist

After configuring DNS in Squarespace, verify remotely:

- [ ] DNS shows GitHub Pages IPs (check with `dig` or online tools)
- [ ] No Squarespace parking page IPs remain
- [ ] GitHub Pages settings show custom domain configured
- [ ] GitHub Actions deployment completed successfully
- [ ] Site loads at https://forrovivo.com
- [ ] HTTPS is enabled (green lock in browser)

---

## Troubleshooting Remote Verification

### Problem: DNS still shows old IPs after 2 hours

**Solutions:**
1. Double-check Squarespace DNS settings are saved correctly
2. Clear DNS cache on your computer:
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Linux
   sudo systemd-resolve --flush-caches
   
   # Windows (run as admin)
   ipconfig /flushdns
   ```
3. Check from different locations using online DNS checkers
4. Wait longer (can take up to 48 hours)

### Problem: Can't access Squarespace from current location

**Solutions:**
1. Use VPN to access Squarespace website
2. Ask someone with access to configure DNS
3. Use Squarespace mobile app (if available)
4. Contact Squarespace support for assistance

### Problem: Verification script shows partial configuration

**Solutions:**
1. Check which IPs are missing
2. Go back to Squarespace DNS settings
3. Add the missing A records
4. Wait 15-30 minutes and verify again

---

## Quick Reference Commands

### Check DNS from Terminal:
```bash
# Simple check
dig forrovivo.com +short

# Detailed check
dig forrovivo.com +noall +answer

# Check from specific DNS server
dig @8.8.8.8 forrovivo.com +short
```

### Run Verification Script:
```bash
cd "/Users/dev/Developer/FORRO Landing Page"
./verify-dns.sh
```

### Check GitHub Pages Status:
- Settings: https://github.com/HenriquesPontes/forrovivo-landing/settings/pages
- Actions: https://github.com/HenriquesPontes/forrovivo-landing/actions

---

## Summary

**What You Can Do Remotely:**
- ✅ Verify DNS configuration (from anywhere)
- ✅ Monitor DNS propagation (using online tools)
- ✅ Check GitHub Pages status (via web browser)
- ✅ Test website accessibility (from any location)

**What Requires Squarespace Web Interface:**
- ⚠️ Adding/editing DNS records (must use Squarespace website)
- ⚠️ Saving DNS changes (must use Squarespace website)

**Best Practice:**
1. Configure DNS in Squarespace (web interface)
2. Wait 15-30 minutes
3. Verify remotely using `dig` or online tools
4. Check GitHub Pages status
5. Test website

---

**Last Updated**: Current date
**Domain**: forrovivo.com
**Repository**: HenriquesPontes/forrovivo-landing

