var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var handlebars = require('handlebars');
var hbtmd = require('metalsmith-hbt-md');
var collections  = require('metalsmith-collections');
var sitemap = require('metalsmith-mapsite');
var feed = require('metalsmith-feed');
var drafts = require('metalsmith-drafts');
// var less = require('metalsmith-less');
var sass = require('metalsmith-sass');
var ignore = require('metalsmith-ignore');
var watch = require('metalsmith-watch');
var msIf = require('metalsmith-if');
var serve = require('metalsmith-serve');
var serve = require('metalsmith-serve');
var disqus = require('metalsmith-disqus');
var argv = require('yargs').argv;

var sorter = require('./utility/sorter');
var swaggerImport = require('./utility/metalsmith-swagger-import');

var baseUrl = "https://www.auditlog.co";

// quick hack to try and add equals to handelbars
handlebars.registerHelper("equals", function (lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlebars Helper equal needs 2 parameters")
  if (lvalue !== rvalue) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});
var helpers = require('handlebars-helpers')({
  handlebars: handlebars
});

Metalsmith(__dirname)
  .metadata({
    title: "auditlog",
    description: "Transparency that enables",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/",
    productName: "auditlog",
    companyName: "LaunchReady Software, LLC",

    // make rss feed happy
    site: {
      url: baseUrl
    }
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  
  // swagger for API docs
  .use(swaggerImport({
    url: 'http://localhost:56110/swagger/v1/swagger.json',
    cachePath: './data/swagger.json',
    propertyName: 'api'
  }))

  // css
  // .use(less({
  //   pattern: '**/*.less',
  //   render: { paths: ['src/styles'] }
  // }))
  .use(sass({
    sourceMap: true,
    sourceMapContents: true
  }))
  .use(ignore([
    '**/*.less'
  ]))

  // content  
  .use(drafts())
  .use(collections({
    latestPosts: {
      pattern: 'blog/**/*.md',
      sortBy: 'date',
      reverse: true,
      limit: 2
    },
    posts: {
      pattern: 'blog/**/*.md',
      sortBy: 'date',
      reverse: true
    },
    blog_product: {
      sortBy: 'date',
      reverse: true
    },
    blog_practices: {
      sortBy: 'date',
      reverse: true
    },
    blog_company: {
      sortBy: 'date',
      reverse: true
    },
    blog_technical: {
      sortBy: 'date',
      reverse: true
    }
    // ,
    // docs_gettingStarted: {
    //   pattern: 'docs/getting-started/**/*.md',
    //   sortBy: sorter(['Quick Start'], 'order'),
    //   metadata: {
    //     name: 'Getting Started'
    //   }
    // },
    // docs_usingTheService: {
    //   pattern: 'docs/using-the-site/**/*.md',
    //   sortBy: sorter([], 'order'),
    //   metadata: {
    //     name: 'Using The Site'
    //   }
    // },
    // docs_gettingThingsDone: {
    //   pattern: 'docs/getting-things-done/**/*.md',
    //   sortBy: sorter([], 'order'),
    //   metadata: {
    //     name: 'Getting Things Done'
    //   }
    // },
    // docs_integration: {
    //   pattern: 'docs/integration/**/*.md',
    //   sortBy: sorter([], 'order'),
    //   metadata: {
    //     name: 'Integration'
    //   }
    // }
  }))
  
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(hbtmd(handlebars, {
      pattern: '**/*.html'
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))

  // Disqus Comments
  .use(disqus({
    siteurl: 'https://www.auditlog.co',
    shortname: 'auditlog'
  }))
  
  // RSS
  .use(feed({
    collection: "posts",
    limit: 10,
    destination: "rss.xml"
  }))

  // Sitemap
  .use(sitemap({
    hostname: baseUrl,
    changefreq: "monthly",
    lastmod: new Date(),
    omitIndex: true
  }))

  .use(debug(false))
  // Watch, coditionally
  .use(msIf(
    argv.watch,
    watch({
      paths: {
        "src/**/*": true,
        "layouts/**/*": "**/**",
        "partials/**/*": "**/**"
      },
      livereload: argv.watch
    })
  ))
  // Web server
  .use(msIf(
    argv.serve,
    serve({
      port: 8888,
      verbose: true
    })
  ))
  .build(function(err, files) {
    if (err) { throw err; }
  });



function debug(logToConsole) {
  return function(files, metalsmith, done) {
    if (logToConsole) {
      console.log('\nMETADATA:');
      console.log(metalsmith.metadata());

      for (var f in files) {
        console.log('\nFILE:');
        console.log(files[f]);
      }
    }

    done();
  };
};