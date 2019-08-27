---
title: Silver
styles: foundations/colors.scss
maturity: planned
control: exclude
colors:
  - name: Silver Base
    variable: '$color-silver-base'
    hex: '#f5f5f5'
    rgba: rgba(243,243,243,1)
  - name: Silver Lighten 1
    variable: '$color-silver-lighten-1'
    hex: '#f9f9f9'
    rgba: rgba(253,253,253,1)
---
<style>
.set {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  margin-top: 0;
  padding: 0;
  list-style: none;
}
li {
  flex: 1 0 20%;
  margin: 1rem;
}
.color {
  width: 100%;
  min-width: 160px;
  height: 160px;
  color: white;
  border: 1px solid #f5f5f5;
  margin-bottom: 1rem;
  box-sizing: border-box;
}
p {
  margin: 0;
}
</style>
<ul class="set">
{% for item in page.colors %}
  <li>
    <div class="color" style="background:{{ item.hex }}"></div>
    <p>{{ item.name }}</p>
    {% if item.hex %}<p>{{ item.hex }}</p>{% endif %}
    {% if item.rgba %}<p>{{ item.rgba }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
