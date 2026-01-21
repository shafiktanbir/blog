// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchNoResults = document.getElementById('search-no-results');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput && searchResults) {
        // Load all posts data for search
        let postsData = [];
        
        // Fetch posts data from the site
        fetch('/feed.xml')
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
                // Fallback: try to get posts from page if available
                const postCards = document.querySelectorAll('.post-card');
                postCards.forEach(card => {
                    const titleEl = card.querySelector('.post-card-title a');
                    const excerptEl = card.querySelector('.post-card-excerpt');
                    if (titleEl) {
                        postsData.push({
                            title: titleEl.textContent,
                            link: titleEl.href,
                            description: excerptEl?.textContent || ''
                        });
                    }
                });
            });
        
        function performSearch(query) {
            if (!query.trim()) {
                searchResults.innerHTML = '';
                searchNoResults.style.display = 'none';
                return;
            }
            
            const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
            const results = postsData.filter(post => {
                const searchableText = (post.title + ' ' + post.description).toLowerCase();
                return searchTerms.every(term => searchableText.includes(term));
            });
            
            if (results.length === 0) {
                searchResults.innerHTML = '';
                searchNoResults.style.display = 'block';
            } else {
                searchNoResults.style.display = 'none';
                searchResults.innerHTML = results.map(post => `
                    <article class="post-card">
                        <div class="post-card-content">
                            <header class="post-card-header">
                                <h2 class="post-card-title">
                                    <a href="${post.link}">${post.title}</a>
                                </h2>
                            </header>
                            <div class="post-card-excerpt">
                                ${post.description || ''}
                            </div>
                            <footer class="post-card-footer">
                                <a href="${post.link}" class="read-more">Read More →</a>
                            </footer>
                        </div>
                    </article>
                `).join('');
            }
        }
        
        // Search on input
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(this.value);
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
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Reading time calculation (if not provided by Jekyll plugin)
    const postContent = document.querySelector('.post-content');
    if (postContent && !document.querySelector('.reading-time')) {
        const words = postContent.textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // 200 words per minute
        const readingTimeEl = document.createElement('span');
        readingTimeEl.className = 'reading-time';
        readingTimeEl.textContent = `${readingTime} min read`;
        const postMeta = document.querySelector('.post-meta');
        if (postMeta) {
            postMeta.appendChild(readingTimeEl);
        }
    }
});
