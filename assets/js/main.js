/**
 * Main JavaScript for Jekyll Blog
 * Handles common functionality like mobile menu, smooth scrolling, etc.
 */

(function() {
  'use strict';

  // Mobile menu functionality
  function initMobileMenu() {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) return;

    function toggleMenu() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      
      // Update button icon
      const icon = mobileMenuButton.querySelector('svg');
      if (icon) {
        if (isExpanded) {
          // Show hamburger icon
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        } else {
          // Show close icon
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
        }
      }
    }

    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          toggleMenu();
        }
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  }

  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          event.preventDefault();
          
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without jumping
          history.pushState(null, null, '#' + targetId);
          
          // Focus target element for accessibility
          targetElement.focus();
        }
      });
    });
  }

  // Copy to clipboard functionality
  function initCopyToClipboard() {
    const copyButtons = document.querySelectorAll('[data-copy]');
    
    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-copy');
        
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showCopySuccess(this);
          }).catch(() => {
            fallbackCopyTextToClipboard(textToCopy, this);
          });
        } else {
          fallbackCopyTextToClipboard(textToCopy, this);
        }
      });
    });
  }

  function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      showCopySuccess(button);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
  }

  function showCopySuccess(button) {
    const originalText = button.innerHTML;
    const originalClasses = button.className;
    
    button.innerHTML = '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copiado!';
    button.className = button.className.replace(/bg-\w+-\d+/, 'bg-green-500').replace(/hover:bg-\w+-\d+/, 'hover:bg-green-600');
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.className = originalClasses;
    }, 2000);
  }

  // Table of Contents generation
  function initTableOfContents() {
    const tocContainer = document.getElementById('toc');
    if (!tocContainer) return;

    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      tocContainer.parentElement.style.display = 'none';
      return;
    }

    let tocHTML = '<ul class="space-y-1">';
    let currentLevel = 2;
    let openLists = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.substring(1));
      
      // Generate ID if not present
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      }

      // Handle list nesting
      if (level > currentLevel) {
        for (let i = currentLevel; i < level; i++) {
          tocHTML += '<ul class="space-y-1 pl-4">';
          openLists.push(i);
        }
      } else if (level < currentLevel) {
        for (let i = currentLevel; i > level; i--) {
          if (openLists.includes(i - 1)) {
            tocHTML += '</ul>';
            openLists.pop();
          }
        }
      }

      tocHTML += `<li>
        <a href="#${heading.id}" class="text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200">
          ${heading.textContent}
        </a>
      </li>`;

      currentLevel = level;
    });

    // Close remaining lists
    while (openLists.length > 0) {
      tocHTML += '</ul>';
      openLists.pop();
    }

    tocHTML += '</ul>';
    tocContainer.innerHTML = tocHTML;

    // Add click handlers for smooth scrolling
    const tocLinks = tocContainer.querySelectorAll('a[href^="#"]');
    tocLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Lazy loading for images
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  // Search functionality (if search is implemented)
  function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;

    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      const query = this.value.trim();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.classList.add('hidden');
        return;
      }
      
      searchTimeout = setTimeout(() => {
        performSearch(query);
      }, 300);
    });
  }

  function performSearch(query) {
    // This would typically make an AJAX request to a search endpoint
    // For now, we'll implement a simple client-side search
    const posts = Array.from(document.querySelectorAll('article')).map(article => ({
      title: article.querySelector('h1, h2, h3')?.textContent || '',
      content: article.textContent,
      url: article.querySelector('a')?.href || ''
    }));

    const results = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );

    displaySearchResults(results);
  }

  function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
      searchResults.innerHTML = '<p class="text-gray-500">Nenhum resultado encontrado.</p>';
    } else {
      const resultsHTML = results.map(result => `
        <div class="p-4 border-b border-gray-200">
          <h3 class="font-semibold text-gray-900">
            <a href="${result.url}" class="hover:text-blue-600">${result.title}</a>
          </h3>
        </div>
      `).join('');
      
      searchResults.innerHTML = resultsHTML;
    }
    
    searchResults.classList.remove('hidden');
  }

  // Keyboard navigation
  function initKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
      // Alt + M to focus main content
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
      
      // Alt + N to focus navigation
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const nav = document.querySelector('nav a');
        if (nav) {
          nav.focus();
        }
      }
    });
  }

  // Performance monitoring
  function initPerformanceMonitoring() {
    if ('performance' in window) {
      window.addEventListener('load', function() {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
          }
        }, 0);
      });
    }
  }

  // Initialize all functionality when DOM is ready
  function init() {
    initMobileMenu();
    initSmoothScrolling();
    initCopyToClipboard();
    initTableOfContents();
    initLazyLoading();
    initSearch();
    initKeyboardNavigation();
    initPerformanceMonitoring();
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose some functions globally for use in templates
  window.toggleMobileMenu = function() {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    if (mobileMenuButton) {
      mobileMenuButton.click();
    }
  };

  window.copyToClipboard = function(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
      });
    } else {
      fallbackCopyTextToClipboard(text);
    }
  };

})();
