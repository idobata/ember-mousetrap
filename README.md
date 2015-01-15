# ember-mousetrap

[Mousetrap](http://craig.is/killing/mice) integration for Ember.js.

## Installation

``` sh
$ ember install:npm ember-mousetrap
```

## Usage

``` javascript
import MousetrapRoute from 'ember-mousetrap/mixins/mousetrap-route';

export default Ember.Route.extend(MousetrapRoute, {
  shortcuts: {
    // single keys
    foo: function() { highlight(2); }.mousetrap('4'),
    bar: function() { highlight(3); }.mousetrap('x', 'keyup'),

    // combinations
    baz: function(e) {
      highlight([6, 7, 8, 9]);
      return false;
    }.mousetrap('command+shift+k'),

    qux: function(e) {
      highlight([11, 12, 13, 14]);
      return false;
    }.mousetrap(['command+k', 'ctrl+k']),

    // gmail style sequences
    foobar: function() { highlight(17); }).mousetrap('g i'),
    foobaz: function() { highlight(18); }).mousetrap('* a'),

    // konami code!
    mighty: function() {
      highlight([21, 22, 23]);
    }.mousetrap('up up down down left right left right b a enter')
  }
});
```

### Ember.EXTEND_PROTOTYPES = false

``` javascript
import MousetrapRoute from 'ember-mousetrap/mixins/mousetrap-route';
import mousetrap from 'ember-mousetrap/macros/mousetrap';

export default Ember.Route.extend(MousetrapRoute, {
  shortcuts: {
    foo: mousetrap('4', function() { highlight(2); })
  }
});
```
