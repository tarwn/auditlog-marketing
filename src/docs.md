---
title: Documentation
layout: docs.html
---

Documentation
===================

Welcome to AuditLog!

Our goal is to make it easy and quick for your customers
to transparently see the changes they've made while using your
system. The first step is to get you up and running quickly.

Getting Started 
===================

It only takes 3 steps to start providing an AuditLog to your customers:

1. Customize the View
2. Embed the AuditLog in your Application
3. Send Events

Let's go!

Step 1: Customize the View
----------------------------

The first step is to [login](https://app.auditlog.co/customize/view) and customize your
View for your customers. 

<div class="alm-docs-image">
    <img src="/images/docs/customize-med.png" alt="Screenshot of the Customize screen" />
</div>

Changes you make in the tabs on the left are immediately reflected in the preview pane. The
data in the preview pane is sample data, so once you have some data in the system you may want
to come back and tweak this further.

No changes will be saved until you explicitly press the "Save Changes" button.

* **Layout:** Customize the logo, page title, copyright statement, and add custom links to the top of the page
* **Columns:** Customize the columns displayed in the table
* **Security:** Access the `View Id`, View and Reset your `Access Key`
* **Embed Script:** Sample script to embed the Audit Log View

Once you've customized the AuditLog view to your liking, the next step is to embed it in your site.

Step 2: Embed the AuditLog in your Application
------------------------------------------------

The fourth tab of the Customize screen above has a sample script for embedding 
the AuditLog in your application. Add an empty page to your application and
paste this sample script in.

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

The Embed script will include the proper values for your View Id and Access Key,
but you will need to provide the value for your client's individual Id's. 

**Client UUID:** The value you pick for a client UUID should be one that you
can map back to clients in your system, that uniquely identifies the client, and
can be plugged into your Audit Log page and rpeorted to the AuditLog API.

Step 3: Send Events to AuditLog.co
------------------------------------------------

The last step is to wire up your application to forward event data to your
AuditLog. We suggest you start with the following events:

* Security Access
    * User Created
    * User Disabled/Deleted/etc
    * User Rights Updated
    * API Key Created
* Security Failures
    * Successful User Logon
    * Failed User Logon

Once you have some events flowing for standard security events, you can
extend this easily to other notable events for your system.

**Generate an API Key**

First go to the <a href="https://ap.auditlog.co/configure/apikeys">API Keys screen</a> to 
generate your first API Key. Press the "Create API Key" button to start the process and
give it a memorable name. Copy the generated Consumer Id and Secret before returning to the
API Keys list.

<div class="alm-docs-image">
    <img src="/images/docs/apikeys-med.png" alt="Screenshot of the API Keys screen" />
</div>

**Submit a sample event**

Using <a href="/docs/api/?curl#events-api-post">the API</a>, you can submit your first event from the command-line:

<pre class="highlight bash">
curl 'https://app.auditlog.co/api/v1/events' \
    -X POST \
    -H 'x-api-key: {consumer id}:{secret}' \
    -H 'content-type: application/json' \
    -d '[
            {
                "uuid": "sample-event-001",
                "client": {
                    "uuid": "1234567890",
                    "name": "Great Client"
                },
                "time": "2018-06-30T16:35:52",
                "action": "user.invite",
                "description": "Invited new user, QA role",
                "url": "http://blah.example.com/95c102ae-5930-413f-b794-8f0934fdb136",
                "actor": {
                    "uuid": "bd275099-e808-4c1a-bd32-57a589b7cf93",
                    "name": "Roberta Wharton",
                    "email": "rwharton@great-client.test"
                },
                "context": {
                    "client": {
                        "ipAddress": "192.168.105.23",
                        "browserAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWeb..."
                    },
                    "server": {
                        "serverId": "prod-01-us-appfarm",
                        "version": "20180325-01"
                    }
                },
                "target": {
                    "type": "user",
                    "uuid": "95c102ae-5930-413f-b794-8f0934fdb136",
                    "label": "Salman Randall",
                    "url": "http://blah.example.com/95c102ae-5930-413f-b794-8f0934fdb136"
                }
            }
    ]'
</pre>

Feel free to continue using the client id of "1234567890" while you're testing. 

You can see your submitted events on the embedded AuditLog you created in Step 2
or on your <a href="https://app/auditlog.co">AuditLog.co dashboard</a>, which shows all of the events
across all of your clients:

<div class="alm-docs-image">
    <img src="/images/docs/dashboard-med.png" alt="Screenshot of the Dashboard" />
</div>

This view is the same as your customized View, with the addition of the Client 
column and charts.

**Integrate your application**

Finally, the last step is to connect your application to this API to send
real events.

<a href="/docs/api/?curl#events-api-post">API Docs: Sending Events</a>

If you have any difficulties with this step, let us know!

Success
=============

Success, you have a working AuditLog that will continue to get better
without any additional development expense on your side. Let us
know if there is anything more we can do!
