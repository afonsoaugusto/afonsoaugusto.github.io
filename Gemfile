source "https://rubygems.org"

# Jekyll Core
gem "jekyll", "~> 4.3"

# Essential Plugins
gem "jekyll-feed", "~> 0.16.0"           # RSS feed generation
gem "jekyll-sitemap", "~> 1.4.0"         # XML sitemap generation
gem "jekyll-seo-tag", "~> 2.8.0"         # SEO meta tags
gem "jekyll-redirect-from", "~> 0.16.0"  # Redirect pages
gem "jekyll-paginate", "~> 1.1.0"        # Pagination
gem "jekyll-toc", "~> 0.18.0"            # Table of contents
gem "jekyll-include-cache", "~> 0.2.1"   # Performance optimization
gem "jekyll-optional-front-matter", "~> 0.3.2"  # Optional front matter
gem "jekyll-readme-index", "~> 0.3.0"    # README as index
gem "jekyll-default-layout", "~> 0.1.5"  # Default layouts
gem "jekyll-titles-from-headings", "~> 0.5.3"  # Auto titles

# Markdown Processing
gem "kramdown", "~> 2.4.0"
gem "kramdown-parser-gfm", "~> 1.1.0"
gem "rouge", "~> 3.28.0"

# HTML Compression (optional but recommended)
gem "jekyll-compress-images", "~> 3.0.0"  # Image optimization
gem "jekyll-minifier", "~> 0.1.10"       # HTML/CSS/JS minification

# Development Dependencies
group :development do
  gem "webrick", "~> 1.7.0"
  gem "tzinfo", "~> 2.0.4"
  gem "tzinfo-data", "~> 1.2022.1"
  gem "wdm", "~> 0.1.1" if Gem.win_platform?
  gem "jekyll-watch", "~> 2.2.1"         # File watching
  gem "jekyll-serve", "~> 0.1.0"         # Local server
end

# Platform-specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0.4"
  gem "tzinfo-data", "~> 1.2022.1"
end

platforms :mingw, :x64_mingw, :mswin do
  gem "wdm", "~> 0.1.1"
end

platforms :jruby do
  gem "tzinfo", "~> 2.0.4"
  gem "tzinfo-data", "~> 1.2022.1"
end
