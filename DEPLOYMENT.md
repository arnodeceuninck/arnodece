# GitHub Pages Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Initialize Git Repository (if not already done)
```powershell
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `arnodece`
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 3. Link and Push to GitHub
```powershell
git remote add origin https://github.com/arnodeceuninck/arnodece.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 5. Access Your Site
Your site will be live at:
```
https://arnodeceuninck.github.io/arnodece/
```

⏱️ **Note**: It may take 1-2 minutes for the site to deploy initially.

## 🔄 Making Updates

When you want to update your website:

```powershell
# Make your changes to the files
# Then commit and push:

git add .
git commit -m "Update portfolio content"
git push
```

GitHub Pages will automatically rebuild and deploy your changes within 1-2 minutes.

## 🎨 Testing Locally Before Deploying

### Option 1: Simple File Open
- Just double-click `index.html` to open in your browser
- ⚠️ Some features may not work due to browser security restrictions

### Option 2: Local Web Server (Recommended)

**Using Python:**
```powershell
python -m http.server 8000
# Visit: http://localhost:8000
```

**Using Node.js:**
```powershell
npx http-server
# Visit: http://localhost:8080
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## 🌐 Custom Domain (Optional)

To use a custom domain like `arnodece.com`:

1. Buy a domain from a registrar (e.g., Namecheap, Google Domains)
2. In your repository, go to Settings → Pages
3. Under "Custom domain", enter your domain
4. Click Save
5. In your domain registrar's DNS settings, add these records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: arnodeceuninck.github.io
   ```

## 📊 Checking Deployment Status

1. Go to your repository
2. Click "Actions" tab
3. See the "pages build and deployment" workflow

If there's an error, click on the workflow to see details.

## ✅ Verification Checklist

After deployment, verify:
- [ ] Site loads correctly
- [ ] All navigation links work
- [ ] External links to projects open correctly
- [ ] Mobile menu works on smaller screens
- [ ] Animations and effects work smoothly
- [ ] All fonts load properly

## 🐛 Troubleshooting

### Site Not Loading
- Wait 2-3 minutes after enabling Pages
- Check Actions tab for deployment errors
- Ensure branch is set to `main` in Pages settings

### Styles Not Applying
- Make sure `styles.css` is in the root directory
- Check browser console for 404 errors
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### JavaScript Not Working
- Check browser console for errors
- Ensure `script.js` is in the root directory
- Try clearing browser cache

## 📝 Important Files

- `index.html` - Main website file
- `styles.css` - All styling
- `script.js` - Interactive features
- `.nojekyll` - Tells GitHub Pages to serve static files directly
- `README.md` - Documentation

## 🎯 Next Steps

1. Test your site thoroughly on different devices
2. Share the link with friends for feedback
3. Consider adding:
   - Google Analytics for visitor tracking
   - A blog section
   - More projects as you build them
   - Testimonials or recommendations

## 💡 Tips

- Keep your site updated with new projects
- Monitor GitHub Actions for any deployment issues
- Consider using a custom domain for a professional touch
- Add meta tags for better SEO
- Share your portfolio link on LinkedIn and other platforms

---

Need help? Check the [GitHub Pages Documentation](https://docs.github.com/en/pages)
