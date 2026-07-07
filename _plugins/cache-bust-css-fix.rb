# Fix jekyll-cache-bust's `bust_css_cache` for al-folio.
#
# The gem hashes files under `assets/_sass`, but al-folio's Sass lives in `_sass/`
# (plus the `assets/css/*.scss` entrypoints). With the wrong directory the glob is
# empty, so main.css always gets the empty-string MD5 (?v=d41d8cd98f00b204e9800998ecf8427e)
# and the URL never changes when styles change — browsers keep serving stale CSS.
#
# This reopens the filter module and hashes the actual Sass sources instead, so the
# main.css URL changes whenever the styles do.
require "digest/md5"

module Jekyll
  module CacheBust
    def bust_css_cache(file_name)
      paths = (Dir["_sass/**/*"] + Dir["assets/css/**/*.scss"])
              .reject { |f| File.directory?(f) }
              .sort
      contents = paths.map { |f| File.binread(f) }.join
      [file_name, "?v=", Digest::MD5.hexdigest(contents)].join
    end
  end
end
