---
title: Blue
palette: Contextual
styles: foundations/colors.scss
maturity: draft
control: exclude
colors:
  - name: Blue Base
    variable: '$color-blue-base'
    hex: '#4382C4'
    rgba: rgb(255,255,255,1)
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
