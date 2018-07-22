---
title: Sending Events
layout: docs.html
---

Support Privacy Concerns
===============================

With increasing privacy regulations, AuditLog has chosen to provide APIs to directly
support the requirements you may fall under. 

User / Actor API
----------------

The <a href="/docs/api/?curl#actors-api">Actors / Users API</a> supports `Search`, `Update`, 
and `Forget` capabilities out of the box.

Personally identifiable information, like name and email address, make an AuditLog a much friendlier and easier to use experience. However, you also need the freedom to know specifically what you've stored and have the ability to redact it without dumping your entire log. This is where the Actor API comes in.

_Note: You aren't required to store personally identifiable information in the AuditLog, but should you do so our aim is to provide you the tools you need to easily comply with internal and external regulations on this data._

* `Search` - What information does AuditLog store for a given user?
* `Update` - Update a User's information to the latest value
* `Forget` - Redact a user's information from the system, without damaging AuditLog entries

Check out the API Documentation for more details:

<div class="alm-docs-image">
    <a href="/docs/api/?curl#events-api-post"><img src="/images/docs/api-med.png" alt="Screenshot of the Customize screen" /></a><br/>
    <a href="/docs/api/?curl#events-api-post">AuditLog API Reference</a>
</div>

