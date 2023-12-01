---
layout: base.njk
title: My title
---
# Hello! This is my blog!

<ul>
{%- for post in collections.post -%}
  <li>
  <a href={{ post.url }}>{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

