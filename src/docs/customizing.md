---
title: Embedding AuditLog
layout: docs.html
---

Customizing the AuditLog
========================

The Embeddable AuditLog supports a number of customization options
to help surface the best data to your customers.

Head to the <a href="https://app.auditlog.co/customize/view">Customization screen</a> to access these options.

Layout Customization
=======================

From the *Layout* tab you can configure the header and footer
of the AuditLog.

* **Logo** - expects a full URL to an image
* **Title** - displayed next to the logo in mobile + desktop view
* **Links** - top right in desktop, below the logo/title in mobile
* **Copyright** - displayed in the footer of the page

<div class="alm-docs-image">
    <img src="/images/docs/customize-med.png" alt="Screenshot of the Customize screen" />
</div>

Columns Customization
========================

The *Columns* tab allows you to customize which columns are displayed,
with some limited options for formatting and support for single or two-row
columns.

<div class="alm-docs-image">
    <img src="/images/docs/customize-columns-med.png" alt="Screenshot of the Customize screen" />
</div>

Each column has several options:

* **Label** - Text shown for the column header, can be as similar or dissimilar to the actual context as you want
* **Fields** - Each column must have a field in the first row and can, optionally, have a value in it's second row
* **Buttons** - The arrows re-order columns, the X removes them

Fields, in more detail
---------------------------

The available fields list include not only the raw values you send in with the events, but formatted versions
where they are appropriate. Many of the fields are optional, they will show empty values if you configure
columns to display them.

**Example:**
<div class="alm-docs-image">
    <img src="/images/docs/customize-column-config.png" alt="Screenshot of the Customize screen" />
</div>

**Displays as:**
<div class="alm-docs-image">
    <img src="/images/docs/customize-column-view.png" alt="Screenshot of the Customize screen" />
</div>

The fields also include some server-generated values, like the reception time:

<div class="alm-docs-image">
    <img src="/images/docs/receptiontime.png" alt="Screenshot of the Customize screen" />
</div>

Security
=========================

The *Security* tab gives you access to the View Id and Access Key necessary to access
the view data for a given client, plus the ability to rotate the Access Key. 

_We don't have any requirements around you rotating the Access Key. Some customers have internal
or regulatory requirements to rotate keys on some frequency and this allows that._

<div class="alm-docs-image">
    <img src="/images/docs/customize-security-med.png" alt="Screenshot of the Customize screen" />
</div>

Embed Script
==========================

The *Embed Script* tab is purely informational. It provides a sample script
with updated View Id and Access keys that you can use to embed your AuditLog in
your application.

<div class="alm-docs-image">
    <img src="/images/docs/customize-embed-med.png" alt="Screenshot of the Customize screen" />
</div>

See <a href="/docs/embedding">Embedding you AuditLog</a> for more information.