# Dynamic Blog Post Management - Setup Guide

## 🎯 Overview

Your blog is now configured with **Decap CMS** (formerly Netlify CMS), allowing you to create, edit, and delete blog posts through a web-based interface without touching code!

## 📋 Current Status

✅ **Already Configured:**
- Decap CMS installed and configured
- Admin interface available at `/admin/`
- Editorial workflow (Draft → Review → Publish)
- Rich markdown editor with live preview
- Image upload support
- Categories and tags management
- SEO fields (excerpt, featured images)

⚠️ **Needs Configuration:**
- GitHub repository details
- Authentication setup
- GitHub Pages deployment

---

## 🚀 Setup Instructions

### Step 1: Update Repository Information

Edit `/admin/config.yml` and replace these placeholders:

```yaml
# Line 5-6: Update with your actual GitHub details
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME  # e.g., shafikul/shafikul-gitblock
  branch: main

# Line 26-27: Update with your GitHub Pages URL
site_url: https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
display_url: https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
```

### Step 2: Enable GitHub Authentication

You have **two options** for authentication:

#### Option A: Using Netlify (Recommended - Easiest)

1. **Sign up for Netlify** (free): https://app.netlify.com/signup
2. **Import your GitHub repository**
   - New site from Git → GitHub → Select your repo
3. **Enable Identity Service**
   - Site Settings → Identity → Enable Identity
4. **Enable Git Gateway**
   - Identity → Services → Git Gateway → Enable
5. **Update your config** (already done):
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```
6. **Add Netlify Identity Widget** to `/admin/index.html`:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```

#### Option B: Using OAuth with GitHub Pages

1. **Create GitHub OAuth App**
   - Go to: https://github.com/settings/developers
   - New OAuth App
   - Application name: `My Blog CMS`
   - Homepage URL: `https://YOUR_USERNAME.github.io/YOUR_REPO`
   - Authorization callback URL: `https://api.netlify.com/auth/done`

2. **Use Netlify as OAuth Provider** (free)
   - Sign up at Netlify
   - Add OAuth provider with your GitHub app credentials

3. **Keep current backend config**:
   ```yaml
   backend:
     name: github
     repo: YOUR_USERNAME/YOUR_REPO
     branch: main
   ```

### Step 3: Deploy to GitHub Pages

1. **Push all changes to GitHub:**
   ```bash
   git add .
   git commit -m "Configure Decap CMS for dynamic post management"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch `main` → `/ (root)`
   - Save

3. **Wait for deployment** (usually 1-3 minutes)

### Step 4: Access Your CMS

1. Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO/admin/`
2. Click "Login with GitHub"
3. Authorize the application
4. Start creating posts! 🎉

---

## 📝 How to Use the CMS

### Creating a New Post

1. Go to `/admin/` → Collections → Blog Posts
2. Click **"New Post"**
3. Fill in the fields:
   - **Title**: Your post title
   - **Date**: Publication date
   - **Author**: Your name (defaults to Shafikul)
   - **Categories**: Organize posts (e.g., Tutorial, Review)
   - **Tags**: Keywords for search (e.g., JavaScript, React)
   - **Featured Image**: Upload a main image
   - **Excerpt**: Short description for previews/SEO
   - **Published**: Toggle to publish/unpublish
   - **Body**: Write your content in Markdown
4. Click **"Save"** → Status changes to "Draft"
5. Click **"Set status"** → **"Ready"** → **"Publish"**

### Editing an Existing Post

1. Go to `/admin/` → Collections → Blog Posts
2. Click on the post you want to edit
3. Make your changes
4. Click **"Save"**
5. Changes are immediately published

### Deleting a Post

1. Go to `/admin/` → Collections → Blog Posts
2. Click on the post
3. Click the **three dots menu** → **"Delete"**
4. Confirm deletion

### Editorial Workflow

```
Draft → In Review → Ready → Published
```

- **Draft**: Initial creation, not visible on site
- **In Review**: Ready for review
- **Ready**: Approved, ready to publish
- **Published**: Live on your blog

---

## 🔧 Local Development

To test the CMS locally before deploying:

### Method 1: Using Decap Proxy Server

```bash
# Install the proxy server
npx decap-server

# In another terminal, serve your Jekyll site
bundle exec jekyll serve

# Access CMS at: http://localhost:4000/admin/
```

Update `/admin/config.yml` temporarily:
```yaml
backend:
  name: proxy
  proxy_url: http://localhost:8081/api/v1
```

### Method 2: Using Test Backend

Update `/admin/config.yml` temporarily:
```yaml
backend:
  name: test-repo
```

This creates a mock backend for testing (no actual commits).

---

## 📁 CMS Features

### Blog Posts Management
- ✅ Create, edit, delete posts
- ✅ Rich markdown editor with preview
- ✅ Image uploads
- ✅ Categories and tags
- ✅ Draft/publish workflow
- ✅ SEO fields (excerpt, featured image)
- ✅ Filter posts by status/year/author

### Pages Management
- ✅ Edit About page
- ✅ Edit Home page
- ✅ Easy content updates

### Site Settings
- ✅ Update site title & description
- ✅ Change author information
- ✅ Update social media links
- ✅ All from the CMS interface!

---

## 🎨 Customizing the CMS

### Adding New Fields to Posts

Edit `/admin/config.yml`:
```yaml
fields:
  # Add a new field
  - {label: "Reading Time", name: "reading_time", widget: "number", required: false}
```

### Adding New Collections

```yaml
collections:
  - name: "tutorials"
    label: "Tutorials"
    folder: "_tutorials"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
```

---

## 🔒 Security Best Practices

1. **Never commit OAuth secrets** to your repository
2. **Use Netlify Identity** for production (secure, managed)
3. **Enable branch protection** on main branch
4. **Review changes** before publishing (use editorial workflow)
5. **Backup your posts** regularly

---

## 🐛 Troubleshooting

### CMS doesn't load
- Check browser console for errors
- Verify `/admin/config.yml` syntax (use YAML validator)
- Ensure Decap CMS script is loaded

### Authentication fails
- Verify GitHub OAuth app settings
- Check callback URL matches exactly
- Clear browser cache and try again

### Posts don't appear after publishing
- Check GitHub Actions for build errors
- Wait 1-3 minutes for GitHub Pages to rebuild
- Verify post has `published: true` and correct date format

### Images don't upload
- Check `media_folder` path exists
- Verify write permissions on GitHub repo
- Consider using external image service (Cloudinary, Uploadcare)

---

## 📚 Additional Resources

- **Decap CMS Documentation**: https://decapcms.org/docs/
- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **GitHub Pages Guide**: https://docs.github.com/en/pages
- **Markdown Guide**: https://www.markdownguide.org/

---

## 🎯 Quick Reference

| Action | Path |
|--------|------|
| Access CMS | `https://YOUR_SITE/admin/` |
| Create Post | CMS → Blog Posts → New Post |
| Edit Settings | CMS → Site Settings → Configuration |
| Upload Images | In post editor → Image field → Choose file |
| Publish Draft | Open draft → Set status → Publish |
| Local Testing | `npx decap-server` |

---

## 💡 Pro Tips

1. **Use excerpts** for better SEO and social media sharing
2. **Add featured images** to make posts more engaging
3. **Use categories** for organization, **tags** for discoverability
4. **Write in drafts first**, review, then publish
5. **Preview your posts** before publishing
6. **Use descriptive filenames** for images
7. **Keep frontmatter consistent** across posts

---

**Your blog is now fully dynamic! 🚀**

You can manage all content through the web interface at `/admin/` without ever touching code again!
