!function(e,r,i){"object"==typeof exports?module.exports=exports=r(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],r):r(e.CryptoJS)}(this,(function(e){return function(){var r=e,i=r.lib.BlockCipher,o=r.algo,t=[],n=[],c=[],s=[],f=[],d=[],u=[],h=[],y=[],a=[];!function(){for(var e=[],r=0;r<256;r++)e[r]=r<128?r<<1:r<<1^283;var i=0,o=0;for(r=0;r<256;r++){var p=o^o<<1^o<<2^o<<3^o<<4;p=p>>>8^255&p^99,t[i]=p,n[p]=i;var l=e[i],v=e[l],_=e[v],k=257*e[p]^16843008*p;c[i]=k<<24|k>>>8,s[i]=k<<16|k>>>16,f[i]=k<<8|k>>>24,d[i]=k;k=16843009*_^65537*v^257*l^16843008*i;u[p]=k<<24|k>>>8,h[p]=k<<16|k>>>16,y[p]=k<<8|k>>>24,a[p]=k,i?(i=l^e[e[e[_^l]]],o^=e[e[o]]):i=o=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],l=o.AES=i.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,r=e.words,i=e.sigBytes/4,o=4*((this._nRounds=i+6)+1),n=this._keySchedule=[],c=0;c<o;c++)if(c<i)n[c]=r[c];else{var s=n[c-1];c%i?i>6&&c%i==4&&(s=t[s>>>24]<<24|t[s>>>16&255]<<16|t[s>>>8&255]<<8|t[255&s]):(s=t[(s=s<<8|s>>>24)>>>24]<<24|t[s>>>16&255]<<16|t[s>>>8&255]<<8|t[255&s],s^=p[c/i|0]<<24),n[c]=n[c-i]^s}for(var f=this._invKeySchedule=[],d=0;d<o;d++){c=o-d;if(d%4)s=n[c];else s=n[c-4];f[d]=d<4||c<=4?s:u[t[s>>>24]]^h[t[s>>>16&255]]^y[t[s>>>8&255]]^a[t[255&s]]}}},encryptBlock:function(e,r){this._doCryptBlock(e,r,this._keySchedule,c,s,f,d,t)},decryptBlock:function(e,r){var i=e[r+1];e[r+1]=e[r+3],e[r+3]=i,this._doCryptBlock(e,r,this._invKeySchedule,u,h,y,a,n);i=e[r+1];e[r+1]=e[r+3],e[r+3]=i},_doCryptBlock:function(e,r,i,o,t,n,c,s){for(var f=this._nRounds,d=e[r]^i[0],u=e[r+1]^i[1],h=e[r+2]^i[2],y=e[r+3]^i[3],a=4,p=1;p<f;p++){var l=o[d>>>24]^t[u>>>16&255]^n[h>>>8&255]^c[255&y]^i[a++],v=o[u>>>24]^t[h>>>16&255]^n[y>>>8&255]^c[255&d]^i[a++],_=o[h>>>24]^t[y>>>16&255]^n[d>>>8&255]^c[255&u]^i[a++],k=o[y>>>24]^t[d>>>16&255]^n[u>>>8&255]^c[255&h]^i[a++];d=l,u=v,h=_,y=k}l=(s[d>>>24]<<24|s[u>>>16&255]<<16|s[h>>>8&255]<<8|s[255&y])^i[a++],v=(s[u>>>24]<<24|s[h>>>16&255]<<16|s[y>>>8&255]<<8|s[255&d])^i[a++],_=(s[h>>>24]<<24|s[y>>>16&255]<<16|s[d>>>8&255]<<8|s[255&u])^i[a++],k=(s[y>>>24]<<24|s[d>>>16&255]<<16|s[u>>>8&255]<<8|s[255&h])^i[a++];e[r]=l,e[r+1]=v,e[r+2]=_,e[r+3]=k},keySize:8});r.AES=i._createHelper(l)}(),e.AES}));