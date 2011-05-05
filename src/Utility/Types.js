
////////////////////////////////////////////////////////////////////////////////

/*
  function type
*/
JSHC.FunType = function(types,pos){
    assert.ok( types.length !== undefined );
    assert.ok( types.length !== 1 );
    assert.ok( types instanceof Array );
    this.name = "funtype";
    this.types = types;
    if( pos !== undefined ){
       this.pos = pos;
    }
};
JSHC.FunType.prototype.toString = function(){
    var m = ["("];
    for(var type in this.types){
	m.push(this.types[type]);
	m.push(" -> ");
    };
    m.pop();
    m.push(")");
    return m.join("");
};

/*
  application type
*/
JSHC.AppType = function(fun,arg,pos){
    assert.ok( fun !== undefined );
    assert.ok( arg !== undefined );
    this.name = "apptype";
    this.lhs = fun;
    this.rhs = arg;
    if( pos !== undefined ){
       this.pos = pos;
    }
};
JSHC.AppType.prototype.toString = function(){
    return "("+this.lhs+" "+this.rhs+")";
};

/*
  forall type
*/
JSHC.ForallType = function(binds,type){
    this.name = "forall";
    this.binds = binds;  // set of bound type variables
    this.type = type;    // the inner type
};
JSHC.ForallType.prototype.toString = function(){
    var m = [];
    m.push("forall");
    for(var tv in this.binds){
	m.push(" ");
	m.push(tv.toString());
    };
    m.push(". ");
    m.push(this.type.toString());
    return m.join("");
};

////////////////////////////////////////////////////////////////////////////////
