# ⚡ Quick Start Guide

## Your Blog is Dynamic! 🎉

Your blog posts can now be created, edited, and deleted through a web interface—**no code required!**

---

## 🚀 Get Started in 5 Minutes

### Step 1: Update Configuration (2 minutes)

Open `/admin/config.yml` and replace these two placeholders:

```yaml
# Line 5-6: Your GitHub repository
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME  # e.g., shafikul/shafikul-gitblock
  branch: main

# Line 26-27: Your GitHub Pages URL
site_url: https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
display_url: https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
```

### Step 2: Choose Authentication (1 minute)

**Recommended: Netlify (Free & Easy)**

1. Go to https://app.netlify.com/signup (sign up free)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Click "Deploy site" (use default settings)
5. Go to: Site settings → Identity → Enable Identity
6. Go to: Identity → Services → Git Gateway → Enable Git Gateway
7. Done! Your CMS works at `https://YOUR-SITE.netlify.app/admin/`

**Alternative: GitHub Pages Only**
- Your CMS will work at `https://YOUR_USERNAME.github.io/YOUR_REPO/admin/`
- You'll authenticate directly with GitHub (no extra setup needed)

### Step 3: Deploy (1 minute)

```bash
git add .
git commit -m "Configure dynamic blog with Decap CMS"
git push origin main
```

### Step 4: Enable GitHub Pages (1 minute)

1. Go to your GitHub repository
2. Settings → Pages
3. Source: Deploy from branch `main` → `/ (root)`
4. Save and wait 1-2 minutes

### Step 5: Access Your CMS!

**Netlify:** `https://YOUR-SITE.netlify.app/admin/`  
**GitHub Pages:** `https://YOUR_USERNAME.github.io/YOUR_REPO/admin/`

1. Click "Login with GitHub"
2. Authorize the application
3. Start creating posts! 🎉

---

## 📝 How to Create Your First Post

1. Visit `/admin/` on your site
2. Go to **"Collections"** → **"Blog Posts"**
3. Click **"New Post"**
4. Fill in:
   - **Title**: "My First Dynamic Post"
   - **Date**: Today's date
   - **Author**: Your name
   - **Tags**: tutorial, getting-started
   - **Excerpt**: "This is my first post using the CMS!"
   - **Body**: Write your content in Markdown
5. Click **"Save"** (saves as draft)
6. Click **"Publish"** → **"Publish now"**
7. Wait 1-2 minutes for GitHub Pages to rebuild
8. Visit your blog—your post is live! 🚀

---

## 🎯 What You Can Do

### Through the CMS Interface (`/admin/`)

✅ Create new blog posts  
✅ Edit existing posts  
✅ Delete posts  
✅ Upload images  
✅ Organize with categories & tags  
✅ Add featured images  
✅ Write in Markdown with live preview  
✅ Draft → Review → Publish workflow  
✅ Edit site settings (title, description, social links)  
✅ Update About page and other pages  

**All without touching code!** 🙌

---

## 🛠️ Local Development

Test locally before deploying:

```bash
# Install dependencies (one-time)
bundle install
npm install

# Option 1: Run just the blog
bundle exec jekyll serve

# Option 2: Run blog + CMS (with local editing)
npm run dev-cms

# Visit:
# Blog: http://localhost:4000
# CMS:  http://localhost:4000/admin
```

---

## 📚 Need More Help?

- **Detailed Setup**: See [CMS_SETUP_GUIDE.md](./CMS_SETUP_GUIDE.md)
- **Full README**: See [README.md](./README.md)
- **Decap CMS Docs**: https://decapcms.org/docs/
- **Jekyll Docs**: https://jekyllrb.com/docs/

---

## 🎨 Editorial Workflow

Your CMS has a professional publishing workflow:

```
Draft → In Review → Ready → Published
```

1. Create a post → Saved as **Draft**
2. Review your work → Mark as **In Review**
3. Approve it → Mark as **Ready**
4. Publish → Post goes **Live**

Or skip the workflow and publish directly!

---

## 💡 Pro Tips

1. **Always add excerpts** - They're used for SEO and post previews
2. **Use featured images** - Makes your blog more visually appealing
3. **Organize with categories** - Use categories for main topics (Tutorial, News, Review)
4. **Tag for discovery** - Use tags for specific topics (JavaScript, React, CSS)
5. **Preview before publishing** - Use the draft feature to review first
6. **Upload images through CMS** - They're automatically optimized and organized

---

## 🚨 Troubleshooting

**CMS doesn't load?**
- Check `/admin/config.yml` has correct repo name
- Open browser console (F12) and check for errors

**Can't login?**
- Make sure you've set up authentication (Netlify Identity or GitHub OAuth)
- Clear browser cache and try again

**Posts don't appear after publishing?**
- Wait 1-3 minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for build status
- Verify post has `published: true` in frontmatter

**Images won't upload?**
- Check that `assets/images/uploads/` folder exists
- Verify you have write permissions on GitHub repo

---

## ✅ You're All Set!

Your blog is now **fully dynamic**. You can:
- ✍️ Write posts from anywhere (just need a browser)
- 📱 Manage content on mobile or desktop
- 🚀 Publish instantly
- 📸 Upload images easily
- 🎨 Customize everything through the CMS

**Happy blogging! 🎉**

---

*Questions? Issues? Check the [full setup guide](./CMS_SETUP_GUIDE.md) or open an issue on GitHub.*
