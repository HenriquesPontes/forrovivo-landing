# Step-by-Step Guide: Connect Squarespace Domain to GitHub Pages

## Prerequisites
- ✅ Domain: `forrovivo.com` purchased from Squarespace
- ✅ GitHub repository: `HenriquesPontes/forrovivo-landing`
- ✅ GitHub Pages workflow configured
- ✅ CNAME file already in repository

---

## Part 1: Configure DNS in Squarespace

### Step 1: Log in to Squarespace
1. Go to: https://www.squarespace.com
2. Click **Log In** (top right)
3. Enter your email and password
4. Click **Log In**

### Step 2: Navigate to Domain Settings
1. In your Squarespace dashboard, click **Settings** (left sidebar)
2. Click **Domains** (under Website Management)
3. Find `forrovivo.com` in the list
4. Click on `forrovivo.com` to open domain settings

### Step 3: Access DNS Settings
1. In the domain settings page, look for **DNS Settings** or **Advanced DNS**
2. Click on **DNS Settings** (or **Advanced DNS**)
3. You should see a list of current DNS records

### Step 4: Identify and Delete Existing A Records
1. Look for records with:
   - **Type**: `A`
   - **Host**: `@` (or blank/root)
   - **Data/Points to**: `198.185.159.x` or `198.49.23.x` (Squarespace parking page IPs)

2. For each existing A record:
   - Click the **trash icon** (🗑️) or **Delete** button
   - Confirm deletion if prompted
   - **Delete ALL A records** that point to Squarespace IPs

### Step 5: Add GitHub Pages A Records
Add **4 new A records** one by one:

#### A Record 1:
1. Click **Add Record** or **+ Add** button
2. Select **Type**: `A`
3. **Host**: Enter `@` (or leave blank if that's the option)
4. **Data** or **Points to**: Enter `185.199.108.153`
5. **TTL**: Enter `3600` (or leave default)
6. Click **Save** or **Add**

#### A Record 2:
1. Click **Add Record** or **+ Add** button
2. Select **Type**: `A`
3. **Host**: Enter `@` (or leave blank)
4. **Data** or **Points to**: Enter `185.199.109.153`
5. **TTL**: Enter `3600` (or leave default)
6. Click **Save** or **Add**

#### A Record 3:
1. Click **Add Record** or **+ Add** button
2. Select **Type**: `A`
3. **Host**: Enter `@` (or leave blank)
4. **Data** or **Points to**: Enter `185.199.110.153`
5. **TTL**: Enter `3600` (or leave default)
6. Click **Save** or **Add**

#### A Record 4:
1. Click **Add Record** or **+ Add** button
2. Select **Type**: `A`
3. **Host**: Enter `@` (or leave blank)
4. **Data** or **Points to**: Enter `185.199.111.153`
5. **TTL**: Enter `3600` (or leave default)
6. Click **Save** or **Add**

### Step 6: (Optional) Add www CNAME Record
If you want `www.forrovivo.com` to work:

1. Click **Add Record** or **+ Add** button
2. Select **Type**: `CNAME`
3. **Host**: Enter `www`
4. **Data** or **Points to**: Enter `HenriquesPontes.github.io`
5. **TTL**: Enter `3600` (or leave default)
6. Click **Save** or **Add**

### Step 7: Verify DNS Records
Your DNS settings should now show:
- ✅ 4 A records with Host `@` pointing to GitHub Pages IPs (185.199.108.x, 185.199.109.x, 185.199.110.x, 185.199.111.x)
- ✅ (Optional) 1 CNAME record with Host `www` pointing to `HenriquesPontes.github.io`
- ✅ No old Squarespace A records (198.185.159.x or 198.49.23.x)

### Step 8: Save and Exit
1. Review all records are correct
2. Click **Save** or **Done** if there's a save button
3. Close the DNS settings page

---

## Part 2: Configure GitHub Pages

### Step 9: Go to GitHub Repository Settings
1. Go to: https://github.com/HenriquesPontes/forrovivo-landing
2. Click **Settings** (top menu, right side)
3. In the left sidebar, click **Pages** (under Code and automation)

### Step 10: Configure Custom Domain
1. Scroll down to **Custom domain** section
2. In the text field, enter: `forrovivo.com`
3. Click **Save**
4. Wait a few seconds for GitHub to verify

### Step 11: Enable HTTPS
1. After domain is entered, you should see **Enforce HTTPS** checkbox
2. Check the box: **Enforce HTTPS**
3. This may take a few minutes to become available (after DNS propagates)

---

## Part 3: Verify and Wait

### Step 12: Check DNS Propagation
Wait 15-30 minutes, then check DNS:

**On Mac/Linux Terminal:**
```bash
dig forrovivo.com +short
```

**Expected output (GitHub Pages IPs):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**If you still see Squarespace IPs (198.185.159.x or 198.49.23.x):**
- Wait longer (DNS can take 1-48 hours, usually 1-2 hours)
- Double-check Squarespace DNS settings are saved correctly
- Try clearing your DNS cache

### Step 13: Verify GitHub Pages Status
1. Go back to: https://github.com/HenriquesPontes/forrovivo-landing/settings/pages
2. Check the **Custom domain** section:
   - ✅ Should show `forrovivo.com`
   - ✅ Should show a green checkmark (✓) when verified
   - ✅ **Enforce HTTPS** should be checked and enabled

### Step 14: Test Your Site
1. Wait for DNS to fully propagate (check with `dig` command)
2. Visit: https://forrovivo.com
3. Your ForroVivo landing page should load!

---

## Part 4: Troubleshooting

### Problem: DNS still shows Squarespace IPs after 2 hours
**Solution:**
1. Double-check Squarespace DNS settings are saved
2. Verify all 4 A records are correct
3. Try clearing DNS cache on your computer:
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```
4. Wait longer (can take up to 48 hours)

### Problem: GitHub shows "DNS not verified"
**Solution:**
1. Ensure DNS has propagated (check with `dig` command)
2. Make sure CNAME file exists in repository (already done ✅)
3. Wait 10-15 minutes after DNS propagates
4. Refresh GitHub Pages settings page

### Problem: Site shows 404 or "Page not found"
**Solution:**
1. Verify GitHub Pages is enabled: https://HenriquesPontes.github.io/forrovivo-landing
2. Check GitHub Actions workflow completed successfully
3. Verify CNAME file is in `public/` folder (already done ✅)

### Problem: HTTPS not working
**Solution:**
1. Wait for DNS to fully propagate
2. Wait for GitHub to verify domain (green checkmark)
3. Enable "Enforce HTTPS" in GitHub Pages settings
4. Can take up to 24 hours for HTTPS to activate

---

## Quick Reference: DNS Records Summary

### Required A Records (for forrovivo.com):
```
Type: A
Host: @
Points to: 185.199.108.153
TTL: 3600

Type: A
Host: @
Points to: 185.199.109.153
TTL: 3600

Type: A
Host: @
Points to: 185.199.110.153
TTL: 3600

Type: A
Host: @
Points to: 185.199.111.153
TTL: 3600
```

### Optional CNAME Record (for www.forrovivo.com):
```
Type: CNAME
Host: www
Points to: HenriquesPontes.github.io
TTL: 3600
```

---

## Success Checklist

- [ ] Logged into Squarespace
- [ ] Accessed DNS Settings for forrovivo.com
- [ ] Deleted old Squarespace A records
- [ ] Added 4 GitHub Pages A records
- [ ] (Optional) Added www CNAME record
- [ ] Saved DNS settings in Squarespace
- [ ] Configured custom domain in GitHub Pages settings
- [ ] Enabled HTTPS in GitHub Pages
- [ ] Verified DNS propagation (dig command shows GitHub IPs)
- [ ] GitHub shows green checkmark for domain verification
- [ ] Site loads at https://forrovivo.com

---

## Timeline Expectations

- **DNS Update**: Immediate in Squarespace (saved instantly)
- **DNS Propagation**: 1-48 hours (usually 1-2 hours)
- **GitHub Verification**: 10-15 minutes after DNS propagates
- **HTTPS Activation**: Up to 24 hours after domain verification

---

## Support Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Custom Domain Setup**: https://docs.github.com/en/pages/configuring-a-custom-domain
- **Squarespace Help**: https://support.squarespace.com/hc/en-us/articles/205812378

---

**Last Updated**: Current date
**Domain**: forrovivo.com
**GitHub Repository**: HenriquesPontes/forrovivo-landing

