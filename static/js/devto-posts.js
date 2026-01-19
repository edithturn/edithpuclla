// Fetch and display dev.to posts from RSS feeds
async function fetchDevToPosts(username, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    // Use CORS proxy or RSS2JSON service to fetch RSS
    const rssUrl = `https://dev.to/feed/${username}`;
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(proxyUrl);
    const data = await response.json();
    
    if (data.status === 'ok' && data.items && data.items.length > 0) {
      const posts = data.items.slice(0, 10); // Fetch up to 10 posts for scrolling
      
      let html = '<div class="devto-posts-list">';
      posts.forEach(post => {
        const pubDate = new Date(post.pubDate);
        const formattedDate = pubDate.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        });
        
        // Extract description (first 150 chars)
        const description = post.description 
          ? post.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
          : '';
        
        html += `
          <div class="devto-post-item">
            <h4><a href="${post.link}" target="_blank" rel="noopener">${post.title}</a></h4>
            ${description ? `<p class="devto-post-desc">${description}</p>` : ''}
            <div class="devto-post-meta">
              <span class="devto-post-date">${formattedDate}</span>
              <a href="${post.link}" target="_blank" rel="noopener" class="devto-read-more">Read more →</a>
            </div>
          </div>
        `;
      });
      html += '</div>';
      
      container.innerHTML = html;
    } else {
      container.innerHTML = '<p style="color: #bbbbbb;">No posts found. <a href="https://dev.to/' + username + '" target="_blank">Visit profile →</a></p>';
    }
  } catch (error) {
    console.error('Error fetching dev.to posts:', error);
    container.innerHTML = '<p style="color: #bbbbbb;">Unable to load posts. <a href="https://dev.to/' + username + '" target="_blank">Visit profile →</a></p>';
  }
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', function() {
  fetchDevToPosts('edithpuclla', 'devto-posts-edithpuclla');
  fetchDevToPosts('edithturn', 'devto-posts-edithturn');
});
