// ========================================
// MODERN BLOG INTERACTIONS
// Beautiful animations and smooth UX
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Navigation with Smooth Animation
    // ========================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ========================================
    // Smooth Header on Scroll
    // ========================================
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // Animate Elements on Scroll (Fade In)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe post cards for animation
    document.querySelectorAll('.post-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // ========================================
    // Search Functionality
    // ========================================
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchNoResults = document.getElementById('search-no-results');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput && searchResults) {
        let postsData = [];
        
        // Fetch posts data from feed
        fetch(`${window.location.origin}${document.querySelector('link[rel="alternate"]')?.href || '/feed.xml'}`)
            .then(response => response.text())
            .then(xml => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xml, 'text/xml');
                const items = xmlDoc.querySelectorAll('item');
                
                items.forEach(item => {
                    const title = item.querySelector('title')?.textContent || '';
                    const link = item.querySelector('link')?.textContent || '';
                    const description = item.querySelector('description')?.textContent || '';
                    const pubDate = item.querySelector('pubDate')?.textContent || '';
                    
                    postsData.push({
                        title,
                        link,
                        description,
                        date: pubDate
                    });
                });
            })
            .catch(err => {
                console.error('Error loading posts:', err);
            });
        
        function performSearch(query) {
            if (!query.trim()) {
                searchResults.innerHTML = '';
                if (searchNoResults) searchNoResults.style.display = 'none';
                return;
            }
            
            const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
            const results = postsData.filter(post => {
                const searchableText = (post.title + ' ' + post.description).toLowerCase();
                return searchTerms.every(term => searchableText.includes(term));
            });
            
            if (results.length === 0) {
                searchResults.innerHTML = '';
                if (searchNoResults) searchNoResults.style.display = 'block';
            } else {
                if (searchNoResults) searchNoResults.style.display = 'none';
                searchResults.innerHTML = results.map((post, index) => `
                    <article class="post-card" style="animation: fadeInUp 0.5s ease ${index * 0.1}s both;">
                        <div class="post-card-content">
                            <header class="post-card-header">
                                <h2 class="post-card-title">
                                    <a href="${post.link}">${highlightMatch(post.title, query)}</a>
                                </h2>
                            </header>
                            <div class="post-card-excerpt">
                                ${highlightMatch(post.description || '', query)}
                            </div>
                            <footer class="post-card-footer">
                                <a href="${post.link}" class="read-more">Read More</a>
                            </footer>
                        </div>
                    </article>
                `).join('');
            }
        }
        
        function highlightMatch(text, query) {
            if (!query) return text;
            const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
            let result = text;
            searchTerms.forEach(term => {
                const regex = new RegExp(`(${term})`, 'gi');
                result = result.replace(regex, '<mark style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%); padding: 2px 4px; border-radius: 4px;">$1</mark>');
            });
            return result;
        }
        
        // Search on input with debounce
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            // Show loading state
            const originalPlaceholder = this.placeholder;
            this.placeholder = 'Searching...';
            
            searchTimeout = setTimeout(() => {
                performSearch(this.value);
                this.placeholder = originalPlaceholder;
            }, 300);
        });
        
        // Search on button click
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                performSearch(searchInput.value);
            });
        }
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
    }
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // Reading Time Calculation
    // ========================================
    const postContent = document.querySelector('.post-content');
    if (postContent) {
        const text = postContent.textContent;
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // 200 words per minute
        
        // Add reading time to post meta if it doesn't exist
        if (!document.querySelector('.reading-time')) {
            const readingTimeEl = document.createElement('span');
            readingTimeEl.className = 'reading-time post-meta-item';
            readingTimeEl.innerHTML = `📖 ${readingTime} min read`;
            
            const postMeta = document.querySelector('.post-meta');
            if (postMeta) {
                postMeta.appendChild(readingTimeEl);
            }
        }
    }
    
    // ========================================
    // Copy Code Button for Code Blocks
    // ========================================
    document.querySelectorAll('pre').forEach((pre) => {
        // Create copy button
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerHTML = '📋 Copy';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 6px 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            color: white;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            z-index: 10;
        `;
        
        // Make pre position relative
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', async () => {
            const code = pre.querySelector('code')?.textContent || pre.textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                button.innerHTML = '✓ Copied!';
                button.style.background = 'rgba(16, 185, 129, 0.2)';
                button.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                
                setTimeout(() => {
                    button.innerHTML = '📋 Copy';
                    button.style.background = 'rgba(255, 255, 255, 0.1)';
                    button.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }, 2000);
            } catch (err) {
                button.innerHTML = '❌ Failed';
                setTimeout(() => {
                    button.innerHTML = '📋 Copy';
                }, 2000);
            }
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            if (button.innerHTML === '📋 Copy') {
                button.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
    });
    
    // ========================================
    // Table of Contents (Auto-generate from headings)
    // ========================================
    const postContentForToc = document.querySelector('.post-content');
    if (postContentForToc) {
        const headings = postContentForToc.querySelectorAll('h2, h3');
        
        if (headings.length >= 3) {
            const toc = document.createElement('div');
            toc.className = 'table-of-contents';
            toc.style.cssText = `
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
                border: 2px solid rgba(99, 102, 241, 0.1);
                border-radius: 12px;
                padding: 1.5rem;
                margin: 2rem 0;
            `;
            
            let tocHTML = '<h3 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.25rem;">📑 Table of Contents</h3><ul style="list-style: none; padding: 0; margin: 0;">';
            
            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;
                const level = heading.tagName === 'H2' ? 0 : 1;
                const indent = level * 20;
                
                tocHTML += `
                    <li style="margin-bottom: 0.75rem; padding-left: ${indent}px;">
                        <a href="#${id}" style="color: #6366f1; text-decoration: none; font-weight: 600; transition: all 0.2s; display: inline-block;">
                            ${heading.tagName === 'H3' ? '↳ ' : ''}${heading.textContent}
                        </a>
                    </li>
                `;
            });
            
            tocHTML += '</ul>';
            toc.innerHTML = tocHTML;
            
            // Insert TOC after first paragraph
            const firstParagraph = postContentForToc.querySelector('p');
            if (firstParagraph) {
                firstParagraph.after(toc);
            }
        }
    }
    
    // ========================================
    // Back to Top Button
    // ========================================
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.style.transform = 'scale(1.1) translateY(-2px)';
        backToTopButton.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
    });
    
    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.transform = 'scale(1) translateY(0)';
        backToTopButton.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
    });
    
    // ========================================
    // Add CSS Animation Keyframes
    // ========================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .scroll-down {
            transform: translateY(-100%);
        }
        
        .scroll-up {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
    `;
    document.head.appendChild(style);
    
    console.log('✨ Blog initialized with beautiful interactions!');
});
