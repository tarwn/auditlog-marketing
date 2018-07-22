---
title: Embedding AuditLog
layout: docs.html
---

Embedding the AuditLog
========================

AuditLog provides a drop-in you can embed in your own application, with customization
available for things liek the logo, links, and columns that most make sense for your
system.

Customize Screen
====================

Open the <a href="https://app.auditlog.co/customize/view">Customize screen</a> and access 
the "Embed Script" tab for an example:

<div class="alm-docs-image">
    <img src="/images/docs/customize-embed-med.png" alt="Screenshot of the Customize screen" />
</div>

Here is an example of using the script:

<pre class="highlight html">
    &lt;!DOCTYPE html&gt;
    &lt;html lang="en-US" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;title&gt;View your audit log&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="audit-log"&gt;&lt;/div&gt;
        &lt;script src="https://app.auditlog.co/dropin/dropin.js"&gt;&lt;/script&gt;
        &lt;script&gt;
            auditLog({
                view: '{your-view-id}',
                accessKey: '{your-view-access-key}',
                clientId: '{your-client-id}',
                target: 'audit-log',
                host: 'https://app.auditlog.co'
            });
        &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
</pre>

There are 3 key pieces to this:

* The <code>audit-log</code> div, which will be used to render the Audit Log
* The dropin.js script which includes all of the code
* The <code>auditlog({})</code> options which provide the view id/access key and identify the client to display