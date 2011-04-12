// -----------------------------------------------------------------------------
// lazy evaluation

/*
each thunk is an object that either contains a member "v" for the value, or
a "c" (the computation) with members "a1", "a2", etc.. for the arguments.
could perhaps use an array for the arguments, but would mean that it takes
more space for few arguments.

can not store the arguments on the function, since the function is a shared
object between thunks.
*/

JSHC.Thunk = function (data, strict) {
    if (strict)
        this.v = data;
    else
        this.c = data;
}

// reads a thunk
function thunk_read(thunk){
  if( thunk.v === undefined ) {
    thunk.v = thunk.c
    delete thunk.c
  }
  return thunk.v
}
JSHC.TR = thunk_read


function thunk_create(t){
  if (t instanceof JSHC.Thunk)
    return t;
  else if (typeof t === "function")
    return new JSHC.Thunk(t,false);
  else
    return new JSHC.Thunk(t,true);

}
JSHC.TC = thunk_create

//// e.g for integers, etc..
//function thunk_create_from_strict(v){
//  if (v instanceof Thunk)
//    return v;
//  else
//    return new JSHC.Thunk(v,true);
//}
//JSHC.TS = thunk_create_from_strict

/*
// TODO: need to have a way to handle functions of arbitrary arity.
function thunk_computation_a1(f){
  return function(thunk){
    var result = f(JSHC.TR(thunk.a[0]));
    delete thunk.as;
    return result;
  }
}
function thunk_computation_a2(f){
  return function(thunk){
    var result = f(JSHC.TR(thunk.as[0]),JSHC.TR(thunk.as[1]));
    delete thunk.as;
    return result;
  }
}
function thunk_computation_a3(f){
  return function(thunk){
    var result = f(JSHC.TR(thunk.a1),JSHC.TR(thunk.a2),JSHC.TR(thunk.a3));
    delete thunk.a1;
    delete thunk.a2;
    delete thunk.a3;
    return result;
  }
}
JSHC.TC1 = thunk_computation_a1
JSHC.TC2 = thunk_computation_a2
JSHC.TC3 = thunk_computation_a3
*/

// create and see if thunks work correctly.
//function test_thunk(){
//  // create thunk for "1 + 2"
//  var args = [JSHC.TS(1),JSHC.TS(2)]
//  var f = function(a){return JSHC.TR(a[0])+JSHC.TR(a[1])}
//  var t = JSHC.TC(f,args);

//  // must only contain the computation and arguments before being evaluated
//  JSHC.assert(getKeys(t) == "c,as", "not 'c' and 'as' in thunk");

//  var result = JSHC.TR(t)
//  JSHC.assert(result === 3, "not correct result. got: "+result);

//  // must only contain the value after being evaluated
//  JSHC.assert(getKeys(t) == "v", "not 'v' in thunk");
//}
//test_thunk();
