export default socket => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}

/*
equal to  the following
export default function(store) {
  return function(next) {
    return function(action) {
      return next(action); * execute the function next with params action
    }
  }
}

this nested function is called currying.
e.g. f(x, y) = xy
f(2, y) = 2y
/*