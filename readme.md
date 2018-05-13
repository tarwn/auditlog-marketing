This is the marketing site for auditlog.

Making Changes
===================

Make changes to the files in:

* `layouts`: The 3 page layouts used when generating new pages
* `resources`: static content that is copied over to the site
* `src`: pages to generate for the site


Run the build once:

`npm run build`

Or run it continuously for development:

`npm run local`

The regenerated site goes to the `build` folder.

Local testing
------------------

For local testing, the local run uses file watch and serves up the content:

`npm run local`

The site is served on http://localhost:8888/

Live Reload
------------------

Add the LiveReload Chrome extension and press it once to enable it: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en


Resources
=================

Resources are manually managed right now. The `resources/` folder is not used during the build. Only files manually copied into `src/images/` will be picked up.

- Fonts: http://fontello.com/