var Fr=Object.create;var Oe=Object.defineProperty;var Ur=Object.getOwnPropertyDescriptor;var Hr=Object.getOwnPropertyNames;var Zr=Object.getPrototypeOf,Yr=Object.prototype.hasOwnProperty;var Jr=e=>Oe(e,"__esModule",{value:!0});var x=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Qr=(e,t,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Hr(t))!Yr.call(e,n)&&n!=="default"&&Oe(e,n,{get:()=>t[n],enumerable:!(s=Ur(t,n))||s.enumerable});return e},Xr=e=>Qr(Jr(Oe(e!=null?Fr(Zr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var sr=x(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});function et(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var tt=function(){function e(s){var n=this;this._insertTag=function(c){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(c,i),n.tags.push(c)},this.isSpeedy=s.speedy===void 0?!0:s.speedy,this.tags=[],this.ctr=0,this.nonce=s.nonce,this.key=s.key,this.container=s.container,this.prepend=s.prepend,this.insertionPoint=s.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(rt(this));var c=this.tags[this.tags.length-1];if(this.isSpeedy){var i=et(c);try{i.insertRule(n,i.cssRules.length)}catch(f){}}else c.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}();Ie.StyleSheet=tt});var cr=x((en,ar)=>{"use strict";ar.exports=sr()});var or=x((ye,ir)=>{(function(e,t){typeof ye=="object"&&typeof ir!="undefined"?t(ye):typeof define=="function"&&define.amd?define(["exports"],t):(e=e||self,t(e.stylis={}))})(ye,function(e){"use strict";var t="-ms-",s="-moz-",n="-webkit-",c="comm",i="rule",f="decl",h="@page",m="@media",v="@import",y="@charset",C="@viewport",Q="@supports",xe="@document",we="@namespace",ne="@keyframes",Ee="@font-face",se="@counter-style",Se="@font-feature-values",P=Math.abs,w=String.fromCharCode,E=Object.assign;function S(r,o){return b(r,0)^45?(((o<<2^b(r,0))<<2^b(r,1))<<2^b(r,2))<<2^b(r,3):0}function z(r){return r.trim()}function $(r,o){return(r=o.exec(r))?r[0]:r}function l(r,o,u){return r.replace(o,u)}function R(r,o){return r.indexOf(o)}function b(r,o){return r.charCodeAt(o)|0}function D(r,o,u){return r.slice(o,u)}function I(r){return r.length}function X(r){return r.length}function L(r,o){return o.push(r),r}function ke(r,o){return r.map(o).join("")}e.line=1,e.column=1,e.length=0,e.position=0,e.character=0,e.characters="";function ae(r,o,u,d,p,M,W){return{value:r,root:o,parent:u,type:d,props:p,children:M,line:e.line,column:e.column,length:W,return:""}}function ee(r,o){return E(ae("",null,null,"",null,null,0),r,{length:-r.length},o)}function Ye(){return e.character}function Je(){return e.character=e.position>0?b(e.characters,--e.position):0,e.column--,e.character===10&&(e.column=1,e.line--),e.character}function j(){return e.character=e.position<e.length?b(e.characters,e.position++):0,e.column++,e.character===10&&(e.column=1,e.line++),e.character}function F(){return b(e.characters,e.position)}function ce(){return e.position}function ie(r,o){return D(e.characters,r,o)}function oe(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $e(r){return e.line=e.column=1,e.length=I(e.characters=r),e.position=0,[]}function _e(r){return e.characters="",r}function ue(r){return z(ie(e.position-1,pe(r===91?r+2:r===40?r+1:r)))}function Qe(r){return _e(er($e(r)))}function Xe(r){for(;(e.character=F())&&e.character<33;)j();return oe(r)>2||oe(e.character)>3?"":" "}function er(r){for(;j();)switch(oe(e.character)){case 0:L(Te(e.position-1),r);break;case 2:L(ue(e.character),r);break;default:L(w(e.character),r)}return r}function rr(r,o){for(;--o&&j()&&!(e.character<48||e.character>102||e.character>57&&e.character<65||e.character>70&&e.character<97););return ie(r,ce()+(o<6&&F()==32&&j()==32))}function pe(r){for(;j();)switch(e.character){case r:return e.position;case 34:case 39:r!==34&&r!==39&&pe(e.character);break;case 40:r===41&&pe(r);break;case 92:j();break}return e.position}function tr(r,o){for(;j()&&r+e.character!==47+10;)if(r+e.character===42+42&&F()===47)break;return"/*"+ie(o,e.position-1)+"*"+w(r===47?r:j())}function Te(r){for(;!oe(F());)j();return ie(r,e.position)}function Pr(r){return _e(fe("",null,null,null,[""],r=$e(r),0,[0],r))}function fe(r,o,u,d,p,M,W,k,U){for(var V=0,H=0,_=W,Y=0,te=0,G=0,A=1,he=1,N=1,T=0,Z="",me=p,J=M,B=d,g=Z;he;)switch(G=T,T=j()){case 40:if(G!=108&&b(g,_-1)==58){R(g+=l(ue(T),"&","&\f"),"&\f")!=-1&&(N=-1);break}case 34:case 39:case 91:g+=ue(T);break;case 9:case 10:case 13:case 32:g+=Xe(G);break;case 92:g+=rr(ce()-1,7);continue;case 47:switch(F()){case 42:case 47:L(nr(tr(j(),ce()),o,u),U);break;default:g+="/"}break;case 123*A:k[V++]=I(g)*N;case 125*A:case 59:case 0:switch(T){case 0:case 125:he=0;case 59+H:te>0&&I(g)-_&&L(te>32?Me(g+";",d,u,_-1):Me(l(g," ","")+";",d,u,_-2),U);break;case 59:g+=";";default:if(L(B=je(g,o,u,V,H,p,k,Z,me=[],J=[],_),M),T===123)if(H===0)fe(g,o,B,B,me,M,_,k,J);else switch(Y===99&&b(g,3)===110?100:Y){case 100:case 109:case 115:fe(r,B,B,d&&L(je(r,B,B,0,0,p,k,Z,p,me=[],_),J),p,J,_,k,d?me:J);break;default:fe(g,B,B,B,[""],J,0,k,J)}}V=H=te=0,A=N=1,Z=g="",_=W;break;case 58:_=1+I(g),te=G;default:if(A<1){if(T==123)--A;else if(T==125&&A++==0&&Je()==125)continue}switch(g+=w(T),T*A){case 38:N=H>0?1:(g+="\f",-1);break;case 44:k[V++]=(I(g)-1)*N,N=1;break;case 64:F()===45&&(g+=ue(j())),Y=F(),H=_=I(Z=g+=Te(ce())),T++;break;case 45:G===45&&I(g)==2&&(A=0)}}return M}function je(r,o,u,d,p,M,W,k,U,V,H){for(var _=p-1,Y=p===0?M:[""],te=X(Y),G=0,A=0,he=0;G<d;++G)for(var N=0,T=D(r,_+1,_=P(A=W[G])),Z=r;N<te;++N)(Z=z(A>0?Y[N]+" "+T:l(T,/&\f/g,Y[N])))&&(U[he++]=Z);return ae(r,o,u,p===0?i:k,U,V,H)}function nr(r,o,u){return ae(r,o,u,c,w(Ye()),D(r,2,-2),0)}function Me(r,o,u,d){return ae(r,o,u,f,D(r,0,d),D(r,d+1,-1),d)}function Ce(r,o,u){switch(S(r,o)){case 5103:return n+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return n+r+r;case 4789:return s+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return n+r+s+r+t+r+r;case 5936:switch(b(r,o+11)){case 114:return n+r+t+l(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return n+r+t+l(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return n+r+t+l(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return n+r+t+r+r;case 6165:return n+r+t+"flex-"+r+r;case 5187:return n+r+l(r,/(\w+).+(:[^]+)/,n+"box-$1$2"+t+"flex-$1$2")+r;case 5443:return n+r+t+"flex-item-"+l(r,/flex-|-self/g,"")+($(r,/flex-|baseline/)?"":t+"grid-row-"+l(r,/flex-|-self/g,""))+r;case 4675:return n+r+t+"flex-line-pack"+l(r,/align-content|flex-|-self/g,"")+r;case 5548:return n+r+t+l(r,"shrink","negative")+r;case 5292:return n+r+t+l(r,"basis","preferred-size")+r;case 6060:return n+"box-"+l(r,"-grow","")+n+r+t+l(r,"grow","positive")+r;case 4554:return n+l(r,/([^-])(transform)/g,"$1"+n+"$2")+r;case 6187:return l(l(l(r,/(zoom-|grab)/,n+"$1"),/(image-set)/,n+"$1"),r,"")+r;case 5495:case 3959:return l(r,/(image-set\([^]*)/,n+"$1$`$1");case 4968:return l(l(r,/(.+:)(flex-)?(.*)/,n+"box-pack:$3"+t+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+n+r+r;case 4200:if(!$(r,/flex-|baseline/))return t+"grid-column-align"+D(r,o)+r;break;case 2592:case 3360:return t+l(r,"template-","")+r;case 4384:case 3616:return u&&u.some(function(d,p){return o=p,$(d.props,/grid-\w+-end/)})?~R(r+(u=u[o].value),"span")?r:t+l(r,"-start","")+r+t+"grid-row-span:"+(~R(u,"span")?$(u,/\d+/):+$(u,/\d+/)-+$(r,/\d+/))+";":t+l(r,"-start","")+r;case 4896:case 4128:return u&&u.some(function(d){return $(d.props,/grid-\w+-start/)})?r:t+l(l(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return l(r,/(.+)-inline(.+)/,n+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(I(r)-1-o>6)switch(b(r,o+1)){case 109:if(b(r,o+4)!==45)break;case 102:return l(r,/(.+:)(.+)-([^]+)/,"$1"+n+"$2-$3$1"+s+(b(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~R(r,"stretch")?Ce(l(r,"stretch","fill-available"),o,u)+r:r}break;case 5152:case 5920:return l(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,p,M,W,k,U,V){return t+p+":"+M+V+(W?t+p+"-span:"+(k?U:+U-+M)+V:"")+r});case 4949:if(b(r,o+6)===121)return l(r,":",":"+n)+r;break;case 6444:switch(b(r,b(r,14)===45?18:11)){case 120:return l(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+n+(b(r,14)===45?"inline-":"")+"box$3$1"+n+"$2$3$1"+t+"$2box$3")+r;case 100:return l(r,":",":"+t)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return l(r,"scroll-","scroll-snap-")+r}return r}function re(r,o){for(var u="",d=X(r),p=0;p<d;p++)u+=o(r[p],p,r,o)||"";return u}function Rr(r,o,u,d){switch(r.type){case v:case f:return r.return=r.return||r.value;case c:return"";case ne:return r.return=r.value+"{"+re(r.children,d)+"}";case i:r.value=r.props.join(",")}return I(u=re(r.children,d))?r.return=r.value+"{"+u+"}":""}function Dr(r){var o=X(r);return function(u,d,p,M){for(var W="",k=0;k<o;k++)W+=r[k](u,d,p,M)||"";return W}}function Vr(r){return function(o){o.root||(o=o.return)&&r(o)}}function Gr(r,o,u,d){if(r.length>-1&&!r.return)switch(r.type){case f:r.return=Ce(r.value,r.length,u);return;case ne:return re([ee(r,{value:l(r.value,"@","@"+n)})],d);case i:if(r.length)return ke(r.props,function(p){switch($(p,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return re([ee(r,{props:[l(p,/:(read-\w+)/,":"+s+"$1")]})],d);case"::placeholder":return re([ee(r,{props:[l(p,/:(plac\w+)/,":"+n+"input-$1")]}),ee(r,{props:[l(p,/:(plac\w+)/,":"+s+"$1")]}),ee(r,{props:[l(p,/:(plac\w+)/,t+"input-$1")]})],d)}return""})}}function Lr(r){switch(r.type){case i:r.props=r.props.map(function(o){return ke(Qe(o),function(u,d,p){switch(b(u,0)){case 12:return D(u,1,I(u));case 0:case 40:case 43:case 62:case 126:return u;case 58:p[++d]==="global"&&(p[d]="",p[++d]="\f"+D(p[d],d=1,-1));case 32:return d===1?"":u;default:switch(d){case 0:return r=u,X(p)>1?"":u;case(d=X(p)-1):case 2:return d===2?u+r+r:u+r;default:return u}}})})}}e.CHARSET=y,e.COMMENT=c,e.COUNTER_STYLE=se,e.DECLARATION=f,e.DOCUMENT=xe,e.FONT_FACE=Ee,e.FONT_FEATURE_VALUES=Se,e.IMPORT=v,e.KEYFRAMES=ne,e.MEDIA=m,e.MOZ=s,e.MS=t,e.NAMESPACE=we,e.PAGE=h,e.RULESET=i,e.SUPPORTS=Q,e.VIEWPORT=C,e.WEBKIT=n,e.abs=P,e.alloc=$e,e.append=L,e.assign=E,e.caret=ce,e.char=Ye,e.charat=b,e.combine=ke,e.comment=nr,e.commenter=tr,e.compile=Pr,e.copy=ee,e.dealloc=_e,e.declaration=Me,e.delimit=ue,e.delimiter=pe,e.escaping=rr,e.from=w,e.hash=S,e.identifier=Te,e.indexof=R,e.match=$,e.middleware=Dr,e.namespace=Lr,e.next=j,e.node=ae,e.parse=fe,e.peek=F,e.prefix=Ce,e.prefixer=Gr,e.prev=Je,e.replace=l,e.ruleset=je,e.rulesheet=Vr,e.serialize=re,e.sizeof=X,e.slice=ie,e.stringify=Rr,e.strlen=I,e.substr=D,e.token=oe,e.tokenize=Qe,e.tokenizer=er,e.trim=z,e.whitespace=Xe,Object.defineProperty(e,"__esModule",{value:!0})})});var ur=x(We=>{"use strict";Object.defineProperty(We,"__esModule",{value:!0});var nt=function(t){var s=new WeakMap;return function(n){if(s.has(n))return s.get(n);var c=t(n);return s.set(n,c),c}};We.default=nt});var lr=x((tn,fr)=>{"use strict";fr.exports=ur()});var dr=x(Ae=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0});function st(e){var t=Object.create(null);return function(s){return t[s]===void 0&&(t[s]=e(s)),t[s]}}Ae.default=st});var Ne=x((sn,pr)=>{"use strict";pr.exports=dr()});var vr=x(ze=>{"use strict";Object.defineProperty(ze,"__esModule",{value:!0});var at=cr(),a=or(),ct=lr(),it=Ne();function hr(e){return e&&e.__esModule?e:{default:e}}var ot=hr(ct),ut=hr(it),ft=function(t,s,n){for(var c=0,i=0;c=i,i=a.peek(),c===38&&i===12&&(s[n]=1),!a.token(i);)a.next();return a.slice(t,a.position)},lt=function(t,s){var n=-1,c=44;do switch(a.token(c)){case 0:c===38&&a.peek()===12&&(s[n]=1),t[n]+=ft(a.position-1,s,n);break;case 2:t[n]+=a.delimit(c);break;case 4:if(c===44){t[++n]=a.peek()===58?"&\f":"",s[n]=t[n].length;break}default:t[n]+=a.from(c)}while(c=a.next());return t},dt=function(t,s){return a.dealloc(lt(a.alloc(t),s))},mr=new WeakMap,pt=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var s=t.value,n=t.parent,c=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&s.charCodeAt(0)!==58&&!mr.get(n))&&!c){mr.set(t,!0);for(var i=[],f=dt(s,i),h=n.props,m=0,v=0;m<f.length;m++)for(var y=0;y<h.length;y++,v++)t.props[v]=i[m]?f[m].replace(/&\f/g,h[y]):h[y]+" "+f[m]}}},ht=function(t){if(t.type==="decl"){var s=t.value;s.charCodeAt(0)===108&&s.charCodeAt(2)===98&&(t.return="",t.value="")}};function yr(e,t){switch(a.hash(e,t)){case 5103:return a.WEBKIT+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a.WEBKIT+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return a.WEBKIT+e+a.MOZ+e+a.MS+e+e;case 6828:case 4268:return a.WEBKIT+e+a.MS+e+e;case 6165:return a.WEBKIT+e+a.MS+"flex-"+e+e;case 5187:return a.WEBKIT+e+a.replace(e,/(\w+).+(:[^]+)/,a.WEBKIT+"box-$1$2"+a.MS+"flex-$1$2")+e;case 5443:return a.WEBKIT+e+a.MS+"flex-item-"+a.replace(e,/flex-|-self/,"")+e;case 4675:return a.WEBKIT+e+a.MS+"flex-line-pack"+a.replace(e,/align-content|flex-|-self/,"")+e;case 5548:return a.WEBKIT+e+a.MS+a.replace(e,"shrink","negative")+e;case 5292:return a.WEBKIT+e+a.MS+a.replace(e,"basis","preferred-size")+e;case 6060:return a.WEBKIT+"box-"+a.replace(e,"-grow","")+a.WEBKIT+e+a.MS+a.replace(e,"grow","positive")+e;case 4554:return a.WEBKIT+a.replace(e,/([^-])(transform)/g,"$1"+a.WEBKIT+"$2")+e;case 6187:return a.replace(a.replace(a.replace(e,/(zoom-|grab)/,a.WEBKIT+"$1"),/(image-set)/,a.WEBKIT+"$1"),e,"")+e;case 5495:case 3959:return a.replace(e,/(image-set\([^]*)/,a.WEBKIT+"$1$`$1");case 4968:return a.replace(a.replace(e,/(.+:)(flex-)?(.*)/,a.WEBKIT+"box-pack:$3"+a.MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a.WEBKIT+e+e;case 4095:case 3583:case 4068:case 2532:return a.replace(e,/(.+)-inline(.+)/,a.WEBKIT+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(a.strlen(e)-1-t>6)switch(a.charat(e,t+1)){case 109:if(a.charat(e,t+4)!==45)break;case 102:return a.replace(e,/(.+:)(.+)-([^]+)/,"$1"+a.WEBKIT+"$2-$3$1"+a.MOZ+(a.charat(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~a.indexof(e,"stretch")?yr(a.replace(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(a.charat(e,t+1)!==115)break;case 6444:switch(a.charat(e,a.strlen(e)-3-(~a.indexof(e,"!important")&&10))){case 107:return a.replace(e,":",":"+a.WEBKIT)+e;case 101:return a.replace(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a.WEBKIT+(a.charat(e,14)===45?"inline-":"")+"box$3$1"+a.WEBKIT+"$2$3$1"+a.MS+"$2box$3")+e}break;case 5936:switch(a.charat(e,t+11)){case 114:return a.WEBKIT+e+a.MS+a.replace(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return a.WEBKIT+e+a.MS+a.replace(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return a.WEBKIT+e+a.MS+a.replace(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return a.WEBKIT+e+a.MS+e+e}return e}var mt=function(t,s,n,c){if(t.length>-1&&!t.return)switch(t.type){case a.DECLARATION:t.return=yr(t.value,t.length);break;case a.KEYFRAMES:return a.serialize([a.copy(t,{value:a.replace(t.value,"@","@"+a.WEBKIT)})],c);case a.RULESET:if(t.length)return a.combine(t.props,function(i){switch(a.match(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return a.serialize([a.copy(t,{props:[a.replace(i,/:(read-\w+)/,":"+a.MOZ+"$1")]})],c);case"::placeholder":return a.serialize([a.copy(t,{props:[a.replace(i,/:(plac\w+)/,":"+a.WEBKIT+"input-$1")]}),a.copy(t,{props:[a.replace(i,/:(plac\w+)/,":"+a.MOZ+"$1")]}),a.copy(t,{props:[a.replace(i,/:(plac\w+)/,a.MS+"input-$1")]})],c)}return""})}},ve=typeof document!="undefined",yt=ve?void 0:ot.default(function(){return ut.default(function(){var e={};return function(t){return e[t]}})}),vt=[mt],gt=function(t){var s=t.key;if(ve&&s==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(w){var E=w.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var c=t.stylisPlugins||vt,i={},f,h=[];ve&&(f=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(w){for(var E=w.getAttribute("data-emotion").split(" "),S=1;S<E.length;S++)i[E[S]]=!0;h.push(w)}));var m,v=[pt,ht];if(ve){var y,C=[a.stringify,a.rulesheet(function(w){y.insert(w)})],Q=a.middleware(v.concat(c,C)),xe=function(E){return a.serialize(a.compile(E),Q)};m=function(E,S,z,$){y=z,xe(E?E+"{"+S.styles+"}":S.styles),$&&(P.inserted[S.name]=!0)}}else{var we=[a.stringify],ne=a.middleware(v.concat(c,we)),Ee=function(E){return a.serialize(a.compile(E),ne)},se=yt(c)(s),Se=function(E,S){var z=S.name;return se[z]===void 0&&(se[z]=Ee(E?E+"{"+S.styles+"}":S.styles)),se[z]};m=function(E,S,z,$){var l=S.name,R=Se(E,S);if(P.compat===void 0)return $&&(P.inserted[l]=!0),R;if($)P.inserted[l]=R;else return R}}var P={key:s,sheet:new at.StyleSheet({key:s,container:f,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:m};return P.sheet.hydrate(h),P};ze.default=gt});var Be=x((cn,gr)=>{"use strict";gr.exports=vr()});var br=x(Ke=>{"use strict";Object.defineProperty(Ke,"__esModule",{value:!0});function bt(e){for(var t=0,s,n=0,c=e.length;c>=4;++n,c-=4)s=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,s=(s&65535)*1540483477+((s>>>16)*59797<<16),s^=s>>>24,t=(s&65535)*1540483477+((s>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(c){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}Ke.default=bt});var wr=x((un,xr)=>{"use strict";xr.exports=br()});var Er=x(qe=>{"use strict";Object.defineProperty(qe,"__esModule",{value:!0});var xt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};qe.default=xt});var kr=x((ln,Sr)=>{"use strict";Sr.exports=Er()});var Mr=x(De=>{"use strict";Object.defineProperty(De,"__esModule",{value:!0});var wt=wr(),Et=kr(),St=Ne();function Pe(e){return e&&e.__esModule?e:{default:e}}var kt=Pe(wt),$t=Pe(Et),_t=Pe(St),Tt=/[A-Z]|^ms/g,jt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,$r=function(t){return t.charCodeAt(1)===45},_r=function(t){return t!=null&&typeof t!="boolean"},Re=_t.default(function(e){return $r(e)?e:e.replace(Tt,"-$&").toLowerCase()}),Tr=function(t,s){switch(t){case"animation":case"animationName":if(typeof s=="string")return s.replace(jt,function(n,c,i){return K={name:c,styles:i,next:K},c})}return $t.default[t]!==1&&!$r(t)&&typeof s=="number"&&s!==0?s+"px":s};function le(e,t,s){if(s==null)return"";if(s.__emotion_styles!==void 0)return s;switch(typeof s){case"boolean":return"";case"object":{if(s.anim===1)return K={name:s.name,styles:s.styles,next:K},s.name;if(s.styles!==void 0){var n=s.next;if(n!==void 0)for(;n!==void 0;)K={name:n.name,styles:n.styles,next:K},n=n.next;var c=s.styles+";";return c}return Mt(e,t,s)}case"function":{if(e!==void 0){var i=K,f=s(e);return K=i,le(e,t,f)}break}}if(t==null)return s;var h=t[s];return h!==void 0?h:s}function Mt(e,t,s){var n="";if(Array.isArray(s))for(var c=0;c<s.length;c++)n+=le(e,t,s[c])+";";else for(var i in s){var f=s[i];if(typeof f!="object")t!=null&&t[f]!==void 0?n+=i+"{"+t[f]+"}":_r(f)&&(n+=Re(i)+":"+Tr(i,f)+";");else if(Array.isArray(f)&&typeof f[0]=="string"&&(t==null||t[f[0]]===void 0))for(var h=0;h<f.length;h++)_r(f[h])&&(n+=Re(i)+":"+Tr(i,f[h])+";");else{var m=le(e,t,f);switch(i){case"animation":case"animationName":{n+=Re(i)+":"+m+";";break}default:n+=i+"{"+m+"}"}}}return n}var jr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,K,Ct=function(t,s,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var c=!0,i="";K=void 0;var f=t[0];f==null||f.raw===void 0?(c=!1,i+=le(n,s,f)):i+=f[0];for(var h=1;h<t.length;h++)i+=le(n,s,t[h]),c&&(i+=f[h]);jr.lastIndex=0;for(var m="",v;(v=jr.exec(i))!==null;)m+="-"+v[1];var y=kt.default(i)+m;return{name:y,styles:i,next:K}};De.serializeStyles=Ct});var Ve=x((pn,Cr)=>{"use strict";Cr.exports=Mr()});var Ir=x(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});var Ge=typeof document!="undefined";function Ot(e,t,s){var n="";return s.split(" ").forEach(function(c){e[c]!==void 0?t.push(e[c]+";"):n+=c+" "}),n}var Or=function(t,s,n){var c=t.key+"-"+s.name;(n===!1||Ge===!1&&t.compat!==void 0)&&t.registered[c]===void 0&&(t.registered[c]=s.styles)},It=function(t,s,n){Or(t,s,n);var c=t.key+"-"+s.name;if(t.inserted[s.name]===void 0){var i="",f=s;do{var h=t.insert(s===f?"."+c:"",f,t.sheet,!0);!Ge&&h!==void 0&&(i+=h),f=f.next}while(f!==void 0);if(!Ge&&i.length!==0)return i}};de.getRegisteredStyles=Ot;de.insertStyles=It;de.registerStyles=Or});var Le=x((mn,Wr)=>{"use strict";Wr.exports=Ir()});var zr=x(He=>{"use strict";Object.defineProperty(He,"__esModule",{value:!0});var Wt=Be(),Fe=Ve(),Ue=Le();function At(e){return e&&e.__esModule?e:{default:e}}var Nt=At(Wt);function Ar(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Nr(e,t,s){var n=[],c=Ue.getRegisteredStyles(e,n,s);return n.length<2?s:c+t(n)}var zt=function(t){var s=Nt.default(t);s.sheet.speedy=function(h){this.isSpeedy=h},s.compat=!0;var n=function(){for(var m=arguments.length,v=new Array(m),y=0;y<m;y++)v[y]=arguments[y];var C=Fe.serializeStyles(v,s.registered,void 0);return Ue.insertStyles(s,C,!1),s.key+"-"+C.name},c=function(){for(var m=arguments.length,v=new Array(m),y=0;y<m;y++)v[y]=arguments[y];var C=Fe.serializeStyles(v,s.registered),Q="animation-"+C.name;return Ar(s,{name:C.name,styles:"@keyframes "+Q+"{"+C.styles+"}"}),Q},i=function(){for(var m=arguments.length,v=new Array(m),y=0;y<m;y++)v[y]=arguments[y];var C=Fe.serializeStyles(v,s.registered);Ar(s,C)},f=function(){for(var m=arguments.length,v=new Array(m),y=0;y<m;y++)v[y]=arguments[y];return Nr(s.registered,n,Bt(v))};return{css:n,cx:f,injectGlobal:i,keyframes:c,hydrate:function(m){m.forEach(function(v){s.inserted[v]=!0})},flush:function(){s.registered={},s.inserted={},s.sheet.flush()},sheet:s.sheet,cache:s,getRegisteredStyles:Ue.getRegisteredStyles.bind(null,s.registered),merge:Nr.bind(null,s.registered,n)}},Bt=function e(t){for(var s="",n=0;n<t.length;n++){var c=t[n];if(c!=null){var i=void 0;switch(typeof c){case"boolean":break;case"object":{if(Array.isArray(c))i=e(c);else{i="";for(var f in c)c[f]&&f&&(i&&(i+=" "),i+=f)}break}default:i=c}i&&(s&&(s+=" "),s+=i)}}return s};He.default=zt});var Br=x(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});Be();Ve();Le();var Kt=zr(),q=Kt.default({key:"css"}),qt=q.flush,Pt=q.hydrate,Rt=q.cx,Dt=q.merge,Vt=q.getRegisteredStyles,Gt=q.injectGlobal,Lt=q.keyframes,Ft=q.css,Ut=q.sheet,Ht=q.cache;O.cache=Ht;O.css=Ft;O.cx=Rt;O.flush=qt;O.getRegisteredStyles=Vt;O.hydrate=Pt;O.injectGlobal=Gt;O.keyframes=Lt;O.merge=Dt;O.sheet=Ut});var qr=x((gn,Kr)=>{"use strict";Kr.exports=Br()});var Ze=Xr(qr());import ge from"react";import{CheckMarkIcon as Zt}from"../../assets/icons/index.js";import{token as be}from"../../common/token/index.js";function Sn({theme:e,text:t,isChecked:s=!1,onClick:n}){return ge.createElement("label",{className:Yt(e)},ge.createElement("button",{className:Jt(e),onClick:n},ge.createElement(Zt,{color:e==="light"?"grey_60_light":"grey_60_dark"})),ge.createElement("span",null,t))}var Yt=e=>Ze.css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${e==="light"?be.color.grey_60_light:be.color.grey_60_dark};
  font-size: 14px;
  }
`;var Jt=e=>Ze.css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  border: 2px solid ${e==="light"?be.color.grey_40_light:be.color.grey_40_dark};
  border-radius: 4px;

  > svg {
    width: 16px;
    height: 16px;
    opacity: 0;
  }
`;export{Sn as Checkbox};