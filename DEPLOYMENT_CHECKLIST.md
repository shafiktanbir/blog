# 📋 Deployment Checklist

Use this checklist to ensure your dynamic blog is properly configured and deployed.

---

## ✅ Pre-Deployment

### 1. Configuration Files

- [ ] Updated `/admin/config.yml` with your GitHub username/repo
  ```yaml
  repo: YOUR_USERNAME/YOUR_REPO  # Line 5
  ```

- [ ] Updated site URLs in `/admin/config.yml`
  ```yaml
  site_url: https://YOUR_USERNAME.github.io/YOUR_REPO  # Line 26
  display_url: https://YOUR_USERNAME.github.io/YOUR_REPO  # Line 27
  ```

- [ ] Updated `_config.yml` with your information
  - [ ] Site title
  - [ ] Description
  - [ ] Author name
  - [ ] Base URL (if using project pages)
  - [ ] Social media links

- [ ] Created `.gitignore` file (already provided)

### 2. Content

- [ ] At least one post exists in `_posts/` folder
- [ ] Post follows naming convention: `YYYY-MM-DD-post-title.md`
- [ ] Post has required frontmatter (title, date, author)
- [ ] Updated `about.md` with your information

### 3. Dependencies

- [ ] `Gemfile` exists with required gems
- [ ] `package.json` exists (for local CMS development)
- [ ] Images folder created: `assets/images/uploads/`

---

## ✅ GitHub Setup

### 1. Repository

- [ ] Code is pushed to GitHub
  ```bash
  git add .
  git commit -m "Configure dynamic blog"
  git push origin main
  ```

- [ ] Repository is public (required for GitHub Pages free tier)
- [ ] Repository name is appropriate for your URL

### 2. GitHub Pages

- [ ] Go to: Repository → Settings → Pages
- [ ] Source: Deploy from branch `main`
- [ ] Folder: `/ (root)`
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enforced (recommended)

### 3. Verify Deployment

- [ ] Wait 2-3 minutes for initial build
- [ ] Check GitHub Actions tab for build status
- [ ] Visit your site URL
- [ ] Homepage loads correctly
- [ ] Sample post is visible

---

## ✅ Authentication Setup

### Option A: Netlify (Recommended)

- [ ] Signed up for Netlify (free): https://app.netlify.com/signup
- [ ] Imported GitHub repository to Netlify
- [ ] Site deployed successfully
- [ ] Enabled Netlify Identity:
  - [ ] Site Settings → Identity → Enable Identity
- [ ] Enabled Git Gateway:
  - [ ] Identity → Services → Git Gateway → Enable Git Gateway
- [ ] Invited yourself as a user (if using invite-only)
- [ ] Updated `/admin/config.yml` with git-gateway backend (optional)
- [ ] Tested login at `https://YOUR-SITE.netlify.app/admin/`

### Option B: GitHub OAuth (GitHub Pages Only)

- [ ] Created GitHub OAuth App:
  - [ ] GitHub Settings → Developer settings → OAuth Apps
  - [ ] Filled in application details
  - [ ] Noted Client ID and Client Secret
- [ ] Configured OAuth provider
- [ ] Backend in `/admin/config.yml` set to `github`
- [ ] Tested login at `https://YOUR_USERNAME.github.io/YOUR_REPO/admin/`

---

## ✅ CMS Testing

### 1. Access CMS

- [ ] Can access `/admin/` URL
- [ ] CMS interface loads without errors
- [ ] Can login successfully
- [ ] Dashboard displays correctly

### 2. Collections

- [ ] "Blog Posts" collection appears
- [ ] Existing posts are listed
- [ ] Can click and view a post
- [ ] "Pages" collection appears (if configured)
- [ ] "Site Settings" collection appears (if configured)

### 3. Create Test Post

- [ ] Clicked "New Post"
- [ ] Editor loads correctly
- [ ] All fields are present:
  - [ ] Title
  - [ ] Date
  - [ ] Author
  - [ ] Categories
  - [ ] Tags
  - [ ] Featured Image
  - [ ] Excerpt
  - [ ] Published toggle
  - [ ] Body editor
- [ ] Preview works
- [ ] Can save as draft
- [ ] Can publish

### 4. Verify Post Appears

- [ ] Post saved successfully
- [ ] Post published successfully
- [ ] Waited 2-3 minutes for rebuild
- [ ] Post appears on homepage
- [ ] Post page loads correctly
- [ ] Image displays (if uploaded)
- [ ] Excerpt shows in preview

### 5. Edit Existing Post

- [ ] Can open existing post
- [ ] Can make changes
- [ ] Changes save successfully
- [ ] Changes appear on site after rebuild

### 6. Media Management

- [ ] Can upload images
- [ ] Images save to `assets/images/uploads/`
- [ ] Uploaded images display correctly
- [ ] Image paths are correct

---

## ✅ Local Development (Optional)

### 1. Jekyll

- [ ] Installed Ruby and Bundler
- [ ] Ran `bundle install`
- [ ] Can run `bundle exec jekyll serve`
- [ ] Site accessible at `http://localhost:4000`
- [ ] Changes hot-reload correctly

### 2. CMS Proxy

- [ ] Installed Node dependencies: `npm install`
- [ ] Can run `npx decap-server`
- [ ] Can access CMS at `http://localhost:4000/admin/`
- [ ] Can create/edit posts locally
- [ ] Changes commit to local repo

---

## ✅ Features Verification

### Homepage

- [ ] Site title displays correctly
- [ ] Description shows
- [ ] Recent posts listed
- [ ] Post excerpts display
- [ ] Featured images show (if configured)
- [ ] Pagination works (if more than 10 posts)

### Blog Posts

- [ ] Individual posts load
- [ ] Title, date, author display
- [ ] Content renders correctly
- [ ] Code blocks format properly
- [ ] Images display
- [ ] Categories and tags show
- [ ] Navigation works (prev/next posts)

### Navigation

- [ ] Header menu works
- [ ] Footer links work
- [ ] About page loads
- [ ] Search page works (if configured)
- [ ] All internal links function

### Search

- [ ] Search box displays
- [ ] Can enter search terms
- [ ] Results display correctly
- [ ] Results link to correct posts

### Mobile Responsiveness

- [ ] Site displays correctly on mobile
- [ ] Menu is accessible
- [ ] Posts are readable
- [ ] Images scale properly
- [ ] CMS accessible on mobile (for quick edits)

---

## ✅ SEO & Performance

### SEO

- [ ] `jekyll-seo-tag` plugin installed
- [ ] Meta tags appear in page source
- [ ] Sitemap generated at `/sitemap.xml`
- [ ] RSS feed available at `/feed.xml`
- [ ] Open Graph tags present (for social sharing)

### Performance

- [ ] Pages load quickly
- [ ] Images optimized (< 500KB each)
- [ ] No broken links
- [ ] No console errors
- [ ] Lighthouse score > 90 (optional)

---

## ✅ Documentation

- [ ] Read `README.md`
- [ ] Read `QUICK_START.md`
- [ ] Read `CMS_SETUP_GUIDE.md`
- [ ] Bookmarked `/admin/` URL
- [ ] Saved login credentials securely

---

## ✅ Security

- [ ] OAuth secrets not committed to repo
- [ ] `.gitignore` configured correctly
- [ ] Branch protection enabled (optional)
- [ ] Only authorized users have repo access
- [ ] Netlify Identity set to invite-only (if using Netlify)

---

## ✅ Backup

- [ ] Repository backed up (GitHub handles this)
- [ ] Important posts copied locally (optional)
- [ ] Media files backed up (optional)
- [ ] Configuration files documented

---

## ✅ Final Steps

- [ ] Deleted test posts (if any)
- [ ] Announced blog launch
- [ ] Shared blog URL
- [ ] Created first real post
- [ ] Set up regular posting schedule

---

## 🎉 You're Live!

Once all items are checked, your dynamic blog is fully operational!

### What You Can Do Now

✅ Create posts from anywhere  
✅ Publish instantly  
✅ Manage content without code  
✅ Upload images easily  
✅ Update site settings via CMS  

---

## 📚 Next Steps

1. **Create a content calendar**: Plan your posts
2. **Write quality content**: Focus on value for readers
3. **Promote your blog**: Share on social media
4. **Engage with readers**: Respond to comments/feedback
5. **Analyze traffic**: Set up Google Analytics (optional)
6. **Regular updates**: Keep content fresh

---

## 🐛 If Something's Not Working

1. Check this checklist again
2. Review error messages in:
   - Browser console (F12)
   - GitHub Actions build logs
   - Netlify deploy logs (if using Netlify)
3. Consult the setup guides:
   - `CMS_SETUP_GUIDE.md`
   - `QUICK_START.md`
4. Check documentation:
   - Decap CMS: https://decapcms.org/docs/
   - Jekyll: https://jekyllrb.com/docs/

---

## 📞 Support Resources

- **Decap CMS Community**: https://github.com/decaporg/decap-cms/discussions
- **Jekyll Community**: https://talk.jekyllrb.com/
- **GitHub Pages Help**: https://docs.github.com/en/pages
- **Netlify Support**: https://docs.netlify.com/

---

**Congratulations on launching your dynamic blog! 🚀**

*Last updated: January 22, 2026*
