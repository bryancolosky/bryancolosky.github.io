---
title: Teal Palette
styles: foundations/colors.scss
maturity: ready
control: exclude
colors:
  - name: Teal Base
    variable: '$color-teal-base'
    hex: '#0096A9'
    rgba: rgba(0, 150, 169, 1)
  - name: Teal Darken 05
    variable: '$color-teal-darken-05'
    hex: '#007F90'
    rgba: rgba(0, 127, 144, 1)
  - name: Teal Darken 10
    variable: '$color-teal-darken-10'
    hex: '#006976'
    rgba: rgba(0, 105, 118, 1)
  - name: Teal Darken 15
    variable: '$color-teal-darken-15'
    hex: '#00525D'
    rgba: rgba(0, 82, 93, 1)
  - name: Teal Lighten 05
    variable: '$color-teal-lighten-05'
    hex: '#00ADC3'
    rgba: rgba(0, 173, 195, 1)
  - name: Teal Lighten 15
    variable: '$color-teal-lighten-15'
    hex: '#00DAF6'
    rgba: rgba(0, 218, 246, 1)
  - name: Teal Lighten 25
    variable: '$color-teal-lighten-25'
    hex: '#2AE7FF'
    rgba: rgba(42, 231, 255, 1)
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
  flex: 1 0 25%;
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
    <div class="color" style="background:{{ item.hex }};{% if forloop.first %} width:100%;{% endif %}"></div>
    <p>{{ item.name }}</p>
    {% if item.hex %}<p><code>{{ item.variable }}</code></p>{% endif %}
    {% if item.hex %}<p>{{ item.hex }}</p>{% endif %}
    {% if item.rgba %}<p>{{ item.rgba }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
