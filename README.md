# 🚀 Dynamic Jekyll Blog with Decap CMS

A modern, fully dynamic blog built with Jekyll and Decap CMS, designed to be hosted on GitHub Pages. **Manage all your blog content through a beautiful web interface—no code required!**

> **👉 New to this project? Start with [START_HERE.md](START_HERE.md) for a complete overview!**

## ✨ Features

- ✅ **Dynamic Content Management**: Create, edit, delete posts via web interface
- ✅ **Zero Code Required**: Manage everything through `/admin/` dashboard
- ✅ **Editorial Workflow**: Draft → Review → Publish workflow
- ✅ **Rich Editor**: Markdown editor with live preview
- ✅ **Media Management**: Upload and manage images directly
- ✅ **SEO Optimized**: Featured images, excerpts, meta tags
- ✅ **Categories & Tags**: Organize and categorize content
- ✅ **GitHub Pages Ready**: One-click deployment
- ✅ **Responsive Design**: Beautiful on all devices
- ✅ **Search Functionality**: Built-in search for posts

## Quick Start

### 1. Clone or Fork This Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

Make sure you have Ruby and Bundler installed:

```bash
# Install Ruby (if not already installed)
# On macOS: brew install ruby
# On Ubuntu: sudo apt-get install ruby-full
# On Windows: Use RubyInstaller

# Install Bundler
gem install bundler

# Install Jekyll and dependencies
bundle install
```

### 3. Configure Your Site

Edit `_config.yml` and update the following:

```yaml
title: "Your Blog Title"
description: "Your blog description"
author: "Your Name"
url: "https://yourusername.github.io"  # Your GitHub Pages URL
baseurl: ""  # Leave empty for user pages, or "/repo-name" for project pages
```

### 4. Run Locally

**Option A: Just the blog**
```bash
bundle exec jekyll serve
```

**Option B: Blog + CMS (with local editing)**
```bash
# Install Node dependencies first
npm install

# Run both Jekyll and CMS proxy
npm run dev-cms
```

Visit `http://localhost:4000` to see your blog.  
Visit `http://localhost:4000/admin` to access the CMS locally.

### 5. Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select the branch (usually `main` or `master`)
5. Select the folder (usually `/ (root)`)
6. Your site will be available at `https://yourusername.github.io/repo-name`

## 🎯 Setting Up Dynamic Post Management

Your blog is **already configured** with Decap CMS! You just need to complete a few setup steps:

### Quick Setup (3 Minutes)

1. **Update Repository Info** in `/admin/config.yml`:
   ```yaml
   backend:
     repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME  # e.g., shafikul/shafikul-gitblock
   ```

2. **Choose Authentication Method**:
   - **Option A (Easiest)**: Use Netlify (free) - See full guide below
   - **Option B**: GitHub OAuth for GitHub Pages

3. **Deploy to GitHub Pages**:
   ```bash
   git push origin main
   ```
   Then enable GitHub Pages in repo settings.

4. **Access Your CMS**:
   Visit `https://YOUR_USERNAME.github.io/YOUR_REPO/admin/`

### 📖 Complete Setup Guide

**👉 For detailed step-by-step instructions, see [CMS_SETUP_GUIDE.md](./CMS_SETUP_GUIDE.md)**

The guide covers:
- Authentication setup (Netlify & GitHub OAuth)
- Local development with CMS
- Creating and managing posts
- Editorial workflow
- Troubleshooting
- Advanced customization

## ✍️ Managing Your Blog Posts

### Method 1: Through Web Interface (Recommended)

1. Visit `https://YOUR_SITE/admin/`
2. Login with GitHub
3. Click **"New Post"** under Blog Posts
4. Fill in the fields:
   - **Title**: Your post title
   - **Date**: Publication date
   - **Author**: Your name
   - **Categories**: Organize posts (e.g., Tutorial, News)
   - **Tags**: Keywords (e.g., JavaScript, React, Tutorial)
   - **Featured Image**: Upload a cover image
   - **Excerpt**: Short description for SEO
   - **Body**: Write content in Markdown
5. Click **"Save"** → **"Publish"**

**That's it! No code, no terminal, no git commands! 🎉**

### Method 2: Manually (For Advanced Users)

Create a new file in `_posts/` with format: `YYYY-MM-DD-post-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15
author: Your Name
categories: [Tutorial, Web Development]
tags: [JavaScript, React]
image: /assets/images/post-image.jpg
excerpt: "A brief description of your post"
published: true
---

Your post content here using Markdown.

## Markdown Formatting

- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Images, code blocks, etc.
```

## Customization

### Changing Colors

Edit `_sass/main.scss` and modify the variables at the top:

```scss
$primary-color: #2563eb;    // Main brand color
$secondary-color: #1e40af;  // Secondary color
$text-color: #1f2937;       // Text color
// ... etc
```

### Adding Social Links

Edit `_config.yml`:

```yaml
social:
  github: "https://github.com/yourusername"
  twitter: "https://twitter.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
```

### Modifying Layouts

- `_layouts/default.html` - Base layout
- `_layouts/home.html` - Homepage layout
- `_layouts/post.html` - Individual post layout

### Adding Pages

Create a new `.md` or `.html` file in the root directory:

```markdown
---
layout: default
title: My Page
---

# My Page Content
```

## Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _posts/              # Blog posts (markdown files)
├── _layouts/            # Page layouts
├── _includes/           # Reusable components
├── _sass/               # SCSS styles
├── assets/              # Static assets (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
├── admin/               # Decap CMS configuration
│   ├── index.html
│   └── config.yml
├── index.html           # Homepage
├── about.md             # About page
├── search.html          # Search page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Troubleshooting

### Jekyll Build Errors

If you encounter build errors:

```bash
# Clear Jekyll cache
rm -rf .jekyll-cache _site

# Rebuild
bundle exec jekyll build
```

### CMS Not Loading

1. Check that `admin/index.html` exists
2. Verify `admin/config.yml` has correct repository name
3. Ensure GitHub OAuth is properly configured
4. Check browser console for errors

### Search Not Working

The search functionality uses the RSS feed. Make sure:
- `jekyll-feed` plugin is installed
- `feed.xml` is accessible at `/feed.xml`
- Posts have proper front matter

## Dependencies

- Jekyll 4.3+
- jekyll-feed (RSS feed)
- jekyll-sitemap (Sitemap generation)
- jekyll-seo-tag (SEO optimization)
- Decap CMS (Content management)

## License

Feel free to use this blog template for your own projects!

## Support

If you encounter any issues or have questions:
1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Check the [Decap CMS documentation](https://decapcms.org/docs/)
3. Open an issue on GitHub

## Credits

- Built with [Jekyll](https://jekyllrb.com/)
- Content management by [Decap CMS](https://decapcms.org/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

Happy blogging! 🚀
