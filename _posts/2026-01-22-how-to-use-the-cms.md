---
layout: post
title: "How to Use This Blog's Dynamic CMS"
date: 2026-01-22
author: Shafikul
categories:
  - Tutorial
  - Getting Started
tags:
  - cms
  - decap
  - blogging
  - tutorial
excerpt: "Learn how to create, edit, and manage blog posts using the web-based CMS interface—no coding required!"
published: true
---

Welcome! This blog is now fully dynamic, meaning you can create, edit, and delete posts through a web interface without touching any code.

## What is Dynamic Content Management?

Traditional static blogs require you to:
1. Write markdown files manually
2. Use Git commands to commit changes
3. Push to GitHub to deploy

With our **dynamic CMS**, you can:
1. Open a web interface (`/admin/`)
2. Click "New Post"
3. Fill in a form
4. Click "Publish"
5. Done! 🎉

## Accessing the CMS

Visit your blog's admin panel at:
- **URL**: `https://your-site.com/admin/`
- **Login**: Use your GitHub account
- **No installation needed**: Works in any browser

## Creating a New Post

### Step 1: Navigate to Blog Posts

1. Go to `/admin/`
2. Click on "Collections" in the left sidebar
3. Select "Blog Posts"
4. Click the "New Post" button

### Step 2: Fill in the Details

The post editor has several fields:

- **Title** (Required): Your post's headline
  - Example: "How to Learn React in 2026"
  
- **Date** (Required): Publication date
  - Defaults to today
  - You can schedule future posts
  
- **Author**: Your name
  - Defaults to "Shafikul"
  
- **Categories**: Broad topics
  - Example: Tutorial, News, Review
  - Helps organize your content
  
- **Tags**: Specific keywords
  - Example: JavaScript, React, CSS, Tutorial
  - Improves searchability
  
- **Featured Image**: Main post image
  - Upload directly through the interface
  - Used in post previews and social sharing
  
- **Excerpt**: Short description
  - Used in post previews
  - Important for SEO
  
- **Published**: Toggle to publish/unpublish
  - Turn off to hide a post without deleting it
  
- **Body**: Your main content
  - Rich markdown editor
  - Live preview on the right
  - Supports all markdown features

### Step 3: Write Your Content

The body editor supports full Markdown syntax:

```markdown
## Headings

Use # for headings (up to 6 levels)

## Lists

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

## Formatting

**Bold text** with double asterisks
*Italic text* with single asterisks
`Inline code` with backticks

## Links

[Link text](https://example.com)

## Images

![Alt text](/path/to/image.jpg)

## Code Blocks

```javascript
function hello() {
  console.log("Hello, world!");
}
```
```

### Step 4: Preview Your Post

Click the "Preview" toggle to see how your post will look. Make adjustments as needed.

### Step 5: Save and Publish

You have several options:

1. **Save as Draft**: Click "Save" (not yet published)
2. **Submit for Review**: Click "Set status" → "In Review"
3. **Mark as Ready**: Click "Set status" → "Ready"
4. **Publish**: Click "Publish" → "Publish now"

The post will be live on your blog in 1-3 minutes!

## Editing Existing Posts

1. Go to `/admin/` → "Blog Posts"
2. Click on the post you want to edit
3. Make your changes
4. Click "Save" to update

Changes are live immediately after GitHub Pages rebuilds (1-3 minutes).

## Organizing Your Content

### Using Categories

Categories are for broad topics:
- **Tutorial**: How-to guides and tutorials
- **News**: Announcements and news
- **Review**: Product or service reviews
- **Opinion**: Personal thoughts and opinions
- **Project**: Project showcases

### Using Tags

Tags are for specific topics:
- **Technology tags**: JavaScript, React, Python, Docker
- **Concept tags**: API, Database, Authentication
- **Format tags**: Video, Podcast, Interview

**Pro Tip**: Use 3-5 tags per post for best results.

## Working with Images

### Uploading Images

1. In the post editor, find the "Featured Image" field
2. Click "Choose an image"
3. Drag and drop or click to browse
4. Select your image file
5. The image is automatically uploaded

### Images in Content

To add images in your post body:

```markdown
![Image description](/assets/images/uploads/your-image.jpg)
```

Or use the image upload button in the markdown editor.

## Editorial Workflow

The CMS includes a professional publishing workflow:

### Draft Stage
- Post is being written
- Not visible to visitors
- Can be edited freely

### In Review Stage
- Post is complete and ready for review
- Still not visible
- Awaiting approval

### Ready Stage
- Post is approved
- Ready to be published
- One click away from going live

### Published Stage
- Post is live on your blog
- Visible to all visitors
- Can still be edited

## Unpublishing Posts

Don't want to delete a post but need to hide it?

1. Open the post in the editor
2. Toggle "Published" to OFF
3. Save
4. The post is hidden but not deleted

## Tips for Great Blog Posts

### 1. Write Compelling Titles
- Be specific: "How to Build a React App" > "React Tutorial"
- Use numbers: "5 Ways to Improve Performance"
- Ask questions: "What is the Best Framework in 2026?"

### 2. Always Add an Excerpt
- Keep it short (150-200 characters)
- Summarize the main point
- Make readers want to click

### 3. Use Featured Images
- Adds visual appeal
- Improves social media sharing
- Makes your blog look professional

### 4. Format for Readability
- Use headings to break up content
- Keep paragraphs short (3-4 lines)
- Use bullet points for lists
- Add code examples when relevant

### 5. Optimize for SEO
- Use relevant keywords in title
- Include keywords in first paragraph
- Add descriptive alt text to images
- Use internal links to other posts

## Keyboard Shortcuts

The CMS editor supports keyboard shortcuts:

- **Ctrl/Cmd + S**: Save draft
- **Ctrl/Cmd + P**: Toggle preview
- **Ctrl/Cmd + B**: Bold text
- **Ctrl/Cmd + I**: Italic text
- **Ctrl/Cmd + K**: Insert link

## Mobile Access

The CMS works on mobile devices:

1. Open `/admin/` on your phone/tablet
2. Login with GitHub
3. Create or edit posts
4. Publish from anywhere!

**Note**: For best experience, use a desktop browser for longer posts.

## Troubleshooting

### Post Doesn't Appear After Publishing

- **Wait 1-3 minutes**: GitHub Pages needs time to rebuild
- **Check status**: Make sure "Published" is toggled ON
- **Verify date**: Future-dated posts won't appear until that date

### Images Don't Load

- **Check path**: Make sure image path is correct
- **Try uploading again**: Sometimes uploads fail silently
- **Check file size**: Keep images under 5MB

### Can't Login to CMS

- **Clear cache**: Clear browser cache and try again
- **Check URL**: Make sure you're at `/admin/` not `/admin`
- **Verify setup**: Ensure authentication is configured

### Changes Not Saving

- **Check connection**: Make sure you're online
- **Check permissions**: Verify you have write access to the repo
- **Try another browser**: Could be a browser-specific issue

## Advanced Features

### Scheduling Posts

Set a future date to schedule a post:

1. Create your post
2. Set date to future date
3. Publish
4. Post will appear automatically on that date

### Bulk Actions

Need to update multiple posts?

1. Use the list view in "Blog Posts"
2. Edit each post individually
3. Or update directly in the `_posts/` folder via Git

### Custom Collections

Want to add more than just blog posts?

Edit `/admin/config.yml` to add new collections like:
- Portfolio projects
- Case studies
- Testimonials
- Documentation pages

## Best Practices

1. **Write drafts first**: Don't publish immediately
2. **Preview before publishing**: Check how it looks
3. **Use the workflow**: Draft → Review → Ready → Publish
4. **Backup important posts**: Keep copies of important content
5. **Regular maintenance**: Review and update old posts periodically

## Getting Help

If you need assistance:

1. Check the [Setup Guide](../CMS_SETUP_GUIDE.md)
2. Visit [Decap CMS Docs](https://decapcms.org/docs/)
3. Check [Jekyll Docs](https://jekyllrb.com/docs/)
4. Open an issue on GitHub

## Conclusion

With the dynamic CMS, managing your blog is easier than ever:

✅ No code required  
✅ Write from anywhere  
✅ Publish instantly  
✅ Professional workflow  
✅ Beautiful interface  

Start creating amazing content today! 🚀

---

**Happy blogging!** If you found this guide helpful, share it with others who might benefit from using a dynamic blog setup.
