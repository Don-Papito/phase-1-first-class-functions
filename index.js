function receivesAFunction(spy) {
  spy();
}

function returnsANamedFunction(){
  function namedFunction(){
    console.log("test");
  }

  return namedFunction;
}

function returnsAnAnonymousFunction(){
  return function(){
    "This was hard";
  }
}