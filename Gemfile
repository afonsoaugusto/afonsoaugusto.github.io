source "https://rubygems.org"

# Jekyll Core - using stable version
gem "jekyll", "~> 4.1.0"

# Essential Plugins (GitHub Pages compatible)
gem "jekyll-feed", "~> 0.15.0"           # RSS feed generation
gem "jekyll-sitemap", "~> 1.4.0"         # XML sitemap generation
gem "jekyll-seo-tag", "~> 2.8.0"         # SEO meta tags
gem "jekyll-redirect-from", "~> 0.16.0"  # Redirect pages
gem "jekyll-paginate", "~> 1.1.0"        # Pagination
gem "jekyll-toc", "~> 0.18.0"            # Table of contents
gem "jekyll-include-cache", "~> 0.2.1"   # Performance optimization

# Markdown Processing
gem "kramdown", "~> 2.4.0"
gem "kramdown-parser-gfm", "~> 1.1.0"
gem "rouge", "~> 3.28.0"

# Use sassc with specific version for better compatibility
gem "sassc", "~> 2.4.0"

# Development Dependencies
group :development do
  gem "webrick", "~> 1.7.0"
end

# Platform-specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0.4"
  gem "tzinfo-data", "~> 1.2022.1"
end

platforms :mingw, :x64_mingw, :mswin do
  gem "wdm", "~> 0.1.1"
end
