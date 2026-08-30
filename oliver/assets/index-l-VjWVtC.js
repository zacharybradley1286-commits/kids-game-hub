(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="169",Ll=0,wo=1,Il=2,Xc=1,Nl=2,xn=3,kn=0,ke=1,Be=2,On=0,Bi=1,Co=2,Po=3,Lo=4,Ul=5,Jn=100,Dl=101,Ol=102,Bl=103,Fl=104,kl=200,zl=201,Hl=202,Gl=203,da=204,pa=205,Vl=206,Wl=207,Xl=208,Yl=209,ql=210,Kl=211,$l=212,Zl=213,jl=214,ma=0,_a=1,ga=2,zi=3,va=4,xa=5,ya=6,Ma=7,io=0,Jl=1,Ql=2,Bn=0,th=1,eh=2,nh=3,ih=4,sh=5,rh=6,ah=7,Yc=300,Hi=301,Gi=302,Sa=303,Ea=304,mr=306,Ta=1e3,ti=1001,ba=1002,Fe=1003,oh=1004,ms=1005,nn=1006,Tr=1007,ei=1008,Sn=1009,qc=1010,Kc=1011,os=1012,so=1013,si=1014,yn=1015,ls=1016,ro=1017,ao=1018,Vi=1020,$c=35902,Zc=1021,jc=1022,sn=1023,Jc=1024,Qc=1025,Fi=1026,Wi=1027,tl=1028,oo=1029,el=1030,co=1031,lo=1033,$s=33776,Zs=33777,js=33778,Js=33779,Aa=35840,Ra=35841,wa=35842,Ca=35843,Pa=36196,La=37492,Ia=37496,Na=37808,Ua=37809,Da=37810,Oa=37811,Ba=37812,Fa=37813,ka=37814,za=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,Ya=37821,Qs=36492,qa=36494,Ka=36495,nl=36283,$a=36284,Za=36285,ja=36286,ch=3200,lh=3201,il=0,hh=1,Nn="",cn="srgb",Hn="srgb-linear",ho="display-p3",_r="display-p3-linear",sr="linear",ce="srgb",rr="rec709",ar="p3",di=7680,Io=519,uh=512,fh=513,dh=514,sl=515,ph=516,mh=517,_h=518,gh=519,Ja=35044,No="300 es",Mn=2e3,or=2001;class li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,Qa=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function vh(i,t){return(i%t+t)%t}function br(i,t,e){return(1-e)*i+e*t}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,a,o,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],_=n[8],g=s[0],p=s[3],m=s[6],T=s[1],S=s[4],b=s[7],D=s[2],C=s[5],R=s[8];return r[0]=a*g+o*T+c*D,r[3]=a*p+o*S+c*C,r[6]=a*m+o*b+c*R,r[1]=l*g+h*T+f*D,r[4]=l*p+h*S+f*C,r[7]=l*m+h*b+f*R,r[2]=d*g+u*T+_*D,r[5]=d*p+u*S+_*C,r[8]=d*m+u*b+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,_=e*f+n*d+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*l-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=u*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Ut;function rl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){const i=cr("canvas");return i.style.display="block",i}const Uo={};function er(i){i in Uo||(Uo[i]=!0,console.warn(i))}function yh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Do=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oo=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[Hn]:{transfer:sr,primaries:rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[cn]:{transfer:ce,primaries:rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_r]:{transfer:sr,primaries:ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(Do)},[ho]:{transfer:ce,primaries:ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(Do).convertLinearToSRGB()}},Eh=new Set([Hn,_r]),Jt={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Eh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ki[t].toReference,s=Ki[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ki[i].primaries},getTransfer:function(i){return i===Nn?sr:Ki[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ki[t].luminanceCoefficients)}};function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class Th{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=cr("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bh=0;class al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;class Le extends li{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ti,s=ti,r=nn,a=ei,o=sn,c=Sn,l=Le.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Fn(),this.name="",this.source=new al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Yc;Le.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,b=(u+1)/2,D=(m+1)/2,C=(h+d)/4,R=(f+g)/4,O=(_+p)/4;return S>b&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=R/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=O/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=O/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(f-g)/T,this.z=(d-h)/T,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new al(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends Rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ol extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wh extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const d=r[a+0],u=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=u,t[e+2]=_,t[e+3]=g;return}if(f!==g||c!==d||l!==u||h!==_){let p=1-o;const m=c*d+l*u+h*_+f*g,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const D=Math.sqrt(S),C=Math.atan2(D,m*T);p=Math.sin(p*C)/D,o=Math.sin(o*C)/D}const b=o*T;if(c=c*p+d*b,l=l*p+u*b,h=h*p+_*b,f=f*p+g*b,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=D,l*=D,h*=D,f*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],_=r[a+3];return t[e]=o*_+h*f+c*u-l*d,t[e+1]=c*_+h*d+l*f-o*u,t[e+2]=l*_+h*u+o*d-c*f,t[e+3]=h*_-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f+d*u*_;break;case"YZX":this._x=d*h*f+l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f-d*u*_;break;case"XZY":this._x=d*h*f-l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f+d*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new U,Bo=new hs;class us{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),gs.subVectors(this.max,$i),mi.subVectors(t.a,$i),_i.subVectors(t.b,$i),gi.subVectors(t.c,$i),bn.subVectors(_i,mi),An.subVectors(gi,_i),Vn.subVectors(mi,gi);let e=[0,-bn.z,bn.y,0,-An.z,An.y,0,-Vn.z,Vn.y,bn.z,0,-bn.x,An.z,0,-An.x,Vn.z,0,-Vn.x,-bn.y,bn.x,0,-An.y,An.x,0,-Vn.y,Vn.x,0];return!Pr(e,mi,_i,gi,gs)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,mi,_i,gi,gs))?!1:(vs.crossVectors(bn,An),e=[vs.x,vs.y,vs.z],Pr(e,mi,_i,gi,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new U,new U,new U,new U,new U,new U,new U,new U],je=new U,_s=new us,mi=new U,_i=new U,gi=new U,bn=new U,An=new U,Vn=new U,$i=new U,gs=new U,vs=new U,Wn=new U;function Pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ch=new us,Zi=new U,Lr=new U;class gr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ch.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Lr)),this.expandByPoint(Zi.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new U,Ir=new U,xs=new U,Rn=new U,Nr=new U,ys=new U,Ur=new U;class uo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ir.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Ir);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xs),o=Rn.dot(this.direction),c=-Rn.dot(xs),l=Rn.lengthSq(),h=Math.abs(1-a*a);let f,d,u,_;if(h>0)if(f=a*c-o,d=a*o-c,_=r*h,f>=0)if(d>=-_)if(d<=_){const g=1/h;f*=g,d*=g,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ir).addScaledVector(xs,d),u}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Nr.subVectors(e,t),ys.subVectors(n,t),Ur.crossVectors(Nr,ys);let a=this.direction.dot(Ur),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const c=o*this.direction.dot(ys.crossVectors(Rn,ys));if(c<0)return null;const l=o*this.direction.dot(Nr.cross(Rn));if(l<0||c+l>a)return null;const h=-o*Rn.dot(Ur);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,c,l,h,f,d,u,_,g,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,u,_,g,p)}set(t,e,n,s,r,a,o,c,l,h,f,d,u,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,u=a*f,_=o*h,g=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+_*l,e[5]=d-g*l,e[9]=-o*c,e[2]=g-d*l,e[6]=_+u*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,u=c*f,_=l*h,g=l*f;e[0]=d+g*o,e[4]=_*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-_,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,u=c*f,_=l*h,g=l*f;e[0]=d-g*o,e[4]=-a*f,e[8]=_+u*o,e[1]=u+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,u=a*f,_=o*h,g=o*f;e[0]=c*h,e[4]=_*l-u,e[8]=d*l+g,e[1]=c*f,e[5]=g*l+d,e[9]=u*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,u=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=g-d*f,e[8]=_*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+_,e[10]=d-g*f}else if(t.order==="XZY"){const d=a*c,u=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+g,e[5]=a*h,e[9]=u*f-_,e[2]=_*f-u,e[6]=o*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Lh)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),wn.crossVectors(n,Ve),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),wn.crossVectors(n,Ve)),wn.normalize(),Ms.crossVectors(Ve,wn),s[0]=wn.x,s[4]=Ms.x,s[8]=Ve.x,s[1]=wn.y,s[5]=Ms.y,s[9]=Ve.y,s[2]=wn.z,s[6]=Ms.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],_=n[2],g=n[6],p=n[10],m=n[14],T=n[3],S=n[7],b=n[11],D=n[15],C=s[0],R=s[4],O=s[8],Q=s[12],v=s[1],E=s[5],W=s[9],H=s[13],X=s[2],q=s[6],z=s[10],J=s[14],G=s[3],ut=s[7],ft=s[11],vt=s[15];return r[0]=a*C+o*v+c*X+l*G,r[4]=a*R+o*E+c*q+l*ut,r[8]=a*O+o*W+c*z+l*ft,r[12]=a*Q+o*H+c*J+l*vt,r[1]=h*C+f*v+d*X+u*G,r[5]=h*R+f*E+d*q+u*ut,r[9]=h*O+f*W+d*z+u*ft,r[13]=h*Q+f*H+d*J+u*vt,r[2]=_*C+g*v+p*X+m*G,r[6]=_*R+g*E+p*q+m*ut,r[10]=_*O+g*W+p*z+m*ft,r[14]=_*Q+g*H+p*J+m*vt,r[3]=T*C+S*v+b*X+D*G,r[7]=T*R+S*E+b*q+D*ut,r[11]=T*O+S*W+b*z+D*ft,r[15]=T*Q+S*H+b*J+D*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+r*c*f-s*l*f-r*o*d+n*l*d+s*o*u-n*c*u)+g*(+e*c*u-e*l*d+r*a*d-s*a*u+s*l*h-r*c*h)+p*(+e*l*f-e*o*u-r*a*f+n*a*u+r*o*h-n*l*h)+m*(-s*o*h-e*c*f+e*o*d+s*a*f-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],_=t[12],g=t[13],p=t[14],m=t[15],T=f*p*l-g*d*l+g*c*u-o*p*u-f*c*m+o*d*m,S=_*d*l-h*p*l-_*c*u+a*p*u+h*c*m-a*d*m,b=h*g*l-_*f*l+_*o*u-a*g*u-h*o*m+a*f*m,D=_*f*c-h*g*c-_*o*d+a*g*d+h*o*p-a*f*p,C=e*T+n*S+s*b+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=T*R,t[1]=(g*d*r-f*p*r-g*s*u+n*p*u+f*s*m-n*d*m)*R,t[2]=(o*p*r-g*c*r+g*s*l-n*p*l-o*s*m+n*c*m)*R,t[3]=(f*c*r-o*d*r-f*s*l+n*d*l+o*s*u-n*c*u)*R,t[4]=S*R,t[5]=(h*p*r-_*d*r+_*s*u-e*p*u-h*s*m+e*d*m)*R,t[6]=(_*c*r-a*p*r-_*s*l+e*p*l+a*s*m-e*c*m)*R,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*u+e*c*u)*R,t[8]=b*R,t[9]=(_*f*r-h*g*r-_*n*u+e*g*u+h*n*m-e*f*m)*R,t[10]=(a*g*r-_*o*r+_*n*l-e*g*l-a*n*m+e*o*m)*R,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*u-e*o*u)*R,t[12]=D*R,t[13]=(h*g*s-_*f*s+_*n*d-e*g*d-h*n*p+e*f*p)*R,t[14]=(_*o*s-a*g*s-_*n*c+e*g*c+a*n*p-e*o*p)*R,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,_=r*f,g=a*h,p=a*f,m=o*f,T=c*l,S=c*h,b=c*f,D=n.x,C=n.y,R=n.z;return s[0]=(1-(g+m))*D,s[1]=(u+b)*D,s[2]=(_-S)*D,s[3]=0,s[4]=(u-b)*C,s[5]=(1-(d+m))*C,s[6]=(p+T)*C,s[7]=0,s[8]=(_+S)*R,s[9]=(p-T)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const l=1/r,h=1/a,f=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=f,Je.elements[9]*=f,Je.elements[10]*=f,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let u,_;if(o===Mn)u=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===or)u=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*l,u=(n+s)*h;let _,g;if(o===Mn)_=(a+r)*f,g=-2*f;else if(o===or)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new U,Je=new he,Ph=new U(0,0,0),Lh=new U(1,1,1),wn=new U,Ms=new U,Ve=new U,Fo=new he,ko=new hs;class an{constructor(t=0,e=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ko.setFromEuler(this),this.setFromQuaternion(ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const zo=new U,xi=new hs,mn=new he,Ss=new U,ji=new U,Nh=new U,Uh=new hs,Ho=new U(1,0,0),Go=new U(0,1,0),Vo=new U(0,0,1),Wo={type:"added"},Dh={type:"removed"},yi={type:"childadded",child:null},Dr={type:"childremoved",child:null};class Ee extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new U,e=new an,n=new hs,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ut}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Ho,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ho,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ji,Ss,this.up):mn.lookAt(Ss,ji,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(mn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,Nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Uh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new U(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new U,_n=new U,Or=new U,gn=new U,Mi=new U,Si=new U,Xo=new U,Br=new U,Fr=new U,kr=new U,zr=new de,Hr=new de,Gr=new de;class Xe{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),_n.subVectors(n,e),Or.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(_n),c=Qe.dot(Or),l=_n.dot(_n),h=_n.dot(Or),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return zr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),zr.fromBufferAttribute(t,e),Hr.fromBufferAttribute(t,n),Gr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zr,r.x),a.addScaledVector(Hr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),_n.subVectors(t,e),Qe.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Qe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,n),Si.subVectors(r,n),Br.subVectors(t,n);const c=Mi.dot(Br),l=Si.dot(Br);if(c<=0&&l<=0)return e.copy(n);Fr.subVectors(t,s);const h=Mi.dot(Fr),f=Si.dot(Fr);if(h>=0&&f<=h)return e.copy(s);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Mi,a);kr.subVectors(t,r);const u=Mi.dot(kr),_=Si.dot(kr);if(_>=0&&u<=_)return e.copy(r);const g=u*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Si,o);const p=h*_-u*f;if(p<=0&&f-h>=0&&u-_>=0)return Xo.subVectors(r,s),o=(f-h)/(f-h+(u-_)),e.copy(s).addScaledVector(Xo,o);const m=1/(p+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=vh(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vr(a,r,t+1/3),this.g=Vr(a,r,t),this.b=Vr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Jt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Oe(Re.r*255,0,255))*65536+Math.round(Oe(Re.g*255,0,255))*256+Math.round(Oe(Re.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=cn){Jt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Es);const n=br(Cn.h,Es.h,e),s=br(Cn.s,Es.s,e),r=br(Cn.l,Es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Dt;Dt.NAMES=cl;let Oh=0;class hi extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Bi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=pa,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ni extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new U,Ts=new kt;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class ll extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hl extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bh=0;const Ke=new he,Wr=new Ee,Ei=new U,We=new us,Ji=new us,Me=new U;class Ye extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rl(t)?hl:ll)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Wr.lookAt(t),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(We.min,Ji.min),We.expandByPoint(Me),Me.addVectors(We.max,Ji.max),We.expandByPoint(Me)):(We.expandByPoint(Ji.min),We.expandByPoint(Ji.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Me.fromBufferAttribute(o,l),c&&(Ei.fromBufferAttribute(t,l),Me.add(Ei)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new U,c[O]=new U;const l=new U,h=new U,f=new U,d=new kt,u=new kt,_=new kt,g=new U,p=new U;function m(O,Q,v){l.fromBufferAttribute(n,O),h.fromBufferAttribute(n,Q),f.fromBufferAttribute(n,v),d.fromBufferAttribute(r,O),u.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,v),h.sub(l),f.sub(l),u.sub(d),_.sub(d);const E=1/(u.x*_.y-_.x*u.y);isFinite(E)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-u.y).multiplyScalar(E),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(E),o[O].add(g),o[Q].add(g),o[v].add(g),c[O].add(p),c[Q].add(p),c[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,Q=T.length;O<Q;++O){const v=T[O],E=v.start,W=v.count;for(let H=E,X=E+W;H<X;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new U,b=new U,D=new U,C=new U;function R(O){D.fromBufferAttribute(s,O),C.copy(D);const Q=o[O];S.copy(Q),S.sub(D.multiplyScalar(D.dot(Q))).normalize(),b.crossVectors(C,Q);const E=b.dot(c[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,E)}for(let O=0,Q=T.length;O<Q;++O){const v=T[O],E=v.start,W=v.count;for(let H=E,X=E+W;H<X;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let d=0,u=t.count;d<u;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let u=0,_=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?u=c[g]*o.data.stride+o.offset:u=c[g]*h;for(let m=0;m<h;m++)d[_++]=l[u++]}return new rn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new he,Xn=new uo,bs=new gr,qo=new U,As=new U,Rs=new U,ws=new U,Xr=new U,Cs=new U,Ko=new U,Ps=new U;class Se extends Ee{constructor(t=new Ye,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Cs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Xr.fromBufferAttribute(f,t),a?Cs.addScaledVector(Xr,h):Cs.addScaledVector(Xr.sub(e),h))}e.add(Cs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(bs.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(bs,qo)===null||Xn.origin.distanceToSquared(qo)>(t.far-t.near)**2))&&(Yo.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(Yo),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=a[p.materialIndex],T=Math.max(p.start,u.start),S=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let b=T,D=S;b<D;b+=3){const C=o.getX(b),R=o.getX(b+1),O=o.getX(b+2);s=Ls(this,m,t,n,l,h,f,C,R,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=_,m=g;p<m;p+=3){const T=o.getX(p),S=o.getX(p+1),b=o.getX(p+2);s=Ls(this,a,t,n,l,h,f,T,S,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=a[p.materialIndex],T=Math.max(p.start,u.start),S=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let b=T,D=S;b<D;b+=3){const C=b,R=b+1,O=b+2;s=Ls(this,m,t,n,l,h,f,C,R,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let p=_,m=g;p<m;p+=3){const T=p,S=p+1,b=p+2;s=Ls(this,a,t,n,l,h,f,T,S,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Fh(i,t,e,n,s,r,a,o){let c;if(t.side===ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===kn,o),c===null)return null;Ps.copy(o),Ps.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ps);return l<e.near||l>e.far?null:{distance:l,point:Ps.clone(),object:i}}function Ls(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,As),i.getVertexPosition(c,Rs),i.getVertexPosition(l,ws);const h=Fh(i,t,e,n,As,Rs,ws,Ko);if(h){const f=new U;Xe.getBarycoord(Ko,As,Rs,ws,f),s&&(h.uv=Xe.getInterpolatedAttribute(s,o,c,l,f,new kt)),r&&(h.uv1=Xe.getInterpolatedAttribute(r,o,c,l,f,new kt)),a&&(h.normal=Xe.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};Xe.getNormal(As,Rs,ws,d.normal),h.face=d,h.barycoord=f}return h}class En extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,u=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(f,2));function _(g,p,m,T,S,b,D,C,R,O,Q){const v=b/R,E=D/O,W=b/2,H=D/2,X=C/2,q=R+1,z=O+1;let J=0,G=0;const ut=new U;for(let ft=0;ft<z;ft++){const vt=ft*E-H;for(let Bt=0;Bt<q;Bt++){const zt=Bt*v-W;ut[g]=zt*T,ut[p]=vt*S,ut[m]=X,l.push(ut.x,ut.y,ut.z),ut[g]=0,ut[p]=0,ut[m]=C>0?1:-1,h.push(ut.x,ut.y,ut.z),f.push(Bt/R),f.push(1-ft/O),J+=1}}for(let ft=0;ft<O;ft++)for(let vt=0;vt<R;vt++){const Bt=d+vt+q*ft,zt=d+vt+q*(ft+1),Y=d+(vt+1)+q*(ft+1),et=d+(vt+1)+q*ft;c.push(Bt,zt,et),c.push(zt,Y,et),G+=6}o.addGroup(u,G,Q),u+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function kh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ul(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const zh={clone:Xi,merge:Pe};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fl extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new U,$o=new kt,Zo=new kt;class $e extends fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,$o,Zo),e.subVectors(Zo,$o)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,bi=1;class Vh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Ti,bi,t,e);s.layers=this.layers,this.add(s);const r=new $e(Ti,bi,t,e);r.layers=this.layers,this.add(r);const a=new $e(Ti,bi,t,e);a.layers=this.layers,this.add(a);const o=new $e(Ti,bi,t,e);o.layers=this.layers,this.add(o);const c=new $e(Ti,bi,t,e);c.layers=this.layers,this.add(c);const l=new $e(Ti,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class dl extends Le{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wh extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:On});r.uniforms.tEquirect.value=e;const a=new Se(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=nn),new Vh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Yr=new U,Xh=new U,Yh=new Ut;class Zn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Yr.subVectors(n,e).cross(Xh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yh.getNormalMatrix(t),s=this.coplanarPoint(Yr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new gr,Is=new U;class po{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],u=s[8],_=s[9],g=s[10],p=s[11],m=s[12],T=s[13],S=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,p-u,b-m).normalize(),n[1].setComponents(c+r,d+l,p+u,b+m).normalize(),n[2].setComponents(c+a,d+h,p+_,b+T).normalize(),n[3].setComponents(c-a,d-h,p-_,b-T).normalize(),n[4].setComponents(c-o,d-f,p-g,b-S).normalize(),e===Mn)n[5].setComponents(c+o,d+f,p+g,b+S).normalize();else if(e===or)n[5].setComponents(o,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Is.x=s.normal.x>0?t.max.x:t.min.x,Is.y=s.normal.y>0?t.max.y:t.min.y,Is.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qh(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<f.length;u++){const _=f[d],g=f[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let u=0,_=f.length;u<_;u++){const g=f[u];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class ai extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const T=m*d-a;for(let S=0;S<l;S++){const b=S*f-r;_.push(b,-T,0),g.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){const S=T+l*m,b=T+l*(m+1),D=T+1+l*(m+1),C=T+1+l*m;u.push(S,b,C),u.push(b,D,C)}this.setIndex(u),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
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
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu=`#ifdef USE_BATCHING
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
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ou=`#ifdef USE_IRIDESCENCE
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
#endif`,cu=`#ifdef USE_BUMPMAP
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gu=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xu=`vec3 transformedNormal = objectNormal;
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
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`
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
}`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wu=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
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
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,Yu=`struct PhysicalMaterial {
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
}`,qu=`
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
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sf=`#if defined( USE_POINTS_UV )
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
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
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
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nf=`float getShadowMask() {
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
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,Ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`#include <common>
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
}`,ed=`#if DEPTH_PACKING == 3200
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
}`,nd=`#define DISTANCE
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
}`,id=`#define DISTANCE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`uniform float scale;
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
}`,od=`uniform vec3 diffuse;
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
}`,cd=`#include <common>
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
}`,ld=`uniform vec3 diffuse;
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
}`,hd=`#define LAMBERT
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
}`,ud=`#define LAMBERT
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
}`,fd=`#define MATCAP
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
}`,dd=`#define MATCAP
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
}`,pd=`#define NORMAL
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
}`,md=`#define NORMAL
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
}`,_d=`#define PHONG
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
}`,gd=`#define PHONG
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
}`,vd=`#define STANDARD
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
}`,xd=`#define STANDARD
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
}`,yd=`#define TOON
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
}`,Md=`#define TOON
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
}`,Sd=`uniform float size;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,Td=`#include <common>
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
}`,bd=`uniform vec3 color;
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
}`,Ad=`uniform float rotation;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Kh,alphahash_pars_fragment:$h,alphamap_fragment:Zh,alphamap_pars_fragment:jh,alphatest_fragment:Jh,alphatest_pars_fragment:Qh,aomap_fragment:tu,aomap_pars_fragment:eu,batching_pars_vertex:nu,batching_vertex:iu,begin_vertex:su,beginnormal_vertex:ru,bsdfs:au,iridescence_fragment:ou,bumpmap_pars_fragment:cu,clipping_planes_fragment:lu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:fu,color_fragment:du,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:_u,common:gu,cube_uv_reflection_fragment:vu,defaultnormal_vertex:xu,displacementmap_pars_vertex:yu,displacementmap_vertex:Mu,emissivemap_fragment:Su,emissivemap_pars_fragment:Eu,colorspace_fragment:Tu,colorspace_pars_fragment:bu,envmap_fragment:Au,envmap_common_pars_fragment:Ru,envmap_pars_fragment:wu,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:zu,envmap_vertex:Pu,fog_vertex:Lu,fog_pars_vertex:Iu,fog_fragment:Nu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Ou,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:Fu,lights_pars_begin:ku,lights_toon_fragment:Hu,lights_toon_pars_fragment:Gu,lights_phong_fragment:Vu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:Yu,lights_fragment_begin:qu,lights_fragment_maps:Ku,lights_fragment_end:$u,logdepthbuf_fragment:Zu,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Qu,map_fragment:tf,map_pars_fragment:ef,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:af,morphinstance_vertex:of,morphcolor_vertex:cf,morphnormal_vertex:lf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:ff,normal_fragment_maps:df,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:_f,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:Ef,premultiplied_alpha_fragment:Tf,project_vertex:bf,dithering_fragment:Af,dithering_pars_fragment:Rf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:Lf,shadowmap_vertex:If,shadowmask_pars_fragment:Nf,skinbase_vertex:Uf,skinning_pars_vertex:Df,skinning_vertex:Of,skinnormal_vertex:Bf,specularmap_fragment:Ff,specularmap_pars_fragment:kf,tonemapping_fragment:zf,tonemapping_pars_fragment:Hf,transmission_fragment:Gf,transmission_pars_fragment:Vf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:Yf,worldpos_vertex:qf,background_vert:Kf,background_frag:$f,backgroundCube_vert:Zf,backgroundCube_frag:jf,cube_vert:Jf,cube_frag:Qf,depth_vert:td,depth_frag:ed,distanceRGBA_vert:nd,distanceRGBA_frag:id,equirect_vert:sd,equirect_frag:rd,linedashed_vert:ad,linedashed_frag:od,meshbasic_vert:cd,meshbasic_frag:ld,meshlambert_vert:hd,meshlambert_frag:ud,meshmatcap_vert:fd,meshmatcap_frag:dd,meshnormal_vert:pd,meshnormal_frag:md,meshphong_vert:_d,meshphong_frag:gd,meshphysical_vert:vd,meshphysical_frag:xd,meshtoon_vert:yd,meshtoon_frag:Md,points_vert:Sd,points_frag:Ed,shadow_vert:Td,shadow_frag:bd,sprite_vert:Ad,sprite_frag:Rd},st={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},hn={basic:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([st.lights,st.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};hn.physical={uniforms:Pe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Ns={r:0,b:0,g:0},qn=new an,wd=new he;function Cd(i,t,e,n,s,r,a){const o=new Dt(0);let c=r===!0?0:1,l,h,f=null,d=0,u=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function g(T){let S=!1;const b=_(T);b===null?m(o,c):b&&b.isColor&&(m(b,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,S){const b=_(S);b&&(b.isCubeTexture||b.mapping===mr)?(h===void 0&&(h=new Se(new En(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Xi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qn.copy(S.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wd.makeRotationFromEuler(qn)),h.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ce,(f!==b||d!==b.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,u=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Se(new ai(2,2),new zn({name:"BackgroundMaterial",uniforms:Xi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,S){T.getRGB(Ns,ul(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(o,c)},render:g,addToRenderList:p}}function Pd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,E,W,H,X){let q=!1;const z=f(H,W,E);r!==z&&(r=z,l(r.object)),q=u(v,H,W,X),q&&_(v,H,W,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(v,E,W,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,E,W){const H=W.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let q=X[E.id];q===void 0&&(q={},X[E.id]=q);let z=q[H];return z===void 0&&(z=d(c()),q[H]=z),z}function d(v){const E=[],W=[],H=[];for(let X=0;X<e;X++)E[X]=0,W[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:H,object:v,attributes:{},index:null}}function u(v,E,W,H){const X=r.attributes,q=E.attributes;let z=0;const J=W.getAttributes();for(const G in J)if(J[G].location>=0){const ft=X[G];let vt=q[G];if(vt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;z++}return r.attributesNum!==z||r.index!==H}function _(v,E,W,H){const X={},q=E.attributes;let z=0;const J=W.getAttributes();for(const G in J)if(J[G].location>=0){let ft=q[G];ft===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor));const vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),X[G]=vt,z++}r.attributes=X,r.attributesNum=z,r.index=H}function g(){const v=r.newAttributes;for(let E=0,W=v.length;E<W;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){const W=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;W[v]=1,H[v]===0&&(i.enableVertexAttribArray(v),H[v]=1),X[v]!==E&&(i.vertexAttribDivisor(v,E),X[v]=E)}function T(){const v=r.newAttributes,E=r.enabledAttributes;for(let W=0,H=E.length;W<H;W++)E[W]!==v[W]&&(i.disableVertexAttribArray(W),E[W]=0)}function S(v,E,W,H,X,q,z){z===!0?i.vertexAttribIPointer(v,E,W,X,q):i.vertexAttribPointer(v,E,W,H,X,q)}function b(v,E,W,H){g();const X=H.attributes,q=W.getAttributes(),z=E.defaultAttributeValues;for(const J in q){const G=q[J];if(G.location>=0){let ut=X[J];if(ut===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){const ft=ut.normalized,vt=ut.itemSize,Bt=t.get(ut);if(Bt===void 0)continue;const zt=Bt.buffer,Y=Bt.type,et=Bt.bytesPerElement,xt=Y===i.INT||Y===i.UNSIGNED_INT||ut.gpuType===so;if(ut.isInterleavedBufferAttribute){const dt=ut.data,Lt=dt.stride,bt=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<G.locationSize;Vt++)m(G.location+Vt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Vt=0;Vt<G.locationSize;Vt++)p(G.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Vt=0;Vt<G.locationSize;Vt++)S(G.location+Vt,vt/G.locationSize,Y,ft,Lt*et,(bt+vt/G.locationSize*Vt)*et,xt)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)m(G.location+dt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let dt=0;dt<G.locationSize;dt++)S(G.location+dt,vt/G.locationSize,Y,ft,vt*et,vt/G.locationSize*dt*et,xt)}}else if(z!==void 0){const ft=z[J];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(G.location,ft);break;case 3:i.vertexAttrib3fv(G.location,ft);break;case 4:i.vertexAttrib4fv(G.location,ft);break;default:i.vertexAttrib1fv(G.location,ft)}}}}T()}function D(){O();for(const v in n){const E=n[v];for(const W in E){const H=E[W];for(const X in H)h(H[X].object),delete H[X];delete E[W]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const W in E){const H=E[W];for(const X in H)h(H[X].object),delete H[X];delete E[W]}delete n[v.id]}function R(v){for(const E in n){const W=n[E];if(W[v.id]===void 0)continue;const H=W[v.id];for(const X in H)h(H[X].object),delete H[X];delete W[v.id]}}function O(){Q(),a=!0,r!==s&&(r=s,l(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:Q,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:T}}function Ld(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let u=0;for(let _=0;_<f;_++)u+=h[_];e.update(u,n,1)}function c(l,h,f,d){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<l.length;_++)a(l[_],h[_],d[_]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Id(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const O=R===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!O)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:D,maxSamples:C}}function Nd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Zn,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{const T=r?0:n,S=T*4;let b=m.clippingState||null;c.value=b,b=h(_,d,S,u);for(let D=0;D!==S;++D)b[D]=e[D];m.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=u+g*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,b=u;S!==g;++S,b+=4)a.copy(f[S]).applyMatrix4(T,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Ud(i){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=Hi:o===Ea&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ea)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Wh(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ml extends fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,jo=[.125,.215,.35,.446,.526,.582],Qn=20,qr=new ml,Jo=new Dt;let Kr=null,$r=0,Zr=0,jr=!1;const jn=(1+Math.sqrt(5))/2,Ai=1/jn,Qo=[new U(-jn,Ai,0),new U(jn,Ai,0),new U(-Ai,0,jn),new U(Ai,0,jn),new U(0,jn,-Ai),new U(0,jn,Ai),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Kr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,$r,Zr),this._renderer.xr.enabled=jr,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ls,format:sn,colorSpace:Hn,depthBuffer:!1},s=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dd(r)),this._blurMaterial=Od(r,t,e)}return s}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,s){const o=new $e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Jo),h.toneMapping=Bn,h.autoClear=!1;const u=new ni({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),_=new Se(new En,u);let g=!1;const p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,g=!0):(u.color.copy(Jo),g=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):T===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const S=this._cubeSize;Us(s,T*S,m>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qo[(s-r-1)%Qo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Se(this._lodPlanes[s],l),d=l.uniforms,u=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Qn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Qn;p>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const m=[];let T=0;for(let R=0;R<Qn;++R){const O=R/g,Q=Math.exp(-O*O/2);m.push(Q),R===0?T+=Q:R<p&&(T+=2*Q)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const b=this._sizeLods[s],D=3*b*(s>S-Di?s-S+Di:0),C=4*(this._cubeSize-b);Us(e,D,C,3*b,2*b),c.setRenderTarget(e),c.render(f,qr)}}function Dd(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Di?c=jo[a-i+Di-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,_=6,g=3,p=2,m=1,T=new Float32Array(g*_*u),S=new Float32Array(p*_*u),b=new Float32Array(m*_*u);for(let C=0;C<u;C++){const R=C%3*2/3-1,O=C>2?0:-1,Q=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];T.set(Q,g*_*C),S.set(d,p*_*C);const v=[C,C,C,C,C,C];b.set(v,m*_*C)}const D=new Ye;D.setAttribute("position",new rn(T,g)),D.setAttribute("uv",new rn(S,p)),D.setAttribute("faceIndex",new rn(b,m)),t.push(D),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ec(i,t,e){const n=new ri(i,t,e);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Od(i,t,e){const n=new Float32Array(Qn),s=new U(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mo(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function nc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function ic(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function mo(){return`

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
	`}function Bd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sa||c===Ea,h=c===Hi||c===Gi;if(l||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new tc(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new tc(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kd(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];const u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const u=f.morphAttributes;for(const _ in u){const g=u[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function l(f){const d=[],u=f.index,_=f.attributes.position;let g=0;if(u!==null){const T=u.array;g=u.version;for(let S=0,b=T.length;S<b;S+=3){const D=T[S+0],C=T[S+1],R=T[S+2];d.push(D,C,C,R,R,D)}}else if(_!==void 0){const T=_.array;g=_.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const D=S+0,C=S+1,R=S+2;d.push(D,C,C,R,R,D)}}else return;const p=new(rl(d)?hl:ll)(d,1);p.version=g;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function zd(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,_){_!==0&&(i.drawElementsInstanced(n,u,r,d*a,_),e.update(u,n,_))}function h(d,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=u[m];e.update(p,n,1)}function f(d,u,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/a,u[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,g,0,_);let m=0;for(let T=0;T<_;T++)m+=u[T];for(let T=0;T<g.length;T++)e.update(m,n,g[T])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Hd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gd(i,t,e){const n=new WeakMap,s=new de;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let v=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var u=v;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),p===!0&&(b=3);let D=o.attributes.position.count*b,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*C*4*f),O=new ol(R,D,C,f);O.type=yn,O.needsUpdate=!0;const Q=b*4;for(let E=0;E<f;E++){const W=m[E],H=T[E],X=S[E],q=D*C*4*E;for(let z=0;z<W.count;z++){const J=z*Q;_===!0&&(s.fromBufferAttribute(W,z),R[q+J+0]=s.x,R[q+J+1]=s.y,R[q+J+2]=s.z,R[q+J+3]=0),g===!0&&(s.fromBufferAttribute(H,z),R[q+J+4]=s.x,R[q+J+5]=s.y,R[q+J+6]=s.z,R[q+J+7]=0),p===!0&&(s.fromBufferAttribute(X,z),R[q+J+8]=s.x,R[q+J+9]=s.y,R[q+J+10]=s.z,R[q+J+11]=X.itemSize===4?s.w:1)}}d={count:f,texture:O,size:new kt(D,C)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vd(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class _l extends Le{constructor(t,e,n,s,r,a,o,c,l,h=Fi){if(h!==Fi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fi&&(n=si),n===void 0&&h===Wi&&(n=Vi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gl=new Le,sc=new _l(1,1),vl=new ol,xl=new wh,yl=new dl,rc=[],ac=[],oc=new Float32Array(16),cc=new Float32Array(9),lc=new Float32Array(4);function qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vr(i,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),ye(e,n)}}function $d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),ye(e,n)}}function Zd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;oc.set(n),i.uniformMatrix4fv(this.addr,!1,oc),ye(e,n)}}function jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=sl,r=sc):r=gl,e.setTexture2D(t||r,s)}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xl,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yl,s)}function cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vl,s)}function lp(i){switch(i){case 5126:return Wd;case 35664:return Xd;case 35665:return Yd;case 35666:return qd;case 35674:return Kd;case 35675:return $d;case 35676:return Zd;case 5124:case 35670:return jd;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return cp}}function hp(i,t){i.uniform1fv(this.addr,t)}function up(i,t){const e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function fp(i,t){const e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function dp(i,t){const e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function pp(i,t){const e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mp(i,t){const e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _p(i,t){const e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gp(i,t){i.uniform1iv(this.addr,t)}function vp(i,t){i.uniform2iv(this.addr,t)}function xp(i,t){i.uniform3iv(this.addr,t)}function yp(i,t){i.uniform4iv(this.addr,t)}function Mp(i,t){i.uniform1uiv(this.addr,t)}function Sp(i,t){i.uniform2uiv(this.addr,t)}function Ep(i,t){i.uniform3uiv(this.addr,t)}function Tp(i,t){i.uniform4uiv(this.addr,t)}function bp(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||gl,r[a])}function Ap(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xl,r[a])}function Rp(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yl,r[a])}function wp(i,t,e){const n=this.cache,s=t.length,r=vr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vl,r[a])}function Cp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return fp;case 35666:return dp;case 35674:return pp;case 35675:return mp;case 35676:return _p;case 5124:case 35670:return gp;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return wp}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lp(e.type)}}class Lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cp(e.type)}}class Ip{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function hc(i,t){i.seq.push(t),i.map[t.id]=t}function Np(i,t,e){const n=i.name,s=n.length;for(Jr.lastIndex=0;;){const r=Jr.exec(n),a=Jr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hc(e,l===void 0?new Pp(o,i,t):new Lp(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ip(o),hc(e,f)),e=f}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Np(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function uc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Up=37297;let Dp=0;function Op(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Bp(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===ar&&e===rr?n="LinearDisplayP3ToLinearSRGB":t===rr&&e===ar&&(n="LinearSRGBToLinearDisplayP3"),i){case Hn:case _r:return[n,"LinearTransferOETF"];case cn:case ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Op(i.getShaderSource(t),a)}else return s}function Fp(i,t){const e=Bp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kp(i,t){let e;switch(t){case th:e="Linear";break;case eh:e="Reinhard";break;case nh:e="Cineon";break;case ih:e="ACESFilmic";break;case rh:e="AgX";break;case ah:e="Neutral";break;case sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new U;function zp(){Jt.getLuminanceCoefficients(Ds);const i=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function Gp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function rs(i){return i!==""}function dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(Wp,Yp)}const Xp=new Map;function Yp(i,t){let e=Nt[t];if(e===void 0){const n=Xp.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(i){return i.replace(qp,Kp)}function Kp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _c(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function $p(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case io:t="ENVMAP_BLENDING_MULTIPLY";break;case Jl:t="ENVMAP_BLENDING_MIX";break;case Ql:t="ENVMAP_BLENDING_ADD";break}return t}function Qp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$p(e),l=Zp(e),h=jp(e),f=Jp(e),d=Qp(e),u=Hp(e),_=Gp(r),g=s.createProgram();let p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),m.length>0&&(m+=`
`)):(p=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),m=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Fp("linearToOutputTexel",e.outputColorSpace),zp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=to(a),a=dc(a,e),a=pc(a,e),o=to(o),o=dc(o,e),o=pc(o,e),a=mc(a),o=mc(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=T+p+a,b=T+m+o,D=uc(s,s.VERTEX_SHADER,S),C=uc(s,s.FRAGMENT_SHADER,b);s.attachShader(g,D),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(E){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(g).trim(),H=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(C).trim();let q=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,D,C);else{const J=fc(s,D,"vertex"),G=fc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+J+`
`+G)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||X==="")&&(z=!1);z&&(E.diagnostics={runnable:q,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(D),s.deleteShader(C),O=new nr(s,g),Q=Vp(s,g)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let Q;this.getAttributes=function(){return Q===void 0&&R(this),Q};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Up)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=C,this}let em=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new im(t),e.set(t,n)),n}}class im{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}}function sm(i,t,e,n,s,r,a){const o=new fo,c=new nm,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,u=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,E,W,H,X){const q=H.fog,z=X.geometry,J=v.isMeshStandardMaterial?H.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),ut=G&&G.mapping===mr?G.image.height:null,ft=g[v.type];v.precision!==null&&(_=s.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const vt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Bt=vt!==void 0?vt.length:0;let zt=0;z.morphAttributes.position!==void 0&&(zt=1),z.morphAttributes.normal!==void 0&&(zt=2),z.morphAttributes.color!==void 0&&(zt=3);let Y,et,xt,dt;if(ft){const Ne=hn[ft];Y=Ne.vertexShader,et=Ne.fragmentShader}else Y=v.vertexShader,et=v.fragmentShader,c.update(v),xt=c.getVertexShaderID(v),dt=c.getFragmentShaderID(v);const Lt=i.getRenderTarget(),bt=X.isInstancedMesh===!0,Vt=X.isBatchedMesh===!0,te=!!v.map,Wt=!!v.matcap,P=!!G,ze=!!v.aoMap,Ht=!!v.lightMap,qt=!!v.bumpMap,Rt=!!v.normalMap,re=!!v.displacementMap,Pt=!!v.emissiveMap,A=!!v.metalnessMap,y=!!v.roughnessMap,B=v.anisotropy>0,$=v.clearcoat>0,tt=v.dispersion>0,K=v.iridescence>0,Mt=v.sheen>0,at=v.transmission>0,pt=B&&!!v.anisotropyMap,Kt=$&&!!v.clearcoatMap,nt=$&&!!v.clearcoatNormalMap,mt=$&&!!v.clearcoatRoughnessMap,wt=K&&!!v.iridescenceMap,Ct=K&&!!v.iridescenceThicknessMap,_t=Mt&&!!v.sheenColorMap,Gt=Mt&&!!v.sheenRoughnessMap,It=!!v.specularMap,ie=!!v.specularColorMap,L=!!v.specularIntensityMap,lt=at&&!!v.transmissionMap,V=at&&!!v.thicknessMap,j=!!v.gradientMap,ot=!!v.alphaMap,ht=v.alphaTest>0,Xt=!!v.alphaHash,me=!!v.extensions;let Ie=Bn;v.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const $t={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:et,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Vt,batchingColor:Vt&&X._colorsTexture!==null,instancing:bt,instancingColor:bt&&X.instanceColor!==null,instancingMorph:bt&&X.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Hn,alphaToCoverage:!!v.alphaToCoverage,map:te,matcap:Wt,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:ut,aoMap:ze,lightMap:Ht,bumpMap:qt,normalMap:Rt,displacementMap:u&&re,emissiveMap:Pt,normalMapObjectSpace:Rt&&v.normalMapType===hh,normalMapTangentSpace:Rt&&v.normalMapType===il,metalnessMap:A,roughnessMap:y,anisotropy:B,anisotropyMap:pt,clearcoat:$,clearcoatMap:Kt,clearcoatNormalMap:nt,clearcoatRoughnessMap:mt,dispersion:tt,iridescence:K,iridescenceMap:wt,iridescenceThicknessMap:Ct,sheen:Mt,sheenColorMap:_t,sheenRoughnessMap:Gt,specularMap:It,specularColorMap:ie,specularIntensityMap:L,transmission:at,transmissionMap:lt,thicknessMap:V,gradientMap:j,opaque:v.transparent===!1&&v.blending===Bi&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Xt,combine:v.combine,mapUv:te&&p(v.map.channel),aoMapUv:ze&&p(v.aoMap.channel),lightMapUv:Ht&&p(v.lightMap.channel),bumpMapUv:qt&&p(v.bumpMap.channel),normalMapUv:Rt&&p(v.normalMap.channel),displacementMapUv:re&&p(v.displacementMap.channel),emissiveMapUv:Pt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:pt&&p(v.anisotropyMap.channel),clearcoatMapUv:Kt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&p(v.sheenRoughnessMap.channel),specularMapUv:It&&p(v.specularMap.channel),specularColorMapUv:ie&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:lt&&p(v.transmissionMap.channel),thicknessMapUv:V&&p(v.thicknessMap.channel),alphaMapUv:ot&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Rt||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(te||ot),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:te&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===ke,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&v.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function T(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)E.push(W),E.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(S(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function S(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){const E=g[v.type];let W;if(E){const H=hn[E];W=zh.clone(H.uniforms)}else W=v.uniforms;return W}function C(v,E){let W;for(let H=0,X=h.length;H<X;H++){const q=h[H];if(q.cacheKey===E){W=q,++W.usedTimes;break}}return W===void 0&&(W=new tm(i,E,v,r),h.push(W)),W}function R(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function O(v){c.remove(v)}function Q(){c.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:D,acquireProgram:C,releaseProgram:R,releaseShaderCache:O,programs:h,dispose:Q}}function rm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function am(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,u,_,g,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),t++,m}function o(f,d,u,_,g,p){const m=a(f,d,u,_,g,p);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):e.push(m)}function c(f,d,u,_,g,p){const m=a(f,d,u,_,g,p);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):e.unshift(m)}function l(f,d){e.length>1&&e.sort(f||am),n.length>1&&n.sort(d||gc),s.length>1&&s.sort(d||gc)}function h(){for(let f=t,d=i.length;f<d;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function om(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new vc,i.set(n,[a])):s>=r.length?(a=new vc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Dt};break;case"SpotLight":e={position:new U,direction:new U,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hm=0;function um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fm(i){const t=new cm,e=lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new he,a=new he;function o(l){let h=0,f=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let u=0,_=0,g=0,p=0,m=0,T=0,S=0,b=0,D=0,C=0,R=0;l.sort(um);for(let Q=0,v=l.length;Q<v;Q++){const E=l[Q],W=E.color,H=E.intensity,X=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=W.r*H,f+=W.g*H,d+=W.b*H;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],H);R++}else if(E.isDirectionalLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,G=e.get(E);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=E.shadow.matrix,T++}n.directional[u]=z,u++}else if(E.isSpotLight){const z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(W).multiplyScalar(H),z.distance=X,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[g]=z;const J=E.shadow;if(E.map&&(n.spotLightMap[D]=E.map,D++,J.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[g]=J.matrix,E.castShadow){const G=e.get(E);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=q,b++}g++}else if(E.isRectAreaLight){const z=t.get(E);z.color.copy(W).multiplyScalar(H),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=z,p++}else if(E.isPointLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const J=E.shadow,G=e.get(E);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=E.shadow.matrix,S++}n.point[_]=z,_++}else if(E.isHemisphereLight){const z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(H),z.groundColor.copy(E.groundColor).multiplyScalar(H),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==u||O.pointLength!==_||O.spotLength!==g||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==T||O.numPointShadows!==S||O.numSpotShadows!==b||O.numSpotMaps!==D||O.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,O.directionalLength=u,O.pointLength=_,O.spotLength=g,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=T,O.numPointShadows=S,O.numSpotShadows=b,O.numSpotMaps=D,O.numLightProbes=R,n.version=hm++)}function c(l,h){let f=0,d=0,u=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){const S=l[m];if(S.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(S.isSpotLight){const b=n.spot[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(S.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function xc(i){const t=new fm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function dm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new xc(i),t.set(s,[o])):r>=a.length?(o=new xc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class pm extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mm extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
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
}`;function vm(i,t,e){let n=new po;const s=new kt,r=new kt,a=new de,o=new pm({depthPacking:lh}),c=new mm,l={},h=e.maxTextureSize,f={[kn]:ke,[ke]:kn,[Be]:Be},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:_m,fragmentShader:gm}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const _=new Ye;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Se(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let m=this.type;this.render=function(C,R,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const Q=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),W=i.state;W.setBlending(On),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=m!==xn&&this.type===xn,X=m===xn&&this.type!==xn;for(let q=0,z=C.length;q<z;q++){const J=C[q],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ut=G.getFrameExtents();if(s.multiply(ut),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,G.mapSize.y=r.y)),G.map===null||H===!0||X===!0){const vt=this.type!==xn?{minFilter:Fe,magFilter:Fe}:{};G.map!==null&&G.map.dispose(),G.map=new ri(s.x,s.y,vt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ft=G.getViewportCount();for(let vt=0;vt<ft;vt++){const Bt=G.getViewport(vt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),W.viewport(a),G.updateMatrices(J,vt),n=G.getFrustum(),b(R,O,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===xn&&T(G,O),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(Q,v,E)};function T(C,R){const O=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,O,d,g,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,O,u,g,null)}function S(C,R,O,Q){let v=null;const E=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)v=E;else if(v=O.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=v.uuid,H=R.uuid;let X=l[W];X===void 0&&(X={},l[W]=X);let q=X[H];q===void 0&&(q=v.clone(),X[H]=q,R.addEventListener("dispose",D)),v=q}if(v.visible=R.visible,v.wireframe=R.wireframe,Q===xn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:f[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=i.properties.get(v);W.light=O}return v}function b(C,R,O,Q,v){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===xn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const H=t.update(C),X=C.material;if(Array.isArray(X)){const q=H.groups;for(let z=0,J=q.length;z<J;z++){const G=q[z],ut=X[G.materialIndex];if(ut&&ut.visible){const ft=S(C,ut,Q,v);C.onBeforeShadow(i,C,R,O,H,ft,G),i.renderBufferDirect(O,null,H,ft,C,G),C.onAfterShadow(i,C,R,O,H,ft,G)}}}else if(X.visible){const q=S(C,X,Q,v);C.onBeforeShadow(i,C,R,O,H,q,null),i.renderBufferDirect(O,null,H,q,C,null),C.onAfterShadow(i,C,R,O,H,q,null)}}const W=C.children;for(let H=0,X=W.length;H<X;H++)b(W[H],R,O,Q,v)}function D(C){C.target.removeEventListener("dispose",D);for(const O in l){const Q=l[O],v=C.target.uuid;v in Q&&(Q[v].dispose(),delete Q[v])}}}const xm={[ma]:_a,[ga]:ya,[va]:Ma,[zi]:xa,[_a]:ma,[ya]:ga,[Ma]:va,[xa]:zi};function ym(i){function t(){let L=!1;const lt=new de;let V=null;const j=new de(0,0,0,0);return{setMask:function(ot){V!==ot&&!L&&(i.colorMask(ot,ot,ot,ot),V=ot)},setLocked:function(ot){L=ot},setClear:function(ot,ht,Xt,me,Ie){Ie===!0&&(ot*=me,ht*=me,Xt*=me),lt.set(ot,ht,Xt,me),j.equals(lt)===!1&&(i.clearColor(ot,ht,Xt,me),j.copy(lt))},reset:function(){L=!1,V=null,j.set(-1,0,0,0)}}}function e(){let L=!1,lt=!1,V=null,j=null,ot=null;return{setReversed:function(ht){lt=ht},setTest:function(ht){ht?xt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(ht){V!==ht&&!L&&(i.depthMask(ht),V=ht)},setFunc:function(ht){if(lt&&(ht=xm[ht]),j!==ht){switch(ht){case ma:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ht}},setLocked:function(ht){L=ht},setClear:function(ht){ot!==ht&&(i.clearDepth(ht),ot=ht)},reset:function(){L=!1,V=null,j=null,ot=null}}}function n(){let L=!1,lt=null,V=null,j=null,ot=null,ht=null,Xt=null,me=null,Ie=null;return{setTest:function($t){L||($t?xt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function($t){lt!==$t&&!L&&(i.stencilMask($t),lt=$t)},setFunc:function($t,Ne,fn){(V!==$t||j!==Ne||ot!==fn)&&(i.stencilFunc($t,Ne,fn),V=$t,j=Ne,ot=fn)},setOp:function($t,Ne,fn){(ht!==$t||Xt!==Ne||me!==fn)&&(i.stencilOp($t,Ne,fn),ht=$t,Xt=Ne,me=fn)},setLocked:function($t){L=$t},setClear:function($t){Ie!==$t&&(i.clearStencil($t),Ie=$t)},reset:function(){L=!1,lt=null,V=null,j=null,ot=null,ht=null,Xt=null,me=null,Ie=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,d=[],u=null,_=!1,g=null,p=null,m=null,T=null,S=null,b=null,D=null,C=new Dt(0,0,0),R=0,O=!1,Q=null,v=null,E=null,W=null,H=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=z>=2);let G=null,ut={};const ft=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Bt=new de().fromArray(ft),zt=new de().fromArray(vt);function Y(L,lt,V,j){const ot=new Uint8Array(4),ht=i.createTexture();i.bindTexture(L,ht),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<V;Xt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(lt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ht}const et={};et[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),r.setFunc(zi),Ht(!1),qt(wo),xt(i.CULL_FACE),P(On);function xt(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function dt(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Lt(L,lt){return h[L]!==lt?(i.bindFramebuffer(L,lt),h[L]=lt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function bt(L,lt){let V=d,j=!1;if(L){V=f.get(lt),V===void 0&&(V=[],f.set(lt,V));const ot=L.textures;if(V.length!==ot.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Xt=ot.length;ht<Xt;ht++)V[ht]=i.COLOR_ATTACHMENT0+ht;V.length=ot.length,j=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,j=!0);j&&i.drawBuffers(V)}function Vt(L){return u!==L?(i.useProgram(L),u=L,!0):!1}const te={[Jn]:i.FUNC_ADD,[Dl]:i.FUNC_SUBTRACT,[Ol]:i.FUNC_REVERSE_SUBTRACT};te[Bl]=i.MIN,te[Fl]=i.MAX;const Wt={[kl]:i.ZERO,[zl]:i.ONE,[Hl]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[ql]:i.SRC_ALPHA_SATURATE,[Xl]:i.DST_COLOR,[Vl]:i.DST_ALPHA,[Gl]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[Yl]:i.ONE_MINUS_DST_COLOR,[Wl]:i.ONE_MINUS_DST_ALPHA,[Kl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[Zl]:i.CONSTANT_ALPHA,[jl]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,lt,V,j,ot,ht,Xt,me,Ie,$t){if(L===On){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(xt(i.BLEND),_=!0),L!==Ul){if(L!==g||$t!==O){if((p!==Jn||S!==Jn)&&(i.blendEquation(i.FUNC_ADD),p=Jn,S=Jn),$t)switch(L){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,T=null,b=null,D=null,C.set(0,0,0),R=0,g=L,O=$t}return}ot=ot||lt,ht=ht||V,Xt=Xt||j,(lt!==p||ot!==S)&&(i.blendEquationSeparate(te[lt],te[ot]),p=lt,S=ot),(V!==m||j!==T||ht!==b||Xt!==D)&&(i.blendFuncSeparate(Wt[V],Wt[j],Wt[ht],Wt[Xt]),m=V,T=j,b=ht,D=Xt),(me.equals(C)===!1||Ie!==R)&&(i.blendColor(me.r,me.g,me.b,Ie),C.copy(me),R=Ie),g=L,O=!1}function ze(L,lt){L.side===Be?dt(i.CULL_FACE):xt(i.CULL_FACE);let V=L.side===ke;lt&&(V=!V),Ht(V),L.blending===Bi&&L.transparent===!1?P(On):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){Q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),Q=L)}function qt(L){L!==Ll?(xt(i.CULL_FACE),L!==v&&(L===wo?i.cullFace(i.BACK):L===Il?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),v=L}function Rt(L){L!==E&&(q&&i.lineWidth(L),E=L)}function re(L,lt,V){L?(xt(i.POLYGON_OFFSET_FILL),(W!==lt||H!==V)&&(i.polygonOffset(lt,V),W=lt,H=V)):dt(i.POLYGON_OFFSET_FILL)}function Pt(L){L?xt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+X-1),G!==L&&(i.activeTexture(L),G=L)}function y(L,lt,V){V===void 0&&(G===null?V=i.TEXTURE0+X-1:V=G);let j=ut[V];j===void 0&&(j={type:void 0,texture:void 0},ut[V]=j),(j.type!==L||j.texture!==lt)&&(G!==V&&(i.activeTexture(V),G=V),i.bindTexture(L,lt||et[L]),j.type=L,j.texture=lt)}function B(){const L=ut[G];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Bt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Bt.copy(L))}function _t(L){zt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),zt.copy(L))}function Gt(L,lt){let V=c.get(lt);V===void 0&&(V=new WeakMap,c.set(lt,V));let j=V.get(L);j===void 0&&(j=i.getUniformBlockIndex(lt,L.name),V.set(L,j))}function It(L,lt){const j=c.get(lt).get(L);o.get(lt)!==j&&(i.uniformBlockBinding(lt,j,L.__bindingPointIndex),o.set(lt,j))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,ut={},h={},f=new WeakMap,d=[],u=null,_=!1,g=null,p=null,m=null,T=null,S=null,b=null,D=null,C=new Dt(0,0,0),R=0,O=!1,Q=null,v=null,E=null,W=null,H=null,Bt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xt,disable:dt,bindFramebuffer:Lt,drawBuffers:bt,useProgram:Vt,setBlending:P,setMaterial:ze,setFlipSided:Ht,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:re,setScissorTest:Pt,activeTexture:A,bindTexture:y,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:tt,texImage2D:mt,texImage3D:wt,updateUBOMapping:Gt,uniformBlockBinding:It,texStorage2D:Kt,texStorage3D:nt,texSubImage2D:K,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Ct,viewport:_t,reset:ie}}function yc(i,t,e,n){const s=Mm(n);switch(e){case Zc:return i*t;case Jc:return i*t;case Qc:return i*t*2;case tl:return i*t/s.components*s.byteLength;case oo:return i*t/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case co:return i*t*2/s.components*s.byteLength;case jc:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case $s:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qs:case qa:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nl:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Za:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mm(i){switch(i){case Sn:case qc:return{byteLength:1,components:1};case os:case Kc:case ls:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case si:case so:case yn:return{byteLength:4,components:1};case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return u?new OffscreenCanvas(A,y):cr("canvas")}function g(A,y,B){let $=1;const tt=Pt(A);if((tt.width>B||tt.height>B)&&($=B/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*tt.width),Mt=Math.floor($*tt.height);f===void 0&&(f=_(K,Mt));const at=y?_(K,Mt):f;return at.width=K,at.height=Mt,at.getContext("2d").drawImage(A,0,0,K,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Mt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Fe&&A.minFilter!==nn}function m(A){i.generateMipmap(A)}function T(A,y,B,$,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=y;if(y===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),y===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),y===i.RGBA){const Mt=tt?sr:Jt.getTransfer($);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=Mt===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(A,y){let B;return A?y===null||y===si||y===Vi?B=i.DEPTH24_STENCIL8:y===yn?B=i.DEPTH32F_STENCIL8:y===os&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===si||y===Vi?B=i.DEPTH_COMPONENT24:y===yn?B=i.DEPTH_COMPONENT32F:y===os&&(B=i.DEPTH_COMPONENT16),B}function b(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Fe&&A.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function D(A){const y=A.target;y.removeEventListener("dispose",D),R(y),y.isVideoTexture&&h.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),Q(y)}function R(A){const y=n.get(A);if(y.__webglInit===void 0)return;const B=A.source,$=d.get(B);if($){const tt=$[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&O(A),Object.keys($).length===0&&d.delete(B)}n.remove(A)}function O(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const B=A.source,$=d.get(B);delete $[y.__cacheKey],a.memory.textures--}function Q(A){const y=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let tt=0;tt<y.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let $=0,tt=B.length;$<tt;$++){const K=n.get(B[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(A)}let v=0;function E(){v=0}function W(){const A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function H(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const B=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(B,A,y);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function q(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){zt(B,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function z(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){zt(B,A,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function J(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const G={[Ta]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},ut={[Fe]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ft={[uh]:i.NEVER,[gh]:i.ALWAYS,[fh]:i.LESS,[sl]:i.LEQUAL,[dh]:i.EQUAL,[_h]:i.GEQUAL,[ph]:i.GREATER,[mh]:i.NOTEQUAL};function vt(A,y){if(y.type===yn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===Tr||y.magFilter===ms||y.magFilter===ei||y.minFilter===nn||y.minFilter===Tr||y.minFilter===ms||y.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fe||y.minFilter!==ms&&y.minFilter!==ei||y.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Bt(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",D));const $=y.source;let tt=d.get($);tt===void 0&&(tt={},d.set($,tt));const K=H(y);if(K!==A.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[K].usedTimes++;const Mt=tt[A.__cacheKey];Mt!==void 0&&(tt[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&O(y)),A.__cacheKey=K,A.__webglTexture=tt[K].texture}return B}function zt(A,y,B){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);const tt=Bt(A,y),K=y.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+B);const Mt=n.get(K);if(K.version!==Mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const at=Jt.getPrimaries(Jt.workingColorSpace),pt=y.colorSpace===Nn?null:Jt.getPrimaries(y.colorSpace),Kt=y.colorSpace===Nn||at===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let nt=g(y.image,!1,s.maxTextureSize);nt=re(y,nt);const mt=r.convert(y.format,y.colorSpace),wt=r.convert(y.type);let Ct=T(y.internalFormat,mt,wt,y.colorSpace,y.isVideoTexture);vt($,y);let _t;const Gt=y.mipmaps,It=y.isVideoTexture!==!0,ie=Mt.__version===void 0||tt===!0,L=K.dataReady,lt=b(y,nt);if(y.isDepthTexture)Ct=S(y.format===Wi,y.type),ie&&(It?e.texStorage2D(i.TEXTURE_2D,1,Ct,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,nt.width,nt.height,0,mt,wt,null));else if(y.isDataTexture)if(Gt.length>0){It&&ie&&e.texStorage2D(i.TEXTURE_2D,lt,Ct,Gt[0].width,Gt[0].height);for(let V=0,j=Gt.length;V<j;V++)_t=Gt[V],It?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,mt,wt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Ct,_t.width,_t.height,0,mt,wt,_t.data);y.generateMipmaps=!1}else It?(ie&&e.texStorage2D(i.TEXTURE_2D,lt,Ct,nt.width,nt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,wt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,nt.width,nt.height,0,mt,wt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){It&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ct,Gt[0].width,Gt[0].height,nt.depth);for(let V=0,j=Gt.length;V<j;V++)if(_t=Gt[V],y.format!==sn)if(mt!==null)if(It){if(L)if(y.layerUpdates.size>0){const ot=yc(_t.width,_t.height,y.format,y.type);for(const ht of y.layerUpdates){const Xt=_t.data.subarray(ht*ot/_t.data.BYTES_PER_ELEMENT,(ht+1)*ot/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ht,_t.width,_t.height,1,mt,Xt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,nt.depth,mt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ct,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,nt.depth,mt,wt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Ct,_t.width,_t.height,nt.depth,0,mt,wt,_t.data)}else{It&&ie&&e.texStorage2D(i.TEXTURE_2D,lt,Ct,Gt[0].width,Gt[0].height);for(let V=0,j=Gt.length;V<j;V++)_t=Gt[V],y.format!==sn?mt!==null?It?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Ct,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,mt,wt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Ct,_t.width,_t.height,0,mt,wt,_t.data)}else if(y.isDataArrayTexture)if(It){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ct,nt.width,nt.height,nt.depth),L)if(y.layerUpdates.size>0){const V=yc(nt.width,nt.height,y.format,y.type);for(const j of y.layerUpdates){const ot=nt.data.subarray(j*V/nt.data.BYTES_PER_ELEMENT,(j+1)*V/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,mt,wt,ot)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,wt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,nt.width,nt.height,nt.depth,0,mt,wt,nt.data);else if(y.isData3DTexture)It?(ie&&e.texStorage3D(i.TEXTURE_3D,lt,Ct,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,wt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,nt.width,nt.height,nt.depth,0,mt,wt,nt.data);else if(y.isFramebufferTexture){if(ie)if(It)e.texStorage2D(i.TEXTURE_2D,lt,Ct,nt.width,nt.height);else{let V=nt.width,j=nt.height;for(let ot=0;ot<lt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Ct,V,j,0,mt,wt,null),V>>=1,j>>=1}}else if(Gt.length>0){if(It&&ie){const V=Pt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Ct,V.width,V.height)}for(let V=0,j=Gt.length;V<j;V++)_t=Gt[V],It?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt,wt,_t):e.texImage2D(i.TEXTURE_2D,V,Ct,mt,wt,_t);y.generateMipmaps=!1}else if(It){if(ie){const V=Pt(nt);e.texStorage2D(i.TEXTURE_2D,lt,Ct,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,wt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,mt,wt,nt);p(y)&&m($),Mt.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Y(A,y,B){if(y.image.length!==6)return;const $=Bt(A,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const K=n.get(tt);if(tt.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const Mt=Jt.getPrimaries(Jt.workingColorSpace),at=y.colorSpace===Nn?null:Jt.getPrimaries(y.colorSpace),pt=y.colorSpace===Nn||Mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Kt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!Kt&&!nt?mt[j]=g(y.image[j],!0,s.maxCubemapSize):mt[j]=nt?y.image[j].image:y.image[j],mt[j]=re(y,mt[j]);const wt=mt[0],Ct=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),Gt=T(y.internalFormat,Ct,_t,y.colorSpace),It=y.isVideoTexture!==!0,ie=K.__version===void 0||$===!0,L=tt.dataReady;let lt=b(y,wt);vt(i.TEXTURE_CUBE_MAP,y);let V;if(Kt){It&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Gt,wt.width,wt.height);for(let j=0;j<6;j++){V=mt[j].mipmaps;for(let ot=0;ot<V.length;ot++){const ht=V[ot];y.format!==sn?Ct!==null?It?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,ht.width,ht.height,Ct,_t,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Gt,ht.width,ht.height,0,Ct,_t,ht.data)}}}else{if(V=y.mipmaps,It&&ie){V.length>0&&lt++;const j=Pt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){It?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,Ct,_t,mt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,mt[j].width,mt[j].height,0,Ct,_t,mt[j].data);for(let ot=0;ot<V.length;ot++){const Xt=V[ot].image[j].image;It?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Xt.width,Xt.height,Ct,_t,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Gt,Xt.width,Xt.height,0,Ct,_t,Xt.data)}}else{It?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,_t,mt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,Ct,_t,mt[j]);for(let ot=0;ot<V.length;ot++){const ht=V[ot];It?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Ct,_t,ht.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Gt,Ct,_t,ht.image[j])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),K.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function et(A,y,B,$,tt,K){const Mt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),pt=T(B.internalFormat,Mt,at,B.colorSpace);if(!n.get(y).__hasExternalTextures){const nt=Math.max(1,y.width>>K),mt=Math.max(1,y.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,pt,nt,mt,y.depth,0,Mt,at,null):e.texImage2D(tt,K,pt,nt,mt,0,Mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,n.get(B).__webglTexture,0,Ht(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,n.get(B).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(A,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const $=y.depthTexture,tt=$&&$.isDepthTexture?$.type:null,K=S(y.stencilBuffer,tt),Mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ht(y);qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,K,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{const $=y.textures;for(let tt=0;tt<$.length;tt++){const K=$[tt],Mt=r.convert(K.format,K.colorSpace),at=r.convert(K.type),pt=T(K.internalFormat,Mt,at,K.colorSpace),Kt=Ht(y);B&&qt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,pt,y.width,y.height):qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,tt=Ht(y);if(y.depthTexture.format===Fi)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===Wi)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const y=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=$}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");dt(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),xt(y.__webglDepthbuffer[$],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),xt(y.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(A,y,B){const $=n.get(A);y!==void 0&&et($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Lt(A)}function Vt(A){const y=A.texture,B=n.get(A),$=n.get(y);A.addEventListener("dispose",C);const tt=A.textures,K=A.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let pt=0;pt<y.mipmaps.length;pt++)B.__webglFramebuffer[at][pt]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let at=0,pt=tt.length;at<pt;at++){const Kt=n.get(tt[at]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&qt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const pt=tt[at];B.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Kt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),mt=T(pt.internalFormat,Kt,nt,pt.colorSpace,A.isXRRenderTarget===!0),wt=Ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,B.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),vt(i.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)et(B.__webglFramebuffer[at][pt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else et(B.__webglFramebuffer[at],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,pt=tt.length;at<pt;at++){const Kt=tt[at],nt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),vt(i.TEXTURE_2D,Kt),et(B.__webglFramebuffer,A,Kt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Kt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),vt(at,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)et(B.__webglFramebuffer[pt],A,y,i.COLOR_ATTACHMENT0,at,pt);else et(B.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,at,0);p(y)&&m(at),e.unbindTexture()}A.depthBuffer&&Lt(A)}function te(A){const y=A.textures;for(let B=0,$=y.length;B<$;B++){const tt=y[B];if(p(tt)){const K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(tt).__webglTexture;e.bindTexture(K,Mt),m(K),e.unbindTexture()}}}const Wt=[],P=[];function ze(A){if(A.samples>0){if(qt(A)===!1){const y=A.textures,B=A.width,$=A.height;let tt=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),at=y.length>1;if(at)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Kt=n.get(y[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,tt,i.NEAREST),c===!0&&(Wt.length=0,P.length=0,Wt.push(i.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Wt.push(K),P.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Kt=n.get(y[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ht(A){return Math.min(s.maxSamples,A.samples)}function qt(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(A){const y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function re(A,y){const B=A.colorSpace,$=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Hn&&B!==Nn&&(Jt.getTransfer(B)===ce?($!==sn||tt!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=bt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=qt}function Em(i,t){function e(n,s=Nn){let r;const a=Jt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===ls)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===jc)return i.RGB;if(n===sn)return i.RGBA;if(n===Jc)return i.LUMINANCE;if(n===Qc)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===el)return i.RG;if(n===co)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===$s||n===Zs||n===js||n===Js)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===wa||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===La)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Ua||n===Da||n===Oa||n===Ba||n===Fa||n===ka||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===qa||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qs)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===$a||n===Za||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Tm extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Un extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bm={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;l.inputState.pinching&&d>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rm=`
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

}`;class wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:Am,fragmentShader:Rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cm extends li{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,_=null;const g=new wm,p=e.getContextAttributes();let m=null,T=null;const S=[],b=[],D=new kt;let C=null;const R=new $e;R.layers.enable(1),R.viewport=new de;const O=new $e;O.layers.enable(2),O.viewport=new de;const Q=[R,O],v=new Tm;v.layers.enable(1),v.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=S[Y];return et===void 0&&(et=new Qr,S[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=S[Y];return et===void 0&&(et=new Qr,S[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=S[Y];return et===void 0&&(et=new Qr,S[Y]=et),et.getHandSpace()};function H(Y){const et=b.indexOf(Y.inputSource);if(et===-1)return;const xt=S[et];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,l||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<S.length;Y++){const et=b[Y];et!==null&&(b[Y]=null,S[Y].disconnect(et))}E=null,W=null,g.reset(),t.setRenderTarget(m),u=null,d=null,f=null,s=null,T=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new ri(u.framebufferWidth,u.framebufferHeight,{format:sn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,xt=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Wi:Fi,xt=p.stencil?Vi:si);const Lt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new ri(d.textureWidth,d.textureHeight,{format:sn,type:Sn,depthTexture:new _l(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Y){for(let et=0;et<Y.removed.length;et++){const xt=Y.removed[et],dt=b.indexOf(xt);dt>=0&&(b[dt]=null,S[dt].disconnect(xt))}for(let et=0;et<Y.added.length;et++){const xt=Y.added[et];let dt=b.indexOf(xt);if(dt===-1){for(let bt=0;bt<S.length;bt++)if(bt>=b.length){b.push(xt),dt=bt;break}else if(b[bt]===null){b[bt]=xt,dt=bt;break}if(dt===-1)break}const Lt=S[dt];Lt&&Lt.connect(xt)}}const z=new U,J=new U;function G(Y,et,xt){z.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const dt=z.distanceTo(J),Lt=et.projectionMatrix.elements,bt=xt.projectionMatrix.elements,Vt=Lt[14]/(Lt[10]-1),te=Lt[14]/(Lt[10]+1),Wt=(Lt[9]+1)/Lt[5],P=(Lt[9]-1)/Lt[5],ze=(Lt[8]-1)/Lt[0],Ht=(bt[8]+1)/bt[0],qt=Vt*ze,Rt=Vt*Ht,re=dt/(-ze+Ht),Pt=re*-ze;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Lt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const A=Vt+re,y=te+re,B=qt-Pt,$=Rt+(dt-Pt),tt=Wt*te/y*A,K=P*te/y*A;Y.projectionMatrix.makePerspective(B,$,tt,K,A,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ut(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,xt=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),v.near=O.near=R.near=et,v.far=O.far=R.far=xt,(E!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,W=v.far);const dt=Y.parent,Lt=v.cameras;ut(v,dt);for(let bt=0;bt<Lt.length;bt++)ut(Lt[bt],dt);Lt.length===2?G(v,R,O):v.projectionMatrix.copy(R.projectionMatrix),ft(Y,v,dt)};function ft(Y,et,xt){xt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let vt=null;function Bt(Y,et){if(h=et.getViewerPose(l||a),_=et,h!==null){const xt=h.views;u!==null&&(t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T));let dt=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let bt=0;bt<xt.length;bt++){const Vt=xt[bt];let te=null;if(u!==null)te=u.getViewport(Vt);else{const P=f.getViewSubImage(d,Vt);te=P.viewport,bt===0&&(t.setRenderTargetTextures(T,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(T))}let Wt=Q[bt];Wt===void 0&&(Wt=new $e,Wt.layers.enable(bt),Wt.viewport=new de,Q[bt]=Wt),Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(te.x,te.y,te.width,te.height),bt===0&&(v.matrix.copy(Wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(Wt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const bt=f.getDepthInformation(xt[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,s.renderState)}}for(let xt=0;xt<S.length;xt++){const dt=b[xt],Lt=S[xt];dt!==null&&Lt!==void 0&&Lt.update(dt,et,l||a)}vt&&vt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const zt=new pl;zt.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}}const Kn=new an,Pm=new he;function Lm(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ul(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,S,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,T,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=t.get(m),S=T.envMap,b=T.envMapRotation;S&&(p.envMap.value=S,Kn.copy(b),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Kn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Im(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const b=S.program;n.uniformBlockBinding(T,b)}function l(T,S){let b=s[T.id];b===void 0&&(_(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",p));const D=S.program;n.updateUBOMapping(T,D);const C=t.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function h(T){const S=f();T.__bindingPointIndex=S;const b=i.createBuffer(),D=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=s[T.id],b=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,R=b.length;C<R;C++){const O=Array.isArray(b[C])?b[C]:[b[C]];for(let Q=0,v=O.length;Q<v;Q++){const E=O[Q];if(u(E,C,Q,D)===!0){const W=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let q=0;q<H.length;q++){const z=H[q],J=g(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,W+X,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(T,S,b,D){const C=T.value,R=S+"_"+b;if(D[R]===void 0)return typeof C=="number"||typeof C=="boolean"?D[R]=C:D[R]=C.clone(),!0;{const O=D[R];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return D[R]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function _(T){const S=T.uniforms;let b=0;const D=16;for(let R=0,O=S.length;R<O;R++){const Q=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,E=Q.length;v<E;v++){const W=Q[v],H=Array.isArray(W.value)?W.value:[W.value];for(let X=0,q=H.length;X<q;X++){const z=H[X],J=g(z),G=b%D,ut=G%J.boundary,ft=G+ut;b+=ut,ft!==0&&D-ft<J.storage&&(b+=D-ft),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=J.storage}}}const C=b%D;return C>0&&(b+=D-C),T.__size=b,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Nm{constructor(t={}){const{canvas:e=xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const u=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Bn,this.toneMappingExposure=1;const S=this;let b=!1,D=0,C=0,R=null,O=-1,Q=null;const v=new de,E=new de;let W=null;const H=new Dt(0);let X=0,q=e.width,z=e.height,J=1,G=null,ut=null;const ft=new de(0,0,q,z),vt=new de(0,0,q,z);let Bt=!1;const zt=new po;let Y=!1,et=!1;const xt=new he,dt=new he,Lt=new U,bt=new de,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Wt(){return R===null?J:1}let P=n;function ze(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",ht,!1),P===null){const I="webgl2";if(P=ze(I,M),P===null)throw ze(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ht,qt,Rt,re,Pt,A,y,B,$,tt,K,Mt,at,pt,Kt,nt,mt,wt,Ct,_t,Gt,It,ie,L;function lt(){Ht=new Fd(P),Ht.init(),It=new Em(P,Ht),qt=new Id(P,Ht,t,It),Rt=new ym(P),qt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),re=new Hd(P),Pt=new rm,A=new Sm(P,Ht,Rt,Pt,qt,It,re),y=new Ud(S),B=new Bd(S),$=new qh(P),ie=new Pd(P,$),tt=new kd(P,$,re,ie),K=new Vd(P,tt,$,re),Ct=new Gd(P,qt,A),nt=new Nd(Pt),Mt=new sm(S,y,B,Ht,qt,ie,nt),at=new Lm(S,Pt),pt=new om,Kt=new dm(Ht),wt=new Cd(S,y,B,Rt,K,d,c),mt=new vm(S,K,qt),L=new Im(P,re,qt,Rt),_t=new Ld(P,Ht,re),Gt=new zd(P,Ht,re),re.programs=Mt.programs,S.capabilities=qt,S.extensions=Ht,S.properties=Pt,S.renderLists=pt,S.shadowMap=mt,S.state=Rt,S.info=re}lt();const V=new Cm(S,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(q,z,!1))},this.getSize=function(M){return M.set(q,z)},this.setSize=function(M,I,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,z=I,e.width=Math.floor(M*J),e.height=Math.floor(I*J),F===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(q*J,z*J).floor()},this.setDrawingBufferSize=function(M,I,F){q=M,z=I,J=F,e.width=Math.floor(M*F),e.height=Math.floor(I*F),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(ft)},this.setViewport=function(M,I,F,k){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,I,F,k),Rt.viewport(v.copy(ft).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,I,F,k){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,I,F,k),Rt.scissor(E.copy(vt).multiplyScalar(J).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(M){Rt.setScissorTest(Bt=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){ut=M},this.getClearColor=function(M){return M.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(M=!0,I=!0,F=!0){let k=0;if(M){let N=!1;if(R!==null){const it=R.texture.format;N=it===lo||it===co||it===oo}if(N){const it=R.texture.type,ct=it===Sn||it===si||it===os||it===Vi||it===ro||it===ao,gt=wt.getClearColor(),yt=wt.getClearAlpha(),Tt=gt.r,At=gt.g,St=gt.b;ct?(u[0]=Tt,u[1]=At,u[2]=St,u[3]=yt,P.clearBufferuiv(P.COLOR,0,u)):(_[0]=Tt,_[1]=At,_[2]=St,_[3]=yt,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}I&&(k|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),Kt.dispose(),Pt.dispose(),y.dispose(),B.dispose(),K.dispose(),ie.dispose(),L.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",yo),V.removeEventListener("sessionend",Mo),Gn.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=re.autoReset,I=mt.enabled,F=mt.autoUpdate,k=mt.needsUpdate,N=mt.type;lt(),re.autoReset=M,mt.enabled=I,mt.autoUpdate=F,mt.needsUpdate=k,mt.type=N}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xt(M){const I=M.target;I.removeEventListener("dispose",Xt),me(I)}function me(M){Ie(M),Pt.remove(M)}function Ie(M){const I=Pt.get(M).programs;I!==void 0&&(I.forEach(function(F){Mt.releaseProgram(F)}),M.isShaderMaterial&&Mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,F,k,N,it){I===null&&(I=Vt);const ct=N.isMesh&&N.matrixWorld.determinant()<0,gt=Rl(M,I,F,k,N);Rt.setMaterial(k,ct);let yt=F.index,Tt=1;if(k.wireframe===!0){if(yt=tt.getWireframeAttribute(F),yt===void 0)return;Tt=2}const At=F.drawRange,St=F.attributes.position;let Qt=At.start*Tt,ae=(At.start+At.count)*Tt;it!==null&&(Qt=Math.max(Qt,it.start*Tt),ae=Math.min(ae,(it.start+it.count)*Tt)),yt!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,yt.count)):St!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,St.count));const ue=ae-Qt;if(ue<0||ue===1/0)return;ie.setup(N,k,gt,F,yt);let He,Zt=_t;if(yt!==null&&(He=$.get(yt),Zt=Gt,Zt.setIndex(He)),N.isMesh)k.wireframe===!0?(Rt.setLineWidth(k.wireframeLinewidth*Wt()),Zt.setMode(P.LINES)):Zt.setMode(P.TRIANGLES);else if(N.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*Wt()),N.isLineSegments?Zt.setMode(P.LINES):N.isLineLoop?Zt.setMode(P.LINE_LOOP):Zt.setMode(P.LINE_STRIP)}else N.isPoints?Zt.setMode(P.POINTS):N.isSprite&&Zt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,Te=N._multiDrawCounts,jt=N._multiDrawCount,Ze=yt?$.get(yt).bytesPerElement:1,fi=Pt.get(k).currentProgram.getUniforms();for(let Ge=0;Ge<jt;Ge++)fi.setValue(P,"_gl_DrawID",Ge),Zt.render(Et[Ge]/Ze,Te[Ge])}else if(N.isInstancedMesh)Zt.renderInstances(Qt,ue,N.count);else if(F.isInstancedBufferGeometry){const Et=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Te=Math.min(F.instanceCount,Et);Zt.renderInstances(Qt,ue,Te)}else Zt.render(Qt,ue)};function $t(M,I,F){M.transparent===!0&&M.side===Be&&M.forceSinglePass===!1?(M.side=ke,M.needsUpdate=!0,ps(M,I,F),M.side=kn,M.needsUpdate=!0,ps(M,I,F),M.side=Be):ps(M,I,F)}this.compile=function(M,I,F=null){F===null&&(F=M),p=Kt.get(F),p.init(I),T.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==F&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let ct=0;ct<it.length;ct++){const gt=it[ct];$t(gt,F,N),k.add(gt)}else $t(it,F,N),k.add(it)}),T.pop(),p=null,k},this.compileAsync=function(M,I,F=null){const k=this.compile(M,I,F);return new Promise(N=>{function it(){if(k.forEach(function(ct){Pt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){N(M);return}setTimeout(it,10)}Ht.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ne=null;function fn(M){Ne&&Ne(M)}function yo(){Gn.stop()}function Mo(){Gn.start()}const Gn=new pl;Gn.setAnimationLoop(fn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(M){Ne=M,V.setAnimationLoop(M),M===null?Gn.stop():Gn.start()},V.addEventListener("sessionstart",yo),V.addEventListener("sessionend",Mo),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,R),p=Kt.get(M,T.length),p.init(I),T.push(p),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),zt.setFromProjectionMatrix(dt),et=this.localClippingEnabled,Y=nt.init(this.clippingPlanes,et),g=pt.get(M,m.length),g.init(),m.push(g),V.enabled===!0&&V.isPresenting===!0){const it=S.xr.getDepthSensingMesh();it!==null&&yr(it,I,-1/0,S.sortObjects)}yr(M,I,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(G,ut),te=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,te&&wt.addToRenderList(g,M),this.info.render.frame++,Y===!0&&nt.beginShadows();const F=p.state.shadowsArray;mt.render(F,M,I),Y===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,N=g.transmissive;if(p.setupLights(),I.isArrayCamera){const it=I.cameras;if(N.length>0)for(let ct=0,gt=it.length;ct<gt;ct++){const yt=it[ct];Eo(k,N,M,yt)}te&&wt.render(M);for(let ct=0,gt=it.length;ct<gt;ct++){const yt=it[ct];So(g,M,yt,yt.viewport)}}else N.length>0&&Eo(k,N,M,I),te&&wt.render(M),So(g,M,I);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(S,M,I),ie.resetDefaultState(),O=-1,Q=null,T.pop(),T.length>0?(p=T[T.length-1],Y===!0&&nt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function yr(M,I,F,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||zt.intersectsSprite(M)){k&&bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);const ct=K.update(M),gt=M.material;gt.visible&&g.push(M,ct,gt,F,bt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||zt.intersectsObject(M))){const ct=K.update(M),gt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),bt.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),bt.copy(ct.boundingSphere.center)),bt.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(gt)){const yt=ct.groups;for(let Tt=0,At=yt.length;Tt<At;Tt++){const St=yt[Tt],Qt=gt[St.materialIndex];Qt&&Qt.visible&&g.push(M,ct,Qt,F,bt.z,St)}}else gt.visible&&g.push(M,ct,gt,F,bt.z,null)}}const it=M.children;for(let ct=0,gt=it.length;ct<gt;ct++)yr(it[ct],I,F,k)}function So(M,I,F,k){const N=M.opaque,it=M.transmissive,ct=M.transparent;p.setupLightsView(F),Y===!0&&nt.setGlobalState(S.clippingPlanes,F),k&&Rt.viewport(v.copy(k)),N.length>0&&ds(N,I,F),it.length>0&&ds(it,I,F),ct.length>0&&ds(ct,I,F),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Eo(M,I,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ri(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?ls:Sn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const it=p.state.transmissionRenderTarget[k.id],ct=k.viewport||v;it.setSize(ct.z,ct.w);const gt=S.getRenderTarget();S.setRenderTarget(it),S.getClearColor(H),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),te&&wt.render(F);const yt=S.toneMapping;S.toneMapping=Bn;const Tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Y===!0&&nt.setGlobalState(S.clippingPlanes,k),ds(M,F,k),A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let St=0,Qt=I.length;St<Qt;St++){const ae=I[St],ue=ae.object,He=ae.geometry,Zt=ae.material,Et=ae.group;if(Zt.side===Be&&ue.layers.test(k.layers)){const Te=Zt.side;Zt.side=ke,Zt.needsUpdate=!0,To(ue,F,k,He,Zt,Et),Zt.side=Te,Zt.needsUpdate=!0,At=!0}}At===!0&&(A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it))}S.setRenderTarget(gt),S.setClearColor(H,X),Tt!==void 0&&(k.viewport=Tt),S.toneMapping=yt}function ds(M,I,F){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,it=M.length;N<it;N++){const ct=M[N],gt=ct.object,yt=ct.geometry,Tt=k===null?ct.material:k,At=ct.group;gt.layers.test(F.layers)&&To(gt,I,F,yt,Tt,At)}}function To(M,I,F,k,N,it){M.onBeforeRender(S,I,F,k,N,it),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(S,I,F,k,M,it),N.transparent===!0&&N.side===Be&&N.forceSinglePass===!1?(N.side=ke,N.needsUpdate=!0,S.renderBufferDirect(F,I,k,N,M,it),N.side=kn,N.needsUpdate=!0,S.renderBufferDirect(F,I,k,N,M,it),N.side=Be):S.renderBufferDirect(F,I,k,N,M,it),M.onAfterRender(S,I,F,k,N,it)}function ps(M,I,F){I.isScene!==!0&&(I=Vt);const k=Pt.get(M),N=p.state.lights,it=p.state.shadowsArray,ct=N.state.version,gt=Mt.getParameters(M,N.state,it,I,F),yt=Mt.getProgramCacheKey(gt);let Tt=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?B:y).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Xt),Tt=new Map,k.programs=Tt);let At=Tt.get(yt);if(At!==void 0){if(k.currentProgram===At&&k.lightsStateVersion===ct)return Ao(M,gt),At}else gt.uniforms=Mt.getUniforms(M),M.onBeforeCompile(gt,S),At=Mt.acquireProgram(gt,yt),Tt.set(yt,At),k.uniforms=gt.uniforms;const St=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=nt.uniform),Ao(M,gt),k.needsLights=Cl(M),k.lightsStateVersion=ct,k.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=At,k.uniformsList=null,At}function bo(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=nr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ao(M,I){const F=Pt.get(M);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Rl(M,I,F,k,N){I.isScene!==!0&&(I=Vt),A.resetTextureUnits();const it=I.fog,ct=k.isMeshStandardMaterial?I.environment:null,gt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Hn,yt=(k.isMeshStandardMaterial?B:y).get(k.envMap||ct),Tt=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,At=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),St=!!F.morphAttributes.position,Qt=!!F.morphAttributes.normal,ae=!!F.morphAttributes.color;let ue=Bn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=S.toneMapping);const He=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=He!==void 0?He.length:0,Et=Pt.get(k),Te=p.state.lights;if(Y===!0&&(et===!0||M!==Q)){const qe=M===Q&&k.id===O;nt.setState(k,M,qe)}let jt=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Te.state.version||Et.outputColorSpace!==gt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==yt||k.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Tt||Et.vertexTangents!==At||Et.morphTargets!==St||Et.morphNormals!==Qt||Et.morphColors!==ae||Et.toneMapping!==ue||Et.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,Et.__version=k.version);let Ze=Et.currentProgram;jt===!0&&(Ze=ps(k,I,N));let fi=!1,Ge=!1,Mr=!1;const pe=Ze.getUniforms(),Tn=Et.uniforms;if(Rt.useProgram(Ze.program)&&(fi=!0,Ge=!0,Mr=!0),k.id!==O&&(O=k.id,Ge=!0),fi||Q!==M){qt.reverseDepthBuffer?(xt.copy(M.projectionMatrix),Mh(xt),Sh(xt),pe.setValue(P,"projectionMatrix",xt)):pe.setValue(P,"projectionMatrix",M.projectionMatrix),pe.setValue(P,"viewMatrix",M.matrixWorldInverse);const qe=pe.map.cameraPosition;qe!==void 0&&qe.setValue(P,Lt.setFromMatrixPosition(M.matrixWorld)),qt.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pe.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Ge=!0,Mr=!0)}if(N.isSkinnedMesh){pe.setOptional(P,N,"bindMatrix"),pe.setOptional(P,N,"bindMatrixInverse");const qe=N.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),pe.setValue(P,"boneTexture",qe.boneTexture,A))}N.isBatchedMesh&&(pe.setOptional(P,N,"batchingTexture"),pe.setValue(P,"batchingTexture",N._matricesTexture,A),pe.setOptional(P,N,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",N._indirectTexture,A),pe.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",N._colorsTexture,A));const Sr=F.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&Ct.update(N,F,Ze),(Ge||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,pe.setValue(P,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Tn.envMap.value=yt,Tn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Tn.envMapIntensity.value=I.environmentIntensity),Ge&&(pe.setValue(P,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&wl(Tn,Mr),it&&k.fog===!0&&at.refreshFogUniforms(Tn,it),at.refreshMaterialUniforms(Tn,k,J,z,p.state.transmissionRenderTarget[M.id]),nr.upload(P,bo(Et),Tn,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(nr.upload(P,bo(Et),Tn,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pe.setValue(P,"center",N.center),pe.setValue(P,"modelViewMatrix",N.modelViewMatrix),pe.setValue(P,"normalMatrix",N.normalMatrix),pe.setValue(P,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const qe=k.uniformsGroups;for(let Er=0,Pl=qe.length;Er<Pl;Er++){const Ro=qe[Er];L.update(Ro,Ze),L.bind(Ro,Ze)}}return Ze}function wl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Cl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,I,F){Pt.get(M.texture).__webglTexture=I,Pt.get(M.depthTexture).__webglTexture=F;const k=Pt.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const F=Pt.get(M);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,F=0){R=M,D=I,C=F;let k=!0,N=null,it=!1,ct=!1;if(M){const yt=Pt.get(M);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(yt.__hasExternalTextures)A.rebindTextures(M,Pt.get(M.texture).__webglTexture,Pt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const St=M.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Pt.has(St)&&(M.width!==St.image.width||M.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ct=!0);const At=Pt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[I])?N=At[I][F]:N=At[I],it=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?N=Pt.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?N=At[F]:N=At,v.copy(M.viewport),E.copy(M.scissor),W=M.scissorTest}else v.copy(ft).multiplyScalar(J).floor(),E.copy(vt).multiplyScalar(J).floor(),W=Bt;if(Rt.bindFramebuffer(P.FRAMEBUFFER,N)&&k&&Rt.drawBuffers(M,N),Rt.viewport(v),Rt.scissor(E),Rt.setScissorTest(W),it){const yt=Pt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,F)}else if(ct){const yt=Pt.get(M.texture),Tt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,F||0,Tt)}O=-1},this.readRenderTargetPixels=function(M,I,F,k,N,it,ct){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){Rt.bindFramebuffer(P.FRAMEBUFFER,gt);try{const yt=M.texture,Tt=yt.format,At=yt.type;if(!qt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&F>=0&&F<=M.height-N&&P.readPixels(I,F,k,N,It.convert(Tt),It.convert(At),it)}finally{const yt=R!==null?Pt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(M,I,F,k,N,it,ct){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const yt=M.texture,Tt=yt.format,At=yt.type;if(!qt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-k&&F>=0&&F<=M.height-N){Rt.bindFramebuffer(P.FRAMEBUFFER,gt);const St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,it.byteLength,P.STREAM_READ),P.readPixels(I,F,k,N,It.convert(Tt),It.convert(At),0);const Qt=R!==null?Pt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(P.FRAMEBUFFER,Qt);const ae=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await yh(P,ae,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,it),P.deleteBuffer(St),P.deleteSync(ae),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,F=0){M.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-F),N=Math.floor(M.image.width*k),it=Math.floor(M.image.height*k),ct=I!==null?I.x:0,gt=I!==null?I.y:0;A.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,ct,gt,N,it),Rt.unbindTexture()},this.copyTextureToTexture=function(M,I,F=null,k=null,N=0){M.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],I=arguments[2],N=arguments[3]||0,F=null);let it,ct,gt,yt,Tt,At;F!==null?(it=F.max.x-F.min.x,ct=F.max.y-F.min.y,gt=F.min.x,yt=F.min.y):(it=M.image.width,ct=M.image.height,gt=0,yt=0),k!==null?(Tt=k.x,At=k.y):(Tt=0,At=0);const St=It.convert(I.format),Qt=It.convert(I.type);A.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ae=P.getParameter(P.UNPACK_ROW_LENGTH),ue=P.getParameter(P.UNPACK_IMAGE_HEIGHT),He=P.getParameter(P.UNPACK_SKIP_PIXELS),Zt=P.getParameter(P.UNPACK_SKIP_ROWS),Et=P.getParameter(P.UNPACK_SKIP_IMAGES),Te=M.isCompressedTexture?M.mipmaps[N]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,yt),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Tt,At,it,ct,St,Qt,Te.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Tt,At,Te.width,Te.height,St,Te.data):P.texSubImage2D(P.TEXTURE_2D,N,Tt,At,it,ct,St,Qt,Te),P.pixelStorei(P.UNPACK_ROW_LENGTH,ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue),P.pixelStorei(P.UNPACK_SKIP_PIXELS,He),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Et),N===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,F=null,k=null,N=0){M.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,M=arguments[2],I=arguments[3],N=arguments[4]||0);let it,ct,gt,yt,Tt,At,St,Qt,ae;const ue=M.isCompressedTexture?M.mipmaps[N]:M.image;F!==null?(it=F.max.x-F.min.x,ct=F.max.y-F.min.y,gt=F.max.z-F.min.z,yt=F.min.x,Tt=F.min.y,At=F.min.z):(it=ue.width,ct=ue.height,gt=ue.depth,yt=0,Tt=0,At=0),k!==null?(St=k.x,Qt=k.y,ae=k.z):(St=0,Qt=0,ae=0);const He=It.convert(I.format),Zt=It.convert(I.type);let Et;if(I.isData3DTexture)A.setTexture3D(I,0),Et=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Et=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Te=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ze=P.getParameter(P.UNPACK_SKIP_PIXELS),fi=P.getParameter(P.UNPACK_SKIP_ROWS),Ge=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,At),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Et,N,St,Qt,ae,it,ct,gt,He,Zt,ue.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Et,N,St,Qt,ae,it,ct,gt,He,ue.data):P.texSubImage3D(Et,N,St,Qt,ae,it,ct,gt,He,Zt,ue),P.pixelStorei(P.UNPACK_ROW_LENGTH,Te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,fi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge),N===0&&I.generateMipmaps&&P.generateMipmap(Et),Rt.unbindTexture()},this.initRenderTarget=function(M){Pt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Rt.unbindTexture()},this.resetState=function(){D=0,C=0,R=null,Rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ho?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===_r?"display-p3":"srgb"}}class cs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new cs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Um extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ce=new U;class lr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ml extends hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ri;const Qi=new U,wi=new U,Ci=new U,Pi=new kt,ts=new kt,Sl=new he,Os=new U,es=new U,Bs=new U,Mc=new kt,ta=new kt,Sc=new kt;class Om extends Ee{constructor(t=new Ml){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new Ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dm(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new lr(n,3,0,!1)),Ri.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wi.setFromMatrixScale(this.matrixWorld),Sl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wi.multiplyScalar(-Ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Fs(Os.set(-.5,-.5,0),Ci,a,wi,s,r),Fs(es.set(.5,-.5,0),Ci,a,wi,s,r),Fs(Bs.set(.5,.5,0),Ci,a,wi,s,r),Mc.set(0,0),ta.set(1,0),Sc.set(1,1);let o=t.ray.intersectTriangle(Os,es,Bs,!1,Qi);if(o===null&&(Fs(es.set(-.5,.5,0),Ci,a,wi,s,r),ta.set(0,1),o=t.ray.intersectTriangle(Os,Bs,es,!1,Qi),o===null))return;const c=t.ray.origin.distanceTo(Qi);c<t.near||c>t.far||e.push({distance:c,point:Qi.clone(),uv:Xe.getInterpolation(Qi,Os,es,Bs,Mc,ta,Sc,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fs(i,t,e,n,s,r){Pi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ts.x=r*Pi.x-s*Pi.y,ts.y=s*Pi.x+r*Pi.y):ts.copy(Pi),i.copy(t),i.x+=ts.x,i.y+=ts.y,i.applyMatrix4(Sl)}class El extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hr=new U,ur=new U,Ec=new he,ns=new uo,ks=new gr,ea=new U,Tc=new U;class Bm extends Ee{constructor(t=new Ye,e=new El){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)hr.fromBufferAttribute(e,s-1),ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=hr.distanceTo(ur);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;Ec.copy(s).invert(),ns.copy(t.ray).applyMatrix4(Ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=u,p=_-1;g<p;g+=l){const m=h.getX(g),T=h.getX(g+1),S=zs(this,t,ns,c,m,T);S&&e.push(S)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(u),m=zs(this,t,ns,c,g,p);m&&e.push(m)}}else{const u=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=u,p=_-1;g<p;g+=l){const m=zs(this,t,ns,c,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=zs(this,t,ns,c,_-1,u);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zs(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(hr.fromBufferAttribute(a,s),ur.fromBufferAttribute(a,r),e.distanceSqToSegment(hr,ur,ea,Tc)>n)return;ea.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ea);if(!(c<t.near||c>t.far))return{distance:c,point:Tc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bc=new U,Ac=new U;class Fm extends Bm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bc.fromBufferAttribute(e,s),Ac.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bc.distanceTo(Ac);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tl extends Le{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Hs=new U,Gs=new U,na=new U,Vs=new Xe;class km extends Ye{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(tr*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),d={},u=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:p,c:m}=Vs;if(g.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Vs.getNormal(na),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const S=(T+1)%3,b=f[T],D=f[S],C=Vs[h[T]],R=Vs[h[S]],O=`${b}_${D}`,Q=`${D}_${b}`;Q in d&&d[Q]?(na.dot(d[Q].normal)<=r&&(u.push(C.x,C.y,C.z),u.push(R.x,R.y,R.z)),d[Q]=null):O in d||(d[O]={index0:l[T],index1:l[S],normal:na.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:p}=d[_];Hs.fromBufferAttribute(o,g),Gs.fromBufferAttribute(o,p),u.push(Hs.x,Hs.y,Hs.z),u.push(Gs.x,Gs.y,Gs.z)}this.setAttribute("position",new ve(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class _o extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new U,d=new U,u=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const T=[],S=m/n;let b=0;m===0&&a===0?b=.5/e:m===n&&c===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){const C=D/e;f.x=-t*Math.cos(s+C*r)*Math.sin(a+S*o),f.y=t*Math.cos(a+S*o),f.z=t*Math.sin(s+C*r)*Math.sin(a+S*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(C+b,1-S),T.push(l++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<e;T++){const S=h[m][T+1],b=h[m][T],D=h[m+1][T],C=h[m+1][T+1];(m!==0||a>0)&&u.push(S,b,C),(m!==n-1||c<Math.PI)&&u.push(b,D,C)}this.setIndex(u),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fr extends hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bl extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ia=new he,Rc=new U,wc=new U;class zm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hm extends zm{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Hm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vm extends bl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cc(){return performance.now()}const Pc=new he;class Xm{constructor(t,e,n=0,s=1/0){this.ray=new uo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(t,e=!0,n=[]){return eo(t,this,n,e),n.sort(Lc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)eo(t[s],this,n,e);return n.sort(Lc),n}}function Lc(i,t){return i.distance-t.distance}function eo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)eo(r[a],t,e,!0)}}class Ym extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);const Ft=768,Ot=768,se=32,we=16,sa=Ft/we,ra=Ot/we,go=14,oi=9,qm=600,tn=.6,Km=55,$m=30,Zm=5,as=20,jm=8,Jm=5,Qm=16,Oi=1/Qm;function aa(i,t){return{u:i*Oi,v:1-(t+1)*Oi}}class ne{constructor({id:t,name:e,color:n,hardness:s,minTier:r=0,dropItem:a=null,dropCount:o=1,isTransparent:c=!1,isSolid:l=!0,isFarmland:h=!1,isHazard:f=!1,atlasCol:d=0,atlasRow:u=0,atlasTop:_=null,atlasBottom:g=null}){this.id=t,this.name=e,this.color=n,this.hardness=s,this.minTier=r,this.dropItem=a,this.dropCount=o,this.isTransparent=c,this.isSolid=l,this.isFarmland=h,this.isHazard=f,this.uvSide=aa(d,u),this.uvTop=_?aa(_[0],_[1]):this.uvSide,this.uvBottom=g?aa(g[0],g[1]):this.uvSide}}const x={AIR:0,GRASS:1,DIRT:2,STONE:3,COBBLESTONE:4,WOOD_LOG:5,LEAVES:6,SAND:7,IRON_ORE:8,CRYSTAL_ORE:9,FARMLAND:10,CRAFTING_TABLE:11,FORGE:12,ALTAR:13,WATER:14,GRAVEL:15,PLANKS:16,GLASS:17,CHEST:18,TORCH:19,CAMPFIRE:20,BED:21,NETHERRACK:22,LAVA:23,GLOWSTONE:24,OBSIDIAN:25,PORTAL:26},Yi={[x.AIR]:new ne({id:x.AIR,name:"air",color:"#000000",hardness:0,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:15}),[x.GRASS]:new ne({id:x.GRASS,name:"grass",color:"#4a8f3f",hardness:.5,dropItem:"dirt",atlasCol:3,atlasRow:0,atlasTop:[0,0],atlasBottom:[2,0]}),[x.DIRT]:new ne({id:x.DIRT,name:"dirt",color:"#8b6914",hardness:.5,atlasCol:2,atlasRow:0}),[x.STONE]:new ne({id:x.STONE,name:"stone",color:"#888888",hardness:1.5,minTier:1,dropItem:"cobblestone",atlasCol:1,atlasRow:0}),[x.COBBLESTONE]:new ne({id:x.COBBLESTONE,name:"cobblestone",color:"#6b6b6b",hardness:2,minTier:1,atlasCol:0,atlasRow:1}),[x.WOOD_LOG]:new ne({id:x.WOOD_LOG,name:"wood_log",color:"#6b4423",hardness:1,atlasCol:4,atlasRow:1,atlasTop:[5,1],atlasBottom:[5,1]}),[x.LEAVES]:new ne({id:x.LEAVES,name:"leaves",color:"#2d6e1e",hardness:.2,dropItem:null,isTransparent:!0,atlasCol:4,atlasRow:3}),[x.SAND]:new ne({id:x.SAND,name:"sand",color:"#d4c27a",hardness:.5,atlasCol:2,atlasRow:1}),[x.IRON_ORE]:new ne({id:x.IRON_ORE,name:"iron_ore",color:"#7a7a60",hardness:3,minTier:2,dropItem:"iron_ore",atlasCol:1,atlasRow:2}),[x.CRYSTAL_ORE]:new ne({id:x.CRYSTAL_ORE,name:"crystal_ore",color:"#4a2080",hardness:4.5,minTier:3,dropItem:"crystal_shard",atlasCol:2,atlasRow:2}),[x.FARMLAND]:new ne({id:x.FARMLAND,name:"farmland",color:"#4a2e08",hardness:.5,dropItem:"dirt",isFarmland:!0,atlasCol:6,atlasRow:0}),[x.CRAFTING_TABLE]:new ne({id:x.CRAFTING_TABLE,name:"crafting_table",color:"#8b4513",hardness:1,atlasCol:11,atlasRow:2,atlasTop:[11,2],atlasBottom:[4,0]}),[x.FORGE]:new ne({id:x.FORGE,name:"forge",color:"#555555",hardness:1.5,minTier:1,atlasCol:13,atlasRow:2}),[x.ALTAR]:new ne({id:x.ALTAR,name:"altar",color:"#200030",hardness:999,atlasCol:14,atlasRow:2}),[x.WATER]:new ne({id:x.WATER,name:"water",color:"#2255aa",hardness:999,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:12}),[x.GRAVEL]:new ne({id:x.GRAVEL,name:"gravel",color:"#888877",hardness:.6,atlasCol:3,atlasRow:1}),[x.PLANKS]:new ne({id:x.PLANKS,name:"planks",color:"#c8a44a",hardness:.75,atlasCol:4,atlasRow:0}),[x.GLASS]:new ne({id:x.GLASS,name:"glass",color:"#aaddff",hardness:.3,isTransparent:!0,atlasCol:1,atlasRow:3}),[x.CHEST]:new ne({id:x.CHEST,name:"chest",color:"#8b6914",hardness:.75,atlasCol:9,atlasRow:1}),[x.TORCH]:new ne({id:x.TORCH,name:"torch",color:"#ffaa00",hardness:0,isSolid:!1,isTransparent:!0,atlasCol:0,atlasRow:5}),[x.CAMPFIRE]:new ne({id:x.CAMPFIRE,name:"campfire",color:"#cc4400",hardness:.5,atlasCol:7,atlasRow:5}),[x.BED]:new ne({id:x.BED,name:"bed",color:"#a02020",hardness:.3,atlasCol:6,atlasRow:1,atlasTop:[7,1]}),[x.NETHERRACK]:new ne({id:x.NETHERRACK,name:"netherrack",color:"#5a2a20",hardness:1,minTier:1,atlasCol:3,atlasRow:2}),[x.LAVA]:new ne({id:x.LAVA,name:"lava",color:"#e8480a",hardness:999,isTransparent:!0,isSolid:!0,isHazard:!0,atlasCol:4,atlasRow:2}),[x.GLOWSTONE]:new ne({id:x.GLOWSTONE,name:"glowstone",color:"#f0d878",hardness:.5,atlasCol:5,atlasRow:2}),[x.OBSIDIAN]:new ne({id:x.OBSIDIAN,name:"obsidian",color:"#1a0e28",hardness:6,minTier:4,atlasCol:6,atlasRow:2}),[x.PORTAL]:new ne({id:x.PORTAL,name:"nether_portal",color:"#9020e0",hardness:999,isTransparent:!0,isSolid:!0,atlasCol:7,atlasRow:2})},t0={};for(const i of Object.values(Yi))t0[i.name]=i;class Ic{constructor(){this.data=new Uint8Array(Ft*se*Ot),this.data.fill(x.AIR)}_idx(t,e,n){return t*se*Ot+e*Ot+n}inBounds(t,e,n){return t>=0&&t<Ft&&e>=0&&e<se&&n>=0&&n<Ot}get(t,e,n){return this.inBounds(t,e,n)?this.data[this._idx(t,e,n)]:x.AIR}set(t,e,n,s){this.inBounds(t,e,n)&&(this.data[this._idx(t,e,n)]=s)}isSolid(t,e,n){if(!this.inBounds(t,e,n))return!1;const s=this.get(t,e,n);return s!==x.AIR&&s!==x.WATER&&s!==x.LEAVES&&s!==x.LAVA}surfaceY(t,e){for(let n=se-1;n>=0;n--)if(this.get(t,n,e)!==x.AIR)return n;return-1}serialize(){const t=this.data,e=[];let n=0;for(;n<t.length;){const s=t[n];let r=1;for(;n+r<t.length&&t[n+r]===s;)r++;e.push(s,r),n+=r}return e}deserialize(t){const e=Ft*se*Ot;if(t.length===e){this.data=new Uint8Array(t);return}const n=new Uint8Array(e);let s=0;for(let r=0;r<t.length;r+=2){const a=t[r],o=t[r+1];n.fill(a,s,s+o),s+=o}this.data=n}}const e0=[{dir:[0,0,-1],normal:[0,0,-1],uvKey:"uvSide"},{dir:[0,0,1],normal:[0,0,1],uvKey:"uvSide"},{dir:[-1,0,0],normal:[-1,0,0],uvKey:"uvSide"},{dir:[1,0,0],normal:[1,0,0],uvKey:"uvSide"},{dir:[0,1,0],normal:[0,1,0],uvKey:"uvTop"},{dir:[0,-1,0],normal:[0,-1,0],uvKey:"uvBottom"}],n0=[[[0,0,0],[1,0,0],[1,1,0],[0,1,0]],[[1,0,1],[0,0,1],[0,1,1],[1,1,1]],[[0,0,1],[0,0,0],[0,1,0],[0,1,1]],[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],[[0,1,0],[1,1,0],[1,1,1],[0,1,1]],[[0,0,1],[1,0,1],[1,0,0],[0,0,0]]];class Nc{constructor(t,e,n,s,r){this.cx=t,this.cz=e,this.worldData=n,this.material=s,this.waterMaterial=r,this.mesh=null,this.waterMesh=null,this.build()}build(){var u,_;const t=[],e=[],n=[],s=[];let r=0;const a=[],o=[],c=[],l=[];let h=0;const f=this.cx*we,d=this.cz*we;for(let g=0;g<we;g++){const p=f+g;for(let m=0;m<se;m++)for(let T=0;T<we;T++){const S=d+T,b=this.worldData.get(p,m,S);if(b===x.AIR)continue;const D=Yi[b];if(!D||!D.isSolid&&!D.isTransparent)continue;const C=b===x.WATER;if(!(!D.isSolid&&!C))for(let R=0;R<6;R++){const O=e0[R],Q=p+O.dir[0],v=m+O.dir[1],E=S+O.dir[2],W=this.worldData.get(Q,v,E),H=Yi[W];if(C&&W===x.WATER||!(!H||!H.isSolid||H.isTransparent))continue;const q=D[O.uvKey],z=[[q.u,q.v],[q.u+Oi,q.v],[q.u+Oi,q.v+Oi],[q.u,q.v+Oi]],J=n0[R],G=C?a:t,ut=C?o:e,ft=C?c:n,vt=C?l:s,Bt=C?h:r;for(let zt=0;zt<4;zt++){const Y=J[zt],et=C&&Y[1]===1?.9:Y[1];G.push(g+Y[0],m+et,T+Y[2]),ut.push(...O.normal),ft.push(z[zt][0],z[zt][1])}vt.push(Bt,Bt+1,Bt+2,Bt,Bt+2,Bt+3),C?h+=4:r+=4}}}if(this.mesh&&(this.mesh.geometry.dispose(),(u=this.mesh.parent)==null||u.remove(this.mesh)),this.waterMesh&&(this.waterMesh.geometry.dispose(),(_=this.waterMesh.parent)==null||_.remove(this.waterMesh)),r===0)this.mesh=null;else{const g=new Ye;g.setAttribute("position",new ve(t,3)),g.setAttribute("normal",new ve(e,3)),g.setAttribute("uv",new ve(n,2)),g.setIndex(s),g.computeBoundingBox(),this.mesh=new Se(g,this.material),this.mesh.position.set(this.cx*we,0,this.cz*we)}if(h===0)this.waterMesh=null;else{const g=new Ye;g.setAttribute("position",new ve(a,3)),g.setAttribute("normal",new ve(o,3)),g.setAttribute("uv",new ve(c,2)),g.setIndex(l),g.computeBoundingBox(),this.waterMesh=new Se(g,this.waterMaterial),this.waterMesh.position.set(this.cx*we,0,this.cz*we)}}dispose(){var t,e;this.mesh&&(this.mesh.geometry.dispose(),(t=this.mesh.parent)==null||t.remove(this.mesh),this.mesh=null),this.waterMesh&&(this.waterMesh.geometry.dispose(),(e=this.waterMesh.parent)==null||e.remove(this.waterMesh),this.waterMesh=null)}}class Uc{constructor(t,e,n){this.scene=t,this.worldData=e;const s=new fr({map:n,alphaTest:.1,side:Be});this.material=s;const r=new fr({map:n,transparent:!0,opacity:.75,depthWrite:!1,side:Be});this.waterMaterial=r,this.chunks=new Map,this.group=new Un,this.scene.add(this.group),this._buildAll()}_buildAll(){for(let t=0;t<sa;t++)for(let e=0;e<ra;e++)this._buildChunk(t,e)}_buildChunk(t,e){const n=`${t},${e}`,s=this.chunks.get(n);s&&s.dispose();const r=new Nc(t,e,this.worldData,this.material,this.waterMaterial);this.chunks.set(n,r),r.mesh&&this.group.add(r.mesh),r.waterMesh&&this.group.add(r.waterMesh)}rebuildChunk(t,e){if(t<0||t>=sa||e<0||e>=ra)return;const n=`${t},${e}`,s=this.chunks.get(n);s!=null&&s.mesh&&this.group.remove(s.mesh),s!=null&&s.waterMesh&&this.group.remove(s.waterMesh),this._buildChunk(t,e);const r=[[t-1,e],[t+1,e],[t,e-1],[t,e+1]];for(const[a,o]of r){if(a<0||a>=sa||o<0||o>=ra)continue;const c=`${a},${o}`,l=this.chunks.get(c);l!=null&&l.mesh&&this.group.remove(l.mesh),l!=null&&l.waterMesh&&this.group.remove(l.waterMesh);const h=new Nc(a,o,this.worldData,this.material,this.waterMaterial);this.chunks.set(c,h),h.mesh&&this.group.add(h.mesh),h.waterMesh&&this.group.add(h.waterMesh)}}get allMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}}const Z=4,Dn=2;function Ws(i,t){let e=Math.imul(i*1664525+t,22695477)+1013904223;return e^=e>>>16,e=Math.imul(e,73244475),e^=e>>>16,(e>>>0)/4294967295}function le(i,t,e){const n=Math.floor(i/e),s=Math.floor(t/e),r=i/e-n,a=t/e-s,o=r*r*(3-2*r),c=a*a*(3-2*a);return Ws(n,s)*(1-o)*(1-c)+Ws(n+1,s)*o*(1-c)+Ws(n,s+1)*(1-o)*c+Ws(n+1,s+1)*o*c}function Dc(i,t,e=4,n=55){let s=0,r=1,a=1,o=0;for(let c=0;c<e;c++)s+=le(i*a,t*a,n)*r,o+=r,r*=.5,a*=2.1;return s/o}function fs(i,t){const e=Ft/2,n=Ot/2,s=(i-e)/(Ft*.44),r=(t-n)/(Ot*.44),a=le(i,t,52)*.2-.1;return Math.sqrt(s*s+r*r)+a}function i0(i){s0(i),r0(i),a0(i),o0(i),_0(i),c0(i),l0(i),h0(i),u0(i),f0(i),S0(i),d0(i),p0(i),g0(i),m0(i),v0(i),x0(i),y0(i),M0(i),E0(i),T0(i),b0(i),A0(i),R0(i),w0(i),C0(i),P0(i),L0(i),I0(i),N0(i)}function s0(i){for(let t=0;t<Ft;t++)for(let e=0;e<Ot;e++){const n=fs(t,e);if(n>.92)continue;const s=Math.floor(go-2-n*n*5);for(let r=0;r<=Math.min(s,se-1);r++)i.set(t,r,e,x.STONE)}}function r0(i){for(let t=0;t<Ft;t++)for(let e=0;e<Ot;e++){const n=fs(t,e);if(n>.9)continue;const s=Dc(t,e,4,58)*4,r=Dc(t+300,e+300,3,24)*1.5,a=le(t,e,12)*.6,o=Math.max(0,1-n*1.3),c=Math.round(go+(s+r+a-3)*o),l=Math.max(oi,Math.min(c,se-4));i.set(t,l,e,x.GRASS);for(let h=1;h<=4;h++)l-h>=0&&i.get(t,l-h,e)===x.STONE&&i.set(t,l-h,e,x.DIRT)}}function a0(i){for(let t=0;t<Ft;t++)for(let e=0;e<Ot;e++){const n=fs(t,e);if(n<.68||n>.92)continue;const s=i.surfaceY(t,e);if(s<oi-2||s>oi+2)continue;const r=2+Math.round(le(t*2,e*2,20));for(let a=0;a<r;a++){const o=s-a;if(o<0)break;const c=i.get(t,o,e);(c===x.GRASS||c===x.DIRT||c===x.STONE)&&i.set(t,o,e,x.SAND)}}}function o0(i){const t=[[114*Z,90*Z,5],[66*Z,114*Z,4],[140*Z,70*Z,5],[80*Z,50*Z,4],[110*Z,150*Z,6]];for(const[e,n,s]of t)for(let r=e-s-2;r<=e+s+2;r++)for(let a=n-s-2;a<=n+s+2;a++){const o=Math.sqrt((r-e)**2+(a-n)**2);if(o>s+.5)continue;const c=i.surfaceY(r,a);c<0||(i.set(r,c,a,x.WATER),o<s-1&&i.set(r,c-1,a,x.DIRT),o>=s-1&&i.get(r,c,a)===x.GRASS&&i.set(r,c,a,x.SAND))}}function Al(i,t,e,n,s){for(let r=t-s;r<=t+s;r++)for(let a=e-s;a<=e+s;a++){if(r<0||r>=Ft||a<0||a>=Ot)continue;const o=Math.sqrt((r-t)**2+(a-e)**2),c=le(r,a,16)*6-3,l=Math.max(0,Math.floor(n-o*(n/s)+c));if(l===0)continue;for(let f=0;f<Math.min(l,se);f++)i.set(r,f,a,x.STONE);const h=i.get(r,l,a);(h===x.AIR||h===x.GRASS||h===x.DIRT)&&i.set(r,l,a,l>n-4?x.GRAVEL:x.STONE),l>=n-3&&i.inBounds(r,l+1,a)&&i.set(r,l+1,a,x.GRAVEL)}}function c0(i){Al(i,46*Z,46*Z,28,28*Dn)}function l0(i){Al(i,150*Z,44*Z,22,20*Dn)}function h0(i){const t=138*Z,e=138*Z,n=28*Dn;for(let r=t-n;r<=t+n;r++)for(let a=e-n;a<=e+n;a++){if(r<0||r>=Ft||a<0||a>=Ot||Math.sqrt((r-t)**2+(a-e)**2)>n)continue;const c=i.surfaceY(r,a);if(c<0)continue;i.get(r,c,a)===x.GRASS&&i.set(r,c,a,x.GRAVEL),le(r*2,a*2,14)<.32&&c<=oi+2&&(i.set(r,c,a,x.WATER),i.set(r,c-1,a,x.DIRT))}const s=[[120,120],[126,124],[122,132],[130,126],[136,130],[142,122],[128,140],[134,142],[144,136],[118,136],[148,128],[122,148],[138,148],[150,140],[112,128]].map(([r,a])=>[r*Z,a*Z]);for(const[r,a]of s){const o=i.surfaceY(r,a);if(o<0||i.get(r,o,a)===x.WATER)continue;const c=4+Math.round(le(r,a,10));for(let l=1;l<=c;l++)i.set(r,o+l,a,x.WOOD_LOG);for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){if(Math.abs(l)+Math.abs(h)>1)continue;const f=r+l,d=o+c,u=a+h;i.inBounds(f,d,u)&&i.get(f,d,u)===x.AIR&&i.set(f,d,u,x.LEAVES)}}}function u0(i){const t=50*Z,e=150*Z,n=30*Dn;for(let s=t-n;s<=t+n;s+=5)for(let r=e-n;r<=e+n;r+=5){if(Math.sqrt((s-t)**2+(r-e)**2)>n)continue;const o=Math.floor(le(s,r,3)*4)-2,c=Math.floor(le(s+50,r+50,3)*4)-2,l=s+o,h=r+c;if(l<4||l>=Ft-4||h<4||h>=Ot-4)continue;const f=i.surfaceY(l,h);if(f<0)continue;const d=i.get(l,f,h);if(d!==x.GRASS&&d!==x.DIRT)continue;const u=5+Math.round(le(l*2,h*2,6)*4);for(let g=1;g<=u;g++)i.set(l,f+g,h,x.WOOD_LOG);const _=3;for(let g=-_;g<=_;g++)for(let p=-_;p<=_;p++)for(let m=-1;m<=2;m++){if(Math.abs(g)===_&&Math.abs(p)===_)continue;const T=l+g,S=f+u+m,b=h+p;i.inBounds(T,S,b)&&i.get(T,S,b)===x.AIR&&i.set(T,S,b,x.LEAVES)}}}function f0(i){const t=[];for(let n=14;n<Ft-14;n++)for(let s=14;s<Ot-14;s++){if(fs(n,s)>.78)continue;const a=Math.sqrt((n-138*Z)**2+(s-138*Z)**2)<30*Dn,o=Math.sqrt((n-46*Z)**2+(s-46*Z)**2)<8*Dn,c=Math.sqrt((n-150*Z)**2+(s-44*Z)**2)<6*Dn,l=Math.sqrt((n-50*Z)**2+(s-150*Z)**2)<32*Dn;if(a||o||c||l)continue;le(n*3,s*3,20)>.7&&t.push([n,s])}const e=Math.max(1,Math.floor(t.length/(70*Z)));for(let n=0;n<t.length;n+=e){const[s,r]=t[n],a=i.surfaceY(s,r);if(a<0)continue;const o=i.get(s,a,r);if(o!==x.GRASS&&o!==x.DIRT)continue;const c=4+Math.round(le(s,r,12)*3);for(let h=1;h<=c;h++)i.set(s,a+h,r,x.WOOD_LOG);const l=2;for(let h=-l;h<=l;h++)for(let f=-l;f<=l;f++)for(let d=-1;d<=2;d++){if(Math.abs(h)===l&&Math.abs(f)===l)continue;const u=s+h,_=a+c+d,g=r+f;i.inBounds(u,_,g)&&i.get(u,_,g)===x.AIR&&i.set(u,_,g,x.LEAVES)}}}function d0(i){const t=[[78,42],[42,80],[108,60],[60,108],[132,88],[88,132],[160,96],[96,160],[70,70],[120,120],[160,60],[60,160],[100,40],[40,100],[155,100],[100,155]].map(([e,n])=>[e*Z,n*Z]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(!(s<0)&&i.get(e,s,n)===x.GRASS){for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){if(Math.abs(r)+Math.abs(a)>1)continue;const o=i.surfaceY(e+r,n+a);o>=0&&i.set(e+r,o+1,n+a,x.STONE)}i.set(e,s+2,n,x.STONE)}}}function p0(i){let t=42;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=48*Z;for(let s=0;s<n;s++){let r=16+Math.floor(e()*(Ft-32)),a=2+Math.floor(e()*9),o=16+Math.floor(e()*(Ot-32));const c=30+Math.floor(e()*60);let l=e()*2-1,h=e()*2-1;for(let f=0;f<c;f++){const d=1+(e()>.65?1:0)+(e()>.9?1:0);for(let u=-d;u<=d;u++)for(let _=0;_<=d;_++)for(let g=-d;g<=d;g++)i.inBounds(r+u,a+_,o+g)&&i.get(r+u,a+_,o+g)!==x.AIR&&i.set(r+u,a+_,o+g,x.AIR);if(r+=Math.round(l),o+=Math.round(h),l+=(e()-.5)*.45,h+=(e()-.5)*.45,l=Math.max(-1.5,Math.min(1.5,l)),h=Math.max(-1.5,Math.min(1.5,h)),!i.inBounds(r,a,o))break}}}function m0(i){let t=13;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295);for(let n=0;n<80*Z;n++){const s=12+Math.floor(e()*(Ft-24)),r=2+Math.floor(e()*8),a=12+Math.floor(e()*(Ot-24));for(let o=0;o<4+Math.floor(e()*6);o++){const c=s+Math.floor(e()*3)-1,l=r+Math.floor(e()*2),h=a+Math.floor(e()*3)-1;i.inBounds(c,l,h)&&i.get(c,l,h)===x.STONE&&i.set(c,l,h,x.IRON_ORE)}}for(let n=0;n<30*Z;n++){const s=10+Math.floor(e()*(Ft-20)),r=1+Math.floor(e()*5),a=10+Math.floor(e()*(Ot-20));for(let o=0;o<3+Math.floor(e()*4);o++){const c=s+Math.floor(e()*3)-1,l=a+Math.floor(e()*3)-1;i.inBounds(c,r,l)&&i.get(c,r,l)===x.STONE&&i.set(c,r,l,x.CRYSTAL_ORE)}}}function _0(i){let t=120*Z,e=70*Z,n=.6,s=1;for(let r=0;r<55*Z;r++){const a=3+Math.round(le(t,e,8)*2);for(let c=-a;c<=a;c++)for(let l=-a;l<=a;l++){if(Math.sqrt(c*c+l*l)>a)continue;const f=Math.floor(10+le(t+c,e+l,6)*5),d=Math.floor(t+c),u=Math.floor(e+l);if(!i.inBounds(d,0,u))continue;const _=i.surfaceY(d,u);for(let p=_;p>=Math.max(2,_-f);p--)i.set(d,p,u,x.AIR);const g=Math.max(2,_-f);i.inBounds(d,g,u)&&i.set(d,g,u,x.GRAVEL)}n+=(le(t*.1,e*.1,4)-.5)*.4,s+=(le(t*.1+50,e*.1+50,4)-.5)*.4;const o=Math.sqrt(n*n+s*s);n/=o,s/=o,t+=n*1.8,e+=s*1.8}}function g0(i){const t=155*Z,e=5,n=55*Z,s=12,r=5,a=11;for(let o=-s;o<=s;o++)for(let c=-r;c<=r;c++)for(let l=-a;l<=a;l++){if((o/s)**2+(c/r)**2+(l/a)**2>1)continue;const f=t+o,d=e+c,u=n+l;i.inBounds(f,d,u)&&i.set(f,d,u,x.AIR)}for(let o=-s;o<=s;o++)for(let c=-r;c<=r;c++)for(let l=-a;l<=a;l++){const h=(o/s)**2+(c/r)**2+(l/a)**2;if(h<.75||h>1.15)continue;const f=t+o,d=e+c,u=n+l;i.inBounds(f,d,u)&&i.get(f,d,u)===x.STONE&&le(f,d+u*3,4)>.5&&i.set(f,d,u,x.CRYSTAL_ORE)}}function v0(i){const t=i.surfaceY(100*Z,100*Z);t>=0&&i.set(100*Z,t+1,100*Z,x.CRAFTING_TABLE);const e=i.surfaceY(50*Z,148*Z);e>=0&&i.set(50*Z,e+1,148*Z,x.CRAFTING_TABLE);const n=i.surfaceY(50*Z,50*Z);n>=0&&i.set(50*Z,n+1,50*Z,x.FORGE);const s=i.surfaceY(152*Z,48*Z);s>=0&&i.set(152*Z,s+1,48*Z,x.FORGE);const r=i.surfaceY(138*Z,138*Z);r>=0&&(i.set(138*Z,r+1,138*Z,x.ALTAR),i.set(138*Z,r+2,138*Z,x.ALTAR),i.set(138*Z,r+3,138*Z,x.ALTAR));{const a=Math.floor(Ft/2)+6,o=Math.floor(Ot/2),c=i.surfaceY(a,o);if(c>=0){for(const l of[-1,0,1])i.set(a+l,c+1,o,x.OBSIDIAN),i.set(a+l,c+4,o,x.OBSIDIAN);for(const l of[-1,1])i.set(a+l,c+2,o,x.OBSIDIAN),i.set(a+l,c+3,o,x.OBSIDIAN);i.set(a,c+2,o,x.PORTAL),i.set(a,c+3,o,x.PORTAL)}}}function x0(i){const t=[[76,80],[116,62],[88,155],[60,92],[168,100]].map(([e,n])=>[e*Z,n*Z]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0)continue;const r=i.get(e,s,n);if(r===x.WATER||r===x.SAND)continue;const a=7,o=5,c=4;for(let h=0;h<a;h++)for(let f=0;f<o;f++){const d=e+h-Math.floor(a/2),u=n+f-Math.floor(o/2);if(!(h===0||h===a-1||f===0||f===o-1))continue;const g=i.surfaceY(d,u);if(g<0)continue;const p=c-Math.round(le(d,u,3)*2.5);for(let m=1;m<=Math.max(1,p);m++){const T=le(d*2,u*2+m,2)>.6?x.COBBLESTONE:x.STONE;i.set(d,g+m,u,T)}i.set(d,g,u,x.COBBLESTONE)}for(let h=0;h<12;h++){const f=e+Math.floor(le(e+h,n+h*3,3)*9)-4,d=n+Math.floor(le(e+h*2,n+h,3)*7)-3,u=i.surfaceY(f,d);u>=0&&i.set(f,u+1,d,x.COBBLESTONE)}const l=s+c-1;for(let h=1;h<a-1;h++){const f=e+h-Math.floor(a/2);le(f,n,5)>.55&&i.set(f,l,n-1,x.PLANKS)}}}function y0(i){const t=96*Z,e=120*Z,n=9,s=10;for(let a=0;a<n;a++){const o=a/n*Math.PI*2,c=Math.round(t+Math.cos(o)*s),l=Math.round(e+Math.sin(o)*s),h=i.surfaceY(c,l);if(h<0||i.get(c,h,l)===x.WATER)continue;const d=3+(a%3===0?1:0);for(let u=1;u<=d;u++)i.set(c,h+u,l,x.STONE);d===4&&(i.set(c-1,h+d,l,x.STONE),i.set(c+1,h+d,l,x.STONE))}const r=i.surfaceY(t,e);r>=0&&(i.set(t,r+1,e,x.STONE),i.set(t-1,r+1,e,x.STONE),i.set(t+1,r+1,e,x.STONE),i.set(t,r+1,e-1,x.STONE),i.set(t,r+1,e+1,x.STONE));for(let a=0;a<18;a++){const o=t+Math.round(Math.sin(a*.22)*2),c=e+s+a+2,l=i.surfaceY(o,c);l>=0&&i.get(o,l,c)===x.GRASS&&i.set(o,l,c,x.GRAVEL)}}function M0(i){const t=[[72,130],[108,88],[55,65],[170,130],[90,168]].map(([e,n])=>[e*Z,n*Z]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===x.WATER)continue;i.set(e,s+1,n,x.CAMPFIRE);for(const[o,c]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const l=i.surfaceY(e+o,n+c);l>=0&&i.set(e+o,l+1,n+c,x.COBBLESTONE)}const r=[[-2,0],[2,0],[0,-2],[0,2]];for(const[o,c]of r){const l=i.surfaceY(e+o,n+c);l>=0&&i.get(e+o,l,n+c)!==x.WATER&&i.set(e+o,l+1,n+c,x.WOOD_LOG)}const a=i.surfaceY(e+2,n+2);a>=0&&i.set(e+2,a+1,n+2,x.CHEST);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const l=i.surfaceY(e+o,n+c);l>=0&&i.get(e+o,l,n+c)===x.GRASS&&i.set(e+o,l,n+c,x.DIRT)}}}function S0(i){const t=[[80,90,1,5],[105,75,0,4],[65,110,1,6],[130,90,0,5],[75,140,1,4],[44,140,0,5],[160,80,1,4],[100,130,0,5],[55,75,1,3],[140,110,0,4],[175,115,1,5],[85,58,0,4]].map(([e,n,s,r])=>[e*Z,n*Z,s,r]);for(const[e,n,s,r]of t){const a=i.surfaceY(e,n);if(!(a<0)&&i.get(e,a,n)!==x.WATER)for(let o=0;o<r;o++){const c=s===0?e+o:e,l=s===1?n+o:n,h=i.surfaceY(c,l);h>=0&&i.get(c,h,l)!==x.WATER&&i.set(c,h+1,l,x.WOOD_LOG)}}}function E0(i){const t=[[30,30],[155,50],[95,162],[170,70],[52,170],[120,40],[60,40],[168,155]].map(([e,n])=>[e*Z,n*Z]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===x.WATER)continue;i.set(e,s+1,n,x.CHEST);const r=[[1,0],[-1,0],[0,1],[0,-1]];for(const[a,o]of r){const c=i.surfaceY(e+a,n+o);c>=0&&i.get(e+a,c,n+o)===x.GRASS&&i.set(e+a,c+1,n+o,x.COBBLESTONE)}}}function T0(i){let t=68*Z,e=112*Z;const n={x:114*Z,z:90*Z};for(let s=0;s<60*Z;s++){const r=n.x-t,a=n.z-e,o=Math.sqrt(r*r+a*a);if(o<4)break;const c=r/o+(le(t*.1,e*.1,5)-.5)*.8,l=a/o+(le(t*.1+30,e*.1+30,5)-.5)*.8;t+=c,e+=l;const h=Math.floor(t),f=Math.floor(e);if(!i.inBounds(h,0,f))break;for(let d=-1;d<=1;d++)for(let u=-1;u<=1;u++){const _=h+d,g=f+u;if(!i.inBounds(_,0,g))continue;const p=i.surfaceY(_,g);p<0||p<=oi||p>oi+4||i.get(_,p,g)===x.WATER||(i.set(_,p,g,x.WATER),Math.abs(d)+Math.abs(u)===1&&i.get(_,p,g)===x.GRASS&&i.set(_,p,g,x.SAND))}}}function b0(i){const t=110*Z,e=125*Z;for(let r=-6;r<=6;r++)for(let a=-6;a<=6;a++){const o=t+r,c=e+a,l=i.surfaceY(o,c);l<0||i.get(o,l,c)===x.WATER||i.get(o,l,c)===x.GRASS&&i.set(o,l,c,x.DIRT)}const n=[[-4,-4],[0,-4],[4,-4],[-4,0],[4,0],[-4,4],[0,4],[4,4]];for(const[r,a]of n){const o=t+r,c=e+a,l=i.surfaceY(o,c);l<0||(i.set(o,l+1,c,x.STONE),i.set(o,l+2,c,x.STONE),i.set(o-1,l+2,c,x.COBBLESTONE),i.set(o+1,l+2,c,x.COBBLESTONE))}for(let r=-5;r<=5;r++){const a=i.surfaceY(t+r,e-5),o=i.surfaceY(t+r,e+5);a>=0&&i.set(t+r,a+1,e-5,x.COBBLESTONE),o>=0&&i.set(t+r,o+1,e+5,x.COBBLESTONE)}for(let r=-4;r<=4;r++){const a=i.surfaceY(t-5,e+r),o=i.surfaceY(t+5,e+r);a>=0&&i.set(t-5,a+1,e+r,x.COBBLESTONE),o>=0&&i.set(t+5,o+1,e+r,x.COBBLESTONE)}const s=i.surfaceY(t,e+5);s>=0&&(i.set(t-1,s+1,e+5,x.AIR),i.set(t+1,s+1,e+5,x.AIR))}function is(i,t,e,n,s,r,a,o){const c=i.surfaceY(t,e);if(c<0)return c;for(let d=0;d<=n;d++){const u=c+d;if(u>=se)break;for(let _=0;_<s;_++)for(let g=0;g<s;g++){const p=t-Math.floor(s/2)+_,m=e-Math.floor(s/2)+g;if(!i.inBounds(p,u,m))continue;const T=_===0||_===s-1||g===0||g===s-1,S=_>0&&_<s-1&&g>0&&g<s-1;d===0||T?i.set(p,u,m,r):d===n||d%4===0&&S?i.set(p,u,m,a):i.set(p,u,m,x.AIR)}}if(o){const d=c+n+1;if(d<se){for(let u=0;u<s;u++)for(let _=0;_<s;_++)if((u===0||u===s-1||_===0||_===s-1)&&(u+_)%2===0){const p=t-Math.floor(s/2)+u,m=e-Math.floor(s/2)+_;i.inBounds(p,d,m)&&i.set(p,d,m,r)}}}const l=t,h=e+Math.floor(s/2);i.inBounds(l,c+1,h)&&(i.set(l,c+1,h,x.AIR),i.set(l,c+2,h,x.AIR));const f=c+n;return i.inBounds(t,f+1,e)&&f+1<se&&i.set(t,f+1,e,x.CHEST),c}function ge(i,t,e,n){i.inBounds(t,e,n)&&i.set(t,e,n,x.GLASS)}function A0(i){{const n=74*Z,s=68*Z,r=12,a=is(i,n,s,r,5,x.COBBLESTONE,x.PLANKS,!0);a>=0&&(ge(i,n,a+5,s-2),ge(i,n,a+5,s+2),ge(i,n-2,a+5,s),ge(i,n+2,a+5,s),ge(i,n,a+9,s-2),ge(i,n,a+9,s+2),ge(i,n-2,a+9,s),ge(i,n+2,a+9,s),a+r+2<se&&i.set(n+1,a+r+2,s+1,x.TORCH))}{const n=162*Z,s=80*Z,r=16,a=is(i,n,s,r,4,x.STONE,x.PLANKS,!0);if(a>=0){for(let o=3;o<r;o+=3)ge(i,n,a+o,s-1),ge(i,n,a+o,s+1),ge(i,n-1,a+o,s),ge(i,n+1,a+o,s);for(let o=0;o<3;o++){const c=a+r+1+o;if(c>=se)break;const l=2-o;for(let h=-l;h<=l;h++)for(let f=-l;f<=l;f++)i.inBounds(n+h,c,s+f)&&i.set(n+h,c,s+f,x.STONE)}a+r+4<se&&i.set(n,a+r+4,s,x.CRYSTAL_ORE),i.inBounds(n,a+1,s)&&i.set(n,a+1,s,x.FORGE)}}{const n=118*Z,s=145*Z,r=14,a=is(i,n,s,r,4,x.STONE,x.PLANKS,!1);if(a>=0){for(let o=2;o<r;o+=4)ge(i,n,a+o,s-1),ge(i,n,a+o,s+1);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++)(o+c+n+s)%3===0&&a+r<se&&i.set(n+o,a+r,s+c,x.AIR);i.inBounds(n,a+1,s-1)&&i.set(n,a+1,s-1,x.CHEST)}}{const n=96*Z,s=172*Z,r=15,a=is(i,n,s,r,3,x.COBBLESTONE,x.PLANKS,!0);if(a>=0){for(let o=r-2;o<=r-1;o++)for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)(Math.abs(c)===1||Math.abs(l)===1)&&i.inBounds(n+c,a+o,s+l)&&i.set(n+c,a+o,s+l,x.GLASS);a+r+1<se&&i.set(n,a+r+1,s,x.CRYSTAL_ORE);for(let o=1;o<8;o++){const c=n,l=s-o,h=i.surfaceY(c,l);h>=0&&i.set(c,h+1,l,x.COBBLESTONE)}}}const t=90*Z,e=102*Z;for(const[n,s]of[[t,72*Z],[e,72*Z]]){const a=is(i,n,s,8,3,x.COBBLESTONE,x.PLANKS,!0);a>=0&&(ge(i,n,a+4,s-1),ge(i,n,a+4,s+1))}{const n=72*Z,s=96*Z,r=i.surfaceY(s,n);if(r>=0){for(let a=t;a<=e;a++)i.surfaceY(a,n)<0||a===t||a===e||a>t+1&&a<e-1&&i.set(a,r+8,n,x.COBBLESTONE);for(let a=68*Z;a<78*Z;a++)for(let o=s-3;o<=s+3;o++){const c=i.surfaceY(o,a);c>=0&&i.get(o,c,a)!==x.WATER&&i.set(o,c,a,x.GRAVEL)}}}}function oa(i,t,e,n,s,r,a,o){const c=i.surfaceY(t,e);if(c<0||i.get(t,c,e)===x.WATER)return;for(let u=0;u<=r;u++){const _=c+u;if(_>=se)break;for(let g=0;g<n;g++)for(let p=0;p<s;p++){const m=t-Math.floor(n/2)+g,T=e-Math.floor(s/2)+p;if(!i.inBounds(m,_,T))continue;const S=g===0||g===n-1||p===0||p===s-1;u===0?i.set(m,_,T,x.COBBLESTONE):u===r?i.set(m,_,T,o):S?i.set(m,_,T,a):i.set(m,_,T,x.AIR)}}const h=t,f=e+Math.floor(s/2);i.inBounds(h,c+1,f)&&i.set(h,c+1,f,x.AIR),i.inBounds(h,c+2,f)&&i.set(h,c+2,f,x.AIR);const d=c+2;ge(i,t-Math.floor(n/2),d,e),ge(i,t+Math.floor(n/2)-(n%2===0?1:0),d,e),ge(i,t,d,e-Math.floor(s/2)),i.inBounds(t-1,c+1,e)&&i.set(t-1,c+1,e,x.CHEST),i.inBounds(t+1,c+1,e)&&i.set(t+1,c+1,e,x.CRAFTING_TABLE)}function ca(i,t,e){const n=i.surfaceY(t,e);if(!(n<0)&&i.get(t,n,e)!==x.WATER){i.set(t,n,e,x.WATER);for(const[s,r]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const a=i.surfaceY(t+s,e+r);a<0||(i.set(t+s,a+1,e+r,x.COBBLESTONE),i.set(t+s,a+2,e+r,x.STONE))}i.set(t-1,n+3,e,x.WOOD_LOG),i.set(t+1,n+3,e,x.WOOD_LOG)}}function be(i,t,e,n,s){const r=Math.max(Math.abs(n-t),Math.abs(s-e));for(let a=0;a<=r;a++){const o=r===0?0:a/r,c=Math.round(t+(n-t)*o),l=Math.round(e+(s-e)*o);for(let h=-1;h<=1;h++){const f=i.surfaceY(c+h,l);f>=0&&i.get(c+h,f,l)!==x.WATER&&i.set(c+h,f,l,x.GRAVEL);const d=i.surfaceY(c,l+h);d>=0&&i.get(c,d,l+h)!==x.WATER&&i.set(c,d,l+h,x.GRAVEL)}}}function Xs(i,t,e,n,s){const r=i.surfaceY(t,e);if(!(r<0||i.get(t,r,e)===x.WATER)){for(let a=0;a<n;a++)for(let o=0;o<s;o++){const c=t+a,l=e+o,h=i.surfaceY(c,l);h<0||i.get(c,h,l)===x.WATER||i.set(c,h,l,x.FARMLAND)}for(let a=-1;a<=n;a++){const o=i.surfaceY(t+a,e-1),c=i.surfaceY(t+a,e+s);o>=0&&i.set(t+a,o+1,e-1,x.COBBLESTONE),c>=0&&i.set(t+a,c+1,e+s,x.COBBLESTONE)}for(let a=0;a<s;a++){const o=i.surfaceY(t-1,e+a),c=i.surfaceY(t+n,e+a);o>=0&&i.set(t-1,o+1,e+a,x.COBBLESTONE),c>=0&&i.set(t+n,c+1,e+a,x.COBBLESTONE)}}}function R0(i){{const t=96*Z,e=86*Z;ca(i,t,e);for(let a=-5;a<=5;a++)for(let o=-5;o<=5;o++){const c=i.surfaceY(t+a,e+o);c>=0&&i.get(t+a,c,e+o)!==x.WATER&&i.set(t+a,c,e+o,x.GRAVEL)}const n=[[t-12,e-4,7,5,3,x.PLANKS,x.PLANKS],[t+12,e-4,6,5,3,x.COBBLESTONE,x.PLANKS],[t-10,e+10,5,4,3,x.PLANKS,x.PLANKS],[t+10,e+10,5,4,3,x.PLANKS,x.PLANKS],[t,e+14,6,4,3,x.COBBLESTONE,x.PLANKS],[t-12,e+18,5,4,3,x.PLANKS,x.PLANKS],[t+12,e+18,5,4,3,x.PLANKS,x.PLANKS]];for(const[a,o,c,l,h,f,d]of n)oa(i,a,o,c,l,h,f,d);const s=i.surfaceY(t+12,e-4);s>=0&&i.set(t+12,s+1,e-4,x.FORGE),be(i,t,e-4,t-12,e-4),be(i,t,e-4,t+12,e-4),be(i,t,e+4,t,e+14),be(i,t,e+14,t-10,e+10),be(i,t,e+14,t+10,e+10),be(i,t,e+18,t-12,e+18),be(i,t,e+18,t+12,e+18),be(i,t,e-5,t,74*Z),Xs(i,t+16,e+2,5,4),Xs(i,t+16,e+8,5,4);const r=i.surfaceY(t+3,e+3);r>=0&&i.set(t+3,r+1,e+3,x.CAMPFIRE);for(const[a,o]of[[t-5,e-5],[t+5,e-5],[t-5,e+5],[t+5,e+5]]){const c=i.surfaceY(a,o);c<0||(i.set(a,c+1,o,x.STONE),i.set(a,c+2,o,x.STONE),i.set(a,c+3,o,x.TORCH))}}{const t=162*Z,e=108*Z;ca(i,t,e);for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++){const a=i.surfaceY(t+s,e+r);a>=0&&i.get(t+s,a,e+r)!==x.WATER&&i.set(t+s,a,e+r,x.GRAVEL)}const n=[[t-10,e-4,6,4,3,x.PLANKS,x.PLANKS],[t+10,e-4,5,4,3,x.COBBLESTONE,x.PLANKS],[t-9,e+10,5,4,3,x.PLANKS,x.PLANKS],[t+9,e+10,5,4,3,x.PLANKS,x.PLANKS],[t,e+14,5,4,3,x.PLANKS,x.PLANKS]];for(const[s,r,a,o,c,l,h]of n)oa(i,s,r,a,o,c,l,h);be(i,t,e,t-10,e-4),be(i,t,e,t+10,e-4),be(i,t,e,t-9,e+10),be(i,t,e,t+9,e+10),be(i,t,e,t,e+14),Xs(i,t+14,e+4,4,4);for(const[s,r]of[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]]){const a=i.surfaceY(s,r);a<0||(i.set(s,a+1,r,x.STONE),i.set(s,a+2,r,x.TORCH))}}{const t=52*Z,e=132*Z;ca(i,t,e);for(let r=-3;r<=3;r++)for(let a=-3;a<=3;a++){const o=i.surfaceY(t+r,e+a);o>=0&&i.get(t+r,o,e+a)!==x.WATER&&i.set(t+r,o,e+a,x.DIRT)}const n=[[t-9,e-4,5,4,3,x.PLANKS,x.PLANKS],[t+9,e-4,5,4,3,x.PLANKS,x.PLANKS],[t-8,e+9,5,4,3,x.PLANKS,x.PLANKS],[t+8,e+9,5,4,3,x.WOOD_LOG,x.PLANKS]];for(const[r,a,o,c,l,h,f]of n)oa(i,r,a,o,c,l,h,f);be(i,t,e,t-9,e-4),be(i,t,e,t+9,e-4),be(i,t,e,t-8,e+9),be(i,t,e,t+8,e+9),Xs(i,t+12,e,4,3);const s=i.surfaceY(t,e+4);s>=0&&i.set(t,s+1,e+4,x.CAMPFIRE)}}function w0(i){const t=go+10;for(let e=0;e<Ft;e++)for(let n=0;n<Ot;n++){const s=i.surfaceY(e,n);if(s<t)continue;const r=i.get(e,s,n);r===x.AIR||r===x.WATER||r===x.LEAVES||(i.set(e,s,n,x.GRAVEL),s>=t+4&&i.inBounds(e,s+1,n)&&i.set(e,s+1,n,x.GRAVEL))}}function C0(i){for(let t=1;t<Ft-1;t++)for(let e=1;e<Ot-1;e++){const n=i.surfaceY(t,e);if(n<0)continue;const s=[i.surfaceY(t+1,e),i.surfaceY(t-1,e),i.surfaceY(t,e+1),i.surfaceY(t,e-1)],r=Math.min(...s.filter(o=>o>=0)),a=n-r;if(!(a<4)){for(let o=1;o<=a;o++){const c=n-o;if(c<0)break;const l=i.get(t,c,e);l===x.DIRT&&i.set(t,c,e,x.STONE),l===x.GRASS&&i.set(t,c,e,x.COBBLESTONE)}if(a>=6){const o=n-Math.floor(a/2);i.inBounds(t,o,e)&&i.set(t,o,e,x.GRAVEL)}}}}function P0(i){let t=99;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[44,58],[58,44],[150,52],[54,148],[128,72],[72,128],[164,90],[90,48],[36,100],[110,36],[170,120],[42,170]].map(([s,r])=>[s*Z,r*Z]);for(const[s,r]of n){const a=i.surfaceY(s,r);if(a<oi+3||a<0)continue;const o=i.get(s,a,r);if(!(o===x.WATER||o===x.SAND)){for(let c=1;c<=3;c++){const l=a-c;if(l<0)break;i.get(s,l,r)!==x.AIR&&i.set(s,l,r,x.AIR)}for(const[c,l]of[[1,0],[-1,0],[0,1],[0,-1]])for(let h=1;h<=2;h++){const f=a-h;f<0||!i.inBounds(s+c,f,r+l)||e()>.5&&i.set(s+c,f,r+l,x.AIR)}i.inBounds(s,a,r)&&i.set(s,a,r,x.COBBLESTONE),i.inBounds(s-1,a,r)&&i.set(s-1,a,r,x.STONE),i.inBounds(s+1,a,r)&&i.set(s+1,a,r,x.STONE)}}}function L0(i){for(let t=0;t<Ft;t++)for(let e=0;e<Ot;e++){if(i.get(t,i.surfaceY(t,e),e)!==x.WATER)continue;const n=i.surfaceY(t,e);n<0||(n-1>=0&&i.get(t,n-1,e)===x.STONE&&i.set(t,n-1,e,x.SAND),n-2>=0&&i.get(t,n-2,e)===x.STONE&&i.set(t,n-2,e,x.DIRT))}}function I0(i){let t=77;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[118,122],[126,138],[134,120],[124,148],[140,132],[48,142],[56,156],[44,162],[60,138],[52,158],[40,56],[58,46],[52,60]].map(([r,a])=>[r*Z,a*Z]);for(const[r,a]of n){const o=i.surfaceY(r,a);if(o<0||i.get(r,o,a)===x.WATER)continue;const c=e()>.5?2:1;for(let h=1;h<=c;h++)i.inBounds(r,o+h,a)&&i.get(r,o+h,a)===x.AIR&&i.set(r,o+h,a,x.COBBLESTONE);const l=o+c+1;if(l<se)for(const[h,f]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])i.inBounds(r+h,l,a+f)&&i.get(r+h,l,a+f)===x.AIR&&i.set(r+h,l,a+f,x.LEAVES)}const s=[[82,62],[104,54],[66,88],[130,80],[80,108],[158,100],[100,148],[62,118],[144,64],[70,152],[112,170],[160,140],[38,80],[40,120],[180,90]].map(([r,a])=>[r*Z,a*Z]);for(const[r,a]of s){const o=i.surfaceY(r,a);if(o<0||i.get(r,o,a)===x.WATER)continue;const c=1+Math.floor(e()*2);for(let l=-c;l<=c;l++)for(let h=-c;h<=c;h++)for(let f=0;f<=c;f++){if(Math.sqrt(l*l+f*f*1.5+h*h)>c+.4)continue;const u=r+l,_=o+f,g=a+h;if(!i.inBounds(u,_,g))continue;const p=i.get(u,_,g);(p===x.AIR||p===x.GRASS||p===x.DIRT)&&i.set(u,_,g,x.STONE)}}for(let r=0;r<60*Z;r++){const a=20+Math.floor(e()*(Ft-40)),o=20+Math.floor(e()*(Ot-40));if(fs(a,o)>.7)continue;const l=i.surfaceY(a,o);l<0||i.get(a,l,o)!==x.GRASS||i.inBounds(a,l+1,o)&&i.get(a,l+1,o)===x.AIR&&i.set(a,l+1,o,x.COBBLESTONE)}}function N0(i){for(let t=0;t<Ft;t++)for(let e=0;e<Ot;e++){let n=!1;for(let s=se-1;s>=1;s--){const r=i.get(t,s,e);if(r===x.DIRT){n=!0;continue}if(n&&r===x.STONE){const a=le(t,e,8)>.5?2:1;for(let o=0;o<a;o++){const c=s+o;i.inBounds(t,c,e)&&i.get(t,c,e)===x.STONE&&i.set(t,c,e,x.GRAVEL)}break}r!==x.AIR&&(n=!1)}}}function U0(i){for(let s=0;s<Ft;s++)for(let r=0;r<se;r++)for(let a=0;a<Ot;a++)i.set(s,r,a,x.NETHERRACK);let t=555;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=150;for(let s=0;s<n;s++){let r=8+Math.floor(e()*(Ft-16)),a=4+Math.floor(e()*(se-10)),o=8+Math.floor(e()*(Ot-16));const c=30+Math.floor(e()*55);let l=e()*2-1,h=e()*2-1,f=(e()-.5)*.6;for(let d=0;d<c;d++){const u=2+(e()>.75?1:0);for(let _=-u;_<=u;_++)for(let g=-u;g<=u;g++)for(let p=-u;p<=u;p++)_*_+g*g*1.5+p*p>u*u||i.inBounds(r+_,a+g,o+p)&&i.set(r+_,a+g,o+p,x.AIR);if(r+=Math.round(l),a+=Math.round(f),o+=Math.round(h),l+=(e()-.5)*.4,h+=(e()-.5)*.4,f+=(e()-.5)*.15,l=Math.max(-1.5,Math.min(1.5,l)),h=Math.max(-1.5,Math.min(1.5,h)),f=Math.max(-.6,Math.min(.6,f)),!i.inBounds(r,a,o)||a<3||a>se-4)break}}for(let s=0;s<Ft;s++)for(let r=0;r<Ot;r++)for(let a=0;a<4;a++)i.get(s,a,r)===x.AIR&&i.set(s,a,r,x.LAVA);for(let s=0;s<400;s++){const r=2+Math.floor(e()*(Ft-4)),a=2+Math.floor(e()*(Ot-4));for(let o=se-3;o>=4;o--)if(i.get(r,o,a)===x.NETHERRACK&&i.get(r,o-1,a)===x.AIR){i.set(r,o,a,x.GLOWSTONE);break}}for(let s=0;s<200;s++){const r=2+Math.floor(e()*(Ft-4)),a=2+Math.floor(e()*(Ot-4));for(let o=4;o<se-4;o++)if(i.get(r,o,a)===x.AIR&&i.get(r,o-1,a)===x.NETHERRACK){i.set(r,o,a,x.LAVA);break}}}function D0(i,t,e){let n=Math.floor(se/2);for(;n>3&&i.get(t,n,e)===x.AIR;)n--;n<=3&&(n=5);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++){const a=i.get(t+s,n,e+r);(a===x.AIR||a===x.LAVA)&&i.set(t+s,n,e+r,x.NETHERRACK);for(let o=1;o<=4;o++)i.set(t+s,n+o,e+r,x.AIR)}for(const s of[-1,0,1])i.set(t+s,n+1,e,x.OBSIDIAN),i.set(t+s,n+4,e,x.OBSIDIAN);for(const s of[-1,1])i.set(t+s,n+2,e,x.OBSIDIAN),i.set(t+s,n+3,e,x.OBSIDIAN);return i.set(t,n+2,e,x.PORTAL),i.set(t,n+3,e,x.PORTAL),n}class O0{constructor(){this.maxHealth=20,this.health=20,this.maxHunger=20,this.hunger=20,this.tier=0,this.dead=!1,this._hungerTimer=0,this._regenTimer=0,this._hungerInterval=30,this.damageMult=1,this.onDeath=null,this.onChange=null}setDifficulty(t){var s;const e={easy:{maxHealth:30,hungerInterval:50,damageMult:.5},normal:{maxHealth:20,hungerInterval:30,damageMult:1},hard:{maxHealth:15,hungerInterval:20,damageMult:1.25}},n=e[t]??e.normal;this.maxHealth=n.maxHealth,this.health=n.maxHealth,this._hungerInterval=n.hungerInterval,this.damageMult=n.damageMult,(s=this.onChange)==null||s.call(this)}update(t){var e;this.dead||(this._hungerTimer+=t,this._hungerTimer>=this._hungerInterval&&(this._hungerTimer=0,this.hunger=Math.max(0,this.hunger-1),this.hunger===0&&this.takeDamage(1)),this.hunger>14&&this.health<this.maxHealth&&(this._regenTimer+=t,this._regenTimer>=4&&(this._regenTimer=0,this.health=Math.min(this.maxHealth,this.health+1),(e=this.onChange)==null||e.call(this))))}takeDamage(t){var e,n;this.dead||(this.health=Math.max(0,this.health-t*this.damageMult),(e=this.onChange)==null||e.call(this),this.health<=0&&!this.dead&&(this.dead=!0,(n=this.onDeath)==null||n.call(this)))}heal(t){var e;this.health=Math.min(this.maxHealth,this.health+t),(e=this.onChange)==null||e.call(this)}eat(t){var e;this.hunger=Math.min(this.maxHunger,this.hunger+t),(e=this.onChange)==null||e.call(this)}updateTier(t){const e=(t==null?void 0:t.tier)??0;e>this.tier&&(this.tier=e)}serialize(){return{health:this.health,hunger:this.hunger,tier:this.tier}}deserialize(t){this.health=t.health??20,this.hunger=t.hunger??20,this.tier=t.tier??0,this.dead=!1}}class B0{constructor(){this.itemId=null,this.count=0,this.durability=null}}class F0{constructor(){this.HOTBAR_SIZE=9,this.TOTAL_SIZE=36,this.slots=Array.from({length:this.TOTAL_SIZE},()=>new B0),this.hotbarIndex=0,this._changeListeners=[]}addChangeListener(t){this._changeListeners.push(t)}_fireChange(){this._changeListeners.forEach(t=>t())}hotbarSlot(t){return this.slots[t]}get selectedSlot(){return this.slots[this.hotbarIndex]}add(t,e,n){var a;const s=((a=n==null?void 0:n.getItem(t))==null?void 0:a.stackSize)??64;let r=e;for(let o=0;o<this.TOTAL_SIZE&&r>0;o++){const c=this.slots[o];if(c.itemId===t&&c.count<s){const l=Math.min(r,s-c.count);c.count+=l,r-=l}}for(let o=0;o<this.TOTAL_SIZE&&r>0;o++){const c=this.slots[o];if(!c.itemId){const l=Math.min(r,s);c.itemId=t,c.count=l,r-=l}}return this._fireChange(),r}remove(t,e){let n=e;for(let s=0;s<this.TOTAL_SIZE&&n>0;s++){const r=this.slots[s];if(r.itemId===t){const a=Math.min(n,r.count);r.count-=a,n-=a,r.count===0&&(r.itemId=null,r.durability=null)}}this._fireChange()}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&(e+=n.count);return e}hasAll(t){for(const[e,n]of Object.entries(t))if(this.countOf(e)<n)return!1;return!0}removeSlot(t){const e=this.slots[t];e.itemId&&(e.count--,e.count===0&&(e.itemId=null,e.durability=null),this._fireChange())}damageTool(t,e=1,n){const s=this.slots[t];if(!s.itemId)return;const r=n==null?void 0:n.getItem(s.itemId);!r||!r.durability||(s.durability===null&&(s.durability=r.durability),s.durability-=e,s.durability<=0&&(s.itemId=null,s.count=0,s.durability=null),this._fireChange())}swapSlots(t,e){const n={itemId:this.slots[t].itemId,count:this.slots[t].count,durability:this.slots[t].durability};this.slots[t].itemId=this.slots[e].itemId,this.slots[t].count=this.slots[e].count,this.slots[t].durability=this.slots[e].durability,this.slots[e].itemId=n.itemId,this.slots[e].count=n.count,this.slots[e].durability=n.durability,this._fireChange()}serialize(){return this.slots.map(t=>({itemId:t.itemId,count:t.count,durability:t.durability}))}deserialize(t){for(let e=0;e<Math.min(t.length,this.TOTAL_SIZE);e++)this.slots[e].itemId=t[e].itemId,this.slots[e].count=t[e].count,this.slots[e].durability=t[e].durability;this._fireChange()}}const Li=new an(0,0,0,"YXZ"),Ii=new U,k0={type:"change"},z0={type:"lock"},H0={type:"unlock"},Oc=Math.PI/2;class G0 extends Ym{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=V0.bind(this),this._onPointerlockChange=W0.bind(this),this._onPointerlockError=X0.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Ii.setFromMatrixColumn(e.matrix,0),Ii.crossVectors(e.up,Ii),e.position.addScaledVector(Ii,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Ii.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Ii,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function V0(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;Li.setFromQuaternion(n.quaternion),Li.y-=t*.002*this.pointerSpeed,Li.x-=e*.002*this.pointerSpeed,Li.x=Math.max(Oc-this.maxPolarAngle,Math.min(Oc-this.minPolarAngle,Li.x)),n.quaternion.setFromEuler(Li),this.dispatchEvent(k0)}function W0(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(z0),this.isLocked=!0):(this.dispatchEvent(H0),this.isLocked=!1)}function X0(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class Y0{constructor(){this._ctx=null,this._sfxBus=null,this._musicBus=null,this._running=!1,this._beatIndex=0,this._musicTimeout=null,this._mineTimer=0}_init(){if(this._ctx)return;this._ctx=new(window.AudioContext||window.webkitAudioContext);const t=this._ctx.createGain();t.gain.value=1,t.connect(this._ctx.destination),this._sfxBus=this._ctx.createGain(),this._sfxBus.gain.value=.8,this._sfxBus.connect(t),this._musicBus=this._ctx.createGain(),this._musicBus.gain.value=.22,this._musicBus.connect(t)}_noise(t,e,n){const s=this._ctx,r=Math.floor(s.sampleRate*t),a=s.createBuffer(1,r,s.sampleRate),o=a.getChannelData(0);for(let f=0;f<r;f++)o[f]=Math.random()*2-1;const c=s.createBufferSource();c.buffer=a;const l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=1.2;const h=s.createGain();h.gain.setValueAtTime(n,s.currentTime),h.gain.exponentialRampToValueAtTime(.001,s.currentTime+t),c.connect(l),l.connect(h),h.connect(this._sfxBus),c.start()}playMine(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(35,e+.09);const s=t.createGain();s.gain.setValueAtTime(.45,e),s.gain.exponentialRampToValueAtTime(.001,e+.1),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.1),this._noise(.07,700,.28)}playBlockBreak(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(70,e),n.frequency.exponentialRampToValueAtTime(18,e+.22);const s=t.createGain();s.gain.setValueAtTime(.7,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.22),this._noise(.15,350,.5),this._noise(.07,1400,.18)}playStep(t="grass"){this._init();const e=this._ctx,n=e.currentTime;if(t==="stone"||t==="cobble"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(120,n),s.frequency.exponentialRampToValueAtTime(60,n+.04);const r=e.createGain();r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(.001,n+.06),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.06),this._noise(.05,1200,.09)}else if(t==="sand"||t==="gravel")this._noise(.09,600,.16),this._noise(.05,300,.09);else if(t==="wood"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(200,n),s.frequency.exponentialRampToValueAtTime(80,n+.06);const r=e.createGain();r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.001,n+.08),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.08)}else{const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(40,n+.07);const r=e.createGain();r.gain.setValueAtTime(.14,n),r.gain.exponentialRampToValueAtTime(.001,n+.1),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.1),this._noise(.06,800,.07)}}playHit(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(380,e),n.frequency.exponentialRampToValueAtTime(120,e+.1);const s=t.createWaveShaper(),r=new Float32Array(256);for(let o=0;o<256;o++){const c=o*2/256-1;r[o]=(Math.PI+40)*c/(Math.PI+40*Math.abs(c))}s.curve=r;const a=t.createGain();a.gain.setValueAtTime(.38,e),a.gain.exponentialRampToValueAtTime(.001,e+.13),n.connect(s),s.connect(a),a.connect(this._sfxBus),n.start(e),n.stop(e+.13),this._noise(.04,3500,.22)}startMusic(){this._init(),!this._running&&(this._running=!0,this._beatIndex=0,this._scheduleBeat())}stopMusic(){if(this._running=!1,clearTimeout(this._musicTimeout),this._ctx&&this._musicBus){const t=this._ctx.currentTime;this._musicBus.gain.linearRampToValueAtTime(0,t+1.5),setTimeout(()=>{this._musicBus&&(this._musicBus.gain.value=.22)},2e3)}}_kick(t){const e=this._ctx,n=e.createOscillator();n.frequency.setValueAtTime(180,t),n.frequency.exponentialRampToValueAtTime(28,t+.18);const s=e.createGain();s.gain.setValueAtTime(1.4,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(s),s.connect(this._musicBus),n.start(t),n.stop(t+.22)}_snare(t){const e=this._ctx,n=Math.floor(e.sampleRate*.18),s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let f=0;f<n;f++)r[f]=Math.random()*2-1;const a=e.createBufferSource();a.buffer=s;const o=e.createBiquadFilter();o.type="highpass",o.frequency.value=1800;const c=e.createGain();c.gain.setValueAtTime(.55,t),c.gain.exponentialRampToValueAtTime(.001,t+.18),a.connect(o),o.connect(c),c.connect(this._musicBus),a.start(t);const l=e.createOscillator();l.frequency.setValueAtTime(220,t),l.frequency.exponentialRampToValueAtTime(100,t+.06);const h=e.createGain();h.gain.setValueAtTime(.35,t),h.gain.exponentialRampToValueAtTime(.001,t+.06),l.connect(h),h.connect(this._musicBus),l.start(t),l.stop(t+.06)}_hihat(t,e=1){const n=this._ctx,s=Math.floor(n.sampleRate*.035),r=n.createBuffer(1,s,n.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=Math.random()*2-1;const o=n.createBufferSource();o.buffer=r;const c=n.createBiquadFilter();c.type="highpass",c.frequency.value=9e3;const l=n.createGain();l.gain.setValueAtTime(.12*e,t),l.gain.exponentialRampToValueAtTime(.001,t+.035),o.connect(c),c.connect(l),l.connect(this._musicBus),o.start(t)}_bass(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="sawtooth",r.frequency.value=e;const a=s.createBiquadFilter();a.type="lowpass",a.frequency.value=400,a.Q.value=3;const o=s.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.9,t+.025),o.gain.linearRampToValueAtTime(.5,t+n*.6),o.gain.linearRampToValueAtTime(0,t+n),r.connect(a),a.connect(o),o.connect(this._musicBus),r.start(t),r.stop(t+n)}_pad(t,e,n){const s=this._ctx;for(const r of e)for(const a of[-6,0,6]){const o=s.createOscillator();o.type="sawtooth",o.frequency.value=r,o.detune.value=a;const c=s.createBiquadFilter();c.type="lowpass",c.frequency.value=1800;const l=s.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.045,t+.35),l.gain.linearRampToValueAtTime(.025,t+n*.8),l.gain.linearRampToValueAtTime(0,t+n),o.connect(c),c.connect(l),l.connect(this._musicBus),o.start(t),o.stop(t+n)}}_melody(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="square",r.frequency.value=e;const a=s.createWaveShaper(),o=new Float32Array(64);for(let l=0;l<64;l++){const h=l*2/64-1;o[l]=Math.tanh(h*2.5)*.75}a.curve=o;const c=s.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.28,t+.02),c.gain.linearRampToValueAtTime(.18,t+n*.65),c.gain.linearRampToValueAtTime(0,t+n),r.connect(a),a.connect(c),c.connect(this._musicBus),r.start(t),r.stop(t+n)}_scheduleBeat(){if(!this._running)return;const e=this._ctx.currentTime,s=60/130,r=s*4,a=[{bass:73.42,pad:[146.83,174.61,220,293.66]},{bass:58.27,pad:[116.54,146.83,174.61,233.08]},{bass:87.31,pad:[174.61,220,261.63,349.23]},{bass:65.41,pad:[130.81,164.81,196,261.63]}],o=[587.33,0,523.25,493.88,440,493.88,440,392,440,0,493.88,523.25,587.33,523.25,440,392],c=Math.floor(this._beatIndex/4),l=this._beatIndex%4,h=a[c%a.length];(l===0||l===2)&&this._kick(e),(l===1||l===3)&&this._snare(e),this._hihat(e),this._hihat(e+s*.5,.5),l===0&&this._bass(e,h.bass,r),l===0&&this._pad(e,h.pad,r);const f=o[this._beatIndex%o.length];f&&this._melody(e,f,s*.75),this._beatIndex++,this._musicTimeout=setTimeout(()=>this._scheduleBeat(),(s-.02)*1e3)}}const ci=new Y0;class q0{constructor(t,e,n,s,r,a,o,c,l,h,f){this.camera=t,this.worldData=n,this.worldRenderer=s,this.stats=r,this.inventory=a,this.mining=o,this.farming=c,this.hotbar=l,this.hud=h,this.itemRegistry=f,this.controls=new G0(t,e.domElement),this._keys={},this._vy=0,this._onGround=!1,this._raycaster=new Xm,this._raycaster.far=Zm,this._mouseDown=!1,this._rightMouseDown=!1,this._currentStation="hand",this.onStationChange=null,this.targetBlock=null,this._bobTimer=0,this._prevBob=0,this._stepTimer=0,this._sprinting=!1,this._setupInputListeners(e);const d=Ft/2,u=Ot/2,_=n.surfaceY(d,u);t.position.set(d+.5,(_>=0?_:12)+1.8,u+.5)}lock(){this.controls.lock()}get isLocked(){return this.controls.isLocked}_setupInputListeners(t){window.addEventListener("keydown",e=>{this._keys[e.code]=!0;const n=parseInt(e.key);n>=1&&n<=9&&this.hotbar.select(n-1),e.code==="Space"&&this._onGround&&(this._vy=jm,this._onGround=!1)}),window.addEventListener("keyup",e=>{this._keys[e.code]=!1}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousedown",e=>{if(this.controls.isLocked){if(e.button===0&&e.shiftKey){this._handleRightClick();return}e.button===0&&(this._mouseDown=!0),e.button===2&&(e.preventDefault(),this._handleRightClick())}}),window.addEventListener("mouseup",e=>{e.button===0&&(this._mouseDown=!1,this.mining.cancelBreak())}),window.addEventListener("wheel",e=>{this.controls.isLocked&&this.hotbar.scroll(e.deltaY>0?1:-1)})}update(t){var v,E,W,H;if(!this.controls.isLocked)return;this._sprinting=this._keys.ShiftLeft||this._keys.ShiftRight||this._keys.ControlLeft||this._keys.ControlRight;const e=Jm*(this._sprinting?1.65:1),n=new U;this._keys.KeyW&&(n.z-=1),this._keys.KeyS&&(n.z+=1),this._keys.KeyA&&(n.x-=1),this._keys.KeyD&&(n.x+=1),n.normalize();const s=this.camera.position.x,r=this.camera.position.z;n.length()>0&&(this.controls.moveRight(n.x*e*t),this.controls.moveForward(-n.z*e*t));const a=Math.floor(this.camera.position.y-.6),o=Math.floor(this.camera.position.y-1.6),c=Math.floor(this.camera.position.x),l=Math.floor(this.camera.position.z),h=Math.floor(r);(this.worldData.isSolid(c,a,h)||this.worldData.isSolid(c,o,h))&&(this.camera.position.x=s),(this.worldData.isSolid(Math.floor(this.camera.position.x),a,l)||this.worldData.isSolid(Math.floor(this.camera.position.x),o,l))&&(this.camera.position.z=r);const f=Math.floor(this.camera.position.x),d=Math.floor(this.camera.position.z),u=Math.floor(this.camera.position.y-.5),_=Math.floor(this.camera.position.y-1.6),g=((E=(v=this.worldData).getBlock)==null?void 0:E.call(v,f,_,d))===14||((H=(W=this.worldData).getBlock)==null?void 0:H.call(W,f,u,d))===14||this.worldData.get(f,_,d)===14||this.worldData.get(f,u,d)===14,p=this.worldData.get(f,_,d)===x.LAVA||this.worldData.get(f,u,d)===x.LAVA;p&&this.stats.takeDamage(t*8),p?(this._vy=Math.max(this._vy-as*t*.3,-1.2),this._keys.Space&&(this._vy=2)):g?(this._vy=Math.max(this._vy-as*t*.3,-3),this._keys.Space&&(this._vy=4)):this._vy-=as*t;const m=this.camera.position.y+this._vy*t,T=Math.floor(this.camera.position.y-1.8),S=Math.floor(m-1.8),b=(()=>{if(this._vy<=0){const X=Math.min(T,S),q=Math.max(T,S);for(let z=q;z>=X;z--)if(this.worldData.isSolid(f,z,d))return z}return-1})();if(b>=0?(this._vy=0,this._onGround=!0,this.camera.position.y=b+1+1.8):(this._onGround=g,this.camera.position.y=Math.max(1.8,m)),this.camera.position.x=Math.max(.5,Math.min(Ft-.5,this.camera.position.x)),this.camera.position.z=Math.max(.5,Math.min(Ot-.5,this.camera.position.z)),this.camera.position.y<2){const X=Ft/2,q=Ot/2,z=this.worldData.surfaceY(X,q);this.camera.position.set(X+.5,(z>=0?z:12)+1.8,q+.5),this._vy=0,this.stats.takeDamage(5),this.hud.showPickup("You fell through the world! (-5 hp)")}const D=this._getHeldItem();if(this._mouseDown){const X=this._raycastBlock();X?this.mining.beginBreak(X.blockPos):this.mining.cancelBreak()}this.mining.update(t,D)&&this.hud.setBreakProgress(0),this._mouseDown&&this.mining._breakingPos?this.hud.setBreakProgress(Math.min(1,this.mining._breakProgress/this.mining._breakDuration)):this._mouseDown||this.hud.setBreakProgress(0);const R=n.length()>0&&this._onGround;R?this._bobTimer+=t*(this._sprinting?14:9):this._bobTimer=0;const O=R?Math.sin(this._bobTimer)*.032:0;if(this.camera.position.y+=O-this._prevBob,this._prevBob=O,R&&(this._stepTimer-=t,this._stepTimer<=0)){this._stepTimer=this._sprinting?.28:.42;const X=Math.floor(this.camera.position.x),q=Math.floor(this.camera.position.z),z=Math.floor(this.camera.position.y-1.9),J=this.worldData.get(X,z,q),G={3:"stone",4:"cobble",7:"sand",15:"gravel",5:"wood",16:"wood",9:"stone"}[J]||"grass";ci.playStep(G)}const Q=this._raycastBlock();this.targetBlock=Q?Q.blockPos:null,this._updateStation()}_raycastBlock(){this._raycaster.setFromCamera({x:0,y:0},this.camera);const t=this.worldRenderer.allMeshes,e=this._raycaster.intersectObjects(t);if(e.length===0)return null;const n=e[0],s=n.point,r=n.face.normal.clone(),a=this._raycaster.ray.direction,o=[Math.floor(s.x+a.x*.01),Math.floor(s.y+a.y*.01),Math.floor(s.z+a.z*.01)],c=o[0],l=o[1],h=o[2],f=s.x-c,d=s.y-l,u=s.z-h,_=[f*(a.x>0?.5:1),(1-f)*(a.x<0?.5:1),d*(a.y>0?.5:1),(1-d)*(a.y<0?.5:1),u*(a.z>0?.5:1),(1-u)*(a.z<0?.5:1)],g=[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]],p=_.indexOf(Math.min(..._)),[m,T,S]=g[p],b=[c+m,l+T,h+S];return{blockPos:o,adjacentPos:b,normal:r}}_handleRightClick(){var s,r,a,o;const t=this._getHeldItem();if((t==null?void 0:t.category)==="food"&&this.stats.hunger<this.stats.maxHunger-1){this.stats.eat(t.foodValue),this.inventory.removeSlot(this.inventory.hotbarIndex),this.hud.showPickup(`Ate ${t.name}`);return}const e=this._raycastBlock();if(!e)return;if((t==null?void 0:t.id)==="summoning_stone"){const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===x.ALTAR){(s=this.onUseAltarWithStone)==null||s.call(this),this.inventory.remove("summoning_stone",1);return}this.hud.showPickup("Right-click the Altar in the swamp to use this!");return}if(t!=null&&t.isHoe&&this.mining.tillBlock(e.blockPos)){const l=this.inventory.hotbarIndex;this.inventory.damageTool(l,1,this.itemRegistry);return}if((t==null?void 0:t.category)==="seed"){if(this.farming.plant(t.id,e.blockPos,this.inventory,this.itemRegistry))return;this.farming.plant(t.id,e.adjacentPos,this.inventory,this.itemRegistry);return}const n=this.farming.tryHarvest(e.blockPos);if(n){this.inventory.add(n.itemId,n.count,this.itemRegistry),this.hud.showPickup(((r=this.itemRegistry.getItem(n.itemId))==null?void 0:r.name)??n.itemId);return}{const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===x.CHEST){this._openChest(c,l,h);return}}{const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===x.BED){(a=this.onSleepInBed)==null||a.call(this);return}}{const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===x.PORTAL){(o=this.onUsePortal)==null||o.call(this);return}}(t==null?void 0:t.blockId)>=0&&this.mining.placeBlock(e.adjacentPos,t.blockId)&&this.inventory.removeSlot(this.inventory.hotbarIndex)}_openChest(t,e,n){const s=[["bread",2,5,30],["cooked_meat",1,4,25],["iron_ore",2,6,25],["stick",4,12,20],["string",2,6,18],["bone",2,5,18],["cobblestone",6,16,15],["planks",4,10,15],["wheat_seed",3,8,12],["carrot",2,6,12],["gravel",4,10,10]],r=[["iron_ingot",2,5,40],["crystal_shard",1,2,15],["stone_sword",1,1,20],["stone_pickaxe",1,1,18],["stone_axe",1,1,18],["iron_pickaxe",1,1,8],["iron_sword",1,1,6],["glass",2,6,12]],a=[["crystal_shard",2,4,40],["iron_ingot",4,8,30],["iron_sword",1,1,20],["iron_pickaxe",1,1,18],["crystal_sword",1,1,5],["bread",3,8,20]],o=Ft/2,c=Ot/2,l=Math.sqrt((t-o)**2+(n-c)**2),h=l>120*4?a:l>60*4?r:s,f=3+Math.floor(Math.random()*3),d=h.reduce((T,S)=>T+S[3],0),u=[],_=new Set;for(let T=0;T<f;T++){let S=Math.random()*d;for(const b of h)if(S-=b[3],S<=0&&!_.has(b[0])){u.push(b),_.add(b[0]);break}}const g=[];for(const[T,S,b]of u){const D=S+Math.floor(Math.random()*(b-S+1));if(this.inventory.add(T,D,this.itemRegistry)!==!1){const R=this.itemRegistry.getItem(T);g.push(`${D}x ${(R==null?void 0:R.name)??T}`)}}this.worldData.set(t,e,n,x.AIR);const p=Math.floor(t/16),m=Math.floor(n/16);this.worldRenderer.rebuildChunk(p,m),ci.playBlockBreak(),this.hud.showPickup(g.length?`📦 Chest: ${g.join(", ")}`:"📦 Chest was empty")}_getHeldItem(){const t=this.inventory.selectedSlot;return t.itemId?this.itemRegistry.getItem(t.itemId):null}_updateStation(){var r;const t=Math.floor(this.camera.position.x),e=Math.floor(this.camera.position.y-1.8),n=Math.floor(this.camera.position.z);let s="hand";for(let a=-2;a<=2;a++)for(let o=-2;o<=2;o++)for(let c=-1;c<=1;c++){const l=this.worldData.get(t+a,e+c,n+o);l===x.CAMPFIRE&&s==="hand"&&(s="campfire"),l===x.CRAFTING_TABLE&&(s==="hand"||s==="campfire")&&(s="crafting_table"),l===x.FORGE&&(s="forge")}s!==this._currentStation&&(this._currentStation=s,(r=this.onStationChange)==null||r.call(this,s))}get currentStation(){return this._currentStation}attackMob(t,e){t.takeDamage(e)}setupAttackListener(t){window.addEventListener("mousedown",e=>{if(!this.controls.isLocked||e.button!==0)return;const n=this._getHeldItem();if(!(n!=null&&n.isSword)&&!(n!=null&&n.isAxe))return;const s=t(),r=this.camera.position;for(const a of s)if(!a.dead&&a.position.distanceTo(r)<4){a.takeDamage(n.damage),this.stats.updateTier(n);break}})}}class K0{constructor({id:t,name:e,category:n,tier:s=0,stackSize:r=64,damage:a=0,durability:o=0,foodValue:c=0,blockId:l=-1,isHoe:h=!1,isAxe:f=!1,isSword:d=!1,isPickaxe:u=!1,isShovel:_=!1}){this.id=t,this.name=e,this.category=n,this.tier=s,this.stackSize=r,this.damage=a,this.durability=o,this.foodValue=c,this.blockId=l,this.isHoe=h,this.isAxe=f,this.isSword=d,this.isPickaxe=u,this.isShovel=_}}const $0=[{id:"wood_log",name:"Wood Log",category:"block",stackSize:64,blockId:5},{id:"cobblestone",name:"Cobblestone",category:"block",stackSize:64,blockId:4},{id:"dirt",name:"Dirt",category:"block",stackSize:64,blockId:2},{id:"sand",name:"Sand",category:"block",stackSize:64,blockId:7},{id:"gravel",name:"Gravel",category:"block",stackSize:64,blockId:15},{id:"planks",name:"Wood Planks",category:"block",stackSize:64,blockId:16},{id:"glass",name:"Glass",category:"block",stackSize:64,blockId:17},{id:"crafting_table",name:"Crafting Table",category:"block",stackSize:1,blockId:11},{id:"forge",name:"Forge",category:"block",stackSize:1,blockId:12},{id:"chest",name:"Chest",category:"block",stackSize:1,blockId:18},{id:"campfire",name:"Campfire",category:"block",stackSize:1,blockId:20},{id:"bed",name:"Bed",category:"block",stackSize:1,blockId:21},{id:"obsidian",name:"Obsidian",category:"block",stackSize:64,blockId:25},{id:"nether_portal",name:"Nether Portal",category:"block",stackSize:1,blockId:26},{id:"netherrack",name:"Netherrack",category:"block",stackSize:64,blockId:22},{id:"glowstone",name:"Glowstone",category:"block",stackSize:64,blockId:24},{id:"iron_ore",name:"Iron Ore",category:"misc",stackSize:64},{id:"iron_ingot",name:"Iron Ingot",category:"misc",stackSize:64},{id:"crystal_shard",name:"Crystal Shard",category:"misc",stackSize:64},{id:"stick",name:"Stick",category:"weapon",stackSize:64,damage:1.5,isSword:!0},{id:"string",name:"String",category:"misc",stackSize:64},{id:"bone",name:"Bone",category:"misc",stackSize:64},{id:"troll_fang",name:"Troll Fang",category:"misc",stackSize:1},{id:"witch_eye",name:"Witch's Eye",category:"misc",stackSize:1},{id:"golem_core",name:"Golem Core",category:"misc",stackSize:1},{id:"summoning_stone",name:"Summoning Stone",category:"misc",stackSize:1},{id:"wheat_seed",name:"Wheat Seed",category:"seed",stackSize:64},{id:"wheat",name:"Wheat",category:"food",stackSize:64,foodValue:2},{id:"bread",name:"Bread",category:"food",stackSize:16,foodValue:5},{id:"carrot_seed",name:"Carrot Seed",category:"seed",stackSize:64},{id:"carrot",name:"Carrot",category:"food",stackSize:64,foodValue:3},{id:"potato_seed",name:"Potato",category:"seed",stackSize:64},{id:"baked_potato",name:"Baked Potato",category:"food",stackSize:16,foodValue:5},{id:"cooked_meat",name:"Cooked Meat",category:"food",stackSize:16,foodValue:8},{id:"raw_meat",name:"Raw Meat",category:"food",stackSize:16,foodValue:2},{id:"wooden_axe",name:"Wooden Axe",category:"tool",tier:1,stackSize:1,damage:2.5,durability:60,isAxe:!0},{id:"wooden_pickaxe",name:"Wooden Pickaxe",category:"tool",tier:1,stackSize:1,damage:2,durability:60,isPickaxe:!0},{id:"wooden_hoe",name:"Wooden Hoe",category:"tool",tier:1,stackSize:1,damage:1,durability:60,isHoe:!0},{id:"wooden_shovel",name:"Wooden Shovel",category:"tool",tier:1,stackSize:1,damage:1.5,durability:60,isShovel:!0},{id:"wooden_sword",name:"Wooden Sword",category:"weapon",tier:1,stackSize:1,damage:4,durability:60,isSword:!0},{id:"stone_axe",name:"Stone Axe",category:"tool",tier:2,stackSize:1,damage:3.5,durability:130,isAxe:!0},{id:"stone_pickaxe",name:"Stone Pickaxe",category:"tool",tier:2,stackSize:1,damage:3,durability:130,isPickaxe:!0},{id:"stone_hoe",name:"Stone Hoe",category:"tool",tier:2,stackSize:1,damage:1.5,durability:130,isHoe:!0},{id:"stone_shovel",name:"Stone Shovel",category:"tool",tier:2,stackSize:1,damage:2.5,durability:130,isShovel:!0},{id:"stone_sword",name:"Stone Sword",category:"weapon",tier:2,stackSize:1,damage:5,durability:130,isSword:!0},{id:"iron_axe",name:"Iron Axe",category:"tool",tier:3,stackSize:1,damage:5,durability:250,isAxe:!0},{id:"iron_pickaxe",name:"Iron Pickaxe",category:"tool",tier:3,stackSize:1,damage:4.5,durability:250,isPickaxe:!0},{id:"iron_hoe",name:"Iron Hoe",category:"tool",tier:3,stackSize:1,damage:2,durability:250,isHoe:!0},{id:"iron_shovel",name:"Iron Shovel",category:"tool",tier:3,stackSize:1,damage:3.5,durability:250,isShovel:!0},{id:"iron_sword",name:"Iron Sword",category:"weapon",tier:3,stackSize:1,damage:7,durability:250,isSword:!0},{id:"crystal_axe",name:"Crystal Axe",category:"tool",tier:4,stackSize:1,damage:7,durability:500,isAxe:!0},{id:"crystal_pickaxe",name:"Crystal Pickaxe",category:"tool",tier:4,stackSize:1,damage:6.5,durability:500,isPickaxe:!0},{id:"crystal_shovel",name:"Crystal Shovel",category:"tool",tier:4,stackSize:1,damage:5.5,durability:500,isShovel:!0},{id:"crystal_sword",name:"Crystal Sword",category:"weapon",tier:4,stackSize:1,damage:12,durability:500,isSword:!0}];class Z0{constructor(){this._db=new Map;for(const t of $0)this._db.set(t.id,new K0(t))}getItem(t){return this._db.get(t)??null}all(){return[...this._db.values()]}}class Yt{constructor(t,e,n,s,r,a,o=[]){this.id=t,this.ingredients=e,this.resultItem=n,this.resultCount=s,this.station=r,this.requiredTier=a,this.killedBosses=o}}const Ys=["hand","campfire","crafting_table","forge"],j0=[new Yt("planks",{wood_log:1},"planks",4,"hand",0),new Yt("stick",{planks:1},"stick",4,"hand",0),new Yt("crafting_table",{planks:4},"crafting_table",1,"hand",0),new Yt("campfire",{wood_log:3},"campfire",1,"hand",0),new Yt("bread",{wheat:3},"bread",1,"hand",0),new Yt("cooked_meat",{raw_meat:1},"cooked_meat",1,"campfire",0),new Yt("baked_potato",{potato_seed:1},"baked_potato",1,"campfire",0),new Yt("wooden_axe",{planks:3,stick:2},"wooden_axe",1,"crafting_table",0),new Yt("wooden_pickaxe",{planks:3,stick:2},"wooden_pickaxe",1,"crafting_table",0),new Yt("wooden_hoe",{planks:2,stick:2},"wooden_hoe",1,"crafting_table",0),new Yt("wooden_shovel",{planks:1,stick:2},"wooden_shovel",1,"crafting_table",0),new Yt("wooden_sword",{planks:2,stick:1},"wooden_sword",1,"crafting_table",0),new Yt("stone_axe",{cobblestone:3,stick:2},"stone_axe",1,"crafting_table",1),new Yt("stone_pickaxe",{cobblestone:3,stick:2},"stone_pickaxe",1,"crafting_table",1),new Yt("stone_hoe",{cobblestone:2,stick:2},"stone_hoe",1,"crafting_table",1),new Yt("stone_shovel",{cobblestone:1,stick:2},"stone_shovel",1,"crafting_table",1),new Yt("stone_sword",{cobblestone:2,stick:1},"stone_sword",1,"crafting_table",1),new Yt("iron_axe",{iron_ingot:3,stick:2},"iron_axe",1,"crafting_table",2),new Yt("iron_pickaxe",{iron_ingot:3,stick:2},"iron_pickaxe",1,"crafting_table",2),new Yt("iron_hoe",{iron_ingot:2,stick:2},"iron_hoe",1,"crafting_table",2),new Yt("iron_shovel",{iron_ingot:1,stick:2},"iron_shovel",1,"crafting_table",2),new Yt("iron_sword",{iron_ingot:2,stick:1},"iron_sword",1,"crafting_table",2),new Yt("glass",{sand:1},"glass",1,"crafting_table",0),new Yt("chest",{planks:8},"chest",1,"crafting_table",0),new Yt("bed",{planks:3,string:3},"bed",1,"crafting_table",0),new Yt("iron_ingot",{iron_ore:1},"iron_ingot",1,"forge",0),new Yt("crystal_axe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_axe",1,"forge",3),new Yt("crystal_pickaxe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_pickaxe",1,"forge",3),new Yt("crystal_shovel",{crystal_shard:1,iron_ingot:1,stick:2},"crystal_shovel",1,"forge",3),new Yt("crystal_sword",{crystal_shard:2,iron_ingot:1},"crystal_sword",1,"forge",3),new Yt("obsidian",{cobblestone:4,crystal_shard:2},"obsidian",1,"forge",3),new Yt("nether_portal",{obsidian:4},"nether_portal",1,"forge",3),new Yt("summoning_stone",{troll_fang:1,witch_eye:1,golem_core:1},"summoning_stone",1,"forge",3,["cave_troll","swamp_witch","stone_golem"])];class J0{constructor(){this.recipes=j0}getAvailable(t,e,n,s=new Set){const r=Ys.indexOf(e);return this.recipes.filter(a=>{if(Ys.indexOf(a.station)>r||a.requiredTier>n)return!1;for(const c of a.killedBosses)if(!s.has(c))return!1;return t.hasAll(a.ingredients)})}getAllVisible(t,e,n,s=new Set){const r=Ys.indexOf(e);return this.recipes.filter(a=>{if(Ys.indexOf(a.station)>r||a.requiredTier>n)return!1;for(const c of a.killedBosses)if(!s.has(c))return!1;return!0})}craft(t,e,n){if(!e.hasAll(t.ingredients))return!1;for(const[s,r]of Object.entries(t.ingredients))e.remove(s,r);return e.add(t.resultItem,t.resultCount,n),!0}}class Q0{constructor(t,e,n,s,r){this.worldData=t,this.worldRenderer=e,this.inventory=n,this.stats=s,this.itemRegistry=r,this._breakingPos=null,this._breakProgress=0,this._breakDuration=0,this._mineSoundTimer=0,this.onBreakProgress=null,this.onPickup=null}beginBreak(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r===x.AIR)return;const a=Yi[r];!a||a.hardness===999||this._breakingPos&&this._breakingPos[0]===e&&this._breakingPos[1]===n&&this._breakingPos[2]===s||(this._breakingPos=[e,n,s],this._breakProgress=0,this._breakDuration=Math.max(.15,a.hardness*.6),this._mineSoundTimer=0)}cancelBreak(){var t;this._breakingPos=null,this._breakProgress=0,(t=this.onBreakProgress)==null||t.call(this,0)}update(t,e){var h;if(!this._breakingPos)return!1;const[n,s,r]=this._breakingPos,a=this.worldData.get(n,s,r);if(a===x.AIR)return this.cancelBreak(),!1;const o=Yi[a],c=this._toolSpeedMult(e,o);this._breakProgress+=t*c,this._mineSoundTimer-=t,this._mineSoundTimer<=0&&(ci.playMine(),this._mineSoundTimer=.3);const l=Math.min(1,this._breakProgress/this._breakDuration);return(h=this.onBreakProgress)==null||h.call(this,l),this._breakProgress>=this._breakDuration?(this._completeBreak(n,s,r,o,e),!0):!1}_toolSpeedMult(t,e){if(!t)return e.minTier===0?1:.2;const n=t.tier-e.minTier;return n<0?.3:1+n*.5}_completeBreak(t,e,n,s,r){var h;this.worldData.set(t,e,n,x.AIR);const a=Math.floor(t/we),o=Math.floor(n/we);this.worldRenderer.rebuildChunk(a,o),this.cancelBreak();try{ci.playBlockBreak()}catch(f){console.error("playBlockBreak failed:",f)}const c=s.dropItem===null?s.name:s.dropItem,l=this.itemRegistry.getItem(c);if(l)try{this.inventory.add(c,s.dropCount,this.itemRegistry),(h=this.onPickup)==null||h.call(this,l.name)}catch(f){console.error("Failed to add mined item to inventory:",f)}if(r&&r.durability>0){const f=this._findHotbarIndex(r);if(f!==-1)try{this.inventory.damageTool(f,1,this.itemRegistry)}catch(d){console.error("Failed to damage tool:",d)}}}_findHotbarIndex(t){for(let e=0;e<9;e++)if(this.inventory.slots[e].itemId===t.id)return e;return-1}placeBlock(t,e){const[n,s,r]=t;if(!this.worldData.inBounds(n,s,r)||this.worldData.get(n,s,r)!==x.AIR)return!1;this.worldData.set(n,s,r,e);const a=Math.floor(n/we),o=Math.floor(r/we);return this.worldRenderer.rebuildChunk(a,o),!0}tillBlock(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r!==x.GRASS&&r!==x.DIRT)return!1;this.worldData.set(e,n,s,x.FARMLAND);const a=Math.floor(e/we),o=Math.floor(s/we);return this.worldRenderer.rebuildChunk(a,o),!0}}class la{constructor({id:t,name:e,seedItem:n,harvestItem:s,harvestCount:r,growthTime:a,stages:o=4}){this.id=t,this.name=e,this.seedItem=n,this.harvestItem=s,this.harvestCount=r,this.growthTime=a,this.stages=o,this.stageColors=["#8b7a1a","#aaaa22","#88cc44","#44aa22"]}}const t_={wheat:new la({id:"wheat",name:"Wheat",seedItem:"wheat_seed",harvestItem:"wheat",harvestCount:2,growthTime:25}),carrot:new la({id:"carrot",name:"Carrot",seedItem:"carrot_seed",harvestItem:"carrot",harvestCount:1,growthTime:35}),potato:new la({id:"potato",name:"Potato",seedItem:"potato_seed",harvestItem:"baked_potato",harvestCount:1,growthTime:40})};function e_(i){return Object.values(t_).find(t=>t.seedItem===i)??null}class n_{constructor(t,e,n){this.cropType=t,this.worldPos=e,this.stage=0,this.timer=0;const s=new ai(.6,.6),r=new ni({color:t.stageColors[0],side:Be});this.mesh=new Se(s,r),this.mesh.rotation.y=Math.PI/4,this.mesh.position.set(e[0]+.5,e[1]+.8,e[2]+.5),n.add(this.mesh)}updateVisual(){this.mesh.material.color.set(this.cropType.stageColors[Math.min(this.stage,3)]);const t=.4+this.stage*.2;this.mesh.scale.setScalar(t),this.mesh.position.y=this.worldPos[1]+.4+this.stage*.15}}class i_{constructor(t,e){this.worldData=t,this.scene=e,this._crops=[],this.onHarvest=null}plant(t,e,n,s){const[r,a,o]=e;if(this.worldData.get(r,a,o)!==x.FARMLAND||this.worldData.get(r,a+1,o)!==x.AIR)return!1;const c=e_(t);if(!c||this._crops.some(h=>h.worldPos[0]===r&&h.worldPos[2]===o))return!1;n.remove(t,1);const l=new n_(c,[r,a,o],this.scene);return this._crops.push(l),!0}update(t){for(const e of this._crops)e.stage>=e.cropType.stages-1||(e.timer+=t,e.timer>=e.cropType.growthTime&&(e.timer=0,e.stage++,e.updateVisual()))}tryHarvest(t){const[e,n,s]=t,r=this._crops.findIndex(o=>o.worldPos[0]===e&&o.worldPos[2]===s);if(r===-1)return null;const a=this._crops[r];return a.stage<a.cropType.stages-1?null:(this.scene.remove(a.mesh),a.mesh.geometry.dispose(),this._crops.splice(r,1),{itemId:a.cropType.harvestItem,count:a.cropType.harvestCount})}removeCropAt(t){const e=this._crops.findIndex(s=>s.worldPos[0]===t[0]&&s.worldPos[2]===t[2]);if(e===-1)return;const n=this._crops[e];this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this._crops.splice(e,1)}}const qs=[0,.12,.4,.48].map(i=>i/.5),Bc=[.55,.95].map(i=>(i-.5)/.5),ha=[[qs[0]*tn,.7,.45,.2],[qs[1]*tn,.5,.7,1],[qs[2]*tn,.35,.6,.95],[qs[3]*tn,.65,.4,.2],[tn+Bc[0]*(1-tn),.04,.04,.12],[tn+Bc[1]*(1-tn),.04,.04,.12],[1,.7,.45,.2]];function s_(i){for(let t=0;t<ha.length-1;t++){const[e,n,s,r]=ha[t],[a,o,c,l]=ha[t+1];if(i>=e&&i<=a){const h=(i-e)/(a-e);return{r:n+h*(o-n),g:s+h*(c-s),b:r+h*(l-r)}}}return{r:.5,g:.7,b:1}}class r_{constructor(t,e,n){this.scene=t,this.ambient=e,this.dirLight=n,this.timeOfDay=.05,this.dayNumber=1,this._wasNight=!1,this.onNightBegin=null,this.onDayBegin=null}update(t){var l,h;this.timeOfDay=(this.timeOfDay+t/qm)%1;const{r:e,g:n,b:s}=s_(this.timeOfDay);this.scene.background=new Dt(e,n,s),this.scene.fog=new cs(new Dt(e,n,s),.007);const r=this.timeOfDay>=tn,a=tn/2,o=r?.08:.6+(1-Math.abs(this.timeOfDay-a)/a)*.4;this.ambient.intensity=Math.max(.06,o);const c=this.timeOfDay*Math.PI*2;this.dirLight.position.set(Math.cos(c)*30,Math.sin(c)*30,15),this.dirLight.intensity=r?0:.8,r&&!this._wasNight?(l=this.onNightBegin)==null||l.call(this):!r&&this._wasNight&&(this.dayNumber++,(h=this.onDayBegin)==null||h.call(this,this.dayNumber)),this._wasNight=r}get isNight(){return this.timeOfDay>=tn}}class $n{constructor({id:t,name:e,color:n,health:s,damage:r,speed:a,detectionRange:o,attackRange:c,attackCooldown:l,scale:h=[1,1.8,1],dropItems:f=[]}){this.id=t,this.name=e,this.color=n,this.health=s,this.damage=r,this.speed=a,this.detectionRange=o,this.attackRange=c,this.attackCooldown=l,this.scale=h,this.dropItems=f}}const dr={zombie:new $n({id:"zombie",name:"Zombie",color:"#2d5e2d",health:10,damage:2,speed:2.5,detectionRange:18,attackRange:1.8,attackCooldown:1.5,dropItems:[{itemId:"raw_meat",chance:.7,count:1}]}),skeleton:new $n({id:"skeleton",name:"Skeleton",color:"#ccccaa",health:8,damage:1.5,speed:2.8,detectionRange:22,attackRange:1.5,attackCooldown:1.2,dropItems:[{itemId:"bone",chance:.8,count:1},{itemId:"string",chance:.4,count:1}]}),spider:new $n({id:"spider",name:"Spider",color:"#1a0a0a",health:6,damage:2.5,speed:4,detectionRange:16,attackRange:2,attackCooldown:.8,scale:[1.4,.8,1.4],dropItems:[{itemId:"string",chance:.9,count:2}]}),cow:new $n({id:"cow",name:"Cow",color:"#8B4513",health:10,damage:0,speed:1.8,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1.2,1,1.2],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),pig:new $n({id:"pig",name:"Pig",color:"#FFB6C1",health:8,damage:0,speed:2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.8,1],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),sheep:new $n({id:"sheep",name:"Sheep",color:"#E8E8E8",health:8,damage:0,speed:1.9,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.9,1],dropItems:[{itemId:"raw_meat",chance:1,count:1}]}),chicken:new $n({id:"chicken",name:"Chicken",color:"#FFFFFF",health:4,damage:0,speed:2.2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[.6,.7,.6],dropItems:[{itemId:"raw_meat",chance:.8,count:1}]})};function oe(i,t,e,n){return new Se(new En(i,t,e),new fr({color:n}))}class pr{constructor(t,e,n){this.mobType=t,this.scene=n,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this._vy=0,this.onDeath=null,this._parts=[],this.mesh=new Un,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),this._buildAppearance(),this._buildHealthBar(),n.add(this.mesh)}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildAppearance(){const t=this.mobType.id;t==="spider"?this._buildSpider():t==="cow"||t==="pig"||t==="sheep"||t==="chicken"?this._buildAnimal():this._buildHumanoid()}_buildHumanoid(){const t=this.mobType.id,e=this.mobType.scale[1],n=e/2,s=t==="zombie",r=s?"#3d7a35":"#d8cca0",a=s?"#4a3010":"#c0b080",o=s?"#3a2810":"#b8a870",c=e*.27,l=.5;this._addPart(oe(l,c,l,r),0,n-c/2,0);const h=s?"#cc0000":"#333300";for(const b of[-.12,.12]){const D=oe(.1,.08,.02,h);D.position.set(b,n-c/2+.04,l/2),this.mesh.add(D)}const f=e*.33,d=.65,u=n-c-f/2;this._addPart(oe(d,f,.32,a),0,u,0);const _=e*.38,g=.22,p=(d+g)/2+.01;for(const[b]of[[-1],[1]]){const D=oe(g,_,g,r);s&&(D.rotation.x=-.7),this._addPart(D,b*p,u,s?.18:0)}const m=e*.4,T=.28,S=-n+m/2;if(this._addPart(oe(T,m,T,o),-.18,S,0),this._addPart(oe(T,m,T,o),.18,S,0),!s)for(let b=0;b<3;b++){const D=oe(d*.8,.06,.01,b%2?"#ccc090":"#c8bc8a");D.position.set(0,u+f/2-.12-b*.12,.17),this.mesh.add(D)}}_buildAnimal(){const t=this.mobType.id,e=this.mobType.scale,n=this.mobType.color;let s=n,r=n,a=null;t==="cow"?(s="#5C3317",r="#8B4513",a="#F5F5F5"):t==="pig"?(s="#FF9090",r="#FFB6C1"):t==="sheep"?(s="#999999",r="#CCCCCC"):t==="chicken"&&(s="#FF6600",r="#FFFFFF",a="#FF4400");const o=e[0]*.7,c=e[1]*.4,l=e[2]*.9,h=0;this._addPart(oe(o,c,l,n),0,h,0),t==="sheep"&&this._addPart(oe(o+.12,c+.1,l+.1,"#E8E8E8"),0,h+.05,0),t==="cow"&&a&&this._addPart(oe(o*.5,c*.6,l*.5,a),0,h-.05,0);const f=e[0]*(t==="chicken"?.35:.45),d=e[1]*(t==="chicken"?.3:.35),u=e[2]*(t==="pig"?.4:.35),_=-(l/2+u/2);this._addPart(oe(f,d,u,r),0,h+c*.15,_),t==="pig"&&this._addPart(oe(f*.6,d*.4,.08,"#FF8080"),0,h,_-u/2),t==="chicken"&&a&&(this._addPart(oe(.08,.12,.06,a),0,h+c*.15+d*.5,_),this._addPart(oe(.1,.08,.04,a),0,h+c*.1,_-u/2-.02));for(const m of[-f*.28,f*.28]){const T=oe(.06,.06,.03,"#1a1a1a");T.position.set(m,h+c*.15+d*.1,_-u/2),this.mesh.add(T)}const g=e[1]*.38,p=h-c/2-g/2;if(t==="chicken"){const m=e[0]*.06,T=e[2]*.06,S=o*.18;this._addPart(oe(m,g,T,s),-S,p,0),this._addPart(oe(m,g,T,s),S,p,0)}else{const m=e[0]*.14,T=e[2]*.14,S=o*.28,b=l*.28;for(const[D,C]of[[-S,-b],[S,-b],[-S,b],[S,b]])this._addPart(oe(m,g,T,s),D,p,C)}t!=="chicken"&&this._addPart(oe(.1,.1,.12,s),0,h+c*.3,l/2+.06),t==="chicken"&&this._addPart(oe(.15,.2,.08,"#DDDDDD"),0,h+c*.4,l/2+.04)}_buildSpider(){this._addPart(oe(.85,.4,.6,"#2a1010"),0,.05,-.2),this._addPart(oe(.7,.55,.65,"#150808"),0,.08,.52),this._addPart(oe(.42,.3,.3,"#1a0808"),0,.08,-.62);for(const e of[-.1,.1]){const n=oe(.07,.07,.03,"#ff1100");n.position.set(e,.2,-.77),this.mesh.add(n)}const t=[-.5,-.2,.15,.45];for(const e of[-1,1])for(let n=0;n<4;n++){const s=oe(.65,.07,.07,"#0f0606");s.rotation.y=e*t[n],s.rotation.z=e*.4,s.position.set(e*.56,-.05,-.15+n*.2),this.mesh.add(s),this._parts.push(s),s._origColor="#"+s.material.color.getHexString(),s.castShadow=!0}}_buildHealthBar(){const t=document.createElement("canvas");t.width=64,t.height=8,this._hbCtx=t.getContext("2d"),this._hbTex=new Tl(t);const e=new Ml({map:this._hbTex,depthTest:!1});this._hbSprite=new Om(e),this._hbSprite.scale.set(1.2,.15,1),this._hbSprite.position.set(0,this.mobType.scale[1]/2+.4,0),this.mesh.add(this._hbSprite),this._updateHealthBar()}_updateHealthBar(){const t=this._hbCtx;t.clearRect(0,0,64,8),t.fillStyle="#400000",t.fillRect(0,0,64,8),t.fillStyle="#e74c3c",t.fillRect(0,0,Math.floor(64*this.health/this.maxHealth),8),this._hbTex.needsUpdate=!0}get position(){return this.mesh.position}takeDamage(t){this.dead||(ci.playHit(),this.health=Math.max(0,this.health-t),this._updateHealthBar(),this._parts.forEach(e=>e.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(e=>e.material.color.set(e._origColor))},150),this.health<=0&&this._die())}_die(){var t;this.dead||(this.dead=!0,this._dropLoot(),this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),(t=this.onDeath)==null||t.call(this,this))}_dropLoot(){}applyGravity(t,e){this._vy-=as*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),a=Math.floor(n.y-this.mobType.scale[1]/2-.1),o=Math.floor(n.z);if(e.isSolid(r,a,o)){this._vy=0;const c=e.surfaceY(r,o);c>=0&&(n.y=c+1+this.mobType.scale[1]/2)}else n.y=s}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dead=!0}}const vn={IDLE:"idle",CHASE:"chase",ATTACK:"attack"};class a_{constructor(t,e,n){this.mob=t,this.player=e,this.worldData=n,this.state=vn.IDLE,this._attackTimer=0,this._steerAngle=0}update(t){if(this.mob.dead)return;const{mobType:e}=this.mob,n=this.player.camera.position.x-this.mob.position.x,s=this.player.camera.position.y-this.mob.position.y,r=this.player.camera.position.z-this.mob.position.z,a=Math.sqrt(n*n+s*s+r*r);if(this.state===vn.IDLE)a<e.detectionRange&&this._hasLineOfSight()&&(this.state=vn.CHASE);else if(this.state===vn.CHASE){if(a>e.detectionRange*1.6){this.state=vn.IDLE;return}if(a<=e.attackRange){this.state=vn.ATTACK;return}this._moveToward(t,n,r,a,e.speed)}else if(this.state===vn.ATTACK){if(a>e.attackRange*1.4){this.state=vn.CHASE;return}this._attackTimer-=t,this._attackTimer<=0&&(this._hasLineOfSight()&&this.player.stats.takeDamage(e.damage),this._attackTimer=e.attackCooldown)}this.mob.applyGravity(t,this.worldData),this.state!==vn.IDLE&&(this.mob.mesh.rotation.y=Math.atan2(n,r))}_hasLineOfSight(){const t=this.mob.position,e=this.player.camera.position,n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,a=Math.sqrt(n*n+s*s+r*r);if(a===0)return!0;const o=Math.ceil(a/.5);for(let c=1;c<o;c++){const l=c/o,h=Math.floor(t.x+n*l),f=Math.floor(t.y+s*l),d=Math.floor(t.z+r*l);if(this.worldData.isSolid(h,f,d))return!1}return!0}_moveToward(t,e,n,s,r){let a=e/s,o=n/s;const c=this.mob.position,l=1.2,h=Math.floor(c.x+a*l),f=Math.floor(c.y),d=Math.floor(c.z+o*l);if(this.worldData.isSolid(h,f,d)){this._steerAngle+=.15;const u=this._steerAngle;a=Math.cos(u)*a-Math.sin(u)*o,o=Math.sin(u)*a+Math.cos(u)*o}else this._steerAngle*=.9;this.mob.position.x+=a*r*t,this.mob.position.z+=o*r*t}}const Fc=["zombie","skeleton","spider"];class o_{constructor(t,e,n,s,r){this.scene=t,this.worldData=e,this.player=n,this.inventory=s,this.itemRegistry=r,this.mobs=[],this._spawnTimer=0,this.active=!1,this.onMobDeath=null}setNight(t){this.active=t,t||this._despawnAll()}_despawnAll(){for(const{mob:t}of this.mobs)t.dispose();this.mobs=[]}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){this.mobs.splice(e,1);continue}s.update(t)}this.active&&(this.mobs.length>=$m||(this._spawnTimer+=t,!(this._spawnTimer<3)&&(this._spawnTimer=0,this._trySpawn())))}_trySpawn(){const t=this.player.camera.position,e=Math.random()*Math.PI*2,n=15+Math.random()*(Km-15),s=t.x+Math.cos(e)*n,r=t.z+Math.sin(e)*n,a=Math.floor(s),o=Math.floor(r);if(a<1||a>=Ft-1||o<1||o>=Ot-1)return;const c=this.worldData.surfaceY(a,o);if(c<0)return;const l=Fc[Math.floor(Math.random()*Fc.length)],h=dr[l],f=new U(s,c+1,r),d=new pr(h,f,this.scene);d.onDeath=_=>{var g;for(const p of _.mobType.dropItems)Math.random()<p.chance&&this.inventory.add(p.itemId,p.count,this.itemRegistry);(g=this.onMobDeath)==null||g.call(this,_)};const u=new a_(d,this.player,this.worldData);this.mobs.push({mob:d,ai:u})}getMobs(){return this.mobs.map(t=>t.mob)}}const kc=["cow","pig","sheep","chicken"],c_=12,zc=4;class Hc{constructor(t,e,n=null){this.mob=t,this.worldData=e,this.player=n,this._wanderTimer=Math.random()*zc,this._angle=Math.random()*Math.PI*2,this._moving=!1}update(t){if(!this.mob.dead){if(this.mob.mobType.id==="pig"&&this.player){this._followPlayer(t);return}if(this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=zc*(.5+Math.random()),this._moving=Math.random()<.6,this._moving&&(this._angle+=(Math.random()-.5)*Math.PI*1.2)),this._moving){const e=this.mob.mobType.speed,n=this.mob.position,s=Math.cos(this._angle),r=Math.sin(this._angle),a=n.x+s*e*t,o=n.z+r*e*t;if(a<1||a>=Ft-1||o<1||o>=Ot-1)this._angle+=Math.PI;else{const c=Math.floor(a),l=Math.floor(n.y),h=Math.floor(o);this.worldData.isSolid(c,l,h)?this._angle+=Math.PI*(.5+Math.random()*.5):(n.x=a,n.z=o,this.mob.mesh.rotation.y=Math.atan2(s,r))}}this.mob.applyGravity(t,this.worldData)}}_followPlayer(t){const e=this.player.camera.position,n=this.mob.position,s=e.x-n.x,r=e.z-n.z,a=Math.sqrt(s*s+r*r);if(a>1.2){const o=this.mob.mobType.speed*1.6,c=n.x+s/a*o*t,l=n.z+r/a*o*t;if(!(c<1||c>=Ft-1||l<1||l>=Ot-1)){const h=Math.floor(c),f=Math.floor(n.y),d=Math.floor(l);this.worldData.isSolid(h,f,d)||(n.x=c,n.z=l)}}this.mob.mesh.rotation.y=Math.atan2(s,r),this.mob.applyGravity(t,this.worldData)}}class l_{constructor(t,e,n,s,r=null){this.scene=t,this.worldData=e,this.inventory=n,this.itemRegistry=s,this.player=r,this.mobs=[],this._spawnTimer=0,this._initialised=!1,this._companionSpawned=!1}init(){if(!this._initialised){this._initialised=!0;for(let t=0;t<8;t++)this._trySpawn()}}setNight(t){this._isNight=t}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){this.mobs.splice(e,1);continue}s.update(t)}if(this._isNight||this.mobs.length<c_&&(this._spawnTimer+=t,this._spawnTimer>=8&&(this._spawnTimer=0,this._trySpawn())),!this._companionSpawned&&this.player){const e=this.player.camera.position,n=new U(e.x+2,e.y,e.z+2),s=this.worldData.surfaceY(Math.floor(n.x),Math.floor(n.z));if(s>=0){n.y=s+1;const r=new pr(dr.pig,n,this.scene);r.onDeath=o=>{for(const c of o.mobType.dropItems)Math.random()<c.chance&&this.inventory.add(c.itemId,c.count,this.itemRegistry)};const a=new Hc(r,this.worldData,this.player);this.mobs.push({mob:r,ai:a}),this._companionSpawned=!0}}}_trySpawn(){for(let e=0;e<10;e++){const n=4+Math.random()*(Ft-8),s=4+Math.random()*(Ot-8),r=Math.floor(n),a=Math.floor(s),o=this.worldData.surfaceY(r,a);if(o<5)continue;const c=this.worldData.get(r,o,a);if(c!==1&&c!==2)continue;const l=kc[Math.floor(Math.random()*kc.length)],h=dr[l],f=new U(n,o+1,s),d=new pr(h,f,this.scene);d.onDeath=_=>{for(const g of _.mobType.dropItems)Math.random()<g.chance&&this.inventory.add(g.itemId,g.count,this.itemRegistry)};const u=new Hc(d,this.worldData,this.player);this.mobs.push({mob:d,ai:u});return}}getMobs(){return this.mobs.map(t=>t.mob)}}function w(i,t,e,n,s,r){const a=new fr({color:n});return s&&(a.emissive=new Dt(s),a.emissiveIntensity=r??.5),new Se(new En(i,t,e),a)}class xr{constructor(t,e,n,s,r,a){this.config=t,this.scene=n,this.player=s,this.inventory=r,this.itemRegistry=a,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this.currentPhase=0,this._attackTimer=0,this._vy=0,this.onDeath=null,this.onPhaseChange=null,this._homePos=e.clone(),this._aggroed=!1,this._parts=[],this.mesh=new Un,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),n.add(this.mesh),this._buildMesh(),this._initBossBar()}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildMesh(){const[t,e,n]=this.config.scale,s=w(t,e,n,this.config.color);s._origColor=this.config.color,s.castShadow=!0,this.mesh.add(s),this._parts.push(s)}_initBossBar(){this._barFill=document.getElementById("boss-bar-fill")}showBar(){const t=document.getElementById("boss-bar-wrap"),e=document.getElementById("boss-name");t&&(t.style.display="block",e.textContent=this.config.name),this._updateBar()}_updateBar(){this._barFill&&(this._barFill.style.width=`${this.health/this.maxHealth*100}%`)}get position(){return this.mesh.position}takeDamage(t){var n;if(this.dead)return;ci.playHit(),this.health=Math.max(0,this.health-t),this._updateBar(),this._parts.forEach(s=>s.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(s=>s.material.color.set(s._origColor))},150);const e=this.config.phases||[];for(let s=0;s<e.length;s++)if(this.currentPhase===s&&this.health/this.maxHealth<e[s]){this.currentPhase=s+1,(n=this.onPhaseChange)==null||n.call(this,this.currentPhase),this._onPhaseChange(this.currentPhase);break}this.health<=0&&this._die()}_onPhaseChange(t){}_die(){var e;if(this.dead)return;this.dead=!0;const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none");for(const n of this.config.drops||[])this.inventory.add(n.itemId,n.count,this.itemRegistry);this.scene.remove(this.mesh),this._parts.forEach(n=>{n.geometry.dispose(),n.material.dispose()}),(e=this.onDeath)==null||e.call(this,this)}applyGravity(t,e){this._vy-=as*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),a=Math.floor(n.y-this.config.scale[1]/2-.1),o=Math.floor(n.z);if(e.isSolid(r,a,o)){this._vy=0;const c=e.surfaceY(r,o);c>=0&&(n.y=c+1+this.config.scale[1]/2)}else n.y=s}_moveToward(t,e,n){const s=e.x-this.position.x,r=e.z-this.position.z,a=Math.sqrt(s*s+r*r);a<.5||(this.position.x+=s/a*n*t,this.position.z+=r/a*n*t,this.position.x=Math.max(2,Math.min(190,this.position.x)),this.position.z=Math.max(2,Math.min(190,this.position.z)),this.mesh.rotation.y=Math.atan2(s,r))}update(t,e){if(!this.dead){if(this.applyGravity(t,e),!this._aggroed){const n=this.config.aggroZoneRadius??this.config.chaseRange??22,s=this.player.camera.position.x-this._homePos.x,r=this.player.camera.position.z-this._homePos.z;Math.sqrt(s*s+r*r)<n&&(this._aggroed=!0)}this._aggroed?this._behaviorUpdate(t):this.position.distanceTo(this._homePos)>2&&this._moveToward(t,this._homePos,1)}}_behaviorUpdate(t){}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()});const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none"),this.dead=!0}}const Ni={id:"cave_troll",name:"⚡ Cave Troll",color:"#3d6e3d",health:200,damage:4,speed:2.5,attackRange:2.5,attackCooldown:2,scale:[2,3,2],phases:[.6,.3],drops:[{itemId:"troll_fang",count:1}],chaseRange:18,aggroZoneRadius:20};class h_ extends xr{constructor(t,e,n,s,r,a){super(Ni,t,e,n,s,r),this.mobSpawner=a,this._slamTimer=0}_buildMesh(){const t="#4a5040",e="#2e3828",n="#3a4030",s="#3a5a2a";this._addPart(w(1.35,1.05,1.1,t),0,1.52,0),this._addPart(w(1.5,.28,.45,e),0,1.88,.25),this._addPart(w(.32,.22,.12,e),-.3,1.75,.5),this._addPart(w(.32,.22,.12,e),.3,1.75,.5),this._addPart(w(.16,.14,.08,"#cc9900"),-.3,1.76,.56),this._addPart(w(.16,.14,.08,"#cc9900"),.3,1.76,.56),this._addPart(w(.38,.2,.22,n),0,1.58,.52),this._addPart(w(1.1,.32,.55,n),0,1.14,.35),this._addPart(w(.12,.38,.1,"#d4c88a"),-.28,1.05,.52),this._addPart(w(.12,.38,.1,"#d4c88a"),.28,1.05,.52),this._addPart(w(.18,.4,.12,e),-.75,1.6,0),this._addPart(w(.18,.4,.12,e),.75,1.6,0),this._addPart(w(.75,.3,.7,n),0,1,0),this._addPart(w(2.1,1.7,1.05,t),0,.2,0),this._addPart(w(1.8,1.05,.45,t),0,-.25,.44),this._addPart(w(.7,.55,.18,e),-.45,.55,.5),this._addPart(w(.7,.55,.18,e),.45,.55,.5),this._addPart(w(.55,.35,.12,s),-.6,.1,.5),this._addPart(w(.4,.28,.12,s),.7,.4,.48),this._addPart(w(.45,.3,.12,s),.2,-.3,.5),this._addPart(w(.35,.5,.3,n),-.6,.6,-.5),this._addPart(w(.28,.4,.28,n),.5,.3,-.5),this._addPart(w(.22,.35,.22,n),0,.8,-.5),this._addPart(w(.85,.7,.8,e),-1.25,.85,0);const r=w(.72,2.15,.72,t);r.rotation.z=-.28,this._addPart(r,-1.45,-.35,0),this._addPart(w(.4,.35,.35,n),-1.55,-.5,0),this._addPart(w(.85,.7,.8,n),-1.65,-1.6,0),this._addPart(w(.2,.2,.2,e),-1.45,-1.82,.3),this._addPart(w(.2,.2,.2,e),-1.72,-1.82,.15),this._addPart(w(.18,.18,.18,e),-1.88,-1.82,-.1),this._addPart(w(.85,.7,.8,e),1.25,.85,0);const a=w(.72,2.15,.72,t);a.rotation.z=.28,this._addPart(a,1.45,-.35,0),this._addPart(w(.4,.35,.35,n),1.55,-.5,0),this._addPart(w(.8,.65,.75,n),1.62,-1.58,0),this._addPart(w(.18,1,.18,e),1.62,-2.3,0),this._addPart(w(.55,.55,.55,n),1.62,-2.95,0),this._addPart(w(.2,.5,.2,e),1.62,-3.1,-.1),this._addPart(w(.95,1.15,.95,e),-.58,-1.55,0),this._addPart(w(.95,1.15,.95,e),.58,-1.55,0),this._addPart(w(.45,.35,.3,n),-.58,-1.2,.42),this._addPart(w(.45,.35,.3,n),.58,-1.2,.42),this._addPart(w(1.05,.22,1.15,n),-.58,-2.2,.12),this._addPart(w(1.05,.22,1.15,n),.58,-2.2,.12);for(const[o,c]of[[-.72,.55],[-.45,.58],[-.18,.57]])this._addPart(w(.2,.15,.15,e),o,-2.2,c);for(const[o,c]of[[.18,.55],[.45,.58],[.72,.57]])this._addPart(w(.2,.15,.15,e),o,-2.2,c)}_onPhaseChange(t){var e,n;if(t===1){this._parts.forEach(s=>{s.material.color.set("#bbbbbb"),s._origColor="#bbbbbb"});for(let s=0;s<3;s++)(n=(e=this.mobSpawner)._trySpawn)==null||n.call(e)}t===2&&(this._slamTimer=0)}_behaviorUpdate(t){const e=this.player.camera.position.x-this.position.x,n=this.player.camera.position.z-this.position.z,s=Math.sqrt(e*e+n*n);s>Ni.attackRange&&this._moveToward(t,this.player.camera.position,Ni.speed),this._attackTimer-=t,s<=Ni.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Ni.damage),this._attackTimer=Ni.attackCooldown),this.currentPhase>=2&&(this._slamTimer-=t,this._slamTimer<=0&&(this._slamTimer=4,s<=4&&this.player.stats.takeDamage(6)))}}const Ui={id:"swamp_witch",name:"🔮 Swamp Witch",color:"#6a1a8a",health:150,damage:3,speed:2,attackRange:12,attackCooldown:2.5,scale:[1,2,1],phases:[.4],drops:[{itemId:"witch_eye",count:1}],chaseRange:18,aggroZoneRadius:16};class u_{constructor(t,e,n){const s=new _o(.3,6,6),r=new ni({color:"#aa44ff"});this.mesh=new Se(s,r),this.mesh.position.copy(t);const a=new U().subVectors(e,t).normalize();this.velocity=a.multiplyScalar(12),n.add(this.mesh),this.scene=n,this.alive=!0,this._life=4}update(t,e,n){if(this.alive){if(this.mesh.position.addScaledVector(this.velocity,t),this._life-=t,this._life<=0){this._destroy();return}this.mesh.position.distanceTo(e)<1.5&&(n(),this._destroy())}}_destroy(){this.alive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose()}}class f_ extends xr{constructor(t,e,n,s,r){super(Ui,t,e,n,s,r),this._projectiles=[],this._currentSpeed=Ui.speed}_buildMesh(){const t="#4a3820",e="#5a1a6a",n="#3a0a50",s="#18080e",r="#1a1008",a="#aa8800";this._addPart(w(1.05,.08,1,s),0,1.22,0),this._addPart(w(.68,.28,.65,s),0,1.38,0),this._addPart(w(.5,.28,.48,s),0,1.62,0),this._addPart(w(.34,.28,.34,s),0,1.86,0),this._addPart(w(.18,.28,.18,s),0,2.08,-.04),this._addPart(w(.08,.2,.08,s),0,2.28,-.08),this._addPart(w(.72,.07,.68,a),0,1.26,0),this._addPart(w(.14,.1,.05,a),0,1.27,.34),this._addPart(w(.46,.48,.44,t),0,.8,0),this._addPart(w(.1,.14,.08,"#3a2810"),-.22,.8,.2),this._addPart(w(.1,.14,.08,"#3a2810"),.22,.8,.2),this._addPart(w(.1,.1,.06,"#44ff44","#00aa00",1.2),-.13,.85,.23),this._addPart(w(.1,.1,.06,"#44ff44","#00aa00",1.2),.13,.85,.23),this._addPart(w(.08,.13,.18,"#3a2810"),0,.79,.24),this._addPart(w(.1,.07,.1,"#3a2810"),0,.74,.31),this._addPart(w(.22,.04,.05,"#2a1808"),0,.68,.22),this._addPart(w(.06,.06,.06,"#3a2808"),.06,.62,.22),this._addPart(w(.12,.48,.08,r),-.24,.65,-.1),this._addPart(w(.1,.55,.06,r),-.3,.6,-.05),this._addPart(w(.12,.48,.08,r),.24,.65,-.1),this._addPart(w(.1,.55,.06,r),.3,.6,-.05),this._addPart(w(.22,.2,.2,t),0,.52,0),this._addPart(w(.6,.58,.36,e),0,.22,0),this._addPart(w(.48,.12,.14,"#6a2a7a"),0,.52,.12),this._addPart(w(.64,.1,.38,a),0,-.08,0),this._addPart(w(.14,.14,.1,"#4a3010"),-.22,-.08,.18),this._addPart(w(.12,.16,.1,"#4a3010"),.22,-.09,.18),this._addPart(w(.72,.4,.44,n),0,-.35,0),this._addPart(w(.82,.4,.52,n),0,-.65,0),this._addPart(w(.78,.36,.5,"#2a0840"),0,-.94,0),this._addPart(w(.2,.15,.08,n),-.28,-1.12,.18),this._addPart(w(.16,.18,.07,n),.22,-1.13,.2),this._addPart(w(.12,.12,.07,n),0,-1.14,.22);const o=w(.18,.58,.18,t);o.rotation.z=-.6,o.rotation.x=-.2,this._addPart(o,-.4,.22,0),this._addPart(w(.2,.18,.18,t),-.64,-.04,0),this._addPart(w(.06,.16,.05,t),-.55,-.2,.06),this._addPart(w(.06,.16,.05,t),-.64,-.22,.04),this._addPart(w(.06,.16,.05,t),-.73,-.2,.04),this._addPart(w(.22,.22,.22,"#aa44ff","#6600cc",1.2),-.64,-.38,0);const c=w(.18,.58,.18,t);c.rotation.z=.25,this._addPart(c,.38,.18,0),this._addPart(w(.2,.18,.18,t),.54,-.14,0),this._addPart(w(.07,1.6,.07,"#3a2010"),.56,-.95,0),this._addPart(w(.2,.1,.1,"#4a3010"),.56,-1.78,0),this._addPart(w(.1,.1,.2,"#4a3010"),.56,-1.78,0),this._addPart(w(.16,.22,.16,"#44ffaa","#00cc66",1.5),.56,-1.95,0)}_onPhaseChange(t){t===1&&(this._currentSpeed=Ui.speed*2,this._parts.forEach(e=>{e.material.color.set("#330044"),e._origColor="#330044"}))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);if(n<8?this._moveToward(t,e,-this._currentSpeed):n>14&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,this._attackTimer<=0&&n<=Ui.attackRange){this._attackTimer=Ui.attackCooldown;const s=new u_(new U(this.position.x,this.position.y+1,this.position.z),new U(e.x,e.y,e.z),this.scene);this._projectiles.push(s)}for(let s=this._projectiles.length-1;s>=0;s--){const r=this._projectiles[s];r.update(t,this.player.camera.position,()=>{this.player.stats.takeDamage(Ui.damage)}),r.alive||this._projectiles.splice(s,1)}}}const Ln={id:"stone_golem",name:"🪨 Stone Golem",color:"#888888",health:300,damage:6,speed:1.5,attackRange:2.5,attackCooldown:3,scale:[2.5,4,2.5],phases:[.5],minTier:3,drops:[{itemId:"golem_core",count:1}],chaseRange:18,aggroZoneRadius:14};class d_ extends xr{constructor(t,e,n,s,r){super(Ln,t,e,n,s,r),this._currentSpeed=Ln.speed,this._stomp=0}_buildMesh(){const t="#8a9082",e="#4a5040",n="#6a7060",s="#2e3428";this._addPart(w(1.2,.92,.95,t),0,1.55,0),this._addPart(w(1.35,.22,.38,e),0,1.9,.2);const r=w(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(r,-.32,1.65,.44);const a=w(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(a,.32,1.65,.44),this._eyeMats=[r.material,a.material],this._addPart(w(.35,.3,.1,e),-.32,1.65,.5),this._addPart(w(.35,.3,.1,e),.32,1.65,.5),this._addPart(w(.7,.1,.1,s),0,1.38,.48),this._addPart(w(.18,.16,.08,s),-.22,1.34,.48),this._addPart(w(.18,.16,.08,s),.22,1.34,.48),this._addPart(w(.2,.35,.2,e),-.3,2.06,-.1),this._addPart(w(.18,.28,.18,e),.25,2.1,.05),this._addPart(w(.14,.22,.14,e),0,2.02,-.25),this._addPart(w(2,1.7,1.15,t),0,.22,0),this._addPart(w(.85,.75,.28,n),-.45,.65,.5),this._addPart(w(.85,.75,.28,n),.45,.65,.5),this._addPart(w(1.5,.4,.22,e),0,.12,.56);const o=w(.55,.55,.28,"#44ccff","#2288ff",2.2);this._crystalMat=o.material,this._addPart(o,0,.3,.56),this._addPart(w(.8,.07,.08,"#2266cc","#2266cc",.8),0,.58,.55),this._addPart(w(.06,.6,.06,"#2266cc","#2266cc",.8),0,.1,.55),this._addPart(w(.4,.5,.28,e),-.6,.7,-.55),this._addPart(w(.35,.42,.25,e),.5,.4,-.55),this._addPart(w(.28,.35,.22,n),0,.95,-.55),this._addPart(w(.06,.8,.05,s),-.2,.25,.58),this._addPart(w(.06,.6,.05,s),.3,.15,.58),this._addPart(w(1.3,.65,1,e),-1.65,.95,0),this._addPart(w(1.3,.65,1,e),1.65,.95,0),this._addPart(w(.22,.55,.22,t),-2.12,1.22,0),this._addPart(w(.18,.44,.18,t),-1.85,1.3,.22),this._addPart(w(.22,.55,.22,t),2.12,1.22,0),this._addPart(w(.18,.44,.18,t),1.85,1.3,.22);const c=w(.75,1.9,.75,n);c.rotation.z=-.12,this._addPart(c,-1.5,-.35,0),this._addPart(w(.6,.42,.5,e),-1.58,-.55,0),this._addPart(w(1,.85,.95,t),-1.62,-1.55,0),this._addPart(w(.35,.28,.3,e),-1.35,-1.82,.35),this._addPart(w(.3,.25,.28,e),-1.72,-1.82,.35),this._addPart(w(.28,.22,.25,e),-2,-1.78,.2);const l=w(.75,1.9,.75,n);l.rotation.z=.12,this._addPart(l,1.5,-.35,0),this._addPart(w(.6,.42,.5,e),1.58,-.55,0),this._addPart(w(1,.85,.95,t),1.62,-1.55,0),this._addPart(w(.35,.28,.3,e),1.35,-1.82,.35),this._addPart(w(.3,.25,.28,e),1.72,-1.82,.35),this._addPart(w(.28,.22,.25,e),2,-1.78,.2),this._addPart(w(.92,1.1,.92,n),-.58,-1.52,0),this._addPart(w(.92,1.1,.92,n),.58,-1.52,0),this._addPart(w(.52,.42,.38,e),-.58,-1.18,.44),this._addPart(w(.52,.42,.38,e),.58,-1.18,.44),this._addPart(w(1.1,.28,1.2,t),-.58,-2.22,.12),this._addPart(w(1.1,.28,1.2,t),.58,-2.22,.12),this._addPart(w(.28,.2,.28,e),-1,-2.22,.3),this._addPart(w(.22,.18,.22,e),.95,-2.22,.28),this._addPart(w(.2,.16,.2,e),0,-2.22,.7)}_onPhaseChange(t){t===1&&(this._currentSpeed=Ln.speed*2.2,this._parts.forEach(e=>{e.material.color.set("#c0c8b8"),e._origColor="#c0c8b8"}),this._crystalMat&&(this._crystalMat.color.set("#88ffff"),this._crystalMat.emissiveIntensity=4),this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}))}_behaviorUpdate(t){const e=this.player.camera.position,n=e.x-this.position.x,s=e.z-this.position.z,r=Math.sqrt(n*n+s*s);r>Ln.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,r<=Ln.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Ln.damage),this._attackTimer=Ln.attackCooldown),this.currentPhase>=1&&(this._stomp-=t,this._stomp<=0&&(this._stomp=5,r<=5&&this.player.stats.takeDamage(4)))}takeDamage(t){this.player.stats.tier<Ln.minTier&&(t*=.15),super.takeDamage(t)}}const In={id:"the_conqueror",name:"💀 THE CONQUEROR",color:"#1a0a1a",health:600,damage:8,speed:3,attackRange:3,attackCooldown:1.5,scale:[3,5,3],phases:[.6,.25],drops:[],chaseRange:30};class p_ extends xr{constructor(t,e,n,s,r,a){super(In,t,e,n,s,r),this.worldData=a,this._currentSpeed=In.speed,this._summonTimer=0,this._shockwaveTimer=0,this._minions=[],this.onWin=null}_buildMesh(){const t="#1a0a12",e="#0a0508",n="#3a0808",s="#6a3000",r="#2a1808";this._addPart(w(1.1,.95,.98,t),0,2.18,0),this._addPart(w(1.12,.28,.18,e),0,2.12,.5),this._addPart(w(.35,.07,.06,"#ff0000","#cc0000",1.5),-.22,2.1,.56),this._addPart(w(.35,.07,.06,"#ff0000","#cc0000",1.5),.22,2.1,.56);const a=w(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(a,-.22,2.12,.52);const o=w(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(o,.22,2.12,.52),this._eyeMats=[a.material,o.material],this._addPart(w(.22,.5,.35,e),-.57,2.1,.22),this._addPart(w(.22,.5,.35,e),.57,2.1,.22),this._addPart(w(1,.6,.25,e),0,2.1,-.55),this._addPart(w(1.18,.06,.06,s),0,2.55,0),this._addPart(w(.2,.12,.05,"#880000","#cc0000",1),0,2.38,.5);const c=w(.2,.85,.18,r);c.rotation.z=-.55,c.rotation.x=-.1,this._addPart(c,-.48,2.85,-.05);const l=w(.2,.85,.18,r);l.rotation.z=.55,l.rotation.x=-.1,this._addPart(l,.48,2.85,-.05),this._addPart(w(.12,.3,.12,"#4a2010"),-.78,3.28,-.08),this._addPart(w(.12,.3,.12,"#4a2010"),.78,3.28,-.08),this._addPart(w(.65,.3,.6,e),0,1.68,0),this._addPart(w(.85,.18,.65,t),0,1.55,0),this._addPart(w(2.1,1.9,1.18,t),0,.55,0),this._addPart(w(1.85,1.5,.3,n),0,.62,.56),this._addPart(w(.9,.8,.16,t),-.45,.95,.7),this._addPart(w(.9,.8,.16,t),.45,.95,.7);const h=w(.55,.55,.12,"#880000","#ff0000",1.8);this._glowMat=h.material,this._addPart(h,0,.65,.72),this._addPart(w(1.85,.06,.08,s),0,1.2,.65),this._addPart(w(1.85,.06,.08,s),0,.1,.65),this._addPart(w(1.6,.5,.25,e),0,.02,.62),this._addPart(w(.5,1.6,.2,e),0,.6,-.62),this._addPart(w(.22,.35,.22,r),0,1.5,-.65),this._addPart(w(.18,.3,.18,r),0,1.1,-.65),this._addPart(w(.18,.28,.18,r),0,.7,-.65),this._addPart(w(1.55,.6,.12,"#0a0508"),0,1,-.72),this._addPart(w(1.7,.8,.12,e),0,.3,-.72),this._addPart(w(1.6,.8,.12,"#100610"),0,-.45,-.72),this._addPart(w(1.4,.7,.1,"#0a0408"),0,-1.1,-.7),this._addPart(w(.3,.3,.08,e),-.55,-1.6,-.68),this._addPart(w(.25,.35,.08,e),.3,-1.65,-.68),this._addPart(w(.2,.25,.08,e),-.1,-1.7,-.68),this._addPart(w(1.4,.6,1.1,e),-1.65,1.32,0),this._addPart(w(1.4,.6,1.1,e),1.65,1.32,0),this._addPart(w(.22,.6,.22,r),-2.15,1.6,0),this._addPart(w(.18,.5,.18,r),-1.85,1.7,.22),this._addPart(w(.18,.5,.18,r),-1.85,1.7,-.22),this._addPart(w(.22,.6,.22,r),2.15,1.6,0),this._addPart(w(.18,.5,.18,r),1.85,1.7,.22),this._addPart(w(.18,.5,.18,r),1.85,1.7,-.22),this._addPart(w(1.42,.06,.06,s),-1.65,1.62,0),this._addPart(w(1.42,.06,.06,s),1.65,1.62,0),this._addPart(w(.72,2.1,.72,t),-1.62,-.28,0),this._addPart(w(.22,.4,.22,r),-1.62,-.6,-.38),this._addPart(w(.85,.6,.8,e),-1.62,-1.48,0),this._addPart(w(.15,.25,.14,r),-1.4,-1.7,.35),this._addPart(w(.15,.22,.14,r),-1.65,-1.72,.38),this._addPart(w(.15,.2,.14,r),-1.88,-1.68,.32),this._addPart(w(.08,1.1,.95,n),-2.1,-.22,0),this._addPart(w(.06,1,.85,e),-2.18,-.22,0),this._addPart(w(.05,.2,.2,s),-2.22,-.22,0),this._addPart(w(.72,2.1,.72,t),1.62,-.28,0),this._addPart(w(.22,.4,.22,r),1.62,-.6,-.38),this._addPart(w(.85,.6,.8,e),1.62,-1.48,0),this._addPart(w(.15,.22,.14,r),1.4,-1.7,.35),this._addPart(w(.15,.2,.14,r),1.65,-1.72,.38),this._addPart(w(.15,.18,.14,r),1.88,-1.68,.32),this._addPart(w(.22,2.8,.08,e),1.62,-3.3,0),this._addPart(w(.08,2.6,.05,"#440000","#440000",.5),1.62,-3.3,0),this._addPart(w(.9,.12,.15,e),1.62,-1.98,0),this._addPart(w(.18,.5,.14,r),1.62,-2.15,0),this._addPart(w(.25,.18,.18,e),1.62,-2.44,0),this._addPart(w(.95,1.5,.95,t),-.6,-1.62,0),this._addPart(w(.95,1.5,.95,t),.6,-1.62,0),this._addPart(w(.68,.38,.5,n),-.6,-1.12,.38),this._addPart(w(.68,.38,.5,n),.6,-1.12,.38),this._addPart(w(.72,.8,.2,e),-.6,-1.65,.45),this._addPart(w(.72,.8,.2,e),.6,-1.65,.45),this._addPart(w(1.05,.22,1.2,t),-.6,-2.5,.1),this._addPart(w(1.05,.22,1.2,t),.6,-2.5,.1),this._addPart(w(.14,.14,.3,r),-.6,-2.44,.68),this._addPart(w(.14,.14,.3,r),.6,-2.44,.68)}_onPhaseChange(t){t===1&&(this._currentSpeed=In.speed*1.5,this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}),this._glowMat&&(this._glowMat.emissiveIntensity=3)),t===2&&(this._currentSpeed=In.speed*2,this._parts.forEach(e=>{e.material.color.set("#3a0000"),e._origColor="#3a0000"}),this._eyeMats&&this._eyeMats.forEach(e=>{e.color.set("#ff4400"),e.emissiveIntensity=6}),this._glowMat&&(this._glowMat.color.set("#ff0000"),this._glowMat.emissiveIntensity=5))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);n>In.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,n<=In.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(In.damage),this._attackTimer=In.attackCooldown),this.currentPhase>=1&&(this._shockwaveTimer-=t,this._shockwaveTimer<=0&&(this._shockwaveTimer=6,n<=6&&this.player.stats.takeDamage(5))),this.currentPhase>=2&&(this._summonTimer-=t,this._summonTimer<=0&&(this._summonTimer=20,this._summonMinions()));for(let s=this._minions.length-1;s>=0;s--){const r=this._minions[s];if(r.dead){this._minions.splice(s,1);continue}const a=e.x-r.position.x,o=e.z-r.position.z,c=Math.sqrt(a*a+o*o);c>1.5?(r.position.x+=a/c*3*t,r.position.z+=o/c*3*t):r.takeDamage&&this.player.stats.takeDamage(2*t),r.applyGravity(t,this.worldData)}}_summonMinions(){const t=["zombie","skeleton","spider"];for(const e of t){const n=dr[e],s=Math.random()*Math.PI*2,r=5+Math.random()*3,a=new U(this.position.x+Math.cos(s)*r,this.position.y,this.position.z+Math.sin(s)*r),o=new pr(n,a,this.scene);o.onDeath=()=>{},this._minions.push(o)}}_die(){var e;for(const n of this._minions)(e=n.dispose)==null||e.call(n);this._minions=[];const t=this.onWin;super._die(),t==null||t()}}class m_{constructor(){this.healthFill=document.getElementById("health-fill"),this.hungerFill=document.getElementById("hunger-fill"),this.dayCounter=document.getElementById("day-counter"),this.crosshair=document.getElementById("crosshair"),this.hudEl=document.getElementById("hud"),this.breakWrap=document.getElementById("break-progress-wrap"),this.breakFill=document.getElementById("break-progress-fill"),this.pickupFlash=document.getElementById("pickup-flash"),this._flashTimeout=null}show(){this.hudEl.style.display="flex",this.crosshair.style.display="block",this.dayCounter.style.display="block"}hide(){this.hudEl.style.display="none",this.crosshair.style.display="none",this.dayCounter.style.display="none"}updateHealth(t,e){const n=Math.max(0,t/e)*100;this.healthFill.style.width=n+"%"}updateHunger(t,e){const n=Math.max(0,t/e)*100;this.hungerFill.style.width=n+"%"}updateDay(t){this.dayCounter.textContent=`Day ${t}`}setBreakProgress(t){t<=0?(this.breakWrap.style.display="none",this.breakFill.style.width="0%"):(this.breakWrap.style.display="block",this.breakFill.style.width=t*100+"%")}showPickup(t){clearTimeout(this._flashTimeout),this.pickupFlash.textContent=`+ ${t}`,this.pickupFlash.style.opacity="1",this._flashTimeout=setTimeout(()=>{this.pickupFlash.style.opacity="0"},1500)}}const Gc=new Map;function De(i,t){const e=parseInt(i.replace("#",""),16);let n=e>>16&255,s=e>>8&255,r=e&255;return n=Math.max(0,Math.min(255,n+t)),s=Math.max(0,Math.min(255,s+t)),r=Math.max(0,Math.min(255,r+t)),`rgb(${n},${s},${r})`}function __(){const i=document.createElement("canvas");return i.width=32,i.height=32,i}const Ue=16,fe=2;function en(i,t,e,n){i.fillStyle=n,i.fillRect(t*fe,e*fe,fe,fe)}function rt(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t*fe,e*fe,n*fe,s*fe)}function ir(i,t,e){for(const[n,s]of t)en(i,n,s,e)}function g_(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)>>>0;return t||1}function v_(i){let t=i;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function ui(i,t){const e=v_(g_(t));for(let n=0;n<Ue;n++)for(let s=0;s<Ue;s++)en(i,s,n,De(t,(e()-.5)*24));for(let n=0;n<10;n++){const s=Math.floor(e()*Ue),r=Math.floor(e()*Ue);en(i,s,r,De(t,(e()-.5)*55))}rt(i,0,0,Ue,1,De(t,55)),rt(i,0,0,1,Ue,De(t,40)),rt(i,0,Ue-1,Ue,1,De(t,-55)),rt(i,Ue-1,0,1,Ue,De(t,-45)),i.strokeStyle=De(t,-70),i.lineWidth=fe,i.strokeRect(fe/2,fe/2,Ue*fe-fe,Ue*fe-fe)}function x_(i){ui(i,"#8b5a2b"),rt(i,1,6,14,1,"#5a3010"),rt(i,6,5,4,4,"#c8a020"),rt(i,7,6,2,2,"#7a5010")}function y_(i){ui(i,"#3a3a3a"),rt(i,3,8,4,4,"#ff8800"),rt(i,8,8,4,4,"#ff8800"),rt(i,4,9,2,2,"#ffcc00"),rt(i,9,9,2,2,"#ffcc00")}function M_(i){ui(i,"#c49a40"),rt(i,1,1,14,1,"#7a5010"),rt(i,1,14,14,1,"#7a5010"),rt(i,1,1,1,14,"#7a5010"),rt(i,14,1,1,14,"#7a5010"),rt(i,7,1,1,14,"#7a5010")}function S_(i){ui(i,"#2e1808");const t=[[7,3,2],[6,4,4],[6,5,4],[5,6,6],[5,7,6],[4,8,8],[4,9,8],[4,10,8],[4,11,8]];for(const[n,s,r]of t)rt(i,n,s,r,1,"#cc5500");const e=[[7,5,2],[6,7,4],[6,8,4],[5,9,6],[5,10,6]];for(const[n,s,r]of e)rt(i,n,s,r,1,"#ffcc00")}function E_(i){rt(i,1,5,14,8,"#7a4a20"),rt(i,2,7,12,5,"#a02020"),rt(i,2,6,4,3,"#e8e0d0"),rt(i,1,12,2,3,"#5a3010"),rt(i,13,12,2,3,"#5a3010")}function T_(i){rt(i,1,1,14,14,"rgba(160,220,255,0.35)"),i.strokeStyle="#7ab0cc",i.lineWidth=fe,i.strokeRect(fe/2,fe/2,Ue*fe-fe,Ue*fe-fe),rt(i,3,3,3,1,"rgba(255,255,255,0.6)"),rt(i,3,3,1,3,"rgba(255,255,255,0.6)")}function b_(i,t){const e={chest:x_,forge:y_,crafting_table:M_,campfire:S_,glass:T_,bed:E_};if(e[t.id]){e[t.id](i);return}const n=t.blockId>=0?Yi[t.blockId]:null;ui(i,(n==null?void 0:n.color)??"#888888")}const A_={1:"#c8a44a",2:"#9a9a9a",3:"#cfd6e6",4:"#a866ff"},R_="#6b4423",w_="#4a2c10";function ss(i,t){t.forEach(([e,n],s)=>en(i,e,n,s%2===0?R_:w_))}function C_(i,t){const e=A_[t.tier]??"#aaaaaa",n=De(e,45),s=De(e,-35);if(t.isSword)ss(i,[[2,14],[3,13],[4,12]]),en(i,2,14,"#2a1808"),rt(i,4,10,3,2,s),ir(i,[[6,10],[7,9],[7,8],[8,8],[8,7],[9,7],[9,6],[10,6],[10,5],[11,5],[11,4],[12,4],[12,3]],e),en(i,13,2,n);else if(t.isAxe){ss(i,[[3,14],[4,13],[5,12],[6,11],[7,10]]);const r=[[9,2,4],[8,3,5],[8,4,5],[8,5,5],[8,6,4],[9,7,2]];for(const[a,o,c]of r)rt(i,a,o,c,1,e);rt(i,12,3,1,3,n),rt(i,8,3,1,3,s)}else t.isPickaxe?(ss(i,[[7,13],[7,11],[8,9],[8,7]]),ir(i,[[3,4],[4,3],[5,2],[6,2],[7,1],[8,1],[9,1],[10,2],[11,2],[12,3],[13,4]],e),en(i,3,4,n),en(i,13,4,n),en(i,8,2,s),en(i,9,2,s)):t.isHoe?(ss(i,[[7,14],[7,12],[8,10],[8,8]]),rt(i,6,1,7,2,e),rt(i,6,1,7,1,n),rt(i,6,2,7,1,s)):t.isShovel&&(ss(i,[[7,15],[7,13],[7,11],[8,9]]),rt(i,6,2,4,3,e),ir(i,[[7,5],[8,5]],e),rt(i,6,2,4,1,n),rt(i,6,3,1,2,s),rt(i,9,3,1,2,s))}function P_(i,t,e){const n=[[5,3,6],[4,4,8],[3,5,10],[3,6,10],[3,7,10],[3,8,10],[3,9,10],[4,10,8],[5,11,6]];for(const[s,r,a]of n)rt(i,s,r,a,1,t);rt(i,4,5,2,2,e)}function L_(i){rt(i,2,6,12,6,"#c8863c"),rt(i,2,6,12,1,"#e8b878"),rt(i,3,7,10,2,"#e8b878");for(const t of[5,8,10])rt(i,t,8,1,3,"#8a5820")}function I_(i){const t=[[7,4,2],[7,6,2],[6,8,4],[6,10,4],[7,12,2],[7,13,2]];for(const[e,n,s]of t)rt(i,e,n,s,1,"#ff7722");rt(i,7,4,1,8,"#e05500"),rt(i,6,1,1,3,"#3a9028"),rt(i,9,0,1,4,"#3a9028"),rt(i,8,2,1,2,"#3a9028")}function ua(i,t){rt(i,5,9,6,3,"#3a2810"),rt(i,7,7,2,5,t),rt(i,8,2,1,5,"#2a7020")}function N_(i,t){const e=De(t,-30),n=De(t,40);rt(i,3,6,10,4,e),rt(i,4,6,8,1,n),rt(i,3,7,10,3,t),rt(i,4,9,8,1,De(t,-15))}function U_(i,t){const e=De(t,55),n=[[7,2,2],[6,3,4],[6,4,4],[5,5,6],[5,6,6],[5,7,6],[6,8,4],[6,9,4],[7,10,2]];for(const[s,r,a]of n)rt(i,s,r,a,1,t);rt(i,6,3,1,5,e)}function D_(i){[[3,13],[4,12],[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4]].forEach(([e,n],s)=>en(i,e,n,s%3===0?"#6a4018":"#8b5a2b"))}function O_(i){ir(i,[[3,3],[4,4],[4,5],[5,6],[5,7],[6,8],[6,9],[7,10],[8,10],[9,11],[10,11],[11,12],[12,12]],"#eeddcc")}function B_(i){rt(i,5,7,6,2,"#e8e0c8");for(const[t,e]of[[3,6],[3,8],[11,6],[11,8]])rt(i,t,e,2,2,"#e8e0c8")}function F_(i,t,e){ui(i,t);const n=[[3,3,2],[9,3,2],[5,6,2],[10,8,2],[3,10,2],[8,11,2]];for(const[s,r,a]of n)rt(i,s,r,a,a,e)}function fa(i,t){const e=De(t,-40),n=[[6,4,4],[5,5,6],[4,6,8],[4,7,8],[4,8,8],[5,9,6],[6,10,4]];for(const[s,r,a]of n)rt(i,s,r,a,1,t);rt(i,5,6,1,3,e),rt(i,9,6,1,3,e)}function k_(i){const t=[[5,2,6],[5,4,6],[6,6,4],[6,8,4],[7,10,2],[7,12,2]];for(const[e,n,s]of t)rt(i,e,n,s,2,"#eeeecc")}function z_(i){rt(i,2,5,12,6,"#1a0a1a"),rt(i,5,6,6,4,"#8822aa"),rt(i,7,7,2,2,"#44ff44")}function H_(i){rt(i,2,2,12,12,"#333333"),rt(i,3,3,10,10,"#2a2a2a"),rt(i,4,4,8,8,"#44ccff"),rt(i,6,6,2,2,"#ccffff")}function G_(i){const t=[[7,1,2],[6,2,4],[5,3,6],[4,4,8],[3,5,10],[3,6,10],[3,7,10],[3,8,10],[4,9,8],[5,10,6],[6,11,4],[7,12,2]];for(const[e,n,s]of t)rt(i,e,n,s,1,"#220022");rt(i,6,6,4,4,"#cc44ff"),rt(i,7,7,2,2,"#f0aaff")}const Vc={bread:L_,carrot:I_,wheat:i=>P_(i,"#cccc44","#eeee88"),baked_potato:i=>fa(i,"#c87830"),cooked_meat:i=>fa(i,"#8b4a2a"),raw_meat:i=>fa(i,"#cc4444"),wheat_seed:i=>ua(i,"#aaaa22"),carrot_seed:i=>ua(i,"#ff8800"),potato_seed:i=>ua(i,"#c89050"),iron_ore:i=>F_(i,"#828282","#cc8855"),crystal_shard:i=>U_(i,"#9944ee"),iron_ingot:i=>N_(i,"#c0c0d0"),stick:D_,string:O_,bone:B_,troll_fang:k_,witch_eye:z_,golem_core:H_,summoning_stone:G_};function vo(i){if(!i)return"";const t=Gc.get(i.id);if(t)return t;let e;try{const n=__(),s=n.getContext("2d");s.imageSmoothingEnabled=!1,Vc[i.id]?Vc[i.id](s):i.category==="block"?b_(s,i):i.category==="tool"||i.category==="weapon"?C_(s,i):ui(s,"#666666"),e=n.toDataURL()}catch(n){console.error(`Failed to draw icon for item "${i.id}":`,n),e=""}return Gc.set(i.id,e),e}class V_{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("hotbar"),this.slotEls=[],this._build(),t.addChangeListener(()=>this.refresh())}_build(){this.el.innerHTML="",this.slotEls=[];for(let t=0;t<9;t++){const e=document.createElement("div");e.className="hotbar-slot",e.innerHTML=`
        <span class="slot-key">${t+1}</span>
        <div class="slot-icon-wrap" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"></div>
        <span class="slot-count"></span>
      `,this.el.appendChild(e),this.slotEls.push(e)}this._updateSelected()}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}select(t){this.inventory.hotbarIndex=(t%9+9)%9,this._updateSelected()}scroll(t){const e=((this.inventory.hotbarIndex+t)%9+9)%9;this.select(e)}_updateSelected(){this.slotEls.forEach((t,e)=>{t.classList.toggle("selected",e===this.inventory.hotbarIndex)})}refresh(){for(let t=0;t<9;t++){const e=this.inventory.slots[t],n=this.slotEls[t].querySelector(".slot-icon-wrap"),s=this.slotEls[t].querySelector(".slot-count");if(n.innerHTML="",e.itemId&&e.count>0){const r=this.itemRegistry.getItem(e.itemId),a=document.createElement("img");a.className="item-icon",a.src=vo(r),a.title=(r==null?void 0:r.name)??e.itemId,n.appendChild(a),s.textContent=e.count>1?e.count:""}else s.textContent=""}}}class W_{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("inventory-overlay"),this.grid=document.getElementById("inv-grid"),this.visible=!1,this._selected=null,t.addChangeListener(()=>{this.visible&&this.refresh()})}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){this.grid.innerHTML="";for(let t=0;t<36;t++){const e=this.inventory.slots[t],n=document.createElement("div");if(n.className="inv-slot",t<9&&(n.style.border="1px solid rgba(255,255,150,0.4)"),t===this._selected&&(n.style.outline="2px solid #fff"),e.itemId&&e.count>0){const s=this.itemRegistry.getItem(e.itemId),r=document.createElement("img");if(r.src=vo(s),r.title=(s==null?void 0:s.name)??e.itemId,n.appendChild(r),e.count>1){const a=document.createElement("span");a.className="slot-count",a.textContent=e.count,n.appendChild(a)}}n.addEventListener("click",()=>{this._selected===null?this.inventory.slots[t].itemId&&(this._selected=t,this.refresh()):(this.inventory.swapSlots(this._selected,t),this._selected=null,this.refresh())}),this.grid.appendChild(n)}}}class X_{constructor(t,e,n,s,r,a){this.inventory=t,this.itemRegistry=e,this.recipeRegistry=n,this.getStation=s,this.getPlayerTier=r,this.killedBosses=a,this.el=document.getElementById("crafting-overlay"),this.stationLabel=document.getElementById("crafting-station-label"),this.recipeList=document.getElementById("recipe-list"),this.visible=!1,this.onCraft=null}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){const t=this.getStation(),e=this.getPlayerTier();this.stationLabel.textContent=`Station: ${t.replace("_"," ").toUpperCase()}`;const n=this.recipeRegistry.getAllVisible(this.inventory,t,e,this.killedBosses);this.recipeList.innerHTML="";for(const s of n){const r=this.inventory.hasAll(s.ingredients),a=document.createElement("div");a.className=`recipe-row${r?"":" unavailable"}`;const o=this.itemRegistry.getItem(s.resultItem),c=Object.entries(s.ingredients).map(([l,h])=>{var f;return`${h}× ${((f=this.itemRegistry.getItem(l))==null?void 0:f.name)??l}`}).join(", ");a.innerHTML=`
        <img src="${vo(o)}" style="width:32px;height:32px;image-rendering:pixelated;flex-shrink:0;" />
        <div class="recipe-info">
          <div class="recipe-name">${(o==null?void 0:o.name)??s.resultItem}</div>
          <div class="recipe-ingredients">${c}</div>
        </div>
        <div class="recipe-result-count">${s.resultCount>1?"×"+s.resultCount:""}</div>
      `,r&&a.addEventListener("click",()=>{var h;this.recipeRegistry.craft(s,this.inventory,this.itemRegistry)&&((h=this.onCraft)==null||h.call(this,s),this.refresh())}),this.recipeList.appendChild(a)}}}const Ks="oliver_game_save";class Y_{constructor(t,e,n,s,r,a){this.worldData=t,this.inventory=e,this.stats=n,this.dayNight=s,this.killedBosses=r,this.getPlayerPos=a}hasSave(){return!!localStorage.getItem(Ks)}save(){const t=this.getPlayerPos(),e={version:1,worldData:this.worldData.serialize(),inventory:this.inventory.serialize(),playerStats:this.stats.serialize(),dayNumber:this.dayNight.dayNumber,timeOfDay:this.dayNight.timeOfDay,killedBosses:[...this.killedBosses],playerPos:{x:t.x,y:t.y,z:t.z}};try{localStorage.setItem(Ks,JSON.stringify(e))}catch(n){console.warn("Save failed (storage full?):",n)}}load(){const t=localStorage.getItem(Ks);if(!t)return null;try{return JSON.parse(t)}catch{return null}}apply(t,e){if(t){this.worldData.deserialize(t.worldData),this.inventory.deserialize(t.inventory),this.stats.deserialize(t.playerStats),this.dayNight.dayNumber=t.dayNumber??1,this.dayNight.timeOfDay=t.timeOfDay??.05;for(const n of t.killedBosses??[])this.killedBosses.add(n);t.playerPos&&e&&e.camera.position.set(t.playerPos.x,t.playerPos.y,t.playerPos.z)}}clear(){localStorage.removeItem(Ks)}}const on={MENU:"menu",PLAYING:"playing",DEAD:"dead",WIN:"win"};function Wc(){return new Promise(i=>{requestAnimationFrame(()=>requestAnimationFrame(i))})}class xo{static async create(t){const e=new xo(t);return await Wc(),e._buildOverworld(),await Wc(),e._finishInit(),e}constructor(t){this.renderer=t,this.state=on.MENU,this.killedBosses=new Set,this.activeBoss=null,this.scene=new Um,this.scene.background=new Dt(.5,.7,1),this.scene.fog=new cs(10075135,.007),this.camera=new $e(70,window.innerWidth/window.innerHeight,.1,1200),this.ambientLight=new Vm(16777215,.6),this.scene.add(this.ambientLight),this.dirLight=new Gm(16777215,.8),this.dirLight.position.set(30,30,15),this.scene.add(this.dirLight),this.itemRegistry=new Z0,this.recipeRegistry=new J0}_buildOverworld(){this.worldData=new Ic,i0(this.worldData);const t=this._generateAtlas();this._atlasTex=t,this.worldRenderer=new Uc(this.scene,this.worldData,t)}_finishInit(){this.currentDimension="overworld",this.overworldData=this.worldData,this.overworldRenderer=this.worldRenderer,this.netherData=null,this.netherRenderer=null,this.stats=new O0,this.inventory=new F0,this.hud=new m_,this.hotbar=new V_(this.inventory,this.itemRegistry),this.farmingSystem=new i_(this.worldData,this.scene),this.miningSystem=new Q0(this.worldData,this.worldRenderer,this.inventory,this.stats,this.itemRegistry),this.miningSystem.onPickup=t=>this.hud.showPickup(t),this.player=new q0(this.camera,this.renderer,this.worldData,this.worldRenderer,this.stats,this.inventory,this.miningSystem,this.farmingSystem,this.hotbar,this.hud,this.itemRegistry),this.inventoryUI=new W_(this.inventory,this.itemRegistry),this.craftingUI=new X_(this.inventory,this.itemRegistry,this.recipeRegistry,()=>this.player.currentStation,()=>this.stats.tier,this.killedBosses),this.craftingUI.onCraft=t=>{const e=this.itemRegistry.getItem(t.resultItem);e&&this.stats.updateTier(e),t.resultItem==="summoning_stone"&&this._showMsg("Summoning Stone crafted! Use it at the Altar in the swamp.")},this.dayNight=new r_(this.scene,this.ambientLight,this.dirLight),this.dayNight.onNightBegin=()=>{this.mobSpawner.setNight(!0),this.passiveSpawner.setNight(!0),this._showMsg("Night falls... they are coming.")},this.dayNight.onDayBegin=t=>{this.mobSpawner.setNight(!1),this.passiveSpawner.setNight(!1),this.hud.updateDay(t)},this.mobSpawner=new o_(this.scene,this.worldData,this.player,this.inventory,this.itemRegistry),this.mobSpawner.onMobDeath=t=>{this.hud.showPickup(`${t.mobType.name} slain!`)},this.passiveSpawner=new l_(this.scene,this.worldData,this.inventory,this.itemRegistry,this.player),this.player.setupAttackListener(()=>[...this.mobSpawner.getMobs(),...this.passiveSpawner.getMobs(),...(this._activeBossList??[]).filter(t=>!t.dead)]),this.stats.onDeath=()=>this._onPlayerDeath(),this.stats.onChange=()=>{this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger)},this.player.onUseAltarWithStone=()=>{if([...this.killedBosses].filter(t=>["cave_troll","swamp_witch","stone_golem"].includes(t)).length<3){this._showMsg("You must defeat all three guardians first!");return}this._spawnFinalBoss()},this.player.onSleepInBed=()=>{if(!this.dayNight.isNight){this._showMsg("You can only sleep at night.");return}this.dayNight.timeOfDay=.05,this._showMsg("You sleep through the night..."),this.saveSystem.save()},this.player.onUsePortal=()=>this._usePortal(),this.saveSystem=new Y_(this.worldData,this.inventory,this.stats,this.dayNight,this.killedBosses,()=>this.camera.position),this._setupUIKeys(),this._setupMenuButtons(),this._saveTimer=0}_setupMenuButtons(){for(const e of["easy","normal","hard"]){const n=document.getElementById(`btn-${e}`);n&&n.addEventListener("click",()=>{this.saveSystem.clear(),this._startNewGame(e)})}const t=document.getElementById("btn-continue");this.saveSystem.hasSave()&&(t.style.display="block",t.addEventListener("click",()=>this._loadGame())),document.getElementById("btn-restart").addEventListener("click",()=>{this.saveSystem.clear(),location.reload()})}_startNewGame(t="normal"){this.stats.setDifficulty(t),document.getElementById("menu-screen").style.display="none",this.state=on.PLAYING,this._enterPlayMode()}_loadGame(){const t=this.saveSystem.load();if(!t){this._startNewGame();return}for(const e of this.worldRenderer.chunks.values())e.mesh&&this.scene.remove(e.mesh);this.saveSystem.apply(t,this.player),this.worldRenderer._buildAll(),document.getElementById("menu-screen").style.display="none",this.state=on.PLAYING,this._enterPlayMode()}_enterPlayMode(){ci.startMusic(),this.hud.show(),this.hotbar.show(),this.hud.updateDay(this.dayNight.dayNumber),this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger),this.hotbar.refresh(),this.killedBosses.add("cave_troll"),this.killedBosses.add("swamp_witch"),this.killedBosses.add("stone_golem"),this.inventory.countOf("wood_log")===0&&(this.inventory.add("wood_log",10,this.itemRegistry),this.inventory.add("planks",8,this.itemRegistry),this.inventory.add("stick",8,this.itemRegistry),this.inventory.add("wheat_seed",6,this.itemRegistry),this.inventory.add("bread",3,this.itemRegistry),this.inventory.add("crystal_sword",1,this.itemRegistry),this.inventory.add("wooden_shovel",1,this.itemRegistry),this.inventory.add("troll_fang",1,this.itemRegistry),this.inventory.add("witch_eye",1,this.itemRegistry),this.inventory.add("golem_core",1,this.itemRegistry)),this.renderer.domElement.addEventListener("click",()=>{this.state===on.PLAYING&&!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.lock()},{once:!1}),this._showMsg("Stranded! Gather wood, build tools, survive the night."),this._setupSky(),this._setupBlockOutline(),this.passiveSpawner.init(),this._setupMiniBosses()}_setupMiniBosses(){const e=new U(120,4,120),n=new h_(e,this.scene,this.player,this.inventory,this.itemRegistry,this.mobSpawner);n.onDeath=()=>this._onMiniBossKilled("cave_troll","Cave Troll","Swamp Witch"),this.activeBoss=n,this._bossList=[n];const s=new U(138*4,13,138*4),r=new f_(s,this.scene,this.player,this.inventory,this.itemRegistry);r.onDeath=()=>this._onMiniBossKilled("swamp_witch","Swamp Witch","Stone Golem"),this._bossList.push(r);const a=new U(150*4,20,44*4),o=new d_(a,this.scene,this.player,this.inventory,this.itemRegistry);o.onDeath=()=>this._onMiniBossKilled("stone_golem","Stone Golem",null),this._bossList.push(o),this._activeBossList=this._bossList}_onMiniBossKilled(t,e,n){this.killedBosses.add(t),document.getElementById("boss-bar-wrap").style.display="none",this._showMsg(`${e} defeated! ${n?`Seek the ${n}.`:"Craft the Summoning Stone at the Forge!"}`),this.saveSystem.save(),this.activeBoss=null,this.killedBosses.size>=3&&this._showMsg("All guardians slain! Craft the Summoning Stone at the Forge.")}_spawnFinalBoss(){const t=new U(552,15,552),e=new p_(t,this.scene,this.player,this.inventory,this.itemRegistry,this.worldData);e.onWin=()=>this._onWin(),e.onDeath=()=>{},this.activeBoss=e,this._activeBossList=[e],this._showMsg("THE CONQUEROR AWAKENS! Fight for your life!")}_onWin(){this.state=on.WIN,this.saveSystem.clear(),this.player.controls.unlock(),document.getElementById("end-screen").style.display="flex",document.getElementById("end-title").textContent="🏆 YOU WIN!",document.getElementById("end-title").style.color="#f1c40f",document.getElementById("end-msg").textContent="The Conqueror is defeated. The island is safe."}_usePortal(){const t=this.camera.position,e=Math.floor(t.x),n=Math.floor(t.z),s=this.currentDimension==="nether"?"overworld":"nether";s==="nether"&&!this.netherData?(this._showMsg("The portal roars to life... the Nether is forming (this takes a moment)"),this.player.controls.unlock(),setTimeout(()=>this._switchDimension(s,e,n),50)):this._switchDimension(s,e,n)}_switchDimension(t,e,n){this.mobSpawner._despawnAll();for(const{mob:o}of this.passiveSpawner.mobs)o.dispose();this.passiveSpawner.mobs=[];for(const o of this._activeBossList??[])o.mesh.visible=t==="overworld";this._sun&&(this._sun.visible=t==="overworld"),this._moon&&(this._moon.visible=t==="overworld");for(const o of this._clouds??[])o.visible=t==="overworld";const s=t==="nether";this.currentDimension=t,s?(this.netherData||(this.netherData=new Ic,U0(this.netherData),this.netherRenderer=new Uc(this.scene,this.netherData,this._atlasTex)),this.worldData=this.netherData,this.worldRenderer=this.netherRenderer,this.overworldRenderer.group.visible=!1,this.netherRenderer.group.visible=!0,this.scene.fog=new cs(new Dt(.35,.08,.03),.022),this.scene.background=new Dt(.2,.04,.02),this.ambientLight.intensity=.55,this.ambientLight.color.set(16737843),this.dirLight.intensity=0,document.getElementById("boss-bar-wrap").style.display="none"):(this.worldData=this.overworldData,this.worldRenderer=this.overworldRenderer,this.overworldRenderer.group.visible=!0,this.netherRenderer&&(this.netherRenderer.group.visible=!1),this.ambientLight.color.set(16777215)),this.player.worldData=this.worldData,this.player.worldRenderer=this.worldRenderer,this.miningSystem.worldData=this.worldData,this.miningSystem.worldRenderer=this.worldRenderer,this.farmingSystem.worldData=this.worldData,this.mobSpawner.worldData=this.worldData;const r=s?D0(this.worldData,e,n):Math.max(0,this.worldData.surfaceY(e,n)),a=s?n+1:n;this.player.camera.position.set(e+.5,r+1.8,a+.5),this.player._vy=0,this.mobSpawner.setNight(s?!0:this.dayNight.isNight),this._showMsg(s?"You step through into a hostile, burning world...":"You stumble back into daylight.")}_onPlayerDeath(){this.state=on.DEAD,this.saveSystem.clear(),this.player.controls.unlock(),document.getElementById("end-screen").style.display="flex",document.getElementById("end-title").textContent="💀 YOU DIED",document.getElementById("end-title").style.color="#e74c3c",document.getElementById("end-msg").textContent="The island claimed you. Try again."}_setupUIKeys(){window.addEventListener("keydown",t=>{t.code==="KeyE"&&this.state===on.PLAYING&&(this.inventoryUI.toggle()?(this.craftingUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="KeyC"&&this.state===on.PLAYING&&(this.craftingUI.toggle()?(this.inventoryUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="Escape"&&(this.inventoryUI.hide(),this.craftingUI.hide())})}update(t){if(this.state===on.PLAYING){if(this.stats.update(t),this.currentDimension!=="nether"&&this.dayNight.update(t),this.mobSpawner.update(t),this.passiveSpawner.update(t),this.farmingSystem.update(t),!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.update(t),this._updateBlockOutline(),this._updateSky(t),this._activeBossList&&this.currentDimension!=="nether"){let e=null,n=1/0;for(const s of this._activeBossList){if(s.dead)continue;s.update(t,this.worldData);const r=s.position.distanceTo(this.camera.position);r<25&&r<n&&(n=r,e=s)}e?e.showBar():document.getElementById("boss-bar-wrap").style.display="none"}this._saveTimer+=t,this._saveTimer>=60&&(this._saveTimer=0,this.state===on.PLAYING&&this.currentDimension!=="nether"&&this.saveSystem.save())}}_showMsg(t){const e=document.getElementById("pickup-flash");e.textContent=t,e.style.opacity="1",e.style.bottom="140px",e.style.fontSize="13px",clearTimeout(this._msgTimeout),this._msgTimeout=setTimeout(()=>{e.style.opacity="0"},4e3)}_setupBlockOutline(){const t=new km(new En(1.002,1.002,1.002)),e=new El({color:0,linewidth:1.5,depthTest:!0});this._blockOutline=new Fm(t,e),this._blockOutline.visible=!1,this.scene.add(this._blockOutline)}_updateBlockOutline(){const t=this.player.targetBlock;t?(this._blockOutline.position.set(t[0]+.5,t[1]+.5,t[2]+.5),this._blockOutline.visible=!0):this._blockOutline.visible=!1}_setupSky(){const t=new ai(18,18),e=new ni({color:16772744,side:Be,depthWrite:!1});this._sun=new Se(t,e),this.scene.add(this._sun);const n=new ai(12,12),s=new ni({color:14544639,side:Be,depthWrite:!1});this._moon=new Se(n,s),this.scene.add(this._moon),this._clouds=[];const r=[[[0,0,0,8,2,6],[8,1,0,6,2,5],[-4,1,1,5,2,4]],[[0,0,0,10,2,5],[5,1,0,7,2,4],[-5,0,0,4,2,4]],[[0,0,0,7,2,7],[5,0,1,5,2,5],[0,1,-4,6,2,4]],[[0,0,0,9,2,6],[6,0,0,6,2,5],[-3,1,2,5,2,4],[4,1,-4,4,2,4]]],a=[[60,45,40],[140,48,-20],[30,50,100],[110,46,-60],[-40,44,70],[170,47,150],[90,50,-100],[50,45,-150],[200,46,60],[80,49,200],[-30,48,180],[160,50,120]],o=Ft/2,c=Ot/2;for(let l=0;l<a.length;l++){const h=new Un,f=r[l%r.length];for(const[g,p,m,T,S,b]of f){const D=new En(T,S,b),C=new ni({color:16777215,transparent:!0,opacity:.82,depthWrite:!1}),R=new Se(D,C);R.position.set(g,p,m),h.add(R)}const[d,u,_]=a[l];h.position.set(o+d,u,c+_),this.scene.add(h),this._clouds.push(h)}}_updateSky(t){const n=(this.dayNight?this.dayNight.timeOfDay??0:0)*Math.PI*2,s=160,r=Ft/2,a=Ot/2;if(this._sun&&(this._sun.position.set(r+Math.cos(n)*s,Math.sin(n)*s+20,a-30),this._sun.lookAt(this.camera.position)),this._moon&&(this._moon.position.set(r+Math.cos(n+Math.PI)*s,Math.sin(n+Math.PI)*s+20,a-30),this._moon.lookAt(this.camera.position)),this._clouds)for(let o=0;o<this._clouds.length;o++)this._clouds[o].position.x+=2*t,this._clouds[o].position.x>r+250&&(this._clouds[o].position.x=r-250)}_generateAtlas(){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.imageSmoothingEnabled=!1;const r=u=>{let _=u;return()=>(_=_*1664525+1013904223>>>0,_/4294967295)},a=(u,_,g)=>{s.fillStyle=g,s.fillRect(u*16,_*16,16,16)},o=(u,_,g,p,m)=>{s.fillStyle=m,s.fillRect(u*16+g,_*16+p,1,1)},c=(u,_,g,p,m,T,S)=>{s.fillStyle=S,s.fillRect(u*16+g,_*16+p,m,T)},l=(u,_,g,p,m)=>{const T=r(m),S=parseInt(g.slice(1),16),b=S>>16&255,D=S>>8&255,C=S&255;for(let R=0;R<16;R++)for(let O=0;O<16;O++){const Q=Math.round((T()-.5)*p*2),v=Math.max(0,Math.min(255,b+Q)),E=Math.max(0,Math.min(255,D+Q)),W=Math.max(0,Math.min(255,C+Q));s.fillStyle=`rgb(${v},${E},${W})`,s.fillRect(u*16+O,_*16+R,1,1)}};l(0,0,"#5d9e2f",22,101);const h=r(102);for(let u=0;u<14;u++)o(0,0,Math.floor(h()*16),Math.floor(h()*16),h()>.5?"#3a7010":"#7ac840");l(1,0,"#828282",10,201),s.fillStyle="#9a9a9a",s.fillRect(1*16+1,0*16+1,5,4),s.fillRect(1*16+8,0*16+1,6,3),s.fillRect(1*16+1,0*16+7,4,5),s.fillRect(1*16+7,0*16+8,7,4),s.fillRect(1*16+1,0*16+13,6,2),s.fillRect(1*16+10,0*16+12,5,3),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,0*16+5,16,1),s.fillRect(1*16+0,0*16+12,16,1),s.fillRect(1*16+6,0*16+0,1,5),s.fillRect(1*16+3,0*16+6,1,6),s.fillRect(1*16+10,0*16+5,1,7),s.fillRect(1*16+13,0*16+0,1,12),l(2,0,"#8b5a2b",20,301);const f=r(302);for(let u=0;u<20;u++)o(2,0,Math.floor(f()*16),Math.floor(f()*16),f()>.5?"#5a3010":"#aa7a40");l(3,0,"#8b5a2b",18,401);{const u=r(402);for(let g=0;g<4;g++)for(let p=0;p<16;p++){const m=Math.round((u()-.5)*24),T=[74+m,158+m,40+m];s.fillStyle=`rgb(${Math.max(0,Math.min(255,T[0]))},${Math.max(0,Math.min(255,T[1]))},${Math.max(0,Math.min(255,T[2]))})`,s.fillRect(3*16+p,0*16+g,1,1)}const _=r(403);for(let g=0;g<16;g++)_()>.45&&o(3,0,g,4,"#5a8a22")}l(4,0,"#c49a40",12,501),c(4,0,0,0,16,1,"#7a5010"),c(4,0,0,7,16,1,"#7a5010"),c(4,0,0,8,16,1,"#6a4010"),c(4,0,0,15,16,1,"#7a5010"),c(4,0,7,1,1,6,"#8a6020"),c(4,0,3,9,1,6,"#8a6020");for(let u=2;u<7;u+=2)c(4,0,0,u,16,1,"rgba(0,0,0,0.05)");for(let u=10;u<15;u+=2)c(4,0,0,u,16,1,"rgba(0,0,0,0.05)");l(5,0,"#8b5a2b",18,601),l(6,0,"#4d2e12",14,701);for(let u=2;u<16;u+=4)c(6,0,0,u,16,1,"rgba(0,0,0,0.28)");c(6,0,6,0,4,16,"rgba(20,60,20,0.22)"),a(0,1,"#6e6e6e"),s.fillStyle="#3d3d3d";for(const u of[0,6,10,15])c(0,1,0,u,16,1,"#404040");c(0,1,4,1,1,5,"#404040"),c(0,1,11,1,1,5,"#404040"),c(0,1,7,6,1,4,"#404040"),c(0,1,13,6,1,4,"#404040"),c(0,1,3,10,1,5,"#404040"),c(0,1,9,10,1,5,"#404040"),c(0,1,14,10,1,5,"#404040"),s.fillStyle="#8e8e8e",s.fillRect(0*16+1,1*16+1,3,2),s.fillRect(0*16+5,1*16+2,5,2),s.fillRect(0*16+12,1*16+2,3,2),s.fillRect(0*16+1,1*16+7,5,2),s.fillRect(0*16+8,1*16+7,4,2),s.fillRect(0*16+1,1*16+11,7,3),s.fillRect(0*16+10,1*16+11,4,3),l(2,1,"#d4c27a",14,901);{const u=r(902);for(let _=0;_<22;_++)o(2,1,Math.floor(u()*16),Math.floor(u()*16),u()>.5?"#c4b060":"#e4d090")}a(3,1,"#888877");{const u=r(1001);for(let _=0;_<16;_+=4)for(let g=0;g<16;g+=4){const p=110+Math.floor(u()*55);s.fillStyle=`rgb(${p},${p},${p-8})`,s.fillRect(3*16+g,1*16+_,3,3),s.fillStyle=`rgb(${p-35},${p-35},${p-42})`,s.fillRect(3*16+g+3,1*16+_,1,4),s.fillRect(3*16+g,1*16+_+3,4,1)}}l(4,1,"#7a5428",12,1101);for(const u of[2,7,12])c(4,1,u,0,1,16,"#4a2c0a");for(const u of[4,9,14])c(4,1,u,0,1,16,"#9a6838");c(4,1,8,6,3,3,"#3a1c08"),l(5,1,"#9a6a30",8,1201),s.strokeStyle="#7a4a18",s.lineWidth=1;for(const u of[6,4,2])s.beginPath(),s.arc(5*16+8,1*16+8,u,0,Math.PI*2),s.stroke();c(5,1,7,7,2,2,"#3a1a08"),c(5,1,0,0,16,2,"#5a3818"),c(5,1,0,14,16,2,"#5a3818"),c(5,1,0,2,2,12,"#5a3818"),c(5,1,14,2,2,12,"#5a3818"),l(9,1,"#b48c38",10,1301),c(9,1,0,0,16,2,"#5a3010"),c(9,1,0,14,16,2,"#5a3010"),c(9,1,0,0,2,16,"#5a3010"),c(9,1,14,0,2,16,"#5a3010"),c(9,1,2,8,12,1,"#5a3010"),c(9,1,6,5,4,5,"#c8a020"),c(9,1,7,6,2,3,"#7a5010");for(const u of[3,5,10,12])c(9,1,2,u,12,1,"rgba(0,0,0,0.1)");l(6,1,"#7a4a20",10,1901),c(6,1,0,0,16,3,"#c8c0a8"),c(6,1,0,3,16,1,"#8a8270"),l(7,1,"#a02020",10,2001),c(7,1,0,0,16,4,"#e8e0d0"),c(7,1,0,4,16,1,"#b0a890"),l(1,2,"#828282",8,1401),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,2*16+6,16,1),s.fillRect(1*16+7,2*16+0,1,6);{const u=r(1402);for(let _=0;_<9;_++){const g=1+Math.floor(u()*12),p=1+Math.floor(u()*12),m=2+Math.floor(u()*2);c(1,2,g,p,m,2,u()>.5?"#cc8855":"#dd9966")}for(let _=0;_<4;_++)o(1,2,1+Math.floor(u()*12),1+Math.floor(u()*12),"#ffcc99")}l(2,2,"#6a6a7a",8,1501),s.fillStyle="#45455a",s.fillRect(2*16+0,2*16+6,16,1),s.fillRect(2*16+7,2*16+0,1,6);{const u=r(1502);for(let _=0;_<8;_++)c(2,2,1+Math.floor(u()*12),1+Math.floor(u()*12),2,2,u()>.5?"#9944ee":"#44aacc");for(let _=0;_<4;_++)o(2,2,1+Math.floor(u()*13),1+Math.floor(u()*13),"#ccffee")}l(11,2,"#c49a40",10,1601),c(11,2,0,0,16,2,"#5a3010"),c(11,2,0,0,2,16,"#5a3010"),c(11,2,14,0,2,16,"#5a3010"),c(11,2,7,1,1,14,"#8a6020"),s.fillStyle="#2a1a08",c(11,2,4,9,1,6,"#333"),c(11,2,5,8,1,1,"#333"),c(11,2,6,7,1,1,"#333"),c(11,2,7,5,4,2,"#333"),c(11,2,7,4,2,1,"#333"),c(11,2,9,7,2,1,"#333"),c(11,2,3,6,5,1,"#888");for(let u=0;u<4;u++)o(11,2,3+u,5+u%2,"#888");l(13,2,"#3a3a3a",8,1701),c(13,2,0,0,16,1,"#222"),c(13,2,0,15,16,1,"#222"),c(13,2,0,0,1,16,"#222"),c(13,2,15,0,1,16,"#222"),c(13,2,4,2,8,5,"#1a1a1a"),c(13,2,2,9,5,6,"#ff8800"),c(13,2,9,9,5,6,"#ff8800"),c(13,2,3,10,3,4,"#ffcc00"),c(13,2,10,10,3,4,"#ffcc00"),c(13,2,4,11,1,2,"#ffffff"),c(13,2,11,11,1,2,"#ffffff"),c(13,2,1,8,7,1,"#555"),c(13,2,8,8,7,1,"#555"),l(14,2,"#1a0a2a",8,1801);{const u=r(1802);for(let _=0;_<18;_++)s.fillStyle="rgba(160,50,255,0.3)",s.fillRect(14*16+Math.floor(u()*14)+1,2*16+Math.floor(u()*14)+1,2,1)}s.fillStyle="#cc44ff",c(14,2,4,4,8,1,"#cc44ff"),c(14,2,4,8,8,1,"#cc44ff"),c(14,2,8,4,1,5,"#cc44ff"),c(14,2,4,12,8,1,"#cc44ff"),c(14,2,6,12,1,3,"#cc44ff"),s.fillStyle="rgba(200,100,255,0.18)",s.fillRect(14*16+3,2*16+3,10,10),s.clearRect(1*16,3*16,16,16),s.fillStyle="rgba(145,215,255,0.38)",s.fillRect(1*16,3*16,16,16),s.fillStyle="#7ab0cc",s.fillRect(1*16,3*16,16,1),s.fillRect(1*16,3*16+16-1,16,1),s.fillRect(1*16,3*16,1,16),s.fillRect(1*16+16-1,3*16,1,16),s.fillStyle="rgba(255,255,255,0.7)",s.fillRect(1*16+2,3*16+2,3,1),s.fillRect(1*16+2,3*16+3,1,2),s.fillStyle="rgba(255,255,255,0.4)",s.fillRect(1*16+11,3*16+11,3,1),s.fillRect(1*16+13,3*16+11,1,2),s.clearRect(4*16,3*16,16,16);{const u=r(1901);for(let _=0;_<16;_++)for(let g=0;g<16;g++){const p=u();p<.1||(p<.35?(s.fillStyle="#1a5510",s.fillRect(4*16+g,3*16+_,1,1)):p<.72?(s.fillStyle="#2a7020",s.fillRect(4*16+g,3*16+_,1,1)):(s.fillStyle="#3a9028",s.fillRect(4*16+g,3*16+_,1,1)))}}s.clearRect(0*16,5*16,16,16),c(0,5,7,7,2,9,"#8b5a2b"),c(0,5,6,3,4,5,"#ff8800"),c(0,5,7,1,2,4,"#ffdd00"),o(0,5,7,1,"#ffffff"),a(7,5,"#2e1808"),c(7,5,0,11,16,4,"#5a3618"),c(7,5,2,9,12,3,"#4a2810"),c(7,5,3,6,10,5,"#cc5500"),c(7,5,4,3,8,5,"#ff8800"),c(7,5,5,1,6,4,"#ffcc00"),c(7,5,6,0,4,2,"#ffff88"),s.clearRect(15*16,12*16,16,16),s.fillStyle="rgba(20,80,200,0.75)",s.fillRect(15*16,12*16,16,16),s.fillStyle="rgba(80,160,255,0.5)";for(let u=0;u<16;u+=3)s.fillRect(15*16+u,12*16+4,2,1),s.fillRect(15*16+(u+2)%16,12*16+10,2,1);l(3,2,"#5a2a20",12,2101);{const u=r(2102);for(let _=0;_<12;_++)o(3,2,Math.floor(u()*16),Math.floor(u()*16),u()>.5?"#3a1810":"#7a4030")}s.clearRect(4*16,2*16,16,16),s.fillStyle="rgba(200,50,10,0.9)",s.fillRect(4*16,2*16,16,16),s.fillStyle="rgba(255,180,40,0.8)";for(let u=0;u<16;u+=3)s.fillRect(4*16+u,2*16+4,2,1),s.fillRect(4*16+(u+2)%16,2*16+10,2,1);s.fillStyle="rgba(255,255,150,0.6)",s.fillRect(4*16+6,2*16+7,3,2),l(5,2,"#f0d878",16,2301);{const u=r(2302);for(let _=0;_<10;_++)o(5,2,Math.floor(u()*16),Math.floor(u()*16),u()>.5?"#fff0a0":"#c8a850")}l(6,2,"#1a0e28",8,2401);{const u=r(2402);for(let _=0;_<8;_++)o(6,2,Math.floor(u()*16),Math.floor(u()*16),"#4a2870")}s.clearRect(7*16,2*16,16,16),s.fillStyle="rgba(120,20,200,0.75)",s.fillRect(7*16,2*16,16,16),s.fillStyle="rgba(200,100,255,0.6)";for(let u=0;u<16;u+=2)s.fillRect(7*16+u,2*16+u*3%16,2,2);s.fillStyle="rgba(230,180,255,0.5)",s.fillRect(7*16+6,2*16+6,4,4);const d=new Tl(n);return d.magFilter=Fe,d.minFilter=Fe,d}}window.addEventListener("error",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`ERROR: ${i.message}
at ${i.filename}:${i.lineno}`,document.body.appendChild(t)});window.addEventListener("unhandledrejection",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`PROMISE ERROR: ${i.reason}`,document.body.appendChild(t)});const ii=new Nm({antialias:!1});ii.setSize(window.innerWidth,window.innerHeight);ii.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.prepend(ii.domElement);window.addEventListener("resize",()=>{ii.setSize(window.innerWidth,window.innerHeight),ln&&(ln.camera.aspect=window.innerWidth/window.innerHeight,ln.camera.updateProjectionMatrix())});let ln;xo.create(ii).then(i=>{ln=i,window.__game__=ln,document.getElementById("loading-screen").style.display="none",document.getElementById("menu-screen").style.display="flex",ii.setSize(window.innerWidth,window.innerHeight),ln.camera.aspect=window.innerWidth/window.innerHeight,ln.camera.updateProjectionMatrix();const t=new Wm;function e(){requestAnimationFrame(e);const n=Math.min(t.getDelta(),.1);try{ln.update(n)}catch(s){console.error("Update error:",s)}ii.render(ln.scene,ln.camera)}e()}).catch(i=>{const t=document.createElement("div");throw t.style.cssText="position:fixed;top:50px;left:0;right:0;background:#c0392b;color:#fff;padding:16px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`GAME INIT ERROR:
${i.stack||i.message}`,document.body.appendChild(t),i});
