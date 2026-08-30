(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="169",ql=0,Fa=1,Kl=2,sl=1,rl=2,En=3,Vn=0,ze=1,ke=2,zn=0,Hi=1,Ba=2,ka=3,za=4,$l=5,ni=100,Zl=101,jl=102,Jl=103,Ql=104,th=200,eh=201,nh=202,ih=203,Mo=204,Eo=205,sh=206,rh=207,oh=208,ah=209,ch=210,lh=211,hh=212,dh=213,fh=214,To=0,bo=1,Ao=2,Wi=3,Ro=4,wo=5,Co=6,Po=7,ua=0,uh=1,ph=2,Hn=0,mh=1,_h=2,gh=3,vh=4,xh=5,yh=6,Sh=7,ol=300,Xi=301,Yi=302,Lo=303,Io=304,Sr=306,No=1e3,si=1001,Uo=1002,we=1003,Mh=1004,Ts=1005,on=1006,Pr=1007,ri=1008,An=1009,al=1010,cl=1011,us=1012,pa=1013,ci=1014,Tn=1015,xs=1016,ma=1017,_a=1018,qi=1020,ll=35902,hl=1021,dl=1022,an=1023,fl=1024,ul=1025,Gi=1026,Ki=1027,pl=1028,ga=1029,ml=1030,va=1031,xa=1033,sr=33776,rr=33777,or=33778,ar=33779,Do=35840,Oo=35841,Fo=35842,Bo=35843,ko=36196,zo=37492,Ho=37496,Go=37808,Vo=37809,Wo=37810,Xo=37811,Yo=37812,qo=37813,Ko=37814,$o=37815,Zo=37816,jo=37817,Jo=37818,Qo=37819,ta=37820,ea=37821,cr=36492,na=36494,ia=36495,_l=36283,sa=36284,ra=36285,oa=36286,Eh=3200,Th=3201,gl=0,bh=1,Fn="",fn="srgb",Xn="srgb-linear",ya="display-p3",Mr="display-p3-linear",ur="linear",ce="srgb",pr="rec709",mr="p3",gi=7680,Ha=519,Ah=512,Rh=513,wh=514,vl=515,Ch=516,Ph=517,Lh=518,Ih=519,aa=35044,Ga="300 es",bn=2e3,_r=2001;class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lr=Math.PI/180,ca=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Nh(i,t){return(i%t+t)%t}function Lr(i,t,e){return(1-e)*i+e*t}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],_=n[8],g=s[0],p=s[3],m=s[6],E=s[1],y=s[4],b=s[7],O=s[2],C=s[5],R=s[8];return r[0]=o*g+a*E+c*O,r[3]=o*p+a*y+c*C,r[6]=o*m+a*b+c*R,r[1]=l*g+h*E+f*O,r[4]=l*p+h*y+f*C,r[7]=l*m+h*b+f*R,r[2]=u*g+d*E+_*O,r[5]=u*p+d*y+_*C,r[8]=u*m+d*b+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,_=e*f+n*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=u*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Ft;function xl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uh(){const i=ps("canvas");return i.style.display="block",i}const Va={};function hr(i){i in Va||(Va[i]=!0,console.warn(i))}function Dh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Oh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wa=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xa=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[Xn]:{transfer:ur,primaries:pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[fn]:{transfer:ce,primaries:pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Mr]:{transfer:ur,primaries:mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Xa),fromReference:i=>i.applyMatrix3(Wa)},[ya]:{transfer:ce,primaries:mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xa),fromReference:i=>i.applyMatrix3(Wa).convertLinearToSRGB()}},Bh=new Set([Xn,Mr]),Qt={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ji[t].toReference,s=Ji[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ji[i].primaries},getTransfer:function(i){return i===Fn?ur:Ji[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ji[t].luminanceCoefficients)}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=ps("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zh=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ur(s[o].image)):r.push(Ur(s[o]))}else r=Ur(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hh=0;class Ce extends ui{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=si,s=si,r=on,o=ri,a=an,c=An,l=Ce.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Gn(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=ol;Ce.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,b=(d+1)/2,O=(m+1)/2,C=(h+u)/4,R=(f+g)/4,D=(_+p)/4;return y>b&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=R/n):b>O?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=D/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=R/r,s=D/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(f-g)/E,this.z=(u-h)/E,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Gh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sl extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||c!==u||l!==d||h!==_){let p=1-a;const m=c*u+l*d+h*_+f*g,E=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const O=Math.sqrt(y),C=Math.atan2(O,m*E);p=Math.sin(p*C)/O,a=Math.sin(a*C)/O}const b=a*E;if(c=c*p+u*b,l=l*p+d*b,h=h*p+_*b,f=f*p+g*b,p===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=O,l*=O,h*=O,f*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*f+c*d-l*u,t[e+1]=c*_+h*u+l*f-a*d,t[e+2]=l*_+h*d+a*u-c*f,t[e+3]=h*_-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"YZX":this._x=u*h*f+l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f-u*d*_;break;case"XZY":this._x=u*h*f-l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f+u*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new N,Ya=new ys;class Ss{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),As.subVectors(this.max,Qi),xi.subVectors(t.a,Qi),yi.subVectors(t.b,Qi),Si.subVectors(t.c,Qi),Cn.subVectors(yi,xi),Pn.subVectors(Si,yi),Kn.subVectors(xi,Si);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Kn.z,Kn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Kn.z,0,-Kn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Kn.y,Kn.x,0];return!Or(e,xi,yi,Si,As)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,xi,yi,Si,As))?!1:(Rs.crossVectors(Cn,Pn),e=[Rs.x,Rs.y,Rs.z],Or(e,xi,yi,Si,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new N,new N,new N,new N,new N,new N,new N,new N],en=new N,bs=new Ss,xi=new N,yi=new N,Si=new N,Cn=new N,Pn=new N,Kn=new N,Qi=new N,As=new N,Rs=new N,$n=new N;function Or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),l=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Wh=new Ss,ts=new N,Fr=new N;class Er{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(Fr)),this.expandByPoint(ts.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new N,Br=new N,ws=new N,Ln=new N,kr=new N,Cs=new N,zr=new N;class Sa{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Br.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Ln.dot(this.direction),c=-Ln.dot(ws),l=Ln.lengthSq(),h=Math.abs(1-o*o);let f,u,d,_;if(h>0)if(f=o*c-a,u=o*a-c,_=r*h,f>=0)if(u>=-_)if(u<=_){const g=1/h;f*=g,u*=g,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Br).addScaledVector(ws,u),d}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){kr.subVectors(e,t),Cs.subVectors(n,t),zr.crossVectors(kr,Cs);let o=this.direction.dot(zr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const c=a*this.direction.dot(Cs.crossVectors(Ln,Cs));if(c<0)return null;const l=a*this.direction.dot(kr.cross(Ln));if(l<0||c+l>o)return null;const h=-a*Ln.dot(zr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,h,f,u,d,_,g,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,u,d,_,g,p)}set(t,e,n,s,r,o,a,c,l,h,f,u,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,_=a*h,g=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+_*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,_=l*h,g=l*f;e[0]=u+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,_=l*h,g=l*f;e[0]=u-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,d=o*f,_=a*h,g=a*f;e[0]=c*h,e[4]=_*l-d,e[8]=u*l+g,e[1]=c*f,e[5]=g*l+u,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-u*f,e[8]=_*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+_,e[10]=u-g*f}else if(t.order==="XZY"){const u=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+g,e[5]=o*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*h,e[10]=g*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,Yh)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),In.crossVectors(n,We),In.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),In.crossVectors(n,We)),In.normalize(),Ps.crossVectors(We,In),s[0]=In.x,s[4]=Ps.x,s[8]=We.x,s[1]=In.y,s[5]=Ps.y,s[9]=We.y,s[2]=In.z,s[6]=Ps.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],E=n[3],y=n[7],b=n[11],O=n[15],C=s[0],R=s[4],D=s[8],j=s[12],x=s[1],T=s[5],V=s[9],H=s[13],X=s[2],Z=s[6],z=s[10],tt=s[14],W=s[3],dt=s[7],ft=s[11],St=s[15];return r[0]=o*C+a*x+c*X+l*W,r[4]=o*R+a*T+c*Z+l*dt,r[8]=o*D+a*V+c*z+l*ft,r[12]=o*j+a*H+c*tt+l*St,r[1]=h*C+f*x+u*X+d*W,r[5]=h*R+f*T+u*Z+d*dt,r[9]=h*D+f*V+u*z+d*ft,r[13]=h*j+f*H+u*tt+d*St,r[2]=_*C+g*x+p*X+m*W,r[6]=_*R+g*T+p*Z+m*dt,r[10]=_*D+g*V+p*z+m*ft,r[14]=_*j+g*H+p*tt+m*St,r[3]=E*C+y*x+b*X+O*W,r[7]=E*R+y*T+b*Z+O*dt,r[11]=E*D+y*V+b*z+O*ft,r[15]=E*j+y*H+b*tt+O*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+r*c*f-s*l*f-r*a*u+n*l*u+s*a*d-n*c*d)+g*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+p*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+m*(-s*a*h-e*c*f+e*a*u+s*o*f-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],E=f*p*l-g*u*l+g*c*d-a*p*d-f*c*m+a*u*m,y=_*u*l-h*p*l-_*c*d+o*p*d+h*c*m-o*u*m,b=h*g*l-_*f*l+_*a*d-o*g*d-h*a*m+o*f*m,O=_*f*c-h*g*c-_*a*u+o*g*u+h*a*p-o*f*p,C=e*E+n*y+s*b+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=E*R,t[1]=(g*u*r-f*p*r-g*s*d+n*p*d+f*s*m-n*u*m)*R,t[2]=(a*p*r-g*c*r+g*s*l-n*p*l-a*s*m+n*c*m)*R,t[3]=(f*c*r-a*u*r-f*s*l+n*u*l+a*s*d-n*c*d)*R,t[4]=y*R,t[5]=(h*p*r-_*u*r+_*s*d-e*p*d-h*s*m+e*u*m)*R,t[6]=(_*c*r-o*p*r-_*s*l+e*p*l+o*s*m-e*c*m)*R,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*R,t[8]=b*R,t[9]=(_*f*r-h*g*r-_*n*d+e*g*d+h*n*m-e*f*m)*R,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*m+e*a*m)*R,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*d-e*a*d)*R,t[12]=O*R,t[13]=(h*g*s-_*f*s+_*n*u-e*g*u-h*n*p+e*f*p)*R,t[14]=(_*a*s-o*g*s-_*n*c+e*g*c+o*n*p-e*a*p)*R,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*u+e*a*u)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,_=r*f,g=o*h,p=o*f,m=a*f,E=c*l,y=c*h,b=c*f,O=n.x,C=n.y,R=n.z;return s[0]=(1-(g+m))*O,s[1]=(d+b)*O,s[2]=(_-y)*O,s[3]=0,s[4]=(d-b)*C,s[5]=(1-(u+m))*C,s[6]=(p+E)*C,s[7]=0,s[8]=(_+y)*R,s[9]=(p-E)*R,s[10]=(1-(u+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const l=1/r,h=1/o,f=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=bn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,_;if(a===bn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_r)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*l,d=(n+s)*h;let _,g;if(a===bn)_=(o+r)*f,g=-2*f;else if(a===_r)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new N,nn=new le,Xh=new N(0,0,0),Yh=new N(1,1,1),In=new N,Ps=new N,We=new N,qa=new le,Ka=new ys;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qh=0;const $a=new N,Ei=new ys,vn=new le,Ls=new N,es=new N,Kh=new N,$h=new ys,Za=new N(1,0,0),ja=new N(0,1,0),Ja=new N(0,0,1),Qa={type:"added"},Zh={type:"removed"},Ti={type:"childadded",child:null},Hr={type:"childremoved",child:null};class ve extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new N,e=new ln,n=new ys,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ft}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis(ja,t)}rotateZ(t){return this.rotateOnAxis(Ja,t)}translateOnAxis(t,e){return $a.copy(t).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis(ja,t)}translateZ(t){return this.translateOnAxis(Ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(es,Ls,this.up):vn.lookAt(Ls,es,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(vn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qa),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zh),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qa),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,Kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,$h,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new N(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new N,xn=new N,Gr=new N,yn=new N,bi=new N,Ai=new N,tc=new N,Vr=new N,Wr=new N,Xr=new N,Yr=new ue,qr=new ue,Kr=new ue;class qe{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),xn.subVectors(n,e),Gr.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(xn),c=sn.dot(Gr),l=xn.dot(xn),h=xn.dot(Gr),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,_=(o*h-a*c)*u;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(o,yn.y),c.addScaledVector(a,yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Yr.setScalar(0),qr.setScalar(0),Kr.setScalar(0),Yr.fromBufferAttribute(t,e),qr.fromBufferAttribute(t,n),Kr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yr,r.x),o.addScaledVector(qr,r.y),o.addScaledVector(Kr,r.z),o}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),xn.subVectors(t,e),sn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),sn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;bi.subVectors(s,n),Ai.subVectors(r,n),Vr.subVectors(t,n);const c=bi.dot(Vr),l=Ai.dot(Vr);if(c<=0&&l<=0)return e.copy(n);Wr.subVectors(t,s);const h=bi.dot(Wr),f=Ai.dot(Wr);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(bi,o);Xr.subVectors(t,r);const d=bi.dot(Xr),_=Ai.dot(Xr);if(_>=0&&d<=_)return e.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Ai,a);const p=h*_-d*f;if(p<=0&&f-h>=0&&d-_>=0)return tc.subVectors(r,s),a=(f-h)/(f-h+(d-_)),e.copy(s).addScaledVector(tc,a);const m=1/(p+g+u);return o=g*m,a=u*m,e.copy(n).addScaledVector(bi,o).addScaledVector(Ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function $r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Nh(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$r(o,r,t+1/3),this.g=$r(o,r,t),this.b=$r(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=Ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Qt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Oe(Re.r*255,0,255))*65536+Math.round(Oe(Re.g*255,0,255))*256+Math.round(Oe(Re.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=fn){Qt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Is);const n=Lr(Nn.h,Is.h,e),s=Lr(Nn.s,Is.s,e),r=Lr(Nn.l,Is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Bt;Bt.NAMES=Ml;let jh=0;class pi extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Hi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=Eo,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oi extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new N,Ns=new zt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=aa,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==aa&&(t.usage=this.usage),t}}class El extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tl extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jh=0;const $e=new le,Zr=new ve,Ri=new N,Xe=new Ss,ns=new Ss,Se=new N;class Qe extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xl(t)?Tl:El)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Xe.min,ns.min),Xe.expandByPoint(Se),Se.addVectors(Xe.max,ns.max),Xe.expandByPoint(Se)):(Xe.expandByPoint(ns.min),Xe.expandByPoint(ns.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(Ri.fromBufferAttribute(t,l),Se.add(Ri)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new N,c[D]=new N;const l=new N,h=new N,f=new N,u=new zt,d=new zt,_=new zt,g=new N,p=new N;function m(D,j,x){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,j),f.fromBufferAttribute(n,x),u.fromBufferAttribute(r,D),d.fromBufferAttribute(r,j),_.fromBufferAttribute(r,x),h.sub(l),f.sub(l),d.sub(u),_.sub(u);const T=1/(d.x*_.y-_.x*d.y);isFinite(T)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(T),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(T),a[D].add(g),a[j].add(g),a[x].add(g),c[D].add(p),c[j].add(p),c[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,j=E.length;D<j;++D){const x=E[D],T=x.start,V=x.count;for(let H=T,X=T+V;H<X;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new N,b=new N,O=new N,C=new N;function R(D){O.fromBufferAttribute(s,D),C.copy(O);const j=a[D];y.copy(j),y.sub(O.multiplyScalar(O.dot(j))).normalize(),b.crossVectors(C,j);const T=b.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,T)}for(let D=0,j=E.length;D<j;++D){const x=E[D],T=x.start,V=x.count;for(let H=T,X=T+V;H<X;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const _=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*h;for(let m=0;m<h;m++)u[_++]=l[d++]}return new cn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new le,Zn=new Sa,Us=new Er,nc=new N,Ds=new N,Os=new N,Fs=new N,jr=new N,Bs=new N,ic=new N,ks=new N;class Ee extends ve{constructor(t=new Qe,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(jr.fromBufferAttribute(f,t),o?Bs.addScaledVector(jr,h):Bs.addScaledVector(jr.sub(e),h))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Us.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Us,nc)===null||Zn.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=o[p.materialIndex],E=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=E,O=y;b<O;b+=3){const C=a.getX(b),R=a.getX(b+1),D=a.getX(b+2);s=zs(this,m,t,n,l,h,f,C,R,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const E=a.getX(p),y=a.getX(p+1),b=a.getX(p+2);s=zs(this,o,t,n,l,h,f,E,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=o[p.materialIndex],E=Math.max(p.start,d.start),y=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=E,O=y;b<O;b+=3){const C=b,R=b+1,D=b+2;s=zs(this,m,t,n,l,h,f,C,R,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const E=p,y=p+1,b=p+2;s=zs(this,o,t,n,l,h,f,E,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Qh(i,t,e,n,s,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Vn,a),c===null)return null;ks.copy(a),ks.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ks);return l<e.near||l>e.far?null:{distance:l,point:ks.clone(),object:i}}function zs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ds),i.getVertexPosition(c,Os),i.getVertexPosition(l,Fs);const h=Qh(i,t,e,n,Ds,Os,Fs,ic);if(h){const f=new N;qe.getBarycoord(ic,Ds,Os,Fs,f),s&&(h.uv=qe.getInterpolatedAttribute(s,a,c,l,f,new zt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,a,c,l,f,new zt)),o&&(h.normal=qe.getInterpolatedAttribute(o,a,c,l,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new N,materialIndex:0};qe.getNormal(Ds,Os,Fs,u.normal),h.face=u,h.barycoord=f}return h}class Rn extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,d=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(f,2));function _(g,p,m,E,y,b,O,C,R,D,j){const x=b/R,T=O/D,V=b/2,H=O/2,X=C/2,Z=R+1,z=D+1;let tt=0,W=0;const dt=new N;for(let ft=0;ft<z;ft++){const St=ft*T-H;for(let Kt=0;Kt<Z;Kt++){const te=Kt*x-V;dt[g]=te*E,dt[p]=St*y,dt[m]=X,l.push(dt.x,dt.y,dt.z),dt[g]=0,dt[p]=0,dt[m]=C>0?1:-1,h.push(dt.x,dt.y,dt.z),f.push(Kt/R),f.push(1-ft/D),tt+=1}}for(let ft=0;ft<D;ft++)for(let St=0;St<R;St++){const Kt=u+St+Z*ft,te=u+St+Z*(ft+1),Y=u+(St+1)+Z*(ft+1),nt=u+(St+1)+Z*ft;c.push(Kt,te,nt),c.push(te,Y,nt),W+=6}a.addGroup(d,W,j),d+=W,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const s in n)t[s]=n[s]}return t}function td(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const ed={clone:$i,merge:Ie};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Al extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new N,sc=new zt,rc=new zt;class je extends Al{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,sc,rc),e.subVectors(rc,sc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ci=1;class sd extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(wi,Ci,t,e);s.layers=this.layers,this.add(s);const r=new je(wi,Ci,t,e);r.layers=this.layers,this.add(r);const o=new je(wi,Ci,t,e);o.layers=this.layers,this.add(o);const a=new je(wi,Ci,t,e);a.layers=this.layers,this.add(a);const c=new je(wi,Ci,t,e);c.layers=this.layers,this.add(c);const l=new je(wi,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Rl extends Ce{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rd extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:zn});r.uniforms.tEquirect.value=e;const o=new Ee(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=on),new sd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Jr=new N,od=new N,ad=new Ft;class ti{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Jr.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),s=this.coplanarPoint(Jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Er,Hs=new N;class Ea{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],_=s[9],g=s[10],p=s[11],m=s[12],E=s[13],y=s[14],b=s[15];if(n[0].setComponents(c-r,u-l,p-d,b-m).normalize(),n[1].setComponents(c+r,u+l,p+d,b+m).normalize(),n[2].setComponents(c+o,u+h,p+_,b+E).normalize(),n[3].setComponents(c-o,u-h,p-_,b-E).normalize(),n[4].setComponents(c-a,u-f,p-g,b-y).normalize(),e===bn)n[5].setComponents(c+a,u+f,p+g,b+y).normalize();else if(e===_r)n[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Hs.x=s.normal.x>0?t.max.x:t.min.x,Hs.y=s.normal.y>0?t.max.y:t.min.y,Hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){const _=f[u],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,f[u]=g)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class hi extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const E=m*u-o;for(let y=0;y<l;y++){const b=y*f-r;_.push(b,-E,0),g.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<a;E++){const y=E+l*m,b=E+l*(m+1),O=E+1+l*(m+1),C=E+1+l*m;d.push(y,b,C),d.push(b,O,C)}this.setIndex(d),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.widthSegments,t.heightSegments)}}var ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gd=`#ifdef USE_BATCHING
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
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Md=`#ifdef USE_IRIDESCENCE
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
#endif`,Ed=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ud=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`
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
}`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tf=`uniform bool receiveShadow;
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
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
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
#endif`,cf=`struct PhysicalMaterial {
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
}`,lf=`
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xf=`#if defined( USE_POINTS_UV )
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
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kf=`float getShadowMask() {
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
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iu=`#ifdef USE_TRANSMISSION
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
#endif`,su=`#ifdef USE_TRANSMISSION
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
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hu=`uniform sampler2D t2D;
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
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`#include <common>
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
}`,_u=`#if DEPTH_PACKING == 3200
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
}`,gu=`#define DISTANCE
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
}`,vu=`#define DISTANCE
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
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`uniform float scale;
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
}`,Mu=`uniform vec3 diffuse;
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
}`,Eu=`#include <common>
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
}`,Tu=`uniform vec3 diffuse;
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
}`,bu=`#define LAMBERT
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
}`,Au=`#define LAMBERT
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
}`,Ru=`#define MATCAP
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
}`,wu=`#define MATCAP
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
}`,Cu=`#define NORMAL
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
}`,Pu=`#define NORMAL
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
}`,Lu=`#define PHONG
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
}`,Iu=`#define PHONG
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
}`,Nu=`#define STANDARD
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
}`,Uu=`#define STANDARD
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
}`,Du=`#define TOON
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
}`,Ou=`#define TOON
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
}`,Fu=`uniform float size;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,ku=`#include <common>
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
}`,zu=`uniform vec3 color;
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
}`,Hu=`uniform float rotation;
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
}`,Gu=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:ld,alphahash_pars_fragment:hd,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:ud,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:_d,batching_pars_vertex:gd,batching_vertex:vd,begin_vertex:xd,beginnormal_vertex:yd,bsdfs:Sd,iridescence_fragment:Md,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:wd,color_pars_fragment:Cd,color_pars_vertex:Pd,color_vertex:Ld,common:Id,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Dd,displacementmap_vertex:Od,emissivemap_fragment:Fd,emissivemap_pars_fragment:Bd,colorspace_fragment:kd,colorspace_pars_fragment:zd,envmap_fragment:Hd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Vd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:ef,envmap_vertex:Xd,fog_vertex:Yd,fog_pars_vertex:qd,fog_fragment:Kd,fog_pars_fragment:$d,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:jd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Qd,lights_pars_begin:tf,lights_toon_fragment:nf,lights_toon_pars_fragment:sf,lights_phong_fragment:rf,lights_phong_pars_fragment:of,lights_physical_fragment:af,lights_physical_pars_fragment:cf,lights_fragment_begin:lf,lights_fragment_maps:hf,lights_fragment_end:df,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:_f,map_pars_fragment:gf,map_particle_fragment:vf,map_particle_pars_fragment:xf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:Mf,morphcolor_vertex:Ef,morphnormal_vertex:Tf,morphtarget_pars_vertex:bf,morphtarget_vertex:Af,normal_fragment_begin:Rf,normal_fragment_maps:wf,normal_pars_fragment:Cf,normal_pars_vertex:Pf,normal_vertex:Lf,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Uf,clearcoat_pars_fragment:Df,iridescence_pars_fragment:Of,opaque_fragment:Ff,packing:Bf,premultiplied_alpha_fragment:kf,project_vertex:zf,dithering_fragment:Hf,dithering_pars_fragment:Gf,roughnessmap_fragment:Vf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:Yf,shadowmap_vertex:qf,shadowmask_pars_fragment:Kf,skinbase_vertex:$f,skinning_pars_vertex:Zf,skinning_vertex:jf,skinnormal_vertex:Jf,specularmap_fragment:Qf,specularmap_pars_fragment:tu,tonemapping_fragment:eu,tonemapping_pars_fragment:nu,transmission_fragment:iu,transmission_pars_fragment:su,uv_pars_fragment:ru,uv_pars_vertex:ou,uv_vertex:au,worldpos_vertex:cu,background_vert:lu,background_frag:hu,backgroundCube_vert:du,backgroundCube_frag:fu,cube_vert:uu,cube_frag:pu,depth_vert:mu,depth_frag:_u,distanceRGBA_vert:gu,distanceRGBA_frag:vu,equirect_vert:xu,equirect_frag:yu,linedashed_vert:Su,linedashed_frag:Mu,meshbasic_vert:Eu,meshbasic_frag:Tu,meshlambert_vert:bu,meshlambert_frag:Au,meshmatcap_vert:Ru,meshmatcap_frag:wu,meshnormal_vert:Cu,meshnormal_frag:Pu,meshphong_vert:Lu,meshphong_frag:Iu,meshphysical_vert:Nu,meshphysical_frag:Uu,meshtoon_vert:Du,meshtoon_frag:Ou,points_vert:Fu,points_frag:Bu,shadow_vert:ku,shadow_frag:zu,sprite_vert:Hu,sprite_frag:Gu},rt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},un={basic:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ie([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ie([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ie([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ie([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ie([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ie([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ie([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ie([rt.lights,rt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};un.physical={uniforms:Ie([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Gs={r:0,b:0,g:0},Jn=new ln,Vu=new le;function Wu(i,t,e,n,s,r,o){const a=new Bt(0);let c=r===!0?0:1,l,h,f=null,u=0,d=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function g(E){let y=!1;const b=_(E);b===null?m(a,c):b&&b.isColor&&(m(b,1),y=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===Sr)?(h===void 0&&(h=new Ee(new Rn(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:$i(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(y.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vu.makeRotationFromEuler(Jn)),h.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ce,(f!==b||u!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ee(new hi(2,2),new Wn({name:"BackgroundMaterial",uniforms:$i(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,y){E.getRGB(Gs,bl(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,m(a,c)},render:g,addToRenderList:p}}function Xu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(x,T,V,H,X){let Z=!1;const z=f(H,V,T);r!==z&&(r=z,l(r.object)),Z=d(x,H,V,X),Z&&_(x,H,V,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(x,T,V,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,T,V){const H=V.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let Z=X[T.id];Z===void 0&&(Z={},X[T.id]=Z);let z=Z[H];return z===void 0&&(z=u(c()),Z[H]=z),z}function u(x){const T=[],V=[],H=[];for(let X=0;X<e;X++)T[X]=0,V[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:V,attributeDivisors:H,object:x,attributes:{},index:null}}function d(x,T,V,H){const X=r.attributes,Z=T.attributes;let z=0;const tt=V.getAttributes();for(const W in tt)if(tt[W].location>=0){const ft=X[W];let St=Z[W];if(St===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),ft===void 0||ft.attribute!==St||St&&ft.data!==St.data)return!0;z++}return r.attributesNum!==z||r.index!==H}function _(x,T,V,H){const X={},Z=T.attributes;let z=0;const tt=V.getAttributes();for(const W in tt)if(tt[W].location>=0){let ft=Z[W];ft===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor));const St={};St.attribute=ft,ft&&ft.data&&(St.data=ft.data),X[W]=St,z++}r.attributes=X,r.attributesNum=z,r.index=H}function g(){const x=r.newAttributes;for(let T=0,V=x.length;T<V;T++)x[T]=0}function p(x){m(x,0)}function m(x,T){const V=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;V[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),X[x]!==T&&(i.vertexAttribDivisor(x,T),X[x]=T)}function E(){const x=r.newAttributes,T=r.enabledAttributes;for(let V=0,H=T.length;V<H;V++)T[V]!==x[V]&&(i.disableVertexAttribArray(V),T[V]=0)}function y(x,T,V,H,X,Z,z){z===!0?i.vertexAttribIPointer(x,T,V,X,Z):i.vertexAttribPointer(x,T,V,H,X,Z)}function b(x,T,V,H){g();const X=H.attributes,Z=V.getAttributes(),z=T.defaultAttributeValues;for(const tt in Z){const W=Z[tt];if(W.location>=0){let dt=X[tt];if(dt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),dt!==void 0){const ft=dt.normalized,St=dt.itemSize,Kt=t.get(dt);if(Kt===void 0)continue;const te=Kt.buffer,Y=Kt.type,nt=Kt.bytesPerElement,vt=Y===i.INT||Y===i.UNSIGNED_INT||dt.gpuType===pa;if(dt.isInterleavedBufferAttribute){const ut=dt.data,Nt=ut.stride,Rt=dt.offset;if(ut.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)m(W.location+Vt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)p(W.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Vt=0;Vt<W.locationSize;Vt++)y(W.location+Vt,St/W.locationSize,Y,ft,Nt*nt,(Rt+St/W.locationSize*Vt)*nt,vt)}else{if(dt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut,dt.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ut=0;ut<W.locationSize;ut++)y(W.location+ut,St/W.locationSize,Y,ft,St*nt,St/W.locationSize*ut*nt,vt)}}else if(z!==void 0){const ft=z[tt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}E()}function O(){D();for(const x in n){const T=n[x];for(const V in T){const H=T[V];for(const X in H)h(H[X].object),delete H[X];delete T[V]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const V in T){const H=T[V];for(const X in H)h(H[X].object),delete H[X];delete T[V]}delete n[x.id]}function R(x){for(const T in n){const V=n[T];if(V[x.id]===void 0)continue;const H=V[x.id];for(const X in H)h(H[X].object),delete H[X];delete V[x.id]}}function D(){j(),o=!0,r!==s&&(r=s,l(r.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:j,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function Yu(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],u[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];for(let g=0;g<u.length;g++)e.update(_,n,u[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:O,maxSamples:C}}function Ku(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ti,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{const E=r?0:n,y=E*4;let b=m.clippingState||null;c.value=b,b=h(_,u,y,d);for(let O=0;O!==y;++O)b[O]=e[O];m.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=d+g*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,b=d;y!==g;++y,b+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function $u(i){let t=new WeakMap;function e(o,a){return a===Lo?o.mapping=Xi:a===Io&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lo||a===Io)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cl extends Al{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,oc=[.125,.215,.35,.446,.526,.582],ii=20,Qr=new Cl,ac=new Bt;let to=null,eo=0,no=0,io=!1;const ei=(1+Math.sqrt(5))/2,Pi=1/ei,cc=[new N(-ei,Pi,0),new N(ei,Pi,0),new N(-Pi,0,ei),new N(Pi,0,ei),new N(0,ei,-Pi),new N(0,ei,Pi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),this._renderer.xr.enabled=io,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:xs,format:an,colorSpace:Xn,depthBuffer:!1},s=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zu(r)),this._blurMaterial=ju(r,t,e)}return s}_compileMaterial(t){const e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s){const a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(ac),h.toneMapping=Hn,h.autoClear=!1;const d=new oi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new Ee(new Rn,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(ac),g=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):E===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;Vs(s,E*y,m>2?y:0,y,y),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cc[(s-r-1)%cc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ee(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ii-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):ii;p>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const m=[];let E=0;for(let R=0;R<ii;++R){const D=R/g,j=Math.exp(-D*D/2);m.push(j),R===0?E+=j:R<p&&(E+=2*j)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-n;const b=this._sizeLods[s],O=3*b*(s>y-ki?s-y+ki:0),C=4*(this._cubeSize-b);Vs(e,O,C,3*b,2*b),c.setRenderTarget(e),c.render(f,Qr)}}function Zu(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+oc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ki?c=oc[o-i+ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,_=6,g=3,p=2,m=1,E=new Float32Array(g*_*d),y=new Float32Array(p*_*d),b=new Float32Array(m*_*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,D=C>2?0:-1,j=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];E.set(j,g*_*C),y.set(u,p*_*C);const x=[C,C,C,C,C,C];b.set(x,m*_*C)}const O=new Qe;O.setAttribute("position",new cn(E,g)),O.setAttribute("uv",new cn(y,p)),O.setAttribute("faceIndex",new cn(b,m)),t.push(O),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hc(i,t,e){const n=new li(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ju(i,t,e){const n=new Float32Array(ii),s=new N(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function dc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function fc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function Ju(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Lo||c===Io,h=c===Xi||c===Yi;if(l||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new lc(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new lc(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tp(i,t,e,n){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const _ in u)t.update(u[_],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const E=d.array;g=d.version;for(let y=0,b=E.length;y<b;y+=3){const O=E[y+0],C=E[y+1],R=E[y+2];u.push(O,C,C,R,R,O)}}else if(_!==void 0){const E=_.array;g=_.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const O=y+0,C=y+1,R=y+2;u.push(O,C,C,R,R,O)}}else return;const p=new(xl(u)?Tl:El)(u,1);p.version=g;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function ep(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,u*o,_),e.update(d,n,_))}function h(u,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function f(u,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,g,0,_);let m=0;for(let E=0;E<_;E++)m+=d[E];for(let E=0;E<g.length;E++)e.update(m,n,g[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function np(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ip(i,t,e){const n=new WeakMap,s=new ue;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),p===!0&&(b=3);let O=a.attributes.position.count*b,C=1;O>t.maxTextureSize&&(C=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const R=new Float32Array(O*C*4*f),D=new Sl(R,O,C,f);D.type=Tn,D.needsUpdate=!0;const j=b*4;for(let T=0;T<f;T++){const V=m[T],H=E[T],X=y[T],Z=O*C*4*T;for(let z=0;z<V.count;z++){const tt=z*j;_===!0&&(s.fromBufferAttribute(V,z),R[Z+tt+0]=s.x,R[Z+tt+1]=s.y,R[Z+tt+2]=s.z,R[Z+tt+3]=0),g===!0&&(s.fromBufferAttribute(H,z),R[Z+tt+4]=s.x,R[Z+tt+5]=s.y,R[Z+tt+6]=s.z,R[Z+tt+7]=0),p===!0&&(s.fromBufferAttribute(X,z),R[Z+tt+8]=s.x,R[Z+tt+9]=s.y,R[Z+tt+10]=s.z,R[Z+tt+11]=X.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new zt(O,C)},n.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function sp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Pl extends Ce{constructor(t,e,n,s,r,o,a,c,l,h=Gi){if(h!==Gi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=ci),n===void 0&&h===Ki&&(n=qi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=c!==void 0?c:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ll=new Ce,uc=new Pl(1,1),Il=new Sl,Nl=new Vh,Ul=new Rl,pc=[],mc=[],_c=new Float32Array(16),gc=new Float32Array(9),vc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function lp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),ye(e,n)}}function hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),ye(e,n)}}function dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),ye(e,n)}}function fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uc.compareFunction=vl,r=uc):r=Ll,e.setTexture2D(t||r,s)}function Sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nl,s)}function Mp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ul,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Il,s)}function Tp(i){switch(i){case 5126:return rp;case 35664:return op;case 35665:return ap;case 35666:return cp;case 35674:return lp;case 35675:return hp;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return up;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return _p;case 36294:return gp;case 36295:return vp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Ep}}function bp(i,t){i.uniform1fv(this.addr,t)}function Ap(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Rp(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function wp(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Cp(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pp(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lp(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ip(i,t){i.uniform1iv(this.addr,t)}function Np(i,t){i.uniform2iv(this.addr,t)}function Up(i,t){i.uniform3iv(this.addr,t)}function Dp(i,t){i.uniform4iv(this.addr,t)}function Op(i,t){i.uniform1uiv(this.addr,t)}function Fp(i,t){i.uniform2uiv(this.addr,t)}function Bp(i,t){i.uniform3uiv(this.addr,t)}function kp(i,t){i.uniform4uiv(this.addr,t)}function zp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ll,r[o])}function Hp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nl,r[o])}function Gp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ul,r[o])}function Vp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Il,r[o])}function Wp(i){switch(i){case 5126:return bp;case 35664:return Ap;case 35665:return Rp;case 35666:return wp;case 35674:return Cp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Ip;case 35667:case 35671:return Np;case 35668:case 35672:return Up;case 35669:case 35673:return Dp;case 5125:return Op;case 36294:return Fp;case 36295:return Bp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Vp}}class Xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tp(e.type)}}class Yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wp(e.type)}}class qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const so=/(\w+)(\])?(\[|\.)?/g;function xc(i,t){i.seq.push(t),i.map[t.id]=t}function Kp(i,t,e){const n=i.name,s=n.length;for(so.lastIndex=0;;){const r=so.exec(n),o=so.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){xc(e,l===void 0?new Xp(a,i,t):new Yp(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new qp(a),xc(e,f)),e=f}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Kp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $p=37297;let Zp=0;function jp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Jp(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===mr&&e===pr?n="LinearDisplayP3ToLinearSRGB":t===pr&&e===mr&&(n="LinearSRGBToLinearDisplayP3"),i){case Xn:case Mr:return[n,"LinearTransferOETF"];case fn:case ya:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jp(i.getShaderSource(t),o)}else return s}function Qp(i,t){const e=Jp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tm(i,t){let e;switch(t){case mh:e="Linear";break;case _h:e="Reinhard";break;case gh:e="Cineon";break;case vh:e="ACESFilmic";break;case yh:e="AgX";break;case Sh:e="Neutral";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ws=new N;function em(){Qt.getLuminanceCoefficients(Ws);const i=Ws.x.toFixed(4),t=Ws.y.toFixed(4),e=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function im(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ls(i){return i!==""}function Mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace(rm,am)}const om=new Map;function am(i,t){let e=Ot[t];if(e===void 0){const n=om.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return la(e)}const cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(cm,lm)}function lm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function dm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function um(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ua:t="ENVMAP_BLENDING_MULTIPLY";break;case uh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function pm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=hm(e),l=dm(e),h=fm(e),f=um(e),u=pm(e),d=nm(e),_=im(r),g=s.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ls).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ls).join(`
`),m.length>0&&(m+=`
`)):(p=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),m=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Hn?tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Qp("linearToOutputTexel",e.outputColorSpace),em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),o=la(o),o=Mc(o,e),o=Ec(o,e),a=la(a),a=Mc(a,e),a=Ec(a,e),o=Tc(o),a=Tc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=E+p+o,b=E+m+a,O=yc(s,s.VERTEX_SHADER,y),C=yc(s,s.FRAGMENT_SHADER,b);s.attachShader(g,O),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(T){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(g).trim(),H=s.getShaderInfoLog(O).trim(),X=s.getShaderInfoLog(C).trim();let Z=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,O,C);else{const tt=Sc(s,O,"vertex"),W=Sc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+tt+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||X==="")&&(z=!1);z&&(T.diagnostics={runnable:Z,programLog:V,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(O),s.deleteShader(C),D=new dr(s,g),j=sm(s,g)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let j;this.getAttributes=function(){return j===void 0&&R(this),j};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,$p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=C,this}let _m=0;class gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vm(t),e.set(t,n)),n}}class vm{constructor(t){this.id=_m++,this.code=t,this.usedTimes=0}}function xm(i,t,e,n,s,r,o){const a=new Ma,c=new gm,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,T,V,H,X){const Z=H.fog,z=X.geometry,tt=x.isMeshStandardMaterial?H.environment:null,W=(x.isMeshStandardMaterial?e:t).get(x.envMap||tt),dt=W&&W.mapping===Sr?W.image.height:null,ft=g[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=St!==void 0?St.length:0;let te=0;z.morphAttributes.position!==void 0&&(te=1),z.morphAttributes.normal!==void 0&&(te=2),z.morphAttributes.color!==void 0&&(te=3);let Y,nt,vt,ut;if(ft){const Ue=un[ft];Y=Ue.vertexShader,nt=Ue.fragmentShader}else Y=x.vertexShader,nt=x.fragmentShader,c.update(x),vt=c.getVertexShaderID(x),ut=c.getFragmentShaderID(x);const Nt=i.getRenderTarget(),Rt=X.isInstancedMesh===!0,Vt=X.isBatchedMesh===!0,ne=!!x.map,Wt=!!x.matcap,P=!!W,He=!!x.aoMap,Ht=!!x.lightMap,Yt=!!x.bumpMap,Ct=!!x.normalMap,oe=!!x.displacementMap,It=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,F=x.anisotropy>0,K=x.clearcoat>0,et=x.dispersion>0,q=x.iridescence>0,Mt=x.sheen>0,ot=x.transmission>0,pt=F&&!!x.anisotropyMap,qt=K&&!!x.clearcoatMap,it=K&&!!x.clearcoatNormalMap,mt=K&&!!x.clearcoatRoughnessMap,Pt=q&&!!x.iridescenceMap,Lt=q&&!!x.iridescenceThicknessMap,_t=Mt&&!!x.sheenColorMap,Gt=Mt&&!!x.sheenRoughnessMap,Ut=!!x.specularMap,re=!!x.specularColorMap,L=!!x.specularIntensityMap,lt=ot&&!!x.transmissionMap,G=ot&&!!x.thicknessMap,J=!!x.gradientMap,at=!!x.alphaMap,ht=x.alphaTest>0,Xt=!!x.alphaHash,me=!!x.extensions;let Ne=Hn;x.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const $t={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:nt,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Vt,batchingColor:Vt&&X._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&X.instanceColor!==null,instancingMorph:Rt&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:Xn,alphaToCoverage:!!x.alphaToCoverage,map:ne,matcap:Wt,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:dt,aoMap:He,lightMap:Ht,bumpMap:Yt,normalMap:Ct,displacementMap:d&&oe,emissiveMap:It,normalMapObjectSpace:Ct&&x.normalMapType===bh,normalMapTangentSpace:Ct&&x.normalMapType===gl,metalnessMap:A,roughnessMap:S,anisotropy:F,anisotropyMap:pt,clearcoat:K,clearcoatMap:qt,clearcoatNormalMap:it,clearcoatRoughnessMap:mt,dispersion:et,iridescence:q,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:Mt,sheenColorMap:_t,sheenRoughnessMap:Gt,specularMap:Ut,specularColorMap:re,specularIntensityMap:L,transmission:ot,transmissionMap:lt,thicknessMap:G,gradientMap:J,opaque:x.transparent===!1&&x.blending===Hi&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:Xt,combine:x.combine,mapUv:ne&&p(x.map.channel),aoMapUv:He&&p(x.aoMap.channel),lightMapUv:Ht&&p(x.lightMap.channel),bumpMapUv:Yt&&p(x.bumpMap.channel),normalMapUv:Ct&&p(x.normalMap.channel),displacementMapUv:oe&&p(x.displacementMap.channel),emissiveMapUv:It&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:pt&&p(x.anisotropyMap.channel),clearcoatMapUv:qt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ut&&p(x.specularMap.channel),specularColorMapUv:re&&p(x.specularColorMap.channel),specularIntensityMapUv:L&&p(x.specularIntensityMap.channel),transmissionMapUv:lt&&p(x.transmissionMap.channel),thicknessMapUv:G&&p(x.thicknessMap.channel),alphaMapUv:at&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ct||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(ne||at),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ne&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ke,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function E(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)T.push(V),T.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(y(T,x),b(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function O(x){const T=g[x.type];let V;if(T){const H=un[T];V=ed.clone(H.uniforms)}else V=x.uniforms;return V}function C(x,T){let V;for(let H=0,X=h.length;H<X;H++){const Z=h[H];if(Z.cacheKey===T){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new mm(i,T,x,r),h.push(V)),V}function R(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),x.destroy()}}function D(x){c.remove(x)}function j(){c.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:O,acquireProgram:C,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:j}}function ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,d,_,g,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),t++,m}function a(f,u,d,_,g,p){const m=o(f,u,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(f,u,d,_,g,p){const m=o(f,u,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(f,u){e.length>1&&e.sort(f||Sm),n.length>1&&n.sort(u||Ac),s.length>1&&s.sort(u||Ac)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Mm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Rc,i.set(n,[o])):s>=r.length?(o=new Rc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Em(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Bt};break;case"SpotLight":e={position:new N,direction:new N,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Tm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let bm=0;function Am(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rm(i){const t=new Em,e=Tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new le,o=new le;function a(l){let h=0,f=0,u=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,E=0,y=0,b=0,O=0,C=0,R=0;l.sort(Am);for(let j=0,x=l.length;j<x;j++){const T=l[j],V=T.color,H=T.intensity,X=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=V.r*H,f+=V.g*H,u+=V.b*H;else if(T.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(T.sh.coefficients[z],H);R++}else if(T.isDirectionalLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const tt=T.shadow,W=e.get(T);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=T.shadow.matrix,E++}n.directional[d]=z,d++}else if(T.isSpotLight){const z=t.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(V).multiplyScalar(H),z.distance=X,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,n.spot[g]=z;const tt=T.shadow;if(T.map&&(n.spotLightMap[O]=T.map,O++,tt.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[g]=tt.matrix,T.castShadow){const W=e.get(T);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=Z,b++}g++}else if(T.isRectAreaLight){const z=t.get(T);z.color.copy(V).multiplyScalar(H),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=z,p++}else if(T.isPointLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const tt=T.shadow,W=e.get(T);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=T.shadow.matrix,y++}n.point[_]=z,_++}else if(T.isHemisphereLight){const z=t.get(T);z.skyColor.copy(T.color).multiplyScalar(H),z.groundColor.copy(T.groundColor).multiplyScalar(H),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==E||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==O||D.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,D.directionalLength=d,D.pointLength=_,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=E,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=O,D.numLightProbes=R,n.version=bm++)}function c(l,h){let f=0,u=0,d=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){const y=l[m];if(y.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function wc(i){const t=new Rm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function wm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new wc(i),t.set(s,[a])):r>=o.length?(a=new wc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Cm extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pm extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
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
}`;function Nm(i,t,e){let n=new Ea;const s=new zt,r=new zt,o=new ue,a=new Cm({depthPacking:Th}),c=new Pm,l={},h=e.maxTextureSize,f={[Vn]:ze,[ze]:Vn,[ke]:ke},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Lm,fragmentShader:Im}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new Qe;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ee(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let m=this.type;this.render=function(C,R,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const j=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),V=i.state;V.setBlending(zn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=m!==En&&this.type===En,X=m===En&&this.type!==En;for(let Z=0,z=C.length;Z<z;Z++){const tt=C[Z],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const dt=W.getFrameExtents();if(s.multiply(dt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,W.mapSize.y=r.y)),W.map===null||H===!0||X===!0){const St=this.type!==En?{minFilter:we,magFilter:we}:{};W.map!==null&&W.map.dispose(),W.map=new li(s.x,s.y,St),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ft=W.getViewportCount();for(let St=0;St<ft;St++){const Kt=W.getViewport(St);o.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),V.viewport(o),W.updateMatrices(tt,St),n=W.getFrustum(),b(R,D,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===En&&E(W,D),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(j,x,T)};function E(C,R){const D=t.update(g);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new li(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,D,u,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,D,d,g,null)}function y(C,R,D,j){let x=null;const T=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=x.uuid,H=R.uuid;let X=l[V];X===void 0&&(X={},l[V]=X);let Z=X[H];Z===void 0&&(Z=x.clone(),X[H]=Z,R.addEventListener("dispose",O)),x=Z}if(x.visible=R.visible,x.wireframe=R.wireframe,j===En?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=i.properties.get(x);V.light=D}return x}function b(C,R,D,j,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===En)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=t.update(C),X=C.material;if(Array.isArray(X)){const Z=H.groups;for(let z=0,tt=Z.length;z<tt;z++){const W=Z[z],dt=X[W.materialIndex];if(dt&&dt.visible){const ft=y(C,dt,j,x);C.onBeforeShadow(i,C,R,D,H,ft,W),i.renderBufferDirect(D,null,H,ft,C,W),C.onAfterShadow(i,C,R,D,H,ft,W)}}}else if(X.visible){const Z=y(C,X,j,x);C.onBeforeShadow(i,C,R,D,H,Z,null),i.renderBufferDirect(D,null,H,Z,C,null),C.onAfterShadow(i,C,R,D,H,Z,null)}}const V=C.children;for(let H=0,X=V.length;H<X;H++)b(V[H],R,D,j,x)}function O(C){C.target.removeEventListener("dispose",O);for(const D in l){const j=l[D],x=C.target.uuid;x in j&&(j[x].dispose(),delete j[x])}}}const Um={[To]:bo,[Ao]:Co,[Ro]:Po,[Wi]:wo,[bo]:To,[Co]:Ao,[Po]:Ro,[wo]:Wi};function Dm(i){function t(){let L=!1;const lt=new ue;let G=null;const J=new ue(0,0,0,0);return{setMask:function(at){G!==at&&!L&&(i.colorMask(at,at,at,at),G=at)},setLocked:function(at){L=at},setClear:function(at,ht,Xt,me,Ne){Ne===!0&&(at*=me,ht*=me,Xt*=me),lt.set(at,ht,Xt,me),J.equals(lt)===!1&&(i.clearColor(at,ht,Xt,me),J.copy(lt))},reset:function(){L=!1,G=null,J.set(-1,0,0,0)}}}function e(){let L=!1,lt=!1,G=null,J=null,at=null;return{setReversed:function(ht){lt=ht},setTest:function(ht){ht?vt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(ht){G!==ht&&!L&&(i.depthMask(ht),G=ht)},setFunc:function(ht){if(lt&&(ht=Um[ht]),J!==ht){switch(ht){case To:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){L=ht},setClear:function(ht){at!==ht&&(i.clearDepth(ht),at=ht)},reset:function(){L=!1,G=null,J=null,at=null}}}function n(){let L=!1,lt=null,G=null,J=null,at=null,ht=null,Xt=null,me=null,Ne=null;return{setTest:function($t){L||($t?vt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function($t){lt!==$t&&!L&&(i.stencilMask($t),lt=$t)},setFunc:function($t,Ue,mn){(G!==$t||J!==Ue||at!==mn)&&(i.stencilFunc($t,Ue,mn),G=$t,J=Ue,at=mn)},setOp:function($t,Ue,mn){(ht!==$t||Xt!==Ue||me!==mn)&&(i.stencilOp($t,Ue,mn),ht=$t,Xt=Ue,me=mn)},setLocked:function($t){L=$t},setClear:function($t){Ne!==$t&&(i.clearStencil($t),Ne=$t)},reset:function(){L=!1,lt=null,G=null,J=null,at=null,ht=null,Xt=null,me=null,Ne=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,u=[],d=null,_=!1,g=null,p=null,m=null,E=null,y=null,b=null,O=null,C=new Bt(0,0,0),R=0,D=!1,j=null,x=null,T=null,V=null,H=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,z=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Z=z>=1):tt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Z=z>=2);let W=null,dt={};const ft=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Kt=new ue().fromArray(ft),te=new ue().fromArray(St);function Y(L,lt,G,J){const at=new Uint8Array(4),ht=i.createTexture();i.bindTexture(L,ht),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<G;Xt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(lt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ht}const nt={};nt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),r.setFunc(Wi),Ht(!1),Yt(Fa),vt(i.CULL_FACE),P(zn);function vt(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function ut(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Nt(L,lt){return h[L]!==lt?(i.bindFramebuffer(L,lt),h[L]=lt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Rt(L,lt){let G=u,J=!1;if(L){G=f.get(lt),G===void 0&&(G=[],f.set(lt,G));const at=L.textures;if(G.length!==at.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Xt=at.length;ht<Xt;ht++)G[ht]=i.COLOR_ATTACHMENT0+ht;G.length=at.length,J=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,J=!0);J&&i.drawBuffers(G)}function Vt(L){return d!==L?(i.useProgram(L),d=L,!0):!1}const ne={[ni]:i.FUNC_ADD,[Zl]:i.FUNC_SUBTRACT,[jl]:i.FUNC_REVERSE_SUBTRACT};ne[Jl]=i.MIN,ne[Ql]=i.MAX;const Wt={[th]:i.ZERO,[eh]:i.ONE,[nh]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[oh]:i.DST_COLOR,[sh]:i.DST_ALPHA,[ih]:i.ONE_MINUS_SRC_COLOR,[Eo]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[hh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,lt,G,J,at,ht,Xt,me,Ne,$t){if(L===zn){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(vt(i.BLEND),_=!0),L!==$l){if(L!==g||$t!==D){if((p!==ni||y!==ni)&&(i.blendEquation(i.FUNC_ADD),p=ni,y=ni),$t)switch(L){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case za:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,E=null,b=null,O=null,C.set(0,0,0),R=0,g=L,D=$t}return}at=at||lt,ht=ht||G,Xt=Xt||J,(lt!==p||at!==y)&&(i.blendEquationSeparate(ne[lt],ne[at]),p=lt,y=at),(G!==m||J!==E||ht!==b||Xt!==O)&&(i.blendFuncSeparate(Wt[G],Wt[J],Wt[ht],Wt[Xt]),m=G,E=J,b=ht,O=Xt),(me.equals(C)===!1||Ne!==R)&&(i.blendColor(me.r,me.g,me.b,Ne),C.copy(me),R=Ne),g=L,D=!1}function He(L,lt){L.side===ke?ut(i.CULL_FACE):vt(i.CULL_FACE);let G=L.side===ze;lt&&(G=!G),Ht(G),L.blending===Hi&&L.transparent===!1?P(zn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){j!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),j=L)}function Yt(L){L!==ql?(vt(i.CULL_FACE),L!==x&&(L===Fa?i.cullFace(i.BACK):L===Kl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),x=L}function Ct(L){L!==T&&(Z&&i.lineWidth(L),T=L)}function oe(L,lt,G){L?(vt(i.POLYGON_OFFSET_FILL),(V!==lt||H!==G)&&(i.polygonOffset(lt,G),V=lt,H=G)):ut(i.POLYGON_OFFSET_FILL)}function It(L){L?vt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+X-1),W!==L&&(i.activeTexture(L),W=L)}function S(L,lt,G){G===void 0&&(W===null?G=i.TEXTURE0+X-1:G=W);let J=dt[G];J===void 0&&(J={type:void 0,texture:void 0},dt[G]=J),(J.type!==L||J.texture!==lt)&&(W!==G&&(i.activeTexture(G),W=G),i.bindTexture(L,lt||nt[L]),J.type=L,J.texture=lt)}function F(){const L=dt[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Kt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Kt.copy(L))}function _t(L){te.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),te.copy(L))}function Gt(L,lt){let G=c.get(lt);G===void 0&&(G=new WeakMap,c.set(lt,G));let J=G.get(L);J===void 0&&(J=i.getUniformBlockIndex(lt,L.name),G.set(L,J))}function Ut(L,lt){const J=c.get(lt).get(L);a.get(lt)!==J&&(i.uniformBlockBinding(lt,J,L.__bindingPointIndex),a.set(lt,J))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,dt={},h={},f=new WeakMap,u=[],d=null,_=!1,g=null,p=null,m=null,E=null,y=null,b=null,O=null,C=new Bt(0,0,0),R=0,D=!1,j=null,x=null,T=null,V=null,H=null,Kt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:ut,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Vt,setBlending:P,setMaterial:He,setFlipSided:Ht,setCullFace:Yt,setLineWidth:Ct,setPolygonOffset:oe,setScissorTest:It,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:mt,texImage3D:Pt,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:qt,texStorage3D:it,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Lt,viewport:_t,reset:re}}function Cc(i,t,e,n){const s=Om(n);switch(e){case hl:return i*t;case fl:return i*t;case ul:return i*t*2;case pl:return i*t/s.components*s.byteLength;case ga:return i*t/s.components*s.byteLength;case ml:return i*t*2/s.components*s.byteLength;case va:return i*t*2/s.components*s.byteLength;case dl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case xa:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:case Bo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cr:case na:case ia:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _l:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Om(i){switch(i){case An:case al:return{byteLength:1,components:1};case us:case cl:case xs:return{byteLength:2,components:1};case ma:case _a:return{byteLength:2,components:4};case ci:case pa:case Tn:return{byteLength:4,components:1};case ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Fm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return d?new OffscreenCanvas(A,S):ps("canvas")}function g(A,S,F){let K=1;const et=It(A);if((et.width>F||et.height>F)&&(K=F/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(K*et.width),Mt=Math.floor(K*et.height);f===void 0&&(f=_(q,Mt));const ot=S?_(q,Mt):f;return ot.width=q,ot.height=Mt,ot.getContext("2d").drawImage(A,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+Mt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==we&&A.minFilter!==on}function m(A){i.generateMipmap(A)}function E(A,S,F,K,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=S;if(S===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),S===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),S===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),S===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),S===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),S===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),S===i.RGBA){const Mt=et?ur:Qt.getTransfer(K);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Mt===ce?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(A,S){let F;return A?S===null||S===ci||S===qi?F=i.DEPTH24_STENCIL8:S===Tn?F=i.DEPTH32F_STENCIL8:S===us&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===qi?F=i.DEPTH_COMPONENT24:S===Tn?F=i.DEPTH_COMPONENT32F:S===us&&(F=i.DEPTH_COMPONENT16),F}function b(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==we&&A.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function O(A){const S=A.target;S.removeEventListener("dispose",O),R(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),j(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const F=A.source,K=u.get(F);if(K){const et=K[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(A),Object.keys(K).length===0&&u.delete(F)}n.remove(A)}function D(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const F=A.source,K=u.get(F);delete K[S.__cacheKey],o.memory.textures--}function j(A){const S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let et=0;et<S.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[K][et]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=A.textures;for(let K=0,et=F.length;K<et;K++){const q=n.get(F[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(A)}let x=0;function T(){x=0}function V(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function X(A,S){const F=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(F,A,S);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function Z(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){te(F,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function z(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){te(F,A,S);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function tt(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const W={[No]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},dt={[we]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ft={[Ah]:i.NEVER,[Ih]:i.ALWAYS,[Rh]:i.LESS,[vl]:i.LEQUAL,[wh]:i.EQUAL,[Lh]:i.GEQUAL,[Ch]:i.GREATER,[Ph]:i.NOTEQUAL};function St(A,S){if(S.type===Tn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Pr||S.magFilter===Ts||S.magFilter===ri||S.minFilter===on||S.minFilter===Pr||S.minFilter===Ts||S.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===we||S.minFilter!==Ts&&S.minFilter!==ri||S.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Kt(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O));const K=S.source;let et=u.get(K);et===void 0&&(et={},u.set(K,et));const q=H(S);if(q!==A.__cacheKey){et[q]===void 0&&(et[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[q].usedTimes++;const Mt=et[A.__cacheKey];Mt!==void 0&&(et[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&D(S)),A.__cacheKey=q,A.__webglTexture=et[q].texture}return F}function te(A,S,F){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const et=Kt(A,S),q=S.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+F);const Mt=n.get(q);if(q.version!==Mt.__version||et===!0){e.activeTexture(i.TEXTURE0+F);const ot=Qt.getPrimaries(Qt.workingColorSpace),pt=S.colorSpace===Fn?null:Qt.getPrimaries(S.colorSpace),qt=S.colorSpace===Fn||ot===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let it=g(S.image,!1,s.maxTextureSize);it=oe(S,it);const mt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type);let Lt=E(S.internalFormat,mt,Pt,S.colorSpace,S.isVideoTexture);St(K,S);let _t;const Gt=S.mipmaps,Ut=S.isVideoTexture!==!0,re=Mt.__version===void 0||et===!0,L=q.dataReady,lt=b(S,it);if(S.isDepthTexture)Lt=y(S.format===Ki,S.type),re&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,mt,Pt,null));else if(S.isDataTexture)if(Gt.length>0){Ut&&re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Gt[0].width,Gt[0].height);for(let G=0,J=Gt.length;G<J;G++)_t=Gt[G],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,mt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,G,Lt,_t.width,_t.height,0,mt,Pt,_t.data);S.generateMipmaps=!1}else Ut?(re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,it.width,it.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,mt,Pt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,mt,Pt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,Gt[0].width,Gt[0].height,it.depth);for(let G=0,J=Gt.length;G<J;G++)if(_t=Gt[G],S.format!==an)if(mt!==null)if(Ut){if(L)if(S.layerUpdates.size>0){const at=Cc(_t.width,_t.height,S.format,S.type);for(const ht of S.layerUpdates){const Xt=_t.data.subarray(ht*at/_t.data.BYTES_PER_ELEMENT,(ht+1)*at/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ht,_t.width,_t.height,1,mt,Xt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_t.width,_t.height,it.depth,mt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Lt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_t.width,_t.height,it.depth,mt,Pt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Lt,_t.width,_t.height,it.depth,0,mt,Pt,_t.data)}else{Ut&&re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Gt[0].width,Gt[0].height);for(let G=0,J=Gt.length;G<J;G++)_t=Gt[G],S.format!==an?mt!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Lt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,_t.width,_t.height,mt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,G,Lt,_t.width,_t.height,0,mt,Pt,_t.data)}else if(S.isDataArrayTexture)if(Ut){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,it.width,it.height,it.depth),L)if(S.layerUpdates.size>0){const G=Cc(it.width,it.height,S.format,S.type);for(const J of S.layerUpdates){const at=it.data.subarray(J*G/it.data.BYTES_PER_ELEMENT,(J+1)*G/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,mt,Pt,at)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Pt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,mt,Pt,it.data);else if(S.isData3DTexture)Ut?(re&&e.texStorage3D(i.TEXTURE_3D,lt,Lt,it.width,it.height,it.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Pt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,mt,Pt,it.data);else if(S.isFramebufferTexture){if(re)if(Ut)e.texStorage2D(i.TEXTURE_2D,lt,Lt,it.width,it.height);else{let G=it.width,J=it.height;for(let at=0;at<lt;at++)e.texImage2D(i.TEXTURE_2D,at,Lt,G,J,0,mt,Pt,null),G>>=1,J>>=1}}else if(Gt.length>0){if(Ut&&re){const G=It(Gt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Lt,G.width,G.height)}for(let G=0,J=Gt.length;G<J;G++)_t=Gt[G],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt,Pt,_t):e.texImage2D(i.TEXTURE_2D,G,Lt,mt,Pt,_t);S.generateMipmaps=!1}else if(Ut){if(re){const G=It(it);e.texStorage2D(i.TEXTURE_2D,lt,Lt,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Pt,it)}else e.texImage2D(i.TEXTURE_2D,0,Lt,mt,Pt,it);p(S)&&m(K),Mt.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,F){if(S.image.length!==6)return;const K=Kt(A,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const q=n.get(et);if(et.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+F);const Mt=Qt.getPrimaries(Qt.workingColorSpace),ot=S.colorSpace===Fn?null:Qt.getPrimaries(S.colorSpace),pt=S.colorSpace===Fn||Mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!qt&&!it?mt[J]=g(S.image[J],!0,s.maxCubemapSize):mt[J]=it?S.image[J].image:S.image[J],mt[J]=oe(S,mt[J]);const Pt=mt[0],Lt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Gt=E(S.internalFormat,Lt,_t,S.colorSpace),Ut=S.isVideoTexture!==!0,re=q.__version===void 0||K===!0,L=et.dataReady;let lt=b(S,Pt);St(i.TEXTURE_CUBE_MAP,S);let G;if(qt){Ut&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Gt,Pt.width,Pt.height);for(let J=0;J<6;J++){G=mt[J].mipmaps;for(let at=0;at<G.length;at++){const ht=G[at];S.format!==an?Lt!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,ht.width,ht.height,Lt,_t,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Gt,ht.width,ht.height,0,Lt,_t,ht.data)}}}else{if(G=S.mipmaps,Ut&&re){G.length>0&&lt++;const J=It(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Lt,_t,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,mt[J].width,mt[J].height,0,Lt,_t,mt[J].data);for(let at=0;at<G.length;at++){const Xt=G[at].image[J].image;Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,Xt.width,Xt.height,Lt,_t,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Gt,Xt.width,Xt.height,0,Lt,_t,Xt.data)}}else{Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,_t,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Lt,_t,mt[J]);for(let at=0;at<G.length;at++){const ht=G[at];Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,Lt,_t,ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Gt,Lt,_t,ht.image[J])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),q.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function nt(A,S,F,K,et,q){const Mt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),pt=E(F.internalFormat,Mt,ot,F.colorSpace);if(!n.get(S).__hasExternalTextures){const it=Math.max(1,S.width>>q),mt=Math.max(1,S.height>>q);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,q,pt,it,mt,S.depth,0,Mt,ot,null):e.texImage2D(et,q,pt,it,mt,0,Mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Yt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,n.get(F).__webglTexture,0,Ht(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,n.get(F).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,et=K&&K.isDepthTexture?K.type:null,q=y(S.stencilBuffer,et),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ht(S);Yt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,q,S.width,S.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{const K=S.textures;for(let et=0;et<K.length;et++){const q=K[et],Mt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),pt=E(q.internalFormat,Mt,ot,q.colorSpace),qt=Ht(S);F&&Yt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,pt,S.width,S.height):Yt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,et=Ht(S);if(S.depthTexture.format===Gi)Yt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===Ki)Yt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const S=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),vt(S.__webglDepthbuffer[K],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),vt(S.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(A,S,F){const K=n.get(A);S!==void 0&&nt(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Nt(A)}function Vt(A){const S=A.texture,F=n.get(A),K=n.get(S);A.addEventListener("dispose",C);const et=A.textures,q=A.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let pt=0;pt<S.mipmaps.length;pt++)F.__webglFramebuffer[ot][pt]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ot=0,pt=et.length;ot<pt;ot++){const qt=n.get(et[ot]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Yt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<et.length;ot++){const pt=et[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const qt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),mt=E(pt.internalFormat,qt,it,pt.colorSpace,A.isXRRenderTarget===!0),Pt=Ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),St(i.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)nt(F.__webglFramebuffer[ot][pt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else nt(F.__webglFramebuffer[ot],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,pt=et.length;ot<pt;ot++){const qt=et[ot],it=n.get(qt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),St(i.TEXTURE_2D,qt),nt(F.__webglFramebuffer,A,qt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),St(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)nt(F.__webglFramebuffer[pt],A,S,i.COLOR_ATTACHMENT0,ot,pt);else nt(F.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ot,0);p(S)&&m(ot),e.unbindTexture()}A.depthBuffer&&Nt(A)}function ne(A){const S=A.textures;for(let F=0,K=S.length;F<K;F++){const et=S[F];if(p(et)){const q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(et).__webglTexture;e.bindTexture(q,Mt),m(q),e.unbindTexture()}}}const Wt=[],P=[];function He(A){if(A.samples>0){if(Yt(A)===!1){const S=A.textures,F=A.width,K=A.height;let et=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),ot=S.length>1;if(ot)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const qt=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,et,i.NEAREST),c===!0&&(Wt.length=0,P.length=0,Wt.push(i.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Wt.push(q),P.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const qt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ht(A){return Math.min(s.maxSamples,A.samples)}function Yt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function oe(A,S){const F=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Xn&&F!==Fn&&(Qt.getTransfer(F)===ce?(K!==an||et!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=z,this.setTextureCube=tt,this.rebindTextures=Rt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Yt}function Bm(i,t){function e(n,s=Fn){let r;const o=Qt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.BYTE;if(n===cl)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===hl)return i.ALPHA;if(n===dl)return i.RGB;if(n===an)return i.RGBA;if(n===fl)return i.LUMINANCE;if(n===ul)return i.LUMINANCE_ALPHA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===ml)return i.RG;if(n===va)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===sr||n===rr||n===or||n===ar)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Oo||n===Fo||n===Bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===zo||n===Ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===zo)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ho)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Go||n===Vo||n===Wo||n===Xo||n===Yo||n===qo||n===Ko||n===$o||n===Zo||n===jo||n===Jo||n===Qo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ea)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cr||n===na||n===ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cr)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===sa||n===ra||n===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class km extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bn extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zm={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&u>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gm=`
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

}`;class Vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:Hm,fragmentShader:Gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wm extends ui{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,_=null;const g=new Vm,p=e.getContextAttributes();let m=null,E=null;const y=[],b=[],O=new zt;let C=null;const R=new je;R.layers.enable(1),R.viewport=new ue;const D=new je;D.layers.enable(2),D.viewport=new ue;const j=[R,D],x=new km;x.layers.enable(1),x.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=y[Y];return nt===void 0&&(nt=new ro,y[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=y[Y];return nt===void 0&&(nt=new ro,y[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=y[Y];return nt===void 0&&(nt=new ro,y[Y]=nt),nt.getHandSpace()};function H(Y){const nt=b.indexOf(Y.inputSource);if(nt===-1)return;const vt=y[nt];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,l||o),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<y.length;Y++){const nt=b[Y];nt!==null&&(b[Y]=null,y[Y].disconnect(nt))}T=null,V=null,g.reset(),t.setRenderTarget(m),d=null,u=null,f=null,s=null,E=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new li(d.framebufferWidth,d.framebufferHeight,{format:an,type:An,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,vt=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Ki:Gi,vt=p.stencil?qi:ci);const Nt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Nt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new li(u.textureWidth,u.textureHeight,{format:an,type:An,depthTexture:new Pl(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Y){for(let nt=0;nt<Y.removed.length;nt++){const vt=Y.removed[nt],ut=b.indexOf(vt);ut>=0&&(b[ut]=null,y[ut].disconnect(vt))}for(let nt=0;nt<Y.added.length;nt++){const vt=Y.added[nt];let ut=b.indexOf(vt);if(ut===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=b.length){b.push(vt),ut=Rt;break}else if(b[Rt]===null){b[Rt]=vt,ut=Rt;break}if(ut===-1)break}const Nt=y[ut];Nt&&Nt.connect(vt)}}const z=new N,tt=new N;function W(Y,nt,vt){z.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);const ut=z.distanceTo(tt),Nt=nt.projectionMatrix.elements,Rt=vt.projectionMatrix.elements,Vt=Nt[14]/(Nt[10]-1),ne=Nt[14]/(Nt[10]+1),Wt=(Nt[9]+1)/Nt[5],P=(Nt[9]-1)/Nt[5],He=(Nt[8]-1)/Nt[0],Ht=(Rt[8]+1)/Rt[0],Yt=Vt*He,Ct=Vt*Ht,oe=ut/(-He+Ht),It=oe*-He;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Nt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const A=Vt+oe,S=ne+oe,F=Yt-It,K=Ct+(ut-It),et=Wt*ne/S*A,q=P*ne/S*A;Y.projectionMatrix.makePerspective(F,K,et,q,A,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,vt=Y.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),x.near=D.near=R.near=nt,x.far=D.far=R.far=vt,(T!==x.near||V!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,V=x.far);const ut=Y.parent,Nt=x.cameras;dt(x,ut);for(let Rt=0;Rt<Nt.length;Rt++)dt(Nt[Rt],ut);Nt.length===2?W(x,R,D):x.projectionMatrix.copy(R.projectionMatrix),ft(Y,x,ut)};function ft(Y,nt,vt){vt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ca*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let St=null;function Kt(Y,nt){if(h=nt.getViewerPose(l||o),_=nt,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let ut=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let Rt=0;Rt<vt.length;Rt++){const Vt=vt[Rt];let ne=null;if(d!==null)ne=d.getViewport(Vt);else{const P=f.getViewSubImage(u,Vt);ne=P.viewport,Rt===0&&(t.setRenderTargetTextures(E,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(E))}let Wt=j[Rt];Wt===void 0&&(Wt=new je,Wt.layers.enable(Rt),Wt.viewport=new ue,j[Rt]=Wt),Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ne.x,ne.y,ne.width,ne.height),Rt===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(Wt)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Rt=f.getDepthInformation(vt[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,s.renderState)}}for(let vt=0;vt<y.length;vt++){const ut=b[vt],Nt=y[vt];ut!==null&&Nt!==void 0&&Nt.update(ut,nt,l||o)}St&&St(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const te=new wl;te.setAnimationLoop(Kt),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const Qn=new ln,Xm=new le;function Ym(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,bl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,E,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m),y=E.envMap,b=E.envMapRotation;y&&(p.envMap.value=y,Qn.copy(b),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),p.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Qn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,E,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const b=y.program;n.uniformBlockBinding(E,b)}function l(E,y){let b=s[E.id];b===void 0&&(_(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",p));const O=y.program;n.updateUBOMapping(E,O);const C=t.render.frame;r[E.id]!==C&&(u(E),r[E.id]=C)}function h(E){const y=f();E.__bindingPointIndex=y;const b=i.createBuffer(),O=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const y=s[E.id],b=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,R=b.length;C<R;C++){const D=Array.isArray(b[C])?b[C]:[b[C]];for(let j=0,x=D.length;j<x;j++){const T=D[j];if(d(T,C,j,O)===!0){const V=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let Z=0;Z<H.length;Z++){const z=H[Z],tt=g(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+X,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,b,O){const C=E.value,R=y+"_"+b;if(O[R]===void 0)return typeof C=="number"||typeof C=="boolean"?O[R]=C:O[R]=C.clone(),!0;{const D=O[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return O[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(E){const y=E.uniforms;let b=0;const O=16;for(let R=0,D=y.length;R<D;R++){const j=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,T=j.length;x<T;x++){const V=j[x],H=Array.isArray(V.value)?V.value:[V.value];for(let X=0,Z=H.length;X<Z;X++){const z=H[X],tt=g(z),W=b%O,dt=W%tt.boundary,ft=W+dt;b+=dt,ft!==0&&O-ft<tt.storage&&(b+=O-ft),V.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=tt.storage}}}const C=b%O;return C>0&&(b+=O-C),E.__size=b,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Km{constructor(t={}){const{canvas:e=Uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Hn,this.toneMappingExposure=1;const y=this;let b=!1,O=0,C=0,R=null,D=-1,j=null;const x=new ue,T=new ue;let V=null;const H=new Bt(0);let X=0,Z=e.width,z=e.height,tt=1,W=null,dt=null;const ft=new ue(0,0,Z,z),St=new ue(0,0,Z,z);let Kt=!1;const te=new Ea;let Y=!1,nt=!1;const vt=new le,ut=new le,Nt=new N,Rt=new ue,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Wt(){return R===null?tt:1}let P=n;function He(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ht,!1),P===null){const I="webgl2";if(P=He(I,M),P===null)throw He(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ht,Yt,Ct,oe,It,A,S,F,K,et,q,Mt,ot,pt,qt,it,mt,Pt,Lt,_t,Gt,Ut,re,L;function lt(){Ht=new Qu(P),Ht.init(),Ut=new Bm(P,Ht),Yt=new qu(P,Ht,t,Ut),Ct=new Dm(P),Yt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),oe=new np(P),It=new ym,A=new Fm(P,Ht,Ct,It,Yt,Ut,oe),S=new $u(y),F=new Ju(y),K=new cd(P),re=new Xu(P,K),et=new tp(P,K,oe,re),q=new sp(P,et,K,oe),Lt=new ip(P,Yt,A),it=new Ku(It),Mt=new xm(y,S,F,Ht,Yt,re,it),ot=new Ym(y,It),pt=new Mm,qt=new wm(Ht),Pt=new Wu(y,S,F,Ct,q,u,c),mt=new Nm(y,q,Yt),L=new qm(P,oe,Yt,Ct),_t=new Yu(P,Ht,oe),Gt=new ep(P,Ht,oe),oe.programs=Mt.programs,y.capabilities=Yt,y.extensions=Ht,y.properties=It,y.renderLists=pt,y.shadowMap=mt,y.state=Ct,y.info=oe}lt();const G=new Wm(y,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(Z,z,!1))},this.getSize=function(M){return M.set(Z,z)},this.setSize=function(M,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,z=I,e.width=Math.floor(M*tt),e.height=Math.floor(I*tt),B===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(Z*tt,z*tt).floor()},this.setDrawingBufferSize=function(M,I,B){Z=M,z=I,tt=B,e.width=Math.floor(M*B),e.height=Math.floor(I*B),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(ft)},this.setViewport=function(M,I,B,k){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,I,B,k),Ct.viewport(x.copy(ft).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(St)},this.setScissor=function(M,I,B,k){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,I,B,k),Ct.scissor(T.copy(St).multiplyScalar(tt).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(M){Ct.setScissorTest(Kt=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){dt=M},this.getClearColor=function(M){return M.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(M=!0,I=!0,B=!0){let k=0;if(M){let U=!1;if(R!==null){const st=R.texture.format;U=st===xa||st===va||st===ga}if(U){const st=R.texture.type,ct=st===An||st===ci||st===us||st===qi||st===ma||st===_a,gt=Pt.getClearColor(),xt=Pt.getClearAlpha(),At=gt.r,wt=gt.g,Et=gt.b;ct?(d[0]=At,d[1]=wt,d[2]=Et,d[3]=xt,P.clearBufferuiv(P.COLOR,0,d)):(_[0]=At,_[1]=wt,_[2]=Et,_[3]=xt,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}I&&(k|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),qt.dispose(),It.dispose(),S.dispose(),F.dispose(),q.dispose(),re.dispose(),L.dispose(),Mt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ca),G.removeEventListener("sessionend",Pa),qn.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=oe.autoReset,I=mt.enabled,B=mt.autoUpdate,k=mt.needsUpdate,U=mt.type;lt(),oe.autoReset=M,mt.enabled=I,mt.autoUpdate=B,mt.needsUpdate=k,mt.type=U}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xt(M){const I=M.target;I.removeEventListener("dispose",Xt),me(I)}function me(M){Ne(M),It.remove(M)}function Ne(M){const I=It.get(M).programs;I!==void 0&&(I.forEach(function(B){Mt.releaseProgram(B)}),M.isShaderMaterial&&Mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,B,k,U,st){I===null&&(I=Vt);const ct=U.isMesh&&U.matrixWorld.determinant()<0,gt=Vl(M,I,B,k,U);Ct.setMaterial(k,ct);let xt=B.index,At=1;if(k.wireframe===!0){if(xt=et.getWireframeAttribute(B),xt===void 0)return;At=2}const wt=B.drawRange,Et=B.attributes.position;let ee=wt.start*At,ae=(wt.start+wt.count)*At;st!==null&&(ee=Math.max(ee,st.start*At),ae=Math.min(ae,(st.start+st.count)*At)),xt!==null?(ee=Math.max(ee,0),ae=Math.min(ae,xt.count)):Et!=null&&(ee=Math.max(ee,0),ae=Math.min(ae,Et.count));const de=ae-ee;if(de<0||de===1/0)return;re.setup(U,k,gt,B,xt);let Ge,jt=_t;if(xt!==null&&(Ge=K.get(xt),jt=Gt,jt.setIndex(Ge)),U.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*Wt()),jt.setMode(P.LINES)):jt.setMode(P.TRIANGLES);else if(U.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*Wt()),U.isLineSegments?jt.setMode(P.LINES):U.isLineLoop?jt.setMode(P.LINE_LOOP):jt.setMode(P.LINE_STRIP)}else U.isPoints?jt.setMode(P.POINTS):U.isSprite&&jt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Tt=U._multiDrawStarts,Te=U._multiDrawCounts,Jt=U._multiDrawCount,tn=xt?K.get(xt).bytesPerElement:1,_i=It.get(k).currentProgram.getUniforms();for(let Ve=0;Ve<Jt;Ve++)_i.setValue(P,"_gl_DrawID",Ve),jt.render(Tt[Ve]/tn,Te[Ve])}else if(U.isInstancedMesh)jt.renderInstances(ee,de,U.count);else if(B.isInstancedBufferGeometry){const Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Te=Math.min(B.instanceCount,Tt);jt.renderInstances(ee,de,Te)}else jt.render(ee,de)};function $t(M,I,B){M.transparent===!0&&M.side===ke&&M.forceSinglePass===!1?(M.side=ze,M.needsUpdate=!0,Es(M,I,B),M.side=Vn,M.needsUpdate=!0,Es(M,I,B),M.side=ke):Es(M,I,B)}this.compile=function(M,I,B=null){B===null&&(B=M),p=qt.get(B),p.init(I),E.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==B&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let ct=0;ct<st.length;ct++){const gt=st[ct];$t(gt,B,U),k.add(gt)}else $t(st,B,U),k.add(st)}),E.pop(),p=null,k},this.compileAsync=function(M,I,B=null){const k=this.compile(M,I,B);return new Promise(U=>{function st(){if(k.forEach(function(ct){It.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){U(M);return}setTimeout(st,10)}Ht.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Ue=null;function mn(M){Ue&&Ue(M)}function Ca(){qn.stop()}function Pa(){qn.start()}const qn=new wl;qn.setAnimationLoop(mn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(M){Ue=M,G.setAnimationLoop(M),M===null?qn.stop():qn.start()},G.addEventListener("sessionstart",Ca),G.addEventListener("sessionend",Pa),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,R),p=qt.get(M,E.length),p.init(I),E.push(p),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),te.setFromProjectionMatrix(ut),nt=this.localClippingEnabled,Y=it.init(this.clippingPlanes,nt),g=pt.get(M,m.length),g.init(),m.push(g),G.enabled===!0&&G.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&Ar(st,I,-1/0,y.sortObjects)}Ar(M,I,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,dt),ne=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ne&&Pt.addToRenderList(g,M),this.info.render.frame++,Y===!0&&it.beginShadows();const B=p.state.shadowsArray;mt.render(B,M,I),Y===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,U=g.transmissive;if(p.setupLights(),I.isArrayCamera){const st=I.cameras;if(U.length>0)for(let ct=0,gt=st.length;ct<gt;ct++){const xt=st[ct];Ia(k,U,M,xt)}ne&&Pt.render(M);for(let ct=0,gt=st.length;ct<gt;ct++){const xt=st[ct];La(g,M,xt,xt.viewport)}}else U.length>0&&Ia(k,U,M,I),ne&&Pt.render(M),La(g,M,I);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(y,M,I),re.resetDefaultState(),D=-1,j=null,E.pop(),E.length>0?(p=E[E.length-1],Y===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ar(M,I,B,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||te.intersectsSprite(M)){k&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);const ct=q.update(M),gt=M.material;gt.visible&&g.push(M,ct,gt,B,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||te.intersectsObject(M))){const ct=q.update(M),gt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Rt.copy(ct.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(gt)){const xt=ct.groups;for(let At=0,wt=xt.length;At<wt;At++){const Et=xt[At],ee=gt[Et.materialIndex];ee&&ee.visible&&g.push(M,ct,ee,B,Rt.z,Et)}}else gt.visible&&g.push(M,ct,gt,B,Rt.z,null)}}const st=M.children;for(let ct=0,gt=st.length;ct<gt;ct++)Ar(st[ct],I,B,k)}function La(M,I,B,k){const U=M.opaque,st=M.transmissive,ct=M.transparent;p.setupLightsView(B),Y===!0&&it.setGlobalState(y.clippingPlanes,B),k&&Ct.viewport(x.copy(k)),U.length>0&&Ms(U,I,B),st.length>0&&Ms(st,I,B),ct.length>0&&Ms(ct,I,B),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Ia(M,I,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new li(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?xs:An,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const st=p.state.transmissionRenderTarget[k.id],ct=k.viewport||x;st.setSize(ct.z,ct.w);const gt=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(H),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),ne&&Pt.render(B);const xt=y.toneMapping;y.toneMapping=Hn;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Y===!0&&it.setGlobalState(y.clippingPlanes,k),Ms(M,B,k),A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Et=0,ee=I.length;Et<ee;Et++){const ae=I[Et],de=ae.object,Ge=ae.geometry,jt=ae.material,Tt=ae.group;if(jt.side===ke&&de.layers.test(k.layers)){const Te=jt.side;jt.side=ze,jt.needsUpdate=!0,Na(de,B,k,Ge,jt,Tt),jt.side=Te,jt.needsUpdate=!0,wt=!0}}wt===!0&&(A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st))}y.setRenderTarget(gt),y.setClearColor(H,X),At!==void 0&&(k.viewport=At),y.toneMapping=xt}function Ms(M,I,B){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,st=M.length;U<st;U++){const ct=M[U],gt=ct.object,xt=ct.geometry,At=k===null?ct.material:k,wt=ct.group;gt.layers.test(B.layers)&&Na(gt,I,B,xt,At,wt)}}function Na(M,I,B,k,U,st){M.onBeforeRender(y,I,B,k,U,st),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,I,B,k,M,st),U.transparent===!0&&U.side===ke&&U.forceSinglePass===!1?(U.side=ze,U.needsUpdate=!0,y.renderBufferDirect(B,I,k,U,M,st),U.side=Vn,U.needsUpdate=!0,y.renderBufferDirect(B,I,k,U,M,st),U.side=ke):y.renderBufferDirect(B,I,k,U,M,st),M.onAfterRender(y,I,B,k,U,st)}function Es(M,I,B){I.isScene!==!0&&(I=Vt);const k=It.get(M),U=p.state.lights,st=p.state.shadowsArray,ct=U.state.version,gt=Mt.getParameters(M,U.state,st,I,B),xt=Mt.getProgramCacheKey(gt);let At=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?F:S).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,At===void 0&&(M.addEventListener("dispose",Xt),At=new Map,k.programs=At);let wt=At.get(xt);if(wt!==void 0){if(k.currentProgram===wt&&k.lightsStateVersion===ct)return Da(M,gt),wt}else gt.uniforms=Mt.getUniforms(M),M.onBeforeCompile(gt,y),wt=Mt.acquireProgram(gt,xt),At.set(xt,wt),k.uniforms=gt.uniforms;const Et=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=it.uniform),Da(M,gt),k.needsLights=Xl(M),k.lightsStateVersion=ct,k.needsLights&&(Et.ambientLightColor.value=U.state.ambient,Et.lightProbe.value=U.state.probe,Et.directionalLights.value=U.state.directional,Et.directionalLightShadows.value=U.state.directionalShadow,Et.spotLights.value=U.state.spot,Et.spotLightShadows.value=U.state.spotShadow,Et.rectAreaLights.value=U.state.rectArea,Et.ltc_1.value=U.state.rectAreaLTC1,Et.ltc_2.value=U.state.rectAreaLTC2,Et.pointLights.value=U.state.point,Et.pointLightShadows.value=U.state.pointShadow,Et.hemisphereLights.value=U.state.hemi,Et.directionalShadowMap.value=U.state.directionalShadowMap,Et.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Et.spotShadowMap.value=U.state.spotShadowMap,Et.spotLightMatrix.value=U.state.spotLightMatrix,Et.spotLightMap.value=U.state.spotLightMap,Et.pointShadowMap.value=U.state.pointShadowMap,Et.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=wt,k.uniformsList=null,wt}function Ua(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=dr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Da(M,I){const B=It.get(M);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Vl(M,I,B,k,U){I.isScene!==!0&&(I=Vt),A.resetTextureUnits();const st=I.fog,ct=k.isMeshStandardMaterial?I.environment:null,gt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xn,xt=(k.isMeshStandardMaterial?F:S).get(k.envMap||ct),At=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,wt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!B.morphAttributes.position,ee=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color;let de=Hn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=y.toneMapping);const Ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,jt=Ge!==void 0?Ge.length:0,Tt=It.get(k),Te=p.state.lights;if(Y===!0&&(nt===!0||M!==j)){const Ke=M===j&&k.id===D;it.setState(k,M,Ke)}let Jt=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Te.state.version||Tt.outputColorSpace!==gt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==xt||k.fog===!0&&Tt.fog!==st||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==it.numPlanes||Tt.numIntersection!==it.numIntersection)||Tt.vertexAlphas!==At||Tt.vertexTangents!==wt||Tt.morphTargets!==Et||Tt.morphNormals!==ee||Tt.morphColors!==ae||Tt.toneMapping!==de||Tt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Tt.__version=k.version);let tn=Tt.currentProgram;Jt===!0&&(tn=Es(k,I,U));let _i=!1,Ve=!1,Rr=!1;const pe=tn.getUniforms(),wn=Tt.uniforms;if(Ct.useProgram(tn.program)&&(_i=!0,Ve=!0,Rr=!0),k.id!==D&&(D=k.id,Ve=!0),_i||j!==M){Yt.reverseDepthBuffer?(vt.copy(M.projectionMatrix),Oh(vt),Fh(vt),pe.setValue(P,"projectionMatrix",vt)):pe.setValue(P,"projectionMatrix",M.projectionMatrix),pe.setValue(P,"viewMatrix",M.matrixWorldInverse);const Ke=pe.map.cameraPosition;Ke!==void 0&&Ke.setValue(P,Nt.setFromMatrixPosition(M.matrixWorld)),Yt.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pe.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Ve=!0,Rr=!0)}if(U.isSkinnedMesh){pe.setOptional(P,U,"bindMatrix"),pe.setOptional(P,U,"bindMatrixInverse");const Ke=U.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),pe.setValue(P,"boneTexture",Ke.boneTexture,A))}U.isBatchedMesh&&(pe.setOptional(P,U,"batchingTexture"),pe.setValue(P,"batchingTexture",U._matricesTexture,A),pe.setOptional(P,U,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",U._indirectTexture,A),pe.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",U._colorsTexture,A));const wr=B.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&Lt.update(U,B,tn),(Ve||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,pe.setValue(P,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(wn.envMap.value=xt,wn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(wn.envMapIntensity.value=I.environmentIntensity),Ve&&(pe.setValue(P,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&Wl(wn,Rr),st&&k.fog===!0&&ot.refreshFogUniforms(wn,st),ot.refreshMaterialUniforms(wn,k,tt,z,p.state.transmissionRenderTarget[M.id]),dr.upload(P,Ua(Tt),wn,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(dr.upload(P,Ua(Tt),wn,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pe.setValue(P,"center",U.center),pe.setValue(P,"modelViewMatrix",U.modelViewMatrix),pe.setValue(P,"normalMatrix",U.normalMatrix),pe.setValue(P,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ke=k.uniformsGroups;for(let Cr=0,Yl=Ke.length;Cr<Yl;Cr++){const Oa=Ke[Cr];L.update(Oa,tn),L.bind(Oa,tn)}}return tn}function Wl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Xl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,I,B){It.get(M.texture).__webglTexture=I,It.get(M.depthTexture).__webglTexture=B;const k=It.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const B=It.get(M);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,B=0){R=M,O=I,C=B;let k=!0,U=null,st=!1,ct=!1;if(M){const xt=It.get(M);if(xt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(xt.__hasExternalTextures)A.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Et=M.depthTexture;if(xt.__boundDepthTexture!==Et){if(Et!==null&&It.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);const wt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?U=wt[I][B]:U=wt[I],st=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?U=It.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[B]:U=wt,x.copy(M.viewport),T.copy(M.scissor),V=M.scissorTest}else x.copy(ft).multiplyScalar(tt).floor(),T.copy(St).multiplyScalar(tt).floor(),V=Kt;if(Ct.bindFramebuffer(P.FRAMEBUFFER,U)&&k&&Ct.drawBuffers(M,U),Ct.viewport(x),Ct.scissor(T),Ct.setScissorTest(V),st){const xt=It.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,xt.__webglTexture,B)}else if(ct){const xt=It.get(M.texture),At=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,At)}D=-1},this.readRenderTargetPixels=function(M,I,B,k,U,st,ct){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){Ct.bindFramebuffer(P.FRAMEBUFFER,gt);try{const xt=M.texture,At=xt.format,wt=xt.type;if(!Yt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&B>=0&&B<=M.height-U&&P.readPixels(I,B,k,U,Ut.convert(At),Ut.convert(wt),st)}finally{const xt=R!==null?It.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(P.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(M,I,B,k,U,st,ct){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const xt=M.texture,At=xt.format,wt=xt.type;if(!Yt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-k&&B>=0&&B<=M.height-U){Ct.bindFramebuffer(P.FRAMEBUFFER,gt);const Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,st.byteLength,P.STREAM_READ),P.readPixels(I,B,k,U,Ut.convert(At),Ut.convert(wt),0);const ee=R!==null?It.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(P.FRAMEBUFFER,ee);const ae=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Dh(P,ae,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,st),P.deleteBuffer(Et),P.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,B=0){M.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(M.image.width*k),st=Math.floor(M.image.height*k),ct=I!==null?I.x:0,gt=I!==null?I.y:0;A.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ct,gt,U,st),Ct.unbindTexture()},this.copyTextureToTexture=function(M,I,B=null,k=null,U=0){M.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let st,ct,gt,xt,At,wt;B!==null?(st=B.max.x-B.min.x,ct=B.max.y-B.min.y,gt=B.min.x,xt=B.min.y):(st=M.image.width,ct=M.image.height,gt=0,xt=0),k!==null?(At=k.x,wt=k.y):(At=0,wt=0);const Et=Ut.convert(I.format),ee=Ut.convert(I.type);A.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ae=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ge=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),Tt=P.getParameter(P.UNPACK_SKIP_IMAGES),Te=M.isCompressedTexture?M.mipmaps[U]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,xt),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,At,wt,st,ct,Et,ee,Te.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,At,wt,Te.width,Te.height,Et,Te.data):P.texSubImage2D(P.TEXTURE_2D,U,At,wt,st,ct,Et,ee,Te),P.pixelStorei(P.UNPACK_ROW_LENGTH,ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(M,I,B=null,k=null,U=0){M.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0);let st,ct,gt,xt,At,wt,Et,ee,ae;const de=M.isCompressedTexture?M.mipmaps[U]:M.image;B!==null?(st=B.max.x-B.min.x,ct=B.max.y-B.min.y,gt=B.max.z-B.min.z,xt=B.min.x,At=B.min.y,wt=B.min.z):(st=de.width,ct=de.height,gt=de.depth,xt=0,At=0,wt=0),k!==null?(Et=k.x,ee=k.y,ae=k.z):(Et=0,ee=0,ae=0);const Ge=Ut.convert(I.format),jt=Ut.convert(I.type);let Tt;if(I.isData3DTexture)A.setTexture3D(I,0),Tt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Tt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Te=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),_i=P.getParameter(P.UNPACK_SKIP_ROWS),Ve=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Tt,U,Et,ee,ae,st,ct,gt,Ge,jt,de.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,U,Et,ee,ae,st,ct,gt,Ge,de.data):P.texSubImage3D(Tt,U,Et,ee,ae,st,ct,gt,Ge,jt,de),P.pixelStorei(P.UNPACK_ROW_LENGTH,Te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,_i),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve),U===0&&I.generateMipmaps&&P.generateMipmap(Tt),Ct.unbindTexture()},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ct.unbindTexture()},this.resetState=function(){O=0,C=0,R=null,Ct.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ya?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Mr?"display-p3":"srgb"}}class ms{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new ms(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $m extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=aa,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new N;class gr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ba extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const is=new N,Ii=new N,Ni=new N,Ui=new zt,ss=new zt,Dl=new le,Xs=new N,rs=new N,Ys=new N,Pc=new zt,oo=new zt,Lc=new zt;class Ol extends ve{constructor(t=new ba){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new Qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zm(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new gr(n,3,0,!1)),Li.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),Dl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ni.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;qs(Xs.set(-.5,-.5,0),Ni,o,Ii,s,r),qs(rs.set(.5,-.5,0),Ni,o,Ii,s,r),qs(Ys.set(.5,.5,0),Ni,o,Ii,s,r),Pc.set(0,0),oo.set(1,0),Lc.set(1,1);let a=t.ray.intersectTriangle(Xs,rs,Ys,!1,is);if(a===null&&(qs(rs.set(-.5,.5,0),Ni,o,Ii,s,r),oo.set(0,1),a=t.ray.intersectTriangle(Xs,Ys,rs,!1,is),a===null))return;const c=t.ray.origin.distanceTo(is);c<t.near||c>t.far||e.push({distance:c,point:is.clone(),uv:qe.getInterpolation(is,Xs,rs,Ys,Pc,oo,Lc,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qs(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ss.x=r*Ui.x-s*Ui.y,ss.y=s*Ui.x+r*Ui.y):ss.copy(Ui),i.copy(t),i.x+=ss.x,i.y+=ss.y,i.applyMatrix4(Dl)}class Fl extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vr=new N,xr=new N,Ic=new le,os=new Sa,Ks=new Er,ao=new N,Nc=new N;class jm extends ve{constructor(t=new Qe,e=new Fl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vr.fromBufferAttribute(e,s-1),xr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vr.distanceTo(xr);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;Ic.copy(s).invert(),os.copy(t.ray).applyMatrix4(Ic);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=l){const m=h.getX(g),E=h.getX(g+1),y=$s(this,t,os,c,m,E);y&&e.push(y)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(d),m=$s(this,t,os,c,g,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=l){const m=$s(this,t,os,c,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=$s(this,t,os,c,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $s(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(vr.fromBufferAttribute(o,s),xr.fromBufferAttribute(o,r),e.distanceSqToSegment(vr,xr,ao,Nc)>n)return;ao.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ao);if(!(c<t.near||c>t.far))return{distance:c,point:Nc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Uc=new N,Dc=new N;class Jm extends jm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Uc.fromBufferAttribute(e,s),Dc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uc.distanceTo(Dc);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bl extends Ce{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Zs=new N,js=new N,co=new N,Js=new qe;class Qm extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(lr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:p,c:m}=Js;if(g.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Js.getNormal(co),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const y=(E+1)%3,b=f[E],O=f[y],C=Js[h[E]],R=Js[h[y]],D=`${b}_${O}`,j=`${O}_${b}`;j in u&&u[j]?(co.dot(u[j].normal)<=r&&(d.push(C.x,C.y,C.z),d.push(R.x,R.y,R.z)),u[j]=null):D in u||(u[D]={index0:l[E],index1:l[y],normal:co.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:p}=u[_];Zs.fromBufferAttribute(a,g),js.fromBufferAttribute(a,p),d.push(Zs.x,Zs.y,Zs.z),d.push(js.x,js.y,js.z)}this.setAttribute("position",new Pe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Aa extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new N,u=new N,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const E=[],y=m/n;let b=0;m===0&&o===0?b=.5/e:m===n&&c===Math.PI&&(b=-.5/e);for(let O=0;O<=e;O++){const C=O/e;f.x=-t*Math.cos(s+C*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+C*r)*Math.sin(o+y*a),_.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),p.push(C+b,1-y),E.push(l++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){const y=h[m][E+1],b=h[m][E],O=h[m+1][E],C=h[m+1][E+1];(m!==0||o>0)&&d.push(y,b,C),(m!==n-1||c<Math.PI)&&d.push(b,O,C)}this.setIndex(d),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yr extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Oc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class t0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){const d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const e0=new t0;class Ra{constructor(t){this.manager=t!==void 0?t:e0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";class n0 extends Ra{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Oc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ps("img");function c(){h(),Oc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class i0 extends Ra{constructor(t){super(t)}load(t,e,n,s){const r=new Ce,o=new n0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class kl extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const lo=new le,Fc=new N,Bc=new N;class s0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class r0 extends s0{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class o0 extends kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new r0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class a0 extends kl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class c0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=kc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function kc(){return performance.now()}const zc=new le;class l0{constructor(t,e,n=0,s=1/0){this.ray=new Sa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(t,e=!0,n=[]){return ha(t,this,n,e),n.sort(Hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ha(t[s],this,n,e);return n.sort(Hc),n}}function Hc(i,t){return i.distance-t.distance}function ha(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ha(r[o],t,e,!0)}}class h0 extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);const kt=1536,Dt=1536,he=32,Fe=16,ho=kt/Fe,fo=Dt/Fe,wa=14,Be=9,d0=600,rn=.6,f0=55,u0=30,p0=5,ds=20,m0=8,_0=5,g0=16,dn=1/g0;function uo(i,t){return{u:i*dn,v:1-(t+1)*dn}}class Zt{constructor({id:t,name:e,color:n,hardness:s,minTier:r=0,dropItem:o=null,dropCount:a=1,isTransparent:c=!1,isSolid:l=!0,isFarmland:h=!1,isHazard:f=!1,atlasCol:u=0,atlasRow:d=0,atlasTop:_=null,atlasBottom:g=null}){this.id=t,this.name=e,this.color=n,this.hardness=s,this.minTier=r,this.dropItem=o,this.dropCount=a,this.isTransparent=c,this.isSolid=l,this.isFarmland=h,this.isHazard=f,this.uvSide=uo(u,d),this.uvTop=_?uo(_[0],_[1]):this.uvSide,this.uvBottom=g?uo(g[0],g[1]):this.uvSide}}const v={AIR:0,GRASS:1,DIRT:2,STONE:3,COBBLESTONE:4,WOOD_LOG:5,LEAVES:6,SAND:7,IRON_ORE:8,CRYSTAL_ORE:9,FARMLAND:10,CRAFTING_TABLE:11,FORGE:12,ALTAR:13,WATER:14,GRAVEL:15,PLANKS:16,GLASS:17,CHEST:18,TORCH:19,CAMPFIRE:20,BED:21,NETHERRACK:22,LAVA:23,GLOWSTONE:24,OBSIDIAN:25,PORTAL:26,CORAL:27,KELP:28,TALL_GRASS:29,FLOWER:30},di={[v.AIR]:new Zt({id:v.AIR,name:"air",color:"#000000",hardness:0,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:15}),[v.GRASS]:new Zt({id:v.GRASS,name:"grass",color:"#4a8f3f",hardness:.5,dropItem:"dirt",atlasCol:3,atlasRow:0,atlasTop:[0,0],atlasBottom:[2,0]}),[v.DIRT]:new Zt({id:v.DIRT,name:"dirt",color:"#8b6914",hardness:.5,atlasCol:2,atlasRow:0}),[v.STONE]:new Zt({id:v.STONE,name:"stone",color:"#888888",hardness:1.5,minTier:1,dropItem:"cobblestone",atlasCol:1,atlasRow:0}),[v.COBBLESTONE]:new Zt({id:v.COBBLESTONE,name:"cobblestone",color:"#6b6b6b",hardness:2,minTier:1,atlasCol:0,atlasRow:1}),[v.WOOD_LOG]:new Zt({id:v.WOOD_LOG,name:"wood_log",color:"#6b4423",hardness:1,atlasCol:4,atlasRow:1,atlasTop:[5,1],atlasBottom:[5,1]}),[v.LEAVES]:new Zt({id:v.LEAVES,name:"leaves",color:"#2d6e1e",hardness:.2,dropItem:null,isTransparent:!0,atlasCol:4,atlasRow:3}),[v.SAND]:new Zt({id:v.SAND,name:"sand",color:"#d4c27a",hardness:.5,atlasCol:2,atlasRow:1}),[v.IRON_ORE]:new Zt({id:v.IRON_ORE,name:"iron_ore",color:"#7a7a60",hardness:3,minTier:2,dropItem:"iron_ore",atlasCol:1,atlasRow:2}),[v.CRYSTAL_ORE]:new Zt({id:v.CRYSTAL_ORE,name:"crystal_ore",color:"#4a2080",hardness:4.5,minTier:3,dropItem:"crystal_shard",atlasCol:2,atlasRow:2}),[v.FARMLAND]:new Zt({id:v.FARMLAND,name:"farmland",color:"#4a2e08",hardness:.5,dropItem:"dirt",isFarmland:!0,atlasCol:6,atlasRow:0}),[v.CRAFTING_TABLE]:new Zt({id:v.CRAFTING_TABLE,name:"crafting_table",color:"#8b4513",hardness:1,atlasCol:11,atlasRow:2,atlasTop:[11,2],atlasBottom:[4,0]}),[v.FORGE]:new Zt({id:v.FORGE,name:"forge",color:"#555555",hardness:1.5,minTier:1,atlasCol:13,atlasRow:2}),[v.ALTAR]:new Zt({id:v.ALTAR,name:"altar",color:"#200030",hardness:999,atlasCol:14,atlasRow:2}),[v.WATER]:new Zt({id:v.WATER,name:"water",color:"#2255aa",hardness:999,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:12}),[v.GRAVEL]:new Zt({id:v.GRAVEL,name:"gravel",color:"#888877",hardness:.6,atlasCol:3,atlasRow:1}),[v.PLANKS]:new Zt({id:v.PLANKS,name:"planks",color:"#c8a44a",hardness:.75,atlasCol:4,atlasRow:0}),[v.GLASS]:new Zt({id:v.GLASS,name:"glass",color:"#aaddff",hardness:.3,isTransparent:!0,atlasCol:1,atlasRow:3}),[v.CHEST]:new Zt({id:v.CHEST,name:"chest",color:"#8b6914",hardness:.75,atlasCol:9,atlasRow:1}),[v.TORCH]:new Zt({id:v.TORCH,name:"torch",color:"#ffaa00",hardness:0,isSolid:!1,isTransparent:!0,atlasCol:0,atlasRow:5}),[v.CAMPFIRE]:new Zt({id:v.CAMPFIRE,name:"campfire",color:"#cc4400",hardness:.5,atlasCol:7,atlasRow:5}),[v.BED]:new Zt({id:v.BED,name:"bed",color:"#a02020",hardness:.3,atlasCol:6,atlasRow:1,atlasTop:[7,1]}),[v.NETHERRACK]:new Zt({id:v.NETHERRACK,name:"netherrack",color:"#5a2a20",hardness:1,minTier:1,atlasCol:3,atlasRow:2}),[v.LAVA]:new Zt({id:v.LAVA,name:"lava",color:"#e8480a",hardness:999,isTransparent:!0,isSolid:!0,isHazard:!0,atlasCol:4,atlasRow:2}),[v.GLOWSTONE]:new Zt({id:v.GLOWSTONE,name:"glowstone",color:"#f0d878",hardness:.5,atlasCol:5,atlasRow:2}),[v.OBSIDIAN]:new Zt({id:v.OBSIDIAN,name:"obsidian",color:"#1a0e28",hardness:6,minTier:4,atlasCol:6,atlasRow:2}),[v.PORTAL]:new Zt({id:v.PORTAL,name:"nether_portal",color:"#9020e0",hardness:999,isTransparent:!0,isSolid:!0,atlasCol:7,atlasRow:2}),[v.CORAL]:new Zt({id:v.CORAL,name:"coral",color:"#ff6a8a",hardness:.2,isTransparent:!0,isSolid:!1,atlasCol:8,atlasRow:3}),[v.KELP]:new Zt({id:v.KELP,name:"kelp",color:"#2a8a4a",hardness:.2,isTransparent:!0,isSolid:!1,atlasCol:9,atlasRow:3}),[v.TALL_GRASS]:new Zt({id:v.TALL_GRASS,name:"tall_grass",color:"#4a8f3f",hardness:.1,dropItem:null,isTransparent:!0,isSolid:!1,atlasCol:10,atlasRow:3}),[v.FLOWER]:new Zt({id:v.FLOWER,name:"flower",color:"#e05070",hardness:.1,dropItem:null,isTransparent:!0,isSolid:!1,atlasCol:11,atlasRow:3})},v0={};for(const i of Object.values(di))v0[i.name]=i;class Gc{constructor(){this.data=new Uint8Array(kt*he*Dt),this.data.fill(v.AIR)}_idx(t,e,n){return t*he*Dt+e*Dt+n}inBounds(t,e,n){return t>=0&&t<kt&&e>=0&&e<he&&n>=0&&n<Dt}get(t,e,n){return this.inBounds(t,e,n)?this.data[this._idx(t,e,n)]:v.AIR}set(t,e,n,s){this.inBounds(t,e,n)&&(this.data[this._idx(t,e,n)]=s)}isSolid(t,e,n){if(!this.inBounds(t,e,n))return!1;const s=this.get(t,e,n);return s!==v.AIR&&s!==v.WATER&&s!==v.LEAVES&&s!==v.LAVA&&s!==v.TALL_GRASS&&s!==v.FLOWER&&s!==v.CORAL&&s!==v.KELP}surfaceY(t,e){for(let n=he-1;n>=0;n--)if(this.get(t,n,e)!==v.AIR)return n;return-1}serialize(){const t=this.data,e=[];let n=0;for(;n<t.length;){const s=t[n];let r=1;for(;n+r<t.length&&t[n+r]===s;)r++;e.push(s,r),n+=r}return e}deserialize(t){const e=kt*he*Dt;if(t.length===e){this.data=new Uint8Array(t);return}const n=new Uint8Array(e);let s=0;for(let r=0;r<t.length;r+=2){const o=t[r],a=t[r+1];n.fill(o,s,s+a),s+=a}this.data=n}}const x0=[{dir:[0,0,-1],normal:[0,0,-1],uvKey:"uvSide"},{dir:[0,0,1],normal:[0,0,1],uvKey:"uvSide"},{dir:[-1,0,0],normal:[-1,0,0],uvKey:"uvSide"},{dir:[1,0,0],normal:[1,0,0],uvKey:"uvSide"},{dir:[0,1,0],normal:[0,1,0],uvKey:"uvTop"},{dir:[0,-1,0],normal:[0,-1,0],uvKey:"uvBottom"}],y0=[[[0,0,0],[1,0,0],[1,1,0],[0,1,0]],[[1,0,1],[0,0,1],[0,1,1],[1,1,1]],[[0,0,1],[0,0,0],[0,1,0],[0,1,1]],[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],[[0,1,0],[1,1,0],[1,1,1],[0,1,1]],[[0,0,1],[1,0,1],[1,0,0],[0,0,0]]],da=new Set([v.WATER]),S0=new Set([v.TALL_GRASS,v.FLOWER]),M0=[[[0,0,0],[1,0,1],[1,1,1],[0,1,0]],[[1,0,0],[0,0,1],[0,1,1],[1,1,0]]];function Vc(i,t,e,n){const s=[],r=[],o=[],a=[];let c=0;const l=t*Fe,h=e*Fe;for(let u=0;u<Fe;u++){const d=l+u;for(let _=0;_<he;_++)for(let g=0;g<Fe;g++){const p=h+g,m=i.get(d,_,p);if(m===v.AIR||!n(m))continue;const E=di[m];if(!(!E||!E.isSolid&&!E.isTransparent)){if(S0.has(m)){const y=E.uvSide,b=[[y.u,y.v],[y.u+dn,y.v],[y.u+dn,y.v+dn],[y.u,y.v+dn]];for(const O of M0){const C=c;for(let R=0;R<4;R++){const D=O[R];s.push(u+D[0],_+D[1],g+D[2]),r.push(0,1,0),o.push(b[R][0],b[R][1])}a.push(C,C+1,C+2,C,C+2,C+3),c+=4}continue}for(let y=0;y<6;y++){const b=x0[y],O=d+b.dir[0],C=_+b.dir[1],R=p+b.dir[2],D=i.get(O,C,R),j=di[D];if(da.has(m)&&D===m||!(!j||!j.isSolid||j.isTransparent))continue;const T=E[b.uvKey],V=[[T.u,T.v],[T.u+dn,T.v],[T.u+dn,T.v+dn],[T.u,T.v+dn]],H=y0[y],X=c;for(let Z=0;Z<4;Z++){const z=H[Z];s.push(u+z[0],_+z[1],g+z[2]),r.push(...b.normal),o.push(V[Z][0],V[Z][1])}a.push(X,X+1,X+2,X,X+2,X+3),c+=4}}}}if(c===0)return null;const f=new Qe;return f.setAttribute("position",new Pe(s,3)),f.setAttribute("normal",new Pe(r,3)),f.setAttribute("uv",new Pe(o,2)),f.setIndex(a),f.computeBoundingBox(),f}class Wc{constructor(t,e,n,s,r){this.cx=t,this.cz=e,this.worldData=n,this.material=s,this.liquidMaterial=r,this.mesh=null,this.liquidMesh=null,this.build()}build(){var r,o;this.mesh&&(this.mesh.geometry.dispose(),(r=this.mesh.parent)==null||r.remove(this.mesh)),this.liquidMesh&&(this.liquidMesh.geometry.dispose(),(o=this.liquidMesh.parent)==null||o.remove(this.liquidMesh)),this.mesh=null,this.liquidMesh=null;const t=this.cx*Fe,e=this.cz*Fe,n=Vc(this.worldData,this.cx,this.cz,a=>!da.has(a));n&&(this.mesh=new Ee(n,this.material),this.mesh.position.set(t,0,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0);const s=Vc(this.worldData,this.cx,this.cz,a=>da.has(a));s&&(this.liquidMesh=new Ee(s,this.liquidMaterial),this.liquidMesh.position.set(t,0,e),this.liquidMesh.receiveShadow=!0)}dispose(){var t,e;this.mesh&&(this.mesh.geometry.dispose(),(t=this.mesh.parent)==null||t.remove(this.mesh),this.mesh=null),this.liquidMesh&&(this.liquidMesh.geometry.dispose(),(e=this.liquidMesh.parent)==null||e.remove(this.liquidMesh),this.liquidMesh=null)}}class Xc{constructor(t,e,n){this.scene=t,this.worldData=e;const s=new yr({map:n,alphaTest:.1,side:ke});this.material=s,this.liquidMaterial=new yr({map:n,transparent:!0,depthWrite:!1,side:ke}),this.chunks=new Map,this.group=new Bn,this.scene.add(this.group),this._buildAll()}_buildAll(){for(let t=0;t<ho;t++)for(let e=0;e<fo;e++)this._buildChunk(t,e)}_buildChunk(t,e){const n=`${t},${e}`,s=this.chunks.get(n);s&&s.dispose();const r=new Wc(t,e,this.worldData,this.material,this.liquidMaterial);this.chunks.set(n,r),r.mesh&&this.group.add(r.mesh),r.liquidMesh&&this.group.add(r.liquidMesh)}rebuildChunk(t,e){if(t<0||t>=ho||e<0||e>=fo)return;const n=`${t},${e}`,s=this.chunks.get(n);s!=null&&s.mesh&&this.group.remove(s.mesh),s!=null&&s.liquidMesh&&this.group.remove(s.liquidMesh),this._buildChunk(t,e);const r=[[t-1,e],[t+1,e],[t,e-1],[t,e+1]];for(const[o,a]of r){if(o<0||o>=ho||a<0||a>=fo)continue;const c=`${o},${a}`,l=this.chunks.get(c);l!=null&&l.mesh&&this.group.remove(l.mesh),l!=null&&l.liquidMesh&&this.group.remove(l.liquidMesh);const h=new Wc(o,a,this.worldData,this.material,this.liquidMaterial);this.chunks.set(c,h),h.mesh&&this.group.add(h.mesh),h.liquidMesh&&this.group.add(h.liquidMesh)}}get allMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}}const $=8,kn=4;function zi(i,t){let e=Math.imul(i*1664525+t,22695477)+1013904223;return e^=e>>>16,e=Math.imul(e,73244475),e^=e>>>16,(e>>>0)/4294967295}function se(i,t,e){const n=Math.floor(i/e),s=Math.floor(t/e),r=i/e-n,o=t/e-s,a=r*r*(3-2*r),c=o*o*(3-2*o);return zi(n,s)*(1-a)*(1-c)+zi(n+1,s)*a*(1-c)+zi(n,s+1)*(1-a)*c+zi(n+1,s+1)*a*c}function Yc(i,t,e=4,n=55){let s=0,r=1,o=1,a=0;for(let c=0;c<e;c++)s+=se(i*o,t*o,n)*r,a+=r,r*=.5,o*=2.1;return s/a}function ji(i,t){const e=kt/2,n=Dt/2,s=(i-e)/(kt*.44),r=(t-n)/(Dt*.44),o=se(i,t,52)*.2-.1;return Math.sqrt(s*s+r*r)+o}function E0(i){A0(i),R0(i),w0(i),C0(i),B0(i),P0(i),L0(i),I0(i),N0(i),U0(i),W0(i),D0(i),O0(i),k0(i),F0(i),z0(i),H0(i),G0(i),V0(i),X0(i),Y0(i),q0(i),K0(i),$0(i),Z0(i),j0(i),J0(i),Q0(i),t_(i),e_(i),b0(i),T0(i)}function T0(i){for(let t=0;t<kt;t++)for(let e=0;e<Dt;e++){const n=i.surfaceY(t,e);if(n<0||n+1>=he||i.get(t,n,e)!==v.GRASS||i.get(t,n+1,e)!==v.AIR)continue;const s=se(t*3,e*3,9);s>.94?i.set(t,n+1,e,v.FLOWER):s>.82&&i.set(t,n+1,e,v.TALL_GRASS)}}function b0(i){for(let t=0;t<kt;t++)for(let e=0;e<Dt;e++){const n=ji(t,e);if(n<=.92)continue;const s=Math.min(1,(n-.92)/.5),r=se(t,e,24)*2-1,o=Math.max(1,Math.min(Be-2,Math.round(Be-3-s*6+r)));for(let c=0;c<=o;c++)i.set(t,c,e,v.STONE);const a=s<.4;i.set(t,o,e,a?v.SAND:v.GRAVEL);for(let c=o+1;c<=Be;c++)i.set(t,c,e,v.WATER);if(a&&se(t*2,e*2,10)>.62){const l=zi(t,e);if(l>.55&&o+1<=Be)i.set(t,o+1,e,v.CORAL),l>.8&&o+2<=Be&&i.set(t,o+2,e,v.CORAL);else if(l>.35){const h=2+Math.floor(zi(t+1,e+1)*3);for(let f=1;f<=h&&o+f<=Be;f++)i.set(t,o+f,e,v.KELP)}}}}function A0(i){for(let t=0;t<kt;t++)for(let e=0;e<Dt;e++){const n=ji(t,e);if(n>.92)continue;const s=Math.floor(wa-2-n*n*5);for(let r=0;r<=Math.min(s,he-1);r++)i.set(t,r,e,v.STONE)}}function R0(i){for(let t=0;t<kt;t++)for(let e=0;e<Dt;e++){const n=ji(t,e);if(n>.9)continue;const s=Yc(t,e,4,58)*4,r=Yc(t+300,e+300,3,24)*1.5,o=se(t,e,12)*.6,a=Math.max(0,1-n*1.3),c=Math.round(wa+(s+r+o-3)*a),l=Math.max(Be,Math.min(c,he-4));i.set(t,l,e,v.GRASS);for(let h=1;h<=4;h++)l-h>=0&&i.get(t,l-h,e)===v.STONE&&i.set(t,l-h,e,v.DIRT)}}function w0(i){for(let t=0;t<kt;t++)for(let e=0;e<Dt;e++){const n=ji(t,e);if(n<.68||n>.92)continue;const s=i.surfaceY(t,e);if(s<Be-2||s>Be+2)continue;const r=2+Math.round(se(t*2,e*2,20));for(let o=0;o<r;o++){const a=s-o;if(a<0)break;const c=i.get(t,a,e);(c===v.GRASS||c===v.DIRT||c===v.STONE)&&i.set(t,a,e,v.SAND)}}}function C0(i){const t=[[114*$,90*$,5],[66*$,114*$,4],[140*$,70*$,5],[80*$,50*$,4],[110*$,150*$,6]];for(const[e,n,s]of t)for(let r=e-s-2;r<=e+s+2;r++)for(let o=n-s-2;o<=n+s+2;o++){const a=Math.sqrt((r-e)**2+(o-n)**2);if(a>s+.5)continue;const c=i.surfaceY(r,o);c<0||(i.set(r,c,o,v.WATER),a<s-1&&i.set(r,c-1,o,v.DIRT),a>=s-1&&i.get(r,c,o)===v.GRASS&&i.set(r,c,o,v.SAND))}}function zl(i,t,e,n,s){for(let r=t-s;r<=t+s;r++)for(let o=e-s;o<=e+s;o++){if(r<0||r>=kt||o<0||o>=Dt)continue;const a=Math.sqrt((r-t)**2+(o-e)**2),c=se(r,o,16)*6-3,l=Math.max(0,Math.floor(n-a*(n/s)+c));if(l===0)continue;for(let f=0;f<Math.min(l,he);f++)i.set(r,f,o,v.STONE);const h=i.get(r,l,o);(h===v.AIR||h===v.GRASS||h===v.DIRT)&&i.set(r,l,o,l>n-4?v.GRAVEL:v.STONE),l>=n-3&&i.inBounds(r,l+1,o)&&i.set(r,l+1,o,v.GRAVEL)}}function P0(i){zl(i,46*$,46*$,28,28*kn)}function L0(i){zl(i,150*$,44*$,22,20*kn)}function I0(i){const t=138*$,e=138*$,n=28*kn;for(let r=t-n;r<=t+n;r++)for(let o=e-n;o<=e+n;o++){if(r<0||r>=kt||o<0||o>=Dt||Math.sqrt((r-t)**2+(o-e)**2)>n)continue;const c=i.surfaceY(r,o);if(c<0)continue;i.get(r,c,o)===v.GRASS&&i.set(r,c,o,v.GRAVEL),se(r*2,o*2,14)<.32&&c<=Be+2&&(i.set(r,c,o,v.WATER),i.set(r,c-1,o,v.DIRT))}const s=[[120,120],[126,124],[122,132],[130,126],[136,130],[142,122],[128,140],[134,142],[144,136],[118,136],[148,128],[122,148],[138,148],[150,140],[112,128]].map(([r,o])=>[r*$,o*$]);for(const[r,o]of s){const a=i.surfaceY(r,o);if(a<0||i.get(r,a,o)===v.WATER)continue;const c=4+Math.round(se(r,o,10));for(let l=1;l<=c;l++)i.set(r,a+l,o,v.WOOD_LOG);for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){if(Math.abs(l)+Math.abs(h)>1)continue;const f=r+l,u=a+c,d=o+h;i.inBounds(f,u,d)&&i.get(f,u,d)===v.AIR&&i.set(f,u,d,v.LEAVES)}}}function N0(i){const t=50*$,e=150*$,n=30*kn;for(let s=t-n;s<=t+n;s+=5)for(let r=e-n;r<=e+n;r+=5){if(Math.sqrt((s-t)**2+(r-e)**2)>n)continue;const a=Math.floor(se(s,r,3)*4)-2,c=Math.floor(se(s+50,r+50,3)*4)-2,l=s+a,h=r+c;if(l<4||l>=kt-4||h<4||h>=Dt-4)continue;const f=i.surfaceY(l,h);if(f<0)continue;const u=i.get(l,f,h);if(u!==v.GRASS&&u!==v.DIRT)continue;const d=5+Math.round(se(l*2,h*2,6)*4);for(let g=1;g<=d;g++)i.set(l,f+g,h,v.WOOD_LOG);const _=3;for(let g=-_;g<=_;g++)for(let p=-_;p<=_;p++)for(let m=-1;m<=2;m++){if(Math.abs(g)===_&&Math.abs(p)===_)continue;const E=l+g,y=f+d+m,b=h+p;i.inBounds(E,y,b)&&i.get(E,y,b)===v.AIR&&i.set(E,y,b,v.LEAVES)}}}function U0(i){const t=[];for(let n=14;n<kt-14;n++)for(let s=14;s<Dt-14;s++){if(ji(n,s)>.78)continue;const o=Math.sqrt((n-138*$)**2+(s-138*$)**2)<30*kn,a=Math.sqrt((n-46*$)**2+(s-46*$)**2)<8*kn,c=Math.sqrt((n-150*$)**2+(s-44*$)**2)<6*kn,l=Math.sqrt((n-50*$)**2+(s-150*$)**2)<32*kn;if(o||a||c||l)continue;se(n*3,s*3,20)>.7&&t.push([n,s])}const e=Math.max(1,Math.floor(t.length/(70*$)));for(let n=0;n<t.length;n+=e){const[s,r]=t[n],o=i.surfaceY(s,r);if(o<0)continue;const a=i.get(s,o,r);if(a!==v.GRASS&&a!==v.DIRT)continue;const c=4+Math.round(se(s,r,12)*3);for(let h=1;h<=c;h++)i.set(s,o+h,r,v.WOOD_LOG);const l=2;for(let h=-l;h<=l;h++)for(let f=-l;f<=l;f++)for(let u=-1;u<=2;u++){if(Math.abs(h)===l&&Math.abs(f)===l)continue;const d=s+h,_=o+c+u,g=r+f;i.inBounds(d,_,g)&&i.get(d,_,g)===v.AIR&&i.set(d,_,g,v.LEAVES)}}}function D0(i){const t=[[78,42],[42,80],[108,60],[60,108],[132,88],[88,132],[160,96],[96,160],[70,70],[120,120],[160,60],[60,160],[100,40],[40,100],[155,100],[100,155]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(!(s<0)&&i.get(e,s,n)===v.GRASS){for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(Math.abs(r)+Math.abs(o)>1)continue;const a=i.surfaceY(e+r,n+o);a>=0&&i.set(e+r,a+1,n+o,v.STONE)}i.set(e,s+2,n,v.STONE)}}}function O0(i){let t=42;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=48*$;for(let s=0;s<n;s++){let r=16+Math.floor(e()*(kt-32)),o=2+Math.floor(e()*9),a=16+Math.floor(e()*(Dt-32));const c=30+Math.floor(e()*60);let l=e()*2-1,h=e()*2-1;for(let f=0;f<c;f++){const u=1+(e()>.65?1:0)+(e()>.9?1:0);for(let d=-u;d<=u;d++)for(let _=0;_<=u;_++)for(let g=-u;g<=u;g++)i.inBounds(r+d,o+_,a+g)&&i.get(r+d,o+_,a+g)!==v.AIR&&i.set(r+d,o+_,a+g,v.AIR);if(r+=Math.round(l),a+=Math.round(h),l+=(e()-.5)*.45,h+=(e()-.5)*.45,l=Math.max(-1.5,Math.min(1.5,l)),h=Math.max(-1.5,Math.min(1.5,h)),!i.inBounds(r,o,a))break}}}function F0(i){let t=13;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295);for(let n=0;n<80*$;n++){const s=12+Math.floor(e()*(kt-24)),r=2+Math.floor(e()*8),o=12+Math.floor(e()*(Dt-24));for(let a=0;a<4+Math.floor(e()*6);a++){const c=s+Math.floor(e()*3)-1,l=r+Math.floor(e()*2),h=o+Math.floor(e()*3)-1;i.inBounds(c,l,h)&&i.get(c,l,h)===v.STONE&&i.set(c,l,h,v.IRON_ORE)}}for(let n=0;n<30*$;n++){const s=10+Math.floor(e()*(kt-20)),r=1+Math.floor(e()*5),o=10+Math.floor(e()*(Dt-20));for(let a=0;a<3+Math.floor(e()*4);a++){const c=s+Math.floor(e()*3)-1,l=o+Math.floor(e()*3)-1;i.inBounds(c,r,l)&&i.get(c,r,l)===v.STONE&&i.set(c,r,l,v.CRYSTAL_ORE)}}}function B0(i){let t=120*$,e=70*$,n=.6,s=1;for(let r=0;r<55*$;r++){const o=3+Math.round(se(t,e,8)*2);for(let c=-o;c<=o;c++)for(let l=-o;l<=o;l++){if(Math.sqrt(c*c+l*l)>o)continue;const f=Math.floor(10+se(t+c,e+l,6)*5),u=Math.floor(t+c),d=Math.floor(e+l);if(!i.inBounds(u,0,d))continue;const _=i.surfaceY(u,d);for(let p=_;p>=Math.max(2,_-f);p--)i.set(u,p,d,v.AIR);const g=Math.max(2,_-f);i.inBounds(u,g,d)&&i.set(u,g,d,v.GRAVEL)}n+=(se(t*.1,e*.1,4)-.5)*.4,s+=(se(t*.1+50,e*.1+50,4)-.5)*.4;const a=Math.sqrt(n*n+s*s);n/=a,s/=a,t+=n*1.8,e+=s*1.8}}function k0(i){const t=155*$,e=5,n=55*$,s=12,r=5,o=11;for(let a=-s;a<=s;a++)for(let c=-r;c<=r;c++)for(let l=-o;l<=o;l++){if((a/s)**2+(c/r)**2+(l/o)**2>1)continue;const f=t+a,u=e+c,d=n+l;i.inBounds(f,u,d)&&i.set(f,u,d,v.AIR)}for(let a=-s;a<=s;a++)for(let c=-r;c<=r;c++)for(let l=-o;l<=o;l++){const h=(a/s)**2+(c/r)**2+(l/o)**2;if(h<.75||h>1.15)continue;const f=t+a,u=e+c,d=n+l;i.inBounds(f,u,d)&&i.get(f,u,d)===v.STONE&&se(f,u+d*3,4)>.5&&i.set(f,u,d,v.CRYSTAL_ORE)}}function z0(i){const t=i.surfaceY(100*$,100*$);t>=0&&i.set(100*$,t+1,100*$,v.CRAFTING_TABLE);const e=i.surfaceY(50*$,148*$);e>=0&&i.set(50*$,e+1,148*$,v.CRAFTING_TABLE);const n=i.surfaceY(50*$,50*$);n>=0&&i.set(50*$,n+1,50*$,v.FORGE);const s=i.surfaceY(152*$,48*$);s>=0&&i.set(152*$,s+1,48*$,v.FORGE);const r=i.surfaceY(138*$,138*$);r>=0&&(i.set(138*$,r+1,138*$,v.ALTAR),i.set(138*$,r+2,138*$,v.ALTAR),i.set(138*$,r+3,138*$,v.ALTAR));{const o=Math.floor(kt/2)+6,a=Math.floor(Dt/2),c=i.surfaceY(o,a);if(c>=0){for(const l of[-1,0,1])i.set(o+l,c+1,a,v.OBSIDIAN),i.set(o+l,c+4,a,v.OBSIDIAN);for(const l of[-1,1])i.set(o+l,c+2,a,v.OBSIDIAN),i.set(o+l,c+3,a,v.OBSIDIAN);i.set(o,c+2,a,v.PORTAL),i.set(o,c+3,a,v.PORTAL)}}}function H0(i){const t=[[76,80],[116,62],[88,155],[60,92],[168,100]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0)continue;const r=i.get(e,s,n);if(r===v.WATER||r===v.SAND)continue;const o=7,a=5,c=4;for(let h=0;h<o;h++)for(let f=0;f<a;f++){const u=e+h-Math.floor(o/2),d=n+f-Math.floor(a/2);if(!(h===0||h===o-1||f===0||f===a-1))continue;const g=i.surfaceY(u,d);if(g<0)continue;const p=c-Math.round(se(u,d,3)*2.5);for(let m=1;m<=Math.max(1,p);m++){const E=se(u*2,d*2+m,2)>.6?v.COBBLESTONE:v.STONE;i.set(u,g+m,d,E)}i.set(u,g,d,v.COBBLESTONE)}for(let h=0;h<12;h++){const f=e+Math.floor(se(e+h,n+h*3,3)*9)-4,u=n+Math.floor(se(e+h*2,n+h,3)*7)-3,d=i.surfaceY(f,u);d>=0&&i.set(f,d+1,u,v.COBBLESTONE)}const l=s+c-1;for(let h=1;h<o-1;h++){const f=e+h-Math.floor(o/2);se(f,n,5)>.55&&i.set(f,l,n-1,v.PLANKS)}}}function G0(i){const t=96*$,e=120*$,n=9,s=10;for(let o=0;o<n;o++){const a=o/n*Math.PI*2,c=Math.round(t+Math.cos(a)*s),l=Math.round(e+Math.sin(a)*s),h=i.surfaceY(c,l);if(h<0||i.get(c,h,l)===v.WATER)continue;const u=3+(o%3===0?1:0);for(let d=1;d<=u;d++)i.set(c,h+d,l,v.STONE);u===4&&(i.set(c-1,h+u,l,v.STONE),i.set(c+1,h+u,l,v.STONE))}const r=i.surfaceY(t,e);r>=0&&(i.set(t,r+1,e,v.STONE),i.set(t-1,r+1,e,v.STONE),i.set(t+1,r+1,e,v.STONE),i.set(t,r+1,e-1,v.STONE),i.set(t,r+1,e+1,v.STONE));for(let o=0;o<18;o++){const a=t+Math.round(Math.sin(o*.22)*2),c=e+s+o+2,l=i.surfaceY(a,c);l>=0&&i.get(a,l,c)===v.GRASS&&i.set(a,l,c,v.GRAVEL)}}function V0(i){const t=[[72,130],[108,88],[55,65],[170,130],[90,168]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===v.WATER)continue;i.set(e,s+1,n,v.CAMPFIRE);for(const[a,c]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const l=i.surfaceY(e+a,n+c);l>=0&&i.set(e+a,l+1,n+c,v.COBBLESTONE)}const r=[[-2,0],[2,0],[0,-2],[0,2]];for(const[a,c]of r){const l=i.surfaceY(e+a,n+c);l>=0&&i.get(e+a,l,n+c)!==v.WATER&&i.set(e+a,l+1,n+c,v.WOOD_LOG)}const o=i.surfaceY(e+2,n+2);o>=0&&i.set(e+2,o+1,n+2,v.CHEST);for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){const l=i.surfaceY(e+a,n+c);l>=0&&i.get(e+a,l,n+c)===v.GRASS&&i.set(e+a,l,n+c,v.DIRT)}}}function W0(i){const t=[[80,90,1,5],[105,75,0,4],[65,110,1,6],[130,90,0,5],[75,140,1,4],[44,140,0,5],[160,80,1,4],[100,130,0,5],[55,75,1,3],[140,110,0,4],[175,115,1,5],[85,58,0,4]].map(([e,n,s,r])=>[e*$,n*$,s,r]);for(const[e,n,s,r]of t){const o=i.surfaceY(e,n);if(!(o<0)&&i.get(e,o,n)!==v.WATER)for(let a=0;a<r;a++){const c=s===0?e+a:e,l=s===1?n+a:n,h=i.surfaceY(c,l);h>=0&&i.get(c,h,l)!==v.WATER&&i.set(c,h+1,l,v.WOOD_LOG)}}}function X0(i){const t=[[30,30],[155,50],[95,162],[170,70],[52,170],[120,40],[60,40],[168,155]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===v.WATER)continue;i.set(e,s+1,n,v.CHEST);const r=[[1,0],[-1,0],[0,1],[0,-1]];for(const[o,a]of r){const c=i.surfaceY(e+o,n+a);c>=0&&i.get(e+o,c,n+a)===v.GRASS&&i.set(e+o,c+1,n+a,v.COBBLESTONE)}}}function Y0(i){let t=68*$,e=112*$;const n={x:114*$,z:90*$};for(let s=0;s<60*$;s++){const r=n.x-t,o=n.z-e,a=Math.sqrt(r*r+o*o);if(a<4)break;const c=r/a+(se(t*.1,e*.1,5)-.5)*.8,l=o/a+(se(t*.1+30,e*.1+30,5)-.5)*.8;t+=c,e+=l;const h=Math.floor(t),f=Math.floor(e);if(!i.inBounds(h,0,f))break;for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++){const _=h+u,g=f+d;if(!i.inBounds(_,0,g))continue;const p=i.surfaceY(_,g);p<0||p<=Be||p>Be+4||i.get(_,p,g)===v.WATER||(i.set(_,p,g,v.WATER),Math.abs(u)+Math.abs(d)===1&&i.get(_,p,g)===v.GRASS&&i.set(_,p,g,v.SAND))}}}function q0(i){const t=110*$,e=125*$;for(let r=-6;r<=6;r++)for(let o=-6;o<=6;o++){const a=t+r,c=e+o,l=i.surfaceY(a,c);l<0||i.get(a,l,c)===v.WATER||i.get(a,l,c)===v.GRASS&&i.set(a,l,c,v.DIRT)}const n=[[-4,-4],[0,-4],[4,-4],[-4,0],[4,0],[-4,4],[0,4],[4,4]];for(const[r,o]of n){const a=t+r,c=e+o,l=i.surfaceY(a,c);l<0||(i.set(a,l+1,c,v.STONE),i.set(a,l+2,c,v.STONE),i.set(a-1,l+2,c,v.COBBLESTONE),i.set(a+1,l+2,c,v.COBBLESTONE))}for(let r=-5;r<=5;r++){const o=i.surfaceY(t+r,e-5),a=i.surfaceY(t+r,e+5);o>=0&&i.set(t+r,o+1,e-5,v.COBBLESTONE),a>=0&&i.set(t+r,a+1,e+5,v.COBBLESTONE)}for(let r=-4;r<=4;r++){const o=i.surfaceY(t-5,e+r),a=i.surfaceY(t+5,e+r);o>=0&&i.set(t-5,o+1,e+r,v.COBBLESTONE),a>=0&&i.set(t+5,a+1,e+r,v.COBBLESTONE)}const s=i.surfaceY(t,e+5);s>=0&&(i.set(t-1,s+1,e+5,v.AIR),i.set(t+1,s+1,e+5,v.AIR))}function as(i,t,e,n,s,r,o,a){const c=i.surfaceY(t,e);if(c<0)return c;for(let u=0;u<=n;u++){const d=c+u;if(d>=he)break;for(let _=0;_<s;_++)for(let g=0;g<s;g++){const p=t-Math.floor(s/2)+_,m=e-Math.floor(s/2)+g;if(!i.inBounds(p,d,m))continue;const E=_===0||_===s-1||g===0||g===s-1,y=_>0&&_<s-1&&g>0&&g<s-1;u===0||E?i.set(p,d,m,r):u===n||u%4===0&&y?i.set(p,d,m,o):i.set(p,d,m,v.AIR)}}if(a){const u=c+n+1;if(u<he){for(let d=0;d<s;d++)for(let _=0;_<s;_++)if((d===0||d===s-1||_===0||_===s-1)&&(d+_)%2===0){const p=t-Math.floor(s/2)+d,m=e-Math.floor(s/2)+_;i.inBounds(p,u,m)&&i.set(p,u,m,r)}}}const l=t,h=e+Math.floor(s/2);i.inBounds(l,c+1,h)&&(i.set(l,c+1,h,v.AIR),i.set(l,c+2,h,v.AIR));const f=c+n;return i.inBounds(t,f+1,e)&&f+1<he&&i.set(t,f+1,e,v.CHEST),c}function ge(i,t,e,n){i.inBounds(t,e,n)&&i.set(t,e,n,v.GLASS)}function K0(i){{const n=74*$,s=68*$,r=12,o=as(i,n,s,r,5,v.COBBLESTONE,v.PLANKS,!0);o>=0&&(ge(i,n,o+5,s-2),ge(i,n,o+5,s+2),ge(i,n-2,o+5,s),ge(i,n+2,o+5,s),ge(i,n,o+9,s-2),ge(i,n,o+9,s+2),ge(i,n-2,o+9,s),ge(i,n+2,o+9,s),o+r+2<he&&i.set(n+1,o+r+2,s+1,v.TORCH))}{const n=162*$,s=80*$,r=16,o=as(i,n,s,r,4,v.STONE,v.PLANKS,!0);if(o>=0){for(let a=3;a<r;a+=3)ge(i,n,o+a,s-1),ge(i,n,o+a,s+1),ge(i,n-1,o+a,s),ge(i,n+1,o+a,s);for(let a=0;a<3;a++){const c=o+r+1+a;if(c>=he)break;const l=2-a;for(let h=-l;h<=l;h++)for(let f=-l;f<=l;f++)i.inBounds(n+h,c,s+f)&&i.set(n+h,c,s+f,v.STONE)}o+r+4<he&&i.set(n,o+r+4,s,v.CRYSTAL_ORE),i.inBounds(n,o+1,s)&&i.set(n,o+1,s,v.FORGE)}}{const n=118*$,s=145*$,r=14,o=as(i,n,s,r,4,v.STONE,v.PLANKS,!1);if(o>=0){for(let a=2;a<r;a+=4)ge(i,n,o+a,s-1),ge(i,n,o+a,s+1);for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)(a+c+n+s)%3===0&&o+r<he&&i.set(n+a,o+r,s+c,v.AIR);i.inBounds(n,o+1,s-1)&&i.set(n,o+1,s-1,v.CHEST)}}{const n=96*$,s=172*$,r=15,o=as(i,n,s,r,3,v.COBBLESTONE,v.PLANKS,!0);if(o>=0){for(let a=r-2;a<=r-1;a++)for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)(Math.abs(c)===1||Math.abs(l)===1)&&i.inBounds(n+c,o+a,s+l)&&i.set(n+c,o+a,s+l,v.GLASS);o+r+1<he&&i.set(n,o+r+1,s,v.CRYSTAL_ORE);for(let a=1;a<8;a++){const c=n,l=s-a,h=i.surfaceY(c,l);h>=0&&i.set(c,h+1,l,v.COBBLESTONE)}}}const t=90*$,e=102*$;for(const[n,s]of[[t,72*$],[e,72*$]]){const o=as(i,n,s,8,3,v.COBBLESTONE,v.PLANKS,!0);o>=0&&(ge(i,n,o+4,s-1),ge(i,n,o+4,s+1))}{const n=72*$,s=96*$,r=i.surfaceY(s,n);if(r>=0){for(let o=t;o<=e;o++)i.surfaceY(o,n)<0||o===t||o===e||o>t+1&&o<e-1&&i.set(o,r+8,n,v.COBBLESTONE);for(let o=68*$;o<78*$;o++)for(let a=s-3;a<=s+3;a++){const c=i.surfaceY(a,o);c>=0&&i.get(a,c,o)!==v.WATER&&i.set(a,c,o,v.GRAVEL)}}}}function po(i,t,e,n,s,r,o,a){const c=i.surfaceY(t,e);if(c<0||i.get(t,c,e)===v.WATER)return;for(let d=0;d<=r;d++){const _=c+d;if(_>=he)break;for(let g=0;g<n;g++)for(let p=0;p<s;p++){const m=t-Math.floor(n/2)+g,E=e-Math.floor(s/2)+p;if(!i.inBounds(m,_,E))continue;const y=g===0||g===n-1||p===0||p===s-1;d===0?i.set(m,_,E,v.COBBLESTONE):d===r?i.set(m,_,E,a):y?i.set(m,_,E,o):i.set(m,_,E,v.AIR)}}const h=t,f=e+Math.floor(s/2);i.inBounds(h,c+1,f)&&i.set(h,c+1,f,v.AIR),i.inBounds(h,c+2,f)&&i.set(h,c+2,f,v.AIR);const u=c+2;ge(i,t-Math.floor(n/2),u,e),ge(i,t+Math.floor(n/2)-(n%2===0?1:0),u,e),ge(i,t,u,e-Math.floor(s/2)),i.inBounds(t-1,c+1,e)&&i.set(t-1,c+1,e,v.CHEST),i.inBounds(t+1,c+1,e)&&i.set(t+1,c+1,e,v.CRAFTING_TABLE)}function mo(i,t,e){const n=i.surfaceY(t,e);if(!(n<0)&&i.get(t,n,e)!==v.WATER){i.set(t,n,e,v.WATER);for(const[s,r]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const o=i.surfaceY(t+s,e+r);o<0||(i.set(t+s,o+1,e+r,v.COBBLESTONE),i.set(t+s,o+2,e+r,v.STONE))}i.set(t-1,n+3,e,v.WOOD_LOG),i.set(t+1,n+3,e,v.WOOD_LOG)}}function be(i,t,e,n,s){const r=Math.max(Math.abs(n-t),Math.abs(s-e));for(let o=0;o<=r;o++){const a=r===0?0:o/r,c=Math.round(t+(n-t)*a),l=Math.round(e+(s-e)*a);for(let h=-1;h<=1;h++){const f=i.surfaceY(c+h,l);f>=0&&i.get(c+h,f,l)!==v.WATER&&i.set(c+h,f,l,v.GRAVEL);const u=i.surfaceY(c,l+h);u>=0&&i.get(c,u,l+h)!==v.WATER&&i.set(c,u,l+h,v.GRAVEL)}}}function Qs(i,t,e,n,s){const r=i.surfaceY(t,e);if(!(r<0||i.get(t,r,e)===v.WATER)){for(let o=0;o<n;o++)for(let a=0;a<s;a++){const c=t+o,l=e+a,h=i.surfaceY(c,l);h<0||i.get(c,h,l)===v.WATER||i.set(c,h,l,v.FARMLAND)}for(let o=-1;o<=n;o++){const a=i.surfaceY(t+o,e-1),c=i.surfaceY(t+o,e+s);a>=0&&i.set(t+o,a+1,e-1,v.COBBLESTONE),c>=0&&i.set(t+o,c+1,e+s,v.COBBLESTONE)}for(let o=0;o<s;o++){const a=i.surfaceY(t-1,e+o),c=i.surfaceY(t+n,e+o);a>=0&&i.set(t-1,a+1,e+o,v.COBBLESTONE),c>=0&&i.set(t+n,c+1,e+o,v.COBBLESTONE)}}}function $0(i){{const t=96*$,e=86*$;mo(i,t,e);for(let o=-5;o<=5;o++)for(let a=-5;a<=5;a++){const c=i.surfaceY(t+o,e+a);c>=0&&i.get(t+o,c,e+a)!==v.WATER&&i.set(t+o,c,e+a,v.GRAVEL)}const n=[[t-12,e-4,7,5,3,v.PLANKS,v.PLANKS],[t+12,e-4,6,5,3,v.COBBLESTONE,v.PLANKS],[t-10,e+10,5,4,3,v.PLANKS,v.PLANKS],[t+10,e+10,5,4,3,v.PLANKS,v.PLANKS],[t,e+14,6,4,3,v.COBBLESTONE,v.PLANKS],[t-12,e+18,5,4,3,v.PLANKS,v.PLANKS],[t+12,e+18,5,4,3,v.PLANKS,v.PLANKS]];for(const[o,a,c,l,h,f,u]of n)po(i,o,a,c,l,h,f,u);const s=i.surfaceY(t+12,e-4);s>=0&&i.set(t+12,s+1,e-4,v.FORGE),be(i,t,e-4,t-12,e-4),be(i,t,e-4,t+12,e-4),be(i,t,e+4,t,e+14),be(i,t,e+14,t-10,e+10),be(i,t,e+14,t+10,e+10),be(i,t,e+18,t-12,e+18),be(i,t,e+18,t+12,e+18),be(i,t,e-5,t,74*$),Qs(i,t+16,e+2,5,4),Qs(i,t+16,e+8,5,4);const r=i.surfaceY(t+3,e+3);r>=0&&i.set(t+3,r+1,e+3,v.CAMPFIRE);for(const[o,a]of[[t-5,e-5],[t+5,e-5],[t-5,e+5],[t+5,e+5]]){const c=i.surfaceY(o,a);c<0||(i.set(o,c+1,a,v.STONE),i.set(o,c+2,a,v.STONE),i.set(o,c+3,a,v.TORCH))}}{const t=162*$,e=108*$;mo(i,t,e);for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++){const o=i.surfaceY(t+s,e+r);o>=0&&i.get(t+s,o,e+r)!==v.WATER&&i.set(t+s,o,e+r,v.GRAVEL)}const n=[[t-10,e-4,6,4,3,v.PLANKS,v.PLANKS],[t+10,e-4,5,4,3,v.COBBLESTONE,v.PLANKS],[t-9,e+10,5,4,3,v.PLANKS,v.PLANKS],[t+9,e+10,5,4,3,v.PLANKS,v.PLANKS],[t,e+14,5,4,3,v.PLANKS,v.PLANKS]];for(const[s,r,o,a,c,l,h]of n)po(i,s,r,o,a,c,l,h);be(i,t,e,t-10,e-4),be(i,t,e,t+10,e-4),be(i,t,e,t-9,e+10),be(i,t,e,t+9,e+10),be(i,t,e,t,e+14),Qs(i,t+14,e+4,4,4);for(const[s,r]of[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]]){const o=i.surfaceY(s,r);o<0||(i.set(s,o+1,r,v.STONE),i.set(s,o+2,r,v.TORCH))}}{const t=52*$,e=132*$;mo(i,t,e);for(let r=-3;r<=3;r++)for(let o=-3;o<=3;o++){const a=i.surfaceY(t+r,e+o);a>=0&&i.get(t+r,a,e+o)!==v.WATER&&i.set(t+r,a,e+o,v.DIRT)}const n=[[t-9,e-4,5,4,3,v.PLANKS,v.PLANKS],[t+9,e-4,5,4,3,v.PLANKS,v.PLANKS],[t-8,e+9,5,4,3,v.PLANKS,v.PLANKS],[t+8,e+9,5,4,3,v.WOOD_LOG,v.PLANKS]];for(const[r,o,a,c,l,h,f]of n)po(i,r,o,a,c,l,h,f);be(i,t,e,t-9,e-4),be(i,t,e,t+9,e-4),be(i,t,e,t-8,e+9),be(i,t,e,t+8,e+9),Qs(i,t+12,e,4,3);const s=i.surfaceY(t,e+4);s>=0&&i.set(t,s+1,e+4,v.CAMPFIRE)}}function Z0(i){const t=wa+10;for(let e=0;e<kt;e++)for(let n=0;n<Dt;n++){const s=i.surfaceY(e,n);if(s<t)continue;const r=i.get(e,s,n);r===v.AIR||r===v.WATER||r===v.LEAVES||(i.set(e,s,n,v.GRAVEL),s>=t+4&&i.inBounds(e,s+1,n)&&i.set(e,s+1,n,v.GRAVEL))}}function j0(i){for(let t=1;t<kt-1;t++)for(let e=1;e<Dt-1;e++){const n=i.surfaceY(t,e);if(n<0)continue;const s=[i.surfaceY(t+1,e),i.surfaceY(t-1,e),i.surfaceY(t,e+1),i.surfaceY(t,e-1)],r=Math.min(...s.filter(a=>a>=0)),o=n-r;if(!(o<4)){for(let a=1;a<=o;a++){const c=n-a;if(c<0)break;const l=i.get(t,c,e);l===v.DIRT&&i.set(t,c,e,v.STONE),l===v.GRASS&&i.set(t,c,e,v.COBBLESTONE)}if(o>=6){const a=n-Math.floor(o/2);i.inBounds(t,a,e)&&i.set(t,a,e,v.GRAVEL)}}}}function J0(i){let t=99;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[44,58],[58,44],[150,52],[54,148],[128,72],[72,128],[164,90],[90,48],[36,100],[110,36],[170,120],[42,170]].map(([s,r])=>[s*$,r*$]);for(const[s,r]of n){const o=i.surfaceY(s,r);if(o<Be+3||o<0)continue;const a=i.get(s,o,r);if(!(a===v.WATER||a===v.SAND)){for(let c=1;c<=3;c++){const l=o-c;if(l<0)break;i.get(s,l,r)!==v.AIR&&i.set(s,l,r,v.AIR)}for(const[c,l]of[[1,0],[-1,0],[0,1],[0,-1]])for(let h=1;h<=2;h++){const f=o-h;f<0||!i.inBounds(s+c,f,r+l)||e()>.5&&i.set(s+c,f,r+l,v.AIR)}i.inBounds(s,o,r)&&i.set(s,o,r,v.COBBLESTONE),i.inBounds(s-1,o,r)&&i.set(s-1,o,r,v.STONE),i.inBounds(s+1,o,r)&&i.set(s+1,o,r,v.STONE)}}}function Q0(i){for(let t=0;t<kt;t++)for(let e=0;e<Dt;e++){if(i.get(t,i.surfaceY(t,e),e)!==v.WATER)continue;const n=i.surfaceY(t,e);n<0||(n-1>=0&&i.get(t,n-1,e)===v.STONE&&i.set(t,n-1,e,v.SAND),n-2>=0&&i.get(t,n-2,e)===v.STONE&&i.set(t,n-2,e,v.DIRT))}}function t_(i){let t=77;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[118,122],[126,138],[134,120],[124,148],[140,132],[48,142],[56,156],[44,162],[60,138],[52,158],[40,56],[58,46],[52,60]].map(([r,o])=>[r*$,o*$]);for(const[r,o]of n){const a=i.surfaceY(r,o);if(a<0||i.get(r,a,o)===v.WATER)continue;const c=e()>.5?2:1;for(let h=1;h<=c;h++)i.inBounds(r,a+h,o)&&i.get(r,a+h,o)===v.AIR&&i.set(r,a+h,o,v.COBBLESTONE);const l=a+c+1;if(l<he)for(const[h,f]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])i.inBounds(r+h,l,o+f)&&i.get(r+h,l,o+f)===v.AIR&&i.set(r+h,l,o+f,v.LEAVES)}const s=[[82,62],[104,54],[66,88],[130,80],[80,108],[158,100],[100,148],[62,118],[144,64],[70,152],[112,170],[160,140],[38,80],[40,120],[180,90]].map(([r,o])=>[r*$,o*$]);for(const[r,o]of s){const a=i.surfaceY(r,o);if(a<0||i.get(r,a,o)===v.WATER)continue;const c=1+Math.floor(e()*2);for(let l=-c;l<=c;l++)for(let h=-c;h<=c;h++)for(let f=0;f<=c;f++){if(Math.sqrt(l*l+f*f*1.5+h*h)>c+.4)continue;const d=r+l,_=a+f,g=o+h;if(!i.inBounds(d,_,g))continue;const p=i.get(d,_,g);(p===v.AIR||p===v.GRASS||p===v.DIRT)&&i.set(d,_,g,v.STONE)}}for(let r=0;r<60*$;r++){const o=20+Math.floor(e()*(kt-40)),a=20+Math.floor(e()*(Dt-40));if(ji(o,a)>.7)continue;const l=i.surfaceY(o,a);l<0||i.get(o,l,a)!==v.GRASS||i.inBounds(o,l+1,a)&&i.get(o,l+1,a)===v.AIR&&i.set(o,l+1,a,v.COBBLESTONE)}}function e_(i){for(let t=0;t<kt;t++)for(let e=0;e<Dt;e++){let n=!1;for(let s=he-1;s>=1;s--){const r=i.get(t,s,e);if(r===v.DIRT){n=!0;continue}if(n&&r===v.STONE){const o=se(t,e,8)>.5?2:1;for(let a=0;a<o;a++){const c=s+a;i.inBounds(t,c,e)&&i.get(t,c,e)===v.STONE&&i.set(t,c,e,v.GRAVEL)}break}r!==v.AIR&&(n=!1)}}}const _o=3,tr=he-5;function fr(i,t){return 6+Math.round(Math.sin(i*.08)*1.5+Math.cos(t*.08)*1.5)}function n_(i){for(let s=0;s<kt;s++)for(let r=0;r<Dt;r++){const o=fr(s,r);for(let a=0;a<he;a++)a<=_o?i.set(s,a,r,v.LAVA):a<=o||a>=tr?i.set(s,a,r,v.NETHERRACK):i.set(s,a,r,v.AIR);i.set(s,0,r,v.NETHERRACK)}let t=555;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=150;for(let s=0;s<n;s++){let r=8+Math.floor(e()*(kt-16)),o=1+Math.floor(e()*4),a=8+Math.floor(e()*(Dt-16));const c=25+Math.floor(e()*45);let l=e()*2-1,h=e()*2-1,f=(e()-.5)*.4;for(let u=0;u<c;u++){const d=2+(e()>.75?1:0);for(let _=-d;_<=d;_++)for(let g=-d;g<=d;g++)for(let p=-d;p<=d;p++){if(_*_+g*g*1.5+p*p>d*d)continue;const m=o+g;m<=_o||m>fr(r+_,a+p)||i.inBounds(r+_,m,a+p)&&i.set(r+_,m,a+p,v.AIR)}if(r+=Math.round(l),o+=Math.round(f),a+=Math.round(h),l+=(e()-.5)*.4,h+=(e()-.5)*.4,f+=(e()-.5)*.1,l=Math.max(-1.5,Math.min(1.5,l)),h=Math.max(-1.5,Math.min(1.5,h)),f=Math.max(-.4,Math.min(.4,f)),!i.inBounds(r,o,a)||o<=_o+1||o>=tr-2)break}}for(let s=0;s<400;s++){const r=2+Math.floor(e()*(kt-4)),o=2+Math.floor(e()*(Dt-4));i.get(r,tr-1,o)===v.AIR&&i.set(r,tr,o,v.GLOWSTONE)}for(let s=0;s<150;s++){const r=2+Math.floor(e()*(kt-4)),o=2+Math.floor(e()*(Dt-4)),a=fr(r,o);i.get(r,a+1,o)===v.AIR&&i.set(r,a+1,o,v.LAVA)}}function i_(i,t,e){const n=fr(t,e);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++){i.get(t+s,n,e+r)!==v.NETHERRACK&&i.set(t+s,n,e+r,v.NETHERRACK);for(let o=1;o<=4;o++)i.set(t+s,n+o,e+r,v.AIR)}for(const s of[-1,0,1])i.set(t+s,n+1,e,v.OBSIDIAN),i.set(t+s,n+4,e,v.OBSIDIAN);for(const s of[-1,1])i.set(t+s,n+2,e,v.OBSIDIAN),i.set(t+s,n+3,e,v.OBSIDIAN);return i.set(t,n+2,e,v.PORTAL),i.set(t,n+3,e,v.PORTAL),n}class s_{constructor(){this.maxHealth=20,this.health=20,this.maxHunger=20,this.hunger=20,this.tier=0,this.dead=!1,this._hungerTimer=0,this._regenTimer=0,this._hungerInterval=30,this.damageMult=1,this.onDeath=null,this.onChange=null,this._inventory=null,this._itemRegistry=null}linkArmorSource(t,e){this._inventory=t,this._itemRegistry=e}setDifficulty(t){var s;const e={easy:{maxHealth:30,hungerInterval:50,damageMult:.5},normal:{maxHealth:20,hungerInterval:30,damageMult:1},hard:{maxHealth:15,hungerInterval:20,damageMult:1.25}},n=e[t]??e.normal;this.maxHealth=n.maxHealth,this.health=n.maxHealth,this._hungerInterval=n.hungerInterval,this.damageMult=n.damageMult,(s=this.onChange)==null||s.call(this)}update(t){var e;this.dead||(this._hungerTimer+=t,this._hungerTimer>=this._hungerInterval&&(this._hungerTimer=0,this.hunger=Math.max(0,this.hunger-1),this.hunger===0&&this.takeDamage(1)),this.hunger>14&&this.health<this.maxHealth&&(this._regenTimer+=t,this._regenTimer>=4&&(this._regenTimer=0,this.health=Math.min(this.maxHealth,this.health+1),(e=this.onChange)==null||e.call(this))))}takeDamage(t){var s,r;if(this.dead)return;const e=this._inventory?this._inventory.getArmorDefense(this._itemRegistry):0,n=Math.min(.8,e*.04);this.health=Math.max(0,this.health-t*this.damageMult*(1-n)),(s=this.onChange)==null||s.call(this),this.health<=0&&!this.dead&&(this.dead=!0,(r=this.onDeath)==null||r.call(this))}heal(t){var e;this.health=Math.min(this.maxHealth,this.health+t),(e=this.onChange)==null||e.call(this)}eat(t){var e;this.hunger=Math.min(this.maxHunger,this.hunger+t),(e=this.onChange)==null||e.call(this)}updateTier(t){const e=(t==null?void 0:t.tier)??0;e>this.tier&&(this.tier=e)}serialize(){return{health:this.health,hunger:this.hunger,tier:this.tier}}deserialize(t){this.health=t.health??20,this.hunger=t.hunger??20,this.tier=t.tier??0,this.dead=!1}}const hs=["helmet","chestplate","leggings","boots"];class qc{constructor(){this.itemId=null,this.count=0,this.durability=null}}class r_{constructor(){this.HOTBAR_SIZE=9,this.TOTAL_SIZE=36,this.slots=Array.from({length:this.TOTAL_SIZE},()=>new qc),this.armor={};for(const t of hs)this.armor[t]=new qc;this.hotbarIndex=0,this._changeListeners=[]}equipArmor(t,e){const n=this.slots[t],s=e==null?void 0:e.getItem(n.itemId);if(!s||!s.armorSlot)return!1;const r=this.armor[s.armorSlot],o={itemId:r.itemId,count:r.count,durability:r.durability};return r.itemId=n.itemId,r.count=1,r.durability=n.durability,n.count--,n.count<=0&&(n.itemId=o.itemId,n.count=o.itemId?o.count:0,n.durability=o.durability),this._fireChange(),!0}unequipArmor(t,e){const n=this.armor[t];return!n.itemId||this.add(n.itemId,n.count,e)>0?!1:(n.itemId=null,n.count=0,n.durability=null,this._fireChange(),!0)}getArmorDefense(t){var n;let e=0;for(const s of hs){const r=this.armor[s].itemId;r&&(e+=((n=t==null?void 0:t.getItem(r))==null?void 0:n.defense)??0)}return e}addChangeListener(t){this._changeListeners.push(t)}_fireChange(){this._changeListeners.forEach(t=>t())}hotbarSlot(t){return this.slots[t]}get selectedSlot(){return this.slots[this.hotbarIndex]}add(t,e,n){var o;const s=((o=n==null?void 0:n.getItem(t))==null?void 0:o.stackSize)??64;let r=e;for(let a=0;a<this.TOTAL_SIZE&&r>0;a++){const c=this.slots[a];if(c.itemId===t&&c.count<s){const l=Math.min(r,s-c.count);c.count+=l,r-=l}}for(let a=0;a<this.TOTAL_SIZE&&r>0;a++){const c=this.slots[a];if(!c.itemId){const l=Math.min(r,s);c.itemId=t,c.count=l,r-=l}}return this._fireChange(),r}remove(t,e){let n=e;for(let s=0;s<this.TOTAL_SIZE&&n>0;s++){const r=this.slots[s];if(r.itemId===t){const o=Math.min(n,r.count);r.count-=o,n-=o,r.count===0&&(r.itemId=null,r.durability=null)}}this._fireChange()}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&(e+=n.count);return e}hasAll(t){for(const[e,n]of Object.entries(t))if(this.countOf(e)<n)return!1;return!0}removeSlot(t){const e=this.slots[t];e.itemId&&(e.count--,e.count===0&&(e.itemId=null,e.durability=null),this._fireChange())}damageTool(t,e=1,n){const s=this.slots[t];if(!s.itemId)return;const r=n==null?void 0:n.getItem(s.itemId);!r||!r.durability||(s.durability===null&&(s.durability=r.durability),s.durability-=e,s.durability<=0&&(s.itemId=null,s.count=0,s.durability=null),this._fireChange())}swapSlots(t,e){const n={itemId:this.slots[t].itemId,count:this.slots[t].count,durability:this.slots[t].durability};this.slots[t].itemId=this.slots[e].itemId,this.slots[t].count=this.slots[e].count,this.slots[t].durability=this.slots[e].durability,this.slots[e].itemId=n.itemId,this.slots[e].count=n.count,this.slots[e].durability=n.durability,this._fireChange()}serialize(){const t={};for(const e of hs)t[e]={itemId:this.armor[e].itemId,count:this.armor[e].count,durability:this.armor[e].durability};return{slots:this.slots.map(e=>({itemId:e.itemId,count:e.count,durability:e.durability})),armor:t}}deserialize(t){var s,r,o;const e=Array.isArray(t)?t:(t==null?void 0:t.slots)??[],n=Array.isArray(t)?null:t==null?void 0:t.armor;for(let a=0;a<Math.min(e.length,this.TOTAL_SIZE);a++)this.slots[a].itemId=e[a].itemId,this.slots[a].count=e[a].count,this.slots[a].durability=e[a].durability;if(n)for(const a of hs)this.armor[a].itemId=((s=n[a])==null?void 0:s.itemId)??null,this.armor[a].count=((r=n[a])==null?void 0:r.count)??0,this.armor[a].durability=((o=n[a])==null?void 0:o.durability)??null;this._fireChange()}}const Di=new ln(0,0,0,"YXZ"),Oi=new N,o_={type:"change"},a_={type:"lock"},c_={type:"unlock"},Kc=Math.PI/2;class l_ extends h0{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=h_.bind(this),this._onPointerlockChange=d_.bind(this),this._onPointerlockError=f_.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Oi.setFromMatrixColumn(e.matrix,0),Oi.crossVectors(e.up,Oi),e.position.addScaledVector(Oi,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Oi.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Oi,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function h_(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;Di.setFromQuaternion(n.quaternion),Di.y-=t*.002*this.pointerSpeed,Di.x-=e*.002*this.pointerSpeed,Di.x=Math.max(Kc-this.maxPolarAngle,Math.min(Kc-this.minPolarAngle,Di.x)),n.quaternion.setFromEuler(Di),this.dispatchEvent(o_)}function d_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(a_),this.isLocked=!0):(this.dispatchEvent(c_),this.isLocked=!1)}function f_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class u_{constructor(){this._ctx=null,this._sfxBus=null,this._musicBus=null,this._running=!1,this._beatIndex=0,this._musicTimeout=null,this._mineTimer=0}_init(){if(this._ctx)return;this._ctx=new(window.AudioContext||window.webkitAudioContext);const t=this._ctx.createGain();t.gain.value=1,t.connect(this._ctx.destination),this._sfxBus=this._ctx.createGain(),this._sfxBus.gain.value=.8,this._sfxBus.connect(t),this._musicBus=this._ctx.createGain(),this._musicBus.gain.value=.22,this._musicBus.connect(t)}_noise(t,e,n){const s=this._ctx,r=Math.floor(s.sampleRate*t),o=s.createBuffer(1,r,s.sampleRate),a=o.getChannelData(0);for(let f=0;f<r;f++)a[f]=Math.random()*2-1;const c=s.createBufferSource();c.buffer=o;const l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=1.2;const h=s.createGain();h.gain.setValueAtTime(n,s.currentTime),h.gain.exponentialRampToValueAtTime(.001,s.currentTime+t),c.connect(l),l.connect(h),h.connect(this._sfxBus),c.start()}playMine(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(35,e+.09);const s=t.createGain();s.gain.setValueAtTime(.45,e),s.gain.exponentialRampToValueAtTime(.001,e+.1),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.1),this._noise(.07,700,.28)}playBlockBreak(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(70,e),n.frequency.exponentialRampToValueAtTime(18,e+.22);const s=t.createGain();s.gain.setValueAtTime(.7,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.22),this._noise(.15,350,.5),this._noise(.07,1400,.18)}playStep(t="grass"){this._init();const e=this._ctx,n=e.currentTime;if(t==="stone"||t==="cobble"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(120,n),s.frequency.exponentialRampToValueAtTime(60,n+.04);const r=e.createGain();r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(.001,n+.06),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.06),this._noise(.05,1200,.09)}else if(t==="sand"||t==="gravel")this._noise(.09,600,.16),this._noise(.05,300,.09);else if(t==="wood"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(200,n),s.frequency.exponentialRampToValueAtTime(80,n+.06);const r=e.createGain();r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.001,n+.08),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.08)}else{const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(40,n+.07);const r=e.createGain();r.gain.setValueAtTime(.14,n),r.gain.exponentialRampToValueAtTime(.001,n+.1),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.1),this._noise(.06,800,.07)}}playHit(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(380,e),n.frequency.exponentialRampToValueAtTime(120,e+.1);const s=t.createWaveShaper(),r=new Float32Array(256);for(let a=0;a<256;a++){const c=a*2/256-1;r[a]=(Math.PI+40)*c/(Math.PI+40*Math.abs(c))}s.curve=r;const o=t.createGain();o.gain.setValueAtTime(.38,e),o.gain.exponentialRampToValueAtTime(.001,e+.13),n.connect(s),s.connect(o),o.connect(this._sfxBus),n.start(e),n.stop(e+.13),this._noise(.04,3500,.22)}startMusic(){this._init(),!this._running&&(this._running=!0,this._beatIndex=0,this._scheduleBeat())}stopMusic(){if(this._running=!1,clearTimeout(this._musicTimeout),this._ctx&&this._musicBus){const t=this._ctx.currentTime;this._musicBus.gain.linearRampToValueAtTime(0,t+1.5),setTimeout(()=>{this._musicBus&&(this._musicBus.gain.value=.22)},2e3)}}_kick(t){const e=this._ctx,n=e.createOscillator();n.frequency.setValueAtTime(180,t),n.frequency.exponentialRampToValueAtTime(28,t+.18);const s=e.createGain();s.gain.setValueAtTime(1.4,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(s),s.connect(this._musicBus),n.start(t),n.stop(t+.22)}_snare(t){const e=this._ctx,n=Math.floor(e.sampleRate*.18),s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let f=0;f<n;f++)r[f]=Math.random()*2-1;const o=e.createBufferSource();o.buffer=s;const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1800;const c=e.createGain();c.gain.setValueAtTime(.55,t),c.gain.exponentialRampToValueAtTime(.001,t+.18),o.connect(a),a.connect(c),c.connect(this._musicBus),o.start(t);const l=e.createOscillator();l.frequency.setValueAtTime(220,t),l.frequency.exponentialRampToValueAtTime(100,t+.06);const h=e.createGain();h.gain.setValueAtTime(.35,t),h.gain.exponentialRampToValueAtTime(.001,t+.06),l.connect(h),h.connect(this._musicBus),l.start(t),l.stop(t+.06)}_hihat(t,e=1){const n=this._ctx,s=Math.floor(n.sampleRate*.035),r=n.createBuffer(1,s,n.sampleRate),o=r.getChannelData(0);for(let h=0;h<s;h++)o[h]=Math.random()*2-1;const a=n.createBufferSource();a.buffer=r;const c=n.createBiquadFilter();c.type="highpass",c.frequency.value=9e3;const l=n.createGain();l.gain.setValueAtTime(.12*e,t),l.gain.exponentialRampToValueAtTime(.001,t+.035),a.connect(c),c.connect(l),l.connect(this._musicBus),a.start(t)}_bass(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="sawtooth",r.frequency.value=e;const o=s.createBiquadFilter();o.type="lowpass",o.frequency.value=400,o.Q.value=3;const a=s.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.9,t+.025),a.gain.linearRampToValueAtTime(.5,t+n*.6),a.gain.linearRampToValueAtTime(0,t+n),r.connect(o),o.connect(a),a.connect(this._musicBus),r.start(t),r.stop(t+n)}_pad(t,e,n){const s=this._ctx;for(const r of e)for(const o of[-6,0,6]){const a=s.createOscillator();a.type="sawtooth",a.frequency.value=r,a.detune.value=o;const c=s.createBiquadFilter();c.type="lowpass",c.frequency.value=1800;const l=s.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.045,t+.35),l.gain.linearRampToValueAtTime(.025,t+n*.8),l.gain.linearRampToValueAtTime(0,t+n),a.connect(c),c.connect(l),l.connect(this._musicBus),a.start(t),a.stop(t+n)}}_melody(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="square",r.frequency.value=e;const o=s.createWaveShaper(),a=new Float32Array(64);for(let l=0;l<64;l++){const h=l*2/64-1;a[l]=Math.tanh(h*2.5)*.75}o.curve=a;const c=s.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.28,t+.02),c.gain.linearRampToValueAtTime(.18,t+n*.65),c.gain.linearRampToValueAtTime(0,t+n),r.connect(o),o.connect(c),c.connect(this._musicBus),r.start(t),r.stop(t+n)}_scheduleBeat(){if(!this._running)return;const e=this._ctx.currentTime,s=60/130,r=s*4,o=[{bass:73.42,pad:[146.83,174.61,220,293.66]},{bass:58.27,pad:[116.54,146.83,174.61,233.08]},{bass:87.31,pad:[174.61,220,261.63,349.23]},{bass:65.41,pad:[130.81,164.81,196,261.63]}],a=[587.33,0,523.25,493.88,440,493.88,440,392,440,0,493.88,523.25,587.33,523.25,440,392],c=Math.floor(this._beatIndex/4),l=this._beatIndex%4,h=o[c%o.length];(l===0||l===2)&&this._kick(e),(l===1||l===3)&&this._snare(e),this._hihat(e),this._hihat(e+s*.5,.5),l===0&&this._bass(e,h.bass,r),l===0&&this._pad(e,h.pad,r);const f=a[this._beatIndex%a.length];f&&this._melody(e,f,s*.75),this._beatIndex++,this._musicTimeout=setTimeout(()=>this._scheduleBeat(),(s-.02)*1e3)}}const fi=new u_;class p_{constructor(t,e,n,s,r,o,a,c,l,h,f){this.camera=t,this.worldData=n,this.worldRenderer=s,this.stats=r,this.inventory=o,this.mining=a,this.farming=c,this.hotbar=l,this.hud=h,this.itemRegistry=f,this.controls=new l_(t,e.domElement),this._keys={},this._vy=0,this._onGround=!1,this._raycaster=new l0,this._raycaster.far=p0,this._mouseDown=!1,this._rightMouseDown=!1,this._currentStation="hand",this.onStationChange=null,this.targetBlock=null,this._bobTimer=0,this._prevBob=0,this._stepTimer=0,this._sprinting=!1,this._setupInputListeners(e);const u=kt/2,d=Dt/2,_=n.surfaceY(u,d);t.position.set(u+.5,(_>=0?_:12)+1.8,d+.5)}lock(){this.controls.lock()}get isLocked(){return this.controls.isLocked}_setupInputListeners(t){window.addEventListener("keydown",e=>{this._keys[e.code]=!0;const n=parseInt(e.key);n>=1&&n<=9&&this.hotbar.select(n-1),e.code==="Space"&&this._onGround&&(this._vy=m0,this._onGround=!1),e.code==="KeyQ"&&this._dropHeldItem()}),window.addEventListener("keyup",e=>{this._keys[e.code]=!1}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousedown",e=>{if(this.controls.isLocked){if(e.button===0&&e.shiftKey){this._handleRightClick();return}e.button===0&&(this._mouseDown=!0),e.button===2&&(e.preventDefault(),this._handleRightClick())}}),window.addEventListener("mouseup",e=>{e.button===0&&(this._mouseDown=!1,this.mining.cancelBreak())}),window.addEventListener("wheel",e=>{this.controls.isLocked&&this.hotbar.scroll(e.deltaY>0?1:-1)})}update(t){var x,T,V,H;if(!this.controls.isLocked)return;this._sprinting=this._keys.ShiftLeft||this._keys.ShiftRight||this._keys.ControlLeft||this._keys.ControlRight;const e=_0*(this._sprinting?1.65:1),n=new N;this._keys.KeyW&&(n.z-=1),this._keys.KeyS&&(n.z+=1),this._keys.KeyA&&(n.x-=1),this._keys.KeyD&&(n.x+=1),n.normalize();const s=this.camera.position.x,r=this.camera.position.z;n.length()>0&&(this.controls.moveRight(n.x*e*t),this.controls.moveForward(-n.z*e*t));const o=Math.floor(this.camera.position.y-.6),a=Math.floor(this.camera.position.y-1.6),c=Math.floor(this.camera.position.x),l=Math.floor(this.camera.position.z),h=Math.floor(r);(this.worldData.isSolid(c,o,h)||this.worldData.isSolid(c,a,h))&&(this.camera.position.x=s),(this.worldData.isSolid(Math.floor(this.camera.position.x),o,l)||this.worldData.isSolid(Math.floor(this.camera.position.x),a,l))&&(this.camera.position.z=r);const f=Math.floor(this.camera.position.x),u=Math.floor(this.camera.position.z),d=Math.floor(this.camera.position.y-.5),_=Math.floor(this.camera.position.y-1.6),g=((T=(x=this.worldData).getBlock)==null?void 0:T.call(x,f,_,u))===14||((H=(V=this.worldData).getBlock)==null?void 0:H.call(V,f,d,u))===14||this.worldData.get(f,_,u)===14||this.worldData.get(f,d,u)===14,p=this.worldData.get(f,_,u)===v.LAVA||this.worldData.get(f,d,u)===v.LAVA;p&&this.stats.takeDamage(t*8),p?(this._vy=Math.max(this._vy-ds*t*.3,-1.2),this._keys.Space&&(this._vy=2)):g?(this._vy=Math.max(this._vy-ds*t*.3,-3),this._keys.Space&&(this._vy=4)):this._vy-=ds*t;const m=this.camera.position.y+this._vy*t,E=Math.floor(this.camera.position.y-1.8),y=Math.floor(m-1.8),b=(()=>{if(this._vy<=0){const X=Math.min(E,y),Z=Math.max(E,y);for(let z=Z;z>=X;z--)if(this.worldData.isSolid(f,z,u))return z}return-1})();if(b>=0?(this._vy=0,this._onGround=!0,this.camera.position.y=b+1+1.8):(this._onGround=g,this.camera.position.y=Math.max(1.8,m)),this.camera.position.x=Math.max(.5,Math.min(kt-.5,this.camera.position.x)),this.camera.position.z=Math.max(.5,Math.min(Dt-.5,this.camera.position.z)),this.camera.position.y<2){const X=kt/2,Z=Dt/2,z=this.worldData.surfaceY(X,Z);this.camera.position.set(X+.5,(z>=0?z:12)+1.8,Z+.5),this._vy=0,this.stats.takeDamage(5),this.hud.showPickup("You fell through the world! (-5 hp)")}const O=this._getHeldItem();if(this._mouseDown){const X=this._raycastBlock();X?this.mining.beginBreak(X.blockPos):this.mining.cancelBreak()}this.mining.update(t,O)&&this.hud.setBreakProgress(0),this._mouseDown&&this.mining._breakingPos?this.hud.setBreakProgress(Math.min(1,this.mining._breakProgress/this.mining._breakDuration)):this._mouseDown||this.hud.setBreakProgress(0);const R=n.length()>0&&this._onGround;R?this._bobTimer+=t*(this._sprinting?14:9):this._bobTimer=0;const D=R?Math.sin(this._bobTimer)*.032:0;if(this.camera.position.y+=D-this._prevBob,this._prevBob=D,R&&(this._stepTimer-=t,this._stepTimer<=0)){this._stepTimer=this._sprinting?.28:.42;const X=Math.floor(this.camera.position.x),Z=Math.floor(this.camera.position.z),z=Math.floor(this.camera.position.y-1.9),tt=this.worldData.get(X,z,Z),W={3:"stone",4:"cobble",7:"sand",15:"gravel",5:"wood",16:"wood",9:"stone"}[tt]||"grass";fi.playStep(W)}const j=this._raycastBlock();this.targetBlock=j?j.blockPos:null,this._updateStation()}_raycastBlock(){this._raycaster.setFromCamera({x:0,y:0},this.camera);const t=this.worldRenderer.allMeshes,e=this._raycaster.intersectObjects(t);if(e.length===0)return null;const n=e[0],s=n.point,r=n.face.normal.clone(),o=this._raycaster.ray.direction,a=[Math.floor(s.x+o.x*.01),Math.floor(s.y+o.y*.01),Math.floor(s.z+o.z*.01)],c=a[0],l=a[1],h=a[2],f=s.x-c,u=s.y-l,d=s.z-h,_=[f*(o.x>0?.5:1),(1-f)*(o.x<0?.5:1),u*(o.y>0?.5:1),(1-u)*(o.y<0?.5:1),d*(o.z>0?.5:1),(1-d)*(o.z<0?.5:1)],g=[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]],p=_.indexOf(Math.min(..._)),[m,E,y]=g[p],b=[c+m,l+E,h+y];return{blockPos:a,adjacentPos:b,normal:r}}_handleRightClick(){var s,r,o,a;const t=this._getHeldItem();if((t==null?void 0:t.category)==="food"&&this.stats.hunger<this.stats.maxHunger-1){this.stats.eat(t.foodValue),this.inventory.removeSlot(this.inventory.hotbarIndex),this.hud.showPickup(`Ate ${t.name}`);return}const e=this._raycastBlock();if(!e)return;if((t==null?void 0:t.id)==="summoning_stone"){const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===v.ALTAR){(s=this.onUseAltarWithStone)==null||s.call(this),this.inventory.remove("summoning_stone",1);return}this.hud.showPickup("Right-click the Altar in the swamp to use this!");return}if(t!=null&&t.isHoe&&this.mining.tillBlock(e.blockPos)){const l=this.inventory.hotbarIndex;this.inventory.damageTool(l,1,this.itemRegistry);return}if((t==null?void 0:t.category)==="seed"){if(this.farming.plant(t.id,e.blockPos,this.inventory,this.itemRegistry))return;this.farming.plant(t.id,e.adjacentPos,this.inventory,this.itemRegistry);return}const n=this.farming.tryHarvest(e.blockPos);if(n){this.inventory.add(n.itemId,n.count,this.itemRegistry),this.hud.showPickup(((r=this.itemRegistry.getItem(n.itemId))==null?void 0:r.name)??n.itemId);return}{const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===v.CHEST){this._openChest(c,l,h);return}}{const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===v.BED){(o=this.onSleepInBed)==null||o.call(this);return}}{const[c,l,h]=e.blockPos;if(this.worldData.get(c,l,h)===v.PORTAL){(a=this.onUsePortal)==null||a.call(this);return}}(t==null?void 0:t.blockId)>=0&&this.mining.placeBlock(e.adjacentPos,t.blockId)&&this.inventory.removeSlot(this.inventory.hotbarIndex)}_openChest(t,e,n){const s=[["bread",2,5,30],["cooked_meat",1,4,25],["iron_ore",2,6,25],["stick",4,12,20],["string",2,6,18],["bone",2,5,18],["cobblestone",6,16,15],["planks",4,10,15],["wheat_seed",3,8,12],["carrot",2,6,12],["carrot_seed",2,5,10],["potato_seed",2,5,10],["gravel",4,10,10]],r=[["iron_ingot",2,5,40],["crystal_shard",1,2,15],["stone_sword",1,1,20],["stone_pickaxe",1,1,18],["stone_axe",1,1,18],["iron_pickaxe",1,1,8],["iron_sword",1,1,6],["glass",2,6,12]],o=[["crystal_shard",2,4,40],["iron_ingot",4,8,30],["iron_sword",1,1,20],["iron_pickaxe",1,1,18],["crystal_sword",1,1,5],["bread",3,8,20]],a=kt/2,c=Dt/2,l=Math.sqrt((t-a)**2+(n-c)**2),h=l>120*4?o:l>60*4?r:s,f=3+Math.floor(Math.random()*3),u=h.reduce((E,y)=>E+y[3],0),d=[],_=new Set;for(let E=0;E<f;E++){let y=Math.random()*u;for(const b of h)if(y-=b[3],y<=0&&!_.has(b[0])){d.push(b),_.add(b[0]);break}}const g=[];for(const[E,y,b]of d){const O=y+Math.floor(Math.random()*(b-y+1));if(this.inventory.add(E,O,this.itemRegistry)!==!1){const R=this.itemRegistry.getItem(E);g.push(`${O}x ${(R==null?void 0:R.name)??E}`)}}this.worldData.set(t,e,n,v.AIR);const p=Math.floor(t/16),m=Math.floor(n/16);this.worldRenderer.rebuildChunk(p,m),fi.playBlockBreak(),this.hud.showPickup(g.length?`📦 Chest: ${g.join(", ")}`:"📦 Chest was empty")}_getHeldItem(){const t=this.inventory.selectedSlot;return t.itemId?this.itemRegistry.getItem(t.itemId):null}_dropHeldItem(){var s;if(!this.controls.isLocked)return;const t=this.inventory.selectedSlot;if(!t.itemId)return;const e=new N;this.camera.getWorldDirection(e);const n=this.camera.position.clone().add(e.multiplyScalar(1.5));n.y-=1,(s=this.onDropItem)==null||s.call(this,t.itemId,1,n),this.inventory.removeSlot(this.inventory.hotbarIndex)}_updateStation(){var r;const t=Math.floor(this.camera.position.x),e=Math.floor(this.camera.position.y-1.8),n=Math.floor(this.camera.position.z);let s="hand";for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)for(let c=-1;c<=1;c++){const l=this.worldData.get(t+o,e+c,n+a);l===v.CAMPFIRE&&s==="hand"&&(s="campfire"),l===v.CRAFTING_TABLE&&(s==="hand"||s==="campfire")&&(s="crafting_table"),l===v.FORGE&&(s="forge")}s!==this._currentStation&&(this._currentStation=s,(r=this.onStationChange)==null||r.call(this,s))}get currentStation(){return this._currentStation}attackMob(t,e){t.takeDamage(e)}setupAttackListener(t){window.addEventListener("mousedown",e=>{if(!this.controls.isLocked||e.button!==0)return;const n=this._getHeldItem();if(!(n!=null&&n.isSword)&&!(n!=null&&n.isAxe))return;const s=t(),r=this.camera.position;for(const o of s)if(!o.dead&&o.position.distanceTo(r)<4){o.takeDamage(n.damage),this.stats.updateTier(n);break}})}}class m_{constructor({id:t,name:e,category:n,tier:s=0,stackSize:r=64,damage:o=0,durability:a=0,foodValue:c=0,blockId:l=-1,isHoe:h=!1,isAxe:f=!1,isSword:u=!1,isPickaxe:d=!1,isShovel:_=!1,armorSlot:g=null,defense:p=0}){this.id=t,this.name=e,this.category=n,this.tier=s,this.stackSize=r,this.damage=o,this.durability=a,this.foodValue=c,this.blockId=l,this.isHoe=h,this.isAxe=f,this.isSword=u,this.isPickaxe=d,this.isShovel=_,this.armorSlot=g,this.defense=p}}const __=[{id:"wood_log",name:"Wood Log",category:"block",stackSize:64,blockId:5},{id:"cobblestone",name:"Cobblestone",category:"block",stackSize:64,blockId:4},{id:"dirt",name:"Dirt",category:"block",stackSize:64,blockId:2},{id:"sand",name:"Sand",category:"block",stackSize:64,blockId:7},{id:"gravel",name:"Gravel",category:"block",stackSize:64,blockId:15},{id:"planks",name:"Wood Planks",category:"block",stackSize:64,blockId:16},{id:"glass",name:"Glass",category:"block",stackSize:64,blockId:17},{id:"crafting_table",name:"Crafting Table",category:"block",stackSize:1,blockId:11},{id:"forge",name:"Forge",category:"block",stackSize:1,blockId:12},{id:"chest",name:"Chest",category:"block",stackSize:1,blockId:18},{id:"campfire",name:"Campfire",category:"block",stackSize:1,blockId:20},{id:"bed",name:"Bed",category:"block",stackSize:1,blockId:21},{id:"obsidian",name:"Obsidian",category:"block",stackSize:64,blockId:25},{id:"nether_portal",name:"Nether Portal",category:"block",stackSize:1,blockId:26},{id:"netherrack",name:"Netherrack",category:"block",stackSize:64,blockId:22},{id:"glowstone",name:"Glowstone",category:"block",stackSize:64,blockId:24},{id:"coral",name:"Coral",category:"block",stackSize:64,blockId:27},{id:"kelp",name:"Kelp",category:"block",stackSize:64,blockId:28},{id:"tall_grass",name:"Tall Grass",category:"misc",stackSize:64},{id:"flower",name:"Flower",category:"misc",stackSize:64},{id:"iron_ore",name:"Iron Ore",category:"misc",stackSize:64},{id:"iron_ingot",name:"Iron Ingot",category:"misc",stackSize:64},{id:"crystal_shard",name:"Crystal Shard",category:"misc",stackSize:64},{id:"stick",name:"Stick",category:"weapon",stackSize:64,damage:1.5,isSword:!0},{id:"string",name:"String",category:"misc",stackSize:64},{id:"bone",name:"Bone",category:"misc",stackSize:64},{id:"troll_fang",name:"Troll Fang",category:"misc",stackSize:1},{id:"witch_eye",name:"Witch's Eye",category:"misc",stackSize:1},{id:"golem_core",name:"Golem Core",category:"misc",stackSize:1},{id:"summoning_stone",name:"Summoning Stone",category:"misc",stackSize:1},{id:"wheat_seed",name:"Wheat Seed",category:"seed",stackSize:64},{id:"wheat",name:"Wheat",category:"food",stackSize:64,foodValue:2},{id:"bread",name:"Bread",category:"food",stackSize:16,foodValue:5},{id:"carrot_seed",name:"Carrot Seed",category:"seed",stackSize:64},{id:"carrot",name:"Carrot",category:"food",stackSize:64,foodValue:3},{id:"potato_seed",name:"Potato",category:"seed",stackSize:64},{id:"baked_potato",name:"Baked Potato",category:"food",stackSize:16,foodValue:5},{id:"cooked_meat",name:"Cooked Meat",category:"food",stackSize:16,foodValue:8},{id:"raw_meat",name:"Raw Meat",category:"food",stackSize:16,foodValue:2},{id:"raw_fish",name:"Raw Fish",category:"food",stackSize:16,foodValue:2},{id:"cooked_fish",name:"Cooked Fish",category:"food",stackSize:16,foodValue:6},{id:"wooden_axe",name:"Wooden Axe",category:"tool",tier:1,stackSize:1,damage:2.5,durability:60,isAxe:!0},{id:"wooden_pickaxe",name:"Wooden Pickaxe",category:"tool",tier:1,stackSize:1,damage:2,durability:60,isPickaxe:!0},{id:"wooden_hoe",name:"Wooden Hoe",category:"tool",tier:1,stackSize:1,damage:1,durability:60,isHoe:!0},{id:"wooden_shovel",name:"Wooden Shovel",category:"tool",tier:1,stackSize:1,damage:1.5,durability:60,isShovel:!0},{id:"wooden_sword",name:"Wooden Sword",category:"weapon",tier:1,stackSize:1,damage:4,durability:60,isSword:!0},{id:"stone_axe",name:"Stone Axe",category:"tool",tier:2,stackSize:1,damage:3.5,durability:130,isAxe:!0},{id:"stone_pickaxe",name:"Stone Pickaxe",category:"tool",tier:2,stackSize:1,damage:3,durability:130,isPickaxe:!0},{id:"stone_hoe",name:"Stone Hoe",category:"tool",tier:2,stackSize:1,damage:1.5,durability:130,isHoe:!0},{id:"stone_shovel",name:"Stone Shovel",category:"tool",tier:2,stackSize:1,damage:2.5,durability:130,isShovel:!0},{id:"stone_sword",name:"Stone Sword",category:"weapon",tier:2,stackSize:1,damage:5,durability:130,isSword:!0},{id:"iron_axe",name:"Iron Axe",category:"tool",tier:3,stackSize:1,damage:5,durability:250,isAxe:!0},{id:"iron_pickaxe",name:"Iron Pickaxe",category:"tool",tier:3,stackSize:1,damage:4.5,durability:250,isPickaxe:!0},{id:"iron_hoe",name:"Iron Hoe",category:"tool",tier:3,stackSize:1,damage:2,durability:250,isHoe:!0},{id:"iron_shovel",name:"Iron Shovel",category:"tool",tier:3,stackSize:1,damage:3.5,durability:250,isShovel:!0},{id:"iron_sword",name:"Iron Sword",category:"weapon",tier:3,stackSize:1,damage:7,durability:250,isSword:!0},{id:"crystal_axe",name:"Crystal Axe",category:"tool",tier:4,stackSize:1,damage:7,durability:500,isAxe:!0},{id:"crystal_pickaxe",name:"Crystal Pickaxe",category:"tool",tier:4,stackSize:1,damage:6.5,durability:500,isPickaxe:!0},{id:"crystal_shovel",name:"Crystal Shovel",category:"tool",tier:4,stackSize:1,damage:5.5,durability:500,isShovel:!0},{id:"crystal_sword",name:"Crystal Sword",category:"weapon",tier:4,stackSize:1,damage:12,durability:500,isSword:!0},{id:"wooden_helmet",name:"Wooden Helmet",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"helmet",defense:1},{id:"wooden_chestplate",name:"Wooden Chestplate",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"chestplate",defense:2},{id:"wooden_leggings",name:"Wooden Leggings",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"leggings",defense:2},{id:"wooden_boots",name:"Wooden Boots",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"boots",defense:1},{id:"stone_helmet",name:"Stone Helmet",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"helmet",defense:1},{id:"stone_chestplate",name:"Stone Chestplate",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"chestplate",defense:3},{id:"stone_leggings",name:"Stone Leggings",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"leggings",defense:3},{id:"stone_boots",name:"Stone Boots",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"boots",defense:2},{id:"iron_helmet",name:"Iron Helmet",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"helmet",defense:2},{id:"iron_chestplate",name:"Iron Chestplate",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"chestplate",defense:4},{id:"iron_leggings",name:"Iron Leggings",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"leggings",defense:4},{id:"iron_boots",name:"Iron Boots",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"boots",defense:2},{id:"crystal_helmet",name:"Crystal Helmet",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"helmet",defense:3},{id:"crystal_chestplate",name:"Crystal Chestplate",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"chestplate",defense:6},{id:"crystal_leggings",name:"Crystal Leggings",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"leggings",defense:5},{id:"crystal_boots",name:"Crystal Boots",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"boots",defense:3}];class g_{constructor(){this._db=new Map;for(const t of __)this._db.set(t.id,new m_(t))}getItem(t){return this._db.get(t)??null}all(){return[...this._db.values()]}}class bt{constructor(t,e,n,s,r,o,a=[]){this.id=t,this.ingredients=e,this.resultItem=n,this.resultCount=s,this.station=r,this.requiredTier=o,this.killedBosses=a}}const er=["hand","campfire","crafting_table","forge"],v_=[new bt("planks",{wood_log:1},"planks",4,"hand",0),new bt("stick",{planks:1},"stick",4,"hand",0),new bt("crafting_table",{planks:4},"crafting_table",1,"hand",0),new bt("campfire",{wood_log:3},"campfire",1,"hand",0),new bt("bread",{wheat:3},"bread",1,"hand",0),new bt("cooked_meat",{raw_meat:1},"cooked_meat",1,"campfire",0),new bt("cooked_fish",{raw_fish:1},"cooked_fish",1,"campfire",0),new bt("baked_potato",{potato_seed:1},"baked_potato",1,"campfire",0),new bt("wooden_axe",{planks:3,stick:2},"wooden_axe",1,"crafting_table",0),new bt("wooden_pickaxe",{planks:3,stick:2},"wooden_pickaxe",1,"crafting_table",0),new bt("wooden_hoe",{planks:2,stick:2},"wooden_hoe",1,"crafting_table",0),new bt("wooden_shovel",{planks:1,stick:2},"wooden_shovel",1,"crafting_table",0),new bt("wooden_sword",{planks:2,stick:1},"wooden_sword",1,"crafting_table",0),new bt("stone_axe",{cobblestone:3,stick:2},"stone_axe",1,"crafting_table",1),new bt("stone_pickaxe",{cobblestone:3,stick:2},"stone_pickaxe",1,"crafting_table",1),new bt("stone_hoe",{cobblestone:2,stick:2},"stone_hoe",1,"crafting_table",1),new bt("stone_shovel",{cobblestone:1,stick:2},"stone_shovel",1,"crafting_table",1),new bt("stone_sword",{cobblestone:2,stick:1},"stone_sword",1,"crafting_table",1),new bt("iron_axe",{iron_ingot:3,stick:2},"iron_axe",1,"crafting_table",2),new bt("iron_pickaxe",{iron_ingot:3,stick:2},"iron_pickaxe",1,"crafting_table",2),new bt("iron_hoe",{iron_ingot:2,stick:2},"iron_hoe",1,"crafting_table",2),new bt("iron_shovel",{iron_ingot:1,stick:2},"iron_shovel",1,"crafting_table",2),new bt("iron_sword",{iron_ingot:2,stick:1},"iron_sword",1,"crafting_table",2),new bt("glass",{sand:1},"glass",1,"crafting_table",0),new bt("chest",{planks:8},"chest",1,"crafting_table",0),new bt("bed",{planks:3,string:3},"bed",1,"crafting_table",0),new bt("iron_ingot",{iron_ore:1},"iron_ingot",1,"forge",0),new bt("crystal_axe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_axe",1,"forge",3),new bt("crystal_pickaxe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_pickaxe",1,"forge",3),new bt("crystal_shovel",{crystal_shard:1,iron_ingot:1,stick:2},"crystal_shovel",1,"forge",3),new bt("crystal_sword",{crystal_shard:2,iron_ingot:1},"crystal_sword",1,"forge",3),new bt("wooden_helmet",{planks:5},"wooden_helmet",1,"crafting_table",0),new bt("wooden_chestplate",{planks:8},"wooden_chestplate",1,"crafting_table",0),new bt("wooden_leggings",{planks:7},"wooden_leggings",1,"crafting_table",0),new bt("wooden_boots",{planks:4},"wooden_boots",1,"crafting_table",0),new bt("stone_helmet",{cobblestone:5},"stone_helmet",1,"crafting_table",1),new bt("stone_chestplate",{cobblestone:8},"stone_chestplate",1,"crafting_table",1),new bt("stone_leggings",{cobblestone:7},"stone_leggings",1,"crafting_table",1),new bt("stone_boots",{cobblestone:4},"stone_boots",1,"crafting_table",1),new bt("iron_helmet",{iron_ingot:5},"iron_helmet",1,"crafting_table",2),new bt("iron_chestplate",{iron_ingot:8},"iron_chestplate",1,"crafting_table",2),new bt("iron_leggings",{iron_ingot:7},"iron_leggings",1,"crafting_table",2),new bt("iron_boots",{iron_ingot:4},"iron_boots",1,"crafting_table",2),new bt("crystal_helmet",{crystal_shard:3,iron_ingot:2},"crystal_helmet",1,"forge",3),new bt("crystal_chestplate",{crystal_shard:6,iron_ingot:2},"crystal_chestplate",1,"forge",3),new bt("crystal_leggings",{crystal_shard:5,iron_ingot:2},"crystal_leggings",1,"forge",3),new bt("crystal_boots",{crystal_shard:3,iron_ingot:1},"crystal_boots",1,"forge",3),new bt("obsidian",{cobblestone:4,crystal_shard:2},"obsidian",1,"forge",3),new bt("nether_portal",{obsidian:4},"nether_portal",1,"forge",3),new bt("summoning_stone",{troll_fang:1,witch_eye:1,golem_core:1},"summoning_stone",1,"forge",3,["cave_troll","swamp_witch","stone_golem"])];class x_{constructor(){this.recipes=v_}getAvailable(t,e,n,s=new Set){const r=er.indexOf(e);return this.recipes.filter(o=>{if(er.indexOf(o.station)>r||o.requiredTier>n)return!1;for(const c of o.killedBosses)if(!s.has(c))return!1;return t.hasAll(o.ingredients)})}getAllVisible(t,e,n,s=new Set){const r=er.indexOf(e);return this.recipes.filter(o=>{if(er.indexOf(o.station)>r||o.requiredTier>n)return!1;for(const c of o.killedBosses)if(!s.has(c))return!1;return!0})}craft(t,e,n){if(!e.hasAll(t.ingredients))return!1;for(const[s,r]of Object.entries(t.ingredients))e.remove(s,r);return e.add(t.resultItem,t.resultCount,n),!0}}class y_{constructor(t,e,n,s,r){this.worldData=t,this.worldRenderer=e,this.inventory=n,this.stats=s,this.itemRegistry=r,this._breakingPos=null,this._breakProgress=0,this._breakDuration=0,this._mineSoundTimer=0,this.onBreakProgress=null,this.onPickup=null}beginBreak(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r===v.AIR)return;const o=di[r];!o||o.hardness===999||this._breakingPos&&this._breakingPos[0]===e&&this._breakingPos[1]===n&&this._breakingPos[2]===s||(this._breakingPos=[e,n,s],this._breakProgress=0,this._breakDuration=Math.max(.15,o.hardness*.6),this._mineSoundTimer=0)}cancelBreak(){var t;this._breakingPos=null,this._breakProgress=0,(t=this.onBreakProgress)==null||t.call(this,0)}update(t,e){var h;if(!this._breakingPos)return!1;const[n,s,r]=this._breakingPos,o=this.worldData.get(n,s,r);if(o===v.AIR)return this.cancelBreak(),!1;const a=di[o],c=this._toolSpeedMult(e,a);this._breakProgress+=t*c,this._mineSoundTimer-=t,this._mineSoundTimer<=0&&(fi.playMine(),this._mineSoundTimer=.3);const l=Math.min(1,this._breakProgress/this._breakDuration);return(h=this.onBreakProgress)==null||h.call(this,l),this._breakProgress>=this._breakDuration?(this._completeBreak(n,s,r,a,e),!0):!1}_toolSpeedMult(t,e){if(!t)return e.minTier===0?1:.2;const n=t.tier-e.minTier;return n<0?.3:1+n*.5}_completeBreak(t,e,n,s,r){var h;this.worldData.set(t,e,n,v.AIR);const o=Math.floor(t/Fe),a=Math.floor(n/Fe);this.worldRenderer.rebuildChunk(o,a),this.cancelBreak();try{fi.playBlockBreak()}catch(f){console.error("playBlockBreak failed:",f)}const c=s.dropItem===null?s.name:s.dropItem,l=this.itemRegistry.getItem(c);if(l)try{this.inventory.add(c,s.dropCount,this.itemRegistry),(h=this.onPickup)==null||h.call(this,l.name)}catch(f){console.error("Failed to add mined item to inventory:",f)}if(r&&r.durability>0){const f=this._findHotbarIndex(r);if(f!==-1)try{this.inventory.damageTool(f,1,this.itemRegistry)}catch(u){console.error("Failed to damage tool:",u)}}}_findHotbarIndex(t){for(let e=0;e<9;e++)if(this.inventory.slots[e].itemId===t.id)return e;return-1}placeBlock(t,e){const[n,s,r]=t;if(!this.worldData.inBounds(n,s,r)||this.worldData.get(n,s,r)!==v.AIR)return!1;this.worldData.set(n,s,r,e);const o=Math.floor(n/Fe),a=Math.floor(r/Fe);return this.worldRenderer.rebuildChunk(o,a),!0}tillBlock(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r!==v.GRASS&&r!==v.DIRT)return!1;this.worldData.set(e,n,s,v.FARMLAND);const o=Math.floor(e/Fe),a=Math.floor(s/Fe);return this.worldRenderer.rebuildChunk(o,a),!0}}class go{constructor({id:t,name:e,seedItem:n,harvestItem:s,harvestCount:r,growthTime:o,stages:a=4}){this.id=t,this.name=e,this.seedItem=n,this.harvestItem=s,this.harvestCount=r,this.growthTime=o,this.stages=a,this.stageColors=["#8b7a1a","#aaaa22","#88cc44","#44aa22"]}}const S_={wheat:new go({id:"wheat",name:"Wheat",seedItem:"wheat_seed",harvestItem:"wheat",harvestCount:2,growthTime:25}),carrot:new go({id:"carrot",name:"Carrot",seedItem:"carrot_seed",harvestItem:"carrot",harvestCount:1,growthTime:35}),potato:new go({id:"potato",name:"Potato",seedItem:"potato_seed",harvestItem:"baked_potato",harvestCount:1,growthTime:40})};function M_(i){return Object.values(S_).find(t=>t.seedItem===i)??null}class E_{constructor(t,e,n){this.cropType=t,this.worldPos=e,this.stage=0,this.timer=0;const s=new hi(.6,.6),r=new oi({color:t.stageColors[0],side:ke});this.mesh=new Ee(s,r),this.mesh.rotation.y=Math.PI/4,this.mesh.position.set(e[0]+.5,e[1]+.8,e[2]+.5),n.add(this.mesh)}updateVisual(){this.mesh.material.color.set(this.cropType.stageColors[Math.min(this.stage,3)]);const t=.4+this.stage*.2;this.mesh.scale.setScalar(t),this.mesh.position.y=this.worldPos[1]+.4+this.stage*.15}}class T_{constructor(t,e){this.worldData=t,this.scene=e,this._crops=[],this.onHarvest=null}plant(t,e,n,s){const[r,o,a]=e;if(this.worldData.get(r,o,a)!==v.FARMLAND||this.worldData.get(r,o+1,a)!==v.AIR)return!1;const c=M_(t);if(!c||this._crops.some(h=>h.worldPos[0]===r&&h.worldPos[2]===a))return!1;n.remove(t,1);const l=new E_(c,[r,o,a],this.scene);return this._crops.push(l),!0}update(t){for(const e of this._crops)e.stage>=e.cropType.stages-1||(e.timer+=t,e.timer>=e.cropType.growthTime&&(e.timer=0,e.stage++,e.updateVisual()))}tryHarvest(t){const[e,n,s]=t,r=this._crops.findIndex(a=>a.worldPos[0]===e&&a.worldPos[2]===s);if(r===-1)return null;const o=this._crops[r];return o.stage<o.cropType.stages-1?null:(this.scene.remove(o.mesh),o.mesh.geometry.dispose(),this._crops.splice(r,1),{itemId:o.cropType.harvestItem,count:o.cropType.harvestCount})}removeCropAt(t){const e=this._crops.findIndex(s=>s.worldPos[0]===t[0]&&s.worldPos[2]===t[2]);if(e===-1)return;const n=this._crops[e];this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this._crops.splice(e,1)}}const nr=[0,.12,.4,.48].map(i=>i/.5),$c=[.55,.95].map(i=>(i-.5)/.5),vo=[[nr[0]*rn,.7,.45,.2],[nr[1]*rn,.5,.7,1],[nr[2]*rn,.35,.6,.95],[nr[3]*rn,.65,.4,.2],[rn+$c[0]*(1-rn),.04,.04,.12],[rn+$c[1]*(1-rn),.04,.04,.12],[1,.7,.45,.2]];function b_(i){for(let t=0;t<vo.length-1;t++){const[e,n,s,r]=vo[t],[o,a,c,l]=vo[t+1];if(i>=e&&i<=o){const h=(i-e)/(o-e);return{r:n+h*(a-n),g:s+h*(c-s),b:r+h*(l-r)}}}return{r:.5,g:.7,b:1}}class A_{constructor(t,e,n){this.scene=t,this.ambient=e,this.dirLight=n,this.timeOfDay=.05,this.dayNumber=1,this._wasNight=!1,this.onNightBegin=null,this.onDayBegin=null}update(t){var l,h;this.timeOfDay=(this.timeOfDay+t/d0)%1;const{r:e,g:n,b:s}=b_(this.timeOfDay);this.scene.background=new Bt(e,n,s),this.scene.fog=new ms(new Bt(e,n,s),.007);const r=this.timeOfDay>=rn,o=rn/2,a=r?.08:.6+(1-Math.abs(this.timeOfDay-o)/o)*.4;this.ambient.intensity=Math.max(.06,a);const c=this.timeOfDay*Math.PI*2;this.dirLight.position.set(Math.cos(c)*30,Math.sin(c)*30,15),this.dirLight.intensity=r?0:.8,r&&!this._wasNight?(l=this.onNightBegin)==null||l.call(this):!r&&this._wasNight&&(this.dayNumber++,(h=this.onDayBegin)==null||h.call(this,this.dayNumber)),this._wasNight=r}get isNight(){return this.timeOfDay>=rn}}class Sn{constructor({id:t,name:e,color:n,health:s,damage:r,speed:o,detectionRange:a,attackRange:c,attackCooldown:l,scale:h=[1,1.8,1],dropItems:f=[]}){this.id=t,this.name=e,this.color=n,this.health=s,this.damage=r,this.speed=o,this.detectionRange=a,this.attackRange=c,this.attackCooldown=l,this.scale=h,this.dropItems=f}}const _s={zombie:new Sn({id:"zombie",name:"Zombie",color:"#2d5e2d",health:10,damage:2,speed:2.5,detectionRange:18,attackRange:1.8,attackCooldown:1.5,dropItems:[{itemId:"raw_meat",chance:.7,count:1}]}),skeleton:new Sn({id:"skeleton",name:"Skeleton",color:"#ccccaa",health:8,damage:1.5,speed:2.8,detectionRange:22,attackRange:1.5,attackCooldown:1.2,dropItems:[{itemId:"bone",chance:.8,count:1},{itemId:"string",chance:.4,count:1}]}),spider:new Sn({id:"spider",name:"Spider",color:"#1a0a0a",health:6,damage:2.5,speed:4,detectionRange:16,attackRange:2,attackCooldown:.8,scale:[1.4,.8,1.4],dropItems:[{itemId:"string",chance:.9,count:2}]}),cow:new Sn({id:"cow",name:"Cow",color:"#8B4513",health:10,damage:0,speed:1.8,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1.2,1,1.2],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),pig:new Sn({id:"pig",name:"Pig",color:"#FFB6C1",health:8,damage:0,speed:2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.8,1],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),sheep:new Sn({id:"sheep",name:"Sheep",color:"#E8E8E8",health:8,damage:0,speed:1.9,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.9,1],dropItems:[{itemId:"raw_meat",chance:1,count:1}]}),chicken:new Sn({id:"chicken",name:"Chicken",color:"#FFFFFF",health:4,damage:0,speed:2.2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[.6,.7,.6],dropItems:[{itemId:"raw_meat",chance:.8,count:1}]}),fish:new Sn({id:"fish",name:"Fish",color:"#ff8c1a",health:2,damage:0,speed:1.6,detectionRange:0,attackRange:0,attackCooldown:999,scale:[.6,.42,1.05],dropItems:[{itemId:"raw_fish",chance:1,count:1}]}),shark:new Sn({id:"shark",name:"Shark",color:"#e8ecef",health:14,damage:3,speed:3.2,detectionRange:12,attackRange:1.8,attackCooldown:1.3,scale:[.9,.7,2.2],dropItems:[{itemId:"raw_fish",chance:.6,count:1},{itemId:"bone",chance:.3,count:1}]})};function yt(i,t,e,n){return new Ee(new Rn(i,t,e),new yr({color:n}))}class gs{constructor(t,e,n){this.mobType=t,this.scene=n,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this._vy=0,this.onDeath=null,this._parts=[],this.mesh=new Bn,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),this._buildAppearance(),this._buildHealthBar(),n.add(this.mesh)}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildAppearance(){const t=this.mobType.id;t==="spider"?this._buildSpider():t==="cow"||t==="pig"||t==="sheep"||t==="chicken"?this._buildAnimal():t==="fish"||t==="shark"?this._buildFish():this._buildHumanoid()}_buildFish(){const t=this.mobType.id==="shark",e=this.mobType.scale,n=this.mobType.color,s=t?"#f5f7f8":"#ffe6a8",r=t?"#3a4850":"#e0600a",o=e[2]*.7/2,a=e[0]*.45,c=e[1]*.55,l=e[0]*.7,h=e[1]*.85,f=e[0]*.32,u=e[1]*.45,d=e[2]*.7/3;this._addPart(yt(a,c,d*1.1,n),0,c*.05,o-d*.55),this._addPart(yt(l,h,d*1.2,n),0,0,o-d*1.6),this._addPart(yt(f,u,d,n),0,-h*.05,o-d*2.7),this._addPart(yt(l*.7,h*.28,d*2.6,s),0,-h*.42,o-d*1.5);const _=-o-.02;for(const y of[-1,1]){const b=yt(.05,u*.85,d*1.3,r);b.rotation.x=y*.5,this._addPart(b,0,y*u*.35,_-d*.4)}const g=h*(t?.95:.6),p=yt(.05,g,d*(t?1.1:.8),r);p.rotation.x=-.35,this._addPart(p,0,h/2+g*.35,o-d*1.4);const m=yt(.04,g*.45,d*.7,r);m.rotation.x=.35,this._addPart(m,0,-h/2-g*.15,o-d*2);for(const y of[-1,1]){const b=yt(l*.35,.05,d*.9,r);b.rotation.z=y*.55,this._addPart(b,y*(l/2+.05),-h*.1,o-d*.9)}for(let y=0;y<3;y++){const b=yt(.02,c*.5,.04,t?"#20282c":"#a03000");b.position.set(a/2+.01,c*.05,o-d*(1+y*.18)),this.mesh.add(b)}const E=t?.06:.08;for(const y of[-a*.4,a*.4]){const b=yt(E,E,.03,t?"#111111":"#1a1a1a");if(b.position.set(y,c*.2,o-d*.2),this.mesh.add(b),!t){const O=yt(.025,.025,.01,"#ffffff");O.position.set(y+.02,c*.25,o-d*.18),this.mesh.add(O)}}if(t){const y=yt(a*.7,.03,.04,"#f5f5f0");y.position.set(0,-c*.22,o-d*.15),this.mesh.add(y)}else for(const y of[-.05,.15]){const b=yt(l*.75,h*.9,.04,"#ffffff");b.position.set(0,0,o-d*(1.2+y)),this.mesh.add(b)}}_buildHumanoid(){const t=this.mobType.id,e=this.mobType.scale[1],n=e/2,s=t==="zombie",r=s?"#3d7a35":"#d8cca0",o=s?"#2a5a24":"#c0b8a0",a=s?"#4a3010":"#c0b080",c=s?"#3a2408":"#a89868",l=s?"#3a2810":"#b8a870",h=e*.27,f=.5;this._addPart(yt(f,h,f,r),0,n-h/2,0),this._addPart(yt(f*1.01,h*.3,f*1.01,o),0,n-h*.85,0);const u=s?"#cc0000":"#333300";for(const R of[-.12,.12]){const D=yt(.1,.08,.02,u);D.position.set(R,n-h/2+.04,f/2),this.mesh.add(D);const j=yt(.12,.03,.02,s?"#1a3010":"#8a8060");j.position.set(R,n-h/2+.1,f/2),this.mesh.add(j)}const d=yt(s?.16:.2,.03,.02,s?"#1a0808":"#3a3020");d.position.set(0,n-h*.78,f/2),this.mesh.add(d);const _=e*.33,g=.65,p=n-h-_/2;if(this._addPart(yt(g,_*.62,.32,a),0,p+_*.18,0),this._addPart(yt(g*.82,_*.4,.3,c),0,p-_*.28,0),s)for(const R of[-g*.3,0,g*.3]){const D=yt(.12,.1,.28,c);D.position.set(R,p-_*.52,0),this.mesh.add(D)}const m=e*.34,E=.2,y=(g+E)/2+.01;for(const R of[-1,1]){const D=yt(E,m,E,r);s&&(D.rotation.x=-.7),this._addPart(D,R*y,p,s?.18:0);const j=yt(E*1.05,m*.22,E*1.05,o);s?j.position.set(R*y,p-m*.15,.18+m*.62):j.position.set(R*y,p-m*.42,0),this.mesh.add(j)}const b=e*.4,O=.26,C=-n+b/2;for(const R of[-1,1])this._addPart(yt(O,b*.75,O,l),R*.18,C+b*.12,0),this._addPart(yt(O*1.05,b*.3,O*1.1,s?"#1a1008":"#5a5040"),R*.18,C-b*.35,.02);if(!s){for(let D=0;D<3;D++){const j=yt(g*.8,.06,.01,D%2?"#ccc090":"#c8bc8a");j.position.set(0,p+_/2-.12-D*.12,.17),this.mesh.add(j)}const R=yt(g*.55,.1,.24,"#c8bc8a");R.position.set(0,p-_*.5,0),this.mesh.add(R)}}_buildAnimal(){const t=this.mobType.id,e=this.mobType.scale,n=this.mobType.color;let s=n,r=n,o=null;t==="cow"?(s="#5C3317",r="#8B4513",o="#F5F5F5"):t==="pig"?(s="#FF9090",r="#FFB6C1"):t==="sheep"?(s="#999999",r="#CCCCCC"):t==="chicken"&&(s="#FF6600",r="#FFFFFF",o="#FF4400");const a=e[0]*.7,c=e[1]*.4,l=e[2]*.9,h=0;if(this._addPart(yt(a,c,l,n),0,h,0),t==="sheep"){this._addPart(yt(a+.12,c+.1,l+.1,"#E8E8E8"),0,h+.05,0);for(const m of[-l*.25,0,l*.25])this._addPart(yt(a*.55,.1,l*.2,"#f0f0f0"),0,h+c*.6,m)}t==="cow"&&o&&(this._addPart(yt(a*.5,c*.6,l*.5,o),0,h-.05,0),this._addPart(yt(a*1.01,c*.35,l*.28,o),0,h+c*.15,-l*.22),this._addPart(yt(a*.4,c*.3,l*.22,o),a*.36,h-c*.05,l*.15));const f=e[0]*(t==="chicken"?.35:.45),u=e[1]*(t==="chicken"?.3:.35),d=e[2]*(t==="pig"?.4:.35),_=-(l/2+d/2);if(this._addPart(yt(f,u,d,r),0,h+c*.15,_),t!=="chicken"){const m=t==="cow"?"#5C3317":t==="pig"?"#FF9090":t==="sheep"?"#CCCCCC":s,E=h+c*.15+u*.55;for(const y of[-1,1]){const b=yt(f*.25,u*.35,d*.2,m);b.rotation.z=y*.3,b.position.set(y*f*.55,E,_+d*.15),this.mesh.add(b)}}if(t==="cow")for(const m of[-1,1]){const E=yt(.05,.16,.05,"#e8e0c8");E.rotation.z=m*.2,E.position.set(m*f*.42,h+c*.15+u*.62,_+d*.2),this.mesh.add(E)}if(t==="pig"){this._addPart(yt(f*.6,u*.4,.08,"#FF8080"),0,h,_-d/2);for(const m of[-.04,.04]){const E=yt(.02,.02,.02,"#a04040");E.position.set(m,h,_-d/2-.03),this.mesh.add(E)}}if(t==="sheep"||t==="cow"){const m=yt(f*.55,u*.35,.06,t==="sheep"?"#e0a0a0":"#3a281a");m.position.set(0,h,_-d/2+.02),this.mesh.add(m)}if(t==="chicken"){const m=yt(.1,.08,.12,"#FFAA00");m.position.set(0,h+c*.1,_-d/2-.04),this.mesh.add(m)}t==="chicken"&&o&&(this._addPart(yt(.08,.12,.06,o),0,h+c*.15+u*.5,_),this._addPart(yt(.1,.08,.04,o),0,h+c*.1,_-d/2-.02));for(const m of[-f*.28,f*.28]){const E=yt(.06,.06,.03,"#1a1a1a");E.position.set(m,h+c*.15+u*.1,_-d/2),this.mesh.add(E)}const g=e[1]*.38,p=h-c/2-g/2;if(t==="chicken"){const m=e[0]*.06,E=e[2]*.06,y=a*.18;for(const b of[-y,y]){this._addPart(yt(m,g,E,s),b,p,0);const O=yt(m*2.2,m*.5,E*2.2,s);O.position.set(b,p-g/2,E*.8),this.mesh.add(O)}}else{const m=e[0]*.14,E=e[2]*.14,y=a*.28,b=l*.28;for(const[O,C]of[[-y,-b],[y,-b],[-y,b],[y,b]])this._addPart(yt(m,g*.7,E,s),O,p+g*.15,C),this._addPart(yt(m*1.05,g*.3,E*1.05,t==="pig"?"#cc6060":"#3a2818"),O,p-g*.35,C)}if(t!=="chicken"&&(this._addPart(yt(.1,.1,.12,s),0,h+c*.3,l/2+.06),t==="pig"&&this._addPart(yt(.06,.06,.06,s),.04,h+c*.4,l/2+.1)),t==="chicken")for(const[m,E,y]of[[0,0,1],[.06,.02,.75],[-.06,.02,.75]])this._addPart(yt(.15*y,.2*y,.08,"#DDDDDD"),0,h+c*.4+m,l/2+.04+E)}_buildSpider(){this._addPart(yt(.85,.4,.6,"#2a1010"),0,.05,-.2),this._addPart(yt(.7,.55,.65,"#150808"),0,.08,.52),this._addPart(yt(.5,.15,.66,"#3a1818"),0,-.1,.52);for(const e of[.28,.5,.72]){const n=yt(.71,.06,.05,"#450e0e");n.position.set(0,.28,e),this.mesh.add(n)}this._addPart(yt(.42,.3,.3,"#1a0808"),0,.08,-.62);for(const e of[-1,1]){const n=yt(.06,.14,.06,"#0a0404");n.rotation.x=.3,n.position.set(e*.1,-.08,-.78),this.mesh.add(n)}for(const[e,n]of[[-.1,.2],[.1,.2],[-.15,.14],[.15,.14]]){const s=yt(.06,.06,.03,"#ff1100");s.position.set(e,n,-.77),this.mesh.add(s)}const t=[-.5,-.2,.15,.45];for(const e of[-1,1])for(let n=0;n<4;n++){const s=e*t[n],r=-.15+n*.2,o=yt(.4,.07,.08,"#0f0606");o.rotation.y=s,o.rotation.z=e*.25,o.position.set(e*.32,.05,r),this.mesh.add(o),this._parts.push(o),o._origColor="#"+o.material.color.getHexString(),o.castShadow=!0;const a=yt(.34,.06,.06,"#150808");a.rotation.y=s,a.rotation.z=e*.7,a.position.set(e*.62,-.1,r),this.mesh.add(a),this._parts.push(a),a._origColor="#"+a.material.color.getHexString(),a.castShadow=!0}}_buildHealthBar(){const t=document.createElement("canvas");t.width=64,t.height=8,this._hbCtx=t.getContext("2d"),this._hbTex=new Bl(t);const e=new ba({map:this._hbTex,depthTest:!1});this._hbSprite=new Ol(e),this._hbSprite.scale.set(1.2,.15,1),this._hbSprite.position.set(0,this.mobType.scale[1]/2+.4,0),this.mesh.add(this._hbSprite),this._updateHealthBar()}_updateHealthBar(){const t=this._hbCtx;t.clearRect(0,0,64,8),t.fillStyle="#400000",t.fillRect(0,0,64,8),t.fillStyle="#e74c3c",t.fillRect(0,0,Math.floor(64*this.health/this.maxHealth),8),this._hbTex.needsUpdate=!0}get position(){return this.mesh.position}takeDamage(t){this.dead||(fi.playHit(),this.health=Math.max(0,this.health-t),this._updateHealthBar(),this._parts.forEach(e=>e.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(e=>e.material.color.set(e._origColor))},150),this.health<=0&&this._die())}_die(){var t;this.dead||(this.dead=!0,this._dropLoot(),this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),(t=this.onDeath)==null||t.call(this,this))}_dropLoot(){}applyGravity(t,e){this._vy-=ds*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),o=Math.floor(n.y-this.mobType.scale[1]/2-.1),a=Math.floor(n.z);if(e.isSolid(r,o,a)){this._vy=0;const c=e.surfaceY(r,a);c>=0&&(n.y=c+1+this.mobType.scale[1]/2)}else n.y=s}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dead=!0}}const Mn={IDLE:"idle",CHASE:"chase",ATTACK:"attack"};class R_{constructor(t,e,n){this.mob=t,this.player=e,this.worldData=n,this.state=Mn.IDLE,this._attackTimer=0,this._steerAngle=0}update(t){if(this.mob.dead)return;const{mobType:e}=this.mob,n=this.player.camera.position.x-this.mob.position.x,s=this.player.camera.position.y-this.mob.position.y,r=this.player.camera.position.z-this.mob.position.z,o=Math.sqrt(n*n+s*s+r*r);if(this.state===Mn.IDLE)o<e.detectionRange&&this._hasLineOfSight()&&(this.state=Mn.CHASE);else if(this.state===Mn.CHASE){if(o>e.detectionRange*1.6){this.state=Mn.IDLE;return}if(o<=e.attackRange){this.state=Mn.ATTACK;return}this._moveToward(t,n,r,o,e.speed)}else if(this.state===Mn.ATTACK){if(o>e.attackRange*1.4){this.state=Mn.CHASE;return}this._attackTimer-=t,this._attackTimer<=0&&(this._hasLineOfSight()&&this.player.stats.takeDamage(e.damage),this._attackTimer=e.attackCooldown)}this.mob.applyGravity(t,this.worldData),this.state!==Mn.IDLE&&(this.mob.mesh.rotation.y=Math.atan2(n,r))}_hasLineOfSight(){const t=this.mob.position,e=this.player.camera.position,n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.sqrt(n*n+s*s+r*r);if(o===0)return!0;const a=Math.ceil(o/.5);for(let c=1;c<a;c++){const l=c/a,h=Math.floor(t.x+n*l),f=Math.floor(t.y+s*l),u=Math.floor(t.z+r*l);if(this.worldData.isSolid(h,f,u))return!1}return!0}_moveToward(t,e,n,s,r){let o=e/s,a=n/s;const c=this.mob.position,l=1.2,h=Math.floor(c.x+o*l),f=Math.floor(c.y),u=Math.floor(c.z+a*l);if(this.worldData.isSolid(h,f,u)){this._steerAngle+=.15;const d=this._steerAngle;o=Math.cos(d)*o-Math.sin(d)*a,a=Math.sin(d)*o+Math.cos(d)*a}else this._steerAngle*=.9;this.mob.position.x+=o*r*t,this.mob.position.z+=a*r*t}}const Zc=["zombie","skeleton","spider"];class w_{constructor(t,e,n,s,r){this.scene=t,this.worldData=e,this.player=n,this.inventory=s,this.itemRegistry=r,this.mobs=[],this._spawnTimer=0,this.active=!1,this.onMobDeath=null}setNight(t){this.active=t,t||this._despawnAll()}_despawnAll(){for(const{mob:t}of this.mobs)t.dispose();this.mobs=[]}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){this.mobs.splice(e,1);continue}s.update(t)}this.active&&(this.mobs.length>=u0||(this._spawnTimer+=t,!(this._spawnTimer<3)&&(this._spawnTimer=0,this._trySpawn())))}_trySpawn(){const t=this.player.camera.position,e=Math.random()*Math.PI*2,n=15+Math.random()*(f0-15),s=t.x+Math.cos(e)*n,r=t.z+Math.sin(e)*n,o=Math.floor(s),a=Math.floor(r);if(o<1||o>=kt-1||a<1||a>=Dt-1)return;const c=this.worldData.surfaceY(o,a);if(c<0)return;const l=Zc[Math.floor(Math.random()*Zc.length)],h=_s[l],f=new N(s,c+1,r),u=new gs(h,f,this.scene);u.onDeath=_=>{var g;for(const p of _.mobType.dropItems)Math.random()<p.chance&&this.inventory.add(p.itemId,p.count,this.itemRegistry);(g=this.onMobDeath)==null||g.call(this,_)};const d=new R_(u,this.player,this.worldData);this.mobs.push({mob:u,ai:d})}getMobs(){return this.mobs.map(t=>t.mob)}}const jc=["cow","pig","sheep","chicken"],C_=12,Jc=4;class Qc{constructor(t,e,n=null){this.mob=t,this.worldData=e,this.player=n,this._wanderTimer=Math.random()*Jc,this._angle=Math.random()*Math.PI*2,this._moving=!1}update(t){if(!this.mob.dead){if(this.mob.mobType.id==="pig"&&this.player){this._followPlayer(t);return}if(this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=Jc*(.5+Math.random()),this._moving=Math.random()<.6,this._moving&&(this._angle+=(Math.random()-.5)*Math.PI*1.2)),this._moving){const e=this.mob.mobType.speed,n=this.mob.position,s=Math.cos(this._angle),r=Math.sin(this._angle),o=n.x+s*e*t,a=n.z+r*e*t;if(o<1||o>=kt-1||a<1||a>=Dt-1)this._angle+=Math.PI;else{const c=Math.floor(o),l=Math.floor(n.y),h=Math.floor(a);this.worldData.isSolid(c,l,h)?this._angle+=Math.PI*(.5+Math.random()*.5):(n.x=o,n.z=a,this.mob.mesh.rotation.y=Math.atan2(s,r))}}this.mob.applyGravity(t,this.worldData)}}_followPlayer(t){const e=this.player.camera.position,n=this.mob.position,s=e.x-n.x,r=e.z-n.z,o=Math.sqrt(s*s+r*r);if(o>1.2){const a=this.mob.mobType.speed*1.6,c=n.x+s/o*a*t,l=n.z+r/o*a*t;if(!(c<1||c>=kt-1||l<1||l>=Dt-1)){const h=Math.floor(c),f=Math.floor(n.y),u=Math.floor(l);this.worldData.isSolid(h,f,u)||(n.x=c,n.z=l)}}this.mob.mesh.rotation.y=Math.atan2(s,r),this.mob.applyGravity(t,this.worldData)}}class P_{constructor(t,e,n,s,r=null){this.scene=t,this.worldData=e,this.inventory=n,this.itemRegistry=s,this.player=r,this.mobs=[],this._spawnTimer=0,this._initialised=!1,this._companionSpawned=!1}init(){if(!this._initialised){this._initialised=!0;for(let t=0;t<8;t++)this._trySpawn()}}setNight(t){this._isNight=t}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){this.mobs.splice(e,1);continue}s.update(t)}if(this._isNight||this.mobs.length<C_&&(this._spawnTimer+=t,this._spawnTimer>=8&&(this._spawnTimer=0,this._trySpawn())),!this._companionSpawned&&this.player){const e=this.player.camera.position,n=new N(e.x+2,e.y,e.z+2),s=this.worldData.surfaceY(Math.floor(n.x),Math.floor(n.z));if(s>=0){n.y=s+1;const r=new gs(_s.pig,n,this.scene);r.onDeath=a=>{for(const c of a.mobType.dropItems)Math.random()<c.chance&&this.inventory.add(c.itemId,c.count,this.itemRegistry)};const o=new Qc(r,this.worldData,this.player);this.mobs.push({mob:r,ai:o}),this._companionSpawned=!0}}}_trySpawn(){for(let e=0;e<10;e++){const n=4+Math.random()*(kt-8),s=4+Math.random()*(Dt-8),r=Math.floor(n),o=Math.floor(s),a=this.worldData.surfaceY(r,o);if(a<5)continue;const c=this.worldData.get(r,a,o);if(c!==1&&c!==2)continue;const l=jc[Math.floor(Math.random()*jc.length)],h=_s[l],f=new N(n,a+1,s),u=new gs(h,f,this.scene);u.onDeath=_=>{for(const g of _.mobType.dropItems)Math.random()<g.chance&&this.inventory.add(g.itemId,g.count,this.itemRegistry)};const d=new Qc(u,this.worldData,this.player);this.mobs.push({mob:u,ai:d});return}}getMobs(){return this.mobs.map(t=>t.mob)}}function w(i,t,e,n,s,r){const o=new yr({color:n});return s&&(o.emissive=new Bt(s),o.emissiveIntensity=r??.5),new Ee(new Rn(i,t,e),o)}class br{constructor(t,e,n,s,r,o){this.config=t,this.scene=n,this.player=s,this.inventory=r,this.itemRegistry=o,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this.currentPhase=0,this._attackTimer=0,this._vy=0,this.onDeath=null,this.onPhaseChange=null,this._homePos=e.clone(),this._aggroed=!1,this._parts=[],this.mesh=new Bn,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),n.add(this.mesh),this._buildMesh(),this._initBossBar()}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildMesh(){const[t,e,n]=this.config.scale,s=w(t,e,n,this.config.color);s._origColor=this.config.color,s.castShadow=!0,this.mesh.add(s),this._parts.push(s)}_initBossBar(){this._barFill=document.getElementById("boss-bar-fill")}showBar(){const t=document.getElementById("boss-bar-wrap"),e=document.getElementById("boss-name");t&&(t.style.display="block",e.textContent=this.config.name),this._updateBar()}_updateBar(){this._barFill&&(this._barFill.style.width=`${this.health/this.maxHealth*100}%`)}get position(){return this.mesh.position}takeDamage(t){var n;if(this.dead)return;fi.playHit(),this.health=Math.max(0,this.health-t),this._updateBar(),this._parts.forEach(s=>s.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(s=>s.material.color.set(s._origColor))},150);const e=this.config.phases||[];for(let s=0;s<e.length;s++)if(this.currentPhase===s&&this.health/this.maxHealth<e[s]){this.currentPhase=s+1,(n=this.onPhaseChange)==null||n.call(this,this.currentPhase),this._onPhaseChange(this.currentPhase);break}this.health<=0&&this._die()}_onPhaseChange(t){}_die(){var e;if(this.dead)return;this.dead=!0;const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none");for(const n of this.config.drops||[])this.inventory.add(n.itemId,n.count,this.itemRegistry);this.scene.remove(this.mesh),this._parts.forEach(n=>{n.geometry.dispose(),n.material.dispose()}),(e=this.onDeath)==null||e.call(this,this)}applyGravity(t,e){this._vy-=ds*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),o=Math.floor(n.y-this.config.scale[1]/2-.1),a=Math.floor(n.z);if(e.isSolid(r,o,a)){this._vy=0;const c=e.surfaceY(r,a);c>=0&&(n.y=c+1+this.config.scale[1]/2)}else n.y=s}_moveToward(t,e,n){const s=e.x-this.position.x,r=e.z-this.position.z,o=Math.sqrt(s*s+r*r);o<.5||(this.position.x+=s/o*n*t,this.position.z+=r/o*n*t,this.position.x=Math.max(2,Math.min(190,this.position.x)),this.position.z=Math.max(2,Math.min(190,this.position.z)),this.mesh.rotation.y=Math.atan2(s,r))}update(t,e){if(!this.dead){if(this.applyGravity(t,e),!this._aggroed){const n=this.config.aggroZoneRadius??this.config.chaseRange??22,s=this.player.camera.position.x-this._homePos.x,r=this.player.camera.position.z-this._homePos.z;Math.sqrt(s*s+r*r)<n&&(this._aggroed=!0)}this._aggroed?this._behaviorUpdate(t):this.position.distanceTo(this._homePos)>2&&this._moveToward(t,this._homePos,1)}}_behaviorUpdate(t){}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()});const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none"),this.dead=!0}}const Fi={id:"cave_troll",name:"⚡ Cave Troll",color:"#3d6e3d",health:200,damage:4,speed:2.5,attackRange:2.5,attackCooldown:2,scale:[2,3,2],phases:[.6,.3],drops:[{itemId:"troll_fang",count:1}],chaseRange:18,aggroZoneRadius:20};class L_ extends br{constructor(t,e,n,s,r,o){super(Fi,t,e,n,s,r),this.mobSpawner=o,this._slamTimer=0}_buildMesh(){const t="#4a5040",e="#2e3828",n="#3a4030",s="#3a5a2a";this._addPart(w(1.35,1.05,1.1,t),0,1.52,0),this._addPart(w(1.5,.28,.45,e),0,1.88,.25),this._addPart(w(.32,.22,.12,e),-.3,1.75,.5),this._addPart(w(.32,.22,.12,e),.3,1.75,.5),this._addPart(w(.16,.14,.08,"#cc9900"),-.3,1.76,.56),this._addPart(w(.16,.14,.08,"#cc9900"),.3,1.76,.56),this._addPart(w(.38,.2,.22,n),0,1.58,.52),this._addPart(w(1.1,.32,.55,n),0,1.14,.35),this._addPart(w(.12,.38,.1,"#d4c88a"),-.28,1.05,.52),this._addPart(w(.12,.38,.1,"#d4c88a"),.28,1.05,.52),this._addPart(w(.18,.4,.12,e),-.75,1.6,0),this._addPart(w(.18,.4,.12,e),.75,1.6,0),this._addPart(w(.75,.3,.7,n),0,1,0),this._addPart(w(2.1,1.7,1.05,t),0,.2,0),this._addPart(w(1.8,1.05,.45,t),0,-.25,.44),this._addPart(w(.7,.55,.18,e),-.45,.55,.5),this._addPart(w(.7,.55,.18,e),.45,.55,.5),this._addPart(w(.55,.35,.12,s),-.6,.1,.5),this._addPart(w(.4,.28,.12,s),.7,.4,.48),this._addPart(w(.45,.3,.12,s),.2,-.3,.5),this._addPart(w(.35,.5,.3,n),-.6,.6,-.5),this._addPart(w(.28,.4,.28,n),.5,.3,-.5),this._addPart(w(.22,.35,.22,n),0,.8,-.5),this._addPart(w(.85,.7,.8,e),-1.25,.85,0);const r=w(.72,2.15,.72,t);r.rotation.z=-.28,this._addPart(r,-1.45,-.35,0),this._addPart(w(.4,.35,.35,n),-1.55,-.5,0),this._addPart(w(.85,.7,.8,n),-1.65,-1.6,0),this._addPart(w(.2,.2,.2,e),-1.45,-1.82,.3),this._addPart(w(.2,.2,.2,e),-1.72,-1.82,.15),this._addPart(w(.18,.18,.18,e),-1.88,-1.82,-.1),this._addPart(w(.85,.7,.8,e),1.25,.85,0);const o=w(.72,2.15,.72,t);o.rotation.z=.28,this._addPart(o,1.45,-.35,0),this._addPart(w(.4,.35,.35,n),1.55,-.5,0),this._addPart(w(.8,.65,.75,n),1.62,-1.58,0),this._addPart(w(.18,1,.18,e),1.62,-2.3,0),this._addPart(w(.55,.55,.55,n),1.62,-2.95,0),this._addPart(w(.2,.5,.2,e),1.62,-3.1,-.1),this._addPart(w(.95,1.15,.95,e),-.58,-1.55,0),this._addPart(w(.95,1.15,.95,e),.58,-1.55,0),this._addPart(w(.45,.35,.3,n),-.58,-1.2,.42),this._addPart(w(.45,.35,.3,n),.58,-1.2,.42),this._addPart(w(1.05,.22,1.15,n),-.58,-2.2,.12),this._addPart(w(1.05,.22,1.15,n),.58,-2.2,.12);for(const[a,c]of[[-.72,.55],[-.45,.58],[-.18,.57]])this._addPart(w(.2,.15,.15,e),a,-2.2,c);for(const[a,c]of[[.18,.55],[.45,.58],[.72,.57]])this._addPart(w(.2,.15,.15,e),a,-2.2,c)}_onPhaseChange(t){var e,n;if(t===1){this._parts.forEach(s=>{s.material.color.set("#bbbbbb"),s._origColor="#bbbbbb"});for(let s=0;s<3;s++)(n=(e=this.mobSpawner)._trySpawn)==null||n.call(e)}t===2&&(this._slamTimer=0)}_behaviorUpdate(t){const e=this.player.camera.position.x-this.position.x,n=this.player.camera.position.z-this.position.z,s=Math.sqrt(e*e+n*n);s>Fi.attackRange&&this._moveToward(t,this.player.camera.position,Fi.speed),this._attackTimer-=t,s<=Fi.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Fi.damage),this._attackTimer=Fi.attackCooldown),this.currentPhase>=2&&(this._slamTimer-=t,this._slamTimer<=0&&(this._slamTimer=4,s<=4&&this.player.stats.takeDamage(6)))}}const Bi={id:"swamp_witch",name:"🔮 Swamp Witch",color:"#6a1a8a",health:150,damage:3,speed:2,attackRange:12,attackCooldown:2.5,scale:[1,2,1],phases:[.4],drops:[{itemId:"witch_eye",count:1}],chaseRange:18,aggroZoneRadius:16};class I_{constructor(t,e,n){const s=new Aa(.3,6,6),r=new oi({color:"#aa44ff"});this.mesh=new Ee(s,r),this.mesh.position.copy(t);const o=new N().subVectors(e,t).normalize();this.velocity=o.multiplyScalar(12),n.add(this.mesh),this.scene=n,this.alive=!0,this._life=4}update(t,e,n){if(this.alive){if(this.mesh.position.addScaledVector(this.velocity,t),this._life-=t,this._life<=0){this._destroy();return}this.mesh.position.distanceTo(e)<1.5&&(n(),this._destroy())}}_destroy(){this.alive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose()}}class N_ extends br{constructor(t,e,n,s,r){super(Bi,t,e,n,s,r),this._projectiles=[],this._currentSpeed=Bi.speed}_buildMesh(){const t="#4a3820",e="#5a1a6a",n="#3a0a50",s="#18080e",r="#1a1008",o="#aa8800";this._addPart(w(1.05,.08,1,s),0,1.22,0),this._addPart(w(.68,.28,.65,s),0,1.38,0),this._addPart(w(.5,.28,.48,s),0,1.62,0),this._addPart(w(.34,.28,.34,s),0,1.86,0),this._addPart(w(.18,.28,.18,s),0,2.08,-.04),this._addPart(w(.08,.2,.08,s),0,2.28,-.08),this._addPart(w(.72,.07,.68,o),0,1.26,0),this._addPart(w(.14,.1,.05,o),0,1.27,.34),this._addPart(w(.46,.48,.44,t),0,.8,0),this._addPart(w(.1,.14,.08,"#3a2810"),-.22,.8,.2),this._addPart(w(.1,.14,.08,"#3a2810"),.22,.8,.2),this._addPart(w(.1,.1,.06,"#44ff44","#00aa00",1.2),-.13,.85,.23),this._addPart(w(.1,.1,.06,"#44ff44","#00aa00",1.2),.13,.85,.23),this._addPart(w(.08,.13,.18,"#3a2810"),0,.79,.24),this._addPart(w(.1,.07,.1,"#3a2810"),0,.74,.31),this._addPart(w(.22,.04,.05,"#2a1808"),0,.68,.22),this._addPart(w(.06,.06,.06,"#3a2808"),.06,.62,.22),this._addPart(w(.12,.48,.08,r),-.24,.65,-.1),this._addPart(w(.1,.55,.06,r),-.3,.6,-.05),this._addPart(w(.12,.48,.08,r),.24,.65,-.1),this._addPart(w(.1,.55,.06,r),.3,.6,-.05),this._addPart(w(.22,.2,.2,t),0,.52,0),this._addPart(w(.6,.58,.36,e),0,.22,0),this._addPart(w(.48,.12,.14,"#6a2a7a"),0,.52,.12),this._addPart(w(.64,.1,.38,o),0,-.08,0),this._addPart(w(.14,.14,.1,"#4a3010"),-.22,-.08,.18),this._addPart(w(.12,.16,.1,"#4a3010"),.22,-.09,.18),this._addPart(w(.72,.4,.44,n),0,-.35,0),this._addPart(w(.82,.4,.52,n),0,-.65,0),this._addPart(w(.78,.36,.5,"#2a0840"),0,-.94,0),this._addPart(w(.2,.15,.08,n),-.28,-1.12,.18),this._addPart(w(.16,.18,.07,n),.22,-1.13,.2),this._addPart(w(.12,.12,.07,n),0,-1.14,.22);const a=w(.18,.58,.18,t);a.rotation.z=-.6,a.rotation.x=-.2,this._addPart(a,-.4,.22,0),this._addPart(w(.2,.18,.18,t),-.64,-.04,0),this._addPart(w(.06,.16,.05,t),-.55,-.2,.06),this._addPart(w(.06,.16,.05,t),-.64,-.22,.04),this._addPart(w(.06,.16,.05,t),-.73,-.2,.04),this._addPart(w(.22,.22,.22,"#aa44ff","#6600cc",1.2),-.64,-.38,0);const c=w(.18,.58,.18,t);c.rotation.z=.25,this._addPart(c,.38,.18,0),this._addPart(w(.2,.18,.18,t),.54,-.14,0),this._addPart(w(.07,1.6,.07,"#3a2010"),.56,-.95,0),this._addPart(w(.2,.1,.1,"#4a3010"),.56,-1.78,0),this._addPart(w(.1,.1,.2,"#4a3010"),.56,-1.78,0),this._addPart(w(.16,.22,.16,"#44ffaa","#00cc66",1.5),.56,-1.95,0)}_onPhaseChange(t){t===1&&(this._currentSpeed=Bi.speed*2,this._parts.forEach(e=>{e.material.color.set("#330044"),e._origColor="#330044"}))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);if(n<8?this._moveToward(t,e,-this._currentSpeed):n>14&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,this._attackTimer<=0&&n<=Bi.attackRange){this._attackTimer=Bi.attackCooldown;const s=new I_(new N(this.position.x,this.position.y+1,this.position.z),new N(e.x,e.y,e.z),this.scene);this._projectiles.push(s)}for(let s=this._projectiles.length-1;s>=0;s--){const r=this._projectiles[s];r.update(t,this.player.camera.position,()=>{this.player.stats.takeDamage(Bi.damage)}),r.alive||this._projectiles.splice(s,1)}}}const Dn={id:"stone_golem",name:"🪨 Stone Golem",color:"#888888",health:300,damage:6,speed:1.5,attackRange:2.5,attackCooldown:3,scale:[2.5,4,2.5],phases:[.5],minTier:3,drops:[{itemId:"golem_core",count:1}],chaseRange:18,aggroZoneRadius:14};class U_ extends br{constructor(t,e,n,s,r){super(Dn,t,e,n,s,r),this._currentSpeed=Dn.speed,this._stomp=0}_buildMesh(){const t="#8a9082",e="#4a5040",n="#6a7060",s="#2e3428";this._addPart(w(1.2,.92,.95,t),0,1.55,0),this._addPart(w(1.35,.22,.38,e),0,1.9,.2);const r=w(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(r,-.32,1.65,.44);const o=w(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(o,.32,1.65,.44),this._eyeMats=[r.material,o.material],this._addPart(w(.35,.3,.1,e),-.32,1.65,.5),this._addPart(w(.35,.3,.1,e),.32,1.65,.5),this._addPart(w(.7,.1,.1,s),0,1.38,.48),this._addPart(w(.18,.16,.08,s),-.22,1.34,.48),this._addPart(w(.18,.16,.08,s),.22,1.34,.48),this._addPart(w(.2,.35,.2,e),-.3,2.06,-.1),this._addPart(w(.18,.28,.18,e),.25,2.1,.05),this._addPart(w(.14,.22,.14,e),0,2.02,-.25),this._addPart(w(2,1.7,1.15,t),0,.22,0),this._addPart(w(.85,.75,.28,n),-.45,.65,.5),this._addPart(w(.85,.75,.28,n),.45,.65,.5),this._addPart(w(1.5,.4,.22,e),0,.12,.56);const a=w(.55,.55,.28,"#44ccff","#2288ff",2.2);this._crystalMat=a.material,this._addPart(a,0,.3,.56),this._addPart(w(.8,.07,.08,"#2266cc","#2266cc",.8),0,.58,.55),this._addPart(w(.06,.6,.06,"#2266cc","#2266cc",.8),0,.1,.55),this._addPart(w(.4,.5,.28,e),-.6,.7,-.55),this._addPart(w(.35,.42,.25,e),.5,.4,-.55),this._addPart(w(.28,.35,.22,n),0,.95,-.55),this._addPart(w(.06,.8,.05,s),-.2,.25,.58),this._addPart(w(.06,.6,.05,s),.3,.15,.58),this._addPart(w(1.3,.65,1,e),-1.65,.95,0),this._addPart(w(1.3,.65,1,e),1.65,.95,0),this._addPart(w(.22,.55,.22,t),-2.12,1.22,0),this._addPart(w(.18,.44,.18,t),-1.85,1.3,.22),this._addPart(w(.22,.55,.22,t),2.12,1.22,0),this._addPart(w(.18,.44,.18,t),1.85,1.3,.22);const c=w(.75,1.9,.75,n);c.rotation.z=-.12,this._addPart(c,-1.5,-.35,0),this._addPart(w(.6,.42,.5,e),-1.58,-.55,0),this._addPart(w(1,.85,.95,t),-1.62,-1.55,0),this._addPart(w(.35,.28,.3,e),-1.35,-1.82,.35),this._addPart(w(.3,.25,.28,e),-1.72,-1.82,.35),this._addPart(w(.28,.22,.25,e),-2,-1.78,.2);const l=w(.75,1.9,.75,n);l.rotation.z=.12,this._addPart(l,1.5,-.35,0),this._addPart(w(.6,.42,.5,e),1.58,-.55,0),this._addPart(w(1,.85,.95,t),1.62,-1.55,0),this._addPart(w(.35,.28,.3,e),1.35,-1.82,.35),this._addPart(w(.3,.25,.28,e),1.72,-1.82,.35),this._addPart(w(.28,.22,.25,e),2,-1.78,.2),this._addPart(w(.92,1.1,.92,n),-.58,-1.52,0),this._addPart(w(.92,1.1,.92,n),.58,-1.52,0),this._addPart(w(.52,.42,.38,e),-.58,-1.18,.44),this._addPart(w(.52,.42,.38,e),.58,-1.18,.44),this._addPart(w(1.1,.28,1.2,t),-.58,-2.22,.12),this._addPart(w(1.1,.28,1.2,t),.58,-2.22,.12),this._addPart(w(.28,.2,.28,e),-1,-2.22,.3),this._addPart(w(.22,.18,.22,e),.95,-2.22,.28),this._addPart(w(.2,.16,.2,e),0,-2.22,.7)}_onPhaseChange(t){t===1&&(this._currentSpeed=Dn.speed*2.2,this._parts.forEach(e=>{e.material.color.set("#c0c8b8"),e._origColor="#c0c8b8"}),this._crystalMat&&(this._crystalMat.color.set("#88ffff"),this._crystalMat.emissiveIntensity=4),this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}))}_behaviorUpdate(t){const e=this.player.camera.position,n=e.x-this.position.x,s=e.z-this.position.z,r=Math.sqrt(n*n+s*s);r>Dn.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,r<=Dn.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Dn.damage),this._attackTimer=Dn.attackCooldown),this.currentPhase>=1&&(this._stomp-=t,this._stomp<=0&&(this._stomp=5,r<=5&&this.player.stats.takeDamage(4)))}takeDamage(t){this.player.stats.tier<Dn.minTier&&(t*=.15),super.takeDamage(t)}}const On={id:"the_conqueror",name:"💀 THE CONQUEROR",color:"#1a0a1a",health:600,damage:8,speed:3,attackRange:3,attackCooldown:1.5,scale:[3,5,3],phases:[.6,.25],drops:[],chaseRange:30};class D_ extends br{constructor(t,e,n,s,r,o){super(On,t,e,n,s,r),this.worldData=o,this._currentSpeed=On.speed,this._summonTimer=0,this._shockwaveTimer=0,this._minions=[],this.onWin=null}_buildMesh(){const t="#1a0a12",e="#0a0508",n="#3a0808",s="#6a3000",r="#2a1808";this._addPart(w(1.1,.95,.98,t),0,2.18,0),this._addPart(w(1.12,.28,.18,e),0,2.12,.5),this._addPart(w(.35,.07,.06,"#ff0000","#cc0000",1.5),-.22,2.1,.56),this._addPart(w(.35,.07,.06,"#ff0000","#cc0000",1.5),.22,2.1,.56);const o=w(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(o,-.22,2.12,.52);const a=w(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(a,.22,2.12,.52),this._eyeMats=[o.material,a.material],this._addPart(w(.22,.5,.35,e),-.57,2.1,.22),this._addPart(w(.22,.5,.35,e),.57,2.1,.22),this._addPart(w(1,.6,.25,e),0,2.1,-.55),this._addPart(w(1.18,.06,.06,s),0,2.55,0),this._addPart(w(.2,.12,.05,"#880000","#cc0000",1),0,2.38,.5);const c=w(.2,.85,.18,r);c.rotation.z=-.55,c.rotation.x=-.1,this._addPart(c,-.48,2.85,-.05);const l=w(.2,.85,.18,r);l.rotation.z=.55,l.rotation.x=-.1,this._addPart(l,.48,2.85,-.05),this._addPart(w(.12,.3,.12,"#4a2010"),-.78,3.28,-.08),this._addPart(w(.12,.3,.12,"#4a2010"),.78,3.28,-.08),this._addPart(w(.65,.3,.6,e),0,1.68,0),this._addPart(w(.85,.18,.65,t),0,1.55,0),this._addPart(w(2.1,1.9,1.18,t),0,.55,0),this._addPart(w(1.85,1.5,.3,n),0,.62,.56),this._addPart(w(.9,.8,.16,t),-.45,.95,.7),this._addPart(w(.9,.8,.16,t),.45,.95,.7);const h=w(.55,.55,.12,"#880000","#ff0000",1.8);this._glowMat=h.material,this._addPart(h,0,.65,.72),this._addPart(w(1.85,.06,.08,s),0,1.2,.65),this._addPart(w(1.85,.06,.08,s),0,.1,.65),this._addPart(w(1.6,.5,.25,e),0,.02,.62),this._addPart(w(.5,1.6,.2,e),0,.6,-.62),this._addPart(w(.22,.35,.22,r),0,1.5,-.65),this._addPart(w(.18,.3,.18,r),0,1.1,-.65),this._addPart(w(.18,.28,.18,r),0,.7,-.65),this._addPart(w(1.55,.6,.12,"#0a0508"),0,1,-.72),this._addPart(w(1.7,.8,.12,e),0,.3,-.72),this._addPart(w(1.6,.8,.12,"#100610"),0,-.45,-.72),this._addPart(w(1.4,.7,.1,"#0a0408"),0,-1.1,-.7),this._addPart(w(.3,.3,.08,e),-.55,-1.6,-.68),this._addPart(w(.25,.35,.08,e),.3,-1.65,-.68),this._addPart(w(.2,.25,.08,e),-.1,-1.7,-.68),this._addPart(w(1.4,.6,1.1,e),-1.65,1.32,0),this._addPart(w(1.4,.6,1.1,e),1.65,1.32,0),this._addPart(w(.22,.6,.22,r),-2.15,1.6,0),this._addPart(w(.18,.5,.18,r),-1.85,1.7,.22),this._addPart(w(.18,.5,.18,r),-1.85,1.7,-.22),this._addPart(w(.22,.6,.22,r),2.15,1.6,0),this._addPart(w(.18,.5,.18,r),1.85,1.7,.22),this._addPart(w(.18,.5,.18,r),1.85,1.7,-.22),this._addPart(w(1.42,.06,.06,s),-1.65,1.62,0),this._addPart(w(1.42,.06,.06,s),1.65,1.62,0),this._addPart(w(.72,2.1,.72,t),-1.62,-.28,0),this._addPart(w(.22,.4,.22,r),-1.62,-.6,-.38),this._addPart(w(.85,.6,.8,e),-1.62,-1.48,0),this._addPart(w(.15,.25,.14,r),-1.4,-1.7,.35),this._addPart(w(.15,.22,.14,r),-1.65,-1.72,.38),this._addPart(w(.15,.2,.14,r),-1.88,-1.68,.32),this._addPart(w(.08,1.1,.95,n),-2.1,-.22,0),this._addPart(w(.06,1,.85,e),-2.18,-.22,0),this._addPart(w(.05,.2,.2,s),-2.22,-.22,0),this._addPart(w(.72,2.1,.72,t),1.62,-.28,0),this._addPart(w(.22,.4,.22,r),1.62,-.6,-.38),this._addPart(w(.85,.6,.8,e),1.62,-1.48,0),this._addPart(w(.15,.22,.14,r),1.4,-1.7,.35),this._addPart(w(.15,.2,.14,r),1.65,-1.72,.38),this._addPart(w(.15,.18,.14,r),1.88,-1.68,.32),this._addPart(w(.22,2.8,.08,e),1.62,-3.3,0),this._addPart(w(.08,2.6,.05,"#440000","#440000",.5),1.62,-3.3,0),this._addPart(w(.9,.12,.15,e),1.62,-1.98,0),this._addPart(w(.18,.5,.14,r),1.62,-2.15,0),this._addPart(w(.25,.18,.18,e),1.62,-2.44,0),this._addPart(w(.95,1.5,.95,t),-.6,-1.62,0),this._addPart(w(.95,1.5,.95,t),.6,-1.62,0),this._addPart(w(.68,.38,.5,n),-.6,-1.12,.38),this._addPart(w(.68,.38,.5,n),.6,-1.12,.38),this._addPart(w(.72,.8,.2,e),-.6,-1.65,.45),this._addPart(w(.72,.8,.2,e),.6,-1.65,.45),this._addPart(w(1.05,.22,1.2,t),-.6,-2.5,.1),this._addPart(w(1.05,.22,1.2,t),.6,-2.5,.1),this._addPart(w(.14,.14,.3,r),-.6,-2.44,.68),this._addPart(w(.14,.14,.3,r),.6,-2.44,.68)}_onPhaseChange(t){t===1&&(this._currentSpeed=On.speed*1.5,this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}),this._glowMat&&(this._glowMat.emissiveIntensity=3)),t===2&&(this._currentSpeed=On.speed*2,this._parts.forEach(e=>{e.material.color.set("#3a0000"),e._origColor="#3a0000"}),this._eyeMats&&this._eyeMats.forEach(e=>{e.color.set("#ff4400"),e.emissiveIntensity=6}),this._glowMat&&(this._glowMat.color.set("#ff0000"),this._glowMat.emissiveIntensity=5))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);n>On.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,n<=On.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(On.damage),this._attackTimer=On.attackCooldown),this.currentPhase>=1&&(this._shockwaveTimer-=t,this._shockwaveTimer<=0&&(this._shockwaveTimer=6,n<=6&&this.player.stats.takeDamage(5))),this.currentPhase>=2&&(this._summonTimer-=t,this._summonTimer<=0&&(this._summonTimer=20,this._summonMinions()));for(let s=this._minions.length-1;s>=0;s--){const r=this._minions[s];if(r.dead){this._minions.splice(s,1);continue}const o=e.x-r.position.x,a=e.z-r.position.z,c=Math.sqrt(o*o+a*a);c>1.5?(r.position.x+=o/c*3*t,r.position.z+=a/c*3*t):r.takeDamage&&this.player.stats.takeDamage(2*t),r.applyGravity(t,this.worldData)}}_summonMinions(){const t=["zombie","skeleton","spider"];for(const e of t){const n=_s[e],s=Math.random()*Math.PI*2,r=5+Math.random()*3,o=new N(this.position.x+Math.cos(s)*r,this.position.y,this.position.z+Math.sin(s)*r),a=new gs(n,o,this.scene);a.onDeath=()=>{},this._minions.push(a)}}_die(){var e;for(const n of this._minions)(e=n.dispose)==null||e.call(n);this._minions=[];const t=this.onWin;super._die(),t==null||t()}}class O_{constructor(){this.healthFill=document.getElementById("health-fill"),this.hungerFill=document.getElementById("hunger-fill"),this.dayCounter=document.getElementById("day-counter"),this.crosshair=document.getElementById("crosshair"),this.hudEl=document.getElementById("hud"),this.breakWrap=document.getElementById("break-progress-wrap"),this.breakFill=document.getElementById("break-progress-fill"),this.pickupFlash=document.getElementById("pickup-flash"),this.minimap=document.getElementById("minimap"),this._flashTimeout=null}show(){this.hudEl.style.display="flex",this.crosshair.style.display="block",this.dayCounter.style.display="block",this.minimap.style.display="block"}hide(){this.hudEl.style.display="none",this.crosshair.style.display="none",this.dayCounter.style.display="none",this.minimap.style.display="none"}updateHealth(t,e){const n=Math.max(0,t/e)*100;this.healthFill.style.width=n+"%"}updateHunger(t,e){const n=Math.max(0,t/e)*100;this.hungerFill.style.width=n+"%"}updateDay(t){this.dayCounter.textContent=`Day ${t}`}setBreakProgress(t){t<=0?(this.breakWrap.style.display="none",this.breakFill.style.width="0%"):(this.breakWrap.style.display="block",this.breakFill.style.width=t*100+"%")}showPickup(t){clearTimeout(this._flashTimeout),this.pickupFlash.textContent=`+ ${t}`,this.pickupFlash.style.opacity="1",this._flashTimeout=setTimeout(()=>{this.pickupFlash.style.opacity="0"},1500)}}const tl=new Map;function Me(i,t){const e=parseInt(i.replace("#",""),16);let n=e>>16&255,s=e>>8&255,r=e&255;return n=Math.max(0,Math.min(255,n+t)),s=Math.max(0,Math.min(255,s+t)),r=Math.max(0,Math.min(255,r+t)),`rgb(${n},${s},${r})`}function F_(){const i=document.createElement("canvas");return i.width=32,i.height=32,i}const De=16,fe=2;function Je(i,t,e,n){i.fillStyle=n,i.fillRect(t*fe,e*fe,fe,fe)}function Q(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t*fe,e*fe,n*fe,s*fe)}function fs(i,t,e){for(const[n,s]of t)Je(i,n,s,e)}function B_(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)>>>0;return t||1}function k_(i){let t=i;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function mi(i,t){const e=k_(B_(t));for(let n=0;n<De;n++)for(let s=0;s<De;s++)Je(i,s,n,Me(t,(e()-.5)*24));for(let n=0;n<10;n++){const s=Math.floor(e()*De),r=Math.floor(e()*De);Je(i,s,r,Me(t,(e()-.5)*55))}Q(i,0,0,De,1,Me(t,55)),Q(i,0,0,1,De,Me(t,40)),Q(i,0,De-1,De,1,Me(t,-55)),Q(i,De-1,0,1,De,Me(t,-45)),i.strokeStyle=Me(t,-70),i.lineWidth=fe,i.strokeRect(fe/2,fe/2,De*fe-fe,De*fe-fe)}function z_(i){mi(i,"#8b5a2b"),Q(i,1,6,14,1,"#5a3010"),Q(i,6,5,4,4,"#c8a020"),Q(i,7,6,2,2,"#7a5010")}function H_(i){mi(i,"#3a3a3a"),Q(i,3,8,4,4,"#ff8800"),Q(i,8,8,4,4,"#ff8800"),Q(i,4,9,2,2,"#ffcc00"),Q(i,9,9,2,2,"#ffcc00")}function G_(i){mi(i,"#c49a40"),Q(i,1,1,14,1,"#7a5010"),Q(i,1,14,14,1,"#7a5010"),Q(i,1,1,1,14,"#7a5010"),Q(i,14,1,1,14,"#7a5010"),Q(i,7,1,1,14,"#7a5010")}function V_(i){mi(i,"#2e1808");const t=[[7,3,2],[6,4,4],[6,5,4],[5,6,6],[5,7,6],[4,8,8],[4,9,8],[4,10,8],[4,11,8]];for(const[n,s,r]of t)Q(i,n,s,r,1,"#cc5500");const e=[[7,5,2],[6,7,4],[6,8,4],[5,9,6],[5,10,6]];for(const[n,s,r]of e)Q(i,n,s,r,1,"#ffcc00")}function W_(i){Q(i,1,5,14,8,"#7a4a20"),Q(i,2,7,12,5,"#a02020"),Q(i,2,6,4,3,"#e8e0d0"),Q(i,1,12,2,3,"#5a3010"),Q(i,13,12,2,3,"#5a3010")}function X_(i){Q(i,1,1,14,14,"rgba(160,220,255,0.35)"),i.strokeStyle="#7ab0cc",i.lineWidth=fe,i.strokeRect(fe/2,fe/2,De*fe-fe,De*fe-fe),Q(i,3,3,3,1,"rgba(255,255,255,0.6)"),Q(i,3,3,1,3,"rgba(255,255,255,0.6)")}function Y_(i,t){const e={chest:z_,forge:H_,crafting_table:G_,campfire:V_,glass:X_,bed:W_};if(e[t.id]){e[t.id](i);return}const n=t.blockId>=0?di[t.blockId]:null;mi(i,(n==null?void 0:n.color)??"#888888")}const Hl={1:"#c8a44a",2:"#9a9a9a",3:"#cfd6e6",4:"#a866ff"},q_="#6b4423",K_="#4a2c10";function cs(i,t){t.forEach(([e,n],s)=>Je(i,e,n,s%2===0?q_:K_))}function $_(i,t){const e=Hl[t.tier]??"#aaaaaa",n=Me(e,45),s=Me(e,-35);if(t.isSword)cs(i,[[2,14],[3,13],[4,12]]),Je(i,2,14,"#2a1808"),Q(i,4,10,3,2,s),fs(i,[[6,10],[7,9],[7,8],[8,8],[8,7],[9,7],[9,6],[10,6],[10,5],[11,5],[11,4],[12,4],[12,3]],e),Je(i,13,2,n);else if(t.isAxe){cs(i,[[3,14],[4,13],[5,12],[6,11],[7,10]]);const r=[[9,2,4],[8,3,5],[8,4,5],[8,5,5],[8,6,4],[9,7,2]];for(const[o,a,c]of r)Q(i,o,a,c,1,e);Q(i,12,3,1,3,n),Q(i,8,3,1,3,s)}else t.isPickaxe?(cs(i,[[7,13],[7,11],[8,9],[8,7]]),fs(i,[[3,4],[4,3],[5,2],[6,2],[7,1],[8,1],[9,1],[10,2],[11,2],[12,3],[13,4]],e),Je(i,3,4,n),Je(i,13,4,n),Je(i,8,2,s),Je(i,9,2,s)):t.isHoe?(cs(i,[[7,14],[7,12],[8,10],[8,8]]),Q(i,6,1,7,2,e),Q(i,6,1,7,1,n),Q(i,6,2,7,1,s)):t.isShovel&&(cs(i,[[7,15],[7,13],[7,11],[8,9]]),Q(i,6,2,4,3,e),fs(i,[[7,5],[8,5]],e),Q(i,6,2,4,1,n),Q(i,6,3,1,2,s),Q(i,9,3,1,2,s))}function Z_(i,t){const e=Hl[t.tier]??"#aaaaaa",n=Me(e,45),s=Me(e,-35);t.armorSlot==="helmet"?(Q(i,5,2,6,2,e),Q(i,4,4,8,4,e),Q(i,4,4,8,1,n),Q(i,4,8,3,2,s),Q(i,9,8,3,2,s)):t.armorSlot==="chestplate"?(Q(i,5,2,6,2,e),Q(i,3,4,10,8,e),Q(i,3,4,10,1,n),Q(i,3,4,2,8,s),Q(i,11,4,2,8,s)):t.armorSlot==="leggings"?(Q(i,4,2,8,6,e),Q(i,4,8,3,6,e),Q(i,9,8,3,6,e),Q(i,4,2,8,1,n),Q(i,7,8,2,6,s)):t.armorSlot==="boots"&&(Q(i,3,8,4,5,e),Q(i,3,12,5,2,s),Q(i,9,8,4,5,e),Q(i,9,12,5,2,s),Q(i,3,8,4,1,n),Q(i,9,8,4,1,n))}function j_(i,t,e){const n=[[5,3,6],[4,4,8],[3,5,10],[3,6,10],[3,7,10],[3,8,10],[3,9,10],[4,10,8],[5,11,6]];for(const[s,r,o]of n)Q(i,s,r,o,1,t);Q(i,4,5,2,2,e)}function J_(i){Q(i,2,6,12,6,"#c8863c"),Q(i,2,6,12,1,"#e8b878"),Q(i,3,7,10,2,"#e8b878");for(const t of[5,8,10])Q(i,t,8,1,3,"#8a5820")}function Q_(i){const t=[[7,4,2],[7,6,2],[6,8,4],[6,10,4],[7,12,2],[7,13,2]];for(const[e,n,s]of t)Q(i,e,n,s,1,"#ff7722");Q(i,7,4,1,8,"#e05500"),Q(i,6,1,1,3,"#3a9028"),Q(i,9,0,1,4,"#3a9028"),Q(i,8,2,1,2,"#3a9028")}function el(i,t,e){const n=Me(t,-30);Q(i,4,6,7,4,t),Q(i,4,6,7,1,Me(t,35)),fs(i,[[1,5],[2,6],[2,7],[1,8],[2,8],[2,9]],n),Je(i,10,7,"#111111"),Q(i,6,5,2,1,n),Q(i,6,10,2,1,n),e&&(Q(i,5,7,1,2,"#c87830"),Q(i,8,7,1,2,"#c87830"))}function xo(i,t){Q(i,5,9,6,3,"#3a2810"),Q(i,7,7,2,5,t),Q(i,8,2,1,5,"#2a7020")}function tg(i,t){const e=Me(t,-30),n=Me(t,40);Q(i,3,6,10,4,e),Q(i,4,6,8,1,n),Q(i,3,7,10,3,t),Q(i,4,9,8,1,Me(t,-15))}function eg(i,t){const e=Me(t,55),n=[[7,2,2],[6,3,4],[6,4,4],[5,5,6],[5,6,6],[5,7,6],[6,8,4],[6,9,4],[7,10,2]];for(const[s,r,o]of n)Q(i,s,r,o,1,t);Q(i,6,3,1,5,e)}function ng(i){[[3,13],[4,12],[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4]].forEach(([e,n],s)=>Je(i,e,n,s%3===0?"#6a4018":"#8b5a2b"))}function ig(i){fs(i,[[3,3],[4,4],[4,5],[5,6],[5,7],[6,8],[6,9],[7,10],[8,10],[9,11],[10,11],[11,12],[12,12]],"#eeddcc")}function sg(i){Q(i,5,7,6,2,"#e8e0c8");for(const[t,e]of[[3,6],[3,8],[11,6],[11,8]])Q(i,t,e,2,2,"#e8e0c8")}function rg(i,t,e){mi(i,t);const n=[[3,3,2],[9,3,2],[5,6,2],[10,8,2],[3,10,2],[8,11,2]];for(const[s,r,o]of n)Q(i,s,r,o,o,e)}function yo(i,t){const e=Me(t,-40),n=[[6,4,4],[5,5,6],[4,6,8],[4,7,8],[4,8,8],[5,9,6],[6,10,4]];for(const[s,r,o]of n)Q(i,s,r,o,1,t);Q(i,5,6,1,3,e),Q(i,9,6,1,3,e)}function og(i){const t=[[5,2,6],[5,4,6],[6,6,4],[6,8,4],[7,10,2],[7,12,2]];for(const[e,n,s]of t)Q(i,e,n,s,2,"#eeeecc")}function ag(i){Q(i,2,5,12,6,"#1a0a1a"),Q(i,5,6,6,4,"#8822aa"),Q(i,7,7,2,2,"#44ff44")}function cg(i){Q(i,2,2,12,12,"#333333"),Q(i,3,3,10,10,"#2a2a2a"),Q(i,4,4,8,8,"#44ccff"),Q(i,6,6,2,2,"#ccffff")}function lg(i){const t=[[7,1,2],[6,2,4],[5,3,6],[4,4,8],[3,5,10],[3,6,10],[3,7,10],[3,8,10],[4,9,8],[5,10,6],[6,11,4],[7,12,2]];for(const[e,n,s]of t)Q(i,e,n,s,1,"#220022");Q(i,6,6,4,4,"#cc44ff"),Q(i,7,7,2,2,"#f0aaff")}const nl={bread:J_,carrot:Q_,wheat:i=>j_(i,"#cccc44","#eeee88"),baked_potato:i=>yo(i,"#c87830"),cooked_meat:i=>yo(i,"#8b4a2a"),raw_meat:i=>yo(i,"#cc4444"),raw_fish:i=>el(i,"#88aacc",!1),cooked_fish:i=>el(i,"#c8a858",!0),wheat_seed:i=>xo(i,"#aaaa22"),carrot_seed:i=>xo(i,"#ff8800"),potato_seed:i=>xo(i,"#c89050"),iron_ore:i=>rg(i,"#828282","#cc8855"),crystal_shard:i=>eg(i,"#9944ee"),iron_ingot:i=>tg(i,"#c0c0d0"),stick:ng,string:ig,bone:sg,troll_fang:og,witch_eye:ag,golem_core:cg,summoning_stone:lg};function vs(i){if(!i)return"";const t=tl.get(i.id);if(t)return t;let e;try{const n=F_(),s=n.getContext("2d");s.imageSmoothingEnabled=!1,nl[i.id]?nl[i.id](s):i.category==="block"?Y_(s,i):i.category==="tool"||i.category==="weapon"?$_(s,i):i.category==="armor"?Z_(s,i):mi(s,"#666666"),e=n.toDataURL()}catch(n){console.error(`Failed to draw icon for item "${i.id}":`,n),e=""}return tl.set(i.id,e),e}class hg{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("hotbar"),this.slotEls=[],this._build(),t.addChangeListener(()=>this.refresh())}_build(){this.el.innerHTML="",this.slotEls=[];for(let t=0;t<9;t++){const e=document.createElement("div");e.className="hotbar-slot",e.innerHTML=`
        <span class="slot-key">${t+1}</span>
        <div class="slot-icon-wrap" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"></div>
        <span class="slot-count"></span>
      `,this.el.appendChild(e),this.slotEls.push(e)}this._updateSelected()}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}select(t){this.inventory.hotbarIndex=(t%9+9)%9,this._updateSelected()}scroll(t){const e=((this.inventory.hotbarIndex+t)%9+9)%9;this.select(e)}_updateSelected(){this.slotEls.forEach((t,e)=>{t.classList.toggle("selected",e===this.inventory.hotbarIndex)})}refresh(){for(let t=0;t<9;t++){const e=this.inventory.slots[t],n=this.slotEls[t].querySelector(".slot-icon-wrap"),s=this.slotEls[t].querySelector(".slot-count");if(n.innerHTML="",e.itemId&&e.count>0){const r=this.itemRegistry.getItem(e.itemId),o=document.createElement("img");o.className="item-icon",o.src=vs(r),o.title=(r==null?void 0:r.name)??e.itemId,n.appendChild(o),s.textContent=e.count>1?e.count:""}else s.textContent=""}}}class dg{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("inventory-overlay"),this.grid=document.getElementById("inv-grid"),this.armorRow=document.getElementById("armor-row"),this.defenseLabel=document.getElementById("armor-defense-label"),this.visible=!1,this._selected=null,t.addChangeListener(()=>{this.visible&&this.refresh()})}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){this._refreshArmor(),this.grid.innerHTML="";for(let t=0;t<36;t++){const e=this.inventory.slots[t],n=document.createElement("div");if(n.className="inv-slot",t<9&&(n.style.border="1px solid rgba(255,255,150,0.4)"),t===this._selected&&(n.style.outline="2px solid #fff"),e.itemId&&e.count>0){const s=this.itemRegistry.getItem(e.itemId),r=document.createElement("img");if(r.src=vs(s),r.title=(s==null?void 0:s.name)??e.itemId,n.appendChild(r),e.count>1){const o=document.createElement("span");o.className="slot-count",o.textContent=e.count,n.appendChild(o)}}if(n.addEventListener("click",()=>{this._selected===null?this.inventory.slots[t].itemId&&(this._selected=t,this.refresh()):(this.inventory.swapSlots(this._selected,t),this._selected=null,this.refresh())}),e.itemId){const s=this.itemRegistry.getItem(e.itemId);s!=null&&s.armorSlot&&n.addEventListener("dblclick",()=>{this.inventory.equipArmor(t,this.itemRegistry),this._selected=null,this.refresh()})}this.grid.appendChild(n)}}_refreshArmor(){if(this.armorRow){this.armorRow.innerHTML="";for(const t of hs){const e=this.inventory.armor[t],n=document.createElement("div");n.className="armor-slot";const s=document.createElement("div");if(s.className="slot-label",s.textContent=t.slice(0,4),n.appendChild(s),e.itemId){const r=this.itemRegistry.getItem(e.itemId),o=document.createElement("img");o.src=vs(r),o.title=(r==null?void 0:r.name)??e.itemId,n.appendChild(o)}n.addEventListener("click",()=>{this.inventory.unequipArmor(t,this.itemRegistry),this.refresh()}),this.armorRow.appendChild(n)}this.defenseLabel&&(this.defenseLabel.textContent=`Defense: ${this.inventory.getArmorDefense(this.itemRegistry)}`)}}}const Ye=150,Ze=48,So=.35,fg={zombie:"#ff3b3b",skeleton:"#ff3b3b",spider:"#ff3b3b",cow:"#ffffff",pig:"#ffffff",sheep:"#ffffff",chicken:"#ffffff",fish:"#3bbfff",shark:"#ff9900"};class ug{constructor(t){var e;this.worldData=t,this.canvas=document.getElementById("minimap"),this.ctx=(e=this.canvas)==null?void 0:e.getContext("2d"),this._terrainCanvas=document.createElement("canvas"),this._terrainCanvas.width=Ye,this._terrainCanvas.height=Ye,this._terrainCtx=this._terrainCanvas.getContext("2d"),this._timer=So}setWorldData(t){this.worldData=t,this._timer=So}update(t,e,n,s=[]){var l;if(!this.ctx)return;this._timer+=t,this._timer>=So&&(this._timer=0,this._drawTerrain(e));const r=this.ctx;r.clearRect(0,0,Ye,Ye),r.drawImage(this._terrainCanvas,0,0);const o=Math.floor(e.x),a=Math.floor(e.z),c=Ye/(Ze*2);for(const h of s){if(!h||h.dead)continue;const f=h.position.x-o,u=h.position.z-a;Math.abs(f)>Ze||Math.abs(u)>Ze||(r.fillStyle=fg[(l=h.mobType)==null?void 0:l.id]??"#dddddd",r.beginPath(),r.arc((f+Ze)*c,(u+Ze)*c,2.5,0,Math.PI*2),r.fill())}r.save(),r.translate(Ye/2,Ye/2),r.rotate(n),r.fillStyle="#ffee66",r.strokeStyle="#000000",r.lineWidth=1,r.beginPath(),r.moveTo(0,-7),r.lineTo(5,6),r.lineTo(0,3),r.lineTo(-5,6),r.closePath(),r.fill(),r.stroke(),r.restore(),r.strokeStyle="rgba(255,255,255,0.4)",r.lineWidth=2,r.beginPath(),r.arc(Ye/2,Ye/2,Ye/2-1,0,Math.PI*2),r.stroke()}_drawTerrain(t){const e=this._terrainCtx,n=this.worldData;if(e.fillStyle="#0a0a0a",e.fillRect(0,0,Ye,Ye),!n)return;const s=Math.floor(t.x),r=Math.floor(t.z),o=Ye/(Ze*2),a=Math.max(1,Math.round(1/o)),c=Math.ceil(o*a);for(let l=-Ze;l<Ze;l+=a)for(let h=-Ze;h<Ze;h+=a){const f=s+l,u=r+h,d=n.surfaceY(f,u);if(d<0)continue;const _=di[n.get(f,d,u)];_&&(e.fillStyle=_.color,e.fillRect((l+Ze)*o,(h+Ze)*o,c,c))}}}class pg{constructor(t,e,n,s,r,o){this.inventory=t,this.itemRegistry=e,this.recipeRegistry=n,this.getStation=s,this.getPlayerTier=r,this.killedBosses=o,this.el=document.getElementById("crafting-overlay"),this.stationLabel=document.getElementById("crafting-station-label"),this.recipeList=document.getElementById("recipe-list"),this.visible=!1,this.onCraft=null}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){const t=this.getStation(),e=this.getPlayerTier();this.stationLabel.textContent=`Station: ${t.replace("_"," ").toUpperCase()}`;const n=this.recipeRegistry.getAllVisible(this.inventory,t,e,this.killedBosses);this.recipeList.innerHTML="";for(const s of n){const r=this.inventory.hasAll(s.ingredients),o=document.createElement("div");o.className=`recipe-row${r?"":" unavailable"}`;const a=this.itemRegistry.getItem(s.resultItem),c=Object.entries(s.ingredients).map(([l,h])=>{var f;return`${h}× ${((f=this.itemRegistry.getItem(l))==null?void 0:f.name)??l}`}).join(", ");o.innerHTML=`
        <img src="${vs(a)}" style="width:32px;height:32px;image-rendering:pixelated;flex-shrink:0;" />
        <div class="recipe-info">
          <div class="recipe-name">${(a==null?void 0:a.name)??s.resultItem}</div>
          <div class="recipe-ingredients">${c}</div>
        </div>
        <div class="recipe-result-count">${s.resultCount>1?"×"+s.resultCount:""}</div>
      `,r&&o.addEventListener("click",()=>{var h;this.recipeRegistry.craft(s,this.inventory,this.itemRegistry)&&((h=this.onCraft)==null||h.call(this,s),this.refresh())}),this.recipeList.appendChild(o)}}}const mg=1.1,_g=90,gg=40;class vg{constructor(t,e,n,s,r){this.itemId=t,this.count=e,this.position=n.clone(),this.age=0,this.scene=s;const o=r.getItem(t),a=new i0().load(vs(o));a.magFilter=we,a.minFilter=we;const c=new ba({map:a,transparent:!0});this.mesh=new Ol(c),this.mesh.scale.set(.5,.5,.5),this.mesh.position.copy(this.position),s.add(this.mesh)}update(t){this.age+=t,this.mesh.position.y=this.position.y+Math.sin(this.age*3)*.08}dispose(){var t;this.scene.remove(this.mesh),(t=this.mesh.material.map)==null||t.dispose(),this.mesh.material.dispose()}}class xg{constructor(t,e,n){this.scene=t,this.inventory=e,this.itemRegistry=n,this.items=[]}spawn(t,e,n){this.items.length>=gg&&this.items.shift().dispose(),this.items.push(new vg(t,e,n,this.scene,this.itemRegistry))}update(t,e){for(let n=this.items.length-1;n>=0;n--){const s=this.items[n];s.update(t);const r=s.position.x-e.x,o=s.position.z-e.z,a=Math.hypot(r,o),c=Math.abs(s.position.y-(e.y-1.8))<2.2,l=a<mg&&c;(l||s.age>_g)&&(l&&this.inventory.add(s.itemId,s.count,this.itemRegistry),s.dispose(),this.items.splice(n,1))}}clear(){for(const t of this.items)t.dispose();this.items=[]}}const yg=16,Sg=.8,il=3;function Mg(i,t,e,n){return i.get(Math.floor(t),Math.floor(e),Math.floor(n))===v.WATER}class Eg{constructor(t,e,n){this.mob=t,this.worldData=e,this.player=n,this._wanderTimer=Math.random()*il,this._dir=new N(Math.random()-.5,(Math.random()-.5)*.3,Math.random()-.5).normalize(),this._attackTimer=0}update(t){if(this.mob.dead)return;const e=this.mob.mobType,n=this.mob.position;if(e.id==="shark"&&this.player){const s=this.player.camera.position,r=s.x-n.x,o=s.y-n.y,a=s.z-n.z,c=Math.sqrt(r*r+o*o+a*a);if(this.worldData.get(Math.floor(s.x),Math.floor(s.y-1),Math.floor(s.z))===v.WATER&&c<e.detectionRange){if(c<=e.attackRange)this._attackTimer-=t,this._attackTimer<=0&&(this.player.stats.takeDamage(e.damage),this._attackTimer=e.attackCooldown);else{const h=r/c,f=o/c,u=a/c;this._tryMove(n,h,f,u,e.speed,t)}this.mob.mesh.rotation.y=Math.atan2(r,a);return}}this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=il*(.6+Math.random()),this._dir.set(Math.random()-.5,(Math.random()-.5)*.3,Math.random()-.5).normalize()),this._tryMove(n,this._dir.x,this._dir.y,this._dir.z,e.speed*.5,t),this.mob.mesh.rotation.y=Math.atan2(this._dir.x,this._dir.z)}_tryMove(t,e,n,s,r,o){const a=t.x+e*r*o,c=Math.min(Be-.5,t.y+n*r*o),l=t.z+s*r*o;Mg(this.worldData,a,c,l)?(t.x=a,t.y=c,t.z=l):this._wanderTimer=0}}class Tg{constructor(t,e,n,s,r){this.scene=t,this.worldData=e,this.inventory=n,this.itemRegistry=s,this.player=r,this.mobs=[],this._spawnTimer=0,this._initialised=!1}init(){if(!this._initialised){this._initialised=!0;for(let t=0;t<10;t++)this._trySpawn()}}update(t){var n,s;const e=(s=(n=this.player)==null?void 0:n.camera)==null?void 0:s.position;for(let r=this.mobs.length-1;r>=0;r--){const{mob:o,ai:a}=this.mobs[r];if(o.dead){this.mobs.splice(r,1);continue}if(e){const c=o.position.x-e.x,l=o.position.z-e.z;if(c*c+l*l>130*130){o.dispose(),this.mobs.splice(r,1);continue}}a.update(t)}this.mobs.length<yg&&(this._spawnTimer+=t,this._spawnTimer>=6&&(this._spawnTimer=0,this._trySpawn()))}_trySpawn(){var n,s;const t=(s=(n=this.player)==null?void 0:n.camera)==null?void 0:s.position,e=16;for(let r=0;r<e;r++){let o,a;if(t&&r<e-4){const p=Math.random()*Math.PI*2,m=10+Math.random()*45;o=t.x+Math.cos(p)*m,a=t.z+Math.sin(p)*m}else o=2+Math.random()*(kt-4),a=2+Math.random()*(Dt-4);const c=Math.floor(o),l=Math.floor(a);if(c<1||c>=kt-1||l<1||l>=Dt-1)continue;const h=this.worldData.surfaceY(c,l);if(h<0||this.worldData.get(c,h,l)!==v.WATER)continue;const f=Math.random()<Sg?"fish":"shark",u=_s[f],d=new N(o,h-1,a),_=new gs(u,d,this.scene);_.onDeath=p=>{for(const m of p.mobType.dropItems)Math.random()<m.chance&&this.inventory.add(m.itemId,m.count,this.itemRegistry)};const g=new Eg(_,this.worldData,this.player);this.mobs.push({mob:_,ai:g});return}}getMobs(){return this.mobs.map(t=>t.mob)}clear(){for(const{mob:t}of this.mobs)t.dispose();this.mobs=[]}}const ir="oliver_game_save";class bg{constructor(t,e,n,s,r,o){this.worldData=t,this.inventory=e,this.stats=n,this.dayNight=s,this.killedBosses=r,this.getPlayerPos=o}hasSave(){return!!localStorage.getItem(ir)}save(){const t=this.getPlayerPos(),e={version:1,worldData:this.worldData.serialize(),inventory:this.inventory.serialize(),playerStats:this.stats.serialize(),dayNumber:this.dayNight.dayNumber,timeOfDay:this.dayNight.timeOfDay,killedBosses:[...this.killedBosses],playerPos:{x:t.x,y:t.y,z:t.z}};try{localStorage.setItem(ir,JSON.stringify(e))}catch(n){console.warn("Save failed (storage full?):",n)}}load(){const t=localStorage.getItem(ir);if(!t)return null;try{return JSON.parse(t)}catch{return null}}apply(t,e){if(t){this.worldData.deserialize(t.worldData),this.inventory.deserialize(t.inventory),this.stats.deserialize(t.playerStats),this.dayNight.dayNumber=t.dayNumber??1,this.dayNight.timeOfDay=t.timeOfDay??.05;for(const n of t.killedBosses??[])this.killedBosses.add(n);t.playerPos&&e&&e.camera.position.set(t.playerPos.x,t.playerPos.y,t.playerPos.z)}}clear(){localStorage.removeItem(ir)}}const hn={MENU:"menu",PLAYING:"playing",DEAD:"dead",WIN:"win"};class Ag{constructor(t){this.renderer=t,this.state=hn.MENU,this.killedBosses=new Set,this.activeBoss=null,this.scene=new $m,this.scene.background=new Bt(.5,.7,1),this.scene.fog=new ms(10075135,.007),this.camera=new je(70,window.innerWidth/window.innerHeight,.1,1200),this.ambientLight=new a0(16777215,.6),this.scene.add(this.ambientLight),this.dirLight=new o0(16777215,.8),this.dirLight.position.set(30,30,15),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=110,this.dirLight.shadow.camera.left=-45,this.dirLight.shadow.camera.right=45,this.dirLight.shadow.camera.top=45,this.dirLight.shadow.camera.bottom=-45,this.dirLight.shadow.bias=-.0015,this.dirLight.target=new ve,this.scene.add(this.dirLight.target),this.scene.add(this.dirLight),this.itemRegistry=new g_,this.recipeRegistry=new x_,this.worldData=new Gc,E0(this.worldData);const e=this._generateAtlas();this._atlasTex=e,this.worldRenderer=new Xc(this.scene,this.worldData,e),this.currentDimension="overworld",this.overworldData=this.worldData,this.overworldRenderer=this.worldRenderer,this.netherData=null,this.netherRenderer=null,this.stats=new s_,this.inventory=new r_,this.stats.linkArmorSource(this.inventory,this.itemRegistry),this.hud=new O_,this.minimap=new ug(this.worldData),this.hotbar=new hg(this.inventory,this.itemRegistry),this.farmingSystem=new T_(this.worldData,this.scene),this.miningSystem=new y_(this.worldData,this.worldRenderer,this.inventory,this.stats,this.itemRegistry),this.miningSystem.onPickup=n=>this.hud.showPickup(n),this.player=new p_(this.camera,t,this.worldData,this.worldRenderer,this.stats,this.inventory,this.miningSystem,this.farmingSystem,this.hotbar,this.hud,this.itemRegistry),this.inventoryUI=new dg(this.inventory,this.itemRegistry),this.craftingUI=new pg(this.inventory,this.itemRegistry,this.recipeRegistry,()=>this.player.currentStation,()=>this.stats.tier,this.killedBosses),this.craftingUI.onCraft=n=>{const s=this.itemRegistry.getItem(n.resultItem);s&&this.stats.updateTier(s),n.resultItem==="summoning_stone"&&this._showMsg("Summoning Stone crafted! Use it at the Altar in the swamp.")},this.dayNight=new A_(this.scene,this.ambientLight,this.dirLight),this.dayNight.onNightBegin=()=>{this.mobSpawner.setNight(!0),this.passiveSpawner.setNight(!0),this._showMsg("Night falls... they are coming.")},this.dayNight.onDayBegin=n=>{this.mobSpawner.setNight(!1),this.passiveSpawner.setNight(!1),this.hud.updateDay(n)},this.mobSpawner=new w_(this.scene,this.worldData,this.player,this.inventory,this.itemRegistry),this.mobSpawner.onMobDeath=n=>{this.hud.showPickup(`${n.mobType.name} slain!`)},this.passiveSpawner=new P_(this.scene,this.worldData,this.inventory,this.itemRegistry,this.player),this.seaLife=new Tg(this.scene,this.worldData,this.inventory,this.itemRegistry,this.player),this.droppedItems=new xg(this.scene,this.inventory,this.itemRegistry),this.player.onDropItem=(n,s,r)=>this.droppedItems.spawn(n,s,r),this.player.setupAttackListener(()=>[...this.mobSpawner.getMobs(),...this.passiveSpawner.getMobs(),...this.seaLife.getMobs(),...(this._activeBossList??[]).filter(n=>!n.dead)]),this.stats.onDeath=()=>this._onPlayerDeath(),this.stats.onChange=()=>{this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger)},this.player.onUseAltarWithStone=()=>{if([...this.killedBosses].filter(n=>["cave_troll","swamp_witch","stone_golem"].includes(n)).length<3){this._showMsg("You must defeat all three guardians first!");return}this._spawnFinalBoss()},this.player.onSleepInBed=()=>{if(!this.dayNight.isNight){this._showMsg("You can only sleep at night.");return}this.dayNight.timeOfDay=.05,this._showMsg("You sleep through the night..."),this.saveSystem.save()},this.player.onUsePortal=()=>this._usePortal(),this.saveSystem=new bg(this.worldData,this.inventory,this.stats,this.dayNight,this.killedBosses,()=>this.camera.position),this._setupUIKeys(),this._setupMenuButtons(),this._saveTimer=0}_setupMenuButtons(){for(const e of["easy","normal","hard"]){const n=document.getElementById(`btn-${e}`);n&&n.addEventListener("click",()=>{this.saveSystem.clear(),this._startNewGame(e)})}const t=document.getElementById("btn-continue");this.saveSystem.hasSave()&&(t.style.display="block",t.addEventListener("click",()=>this._loadGame())),document.getElementById("btn-restart").addEventListener("click",()=>{this.saveSystem.clear(),location.reload()})}_startNewGame(t="normal"){this.stats.setDifficulty(t),document.getElementById("menu-screen").style.display="none",this.state=hn.PLAYING,this._enterPlayMode()}_loadGame(){const t=this.saveSystem.load();if(!t){this._startNewGame();return}for(const e of this.worldRenderer.chunks.values())e.mesh&&this.scene.remove(e.mesh);this.saveSystem.apply(t,this.player),this.worldRenderer._buildAll(),document.getElementById("menu-screen").style.display="none",this.state=hn.PLAYING,this._enterPlayMode()}_enterPlayMode(){fi.startMusic(),this.hud.show(),this.hotbar.show(),this.hud.updateDay(this.dayNight.dayNumber),this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger),this.hotbar.refresh(),this.killedBosses.add("cave_troll"),this.killedBosses.add("swamp_witch"),this.killedBosses.add("stone_golem"),this.inventory.countOf("wood_log")===0&&(this.inventory.add("wood_log",10,this.itemRegistry),this.inventory.add("planks",8,this.itemRegistry),this.inventory.add("stick",8,this.itemRegistry),this.inventory.add("wheat_seed",6,this.itemRegistry),this.inventory.add("carrot_seed",4,this.itemRegistry),this.inventory.add("potato_seed",4,this.itemRegistry),this.inventory.add("bread",3,this.itemRegistry),this.inventory.add("crystal_sword",1,this.itemRegistry),this.inventory.add("wooden_shovel",1,this.itemRegistry),this.inventory.add("troll_fang",1,this.itemRegistry),this.inventory.add("witch_eye",1,this.itemRegistry),this.inventory.add("golem_core",1,this.itemRegistry),this.inventory.armor.helmet.itemId="crystal_helmet",this.inventory.armor.helmet.count=1,this.inventory.armor.chestplate.itemId="crystal_chestplate",this.inventory.armor.chestplate.count=1,this.inventory.armor.leggings.itemId="crystal_leggings",this.inventory.armor.leggings.count=1,this.inventory.armor.boots.itemId="crystal_boots",this.inventory.armor.boots.count=1),this.renderer.domElement.addEventListener("click",()=>{this.state===hn.PLAYING&&!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.lock()},{once:!1}),this._showMsg("Stranded! Gather wood, build tools, survive the night."),this._setupSky(),this._setupBlockOutline(),this.passiveSpawner.init(),this.seaLife.init(),this._setupMiniBosses()}_setupMiniBosses(){const e=new N(240,4,240),n=new L_(e,this.scene,this.player,this.inventory,this.itemRegistry,this.mobSpawner);n.onDeath=()=>this._onMiniBossKilled("cave_troll","Cave Troll","Swamp Witch"),this.activeBoss=n,this._bossList=[n];const s=new N(138*8,13,138*8),r=new N_(s,this.scene,this.player,this.inventory,this.itemRegistry);r.onDeath=()=>this._onMiniBossKilled("swamp_witch","Swamp Witch","Stone Golem"),this._bossList.push(r);const o=new N(150*8,20,44*8),a=new U_(o,this.scene,this.player,this.inventory,this.itemRegistry);a.onDeath=()=>this._onMiniBossKilled("stone_golem","Stone Golem",null),this._bossList.push(a),this._activeBossList=this._bossList}_onMiniBossKilled(t,e,n){this.killedBosses.add(t),document.getElementById("boss-bar-wrap").style.display="none",this._showMsg(`${e} defeated! ${n?`Seek the ${n}.`:"Craft the Summoning Stone at the Forge!"}`),this.saveSystem.save(),this.activeBoss=null,this.killedBosses.size>=3&&this._showMsg("All guardians slain! Craft the Summoning Stone at the Forge.")}_spawnFinalBoss(){const t=new N(1104,15,1104),e=new D_(t,this.scene,this.player,this.inventory,this.itemRegistry,this.worldData);e.onWin=()=>this._onWin(),e.onDeath=()=>{},this.activeBoss=e,this._activeBossList=[e],this._showMsg("THE CONQUEROR AWAKENS! Fight for your life!")}_onWin(){this.state=hn.WIN,this.saveSystem.clear(),this.player.controls.unlock(),document.getElementById("end-screen").style.display="flex",document.getElementById("end-title").textContent="🏆 YOU WIN!",document.getElementById("end-title").style.color="#f1c40f",document.getElementById("end-msg").textContent="The Conqueror is defeated. The island is safe."}_usePortal(){const t=this.camera.position,e=Math.floor(t.x),n=Math.floor(t.z),s=this.currentDimension==="nether"?"overworld":"nether";s==="nether"&&!this.netherData?(this._showMsg("The portal roars to life... the Nether is forming (this takes a moment)"),this.player.controls.unlock(),setTimeout(()=>this._switchDimension(s,e,n),50)):this._switchDimension(s,e,n)}_switchDimension(t,e,n){this.mobSpawner._despawnAll();for(const{mob:a}of this.passiveSpawner.mobs)a.dispose();this.passiveSpawner.mobs=[],this.seaLife.clear(),this.droppedItems.clear();for(const a of this._activeBossList??[])a.mesh.visible=t==="overworld";this._sun&&(this._sun.visible=t==="overworld"),this._moon&&(this._moon.visible=t==="overworld");for(const a of this._clouds??[])a.visible=t==="overworld";const s=t==="nether";this.currentDimension=t,s?(this.netherData||(this.netherData=new Gc,n_(this.netherData),this.netherRenderer=new Xc(this.scene,this.netherData,this._atlasTex)),this.worldData=this.netherData,this.worldRenderer=this.netherRenderer,this.overworldRenderer.group.visible=!1,this.netherRenderer.group.visible=!0,this.scene.fog=new ms(new Bt(.35,.08,.03),.022),this.scene.background=new Bt(.2,.04,.02),this.ambientLight.intensity=.55,this.ambientLight.color.set(16737843),this.dirLight.intensity=0,document.getElementById("boss-bar-wrap").style.display="none"):(this.worldData=this.overworldData,this.worldRenderer=this.overworldRenderer,this.overworldRenderer.group.visible=!0,this.netherRenderer&&(this.netherRenderer.group.visible=!1),this.ambientLight.color.set(16777215)),this.player.worldData=this.worldData,this.player.worldRenderer=this.worldRenderer,this.miningSystem.worldData=this.worldData,this.miningSystem.worldRenderer=this.worldRenderer,this.farmingSystem.worldData=this.worldData,this.mobSpawner.worldData=this.worldData,this.seaLife.worldData=this.worldData,this.minimap.setWorldData(this.worldData);const r=s?i_(this.worldData,e,n):Math.max(0,this.worldData.surfaceY(e,n)),o=s?n+1:n;this.player.camera.position.set(e+.5,r+1.8,o+.5),this.player._vy=0,this.mobSpawner.setNight(s?!0:this.dayNight.isNight),this._showMsg(s?"You step through into a hostile, burning world...":"You stumble back into daylight.")}_onPlayerDeath(){this.state=hn.DEAD,this.saveSystem.clear(),this.player.controls.unlock(),document.getElementById("end-screen").style.display="flex",document.getElementById("end-title").textContent="💀 YOU DIED",document.getElementById("end-title").style.color="#e74c3c",document.getElementById("end-msg").textContent="The island claimed you. Try again."}_setupUIKeys(){window.addEventListener("keydown",t=>{t.code==="KeyE"&&this.state===hn.PLAYING&&(this.inventoryUI.toggle()?(this.craftingUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="KeyC"&&this.state===hn.PLAYING&&(this.craftingUI.toggle()?(this.inventoryUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="Escape"&&(this.inventoryUI.hide(),this.craftingUI.hide())})}update(t){if(this.state===hn.PLAYING){if(this.stats.update(t),this.currentDimension!=="nether"&&this.dayNight.update(t),this._updateSunFollow(),this.mobSpawner.update(t),this.passiveSpawner.update(t),this.seaLife.update(t),this.farmingSystem.update(t),this._updateMinimap(t),this.droppedItems.update(t,this.camera.position),!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.update(t),this._updateBlockOutline(),this._updateSky(t),this._activeBossList&&this.currentDimension!=="nether"){let e=null,n=1/0;for(const s of this._activeBossList){if(s.dead)continue;s.update(t,this.worldData);const r=s.position.distanceTo(this.camera.position);r<25&&r<n&&(n=r,e=s)}e?e.showBar():document.getElementById("boss-bar-wrap").style.display="none"}this._saveTimer+=t,this._saveTimer>=60&&(this._saveTimer=0,this.state===hn.PLAYING&&this.currentDimension!=="nether"&&this.saveSystem.save())}}_showMsg(t){const e=document.getElementById("pickup-flash");e.textContent=t,e.style.opacity="1",e.style.bottom="140px",e.style.fontSize="13px",clearTimeout(this._msgTimeout),this._msgTimeout=setTimeout(()=>{e.style.opacity="0"},4e3)}_setupBlockOutline(){const t=new Qm(new Rn(1.002,1.002,1.002)),e=new Fl({color:0,linewidth:1.5,depthTest:!0});this._blockOutline=new Jm(t,e),this._blockOutline.visible=!1,this.scene.add(this._blockOutline)}_updateSunFollow(){if(this.dirLight.intensity<=0)return;const t=this.dirLight.position.clone().normalize();this.dirLight.position.copy(this.camera.position).addScaledVector(t,40),this.dirLight.target.position.copy(this.camera.position)}_updateMinimap(t){const e=new N;this.camera.getWorldDirection(e);const n=Math.atan2(e.x,e.z),s=[...this.mobSpawner.getMobs(),...this.passiveSpawner.getMobs(),...this.currentDimension==="nether"?[]:this.seaLife.getMobs()];this.minimap.update(t,this.camera.position,n,s)}_updateBlockOutline(){const t=this.player.targetBlock;t?(this._blockOutline.position.set(t[0]+.5,t[1]+.5,t[2]+.5),this._blockOutline.visible=!0):this._blockOutline.visible=!1}_setupSky(){const t=new hi(18,18),e=new oi({color:16772744,side:ke,depthWrite:!1});this._sun=new Ee(t,e),this.scene.add(this._sun);const n=new hi(12,12),s=new oi({color:14544639,side:ke,depthWrite:!1});this._moon=new Ee(n,s),this.scene.add(this._moon),this._clouds=[];const r=[[[0,0,0,8,2,6],[8,1,0,6,2,5],[-4,1,1,5,2,4]],[[0,0,0,10,2,5],[5,1,0,7,2,4],[-5,0,0,4,2,4]],[[0,0,0,7,2,7],[5,0,1,5,2,5],[0,1,-4,6,2,4]],[[0,0,0,9,2,6],[6,0,0,6,2,5],[-3,1,2,5,2,4],[4,1,-4,4,2,4]]],o=[[60,45,40],[140,48,-20],[30,50,100],[110,46,-60],[-40,44,70],[170,47,150],[90,50,-100],[50,45,-150],[200,46,60],[80,49,200],[-30,48,180],[160,50,120]],a=kt/2,c=Dt/2;for(let l=0;l<o.length;l++){const h=new Bn,f=r[l%r.length];for(const[g,p,m,E,y,b]of f){const O=new Rn(E,y,b),C=new oi({color:16777215,transparent:!0,opacity:.82,depthWrite:!1}),R=new Ee(O,C);R.position.set(g,p,m),h.add(R)}const[u,d,_]=o[l];h.position.set(a+u,d,c+_),this.scene.add(h),this._clouds.push(h)}}_updateSky(t){const n=(this.dayNight?this.dayNight.timeOfDay??0:0)*Math.PI*2,s=160,r=kt/2,o=Dt/2;if(this._sun&&(this._sun.position.set(r+Math.cos(n)*s,Math.sin(n)*s+20,o-30),this._sun.lookAt(this.camera.position)),this._moon&&(this._moon.position.set(r+Math.cos(n+Math.PI)*s,Math.sin(n+Math.PI)*s+20,o-30),this._moon.lookAt(this.camera.position)),this._clouds)for(let a=0;a<this._clouds.length;a++)this._clouds[a].position.x+=2*t,this._clouds[a].position.x>r+250&&(this._clouds[a].position.x=r-250)}_generateAtlas(){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.imageSmoothingEnabled=!1;const r=d=>{let _=d;return()=>(_=_*1664525+1013904223>>>0,_/4294967295)},o=(d,_,g)=>{s.fillStyle=g,s.fillRect(d*16,_*16,16,16)},a=(d,_,g,p,m)=>{s.fillStyle=m,s.fillRect(d*16+g,_*16+p,1,1)},c=(d,_,g,p,m,E,y)=>{s.fillStyle=y,s.fillRect(d*16+g,_*16+p,m,E)},l=(d,_,g,p,m)=>{const E=r(m),y=parseInt(g.slice(1),16),b=y>>16&255,O=y>>8&255,C=y&255;for(let R=0;R<16;R++)for(let D=0;D<16;D++){const j=Math.round((E()-.5)*p*2),x=Math.max(0,Math.min(255,b+j)),T=Math.max(0,Math.min(255,O+j)),V=Math.max(0,Math.min(255,C+j));s.fillStyle=`rgb(${x},${T},${V})`,s.fillRect(d*16+D,_*16+R,1,1)}};l(0,0,"#5d9e2f",22,101);const h=r(102);for(let d=0;d<14;d++)a(0,0,Math.floor(h()*16),Math.floor(h()*16),h()>.5?"#3a7010":"#7ac840");l(1,0,"#828282",10,201),s.fillStyle="#9a9a9a",s.fillRect(1*16+1,0*16+1,5,4),s.fillRect(1*16+8,0*16+1,6,3),s.fillRect(1*16+1,0*16+7,4,5),s.fillRect(1*16+7,0*16+8,7,4),s.fillRect(1*16+1,0*16+13,6,2),s.fillRect(1*16+10,0*16+12,5,3),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,0*16+5,16,1),s.fillRect(1*16+0,0*16+12,16,1),s.fillRect(1*16+6,0*16+0,1,5),s.fillRect(1*16+3,0*16+6,1,6),s.fillRect(1*16+10,0*16+5,1,7),s.fillRect(1*16+13,0*16+0,1,12),l(2,0,"#8b5a2b",20,301);const f=r(302);for(let d=0;d<20;d++)a(2,0,Math.floor(f()*16),Math.floor(f()*16),f()>.5?"#5a3010":"#aa7a40");l(3,0,"#8b5a2b",18,401);{const d=r(402);for(let g=0;g<4;g++)for(let p=0;p<16;p++){const m=Math.round((d()-.5)*24),E=[74+m,158+m,40+m];s.fillStyle=`rgb(${Math.max(0,Math.min(255,E[0]))},${Math.max(0,Math.min(255,E[1]))},${Math.max(0,Math.min(255,E[2]))})`,s.fillRect(3*16+p,0*16+g,1,1)}const _=r(403);for(let g=0;g<16;g++)_()>.45&&a(3,0,g,4,"#5a8a22")}l(4,0,"#c49a40",12,501),c(4,0,0,0,16,1,"#7a5010"),c(4,0,0,7,16,1,"#7a5010"),c(4,0,0,8,16,1,"#6a4010"),c(4,0,0,15,16,1,"#7a5010"),c(4,0,7,1,1,6,"#8a6020"),c(4,0,3,9,1,6,"#8a6020");for(let d=2;d<7;d+=2)c(4,0,0,d,16,1,"rgba(0,0,0,0.05)");for(let d=10;d<15;d+=2)c(4,0,0,d,16,1,"rgba(0,0,0,0.05)");l(5,0,"#8b5a2b",18,601),l(6,0,"#4d2e12",14,701);for(let d=2;d<16;d+=4)c(6,0,0,d,16,1,"rgba(0,0,0,0.28)");c(6,0,6,0,4,16,"rgba(20,60,20,0.22)"),o(0,1,"#6e6e6e"),s.fillStyle="#3d3d3d";for(const d of[0,6,10,15])c(0,1,0,d,16,1,"#404040");c(0,1,4,1,1,5,"#404040"),c(0,1,11,1,1,5,"#404040"),c(0,1,7,6,1,4,"#404040"),c(0,1,13,6,1,4,"#404040"),c(0,1,3,10,1,5,"#404040"),c(0,1,9,10,1,5,"#404040"),c(0,1,14,10,1,5,"#404040"),s.fillStyle="#8e8e8e",s.fillRect(0*16+1,1*16+1,3,2),s.fillRect(0*16+5,1*16+2,5,2),s.fillRect(0*16+12,1*16+2,3,2),s.fillRect(0*16+1,1*16+7,5,2),s.fillRect(0*16+8,1*16+7,4,2),s.fillRect(0*16+1,1*16+11,7,3),s.fillRect(0*16+10,1*16+11,4,3),l(2,1,"#d4c27a",14,901);{const d=r(902);for(let _=0;_<22;_++)a(2,1,Math.floor(d()*16),Math.floor(d()*16),d()>.5?"#c4b060":"#e4d090")}o(3,1,"#888877");{const d=r(1001);for(let _=0;_<16;_+=4)for(let g=0;g<16;g+=4){const p=110+Math.floor(d()*55);s.fillStyle=`rgb(${p},${p},${p-8})`,s.fillRect(3*16+g,1*16+_,3,3),s.fillStyle=`rgb(${p-35},${p-35},${p-42})`,s.fillRect(3*16+g+3,1*16+_,1,4),s.fillRect(3*16+g,1*16+_+3,4,1)}}l(4,1,"#7a5428",12,1101);for(const d of[2,7,12])c(4,1,d,0,1,16,"#4a2c0a");for(const d of[4,9,14])c(4,1,d,0,1,16,"#9a6838");c(4,1,8,6,3,3,"#3a1c08"),l(5,1,"#9a6a30",8,1201),s.strokeStyle="#7a4a18",s.lineWidth=1;for(const d of[6,4,2])s.beginPath(),s.arc(5*16+8,1*16+8,d,0,Math.PI*2),s.stroke();c(5,1,7,7,2,2,"#3a1a08"),c(5,1,0,0,16,2,"#5a3818"),c(5,1,0,14,16,2,"#5a3818"),c(5,1,0,2,2,12,"#5a3818"),c(5,1,14,2,2,12,"#5a3818"),l(9,1,"#b48c38",10,1301),c(9,1,0,0,16,2,"#5a3010"),c(9,1,0,14,16,2,"#5a3010"),c(9,1,0,0,2,16,"#5a3010"),c(9,1,14,0,2,16,"#5a3010"),c(9,1,2,8,12,1,"#5a3010"),c(9,1,6,5,4,5,"#c8a020"),c(9,1,7,6,2,3,"#7a5010");for(const d of[3,5,10,12])c(9,1,2,d,12,1,"rgba(0,0,0,0.1)");l(6,1,"#7a4a20",10,1901),c(6,1,0,0,16,3,"#c8c0a8"),c(6,1,0,3,16,1,"#8a8270"),l(7,1,"#a02020",10,2001),c(7,1,0,0,16,4,"#e8e0d0"),c(7,1,0,4,16,1,"#b0a890"),l(1,2,"#828282",8,1401),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,2*16+6,16,1),s.fillRect(1*16+7,2*16+0,1,6);{const d=r(1402);for(let _=0;_<9;_++){const g=1+Math.floor(d()*12),p=1+Math.floor(d()*12),m=2+Math.floor(d()*2);c(1,2,g,p,m,2,d()>.5?"#cc8855":"#dd9966")}for(let _=0;_<4;_++)a(1,2,1+Math.floor(d()*12),1+Math.floor(d()*12),"#ffcc99")}l(2,2,"#6a6a7a",8,1501),s.fillStyle="#45455a",s.fillRect(2*16+0,2*16+6,16,1),s.fillRect(2*16+7,2*16+0,1,6);{const d=r(1502);for(let _=0;_<8;_++)c(2,2,1+Math.floor(d()*12),1+Math.floor(d()*12),2,2,d()>.5?"#9944ee":"#44aacc");for(let _=0;_<4;_++)a(2,2,1+Math.floor(d()*13),1+Math.floor(d()*13),"#ccffee")}l(11,2,"#c49a40",10,1601),c(11,2,0,0,16,2,"#5a3010"),c(11,2,0,0,2,16,"#5a3010"),c(11,2,14,0,2,16,"#5a3010"),c(11,2,7,1,1,14,"#8a6020"),s.fillStyle="#2a1a08",c(11,2,4,9,1,6,"#333"),c(11,2,5,8,1,1,"#333"),c(11,2,6,7,1,1,"#333"),c(11,2,7,5,4,2,"#333"),c(11,2,7,4,2,1,"#333"),c(11,2,9,7,2,1,"#333"),c(11,2,3,6,5,1,"#888");for(let d=0;d<4;d++)a(11,2,3+d,5+d%2,"#888");l(13,2,"#3a3a3a",8,1701),c(13,2,0,0,16,1,"#222"),c(13,2,0,15,16,1,"#222"),c(13,2,0,0,1,16,"#222"),c(13,2,15,0,1,16,"#222"),c(13,2,4,2,8,5,"#1a1a1a"),c(13,2,2,9,5,6,"#ff8800"),c(13,2,9,9,5,6,"#ff8800"),c(13,2,3,10,3,4,"#ffcc00"),c(13,2,10,10,3,4,"#ffcc00"),c(13,2,4,11,1,2,"#ffffff"),c(13,2,11,11,1,2,"#ffffff"),c(13,2,1,8,7,1,"#555"),c(13,2,8,8,7,1,"#555"),l(14,2,"#1a0a2a",8,1801);{const d=r(1802);for(let _=0;_<18;_++)s.fillStyle="rgba(160,50,255,0.3)",s.fillRect(14*16+Math.floor(d()*14)+1,2*16+Math.floor(d()*14)+1,2,1)}s.fillStyle="#cc44ff",c(14,2,4,4,8,1,"#cc44ff"),c(14,2,4,8,8,1,"#cc44ff"),c(14,2,8,4,1,5,"#cc44ff"),c(14,2,4,12,8,1,"#cc44ff"),c(14,2,6,12,1,3,"#cc44ff"),s.fillStyle="rgba(200,100,255,0.18)",s.fillRect(14*16+3,2*16+3,10,10),s.clearRect(1*16,3*16,16,16),s.fillStyle="rgba(145,215,255,0.38)",s.fillRect(1*16,3*16,16,16),s.fillStyle="#7ab0cc",s.fillRect(1*16,3*16,16,1),s.fillRect(1*16,3*16+16-1,16,1),s.fillRect(1*16,3*16,1,16),s.fillRect(1*16+16-1,3*16,1,16),s.fillStyle="rgba(255,255,255,0.7)",s.fillRect(1*16+2,3*16+2,3,1),s.fillRect(1*16+2,3*16+3,1,2),s.fillStyle="rgba(255,255,255,0.4)",s.fillRect(1*16+11,3*16+11,3,1),s.fillRect(1*16+13,3*16+11,1,2),s.clearRect(4*16,3*16,16,16);{const d=r(1901);for(let _=0;_<16;_++)for(let g=0;g<16;g++){const p=d();p<.1||(p<.35?(s.fillStyle="#1a5510",s.fillRect(4*16+g,3*16+_,1,1)):p<.72?(s.fillStyle="#2a7020",s.fillRect(4*16+g,3*16+_,1,1)):(s.fillStyle="#3a9028",s.fillRect(4*16+g,3*16+_,1,1)))}}s.clearRect(0*16,5*16,16,16),c(0,5,7,7,2,9,"#8b5a2b"),c(0,5,6,3,4,5,"#ff8800"),c(0,5,7,1,2,4,"#ffdd00"),a(0,5,7,1,"#ffffff"),o(7,5,"#2e1808"),c(7,5,0,11,16,4,"#5a3618"),c(7,5,2,9,12,3,"#4a2810"),c(7,5,3,6,10,5,"#cc5500"),c(7,5,4,3,8,5,"#ff8800"),c(7,5,5,1,6,4,"#ffcc00"),c(7,5,6,0,4,2,"#ffff88"),s.clearRect(15*16,12*16,16,16),s.fillStyle="rgba(20,80,200,0.75)",s.fillRect(15*16,12*16,16,16),s.fillStyle="rgba(80,160,255,0.5)";for(let d=0;d<16;d+=3)s.fillRect(15*16+d,12*16+4,2,1),s.fillRect(15*16+(d+2)%16,12*16+10,2,1);l(3,2,"#5a2a20",12,2101);{const d=r(2102);for(let _=0;_<12;_++)a(3,2,Math.floor(d()*16),Math.floor(d()*16),d()>.5?"#3a1810":"#7a4030")}s.clearRect(4*16,2*16,16,16),s.fillStyle="rgba(200,50,10,0.9)",s.fillRect(4*16,2*16,16,16),s.fillStyle="rgba(255,180,40,0.8)";for(let d=0;d<16;d+=3)s.fillRect(4*16+d,2*16+4,2,1),s.fillRect(4*16+(d+2)%16,2*16+10,2,1);s.fillStyle="rgba(255,255,150,0.6)",s.fillRect(4*16+6,2*16+7,3,2),l(5,2,"#f0d878",16,2301);{const d=r(2302);for(let _=0;_<10;_++)a(5,2,Math.floor(d()*16),Math.floor(d()*16),d()>.5?"#fff0a0":"#c8a850")}l(6,2,"#1a0e28",8,2401);{const d=r(2402);for(let _=0;_<8;_++)a(6,2,Math.floor(d()*16),Math.floor(d()*16),"#4a2870")}s.clearRect(7*16,2*16,16,16),s.fillStyle="rgba(120,20,200,0.75)",s.fillRect(7*16,2*16,16,16),s.fillStyle="rgba(200,100,255,0.6)";for(let d=0;d<16;d+=2)s.fillRect(7*16+d,2*16+d*3%16,2,2);s.fillStyle="rgba(230,180,255,0.5)",s.fillRect(7*16+6,2*16+6,4,4),s.clearRect(8*16,3*16,16,16);{const d=r(2601),_=["#ff6a8a","#ff9a4a","#ffcc55"];for(let g=0;g<16;g++)for(let p=0;p<16;p++)d()<.55||(s.fillStyle=_[Math.floor(d()*_.length)],s.fillRect(8*16+p,3*16+g,1,1))}s.clearRect(9*16,3*16,16,16);{const d=r(2701);for(let _=0;_<16;_++)for(let g=0;g<16;g++){const p=d();p<.35||(p<.65?(s.fillStyle="#1a5a30",s.fillRect(9*16+g,3*16+_,1,1)):(s.fillStyle="#2a8a4a",s.fillRect(9*16+g,3*16+_,1,1)))}}s.clearRect(10*16,3*16,16,16);{const d=r(2801),_=["#3a7020","#4a8f3f","#5da84e"];for(let g=0;g<7;g++){const p=1+Math.floor(d()*14),m=Math.floor(d()*3)-1,E=8+Math.floor(d()*7),y=_[Math.floor(d()*_.length)];for(let b=0;b<E;b++){const O=p+Math.round(m*b/E);s.fillStyle=y,s.fillRect(10*16+O,3*16+(15-b),1,1)}}}s.clearRect(11*16,3*16,16,16),c(11,3,7,10,2,6,"#3a7020");{const d=[[7,3,"#ff5577"],[5,5,"#ffdd33"],[9,5,"#ffffff"],[7,7,"#ff8844"]];for(const[_,g,p]of d)c(11,3,_,g,2,2,p);a(11,3,7,5,"#ffee88")}const u=new Bl(n);return u.magFilter=we,u.minFilter=we,u}}window.addEventListener("error",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`ERROR: ${i.message}
at ${i.filename}:${i.lineno}`,document.body.appendChild(t)});window.addEventListener("unhandledrejection",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`PROMISE ERROR: ${i.reason}`,document.body.appendChild(t)});const Yn=new Km({antialias:!1});Yn.setSize(window.innerWidth,window.innerHeight);Yn.shadowMap.enabled=!0;Yn.shadowMap.type=rl;Yn.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.prepend(Yn.domElement);window.addEventListener("resize",()=>{Yn.setSize(window.innerWidth,window.innerHeight),ai.camera.aspect=window.innerWidth/window.innerHeight,ai.camera.updateProjectionMatrix()});let ai;try{ai=new Ag(Yn),window.__game__=ai}catch(i){const t=document.createElement("div");throw t.style.cssText="position:fixed;top:50px;left:0;right:0;background:#c0392b;color:#fff;padding:16px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`GAME INIT ERROR:
${i.stack||i.message}`,document.body.appendChild(t),i}const Rg=new c0;function Gl(){requestAnimationFrame(Gl);const i=Math.min(Rg.getDelta(),.1);try{ai.update(i)}catch(t){console.error("Update error:",t)}Yn.render(ai.scene,ai.camera)}Gl();
