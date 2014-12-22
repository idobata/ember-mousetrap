Function.prototype.mousetrap = (keys, action) ->
  @__ember_mousetrap = {keys, action}

  this

Ember.Route.reopen
  mousetrapBind: (->
    for _, callback of @shortcuts
      {keys, action} = callback.__ember_mousetrap

      Mousetrap.bind keys, callback.bind(this), action
  ).on('activate')

  mousetrapUnbind: (->
    for _, callback of @shortcuts
      Mousetrap.unbind callback.__ember_mousetrap.keys
  ).on('deactivate')
