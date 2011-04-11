//require Internal/Internal.js


// a fake prelude written directly in javascript

/* the original haskell source could have looked like:

(+) = JSHC.int32add
(-) = JSHC.int32sub
(*) = JSHC.int32mul
(/) = JSHC.int32div

*/

modules.Prelude = {
  // makes thunk computations of javascript operations.
//  "+": function(a,b){return JSHC.int32add(JSHC.TR(a),JSHC.TR(b))},
//  "-": function(a,b){return JSHC.int32sub(JSHC.TR(a),JSHC.TR(b))},
//  "*": function(a,b){return JSHC.int32mul(JSHC.TR(a),JSHC.TR(b))},
//  "/": function(a,b){return JSHC.int32div(JSHC.TR(a),JSHC.TR(b))},
  add: function(a,b){return JSHC.int32add(JSHC.TR(a),JSHC.TR(b))},
  sub: function(a,b){return JSHC.int32sub(JSHC.TR(a),JSHC.TR(b))},
  mul: function(a,b){return JSHC.int32mul(JSHC.TR(a),JSHC.TR(b))},
  div: function(a,b){return JSHC.int32div(JSHC.TR(a),JSHC.TR(b))}
 }

/*
various type classes and instances

instance Eq Int32 where
  (==) = JSHC.int32eq

instance Ord Int32 where
  compare = JSHC.int32cmp
  (<) = JSHC.int32lt
  (>=) = JSHC.int32ge
  (>) = JSHC.int32gt
  (<=) = JSHC.int32le
  max = JSHC.int32max
  min = JSHC.int32min

-- from page 51: "Precedences and fixities of prelude operators"
infixl 9 !!
infixl 7 *, /, `div`, `mod`, `rem`, `quot`
infixl 6 +, -
infixl 1 >>, >>=
infix 4 ==, /=, <, <=, >, >=, `elem`, `notElem`
infixr 9 (.)
infixr 8 ^, ^^, **
infixr 5 :, ++
infixr 3 &&
infixr 2 ||
infixr 0 $, $!, `seq`

class Eq a where
  ...

http://www.haskell.org/ghc/docs/latest/html/libraries/base-4.3.0.0/Prelude.html#t:Ord
Q:where are the type classes defined in the report ?
*/