/* Jison generated parser */
var JSHCparser = (function(){
var parser = {trace: 
function trace() {
}
,
yy: {},
symbols_: {"error":2,"start_":3,"module_":4,"EOF":5,"module":6,"modid":7,"where":8,"body":9,"(":10,"exports":11,")":12,"{":13,"topdecls":14,"}":15,"topdecls_nonempty":16,";":17,"topdecl":18,"decl":19,"data":20,"simpletype":21,"=":22,"constrs":23,"impdecl":24,"decls":25,"list_decl_comma_1":26,"funlhs":27,"rhs":28,"var":29,"apats":30,"exp":31,"tycon":32,"tyvars":33,"|":34,"constr":35,"con":36,"constr_atypes":37,"atype":38,"exports_inner":39,",":40,"export":41,"qvar":42,"qtycon":43,"..":44,"list_cname_0_comma":45,"import":46,"imports":47,"hiding":48,"list_import_1_comma":49,"import_a":50,"infixexp":51,"::":52,"int":53,"infixexpLR":54,"lexp":55,"qop":56,"-":57,"if":58,"then":59,"else":60,"fexp":61,"\\":62,"->":63,"case":64,"of":65,"alts":66,"let":67,"in":68,"aexp":69,"alt":70,"pat":71,"list_cname_1_comma":72,"cname":73,"gcon":74,"literal":75,"tuple":76,"list_exp_1_comma":77,"qconid":78,"conid":79,"qvarop":80,"qconop":81,"qvarsym":82,"varop":83,"`":84,"qvarid":85,"varsym":86,"varid":87,"tyvar":88,"consym":89,"qcon":90,"gconsym":91,":":92,"qconsym":93,"gtycon":94,"lpat":95,"apat":96,"tuple_pat":97,"pat_list_1_comma":98,"integer":99,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"module",8:"where",10:"(",12:")",13:"{",15:"}",17:";",20:"data",22:"=",34:"|",40:",",44:"..",46:"import",48:"hiding",52:"::",53:"int",57:"-",58:"if",59:"then",60:"else",62:"\\",63:"->",64:"case",65:"of",67:"let",68:"in",78:"qconid",79:"conid",81:"qconop",82:"qvarsym",84:"`",85:"qvarid",86:"varsym",87:"varid",89:"consym",92:":",93:"qconsym",99:"integer"},
productions_: [0,[3,2],[4,4],[4,7],[4,1],[9,3],[14,1],[16,3],[16,1],[18,1],[18,2],[18,4],[18,1],[25,2],[25,3],[26,3],[26,1],[19,2],[27,2],[27,1],[28,2],[21,1],[21,2],[23,3],[23,1],[35,1],[35,2],[37,2],[37,1],[11,1],[11,2],[39,3],[39,1],[41,1],[41,2],[41,1],[41,4],[41,4],[24,2],[24,5],[24,6],[47,1],[47,2],[47,1],[47,0],[49,3],[49,1],[50,1],[50,1],[50,4],[50,4],[31,3],[31,1],[51,2],[54,3],[54,2],[54,0],[55,6],[55,1],[55,4],[55,6],[55,4],[61,1],[61,2],[66,3],[66,1],[70,3],[45,1],[45,0],[72,3],[72,1],[73,1],[69,1],[69,1],[69,1],[69,3],[69,1],[76,5],[77,3],[77,1],[7,1],[7,1],[56,1],[56,1],[80,1],[80,1],[80,3],[83,1],[83,3],[33,2],[33,1],[88,1],[32,1],[43,1],[43,1],[36,1],[36,3],[90,1],[90,1],[90,1],[74,1],[29,1],[29,3],[42,1],[42,3],[42,1],[91,1],[91,1],[38,1],[38,1],[94,1],[71,1],[95,1],[95,2],[30,1],[30,2],[96,1],[96,1],[96,1],[96,1],[97,5],[98,3],[98,1],[75,1]],
performAction: 
function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
    var $0 = $$.length - 1;
    switch (yystate) {
      case 1:
        return $$[$0 - 1];
        break;
      case 2:
        this.$ = {name:"module", modid:$$[$0 - 2], body:$$[$0], pos:this._$};
        break;
      case 3:
        this.$ = {name:"module", modid:$$[$0 - 5], exports:$$[$0 - 3], body:$$[$0 - 1], pos:this._$};
        break;
      case 4:
        this.$ = {name:"module", modid:new JSHC.ModName("Main"), body:$$[$0], pos:this._$};
        break;
      case 5:
        var imps = [], decs = [], atdecs = false;
        for (var i = 0; i < $$[$0 - 1].length; i++) {
            if ($$[$0 - 1][i].name == "impdecl" && !atdecs) {
                imps.push($$[$0 - 1][i]);
            } else {
                if ($$[$0 - 1][i].name == "impdecl" && atdecs) {
                    throw new Error("Parse error: import declaration in statement block at line " + $$[$0 - 1][i].pos.first_line);
                } else {
                    atdecs = true;
                    decs.push($$[$0 - 1][i]);
                }
            }
        }
        this.$ = {name:"body", impdecls:imps, topdecls:decs, pos:this._$};
        break;
      case 6:
        this.$ = $$[$0];
        break;
      case 7:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 8:
        this.$ = [$$[$0]];
        break;
      case 9:
        this.$ = {name:"topdecl-decl", decl:$$[$0], pos:this._$};
        break;
      case 10:
        this.$ = {name:"topdecl-data", typ:$$[$0], constrs:[], pos:this._$};
        break;
      case 11:
        this.$ = {name:"topdecl-data", typ:$$[$0 - 2], constrs:$$[$0], pos:this._$};
        break;
      case 12:
        this.$ = $$[$0];
        break;
      case 13:
        this.$ = [];
        break;
      case 14:
        this.$ = $$[$0 - 1];
        break;
      case 15:
        ($$[$0 - 2]).push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 16:
        this.$ = [$$[$0]];
        break;
      case 17:
        this.$ = {name:"decl-fun", lhs:$$[$0 - 1], rhs:$$[$0], pos:this._$};
        break;
      case 18:
        this.$ = {name:"fun-lhs", ident:$$[$0 - 1], args:$$[$0], pos:this._$};
        break;
      case 19:
        this.$ = {name:"fun-lhs", ident:$$[$0], args:[], pos:this._$};
        break;
      case 20:
        this.$ = $$[$0];
        break;
      case 21:
        this.$ = {name:"simpletype", tycon:$$[$0], vars:[], pos:this._$};
        break;
      case 22:
        this.$ = {name:"simpletype", tycon:$$[$0 - 1], vars:$$[$0], pos:this._$};
        break;
      case 23:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 24:
        this.$ = [$$[$0]];
        break;
      case 25:
        this.$ = {name:"constr", dacon:$$[$0], types:[], pos:this._$};
        break;
      case 26:
        this.$ = {name:"constr", dacon:$$[$0 - 1], types:$$[$0], pos:this._$};
        break;
      case 27:
        $$[$0 - 1].push($$[$0]);
        this.$ = $$[$0 - 1];
        break;
      case 28:
        this.$ = [$$[$0]];
        break;
      case 29:
        this.$ = $$[$0];
        break;
      case 30:
        this.$ = $$[$0 - 1];
        break;
      case 31:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 32:
        this.$ = [$$[$0]];
        break;
      case 33:
        this.$ = {name:"export-qvar", exp:$$[$0], pos:this._$};
        break;
      case 34:
        this.$ = {name:"export-module", exp:$$[$0], pos:this._$};
        break;
      case 35:
        this.$ = {name:"export-type-unspec", exp:$$[$0], pos:this._$};
        break;
      case 36:
        this.$ = {name:"export-type-all", exp:$$[$0 - 3], pos:this._$};
        break;
      case 37:
        this.$ = {name:"export-type-vars", exp:$$[$0 - 3], vars:$$[$0 - 1], pos:this._$};
        break;
      case 38:
        this.$ = {name:"impdecl", modid:$$[$0], pos:this._$};
        break;
      case 39:
        this.$ = {name:"impdecl", modid:$$[$0 - 3], hiding:false, imports:$$[$0 - 1], pos:this._$};
        break;
      case 40:
        this.$ = {name:"impdecl", modid:$$[$0 - 4], hiding:true, imports:$$[$0 - 1], pos:this._$};
        break;
      case 41:
        this.$ = $$[$0];
        break;
      case 42:
        this.$ = $$[$0 - 1];
        break;
      case 43:
        this.$ = [];
        break;
      case 44:
        this.$ = [];
        break;
      case 45:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 46:
        this.$ = [$$[$0]];
        break;
      case 47:
        this.$ = {name:"import-var", varname:$$[$0], pos:this._$};
        break;
      case 48:
        this.$ = {name:"import-tycon", tycon:$$[$0], all:false, pos:this._$};
        break;
      case 49:
        this.$ = {name:"import-tycon", tycon:$$[$0 - 3], all:true, pos:this._$};
        break;
      case 50:
        this.$ = {name:"import-tycon", tycon:$$[$0 - 3], all:false, list:$$[$0 - 1], pos:this._$};
        break;
      case 51:
        this.$ = {name:"constrained-exp", exp:$$[$0 - 2], sig:"int", pos:this._$};
        break;
      case 52:
        this.$ = $$[$0];
        break;
      case 53:
        ($$[$0 - 1]).push($$[$0]);
        this.$ = {name:"infixexp", exps:$$[$0 - 1], pos:this._$};
        break;
      case 54:
        ($$[$0 - 2]).push($$[$0 - 1], $$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 55:
        ($$[$0 - 1]).push($$[$0]);
        this.$ = $$[$0];
        break;
      case 56:
        this.$ = [];
        break;
      case 57:
        this.$ = {name:"ite", e1:$$[$0 - 4], e2:$$[$0 - 2], e3:$$[$0], pos:this._$};
        break;
      case 58:
        this.$ = {name:"application", exps:$$[$0], pos:this._$};
        break;
      case 59:
        this.$ = {name:"lambda", args:$$[$0 - 2], rhs:$$[$0], pos:this._$};
        break;
      case 60:
        this.$ = {name:"case", exp:$$[$0 - 4], alts:$$[$0 - 1], pos:this._$};
        break;
      case 61:
        this.$ = {name:"let", decls:$$[$0 - 2], exp:$$[$0], pos:this._$};
        break;
      case 62:
        this.$ = [$$[$0]];
        break;
      case 63:
        ($$[$0 - 1]).push($$[$0]);
        this.$ = $$[$0 - 1];
        break;
      case 64:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 65:
        this.$ = [$$[$0]];
        break;
      case 66:
        this.$ = {name:"alt", pat:$$[$0 - 2], exp:$$[$0]};
        break;
      case 67:
        this.$ = $$[$0];
        break;
      case 68:
        this.$ = [];
        break;
      case 69:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 70:
        this.$ = [$$[$0]];
        break;
      case 71:
        this.$ = $$[$0];
        break;
      case 72:
        this.$ = $$[$0];
        break;
      case 73:
        this.$ = $$[$0];
        break;
      case 74:
        this.$ = $$[$0];
        break;
      case 75:
        this.$ = $$[$0 - 1];
        break;
      case 76:
        this.$ = $$[$0];
        break;
      case 77:
        $$[$0 - 1].unshift($$[$0 - 3]);
        this.$ = {name:"tuple", members:$$[$0 - 1], pos:this._$};
        break;
      case 78:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 79:
        this.$ = [$$[$0]];
        break;
      case 80:
        this.$ = new JSHC.ModName($$[$0], this._$, yy.lexer.previous.qual);
        break;
      case 81:
        this.$ = new JSHC.ModName($$[$0], this._$);
        break;
      case 82:
        this.$ = {name:"qop", id:$$[$0], pos:this._$};
        break;
      case 83:
        this.$ = {name:"qop", id:$$[$0], pos:this._$};
        break;
      case 84:
        this.$ = {name:"qvarop", id:$$[$0], pos:this._$};
        break;
      case 85:
        this.$ = $$[$0];
        break;
      case 86:
        this.$ = {name:"qvarop-var", id:$$[$0 - 1], pos:this._$};
        break;
      case 87:
        this.$ = {name:"varop", id:$$[$0], pos:this._$};
        break;
      case 88:
        this.$ = {name:"varop-var", id:$$[$0 - 1], pos:this._$};
        break;
      case 89:
        $$[$0 - 1].push($$[$0]);
        this.$ = $$[$0 - 1];
        break;
      case 90:
        this.$ = [$$[$0]];
        break;
      case 91:
        this.$ = new JSHC.TyVar($$[$0], this._$);
        break;
      case 92:
        this.$ = new JSHC.TyCon($$[$0], this._$);
        break;
      case 93:
        this.$ = new JSHC.TyCon($$[$0], this._$, yy.lexer.previous.qual);
        break;
      case 94:
        this.$ = $$[$0];
        break;
      case 95:
        this.$ = new JSHC.DaCon($$[$0], this._$, false);
        break;
      case 96:
        this.$ = new JSHC.DaCon($$[$0 - 1], this._$, true);
        break;
      case 97:
        this.$ = new JSHC.DaCon($$[$0], this._$, false, yy.lexer.previous.qual);
        break;
      case 98:
        this.$ = new JSHC.DaCon($$[$01], this._$, true, yy.lexer.previous.qual);
        break;
      case 99:
        this.$ = $$[$0];
        break;
      case 101:
        this.$ = new JSHC.VarName($$[$0], this._$, false);
        break;
      case 102:
        this.$ = new JSHC.VarName($$[$0 - 1], this._$, true);
        break;
      case 103:
        this.$ = new JSHC.VarName($$[$0], this._$, false, yy.lexer.previous.qual);
        break;
      case 104:
        this.$ = new JSHC.VarName($$[$0 - 1], this._$, true, yy.lexer.previous.qual);
        break;
      case 105:
        this.$ = $$[$0];
        break;
      case 106:
        this.$ = new JSHC.DaCon($$[$0], this._$, true, yy.lexer.previous.qual);
        break;
      case 107:
        this.$ = new JSHC.DaCon($$[$0], this._$, true, yy.lexer.previous.qual);
        break;
      case 108:
        this.$ = $$[$0];
        break;
      case 109:
        this.$ = $$[$0];
        break;
      case 110:
        this.$ = $$[$0];
        break;
      case 111:
        this.$ = $$[$0];
        break;
      case 112:
        this.$ = $$[$0];
        break;
      case 113:
        this.$ = {name:"conpat", con:$$[$0 - 1], pats:$$[$0]};
        break;
      case 114:
        this.$ = [$$[$0]];
        break;
      case 115:
        $$[$0 - 1].push($$[$0]);
        this.$ = $$[$0 - 1];
        break;
      case 116:
        this.$ = $$[$0];
        break;
      case 117:
        this.$ = $$[$0];
        break;
      case 118:
        this.$ = $$[$0];
        break;
      case 119:
        this.$ = $$[$0];
        break;
      case 120:
        $$[$0 - 1].unshift($$[$0 - 3]);
        this.$ = {name:"tuple_pat", members:$$[$0 - 1], pos:this._$};
        break;
      case 121:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 122:
        this.$ = [$$[$0]];
        break;
      case 123:
        this.$ = {name:"integer-lit", value:Number($$[$0]), pos:this._$};
        break;
    }
}
,
table: [{3:1,4:2,6:[1,3],9:4,13:[1,5]},{1:[3]},{5:[1,6]},{7:7,78:[1,8],79:[1,9]},{5:[2,4]},{14:10,16:11,18:12,19:13,20:[1,14],24:15,27:16,46:[1,17],29:18,87:[1,19],10:[1,20]},{1:[2,1]},{8:[1,21],10:[1,22]},{8:[2,80],10:[2,80],17:[2,80],15:[2,80],48:[2,80],12:[2,80],40:[2,80]},{8:[2,81],10:[2,81],17:[2,81],15:[2,81],48:[2,81],12:[2,81],40:[2,81]},{15:[1,23]},{17:[1,24],15:[2,6]},{15:[2,8],17:[2,8]},{17:[2,9],15:[2,9]},{21:25,32:26,79:[1,27]},{17:[2,12],15:[2,12]},{28:28,22:[1,29]},{7:30,78:[1,8],79:[1,9]},{30:31,96:32,29:33,74:34,75:35,97:36,87:[1,19],10:[1,37],90:38,99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45],22:[2,19]},{87:[2,101],10:[2,101],78:[2,101],92:[2,101],93:[2,101],79:[2,101],99:[2,101],22:[2,101],40:[2,101],12:[2,101],15:[2,101],17:[2,101],52:[2,101],82:[2,101],86:[2,101],84:[2,101],81:[2,101],59:[2,101],65:[2,101],60:[2,101],85:[2,101],63:[2,101]},{86:[1,46]},{9:47,13:[1,5]},{11:48,39:49,41:50,42:51,6:[1,52],43:53,85:[1,54],10:[1,55],29:56,78:[1,57],32:58,87:[1,19],79:[1,27]},{5:[2,5]},{18:59,19:13,20:[1,14],24:15,27:16,46:[1,17],29:18,87:[1,19],10:[1,20]},{22:[1,60],17:[2,10],15:[2,10]},{33:61,88:62,87:[1,63],15:[2,21],17:[2,21],22:[2,21]},{22:[2,92],17:[2,92],15:[2,92],87:[2,92],10:[2,92],40:[2,92],12:[2,92],34:[2,92],78:[2,92],79:[2,92]},{15:[2,17],17:[2,17]},{31:64,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{10:[1,67],48:[1,68],15:[2,38],17:[2,38]},{96:69,29:33,74:34,75:35,97:36,87:[1,19],10:[1,37],90:38,99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45],22:[2,18]},{22:[2,114],87:[2,114],10:[2,114],78:[2,114],92:[2,114],93:[2,114],79:[2,114],99:[2,114],40:[2,114],12:[2,114],63:[2,114]},{22:[2,116],99:[2,116],79:[2,116],93:[2,116],92:[2,116],78:[2,116],10:[2,116],87:[2,116],40:[2,116],63:[2,116],12:[2,116]},{22:[2,117],99:[2,117],79:[2,117],93:[2,117],92:[2,117],78:[2,117],10:[2,117],87:[2,117],40:[2,117],63:[2,117],12:[2,117]},{22:[2,118],99:[2,118],79:[2,118],93:[2,118],92:[2,118],78:[2,118],10:[2,118],87:[2,118],40:[2,118],63:[2,118],12:[2,118]},{22:[2,119],99:[2,119],79:[2,119],93:[2,119],92:[2,119],78:[2,119],10:[2,119],87:[2,119],40:[2,119],63:[2,119],12:[2,119]},{86:[1,46],71:70,89:[1,71],95:72,96:73,74:74,29:33,75:35,97:36,90:38,87:[1,19],10:[1,37],99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{22:[2,100],87:[2,100],10:[2,100],78:[2,100],92:[2,100],93:[2,100],79:[2,100],99:[2,100],40:[2,100],81:[2,100],84:[2,100],86:[2,100],82:[2,100],52:[2,100],17:[2,100],15:[2,100],85:[2,100],12:[2,100],60:[2,100],65:[2,100],59:[2,100],63:[2,100]},{22:[2,123],87:[2,123],10:[2,123],78:[2,123],92:[2,123],93:[2,123],79:[2,123],99:[2,123],40:[2,123],81:[2,123],84:[2,123],86:[2,123],82:[2,123],52:[2,123],17:[2,123],15:[2,123],85:[2,123],12:[2,123],60:[2,123],65:[2,123],59:[2,123],63:[2,123]},{22:[2,97],99:[2,97],79:[2,97],93:[2,97],92:[2,97],78:[2,97],10:[2,97],87:[2,97],40:[2,97],15:[2,97],17:[2,97],52:[2,97],82:[2,97],86:[2,97],84:[2,97],81:[2,97],59:[2,97],65:[2,97],12:[2,97],60:[2,97],85:[2,97],63:[2,97]},{22:[2,98],99:[2,98],79:[2,98],93:[2,98],92:[2,98],78:[2,98],10:[2,98],87:[2,98],40:[2,98],15:[2,98],17:[2,98],52:[2,98],82:[2,98],86:[2,98],84:[2,98],81:[2,98],59:[2,98],65:[2,98],12:[2,98],60:[2,98],85:[2,98],63:[2,98]},{22:[2,99],99:[2,99],79:[2,99],93:[2,99],92:[2,99],78:[2,99],10:[2,99],87:[2,99],40:[2,99],15:[2,99],17:[2,99],52:[2,99],82:[2,99],86:[2,99],84:[2,99],81:[2,99],59:[2,99],65:[2,99],12:[2,99],60:[2,99],85:[2,99],63:[2,99]},{22:[2,106],87:[2,106],10:[2,106],78:[2,106],92:[2,106],93:[2,106],79:[2,106],99:[2,106],40:[2,106],81:[2,106],84:[2,106],86:[2,106],82:[2,106],52:[2,106],17:[2,106],15:[2,106],85:[2,106],12:[2,106],60:[2,106],65:[2,106],59:[2,106],63:[2,106]},{22:[2,107],87:[2,107],10:[2,107],78:[2,107],92:[2,107],93:[2,107],79:[2,107],99:[2,107],40:[2,107],81:[2,107],84:[2,107],86:[2,107],82:[2,107],52:[2,107],17:[2,107],15:[2,107],85:[2,107],12:[2,107],60:[2,107],65:[2,107],59:[2,107],63:[2,107]},{22:[2,95],87:[2,95],10:[2,95],78:[2,95],92:[2,95],93:[2,95],79:[2,95],99:[2,95],40:[2,95],15:[2,95],17:[2,95],34:[2,95],81:[2,95],84:[2,95],86:[2,95],82:[2,95],52:[2,95],85:[2,95],12:[2,95],60:[2,95],65:[2,95],59:[2,95],63:[2,95]},{12:[1,75]},{5:[2,2]},{12:[1,76]},{40:[1,77],12:[2,29]},{12:[2,32],40:[2,32]},{40:[2,33],12:[2,33]},{7:78,78:[1,8],79:[1,9]},{10:[1,79],40:[2,35],12:[2,35]},{12:[2,103],40:[2,103],81:[2,103],84:[2,103],86:[2,103],82:[2,103],52:[2,103],17:[2,103],15:[2,103],85:[2,103],10:[2,103],87:[2,103],78:[2,103],92:[2,103],93:[2,103],79:[2,103],99:[2,103],60:[2,103],65:[2,103],59:[2,103]},{82:[1,80],86:[1,46]},{12:[2,105],40:[2,105],81:[2,105],84:[2,105],86:[2,105],82:[2,105],52:[2,105],17:[2,105],15:[2,105],85:[2,105],10:[2,105],87:[2,105],78:[2,105],92:[2,105],93:[2,105],79:[2,105],99:[2,105],60:[2,105],65:[2,105],59:[2,105]},{12:[2,93],40:[2,93],10:[2,93],87:[2,93],79:[2,93],78:[2,93],34:[2,93],17:[2,93],15:[2,93]},{12:[2,94],40:[2,94],10:[2,94],87:[2,94],79:[2,94],78:[2,94],34:[2,94],17:[2,94],15:[2,94]},{15:[2,7],17:[2,7]},{23:81,35:82,36:83,79:[1,45],10:[1,84]},{88:85,87:[1,63],15:[2,22],17:[2,22],22:[2,22]},{22:[2,90],17:[2,90],15:[2,90],87:[2,90]},{87:[2,91],15:[2,91],17:[2,91],22:[2,91],34:[2,91],78:[2,91],79:[2,91]},{17:[2,20],15:[2,20]},{52:[1,86],15:[2,52],17:[2,52],59:[2,52],65:[2,52],12:[2,52],40:[2,52],60:[2,52],81:[2,52],84:[2,52],86:[2,52],82:[2,52]},{55:87,57:[1,88],58:[1,89],61:90,62:[1,91],64:[1,92],67:[1,93],69:94,42:95,74:96,75:97,10:[1,98],76:99,85:[1,54],29:56,90:38,99:[1,39],87:[1,19],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{47:100,49:101,40:[1,102],50:103,29:104,32:105,87:[1,19],10:[1,20],79:[1,27],12:[2,44]},{10:[1,106]},{22:[2,115],87:[2,115],10:[2,115],78:[2,115],92:[2,115],93:[2,115],79:[2,115],99:[2,115],40:[2,115],12:[2,115],63:[2,115]},{40:[1,107]},{12:[1,108]},{40:[2,111],12:[2,111],63:[2,111]},{40:[2,112],12:[2,112],63:[2,112]},{30:109,96:32,29:33,74:34,75:35,97:36,87:[1,19],10:[1,37],90:38,99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45],40:[2,117],12:[2,117],63:[2,117]},{87:[2,102],10:[2,102],78:[2,102],92:[2,102],93:[2,102],79:[2,102],99:[2,102],22:[2,102],40:[2,102],12:[2,102],15:[2,102],17:[2,102],52:[2,102],82:[2,102],86:[2,102],84:[2,102],81:[2,102],59:[2,102],65:[2,102],60:[2,102],85:[2,102],63:[2,102]},{8:[1,110]},{41:111,42:51,6:[1,52],43:53,85:[1,54],10:[1,55],29:56,78:[1,57],32:58,87:[1,19],79:[1,27],12:[2,30]},{40:[2,34],12:[2,34]},{44:[1,112],45:113,72:114,73:115,36:116,79:[1,45],10:[1,84],12:[2,68]},{12:[1,117]},{34:[1,118],17:[2,11],15:[2,11]},{15:[2,24],17:[2,24],34:[2,24]},{37:119,38:120,94:121,88:122,43:123,87:[1,63],78:[1,57],32:58,79:[1,27],34:[2,25],17:[2,25],15:[2,25]},{89:[1,71]},{22:[2,89],17:[2,89],15:[2,89],87:[2,89]},{53:[1,124]},{56:125,80:126,81:[1,127],82:[1,128],83:129,84:[1,130],86:[1,131],52:[2,53],17:[2,53],15:[2,53],59:[2,53],65:[2,53],40:[2,53],12:[2,53],60:[2,53]},{58:[2,55],85:[2,55],10:[2,55],87:[2,55],78:[2,55],92:[2,55],93:[2,55],79:[2,55],99:[2,55],62:[2,55],64:[2,55],67:[2,55],57:[2,55]},{31:132,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{69:133,42:95,74:96,75:97,10:[1,98],76:99,85:[1,54],29:56,90:38,99:[1,39],87:[1,19],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45],15:[2,58],17:[2,58],52:[2,58],82:[2,58],86:[2,58],84:[2,58],81:[2,58],59:[2,58],65:[2,58],12:[2,58],40:[2,58],60:[2,58]},{30:134,96:32,29:33,74:34,75:35,97:36,87:[1,19],10:[1,37],90:38,99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{31:135,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{25:136,13:[1,137]},{81:[2,62],84:[2,62],86:[2,62],82:[2,62],52:[2,62],17:[2,62],15:[2,62],85:[2,62],10:[2,62],87:[2,62],78:[2,62],92:[2,62],93:[2,62],79:[2,62],99:[2,62],12:[2,62],40:[2,62],60:[2,62],65:[2,62],59:[2,62]},{15:[2,72],17:[2,72],52:[2,72],82:[2,72],86:[2,72],84:[2,72],81:[2,72],59:[2,72],65:[2,72],12:[2,72],40:[2,72],60:[2,72],99:[2,72],79:[2,72],93:[2,72],92:[2,72],78:[2,72],87:[2,72],10:[2,72],85:[2,72]},{15:[2,73],17:[2,73],52:[2,73],82:[2,73],86:[2,73],84:[2,73],81:[2,73],59:[2,73],65:[2,73],12:[2,73],40:[2,73],60:[2,73],99:[2,73],79:[2,73],93:[2,73],92:[2,73],78:[2,73],87:[2,73],10:[2,73],85:[2,73]},{15:[2,74],17:[2,74],52:[2,74],82:[2,74],86:[2,74],84:[2,74],81:[2,74],59:[2,74],65:[2,74],12:[2,74],40:[2,74],60:[2,74],99:[2,74],79:[2,74],93:[2,74],92:[2,74],78:[2,74],87:[2,74],10:[2,74],85:[2,74]},{31:138,82:[1,80],86:[1,46],89:[1,71],51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{15:[2,76],17:[2,76],52:[2,76],82:[2,76],86:[2,76],84:[2,76],81:[2,76],59:[2,76],65:[2,76],12:[2,76],40:[2,76],60:[2,76],99:[2,76],79:[2,76],93:[2,76],92:[2,76],78:[2,76],87:[2,76],10:[2,76],85:[2,76]},{12:[1,139]},{40:[1,140],12:[2,41]},{12:[2,43]},{12:[2,46],40:[2,46]},{40:[2,47],12:[2,47]},{10:[1,141],40:[2,48],12:[2,48]},{47:142,49:101,40:[1,102],50:103,29:104,32:105,87:[1,19],10:[1,20],79:[1,27],12:[2,44]},{98:143,71:144,95:72,96:73,74:74,29:33,75:35,97:36,90:38,87:[1,19],10:[1,37],99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{22:[2,96],87:[2,96],10:[2,96],78:[2,96],92:[2,96],93:[2,96],79:[2,96],99:[2,96],40:[2,96],15:[2,96],17:[2,96],34:[2,96],81:[2,96],84:[2,96],86:[2,96],82:[2,96],52:[2,96],85:[2,96],12:[2,96],60:[2,96],65:[2,96],59:[2,96],63:[2,96]},{96:69,29:33,74:34,75:35,97:36,87:[1,19],10:[1,37],90:38,99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45],40:[2,113],12:[2,113],63:[2,113]},{9:145,13:[1,5]},{12:[2,31],40:[2,31]},{12:[1,146]},{12:[1,147]},{40:[1,148],12:[2,67]},{12:[2,70],40:[2,70]},{40:[2,71],12:[2,71]},{12:[2,104],40:[2,104],81:[2,104],84:[2,104],86:[2,104],82:[2,104],52:[2,104],17:[2,104],15:[2,104],85:[2,104],10:[2,104],87:[2,104],78:[2,104],92:[2,104],93:[2,104],79:[2,104],99:[2,104],60:[2,104],65:[2,104],59:[2,104]},{35:149,36:83,79:[1,45],10:[1,84]},{38:150,94:121,88:122,43:123,87:[1,63],78:[1,57],32:58,79:[1,27],34:[2,26],17:[2,26],15:[2,26]},{15:[2,28],17:[2,28],34:[2,28],78:[2,28],79:[2,28],87:[2,28]},{87:[2,108],79:[2,108],78:[2,108],34:[2,108],17:[2,108],15:[2,108]},{87:[2,109],79:[2,109],78:[2,109],34:[2,109],17:[2,109],15:[2,109]},{15:[2,110],17:[2,110],34:[2,110],78:[2,110],79:[2,110],87:[2,110]},{15:[2,51],17:[2,51],59:[2,51],65:[2,51],12:[2,51],40:[2,51],60:[2,51],81:[2,51],84:[2,51],86:[2,51],82:[2,51],52:[2,51]},{58:[2,54],85:[2,54],10:[2,54],87:[2,54],78:[2,54],92:[2,54],93:[2,54],79:[2,54],99:[2,54],62:[2,54],64:[2,54],67:[2,54],57:[2,54]},{67:[2,82],64:[2,82],62:[2,82],99:[2,82],79:[2,82],93:[2,82],92:[2,82],78:[2,82],87:[2,82],10:[2,82],85:[2,82],58:[2,82],57:[2,82]},{67:[2,83],64:[2,83],62:[2,83],99:[2,83],79:[2,83],93:[2,83],92:[2,83],78:[2,83],87:[2,83],10:[2,83],85:[2,83],58:[2,83],57:[2,83]},{58:[2,84],85:[2,84],10:[2,84],87:[2,84],78:[2,84],92:[2,84],93:[2,84],79:[2,84],99:[2,84],62:[2,84],64:[2,84],67:[2,84],57:[2,84]},{58:[2,85],85:[2,85],10:[2,85],87:[2,85],78:[2,85],92:[2,85],93:[2,85],79:[2,85],99:[2,85],62:[2,85],64:[2,85],67:[2,85],57:[2,85]},{85:[1,151],87:[1,152]},{67:[2,87],64:[2,87],62:[2,87],99:[2,87],79:[2,87],93:[2,87],92:[2,87],78:[2,87],87:[2,87],10:[2,87],85:[2,87],58:[2,87],57:[2,87]},{59:[1,153]},{81:[2,63],84:[2,63],86:[2,63],82:[2,63],52:[2,63],17:[2,63],15:[2,63],85:[2,63],10:[2,63],87:[2,63],78:[2,63],92:[2,63],93:[2,63],79:[2,63],99:[2,63],12:[2,63],40:[2,63],60:[2,63],65:[2,63],59:[2,63]},{63:[1,154],96:69,29:33,74:34,75:35,97:36,87:[1,19],10:[1,37],90:38,99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{65:[1,155]},{68:[1,156]},{15:[1,157],26:158,19:159,27:16,29:18,87:[1,19],10:[1,20]},{12:[1,160],40:[1,161]},{15:[2,39],17:[2,39]},{50:162,29:104,32:105,87:[1,19],10:[1,20],79:[1,27],12:[2,42]},{44:[1,163],45:164,72:114,73:115,36:116,79:[1,45],10:[1,84],12:[2,68]},{12:[1,165]},{12:[1,166],40:[1,167]},{12:[2,122],40:[2,122]},{5:[2,3]},{40:[2,36],12:[2,36]},{40:[2,37],12:[2,37]},{73:168,36:116,79:[1,45],10:[1,84]},{15:[2,23],17:[2,23],34:[2,23]},{15:[2,27],17:[2,27],34:[2,27],78:[2,27],79:[2,27],87:[2,27]},{84:[1,169]},{84:[1,170]},{31:171,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{31:172,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{13:[1,173]},{31:174,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{68:[2,13]},{15:[1,175],17:[1,176]},{15:[2,16],17:[2,16]},{15:[2,75],17:[2,75],52:[2,75],82:[2,75],86:[2,75],84:[2,75],81:[2,75],59:[2,75],65:[2,75],12:[2,75],40:[2,75],60:[2,75],99:[2,75],79:[2,75],93:[2,75],92:[2,75],78:[2,75],87:[2,75],10:[2,75],85:[2,75]},{77:177,31:178,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{12:[2,45],40:[2,45]},{12:[1,179]},{12:[1,180]},{15:[2,40],17:[2,40]},{22:[2,120],87:[2,120],10:[2,120],78:[2,120],92:[2,120],93:[2,120],79:[2,120],99:[2,120],40:[2,120],12:[2,120],63:[2,120]},{71:181,95:72,96:73,74:74,29:33,75:35,97:36,90:38,87:[1,19],10:[1,37],99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{12:[2,69],40:[2,69]},{58:[2,86],85:[2,86],10:[2,86],87:[2,86],78:[2,86],92:[2,86],93:[2,86],79:[2,86],99:[2,86],62:[2,86],64:[2,86],67:[2,86],57:[2,86]},{67:[2,88],64:[2,88],62:[2,88],99:[2,88],79:[2,88],93:[2,88],92:[2,88],78:[2,88],87:[2,88],10:[2,88],85:[2,88],58:[2,88],57:[2,88]},{60:[1,182]},{15:[2,59],17:[2,59],52:[2,59],82:[2,59],86:[2,59],84:[2,59],81:[2,59],59:[2,59],65:[2,59],12:[2,59],40:[2,59],60:[2,59]},{66:183,70:184,71:185,95:72,96:73,74:74,29:33,75:35,97:36,90:38,87:[1,19],10:[1,37],99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{15:[2,61],17:[2,61],52:[2,61],82:[2,61],86:[2,61],84:[2,61],81:[2,61],59:[2,61],65:[2,61],12:[2,61],40:[2,61],60:[2,61]},{68:[2,14]},{19:186,27:16,29:18,87:[1,19],10:[1,20]},{12:[1,187],40:[1,188]},{12:[2,79],40:[2,79]},{40:[2,49],12:[2,49]},{40:[2,50],12:[2,50]},{12:[2,121],40:[2,121]},{31:189,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{15:[1,190],17:[1,191]},{15:[2,65],17:[2,65]},{63:[1,192]},{15:[2,15],17:[2,15]},{81:[2,77],84:[2,77],86:[2,77],82:[2,77],52:[2,77],17:[2,77],15:[2,77],85:[2,77],10:[2,77],87:[2,77],78:[2,77],92:[2,77],93:[2,77],79:[2,77],99:[2,77],12:[2,77],40:[2,77],60:[2,77],65:[2,77],59:[2,77]},{31:193,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{15:[2,57],17:[2,57],52:[2,57],82:[2,57],86:[2,57],84:[2,57],81:[2,57],59:[2,57],65:[2,57],12:[2,57],40:[2,57],60:[2,57]},{15:[2,60],17:[2,60],52:[2,60],82:[2,60],86:[2,60],84:[2,60],81:[2,60],59:[2,60],65:[2,60],12:[2,60],40:[2,60],60:[2,60]},{70:194,71:185,95:72,96:73,74:74,29:33,75:35,97:36,90:38,87:[1,19],10:[1,37],99:[1,39],78:[1,40],91:41,36:42,92:[1,43],93:[1,44],79:[1,45]},{31:195,51:65,54:66,58:[2,56],85:[2,56],10:[2,56],87:[2,56],78:[2,56],92:[2,56],93:[2,56],79:[2,56],99:[2,56],62:[2,56],64:[2,56],67:[2,56],57:[2,56]},{12:[2,78],40:[2,78]},{15:[2,64],17:[2,64]},{17:[2,66],15:[2,66]}],
defaultActions: {4:[2,4],6:[2,1],23:[2,5],47:[2,2],102:[2,43],145:[2,3],157:[2,13],175:[2,14]},
parseError: 
function parseError(str, hash) {
    throw new Error(str);
}
,
parse: 
function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    if (typeof this.yy.parseError === "function") {
        this.parseError = this.yy.parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null) {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            if (!recovering) {
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                }
                var errStr = "";
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ");
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : ("'" + (this.terminals_[symbol] || symbol) + "'"));
                }
                this.parseError(errStr, {text:this.lexer.match, token:this.terminals_[symbol] || symbol, line:this.lexer.yylineno, loc:yyloc, expected:expected});
            }
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || "Parsing halted.");
                }
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }
            while (1) {
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || "Parsing halted.");
                }
                popStack(1);
                state = stack[stack.length - 1];
            }
            preErrorSymbol = symbol;
            symbol = TERROR;
            state = stack[stack.length - 1];
            action = table[state] && table[state][TERROR];
            recovering = 3;
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line:lstack[lstack.length - (len || 1)].first_line, last_line:lstack[lstack.length - 1].last_line, first_column:lstack[lstack.length - (len || 1)].first_column, last_column:lstack[lstack.length - 1].last_column};
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
    }
    return true;
}
};
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = JSHCparser;
exports.parse = function () { return JSHCparser.parse.apply(JSHCparser, arguments); }
exports.main = 
function commonjsMain(args) {
    if (!args[1]) {
        throw new Error("Usage: " + args[0] + " FILE");
    }
    if (typeof process !== "undefined") {
        var source = require("fs").readFileSync(require("path").join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset:"utf-8"});
    }
    return exports.parser.parse(source);
}

if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}