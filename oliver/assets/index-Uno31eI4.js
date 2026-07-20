(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="169",gl=0,uo=1,vl=2,Ac=1,Rc=2,un=3,pn=0,Ue=1,ze=2,Rn=0,wi=1,fo=2,po=3,mo=4,xl=5,Vn=100,yl=101,Ml=102,Sl=103,El=104,Tl=200,bl=201,Al=202,Rl=203,jr=204,Jr=205,wl=206,Cl=207,Pl=208,Ll=209,Il=210,Ul=211,Nl=212,Dl=213,Ol=214,Qr=0,ta=1,ea=2,Li=3,na=4,ia=5,sa=6,ra=7,Ga=0,Fl=1,Bl=2,wn=0,zl=1,kl=2,Gl=3,Hl=4,Vl=5,Wl=6,Xl=7,wc=300,Ii=301,Ui=302,aa=303,oa=304,tr=306,ca=1e3,Xn=1001,la=1002,Ie=1003,Yl=1004,is=1005,$e=1006,hr=1007,Yn=1008,mn=1009,Cc=1010,Pc=1011,$i=1012,Ha=1013,Zn=1014,dn=1015,ji=1016,Va=1017,Wa=1018,Ni=1020,Lc=35902,Ic=1021,Uc=1022,Ze=1023,Nc=1024,Dc=1025,Ci=1026,Di=1027,Oc=1028,Xa=1029,Fc=1030,Ya=1031,qa=1033,Os=33776,Fs=33777,Bs=33778,zs=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,_a=37496,ga=37808,va=37809,xa=37810,ya=37811,Ma=37812,Sa=37813,Ea=37814,Ta=37815,ba=37816,Aa=37817,Ra=37818,wa=37819,Ca=37820,Pa=37821,ks=36492,La=36494,Ia=36495,Bc=36283,Ua=36284,Na=36285,Da=36286,ql=3200,Kl=3201,zc=0,$l=1,An="",tn="srgb",Ln="srgb-linear",Ka="display-p3",er="display-p3-linear",Ws="linear",se="srgb",Xs="rec709",Ys="p3",si=7680,_o=519,Zl=512,jl=513,Jl=514,kc=515,Ql=516,th=517,eh=518,nh=519,Oa=35044,go="300 es",fn=2e3,qs=2001;class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,Fa=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function ih(i,t){return(i%t+t)%t}function ur(i,t,e){return(1-e)*i+e*t}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,c,l){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],_=n[8],g=s[0],p=s[3],m=s[6],T=s[1],S=s[4],A=s[7],D=s[2],P=s[5],R=s[8];return r[0]=a*g+o*T+c*D,r[3]=a*p+o*S+c*P,r[6]=a*m+o*A+c*R,r[1]=l*g+h*T+d*D,r[4]=l*p+h*S+d*P,r[7]=l*m+h*A+d*R,r[2]=f*g+u*T+_*D,r[5]=f*p+u*S+_*P,r[8]=f*m+u*A+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,_=e*d+n*f+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(s*l-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=u*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(dr.makeScale(t,e)),this}rotate(t){return this.premultiply(dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new It;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sh(){const i=Ks("canvas");return i.style.display="block",i}const vo={};function Hs(i){i in vo||(vo[i]=!0,console.warn(i))}function rh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ah(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function oh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xo=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yo=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bi={[Ln]:{transfer:Ws,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[tn]:{transfer:se,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[er]:{transfer:Ws,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(yo),fromReference:i=>i.applyMatrix3(xo)},[Ka]:{transfer:se,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(yo),fromReference:i=>i.applyMatrix3(xo).convertLinearToSRGB()}},ch=new Set([Ln,er]),qt={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ch.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Bi[t].toReference,s=Bi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Bi[i].primaries},getTransfer:function(i){return i===An?Ws:Bi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Bi[t].luminanceCoefficients)}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class lh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=Ks("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hh=0;class Hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pr(s[a].image)):r.push(pr(s[a]))}else r=pr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uh=0;class Re extends ei{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Xn,s=Xn,r=$e,a=Yn,o=Ze,c=mn,l=Re.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Cn(),this.name="",this.source=new Hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ca:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ca:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=wc;Re.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,A=(u+1)/2,D=(m+1)/2,P=(h+f)/4,R=(d+g)/4,F=(_+p)/4;return S>A&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=P/n,r=R/n):A>D?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=P/s,r=F/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=F/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-g)/T,this.z=(f-h)/T,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dh extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],u=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=_,t[e+3]=g;return}if(d!==g||c!==f||l!==u||h!==_){let p=1-o;const m=c*f+l*u+h*_+d*g,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const D=Math.sqrt(S),P=Math.atan2(D,m*T);p=Math.sin(p*P)/D,o=Math.sin(o*P)/D}const A=o*T;if(c=c*p+f*A,l=l*p+u*A,h=h*p+_*A,d=d*p+g*A,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],_=r[a+3];return t[e]=o*_+h*d+c*u-l*f,t[e+1]=c*_+h*f+l*d-o*u,t[e+2]=l*_+h*u+o*f-c*d,t[e+3]=h*_-o*d-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),u=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*_,this._y=l*u*d-f*h*_,this._z=l*h*_+f*u*d,this._w=l*h*d-f*u*_;break;case"YXZ":this._x=f*h*d+l*u*_,this._y=l*u*d-f*h*_,this._z=l*h*_-f*u*d,this._w=l*h*d+f*u*_;break;case"ZXY":this._x=f*h*d-l*u*_,this._y=l*u*d+f*h*_,this._z=l*h*_+f*u*d,this._w=l*h*d-f*u*_;break;case"ZYX":this._x=f*h*d-l*u*_,this._y=l*u*d+f*h*_,this._z=l*h*_-f*u*d,this._w=l*h*d+f*u*_;break;case"YZX":this._x=f*h*d+l*u*_,this._y=l*u*d+f*h*_,this._z=l*h*_-f*u*d,this._w=l*h*d-f*u*_;break;case"XZY":this._x=f*h*d-l*u*_,this._y=l*u*d-f*h*_,this._z=l*h*_+f*u*d,this._w=l*h*d+f*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mr.copy(this).projectOnVector(t),this.sub(mr)}reflect(t){return this.sub(mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new N,Mo=new Ji;class Qi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(t.matrixWorld),this.union(ss)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),rs.subVectors(this.max,zi),ai.subVectors(t.a,zi),oi.subVectors(t.b,zi),ci.subVectors(t.c,zi),vn.subVectors(oi,ai),xn.subVectors(ci,oi),Nn.subVectors(ai,ci);let e=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Nn.z,Nn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Nn.z,0,-Nn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Nn.y,Nn.x,0];return!_r(e,ai,oi,ci,rs)||(e=[1,0,0,0,1,0,0,0,1],!_r(e,ai,oi,ci,rs))?!1:(as.crossVectors(vn,xn),e=[as.x,as.y,as.z],_r(e,ai,oi,ci,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new N,new N,new N,new N,new N,new N,new N,new N],Ye=new N,ss=new Qi,ai=new N,oi=new N,ci=new N,vn=new N,xn=new N,Nn=new N,zi=new N,rs=new N,as=new N,Dn=new N;function _r(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);const o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ph=new Qi,ki=new N,gr=new N;class nr{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ph.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(gr)),this.expandByPoint(ki.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new N,vr=new N,os=new N,yn=new N,xr=new N,cs=new N,yr=new N;class $a{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vr.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(vr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(os),o=yn.dot(this.direction),c=-yn.dot(os),l=yn.lengthSq(),h=Math.abs(1-a*a);let d,f,u,_;if(h>0)if(d=a*c-o,f=a*o-c,_=r*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vr).addScaledVector(os,f),u}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),s=an.dot(an)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,s,r){xr.subVectors(e,t),cs.subVectors(n,t),yr.crossVectors(xr,cs);let a=this.direction.dot(yr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,t);const c=o*this.direction.dot(cs.crossVectors(yn,cs));if(c<0)return null;const l=o*this.direction.dot(xr.cross(yn));if(l<0||c+l>a)return null;const h=-o*yn.dot(yr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,c,l,h,d,f,u,_,g,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,u,_,g,p)}set(t,e,n,s,r,a,o,c,l,h,d,f,u,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,_=o*h,g=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+_*l,e[5]=f-g*l,e[9]=-o*c,e[2]=g-f*l,e[6]=_+u*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,u=c*d,_=l*h,g=l*d;e[0]=f+g*o,e[4]=_*o-u,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-_,e[6]=g+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,u=c*d,_=l*h,g=l*d;e[0]=f-g*o,e[4]=-a*d,e[8]=_+u*o,e[1]=u+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,u=a*d,_=o*h,g=o*d;e[0]=c*h,e[4]=_*l-u,e[8]=f*l+g,e[1]=c*d,e[5]=g*l+f,e[9]=u*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,u=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=g-f*d,e[8]=_*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*d+_,e[10]=f-g*d}else if(t.order==="XZY"){const f=a*c,u=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+g,e[5]=a*h,e[9]=u*d-_,e[2]=_*d-u,e[6]=o*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mh,t,_h)}lookAt(t,e,n){const s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Mn.crossVectors(n,Fe),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Mn.crossVectors(n,Fe)),Mn.normalize(),ls.crossVectors(Fe,Mn),s[0]=Mn.x,s[4]=ls.x,s[8]=Fe.x,s[1]=Mn.y,s[5]=ls.y,s[9]=Fe.y,s[2]=Mn.z,s[6]=ls.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],_=n[2],g=n[6],p=n[10],m=n[14],T=n[3],S=n[7],A=n[11],D=n[15],P=s[0],R=s[4],F=s[8],Q=s[12],v=s[1],E=s[5],W=s[9],k=s[13],X=s[2],$=s[6],H=s[10],j=s[14],V=s[3],lt=s[7],ht=s[11],vt=s[15];return r[0]=a*P+o*v+c*X+l*V,r[4]=a*R+o*E+c*$+l*lt,r[8]=a*F+o*W+c*H+l*ht,r[12]=a*Q+o*k+c*j+l*vt,r[1]=h*P+d*v+f*X+u*V,r[5]=h*R+d*E+f*$+u*lt,r[9]=h*F+d*W+f*H+u*ht,r[13]=h*Q+d*k+f*j+u*vt,r[2]=_*P+g*v+p*X+m*V,r[6]=_*R+g*E+p*$+m*lt,r[10]=_*F+g*W+p*H+m*ht,r[14]=_*Q+g*k+p*j+m*vt,r[3]=T*P+S*v+A*X+D*V,r[7]=T*R+S*E+A*$+D*lt,r[11]=T*F+S*W+A*H+D*ht,r[15]=T*Q+S*k+A*j+D*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],u=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*u-n*c*u)+g*(+e*c*u-e*l*f+r*a*f-s*a*u+s*l*h-r*c*h)+p*(+e*l*d-e*o*u-r*a*d+n*a*u+r*o*h-n*l*h)+m*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],u=t[11],_=t[12],g=t[13],p=t[14],m=t[15],T=d*p*l-g*f*l+g*c*u-o*p*u-d*c*m+o*f*m,S=_*f*l-h*p*l-_*c*u+a*p*u+h*c*m-a*f*m,A=h*g*l-_*d*l+_*o*u-a*g*u-h*o*m+a*d*m,D=_*d*c-h*g*c-_*o*f+a*g*f+h*o*p-a*d*p,P=e*T+n*S+s*A+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=T*R,t[1]=(g*f*r-d*p*r-g*s*u+n*p*u+d*s*m-n*f*m)*R,t[2]=(o*p*r-g*c*r+g*s*l-n*p*l-o*s*m+n*c*m)*R,t[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*u-n*c*u)*R,t[4]=S*R,t[5]=(h*p*r-_*f*r+_*s*u-e*p*u-h*s*m+e*f*m)*R,t[6]=(_*c*r-a*p*r-_*s*l+e*p*l+a*s*m-e*c*m)*R,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*u+e*c*u)*R,t[8]=A*R,t[9]=(_*d*r-h*g*r-_*n*u+e*g*u+h*n*m-e*d*m)*R,t[10]=(a*g*r-_*o*r+_*n*l-e*g*l-a*n*m+e*o*m)*R,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*u-e*o*u)*R,t[12]=D*R,t[13]=(h*g*s-_*d*s+_*n*f-e*g*f-h*n*p+e*d*p)*R,t[14]=(_*o*s-a*g*s-_*n*c+e*g*c+a*n*p-e*o*p)*R,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,_=r*d,g=a*h,p=a*d,m=o*d,T=c*l,S=c*h,A=c*d,D=n.x,P=n.y,R=n.z;return s[0]=(1-(g+m))*D,s[1]=(u+A)*D,s[2]=(_-S)*D,s[3]=0,s[4]=(u-A)*P,s[5]=(1-(f+m))*P,s[6]=(p+T)*P,s[7]=0,s[8]=(_+S)*R,s[9]=(p-T)*R,s[10]=(1-(f+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const a=li.set(s[4],s[5],s[6]).length(),o=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const l=1/r,h=1/a,d=1/o;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let u,_;if(o===fn)u=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===qs)u=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*l,u=(n+s)*h;let _,g;if(o===fn)_=(a+r)*d,g=-2*d;else if(o===qs)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new N,qe=new ae,mh=new N(0,0,0),_h=new N(1,1,1),Mn=new N,ls=new N,Fe=new N,So=new ae,Eo=new Ji;class Je{constructor(t=0,e=0,n=0,s=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return So.makeRotationFromQuaternion(t),this.setFromRotationMatrix(So,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gh=0;const To=new N,hi=new Ji,on=new ae,hs=new N,Gi=new N,vh=new N,xh=new Ji,bo=new N(1,0,0),Ao=new N(0,1,0),Ro=new N(0,0,1),wo={type:"added"},yh={type:"removed"},ui={type:"childadded",child:null},Mr={type:"childremoved",child:null};class ve extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new N,e=new Je,n=new Ji,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new It}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(bo,t)}rotateY(t){return this.rotateOnAxis(Ao,t)}rotateZ(t){return this.rotateOnAxis(Ro,t)}translateOnAxis(t,e){return To.copy(t).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bo,t)}translateY(t){return this.translateOnAxis(Ao,t)}translateZ(t){return this.translateOnAxis(Ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Gi,hs,this.up):on.lookAt(hs,Gi,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(on),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wo),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wo),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new N(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new N,cn=new N,Sr=new N,ln=new N,di=new N,fi=new N,Co=new N,Er=new N,Tr=new N,br=new N,Ar=new ce,Rr=new ce,wr=new ce;class ke{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),cn.subVectors(n,e),Sr.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(cn),c=Ke.dot(Sr),l=cn.dot(cn),h=cn.dot(Sr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,_=(a*h-o*c)*f;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(a,ln.y),c.addScaledVector(o,ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ar.setScalar(0),Rr.setScalar(0),wr.setScalar(0),Ar.fromBufferAttribute(t,e),Rr.fromBufferAttribute(t,n),wr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ar,r.x),a.addScaledVector(Rr,r.y),a.addScaledVector(wr,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),cn.subVectors(t,e),Ke.cross(cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ke.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,n),fi.subVectors(r,n),Er.subVectors(t,n);const c=di.dot(Er),l=fi.dot(Er);if(c<=0&&l<=0)return e.copy(n);Tr.subVectors(t,s);const h=di.dot(Tr),d=fi.dot(Tr);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(di,a);br.subVectors(t,r);const u=di.dot(br),_=fi.dot(br);if(_>=0&&u<=_)return e.copy(r);const g=u*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(fi,o);const p=h*_-u*d;if(p<=0&&d-h>=0&&u-_>=0)return Co.subVectors(r,s),o=(d-h)/(d-h+(u-_)),e.copy(s).addScaledVector(Co,o);const m=1/(p+g+f);return a=g*m,o=f*m,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=ih(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Cr(a,r,t+1/3),this.g=Cr(a,r,t),this.b=Cr(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Pe(Ee.r*255,0,255))*65536+Math.round(Pe(Ee.g*255,0,255))*256+Math.round(Pe(Ee.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=tn){qt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(us);const n=ur(Sn.h,us.h,e),s=ur(Sn.s,us.s,e),r=ur(Sn.l,us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Ut;Ut.NAMES=Wc;let Mh=0;class ni extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=wi,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Jr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kn extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new N,ds=new Nt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}}class Xc extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sh=0;const He=new ae,Pr=new ve,pi=new N,Be=new Qi,Hi=new Qi,ge=new N;class We extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Yc:Xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Be.min,Hi.min),Be.expandByPoint(ge),ge.addVectors(Be.max,Hi.max),Be.expandByPoint(ge)):(Be.expandByPoint(Hi.min),Be.expandByPoint(Hi.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ge.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(t,l),ge.add(pi)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new N,c[F]=new N;const l=new N,h=new N,d=new N,f=new Nt,u=new Nt,_=new Nt,g=new N,p=new N;function m(F,Q,v){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,Q),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,F),u.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,v),h.sub(l),d.sub(l),u.sub(f),_.sub(f);const E=1/(u.x*_.y-_.x*u.y);isFinite(E)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-u.y).multiplyScalar(E),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(E),o[F].add(g),o[Q].add(g),o[v].add(g),c[F].add(p),c[Q].add(p),c[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,Q=T.length;F<Q;++F){const v=T[F],E=v.start,W=v.count;for(let k=E,X=E+W;k<X;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new N,A=new N,D=new N,P=new N;function R(F){D.fromBufferAttribute(s,F),P.copy(D);const Q=o[F];S.copy(Q),S.sub(D.multiplyScalar(D.dot(Q))).normalize(),A.crossVectors(P,Q);const E=A.dot(c[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,E)}for(let F=0,Q=T.length;F<Q;++F){const v=T[F],E=v.start,W=v.count;for(let k=E,X=E+W;k<X;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let f=0,u=t.count;f<u;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,_=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?u=c[g]*o.data.stride+o.offset:u=c[g]*h;for(let m=0;m<h;m++)f[_++]=l[u++]}return new je(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new ae,On=new $a,fs=new nr,Lo=new N,ps=new N,ms=new N,_s=new N,Lr=new N,gs=new N,Io=new N,vs=new N;class Me extends ve{constructor(t=new We,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Lr.fromBufferAttribute(d,t),a?gs.addScaledVector(Lr,h):gs.addScaledVector(Lr.sub(e),h))}e.add(gs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(fs.containsPoint(On.origin)===!1&&(On.intersectSphere(fs,Lo)===null||On.origin.distanceToSquared(Lo)>(t.far-t.near)**2))&&(Po.copy(r).invert(),On.copy(t.ray).applyMatrix4(Po),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],T=Math.max(p.start,u.start),S=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let A=T,D=S;A<D;A+=3){const P=o.getX(A),R=o.getX(A+1),F=o.getX(A+2);s=xs(this,m,t,n,l,h,d,P,R,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=_,m=g;p<m;p+=3){const T=o.getX(p),S=o.getX(p+1),A=o.getX(p+2);s=xs(this,a,t,n,l,h,d,T,S,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],T=Math.max(p.start,u.start),S=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let A=T,D=S;A<D;A+=3){const P=A,R=A+1,F=A+2;s=xs(this,m,t,n,l,h,d,P,R,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let p=_,m=g;p<m;p+=3){const T=p,S=p+1,A=p+2;s=xs(this,a,t,n,l,h,d,T,S,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Eh(i,t,e,n,s,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===pn,o),c===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(vs);return l<e.near||l>e.far?null:{distance:l,point:vs.clone(),object:i}}function xs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ps),i.getVertexPosition(c,ms),i.getVertexPosition(l,_s);const h=Eh(i,t,e,n,ps,ms,_s,Io);if(h){const d=new N;ke.getBarycoord(Io,ps,ms,_s,d),s&&(h.uv=ke.getInterpolatedAttribute(s,o,c,l,d,new Nt)),r&&(h.uv1=ke.getInterpolatedAttribute(r,o,c,l,d,new Nt)),a&&(h.normal=ke.getInterpolatedAttribute(a,o,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new N,materialIndex:0};ke.getNormal(ps,ms,_s,f.normal),h.face=f,h.barycoord=d}return h}class _n extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,u=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function _(g,p,m,T,S,A,D,P,R,F,Q){const v=A/R,E=D/F,W=A/2,k=D/2,X=P/2,$=R+1,H=F+1;let j=0,V=0;const lt=new N;for(let ht=0;ht<H;ht++){const vt=ht*E-k;for(let Ht=0;Ht<$;Ht++){const Kt=Ht*v-W;lt[g]=Kt*T,lt[p]=vt*S,lt[m]=X,l.push(lt.x,lt.y,lt.z),lt[g]=0,lt[p]=0,lt[m]=P>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(Ht/R),d.push(1-ht/F),j+=1}}for(let ht=0;ht<F;ht++)for(let vt=0;vt<R;vt++){const Ht=f+vt+$*ht,Kt=f+vt+$*(ht+1),Y=f+(vt+1)+$*(ht+1),tt=f+(vt+1)+$*ht;c.push(Ht,Kt,tt),c.push(Kt,Y,tt),V+=6}o.addGroup(u,V,Q),u+=V,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=Oi(i[e]);for(const s in n)t[s]=n[s]}return t}function Th(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const bh={clone:Oi,merge:Ae};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new N,Uo=new Nt,No=new Nt;class Ve extends Kc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,Uo,No),e.subVectors(No,Uo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,_i=1;class wh extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(mi,_i,t,e);s.layers=this.layers,this.add(s);const r=new Ve(mi,_i,t,e);r.layers=this.layers,this.add(r);const a=new Ve(mi,_i,t,e);a.layers=this.layers,this.add(a);const o=new Ve(mi,_i,t,e);o.layers=this.layers,this.add(o);const c=new Ve(mi,_i,t,e);c.layers=this.layers,this.add(c);const l=new Ve(mi,_i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class $c extends Re{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ch extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $c(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _n(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Rn});r.uniforms.tEquirect.value=e;const a=new Me(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=$e),new wh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ir=new N,Ph=new N,Lh=new It;class Gn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ir.subVectors(n,e).cross(Ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lh.getNormalMatrix(t),s=this.coplanarPoint(Ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new nr,ys=new N;class ja{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],u=s[8],_=s[9],g=s[10],p=s[11],m=s[12],T=s[13],S=s[14],A=s[15];if(n[0].setComponents(c-r,f-l,p-u,A-m).normalize(),n[1].setComponents(c+r,f+l,p+u,A+m).normalize(),n[2].setComponents(c+a,f+h,p+_,A+T).normalize(),n[3].setComponents(c-a,f-h,p-_,A-T).normalize(),n[4].setComponents(c-o,f-d,p-g,A-S).normalize(),e===fn)n[5].setComponents(c+o,f+d,p+g,A+S).normalize();else if(e===qs)n[5].setComponents(o,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ys.x=s.normal.x>0?t.max.x:t.min.x,ys.y=s.normal.y>0?t.max.y:t.min.y,ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ih(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,_)=>u.start-_.start);let f=0;for(let u=1;u<d.length;u++){const _=d[f],g=d[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let u=0,_=d.length;u<_;u++){const g=d[u];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Jn extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,u=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const T=m*f-a;for(let S=0;S<l;S++){const A=S*d-r;_.push(A,-T,0),g.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){const S=T+l*m,A=T+l*(m+1),D=T+1+l*(m+1),P=T+1+l*m;u.push(S,A,P),u.push(A,D,P)}this.setIndex(u),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:Uh,alphahash_pars_fragment:Nh,alphamap_fragment:Dh,alphamap_pars_fragment:Oh,alphatest_fragment:Fh,alphatest_pars_fragment:Bh,aomap_fragment:zh,aomap_pars_fragment:kh,batching_pars_vertex:Gh,batching_vertex:Hh,begin_vertex:Vh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:Yh,bumpmap_pars_fragment:qh,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:$h,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:jh,color_fragment:Jh,color_pars_fragment:Qh,color_pars_vertex:tu,color_vertex:eu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:au,emissivemap_fragment:ou,emissivemap_pars_fragment:cu,colorspace_fragment:lu,colorspace_pars_fragment:hu,envmap_fragment:uu,envmap_common_pars_fragment:du,envmap_pars_fragment:fu,envmap_pars_vertex:pu,envmap_physical_pars_fragment:bu,envmap_vertex:mu,fog_vertex:_u,fog_pars_vertex:gu,fog_fragment:vu,fog_pars_fragment:xu,gradientmap_pars_fragment:yu,lightmap_pars_fragment:Mu,lights_lambert_fragment:Su,lights_lambert_pars_fragment:Eu,lights_pars_begin:Tu,lights_toon_fragment:Au,lights_toon_pars_fragment:Ru,lights_phong_fragment:wu,lights_phong_pars_fragment:Cu,lights_physical_fragment:Pu,lights_physical_pars_fragment:Lu,lights_fragment_begin:Iu,lights_fragment_maps:Uu,lights_fragment_end:Nu,logdepthbuf_fragment:Du,logdepthbuf_pars_fragment:Ou,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Bu,map_fragment:zu,map_pars_fragment:ku,map_particle_fragment:Gu,map_particle_pars_fragment:Hu,metalnessmap_fragment:Vu,metalnessmap_pars_fragment:Wu,morphinstance_vertex:Xu,morphcolor_vertex:Yu,morphnormal_vertex:qu,morphtarget_pars_vertex:Ku,morphtarget_vertex:$u,normal_fragment_begin:Zu,normal_fragment_maps:ju,normal_pars_fragment:Ju,normal_pars_vertex:Qu,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:cd,project_vertex:ld,dithering_fragment:hd,dithering_pars_fragment:ud,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:_d,shadowmask_pars_fragment:gd,skinbase_vertex:vd,skinning_pars_vertex:xd,skinning_vertex:yd,skinnormal_vertex:Md,specularmap_fragment:Sd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:bd,transmission_fragment:Ad,transmission_pars_fragment:Rd,uv_pars_fragment:wd,uv_pars_vertex:Cd,uv_vertex:Pd,worldpos_vertex:Ld,background_vert:Id,background_frag:Ud,backgroundCube_vert:Nd,backgroundCube_frag:Dd,cube_vert:Od,cube_frag:Fd,depth_vert:Bd,depth_frag:zd,distanceRGBA_vert:kd,distanceRGBA_frag:Gd,equirect_vert:Hd,equirect_frag:Vd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:Yd,meshbasic_frag:qd,meshlambert_vert:Kd,meshlambert_frag:$d,meshmatcap_vert:Zd,meshmatcap_frag:jd,meshnormal_vert:Jd,meshnormal_frag:Qd,meshphong_vert:tf,meshphong_frag:ef,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:rf,meshtoon_frag:af,points_vert:of,points_frag:cf,shadow_vert:lf,shadow_frag:hf,sprite_vert:uf,sprite_frag:df},it={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},en={basic:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Ae([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Ae([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Ae([it.points,it.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Ae([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Ae([it.common,it.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Ae([it.sprite,it.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Ae([it.common,it.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Ae([it.lights,it.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};en.physical={uniforms:Ae([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const Ms={r:0,b:0,g:0},Bn=new Je,ff=new ae;function pf(i,t,e,n,s,r,a){const o=new Ut(0);let c=r===!0?0:1,l,h,d=null,f=0,u=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function g(T){let S=!1;const A=_(T);A===null?m(o,c):A&&A.isColor&&(m(A,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,S){const A=_(S);A&&(A.isCubeTexture||A.mapping===tr)?(h===void 0&&(h=new Me(new _n(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Oi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bn.copy(S.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(Bn)),h.material.toneMapped=qt.getTransfer(A.colorSpace)!==se,(d!==A||f!==A.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,u=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Me(new Jn(2,2),new Pn({name:"BackgroundMaterial",uniforms:Oi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qt.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=A,f=A.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,S){T.getRGB(Ms,qc(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(o,c)},render:g,addToRenderList:p}}function mf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,E,W,k,X){let $=!1;const H=d(k,W,E);r!==H&&(r=H,l(r.object)),$=u(v,k,W,X),$&&_(v,k,W,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,A(v,E,W,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,E,W){const k=W.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let $=X[E.id];$===void 0&&($={},X[E.id]=$);let H=$[k];return H===void 0&&(H=f(c()),$[k]=H),H}function f(v){const E=[],W=[],k=[];for(let X=0;X<e;X++)E[X]=0,W[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:k,object:v,attributes:{},index:null}}function u(v,E,W,k){const X=r.attributes,$=E.attributes;let H=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){const ht=X[V];let vt=$[V];if(vt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function _(v,E,W,k){const X={},$=E.attributes;let H=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){let ht=$[V];ht===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),X[V]=vt,H++}r.attributes=X,r.attributesNum=H,r.index=k}function g(){const v=r.newAttributes;for(let E=0,W=v.length;E<W;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){const W=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;W[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),X[v]!==E&&(i.vertexAttribDivisor(v,E),X[v]=E)}function T(){const v=r.newAttributes,E=r.enabledAttributes;for(let W=0,k=E.length;W<k;W++)E[W]!==v[W]&&(i.disableVertexAttribArray(W),E[W]=0)}function S(v,E,W,k,X,$,H){H===!0?i.vertexAttribIPointer(v,E,W,X,$):i.vertexAttribPointer(v,E,W,k,X,$)}function A(v,E,W,k){g();const X=k.attributes,$=W.getAttributes(),H=E.defaultAttributeValues;for(const j in $){const V=$[j];if(V.location>=0){let lt=X[j];if(lt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){const ht=lt.normalized,vt=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;const Kt=Ht.buffer,Y=Ht.type,tt=Ht.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||lt.gpuType===Ha;if(lt.isInterleavedBufferAttribute){const ut=lt.data,Ct=ut.stride,Et=lt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft,ut.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Ft=0;Ft<V.locationSize;Ft++)S(V.location+Ft,vt/V.locationSize,Y,ht,Ct*tt,(Et+vt/V.locationSize*Ft)*tt,_t)}else{if(lt.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut,lt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ut=0;ut<V.locationSize;ut++)S(V.location+ut,vt/V.locationSize,Y,ht,vt*tt,vt/V.locationSize*ut*tt,_t)}}else if(H!==void 0){const ht=H[j];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(V.location,ht);break;case 3:i.vertexAttrib3fv(V.location,ht);break;case 4:i.vertexAttrib4fv(V.location,ht);break;default:i.vertexAttrib1fv(V.location,ht)}}}}T()}function D(){F();for(const v in n){const E=n[v];for(const W in E){const k=E[W];for(const X in k)h(k[X].object),delete k[X];delete E[W]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const W in E){const k=E[W];for(const X in k)h(k[X].object),delete k[X];delete E[W]}delete n[v.id]}function R(v){for(const E in n){const W=n[E];if(W[v.id]===void 0)continue;const k=W[v.id];for(const X in k)h(k[X].object),delete k[X];delete W[v.id]}}function F(){Q(),a=!0,r!==s&&(r=s,l(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:Q,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:T}}function _f(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let _=0;_<d;_++)u+=h[_];e.update(u,n,1)}function c(l,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<l.length;_++)a(l[_],h[_],f[_]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];for(let g=0;g<f.length;g++)e.update(_,n,f[g])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function gf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ze&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==dn&&!F)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:D,maxSamples:P}}function vf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Gn,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{const T=r?0:n,S=T*4;let A=m.clippingState||null;c.value=A,A=h(_,f,S,u);for(let D=0;D!==S;++D)A[D]=e[D];m.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=u+g*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,A=u;S!==g;++S,A+=4)a.copy(d[S]).applyMatrix4(T,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function xf(i){let t=new WeakMap;function e(a,o){return o===aa?a.mapping=Ii:o===oa&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===aa||o===oa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ch(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jc extends Kc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ai=4,Do=[.125,.215,.35,.446,.526,.582],Wn=20,Ur=new jc,Oo=new Ut;let Nr=null,Dr=0,Or=0,Fr=!1;const Hn=(1+Math.sqrt(5))/2,gi=1/Hn,Fo=[new N(-Hn,gi,0),new N(Hn,gi,0),new N(-gi,0,Hn),new N(gi,0,Hn),new N(0,Hn,-gi),new N(0,Hn,gi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Nr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nr,Dr,Or),this._renderer.xr.enabled=Fr,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:ji,format:Ze,colorSpace:Ln,depthBuffer:!1},s=zo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yf(r)),this._blurMaterial=Mf(r,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,s){const o=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Oo),h.toneMapping=wn,h.autoClear=!1;const u=new Kn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),_=new Me(new _n,u);let g=!1;const p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,g=!0):(u.color.copy(Oo),g=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):T===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const S=this._cubeSize;Ss(s,T*S,m>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ii||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ss(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fo[(s-r-1)%Fo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Me(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Wn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Wn;p>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const m=[];let T=0;for(let R=0;R<Wn;++R){const F=R/g,Q=Math.exp(-F*F/2);m.push(Q),R===0?T+=Q:R<p&&(T+=2*Q)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const A=this._sizeLods[s],D=3*A*(s>S-Ai?s-S+Ai:0),P=4*(this._cubeSize-A);Ss(e,D,P,3*A,2*A),c.setRenderTarget(e),c.render(d,Ur)}}function yf(i){const t=[],e=[],n=[];let s=i;const r=i-Ai+1+Do.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ai?c=Do[a-i+Ai-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,_=6,g=3,p=2,m=1,T=new Float32Array(g*_*u),S=new Float32Array(p*_*u),A=new Float32Array(m*_*u);for(let P=0;P<u;P++){const R=P%3*2/3-1,F=P>2?0:-1,Q=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];T.set(Q,g*_*P),S.set(f,p*_*P);const v=[P,P,P,P,P,P];A.set(v,m*_*P)}const D=new We;D.setAttribute("position",new je(T,g)),D.setAttribute("uv",new je(S,p)),D.setAttribute("faceIndex",new je(A,m)),t.push(D),s>Ai&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zo(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mf(i,t,e){const n=new Float32Array(Wn),s=new N(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ko(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Go(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===aa||c===oa,h=c===Ii||c===Ui;if(l||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Bo(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new Bo(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ef(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tf(i,t,e,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",a),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const _ in u){const g=u[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function l(d){const f=[],u=d.index,_=d.attributes.position;let g=0;if(u!==null){const T=u.array;g=u.version;for(let S=0,A=T.length;S<A;S+=3){const D=T[S+0],P=T[S+1],R=T[S+2];f.push(D,P,P,R,R,D)}}else if(_!==void 0){const T=_.array;g=_.version;for(let S=0,A=T.length/3-1;S<A;S+=3){const D=S+0,P=S+1,R=S+2;f.push(D,P,P,R,R,D)}}else return;const p=new(Gc(f)?Yc:Xc)(f,1);p.version=g;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function bf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,_){_!==0&&(i.drawElementsInstanced(n,u,r,f*a,_),e.update(u,n,_))}function h(f,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=u[m];e.update(p,n,1)}function d(f,u,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/a,u[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,g,0,_);let m=0;for(let T=0;T<_;T++)m+=u[T];for(let T=0;T<g.length;T++)e.update(m,n,g[T])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Af(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rf(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let v=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var u=v;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;_===!0&&(A=1),g===!0&&(A=2),p===!0&&(A=3);let D=o.attributes.position.count*A,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*P*4*d),F=new Vc(R,D,P,d);F.type=dn,F.needsUpdate=!0;const Q=A*4;for(let E=0;E<d;E++){const W=m[E],k=T[E],X=S[E],$=D*P*4*E;for(let H=0;H<W.count;H++){const j=H*Q;_===!0&&(s.fromBufferAttribute(W,H),R[$+j+0]=s.x,R[$+j+1]=s.y,R[$+j+2]=s.z,R[$+j+3]=0),g===!0&&(s.fromBufferAttribute(k,H),R[$+j+4]=s.x,R[$+j+5]=s.y,R[$+j+6]=s.z,R[$+j+7]=0),p===!0&&(s.fromBufferAttribute(X,H),R[$+j+8]=s.x,R[$+j+9]=s.y,R[$+j+10]=s.z,R[$+j+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:F,size:new Nt(D,P)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function wf(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Jc extends Re{constructor(t,e,n,s,r,a,o,c,l,h=Ci){if(h!==Ci&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ci&&(n=Zn),n===void 0&&h===Di&&(n=Ni),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qc=new Re,Ho=new Jc(1,1),tl=new Vc,el=new fh,nl=new $c,Vo=[],Wo=[],Xo=new Float32Array(16),Yo=new Float32Array(9),qo=new Float32Array(4);function Fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vo[s];if(r===void 0&&(r=new Float32Array(s),Vo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ir(i,t){let e=Wo[t];e===void 0&&(e=new Int32Array(t),Wo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Uf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;qo.set(n),i.uniformMatrix2fv(this.addr,!1,qo),_e(e,n)}}function Nf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Yo.set(n),i.uniformMatrix3fv(this.addr,!1,Yo),_e(e,n)}}function Df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Xo.set(n),i.uniformMatrix4fv(this.addr,!1,Xo),_e(e,n)}}function Of(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Wf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ho.compareFunction=kc,r=Ho):r=Qc,e.setTexture2D(t||r,s)}function Xf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||el,s)}function Yf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nl,s)}function qf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tl,s)}function Kf(i){switch(i){case 5126:return Cf;case 35664:return Pf;case 35665:return Lf;case 35666:return If;case 35674:return Uf;case 35675:return Nf;case 35676:return Df;case 5124:case 35670:return Of;case 35667:case 35671:return Ff;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return kf;case 36294:return Gf;case 36295:return Hf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return qf}}function $f(i,t){i.uniform1fv(this.addr,t)}function Zf(i,t){const e=Fi(t,this.size,2);i.uniform2fv(this.addr,e)}function jf(i,t){const e=Fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Jf(i,t){const e=Fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Qf(i,t){const e=Fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tp(i,t){const e=Fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ep(i,t){const e=Fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function np(i,t){i.uniform1iv(this.addr,t)}function ip(i,t){i.uniform2iv(this.addr,t)}function sp(i,t){i.uniform3iv(this.addr,t)}function rp(i,t){i.uniform4iv(this.addr,t)}function ap(i,t){i.uniform1uiv(this.addr,t)}function op(i,t){i.uniform2uiv(this.addr,t)}function cp(i,t){i.uniform3uiv(this.addr,t)}function lp(i,t){i.uniform4uiv(this.addr,t)}function hp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qc,r[a])}function up(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||el,r[a])}function dp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nl,r[a])}function fp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tl,r[a])}function pp(i){switch(i){case 5126:return $f;case 35664:return Zf;case 35665:return jf;case 35666:return Jf;case 35674:return Qf;case 35675:return tp;case 35676:return ep;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return op;case 36295:return cp;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}class mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kf(e.type)}}class _p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pp(e.type)}}class gp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function Ko(i,t){i.seq.push(t),i.map[t.id]=t}function vp(i,t,e){const n=i.name,s=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),a=Br.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ko(e,l===void 0?new mp(o,i,t):new _p(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new gp(o),Ko(e,d)),e=d}}}class Vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $o(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xp=37297;let yp=0;function Mp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Sp(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===Ys&&e===Xs?n="LinearDisplayP3ToLinearSRGB":t===Xs&&e===Ys&&(n="LinearSRGBToLinearDisplayP3"),i){case Ln:case er:return[n,"LinearTransferOETF"];case tn:case Ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Zo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mp(i.getShaderSource(t),a)}else return s}function Ep(i,t){const e=Sp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tp(i,t){let e;switch(t){case zl:e="Linear";break;case kl:e="Reinhard";break;case Gl:e="Cineon";break;case Hl:e="ACESFilmic";break;case Wl:e="AgX";break;case Xl:e="Neutral";break;case Vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Es=new N;function bp(){qt.getLuminanceCoefficients(Es);const i=Es.x.toFixed(4),t=Es.y.toFixed(4),e=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ap(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Rp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ki(i){return i!==""}function jo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(Cp,Lp)}const Pp=new Map;function Lp(i,t){let e=Lt[t];if(e===void 0){const n=Pp.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(i){return i.replace(Ip,Up)}function Up(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Np(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function Dp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Ui:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Op(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function Fp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ga:t="ENVMAP_BLENDING_MULTIPLY";break;case Fl:t="ENVMAP_BLENDING_MIX";break;case Bl:t="ENVMAP_BLENDING_ADD";break}return t}function Bp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Np(e),l=Dp(e),h=Op(e),d=Fp(e),f=Bp(e),u=Ap(e),_=Rp(r),g=s.createProgram();let p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ki).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ki).join(`
`),m.length>0&&(m+=`
`)):(p=[tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),m=[tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Tp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,Ep("linearToOutputTexel",e.outputColorSpace),bp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Ba(a),a=jo(a,e),a=Jo(a,e),o=Ba(o),o=jo(o,e),o=Jo(o,e),a=Qo(a),o=Qo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=T+p+a,A=T+m+o,D=$o(s,s.VERTEX_SHADER,S),P=$o(s,s.FRAGMENT_SHADER,A);s.attachShader(g,D),s.attachShader(g,P),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(E){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(P).trim();let $=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,D,P);else{const j=Zo(s,D,"vertex"),V=Zo(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+j+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||X==="")&&(H=!1);H&&(E.diagnostics={runnable:$,programLog:W,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(D),s.deleteShader(P),F=new Vs(s,g),Q=wp(s,g)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let Q;this.getAttributes=function(){return Q===void 0&&R(this),Q};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,xp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=P,this}let kp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hp(t),e.set(t,n)),n}}class Hp{constructor(t){this.id=kp++,this.code=t,this.usedTimes=0}}function Vp(i,t,e,n,s,r,a){const o=new Za,c=new Gp,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,u=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,E,W,k,X){const $=k.fog,H=X.geometry,j=v.isMeshStandardMaterial?k.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||j),lt=V&&V.mapping===tr?V.image.height:null,ht=g[v.type];v.precision!==null&&(_=s.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ht=vt!==void 0?vt.length:0;let Kt=0;H.morphAttributes.position!==void 0&&(Kt=1),H.morphAttributes.normal!==void 0&&(Kt=2),H.morphAttributes.color!==void 0&&(Kt=3);let Y,tt,_t,ut;if(ht){const Ce=en[ht];Y=Ce.vertexShader,tt=Ce.fragmentShader}else Y=v.vertexShader,tt=v.fragmentShader,c.update(v),_t=c.getVertexShaderID(v),ut=c.getFragmentShaderID(v);const Ct=i.getRenderTarget(),Et=X.isInstancedMesh===!0,Ft=X.isBatchedMesh===!0,jt=!!v.map,Bt=!!v.matcap,C=!!V,Ne=!!v.aoMap,Dt=!!v.lightMap,kt=!!v.bumpMap,bt=!!v.normalMap,ee=!!v.displacementMap,wt=!!v.emissiveMap,b=!!v.metalnessMap,x=!!v.roughnessMap,O=v.anisotropy>0,K=v.clearcoat>0,J=v.dispersion>0,q=v.iridescence>0,xt=v.sheen>0,st=v.transmission>0,dt=O&&!!v.anisotropyMap,Gt=K&&!!v.clearcoatMap,et=K&&!!v.clearcoatNormalMap,ft=K&&!!v.clearcoatRoughnessMap,At=q&&!!v.iridescenceMap,Rt=q&&!!v.iridescenceThicknessMap,pt=xt&&!!v.sheenColorMap,Ot=xt&&!!v.sheenRoughnessMap,Pt=!!v.specularMap,te=!!v.specularColorMap,L=!!v.specularIntensityMap,ot=st&&!!v.transmissionMap,G=st&&!!v.thicknessMap,Z=!!v.gradientMap,rt=!!v.alphaMap,ct=v.alphaTest>0,zt=!!v.alphaHash,ue=!!v.extensions;let we=wn;v.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(we=i.toneMapping);const Vt={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:tt,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Ft,batchingColor:Ft&&X._colorsTexture!==null,instancing:Et,instancingColor:Et&&X.instanceColor!==null,instancingMorph:Et&&X.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Ln,alphaToCoverage:!!v.alphaToCoverage,map:jt,matcap:Bt,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:lt,aoMap:Ne,lightMap:Dt,bumpMap:kt,normalMap:bt,displacementMap:u&&ee,emissiveMap:wt,normalMapObjectSpace:bt&&v.normalMapType===$l,normalMapTangentSpace:bt&&v.normalMapType===zc,metalnessMap:b,roughnessMap:x,anisotropy:O,anisotropyMap:dt,clearcoat:K,clearcoatMap:Gt,clearcoatNormalMap:et,clearcoatRoughnessMap:ft,dispersion:J,iridescence:q,iridescenceMap:At,iridescenceThicknessMap:Rt,sheen:xt,sheenColorMap:pt,sheenRoughnessMap:Ot,specularMap:Pt,specularColorMap:te,specularIntensityMap:L,transmission:st,transmissionMap:ot,thicknessMap:G,gradientMap:Z,opaque:v.transparent===!1&&v.blending===wi&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:zt,combine:v.combine,mapUv:jt&&p(v.map.channel),aoMapUv:Ne&&p(v.aoMap.channel),lightMapUv:Dt&&p(v.lightMap.channel),bumpMapUv:kt&&p(v.bumpMap.channel),normalMapUv:bt&&p(v.normalMap.channel),displacementMapUv:ee&&p(v.displacementMap.channel),emissiveMapUv:wt&&p(v.emissiveMap.channel),metalnessMapUv:b&&p(v.metalnessMap.channel),roughnessMapUv:x&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:Gt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&p(v.sheenRoughnessMap.channel),specularMapUv:Pt&&p(v.specularMap.channel),specularColorMapUv:te&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:ot&&p(v.transmissionMap.channel),thicknessMapUv:G&&p(v.thicknessMap.channel),alphaMapUv:rt&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(bt||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(jt||rt),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:jt&&v.map.isVideoTexture===!0&&qt.getTransfer(v.map.colorSpace)===se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ze,flipSided:v.side===Ue,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function T(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)E.push(W),E.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(S(E,v),A(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function S(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function A(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){const E=g[v.type];let W;if(E){const k=en[E];W=bh.clone(k.uniforms)}else W=v.uniforms;return W}function P(v,E){let W;for(let k=0,X=h.length;k<X;k++){const $=h[k];if($.cacheKey===E){W=$,++W.usedTimes;break}}return W===void 0&&(W=new zp(i,E,v,r),h.push(W)),W}function R(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function F(v){c.remove(v)}function Q(){c.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:D,acquireProgram:P,releaseProgram:R,releaseShaderCache:F,programs:h,dispose:Q}}function Wp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ec(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,u,_,g,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:u,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=u,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=p),t++,m}function o(d,f,u,_,g,p){const m=a(d,f,u,_,g,p);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):e.push(m)}function c(d,f,u,_,g,p){const m=a(d,f,u,_,g,p);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,f){e.length>1&&e.sort(d||Xp),n.length>1&&n.sort(f||ec),s.length>1&&s.sort(f||ec)}function h(){for(let d=t,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Yp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new nc,i.set(n,[a])):s>=r.length?(a=new nc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ut};break;case"SpotLight":e={position:new N,direction:new N,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Kp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $p=0;function Zp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jp(i){const t=new qp,e=Kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new ae,a=new ae;function o(l){let h=0,d=0,f=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let u=0,_=0,g=0,p=0,m=0,T=0,S=0,A=0,D=0,P=0,R=0;l.sort(Zp);for(let Q=0,v=l.length;Q<v;Q++){const E=l[Q],W=E.color,k=E.intensity,X=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=W.r*k,d+=W.g*k,f+=W.b*k;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],k);R++}else if(E.isDirectionalLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const j=E.shadow,V=e.get(E);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=$,n.directionalShadowMatrix[u]=E.shadow.matrix,T++}n.directional[u]=H,u++}else if(E.isSpotLight){const H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(W).multiplyScalar(k),H.distance=X,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[g]=H;const j=E.shadow;if(E.map&&(n.spotLightMap[D]=E.map,D++,j.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[g]=j.matrix,E.castShadow){const V=e.get(E);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=$,A++}g++}else if(E.isRectAreaLight){const H=t.get(E);H.color.copy(W).multiplyScalar(k),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=H,p++}else if(E.isPointLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const j=E.shadow,V=e.get(E);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=E.shadow.matrix,S++}n.point[_]=H,_++}else if(E.isHemisphereLight){const H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(k),H.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[m]=H,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==u||F.pointLength!==_||F.spotLength!==g||F.rectAreaLength!==p||F.hemiLength!==m||F.numDirectionalShadows!==T||F.numPointShadows!==S||F.numSpotShadows!==A||F.numSpotMaps!==D||F.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=A+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,F.directionalLength=u,F.pointLength=_,F.spotLength=g,F.rectAreaLength=p,F.hemiLength=m,F.numDirectionalShadows=T,F.numPointShadows=S,F.numSpotShadows=A,F.numSpotMaps=D,F.numLightProbes=R,n.version=$p++)}function c(l,h){let d=0,f=0,u=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){const S=l[m];if(S.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(S.isSpotLight){const A=n.spot[u];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(S.isRectAreaLight){const A=n.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function ic(i){const t=new jp(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Jp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ic(i),t.set(s,[o])):r>=a.length?(o=new ic(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qp extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tm extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function im(i,t,e){let n=new ja;const s=new Nt,r=new Nt,a=new ce,o=new Qp({depthPacking:Kl}),c=new tm,l={},h=e.maxTextureSize,d={[pn]:Ue,[Ue]:pn,[ze]:ze},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:em,fragmentShader:nm}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const _=new We;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Me(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let m=this.type;this.render=function(P,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const Q=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Rn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=m!==un&&this.type===un,X=m===un&&this.type!==un;for(let $=0,H=P.length;$<H;$++){const j=P[$],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const lt=V.getFrameExtents();if(s.multiply(lt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,V.mapSize.y=r.y)),V.map===null||k===!0||X===!0){const vt=this.type!==un?{minFilter:Ie,magFilter:Ie}:{};V.map!==null&&V.map.dispose(),V.map=new jn(s.x,s.y,vt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ht=V.getViewportCount();for(let vt=0;vt<ht;vt++){const Ht=V.getViewport(vt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),W.viewport(a),V.updateMatrices(j,vt),n=V.getFrustum(),A(R,F,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===un&&T(V,F),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(Q,v,E)};function T(P,R){const F=t.update(g);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,F,f,g,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,F,u,g,null)}function S(P,R,F,Q){let v=null;const E=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)v=E;else if(v=F.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=v.uuid,k=R.uuid;let X=l[W];X===void 0&&(X={},l[W]=X);let $=X[k];$===void 0&&($=v.clone(),X[k]=$,R.addEventListener("dispose",D)),v=$}if(v.visible=R.visible,v.wireframe=R.wireframe,Q===un?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=i.properties.get(v);W.light=F}return v}function A(P,R,F,Q,v){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===un)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const k=t.update(P),X=P.material;if(Array.isArray(X)){const $=k.groups;for(let H=0,j=$.length;H<j;H++){const V=$[H],lt=X[V.materialIndex];if(lt&&lt.visible){const ht=S(P,lt,Q,v);P.onBeforeShadow(i,P,R,F,k,ht,V),i.renderBufferDirect(F,null,k,ht,P,V),P.onAfterShadow(i,P,R,F,k,ht,V)}}}else if(X.visible){const $=S(P,X,Q,v);P.onBeforeShadow(i,P,R,F,k,$,null),i.renderBufferDirect(F,null,k,$,P,null),P.onAfterShadow(i,P,R,F,k,$,null)}}const W=P.children;for(let k=0,X=W.length;k<X;k++)A(W[k],R,F,Q,v)}function D(P){P.target.removeEventListener("dispose",D);for(const F in l){const Q=l[F],v=P.target.uuid;v in Q&&(Q[v].dispose(),delete Q[v])}}}const sm={[Qr]:ta,[ea]:sa,[na]:ra,[Li]:ia,[ta]:Qr,[sa]:ea,[ra]:na,[ia]:Li};function rm(i){function t(){let L=!1;const ot=new ce;let G=null;const Z=new ce(0,0,0,0);return{setMask:function(rt){G!==rt&&!L&&(i.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){L=rt},setClear:function(rt,ct,zt,ue,we){we===!0&&(rt*=ue,ct*=ue,zt*=ue),ot.set(rt,ct,zt,ue),Z.equals(ot)===!1&&(i.clearColor(rt,ct,zt,ue),Z.copy(ot))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function e(){let L=!1,ot=!1,G=null,Z=null,rt=null;return{setReversed:function(ct){ot=ct},setTest:function(ct){ct?_t(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(ct){G!==ct&&!L&&(i.depthMask(ct),G=ct)},setFunc:function(ct){if(ot&&(ct=sm[ct]),Z!==ct){switch(ct){case Qr:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ct}},setLocked:function(ct){L=ct},setClear:function(ct){rt!==ct&&(i.clearDepth(ct),rt=ct)},reset:function(){L=!1,G=null,Z=null,rt=null}}}function n(){let L=!1,ot=null,G=null,Z=null,rt=null,ct=null,zt=null,ue=null,we=null;return{setTest:function(Vt){L||(Vt?_t(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Vt){ot!==Vt&&!L&&(i.stencilMask(Vt),ot=Vt)},setFunc:function(Vt,Ce,sn){(G!==Vt||Z!==Ce||rt!==sn)&&(i.stencilFunc(Vt,Ce,sn),G=Vt,Z=Ce,rt=sn)},setOp:function(Vt,Ce,sn){(ct!==Vt||zt!==Ce||ue!==sn)&&(i.stencilOp(Vt,Ce,sn),ct=Vt,zt=Ce,ue=sn)},setLocked:function(Vt){L=Vt},setClear:function(Vt){we!==Vt&&(i.clearStencil(Vt),we=Vt)},reset:function(){L=!1,ot=null,G=null,Z=null,rt=null,ct=null,zt=null,ue=null,we=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,f=[],u=null,_=!1,g=null,p=null,m=null,T=null,S=null,A=null,D=null,P=new Ut(0,0,0),R=0,F=!1,Q=null,v=null,E=null,W=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=H>=2);let V=null,lt={};const ht=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Ht=new ce().fromArray(ht),Kt=new ce().fromArray(vt);function Y(L,ot,G,Z){const rt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(L,ct),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<G;zt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ct}const tt={};tt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),r.setFunc(Li),Dt(!1),kt(uo),_t(i.CULL_FACE),C(Rn);function _t(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function ut(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Ct(L,ot){return h[L]!==ot?(i.bindFramebuffer(L,ot),h[L]=ot,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Et(L,ot){let G=f,Z=!1;if(L){G=d.get(ot),G===void 0&&(G=[],d.set(ot,G));const rt=L.textures;if(G.length!==rt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,zt=rt.length;ct<zt;ct++)G[ct]=i.COLOR_ATTACHMENT0+ct;G.length=rt.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function Ft(L){return u!==L?(i.useProgram(L),u=L,!0):!1}const jt={[Vn]:i.FUNC_ADD,[yl]:i.FUNC_SUBTRACT,[Ml]:i.FUNC_REVERSE_SUBTRACT};jt[Sl]=i.MIN,jt[El]=i.MAX;const Bt={[Tl]:i.ZERO,[bl]:i.ONE,[Al]:i.SRC_COLOR,[jr]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[wl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Ul]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Dl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,ot,G,Z,rt,ct,zt,ue,we,Vt){if(L===Rn){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(_t(i.BLEND),_=!0),L!==xl){if(L!==g||Vt!==F){if((p!==Vn||S!==Vn)&&(i.blendEquation(i.FUNC_ADD),p=Vn,S=Vn),Vt)switch(L){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.ONE,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,T=null,A=null,D=null,P.set(0,0,0),R=0,g=L,F=Vt}return}rt=rt||ot,ct=ct||G,zt=zt||Z,(ot!==p||rt!==S)&&(i.blendEquationSeparate(jt[ot],jt[rt]),p=ot,S=rt),(G!==m||Z!==T||ct!==A||zt!==D)&&(i.blendFuncSeparate(Bt[G],Bt[Z],Bt[ct],Bt[zt]),m=G,T=Z,A=ct,D=zt),(ue.equals(P)===!1||we!==R)&&(i.blendColor(ue.r,ue.g,ue.b,we),P.copy(ue),R=we),g=L,F=!1}function Ne(L,ot){L.side===ze?ut(i.CULL_FACE):_t(i.CULL_FACE);let G=L.side===Ue;ot&&(G=!G),Dt(G),L.blending===wi&&L.transparent===!1?C(Rn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(L){Q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),Q=L)}function kt(L){L!==gl?(_t(i.CULL_FACE),L!==v&&(L===uo?i.cullFace(i.BACK):L===vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),v=L}function bt(L){L!==E&&($&&i.lineWidth(L),E=L)}function ee(L,ot,G){L?(_t(i.POLYGON_OFFSET_FILL),(W!==ot||k!==G)&&(i.polygonOffset(ot,G),W=ot,k=G)):ut(i.POLYGON_OFFSET_FILL)}function wt(L){L?_t(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function b(L){L===void 0&&(L=i.TEXTURE0+X-1),V!==L&&(i.activeTexture(L),V=L)}function x(L,ot,G){G===void 0&&(V===null?G=i.TEXTURE0+X-1:G=V);let Z=lt[G];Z===void 0&&(Z={type:void 0,texture:void 0},lt[G]=Z),(Z.type!==L||Z.texture!==ot)&&(V!==G&&(i.activeTexture(G),V=G),i.bindTexture(L,ot||tt[L]),Z.type=L,Z.texture=ot)}function O(){const L=lt[V];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){Ht.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ht.copy(L))}function pt(L){Kt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Kt.copy(L))}function Ot(L,ot){let G=c.get(ot);G===void 0&&(G=new WeakMap,c.set(ot,G));let Z=G.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(ot,L.name),G.set(L,Z))}function Pt(L,ot){const Z=c.get(ot).get(L);o.get(ot)!==Z&&(i.uniformBlockBinding(ot,Z,L.__bindingPointIndex),o.set(ot,Z))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,lt={},h={},d=new WeakMap,f=[],u=null,_=!1,g=null,p=null,m=null,T=null,S=null,A=null,D=null,P=new Ut(0,0,0),R=0,F=!1,Q=null,v=null,E=null,W=null,k=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_t,disable:ut,bindFramebuffer:Ct,drawBuffers:Et,useProgram:Ft,setBlending:C,setMaterial:Ne,setFlipSided:Dt,setCullFace:kt,setLineWidth:bt,setPolygonOffset:ee,setScissorTest:wt,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ft,texImage3D:At,updateUBOMapping:Ot,uniformBlockBinding:Pt,texStorage2D:Gt,texStorage3D:et,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:st,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:te}}function sc(i,t,e,n){const s=am(n);switch(e){case Ic:return i*t;case Nc:return i*t;case Dc:return i*t*2;case Oc:return i*t/s.components*s.byteLength;case Xa:return i*t/s.components*s.byteLength;case Fc:return i*t*2/s.components*s.byteLength;case Ya:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case qa:return i*t*4/s.components*s.byteLength;case Os:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ha:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ks:case La:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function am(i){switch(i){case mn:case Cc:return{byteLength:1,components:1};case $i:case Pc:case ji:return{byteLength:2,components:1};case Va:case Wa:return{byteLength:2,components:4};case Zn:case Ha:case dn:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function om(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return u?new OffscreenCanvas(b,x):Ks("canvas")}function g(b,x,O){let K=1;const J=wt(b);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(K*J.width),xt=Math.floor(K*J.height);d===void 0&&(d=_(q,xt));const st=x?_(q,xt):d;return st.width=q,st.height=xt,st.getContext("2d").drawImage(b,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+xt+")."),st}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Ie&&b.minFilter!==$e}function m(b){i.generateMipmap(b)}function T(b,x,O,K,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=x;if(x===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),x===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const xt=J?Ws:qt.getTransfer(K);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=xt===se?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(b,x){let O;return b?x===null||x===Zn||x===Ni?O=i.DEPTH24_STENCIL8:x===dn?O=i.DEPTH32F_STENCIL8:x===$i&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zn||x===Ni?O=i.DEPTH_COMPONENT24:x===dn?O=i.DEPTH_COMPONENT32F:x===$i&&(O=i.DEPTH_COMPONENT16),O}function A(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ie&&b.minFilter!==$e?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function D(b){const x=b.target;x.removeEventListener("dispose",D),R(x),x.isVideoTexture&&h.delete(x)}function P(b){const x=b.target;x.removeEventListener("dispose",P),Q(x)}function R(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,K=f.get(O);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(b),Object.keys(K).length===0&&f.delete(O)}n.remove(b)}function F(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const O=b.source,K=f.get(O);delete K[x.__cacheKey],a.memory.textures--}function Q(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[K][J]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let K=0,J=O.length;K<J;K++){const q=n.get(O[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(b)}let v=0;function E(){v=0}function W(){const b=v;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),v+=1,b}function k(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function X(b,x){const O=n.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(O,b,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function $(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Kt(O,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function H(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Kt(O,b,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function j(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const V={[ca]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},lt={[Ie]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},ht={[Zl]:i.NEVER,[nh]:i.ALWAYS,[jl]:i.LESS,[kc]:i.LEQUAL,[Jl]:i.EQUAL,[eh]:i.GEQUAL,[Ql]:i.GREATER,[th]:i.NOTEQUAL};function vt(b,x){if(x.type===dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===$e||x.magFilter===hr||x.magFilter===is||x.magFilter===Yn||x.minFilter===$e||x.minFilter===hr||x.minFilter===is||x.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,V[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ie||x.minFilter!==is&&x.minFilter!==Yn||x.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",D));const K=x.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const q=k(x);if(q!==b.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[q].usedTimes++;const xt=J[b.__cacheKey];xt!==void 0&&(J[b.__cacheKey].usedTimes--,xt.usedTimes===0&&F(x)),b.__cacheKey=q,b.__webglTexture=J[q].texture}return O}function Kt(b,x,O){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const J=Ht(b,x),q=x.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+O);const xt=n.get(q);if(q.version!==xt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const st=qt.getPrimaries(qt.workingColorSpace),dt=x.colorSpace===An?null:qt.getPrimaries(x.colorSpace),Gt=x.colorSpace===An||st===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let et=g(x.image,!1,s.maxTextureSize);et=ee(x,et);const ft=r.convert(x.format,x.colorSpace),At=r.convert(x.type);let Rt=T(x.internalFormat,ft,At,x.colorSpace,x.isVideoTexture);vt(K,x);let pt;const Ot=x.mipmaps,Pt=x.isVideoTexture!==!0,te=xt.__version===void 0||J===!0,L=q.dataReady,ot=A(x,et);if(x.isDepthTexture)Rt=S(x.format===Di,x.type),te&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,ft,At,null));else if(x.isDataTexture)if(Ot.length>0){Pt&&te&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Ot[0].width,Ot[0].height);for(let G=0,Z=Ot.length;G<Z;G++)pt=Ot[G],Pt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,At,pt.data);x.generateMipmaps=!1}else Pt?(te&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,ft,At,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,ft,At,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,Ot[0].width,Ot[0].height,et.depth);for(let G=0,Z=Ot.length;G<Z;G++)if(pt=Ot[G],x.format!==Ze)if(ft!==null)if(Pt){if(L)if(x.layerUpdates.size>0){const rt=sc(pt.width,pt.height,x.format,x.type);for(const ct of x.layerUpdates){const zt=pt.data.subarray(ct*rt/pt.data.BYTES_PER_ELEMENT,(ct+1)*rt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ct,pt.width,pt.height,1,ft,zt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,et.depth,ft,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,et.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,et.depth,ft,At,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,et.depth,0,ft,At,pt.data)}else{Pt&&te&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Ot[0].width,Ot[0].height);for(let G=0,Z=Ot.length;G<Z;G++)pt=Ot[G],x.format!==Ze?ft!==null?Pt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,At,pt.data)}else if(x.isDataArrayTexture)if(Pt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,et.width,et.height,et.depth),L)if(x.layerUpdates.size>0){const G=sc(et.width,et.height,x.format,x.type);for(const Z of x.layerUpdates){const rt=et.data.subarray(Z*G/et.data.BYTES_PER_ELEMENT,(Z+1)*G/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,ft,At,rt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,At,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,ft,At,et.data);else if(x.isData3DTexture)Pt?(te&&e.texStorage3D(i.TEXTURE_3D,ot,Rt,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,At,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,ft,At,et.data);else if(x.isFramebufferTexture){if(te)if(Pt)e.texStorage2D(i.TEXTURE_2D,ot,Rt,et.width,et.height);else{let G=et.width,Z=et.height;for(let rt=0;rt<ot;rt++)e.texImage2D(i.TEXTURE_2D,rt,Rt,G,Z,0,ft,At,null),G>>=1,Z>>=1}}else if(Ot.length>0){if(Pt&&te){const G=wt(Ot[0]);e.texStorage2D(i.TEXTURE_2D,ot,Rt,G.width,G.height)}for(let G=0,Z=Ot.length;G<Z;G++)pt=Ot[G],Pt?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft,At,pt):e.texImage2D(i.TEXTURE_2D,G,Rt,ft,At,pt);x.generateMipmaps=!1}else if(Pt){if(te){const G=wt(et);e.texStorage2D(i.TEXTURE_2D,ot,Rt,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,At,et)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,At,et);p(x)&&m(K),xt.__version=q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Y(b,x,O){if(x.image.length!==6)return;const K=Ht(b,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const q=n.get(J);if(J.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const xt=qt.getPrimaries(qt.workingColorSpace),st=x.colorSpace===An?null:qt.getPrimaries(x.colorSpace),dt=x.colorSpace===An||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!Gt&&!et?ft[Z]=g(x.image[Z],!0,s.maxCubemapSize):ft[Z]=et?x.image[Z].image:x.image[Z],ft[Z]=ee(x,ft[Z]);const At=ft[0],Rt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Ot=T(x.internalFormat,Rt,pt,x.colorSpace),Pt=x.isVideoTexture!==!0,te=q.__version===void 0||K===!0,L=J.dataReady;let ot=A(x,At);vt(i.TEXTURE_CUBE_MAP,x);let G;if(Gt){Pt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Ot,At.width,At.height);for(let Z=0;Z<6;Z++){G=ft[Z].mipmaps;for(let rt=0;rt<G.length;rt++){const ct=G[rt];x.format!==Ze?Rt!==null?Pt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Ot,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,ct.width,ct.height,Rt,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Ot,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(G=x.mipmaps,Pt&&te){G.length>0&&ot++;const Z=wt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Ot,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Rt,pt,ft[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,ft[Z].width,ft[Z].height,0,Rt,pt,ft[Z].data);for(let rt=0;rt<G.length;rt++){const zt=G[rt].image[Z].image;Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,zt.width,zt.height,Rt,pt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Ot,zt.width,zt.height,0,Rt,pt,zt.data)}}else{Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,pt,ft[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,Rt,pt,ft[Z]);for(let rt=0;rt<G.length;rt++){const ct=G[rt];Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Rt,pt,ct.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Ot,Rt,pt,ct.image[Z])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function tt(b,x,O,K,J,q){const xt=r.convert(O.format,O.colorSpace),st=r.convert(O.type),dt=T(O.internalFormat,xt,st,O.colorSpace);if(!n.get(x).__hasExternalTextures){const et=Math.max(1,x.width>>q),ft=Math.max(1,x.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,dt,et,ft,x.depth,0,xt,st,null):e.texImage2D(J,q,dt,et,ft,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(O).__webglTexture,0,Dt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(O).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,q=S(x.stencilBuffer,J),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Dt(x);kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,q,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,b)}else{const K=x.textures;for(let J=0;J<K.length;J++){const q=K[J],xt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),dt=T(q.internalFormat,xt,st,q.colorSpace),Gt=Dt(x);O&&kt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,dt,x.width,x.height):kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,J=Dt(x);if(x.depthTexture.format===Ci)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Di)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ut(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),_t(x.__webglDepthbuffer[K],b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),_t(x.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(b,x,O){const K=n.get(b);x!==void 0&&tt(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ct(b)}function Ft(b){const x=b.texture,O=n.get(b),K=n.get(x);b.addEventListener("dispose",P);const J=b.textures,q=b.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let dt=0;dt<x.mipmaps.length;dt++)O.__webglFramebuffer[st][dt]=i.createFramebuffer()}else O.__webglFramebuffer[st]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)O.__webglFramebuffer[st]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,dt=J.length;st<dt;st++){const Gt=n.get(J[st]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&kt(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const dt=J[st];O.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const Gt=r.convert(dt.format,dt.colorSpace),et=r.convert(dt.type),ft=T(dt.internalFormat,Gt,et,dt.colorSpace,b.isXRRenderTarget===!0),At=Dt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,O.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),vt(i.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)tt(O.__webglFramebuffer[st][dt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt);else tt(O.__webglFramebuffer[st],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,dt=J.length;st<dt;st++){const Gt=J[st],et=n.get(Gt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),vt(i.TEXTURE_2D,Gt),tt(O.__webglFramebuffer,b,Gt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(Gt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(st=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),vt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)tt(O.__webglFramebuffer[dt],b,x,i.COLOR_ATTACHMENT0,st,dt);else tt(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,st,0);p(x)&&m(st),e.unbindTexture()}b.depthBuffer&&Ct(b)}function jt(b){const x=b.textures;for(let O=0,K=x.length;O<K;O++){const J=x[O];if(p(J)){const q=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(J).__webglTexture;e.bindTexture(q,xt),m(q),e.unbindTexture()}}}const Bt=[],C=[];function Ne(b){if(b.samples>0){if(kt(b)===!1){const x=b.textures,O=b.width,K=b.height;let J=i.COLOR_BUFFER_BIT;const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(b),st=x.length>1;if(st)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Gt=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,J,i.NEAREST),c===!0&&(Bt.length=0,C.length=0,Bt.push(i.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Bt.push(q),C.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Gt=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Dt(b){return Math.min(s.maxSamples,b.samples)}function kt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ee(b,x){const O=b.colorSpace,K=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ln&&O!==An&&(qt.getTransfer(O)===se?(K!==Ze||J!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function wt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=Et,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=kt}function cm(i,t){function e(n,s=An){let r;const a=qt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===Ze)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Dc)return i.LUMINANCE_ALPHA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===Fc)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===Os||n===Fs||n===Bs||n===zs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===va||n===xa||n===ya||n===Ma||n===Sa||n===Ea||n===Ta||n===ba||n===Aa||n===Ra||n===wa||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===La||n===Ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ks)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Ua||n===Na||n===Da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lm extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qn extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,_=.005;l.inputState.pinching&&f>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:um,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pm extends ei{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,_=null;const g=new fm,p=e.getContextAttributes();let m=null,T=null;const S=[],A=[],D=new Nt;let P=null;const R=new Ve;R.layers.enable(1),R.viewport=new ce;const F=new Ve;F.layers.enable(2),F.viewport=new ce;const Q=[R,F],v=new lm;v.layers.enable(1),v.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=S[Y];return tt===void 0&&(tt=new zr,S[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=S[Y];return tt===void 0&&(tt=new zr,S[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=S[Y];return tt===void 0&&(tt=new zr,S[Y]=tt),tt.getHandSpace()};function k(Y){const tt=A.indexOf(Y.inputSource);if(tt===-1)return;const _t=S[tt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<S.length;Y++){const tt=A[Y];tt!==null&&(A[Y]=null,S[Y].disconnect(tt))}E=null,W=null,g.reset(),t.setRenderTarget(m),u=null,f=null,d=null,s=null,T=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new jn(u.framebufferWidth,u.framebufferHeight,{format:Ze,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,_t=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Di:Ci,_t=p.stencil?Ni:Zn);const Ct={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new jn(f.textureWidth,f.textureHeight,{format:Ze,type:mn,depthTexture:new Jc(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(Y){for(let tt=0;tt<Y.removed.length;tt++){const _t=Y.removed[tt],ut=A.indexOf(_t);ut>=0&&(A[ut]=null,S[ut].disconnect(_t))}for(let tt=0;tt<Y.added.length;tt++){const _t=Y.added[tt];let ut=A.indexOf(_t);if(ut===-1){for(let Et=0;Et<S.length;Et++)if(Et>=A.length){A.push(_t),ut=Et;break}else if(A[Et]===null){A[Et]=_t,ut=Et;break}if(ut===-1)break}const Ct=S[ut];Ct&&Ct.connect(_t)}}const H=new N,j=new N;function V(Y,tt,_t){H.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ut=H.distanceTo(j),Ct=tt.projectionMatrix.elements,Et=_t.projectionMatrix.elements,Ft=Ct[14]/(Ct[10]-1),jt=Ct[14]/(Ct[10]+1),Bt=(Ct[9]+1)/Ct[5],C=(Ct[9]-1)/Ct[5],Ne=(Ct[8]-1)/Ct[0],Dt=(Et[8]+1)/Et[0],kt=Ft*Ne,bt=Ft*Dt,ee=ut/(-Ne+Dt),wt=ee*-Ne;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(wt),Y.translateZ(ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const b=Ft+ee,x=jt+ee,O=kt-wt,K=bt+(ut-wt),J=Bt*jt/x*b,q=C*jt/x*b;Y.projectionMatrix.makePerspective(O,K,J,q,b,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function lt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,_t=Y.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),v.near=F.near=R.near=tt,v.far=F.far=R.far=_t,(E!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,W=v.far);const ut=Y.parent,Ct=v.cameras;lt(v,ut);for(let Et=0;Et<Ct.length;Et++)lt(Ct[Et],ut);Ct.length===2?V(v,R,F):v.projectionMatrix.copy(R.projectionMatrix),ht(Y,v,ut)};function ht(Y,tt,_t){_t===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let vt=null;function Ht(Y,tt){if(h=tt.getViewerPose(l||a),_=tt,h!==null){const _t=h.views;u!==null&&(t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T));let ut=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let Et=0;Et<_t.length;Et++){const Ft=_t[Et];let jt=null;if(u!==null)jt=u.getViewport(Ft);else{const C=d.getViewSubImage(f,Ft);jt=C.viewport,Et===0&&(t.setRenderTargetTextures(T,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(T))}let Bt=Q[Et];Bt===void 0&&(Bt=new Ve,Bt.layers.enable(Et),Bt.viewport=new ce,Q[Et]=Bt),Bt.matrix.fromArray(Ft.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Ft.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(jt.x,jt.y,jt.width,jt.height),Et===0&&(v.matrix.copy(Bt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(Bt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Et=d.getDepthInformation(_t[0]);Et&&Et.isValid&&Et.texture&&g.init(t,Et,s.renderState)}}for(let _t=0;_t<S.length;_t++){const ut=A[_t],Ct=S[_t];ut!==null&&Ct!==void 0&&Ct.update(ut,tt,l||a)}vt&&vt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const Kt=new Zc;Kt.setAnimationLoop(Ht),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}}const zn=new Je,mm=new ae;function _m(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,S,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,A)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,T,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ue&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ue&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=t.get(m),S=T.envMap,A=T.envMapRotation;S&&(p.envMap.value=S,zn.copy(A),zn.x*=-1,zn.y*=-1,zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(zn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const A=S.program;n.uniformBlockBinding(T,A)}function l(T,S){let A=s[T.id];A===void 0&&(_(T),A=h(T),s[T.id]=A,T.addEventListener("dispose",p));const D=S.program;n.updateUBOMapping(T,D);const P=t.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function h(T){const S=d();T.__bindingPointIndex=S;const A=i.createBuffer(),D=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=s[T.id],A=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let P=0,R=A.length;P<R;P++){const F=Array.isArray(A[P])?A[P]:[A[P]];for(let Q=0,v=F.length;Q<v;Q++){const E=F[Q];if(u(E,P,Q,D)===!0){const W=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let $=0;$<k.length;$++){const H=k[$],j=g(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,W+X,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(T,S,A,D){const P=T.value,R=S+"_"+A;if(D[R]===void 0)return typeof P=="number"||typeof P=="boolean"?D[R]=P:D[R]=P.clone(),!0;{const F=D[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return D[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function _(T){const S=T.uniforms;let A=0;const D=16;for(let R=0,F=S.length;R<F;R++){const Q=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,E=Q.length;v<E;v++){const W=Q[v],k=Array.isArray(W.value)?W.value:[W.value];for(let X=0,$=k.length;X<$;X++){const H=k[X],j=g(H),V=A%D,lt=V%j.boundary,ht=V+lt;A+=lt,ht!==0&&D-ht<j.storage&&(A+=D-ht),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=j.storage}}}const P=A%D;return P>0&&(A+=D-P),T.__size=A,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}class vm{constructor(t={}){const{canvas:e=sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const u=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=wn,this.toneMappingExposure=1;const S=this;let A=!1,D=0,P=0,R=null,F=-1,Q=null;const v=new ce,E=new ce;let W=null;const k=new Ut(0);let X=0,$=e.width,H=e.height,j=1,V=null,lt=null;const ht=new ce(0,0,$,H),vt=new ce(0,0,$,H);let Ht=!1;const Kt=new ja;let Y=!1,tt=!1;const _t=new ae,ut=new ae,Ct=new N,Et=new ce,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Bt(){return R===null?j:1}let C=n;function Ne(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ka}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),C===null){const I="webgl2";if(C=Ne(I,y),C===null)throw Ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Dt,kt,bt,ee,wt,b,x,O,K,J,q,xt,st,dt,Gt,et,ft,At,Rt,pt,Ot,Pt,te,L;function ot(){Dt=new Ef(C),Dt.init(),Pt=new cm(C,Dt),kt=new gf(C,Dt,t,Pt),bt=new rm(C),kt.reverseDepthBuffer&&bt.buffers.depth.setReversed(!0),ee=new Af(C),wt=new Wp,b=new om(C,Dt,bt,wt,kt,Pt,ee),x=new xf(S),O=new Sf(S),K=new Ih(C),te=new mf(C,K),J=new Tf(C,K,ee,te),q=new wf(C,J,K,ee),Rt=new Rf(C,kt,b),et=new vf(wt),xt=new Vp(S,x,O,Dt,kt,te,et),st=new _m(S,wt),dt=new Yp,Gt=new Jp(Dt),At=new pf(S,x,O,bt,q,f,c),ft=new im(S,q,kt),L=new gm(C,ee,kt,bt),pt=new _f(C,Dt,ee),Ot=new bf(C,Dt,ee),ee.programs=xt.programs,S.capabilities=kt,S.extensions=Dt,S.properties=wt,S.renderLists=dt,S.shadowMap=ft,S.state=bt,S.info=ee}ot();const G=new pm(S,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=Dt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Dt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize($,H,!1))},this.getSize=function(y){return y.set($,H)},this.setSize=function(y,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,H=I,e.width=Math.floor(y*j),e.height=Math.floor(I*j),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set($*j,H*j).floor()},this.setDrawingBufferSize=function(y,I,B){$=y,H=I,j=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(ht)},this.setViewport=function(y,I,B,z){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,I,B,z),bt.viewport(v.copy(ht).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(vt)},this.setScissor=function(y,I,B,z){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,I,B,z),bt.scissor(E.copy(vt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(y){bt.setScissorTest(Ht=y)},this.setOpaqueSort=function(y){V=y},this.setTransparentSort=function(y){lt=y},this.getClearColor=function(y){return y.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(R!==null){const nt=R.texture.format;U=nt===qa||nt===Ya||nt===Xa}if(U){const nt=R.texture.type,at=nt===mn||nt===Zn||nt===$i||nt===Ni||nt===Va||nt===Wa,mt=At.getClearColor(),gt=At.getClearAlpha(),St=mt.r,Tt=mt.g,yt=mt.b;at?(u[0]=St,u[1]=Tt,u[2]=yt,u[3]=gt,C.clearBufferuiv(C.COLOR,0,u)):(_[0]=St,_[1]=Tt,_[2]=yt,_[3]=gt,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}I&&(z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Gt.dispose(),wt.dispose(),x.dispose(),O.dispose(),q.dispose(),te.dispose(),L.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",io),G.removeEventListener("sessionend",so),Un.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=ee.autoReset,I=ft.enabled,B=ft.autoUpdate,z=ft.needsUpdate,U=ft.type;ot(),ee.autoReset=y,ft.enabled=I,ft.autoUpdate=B,ft.needsUpdate=z,ft.type=U}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function zt(y){const I=y.target;I.removeEventListener("dispose",zt),ue(I)}function ue(y){we(y),wt.remove(y)}function we(y){const I=wt.get(y).programs;I!==void 0&&(I.forEach(function(B){xt.releaseProgram(B)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,nt){I===null&&(I=Ft);const at=U.isMesh&&U.matrixWorld.determinant()<0,mt=fl(y,I,B,z,U);bt.setMaterial(z,at);let gt=B.index,St=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(B),gt===void 0)return;St=2}const Tt=B.drawRange,yt=B.attributes.position;let $t=Tt.start*St,ne=(Tt.start+Tt.count)*St;nt!==null&&($t=Math.max($t,nt.start*St),ne=Math.min(ne,(nt.start+nt.count)*St)),gt!==null?($t=Math.max($t,0),ne=Math.min(ne,gt.count)):yt!=null&&($t=Math.max($t,0),ne=Math.min(ne,yt.count));const oe=ne-$t;if(oe<0||oe===1/0)return;te.setup(U,z,mt,B,gt);let De,Xt=pt;if(gt!==null&&(De=K.get(gt),Xt=Ot,Xt.setIndex(De)),U.isMesh)z.wireframe===!0?(bt.setLineWidth(z.wireframeLinewidth*Bt()),Xt.setMode(C.LINES)):Xt.setMode(C.TRIANGLES);else if(U.isLine){let Mt=z.linewidth;Mt===void 0&&(Mt=1),bt.setLineWidth(Mt*Bt()),U.isLineSegments?Xt.setMode(C.LINES):U.isLineLoop?Xt.setMode(C.LINE_LOOP):Xt.setMode(C.LINE_STRIP)}else U.isPoints?Xt.setMode(C.POINTS):U.isSprite&&Xt.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Mt=U._multiDrawStarts,xe=U._multiDrawCounts,Yt=U._multiDrawCount,Xe=gt?K.get(gt).bytesPerElement:1,ii=wt.get(z).currentProgram.getUniforms();for(let Oe=0;Oe<Yt;Oe++)ii.setValue(C,"_gl_DrawID",Oe),Xt.render(Mt[Oe]/Xe,xe[Oe])}else if(U.isInstancedMesh)Xt.renderInstances($t,oe,U.count);else if(B.isInstancedBufferGeometry){const Mt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,xe=Math.min(B.instanceCount,Mt);Xt.renderInstances($t,oe,xe)}else Xt.render($t,oe)};function Vt(y,I,B){y.transparent===!0&&y.side===ze&&y.forceSinglePass===!1?(y.side=Ue,y.needsUpdate=!0,ns(y,I,B),y.side=pn,y.needsUpdate=!0,ns(y,I,B),y.side=ze):ns(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),p=Gt.get(B),p.init(I),T.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let at=0;at<nt.length;at++){const mt=nt[at];Vt(mt,B,U),z.add(mt)}else Vt(nt,B,U),z.add(nt)}),T.pop(),p=null,z},this.compileAsync=function(y,I,B=null){const z=this.compile(y,I,B);return new Promise(U=>{function nt(){if(z.forEach(function(at){wt.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){U(y);return}setTimeout(nt,10)}Dt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ce=null;function sn(y){Ce&&Ce(y)}function io(){Un.stop()}function so(){Un.start()}const Un=new Zc;Un.setAnimationLoop(sn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(y){Ce=y,G.setAnimationLoop(y),y===null?Un.stop():Un.start()},G.addEventListener("sessionstart",io),G.addEventListener("sessionend",so),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,I,R),p=Gt.get(y,T.length),p.init(I),T.push(p),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Kt.setFromProjectionMatrix(ut),tt=this.localClippingEnabled,Y=et.init(this.clippingPlanes,tt),g=dt.get(y,m.length),g.init(),m.push(g),G.enabled===!0&&G.isPresenting===!0){const nt=S.xr.getDepthSensingMesh();nt!==null&&ar(nt,I,-1/0,S.sortObjects)}ar(y,I,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(V,lt),jt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,jt&&At.addToRenderList(g,y),this.info.render.frame++,Y===!0&&et.beginShadows();const B=p.state.shadowsArray;ft.render(B,y,I),Y===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,U=g.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(U.length>0)for(let at=0,mt=nt.length;at<mt;at++){const gt=nt[at];ao(z,U,y,gt)}jt&&At.render(y);for(let at=0,mt=nt.length;at<mt;at++){const gt=nt[at];ro(g,y,gt,gt.viewport)}}else U.length>0&&ao(z,U,y,I),jt&&At.render(y),ro(g,y,I);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,I),te.resetDefaultState(),F=-1,Q=null,T.pop(),T.length>0?(p=T[T.length-1],Y===!0&&et.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function ar(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Kt.intersectsSprite(y)){z&&Et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ut);const at=q.update(y),mt=y.material;mt.visible&&g.push(y,at,mt,B,Et.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Kt.intersectsObject(y))){const at=q.update(y),mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Et.copy(y.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Et.copy(at.boundingSphere.center)),Et.applyMatrix4(y.matrixWorld).applyMatrix4(ut)),Array.isArray(mt)){const gt=at.groups;for(let St=0,Tt=gt.length;St<Tt;St++){const yt=gt[St],$t=mt[yt.materialIndex];$t&&$t.visible&&g.push(y,at,$t,B,Et.z,yt)}}else mt.visible&&g.push(y,at,mt,B,Et.z,null)}}const nt=y.children;for(let at=0,mt=nt.length;at<mt;at++)ar(nt[at],I,B,z)}function ro(y,I,B,z){const U=y.opaque,nt=y.transmissive,at=y.transparent;p.setupLightsView(B),Y===!0&&et.setGlobalState(S.clippingPlanes,B),z&&bt.viewport(v.copy(z)),U.length>0&&es(U,I,B),nt.length>0&&es(nt,I,B),at.length>0&&es(at,I,B),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ao(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new jn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?ji:mn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[z.id],at=z.viewport||v;nt.setSize(at.z,at.w);const mt=S.getRenderTarget();S.setRenderTarget(nt),S.getClearColor(k),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),jt&&At.render(B);const gt=S.toneMapping;S.toneMapping=wn;const St=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Y===!0&&et.setGlobalState(S.clippingPlanes,z),es(y,B,z),b.updateMultisampleRenderTarget(nt),b.updateRenderTargetMipmap(nt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let yt=0,$t=I.length;yt<$t;yt++){const ne=I[yt],oe=ne.object,De=ne.geometry,Xt=ne.material,Mt=ne.group;if(Xt.side===ze&&oe.layers.test(z.layers)){const xe=Xt.side;Xt.side=Ue,Xt.needsUpdate=!0,oo(oe,B,z,De,Xt,Mt),Xt.side=xe,Xt.needsUpdate=!0,Tt=!0}}Tt===!0&&(b.updateMultisampleRenderTarget(nt),b.updateRenderTargetMipmap(nt))}S.setRenderTarget(mt),S.setClearColor(k,X),St!==void 0&&(z.viewport=St),S.toneMapping=gt}function es(y,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,nt=y.length;U<nt;U++){const at=y[U],mt=at.object,gt=at.geometry,St=z===null?at.material:z,Tt=at.group;mt.layers.test(B.layers)&&oo(mt,I,B,gt,St,Tt)}}function oo(y,I,B,z,U,nt){y.onBeforeRender(S,I,B,z,U,nt),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,I,B,z,y,nt),U.transparent===!0&&U.side===ze&&U.forceSinglePass===!1?(U.side=Ue,U.needsUpdate=!0,S.renderBufferDirect(B,I,z,U,y,nt),U.side=pn,U.needsUpdate=!0,S.renderBufferDirect(B,I,z,U,y,nt),U.side=ze):S.renderBufferDirect(B,I,z,U,y,nt),y.onAfterRender(S,I,B,z,U,nt)}function ns(y,I,B){I.isScene!==!0&&(I=Ft);const z=wt.get(y),U=p.state.lights,nt=p.state.shadowsArray,at=U.state.version,mt=xt.getParameters(y,U.state,nt,I,B),gt=xt.getProgramCacheKey(mt);let St=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,St===void 0&&(y.addEventListener("dispose",zt),St=new Map,z.programs=St);let Tt=St.get(gt);if(Tt!==void 0){if(z.currentProgram===Tt&&z.lightsStateVersion===at)return lo(y,mt),Tt}else mt.uniforms=xt.getUniforms(y),y.onBeforeCompile(mt,S),Tt=xt.acquireProgram(mt,gt),St.set(gt,Tt),z.uniforms=mt.uniforms;const yt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=et.uniform),lo(y,mt),z.needsLights=ml(y),z.lightsStateVersion=at,z.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Tt,z.uniformsList=null,Tt}function co(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Vs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function lo(y,I){const B=wt.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function fl(y,I,B,z,U){I.isScene!==!0&&(I=Ft),b.resetTextureUnits();const nt=I.fog,at=z.isMeshStandardMaterial?I.environment:null,mt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ln,gt=(z.isMeshStandardMaterial?O:x).get(z.envMap||at),St=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Tt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!B.morphAttributes.position,$t=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color;let oe=wn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(oe=S.toneMapping);const De=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xt=De!==void 0?De.length:0,Mt=wt.get(z),xe=p.state.lights;if(Y===!0&&(tt===!0||y!==Q)){const Ge=y===Q&&z.id===F;et.setState(z,y,Ge)}let Yt=!1;z.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==xe.state.version||Mt.outputColorSpace!==mt||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==gt||z.fog===!0&&Mt.fog!==nt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==et.numPlanes||Mt.numIntersection!==et.numIntersection)||Mt.vertexAlphas!==St||Mt.vertexTangents!==Tt||Mt.morphTargets!==yt||Mt.morphNormals!==$t||Mt.morphColors!==ne||Mt.toneMapping!==oe||Mt.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,Mt.__version=z.version);let Xe=Mt.currentProgram;Yt===!0&&(Xe=ns(z,I,U));let ii=!1,Oe=!1,or=!1;const le=Xe.getUniforms(),gn=Mt.uniforms;if(bt.useProgram(Xe.program)&&(ii=!0,Oe=!0,or=!0),z.id!==F&&(F=z.id,Oe=!0),ii||Q!==y){kt.reverseDepthBuffer?(_t.copy(y.projectionMatrix),ah(_t),oh(_t),le.setValue(C,"projectionMatrix",_t)):le.setValue(C,"projectionMatrix",y.projectionMatrix),le.setValue(C,"viewMatrix",y.matrixWorldInverse);const Ge=le.map.cameraPosition;Ge!==void 0&&Ge.setValue(C,Ct.setFromMatrixPosition(y.matrixWorld)),kt.logarithmicDepthBuffer&&le.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Oe=!0,or=!0)}if(U.isSkinnedMesh){le.setOptional(C,U,"bindMatrix"),le.setOptional(C,U,"bindMatrixInverse");const Ge=U.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),le.setValue(C,"boneTexture",Ge.boneTexture,b))}U.isBatchedMesh&&(le.setOptional(C,U,"batchingTexture"),le.setValue(C,"batchingTexture",U._matricesTexture,b),le.setOptional(C,U,"batchingIdTexture"),le.setValue(C,"batchingIdTexture",U._indirectTexture,b),le.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(C,"batchingColorTexture",U._colorsTexture,b));const cr=B.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Rt.update(U,B,Xe),(Oe||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,le.setValue(C,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(gn.envMap.value=gt,gn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(gn.envMapIntensity.value=I.environmentIntensity),Oe&&(le.setValue(C,"toneMappingExposure",S.toneMappingExposure),Mt.needsLights&&pl(gn,or),nt&&z.fog===!0&&st.refreshFogUniforms(gn,nt),st.refreshMaterialUniforms(gn,z,j,H,p.state.transmissionRenderTarget[y.id]),Vs.upload(C,co(Mt),gn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vs.upload(C,co(Mt),gn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(C,"center",U.center),le.setValue(C,"modelViewMatrix",U.modelViewMatrix),le.setValue(C,"normalMatrix",U.normalMatrix),le.setValue(C,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ge=z.uniformsGroups;for(let lr=0,_l=Ge.length;lr<_l;lr++){const ho=Ge[lr];L.update(ho,Xe),L.bind(ho,Xe)}}return Xe}function pl(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function ml(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,I,B){wt.get(y.texture).__webglTexture=I,wt.get(y.depthTexture).__webglTexture=B;const z=wt.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const B=wt.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){R=y,D=I,P=B;let z=!0,U=null,nt=!1,at=!1;if(y){const gt=wt.get(y);if(gt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(gt.__hasExternalTextures)b.rebindTextures(y,wt.get(y.texture).__webglTexture,wt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const yt=y.depthTexture;if(gt.__boundDepthTexture!==yt){if(yt!==null&&wt.has(yt)&&(y.width!==yt.image.width||y.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const St=y.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(at=!0);const Tt=wt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?U=Tt[I][B]:U=Tt[I],nt=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?U=wt.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?U=Tt[B]:U=Tt,v.copy(y.viewport),E.copy(y.scissor),W=y.scissorTest}else v.copy(ht).multiplyScalar(j).floor(),E.copy(vt).multiplyScalar(j).floor(),W=Ht;if(bt.bindFramebuffer(C.FRAMEBUFFER,U)&&z&&bt.drawBuffers(y,U),bt.viewport(v),bt.scissor(E),bt.setScissorTest(W),nt){const gt=wt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,B)}else if(at){const gt=wt.get(y.texture),St=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.__webglTexture,B||0,St)}F=-1},this.readRenderTargetPixels=function(y,I,B,z,U,nt,at){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&at!==void 0&&(mt=mt[at]),mt){bt.bindFramebuffer(C.FRAMEBUFFER,mt);try{const gt=y.texture,St=gt.format,Tt=gt.type;if(!kt.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&C.readPixels(I,B,z,U,Pt.convert(St),Pt.convert(Tt),nt)}finally{const gt=R!==null?wt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(y,I,B,z,U,nt,at){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&at!==void 0&&(mt=mt[at]),mt){const gt=y.texture,St=gt.format,Tt=gt.type;if(!kt.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U){bt.bindFramebuffer(C.FRAMEBUFFER,mt);const yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.bufferData(C.PIXEL_PACK_BUFFER,nt.byteLength,C.STREAM_READ),C.readPixels(I,B,z,U,Pt.convert(St),Pt.convert(Tt),0);const $t=R!==null?wt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,$t);const ne=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await rh(C,ne,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,nt),C.deleteBuffer(yt),C.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,B=0){y.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(y.image.width*z),nt=Math.floor(y.image.height*z),at=I!==null?I.x:0,mt=I!==null?I.y:0;b.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,at,mt,U,nt),bt.unbindTexture()},this.copyTextureToTexture=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let nt,at,mt,gt,St,Tt;B!==null?(nt=B.max.x-B.min.x,at=B.max.y-B.min.y,mt=B.min.x,gt=B.min.y):(nt=y.image.width,at=y.image.height,mt=0,gt=0),z!==null?(St=z.x,Tt=z.y):(St=0,Tt=0);const yt=Pt.convert(I.format),$t=Pt.convert(I.type);b.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const ne=C.getParameter(C.UNPACK_ROW_LENGTH),oe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),De=C.getParameter(C.UNPACK_SKIP_PIXELS),Xt=C.getParameter(C.UNPACK_SKIP_ROWS),Mt=C.getParameter(C.UNPACK_SKIP_IMAGES),xe=y.isCompressedTexture?y.mipmaps[U]:y.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mt),C.pixelStorei(C.UNPACK_SKIP_ROWS,gt),y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,St,Tt,nt,at,yt,$t,xe.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,St,Tt,xe.width,xe.height,yt,xe.data):C.texSubImage2D(C.TEXTURE_2D,U,St,Tt,nt,at,yt,$t,xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,ne),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,De),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Mt),U===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0);let nt,at,mt,gt,St,Tt,yt,$t,ne;const oe=y.isCompressedTexture?y.mipmaps[U]:y.image;B!==null?(nt=B.max.x-B.min.x,at=B.max.y-B.min.y,mt=B.max.z-B.min.z,gt=B.min.x,St=B.min.y,Tt=B.min.z):(nt=oe.width,at=oe.height,mt=oe.depth,gt=0,St=0,Tt=0),z!==null?(yt=z.x,$t=z.y,ne=z.z):(yt=0,$t=0,ne=0);const De=Pt.convert(I.format),Xt=Pt.convert(I.type);let Mt;if(I.isData3DTexture)b.setTexture3D(I,0),Mt=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)b.setTexture2DArray(I,0),Mt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const xe=C.getParameter(C.UNPACK_ROW_LENGTH),Yt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xe=C.getParameter(C.UNPACK_SKIP_PIXELS),ii=C.getParameter(C.UNPACK_SKIP_ROWS),Oe=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gt),C.pixelStorei(C.UNPACK_SKIP_ROWS,St),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt),y.isDataTexture||y.isData3DTexture?C.texSubImage3D(Mt,U,yt,$t,ne,nt,at,mt,De,Xt,oe.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Mt,U,yt,$t,ne,nt,at,mt,De,oe.data):C.texSubImage3D(Mt,U,yt,$t,ne,nt,at,mt,De,Xt,oe),C.pixelStorei(C.UNPACK_ROW_LENGTH,xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Yt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ii),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Oe),U===0&&I.generateMipmaps&&C.generateMipmap(Mt),bt.unbindTexture()},this.initRenderTarget=function(y){wt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),bt.unbindTexture()},this.resetState=function(){D=0,P=0,R=null,bt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ka?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===er?"display-p3":"srgb"}}class sr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new sr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xm extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ym{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oa,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const be=new N;class $s{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class il extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vi;const Vi=new N,xi=new N,yi=new N,Mi=new Nt,Wi=new Nt,sl=new ae,Ts=new N,Xi=new N,bs=new N,rc=new Nt,kr=new Nt,ac=new Nt;class Mm extends ve{constructor(t=new il){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ym(e,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new $s(n,3,0,!1)),vi.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=vi,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xi.setFromMatrixScale(this.matrixWorld),sl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xi.multiplyScalar(-yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;As(Ts.set(-.5,-.5,0),yi,a,xi,s,r),As(Xi.set(.5,-.5,0),yi,a,xi,s,r),As(bs.set(.5,.5,0),yi,a,xi,s,r),rc.set(0,0),kr.set(1,0),ac.set(1,1);let o=t.ray.intersectTriangle(Ts,Xi,bs,!1,Vi);if(o===null&&(As(Xi.set(-.5,.5,0),yi,a,xi,s,r),kr.set(0,1),o=t.ray.intersectTriangle(Ts,bs,Xi,!1,Vi),o===null))return;const c=t.ray.origin.distanceTo(Vi);c<t.near||c>t.far||e.push({distance:c,point:Vi.clone(),uv:ke.getInterpolation(Vi,Ts,Xi,bs,rc,kr,ac,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function As(i,t,e,n,s,r){Mi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Wi.x=r*Mi.x-s*Mi.y,Wi.y=s*Mi.x+r*Mi.y):Wi.copy(Mi),i.copy(t),i.x+=Wi.x,i.y+=Wi.y,i.applyMatrix4(sl)}class rl extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zs=new N,js=new N,oc=new ae,Yi=new $a,Rs=new nr,Gr=new N,cc=new N;class Sm extends ve{constructor(t=new We,e=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zs.fromBufferAttribute(e,s-1),js.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zs.distanceTo(js);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,t.ray.intersectsSphere(Rs)===!1)return;oc.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(oc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=u,p=_-1;g<p;g+=l){const m=h.getX(g),T=h.getX(g+1),S=ws(this,t,Yi,c,m,T);S&&e.push(S)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(u),m=ws(this,t,Yi,c,g,p);m&&e.push(m)}}else{const u=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=u,p=_-1;g<p;g+=l){const m=ws(this,t,Yi,c,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=ws(this,t,Yi,c,_-1,u);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ws(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Zs.fromBufferAttribute(a,s),js.fromBufferAttribute(a,r),e.distanceSqToSegment(Zs,js,Gr,cc)>n)return;Gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gr);if(!(c<t.near||c>t.far))return{distance:c,point:cc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const lc=new N,hc=new N;class Em extends Sm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lc.fromBufferAttribute(e,s),hc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lc.distanceTo(hc);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class al extends Re{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Cs=new N,Ps=new N,Hr=new N,Ls=new ke;class Tm extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Gs*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),f={},u=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:p,c:m}=Ls;if(g.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Ls.getNormal(Hr),d[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){const S=(T+1)%3,A=d[T],D=d[S],P=Ls[h[T]],R=Ls[h[S]],F=`${A}_${D}`,Q=`${D}_${A}`;Q in f&&f[Q]?(Hr.dot(f[Q].normal)<=r&&(u.push(P.x,P.y,P.z),u.push(R.x,R.y,R.z)),f[Q]=null):F in f||(f[F]={index0:l[T],index1:l[S],normal:Hr.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:p}=f[_];Cs.fromBufferAttribute(o,g),Ps.fromBufferAttribute(o,p),u.push(Cs.x,Cs.y,Cs.z),u.push(Ps.x,Ps.y,Ps.z)}this.setAttribute("position",new Te(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Qa extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new N,f=new N,u=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const T=[],S=m/n;let A=0;m===0&&a===0?A=.5/e:m===n&&c===Math.PI&&(A=-.5/e);for(let D=0;D<=e;D++){const P=D/e;d.x=-t*Math.cos(s+P*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+P*r)*Math.sin(a+S*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(P+A,1-S),T.push(l++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<e;T++){const S=h[m][T+1],A=h[m][T],D=h[m+1][T],P=h[m+1][T+1];(m!==0||a>0)&&u.push(S,A,P),(m!==n-1||c<Math.PI)&&u.push(A,D,P)}this.setIndex(u),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Js extends ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ol extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Vr=new ae,uc=new N,dc=new N;class bm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Am extends bm{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rm extends ol{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Am}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wm extends ol{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fc(){return performance.now()}const pc=new ae;class Pm{constructor(t,e,n=0,s=1/0){this.ray=new $a(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pc),this}intersectObject(t,e=!0,n=[]){return za(t,this,n,e),n.sort(mc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)za(t[s],this,n,e);return n.sort(mc),n}}function mc(i,t){return i.distance-t.distance}function za(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)za(r[a],t,e,!0)}}class Lm extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);const Qt=192,Zt=192,pe=32,Le=16,Wr=Qt/Le,Xr=Zt/Le,to=14,Qn=9,Im=480,_c=.5,Um=55,Nm=30,Dm=5,Qs=20,Om=8,Fm=5,Bm=16,Ri=1/Bm;function Yr(i,t){return{u:i*Ri,v:1-(t+1)*Ri}}class he{constructor({id:t,name:e,color:n,hardness:s,minTier:r=0,dropItem:a=null,dropCount:o=1,isTransparent:c=!1,isSolid:l=!0,isFarmland:h=!1,tool:d=null,atlasCol:f=0,atlasRow:u=0,atlasTop:_=null,atlasBottom:g=null}){this.id=t,this.name=e,this.color=n,this.hardness=s,this.minTier=r,this.tool=d,this.dropItem=a,this.dropCount=o,this.isTransparent=c,this.isSolid=l,this.isFarmland=h,this.uvSide=Yr(f,u),this.uvTop=_?Yr(_[0],_[1]):this.uvSide,this.uvBottom=g?Yr(g[0],g[1]):this.uvSide}}const M={AIR:0,GRASS:1,DIRT:2,STONE:3,COBBLESTONE:4,WOOD_LOG:5,LEAVES:6,SAND:7,IRON_ORE:8,CRYSTAL_ORE:9,FARMLAND:10,CRAFTING_TABLE:11,FORGE:12,ALTAR:13,WATER:14,GRAVEL:15,PLANKS:16,GLASS:17,CHEST:18,TORCH:19,CAMPFIRE:20},Zi={[M.AIR]:new he({id:M.AIR,name:"air",color:"#000000",hardness:0,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:15}),[M.GRASS]:new he({id:M.GRASS,name:"grass",color:"#4a8f3f",hardness:.5,dropItem:"dirt",tool:"shovel",atlasCol:3,atlasRow:0,atlasTop:[0,0],atlasBottom:[2,0]}),[M.DIRT]:new he({id:M.DIRT,name:"dirt",color:"#8b6914",hardness:.5,tool:"shovel",atlasCol:2,atlasRow:0}),[M.STONE]:new he({id:M.STONE,name:"stone",color:"#888888",hardness:1.5,minTier:1,dropItem:"cobblestone",tool:"pickaxe",atlasCol:1,atlasRow:0}),[M.COBBLESTONE]:new he({id:M.COBBLESTONE,name:"cobblestone",color:"#6b6b6b",hardness:2,minTier:1,tool:"pickaxe",atlasCol:0,atlasRow:1}),[M.WOOD_LOG]:new he({id:M.WOOD_LOG,name:"wood_log",color:"#6b4423",hardness:1,tool:"axe",atlasCol:4,atlasRow:1,atlasTop:[5,1],atlasBottom:[5,1]}),[M.LEAVES]:new he({id:M.LEAVES,name:"leaves",color:"#2d6e1e",hardness:.2,dropItem:null,isTransparent:!0,atlasCol:4,atlasRow:3}),[M.SAND]:new he({id:M.SAND,name:"sand",color:"#d4c27a",hardness:.5,tool:"shovel",atlasCol:2,atlasRow:1}),[M.IRON_ORE]:new he({id:M.IRON_ORE,name:"iron_ore",color:"#7a7a60",hardness:3,minTier:2,dropItem:"iron_ore",tool:"pickaxe",atlasCol:1,atlasRow:2}),[M.CRYSTAL_ORE]:new he({id:M.CRYSTAL_ORE,name:"crystal_ore",color:"#4a2080",hardness:4.5,minTier:3,dropItem:"crystal_shard",tool:"pickaxe",atlasCol:2,atlasRow:2}),[M.FARMLAND]:new he({id:M.FARMLAND,name:"farmland",color:"#4a2e08",hardness:.5,dropItem:"dirt",isFarmland:!0,tool:"shovel",atlasCol:6,atlasRow:0}),[M.CRAFTING_TABLE]:new he({id:M.CRAFTING_TABLE,name:"crafting_table",color:"#8b4513",hardness:1,tool:"axe",atlasCol:11,atlasRow:2,atlasTop:[11,2],atlasBottom:[4,0]}),[M.FORGE]:new he({id:M.FORGE,name:"forge",color:"#555555",hardness:1.5,minTier:1,tool:"pickaxe",atlasCol:13,atlasRow:2}),[M.ALTAR]:new he({id:M.ALTAR,name:"altar",color:"#200030",hardness:999,atlasCol:14,atlasRow:2}),[M.WATER]:new he({id:M.WATER,name:"water",color:"#2255aa",hardness:999,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:12}),[M.GRAVEL]:new he({id:M.GRAVEL,name:"gravel",color:"#888877",hardness:.6,tool:"shovel",atlasCol:3,atlasRow:1}),[M.PLANKS]:new he({id:M.PLANKS,name:"planks",color:"#c8a44a",hardness:.75,tool:"axe",atlasCol:4,atlasRow:0}),[M.GLASS]:new he({id:M.GLASS,name:"glass",color:"#aaddff",hardness:.3,isTransparent:!0,atlasCol:1,atlasRow:3}),[M.CHEST]:new he({id:M.CHEST,name:"chest",color:"#8b6914",hardness:.75,tool:"axe",atlasCol:9,atlasRow:1}),[M.TORCH]:new he({id:M.TORCH,name:"torch",color:"#ffaa00",hardness:.1,isSolid:!1,isTransparent:!0,atlasCol:0,atlasRow:5}),[M.CAMPFIRE]:new he({id:M.CAMPFIRE,name:"campfire",color:"#cc4400",hardness:.5,tool:"axe",atlasCol:7,atlasRow:5})},zm={};for(const i of Object.values(Zi))zm[i.name]=i;class km{constructor(){this.data=new Uint8Array(Qt*pe*Zt),this.data.fill(M.AIR)}_idx(t,e,n){return t*pe*Zt+e*Zt+n}inBounds(t,e,n){return t>=0&&t<Qt&&e>=0&&e<pe&&n>=0&&n<Zt}get(t,e,n){return this.inBounds(t,e,n)?this.data[this._idx(t,e,n)]:M.AIR}set(t,e,n,s){this.inBounds(t,e,n)&&(this.data[this._idx(t,e,n)]=s)}isSolid(t,e,n){if(!this.inBounds(t,e,n))return!1;const s=this.get(t,e,n);return s!==M.AIR&&s!==M.WATER&&s!==M.LEAVES&&s!==M.TORCH}surfaceY(t,e){for(let n=pe-1;n>=0;n--)if(this.get(t,n,e)!==M.AIR)return n;return-1}serialize(){const t=[];let e=this.data[0],n=1;for(let s=1;s<this.data.length;s++){const r=this.data[s];r===e?n++:(t.push(e,n),e=r,n=1)}return t.push(e,n),t}deserialize(t){const e=this.data.length;if(t.length===e){this.data=new Uint8Array(t);return}const n=new Uint8Array(e);let s=0;for(let r=0;r<t.length&&s<e;r+=2){const a=t[r],o=t[r+1];n.fill(a,s,Math.min(s+o,e)),s+=o}this.data=n}}const cl=[{dir:[0,0,-1],normal:[0,0,-1],uvKey:"uvSide"},{dir:[0,0,1],normal:[0,0,1],uvKey:"uvSide"},{dir:[-1,0,0],normal:[-1,0,0],uvKey:"uvSide"},{dir:[1,0,0],normal:[1,0,0],uvKey:"uvSide"},{dir:[0,1,0],normal:[0,1,0],uvKey:"uvTop"},{dir:[0,-1,0],normal:[0,-1,0],uvKey:"uvBottom"}],Gm=[[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]];class gc{constructor(){this.positions=[],this.normals=[],this.uvs=[],this.indices=[],this.vertCount=0}pushFace(t,e,n,s,r){const a=cl[t],o=[[r.u,r.v],[r.u+Ri,r.v],[r.u+Ri,r.v+Ri],[r.u,r.v+Ri]],c=Gm[t],l=this.vertCount;for(let h=0;h<4;h++){const d=c[h];this.positions.push(e+d[0],n+d[1],s+d[2]),this.normals.push(...a.normal),this.uvs.push(o[h][0],o[h][1])}this.indices.push(l,l+1,l+2,l,l+2,l+3),this.vertCount+=4}toMesh(t,e,n){if(this.vertCount===0)return null;const s=new We;s.setAttribute("position",new Te(this.positions,3)),s.setAttribute("normal",new Te(this.normals,3)),s.setAttribute("uv",new Te(this.uvs,2)),s.setIndex(this.indices),s.computeBoundingBox();const r=new Me(s,t);return r.position.set(e*Le,0,n*Le),r}}class Hm{constructor(t,e,n,s,r){this.cx=t,this.cz=e,this.worldData=n,this.material=s,this.waterMaterial=r,this.mesh=null,this.waterMesh=null,this.build()}build(){const t=new gc,e=new gc,n=this.cx*Le,s=this.cz*Le;for(let r=0;r<Le;r++){const a=n+r;for(let o=0;o<pe;o++)for(let c=0;c<Le;c++){const l=s+c,h=this.worldData.get(a,o,l);if(h===M.AIR)continue;const d=Zi[h];if(!d)continue;const f=h===M.WATER;for(let u=0;u<6;u++){const _=cl[u],g=this.worldData.get(a+_.dir[0],o+_.dir[1],l+_.dir[2]);if(f){if(g!==M.AIR)continue;e.pushFace(u,r,o,c,d[_.uvKey])}else{const p=Zi[g];if(!(!p||!p.isSolid||p.isTransparent))continue;t.pushFace(u,r,o,c,d[_.uvKey])}}}}this.dispose(),this.mesh=t.toMesh(this.material,this.cx,this.cz),this.mesh&&(this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.waterMesh=e.toMesh(this.waterMaterial,this.cx,this.cz),this.waterMesh&&(this.waterMesh.receiveShadow=!0,this.waterMesh.renderOrder=1)}dispose(){var t;for(const e of[this.mesh,this.waterMesh])e&&(e.geometry.dispose(),(t=e.parent)==null||t.remove(e));this.mesh=null,this.waterMesh=null}}class Vm{constructor(t,e,n){this.scene=t,this.worldData=e,this.material=new Js({map:n,alphaTest:.1,side:pn}),this.waterMaterial=new Js({map:n,transparent:!0,opacity:.75,side:ze,depthWrite:!1}),this.chunks=new Map,this._buildAll()}_buildAll(){for(let t=0;t<Wr;t++)for(let e=0;e<Xr;e++)this._buildChunk(t,e)}_buildChunk(t,e){const n=`${t},${e}`,s=this.chunks.get(n);s&&s.dispose();const r=new Hm(t,e,this.worldData,this.material,this.waterMaterial);this.chunks.set(n,r),r.mesh&&this.scene.add(r.mesh),r.waterMesh&&this.scene.add(r.waterMesh)}rebuildChunk(t,e){if(!(t<0||t>=Wr||e<0||e>=Xr)){this._buildChunk(t,e);for(const[n,s]of[[t-1,e],[t+1,e],[t,e-1],[t,e+1]])n<0||n>=Wr||s<0||s>=Xr||this._buildChunk(n,s)}}get allMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}}function Is(i,t){let e=Math.imul(i*1664525+t,22695477)+1013904223;return e^=e>>>16,e=Math.imul(e,73244475),e^=e>>>16,(e>>>0)/4294967295}function re(i,t,e){const n=Math.floor(i/e),s=Math.floor(t/e),r=i/e-n,a=t/e-s,o=r*r*(3-2*r),c=a*a*(3-2*a);return Is(n,s)*(1-o)*(1-c)+Is(n+1,s)*o*(1-c)+Is(n,s+1)*(1-o)*c+Is(n+1,s+1)*o*c}function vc(i,t,e=4,n=55){let s=0,r=1,a=1,o=0;for(let c=0;c<e;c++)s+=re(i*a,t*a,n)*r,o+=r,r*=.5,a*=2.1;return s/o}function ts(i,t){const e=Qt/2,n=Zt/2,s=(i-e)/(Qt*.44),r=(t-n)/(Zt*.44),a=re(i,t,52)*.2-.1;return Math.sqrt(s*s+r*r)+a}function Wm(i){Xm(i),Ym(i),qm(i),Km(i),r0(i),$m(i),Zm(i),jm(i),Jm(i),Qm(i),u0(i),t0(i),e0(i),a0(i),n0(i),o0(i),c0(i),l0(i),h0(i),d0(i),f0(i),p0(i),m0(i),_0(i),g0(i),v0(i),x0(i),y0(i),M0(i),S0(i)}function Xm(i){for(let t=0;t<Qt;t++)for(let e=0;e<Zt;e++){const n=ts(t,e);if(n>.92)continue;const s=Math.floor(to-2-n*n*5);for(let r=0;r<=Math.min(s,pe-1);r++)i.set(t,r,e,M.STONE)}}function Ym(i){for(let t=0;t<Qt;t++)for(let e=0;e<Zt;e++){const n=ts(t,e);if(n>.9)continue;const s=vc(t,e,4,58)*4,r=vc(t+300,e+300,3,24)*1.5,a=re(t,e,12)*.6,o=Math.max(0,1-n*1.3),c=Math.round(to+(s+r+a-3)*o),l=Math.max(Qn,Math.min(c,pe-4));i.set(t,l,e,M.GRASS);for(let h=1;h<=4;h++)l-h>=0&&i.get(t,l-h,e)===M.STONE&&i.set(t,l-h,e,M.DIRT)}}function qm(i){for(let t=0;t<Qt;t++)for(let e=0;e<Zt;e++){const n=ts(t,e);if(n<.68||n>.92)continue;const s=i.surfaceY(t,e);if(s<Qn-2||s>Qn+2)continue;const r=2+Math.round(re(t*2,e*2,20));for(let a=0;a<r;a++){const o=s-a;if(o<0)break;const c=i.get(t,o,e);(c===M.GRASS||c===M.DIRT||c===M.STONE)&&i.set(t,o,e,M.SAND)}}}function Km(i){const t=[[114,90,5],[66,114,4],[140,70,5],[80,50,4],[110,150,6]];for(const[e,n,s]of t)for(let r=e-s-2;r<=e+s+2;r++)for(let a=n-s-2;a<=n+s+2;a++){const o=Math.sqrt((r-e)**2+(a-n)**2);if(o>s+.5)continue;const c=i.surfaceY(r,a);c<0||(i.set(r,c,a,M.WATER),o<s-1&&i.set(r,c-1,a,M.DIRT),o>=s-1&&i.get(r,c,a)===M.GRASS&&i.set(r,c,a,M.SAND))}}function ll(i,t,e,n,s){for(let r=t-s;r<=t+s;r++)for(let a=e-s;a<=e+s;a++){if(r<0||r>=Qt||a<0||a>=Zt)continue;const o=Math.sqrt((r-t)**2+(a-e)**2),c=re(r,a,16)*6-3,l=Math.max(0,Math.floor(n-o*(n/s)+c));if(l===0)continue;for(let d=0;d<Math.min(l,pe);d++)i.set(r,d,a,M.STONE);const h=i.get(r,l,a);(h===M.AIR||h===M.GRASS||h===M.DIRT)&&i.set(r,l,a,l>n-4?M.GRAVEL:M.STONE),l>=n-3&&i.inBounds(r,l+1,a)&&i.set(r,l+1,a,M.GRAVEL)}}function $m(i){ll(i,46,46,28,28)}function Zm(i){ll(i,150,44,22,20)}function jm(i){for(let r=110;r<=166;r++)for(let a=110;a<=166;a++){if(r<0||r>=Qt||a<0||a>=Zt||Math.sqrt((r-138)**2+(a-138)**2)>28)continue;const c=i.surfaceY(r,a);if(c<0)continue;i.get(r,c,a)===M.GRASS&&i.set(r,c,a,M.GRAVEL),re(r*2,a*2,14)<.32&&c<=Qn+2&&(i.set(r,c,a,M.WATER),i.set(r,c-1,a,M.DIRT))}const s=[[120,120],[126,124],[122,132],[130,126],[136,130],[142,122],[128,140],[134,142],[144,136],[118,136],[148,128],[122,148],[138,148],[150,140],[112,128]];for(const[r,a]of s){const o=i.surfaceY(r,a);if(o<0||i.get(r,o,a)===M.WATER)continue;const c=4+Math.round(re(r,a,10));for(let l=1;l<=c;l++)i.set(r,o+l,a,M.WOOD_LOG);for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){if(Math.abs(l)+Math.abs(h)>1)continue;const d=r+l,f=o+c,u=a+h;i.inBounds(d,f,u)&&i.get(d,f,u)===M.AIR&&i.set(d,f,u,M.LEAVES)}}}function Jm(i){for(let s=20;s<=80;s+=5)for(let r=120;r<=180;r+=5){if(Math.sqrt((s-50)**2+(r-150)**2)>30)continue;const o=Math.floor(re(s,r,3)*4)-2,c=Math.floor(re(s+50,r+50,3)*4)-2,l=s+o,h=r+c;if(l<4||l>=Qt-4||h<4||h>=Zt-4)continue;const d=i.surfaceY(l,h);if(d<0)continue;const f=i.get(l,d,h);if(f!==M.GRASS&&f!==M.DIRT)continue;const u=5+Math.round(re(l*2,h*2,6)*4);for(let g=1;g<=u;g++)i.set(l,d+g,h,M.WOOD_LOG);const _=3;for(let g=-_;g<=_;g++)for(let p=-_;p<=_;p++)for(let m=-1;m<=2;m++){if(Math.abs(g)===_&&Math.abs(p)===_)continue;const T=l+g,S=d+u+m,A=h+p;i.inBounds(T,S,A)&&i.get(T,S,A)===M.AIR&&i.set(T,S,A,M.LEAVES)}}}function Qm(i){const t=[];for(let n=14;n<Qt-14;n++)for(let s=14;s<Zt-14;s++){if(ts(n,s)>.78)continue;const a=Math.sqrt((n-138)**2+(s-138)**2)<30,o=Math.sqrt((n-46)**2+(s-46)**2)<8,c=Math.sqrt((n-150)**2+(s-44)**2)<6,l=Math.sqrt((n-50)**2+(s-150)**2)<32;if(a||o||c||l)continue;re(n*3,s*3,20)>.7&&t.push([n,s])}const e=Math.max(1,Math.floor(t.length/70));for(let n=0;n<t.length;n+=e){const[s,r]=t[n],a=i.surfaceY(s,r);if(a<0)continue;const o=i.get(s,a,r);if(o!==M.GRASS&&o!==M.DIRT)continue;const c=4+Math.round(re(s,r,12)*3);for(let h=1;h<=c;h++)i.set(s,a+h,r,M.WOOD_LOG);const l=2;for(let h=-l;h<=l;h++)for(let d=-l;d<=l;d++)for(let f=-1;f<=2;f++){if(Math.abs(h)===l&&Math.abs(d)===l)continue;const u=s+h,_=a+c+f,g=r+d;i.inBounds(u,_,g)&&i.get(u,_,g)===M.AIR&&i.set(u,_,g,M.LEAVES)}}}function t0(i){const t=[[78,42],[42,80],[108,60],[60,108],[132,88],[88,132],[160,96],[96,160],[70,70],[120,120],[160,60],[60,160],[100,40],[40,100],[155,100],[100,155]];for(const[e,n]of t){const s=i.surfaceY(e,n);if(!(s<0)&&i.get(e,s,n)===M.GRASS){for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){if(Math.abs(r)+Math.abs(a)>1)continue;const o=i.surfaceY(e+r,n+a);o>=0&&i.set(e+r,o+1,n+a,M.STONE)}i.set(e,s+2,n,M.STONE)}}}function e0(i){let t=42;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=48;for(let s=0;s<n;s++){let r=16+Math.floor(e()*(Qt-32)),a=2+Math.floor(e()*9),o=16+Math.floor(e()*(Zt-32));const c=30+Math.floor(e()*60);let l=e()*2-1,h=e()*2-1;for(let d=0;d<c;d++){const f=1+(e()>.65?1:0)+(e()>.9?1:0);for(let u=-f;u<=f;u++)for(let _=0;_<=f;_++)for(let g=-f;g<=f;g++)i.inBounds(r+u,a+_,o+g)&&i.get(r+u,a+_,o+g)!==M.AIR&&i.set(r+u,a+_,o+g,M.AIR);if(r+=Math.round(l),o+=Math.round(h),l+=(e()-.5)*.45,h+=(e()-.5)*.45,l=Math.max(-1.5,Math.min(1.5,l)),h=Math.max(-1.5,Math.min(1.5,h)),!i.inBounds(r,a,o))break}}}function n0(i){let t=13;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295);for(let n=0;n<80;n++){const s=12+Math.floor(e()*(Qt-24)),r=2+Math.floor(e()*8),a=12+Math.floor(e()*(Zt-24));for(let o=0;o<4+Math.floor(e()*6);o++){const c=s+Math.floor(e()*3)-1,l=r+Math.floor(e()*2),h=a+Math.floor(e()*3)-1;i.inBounds(c,l,h)&&i.get(c,l,h)===M.STONE&&i.set(c,l,h,M.IRON_ORE)}}for(let n=0;n<30;n++){const s=10+Math.floor(e()*(Qt-20)),r=1+Math.floor(e()*5),a=10+Math.floor(e()*(Zt-20));for(let o=0;o<3+Math.floor(e()*4);o++){const c=s+Math.floor(e()*3)-1,l=a+Math.floor(e()*3)-1;i.inBounds(c,r,l)&&i.get(c,r,l)===M.STONE&&i.set(c,r,l,M.CRYSTAL_ORE)}}}const i0=[[96,86,28],[114,90,10],[162,108,20],[52,132,18],[96,120,14]];function s0(i,t){for(const[e,n,s]of i0)if((i-e)*(i-e)+(t-n)*(t-n)<s*s)return!0;return!1}function r0(i){let t=120,e=70,n=.6,s=1;for(let r=0;r<55;r++){const a=3+Math.round(re(t,e,8)*2);for(let c=-a;c<=a;c++)for(let l=-a;l<=a;l++){if(Math.sqrt(c*c+l*l)>a)continue;const d=Math.floor(10+re(t+c,e+l,6)*5),f=Math.floor(t+c),u=Math.floor(e+l);if(!i.inBounds(f,0,u)||s0(f,u))continue;const _=i.surfaceY(f,u);for(let p=_;p>=Math.max(2,_-d);p--)i.set(f,p,u,M.AIR);const g=Math.max(2,_-d);i.inBounds(f,g,u)&&i.set(f,g,u,M.GRAVEL)}n+=(re(t*.1,e*.1,4)-.5)*.4,s+=(re(t*.1+50,e*.1+50,4)-.5)*.4;const o=Math.sqrt(n*n+s*s);n/=o,s/=o,t+=n*1.8,e+=s*1.8}}function a0(i){for(let o=-12;o<=12;o++)for(let c=-5;c<=5;c++)for(let l=-11;l<=11;l++){if((o/12)**2+(c/5)**2+(l/11)**2>1)continue;const d=155+o,f=5+c,u=55+l;i.inBounds(d,f,u)&&i.set(d,f,u,M.AIR)}for(let o=-12;o<=12;o++)for(let c=-5;c<=5;c++)for(let l=-11;l<=11;l++){const h=(o/12)**2+(c/5)**2+(l/11)**2;if(h<.75||h>1.15)continue;const d=155+o,f=5+c,u=55+l;i.inBounds(d,f,u)&&i.get(d,f,u)===M.STONE&&re(d,f+u*3,4)>.5&&i.set(d,f,u,M.CRYSTAL_ORE)}}function o0(i){const t=i.surfaceY(100,100);t>=0&&i.set(100,t+1,100,M.CRAFTING_TABLE);const e=i.surfaceY(50,148);e>=0&&i.set(50,e+1,148,M.CRAFTING_TABLE);const n=i.surfaceY(50,50);n>=0&&i.set(50,n+1,50,M.FORGE);const s=i.surfaceY(152,48);s>=0&&i.set(152,s+1,48,M.FORGE);const r=i.surfaceY(138,138);r>=0&&(i.set(138,r+1,138,M.ALTAR),i.set(138,r+2,138,M.ALTAR),i.set(138,r+3,138,M.ALTAR))}function c0(i){const t=[[76,80],[116,62],[88,155],[60,92],[168,100]];for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0)continue;const r=i.get(e,s,n);if(r===M.WATER||r===M.SAND)continue;const a=7,o=5,c=4;for(let h=0;h<a;h++)for(let d=0;d<o;d++){const f=e+h-Math.floor(a/2),u=n+d-Math.floor(o/2);if(!(h===0||h===a-1||d===0||d===o-1))continue;const g=i.surfaceY(f,u);if(g<0)continue;const p=c-Math.round(re(f,u,3)*2.5);for(let m=1;m<=Math.max(1,p);m++){const T=re(f*2,u*2+m,2)>.6?M.COBBLESTONE:M.STONE;i.set(f,g+m,u,T)}i.set(f,g,u,M.COBBLESTONE)}for(let h=0;h<12;h++){const d=e+Math.floor(re(e+h,n+h*3,3)*9)-4,f=n+Math.floor(re(e+h*2,n+h,3)*7)-3,u=i.surfaceY(d,f);u>=0&&i.set(d,u+1,f,M.COBBLESTONE)}const l=s+c-1;for(let h=1;h<a-1;h++){const d=e+h-Math.floor(a/2);re(d,n,5)>.55&&i.set(d,l,n-1,M.PLANKS)}}}function l0(i){for(let a=0;a<9;a++){const o=a/9*Math.PI*2,c=Math.round(96+Math.cos(o)*10),l=Math.round(120+Math.sin(o)*10),h=i.surfaceY(c,l);if(h<0||i.get(c,h,l)===M.WATER)continue;const f=3+(a%3===0?1:0);for(let u=1;u<=f;u++)i.set(c,h+u,l,M.STONE);f===4&&(i.set(c-1,h+f,l,M.STONE),i.set(c+1,h+f,l,M.STONE))}const r=i.surfaceY(96,120);r>=0&&(i.set(96,r+1,120,M.STONE),i.set(95,r+1,120,M.STONE),i.set(97,r+1,120,M.STONE),i.set(96,r+1,119,M.STONE),i.set(96,r+1,121,M.STONE));for(let a=0;a<18;a++){const o=96+Math.round(Math.sin(a*.22)*2),c=130+a+2,l=i.surfaceY(o,c);l>=0&&i.get(o,l,c)===M.GRASS&&i.set(o,l,c,M.GRAVEL)}}function h0(i){const t=[[72,130],[108,88],[55,65],[170,130],[90,168]];for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===M.WATER)continue;i.set(e,s+1,n,M.CAMPFIRE);for(const[o,c]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const l=i.surfaceY(e+o,n+c);l>=0&&i.set(e+o,l+1,n+c,M.COBBLESTONE)}const r=[[-2,0],[2,0],[0,-2],[0,2]];for(const[o,c]of r){const l=i.surfaceY(e+o,n+c);l>=0&&i.get(e+o,l,n+c)!==M.WATER&&i.set(e+o,l+1,n+c,M.WOOD_LOG)}const a=i.surfaceY(e+2,n+2);a>=0&&i.set(e+2,a+1,n+2,M.CHEST);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const l=i.surfaceY(e+o,n+c);l>=0&&i.get(e+o,l,n+c)===M.GRASS&&i.set(e+o,l,n+c,M.DIRT)}}}function u0(i){const t=[[80,90,1,5],[105,75,0,4],[65,110,1,6],[130,90,0,5],[75,140,1,4],[44,140,0,5],[160,80,1,4],[100,130,0,5],[55,75,1,3],[140,110,0,4],[175,115,1,5],[85,58,0,4]];for(const[e,n,s,r]of t){const a=i.surfaceY(e,n);if(!(a<0)&&i.get(e,a,n)!==M.WATER)for(let o=0;o<r;o++){const c=s===0?e+o:e,l=s===1?n+o:n,h=i.surfaceY(c,l);h>=0&&i.get(c,h,l)!==M.WATER&&i.set(c,h+1,l,M.WOOD_LOG)}}}function d0(i){const t=[[30,30],[155,50],[95,162],[170,70],[52,170],[120,40],[60,40],[168,155]];for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===M.WATER)continue;i.set(e,s+1,n,M.CHEST);const r=[[1,0],[-1,0],[0,1],[0,-1]];for(const[a,o]of r){const c=i.surfaceY(e+a,n+o);c>=0&&i.get(e+a,c,n+o)===M.GRASS&&i.set(e+a,c+1,n+o,M.COBBLESTONE)}}}function f0(i){let t=68,e=112;const n={x:114,z:90};for(let s=0;s<60;s++){const r=n.x-t,a=n.z-e,o=Math.sqrt(r*r+a*a);if(o<4)break;const c=r/o+(re(t*.1,e*.1,5)-.5)*.8,l=a/o+(re(t*.1+30,e*.1+30,5)-.5)*.8;t+=c,e+=l;const h=Math.floor(t),d=Math.floor(e);if(!i.inBounds(h,0,d))break;for(let f=-1;f<=1;f++)for(let u=-1;u<=1;u++){const _=h+f,g=d+u;if(!i.inBounds(_,0,g))continue;const p=i.surfaceY(_,g);p<0||p<=Qn||p>Qn+4||i.get(_,p,g)===M.WATER||(i.set(_,p,g,M.WATER),Math.abs(f)+Math.abs(u)===1&&i.get(_,p,g)===M.GRASS&&i.set(_,p,g,M.SAND))}}}function p0(i){for(let r=-6;r<=6;r++)for(let a=-6;a<=6;a++){const o=110+r,c=125+a,l=i.surfaceY(o,c);l<0||i.get(o,l,c)===M.WATER||i.get(o,l,c)===M.GRASS&&i.set(o,l,c,M.DIRT)}const n=[[-4,-4],[0,-4],[4,-4],[-4,0],[4,0],[-4,4],[0,4],[4,4]];for(const[r,a]of n){const o=110+r,c=125+a,l=i.surfaceY(o,c);l<0||(i.set(o,l+1,c,M.STONE),i.set(o,l+2,c,M.STONE),i.set(o-1,l+2,c,M.COBBLESTONE),i.set(o+1,l+2,c,M.COBBLESTONE))}for(let r=-5;r<=5;r++){const a=i.surfaceY(110+r,120),o=i.surfaceY(110+r,130);a>=0&&i.set(110+r,a+1,120,M.COBBLESTONE),o>=0&&i.set(110+r,o+1,130,M.COBBLESTONE)}for(let r=-4;r<=4;r++){const a=i.surfaceY(105,125+r),o=i.surfaceY(115,125+r);a>=0&&i.set(105,a+1,125+r,M.COBBLESTONE),o>=0&&i.set(115,o+1,125+r,M.COBBLESTONE)}const s=i.surfaceY(110,130);s>=0&&(i.set(109,s+1,130,M.AIR),i.set(111,s+1,130,M.AIR))}function qi(i,t,e,n,s,r,a,o){const c=i.surfaceY(t,e);if(c<0)return c;for(let f=0;f<=n;f++){const u=c+f;if(u>=pe)break;for(let _=0;_<s;_++)for(let g=0;g<s;g++){const p=t-Math.floor(s/2)+_,m=e-Math.floor(s/2)+g;if(!i.inBounds(p,u,m))continue;const T=_===0||_===s-1||g===0||g===s-1,S=_>0&&_<s-1&&g>0&&g<s-1;f===0||T?i.set(p,u,m,r):f===n||f%4===0&&S?i.set(p,u,m,a):i.set(p,u,m,M.AIR)}}if(o){const f=c+n+1;if(f<pe){for(let u=0;u<s;u++)for(let _=0;_<s;_++)if((u===0||u===s-1||_===0||_===s-1)&&(u+_)%2===0){const p=t-Math.floor(s/2)+u,m=e-Math.floor(s/2)+_;i.inBounds(p,f,m)&&i.set(p,f,m,r)}}}const l=t,h=e+Math.floor(s/2);i.inBounds(l,c+1,h)&&(i.set(l,c+1,h,M.AIR),i.set(l,c+2,h,M.AIR));const d=c+n;return i.inBounds(t,d+1,e)&&d+1<pe&&i.set(t,d+1,e,M.CHEST),c}function fe(i,t,e,n){i.inBounds(t,e,n)&&i.set(t,e,n,M.GLASS)}function m0(i){{const s=qi(i,74,68,12,5,M.COBBLESTONE,M.PLANKS,!0);s>=0&&(fe(i,74,s+5,66),fe(i,74,s+5,70),fe(i,72,s+5,68),fe(i,76,s+5,68),fe(i,74,s+9,66),fe(i,74,s+9,70),fe(i,72,s+9,68),fe(i,76,s+9,68),s+12+2<pe&&i.set(75,s+12+2,69,M.TORCH))}{const s=qi(i,162,80,16,4,M.STONE,M.PLANKS,!0);if(s>=0){for(let r=3;r<16;r+=3)fe(i,162,s+r,79),fe(i,162,s+r,81),fe(i,161,s+r,80),fe(i,163,s+r,80);for(let r=0;r<3;r++){const a=s+16+1+r;if(a>=pe)break;const o=2-r;for(let c=-o;c<=o;c++)for(let l=-o;l<=o;l++)i.inBounds(162+c,a,80+l)&&i.set(162+c,a,80+l,M.STONE)}s+16+4<pe&&i.set(162,s+16+4,80,M.CRYSTAL_ORE),i.inBounds(162,s+1,80)&&i.set(162,s+1,80,M.FORGE)}}{const s=qi(i,118,145,14,4,M.STONE,M.PLANKS,!1);if(s>=0){for(let r=2;r<14;r+=4)fe(i,118,s+r,144),fe(i,118,s+r,146);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++)(r+a+118+145)%3===0&&s+14<pe&&i.set(118+r,s+14,145+a,M.AIR);i.inBounds(118,s+1,144)&&i.set(118,s+1,144,M.CHEST)}}{const s=qi(i,96,172,15,3,M.COBBLESTONE,M.PLANKS,!0);if(s>=0){for(let r=13;r<=14;r++)for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)(Math.abs(a)===1||Math.abs(o)===1)&&i.inBounds(96+a,s+r,172+o)&&i.set(96+a,s+r,172+o,M.GLASS);s+15+1<pe&&i.set(96,s+15+1,172,M.CRYSTAL_ORE);for(let r=1;r<8;r++){const o=172-r,c=i.surfaceY(96,o);c>=0&&i.set(96,c+1,o,M.COBBLESTONE)}}}for(const[t,e]of[[90,72],[102,72]]){const s=qi(i,t,e,8,3,M.COBBLESTONE,M.PLANKS,!0);s>=0&&(fe(i,t,s+4,e-1),fe(i,t,s+4,e+1))}{const e=i.surfaceY(96,72);if(e>=0){for(let n=90;n<=102;n++)i.surfaceY(n,72)<0||n===90||n===102||n>91&&n<101&&i.set(n,e+8,72,M.COBBLESTONE);for(let n=68;n<78;n++)for(let s=93;s<=99;s++){const r=i.surfaceY(s,n);r>=0&&i.get(s,r,n)!==M.WATER&&i.set(s,r,n,M.GRAVEL)}}}}function qr(i,t,e,n,s,r,a,o){const c=i.surfaceY(t,e);if(c<0||i.get(t,c,e)===M.WATER)return;for(let u=0;u<=r;u++){const _=c+u;if(_>=pe)break;for(let g=0;g<n;g++)for(let p=0;p<s;p++){const m=t-Math.floor(n/2)+g,T=e-Math.floor(s/2)+p;if(!i.inBounds(m,_,T))continue;const S=g===0||g===n-1||p===0||p===s-1;u===0?i.set(m,_,T,M.COBBLESTONE):u===r?i.set(m,_,T,o):S?i.set(m,_,T,a):i.set(m,_,T,M.AIR)}}const h=t,d=e+Math.floor(s/2);i.inBounds(h,c+1,d)&&i.set(h,c+1,d,M.AIR),i.inBounds(h,c+2,d)&&i.set(h,c+2,d,M.AIR);const f=c+2;fe(i,t-Math.floor(n/2),f,e),fe(i,t+Math.floor(n/2)-(n%2===0?1:0),f,e),fe(i,t,f,e-Math.floor(s/2)),i.inBounds(t-1,c+1,e)&&i.set(t-1,c+1,e,M.CHEST),i.inBounds(t+1,c+1,e)&&i.set(t+1,c+1,e,M.CRAFTING_TABLE)}function Kr(i,t,e){const n=i.surfaceY(t,e);if(!(n<0)&&i.get(t,n,e)!==M.WATER){i.set(t,n,e,M.WATER);for(const[s,r]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const a=i.surfaceY(t+s,e+r);a<0||(i.set(t+s,a+1,e+r,M.COBBLESTONE),i.set(t+s,a+2,e+r,M.STONE))}i.set(t-1,n+3,e,M.WOOD_LOG),i.set(t+1,n+3,e,M.WOOD_LOG)}}function ye(i,t,e,n,s){const r=Math.max(Math.abs(n-t),Math.abs(s-e));for(let a=0;a<=r;a++){const o=r===0?0:a/r,c=Math.round(t+(n-t)*o),l=Math.round(e+(s-e)*o);for(let h=-1;h<=1;h++){const d=i.surfaceY(c+h,l);d>=0&&i.get(c+h,d,l)!==M.WATER&&i.set(c+h,d,l,M.GRAVEL);const f=i.surfaceY(c,l+h);f>=0&&i.get(c,f,l+h)!==M.WATER&&i.set(c,f,l+h,M.GRAVEL)}}}function Us(i,t,e,n,s){const r=i.surfaceY(t,e);if(!(r<0||i.get(t,r,e)===M.WATER)){for(let a=0;a<n;a++)for(let o=0;o<s;o++){const c=t+a,l=e+o,h=i.surfaceY(c,l);h<0||i.get(c,h,l)===M.WATER||i.set(c,h,l,M.FARMLAND)}for(let a=-1;a<=n;a++){const o=i.surfaceY(t+a,e-1),c=i.surfaceY(t+a,e+s);o>=0&&i.set(t+a,o+1,e-1,M.COBBLESTONE),c>=0&&i.set(t+a,c+1,e+s,M.COBBLESTONE)}for(let a=0;a<s;a++){const o=i.surfaceY(t-1,e+a),c=i.surfaceY(t+n,e+a);o>=0&&i.set(t-1,o+1,e+a,M.COBBLESTONE),c>=0&&i.set(t+n,c+1,e+a,M.COBBLESTONE)}}}function _0(i){{Kr(i,96,86);for(let a=-5;a<=5;a++)for(let o=-5;o<=5;o++){const c=i.surfaceY(96+a,86+o);c>=0&&i.get(96+a,c,86+o)!==M.WATER&&i.set(96+a,c,86+o,M.GRAVEL)}const n=[[84,82,7,5,3,M.PLANKS,M.PLANKS],[108,82,6,5,3,M.COBBLESTONE,M.PLANKS],[86,96,5,4,3,M.PLANKS,M.PLANKS],[106,96,5,4,3,M.PLANKS,M.PLANKS],[96,100,6,4,3,M.COBBLESTONE,M.PLANKS],[84,104,5,4,3,M.PLANKS,M.PLANKS],[108,104,5,4,3,M.PLANKS,M.PLANKS]];for(const[a,o,c,l,h,d,f]of n)qr(i,a,o,c,l,h,d,f);const s=i.surfaceY(108,82);s>=0&&i.set(108,s+1,82,M.FORGE),ye(i,96,82,84,82),ye(i,96,82,108,82),ye(i,96,90,96,100),ye(i,96,100,86,96),ye(i,96,100,106,96),ye(i,96,104,84,104),ye(i,96,104,108,104),ye(i,96,81,96,74),Us(i,112,88,5,4),Us(i,112,94,5,4);const r=i.surfaceY(99,89);r>=0&&i.set(99,r+1,89,M.CAMPFIRE);for(const[a,o]of[[91,81],[101,81],[91,91],[101,91]]){const c=i.surfaceY(a,o);c<0||(i.set(a,c+1,o,M.STONE),i.set(a,c+2,o,M.STONE),i.set(a,c+3,o,M.TORCH))}}{Kr(i,162,108);for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++){const a=i.surfaceY(162+s,108+r);a>=0&&i.get(162+s,a,108+r)!==M.WATER&&i.set(162+s,a,108+r,M.GRAVEL)}const n=[[152,104,6,4,3,M.PLANKS,M.PLANKS],[172,104,5,4,3,M.COBBLESTONE,M.PLANKS],[153,118,5,4,3,M.PLANKS,M.PLANKS],[171,118,5,4,3,M.PLANKS,M.PLANKS],[162,122,5,4,3,M.PLANKS,M.PLANKS]];for(const[s,r,a,o,c,l,h]of n)qr(i,s,r,a,o,c,l,h);ye(i,162,108,152,104),ye(i,162,108,172,104),ye(i,162,108,153,118),ye(i,162,108,171,118),ye(i,162,108,162,122),Us(i,176,112,4,4);for(const[s,r]of[[158,104],[166,104],[158,112],[166,112]]){const a=i.surfaceY(s,r);a<0||(i.set(s,a+1,r,M.STONE),i.set(s,a+2,r,M.TORCH))}}{Kr(i,52,132);for(let r=-3;r<=3;r++)for(let a=-3;a<=3;a++){const o=i.surfaceY(52+r,132+a);o>=0&&i.get(52+r,o,132+a)!==M.WATER&&i.set(52+r,o,132+a,M.DIRT)}const n=[[43,128,5,4,3,M.PLANKS,M.PLANKS],[61,128,5,4,3,M.PLANKS,M.PLANKS],[44,141,5,4,3,M.PLANKS,M.PLANKS],[60,141,5,4,3,M.WOOD_LOG,M.PLANKS]];for(const[r,a,o,c,l,h,d]of n)qr(i,r,a,o,c,l,h,d);ye(i,52,132,43,128),ye(i,52,132,61,128),ye(i,52,132,44,141),ye(i,52,132,60,141),Us(i,64,132,4,3);const s=i.surfaceY(52,136);s>=0&&i.set(52,s+1,136,M.CAMPFIRE)}}function g0(i){const t=to+10;for(let e=0;e<Qt;e++)for(let n=0;n<Zt;n++){const s=i.surfaceY(e,n);if(s<t)continue;const r=i.get(e,s,n);r===M.AIR||r===M.WATER||r===M.LEAVES||(i.set(e,s,n,M.GRAVEL),s>=t+4&&i.inBounds(e,s+1,n)&&i.set(e,s+1,n,M.GRAVEL))}}function v0(i){for(let t=1;t<Qt-1;t++)for(let e=1;e<Zt-1;e++){const n=i.surfaceY(t,e);if(n<0)continue;const s=[i.surfaceY(t+1,e),i.surfaceY(t-1,e),i.surfaceY(t,e+1),i.surfaceY(t,e-1)],r=Math.min(...s.filter(o=>o>=0)),a=n-r;if(!(a<4)){for(let o=1;o<=a;o++){const c=n-o;if(c<0)break;const l=i.get(t,c,e);l===M.DIRT&&i.set(t,c,e,M.STONE),l===M.GRASS&&i.set(t,c,e,M.COBBLESTONE)}if(a>=6){const o=n-Math.floor(a/2);i.inBounds(t,o,e)&&i.set(t,o,e,M.GRAVEL)}}}}function x0(i){let t=99;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[44,58],[58,44],[150,52],[54,148],[128,72],[72,128],[164,90],[90,48],[36,100],[110,36],[170,120],[42,170]];for(const[s,r]of n){const a=i.surfaceY(s,r);if(a<Qn+3||a<0)continue;const o=i.get(s,a,r);if(!(o===M.WATER||o===M.SAND)){for(let c=1;c<=3;c++){const l=a-c;if(l<0)break;i.get(s,l,r)!==M.AIR&&i.set(s,l,r,M.AIR)}for(const[c,l]of[[1,0],[-1,0],[0,1],[0,-1]])for(let h=1;h<=2;h++){const d=a-h;d<0||!i.inBounds(s+c,d,r+l)||e()>.5&&i.set(s+c,d,r+l,M.AIR)}i.inBounds(s,a,r)&&i.set(s,a,r,M.COBBLESTONE),i.inBounds(s-1,a,r)&&i.set(s-1,a,r,M.STONE),i.inBounds(s+1,a,r)&&i.set(s+1,a,r,M.STONE)}}}function y0(i){for(let t=0;t<Qt;t++)for(let e=0;e<Zt;e++){if(i.get(t,i.surfaceY(t,e),e)!==M.WATER)continue;const n=i.surfaceY(t,e);n<0||(n-1>=0&&i.get(t,n-1,e)===M.STONE&&i.set(t,n-1,e,M.SAND),n-2>=0&&i.get(t,n-2,e)===M.STONE&&i.set(t,n-2,e,M.DIRT))}}function M0(i){let t=77;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[118,122],[126,138],[134,120],[124,148],[140,132],[48,142],[56,156],[44,162],[60,138],[52,158],[40,56],[58,46],[52,60]];for(const[r,a]of n){const o=i.surfaceY(r,a);if(o<0||i.get(r,o,a)===M.WATER)continue;const c=e()>.5?2:1;for(let h=1;h<=c;h++)i.inBounds(r,o+h,a)&&i.get(r,o+h,a)===M.AIR&&i.set(r,o+h,a,M.COBBLESTONE);const l=o+c+1;if(l<pe)for(const[h,d]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])i.inBounds(r+h,l,a+d)&&i.get(r+h,l,a+d)===M.AIR&&i.set(r+h,l,a+d,M.LEAVES)}const s=[[82,62],[104,54],[66,88],[130,80],[80,108],[158,100],[100,148],[62,118],[144,64],[70,152],[112,170],[160,140],[38,80],[40,120],[180,90]];for(const[r,a]of s){const o=i.surfaceY(r,a);if(o<0||i.get(r,o,a)===M.WATER)continue;const c=1+Math.floor(e()*2);for(let l=-c;l<=c;l++)for(let h=-c;h<=c;h++)for(let d=0;d<=c;d++){if(Math.sqrt(l*l+d*d*1.5+h*h)>c+.4)continue;const u=r+l,_=o+d,g=a+h;if(!i.inBounds(u,_,g))continue;const p=i.get(u,_,g);(p===M.AIR||p===M.GRASS||p===M.DIRT)&&i.set(u,_,g,M.STONE)}}for(let r=0;r<60;r++){const a=20+Math.floor(e()*(Qt-40)),o=20+Math.floor(e()*(Zt-40));if(ts(a,o)>.7)continue;const l=i.surfaceY(a,o);l<0||i.get(a,l,o)!==M.GRASS||i.inBounds(a,l+1,o)&&i.get(a,l+1,o)===M.AIR&&i.set(a,l+1,o,M.COBBLESTONE)}}function S0(i){for(let t=0;t<Qt;t++)for(let e=0;e<Zt;e++){let n=!1;for(let s=pe-1;s>=1;s--){const r=i.get(t,s,e);if(r===M.DIRT){n=!0;continue}if(n&&r===M.STONE){const a=re(t,e,8)>.5?2:1;for(let o=0;o<a;o++){const c=s+o;i.inBounds(t,c,e)&&i.get(t,c,e)===M.STONE&&i.set(t,c,e,M.GRAVEL)}break}r!==M.AIR&&(n=!1)}}}class E0{constructor(){this.maxHealth=20,this.health=20,this.maxHunger=20,this.hunger=20,this.tier=0,this.dead=!1,this._hungerTimer=0,this._regenTimer=0,this._hungerInterval=30,this.damageMult=1,this.onDeath=null,this.onChange=null}setDifficulty(t){var s;const e={easy:{maxHealth:30,hungerInterval:50,damageMult:.5},normal:{maxHealth:20,hungerInterval:30,damageMult:1},hard:{maxHealth:15,hungerInterval:20,damageMult:1.25}},n=e[t]??e.normal;this.difficulty=e[t]?t:"normal",this.maxHealth=n.maxHealth,this.health=n.maxHealth,this._hungerInterval=n.hungerInterval,this.damageMult=n.damageMult,(s=this.onChange)==null||s.call(this)}update(t){var e;this.dead||(this._hungerTimer+=t,this._hungerTimer>=this._hungerInterval&&(this._hungerTimer=0,this.hunger=Math.max(0,this.hunger-1),this.hunger===0&&this.takeDamage(1)),this.hunger>14&&this.health<this.maxHealth&&(this._regenTimer+=t,this._regenTimer>=4&&(this._regenTimer=0,this.health=Math.min(this.maxHealth,this.health+1),(e=this.onChange)==null||e.call(this))))}takeDamage(t){var e,n;this.dead||(this.health=Math.max(0,this.health-t*this.damageMult),(e=this.onChange)==null||e.call(this),this.health<=0&&!this.dead&&(this.dead=!0,(n=this.onDeath)==null||n.call(this)))}heal(t){var e;this.health=Math.min(this.maxHealth,this.health+t),(e=this.onChange)==null||e.call(this)}eat(t){var e;this.hunger=Math.min(this.maxHunger,this.hunger+t),(e=this.onChange)==null||e.call(this)}updateTier(t){const e=(t==null?void 0:t.tier)??0;e>this.tier&&(this.tier=e)}serialize(){return{health:this.health,hunger:this.hunger,tier:this.tier,difficulty:this.difficulty??"normal"}}deserialize(t){this.setDifficulty(t.difficulty??"normal"),this.health=t.health??this.maxHealth,this.hunger=t.hunger??20,this.tier=t.tier??0,this.dead=!1}}class T0{constructor(){this.itemId=null,this.count=0,this.durability=null}}class b0{constructor(){this.HOTBAR_SIZE=9,this.TOTAL_SIZE=36,this.slots=Array.from({length:this.TOTAL_SIZE},()=>new T0),this.hotbarIndex=0,this._changeListeners=[]}addChangeListener(t){this._changeListeners.push(t)}_fireChange(){this._changeListeners.forEach(t=>t())}hotbarSlot(t){return this.slots[t]}get selectedSlot(){return this.slots[this.hotbarIndex]}add(t,e,n){var a;const s=((a=n==null?void 0:n.getItem(t))==null?void 0:a.stackSize)??64;let r=e;for(let o=0;o<this.TOTAL_SIZE&&r>0;o++){const c=this.slots[o];if(c.itemId===t&&c.count<s){const l=Math.min(r,s-c.count);c.count+=l,r-=l}}for(let o=0;o<this.TOTAL_SIZE&&r>0;o++){const c=this.slots[o];if(!c.itemId){const l=Math.min(r,s);c.itemId=t,c.count=l,r-=l}}return this._fireChange(),r}remove(t,e){let n=e;for(let s=0;s<this.TOTAL_SIZE&&n>0;s++){const r=this.slots[s];if(r.itemId===t){const a=Math.min(n,r.count);r.count-=a,n-=a,r.count===0&&(r.itemId=null,r.durability=null)}}this._fireChange()}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&(e+=n.count);return e}hasAll(t){for(const[e,n]of Object.entries(t))if(this.countOf(e)<n)return!1;return!0}removeSlot(t){const e=this.slots[t];e.itemId&&(e.count--,e.count===0&&(e.itemId=null,e.durability=null),this._fireChange())}damageTool(t,e=1,n){const s=this.slots[t];if(!s.itemId)return;const r=n==null?void 0:n.getItem(s.itemId);!r||!r.durability||(s.durability===null&&(s.durability=r.durability),s.durability-=e,s.durability<=0&&(s.itemId=null,s.count=0,s.durability=null),this._fireChange())}swapSlots(t,e){const n={itemId:this.slots[t].itemId,count:this.slots[t].count,durability:this.slots[t].durability};this.slots[t].itemId=this.slots[e].itemId,this.slots[t].count=this.slots[e].count,this.slots[t].durability=this.slots[e].durability,this.slots[e].itemId=n.itemId,this.slots[e].count=n.count,this.slots[e].durability=n.durability,this._fireChange()}serialize(){return this.slots.map(t=>({itemId:t.itemId,count:t.count,durability:t.durability}))}deserialize(t){for(let e=0;e<Math.min(t.length,this.TOTAL_SIZE);e++)this.slots[e].itemId=t[e].itemId,this.slots[e].count=t[e].count,this.slots[e].durability=t[e].durability;this._fireChange()}}const Si=new Je(0,0,0,"YXZ"),Ei=new N,A0={type:"change"},R0={type:"lock"},w0={type:"unlock"},xc=Math.PI/2;class C0 extends Lm{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=P0.bind(this),this._onPointerlockChange=L0.bind(this),this._onPointerlockError=I0.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Ei.setFromMatrixColumn(e.matrix,0),Ei.crossVectors(e.up,Ei),e.position.addScaledVector(Ei,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Ei.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Ei,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function P0(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;Si.setFromQuaternion(n.quaternion),Si.y-=t*.002*this.pointerSpeed,Si.x-=e*.002*this.pointerSpeed,Si.x=Math.max(xc-this.maxPolarAngle,Math.min(xc-this.minPolarAngle,Si.x)),n.quaternion.setFromEuler(Si),this.dispatchEvent(A0)}function L0(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(R0),this.isLocked=!0):(this.dispatchEvent(w0),this.isLocked=!1)}function I0(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class U0{constructor(){this._ctx=null,this._sfxBus=null,this._musicBus=null,this._running=!1,this._beatIndex=0,this._musicTimeout=null,this._mineTimer=0}_init(){if(this._ctx)return;this._ctx=new(window.AudioContext||window.webkitAudioContext);const t=this._ctx.createGain();t.gain.value=1,t.connect(this._ctx.destination),this._sfxBus=this._ctx.createGain(),this._sfxBus.gain.value=.8,this._sfxBus.connect(t),this._musicBus=this._ctx.createGain(),this._musicBus.gain.value=.22,this._musicBus.connect(t)}_noise(t,e,n){const s=this._ctx,r=Math.floor(s.sampleRate*t),a=s.createBuffer(1,r,s.sampleRate),o=a.getChannelData(0);for(let d=0;d<r;d++)o[d]=Math.random()*2-1;const c=s.createBufferSource();c.buffer=a;const l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=1.2;const h=s.createGain();h.gain.setValueAtTime(n,s.currentTime),h.gain.exponentialRampToValueAtTime(.001,s.currentTime+t),c.connect(l),l.connect(h),h.connect(this._sfxBus),c.start()}playMine(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(35,e+.09);const s=t.createGain();s.gain.setValueAtTime(.45,e),s.gain.exponentialRampToValueAtTime(.001,e+.1),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.1),this._noise(.07,700,.28)}playBlockBreak(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(70,e),n.frequency.exponentialRampToValueAtTime(18,e+.22);const s=t.createGain();s.gain.setValueAtTime(.7,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.22),this._noise(.15,350,.5),this._noise(.07,1400,.18)}playStep(t="grass"){this._init();const e=this._ctx,n=e.currentTime;if(t==="stone"||t==="cobble"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(120,n),s.frequency.exponentialRampToValueAtTime(60,n+.04);const r=e.createGain();r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(.001,n+.06),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.06),this._noise(.05,1200,.09)}else if(t==="sand"||t==="gravel")this._noise(.09,600,.16),this._noise(.05,300,.09);else if(t==="wood"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(200,n),s.frequency.exponentialRampToValueAtTime(80,n+.06);const r=e.createGain();r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.001,n+.08),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.08)}else{const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(40,n+.07);const r=e.createGain();r.gain.setValueAtTime(.14,n),r.gain.exponentialRampToValueAtTime(.001,n+.1),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.1),this._noise(.06,800,.07)}}playHit(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(380,e),n.frequency.exponentialRampToValueAtTime(120,e+.1);const s=t.createWaveShaper(),r=new Float32Array(256);for(let o=0;o<256;o++){const c=o*2/256-1;r[o]=(Math.PI+40)*c/(Math.PI+40*Math.abs(c))}s.curve=r;const a=t.createGain();a.gain.setValueAtTime(.38,e),a.gain.exponentialRampToValueAtTime(.001,e+.13),n.connect(s),s.connect(a),a.connect(this._sfxBus),n.start(e),n.stop(e+.13),this._noise(.04,3500,.22)}startMusic(){this._init(),!this._running&&(this._running=!0,this._beatIndex=0,this._scheduleBeat())}stopMusic(){if(this._running=!1,clearTimeout(this._musicTimeout),this._ctx&&this._musicBus){const t=this._ctx.currentTime;this._musicBus.gain.linearRampToValueAtTime(0,t+1.5),setTimeout(()=>{this._musicBus&&(this._musicBus.gain.value=.22)},2e3)}}_kick(t){const e=this._ctx,n=e.createOscillator();n.frequency.setValueAtTime(180,t),n.frequency.exponentialRampToValueAtTime(28,t+.18);const s=e.createGain();s.gain.setValueAtTime(1.4,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(s),s.connect(this._musicBus),n.start(t),n.stop(t+.22)}_snare(t){const e=this._ctx,n=Math.floor(e.sampleRate*.18),s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let d=0;d<n;d++)r[d]=Math.random()*2-1;const a=e.createBufferSource();a.buffer=s;const o=e.createBiquadFilter();o.type="highpass",o.frequency.value=1800;const c=e.createGain();c.gain.setValueAtTime(.55,t),c.gain.exponentialRampToValueAtTime(.001,t+.18),a.connect(o),o.connect(c),c.connect(this._musicBus),a.start(t);const l=e.createOscillator();l.frequency.setValueAtTime(220,t),l.frequency.exponentialRampToValueAtTime(100,t+.06);const h=e.createGain();h.gain.setValueAtTime(.35,t),h.gain.exponentialRampToValueAtTime(.001,t+.06),l.connect(h),h.connect(this._musicBus),l.start(t),l.stop(t+.06)}_hihat(t,e=1){const n=this._ctx,s=Math.floor(n.sampleRate*.035),r=n.createBuffer(1,s,n.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=Math.random()*2-1;const o=n.createBufferSource();o.buffer=r;const c=n.createBiquadFilter();c.type="highpass",c.frequency.value=9e3;const l=n.createGain();l.gain.setValueAtTime(.12*e,t),l.gain.exponentialRampToValueAtTime(.001,t+.035),o.connect(c),c.connect(l),l.connect(this._musicBus),o.start(t)}_bass(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="sawtooth",r.frequency.value=e;const a=s.createBiquadFilter();a.type="lowpass",a.frequency.value=400,a.Q.value=3;const o=s.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.9,t+.025),o.gain.linearRampToValueAtTime(.5,t+n*.6),o.gain.linearRampToValueAtTime(0,t+n),r.connect(a),a.connect(o),o.connect(this._musicBus),r.start(t),r.stop(t+n)}_pad(t,e,n){const s=this._ctx;for(const r of e)for(const a of[-6,0,6]){const o=s.createOscillator();o.type="sawtooth",o.frequency.value=r,o.detune.value=a;const c=s.createBiquadFilter();c.type="lowpass",c.frequency.value=1800;const l=s.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.045,t+.35),l.gain.linearRampToValueAtTime(.025,t+n*.8),l.gain.linearRampToValueAtTime(0,t+n),o.connect(c),c.connect(l),l.connect(this._musicBus),o.start(t),o.stop(t+n)}}_melody(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="square",r.frequency.value=e;const a=s.createWaveShaper(),o=new Float32Array(64);for(let l=0;l<64;l++){const h=l*2/64-1;o[l]=Math.tanh(h*2.5)*.75}a.curve=o;const c=s.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.28,t+.02),c.gain.linearRampToValueAtTime(.18,t+n*.65),c.gain.linearRampToValueAtTime(0,t+n),r.connect(a),a.connect(c),c.connect(this._musicBus),r.start(t),r.stop(t+n)}_scheduleBeat(){if(!this._running)return;const e=this._ctx.currentTime,s=60/130,r=s*4,a=[{bass:73.42,pad:[146.83,174.61,220,293.66]},{bass:58.27,pad:[116.54,146.83,174.61,233.08]},{bass:87.31,pad:[174.61,220,261.63,349.23]},{bass:65.41,pad:[130.81,164.81,196,261.63]}],o=[587.33,0,523.25,493.88,440,493.88,440,392,440,0,493.88,523.25,587.33,523.25,440,392],c=Math.floor(this._beatIndex/4),l=this._beatIndex%4,h=a[c%a.length];(l===0||l===2)&&this._kick(e),(l===1||l===3)&&this._snare(e),this._hihat(e),this._hihat(e+s*.5,.5),l===0&&this._bass(e,h.bass,r),l===0&&this._pad(e,h.pad,r);const d=o[this._beatIndex%o.length];d&&this._melody(e,d,s*.75),this._beatIndex++,this._musicTimeout=setTimeout(()=>this._scheduleBeat(),(s-.02)*1e3)}}const ti=new U0;class N0{constructor(t,e,n,s,r,a,o,c,l,h,d){this.camera=t,this.worldData=n,this.worldRenderer=s,this.stats=r,this.inventory=a,this.mining=o,this.farming=c,this.hotbar=l,this.hud=h,this.itemRegistry=d,this.controls=new C0(t,e.domElement),this._keys={},this._vy=0,this._onGround=!1,this._raycaster=new Pm,this._raycaster.far=Dm,this._mouseDown=!1,this._rightMouseDown=!1,this._currentStation="hand",this.onStationChange=null,this.targetBlock=null,this._bobTimer=0,this._prevBob=0,this._stepTimer=0,this._sprinting=!1,this._setupInputListeners(e);const f=Qt/2,u=Zt/2,_=n.surfaceY(f,u);t.position.set(f+.5,(_>=0?_:12)+1.8,u+.5)}lock(){this.controls.lock()}get isLocked(){return this.controls.isLocked}_setupInputListeners(t){window.addEventListener("keydown",e=>{this._keys[e.code]=!0;const n=parseInt(e.key);n>=1&&n<=9&&this.hotbar.select(n-1),e.code==="Space"&&this._onGround&&(this._vy=Om,this._onGround=!1)}),window.addEventListener("keyup",e=>{this._keys[e.code]=!1}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousedown",e=>{if(this.controls.isLocked){if(e.button===0&&e.shiftKey){this._handleRightClick();return}e.button===0&&(this._mouseDown=!0),e.button===2&&(e.preventDefault(),this._handleRightClick())}}),window.addEventListener("mouseup",e=>{e.button===0&&(this._mouseDown=!1,this.mining.cancelBreak())}),window.addEventListener("wheel",e=>{this.controls.isLocked&&this.hotbar.scroll(e.deltaY>0?1:-1)})}update(t){var Q,v,E,W;if(!this.controls.isLocked)return;this._sprinting=this._keys.ControlLeft||this._keys.ControlRight;const e=Fm*(this._sprinting?1.65:1),n=new N;this._keys.KeyW&&(n.z-=1),this._keys.KeyS&&(n.z+=1),this._keys.KeyA&&(n.x-=1),this._keys.KeyD&&(n.x+=1),n.normalize();const s=this.camera.position.x,r=this.camera.position.z;n.length()>0&&(this.controls.moveRight(n.x*e*t),this.controls.moveForward(-n.z*e*t));const a=Math.floor(this.camera.position.y-.6),o=Math.floor(this.camera.position.y-1.6),c=Math.floor(this.camera.position.x),l=Math.floor(this.camera.position.z),h=Math.floor(r);(this.worldData.isSolid(c,a,h)||this.worldData.isSolid(c,o,h))&&(this.camera.position.x=s),(this.worldData.isSolid(Math.floor(this.camera.position.x),a,l)||this.worldData.isSolid(Math.floor(this.camera.position.x),o,l))&&(this.camera.position.z=r);const d=Math.floor(this.camera.position.x),f=Math.floor(this.camera.position.z),u=Math.floor(this.camera.position.y-.5),_=Math.floor(this.camera.position.y-1.6),g=((v=(Q=this.worldData).getBlock)==null?void 0:v.call(Q,d,_,f))===14||((W=(E=this.worldData).getBlock)==null?void 0:W.call(E,d,u,f))===14||this.worldData.get(d,_,f)===14||this.worldData.get(d,u,f)===14;g?(this._vy=Math.max(this._vy-Qs*t*.3,-3),this._keys.Space&&(this._vy=4)):this._vy-=Qs*t;let p=this.camera.position.y+this._vy*t;this._vy>0&&this.worldData.isSolid(d,Math.floor(p+.2),f)&&(this._vy=0,p=this.camera.position.y);const m=Math.floor(this.camera.position.y-1.8),T=Math.floor(p-1.8),S=(()=>{if(this._vy<=0){const k=Math.min(m,T),X=Math.max(m,T);for(let $=X;$>=k;$--)if(this.worldData.isSolid(d,$,f))return $}return-1})();if(S>=0?(this._vy=0,this._onGround=!0,this.camera.position.y=S+1+1.8):(this._onGround=g,this.camera.position.y=Math.max(1.8,p)),this.camera.position.x=Math.max(.5,Math.min(Qt-.5,this.camera.position.x)),this.camera.position.z=Math.max(.5,Math.min(Zt-.5,this.camera.position.z)),this.camera.position.y<2){const k=Qt/2,X=Zt/2,$=this.worldData.surfaceY(k,X);this.camera.position.set(k+.5,($>=0?$:12)+1.8,X+.5),this._vy=0,this.stats.takeDamage(5),this.hud.showPickup("You fell through the world! (-5 hp)")}const A=this._getHeldItem();if(this._mouseDown){const k=this._raycastBlock();k?this.mining.beginBreak(k.blockPos):this.mining.cancelBreak()}this.mining.update(t,A)&&this.hud.setBreakProgress(0),this._mouseDown&&this.mining._breakingPos?this.hud.setBreakProgress(Math.min(1,this.mining._breakProgress/this.mining._breakDuration)):this._mouseDown||this.hud.setBreakProgress(0);const P=n.length()>0&&this._onGround;P?this._bobTimer+=t*(this._sprinting?14:9):this._bobTimer=0;const R=P?Math.sin(this._bobTimer)*.032:0;if(this.camera.position.y+=R-this._prevBob,this._prevBob=R,P&&(this._stepTimer-=t,this._stepTimer<=0)){this._stepTimer=this._sprinting?.28:.42;const k=Math.floor(this.camera.position.x),X=Math.floor(this.camera.position.z),$=Math.floor(this.camera.position.y-1.9),H=this.worldData.get(k,$,X),j={3:"stone",4:"cobble",7:"sand",15:"gravel",5:"wood",16:"wood",9:"stone"}[H]||"grass";ti.playStep(j)}const F=this._raycastBlock();this.targetBlock=F?F.blockPos:null,this._updateStation()}_raycastBlock(){this._raycaster.setFromCamera({x:0,y:0},this.camera);const t=this.worldRenderer.allMeshes,e=this._raycaster.intersectObjects(t);if(e.length===0)return null;const n=e[0],s=n.point,r=n.face.normal.clone(),a=this._raycaster.ray.direction,o=[Math.floor(s.x+a.x*.01),Math.floor(s.y+a.y*.01),Math.floor(s.z+a.z*.01)],c=o[0],l=o[1],h=o[2],d=s.x-c,f=s.y-l,u=s.z-h,_=[d*(a.x>0?.5:1),(1-d)*(a.x<0?.5:1),f*(a.y>0?.5:1),(1-f)*(a.y<0?.5:1),u*(a.z>0?.5:1),(1-u)*(a.z<0?.5:1)],g=[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]],p=_.indexOf(Math.min(..._)),[m,T,S]=g[p],A=[c+m,l+T,h+S];return{blockPos:o,adjacentPos:A,normal:r}}_handleRightClick(){var s,r;const t=this._getHeldItem();if((t==null?void 0:t.category)==="food"&&this.stats.hunger<this.stats.maxHunger-1){this.stats.eat(t.foodValue),this.inventory.removeSlot(this.inventory.hotbarIndex),this.hud.showPickup(`Ate ${t.name}`);return}const e=this._raycastBlock();if(!e)return;if((t==null?void 0:t.id)==="summoning_stone"){const[a,o,c]=e.blockPos;if(this.worldData.get(a,o,c)===M.ALTAR){(s=this.onUseAltarWithStone)==null||s.call(this),this.inventory.remove("summoning_stone",1);return}this.hud.showPickup("Right-click the Altar in the swamp to use this!");return}if(t!=null&&t.isHoe&&this.mining.tillBlock(e.blockPos)){const o=this.inventory.hotbarIndex;this.inventory.damageTool(o,1,this.itemRegistry);return}if((t==null?void 0:t.category)==="seed"){if(this.farming.plant(t.id,e.blockPos,this.inventory,this.itemRegistry))return;this.farming.plant(t.id,e.adjacentPos,this.inventory,this.itemRegistry);return}const n=this.farming.tryHarvest(e.blockPos);if(n){this.inventory.add(n.itemId,n.count,this.itemRegistry),this.hud.showPickup(((r=this.itemRegistry.getItem(n.itemId))==null?void 0:r.name)??n.itemId);return}{const[a,o,c]=e.blockPos;if(this.worldData.get(a,o,c)===M.CHEST){this._openChest(a,o,c);return}}(t==null?void 0:t.blockId)>=0&&this.mining.placeBlock(e.adjacentPos,t.blockId)&&this.inventory.removeSlot(this.inventory.hotbarIndex)}_openChest(t,e,n){const s=[["bread",2,5,30],["cooked_meat",1,4,25],["iron_ore",2,6,25],["stick",4,12,20],["string",2,6,18],["bone",2,5,18],["cobblestone",6,16,15],["planks",4,10,15],["wheat_seed",3,8,12],["carrot",2,6,12],["gravel",4,10,10]],r=[["iron_ingot",2,5,40],["crystal_shard",1,2,15],["stone_sword",1,1,20],["stone_pickaxe",1,1,18],["stone_axe",1,1,18],["iron_pickaxe",1,1,8],["iron_sword",1,1,6],["glass",2,6,12]],a=[["crystal_shard",2,4,40],["iron_ingot",4,8,30],["iron_sword",1,1,20],["iron_pickaxe",1,1,18],["crystal_sword",1,1,5],["bread",3,8,20]],o=Math.sqrt((t-96)**2+(n-96)**2),c=o>120?a:o>60?r:s,l=3+Math.floor(Math.random()*3),h=c.reduce((p,m)=>p+m[3],0),d=[],f=new Set;for(let p=0;p<l;p++){let m=Math.random()*h;for(const T of c)if(m-=T[3],m<=0&&!f.has(T[0])){d.push(T),f.add(T[0]);break}}const u=[];for(const[p,m,T]of d){const S=m+Math.floor(Math.random()*(T-m+1));if(this.inventory.add(p,S,this.itemRegistry)!==!1){const D=this.itemRegistry.getItem(p);u.push(`${S}x ${(D==null?void 0:D.name)??p}`)}}this.worldData.set(t,e,n,M.AIR);const _=Math.floor(t/16),g=Math.floor(n/16);this.worldRenderer.rebuildChunk(_,g),ti.playBlockBreak(),this.hud.showPickup(u.length?`📦 Chest: ${u.join(", ")}`:"📦 Chest was empty")}_getHeldItem(){const t=this.inventory.selectedSlot;return t.itemId?this.itemRegistry.getItem(t.itemId):null}_updateStation(){var r;const t=Math.floor(this.camera.position.x),e=Math.floor(this.camera.position.y-1.8),n=Math.floor(this.camera.position.z);let s="hand";for(let a=-2;a<=2;a++)for(let o=-2;o<=2;o++)for(let c=-1;c<=1;c++){const l=this.worldData.get(t+a,e+c,n+o);l===M.CAMPFIRE&&s==="hand"&&(s="campfire"),l===M.CRAFTING_TABLE&&(s==="hand"||s==="campfire")&&(s="crafting_table"),l===M.FORGE&&(s="forge")}s!==this._currentStation&&(this._currentStation=s,(r=this.onStationChange)==null||r.call(this,s))}get currentStation(){return this._currentStation}attackMob(t,e){t.takeDamage(e)}setupAttackListener(t){window.addEventListener("mousedown",e=>{if(!this.controls.isLocked||e.button!==0)return;const n=this._getHeldItem();if(!(n!=null&&n.isSword)&&!(n!=null&&n.isAxe))return;const s=t(),r=this.camera.position;for(const a of s)if(!a.dead&&a.position.distanceTo(r)<4){a.takeDamage(n.damage),this.stats.updateTier(n),this._mouseDown=!1,this.mining.cancelBreak();break}})}}class D0{constructor({id:t,name:e,category:n,tier:s=0,stackSize:r=64,damage:a=0,durability:o=0,foodValue:c=0,blockId:l=-1,isHoe:h=!1,isAxe:d=!1,isSword:f=!1,isPickaxe:u=!1,isShovel:_=!1}){this.id=t,this.name=e,this.category=n,this.tier=s,this.stackSize=r,this.damage=a,this.durability=o,this.foodValue=c,this.blockId=l,this.isHoe=h,this.isAxe=d,this.isSword=f,this.isPickaxe=u,this.isShovel=_}}const O0=[{id:"wood_log",name:"Wood Log",category:"block",stackSize:64,blockId:5},{id:"cobblestone",name:"Cobblestone",category:"block",stackSize:64,blockId:4},{id:"dirt",name:"Dirt",category:"block",stackSize:64,blockId:2},{id:"sand",name:"Sand",category:"block",stackSize:64,blockId:7},{id:"gravel",name:"Gravel",category:"block",stackSize:64,blockId:15},{id:"planks",name:"Wood Planks",category:"block",stackSize:64,blockId:16},{id:"glass",name:"Glass",category:"block",stackSize:64,blockId:17},{id:"crafting_table",name:"Crafting Table",category:"block",stackSize:1,blockId:11},{id:"forge",name:"Forge",category:"block",stackSize:1,blockId:12},{id:"chest",name:"Chest",category:"block",stackSize:1,blockId:18},{id:"campfire",name:"Campfire",category:"block",stackSize:1,blockId:20},{id:"torch",name:"Torch",category:"block",stackSize:64,blockId:19},{id:"iron_ore",name:"Iron Ore",category:"misc",stackSize:64},{id:"iron_ingot",name:"Iron Ingot",category:"misc",stackSize:64},{id:"crystal_shard",name:"Crystal Shard",category:"misc",stackSize:64},{id:"stick",name:"Stick",category:"misc",stackSize:64},{id:"string",name:"String",category:"misc",stackSize:64},{id:"bone",name:"Bone",category:"misc",stackSize:64},{id:"troll_fang",name:"Troll Fang",category:"misc",stackSize:1},{id:"witch_eye",name:"Witch's Eye",category:"misc",stackSize:1},{id:"golem_core",name:"Golem Core",category:"misc",stackSize:1},{id:"summoning_stone",name:"Summoning Stone",category:"misc",stackSize:1},{id:"wheat_seed",name:"Wheat Seed",category:"seed",stackSize:64},{id:"wheat",name:"Wheat",category:"food",stackSize:64,foodValue:2},{id:"bread",name:"Bread",category:"food",stackSize:16,foodValue:5},{id:"carrot_seed",name:"Carrot Seed",category:"seed",stackSize:64},{id:"carrot",name:"Carrot",category:"food",stackSize:64,foodValue:3},{id:"potato_seed",name:"Potato",category:"seed",stackSize:64},{id:"baked_potato",name:"Baked Potato",category:"food",stackSize:16,foodValue:5},{id:"cooked_meat",name:"Cooked Meat",category:"food",stackSize:16,foodValue:8},{id:"raw_meat",name:"Raw Meat",category:"food",stackSize:16,foodValue:2},{id:"wooden_axe",name:"Wooden Axe",category:"tool",tier:1,stackSize:1,damage:2.5,durability:60,isAxe:!0},{id:"wooden_pickaxe",name:"Wooden Pickaxe",category:"tool",tier:1,stackSize:1,damage:2,durability:60,isPickaxe:!0},{id:"wooden_hoe",name:"Wooden Hoe",category:"tool",tier:1,stackSize:1,damage:1,durability:60,isHoe:!0},{id:"wooden_shovel",name:"Wooden Shovel",category:"tool",tier:1,stackSize:1,damage:1.5,durability:60,isShovel:!0},{id:"wooden_sword",name:"Wooden Sword",category:"weapon",tier:1,stackSize:1,damage:4,durability:60,isSword:!0},{id:"stone_axe",name:"Stone Axe",category:"tool",tier:2,stackSize:1,damage:3.5,durability:130,isAxe:!0},{id:"stone_pickaxe",name:"Stone Pickaxe",category:"tool",tier:2,stackSize:1,damage:3,durability:130,isPickaxe:!0},{id:"stone_hoe",name:"Stone Hoe",category:"tool",tier:2,stackSize:1,damage:1.5,durability:130,isHoe:!0},{id:"stone_shovel",name:"Stone Shovel",category:"tool",tier:2,stackSize:1,damage:2.5,durability:130,isShovel:!0},{id:"stone_sword",name:"Stone Sword",category:"weapon",tier:2,stackSize:1,damage:5,durability:130,isSword:!0},{id:"iron_axe",name:"Iron Axe",category:"tool",tier:3,stackSize:1,damage:5,durability:250,isAxe:!0},{id:"iron_pickaxe",name:"Iron Pickaxe",category:"tool",tier:3,stackSize:1,damage:4.5,durability:250,isPickaxe:!0},{id:"iron_hoe",name:"Iron Hoe",category:"tool",tier:3,stackSize:1,damage:2,durability:250,isHoe:!0},{id:"iron_shovel",name:"Iron Shovel",category:"tool",tier:3,stackSize:1,damage:3.5,durability:250,isShovel:!0},{id:"iron_sword",name:"Iron Sword",category:"weapon",tier:3,stackSize:1,damage:7,durability:250,isSword:!0},{id:"crystal_axe",name:"Crystal Axe",category:"tool",tier:4,stackSize:1,damage:7,durability:500,isAxe:!0},{id:"crystal_pickaxe",name:"Crystal Pickaxe",category:"tool",tier:4,stackSize:1,damage:6.5,durability:500,isPickaxe:!0},{id:"crystal_shovel",name:"Crystal Shovel",category:"tool",tier:4,stackSize:1,damage:5.5,durability:500,isShovel:!0},{id:"crystal_sword",name:"Crystal Sword",category:"weapon",tier:4,stackSize:1,damage:12,durability:500,isSword:!0}];class F0{constructor(){this._db=new Map;for(const t of O0)this._db.set(t.id,new D0(t))}getItem(t){return this._db.get(t)??null}all(){return[...this._db.values()]}}class Wt{constructor(t,e,n,s,r,a,o=[]){this.id=t,this.ingredients=e,this.resultItem=n,this.resultCount=s,this.station=r,this.requiredTier=a,this.killedBosses=o}}const Ns=["hand","campfire","crafting_table","forge"],B0=[new Wt("planks",{wood_log:1},"planks",4,"hand",0),new Wt("stick",{planks:1},"stick",4,"hand",0),new Wt("crafting_table",{planks:4},"crafting_table",1,"hand",0),new Wt("campfire",{wood_log:3},"campfire",1,"hand",0),new Wt("bread",{wheat:3},"bread",1,"hand",0),new Wt("torch",{stick:1,wood_log:1},"torch",4,"hand",0),new Wt("cooked_meat",{raw_meat:1},"cooked_meat",1,"campfire",0),new Wt("baked_potato",{potato_seed:1},"baked_potato",1,"campfire",0),new Wt("wooden_axe",{planks:3,stick:2},"wooden_axe",1,"crafting_table",0),new Wt("wooden_pickaxe",{planks:3,stick:2},"wooden_pickaxe",1,"crafting_table",0),new Wt("wooden_hoe",{planks:2,stick:2},"wooden_hoe",1,"crafting_table",0),new Wt("wooden_shovel",{planks:1,stick:2},"wooden_shovel",1,"crafting_table",0),new Wt("wooden_sword",{planks:2,stick:1},"wooden_sword",1,"crafting_table",0),new Wt("stone_axe",{cobblestone:3,stick:2},"stone_axe",1,"crafting_table",1),new Wt("stone_pickaxe",{cobblestone:3,stick:2},"stone_pickaxe",1,"crafting_table",1),new Wt("stone_hoe",{cobblestone:2,stick:2},"stone_hoe",1,"crafting_table",1),new Wt("stone_shovel",{cobblestone:1,stick:2},"stone_shovel",1,"crafting_table",1),new Wt("stone_sword",{cobblestone:2,stick:1},"stone_sword",1,"crafting_table",1),new Wt("iron_axe",{iron_ingot:3,stick:2},"iron_axe",1,"crafting_table",2),new Wt("iron_pickaxe",{iron_ingot:3,stick:2},"iron_pickaxe",1,"crafting_table",2),new Wt("iron_hoe",{iron_ingot:2,stick:2},"iron_hoe",1,"crafting_table",2),new Wt("iron_shovel",{iron_ingot:1,stick:2},"iron_shovel",1,"crafting_table",2),new Wt("iron_sword",{iron_ingot:2,stick:1},"iron_sword",1,"crafting_table",2),new Wt("glass",{sand:1},"glass",1,"crafting_table",0),new Wt("chest",{planks:8},"chest",1,"crafting_table",0),new Wt("iron_ingot",{iron_ore:1},"iron_ingot",1,"forge",0),new Wt("crystal_axe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_axe",1,"forge",3),new Wt("crystal_pickaxe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_pickaxe",1,"forge",3),new Wt("crystal_shovel",{crystal_shard:1,iron_ingot:1,stick:2},"crystal_shovel",1,"forge",3),new Wt("crystal_sword",{crystal_shard:2,iron_ingot:1},"crystal_sword",1,"forge",3),new Wt("summoning_stone",{troll_fang:1,witch_eye:1,golem_core:1},"summoning_stone",1,"forge",3,["cave_troll","swamp_witch","stone_golem"])];class z0{constructor(){this.recipes=B0}getAvailable(t,e,n,s=new Set){const r=Ns.indexOf(e);return this.recipes.filter(a=>{if(Ns.indexOf(a.station)>r||a.requiredTier>n)return!1;for(const c of a.killedBosses)if(!s.has(c))return!1;return t.hasAll(a.ingredients)})}getAllVisible(t,e,n,s=new Set){const r=Ns.indexOf(e);return this.recipes.filter(a=>{if(Ns.indexOf(a.station)>r||a.requiredTier>n)return!1;for(const c of a.killedBosses)if(!s.has(c))return!1;return!0})}craft(t,e,n){if(!e.hasAll(t.ingredients))return!1;for(const[s,r]of Object.entries(t.ingredients))e.remove(s,r);return e.add(t.resultItem,t.resultCount,n),!0}}class k0{constructor(t,e,n,s,r){this.worldData=t,this.worldRenderer=e,this.inventory=n,this.stats=s,this.itemRegistry=r,this._breakingPos=null,this._breakProgress=0,this._breakDuration=0,this._mineSoundTimer=0,this.onBreakProgress=null,this.onPickup=null,this.onBlockBroken=null}beginBreak(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r===M.AIR)return;const a=Zi[r];!a||a.hardness===999||this._breakingPos&&this._breakingPos[0]===e&&this._breakingPos[1]===n&&this._breakingPos[2]===s||(this._breakingPos=[e,n,s],this._breakProgress=0,this._breakDuration=Math.max(.15,a.hardness*.6),this._mineSoundTimer=0)}cancelBreak(){var t;this._breakingPos=null,this._breakProgress=0,(t=this.onBreakProgress)==null||t.call(this,0)}update(t,e){var h;if(!this._breakingPos)return!1;const[n,s,r]=this._breakingPos,a=this.worldData.get(n,s,r);if(a===M.AIR)return this.cancelBreak(),!1;const o=Zi[a],c=this._toolSpeedMult(e,o);this._breakProgress+=t*c,e&&this.stats.updateTier(e),this._mineSoundTimer-=t,this._mineSoundTimer<=0&&(ti.playMine(),this._mineSoundTimer=.3);const l=Math.min(1,this._breakProgress/this._breakDuration);return(h=this.onBreakProgress)==null||h.call(this,l),this._breakProgress>=this._breakDuration?(this._completeBreak(n,s,r,o,e),!0):!1}_toolSpeedMult(t,e){if(!(t&&(t.isPickaxe||t.isAxe||t.isShovel||t.isSword||t.isHoe)))return e.minTier===0?1:.2;const s=t.tier-e.minTier;return s<0?.3:e.tool==="pickaxe"&&t.isPickaxe||e.tool==="axe"&&t.isAxe||e.tool==="shovel"&&t.isShovel?2+s*.75:1+s*.25}_completeBreak(t,e,n,s,r){var d,f;let a=s.dropItem===null?s.name:s.dropItem;s.dropItem===null&&(a=s.name);const o=this.itemRegistry.getItem(a);if(o&&(this.inventory.add(a,s.dropCount,this.itemRegistry),(d=this.onPickup)==null||d.call(this,o.name)),r&&r.durability>0){const u=this._findHotbarIndex(r);u!==-1&&this.inventory.damageTool(u,1,this.itemRegistry)}ti.playBlockBreak();const c=s.id;this.worldData.set(t,e,n,M.AIR);const l=Math.floor(t/Le),h=Math.floor(n/Le);this.worldRenderer.rebuildChunk(l,h),this.cancelBreak(),(f=this.onBlockBroken)==null||f.call(this,[t,e,n],c)}_findHotbarIndex(t){for(let e=0;e<9;e++)if(this.inventory.slots[e].itemId===t.id)return e;return-1}placeBlock(t,e){const[n,s,r]=t;if(!this.worldData.inBounds(n,s,r))return!1;const a=this.worldData.get(n,s,r);if(a!==M.AIR&&a!==M.WATER)return!1;this.worldData.set(n,s,r,e);const o=Math.floor(n/Le),c=Math.floor(r/Le);return this.worldRenderer.rebuildChunk(o,c),!0}tillBlock(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r!==M.GRASS&&r!==M.DIRT)return!1;this.worldData.set(e,n,s,M.FARMLAND);const a=Math.floor(e/Le),o=Math.floor(s/Le);return this.worldRenderer.rebuildChunk(a,o),!0}}class $r{constructor({id:t,name:e,seedItem:n,harvestItem:s,harvestCount:r,growthTime:a,stages:o=4}){this.id=t,this.name=e,this.seedItem=n,this.harvestItem=s,this.harvestCount=r,this.growthTime=a,this.stages=o,this.stageColors=["#8b7a1a","#aaaa22","#88cc44","#44aa22"]}}const hl={wheat:new $r({id:"wheat",name:"Wheat",seedItem:"wheat_seed",harvestItem:"wheat",harvestCount:2,growthTime:25}),carrot:new $r({id:"carrot",name:"Carrot",seedItem:"carrot_seed",harvestItem:"carrot",harvestCount:1,growthTime:35}),potato:new $r({id:"potato",name:"Potato",seedItem:"potato_seed",harvestItem:"baked_potato",harvestCount:1,growthTime:40})};function G0(i){return Object.values(hl).find(t=>t.seedItem===i)??null}class yc{constructor(t,e,n){this.cropType=t,this.worldPos=e,this.stage=0,this.timer=0;const s=new Jn(.6,.6),r=new Kn({color:t.stageColors[0],side:ze});this.mesh=new Me(s,r),this.mesh.rotation.y=Math.PI/4,this.mesh.position.set(e[0]+.5,e[1]+.8,e[2]+.5),n.add(this.mesh)}updateVisual(){this.mesh.material.color.set(this.cropType.stageColors[Math.min(this.stage,3)]);const t=.4+this.stage*.2;this.mesh.scale.setScalar(t),this.mesh.position.y=this.worldPos[1]+.4+this.stage*.15}}class H0{constructor(t,e){this.worldData=t,this.scene=e,this._crops=[],this.onHarvest=null}plant(t,e,n,s){const[r,a,o]=e;if(this.worldData.get(r,a,o)!==M.FARMLAND||this.worldData.get(r,a+1,o)!==M.AIR)return!1;const c=G0(t);if(!c||this._crops.some(h=>h.worldPos[0]===r&&h.worldPos[2]===o))return!1;n.remove(t,1);const l=new yc(c,[r,a,o],this.scene);return this._crops.push(l),!0}update(t){for(const e of this._crops)e.stage>=e.cropType.stages-1||(e.timer+=t,e.timer>=e.cropType.growthTime&&(e.timer=0,e.stage++,e.updateVisual()))}_cropIndexAt([t,e,n]){return this._crops.findIndex(s=>s.worldPos[0]===t&&s.worldPos[2]===n&&(s.worldPos[1]===e||s.worldPos[1]===e-1))}_removeCropMesh(t){this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()}tryHarvest(t){const e=this._cropIndexAt(t);if(e===-1)return null;const n=this._crops[e];return n.stage<n.cropType.stages-1?null:(this._removeCropMesh(n),this._crops.splice(e,1),{itemId:n.cropType.harvestItem,count:n.cropType.harvestCount})}removeCropAt(t){const e=this._cropIndexAt(t);e!==-1&&(this._removeCropMesh(this._crops[e]),this._crops.splice(e,1))}clear(){for(const t of this._crops)this._removeCropMesh(t);this._crops=[]}serialize(){return this._crops.map(t=>({id:t.cropType.id,pos:t.worldPos,stage:t.stage,timer:t.timer}))}deserialize(t){this.clear();for(const e of t??[]){const n=hl[e.id];if(!n||!Array.isArray(e.pos))continue;const s=new yc(n,e.pos,this.scene);s.stage=Math.min(e.stage??0,n.stages-1),s.timer=e.timer??0,s.updateVisual(),this._crops.push(s)}}}const Zr=[[0,.7,.45,.2],[.12,.5,.7,1],[.4,.35,.6,.95],[.48,.65,.4,.2],[.55,.04,.04,.12],[.95,.04,.04,.12],[1,.7,.45,.2]];function V0(i){for(let t=0;t<Zr.length-1;t++){const[e,n,s,r]=Zr[t],[a,o,c,l]=Zr[t+1];if(i>=e&&i<=a){const h=(i-e)/(a-e);return{r:n+h*(o-n),g:s+h*(c-s),b:r+h*(l-r)}}}return{r:.5,g:.7,b:1}}class W0{constructor(t,e,n){this.scene=t,this.ambient=e,this.dirLight=n,this.timeOfDay=.05,this.dayNumber=1,this._wasNight=!1,this.onNightBegin=null,this.onDayBegin=null}update(t){var c,l;this.timeOfDay=(this.timeOfDay+t/Im)%1;const{r:e,g:n,b:s}=V0(this.timeOfDay);this.scene.background instanceof Ut||(this.scene.background=new Ut),this.scene.background.setRGB(e,n,s),this.scene.fog||(this.scene.fog=new sr(10075135,.007)),this.scene.fog.color.setRGB(e,n,s);const r=this.timeOfDay>=_c,a=r?.16:.6+(1-Math.abs(this.timeOfDay-.25)*4)*.4;this.ambient.intensity=Math.max(.14,a);const o=this.timeOfDay*Math.PI*2;this.dirLight.position.set(Math.cos(o)*30,Math.sin(o)*30,15),this.dirLight.intensity=r?0:.8,r&&!this._wasNight?(c=this.onNightBegin)==null||c.call(this):!r&&this._wasNight&&(this.dayNumber++,(l=this.onDayBegin)==null||l.call(this,this.dayNumber)),this._wasNight=r}get isNight(){return this.timeOfDay>=_c}}class kn{constructor({id:t,name:e,color:n,health:s,damage:r,speed:a,detectionRange:o,attackRange:c,attackCooldown:l,scale:h=[1,1.8,1],dropItems:d=[]}){this.id=t,this.name=e,this.color=n,this.health=s,this.damage=r,this.speed=a,this.detectionRange=o,this.attackRange=c,this.attackCooldown=l,this.scale=h,this.dropItems=d}}const eo={zombie:new kn({id:"zombie",name:"Zombie",color:"#2d5e2d",health:10,damage:2,speed:2.5,detectionRange:18,attackRange:1.8,attackCooldown:1.5,dropItems:[{itemId:"raw_meat",chance:.7,count:1}]}),skeleton:new kn({id:"skeleton",name:"Skeleton",color:"#ccccaa",health:8,damage:1.5,speed:2.8,detectionRange:22,attackRange:1.5,attackCooldown:1.2,dropItems:[{itemId:"bone",chance:.8,count:1},{itemId:"string",chance:.4,count:1}]}),spider:new kn({id:"spider",name:"Spider",color:"#1a0a0a",health:6,damage:2.5,speed:4,detectionRange:16,attackRange:2,attackCooldown:.8,scale:[1.4,.8,1.4],dropItems:[{itemId:"string",chance:.9,count:2}]}),cow:new kn({id:"cow",name:"Cow",color:"#8B4513",health:10,damage:0,speed:1.8,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1.2,1,1.2],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),pig:new kn({id:"pig",name:"Pig",color:"#FFB6C1",health:8,damage:0,speed:2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.8,1],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),sheep:new kn({id:"sheep",name:"Sheep",color:"#E8E8E8",health:8,damage:0,speed:1.9,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.9,1],dropItems:[{itemId:"raw_meat",chance:1,count:1}]}),chicken:new kn({id:"chicken",name:"Chicken",color:"#FFFFFF",health:4,damage:0,speed:2.2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[.6,.7,.6],dropItems:[{itemId:"raw_meat",chance:.8,count:1}]})};function ie(i,t,e,n){return new Me(new _n(i,t,e),new Js({color:n}))}class no{constructor(t,e,n){this.mobType=t,this.scene=n,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this._vy=0,this.onDeath=null,this._parts=[],this.mesh=new qn,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),this._buildAppearance(),this._buildHealthBar(),n.add(this.mesh)}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildAppearance(){const t=this.mobType.id;t==="spider"?this._buildSpider():t==="cow"||t==="pig"||t==="sheep"||t==="chicken"?this._buildAnimal():this._buildHumanoid()}_buildHumanoid(){const t=this.mobType.id,e=this.mobType.scale[1],n=e/2,s=t==="zombie",r=s?"#3d7a35":"#d8cca0",a=s?"#4a3010":"#c0b080",o=s?"#3a2810":"#b8a870",c=e*.27,l=.5;this._addPart(ie(l,c,l,r),0,n-c/2,0);const h=s?"#cc0000":"#333300";for(const A of[-.12,.12]){const D=ie(.1,.08,.02,h);D.position.set(A,n-c/2+.04,l/2),this.mesh.add(D)}const d=e*.33,f=.65,u=n-c-d/2;this._addPart(ie(f,d,.32,a),0,u,0);const _=e*.38,g=.22,p=(f+g)/2+.01;for(const[A]of[[-1],[1]]){const D=ie(g,_,g,r);s&&(D.rotation.x=-.7),this._addPart(D,A*p,u,s?.18:0)}const m=e*.4,T=.28,S=-n+m/2;if(this._addPart(ie(T,m,T,o),-.18,S,0),this._addPart(ie(T,m,T,o),.18,S,0),!s)for(let A=0;A<3;A++){const D=ie(f*.8,.06,.01,A%2?"#ccc090":"#c8bc8a");D.position.set(0,u+d/2-.12-A*.12,.17),this.mesh.add(D)}}_buildAnimal(){const t=this.mobType.id,e=this.mobType.scale,n=this.mobType.color;let s=n,r=n,a=null;t==="cow"?(s="#5C3317",r="#8B4513",a="#F5F5F5"):t==="pig"?(s="#FF9090",r="#FFB6C1"):t==="sheep"?(s="#999999",r="#CCCCCC"):t==="chicken"&&(s="#FF6600",r="#FFFFFF",a="#FF4400");const o=e[0]*.7,c=e[1]*.4,l=e[2]*.9,h=0;this._addPart(ie(o,c,l,n),0,h,0),t==="sheep"&&this._addPart(ie(o+.12,c+.1,l+.1,"#E8E8E8"),0,h+.05,0),t==="cow"&&a&&this._addPart(ie(o*.5,c*.6,l*.5,a),0,h-.05,0);const d=e[0]*(t==="chicken"?.35:.45),f=e[1]*(t==="chicken"?.3:.35),u=e[2]*(t==="pig"?.4:.35),_=-(l/2+u/2);this._addPart(ie(d,f,u,r),0,h+c*.15,_),t==="pig"&&this._addPart(ie(d*.6,f*.4,.08,"#FF8080"),0,h,_-u/2),t==="chicken"&&a&&(this._addPart(ie(.08,.12,.06,a),0,h+c*.15+f*.5,_),this._addPart(ie(.1,.08,.04,a),0,h+c*.1,_-u/2-.02));for(const m of[-d*.28,d*.28]){const T=ie(.06,.06,.03,"#1a1a1a");T.position.set(m,h+c*.15+f*.1,_-u/2),this.mesh.add(T)}const g=e[1]*.38,p=h-c/2-g/2;if(t==="chicken"){const m=e[0]*.06,T=e[2]*.06,S=o*.18;this._addPart(ie(m,g,T,s),-S,p,0),this._addPart(ie(m,g,T,s),S,p,0)}else{const m=e[0]*.14,T=e[2]*.14,S=o*.28,A=l*.28;for(const[D,P]of[[-S,-A],[S,-A],[-S,A],[S,A]])this._addPart(ie(m,g,T,s),D,p,P)}t!=="chicken"&&this._addPart(ie(.1,.1,.12,s),0,h+c*.3,l/2+.06),t==="chicken"&&this._addPart(ie(.15,.2,.08,"#DDDDDD"),0,h+c*.4,l/2+.04)}_buildSpider(){this._addPart(ie(.85,.4,.6,"#2a1010"),0,.05,-.2),this._addPart(ie(.7,.55,.65,"#150808"),0,.08,.52),this._addPart(ie(.42,.3,.3,"#1a0808"),0,.08,-.62);for(const e of[-.1,.1]){const n=ie(.07,.07,.03,"#ff1100");n.position.set(e,.2,-.77),this.mesh.add(n)}const t=[-.5,-.2,.15,.45];for(const e of[-1,1])for(let n=0;n<4;n++){const s=ie(.65,.07,.07,"#0f0606");s.rotation.y=e*t[n],s.rotation.z=e*.4,s.position.set(e*.56,-.05,-.15+n*.2),this.mesh.add(s),this._parts.push(s),s._origColor="#"+s.material.color.getHexString(),s.castShadow=!0}}_buildHealthBar(){const t=document.createElement("canvas");t.width=64,t.height=8,this._hbCtx=t.getContext("2d"),this._hbTex=new al(t);const e=new il({map:this._hbTex,depthTest:!1});this._hbSprite=new Mm(e),this._hbSprite.scale.set(1.2,.15,1),this._hbSprite.position.set(0,this.mobType.scale[1]/2+.4,0),this.mesh.add(this._hbSprite),this._updateHealthBar()}_updateHealthBar(){const t=this._hbCtx;t.clearRect(0,0,64,8),t.fillStyle="#400000",t.fillRect(0,0,64,8),t.fillStyle="#e74c3c",t.fillRect(0,0,Math.floor(64*this.health/this.maxHealth),8),this._hbTex.needsUpdate=!0}get position(){return this.mesh.position}takeDamage(t){this.dead||(ti.playHit(),this.health=Math.max(0,this.health-t),this._updateHealthBar(),this._parts.forEach(e=>e.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(e=>e.material.color.set(e._origColor))},150),this.health<=0&&this._die())}_die(){var t;this.dead||(this.dead=!0,this._dropLoot(),this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),(t=this.onDeath)==null||t.call(this,this))}_dropLoot(){}applyGravity(t,e){this._vy-=Qs*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),a=Math.floor(n.y-this.mobType.scale[1]/2-.1),o=Math.floor(n.z);if(e.isSolid(r,a,o)){this._vy=0;const c=e.surfaceY(r,o);c>=0&&(n.y=c+1+this.mobType.scale[1]/2)}else n.y=s}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dead=!0}}const hn={IDLE:"idle",CHASE:"chase",ATTACK:"attack"};class X0{constructor(t,e,n){this.mob=t,this.player=e,this.worldData=n,this.state=hn.IDLE,this._attackTimer=0,this._steerAngle=0}update(t){if(this.mob.dead)return;const{mobType:e}=this.mob,n=this.player.camera.position.x-this.mob.position.x,s=this.player.camera.position.z-this.mob.position.z,r=Math.sqrt(n*n+s*s);if(this.state===hn.IDLE)r<e.detectionRange&&(this.state=hn.CHASE);else if(this.state===hn.CHASE){if(r>e.detectionRange*1.6){this.state=hn.IDLE;return}if(r<=e.attackRange){this.state=hn.ATTACK;return}this._moveToward(t,n,s,r,e.speed)}else if(this.state===hn.ATTACK){if(r>e.attackRange*1.4){this.state=hn.CHASE;return}this._attackTimer-=t,this._attackTimer<=0&&(this.player.stats.takeDamage(e.damage),this._attackTimer=e.attackCooldown)}this.mob.applyGravity(t,this.worldData),this.state!==hn.IDLE&&(this.mob.mesh.rotation.y=Math.atan2(n,s))}_moveToward(t,e,n,s,r){let a=e/s,o=n/s;const c=this.mob.position,l=1.2,h=Math.floor(c.x+a*l),d=Math.floor(c.y),f=Math.floor(c.z+o*l);if(this.worldData.isSolid(h,d,f)){this._steerAngle+=.15;const u=this._steerAngle,_=Math.cos(u)*a-Math.sin(u)*o,g=Math.sin(u)*a+Math.cos(u)*o;a=_,o=g}else this._steerAngle*=.9;this.mob.position.x+=a*r*t,this.mob.position.z+=o*r*t}}const Mc=["zombie","skeleton","spider"];class Y0{constructor(t,e,n,s,r){this.scene=t,this.worldData=e,this.player=n,this.inventory=s,this.itemRegistry=r,this.mobs=[],this._spawnTimer=0,this.active=!1,this.onMobDeath=null}setNight(t){this.active=t,t||this._despawnAll()}_despawnAll(){for(const{mob:t}of this.mobs)t.dispose();this.mobs=[]}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){this.mobs.splice(e,1);continue}s.update(t)}this.active&&(this.mobs.length>=Nm||(this._spawnTimer+=t,!(this._spawnTimer<3)&&(this._spawnTimer=0,this._trySpawn())))}_trySpawn(){const t=this.player.camera.position,e=Math.random()*Math.PI*2,n=15+Math.random()*(Um-15),s=t.x+Math.cos(e)*n,r=t.z+Math.sin(e)*n,a=Math.floor(s),o=Math.floor(r);if(a<1||a>=Qt-1||o<1||o>=Zt-1)return;const c=this.worldData.surfaceY(a,o);if(c<0)return;const l=Mc[Math.floor(Math.random()*Mc.length)],h=eo[l],d=new N(s,c+1,r),f=new no(h,d,this.scene);f.onDeath=_=>{var g;for(const p of _.mobType.dropItems)Math.random()<p.chance&&this.inventory.add(p.itemId,p.count,this.itemRegistry);(g=this.onMobDeath)==null||g.call(this,_)};const u=new X0(f,this.player,this.worldData);this.mobs.push({mob:f,ai:u})}getMobs(){return this.mobs.map(t=>t.mob)}}const Sc=["cow","pig","sheep","chicken"],q0=12,Ec=4;class K0{constructor(t,e){this.mob=t,this.worldData=e,this._wanderTimer=Math.random()*Ec,this._angle=Math.random()*Math.PI*2,this._moving=!1}update(t){if(!this.mob.dead){if(this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=Ec*(.5+Math.random()),this._moving=Math.random()<.6,this._moving&&(this._angle+=(Math.random()-.5)*Math.PI*1.2)),this._moving){const e=this.mob.mobType.speed,n=this.mob.position,s=Math.cos(this._angle),r=Math.sin(this._angle),a=n.x+s*e*t,o=n.z+r*e*t;if(a<1||a>=Qt-1||o<1||o>=Zt-1)this._angle+=Math.PI;else{const c=Math.floor(a),l=Math.floor(n.y),h=Math.floor(o);this.worldData.isSolid(c,l,h)?this._angle+=Math.PI*(.5+Math.random()*.5):(n.x=a,n.z=o,this.mob.mesh.rotation.y=Math.atan2(s,r))}}this.mob.applyGravity(t,this.worldData)}}}class $0{constructor(t,e,n,s){this.scene=t,this.worldData=e,this.inventory=n,this.itemRegistry=s,this.mobs=[],this._spawnTimer=0,this._initialised=!1}init(){if(!this._initialised){this._initialised=!0;for(let t=0;t<8;t++)this._trySpawn()}}setNight(t){this._isNight=t}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){this.mobs.splice(e,1);continue}s.update(t)}this._isNight||this.mobs.length>=q0||(this._spawnTimer+=t,!(this._spawnTimer<8)&&(this._spawnTimer=0,this._trySpawn()))}_trySpawn(){for(let e=0;e<10;e++){const n=4+Math.random()*(Qt-8),s=4+Math.random()*(Zt-8),r=Math.floor(n),a=Math.floor(s),o=this.worldData.surfaceY(r,a);if(o<5)continue;const c=this.worldData.get(r,o,a);if(c!==1&&c!==2)continue;const l=Sc[Math.floor(Math.random()*Sc.length)],h=eo[l],d=new N(n,o+1,s),f=new no(h,d,this.scene);f.onDeath=_=>{for(const g of _.mobType.dropItems)Math.random()<g.chance&&this.inventory.add(g.itemId,g.count,this.itemRegistry)};const u=new K0(f,this.worldData);this.mobs.push({mob:f,ai:u});return}}getMobs(){return this.mobs.map(t=>t.mob)}}function w(i,t,e,n,s,r){const a=new Js({color:n});return s&&(a.emissive=new Ut(s),a.emissiveIntensity=r??.5),new Me(new _n(i,t,e),a)}class rr{constructor(t,e,n,s,r,a){this.config=t,this.scene=n,this.player=s,this.inventory=r,this.itemRegistry=a,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this.currentPhase=0,this._attackTimer=0,this._vy=0,this.onDeath=null,this.onPhaseChange=null,this._homePos=e.clone(),this._aggroed=!1,this._parts=[],this.mesh=new qn,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),n.add(this.mesh),this._buildMesh(),this._initBossBar()}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildMesh(){const[t,e,n]=this.config.scale,s=w(t,e,n,this.config.color);s._origColor=this.config.color,s.castShadow=!0,this.mesh.add(s),this._parts.push(s)}_initBossBar(){this._barFill=document.getElementById("boss-bar-fill")}showBar(){const t=document.getElementById("boss-bar-wrap"),e=document.getElementById("boss-name");t&&(t.style.display="block",e.textContent=this.config.name),this._updateBar()}_updateBar(){this._barFill&&(this._barFill.style.width=`${this.health/this.maxHealth*100}%`)}get position(){return this.mesh.position}takeDamage(t){var n;if(this.dead)return;ti.playHit(),this.health=Math.max(0,this.health-t),this._updateBar(),this._parts.forEach(s=>s.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(s=>s.material.color.set(s._origColor))},150);const e=this.config.phases||[];for(let s=0;s<e.length;s++)if(this.currentPhase===s&&this.health/this.maxHealth<e[s]){this.currentPhase=s+1,(n=this.onPhaseChange)==null||n.call(this,this.currentPhase),this._onPhaseChange(this.currentPhase);break}this.health<=0&&this._die()}_onPhaseChange(t){}_die(){var e;if(this.dead)return;this.dead=!0;const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none");for(const n of this.config.drops||[])this.inventory.add(n.itemId,n.count,this.itemRegistry);this.scene.remove(this.mesh),this._parts.forEach(n=>{n.geometry.dispose(),n.material.dispose()}),(e=this.onDeath)==null||e.call(this,this)}applyGravity(t,e){this._vy-=Qs*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),a=Math.floor(n.y-this.config.scale[1]/2-.1),o=Math.floor(n.z);if(e.isSolid(r,a,o)){this._vy=0;const c=e.surfaceY(r,o);c>=0&&(n.y=c+1+this.config.scale[1]/2)}else n.y=s}_moveToward(t,e,n){const s=e.x-this.position.x,r=e.z-this.position.z,a=Math.sqrt(s*s+r*r);a<.5||(this.position.x+=s/a*n*t,this.position.z+=r/a*n*t,this.position.x=Math.max(2,Math.min(190,this.position.x)),this.position.z=Math.max(2,Math.min(190,this.position.z)),this.mesh.rotation.y=Math.atan2(s,r))}update(t,e){if(!this.dead){if(this.applyGravity(t,e),!this._aggroed){const n=this.config.aggroZoneRadius??this.config.chaseRange??22,s=this.player.camera.position.x-this._homePos.x,r=this.player.camera.position.z-this._homePos.z;Math.sqrt(s*s+r*r)<n&&(this._aggroed=!0)}this._aggroed?this._behaviorUpdate(t):this.position.distanceTo(this._homePos)>2&&this._moveToward(t,this._homePos,1)}}_behaviorUpdate(t){}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()});const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none"),this.dead=!0}}const Ti={id:"cave_troll",name:"⚡ Cave Troll",color:"#3d6e3d",health:200,damage:4,speed:2.5,attackRange:2.5,attackCooldown:2,scale:[2,3,2],phases:[.6,.3],drops:[{itemId:"troll_fang",count:1}],chaseRange:18,aggroZoneRadius:20};class Z0 extends rr{constructor(t,e,n,s,r,a){super(Ti,t,e,n,s,r),this.mobSpawner=a,this._slamTimer=0}_buildMesh(){const t="#4a5040",e="#2e3828",n="#3a4030",s="#3a5a2a";this._addPart(w(1.35,1.05,1.1,t),0,1.52,0),this._addPart(w(1.5,.28,.45,e),0,1.88,.25),this._addPart(w(.32,.22,.12,e),-.3,1.75,.5),this._addPart(w(.32,.22,.12,e),.3,1.75,.5),this._addPart(w(.16,.14,.08,"#cc9900"),-.3,1.76,.56),this._addPart(w(.16,.14,.08,"#cc9900"),.3,1.76,.56),this._addPart(w(.38,.2,.22,n),0,1.58,.52),this._addPart(w(1.1,.32,.55,n),0,1.14,.35),this._addPart(w(.12,.38,.1,"#d4c88a"),-.28,1.05,.52),this._addPart(w(.12,.38,.1,"#d4c88a"),.28,1.05,.52),this._addPart(w(.18,.4,.12,e),-.75,1.6,0),this._addPart(w(.18,.4,.12,e),.75,1.6,0),this._addPart(w(.75,.3,.7,n),0,1,0),this._addPart(w(2.1,1.7,1.05,t),0,.2,0),this._addPart(w(1.8,1.05,.45,t),0,-.25,.44),this._addPart(w(.7,.55,.18,e),-.45,.55,.5),this._addPart(w(.7,.55,.18,e),.45,.55,.5),this._addPart(w(.55,.35,.12,s),-.6,.1,.5),this._addPart(w(.4,.28,.12,s),.7,.4,.48),this._addPart(w(.45,.3,.12,s),.2,-.3,.5),this._addPart(w(.35,.5,.3,n),-.6,.6,-.5),this._addPart(w(.28,.4,.28,n),.5,.3,-.5),this._addPart(w(.22,.35,.22,n),0,.8,-.5),this._addPart(w(.85,.7,.8,e),-1.25,.85,0);const r=w(.72,2.15,.72,t);r.rotation.z=-.28,this._addPart(r,-1.45,-.35,0),this._addPart(w(.4,.35,.35,n),-1.55,-.5,0),this._addPart(w(.85,.7,.8,n),-1.65,-1.6,0),this._addPart(w(.2,.2,.2,e),-1.45,-1.82,.3),this._addPart(w(.2,.2,.2,e),-1.72,-1.82,.15),this._addPart(w(.18,.18,.18,e),-1.88,-1.82,-.1),this._addPart(w(.85,.7,.8,e),1.25,.85,0);const a=w(.72,2.15,.72,t);a.rotation.z=.28,this._addPart(a,1.45,-.35,0),this._addPart(w(.4,.35,.35,n),1.55,-.5,0),this._addPart(w(.8,.65,.75,n),1.62,-1.58,0),this._addPart(w(.18,1,.18,e),1.62,-2.3,0),this._addPart(w(.55,.55,.55,n),1.62,-2.95,0),this._addPart(w(.2,.5,.2,e),1.62,-3.1,-.1),this._addPart(w(.95,1.15,.95,e),-.58,-1.55,0),this._addPart(w(.95,1.15,.95,e),.58,-1.55,0),this._addPart(w(.45,.35,.3,n),-.58,-1.2,.42),this._addPart(w(.45,.35,.3,n),.58,-1.2,.42),this._addPart(w(1.05,.22,1.15,n),-.58,-2.2,.12),this._addPart(w(1.05,.22,1.15,n),.58,-2.2,.12);for(const[o,c]of[[-.72,.55],[-.45,.58],[-.18,.57]])this._addPart(w(.2,.15,.15,e),o,-2.2,c);for(const[o,c]of[[.18,.55],[.45,.58],[.72,.57]])this._addPart(w(.2,.15,.15,e),o,-2.2,c)}_onPhaseChange(t){var e,n;if(t===1){this._parts.forEach(s=>{s.material.color.set("#bbbbbb"),s._origColor="#bbbbbb"});for(let s=0;s<3;s++)(n=(e=this.mobSpawner)._trySpawn)==null||n.call(e)}t===2&&(this._slamTimer=0)}_behaviorUpdate(t){const e=this.player.camera.position.x-this.position.x,n=this.player.camera.position.z-this.position.z,s=Math.sqrt(e*e+n*n);s>Ti.attackRange&&this._moveToward(t,this.player.camera.position,Ti.speed),this._attackTimer-=t,s<=Ti.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Ti.damage),this._attackTimer=Ti.attackCooldown),this.currentPhase>=2&&(this._slamTimer-=t,this._slamTimer<=0&&(this._slamTimer=4,s<=4&&this.player.stats.takeDamage(6)))}}const bi={id:"swamp_witch",name:"🔮 Swamp Witch",color:"#6a1a8a",health:150,damage:3,speed:2,attackRange:12,attackCooldown:2.5,scale:[1,2,1],phases:[.4],drops:[{itemId:"witch_eye",count:1}],chaseRange:18,aggroZoneRadius:16};class j0{constructor(t,e,n){const s=new Qa(.3,6,6),r=new Kn({color:"#aa44ff"});this.mesh=new Me(s,r),this.mesh.position.copy(t);const a=new N().subVectors(e,t).normalize();this.velocity=a.multiplyScalar(12),n.add(this.mesh),this.scene=n,this.alive=!0,this._life=4}update(t,e,n){if(this.alive){if(this.mesh.position.addScaledVector(this.velocity,t),this._life-=t,this._life<=0){this._destroy();return}this.mesh.position.distanceTo(e)<1.5&&(n(),this._destroy())}}_destroy(){this.alive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose()}}class J0 extends rr{constructor(t,e,n,s,r){super(bi,t,e,n,s,r),this._projectiles=[],this._currentSpeed=bi.speed}_buildMesh(){const t="#4a3820",e="#5a1a6a",n="#3a0a50",s="#18080e",r="#1a1008",a="#aa8800";this._addPart(w(1.05,.08,1,s),0,1.22,0),this._addPart(w(.68,.28,.65,s),0,1.38,0),this._addPart(w(.5,.28,.48,s),0,1.62,0),this._addPart(w(.34,.28,.34,s),0,1.86,0),this._addPart(w(.18,.28,.18,s),0,2.08,-.04),this._addPart(w(.08,.2,.08,s),0,2.28,-.08),this._addPart(w(.72,.07,.68,a),0,1.26,0),this._addPart(w(.14,.1,.05,a),0,1.27,.34),this._addPart(w(.46,.48,.44,t),0,.8,0),this._addPart(w(.1,.14,.08,"#3a2810"),-.22,.8,.2),this._addPart(w(.1,.14,.08,"#3a2810"),.22,.8,.2),this._addPart(w(.1,.1,.06,"#44ff44","#00aa00",1.2),-.13,.85,.23),this._addPart(w(.1,.1,.06,"#44ff44","#00aa00",1.2),.13,.85,.23),this._addPart(w(.08,.13,.18,"#3a2810"),0,.79,.24),this._addPart(w(.1,.07,.1,"#3a2810"),0,.74,.31),this._addPart(w(.22,.04,.05,"#2a1808"),0,.68,.22),this._addPart(w(.06,.06,.06,"#3a2808"),.06,.62,.22),this._addPart(w(.12,.48,.08,r),-.24,.65,-.1),this._addPart(w(.1,.55,.06,r),-.3,.6,-.05),this._addPart(w(.12,.48,.08,r),.24,.65,-.1),this._addPart(w(.1,.55,.06,r),.3,.6,-.05),this._addPart(w(.22,.2,.2,t),0,.52,0),this._addPart(w(.6,.58,.36,e),0,.22,0),this._addPart(w(.48,.12,.14,"#6a2a7a"),0,.52,.12),this._addPart(w(.64,.1,.38,a),0,-.08,0),this._addPart(w(.14,.14,.1,"#4a3010"),-.22,-.08,.18),this._addPart(w(.12,.16,.1,"#4a3010"),.22,-.09,.18),this._addPart(w(.72,.4,.44,n),0,-.35,0),this._addPart(w(.82,.4,.52,n),0,-.65,0),this._addPart(w(.78,.36,.5,"#2a0840"),0,-.94,0),this._addPart(w(.2,.15,.08,n),-.28,-1.12,.18),this._addPart(w(.16,.18,.07,n),.22,-1.13,.2),this._addPart(w(.12,.12,.07,n),0,-1.14,.22);const o=w(.18,.58,.18,t);o.rotation.z=-.6,o.rotation.x=-.2,this._addPart(o,-.4,.22,0),this._addPart(w(.2,.18,.18,t),-.64,-.04,0),this._addPart(w(.06,.16,.05,t),-.55,-.2,.06),this._addPart(w(.06,.16,.05,t),-.64,-.22,.04),this._addPart(w(.06,.16,.05,t),-.73,-.2,.04),this._addPart(w(.22,.22,.22,"#aa44ff","#6600cc",1.2),-.64,-.38,0);const c=w(.18,.58,.18,t);c.rotation.z=.25,this._addPart(c,.38,.18,0),this._addPart(w(.2,.18,.18,t),.54,-.14,0),this._addPart(w(.07,1.6,.07,"#3a2010"),.56,-.95,0),this._addPart(w(.2,.1,.1,"#4a3010"),.56,-1.78,0),this._addPart(w(.1,.1,.2,"#4a3010"),.56,-1.78,0),this._addPart(w(.16,.22,.16,"#44ffaa","#00cc66",1.5),.56,-1.95,0)}_onPhaseChange(t){t===1&&(this._currentSpeed=bi.speed*2,this._parts.forEach(e=>{e.material.color.set("#330044"),e._origColor="#330044"}))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);if(n<8?this._moveToward(t,e,-this._currentSpeed):n>14&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,this._attackTimer<=0&&n<=bi.attackRange){this._attackTimer=bi.attackCooldown;const s=new j0(new N(this.position.x,this.position.y+1,this.position.z),new N(e.x,e.y,e.z),this.scene);this._projectiles.push(s)}for(let s=this._projectiles.length-1;s>=0;s--){const r=this._projectiles[s];r.update(t,this.player.camera.position,()=>{this.player.stats.takeDamage(bi.damage)}),r.alive||this._projectiles.splice(s,1)}}}const Tn={id:"stone_golem",name:"🪨 Stone Golem",color:"#888888",health:300,damage:6,speed:1.5,attackRange:2.5,attackCooldown:3,scale:[2.5,4,2.5],phases:[.5],minTier:3,drops:[{itemId:"golem_core",count:1}],chaseRange:18,aggroZoneRadius:14};class Q0 extends rr{constructor(t,e,n,s,r){super(Tn,t,e,n,s,r),this._currentSpeed=Tn.speed,this._stomp=0}_buildMesh(){const t="#8a9082",e="#4a5040",n="#6a7060",s="#2e3428";this._addPart(w(1.2,.92,.95,t),0,1.55,0),this._addPart(w(1.35,.22,.38,e),0,1.9,.2);const r=w(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(r,-.32,1.65,.44);const a=w(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(a,.32,1.65,.44),this._eyeMats=[r.material,a.material],this._addPart(w(.35,.3,.1,e),-.32,1.65,.5),this._addPart(w(.35,.3,.1,e),.32,1.65,.5),this._addPart(w(.7,.1,.1,s),0,1.38,.48),this._addPart(w(.18,.16,.08,s),-.22,1.34,.48),this._addPart(w(.18,.16,.08,s),.22,1.34,.48),this._addPart(w(.2,.35,.2,e),-.3,2.06,-.1),this._addPart(w(.18,.28,.18,e),.25,2.1,.05),this._addPart(w(.14,.22,.14,e),0,2.02,-.25),this._addPart(w(2,1.7,1.15,t),0,.22,0),this._addPart(w(.85,.75,.28,n),-.45,.65,.5),this._addPart(w(.85,.75,.28,n),.45,.65,.5),this._addPart(w(1.5,.4,.22,e),0,.12,.56);const o=w(.55,.55,.28,"#44ccff","#2288ff",2.2);this._crystalMat=o.material,this._addPart(o,0,.3,.56),this._addPart(w(.8,.07,.08,"#2266cc","#2266cc",.8),0,.58,.55),this._addPart(w(.06,.6,.06,"#2266cc","#2266cc",.8),0,.1,.55),this._addPart(w(.4,.5,.28,e),-.6,.7,-.55),this._addPart(w(.35,.42,.25,e),.5,.4,-.55),this._addPart(w(.28,.35,.22,n),0,.95,-.55),this._addPart(w(.06,.8,.05,s),-.2,.25,.58),this._addPart(w(.06,.6,.05,s),.3,.15,.58),this._addPart(w(1.3,.65,1,e),-1.65,.95,0),this._addPart(w(1.3,.65,1,e),1.65,.95,0),this._addPart(w(.22,.55,.22,t),-2.12,1.22,0),this._addPart(w(.18,.44,.18,t),-1.85,1.3,.22),this._addPart(w(.22,.55,.22,t),2.12,1.22,0),this._addPart(w(.18,.44,.18,t),1.85,1.3,.22);const c=w(.75,1.9,.75,n);c.rotation.z=-.12,this._addPart(c,-1.5,-.35,0),this._addPart(w(.6,.42,.5,e),-1.58,-.55,0),this._addPart(w(1,.85,.95,t),-1.62,-1.55,0),this._addPart(w(.35,.28,.3,e),-1.35,-1.82,.35),this._addPart(w(.3,.25,.28,e),-1.72,-1.82,.35),this._addPart(w(.28,.22,.25,e),-2,-1.78,.2);const l=w(.75,1.9,.75,n);l.rotation.z=.12,this._addPart(l,1.5,-.35,0),this._addPart(w(.6,.42,.5,e),1.58,-.55,0),this._addPart(w(1,.85,.95,t),1.62,-1.55,0),this._addPart(w(.35,.28,.3,e),1.35,-1.82,.35),this._addPart(w(.3,.25,.28,e),1.72,-1.82,.35),this._addPart(w(.28,.22,.25,e),2,-1.78,.2),this._addPart(w(.92,1.1,.92,n),-.58,-1.52,0),this._addPart(w(.92,1.1,.92,n),.58,-1.52,0),this._addPart(w(.52,.42,.38,e),-.58,-1.18,.44),this._addPart(w(.52,.42,.38,e),.58,-1.18,.44),this._addPart(w(1.1,.28,1.2,t),-.58,-2.22,.12),this._addPart(w(1.1,.28,1.2,t),.58,-2.22,.12),this._addPart(w(.28,.2,.28,e),-1,-2.22,.3),this._addPart(w(.22,.18,.22,e),.95,-2.22,.28),this._addPart(w(.2,.16,.2,e),0,-2.22,.7)}_onPhaseChange(t){t===1&&(this._currentSpeed=Tn.speed*2.2,this._parts.forEach(e=>{e.material.color.set("#c0c8b8"),e._origColor="#c0c8b8"}),this._crystalMat&&(this._crystalMat.color.set("#88ffff"),this._crystalMat.emissiveIntensity=4),this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}))}_behaviorUpdate(t){const e=this.player.camera.position,n=e.x-this.position.x,s=e.z-this.position.z,r=Math.sqrt(n*n+s*s);r>Tn.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,r<=Tn.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Tn.damage),this._attackTimer=Tn.attackCooldown),this.currentPhase>=1&&(this._stomp-=t,this._stomp<=0&&(this._stomp=5,r<=5&&this.player.stats.takeDamage(4)))}takeDamage(t){this.player.stats.tier<Tn.minTier&&(t*=.15),super.takeDamage(t)}}const bn={id:"the_conqueror",name:"💀 THE CONQUEROR",color:"#1a0a1a",health:600,damage:8,speed:3,attackRange:3,attackCooldown:1.5,scale:[3,5,3],phases:[.6,.25],drops:[],chaseRange:30};class t_ extends rr{constructor(t,e,n,s,r,a){super(bn,t,e,n,s,r),this.worldData=a,this._currentSpeed=bn.speed,this._summonTimer=0,this._shockwaveTimer=0,this._minions=[],this.onWin=null}_buildMesh(){const t="#1a0a12",e="#0a0508",n="#3a0808",s="#6a3000",r="#2a1808";this._addPart(w(1.1,.95,.98,t),0,2.18,0),this._addPart(w(1.12,.28,.18,e),0,2.12,.5),this._addPart(w(.35,.07,.06,"#ff0000","#cc0000",1.5),-.22,2.1,.56),this._addPart(w(.35,.07,.06,"#ff0000","#cc0000",1.5),.22,2.1,.56);const a=w(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(a,-.22,2.12,.52);const o=w(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(o,.22,2.12,.52),this._eyeMats=[a.material,o.material],this._addPart(w(.22,.5,.35,e),-.57,2.1,.22),this._addPart(w(.22,.5,.35,e),.57,2.1,.22),this._addPart(w(1,.6,.25,e),0,2.1,-.55),this._addPart(w(1.18,.06,.06,s),0,2.55,0),this._addPart(w(.2,.12,.05,"#880000","#cc0000",1),0,2.38,.5);const c=w(.2,.85,.18,r);c.rotation.z=-.55,c.rotation.x=-.1,this._addPart(c,-.48,2.85,-.05);const l=w(.2,.85,.18,r);l.rotation.z=.55,l.rotation.x=-.1,this._addPart(l,.48,2.85,-.05),this._addPart(w(.12,.3,.12,"#4a2010"),-.78,3.28,-.08),this._addPart(w(.12,.3,.12,"#4a2010"),.78,3.28,-.08),this._addPart(w(.65,.3,.6,e),0,1.68,0),this._addPart(w(.85,.18,.65,t),0,1.55,0),this._addPart(w(2.1,1.9,1.18,t),0,.55,0),this._addPart(w(1.85,1.5,.3,n),0,.62,.56),this._addPart(w(.9,.8,.16,t),-.45,.95,.7),this._addPart(w(.9,.8,.16,t),.45,.95,.7);const h=w(.55,.55,.12,"#880000","#ff0000",1.8);this._glowMat=h.material,this._addPart(h,0,.65,.72),this._addPart(w(1.85,.06,.08,s),0,1.2,.65),this._addPart(w(1.85,.06,.08,s),0,.1,.65),this._addPart(w(1.6,.5,.25,e),0,.02,.62),this._addPart(w(.5,1.6,.2,e),0,.6,-.62),this._addPart(w(.22,.35,.22,r),0,1.5,-.65),this._addPart(w(.18,.3,.18,r),0,1.1,-.65),this._addPart(w(.18,.28,.18,r),0,.7,-.65),this._addPart(w(1.55,.6,.12,"#0a0508"),0,1,-.72),this._addPart(w(1.7,.8,.12,e),0,.3,-.72),this._addPart(w(1.6,.8,.12,"#100610"),0,-.45,-.72),this._addPart(w(1.4,.7,.1,"#0a0408"),0,-1.1,-.7),this._addPart(w(.3,.3,.08,e),-.55,-1.6,-.68),this._addPart(w(.25,.35,.08,e),.3,-1.65,-.68),this._addPart(w(.2,.25,.08,e),-.1,-1.7,-.68),this._addPart(w(1.4,.6,1.1,e),-1.65,1.32,0),this._addPart(w(1.4,.6,1.1,e),1.65,1.32,0),this._addPart(w(.22,.6,.22,r),-2.15,1.6,0),this._addPart(w(.18,.5,.18,r),-1.85,1.7,.22),this._addPart(w(.18,.5,.18,r),-1.85,1.7,-.22),this._addPart(w(.22,.6,.22,r),2.15,1.6,0),this._addPart(w(.18,.5,.18,r),1.85,1.7,.22),this._addPart(w(.18,.5,.18,r),1.85,1.7,-.22),this._addPart(w(1.42,.06,.06,s),-1.65,1.62,0),this._addPart(w(1.42,.06,.06,s),1.65,1.62,0),this._addPart(w(.72,2.1,.72,t),-1.62,-.28,0),this._addPart(w(.22,.4,.22,r),-1.62,-.6,-.38),this._addPart(w(.85,.6,.8,e),-1.62,-1.48,0),this._addPart(w(.15,.25,.14,r),-1.4,-1.7,.35),this._addPart(w(.15,.22,.14,r),-1.65,-1.72,.38),this._addPart(w(.15,.2,.14,r),-1.88,-1.68,.32),this._addPart(w(.08,1.1,.95,n),-2.1,-.22,0),this._addPart(w(.06,1,.85,e),-2.18,-.22,0),this._addPart(w(.05,.2,.2,s),-2.22,-.22,0),this._addPart(w(.72,2.1,.72,t),1.62,-.28,0),this._addPart(w(.22,.4,.22,r),1.62,-.6,-.38),this._addPart(w(.85,.6,.8,e),1.62,-1.48,0),this._addPart(w(.15,.22,.14,r),1.4,-1.7,.35),this._addPart(w(.15,.2,.14,r),1.65,-1.72,.38),this._addPart(w(.15,.18,.14,r),1.88,-1.68,.32),this._addPart(w(.22,2.8,.08,e),1.62,-3.3,0),this._addPart(w(.08,2.6,.05,"#440000","#440000",.5),1.62,-3.3,0),this._addPart(w(.9,.12,.15,e),1.62,-1.98,0),this._addPart(w(.18,.5,.14,r),1.62,-2.15,0),this._addPart(w(.25,.18,.18,e),1.62,-2.44,0),this._addPart(w(.95,1.5,.95,t),-.6,-1.62,0),this._addPart(w(.95,1.5,.95,t),.6,-1.62,0),this._addPart(w(.68,.38,.5,n),-.6,-1.12,.38),this._addPart(w(.68,.38,.5,n),.6,-1.12,.38),this._addPart(w(.72,.8,.2,e),-.6,-1.65,.45),this._addPart(w(.72,.8,.2,e),.6,-1.65,.45),this._addPart(w(1.05,.22,1.2,t),-.6,-2.5,.1),this._addPart(w(1.05,.22,1.2,t),.6,-2.5,.1),this._addPart(w(.14,.14,.3,r),-.6,-2.44,.68),this._addPart(w(.14,.14,.3,r),.6,-2.44,.68)}_onPhaseChange(t){t===1&&(this._currentSpeed=bn.speed*1.5,this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}),this._glowMat&&(this._glowMat.emissiveIntensity=3)),t===2&&(this._currentSpeed=bn.speed*2,this._parts.forEach(e=>{e.material.color.set("#3a0000"),e._origColor="#3a0000"}),this._eyeMats&&this._eyeMats.forEach(e=>{e.color.set("#ff4400"),e.emissiveIntensity=6}),this._glowMat&&(this._glowMat.color.set("#ff0000"),this._glowMat.emissiveIntensity=5))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);n>bn.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,n<=bn.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(bn.damage),this._attackTimer=bn.attackCooldown),this.currentPhase>=1&&(this._shockwaveTimer-=t,this._shockwaveTimer<=0&&(this._shockwaveTimer=6,n<=6&&this.player.stats.takeDamage(5))),this.currentPhase>=2&&(this._summonTimer-=t,this._summonTimer<=0&&(this._summonTimer=20,this._summonMinions()));for(let s=this._minions.length-1;s>=0;s--){const r=this._minions[s];if(r.dead){this._minions.splice(s,1);continue}const a=e.x-r.position.x,o=e.z-r.position.z,c=Math.sqrt(a*a+o*o);c>1.5?(r.position.x+=a/c*3*t,r.position.z+=o/c*3*t):r.takeDamage&&this.player.stats.takeDamage(2*t),r.applyGravity(t,this.worldData)}}_summonMinions(){const t=["zombie","skeleton","spider"];for(const e of t){const n=eo[e],s=Math.random()*Math.PI*2,r=5+Math.random()*3,a=new N(this.position.x+Math.cos(s)*r,this.position.y,this.position.z+Math.sin(s)*r),o=new no(n,a,this.scene);o.onDeath=()=>{},this._minions.push(o)}}_die(){var e;for(const n of this._minions)(e=n.dispose)==null||e.call(n);this._minions=[];const t=this.onWin;super._die(),t==null||t()}}class e_{constructor(){this.healthFill=document.getElementById("health-fill"),this.hungerFill=document.getElementById("hunger-fill"),this.dayCounter=document.getElementById("day-counter"),this.crosshair=document.getElementById("crosshair"),this.hudEl=document.getElementById("hud"),this.breakWrap=document.getElementById("break-progress-wrap"),this.breakFill=document.getElementById("break-progress-fill"),this.pickupFlash=document.getElementById("pickup-flash"),this._flashTimeout=null}show(){this.hudEl.style.display="flex",this.crosshair.style.display="block",this.dayCounter.style.display="block"}hide(){this.hudEl.style.display="none",this.crosshair.style.display="none",this.dayCounter.style.display="none"}updateHealth(t,e){const n=Math.max(0,t/e)*100;this.healthFill.style.width=n+"%"}updateHunger(t,e){const n=Math.max(0,t/e)*100;this.hungerFill.style.width=n+"%"}updateDay(t){this.dayCounter.textContent=`Day ${t}`}setBreakProgress(t){t<=0?(this.breakWrap.style.display="none",this.breakFill.style.width="0%"):(this.breakWrap.style.display="block",this.breakFill.style.width=t*100+"%")}showPickup(t){clearTimeout(this._flashTimeout),this.pickupFlash.style.bottom="120px",this.pickupFlash.style.fontSize="12px",this.pickupFlash.textContent=`+ ${t}`,this.pickupFlash.style.opacity="1",this._flashTimeout=setTimeout(()=>{this.pickupFlash.style.opacity="0"},1500)}}class n_{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("hotbar"),this.slotEls=[],this._build(),t.addChangeListener(()=>this.refresh())}_build(){this.el.innerHTML="",this.slotEls=[];for(let t=0;t<9;t++){const e=document.createElement("div");e.className="hotbar-slot",e.innerHTML=`
        <span class="slot-key">${t+1}</span>
        <div class="slot-icon-wrap" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"></div>
        <span class="slot-count"></span>
      `,this.el.appendChild(e),this.slotEls.push(e)}this._updateSelected()}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}select(t){this.inventory.hotbarIndex=(t%9+9)%9,this._updateSelected()}scroll(t){const e=((this.inventory.hotbarIndex+t)%9+9)%9;this.select(e)}_updateSelected(){this.slotEls.forEach((t,e)=>{t.classList.toggle("selected",e===this.inventory.hotbarIndex)})}refresh(){for(let t=0;t<9;t++){const e=this.inventory.slots[t],n=this.slotEls[t].querySelector(".slot-icon-wrap"),s=this.slotEls[t].querySelector(".slot-count");if(n.innerHTML="",e.itemId&&e.count>0){const r=this.itemRegistry.getItem(e.itemId),a=document.createElement("div");a.style.cssText=`width:32px;height:32px;background:${this._itemColor(e.itemId)};border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:8px;color:#fff;text-align:center;overflow:hidden;`,a.title=(r==null?void 0:r.name)??e.itemId,a.textContent=((r==null?void 0:r.name)??e.itemId).slice(0,4),n.appendChild(a),s.textContent=e.count>1?e.count:""}else s.textContent=""}}_itemColor(t){return{wood_log:"#6b4423",cobblestone:"#888",dirt:"#8b6914",sand:"#d4c27a",planks:"#c8a44a",stick:"#c8a44a",iron_ore:"#7a7a60",iron_ingot:"#aaaacc",crystal_shard:"#8844ff",troll_fang:"#4a8a4a",witch_eye:"#8822aa",golem_core:"#888888",summoning_stone:"#220022",wooden_axe:"#8b6914",wooden_pickaxe:"#8b6914",wooden_hoe:"#8b6914",wooden_sword:"#8b6914",stone_axe:"#888",stone_pickaxe:"#888",stone_hoe:"#888",stone_sword:"#888",iron_axe:"#aaaacc",iron_pickaxe:"#aaaacc",iron_hoe:"#aaaacc",iron_sword:"#aaaacc",crystal_axe:"#8844ff",crystal_pickaxe:"#8844ff",crystal_sword:"#8844ff",wheat_seed:"#aaaa22",wheat:"#cccc44",bread:"#d4a044",carrot_seed:"#ff8800",carrot:"#ff6600",potato_seed:"#cc8800",baked_potato:"#cc6600",raw_meat:"#cc4422",cooked_meat:"#884422",bone:"#ddddaa",string:"#eeddcc",torch:"#ffaa00"}[t]??"#666"}}class i_{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("inventory-overlay"),this.grid=document.getElementById("inv-grid"),this.visible=!1,this._selected=null,t.addChangeListener(()=>{this.visible&&this.refresh()})}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){this.grid.innerHTML="";for(let t=0;t<36;t++){const e=this.inventory.slots[t],n=document.createElement("div");if(n.className="inv-slot",t<9&&(n.style.border="1px solid rgba(255,255,150,0.4)"),t===this._selected&&(n.style.outline="2px solid #fff"),e.itemId&&e.count>0){const s=this.itemRegistry.getItem(e.itemId),r=document.createElement("div");if(r.style.cssText=`width:24px;height:24px;background:${this._color(e.itemId)};border-radius:2px;`,r.title=(s==null?void 0:s.name)??e.itemId,n.appendChild(r),e.count>1){const a=document.createElement("span");a.className="slot-count",a.textContent=e.count,n.appendChild(a)}}n.addEventListener("click",()=>{this._selected===null?this.inventory.slots[t].itemId&&(this._selected=t,this.refresh()):(this.inventory.swapSlots(this._selected,t),this._selected=null,this.refresh())}),this.grid.appendChild(n)}}_color(t){return{wood_log:"#6b4423",cobblestone:"#888",dirt:"#8b6914",sand:"#d4c27a",planks:"#c8a44a",iron_ore:"#7a7a60",iron_ingot:"#aaaacc",crystal_shard:"#8844ff",troll_fang:"#4a8a4a",witch_eye:"#8822aa",golem_core:"#888888",summoning_stone:"#220022",stick:"#c8a44a",wheat_seed:"#aaaa22",wheat:"#cccc44",bread:"#d4a044",carrot:"#ff6600",baked_potato:"#cc6600"}[t]??"#555"}}class s_{constructor(t,e,n,s,r,a){this.inventory=t,this.itemRegistry=e,this.recipeRegistry=n,this.getStation=s,this.getPlayerTier=r,this.killedBosses=a,this.el=document.getElementById("crafting-overlay"),this.stationLabel=document.getElementById("crafting-station-label"),this.recipeList=document.getElementById("recipe-list"),this.visible=!1,this.onCraft=null}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){const t=this.getStation(),e=this.getPlayerTier();this.stationLabel.textContent=`Station: ${t.replace("_"," ").toUpperCase()}`;const n=this.recipeRegistry.getAllVisible(this.inventory,t,e,this.killedBosses);this.recipeList.innerHTML="";for(const s of n){const r=this.inventory.hasAll(s.ingredients),a=document.createElement("div");a.className=`recipe-row${r?"":" unavailable"}`;const o=this.itemRegistry.getItem(s.resultItem),c=Object.entries(s.ingredients).map(([l,h])=>{var d;return`${h}× ${((d=this.itemRegistry.getItem(l))==null?void 0:d.name)??l}`}).join(", ");a.innerHTML=`
        <div style="width:32px;height:32px;background:${this._color(s.resultItem)};border-radius:3px;flex-shrink:0;"></div>
        <div class="recipe-info">
          <div class="recipe-name">${(o==null?void 0:o.name)??s.resultItem}</div>
          <div class="recipe-ingredients">${c}</div>
        </div>
        <div class="recipe-result-count">${s.resultCount>1?"×"+s.resultCount:""}</div>
      `,r&&a.addEventListener("click",()=>{var h;this.recipeRegistry.craft(s,this.inventory,this.itemRegistry)&&((h=this.onCraft)==null||h.call(this,s),this.refresh())}),this.recipeList.appendChild(a)}}_color(t){return{wood_log:"#6b4423",cobblestone:"#888",planks:"#c8a44a",stick:"#c8a44a",iron_ingot:"#aaaacc",crystal_shard:"#8844ff",glass:"#aaddff",wooden_axe:"#8b6914",wooden_pickaxe:"#8b6914",wooden_hoe:"#8b6914",wooden_sword:"#8b6914",stone_axe:"#888",stone_pickaxe:"#888",stone_sword:"#888",iron_axe:"#aaaacc",iron_pickaxe:"#aaaacc",iron_sword:"#aaaacc",crystal_axe:"#8844ff",crystal_pickaxe:"#8844ff",crystal_sword:"#8844ff",bread:"#d4a044",baked_potato:"#cc6600",summoning_stone:"#220022",crafting_table:"#8b4513",forge:"#555",chest:"#8b6914",torch:"#ffaa00"}[t]??"#555"}}const Ds="oliver_game_save";class r_{constructor(t,e,n,s,r,a,o=null){this.worldData=t,this.inventory=e,this.stats=n,this.dayNight=s,this.killedBosses=r,this.getPlayerPos=a,this.farming=o}hasSave(){return!!localStorage.getItem(Ds)}save(){const t=this.getPlayerPos(),e={version:1,worldData:this.worldData.serialize(),inventory:this.inventory.serialize(),playerStats:this.stats.serialize(),dayNumber:this.dayNight.dayNumber,timeOfDay:this.dayNight.timeOfDay,killedBosses:[...this.killedBosses],playerPos:{x:t.x,y:t.y,z:t.z},crops:this.farming?this.farming.serialize():[]};try{localStorage.setItem(Ds,JSON.stringify(e))}catch(n){console.warn("Save failed (storage full?):",n)}}load(){const t=localStorage.getItem(Ds);if(!t)return null;try{return JSON.parse(t)}catch{return null}}apply(t,e){var n;if(t){this.worldData.deserialize(t.worldData),this.inventory.deserialize(t.inventory),this.stats.deserialize(t.playerStats),this.dayNight.dayNumber=t.dayNumber??1,this.dayNight.timeOfDay=t.timeOfDay??.05;for(const s of t.killedBosses??[])this.killedBosses.add(s);(n=this.farming)==null||n.deserialize(t.crops),t.playerPos&&e&&e.camera.position.set(t.playerPos.x,t.playerPos.y,t.playerPos.z)}}clear(){localStorage.removeItem(Ds)}}const Qe={MENU:"menu",PLAYING:"playing",DEAD:"dead",WIN:"win"};class a_{constructor(t){this.renderer=t,this.state=Qe.MENU,this.killedBosses=new Set,this.activeBoss=null,this.scene=new xm,this.scene.background=new Ut(.5,.7,1),this.scene.fog=new sr(10075135,.007);const e=window.innerWidth&&window.innerHeight?window.innerWidth/window.innerHeight:16/9;this.camera=new Ve(70,e,.1,1200),this.ambientLight=new wm(16777215,.6),this.scene.add(this.ambientLight),this.dirLight=new Rm(16777215,.8),this.dirLight.position.set(30,30,15),this.dirLight.castShadow=!0,this.scene.add(this.dirLight),this.itemRegistry=new F0,this.recipeRegistry=new z0,this.worldData=new km,Wm(this.worldData);const n=this._generateAtlas();this.worldRenderer=new Vm(this.scene,this.worldData,n),this.stats=new E0,this.inventory=new b0,this.hud=new e_,this.hotbar=new n_(this.inventory,this.itemRegistry),this.farmingSystem=new H0(this.worldData,this.scene),this.miningSystem=new k0(this.worldData,this.worldRenderer,this.inventory,this.stats,this.itemRegistry),this.miningSystem.onPickup=s=>this.hud.showPickup(s),this.miningSystem.onBlockBroken=(s,r)=>{this.farmingSystem.removeCropAt(s)},this.player=new N0(this.camera,t,this.worldData,this.worldRenderer,this.stats,this.inventory,this.miningSystem,this.farmingSystem,this.hotbar,this.hud,this.itemRegistry),this.inventoryUI=new i_(this.inventory,this.itemRegistry),this.craftingUI=new s_(this.inventory,this.itemRegistry,this.recipeRegistry,()=>this.player.currentStation,()=>this.stats.tier,this.killedBosses),this.craftingUI.onCraft=s=>{const r=this.itemRegistry.getItem(s.resultItem);r&&this.stats.updateTier(r),s.resultItem==="summoning_stone"&&this._showMsg("Summoning Stone crafted! Use it at the Altar in the swamp.")},this.dayNight=new W0(this.scene,this.ambientLight,this.dirLight),this.dayNight.onNightBegin=()=>{this.mobSpawner.setNight(!0),this.passiveSpawner.setNight(!0),this._showMsg("Night falls... they are coming.")},this.dayNight.onDayBegin=s=>{this.mobSpawner.setNight(!1),this.passiveSpawner.setNight(!1),this.hud.updateDay(s)},this.mobSpawner=new Y0(this.scene,this.worldData,this.player,this.inventory,this.itemRegistry),this.mobSpawner.onMobDeath=s=>{this.hud.showPickup(`${s.mobType.name} slain!`)},this.passiveSpawner=new $0(this.scene,this.worldData,this.inventory,this.itemRegistry),this.player.setupAttackListener(()=>[...this.mobSpawner.getMobs(),...this.passiveSpawner.getMobs(),...(this._activeBossList??[]).filter(s=>!s.dead)]),this.stats.onDeath=()=>this._onPlayerDeath(),this.stats.onChange=()=>{this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger)},this.player.onUseAltarWithStone=()=>{if([...this.killedBosses].filter(s=>["cave_troll","swamp_witch","stone_golem"].includes(s)).length<3){this._showMsg("You must defeat all three guardians first!");return}this._spawnFinalBoss()},this.saveSystem=new r_(this.worldData,this.inventory,this.stats,this.dayNight,this.killedBosses,()=>this.camera.position,this.farmingSystem),this._setupUIKeys(),this._setupMenuButtons(),this._saveTimer=0}_setupMenuButtons(){for(const e of["easy","normal","hard"]){const n=document.getElementById(`btn-${e}`);n&&n.addEventListener("click",()=>{this.saveSystem.clear(),this._startNewGame(e)})}const t=document.getElementById("btn-continue");this.saveSystem.hasSave()&&(t.style.display="block",t.addEventListener("click",()=>this._loadGame())),document.getElementById("btn-restart").addEventListener("click",()=>{this.saveSystem.clear(),location.reload()})}_startNewGame(t="normal"){this.stats.setDifficulty(t),document.getElementById("menu-screen").style.display="none",this.state=Qe.PLAYING,this._enterPlayMode()}_loadGame(){const t=this.saveSystem.load();if(!t){this._startNewGame();return}for(const e of this.worldRenderer.chunks.values())e.mesh&&this.scene.remove(e.mesh);this.saveSystem.apply(t,this.player),this.worldRenderer._buildAll(),document.getElementById("menu-screen").style.display="none",this.state=Qe.PLAYING,this._enterPlayMode()}_enterPlayMode(){ti.startMusic(),this.hud.show(),this.hotbar.show(),this.hud.updateDay(this.dayNight.dayNumber),this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger),this.hotbar.refresh(),this.inventory.countOf("wood_log")===0&&(this.inventory.add("wood_log",10,this.itemRegistry),this.inventory.add("planks",8,this.itemRegistry),this.inventory.add("stick",8,this.itemRegistry),this.inventory.add("wheat_seed",6,this.itemRegistry),this.inventory.add("bread",3,this.itemRegistry),this.inventory.add("wooden_sword",1,this.itemRegistry),this.inventory.add("wooden_pickaxe",1,this.itemRegistry),this.inventory.add("wooden_shovel",1,this.itemRegistry)),this.renderer.domElement.addEventListener("click",()=>{this.state===Qe.PLAYING&&!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.lock()},{once:!1}),this._showMsg("Stranded! Gather wood, build tools, survive the night."),this._setupSky(),this._setupBlockOutline(),this.passiveSpawner.init(),this._setupMiniBosses()}_setupMiniBosses(){if(this._bossList=[],!this.killedBosses.has("cave_troll")){const t=new N(30,4,30),e=new Z0(t,this.scene,this.player,this.inventory,this.itemRegistry,this.mobSpawner);e.onDeath=()=>this._onMiniBossKilled("cave_troll","Cave Troll","Swamp Witch"),this._bossList.push(e)}if(!this.killedBosses.has("swamp_witch")){const t=new N(138,13,138),e=new J0(t,this.scene,this.player,this.inventory,this.itemRegistry);e.onDeath=()=>this._onMiniBossKilled("swamp_witch","Swamp Witch","Stone Golem"),this._bossList.push(e)}if(!this.killedBosses.has("stone_golem")){const t=new N(46,26,46),e=new Q0(t,this.scene,this.player,this.inventory,this.itemRegistry);e.onDeath=()=>this._onMiniBossKilled("stone_golem","Stone Golem",null),this._bossList.push(e)}this.activeBoss=this._bossList[0]??null,this._activeBossList=this._bossList}_onMiniBossKilled(t,e,n){this.killedBosses.add(t),document.getElementById("boss-bar-wrap").style.display="none",this._showMsg(`${e} defeated! ${n?`Seek the ${n}.`:"Craft the Summoning Stone at the Forge!"}`),this.saveSystem.save(),this.activeBoss=null,this.killedBosses.size>=3&&this._showMsg("All guardians slain! Craft the Summoning Stone at the Forge.")}_spawnFinalBoss(){const t=new N(138,15,138),e=new t_(t,this.scene,this.player,this.inventory,this.itemRegistry,this.worldData);e.onWin=()=>this._onWin(),e.onDeath=()=>{},this.activeBoss=e,this._activeBossList=[e],this._showMsg("THE CONQUEROR AWAKENS! Fight for your life!")}_onWin(){this.state=Qe.WIN,this.saveSystem.clear(),this.player.controls.unlock(),document.getElementById("end-screen").style.display="flex",document.getElementById("end-title").textContent="🏆 YOU WIN!",document.getElementById("end-title").style.color="#f1c40f",document.getElementById("end-msg").textContent="The Conqueror is defeated. The island is safe."}_onPlayerDeath(){this.state=Qe.DEAD,this.stats.health=this.stats.maxHealth,this.stats.hunger=Math.max(10,this.stats.hunger);const t=Qt/2,e=Zt/2,n=this.worldData.surfaceY(t,e);this.camera.position.set(t+.5,(n>=0?n:12)+1.8,e+.5),this.saveSystem.save(),this.player.controls.unlock(),document.getElementById("end-screen").style.display="flex",document.getElementById("end-title").textContent="💀 YOU DIED",document.getElementById("end-title").style.color="#e74c3c",document.getElementById("end-msg").textContent="The island claimed you... but your camp remains. Hit Restart, then Continue."}_setupUIKeys(){window.addEventListener("keydown",t=>{t.code==="KeyE"&&this.state===Qe.PLAYING&&(this.inventoryUI.toggle()?(this.craftingUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="KeyC"&&this.state===Qe.PLAYING&&(this.craftingUI.toggle()?(this.inventoryUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="Escape"&&(this.inventoryUI.hide(),this.craftingUI.hide())})}update(t){if(this.state===Qe.PLAYING){if(this.stats.update(t),this.dayNight.update(t),this.mobSpawner.update(t),this.passiveSpawner.update(t),this.farmingSystem.update(t),!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.update(t),this._updateBlockOutline(),this._updateSky(t),this._activeBossList){let e=null,n=1/0;for(const s of this._activeBossList){if(s.dead)continue;s.update(t,this.worldData);const r=s.position.distanceTo(this.camera.position);r<25&&r<n&&(n=r,e=s)}e?e.showBar():document.getElementById("boss-bar-wrap").style.display="none"}this._saveTimer+=t,this._saveTimer>=60&&(this._saveTimer=0,this.state===Qe.PLAYING&&this.saveSystem.save())}}_showMsg(t){const e=document.getElementById("pickup-flash");e.textContent=t,e.style.opacity="1",e.style.bottom="140px",e.style.fontSize="13px",clearTimeout(this._msgTimeout),this._msgTimeout=setTimeout(()=>{e.style.opacity="0"},4e3)}_setupBlockOutline(){const t=new Tm(new _n(1.002,1.002,1.002)),e=new rl({color:0,linewidth:1.5,depthTest:!0});this._blockOutline=new Em(t,e),this._blockOutline.visible=!1,this.scene.add(this._blockOutline)}_updateBlockOutline(){const t=this.player.targetBlock;t?(this._blockOutline.position.set(t[0]+.5,t[1]+.5,t[2]+.5),this._blockOutline.visible=!0):this._blockOutline.visible=!1}_setupSky(){const t=new Jn(18,18),e=new Kn({color:16772744,side:ze,depthWrite:!1});this._sun=new Me(t,e),this.scene.add(this._sun);const n=new Jn(12,12),s=new Kn({color:14544639,side:ze,depthWrite:!1});this._moon=new Me(n,s),this.scene.add(this._moon),this._clouds=[];const r=[[[0,0,0,8,2,6],[8,1,0,6,2,5],[-4,1,1,5,2,4]],[[0,0,0,10,2,5],[5,1,0,7,2,4],[-5,0,0,4,2,4]],[[0,0,0,7,2,7],[5,0,1,5,2,5],[0,1,-4,6,2,4]],[[0,0,0,9,2,6],[6,0,0,6,2,5],[-3,1,2,5,2,4],[4,1,-4,4,2,4]]],a=[[60,45,40],[140,48,-20],[30,50,100],[110,46,-60],[-40,44,70],[170,47,150],[90,50,-100],[50,45,-150],[200,46,60],[80,49,200],[-30,48,180],[160,50,120]];for(let o=0;o<a.length;o++){const c=new qn,l=r[o%r.length];for(const[u,_,g,p,m,T]of l){const S=new _n(p,m,T),A=new Kn({color:16777215,transparent:!0,opacity:.82,depthWrite:!1}),D=new Me(S,A);D.position.set(u,_,g),c.add(D)}const[h,d,f]=a[o];c.position.set(h,d,f),this.scene.add(c),this._clouds.push(c)}}_updateSky(t){const n=(this.dayNight?this.dayNight.timeOfDay??0:0)*Math.PI*2,s=160,r=96,a=96;if(this._sun&&(this._sun.position.set(r+Math.cos(n)*s,Math.sin(n)*s+20,a-30),this._sun.lookAt(this.camera.position)),this._moon&&(this._moon.position.set(r+Math.cos(n+Math.PI)*s,Math.sin(n+Math.PI)*s+20,a-30),this._moon.lookAt(this.camera.position)),this._clouds)for(let o=0;o<this._clouds.length;o++)this._clouds[o].position.x+=2*t,this._clouds[o].position.x>250&&(this._clouds[o].position.x=-100)}_generateAtlas(){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.imageSmoothingEnabled=!1;const r=u=>{let _=u;return()=>(_=_*1664525+1013904223>>>0,_/4294967295)},a=(u,_,g)=>{s.fillStyle=g,s.fillRect(u*16,_*16,16,16)},o=(u,_,g,p,m)=>{s.fillStyle=m,s.fillRect(u*16+g,_*16+p,1,1)},c=(u,_,g,p,m,T,S)=>{s.fillStyle=S,s.fillRect(u*16+g,_*16+p,m,T)},l=(u,_,g,p,m)=>{const T=r(m),S=parseInt(g.slice(1),16),A=S>>16&255,D=S>>8&255,P=S&255;for(let R=0;R<16;R++)for(let F=0;F<16;F++){const Q=Math.round((T()-.5)*p*2),v=Math.max(0,Math.min(255,A+Q)),E=Math.max(0,Math.min(255,D+Q)),W=Math.max(0,Math.min(255,P+Q));s.fillStyle=`rgb(${v},${E},${W})`,s.fillRect(u*16+F,_*16+R,1,1)}};l(0,0,"#5d9e2f",22,101);const h=r(102);for(let u=0;u<14;u++)o(0,0,Math.floor(h()*16),Math.floor(h()*16),h()>.5?"#3a7010":"#7ac840");l(1,0,"#828282",10,201),s.fillStyle="#9a9a9a",s.fillRect(1*16+1,0*16+1,5,4),s.fillRect(1*16+8,0*16+1,6,3),s.fillRect(1*16+1,0*16+7,4,5),s.fillRect(1*16+7,0*16+8,7,4),s.fillRect(1*16+1,0*16+13,6,2),s.fillRect(1*16+10,0*16+12,5,3),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,0*16+5,16,1),s.fillRect(1*16+0,0*16+12,16,1),s.fillRect(1*16+6,0*16+0,1,5),s.fillRect(1*16+3,0*16+6,1,6),s.fillRect(1*16+10,0*16+5,1,7),s.fillRect(1*16+13,0*16+0,1,12),l(2,0,"#8b5a2b",20,301);const d=r(302);for(let u=0;u<20;u++)o(2,0,Math.floor(d()*16),Math.floor(d()*16),d()>.5?"#5a3010":"#aa7a40");l(3,0,"#8b5a2b",18,401);{const u=r(402);for(let g=0;g<4;g++)for(let p=0;p<16;p++){const m=Math.round((u()-.5)*24),T=[74+m,158+m,40+m];s.fillStyle=`rgb(${Math.max(0,Math.min(255,T[0]))},${Math.max(0,Math.min(255,T[1]))},${Math.max(0,Math.min(255,T[2]))})`,s.fillRect(3*16+p,0*16+g,1,1)}const _=r(403);for(let g=0;g<16;g++)_()>.45&&o(3,0,g,4,"#5a8a22")}l(4,0,"#c49a40",12,501),c(4,0,0,0,16,1,"#7a5010"),c(4,0,0,7,16,1,"#7a5010"),c(4,0,0,8,16,1,"#6a4010"),c(4,0,0,15,16,1,"#7a5010"),c(4,0,7,1,1,6,"#8a6020"),c(4,0,3,9,1,6,"#8a6020");for(let u=2;u<7;u+=2)c(4,0,0,u,16,1,"rgba(0,0,0,0.05)");for(let u=10;u<15;u+=2)c(4,0,0,u,16,1,"rgba(0,0,0,0.05)");l(5,0,"#8b5a2b",18,601),l(6,0,"#4d2e12",14,701);for(let u=2;u<16;u+=4)c(6,0,0,u,16,1,"rgba(0,0,0,0.28)");c(6,0,6,0,4,16,"rgba(20,60,20,0.22)"),a(0,1,"#6e6e6e"),s.fillStyle="#3d3d3d";for(const u of[0,6,10,15])c(0,1,0,u,16,1,"#404040");c(0,1,4,1,1,5,"#404040"),c(0,1,11,1,1,5,"#404040"),c(0,1,7,6,1,4,"#404040"),c(0,1,13,6,1,4,"#404040"),c(0,1,3,10,1,5,"#404040"),c(0,1,9,10,1,5,"#404040"),c(0,1,14,10,1,5,"#404040"),s.fillStyle="#8e8e8e",s.fillRect(0*16+1,1*16+1,3,2),s.fillRect(0*16+5,1*16+2,5,2),s.fillRect(0*16+12,1*16+2,3,2),s.fillRect(0*16+1,1*16+7,5,2),s.fillRect(0*16+8,1*16+7,4,2),s.fillRect(0*16+1,1*16+11,7,3),s.fillRect(0*16+10,1*16+11,4,3),l(2,1,"#d4c27a",14,901);{const u=r(902);for(let _=0;_<22;_++)o(2,1,Math.floor(u()*16),Math.floor(u()*16),u()>.5?"#c4b060":"#e4d090")}a(3,1,"#888877");{const u=r(1001);for(let _=0;_<16;_+=4)for(let g=0;g<16;g+=4){const p=110+Math.floor(u()*55);s.fillStyle=`rgb(${p},${p},${p-8})`,s.fillRect(3*16+g,1*16+_,3,3),s.fillStyle=`rgb(${p-35},${p-35},${p-42})`,s.fillRect(3*16+g+3,1*16+_,1,4),s.fillRect(3*16+g,1*16+_+3,4,1)}}l(4,1,"#7a5428",12,1101);for(const u of[2,7,12])c(4,1,u,0,1,16,"#4a2c0a");for(const u of[4,9,14])c(4,1,u,0,1,16,"#9a6838");c(4,1,8,6,3,3,"#3a1c08"),l(5,1,"#9a6a30",8,1201),s.strokeStyle="#7a4a18",s.lineWidth=1;for(const u of[6,4,2])s.beginPath(),s.arc(5*16+8,1*16+8,u,0,Math.PI*2),s.stroke();c(5,1,7,7,2,2,"#3a1a08"),c(5,1,0,0,16,2,"#5a3818"),c(5,1,0,14,16,2,"#5a3818"),c(5,1,0,2,2,12,"#5a3818"),c(5,1,14,2,2,12,"#5a3818"),l(9,1,"#b48c38",10,1301),c(9,1,0,0,16,2,"#5a3010"),c(9,1,0,14,16,2,"#5a3010"),c(9,1,0,0,2,16,"#5a3010"),c(9,1,14,0,2,16,"#5a3010"),c(9,1,2,8,12,1,"#5a3010"),c(9,1,6,5,4,5,"#c8a020"),c(9,1,7,6,2,3,"#7a5010");for(const u of[3,5,10,12])c(9,1,2,u,12,1,"rgba(0,0,0,0.1)");l(1,2,"#828282",8,1401),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,2*16+6,16,1),s.fillRect(1*16+7,2*16+0,1,6);{const u=r(1402);for(let _=0;_<9;_++){const g=1+Math.floor(u()*12),p=1+Math.floor(u()*12),m=2+Math.floor(u()*2);c(1,2,g,p,m,2,u()>.5?"#cc8855":"#dd9966")}for(let _=0;_<4;_++)o(1,2,1+Math.floor(u()*12),1+Math.floor(u()*12),"#ffcc99")}l(2,2,"#6a6a7a",8,1501),s.fillStyle="#45455a",s.fillRect(2*16+0,2*16+6,16,1),s.fillRect(2*16+7,2*16+0,1,6);{const u=r(1502);for(let _=0;_<8;_++)c(2,2,1+Math.floor(u()*12),1+Math.floor(u()*12),2,2,u()>.5?"#9944ee":"#44aacc");for(let _=0;_<4;_++)o(2,2,1+Math.floor(u()*13),1+Math.floor(u()*13),"#ccffee")}l(11,2,"#c49a40",10,1601),c(11,2,0,0,16,2,"#5a3010"),c(11,2,0,0,2,16,"#5a3010"),c(11,2,14,0,2,16,"#5a3010"),c(11,2,7,1,1,14,"#8a6020"),s.fillStyle="#2a1a08",c(11,2,4,9,1,6,"#333"),c(11,2,5,8,1,1,"#333"),c(11,2,6,7,1,1,"#333"),c(11,2,7,5,4,2,"#333"),c(11,2,7,4,2,1,"#333"),c(11,2,9,7,2,1,"#333"),c(11,2,3,6,5,1,"#888");for(let u=0;u<4;u++)o(11,2,3+u,5+u%2,"#888");l(13,2,"#3a3a3a",8,1701),c(13,2,0,0,16,1,"#222"),c(13,2,0,15,16,1,"#222"),c(13,2,0,0,1,16,"#222"),c(13,2,15,0,1,16,"#222"),c(13,2,4,2,8,5,"#1a1a1a"),c(13,2,2,9,5,6,"#ff8800"),c(13,2,9,9,5,6,"#ff8800"),c(13,2,3,10,3,4,"#ffcc00"),c(13,2,10,10,3,4,"#ffcc00"),c(13,2,4,11,1,2,"#ffffff"),c(13,2,11,11,1,2,"#ffffff"),c(13,2,1,8,7,1,"#555"),c(13,2,8,8,7,1,"#555"),l(14,2,"#1a0a2a",8,1801);{const u=r(1802);for(let _=0;_<18;_++)s.fillStyle="rgba(160,50,255,0.3)",s.fillRect(14*16+Math.floor(u()*14)+1,2*16+Math.floor(u()*14)+1,2,1)}s.fillStyle="#cc44ff",c(14,2,4,4,8,1,"#cc44ff"),c(14,2,4,8,8,1,"#cc44ff"),c(14,2,8,4,1,5,"#cc44ff"),c(14,2,4,12,8,1,"#cc44ff"),c(14,2,6,12,1,3,"#cc44ff"),s.fillStyle="rgba(200,100,255,0.18)",s.fillRect(14*16+3,2*16+3,10,10),s.clearRect(1*16,3*16,16,16),s.fillStyle="rgba(145,215,255,0.38)",s.fillRect(1*16,3*16,16,16),s.fillStyle="#7ab0cc",s.fillRect(1*16,3*16,16,1),s.fillRect(1*16,3*16+16-1,16,1),s.fillRect(1*16,3*16,1,16),s.fillRect(1*16+16-1,3*16,1,16),s.fillStyle="rgba(255,255,255,0.7)",s.fillRect(1*16+2,3*16+2,3,1),s.fillRect(1*16+2,3*16+3,1,2),s.fillStyle="rgba(255,255,255,0.4)",s.fillRect(1*16+11,3*16+11,3,1),s.fillRect(1*16+13,3*16+11,1,2),s.clearRect(4*16,3*16,16,16);{const u=r(1901);for(let _=0;_<16;_++)for(let g=0;g<16;g++){const p=u();p<.1||(p<.35?(s.fillStyle="#1a5510",s.fillRect(4*16+g,3*16+_,1,1)):p<.72?(s.fillStyle="#2a7020",s.fillRect(4*16+g,3*16+_,1,1)):(s.fillStyle="#3a9028",s.fillRect(4*16+g,3*16+_,1,1)))}}s.clearRect(0*16,5*16,16,16),c(0,5,7,7,2,9,"#8b5a2b"),c(0,5,6,3,4,5,"#ff8800"),c(0,5,7,1,2,4,"#ffdd00"),o(0,5,7,1,"#ffffff"),a(7,5,"#2e1808"),c(7,5,0,11,16,4,"#5a3618"),c(7,5,2,9,12,3,"#4a2810"),c(7,5,3,6,10,5,"#cc5500"),c(7,5,4,3,8,5,"#ff8800"),c(7,5,5,1,6,4,"#ffcc00"),c(7,5,6,0,4,2,"#ffff88"),s.clearRect(15*16,12*16,16,16),s.fillStyle="rgba(20,80,200,0.75)",s.fillRect(15*16,12*16,16,16),s.fillStyle="rgba(80,160,255,0.5)";for(let u=0;u<16;u+=3)s.fillRect(15*16+u,12*16+4,2,1),s.fillRect(15*16+(u+2)%16,12*16+10,2,1);const f=new al(n);return f.magFilter=Ie,f.minFilter=Ie,f}}window.addEventListener("error",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`ERROR: ${i.message}
at ${i.filename}:${i.lineno}`,document.body.appendChild(t)});window.addEventListener("unhandledrejection",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`PROMISE ERROR: ${i.reason}`,document.body.appendChild(t)});const In=new vm({antialias:!1});In.setSize(window.innerWidth||1280,window.innerHeight||720);In.shadowMap.enabled=!0;In.shadowMap.type=Rc;In.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.prepend(In.domElement);let Tc=0,bc=0;function ul(){const i=window.innerWidth,t=window.innerHeight;!i||!t||i===Tc&&t===bc||(Tc=i,bc=t,In.setSize(i,t),$n.camera.aspect=i/t,$n.camera.updateProjectionMatrix())}window.addEventListener("resize",ul);let $n;try{$n=new a_(In),window.__game__=$n}catch(i){const t=document.createElement("div");throw t.style.cssText="position:fixed;top:50px;left:0;right:0;background:#c0392b;color:#fff;padding:16px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`GAME INIT ERROR:
${i.stack||i.message}`,document.body.appendChild(t),i}const o_=new Cm;function dl(){requestAnimationFrame(dl),ul();const i=Math.min(o_.getDelta(),.1);try{$n.update(i)}catch(t){console.error("Update error:",t)}In.render($n.scene,$n.camera)}dl();
