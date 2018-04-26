This is the marketing site for auditlog.

Making Changes
===================

Make changes to the files in:

* `layouts`: The 3 page layouts used when generating new pages
* `resources`: static content that is copied over to the site
* `src`: pages to generate for the site


Run the build once:

`node index.js`

Or run it continuously:

`node index.js --watch`

The regenerated site goes to the `build` folder.

Local testing
------------------

For local testing, include `-serve` to serve the site on port 8888:

`node index.js --watch --serve`

Live Reload
------------------

Add the LiveReload Chrome extension and press it once to enable it: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en


Resources
=================

Resources are manually managed right now. The `resources/` folder is not used during the build. Only files manually copied into `src/images/` will be picked up.