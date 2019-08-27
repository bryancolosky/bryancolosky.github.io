---
title: Orange
styles: foundations/colors.scss
maturity: ready
control: exclude
colors:
  - name: Orange Base
    variable: '$color-orange-base'
    hex: '#FFB547'
    rgba: rgba(255, 181, 71, 1)
  - name: Orange Darken 05
    variable: '$color-orange-darken-05'
    hex: '#FFAB2E'
    rgba: rgba(255, 171, 46, 1)
  - name: Orange Darken 10
    variable: '$color-orange-darken-10'
    hex: '#FFA014'
    rgba: rgba(255, 160, 20, 1)
  - name: Orange Darken 15
    variable: '$color-orange-darken-15'
    hex: '#FA9500'
    rgba: rgba(250, 149, 0, 1)
  - name: Orange Lighten 05
    variable: '$color-orange-lighten-05'
    hex: '#FFBF61'
    rgba: rgba(255, 191, 97, 1)
  - name: Orange Lighten 15
    variable: '$color-orange-lighten-15'
    hex: '#FFD494'
    rgba: rgba(255, 212, 148, 1)
  - name: Orange Lighten 25
    variable: '$color-orange-lighten-25'
    hex: '#FFE8C7'
    rgba: rgba(255, 232, 199,1)
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
    <div class="color" style="background:{{ item.hex }}"></div>
    <p>{{ item.name }}</p>
    {% if item.hex %}<p>{{ item.hex }}</p>{% endif %}
    {% if item.rgba %}<p>{{ item.rgba }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
