---
title: Buttons
info:
nav: true
---
# Overview
Buttons allow users to take actions, and make choices, with a single click or tap.

## Usage
Buttons communicate actions that users can take. They are typically placed throughout the UI, in places like: dialogs, modal windows, forms, cards, and toolbars.

## Principles
- **Identifiable.** Buttons should indicate that they can trigger an action
- **Findable.** Buttons should be easy to find among other elements, including other Buttons
- **Clear.** A button's action and state should be clear

# Contained
**High Emphasis**  
Contained buttons have more emphasis, as they use a color fill and shadow
{% include pattern-block.html url='/patterns/buttons/default/button' %}
{% include pattern-block.html url='/patterns/buttons/default/disabled' %}
{% include pattern-block.html url='/patterns/buttons/default/focused' %}
{% include pattern-block.html url='/patterns/buttons/default/hover' %}
{% include pattern-block.html url='/patterns/buttons/default/activated' %}

# Outlined
**Medium Emphasis**  
Outlined buttons are used for more emphasis than text buttons due to the stroke
{% include pattern-block.html url='/patterns/buttons/alternate/button' %}
{% include pattern-block.html url='/patterns/buttons/alternate/disabled' %}
{% include pattern-block.html url='/patterns/buttons/alternate/focused' %}
{% include pattern-block.html url='/patterns/buttons/alternate/hover' %}
{% include pattern-block.html url='/patterns/buttons/alternate/activated' %}

# Text
**Low Emphasis**  
Text buttons are typically used for less important actions
{% include pattern-block.html url='/patterns/buttons/text/button' %}
{% include pattern-block.html url='/patterns/buttons/text/disabled' %}
{% include pattern-block.html url='/patterns/buttons/text/focused' %}
{% include pattern-block.html url='/patterns/buttons/text/hover' %}
{% include pattern-block.html url='/patterns/buttons/text/activated' %}

# Accessibility
Buttons communicate an action a user can take. Although any tag can be used for a button, it will only be keyboard focusable if you use a `button` tag or you add the property `tabindex="0"`.
