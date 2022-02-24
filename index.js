function receivesAFunction(callBack) {
  callBack();
}

function returnsANamedFunction() {
  function named() {
    console.log('I\m a named function');
  }
  return named;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('I\m unnamed');
  }
}