# ember-mousetrap

[Mousetrap](http://craig.is/killing/mice) integration for Ember.js.

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-mousetrap
```


Usage
------------------------------------------------------------------------------

``` javascript
import { MousetrapRoute, mousetrap } from 'ember-mousetrap';

export default Ember.Route.extend(MousetrapRoute, {
  shortcuts: {
    // single keys
    foo: mousetrap('4', function() { highlight(2); }),
    bar: mousetrap('x', 'keyup', function() { highlight(3); }),

    // combinations
    baz: mousetrap('command+shift+k', function(e) {
      highlight([6, 7, 8, 9]);
      return false;
    }),

    qux: mousetrap(['command+k', 'ctrl+k'], function(e) {
      highlight([11, 12, 13, 14]);
      return false;
    }),

    // gmail style sequences
    foobar: mousetrap('g i', function() { highlight(17); }),
    foobaz: mousetrap('* a', function() { highlight(18); }),

    // konami code!
    mighty: mousetrap('up up down down left right left right b a enter', function() {
      highlight([21, 22, 23]);
    })
  }
});
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
