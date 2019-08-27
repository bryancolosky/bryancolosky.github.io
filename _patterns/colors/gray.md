---
title: Gray
styles: foundations/colors.scss
maturity: ready
control: exclude
colors:
  - name: Gray Base
    variable: '$color-gray-base'
    hex: '#444444'
    rgba: rgba(68,68,68,1)
  - name: Gray Darken 10
    variable: '$color-gray-darken-10'
    hex: '#333333'
    rgba: rgba(38,38,38,1)
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
  height: 180px;
  color: white;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

.color-variant {
  width: 100%;
  min-width: 160px;
  height: 180px;
  color: white;
  margin-bottom: 1rem;
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
