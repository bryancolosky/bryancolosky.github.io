---
title: Skeleton
styles: foundations/gradients.scss
maturity: ready
control: exclude
gradients:
  - name: Skeleton
    hexStart: '#DADADA'
    hexStop: '#CACACA'
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
  height: 320px;
  color: white;
  border: 1px solid #f5f5f5;
  margin-bottom: 1rem;
}
p {
  margin: 0;
}
</style>
<ul class="set">
{% for item in page.gradients %}
  <li>
    <div class="color" style="background:linear-gradient(270deg, {{ item.hexStart }} 50%, {{ item.hexStop }} 100%)"></div>
    <p>{{ item.name }}</p>
    {% if item.hexStart %}<p>{{ item.hexStart }}</p>{% endif %}
    {% if item.hexStop %}<p>{{ item.hexStop }}</p>{% endif %}
    {% if item.rgba %}<p>{{ item.rgba }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
