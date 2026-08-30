(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="169",Ql=0,ka=1,th=2,ll=1,hl=2,bn=3,Xn=0,Ge=1,He=2,Gn=0,Hi=1,za=2,Ha=3,Ga=4,eh=5,si=100,nh=101,ih=102,sh=103,rh=104,oh=200,ah=201,ch=202,lh=203,To=204,bo=205,hh=206,dh=207,fh=208,uh=209,ph=210,mh=211,_h=212,gh=213,vh=214,Ao=0,wo=1,Ro=2,Wi=3,Co=4,Po=5,Lo=6,Io=7,ma=0,yh=1,xh=2,Vn=0,Sh=1,Mh=2,Eh=3,Th=4,bh=5,Ah=6,wh=7,dl=300,Xi=301,Yi=302,No=303,Uo=304,Sr=306,Do=1e3,oi=1001,Oo=1002,Le=1003,Rh=1004,As=1005,cn=1006,Pr=1007,ai=1008,Rn=1009,fl=1010,ul=1011,ps=1012,_a=1013,li=1014,An=1015,Ss=1016,ga=1017,va=1018,qi=1020,pl=35902,ml=1021,_l=1022,ln=1023,gl=1024,vl=1025,Gi=1026,Ki=1027,yl=1028,ya=1029,xl=1030,xa=1031,Sa=1033,or=33776,ar=33777,cr=33778,lr=33779,Bo=35840,Fo=35841,ko=35842,zo=35843,Ho=36196,Go=37492,Vo=37496,Wo=37808,Xo=37809,Yo=37810,qo=37811,Ko=37812,$o=37813,Zo=37814,jo=37815,Jo=37816,Qo=37817,ta=37818,ea=37819,na=37820,ia=37821,hr=36492,sa=36494,ra=36495,Sl=36283,oa=36284,aa=36285,ca=36286,Ch=3200,Ph=3201,Ml=0,Lh=1,Fn="",un="srgb",Kn="srgb-linear",Ma="display-p3",Mr="display-p3-linear",pr="linear",ce="srgb",mr="rec709",_r="p3",gi=7680,Va=519,Ih=512,Nh=513,Uh=514,El=515,Dh=516,Oh=517,Bh=518,Fh=519,la=35044,Wa="300 es",wn=2e3,gr=2001;class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,ha=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function Lr(i,t,e){return(1-e)*i+e*t}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],E=s[1],S=s[4],b=s[7],O=s[2],C=s[5],w=s[8];return r[0]=o*g+a*E+c*O,r[3]=o*m+a*S+c*C,r[6]=o*p+a*b+c*w,r[1]=l*g+h*E+d*O,r[4]=l*m+h*S+d*C,r[7]=l*p+h*b+d*w,r[2]=u*g+f*E+_*O,r[5]=u*m+f*S+_*C,r[8]=u*p+f*b+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=u*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Ft;function Tl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zh(){const i=ms("canvas");return i.style.display="block",i}const Xa={};function fr(i){i in Xa||(Xa[i]=!0,console.warn(i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ya=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qa=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[Kn]:{transfer:pr,primaries:mr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[un]:{transfer:ce,primaries:mr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Mr]:{transfer:pr,primaries:_r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(qa),fromReference:i=>i.applyMatrix3(Ya)},[Ma]:{transfer:ce,primaries:_r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(qa),fromReference:i=>i.applyMatrix3(Ya).convertLinearToSRGB()}},Wh=new Set([Kn,Mr]),Qt={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ji[t].toReference,s=Ji[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ji[i].primaries},getTransfer:function(i){return i===Fn?pr:Ji[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ji[t].luminanceCoefficients)}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Xh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=ms("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yh=0;class bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ur(s[o].image)):r.push(Ur(s[o]))}else r=Ur(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;class Ie extends ui{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=oi,s=oi,r=cn,o=ai,a=ln,c=Rn,l=Ie.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Wn(),this.name="",this.source=new bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=dl;Ie.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,b=(f+1)/2,O=(p+1)/2,C=(h+u)/4,w=(d+g)/4,D=(_+m)/4;return S>b&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=w/n):b>O?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=D/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=w/r,s=D/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-g)/E,this.z=(u-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Kh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Al extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $h extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||c!==u||l!==f||h!==_){let m=1-a;const p=c*u+l*f+h*_+d*g,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const O=Math.sqrt(S),C=Math.atan2(O,p*E);m=Math.sin(m*C)/O,a=Math.sin(a*C)/O}const b=a*E;if(c=c*m+u*b,l=l*m+f*b,h=h*m+_*b,d=d*m+g*b,m===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=O,l*=O,h*=O,d*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+c*f-l*u,t[e+1]=c*_+h*u+l*d-a*f,t[e+2]=l*_+h*f+a*u-c*d,t[e+3]=h*_-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"YZX":this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case"XZY":this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new N,Ka=new Ms;class Es{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),Rs.subVectors(this.max,Qi),yi.subVectors(t.a,Qi),xi.subVectors(t.b,Qi),Si.subVectors(t.c,Qi),Pn.subVectors(xi,yi),Ln.subVectors(Si,xi),Zn.subVectors(yi,Si);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Zn.y,Zn.x,0];return!Or(e,yi,xi,Si,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,yi,xi,Si,Rs))?!1:(Cs.crossVectors(Pn,Ln),e=[Cs.x,Cs.y,Cs.z],Or(e,yi,xi,Si,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,ws=new Es,yi=new N,xi=new N,Si=new N,Pn=new N,Ln=new N,Zn=new N,Qi=new N,Rs=new N,Cs=new N,jn=new N;function Or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);const a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),c=t.dot(jn),l=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zh=new Es,ts=new N,Br=new N;class Er{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(Br)),this.expandByPoint(ts.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new N,Fr=new N,Ps=new N,In=new N,kr=new N,Ls=new N,zr=new N;class Ea{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fr.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=In.dot(this.direction),c=-In.dot(Ps),l=In.lengthSq(),h=Math.abs(1-o*o);let d,u,f,_;if(h>0)if(d=o*c-a,u=o*a-c,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fr).addScaledVector(Ps,u),f}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){kr.subVectors(e,t),Ls.subVectors(n,t),zr.crossVectors(kr,Ls);let o=this.direction.dot(zr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);const c=a*this.direction.dot(Ls.crossVectors(In,Ls));if(c<0)return null;const l=a*this.direction.dot(kr.cross(In));if(l<0||c+l>o)return null;const h=-a*In.dot(zr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,_,g,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,_,g,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,_=l*h,g=l*d;e[0]=u+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,_=l*h,g=l*d;e[0]=u-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,_=a*h,g=a*d;e[0]=c*h,e[4]=_*l-f,e[8]=u*l+g,e[1]=c*d,e[5]=g*l+u,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+_,e[10]=u-g*d}else if(t.order==="XZY"){const u=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jh,t,Jh)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Nn.crossVectors(n,Ye),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Nn.crossVectors(n,Ye)),Nn.normalize(),Is.crossVectors(Ye,Nn),s[0]=Nn.x,s[4]=Is.x,s[8]=Ye.x,s[1]=Nn.y,s[5]=Is.y,s[9]=Ye.y,s[2]=Nn.z,s[6]=Is.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],E=n[3],S=n[7],b=n[11],O=n[15],C=s[0],w=s[4],D=s[8],j=s[12],y=s[1],T=s[5],H=s[9],z=s[13],W=s[2],J=s[6],G=s[10],tt=s[14],X=s[3],dt=s[7],ft=s[11],St=s[15];return r[0]=o*C+a*y+c*W+l*X,r[4]=o*w+a*T+c*J+l*dt,r[8]=o*D+a*H+c*G+l*ft,r[12]=o*j+a*z+c*tt+l*St,r[1]=h*C+d*y+u*W+f*X,r[5]=h*w+d*T+u*J+f*dt,r[9]=h*D+d*H+u*G+f*ft,r[13]=h*j+d*z+u*tt+f*St,r[2]=_*C+g*y+m*W+p*X,r[6]=_*w+g*T+m*J+p*dt,r[10]=_*D+g*H+m*G+p*ft,r[14]=_*j+g*z+m*tt+p*St,r[3]=E*C+S*y+b*W+O*X,r[7]=E*w+S*T+b*J+O*dt,r[11]=E*D+S*H+b*G+O*ft,r[15]=E*j+S*z+b*tt+O*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+g*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],E=d*m*l-g*u*l+g*c*f-a*m*f-d*c*p+a*u*p,S=_*u*l-h*m*l-_*c*f+o*m*f+h*c*p-o*u*p,b=h*g*l-_*d*l+_*a*f-o*g*f-h*a*p+o*d*p,O=_*d*c-h*g*c-_*a*u+o*g*u+h*a*m-o*d*m,C=e*E+n*S+s*b+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=E*w,t[1]=(g*u*r-d*m*r-g*s*f+n*m*f+d*s*p-n*u*p)*w,t[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*w,t[4]=S*w,t[5]=(h*m*r-_*u*r+_*s*f-e*m*f-h*s*p+e*u*p)*w,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*w,t[8]=b*w,t[9]=(_*d*r-h*g*r-_*n*f+e*g*f+h*n*p-e*d*p)*w,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*w,t[12]=O*w,t[13]=(h*g*s-_*d*s+_*n*u-e*g*u-h*n*m+e*d*m)*w,t[14]=(_*a*s-o*g*s-_*n*c+e*g*c+o*n*m-e*a*m)*w,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,_=r*d,g=o*h,m=o*d,p=a*d,E=c*l,S=c*h,b=c*d,O=n.x,C=n.y,w=n.z;return s[0]=(1-(g+p))*O,s[1]=(f+b)*O,s[2]=(_-S)*O,s[3]=0,s[4]=(f-b)*C,s[5]=(1-(u+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(_+S)*w,s[9]=(m-E)*w,s[10]=(1-(u+g))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const l=1/r,h=1/o,d=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,_;if(a===wn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===gr)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,f=(n+s)*h;let _,g;if(a===wn)_=(o+r)*d,g=-2*d;else if(a===gr)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new N,rn=new he,jh=new N(0,0,0),Jh=new N(1,1,1),Nn=new N,Is=new N,Ye=new N,$a=new he,Za=new Ms;class dn{constructor(t=0,e=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Za.setFromEuler(this),this.setFromQuaternion(Za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qh=0;const ja=new N,Ei=new Ms,xn=new he,Ns=new N,es=new N,td=new N,ed=new Ms,Ja=new N(1,0,0),Qa=new N(0,1,0),tc=new N(0,0,1),ec={type:"added"},nd={type:"removed"},Ti={type:"childadded",child:null},Hr={type:"childremoved",child:null};class xe extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new N,e=new dn,n=new Ms,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ft}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(tc,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(es,Ns,this.up):xn.lookAt(Ns,es,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(xn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ec),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nd),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ec),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new N(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new N,Sn=new N,Gr=new N,Mn=new N,bi=new N,Ai=new N,nc=new N,Vr=new N,Wr=new N,Xr=new N,Yr=new pe,qr=new pe,Kr=new pe;class Ze{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Sn.subVectors(n,e),Gr.subVectors(t,e);const o=on.dot(on),a=on.dot(Sn),c=on.dot(Gr),l=Sn.dot(Sn),h=Sn.dot(Gr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,_=(o*h-a*c)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(o,Mn.y),c.addScaledVector(a,Mn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Yr.setScalar(0),qr.setScalar(0),Kr.setScalar(0),Yr.fromBufferAttribute(t,e),qr.fromBufferAttribute(t,n),Kr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yr,r.x),o.addScaledVector(qr,r.y),o.addScaledVector(Kr,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Sn.subVectors(t,e),on.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),on.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;bi.subVectors(s,n),Ai.subVectors(r,n),Vr.subVectors(t,n);const c=bi.dot(Vr),l=Ai.dot(Vr);if(c<=0&&l<=0)return e.copy(n);Wr.subVectors(t,s);const h=bi.dot(Wr),d=Ai.dot(Wr);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(bi,o);Xr.subVectors(t,r);const f=bi.dot(Xr),_=Ai.dot(Xr);if(_>=0&&f<=_)return e.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Ai,a);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return nc.subVectors(r,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(nc,a);const p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(bi,o).addScaledVector(Ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Us={h:0,s:0,l:0};function $r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=kh(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$r(o,r,t+1/3),this.g=$r(o,r,t),this.b=$r(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const n=wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Qt.fromWorkingColorSpace(Re.copy(this),t),Math.round(ke(Re.r*255,0,255))*65536+Math.round(ke(Re.g*255,0,255))*256+Math.round(ke(Re.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=un){Qt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Us);const n=Lr(Un.h,Us.h,e),s=Lr(Un.s,Us.s,e),r=Lr(Un.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new kt;kt.NAMES=wl;let id=0;class pi extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Hi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=bo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new N,Ds=new zt;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==la&&(t.usage=this.usage),t}}class Rl extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cl extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sd=0;const Je=new he,Zr=new xe,wi=new N,qe=new Es,ns=new Es,Ee=new N;class en extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tl(t)?Cl:Rl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(qe.min,ns.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,ns.max),qe.expandByPoint(Ee)):(qe.expandByPoint(ns.min),qe.expandByPoint(ns.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(wi.fromBufferAttribute(t,l),Ee.add(wi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new N,c[D]=new N;const l=new N,h=new N,d=new N,u=new zt,f=new zt,_=new zt,g=new N,m=new N;function p(D,j,y){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,j),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,D),f.fromBufferAttribute(r,j),_.fromBufferAttribute(r,y),h.sub(l),d.sub(l),f.sub(u),_.sub(u);const T=1/(f.x*_.y-_.x*f.y);isFinite(T)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(T),a[D].add(g),a[j].add(g),a[y].add(g),c[D].add(m),c[j].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,j=E.length;D<j;++D){const y=E[D],T=y.start,H=y.count;for(let z=T,W=T+H;z<W;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new N,b=new N,O=new N,C=new N;function w(D){O.fromBufferAttribute(s,D),C.copy(O);const j=a[D];S.copy(j),S.sub(O.multiplyScalar(O.dot(j))).normalize(),b.crossVectors(C,j);const T=b.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,T)}for(let D=0,j=E.length;D<j;++D){const y=E[D],T=y.start,H=y.count;for(let z=T,W=T+H;z<W;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)u[_++]=l[f++]}return new hn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new he,Jn=new Ea,Os=new Er,sc=new N,Bs=new N,Fs=new N,ks=new N,jr=new N,zs=new N,rc=new N,Hs=new N;class ye extends xe{constructor(t=new en,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(jr.fromBufferAttribute(d,t),o?zs.addScaledVector(jr,h):zs.addScaledVector(jr.sub(e),h))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Os.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Os,sc)===null||Jn.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(ic.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(ic),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,O=S;b<O;b+=3){const C=a.getX(b),w=a.getX(b+1),D=a.getX(b+2);s=Gs(this,p,t,n,l,h,d,C,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);s=Gs(this,o,t,n,l,h,d,E,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,O=S;b<O;b+=3){const C=b,w=b+1,D=b+2;s=Gs(this,p,t,n,l,h,d,C,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const E=m,S=m+1,b=m+2;s=Gs(this,o,t,n,l,h,d,E,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rd(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xn,a),c===null)return null;Hs.copy(a),Hs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Hs);return l<e.near||l>e.far?null:{distance:l,point:Hs.clone(),object:i}}function Gs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Bs),i.getVertexPosition(c,Fs),i.getVertexPosition(l,ks);const h=rd(i,t,e,n,Bs,Fs,ks,rc);if(h){const d=new N;Ze.getBarycoord(rc,Bs,Fs,ks,d),s&&(h.uv=Ze.getInterpolatedAttribute(s,a,c,l,d,new zt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,c,l,d,new zt)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new N,materialIndex:0};Ze.getNormal(Bs,Fs,ks,u.normal),h.face=u,h.barycoord=d}return h}class _n extends en{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(d,2));function _(g,m,p,E,S,b,O,C,w,D,j){const y=b/w,T=O/D,H=b/2,z=O/2,W=C/2,J=w+1,G=D+1;let tt=0,X=0;const dt=new N;for(let ft=0;ft<G;ft++){const St=ft*T-z;for(let Kt=0;Kt<J;Kt++){const te=Kt*y-H;dt[g]=te*E,dt[m]=St*S,dt[p]=W,l.push(dt.x,dt.y,dt.z),dt[g]=0,dt[m]=0,dt[p]=C>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(Kt/w),d.push(1-ft/D),tt+=1}}for(let ft=0;ft<D;ft++)for(let St=0;St<w;St++){const Kt=u+St+J*ft,te=u+St+J*(ft+1),Y=u+(St+1)+J*(ft+1),nt=u+(St+1)+J*ft;c.push(Kt,te,nt),c.push(te,Y,nt),X+=6}a.addGroup(f,X,j),f+=X,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const s in n)t[s]=n[s]}return t}function od(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const ad={clone:$i,merge:De};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ll extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new N,oc=new zt,ac=new zt;class Qe extends Ll{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,oc,ac),e.subVectors(ac,oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class hd extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const c=new Qe(Ri,Ci,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Ri,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Il extends Ie{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dd extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Il(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Gn});r.uniforms.tEquirect.value=e;const o=new ye(s,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=cn),new hd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Jr=new N,fd=new N,ud=new Ft;class ni{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Jr.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(Jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Er,Vs=new N;class ba{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],_=s[9],g=s[10],m=s[11],p=s[12],E=s[13],S=s[14],b=s[15];if(n[0].setComponents(c-r,u-l,m-f,b-p).normalize(),n[1].setComponents(c+r,u+l,m+f,b+p).normalize(),n[2].setComponents(c+o,u+h,m+_,b+E).normalize(),n[3].setComponents(c-o,u-h,m-_,b-E).normalize(),n[4].setComponents(c-a,u-d,m-g,b-S).normalize(),e===wn)n[5].setComponents(c+a,u+d,m+g,b+S).normalize();else if(e===gr)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class di extends en{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const E=p*u-o;for(let S=0;S<l;S++){const b=S*d-r;_.push(b,-E,0),g.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const S=E+l*p,b=E+l*(p+1),O=E+1+l*(p+1),C=E+1+l*p;f.push(S,b,C),f.push(b,O,C)}this.setIndex(f),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(g,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.widthSegments,t.heightSegments)}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
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
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
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
}`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,af=`uniform bool receiveShadow;
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
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
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
#endif`,pf=`struct PhysicalMaterial {
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
}`,mf=`
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bf=`#if defined( USE_POINTS_UV )
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
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
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
#endif`,kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tu=`float getShadowMask() {
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
}`,eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nu=`#ifdef USE_SKINNING
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
#endif`,iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,su=`#ifdef USE_SKINNING
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
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,au=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lu=`#ifdef USE_TRANSMISSION
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
#endif`,hu=`#ifdef USE_TRANSMISSION
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
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_u=`uniform sampler2D t2D;
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`#include <common>
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
}`,Mu=`#if DEPTH_PACKING == 3200
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
}`,Eu=`#define DISTANCE
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
}`,Tu=`#define DISTANCE
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
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`uniform float scale;
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Cu=`#include <common>
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
}`,Pu=`uniform vec3 diffuse;
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
}`,Lu=`#define LAMBERT
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
}`,Iu=`#define LAMBERT
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
}`,Nu=`#define MATCAP
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
}`,Uu=`#define MATCAP
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
}`,Du=`#define NORMAL
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
}`,Ou=`#define NORMAL
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
}`,Bu=`#define PHONG
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
}`,Fu=`#define PHONG
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
}`,ku=`#define STANDARD
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
}`,zu=`#define STANDARD
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
}`,Hu=`#define TOON
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
}`,Gu=`#define TOON
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
}`,Vu=`uniform float size;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Xu=`#include <common>
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
}`,Yu=`uniform vec3 color;
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
}`,qu=`uniform float rotation;
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:md,alphahash_pars_fragment:_d,alphamap_fragment:gd,alphamap_pars_fragment:vd,alphatest_fragment:yd,alphatest_pars_fragment:xd,aomap_fragment:Sd,aomap_pars_fragment:Md,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:bd,beginnormal_vertex:Ad,bsdfs:wd,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Nd,color_fragment:Ud,color_pars_fragment:Dd,color_pars_vertex:Od,color_vertex:Bd,common:Fd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:Yd,envmap_fragment:qd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:$d,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:cf,envmap_vertex:jd,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:tf,fog_pars_fragment:ef,gradientmap_pars_fragment:nf,lightmap_pars_fragment:sf,lights_lambert_fragment:rf,lights_lambert_pars_fragment:of,lights_pars_begin:af,lights_toon_fragment:lf,lights_toon_pars_fragment:hf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:uf,lights_physical_pars_fragment:pf,lights_fragment_begin:mf,lights_fragment_maps:_f,lights_fragment_end:gf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:Sf,map_fragment:Mf,map_pars_fragment:Ef,map_particle_fragment:Tf,map_particle_pars_fragment:bf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:wf,morphinstance_vertex:Rf,morphcolor_vertex:Cf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Lf,morphtarget_vertex:If,normal_fragment_begin:Nf,normal_fragment_maps:Uf,normal_pars_fragment:Df,normal_pars_vertex:Of,normal_vertex:Bf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:kf,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Gf,opaque_fragment:Vf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:Yf,dithering_fragment:qf,dithering_pars_fragment:Kf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Jf,shadowmap_vertex:Qf,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:nu,skinning_vertex:iu,skinnormal_vertex:su,specularmap_fragment:ru,specularmap_pars_fragment:ou,tonemapping_fragment:au,tonemapping_pars_fragment:cu,transmission_fragment:lu,transmission_pars_fragment:hu,uv_pars_fragment:du,uv_pars_vertex:fu,uv_vertex:uu,worldpos_vertex:pu,background_vert:mu,background_frag:_u,backgroundCube_vert:gu,backgroundCube_frag:vu,cube_vert:yu,cube_frag:xu,depth_vert:Su,depth_frag:Mu,distanceRGBA_vert:Eu,distanceRGBA_frag:Tu,equirect_vert:bu,equirect_frag:Au,linedashed_vert:wu,linedashed_frag:Ru,meshbasic_vert:Cu,meshbasic_frag:Pu,meshlambert_vert:Lu,meshlambert_frag:Iu,meshmatcap_vert:Nu,meshmatcap_frag:Uu,meshnormal_vert:Du,meshnormal_frag:Ou,meshphong_vert:Bu,meshphong_frag:Fu,meshphysical_vert:ku,meshphysical_frag:zu,meshtoon_vert:Hu,meshtoon_frag:Gu,points_vert:Vu,points_frag:Wu,shadow_vert:Xu,shadow_frag:Yu,sprite_vert:qu,sprite_frag:Ku},rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},pn={basic:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([rt.lights,rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};pn.physical={uniforms:De([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ws={r:0,b:0,g:0},ti=new dn,$u=new he;function Zu(i,t,e,n,s,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function g(E){let S=!1;const b=_(E);b===null?p(a,c):b&&b.isColor&&(p(b,1),S=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const b=_(S);b&&(b.isCubeTexture||b.mapping===Sr)?(h===void 0&&(h=new ye(new _n(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:$i(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(S.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($u.makeRotationFromEuler(ti)),h.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ce,(d!==b||u!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ye(new di(2,2),new Yn({name:"BackgroundMaterial",uniforms:$i(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(Ws,Pl(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:g,addToRenderList:m}}function ju(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(y,T,H,z,W){let J=!1;const G=d(z,H,T);r!==G&&(r=G,l(r.object)),J=f(y,z,H,W),J&&_(y,z,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,b(y,T,H,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,T,H){const z=H.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let J=W[T.id];J===void 0&&(J={},W[T.id]=J);let G=J[z];return G===void 0&&(G=u(c()),J[z]=G),G}function u(y){const T=[],H=[],z=[];for(let W=0;W<e;W++)T[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:H,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,T,H,z){const W=r.attributes,J=T.attributes;let G=0;const tt=H.getAttributes();for(const X in tt)if(tt[X].location>=0){const ft=W[X];let St=J[X];if(St===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),ft===void 0||ft.attribute!==St||St&&ft.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function _(y,T,H,z){const W={},J=T.attributes;let G=0;const tt=H.getAttributes();for(const X in tt)if(tt[X].location>=0){let ft=J[X];ft===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const St={};St.attribute=ft,ft&&ft.data&&(St.data=ft.data),W[X]=St,G++}r.attributes=W,r.attributesNum=G,r.index=z}function g(){const y=r.newAttributes;for(let T=0,H=y.length;T<H;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const H=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;H[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),W[y]!==T&&(i.vertexAttribDivisor(y,T),W[y]=T)}function E(){const y=r.newAttributes,T=r.enabledAttributes;for(let H=0,z=T.length;H<z;H++)T[H]!==y[H]&&(i.disableVertexAttribArray(H),T[H]=0)}function S(y,T,H,z,W,J,G){G===!0?i.vertexAttribIPointer(y,T,H,W,J):i.vertexAttribPointer(y,T,H,z,W,J)}function b(y,T,H,z){g();const W=z.attributes,J=H.getAttributes(),G=T.defaultAttributeValues;for(const tt in J){const X=J[tt];if(X.location>=0){let dt=W[tt];if(dt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),dt!==void 0){const ft=dt.normalized,St=dt.itemSize,Kt=t.get(dt);if(Kt===void 0)continue;const te=Kt.buffer,Y=Kt.type,nt=Kt.bytesPerElement,vt=Y===i.INT||Y===i.UNSIGNED_INT||dt.gpuType===_a;if(dt.isInterleavedBufferAttribute){const ut=dt.data,Ut=ut.stride,wt=dt.offset;if(ut.isInstancedInterleavedBuffer){for(let Vt=0;Vt<X.locationSize;Vt++)p(X.location+Vt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Vt=0;Vt<X.locationSize;Vt++)m(X.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Vt=0;Vt<X.locationSize;Vt++)S(X.location+Vt,St/X.locationSize,Y,ft,Ut*nt,(wt+St/X.locationSize*Vt)*nt,vt)}else{if(dt.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)p(X.location+ut,dt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ut=0;ut<X.locationSize;ut++)m(X.location+ut);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ut=0;ut<X.locationSize;ut++)S(X.location+ut,St/X.locationSize,Y,ft,St*nt,St/X.locationSize*ut*nt,vt)}}else if(G!==void 0){const ft=G[tt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(X.location,ft);break;case 3:i.vertexAttrib3fv(X.location,ft);break;case 4:i.vertexAttrib4fv(X.location,ft);break;default:i.vertexAttrib1fv(X.location,ft)}}}}E()}function O(){D();for(const y in n){const T=n[y];for(const H in T){const z=T[H];for(const W in z)h(z[W].object),delete z[W];delete T[H]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const T=n[y.id];for(const H in T){const z=T[H];for(const W in z)h(z[W].object),delete z[W];delete T[H]}delete n[y.id]}function w(y){for(const T in n){const H=n[T];if(H[y.id]===void 0)continue;const z=H[y.id];for(const W in z)h(z[W].object),delete z[W];delete H[y.id]}}function D(){j(),o=!0,r!==s&&(r=s,l(r.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:j,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function Ju(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];for(let g=0;g<u.length;g++)e.update(_,n,u[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const D=w===Ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!D)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:O,maxSamples:C}}function tp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ni,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,S=E*4;let b=p.clippingState||null;c.value=b,b=h(_,u,S,f);for(let O=0;O!==S;++O)b[O]=e[O];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=f;S!==g;++S,b+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function ep(i){let t=new WeakMap;function e(o,a){return a===No?o.mapping=Xi:a===Uo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===No||a===Uo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new dd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ul extends Ll{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,cc=[.125,.215,.35,.446,.526,.582],ri=20,Qr=new Ul,lc=new kt;let to=null,eo=0,no=0,io=!1;const ii=(1+Math.sqrt(5))/2,Pi=1/ii,hc=[new N(-ii,Pi,0),new N(ii,Pi,0),new N(-Pi,0,ii),new N(Pi,0,ii),new N(0,ii,-Pi),new N(0,ii,Pi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),this._renderer.xr.enabled=io,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ss,format:ln,colorSpace:Kn,depthBuffer:!1},s=fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(r)),this._blurMaterial=ip(r,t,e)}return s}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(lc),h.toneMapping=Vn,h.autoClear=!1;const f=new ci({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),_=new ye(new _n,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(lc),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Xs(s,E*S,p>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Xs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hc[(s-r-1)%hc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ye(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ri-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let E=0;for(let w=0;w<ri;++w){const D=w/g,j=Math.exp(-D*D/2);p.push(j),w===0?E+=j:w<m&&(E+=2*j)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;const b=this._sizeLods[s],O=3*b*(s>S-ki?s-S+ki:0),C=4*(this._cubeSize-b);Xs(e,O,C,3*b,2*b),c.setRenderTarget(e),c.render(d,Qr)}}function np(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+cc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ki?c=cc[o-i+ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,p=1,E=new Float32Array(g*_*f),S=new Float32Array(m*_*f),b=new Float32Array(p*_*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,D=C>2?0:-1,j=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];E.set(j,g*_*C),S.set(u,m*_*C);const y=[C,C,C,C,C,C];b.set(y,p*_*C)}const O=new en;O.setAttribute("position",new hn(E,g)),O.setAttribute("uv",new hn(S,m)),O.setAttribute("faceIndex",new hn(b,p)),t.push(O),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fc(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ip(i,t,e){const n=new Float32Array(ri),s=new N(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function uc(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function pc(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function sp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===No||c===Uo,h=c===Xi||c===Yi;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new dc(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new dc(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function op(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)t.update(u[_],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let S=0,b=E.length;S<b;S+=3){const O=E[S+0],C=E[S+1],w=E[S+2];u.push(O,C,C,w,w,O)}}else if(_!==void 0){const E=_.array;g=_.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const O=S+0,C=S+1,w=S+2;u.push(O,C,C,w,w,O)}}else return;const m=new(Tl(u)?Cl:Rl)(u,1);m.version=g;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function ap(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,u*o,_),e.update(f,n,_))}function h(u,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function d(u,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,_);let p=0;for(let E=0;E<_;E++)p+=f[E];for(let E=0;E<g.length;E++)e.update(p,n,g[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function cp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lp(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let O=a.attributes.position.count*b,C=1;O>t.maxTextureSize&&(C=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const w=new Float32Array(O*C*4*d),D=new Al(w,O,C,d);D.type=An,D.needsUpdate=!0;const j=b*4;for(let T=0;T<d;T++){const H=p[T],z=E[T],W=S[T],J=O*C*4*T;for(let G=0;G<H.count;G++){const tt=G*j;_===!0&&(s.fromBufferAttribute(H,G),w[J+tt+0]=s.x,w[J+tt+1]=s.y,w[J+tt+2]=s.z,w[J+tt+3]=0),g===!0&&(s.fromBufferAttribute(z,G),w[J+tt+4]=s.x,w[J+tt+5]=s.y,w[J+tt+6]=s.z,w[J+tt+7]=0),m===!0&&(s.fromBufferAttribute(W,G),w[J+tt+8]=s.x,w[J+tt+9]=s.y,w[J+tt+10]=s.z,w[J+tt+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new zt(O,C)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function hp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Dl extends Ie{constructor(t,e,n,s,r,o,a,c,l,h=Gi){if(h!==Gi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=li),n===void 0&&h===Ki&&(n=qi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=c!==void 0?c:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ol=new Ie,mc=new Dl(1,1),Bl=new Al,Fl=new $h,kl=new Il,_c=[],gc=[],vc=new Float32Array(16),yc=new Float32Array(9),xc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Me(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Me(e,n)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),Me(e,n)}}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=El,r=mc):r=Ol,e.setTexture2D(t||r,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fl,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kl,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bl,s)}function Pp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return up;case 35666:return pp;case 35674:return mp;case 35675:return _p;case 35676:return gp;case 5124:case 35670:return vp;case 35667:case 35671:return yp;case 35668:case 35672:return xp;case 35669:case 35673:return Sp;case 5125:return Mp;case 36294:return Ep;case 36295:return Tp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Lp(i,t){i.uniform1fv(this.addr,t)}function Ip(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Np(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Up(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Dp(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bp(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fp(i,t){i.uniform1iv(this.addr,t)}function kp(i,t){i.uniform2iv(this.addr,t)}function zp(i,t){i.uniform3iv(this.addr,t)}function Hp(i,t){i.uniform4iv(this.addr,t)}function Gp(i,t){i.uniform1uiv(this.addr,t)}function Vp(i,t){i.uniform2uiv(this.addr,t)}function Wp(i,t){i.uniform3uiv(this.addr,t)}function Xp(i,t){i.uniform4uiv(this.addr,t)}function Yp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ol,r[o])}function qp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fl,r[o])}function Kp(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kl,r[o])}function $p(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bl,r[o])}function Zp(i){switch(i){case 5126:return Lp;case 35664:return Ip;case 35665:return Np;case 35666:return Up;case 35674:return Dp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return Fp;case 35667:case 35671:return kp;case 35668:case 35672:return zp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return $p}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pp(e.type)}}class Jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zp(e.type)}}class Qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const so=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function tm(i,t,e){const n=i.name,s=n.length;for(so.lastIndex=0;;){const r=so.exec(n),o=so.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sc(e,l===void 0?new jp(a,i,t):new Jp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Qp(a),Sc(e,d)),e=d}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);tm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const em=37297;let nm=0;function im(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function sm(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===_r&&e===mr?n="LinearDisplayP3ToLinearSRGB":t===mr&&e===_r&&(n="LinearSRGBToLinearDisplayP3"),i){case Kn:case Mr:return[n,"LinearTransferOETF"];case un:case Ma:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ec(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+im(i.getShaderSource(t),o)}else return s}function rm(i,t){const e=sm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function om(i,t){let e;switch(t){case Sh:e="Linear";break;case Mh:e="Reinhard";break;case Eh:e="Cineon";break;case Th:e="ACESFilmic";break;case Ah:e="AgX";break;case wh:e="Neutral";break;case bh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new N;function am(){Qt.getLuminanceCoefficients(Ys);const i=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function lm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function hs(i){return i!==""}function Tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(i){return i.replace(dm,um)}const fm=new Map;function um(i,t){let e=Bt[t];if(e===void 0){const n=fm.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return da(e)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(pm,mm)}function mm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _m(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ll?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case yh:t="ENVMAP_BLENDING_MIX";break;case xh:t="ENVMAP_BLENDING_ADD";break}return t}function xm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=_m(e),l=gm(e),h=vm(e),d=ym(e),u=xm(e),f=cm(e),_=lm(r),g=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),am(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=da(o),o=Tc(o,e),o=bc(o,e),a=da(a),a=Tc(a,e),a=bc(a,e),o=Ac(o),a=Ac(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,b=E+p+a,O=Mc(s,s.VERTEX_SHADER,S),C=Mc(s,s.FRAGMENT_SHADER,b);s.attachShader(g,O),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(T){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(O).trim(),W=s.getShaderInfoLog(C).trim();let J=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,O,C);else{const tt=Ec(s,O,"vertex"),X=Ec(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+H+`
`+tt+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(G=!1);G&&(T.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(O),s.deleteShader(C),D=new ur(s,g),j=hm(s,g)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let j;this.getAttributes=function(){return j===void 0&&w(this),j};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,em)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=C,this}let Mm=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tm(t),e.set(t,n)),n}}class Tm{constructor(t){this.id=Mm++,this.code=t,this.usedTimes=0}}function bm(i,t,e,n,s,r,o){const a=new Ta,c=new Em,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,T,H,z,W){const J=z.fog,G=W.geometry,tt=y.isMeshStandardMaterial?z.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||tt),dt=X&&X.mapping===Sr?X.image.height:null,ft=g[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=St!==void 0?St.length:0;let te=0;G.morphAttributes.position!==void 0&&(te=1),G.morphAttributes.normal!==void 0&&(te=2),G.morphAttributes.color!==void 0&&(te=3);let Y,nt,vt,ut;if(ft){const Be=pn[ft];Y=Be.vertexShader,nt=Be.fragmentShader}else Y=y.vertexShader,nt=y.fragmentShader,c.update(y),vt=c.getVertexShaderID(y),ut=c.getFragmentShaderID(y);const Ut=i.getRenderTarget(),wt=W.isInstancedMesh===!0,Vt=W.isBatchedMesh===!0,ne=!!y.map,Wt=!!y.matcap,P=!!X,Ve=!!y.aoMap,Ht=!!y.lightMap,Yt=!!y.bumpMap,Ct=!!y.normalMap,oe=!!y.displacementMap,It=!!y.emissiveMap,A=!!y.metalnessMap,x=!!y.roughnessMap,B=y.anisotropy>0,K=y.clearcoat>0,et=y.dispersion>0,q=y.iridescence>0,Mt=y.sheen>0,ot=y.transmission>0,pt=B&&!!y.anisotropyMap,qt=K&&!!y.clearcoatMap,it=K&&!!y.clearcoatNormalMap,mt=K&&!!y.clearcoatRoughnessMap,Pt=q&&!!y.iridescenceMap,Lt=q&&!!y.iridescenceThicknessMap,_t=Mt&&!!y.sheenColorMap,Gt=Mt&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,re=!!y.specularColorMap,L=!!y.specularIntensityMap,lt=ot&&!!y.transmissionMap,V=ot&&!!y.thicknessMap,Q=!!y.gradientMap,at=!!y.alphaMap,ht=y.alphaTest>0,Xt=!!y.alphaHash,_e=!!y.extensions;let Oe=Vn;y.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const $t={shaderID:ft,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:nt,defines:y.defines,customVertexShaderID:vt,customFragmentShaderID:ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Vt,batchingColor:Vt&&W._colorsTexture!==null,instancing:wt,instancingColor:wt&&W.instanceColor!==null,instancingMorph:wt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Kn,alphaToCoverage:!!y.alphaToCoverage,map:ne,matcap:Wt,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:dt,aoMap:Ve,lightMap:Ht,bumpMap:Yt,normalMap:Ct,displacementMap:f&&oe,emissiveMap:It,normalMapObjectSpace:Ct&&y.normalMapType===Lh,normalMapTangentSpace:Ct&&y.normalMapType===Ml,metalnessMap:A,roughnessMap:x,anisotropy:B,anisotropyMap:pt,clearcoat:K,clearcoatMap:qt,clearcoatNormalMap:it,clearcoatRoughnessMap:mt,dispersion:et,iridescence:q,iridescenceMap:Pt,iridescenceThicknessMap:Lt,sheen:Mt,sheenColorMap:_t,sheenRoughnessMap:Gt,specularMap:Dt,specularColorMap:re,specularIntensityMap:L,transmission:ot,transmissionMap:lt,thicknessMap:V,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Hi&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:Xt,combine:y.combine,mapUv:ne&&m(y.map.channel),aoMapUv:Ve&&m(y.aoMap.channel),lightMapUv:Ht&&m(y.lightMap.channel),bumpMapUv:Yt&&m(y.bumpMap.channel),normalMapUv:Ct&&m(y.normalMap.channel),displacementMapUv:oe&&m(y.displacementMap.channel),emissiveMapUv:It&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:x&&m(y.roughnessMap.channel),anisotropyMapUv:pt&&m(y.anisotropyMap.channel),clearcoatMapUv:qt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&m(y.sheenRoughnessMap.channel),specularMapUv:Dt&&m(y.specularMap.channel),specularColorMapUv:re&&m(y.specularColorMap.channel),specularIntensityMapUv:L&&m(y.specularIntensityMap.channel),transmissionMapUv:lt&&m(y.transmissionMap.channel),thicknessMapUv:V&&m(y.thicknessMap.channel),alphaMapUv:at&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ct||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(ne||at),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ne&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===He,flipSided:y.side===Ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function E(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)T.push(H),T.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(S(T,y),b(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function O(y){const T=g[y.type];let H;if(T){const z=pn[T];H=ad.clone(z.uniforms)}else H=y.uniforms;return H}function C(y,T){let H;for(let z=0,W=h.length;z<W;z++){const J=h[z];if(J.cacheKey===T){H=J,++H.usedTimes;break}}return H===void 0&&(H=new Sm(i,T,y,r),h.push(H)),H}function w(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function D(y){c.remove(y)}function j(){c.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:O,acquireProgram:C,releaseProgram:w,releaseShaderCache:D,programs:h,dispose:j}}function Am(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,_,g,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,_,g,m){const p=o(d,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||wm),n.length>1&&n.sort(u||Rc),s.length>1&&s.sort(u||Rc)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Rm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Cc,i.set(n,[o])):s>=r.length?(o=new Cc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new kt};break;case"SpotLight":e={position:new N,direction:new N,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lm=0;function Im(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nm(i){const t=new Cm,e=Pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new he,o=new he;function a(l){let h=0,d=0,u=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,E=0,S=0,b=0,O=0,C=0,w=0;l.sort(Im);for(let j=0,y=l.length;j<y;j++){const T=l[j],H=T.color,z=T.intensity,W=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=H.r*z,d+=H.g*z,u+=H.b*z;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],z);w++}else if(T.isDirectionalLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const tt=T.shadow,X=e.get(T);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=T.shadow.matrix,E++}n.directional[f]=G,f++}else if(T.isSpotLight){const G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(H).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[g]=G;const tt=T.shadow;if(T.map&&(n.spotLightMap[O]=T.map,O++,tt.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[g]=tt.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=J,b++}g++}else if(T.isRectAreaLight){const G=t.get(T);G.color.copy(H).multiplyScalar(z),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=G,m++}else if(T.isPointLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const tt=T.shadow,X=e.get(T);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=T.shadow.matrix,S++}n.point[_]=G,_++}else if(T.isHemisphereLight){const G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(z),G.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==E||D.numPointShadows!==S||D.numSpotShadows!==b||D.numSpotMaps!==O||D.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,D.directionalLength=f,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=E,D.numPointShadows=S,D.numSpotShadows=b,D.numSpotMaps=O,D.numLightProbes=w,n.version=Lm++)}function c(l,h){let d=0,u=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const S=l[p];if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(S.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Pc(i){const t=new Nm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Um(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Pc(i),t.set(s,[a])):r>=o.length?(a=new Pc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Dm extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Om extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function km(i,t,e){let n=new ba;const s=new zt,r=new zt,o=new pe,a=new Dm({depthPacking:Ph}),c=new Om,l={},h=e.maxTextureSize,d={[Xn]:Ge,[Ge]:Xn,[He]:He},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Bm,fragmentShader:Fm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ye(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let p=this.type;this.render=function(C,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const j=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Gn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=p!==bn&&this.type===bn,W=p===bn&&this.type!==bn;for(let J=0,G=C.length;J<G;J++){const tt=C[J],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const dt=X.getFrameExtents();if(s.multiply(dt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,X.mapSize.y=r.y)),X.map===null||z===!0||W===!0){const St=this.type!==bn?{minFilter:Le,magFilter:Le}:{};X.map!==null&&X.map.dispose(),X.map=new hi(s.x,s.y,St),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ft=X.getViewportCount();for(let St=0;St<ft;St++){const Kt=X.getViewport(St);o.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),H.viewport(o),X.updateMatrices(tt,St),n=X.getFrustum(),b(w,D,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===bn&&E(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(j,y,T)};function E(C,w){const D=t.update(g);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new hi(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,D,u,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,D,f,g,null)}function S(C,w,D,j){let y=null;const T=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=D.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=y.uuid,z=w.uuid;let W=l[H];W===void 0&&(W={},l[H]=W);let J=W[z];J===void 0&&(J=y.clone(),W[z]=J,w.addEventListener("dispose",O)),y=J}if(y.visible=w.visible,y.wireframe=w.wireframe,j===bn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=D}return y}function b(C,w,D,j,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===bn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const z=t.update(C),W=C.material;if(Array.isArray(W)){const J=z.groups;for(let G=0,tt=J.length;G<tt;G++){const X=J[G],dt=W[X.materialIndex];if(dt&&dt.visible){const ft=S(C,dt,j,y);C.onBeforeShadow(i,C,w,D,z,ft,X),i.renderBufferDirect(D,null,z,ft,C,X),C.onAfterShadow(i,C,w,D,z,ft,X)}}}else if(W.visible){const J=S(C,W,j,y);C.onBeforeShadow(i,C,w,D,z,J,null),i.renderBufferDirect(D,null,z,J,C,null),C.onAfterShadow(i,C,w,D,z,J,null)}}const H=C.children;for(let z=0,W=H.length;z<W;z++)b(H[z],w,D,j,y)}function O(C){C.target.removeEventListener("dispose",O);for(const D in l){const j=l[D],y=C.target.uuid;y in j&&(j[y].dispose(),delete j[y])}}}const zm={[Ao]:wo,[Ro]:Lo,[Co]:Io,[Wi]:Po,[wo]:Ao,[Lo]:Ro,[Io]:Co,[Po]:Wi};function Hm(i){function t(){let L=!1;const lt=new pe;let V=null;const Q=new pe(0,0,0,0);return{setMask:function(at){V!==at&&!L&&(i.colorMask(at,at,at,at),V=at)},setLocked:function(at){L=at},setClear:function(at,ht,Xt,_e,Oe){Oe===!0&&(at*=_e,ht*=_e,Xt*=_e),lt.set(at,ht,Xt,_e),Q.equals(lt)===!1&&(i.clearColor(at,ht,Xt,_e),Q.copy(lt))},reset:function(){L=!1,V=null,Q.set(-1,0,0,0)}}}function e(){let L=!1,lt=!1,V=null,Q=null,at=null;return{setReversed:function(ht){lt=ht},setTest:function(ht){ht?vt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(ht){V!==ht&&!L&&(i.depthMask(ht),V=ht)},setFunc:function(ht){if(lt&&(ht=zm[ht]),Q!==ht){switch(ht){case Ao:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ht}},setLocked:function(ht){L=ht},setClear:function(ht){at!==ht&&(i.clearDepth(ht),at=ht)},reset:function(){L=!1,V=null,Q=null,at=null}}}function n(){let L=!1,lt=null,V=null,Q=null,at=null,ht=null,Xt=null,_e=null,Oe=null;return{setTest:function($t){L||($t?vt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function($t){lt!==$t&&!L&&(i.stencilMask($t),lt=$t)},setFunc:function($t,Be,gn){(V!==$t||Q!==Be||at!==gn)&&(i.stencilFunc($t,Be,gn),V=$t,Q=Be,at=gn)},setOp:function($t,Be,gn){(ht!==$t||Xt!==Be||_e!==gn)&&(i.stencilOp($t,Be,gn),ht=$t,Xt=Be,_e=gn)},setLocked:function($t){L=$t},setClear:function($t){Oe!==$t&&(i.clearStencil($t),Oe=$t)},reset:function(){L=!1,lt=null,V=null,Q=null,at=null,ht=null,Xt=null,_e=null,Oe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],f=null,_=!1,g=null,m=null,p=null,E=null,S=null,b=null,O=null,C=new kt(0,0,0),w=0,D=!1,j=null,y=null,T=null,H=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=G>=2);let X=null,dt={};const ft=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Kt=new pe().fromArray(ft),te=new pe().fromArray(St);function Y(L,lt,V,Q){const at=new Uint8Array(4),ht=i.createTexture();i.bindTexture(L,ht),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<V;Xt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(lt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ht}const nt={};nt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),r.setFunc(Wi),Ht(!1),Yt(ka),vt(i.CULL_FACE),P(Gn);function vt(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function ut(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Ut(L,lt){return h[L]!==lt?(i.bindFramebuffer(L,lt),h[L]=lt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function wt(L,lt){let V=u,Q=!1;if(L){V=d.get(lt),V===void 0&&(V=[],d.set(lt,V));const at=L.textures;if(V.length!==at.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Xt=at.length;ht<Xt;ht++)V[ht]=i.COLOR_ATTACHMENT0+ht;V.length=at.length,Q=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Q=!0);Q&&i.drawBuffers(V)}function Vt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const ne={[si]:i.FUNC_ADD,[nh]:i.FUNC_SUBTRACT,[ih]:i.FUNC_REVERSE_SUBTRACT};ne[sh]=i.MIN,ne[rh]=i.MAX;const Wt={[oh]:i.ZERO,[ah]:i.ONE,[ch]:i.SRC_COLOR,[To]:i.SRC_ALPHA,[ph]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[hh]:i.DST_ALPHA,[lh]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[uh]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[mh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[gh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,lt,V,Q,at,ht,Xt,_e,Oe,$t){if(L===Gn){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(vt(i.BLEND),_=!0),L!==eh){if(L!==g||$t!==D){if((m!==si||S!==si)&&(i.blendEquation(i.FUNC_ADD),m=si,S=si),$t)switch(L){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,E=null,b=null,O=null,C.set(0,0,0),w=0,g=L,D=$t}return}at=at||lt,ht=ht||V,Xt=Xt||Q,(lt!==m||at!==S)&&(i.blendEquationSeparate(ne[lt],ne[at]),m=lt,S=at),(V!==p||Q!==E||ht!==b||Xt!==O)&&(i.blendFuncSeparate(Wt[V],Wt[Q],Wt[ht],Wt[Xt]),p=V,E=Q,b=ht,O=Xt),(_e.equals(C)===!1||Oe!==w)&&(i.blendColor(_e.r,_e.g,_e.b,Oe),C.copy(_e),w=Oe),g=L,D=!1}function Ve(L,lt){L.side===He?ut(i.CULL_FACE):vt(i.CULL_FACE);let V=L.side===Ge;lt&&(V=!V),Ht(V),L.blending===Hi&&L.transparent===!1?P(Gn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){j!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),j=L)}function Yt(L){L!==Ql?(vt(i.CULL_FACE),L!==y&&(L===ka?i.cullFace(i.BACK):L===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),y=L}function Ct(L){L!==T&&(J&&i.lineWidth(L),T=L)}function oe(L,lt,V){L?(vt(i.POLYGON_OFFSET_FILL),(H!==lt||z!==V)&&(i.polygonOffset(lt,V),H=lt,z=V)):ut(i.POLYGON_OFFSET_FILL)}function It(L){L?vt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+W-1),X!==L&&(i.activeTexture(L),X=L)}function x(L,lt,V){V===void 0&&(X===null?V=i.TEXTURE0+W-1:V=X);let Q=dt[V];Q===void 0&&(Q={type:void 0,texture:void 0},dt[V]=Q),(Q.type!==L||Q.texture!==lt)&&(X!==V&&(i.activeTexture(V),X=V),i.bindTexture(L,lt||nt[L]),Q.type=L,Q.texture=lt)}function B(){const L=dt[X];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Kt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Kt.copy(L))}function _t(L){te.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),te.copy(L))}function Gt(L,lt){let V=c.get(lt);V===void 0&&(V=new WeakMap,c.set(lt,V));let Q=V.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(lt,L.name),V.set(L,Q))}function Dt(L,lt){const Q=c.get(lt).get(L);a.get(lt)!==Q&&(i.uniformBlockBinding(lt,Q,L.__bindingPointIndex),a.set(lt,Q))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},X=null,dt={},h={},d=new WeakMap,u=[],f=null,_=!1,g=null,m=null,p=null,E=null,S=null,b=null,O=null,C=new kt(0,0,0),w=0,D=!1,j=null,y=null,T=null,H=null,z=null,Kt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:ut,bindFramebuffer:Ut,drawBuffers:wt,useProgram:Vt,setBlending:P,setMaterial:Ve,setFlipSided:Ht,setCullFace:Yt,setLineWidth:Ct,setPolygonOffset:oe,setScissorTest:It,activeTexture:A,bindTexture:x,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:mt,texImage3D:Pt,updateUBOMapping:Gt,uniformBlockBinding:Dt,texStorage2D:qt,texStorage3D:it,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Lt,viewport:_t,reset:re}}function Lc(i,t,e,n){const s=Gm(n);switch(e){case ml:return i*t;case gl:return i*t;case vl:return i*t*2;case yl:return i*t/s.components*s.byteLength;case ya:return i*t/s.components*s.byteLength;case xl:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case _l:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case Sa:return i*t*4/s.components*s.byteLength;case or:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:case zo:return Math.max(i,16)*Math.max(t,8)/4;case Bo:case ko:return Math.max(i,8)*Math.max(t,8)/2;case Ho:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hr:case sa:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sl:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(i){switch(i){case Rn:case fl:return{byteLength:1,components:1};case ps:case ul:case Ss:return{byteLength:2,components:1};case ga:case va:return{byteLength:2,components:4};case li:case _a:case An:return{byteLength:4,components:1};case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return f?new OffscreenCanvas(A,x):ms("canvas")}function g(A,x,B){let K=1;const et=It(A);if((et.width>B||et.height>B)&&(K=B/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(K*et.width),Mt=Math.floor(K*et.height);d===void 0&&(d=_(q,Mt));const ot=x?_(q,Mt):d;return ot.width=q,ot.height=Mt,ot.getContext("2d").drawImage(A,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+Mt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Le&&A.minFilter!==cn}function p(A){i.generateMipmap(A)}function E(A,x,B,K,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const Mt=et?pr:Qt.getTransfer(K);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Mt===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(A,x){let B;return A?x===null||x===li||x===qi?B=i.DEPTH24_STENCIL8:x===An?B=i.DEPTH32F_STENCIL8:x===ps&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===li||x===qi?B=i.DEPTH_COMPONENT24:x===An?B=i.DEPTH_COMPONENT32F:x===ps&&(B=i.DEPTH_COMPONENT16),B}function b(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function O(A){const x=A.target;x.removeEventListener("dispose",O),w(x),x.isVideoTexture&&h.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),j(x)}function w(A){const x=n.get(A);if(x.__webglInit===void 0)return;const B=A.source,K=u.get(B);if(K){const et=K[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(A),Object.keys(K).length===0&&u.delete(B)}n.remove(A)}function D(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const B=A.source,K=u.get(B);delete K[x.__cacheKey],o.memory.textures--}function j(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let et=0;et<x.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[K][et]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,et=B.length;K<et;K++){const q=n.get(B[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(A)}let y=0;function T(){y=0}function H(){const A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function z(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function W(A,x){const B=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,A,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function J(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){te(B,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function G(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){te(B,A,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function tt(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const X={[Do]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Oo]:i.MIRRORED_REPEAT},dt={[Le]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ft={[Ih]:i.NEVER,[Fh]:i.ALWAYS,[Nh]:i.LESS,[El]:i.LEQUAL,[Uh]:i.EQUAL,[Bh]:i.GEQUAL,[Dh]:i.GREATER,[Oh]:i.NOTEQUAL};function St(A,x){if(x.type===An&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===cn||x.magFilter===Pr||x.magFilter===As||x.magFilter===ai||x.minFilter===cn||x.minFilter===Pr||x.minFilter===As||x.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,X[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,X[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,X[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==As&&x.minFilter!==ai||x.type===An&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",O));const K=x.source;let et=u.get(K);et===void 0&&(et={},u.set(K,et));const q=z(x);if(q!==A.__cacheKey){et[q]===void 0&&(et[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[q].usedTimes++;const Mt=et[A.__cacheKey];Mt!==void 0&&(et[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&D(x)),A.__cacheKey=q,A.__webglTexture=et[q].texture}return B}function te(A,x,B){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const et=Kt(A,x),q=x.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+B);const Mt=n.get(q);if(q.version!==Mt.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const ot=Qt.getPrimaries(Qt.workingColorSpace),pt=x.colorSpace===Fn?null:Qt.getPrimaries(x.colorSpace),qt=x.colorSpace===Fn||ot===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let it=g(x.image,!1,s.maxTextureSize);it=oe(x,it);const mt=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type);let Lt=E(x.internalFormat,mt,Pt,x.colorSpace,x.isVideoTexture);St(K,x);let _t;const Gt=x.mipmaps,Dt=x.isVideoTexture!==!0,re=Mt.__version===void 0||et===!0,L=q.dataReady,lt=b(x,it);if(x.isDepthTexture)Lt=S(x.format===Ki,x.type),re&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,mt,Pt,null));else if(x.isDataTexture)if(Gt.length>0){Dt&&re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Gt[0].width,Gt[0].height);for(let V=0,Q=Gt.length;V<Q;V++)_t=Gt[V],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,mt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Lt,_t.width,_t.height,0,mt,Pt,_t.data);x.generateMipmaps=!1}else Dt?(re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,it.width,it.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,mt,Pt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,mt,Pt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,Gt[0].width,Gt[0].height,it.depth);for(let V=0,Q=Gt.length;V<Q;V++)if(_t=Gt[V],x.format!==ln)if(mt!==null)if(Dt){if(L)if(x.layerUpdates.size>0){const at=Lc(_t.width,_t.height,x.format,x.type);for(const ht of x.layerUpdates){const Xt=_t.data.subarray(ht*at/_t.data.BYTES_PER_ELEMENT,(ht+1)*at/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ht,_t.width,_t.height,1,mt,Xt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,it.depth,mt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Lt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,it.depth,mt,Pt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Lt,_t.width,_t.height,it.depth,0,mt,Pt,_t.data)}else{Dt&&re&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Gt[0].width,Gt[0].height);for(let V=0,Q=Gt.length;V<Q;V++)_t=Gt[V],x.format!==ln?mt!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Lt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,mt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Lt,_t.width,_t.height,0,mt,Pt,_t.data)}else if(x.isDataArrayTexture)if(Dt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,it.width,it.height,it.depth),L)if(x.layerUpdates.size>0){const V=Lc(it.width,it.height,x.format,x.type);for(const Q of x.layerUpdates){const at=it.data.subarray(Q*V/it.data.BYTES_PER_ELEMENT,(Q+1)*V/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,mt,Pt,at)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Pt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,mt,Pt,it.data);else if(x.isData3DTexture)Dt?(re&&e.texStorage3D(i.TEXTURE_3D,lt,Lt,it.width,it.height,it.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Pt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,mt,Pt,it.data);else if(x.isFramebufferTexture){if(re)if(Dt)e.texStorage2D(i.TEXTURE_2D,lt,Lt,it.width,it.height);else{let V=it.width,Q=it.height;for(let at=0;at<lt;at++)e.texImage2D(i.TEXTURE_2D,at,Lt,V,Q,0,mt,Pt,null),V>>=1,Q>>=1}}else if(Gt.length>0){if(Dt&&re){const V=It(Gt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Lt,V.width,V.height)}for(let V=0,Q=Gt.length;V<Q;V++)_t=Gt[V],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt,Pt,_t):e.texImage2D(i.TEXTURE_2D,V,Lt,mt,Pt,_t);x.generateMipmaps=!1}else if(Dt){if(re){const V=It(it);e.texStorage2D(i.TEXTURE_2D,lt,Lt,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Pt,it)}else e.texImage2D(i.TEXTURE_2D,0,Lt,mt,Pt,it);m(x)&&p(K),Mt.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Y(A,x,B){if(x.image.length!==6)return;const K=Kt(A,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const q=n.get(et);if(et.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Mt=Qt.getPrimaries(Qt.workingColorSpace),ot=x.colorSpace===Fn?null:Qt.getPrimaries(x.colorSpace),pt=x.colorSpace===Fn||Mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,mt=[];for(let Q=0;Q<6;Q++)!qt&&!it?mt[Q]=g(x.image[Q],!0,s.maxCubemapSize):mt[Q]=it?x.image[Q].image:x.image[Q],mt[Q]=oe(x,mt[Q]);const Pt=mt[0],Lt=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),Gt=E(x.internalFormat,Lt,_t,x.colorSpace),Dt=x.isVideoTexture!==!0,re=q.__version===void 0||K===!0,L=et.dataReady;let lt=b(x,Pt);St(i.TEXTURE_CUBE_MAP,x);let V;if(qt){Dt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Gt,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){V=mt[Q].mipmaps;for(let at=0;at<V.length;at++){const ht=V[at];x.format!==ln?Lt!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at,Gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at,0,0,ht.width,ht.height,Lt,_t,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at,Gt,ht.width,ht.height,0,Lt,_t,ht.data)}}}else{if(V=x.mipmaps,Dt&&re){V.length>0&&lt++;const Q=It(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Gt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,mt[Q].width,mt[Q].height,Lt,_t,mt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,mt[Q].width,mt[Q].height,0,Lt,_t,mt[Q].data);for(let at=0;at<V.length;at++){const Xt=V[at].image[Q].image;Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at+1,0,0,Xt.width,Xt.height,Lt,_t,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at+1,Gt,Xt.width,Xt.height,0,Lt,_t,Xt.data)}}else{Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,_t,mt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,Lt,_t,mt[Q]);for(let at=0;at<V.length;at++){const ht=V[at];Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at+1,0,0,Lt,_t,ht.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at+1,Gt,Lt,_t,ht.image[Q])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),q.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function nt(A,x,B,K,et,q){const Mt=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),pt=E(B.internalFormat,Mt,ot,B.colorSpace);if(!n.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>q),mt=Math.max(1,x.height>>q);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,q,pt,it,mt,x.depth,0,Mt,ot,null):e.texImage2D(et,q,pt,it,mt,0,Mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,n.get(B).__webglTexture,0,Ht(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,n.get(B).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,et=K&&K.isDepthTexture?K.type:null,q=S(x.stencilBuffer,et),Mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ht(x);Yt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,q,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{const K=x.textures;for(let et=0;et<K.length;et++){const q=K[et],Mt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),pt=E(q.internalFormat,Mt,ot,q.colorSpace),qt=Ht(x);B&&Yt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,pt,x.width,x.height):Yt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,et=Ht(x);if(x.depthTexture.format===Gi)Yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Ki)Yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ut(A){const x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ut(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),vt(x.__webglDepthbuffer[K],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),vt(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,x,B){const K=n.get(A);x!==void 0&&nt(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ut(A)}function Vt(A){const x=A.texture,B=n.get(A),K=n.get(x);A.addEventListener("dispose",C);const et=A.textures,q=A.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let pt=0;pt<x.mipmaps.length;pt++)B.__webglFramebuffer[ot][pt]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ot=0,pt=et.length;ot<pt;ot++){const qt=n.get(et[ot]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Yt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<et.length;ot++){const pt=et[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const qt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),mt=E(pt.internalFormat,qt,it,pt.colorSpace,A.isXRRenderTarget===!0),Pt=Ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),St(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)nt(B.__webglFramebuffer[ot][pt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else nt(B.__webglFramebuffer[ot],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,pt=et.length;ot<pt;ot++){const qt=et[ot],it=n.get(qt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),St(i.TEXTURE_2D,qt),nt(B.__webglFramebuffer,A,qt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),St(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)nt(B.__webglFramebuffer[pt],A,x,i.COLOR_ATTACHMENT0,ot,pt);else nt(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&p(ot),e.unbindTexture()}A.depthBuffer&&Ut(A)}function ne(A){const x=A.textures;for(let B=0,K=x.length;B<K;B++){const et=x[B];if(m(et)){const q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(et).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}const Wt=[],P=[];function Ve(A){if(A.samples>0){if(Yt(A)===!1){const x=A.textures,B=A.width,K=A.height;let et=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),ot=x.length>1;if(ot)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const qt=n.get(x[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,et,i.NEAREST),c===!0&&(Wt.length=0,P.length=0,Wt.push(i.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Wt.push(q),P.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const qt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ht(A){return Math.min(s.maxSamples,A.samples)}function Yt(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ct(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function oe(A,x){const B=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Kn&&B!==Fn&&(Qt.getTransfer(B)===ce?(K!==ln||et!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=wt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Yt}function Wm(i,t){function e(n,s=Fn){let r;const o=Qt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.BYTE;if(n===ul)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Ss)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===_l)return i.RGB;if(n===ln)return i.RGBA;if(n===gl)return i.LUMINANCE;if(n===vl)return i.LUMINANCE_ALPHA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===xl)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===or||n===ar||n===cr||n===lr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===Fo||n===ko||n===zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Go||n===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ho||n===Go)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===Yo||n===qo||n===Ko||n===$o||n===Zo||n===jo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===sa||n===ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===oa||n===aa||n===ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Xm extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
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

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:qm,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends ui{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,_=null;const g=new $m,m=e.getContextAttributes();let p=null,E=null;const S=[],b=[],O=new zt;let C=null;const w=new Qe;w.layers.enable(1),w.viewport=new pe;const D=new Qe;D.layers.enable(2),D.viewport=new pe;const j=[w,D],y=new Xm;y.layers.enable(1),y.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=S[Y];return nt===void 0&&(nt=new ro,S[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=S[Y];return nt===void 0&&(nt=new ro,S[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=S[Y];return nt===void 0&&(nt=new ro,S[Y]=nt),nt.getHandSpace()};function z(Y){const nt=b.indexOf(Y.inputSource);if(nt===-1)return;const vt=S[nt];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,l||o),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<S.length;Y++){const nt=b[Y];nt!==null&&(b[Y]=null,S[Y].disconnect(nt))}T=null,H=null,g.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,E=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new hi(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,vt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Ki:Gi,vt=m.stencil?qi:li);const Ut={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new hi(u.textureWidth,u.textureHeight,{format:ln,type:Rn,depthTexture:new Dl(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Y){for(let nt=0;nt<Y.removed.length;nt++){const vt=Y.removed[nt],ut=b.indexOf(vt);ut>=0&&(b[ut]=null,S[ut].disconnect(vt))}for(let nt=0;nt<Y.added.length;nt++){const vt=Y.added[nt];let ut=b.indexOf(vt);if(ut===-1){for(let wt=0;wt<S.length;wt++)if(wt>=b.length){b.push(vt),ut=wt;break}else if(b[wt]===null){b[wt]=vt,ut=wt;break}if(ut===-1)break}const Ut=S[ut];Ut&&Ut.connect(vt)}}const G=new N,tt=new N;function X(Y,nt,vt){G.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);const ut=G.distanceTo(tt),Ut=nt.projectionMatrix.elements,wt=vt.projectionMatrix.elements,Vt=Ut[14]/(Ut[10]-1),ne=Ut[14]/(Ut[10]+1),Wt=(Ut[9]+1)/Ut[5],P=(Ut[9]-1)/Ut[5],Ve=(Ut[8]-1)/Ut[0],Ht=(wt[8]+1)/wt[0],Yt=Vt*Ve,Ct=Vt*Ht,oe=ut/(-Ve+Ht),It=oe*-Ve;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const A=Vt+oe,x=ne+oe,B=Yt-It,K=Ct+(ut-It),et=Wt*ne/x*A,q=P*ne/x*A;Y.projectionMatrix.makePerspective(B,K,et,q,A,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,vt=Y.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),y.near=D.near=w.near=nt,y.far=D.far=w.far=vt,(T!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,H=y.far);const ut=Y.parent,Ut=y.cameras;dt(y,ut);for(let wt=0;wt<Ut.length;wt++)dt(Ut[wt],ut);Ut.length===2?X(y,w,D):y.projectionMatrix.copy(w.projectionMatrix),ft(Y,y,ut)};function ft(Y,nt,vt){vt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ha*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let St=null;function Kt(Y,nt){if(h=nt.getViewerPose(l||o),_=nt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ut=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let wt=0;wt<vt.length;wt++){const Vt=vt[wt];let ne=null;if(f!==null)ne=f.getViewport(Vt);else{const P=d.getViewSubImage(u,Vt);ne=P.viewport,wt===0&&(t.setRenderTargetTextures(E,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(E))}let Wt=j[wt];Wt===void 0&&(Wt=new Qe,Wt.layers.enable(wt),Wt.viewport=new pe,j[wt]=Wt),Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ne.x,ne.y,ne.width,ne.height),wt===0&&(y.matrix.copy(Wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(Wt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const wt=d.getDepthInformation(vt[0]);wt&&wt.isValid&&wt.texture&&g.init(t,wt,s.renderState)}}for(let vt=0;vt<S.length;vt++){const ut=b[vt],Ut=S[vt];ut!==null&&Ut!==void 0&&Ut.update(ut,nt,l||o)}St&&St(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const te=new Nl;te.setAnimationLoop(Kt),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const ei=new dn,jm=new he;function Jm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),S=E.envMap,b=E.envMapRotation;S&&(m.envMap.value=S,ei.copy(b),ei.x*=-1,ei.y*=-1,ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(ei)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const b=S.program;n.uniformBlockBinding(E,b)}function l(E,S){let b=s[E.id];b===void 0&&(_(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",m));const O=S.program;n.updateUBOMapping(E,O);const C=t.render.frame;r[E.id]!==C&&(u(E),r[E.id]=C)}function h(E){const S=d();E.__bindingPointIndex=S;const b=i.createBuffer(),O=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const S=s[E.id],b=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,w=b.length;C<w;C++){const D=Array.isArray(b[C])?b[C]:[b[C]];for(let j=0,y=D.length;j<y;j++){const T=D[j];if(f(T,C,j,O)===!0){const H=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let J=0;J<z.length;J++){const G=z[J],tt=g(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+W,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,b,O){const C=E.value,w=S+"_"+b;if(O[w]===void 0)return typeof C=="number"||typeof C=="boolean"?O[w]=C:O[w]=C.clone(),!0;{const D=O[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return O[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(E){const S=E.uniforms;let b=0;const O=16;for(let w=0,D=S.length;w<D;w++){const j=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,T=j.length;y<T;y++){const H=j[y],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,J=z.length;W<J;W++){const G=z[W],tt=g(G),X=b%O,dt=X%tt.boundary,ft=X+dt;b+=dt,ft!==0&&O-ft<tt.storage&&(b+=O-ft),H.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=tt.storage}}}const C=b%O;return C>0&&(b+=O-C),E.__size=b,E.__cache={},this}function g(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class t0{constructor(t={}){const{canvas:e=zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Vn,this.toneMappingExposure=1;const S=this;let b=!1,O=0,C=0,w=null,D=-1,j=null;const y=new pe,T=new pe;let H=null;const z=new kt(0);let W=0,J=e.width,G=e.height,tt=1,X=null,dt=null;const ft=new pe(0,0,J,G),St=new pe(0,0,J,G);let Kt=!1;const te=new ba;let Y=!1,nt=!1;const vt=new he,ut=new he,Ut=new N,wt=new pe,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Wt(){return w===null?tt:1}let P=n;function Ve(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ht,!1),P===null){const I="webgl2";if(P=Ve(I,M),P===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ht,Yt,Ct,oe,It,A,x,B,K,et,q,Mt,ot,pt,qt,it,mt,Pt,Lt,_t,Gt,Dt,re,L;function lt(){Ht=new rp(P),Ht.init(),Dt=new Wm(P,Ht),Yt=new Qu(P,Ht,t,Dt),Ct=new Hm(P),Yt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),oe=new cp(P),It=new Am,A=new Vm(P,Ht,Ct,It,Yt,Dt,oe),x=new ep(S),B=new sp(S),K=new pd(P),re=new ju(P,K),et=new op(P,K,oe,re),q=new hp(P,et,K,oe),Lt=new lp(P,Yt,A),it=new tp(It),Mt=new bm(S,x,B,Ht,Yt,re,it),ot=new Jm(S,It),pt=new Rm,qt=new Um(Ht),Pt=new Zu(S,x,B,Ct,q,u,c),mt=new km(S,q,Yt),L=new Qm(P,oe,Yt,Ct),_t=new Ju(P,Ht,oe),Gt=new ap(P,Ht,oe),oe.programs=Mt.programs,S.capabilities=Yt,S.extensions=Ht,S.properties=It,S.renderLists=pt,S.shadowMap=mt,S.state=Ct,S.info=oe}lt();const V=new Zm(S,P);this.xr=V,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(J,G,!1))},this.getSize=function(M){return M.set(J,G)},this.setSize=function(M,I,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,G=I,e.width=Math.floor(M*tt),e.height=Math.floor(I*tt),F===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(J*tt,G*tt).floor()},this.setDrawingBufferSize=function(M,I,F){J=M,G=I,tt=F,e.width=Math.floor(M*F),e.height=Math.floor(I*F),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(ft)},this.setViewport=function(M,I,F,k){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,I,F,k),Ct.viewport(y.copy(ft).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(St)},this.setScissor=function(M,I,F,k){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,I,F,k),Ct.scissor(T.copy(St).multiplyScalar(tt).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(M){Ct.setScissorTest(Kt=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){dt=M},this.getClearColor=function(M){return M.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(M=!0,I=!0,F=!0){let k=0;if(M){let U=!1;if(w!==null){const st=w.texture.format;U=st===Sa||st===xa||st===ya}if(U){const st=w.texture.type,ct=st===Rn||st===li||st===ps||st===qi||st===ga||st===va,gt=Pt.getClearColor(),yt=Pt.getClearAlpha(),At=gt.r,Rt=gt.g,Et=gt.b;ct?(f[0]=At,f[1]=Rt,f[2]=Et,f[3]=yt,P.clearBufferuiv(P.COLOR,0,f)):(_[0]=At,_[1]=Rt,_[2]=Et,_[3]=yt,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}I&&(k|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),qt.dispose(),It.dispose(),x.dispose(),B.dispose(),q.dispose(),re.dispose(),L.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",La),V.removeEventListener("sessionend",Ia),$n.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=oe.autoReset,I=mt.enabled,F=mt.autoUpdate,k=mt.needsUpdate,U=mt.type;lt(),oe.autoReset=M,mt.enabled=I,mt.autoUpdate=F,mt.needsUpdate=k,mt.type=U}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xt(M){const I=M.target;I.removeEventListener("dispose",Xt),_e(I)}function _e(M){Oe(M),It.remove(M)}function Oe(M){const I=It.get(M).programs;I!==void 0&&(I.forEach(function(F){Mt.releaseProgram(F)}),M.isShaderMaterial&&Mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,F,k,U,st){I===null&&(I=Vt);const ct=U.isMesh&&U.matrixWorld.determinant()<0,gt=$l(M,I,F,k,U);Ct.setMaterial(k,ct);let yt=F.index,At=1;if(k.wireframe===!0){if(yt=et.getWireframeAttribute(F),yt===void 0)return;At=2}const Rt=F.drawRange,Et=F.attributes.position;let ee=Rt.start*At,ae=(Rt.start+Rt.count)*At;st!==null&&(ee=Math.max(ee,st.start*At),ae=Math.min(ae,(st.start+st.count)*At)),yt!==null?(ee=Math.max(ee,0),ae=Math.min(ae,yt.count)):Et!=null&&(ee=Math.max(ee,0),ae=Math.min(ae,Et.count));const fe=ae-ee;if(fe<0||fe===1/0)return;re.setup(U,k,gt,F,yt);let We,jt=_t;if(yt!==null&&(We=K.get(yt),jt=Gt,jt.setIndex(We)),U.isMesh)k.wireframe===!0?(Ct.setLineWidth(k.wireframeLinewidth*Wt()),jt.setMode(P.LINES)):jt.setMode(P.TRIANGLES);else if(U.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*Wt()),U.isLineSegments?jt.setMode(P.LINES):U.isLineLoop?jt.setMode(P.LINE_LOOP):jt.setMode(P.LINE_STRIP)}else U.isPoints?jt.setMode(P.POINTS):U.isSprite&&jt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Tt=U._multiDrawStarts,be=U._multiDrawCounts,Jt=U._multiDrawCount,nn=yt?K.get(yt).bytesPerElement:1,_i=It.get(k).currentProgram.getUniforms();for(let Xe=0;Xe<Jt;Xe++)_i.setValue(P,"_gl_DrawID",Xe),jt.render(Tt[Xe]/nn,be[Xe])}else if(U.isInstancedMesh)jt.renderInstances(ee,fe,U.count);else if(F.isInstancedBufferGeometry){const Tt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,be=Math.min(F.instanceCount,Tt);jt.renderInstances(ee,fe,be)}else jt.render(ee,fe)};function $t(M,I,F){M.transparent===!0&&M.side===He&&M.forceSinglePass===!1?(M.side=Ge,M.needsUpdate=!0,bs(M,I,F),M.side=Xn,M.needsUpdate=!0,bs(M,I,F),M.side=He):bs(M,I,F)}this.compile=function(M,I,F=null){F===null&&(F=M),m=qt.get(F),m.init(I),E.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),M!==F&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const k=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let ct=0;ct<st.length;ct++){const gt=st[ct];$t(gt,F,U),k.add(gt)}else $t(st,F,U),k.add(st)}),E.pop(),m=null,k},this.compileAsync=function(M,I,F=null){const k=this.compile(M,I,F);return new Promise(U=>{function st(){if(k.forEach(function(ct){It.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){U(M);return}setTimeout(st,10)}Ht.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Be=null;function gn(M){Be&&Be(M)}function La(){$n.stop()}function Ia(){$n.start()}const $n=new Nl;$n.setAnimationLoop(gn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(M){Be=M,V.setAnimationLoop(M),M===null?$n.stop():$n.start()},V.addEventListener("sessionstart",La),V.addEventListener("sessionend",Ia),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,w),m=qt.get(M,E.length),m.init(I),E.push(m),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),te.setFromProjectionMatrix(ut),nt=this.localClippingEnabled,Y=it.init(this.clippingPlanes,nt),g=pt.get(M,p.length),g.init(),p.push(g),V.enabled===!0&&V.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Ar(st,I,-1/0,S.sortObjects)}Ar(M,I,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(X,dt),ne=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ne&&Pt.addToRenderList(g,M),this.info.render.frame++,Y===!0&&it.beginShadows();const F=m.state.shadowsArray;mt.render(F,M,I),Y===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,U=g.transmissive;if(m.setupLights(),I.isArrayCamera){const st=I.cameras;if(U.length>0)for(let ct=0,gt=st.length;ct<gt;ct++){const yt=st[ct];Ua(k,U,M,yt)}ne&&Pt.render(M);for(let ct=0,gt=st.length;ct<gt;ct++){const yt=st[ct];Na(g,M,yt,yt.viewport)}}else U.length>0&&Ua(k,U,M,I),ne&&Pt.render(M),Na(g,M,I);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(S,M,I),re.resetDefaultState(),D=-1,j=null,E.pop(),E.length>0?(m=E[E.length-1],Y===!0&&it.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ar(M,I,F,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||te.intersectsSprite(M)){k&&wt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);const ct=q.update(M),gt=M.material;gt.visible&&g.push(M,ct,gt,F,wt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||te.intersectsObject(M))){const ct=q.update(M),gt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),wt.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),wt.copy(ct.boundingSphere.center)),wt.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(gt)){const yt=ct.groups;for(let At=0,Rt=yt.length;At<Rt;At++){const Et=yt[At],ee=gt[Et.materialIndex];ee&&ee.visible&&g.push(M,ct,ee,F,wt.z,Et)}}else gt.visible&&g.push(M,ct,gt,F,wt.z,null)}}const st=M.children;for(let ct=0,gt=st.length;ct<gt;ct++)Ar(st[ct],I,F,k)}function Na(M,I,F,k){const U=M.opaque,st=M.transmissive,ct=M.transparent;m.setupLightsView(F),Y===!0&&it.setGlobalState(S.clippingPlanes,F),k&&Ct.viewport(y.copy(k)),U.length>0&&Ts(U,I,F),st.length>0&&Ts(st,I,F),ct.length>0&&Ts(ct,I,F),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Ua(M,I,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new hi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Ss:Rn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const st=m.state.transmissionRenderTarget[k.id],ct=k.viewport||y;st.setSize(ct.z,ct.w);const gt=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(z),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),ne&&Pt.render(F);const yt=S.toneMapping;S.toneMapping=Vn;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),Y===!0&&it.setGlobalState(S.clippingPlanes,k),Ts(M,F,k),A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Et=0,ee=I.length;Et<ee;Et++){const ae=I[Et],fe=ae.object,We=ae.geometry,jt=ae.material,Tt=ae.group;if(jt.side===He&&fe.layers.test(k.layers)){const be=jt.side;jt.side=Ge,jt.needsUpdate=!0,Da(fe,F,k,We,jt,Tt),jt.side=be,jt.needsUpdate=!0,Rt=!0}}Rt===!0&&(A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st))}S.setRenderTarget(gt),S.setClearColor(z,W),At!==void 0&&(k.viewport=At),S.toneMapping=yt}function Ts(M,I,F){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,st=M.length;U<st;U++){const ct=M[U],gt=ct.object,yt=ct.geometry,At=k===null?ct.material:k,Rt=ct.group;gt.layers.test(F.layers)&&Da(gt,I,F,yt,At,Rt)}}function Da(M,I,F,k,U,st){M.onBeforeRender(S,I,F,k,U,st),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(S,I,F,k,M,st),U.transparent===!0&&U.side===He&&U.forceSinglePass===!1?(U.side=Ge,U.needsUpdate=!0,S.renderBufferDirect(F,I,k,U,M,st),U.side=Xn,U.needsUpdate=!0,S.renderBufferDirect(F,I,k,U,M,st),U.side=He):S.renderBufferDirect(F,I,k,U,M,st),M.onAfterRender(S,I,F,k,U,st)}function bs(M,I,F){I.isScene!==!0&&(I=Vt);const k=It.get(M),U=m.state.lights,st=m.state.shadowsArray,ct=U.state.version,gt=Mt.getParameters(M,U.state,st,I,F),yt=Mt.getProgramCacheKey(gt);let At=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?B:x).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,At===void 0&&(M.addEventListener("dispose",Xt),At=new Map,k.programs=At);let Rt=At.get(yt);if(Rt!==void 0){if(k.currentProgram===Rt&&k.lightsStateVersion===ct)return Ba(M,gt),Rt}else gt.uniforms=Mt.getUniforms(M),M.onBeforeCompile(gt,S),Rt=Mt.acquireProgram(gt,yt),At.set(yt,Rt),k.uniforms=gt.uniforms;const Et=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=it.uniform),Ba(M,gt),k.needsLights=jl(M),k.lightsStateVersion=ct,k.needsLights&&(Et.ambientLightColor.value=U.state.ambient,Et.lightProbe.value=U.state.probe,Et.directionalLights.value=U.state.directional,Et.directionalLightShadows.value=U.state.directionalShadow,Et.spotLights.value=U.state.spot,Et.spotLightShadows.value=U.state.spotShadow,Et.rectAreaLights.value=U.state.rectArea,Et.ltc_1.value=U.state.rectAreaLTC1,Et.ltc_2.value=U.state.rectAreaLTC2,Et.pointLights.value=U.state.point,Et.pointLightShadows.value=U.state.pointShadow,Et.hemisphereLights.value=U.state.hemi,Et.directionalShadowMap.value=U.state.directionalShadowMap,Et.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Et.spotShadowMap.value=U.state.spotShadowMap,Et.spotLightMatrix.value=U.state.spotLightMatrix,Et.spotLightMap.value=U.state.spotLightMap,Et.pointShadowMap.value=U.state.pointShadowMap,Et.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Rt,k.uniformsList=null,Rt}function Oa(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=ur.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ba(M,I){const F=It.get(M);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function $l(M,I,F,k,U){I.isScene!==!0&&(I=Vt),A.resetTextureUnits();const st=I.fog,ct=k.isMeshStandardMaterial?I.environment:null,gt=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Kn,yt=(k.isMeshStandardMaterial?B:x).get(k.envMap||ct),At=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!F.morphAttributes.position,ee=!!F.morphAttributes.normal,ae=!!F.morphAttributes.color;let fe=Vn;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(fe=S.toneMapping);const We=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,jt=We!==void 0?We.length:0,Tt=It.get(k),be=m.state.lights;if(Y===!0&&(nt===!0||M!==j)){const je=M===j&&k.id===D;it.setState(k,M,je)}let Jt=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==be.state.version||Tt.outputColorSpace!==gt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==yt||k.fog===!0&&Tt.fog!==st||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==it.numPlanes||Tt.numIntersection!==it.numIntersection)||Tt.vertexAlphas!==At||Tt.vertexTangents!==Rt||Tt.morphTargets!==Et||Tt.morphNormals!==ee||Tt.morphColors!==ae||Tt.toneMapping!==fe||Tt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Tt.__version=k.version);let nn=Tt.currentProgram;Jt===!0&&(nn=bs(k,I,U));let _i=!1,Xe=!1,wr=!1;const me=nn.getUniforms(),Cn=Tt.uniforms;if(Ct.useProgram(nn.program)&&(_i=!0,Xe=!0,wr=!0),k.id!==D&&(D=k.id,Xe=!0),_i||j!==M){Yt.reverseDepthBuffer?(vt.copy(M.projectionMatrix),Gh(vt),Vh(vt),me.setValue(P,"projectionMatrix",vt)):me.setValue(P,"projectionMatrix",M.projectionMatrix),me.setValue(P,"viewMatrix",M.matrixWorldInverse);const je=me.map.cameraPosition;je!==void 0&&je.setValue(P,Ut.setFromMatrixPosition(M.matrixWorld)),Yt.logarithmicDepthBuffer&&me.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&me.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Xe=!0,wr=!0)}if(U.isSkinnedMesh){me.setOptional(P,U,"bindMatrix"),me.setOptional(P,U,"bindMatrixInverse");const je=U.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),me.setValue(P,"boneTexture",je.boneTexture,A))}U.isBatchedMesh&&(me.setOptional(P,U,"batchingTexture"),me.setValue(P,"batchingTexture",U._matricesTexture,A),me.setOptional(P,U,"batchingIdTexture"),me.setValue(P,"batchingIdTexture",U._indirectTexture,A),me.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&me.setValue(P,"batchingColorTexture",U._colorsTexture,A));const Rr=F.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Lt.update(U,F,nn),(Xe||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,me.setValue(P,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Cn.envMap.value=yt,Cn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Cn.envMapIntensity.value=I.environmentIntensity),Xe&&(me.setValue(P,"toneMappingExposure",S.toneMappingExposure),Tt.needsLights&&Zl(Cn,wr),st&&k.fog===!0&&ot.refreshFogUniforms(Cn,st),ot.refreshMaterialUniforms(Cn,k,tt,G,m.state.transmissionRenderTarget[M.id]),ur.upload(P,Oa(Tt),Cn,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ur.upload(P,Oa(Tt),Cn,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&me.setValue(P,"center",U.center),me.setValue(P,"modelViewMatrix",U.modelViewMatrix),me.setValue(P,"normalMatrix",U.normalMatrix),me.setValue(P,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const je=k.uniformsGroups;for(let Cr=0,Jl=je.length;Cr<Jl;Cr++){const Fa=je[Cr];L.update(Fa,nn),L.bind(Fa,nn)}}return nn}function Zl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function jl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,I,F){It.get(M.texture).__webglTexture=I,It.get(M.depthTexture).__webglTexture=F;const k=It.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const F=It.get(M);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,F=0){w=M,O=I,C=F;let k=!0,U=null,st=!1,ct=!1;if(M){const yt=It.get(M);if(yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(yt.__hasExternalTextures)A.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Et=M.depthTexture;if(yt.__boundDepthTexture!==Et){if(Et!==null&&It.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);const Rt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?U=Rt[I][F]:U=Rt[I],st=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?U=It.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?U=Rt[F]:U=Rt,y.copy(M.viewport),T.copy(M.scissor),H=M.scissorTest}else y.copy(ft).multiplyScalar(tt).floor(),T.copy(St).multiplyScalar(tt).floor(),H=Kt;if(Ct.bindFramebuffer(P.FRAMEBUFFER,U)&&k&&Ct.drawBuffers(M,U),Ct.viewport(y),Ct.scissor(T),Ct.setScissorTest(H),st){const yt=It.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,F)}else if(ct){const yt=It.get(M.texture),At=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,F||0,At)}D=-1},this.readRenderTargetPixels=function(M,I,F,k,U,st,ct){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){Ct.bindFramebuffer(P.FRAMEBUFFER,gt);try{const yt=M.texture,At=yt.format,Rt=yt.type;if(!Yt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&F>=0&&F<=M.height-U&&P.readPixels(I,F,k,U,Dt.convert(At),Dt.convert(Rt),st)}finally{const yt=w!==null?It.get(w).__webglFramebuffer:null;Ct.bindFramebuffer(P.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(M,I,F,k,U,st,ct){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const yt=M.texture,At=yt.format,Rt=yt.type;if(!Yt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-k&&F>=0&&F<=M.height-U){Ct.bindFramebuffer(P.FRAMEBUFFER,gt);const Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,st.byteLength,P.STREAM_READ),P.readPixels(I,F,k,U,Dt.convert(At),Dt.convert(Rt),0);const ee=w!==null?It.get(w).__webglFramebuffer:null;Ct.bindFramebuffer(P.FRAMEBUFFER,ee);const ae=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hh(P,ae,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,st),P.deleteBuffer(Et),P.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,F=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-F),U=Math.floor(M.image.width*k),st=Math.floor(M.image.height*k),ct=I!==null?I.x:0,gt=I!==null?I.y:0;A.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,ct,gt,U,st),Ct.unbindTexture()},this.copyTextureToTexture=function(M,I,F=null,k=null,U=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,F=null);let st,ct,gt,yt,At,Rt;F!==null?(st=F.max.x-F.min.x,ct=F.max.y-F.min.y,gt=F.min.x,yt=F.min.y):(st=M.image.width,ct=M.image.height,gt=0,yt=0),k!==null?(At=k.x,Rt=k.y):(At=0,Rt=0);const Et=Dt.convert(I.format),ee=Dt.convert(I.type);A.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ae=P.getParameter(P.UNPACK_ROW_LENGTH),fe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),We=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),Tt=P.getParameter(P.UNPACK_SKIP_IMAGES),be=M.isCompressedTexture?M.mipmaps[U]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,be.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,yt),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,At,Rt,st,ct,Et,ee,be.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,At,Rt,be.width,be.height,Et,be.data):P.texSubImage2D(P.TEXTURE_2D,U,At,Rt,st,ct,Et,ee,be),P.pixelStorei(P.UNPACK_ROW_LENGTH,ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(M,I,F=null,k=null,U=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0);let st,ct,gt,yt,At,Rt,Et,ee,ae;const fe=M.isCompressedTexture?M.mipmaps[U]:M.image;F!==null?(st=F.max.x-F.min.x,ct=F.max.y-F.min.y,gt=F.max.z-F.min.z,yt=F.min.x,At=F.min.y,Rt=F.min.z):(st=fe.width,ct=fe.height,gt=fe.depth,yt=0,At=0,Rt=0),k!==null?(Et=k.x,ee=k.y,ae=k.z):(Et=0,ee=0,ae=0);const We=Dt.convert(I.format),jt=Dt.convert(I.type);let Tt;if(I.isData3DTexture)A.setTexture3D(I,0),Tt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Tt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const be=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),nn=P.getParameter(P.UNPACK_SKIP_PIXELS),_i=P.getParameter(P.UNPACK_SKIP_ROWS),Xe=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yt),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Rt),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Tt,U,Et,ee,ae,st,ct,gt,We,jt,fe.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,U,Et,ee,ae,st,ct,gt,We,fe.data):P.texSubImage3D(Tt,U,Et,ee,ae,st,ct,gt,We,jt,fe),P.pixelStorei(P.UNPACK_ROW_LENGTH,be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,nn),P.pixelStorei(P.UNPACK_SKIP_ROWS,_i),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe),U===0&&I.generateMipmaps&&P.generateMipmap(Tt),Ct.unbindTexture()},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ct.unbindTexture()},this.resetState=function(){O=0,C=0,w=null,Ct.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ma?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Mr?"display-p3":"srgb"}}class _s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new _s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class e0 extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class n0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=la,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new N;class vr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wa extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const is=new N,Ii=new N,Ni=new N,Ui=new zt,ss=new zt,zl=new he,qs=new N,rs=new N,Ks=new N,Ic=new zt,oo=new zt,Nc=new zt;class Hl extends xe{constructor(t=new wa){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new en;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new n0(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new vr(n,3,0,!1)),Li.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),zl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ni.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;$s(qs.set(-.5,-.5,0),Ni,o,Ii,s,r),$s(rs.set(.5,-.5,0),Ni,o,Ii,s,r),$s(Ks.set(.5,.5,0),Ni,o,Ii,s,r),Ic.set(0,0),oo.set(1,0),Nc.set(1,1);let a=t.ray.intersectTriangle(qs,rs,Ks,!1,is);if(a===null&&($s(rs.set(-.5,.5,0),Ni,o,Ii,s,r),oo.set(0,1),a=t.ray.intersectTriangle(qs,Ks,rs,!1,is),a===null))return;const c=t.ray.origin.distanceTo(is);c<t.near||c>t.far||e.push({distance:c,point:is.clone(),uv:Ze.getInterpolation(is,qs,rs,Ks,Ic,oo,Nc,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $s(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ss.x=r*Ui.x-s*Ui.y,ss.y=s*Ui.x+r*Ui.y):ss.copy(Ui),i.copy(t),i.x+=ss.x,i.y+=ss.y,i.applyMatrix4(zl)}class Gl extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yr=new N,xr=new N,Uc=new he,os=new Ea,Zs=new Er,ao=new N,Dc=new N;class i0 extends xe{constructor(t=new en,e=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)yr.fromBufferAttribute(e,s-1),xr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=yr.distanceTo(xr);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;Uc.copy(s).invert(),os.copy(t.ray).applyMatrix4(Uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=h.getX(g),E=h.getX(g+1),S=js(this,t,os,c,p,E);S&&e.push(S)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=js(this,t,os,c,g,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=js(this,t,os,c,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=js(this,t,os,c,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function js(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(yr.fromBufferAttribute(o,s),xr.fromBufferAttribute(o,r),e.distanceSqToSegment(yr,xr,ao,Dc)>n)return;ao.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ao);if(!(c<t.near||c>t.far))return{distance:c,point:Dc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Oc=new N,Bc=new N;class s0 extends i0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Oc.fromBufferAttribute(e,s),Bc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oc.distanceTo(Bc);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vl extends Ie{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Js=new N,Qs=new N,co=new N,tr=new Ze;class r0 extends en{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(dr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=tr;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),tr.getNormal(co),d[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const S=(E+1)%3,b=d[E],O=d[S],C=tr[h[E]],w=tr[h[S]],D=`${b}_${O}`,j=`${O}_${b}`;j in u&&u[j]?(co.dot(u[j].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(w.x,w.y,w.z)),u[j]=null):D in u||(u[D]={index0:l[E],index1:l[S],normal:co.clone()})}}for(const _ in u)if(u[_]){const{index0:g,index1:m}=u[_];Js.fromBufferAttribute(a,g),Qs.fromBufferAttribute(a,m),f.push(Js.x,Js.y,Js.z),f.push(Qs.x,Qs.y,Qs.z)}this.setAttribute("position",new Ne(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ra extends en{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new N,u=new N,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const E=[],S=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let O=0;O<=e;O++){const C=O/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+S*a),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(C+b,1-S),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const S=h[p][E+1],b=h[p][E],O=h[p+1][E],C=h[p+1][E+1];(p!==0||o>0)&&f.push(S,b,C),(p!==n-1||c<Math.PI)&&f.push(b,O,C)}this.setIndex(f),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(g,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gs extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Fc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class o0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const a0=new o0;class Ca{constructor(t){this.manager=t!==void 0?t:a0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";class c0 extends Ca{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Fc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ms("img");function c(){h(),Fc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class l0 extends Ca{constructor(t){super(t)}load(t,e,n,s){const r=new Ie,o=new c0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Wl extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const lo=new he,kc=new N,zc=new N;class h0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d0 extends h0{constructor(){super(new Ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f0 extends Wl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u0 extends Wl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class p0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hc(){return performance.now()}const Gc=new he;class m0{constructor(t,e,n=0,s=1/0){this.ray=new Ea(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(t,e=!0,n=[]){return fa(t,this,n,e),n.sort(Vc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fa(t[s],this,n,e);return n.sort(Vc),n}}function Vc(i,t){return i.distance-t.distance}function fa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)fa(r[o],t,e,!0)}}class _0 extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);const Ot=1536,Nt=1536,le=32,de=16,ho=Ot/de,fo=Nt/de,g0=6,Pa=14,ze=9,v0=600,an=.6,y0=55,x0=30,S0=5,fs=20,M0=8,E0=5,T0=16,fn=1/T0;function uo(i,t){return{u:i*fn,v:1-(t+1)*fn}}class Zt{constructor({id:t,name:e,color:n,hardness:s,minTier:r=0,dropItem:o=null,dropCount:a=1,isTransparent:c=!1,isSolid:l=!0,isFarmland:h=!1,isHazard:d=!1,atlasCol:u=0,atlasRow:f=0,atlasTop:_=null,atlasBottom:g=null}){this.id=t,this.name=e,this.color=n,this.hardness=s,this.minTier=r,this.dropItem=o,this.dropCount=a,this.isTransparent=c,this.isSolid=l,this.isFarmland=h,this.isHazard=d,this.uvSide=uo(u,f),this.uvTop=_?uo(_[0],_[1]):this.uvSide,this.uvBottom=g?uo(g[0],g[1]):this.uvSide}}const v={AIR:0,GRASS:1,DIRT:2,STONE:3,COBBLESTONE:4,WOOD_LOG:5,LEAVES:6,SAND:7,IRON_ORE:8,CRYSTAL_ORE:9,FARMLAND:10,CRAFTING_TABLE:11,FORGE:12,ALTAR:13,WATER:14,GRAVEL:15,PLANKS:16,GLASS:17,CHEST:18,TORCH:19,CAMPFIRE:20,BED:21,NETHERRACK:22,LAVA:23,GLOWSTONE:24,OBSIDIAN:25,PORTAL:26,CORAL:27,KELP:28,TALL_GRASS:29,FLOWER:30},fi={[v.AIR]:new Zt({id:v.AIR,name:"air",color:"#000000",hardness:0,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:15}),[v.GRASS]:new Zt({id:v.GRASS,name:"grass",color:"#4a8f3f",hardness:.5,dropItem:"dirt",atlasCol:3,atlasRow:0,atlasTop:[0,0],atlasBottom:[2,0]}),[v.DIRT]:new Zt({id:v.DIRT,name:"dirt",color:"#8b6914",hardness:.5,atlasCol:2,atlasRow:0}),[v.STONE]:new Zt({id:v.STONE,name:"stone",color:"#888888",hardness:1.5,minTier:1,dropItem:"cobblestone",atlasCol:1,atlasRow:0}),[v.COBBLESTONE]:new Zt({id:v.COBBLESTONE,name:"cobblestone",color:"#6b6b6b",hardness:2,minTier:1,atlasCol:0,atlasRow:1}),[v.WOOD_LOG]:new Zt({id:v.WOOD_LOG,name:"wood_log",color:"#6b4423",hardness:1,atlasCol:4,atlasRow:1,atlasTop:[5,1],atlasBottom:[5,1]}),[v.LEAVES]:new Zt({id:v.LEAVES,name:"leaves",color:"#2d6e1e",hardness:.2,dropItem:null,isTransparent:!0,atlasCol:4,atlasRow:3}),[v.SAND]:new Zt({id:v.SAND,name:"sand",color:"#d4c27a",hardness:.5,atlasCol:2,atlasRow:1}),[v.IRON_ORE]:new Zt({id:v.IRON_ORE,name:"iron_ore",color:"#7a7a60",hardness:3,minTier:2,dropItem:"iron_ore",atlasCol:1,atlasRow:2}),[v.CRYSTAL_ORE]:new Zt({id:v.CRYSTAL_ORE,name:"crystal_ore",color:"#4a2080",hardness:4.5,minTier:3,dropItem:"crystal_shard",atlasCol:2,atlasRow:2}),[v.FARMLAND]:new Zt({id:v.FARMLAND,name:"farmland",color:"#4a2e08",hardness:.5,dropItem:"dirt",isFarmland:!0,atlasCol:6,atlasRow:0}),[v.CRAFTING_TABLE]:new Zt({id:v.CRAFTING_TABLE,name:"crafting_table",color:"#8b4513",hardness:1,atlasCol:11,atlasRow:2,atlasTop:[11,2],atlasBottom:[4,0]}),[v.FORGE]:new Zt({id:v.FORGE,name:"forge",color:"#555555",hardness:1.5,minTier:1,atlasCol:13,atlasRow:2}),[v.ALTAR]:new Zt({id:v.ALTAR,name:"altar",color:"#200030",hardness:999,atlasCol:14,atlasRow:2}),[v.WATER]:new Zt({id:v.WATER,name:"water",color:"#2255aa",hardness:999,isTransparent:!0,isSolid:!1,atlasCol:15,atlasRow:12}),[v.GRAVEL]:new Zt({id:v.GRAVEL,name:"gravel",color:"#888877",hardness:.6,atlasCol:3,atlasRow:1}),[v.PLANKS]:new Zt({id:v.PLANKS,name:"planks",color:"#c8a44a",hardness:.75,atlasCol:4,atlasRow:0}),[v.GLASS]:new Zt({id:v.GLASS,name:"glass",color:"#aaddff",hardness:.3,isTransparent:!0,atlasCol:1,atlasRow:3}),[v.CHEST]:new Zt({id:v.CHEST,name:"chest",color:"#8b6914",hardness:.75,atlasCol:9,atlasRow:1}),[v.TORCH]:new Zt({id:v.TORCH,name:"torch",color:"#ffaa00",hardness:0,dropItem:"torch",isSolid:!1,isTransparent:!0,atlasCol:0,atlasRow:5}),[v.CAMPFIRE]:new Zt({id:v.CAMPFIRE,name:"campfire",color:"#cc4400",hardness:.5,atlasCol:7,atlasRow:5}),[v.BED]:new Zt({id:v.BED,name:"bed",color:"#a02020",hardness:.3,atlasCol:6,atlasRow:1,atlasTop:[7,1]}),[v.NETHERRACK]:new Zt({id:v.NETHERRACK,name:"netherrack",color:"#5a2a20",hardness:1,minTier:1,atlasCol:3,atlasRow:2}),[v.LAVA]:new Zt({id:v.LAVA,name:"lava",color:"#e8480a",hardness:999,isTransparent:!0,isSolid:!0,isHazard:!0,atlasCol:4,atlasRow:2}),[v.GLOWSTONE]:new Zt({id:v.GLOWSTONE,name:"glowstone",color:"#f0d878",hardness:.5,atlasCol:5,atlasRow:2}),[v.OBSIDIAN]:new Zt({id:v.OBSIDIAN,name:"obsidian",color:"#1a0e28",hardness:6,minTier:4,atlasCol:6,atlasRow:2}),[v.PORTAL]:new Zt({id:v.PORTAL,name:"nether_portal",color:"#9020e0",hardness:999,isTransparent:!0,isSolid:!0,atlasCol:7,atlasRow:2}),[v.CORAL]:new Zt({id:v.CORAL,name:"coral",color:"#ff6a8a",hardness:.2,isTransparent:!0,isSolid:!1,atlasCol:8,atlasRow:3}),[v.KELP]:new Zt({id:v.KELP,name:"kelp",color:"#2a8a4a",hardness:.2,isTransparent:!0,isSolid:!1,atlasCol:9,atlasRow:3}),[v.TALL_GRASS]:new Zt({id:v.TALL_GRASS,name:"tall_grass",color:"#4a8f3f",hardness:.1,dropItem:null,isTransparent:!0,isSolid:!1,atlasCol:10,atlasRow:3}),[v.FLOWER]:new Zt({id:v.FLOWER,name:"flower",color:"#e05070",hardness:.1,dropItem:null,isTransparent:!0,isSolid:!1,atlasCol:11,atlasRow:3})},b0={};for(const i of Object.values(fi))b0[i.name]=i;class Wc{constructor(){this.data=new Uint8Array(Ot*le*Nt),this.data.fill(v.AIR)}_idx(t,e,n){return t*le*Nt+e*Nt+n}inBounds(t,e,n){return t>=0&&t<Ot&&e>=0&&e<le&&n>=0&&n<Nt}get(t,e,n){return this.inBounds(t,e,n)?this.data[this._idx(t,e,n)]:v.AIR}set(t,e,n,s){this.inBounds(t,e,n)&&(this.data[this._idx(t,e,n)]=s)}isSolid(t,e,n){if(!this.inBounds(t,e,n))return!1;const s=this.get(t,e,n);return s!==v.AIR&&s!==v.WATER&&s!==v.LEAVES&&s!==v.LAVA&&s!==v.TALL_GRASS&&s!==v.FLOWER&&s!==v.CORAL&&s!==v.KELP}surfaceY(t,e){for(let n=le-1;n>=0;n--)if(this.get(t,n,e)!==v.AIR)return n;return-1}solidSurfaceY(t,e){for(let n=le-1;n>=0;n--)if(this.isSolid(t,n,e))return n;return-1}serialize(){const t=this.data,e=[];let n=0;for(;n<t.length;){const s=t[n];let r=1;for(;n+r<t.length&&t[n+r]===s;)r++;e.push(s,r),n+=r}return e}deserialize(t){const e=Ot*le*Nt;if(t.length===e){this.data=new Uint8Array(t);return}const n=new Uint8Array(e);let s=0;for(let r=0;r<t.length;r+=2){const o=t[r],a=t[r+1];n.fill(o,s,s+a),s+=a}this.data=n}}const A0=[{dir:[0,0,-1],normal:[0,0,-1],uvKey:"uvSide"},{dir:[0,0,1],normal:[0,0,1],uvKey:"uvSide"},{dir:[-1,0,0],normal:[-1,0,0],uvKey:"uvSide"},{dir:[1,0,0],normal:[1,0,0],uvKey:"uvSide"},{dir:[0,1,0],normal:[0,1,0],uvKey:"uvTop"},{dir:[0,-1,0],normal:[0,-1,0],uvKey:"uvBottom"}],w0=[[[0,0,0],[1,0,0],[1,1,0],[0,1,0]],[[1,0,1],[0,0,1],[0,1,1],[1,1,1]],[[0,0,1],[0,0,0],[0,1,0],[0,1,1]],[[1,0,0],[1,0,1],[1,1,1],[1,1,0]],[[0,1,0],[1,1,0],[1,1,1],[0,1,1]],[[0,0,1],[1,0,1],[1,0,0],[0,0,0]]],ua=new Set([v.WATER,v.LAVA]),R0=new Set([v.TALL_GRASS,v.FLOWER]),C0=[[[0,0,0],[1,0,1],[1,1,1],[0,1,0]],[[1,0,0],[0,0,1],[0,1,1],[1,1,0]]];function Xc(i,t,e,n){const s=[],r=[],o=[],a=[];let c=0;const l=t*de,h=e*de;for(let u=0;u<de;u++){const f=l+u;for(let _=0;_<le;_++)for(let g=0;g<de;g++){const m=h+g,p=i.get(f,_,m);if(p===v.AIR||!n(p))continue;const E=fi[p];if(!(!E||!E.isSolid&&!E.isTransparent)){if(R0.has(p)){const S=E.uvSide,b=[[S.u,S.v],[S.u+fn,S.v],[S.u+fn,S.v+fn],[S.u,S.v+fn]];for(const O of C0){const C=c;for(let w=0;w<4;w++){const D=O[w];s.push(u+D[0],_+D[1],g+D[2]),r.push(0,1,0),o.push(b[w][0],b[w][1])}a.push(C,C+1,C+2,C,C+2,C+3),c+=4}continue}for(let S=0;S<6;S++){const b=A0[S],O=f+b.dir[0],C=_+b.dir[1],w=m+b.dir[2],D=i.get(O,C,w),j=fi[D];if(ua.has(p)&&D===p||!(!j||!j.isSolid||j.isTransparent))continue;const T=E[b.uvKey],H=[[T.u,T.v],[T.u+fn,T.v],[T.u+fn,T.v+fn],[T.u,T.v+fn]],z=w0[S],W=c;for(let J=0;J<4;J++){const G=z[J];s.push(u+G[0],_+G[1],g+G[2]),r.push(...b.normal),o.push(H[J][0],H[J][1])}a.push(W,W+1,W+2,W,W+2,W+3),c+=4}}}}if(c===0)return null;const d=new en;return d.setAttribute("position",new Ne(s,3)),d.setAttribute("normal",new Ne(r,3)),d.setAttribute("uv",new Ne(o,2)),d.setIndex(a),d.computeBoundingBox(),d}class P0{constructor(t,e,n,s,r){this.cx=t,this.cz=e,this.worldData=n,this.material=s,this.liquidMaterial=r,this.mesh=null,this.liquidMesh=null,this.build()}build(){var r,o;this.mesh&&(this.mesh.geometry.dispose(),(r=this.mesh.parent)==null||r.remove(this.mesh)),this.liquidMesh&&(this.liquidMesh.geometry.dispose(),(o=this.liquidMesh.parent)==null||o.remove(this.liquidMesh)),this.mesh=null,this.liquidMesh=null;const t=this.cx*de,e=this.cz*de,n=Xc(this.worldData,this.cx,this.cz,a=>!ua.has(a));n&&(this.mesh=new ye(n,this.material),this.mesh.position.set(t,0,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0);const s=Xc(this.worldData,this.cx,this.cz,a=>ua.has(a));s&&(this.liquidMesh=new ye(s,this.liquidMaterial),this.liquidMesh.position.set(t,0,e),this.liquidMesh.receiveShadow=!0)}dispose(){var t,e;this.mesh&&(this.mesh.geometry.dispose(),(t=this.mesh.parent)==null||t.remove(this.mesh),this.mesh=null),this.liquidMesh&&(this.liquidMesh.geometry.dispose(),(e=this.liquidMesh.parent)==null||e.remove(this.liquidMesh),this.liquidMesh=null)}}class Yc{constructor(t,e,n,s={}){this.scene=t,this.worldData=e,this.ensureChunkData=s.ensureChunkData||null,this.loadRadius=s.loadRadius??g0;const r=new gs({map:n,alphaTest:.1,side:He});this.material=r,this.liquidMaterial=new gs({map:n,transparent:!0,depthWrite:!1,side:He}),this.chunks=new Map,this.group=new zn,this.scene.add(this.group)}_key(t,e){return`${t},${e}`}_buildChunk(t,e){var o;const n=this._key(t,e),s=this.chunks.get(n);s&&s.dispose(),(o=this.ensureChunkData)==null||o.call(this,t,e);const r=new P0(t,e,this.worldData,this.material,this.liquidMaterial);this.chunks.set(n,r),r.mesh&&this.group.add(r.mesh),r.liquidMesh&&this.group.add(r.liquidMesh)}streamAround(t,e,n=6){const s=Math.floor(t/de),r=Math.floor(e/de),o=this.loadRadius,a=new Set,c=[];for(let h=-o;h<=o;h++)for(let d=-o;d<=o;d++){if(h*h+d*d>o*o)continue;const u=s+h,f=r+d;if(u<0||f<0||u>=ho||f>=fo)continue;const _=this._key(u,f);a.add(_),this.chunks.has(_)||c.push({cx:u,cz:f,d:h*h+d*d})}c.sort((h,d)=>h.d-d.d);let l=0;for(const{cx:h,cz:d}of c){if(l>=n)break;this._buildChunk(h,d),l++}for(const[h,d]of[...this.chunks.entries()])a.has(h)||(d.dispose(),this.chunks.delete(h))}rebuildChunk(t,e){if(t<0||t>=ho||e<0||e>=fo)return;const n=[[t,e],[t-1,e],[t+1,e],[t,e-1],[t,e+1]];for(const[s,r]of n){if(s<0||s>=ho||r<0||r>=fo)continue;const o=this._key(s,r);this.chunks.has(o)&&this._buildChunk(s,r)}}disposeAll(){for(const t of this.chunks.values())t.dispose();this.chunks.clear()}get allMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh),e.liquidMesh&&t.push(e.liquidMesh);return t}}const $=8,Hn=4;function zi(i,t){let e=Math.imul(i*1664525+t,22695477)+1013904223;return e^=e>>>16,e=Math.imul(e,73244475),e^=e>>>16,(e>>>0)/4294967295}function se(i,t,e){const n=Math.floor(i/e),s=Math.floor(t/e),r=i/e-n,o=t/e-s,a=r*r*(3-2*r),c=o*o*(3-2*o);return zi(n,s)*(1-a)*(1-c)+zi(n+1,s)*a*(1-c)+zi(n,s+1)*(1-a)*c+zi(n+1,s+1)*a*c}function qc(i,t,e=4,n=55){let s=0,r=1,o=1,a=0;for(let c=0;c<e;c++)s+=se(i*o,t*o,n)*r,a+=r,r*=.5,o*=2.1;return s/a}function ji(i,t){const e=Ot/2,n=Nt/2,s=(i-e)/(Ot*.44),r=(t-n)/(Nt*.44),o=se(i,t,52)*.2-.1;return Math.sqrt(s*s+r*r)+o}function L0(i){U0(i),D0(i),O0(i),B0(i),Y0(i),F0(i),k0(i),z0(i),H0(i),G0(i),J0(i),V0(i),W0(i),q0(i),X0(i),K0(i),$0(i),Z0(i),j0(i),Q0(i),t_(i),e_(i),n_(i),i_(i),s_(i),r_(i),o_(i),a_(i),c_(i),l_(i),N0(i),I0(i)}function I0(i){for(let t=0;t<Ot;t++)for(let e=0;e<Nt;e++){const n=i.surfaceY(t,e);if(n<0||n+1>=le||i.get(t,n,e)!==v.GRASS||i.get(t,n+1,e)!==v.AIR)continue;const s=se(t*3,e*3,9);s>.94?i.set(t,n+1,e,v.FLOWER):s>.82&&i.set(t,n+1,e,v.TALL_GRASS)}}function N0(i){for(let t=0;t<Ot;t++)for(let e=0;e<Nt;e++){const n=ji(t,e);if(n<=.92)continue;const s=Math.min(1,(n-.92)/.5),r=se(t,e,24)*2-1,o=Math.max(1,Math.min(ze-2,Math.round(ze-3-s*6+r)));for(let c=0;c<=o;c++)i.set(t,c,e,v.STONE);const a=s<.4;i.set(t,o,e,a?v.SAND:v.GRAVEL);for(let c=o+1;c<=ze;c++)i.set(t,c,e,v.WATER);if(a&&se(t*2,e*2,10)>.62){const l=zi(t,e);if(l>.55&&o+1<=ze)i.set(t,o+1,e,v.CORAL),l>.8&&o+2<=ze&&i.set(t,o+2,e,v.CORAL);else if(l>.35){const h=2+Math.floor(zi(t+1,e+1)*3);for(let d=1;d<=h&&o+d<=ze;d++)i.set(t,o+d,e,v.KELP)}}}}function U0(i){for(let t=0;t<Ot;t++)for(let e=0;e<Nt;e++){const n=ji(t,e);if(n>.92)continue;const s=Math.floor(Pa-2-n*n*5);for(let r=0;r<=Math.min(s,le-1);r++)i.set(t,r,e,v.STONE)}}function D0(i){for(let t=0;t<Ot;t++)for(let e=0;e<Nt;e++){const n=ji(t,e);if(n>.9)continue;const s=qc(t,e,4,58)*4,r=qc(t+300,e+300,3,24)*1.5,o=se(t,e,12)*.6,a=Math.max(0,1-n*1.3),c=Math.round(Pa+(s+r+o-3)*a),l=Math.max(ze,Math.min(c,le-4));i.set(t,l,e,v.GRASS);for(let h=1;h<=4;h++)l-h>=0&&i.get(t,l-h,e)===v.STONE&&i.set(t,l-h,e,v.DIRT)}}function O0(i){for(let t=0;t<Ot;t++)for(let e=0;e<Nt;e++){const n=ji(t,e);if(n<.68||n>.92)continue;const s=i.surfaceY(t,e);if(s<ze-2||s>ze+2)continue;const r=2+Math.round(se(t*2,e*2,20));for(let o=0;o<r;o++){const a=s-o;if(a<0)break;const c=i.get(t,a,e);(c===v.GRASS||c===v.DIRT||c===v.STONE)&&i.set(t,a,e,v.SAND)}}}function B0(i){const t=[[114*$,90*$,5],[66*$,114*$,4],[140*$,70*$,5],[80*$,50*$,4],[110*$,150*$,6]];for(const[e,n,s]of t)for(let r=e-s-2;r<=e+s+2;r++)for(let o=n-s-2;o<=n+s+2;o++){const a=Math.sqrt((r-e)**2+(o-n)**2);if(a>s+.5)continue;const c=i.surfaceY(r,o);c<0||(i.set(r,c,o,v.WATER),a<s-1&&i.set(r,c-1,o,v.DIRT),a>=s-1&&i.get(r,c,o)===v.GRASS&&i.set(r,c,o,v.SAND))}}function Xl(i,t,e,n,s){for(let r=t-s;r<=t+s;r++)for(let o=e-s;o<=e+s;o++){if(r<0||r>=Ot||o<0||o>=Nt)continue;const a=Math.sqrt((r-t)**2+(o-e)**2),c=se(r,o,16)*6-3,l=Math.max(0,Math.floor(n-a*(n/s)+c));if(l===0)continue;for(let d=0;d<Math.min(l,le);d++)i.set(r,d,o,v.STONE);const h=i.get(r,l,o);(h===v.AIR||h===v.GRASS||h===v.DIRT)&&i.set(r,l,o,l>n-4?v.GRAVEL:v.STONE),l>=n-3&&i.inBounds(r,l+1,o)&&i.set(r,l+1,o,v.GRAVEL)}}function F0(i){Xl(i,46*$,46*$,28,28*Hn)}function k0(i){Xl(i,150*$,44*$,22,20*Hn)}function z0(i){const t=138*$,e=138*$,n=28*Hn;for(let r=t-n;r<=t+n;r++)for(let o=e-n;o<=e+n;o++){if(r<0||r>=Ot||o<0||o>=Nt||Math.sqrt((r-t)**2+(o-e)**2)>n)continue;const c=i.surfaceY(r,o);if(c<0)continue;i.get(r,c,o)===v.GRASS&&i.set(r,c,o,v.GRAVEL),se(r*2,o*2,14)<.32&&c<=ze+2&&(i.set(r,c,o,v.WATER),i.set(r,c-1,o,v.DIRT))}const s=[[120,120],[126,124],[122,132],[130,126],[136,130],[142,122],[128,140],[134,142],[144,136],[118,136],[148,128],[122,148],[138,148],[150,140],[112,128]].map(([r,o])=>[r*$,o*$]);for(const[r,o]of s){const a=i.surfaceY(r,o);if(a<0||i.get(r,a,o)===v.WATER)continue;const c=4+Math.round(se(r,o,10));for(let l=1;l<=c;l++)i.set(r,a+l,o,v.WOOD_LOG);for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){if(Math.abs(l)+Math.abs(h)>1)continue;const d=r+l,u=a+c,f=o+h;i.inBounds(d,u,f)&&i.get(d,u,f)===v.AIR&&i.set(d,u,f,v.LEAVES)}}}function H0(i){const t=50*$,e=150*$,n=30*Hn;for(let s=t-n;s<=t+n;s+=5)for(let r=e-n;r<=e+n;r+=5){if(Math.sqrt((s-t)**2+(r-e)**2)>n)continue;const a=Math.floor(se(s,r,3)*4)-2,c=Math.floor(se(s+50,r+50,3)*4)-2,l=s+a,h=r+c;if(l<4||l>=Ot-4||h<4||h>=Nt-4)continue;const d=i.surfaceY(l,h);if(d<0)continue;const u=i.get(l,d,h);if(u!==v.GRASS&&u!==v.DIRT)continue;const f=5+Math.round(se(l*2,h*2,6)*4);for(let g=1;g<=f;g++)i.set(l,d+g,h,v.WOOD_LOG);const _=3;for(let g=-_;g<=_;g++)for(let m=-_;m<=_;m++)for(let p=-1;p<=2;p++){if(Math.abs(g)===_&&Math.abs(m)===_)continue;const E=l+g,S=d+f+p,b=h+m;i.inBounds(E,S,b)&&i.get(E,S,b)===v.AIR&&i.set(E,S,b,v.LEAVES)}}}function G0(i){const t=[];for(let n=14;n<Ot-14;n++)for(let s=14;s<Nt-14;s++){if(ji(n,s)>.78)continue;const o=Math.sqrt((n-138*$)**2+(s-138*$)**2)<30*Hn,a=Math.sqrt((n-46*$)**2+(s-46*$)**2)<8*Hn,c=Math.sqrt((n-150*$)**2+(s-44*$)**2)<6*Hn,l=Math.sqrt((n-50*$)**2+(s-150*$)**2)<32*Hn;if(o||a||c||l)continue;se(n*3,s*3,20)>.7&&t.push([n,s])}const e=Math.max(1,Math.floor(t.length/(70*$)));for(let n=0;n<t.length;n+=e){const[s,r]=t[n],o=i.surfaceY(s,r);if(o<0)continue;const a=i.get(s,o,r);if(a!==v.GRASS&&a!==v.DIRT)continue;const c=4+Math.round(se(s,r,12)*3);for(let h=1;h<=c;h++)i.set(s,o+h,r,v.WOOD_LOG);const l=2;for(let h=-l;h<=l;h++)for(let d=-l;d<=l;d++)for(let u=-1;u<=2;u++){if(Math.abs(h)===l&&Math.abs(d)===l)continue;const f=s+h,_=o+c+u,g=r+d;i.inBounds(f,_,g)&&i.get(f,_,g)===v.AIR&&i.set(f,_,g,v.LEAVES)}}}function V0(i){const t=[[78,42],[42,80],[108,60],[60,108],[132,88],[88,132],[160,96],[96,160],[70,70],[120,120],[160,60],[60,160],[100,40],[40,100],[155,100],[100,155]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(!(s<0)&&i.get(e,s,n)===v.GRASS){for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(Math.abs(r)+Math.abs(o)>1)continue;const a=i.surfaceY(e+r,n+o);a>=0&&i.set(e+r,a+1,n+o,v.STONE)}i.set(e,s+2,n,v.STONE)}}}function W0(i){let t=42;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=48*$;for(let s=0;s<n;s++){let r=16+Math.floor(e()*(Ot-32)),o=2+Math.floor(e()*9),a=16+Math.floor(e()*(Nt-32));const c=30+Math.floor(e()*60);let l=e()*2-1,h=e()*2-1;for(let d=0;d<c;d++){const u=1+(e()>.65?1:0)+(e()>.9?1:0);for(let f=-u;f<=u;f++)for(let _=0;_<=u;_++)for(let g=-u;g<=u;g++)i.inBounds(r+f,o+_,a+g)&&i.get(r+f,o+_,a+g)!==v.AIR&&i.set(r+f,o+_,a+g,v.AIR);if(r+=Math.round(l),a+=Math.round(h),l+=(e()-.5)*.45,h+=(e()-.5)*.45,l=Math.max(-1.5,Math.min(1.5,l)),h=Math.max(-1.5,Math.min(1.5,h)),!i.inBounds(r,o,a))break}}}function X0(i){let t=13;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295);for(let n=0;n<80*$;n++){const s=12+Math.floor(e()*(Ot-24)),r=2+Math.floor(e()*8),o=12+Math.floor(e()*(Nt-24));for(let a=0;a<4+Math.floor(e()*6);a++){const c=s+Math.floor(e()*3)-1,l=r+Math.floor(e()*2),h=o+Math.floor(e()*3)-1;i.inBounds(c,l,h)&&i.get(c,l,h)===v.STONE&&i.set(c,l,h,v.IRON_ORE)}}for(let n=0;n<30*$;n++){const s=10+Math.floor(e()*(Ot-20)),r=1+Math.floor(e()*5),o=10+Math.floor(e()*(Nt-20));for(let a=0;a<3+Math.floor(e()*4);a++){const c=s+Math.floor(e()*3)-1,l=o+Math.floor(e()*3)-1;i.inBounds(c,r,l)&&i.get(c,r,l)===v.STONE&&i.set(c,r,l,v.CRYSTAL_ORE)}}}function Y0(i){let t=120*$,e=70*$,n=.6,s=1;for(let r=0;r<55*$;r++){const o=3+Math.round(se(t,e,8)*2);for(let c=-o;c<=o;c++)for(let l=-o;l<=o;l++){if(Math.sqrt(c*c+l*l)>o)continue;const d=Math.floor(10+se(t+c,e+l,6)*5),u=Math.floor(t+c),f=Math.floor(e+l);if(!i.inBounds(u,0,f))continue;const _=i.surfaceY(u,f);for(let m=_;m>=Math.max(2,_-d);m--)i.set(u,m,f,v.AIR);const g=Math.max(2,_-d);i.inBounds(u,g,f)&&i.set(u,g,f,v.GRAVEL)}n+=(se(t*.1,e*.1,4)-.5)*.4,s+=(se(t*.1+50,e*.1+50,4)-.5)*.4;const a=Math.sqrt(n*n+s*s);n/=a,s/=a,t+=n*1.8,e+=s*1.8}}function q0(i){const t=155*$,e=5,n=55*$,s=12,r=5,o=11;for(let a=-s;a<=s;a++)for(let c=-r;c<=r;c++)for(let l=-o;l<=o;l++){if((a/s)**2+(c/r)**2+(l/o)**2>1)continue;const d=t+a,u=e+c,f=n+l;i.inBounds(d,u,f)&&i.set(d,u,f,v.AIR)}for(let a=-s;a<=s;a++)for(let c=-r;c<=r;c++)for(let l=-o;l<=o;l++){const h=(a/s)**2+(c/r)**2+(l/o)**2;if(h<.75||h>1.15)continue;const d=t+a,u=e+c,f=n+l;i.inBounds(d,u,f)&&i.get(d,u,f)===v.STONE&&se(d,u+f*3,4)>.5&&i.set(d,u,f,v.CRYSTAL_ORE)}}function K0(i){const t=i.surfaceY(100*$,100*$);t>=0&&i.set(100*$,t+1,100*$,v.CRAFTING_TABLE);const e=i.surfaceY(50*$,148*$);e>=0&&i.set(50*$,e+1,148*$,v.CRAFTING_TABLE);const n=i.surfaceY(50*$,50*$);n>=0&&i.set(50*$,n+1,50*$,v.FORGE);const s=i.surfaceY(152*$,48*$);s>=0&&i.set(152*$,s+1,48*$,v.FORGE);const r=i.surfaceY(138*$,138*$);r>=0&&(i.set(138*$,r+1,138*$,v.ALTAR),i.set(138*$,r+2,138*$,v.ALTAR),i.set(138*$,r+3,138*$,v.ALTAR));{const o=Math.floor(Ot/2)+6,a=Math.floor(Nt/2),c=i.surfaceY(o,a);if(c>=0){for(const l of[-1,0,1])i.set(o+l,c+1,a,v.OBSIDIAN),i.set(o+l,c+4,a,v.OBSIDIAN);for(const l of[-1,1])i.set(o+l,c+2,a,v.OBSIDIAN),i.set(o+l,c+3,a,v.OBSIDIAN);i.set(o,c+2,a,v.PORTAL),i.set(o,c+3,a,v.PORTAL)}}}function $0(i){const t=[[76,80],[116,62],[88,155],[60,92],[168,100]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0)continue;const r=i.get(e,s,n);if(r===v.WATER||r===v.SAND)continue;const o=7,a=5,c=4;for(let h=0;h<o;h++)for(let d=0;d<a;d++){const u=e+h-Math.floor(o/2),f=n+d-Math.floor(a/2);if(!(h===0||h===o-1||d===0||d===a-1))continue;const g=i.surfaceY(u,f);if(g<0)continue;const m=c-Math.round(se(u,f,3)*2.5);for(let p=1;p<=Math.max(1,m);p++){const E=se(u*2,f*2+p,2)>.6?v.COBBLESTONE:v.STONE;i.set(u,g+p,f,E)}i.set(u,g,f,v.COBBLESTONE)}for(let h=0;h<12;h++){const d=e+Math.floor(se(e+h,n+h*3,3)*9)-4,u=n+Math.floor(se(e+h*2,n+h,3)*7)-3,f=i.surfaceY(d,u);f>=0&&i.set(d,f+1,u,v.COBBLESTONE)}const l=s+c-1;for(let h=1;h<o-1;h++){const d=e+h-Math.floor(o/2);se(d,n,5)>.55&&i.set(d,l,n-1,v.PLANKS)}}}function Z0(i){const t=96*$,e=120*$,n=9,s=10;for(let o=0;o<n;o++){const a=o/n*Math.PI*2,c=Math.round(t+Math.cos(a)*s),l=Math.round(e+Math.sin(a)*s),h=i.surfaceY(c,l);if(h<0||i.get(c,h,l)===v.WATER)continue;const u=3+(o%3===0?1:0);for(let f=1;f<=u;f++)i.set(c,h+f,l,v.STONE);u===4&&(i.set(c-1,h+u,l,v.STONE),i.set(c+1,h+u,l,v.STONE))}const r=i.surfaceY(t,e);r>=0&&(i.set(t,r+1,e,v.STONE),i.set(t-1,r+1,e,v.STONE),i.set(t+1,r+1,e,v.STONE),i.set(t,r+1,e-1,v.STONE),i.set(t,r+1,e+1,v.STONE));for(let o=0;o<18;o++){const a=t+Math.round(Math.sin(o*.22)*2),c=e+s+o+2,l=i.surfaceY(a,c);l>=0&&i.get(a,l,c)===v.GRASS&&i.set(a,l,c,v.GRAVEL)}}function j0(i){const t=[[72,130],[108,88],[55,65],[170,130],[90,168]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===v.WATER)continue;i.set(e,s+1,n,v.CAMPFIRE);for(const[a,c]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const l=i.surfaceY(e+a,n+c);l>=0&&i.set(e+a,l+1,n+c,v.COBBLESTONE)}const r=[[-2,0],[2,0],[0,-2],[0,2]];for(const[a,c]of r){const l=i.surfaceY(e+a,n+c);l>=0&&i.get(e+a,l,n+c)!==v.WATER&&i.set(e+a,l+1,n+c,v.WOOD_LOG)}const o=i.surfaceY(e+2,n+2);o>=0&&i.set(e+2,o+1,n+2,v.CHEST);for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){const l=i.surfaceY(e+a,n+c);l>=0&&i.get(e+a,l,n+c)===v.GRASS&&i.set(e+a,l,n+c,v.DIRT)}}}function J0(i){const t=[[80,90,1,5],[105,75,0,4],[65,110,1,6],[130,90,0,5],[75,140,1,4],[44,140,0,5],[160,80,1,4],[100,130,0,5],[55,75,1,3],[140,110,0,4],[175,115,1,5],[85,58,0,4]].map(([e,n,s,r])=>[e*$,n*$,s,r]);for(const[e,n,s,r]of t){const o=i.surfaceY(e,n);if(!(o<0)&&i.get(e,o,n)!==v.WATER)for(let a=0;a<r;a++){const c=s===0?e+a:e,l=s===1?n+a:n,h=i.surfaceY(c,l);h>=0&&i.get(c,h,l)!==v.WATER&&i.set(c,h+1,l,v.WOOD_LOG)}}}function Q0(i){const t=[[30,30],[155,50],[95,162],[170,70],[52,170],[120,40],[60,40],[168,155]].map(([e,n])=>[e*$,n*$]);for(const[e,n]of t){const s=i.surfaceY(e,n);if(s<0||i.get(e,s,n)===v.WATER)continue;i.set(e,s+1,n,v.CHEST);const r=[[1,0],[-1,0],[0,1],[0,-1]];for(const[o,a]of r){const c=i.surfaceY(e+o,n+a);c>=0&&i.get(e+o,c,n+a)===v.GRASS&&i.set(e+o,c+1,n+a,v.COBBLESTONE)}}}function t_(i){let t=68*$,e=112*$;const n={x:114*$,z:90*$};for(let s=0;s<60*$;s++){const r=n.x-t,o=n.z-e,a=Math.sqrt(r*r+o*o);if(a<4)break;const c=r/a+(se(t*.1,e*.1,5)-.5)*.8,l=o/a+(se(t*.1+30,e*.1+30,5)-.5)*.8;t+=c,e+=l;const h=Math.floor(t),d=Math.floor(e);if(!i.inBounds(h,0,d))break;for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++){const _=h+u,g=d+f;if(!i.inBounds(_,0,g))continue;const m=i.surfaceY(_,g);m<0||m<=ze||m>ze+4||i.get(_,m,g)===v.WATER||(i.set(_,m,g,v.WATER),Math.abs(u)+Math.abs(f)===1&&i.get(_,m,g)===v.GRASS&&i.set(_,m,g,v.SAND))}}}function e_(i){const t=110*$,e=125*$;for(let r=-6;r<=6;r++)for(let o=-6;o<=6;o++){const a=t+r,c=e+o,l=i.surfaceY(a,c);l<0||i.get(a,l,c)===v.WATER||i.get(a,l,c)===v.GRASS&&i.set(a,l,c,v.DIRT)}const n=[[-4,-4],[0,-4],[4,-4],[-4,0],[4,0],[-4,4],[0,4],[4,4]];for(const[r,o]of n){const a=t+r,c=e+o,l=i.surfaceY(a,c);l<0||(i.set(a,l+1,c,v.STONE),i.set(a,l+2,c,v.STONE),i.set(a-1,l+2,c,v.COBBLESTONE),i.set(a+1,l+2,c,v.COBBLESTONE))}for(let r=-5;r<=5;r++){const o=i.surfaceY(t+r,e-5),a=i.surfaceY(t+r,e+5);o>=0&&i.set(t+r,o+1,e-5,v.COBBLESTONE),a>=0&&i.set(t+r,a+1,e+5,v.COBBLESTONE)}for(let r=-4;r<=4;r++){const o=i.surfaceY(t-5,e+r),a=i.surfaceY(t+5,e+r);o>=0&&i.set(t-5,o+1,e+r,v.COBBLESTONE),a>=0&&i.set(t+5,a+1,e+r,v.COBBLESTONE)}const s=i.surfaceY(t,e+5);s>=0&&(i.set(t-1,s+1,e+5,v.AIR),i.set(t+1,s+1,e+5,v.AIR))}function as(i,t,e,n,s,r,o,a){const c=i.surfaceY(t,e);if(c<0)return c;for(let u=0;u<=n;u++){const f=c+u;if(f>=le)break;for(let _=0;_<s;_++)for(let g=0;g<s;g++){const m=t-Math.floor(s/2)+_,p=e-Math.floor(s/2)+g;if(!i.inBounds(m,f,p))continue;const E=_===0||_===s-1||g===0||g===s-1,S=_>0&&_<s-1&&g>0&&g<s-1;u===0||E?i.set(m,f,p,r):u===n||u%4===0&&S?i.set(m,f,p,o):i.set(m,f,p,v.AIR)}}if(a){const u=c+n+1;if(u<le){for(let f=0;f<s;f++)for(let _=0;_<s;_++)if((f===0||f===s-1||_===0||_===s-1)&&(f+_)%2===0){const m=t-Math.floor(s/2)+f,p=e-Math.floor(s/2)+_;i.inBounds(m,u,p)&&i.set(m,u,p,r)}}}const l=t,h=e+Math.floor(s/2);i.inBounds(l,c+1,h)&&(i.set(l,c+1,h,v.AIR),i.set(l,c+2,h,v.AIR));const d=c+n;return i.inBounds(t,d+1,e)&&d+1<le&&i.set(t,d+1,e,v.CHEST),c}function ve(i,t,e,n){i.inBounds(t,e,n)&&i.set(t,e,n,v.GLASS)}function n_(i){{const n=74*$,s=68*$,r=12,o=as(i,n,s,r,5,v.COBBLESTONE,v.PLANKS,!0);o>=0&&(ve(i,n,o+5,s-2),ve(i,n,o+5,s+2),ve(i,n-2,o+5,s),ve(i,n+2,o+5,s),ve(i,n,o+9,s-2),ve(i,n,o+9,s+2),ve(i,n-2,o+9,s),ve(i,n+2,o+9,s),o+r+2<le&&i.set(n+1,o+r+2,s+1,v.TORCH))}{const n=162*$,s=80*$,r=16,o=as(i,n,s,r,4,v.STONE,v.PLANKS,!0);if(o>=0){for(let a=3;a<r;a+=3)ve(i,n,o+a,s-1),ve(i,n,o+a,s+1),ve(i,n-1,o+a,s),ve(i,n+1,o+a,s);for(let a=0;a<3;a++){const c=o+r+1+a;if(c>=le)break;const l=2-a;for(let h=-l;h<=l;h++)for(let d=-l;d<=l;d++)i.inBounds(n+h,c,s+d)&&i.set(n+h,c,s+d,v.STONE)}o+r+4<le&&i.set(n,o+r+4,s,v.CRYSTAL_ORE),i.inBounds(n,o+1,s)&&i.set(n,o+1,s,v.FORGE)}}{const n=118*$,s=145*$,r=14,o=as(i,n,s,r,4,v.STONE,v.PLANKS,!1);if(o>=0){for(let a=2;a<r;a+=4)ve(i,n,o+a,s-1),ve(i,n,o+a,s+1);for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)(a+c+n+s)%3===0&&o+r<le&&i.set(n+a,o+r,s+c,v.AIR);i.inBounds(n,o+1,s-1)&&i.set(n,o+1,s-1,v.CHEST)}}{const n=96*$,s=172*$,r=15,o=as(i,n,s,r,3,v.COBBLESTONE,v.PLANKS,!0);if(o>=0){for(let a=r-2;a<=r-1;a++)for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)(Math.abs(c)===1||Math.abs(l)===1)&&i.inBounds(n+c,o+a,s+l)&&i.set(n+c,o+a,s+l,v.GLASS);o+r+1<le&&i.set(n,o+r+1,s,v.CRYSTAL_ORE);for(let a=1;a<8;a++){const c=n,l=s-a,h=i.surfaceY(c,l);h>=0&&i.set(c,h+1,l,v.COBBLESTONE)}}}const t=90*$,e=102*$;for(const[n,s]of[[t,72*$],[e,72*$]]){const o=as(i,n,s,8,3,v.COBBLESTONE,v.PLANKS,!0);o>=0&&(ve(i,n,o+4,s-1),ve(i,n,o+4,s+1))}{const n=72*$,s=96*$,r=i.surfaceY(s,n);if(r>=0){for(let o=t;o<=e;o++)i.surfaceY(o,n)<0||o===t||o===e||o>t+1&&o<e-1&&i.set(o,r+8,n,v.COBBLESTONE);for(let o=68*$;o<78*$;o++)for(let a=s-3;a<=s+3;a++){const c=i.surfaceY(a,o);c>=0&&i.get(a,c,o)!==v.WATER&&i.set(a,c,o,v.GRAVEL)}}}}function po(i,t,e,n,s,r,o,a){const c=i.surfaceY(t,e);if(c<0||i.get(t,c,e)===v.WATER)return;for(let f=0;f<=r;f++){const _=c+f;if(_>=le)break;for(let g=0;g<n;g++)for(let m=0;m<s;m++){const p=t-Math.floor(n/2)+g,E=e-Math.floor(s/2)+m;if(!i.inBounds(p,_,E))continue;const S=g===0||g===n-1||m===0||m===s-1;f===0?i.set(p,_,E,v.COBBLESTONE):f===r?i.set(p,_,E,a):S?i.set(p,_,E,o):i.set(p,_,E,v.AIR)}}const h=t,d=e+Math.floor(s/2);i.inBounds(h,c+1,d)&&i.set(h,c+1,d,v.AIR),i.inBounds(h,c+2,d)&&i.set(h,c+2,d,v.AIR);const u=c+2;ve(i,t-Math.floor(n/2),u,e),ve(i,t+Math.floor(n/2)-(n%2===0?1:0),u,e),ve(i,t,u,e-Math.floor(s/2)),i.inBounds(t-1,c+1,e)&&i.set(t-1,c+1,e,v.CHEST),i.inBounds(t+1,c+1,e)&&i.set(t+1,c+1,e,v.CRAFTING_TABLE)}function mo(i,t,e){const n=i.surfaceY(t,e);if(!(n<0)&&i.get(t,n,e)!==v.WATER){i.set(t,n,e,v.WATER);for(const[s,r]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const o=i.surfaceY(t+s,e+r);o<0||(i.set(t+s,o+1,e+r,v.COBBLESTONE),i.set(t+s,o+2,e+r,v.STONE))}i.set(t-1,n+3,e,v.WOOD_LOG),i.set(t+1,n+3,e,v.WOOD_LOG)}}function Ae(i,t,e,n,s){const r=Math.max(Math.abs(n-t),Math.abs(s-e));for(let o=0;o<=r;o++){const a=r===0?0:o/r,c=Math.round(t+(n-t)*a),l=Math.round(e+(s-e)*a);for(let h=-1;h<=1;h++){const d=i.surfaceY(c+h,l);d>=0&&i.get(c+h,d,l)!==v.WATER&&i.set(c+h,d,l,v.GRAVEL);const u=i.surfaceY(c,l+h);u>=0&&i.get(c,u,l+h)!==v.WATER&&i.set(c,u,l+h,v.GRAVEL)}}}function er(i,t,e,n,s){const r=i.surfaceY(t,e);if(!(r<0||i.get(t,r,e)===v.WATER)){for(let o=0;o<n;o++)for(let a=0;a<s;a++){const c=t+o,l=e+a,h=i.surfaceY(c,l);h<0||i.get(c,h,l)===v.WATER||i.set(c,h,l,v.FARMLAND)}for(let o=-1;o<=n;o++){const a=i.surfaceY(t+o,e-1),c=i.surfaceY(t+o,e+s);a>=0&&i.set(t+o,a+1,e-1,v.COBBLESTONE),c>=0&&i.set(t+o,c+1,e+s,v.COBBLESTONE)}for(let o=0;o<s;o++){const a=i.surfaceY(t-1,e+o),c=i.surfaceY(t+n,e+o);a>=0&&i.set(t-1,a+1,e+o,v.COBBLESTONE),c>=0&&i.set(t+n,c+1,e+o,v.COBBLESTONE)}}}function i_(i){{const t=96*$,e=86*$;mo(i,t,e);for(let o=-5;o<=5;o++)for(let a=-5;a<=5;a++){const c=i.surfaceY(t+o,e+a);c>=0&&i.get(t+o,c,e+a)!==v.WATER&&i.set(t+o,c,e+a,v.GRAVEL)}const n=[[t-12,e-4,7,5,3,v.PLANKS,v.PLANKS],[t+12,e-4,6,5,3,v.COBBLESTONE,v.PLANKS],[t-10,e+10,5,4,3,v.PLANKS,v.PLANKS],[t+10,e+10,5,4,3,v.PLANKS,v.PLANKS],[t,e+14,6,4,3,v.COBBLESTONE,v.PLANKS],[t-12,e+18,5,4,3,v.PLANKS,v.PLANKS],[t+12,e+18,5,4,3,v.PLANKS,v.PLANKS]];for(const[o,a,c,l,h,d,u]of n)po(i,o,a,c,l,h,d,u);const s=i.surfaceY(t+12,e-4);s>=0&&i.set(t+12,s+1,e-4,v.FORGE),Ae(i,t,e-4,t-12,e-4),Ae(i,t,e-4,t+12,e-4),Ae(i,t,e+4,t,e+14),Ae(i,t,e+14,t-10,e+10),Ae(i,t,e+14,t+10,e+10),Ae(i,t,e+18,t-12,e+18),Ae(i,t,e+18,t+12,e+18),Ae(i,t,e-5,t,74*$),er(i,t+16,e+2,5,4),er(i,t+16,e+8,5,4);const r=i.surfaceY(t+3,e+3);r>=0&&i.set(t+3,r+1,e+3,v.CAMPFIRE);for(const[o,a]of[[t-5,e-5],[t+5,e-5],[t-5,e+5],[t+5,e+5]]){const c=i.surfaceY(o,a);c<0||(i.set(o,c+1,a,v.STONE),i.set(o,c+2,a,v.STONE),i.set(o,c+3,a,v.TORCH))}}{const t=162*$,e=108*$;mo(i,t,e);for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++){const o=i.surfaceY(t+s,e+r);o>=0&&i.get(t+s,o,e+r)!==v.WATER&&i.set(t+s,o,e+r,v.GRAVEL)}const n=[[t-10,e-4,6,4,3,v.PLANKS,v.PLANKS],[t+10,e-4,5,4,3,v.COBBLESTONE,v.PLANKS],[t-9,e+10,5,4,3,v.PLANKS,v.PLANKS],[t+9,e+10,5,4,3,v.PLANKS,v.PLANKS],[t,e+14,5,4,3,v.PLANKS,v.PLANKS]];for(const[s,r,o,a,c,l,h]of n)po(i,s,r,o,a,c,l,h);Ae(i,t,e,t-10,e-4),Ae(i,t,e,t+10,e-4),Ae(i,t,e,t-9,e+10),Ae(i,t,e,t+9,e+10),Ae(i,t,e,t,e+14),er(i,t+14,e+4,4,4);for(const[s,r]of[[t-4,e-4],[t+4,e-4],[t-4,e+4],[t+4,e+4]]){const o=i.surfaceY(s,r);o<0||(i.set(s,o+1,r,v.STONE),i.set(s,o+2,r,v.TORCH))}}{const t=52*$,e=132*$;mo(i,t,e);for(let r=-3;r<=3;r++)for(let o=-3;o<=3;o++){const a=i.surfaceY(t+r,e+o);a>=0&&i.get(t+r,a,e+o)!==v.WATER&&i.set(t+r,a,e+o,v.DIRT)}const n=[[t-9,e-4,5,4,3,v.PLANKS,v.PLANKS],[t+9,e-4,5,4,3,v.PLANKS,v.PLANKS],[t-8,e+9,5,4,3,v.PLANKS,v.PLANKS],[t+8,e+9,5,4,3,v.WOOD_LOG,v.PLANKS]];for(const[r,o,a,c,l,h,d]of n)po(i,r,o,a,c,l,h,d);Ae(i,t,e,t-9,e-4),Ae(i,t,e,t+9,e-4),Ae(i,t,e,t-8,e+9),Ae(i,t,e,t+8,e+9),er(i,t+12,e,4,3);const s=i.surfaceY(t,e+4);s>=0&&i.set(t,s+1,e+4,v.CAMPFIRE)}}function s_(i){const t=Pa+10;for(let e=0;e<Ot;e++)for(let n=0;n<Nt;n++){const s=i.surfaceY(e,n);if(s<t)continue;const r=i.get(e,s,n);r===v.AIR||r===v.WATER||r===v.LEAVES||(i.set(e,s,n,v.GRAVEL),s>=t+4&&i.inBounds(e,s+1,n)&&i.set(e,s+1,n,v.GRAVEL))}}function r_(i){for(let t=1;t<Ot-1;t++)for(let e=1;e<Nt-1;e++){const n=i.surfaceY(t,e);if(n<0)continue;const s=[i.surfaceY(t+1,e),i.surfaceY(t-1,e),i.surfaceY(t,e+1),i.surfaceY(t,e-1)],r=Math.min(...s.filter(a=>a>=0)),o=n-r;if(!(o<4)){for(let a=1;a<=o;a++){const c=n-a;if(c<0)break;const l=i.get(t,c,e);l===v.DIRT&&i.set(t,c,e,v.STONE),l===v.GRASS&&i.set(t,c,e,v.COBBLESTONE)}if(o>=6){const a=n-Math.floor(o/2);i.inBounds(t,a,e)&&i.set(t,a,e,v.GRAVEL)}}}}function o_(i){let t=99;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[44,58],[58,44],[150,52],[54,148],[128,72],[72,128],[164,90],[90,48],[36,100],[110,36],[170,120],[42,170]].map(([s,r])=>[s*$,r*$]);for(const[s,r]of n){const o=i.surfaceY(s,r);if(o<ze+3||o<0)continue;const a=i.get(s,o,r);if(!(a===v.WATER||a===v.SAND)){for(let c=1;c<=3;c++){const l=o-c;if(l<0)break;i.get(s,l,r)!==v.AIR&&i.set(s,l,r,v.AIR)}for(const[c,l]of[[1,0],[-1,0],[0,1],[0,-1]])for(let h=1;h<=2;h++){const d=o-h;d<0||!i.inBounds(s+c,d,r+l)||e()>.5&&i.set(s+c,d,r+l,v.AIR)}i.inBounds(s,o,r)&&i.set(s,o,r,v.COBBLESTONE),i.inBounds(s-1,o,r)&&i.set(s-1,o,r,v.STONE),i.inBounds(s+1,o,r)&&i.set(s+1,o,r,v.STONE)}}}function a_(i){for(let t=0;t<Ot;t++)for(let e=0;e<Nt;e++){if(i.get(t,i.surfaceY(t,e),e)!==v.WATER)continue;const n=i.surfaceY(t,e);n<0||(n-1>=0&&i.get(t,n-1,e)===v.STONE&&i.set(t,n-1,e,v.SAND),n-2>=0&&i.get(t,n-2,e)===v.STONE&&i.set(t,n-2,e,v.DIRT))}}function c_(i){let t=77;const e=()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295),n=[[118,122],[126,138],[134,120],[124,148],[140,132],[48,142],[56,156],[44,162],[60,138],[52,158],[40,56],[58,46],[52,60]].map(([r,o])=>[r*$,o*$]);for(const[r,o]of n){const a=i.surfaceY(r,o);if(a<0||i.get(r,a,o)===v.WATER)continue;const c=e()>.5?2:1;for(let h=1;h<=c;h++)i.inBounds(r,a+h,o)&&i.get(r,a+h,o)===v.AIR&&i.set(r,a+h,o,v.COBBLESTONE);const l=a+c+1;if(l<le)for(const[h,d]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])i.inBounds(r+h,l,o+d)&&i.get(r+h,l,o+d)===v.AIR&&i.set(r+h,l,o+d,v.LEAVES)}const s=[[82,62],[104,54],[66,88],[130,80],[80,108],[158,100],[100,148],[62,118],[144,64],[70,152],[112,170],[160,140],[38,80],[40,120],[180,90]].map(([r,o])=>[r*$,o*$]);for(const[r,o]of s){const a=i.surfaceY(r,o);if(a<0||i.get(r,a,o)===v.WATER)continue;const c=1+Math.floor(e()*2);for(let l=-c;l<=c;l++)for(let h=-c;h<=c;h++)for(let d=0;d<=c;d++){if(Math.sqrt(l*l+d*d*1.5+h*h)>c+.4)continue;const f=r+l,_=a+d,g=o+h;if(!i.inBounds(f,_,g))continue;const m=i.get(f,_,g);(m===v.AIR||m===v.GRASS||m===v.DIRT)&&i.set(f,_,g,v.STONE)}}for(let r=0;r<60*$;r++){const o=20+Math.floor(e()*(Ot-40)),a=20+Math.floor(e()*(Nt-40));if(ji(o,a)>.7)continue;const l=i.surfaceY(o,a);l<0||i.get(o,l,a)!==v.GRASS||i.inBounds(o,l+1,a)&&i.get(o,l+1,a)===v.AIR&&i.set(o,l+1,a,v.COBBLESTONE)}}function l_(i){for(let t=0;t<Ot;t++)for(let e=0;e<Nt;e++){let n=!1;for(let s=le-1;s>=1;s--){const r=i.get(t,s,e);if(r===v.DIRT){n=!0;continue}if(n&&r===v.STONE){const o=se(t,e,8)>.5?2:1;for(let a=0;a<o;a++){const c=s+a;i.inBounds(t,c,e)&&i.get(t,c,e)===v.STONE&&i.set(t,c,e,v.GRAVEL)}break}r!==v.AIR&&(n=!1)}}}const _o=3,Kc=le-5;function Yl(i,t){return 6+Math.round(Math.sin(i*.08)*1.5+Math.cos(t*.08)*1.5)}function nr(i,t){let e=Math.imul(i*1664525+t,22695477)+1013904223;return e^=e>>>16,e=Math.imul(e,73244475),e^=e>>>16,(e>>>0)/4294967295}function h_(i,t,e){const n=Yl(t,e);for(let s=0;s<le;s++)s===0?i.set(t,s,e,v.NETHERRACK):s<=_o?i.set(t,s,e,v.LAVA):s<=n||s>=Kc?i.set(t,s,e,v.NETHERRACK):i.set(t,s,e,v.AIR);if(nr(t,e*3)>.82){const s=Math.min(n-1,_o+1+Math.floor(nr(t+9,e)*3));s>_o&&i.set(t,s,e,v.AIR)}nr(t+50,e+50)>.97&&i.set(t,Kc,e,v.GLOWSTONE),nr(t+77,e+11)>.985&&i.get(t,n+1,e)===v.AIR&&i.set(t,n+1,e,v.LAVA)}function go(i,t,e){i._netherGen||(i._netherGen=new Set);const n=`${t},${e}`;if(i._netherGen.has(n))return;i._netherGen.add(n);const s=t*de,r=e*de;for(let o=0;o<de;o++)for(let a=0;a<de;a++){const c=s+o,l=r+a;c<0||l<0||c>=Ot||l>=Nt||h_(i,c,l)}}function d_(i,t,e){const n=Yl(t,e);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++){i.get(t+s,n,e+r)!==v.NETHERRACK&&i.set(t+s,n,e+r,v.NETHERRACK);for(let o=1;o<=4;o++)i.set(t+s,n+o,e+r,v.AIR)}for(const s of[-1,0,1])i.set(t+s,n+1,e,v.OBSIDIAN),i.set(t+s,n+4,e,v.OBSIDIAN);for(const s of[-1,1])i.set(t+s,n+2,e,v.OBSIDIAN),i.set(t+s,n+3,e,v.OBSIDIAN);return i.set(t,n+2,e,v.PORTAL),i.set(t,n+3,e,v.PORTAL),i.get(t+2,n+1,e+1)===v.AIR&&i.set(t+2,n+1,e+1,v.CHEST),n}class f_{constructor(){this.maxHealth=20,this.health=20,this.maxHunger=20,this.hunger=20,this.tier=0,this.dead=!1,this._hungerTimer=0,this._regenTimer=0,this._hungerInterval=30,this.damageMult=1,this.difficulty="normal",this.onDeath=null,this.onChange=null,this._inventory=null,this._itemRegistry=null}linkArmorSource(t,e){this._inventory=t,this._itemRegistry=e}setDifficulty(t,{resetVitals:e=!0}={}){var r;const n={easy:{maxHealth:30,hungerInterval:50,damageMult:.5},normal:{maxHealth:20,hungerInterval:30,damageMult:1},hard:{maxHealth:15,hungerInterval:20,damageMult:1.25}},s=n[t]??n.normal;this.difficulty=t in n?t:"normal",this.maxHealth=s.maxHealth,this._hungerInterval=s.hungerInterval,this.damageMult=s.damageMult,e?(this.health=s.maxHealth,this.hunger=this.maxHunger):this.health=Math.min(this.health,this.maxHealth),(r=this.onChange)==null||r.call(this)}update(t){var e;this.dead||(this._hungerTimer+=t,this._hungerTimer>=this._hungerInterval&&(this._hungerTimer=0,this.hunger=Math.max(0,this.hunger-1),this.hunger===0&&this.takeDamage(1)),this.hunger>14&&this.health<this.maxHealth&&(this._regenTimer+=t,this._regenTimer>=4&&(this._regenTimer=0,this.health=Math.min(this.maxHealth,this.health+1),(e=this.onChange)==null||e.call(this))))}takeDamage(t){var s,r;if(this.dead)return;const e=this._inventory?this._inventory.getArmorDefense(this._itemRegistry):0,n=Math.min(.8,e*.04);this.health=Math.max(0,this.health-t*this.damageMult*(1-n)),(s=this.onChange)==null||s.call(this),this.health<=0&&!this.dead&&(this.dead=!0,(r=this.onDeath)==null||r.call(this))}heal(t){var e;this.health=Math.min(this.maxHealth,this.health+t),(e=this.onChange)==null||e.call(this)}eat(t){var e;this.hunger=Math.min(this.maxHunger,this.hunger+t),(e=this.onChange)==null||e.call(this)}updateTier(t){const e=(t==null?void 0:t.tier)??0;e>this.tier&&(this.tier=e)}serialize(){return{health:this.health,hunger:this.hunger,tier:this.tier,difficulty:this.difficulty}}deserialize(t){var e;this.setDifficulty(t.difficulty??"normal",{resetVitals:!1}),this.health=t.health??this.maxHealth,this.hunger=t.hunger??20,this.tier=t.tier??0,this.dead=!1,(e=this.onChange)==null||e.call(this)}}const ds=["helmet","chestplate","leggings","boots"];class vo{constructor(){this.itemId=null,this.count=0,this.durability=null}}class u_{constructor(){this.HOTBAR_SIZE=9,this.TOTAL_SIZE=36,this.slots=Array.from({length:this.TOTAL_SIZE},()=>new vo),this.armor={};for(const t of ds)this.armor[t]=new vo;this.hotbarIndex=0,this._changeListeners=[],this.PIG_SIZE=9,this.pigSlots=Array.from({length:this.PIG_SIZE},()=>new vo)}equipArmor(t,e){const n=this.slots[t],s=e==null?void 0:e.getItem(n.itemId);if(!s||!s.armorSlot)return!1;const r=this.armor[s.armorSlot],o={itemId:r.itemId,count:r.count,durability:r.durability};return r.itemId=n.itemId,r.count=1,r.durability=n.durability,n.count--,n.count<=0&&(n.itemId=o.itemId,n.count=o.itemId?o.count:0,n.durability=o.durability),this._fireChange(),!0}unequipArmor(t,e){const n=this.armor[t];return!n.itemId||this.add(n.itemId,n.count,e)>0?!1:(n.itemId=null,n.count=0,n.durability=null,this._fireChange(),!0)}getArmorDefense(t){var n;let e=0;for(const s of ds){const r=this.armor[s].itemId;r&&(e+=((n=t==null?void 0:t.getItem(r))==null?void 0:n.defense)??0)}return e}addChangeListener(t){this._changeListeners.push(t)}_fireChange(){this._changeListeners.forEach(t=>t())}hotbarSlot(t){return this.slots[t]}get selectedSlot(){return this.slots[this.hotbarIndex]}add(t,e,n){var o;const s=((o=n==null?void 0:n.getItem(t))==null?void 0:o.stackSize)??64;let r=e;for(let a=0;a<this.TOTAL_SIZE&&r>0;a++){const c=this.slots[a];if(c.itemId===t&&c.count<s){const l=Math.min(r,s-c.count);c.count+=l,r-=l}}for(let a=0;a<this.TOTAL_SIZE&&r>0;a++){const c=this.slots[a];if(!c.itemId){const l=Math.min(r,s);c.itemId=t,c.count=l,r-=l}}return this._fireChange(),r}remove(t,e){let n=e;for(let s=0;s<this.TOTAL_SIZE&&n>0;s++){const r=this.slots[s];if(r.itemId===t){const o=Math.min(n,r.count);r.count-=o,n-=o,r.count===0&&(r.itemId=null,r.durability=null)}}this._fireChange()}countOf(t){let e=0;for(const n of this.slots)n.itemId===t&&(e+=n.count);return e}hasAll(t){for(const[e,n]of Object.entries(t))if(this.countOf(e)<n)return!1;return!0}removeSlot(t){const e=this.slots[t];e.itemId&&(e.count--,e.count===0&&(e.itemId=null,e.durability=null),this._fireChange())}damageTool(t,e=1,n){const s=this.slots[t];if(!s.itemId)return;const r=n==null?void 0:n.getItem(s.itemId);!r||!r.durability||(s.durability===null&&(s.durability=r.durability),s.durability-=e,s.durability<=0&&(s.itemId=null,s.count=0,s.durability=null),this._fireChange())}_slotRef(t){return typeof t=="number"?this.slots[t]:typeof t=="string"&&t[0]==="p"?this.pigSlots[parseInt(t.slice(1),10)]:null}swapSlots(t,e){const n=this._slotRef(t),s=this._slotRef(e);if(!n||!s)return;const r={itemId:n.itemId,count:n.count,durability:n.durability};n.itemId=s.itemId,n.count=s.count,n.durability=s.durability,s.itemId=r.itemId,s.count=r.count,s.durability=r.durability,this._fireChange()}serialize(){const t={};for(const e of ds)t[e]={itemId:this.armor[e].itemId,count:this.armor[e].count,durability:this.armor[e].durability};return{slots:this.slots.map(e=>({itemId:e.itemId,count:e.count,durability:e.durability})),armor:t,pigSlots:this.pigSlots.map(e=>({itemId:e.itemId,count:e.count,durability:e.durability}))}}deserialize(t){var r,o,a;const e=Array.isArray(t)?t:(t==null?void 0:t.slots)??[],n=Array.isArray(t)?null:t==null?void 0:t.armor;for(let c=0;c<Math.min(e.length,this.TOTAL_SIZE);c++)this.slots[c].itemId=e[c].itemId,this.slots[c].count=e[c].count,this.slots[c].durability=e[c].durability;if(n)for(const c of ds)this.armor[c].itemId=((r=n[c])==null?void 0:r.itemId)??null,this.armor[c].count=((o=n[c])==null?void 0:o.count)??0,this.armor[c].durability=((a=n[c])==null?void 0:a.durability)??null;const s=Array.isArray(t)?null:t==null?void 0:t.pigSlots;if(s)for(let c=0;c<Math.min(s.length,this.PIG_SIZE);c++)this.pigSlots[c].itemId=s[c].itemId,this.pigSlots[c].count=s[c].count,this.pigSlots[c].durability=s[c].durability;this._fireChange()}drainPigSlots(){const t=[];for(const e of this.pigSlots)e.itemId&&e.count>0&&t.push({itemId:e.itemId,count:e.count}),e.itemId=null,e.count=0,e.durability=null;return this._fireChange(),t}}const Di=new dn(0,0,0,"YXZ"),Oi=new N,p_={type:"change"},m_={type:"lock"},__={type:"unlock"},$c=Math.PI/2;class g_ extends _0{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=v_.bind(this),this._onPointerlockChange=y_.bind(this),this._onPointerlockError=x_.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Oi.setFromMatrixColumn(e.matrix,0),Oi.crossVectors(e.up,Oi),e.position.addScaledVector(Oi,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Oi.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Oi,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function v_(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;Di.setFromQuaternion(n.quaternion),Di.y-=t*.002*this.pointerSpeed,Di.x-=e*.002*this.pointerSpeed,Di.x=Math.max($c-this.maxPolarAngle,Math.min($c-this.minPolarAngle,Di.x)),n.quaternion.setFromEuler(Di),this.dispatchEvent(p_)}function y_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(m_),this.isLocked=!0):(this.dispatchEvent(__),this.isLocked=!1)}function x_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class S_{constructor(){this._ctx=null,this._sfxBus=null,this._musicBus=null,this._running=!1,this._beatIndex=0,this._musicTimeout=null,this._mineTimer=0}_init(){if(this._ctx)return;this._ctx=new(window.AudioContext||window.webkitAudioContext);const t=this._ctx.createGain();t.gain.value=this._volume??1,t.connect(this._ctx.destination),this._master=t,this._sfxBus=this._ctx.createGain(),this._sfxBus.gain.value=.8,this._sfxBus.connect(t),this._musicBus=this._ctx.createGain(),this._musicBus.gain.value=.22,this._musicBus.connect(t)}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this._muted=!1,this._master&&(this._master.gain.value=this._volume)}toggleMute(){return this._init(),this._muted=!this._muted,this._master&&(this._master.gain.value=this._muted?0:this._volume??1),!this._muted}playOink(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(180,e),n.frequency.exponentialRampToValueAtTime(90,e+.18);const s=t.createGain();s.gain.setValueAtTime(.35,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.22),this._noise(.12,400,.15)}_noise(t,e,n){const s=this._ctx,r=Math.floor(s.sampleRate*t),o=s.createBuffer(1,r,s.sampleRate),a=o.getChannelData(0);for(let d=0;d<r;d++)a[d]=Math.random()*2-1;const c=s.createBufferSource();c.buffer=o;const l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=1.2;const h=s.createGain();h.gain.setValueAtTime(n,s.currentTime),h.gain.exponentialRampToValueAtTime(.001,s.currentTime+t),c.connect(l),l.connect(h),h.connect(this._sfxBus),c.start()}playMine(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(35,e+.09);const s=t.createGain();s.gain.setValueAtTime(.45,e),s.gain.exponentialRampToValueAtTime(.001,e+.1),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.1),this._noise(.07,700,.28)}playBlockBreak(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(70,e),n.frequency.exponentialRampToValueAtTime(18,e+.22);const s=t.createGain();s.gain.setValueAtTime(.7,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),n.connect(s),s.connect(this._sfxBus),n.start(e),n.stop(e+.22),this._noise(.15,350,.5),this._noise(.07,1400,.18)}playStep(t="grass"){this._init();const e=this._ctx,n=e.currentTime;if(t==="stone"||t==="cobble"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(120,n),s.frequency.exponentialRampToValueAtTime(60,n+.04);const r=e.createGain();r.gain.setValueAtTime(.18,n),r.gain.exponentialRampToValueAtTime(.001,n+.06),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.06),this._noise(.05,1200,.09)}else if(t==="sand"||t==="gravel")this._noise(.09,600,.16),this._noise(.05,300,.09);else if(t==="wood"){const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(200,n),s.frequency.exponentialRampToValueAtTime(80,n+.06);const r=e.createGain();r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.001,n+.08),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.08)}else{const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(40,n+.07);const r=e.createGain();r.gain.setValueAtTime(.14,n),r.gain.exponentialRampToValueAtTime(.001,n+.1),s.connect(r),r.connect(this._sfxBus),s.start(n),s.stop(n+.1),this._noise(.06,800,.07)}}playHit(){this._init();const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(380,e),n.frequency.exponentialRampToValueAtTime(120,e+.1);const s=t.createWaveShaper(),r=new Float32Array(256);for(let a=0;a<256;a++){const c=a*2/256-1;r[a]=(Math.PI+40)*c/(Math.PI+40*Math.abs(c))}s.curve=r;const o=t.createGain();o.gain.setValueAtTime(.38,e),o.gain.exponentialRampToValueAtTime(.001,e+.13),n.connect(s),s.connect(o),o.connect(this._sfxBus),n.start(e),n.stop(e+.13),this._noise(.04,3500,.22)}startMusic(){this._init(),!this._running&&(this._running=!0,this._beatIndex=0,this._scheduleBeat())}stopMusic(){if(this._running=!1,clearTimeout(this._musicTimeout),this._ctx&&this._musicBus){const t=this._ctx.currentTime;this._musicBus.gain.linearRampToValueAtTime(0,t+1.5),setTimeout(()=>{this._musicBus&&(this._musicBus.gain.value=.22)},2e3)}}_kick(t){const e=this._ctx,n=e.createOscillator();n.frequency.setValueAtTime(180,t),n.frequency.exponentialRampToValueAtTime(28,t+.18);const s=e.createGain();s.gain.setValueAtTime(1.4,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(s),s.connect(this._musicBus),n.start(t),n.stop(t+.22)}_snare(t){const e=this._ctx,n=Math.floor(e.sampleRate*.18),s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let d=0;d<n;d++)r[d]=Math.random()*2-1;const o=e.createBufferSource();o.buffer=s;const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1800;const c=e.createGain();c.gain.setValueAtTime(.55,t),c.gain.exponentialRampToValueAtTime(.001,t+.18),o.connect(a),a.connect(c),c.connect(this._musicBus),o.start(t);const l=e.createOscillator();l.frequency.setValueAtTime(220,t),l.frequency.exponentialRampToValueAtTime(100,t+.06);const h=e.createGain();h.gain.setValueAtTime(.35,t),h.gain.exponentialRampToValueAtTime(.001,t+.06),l.connect(h),h.connect(this._musicBus),l.start(t),l.stop(t+.06)}_hihat(t,e=1){const n=this._ctx,s=Math.floor(n.sampleRate*.035),r=n.createBuffer(1,s,n.sampleRate),o=r.getChannelData(0);for(let h=0;h<s;h++)o[h]=Math.random()*2-1;const a=n.createBufferSource();a.buffer=r;const c=n.createBiquadFilter();c.type="highpass",c.frequency.value=9e3;const l=n.createGain();l.gain.setValueAtTime(.12*e,t),l.gain.exponentialRampToValueAtTime(.001,t+.035),a.connect(c),c.connect(l),l.connect(this._musicBus),a.start(t)}_bass(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="sawtooth",r.frequency.value=e;const o=s.createBiquadFilter();o.type="lowpass",o.frequency.value=400,o.Q.value=3;const a=s.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.9,t+.025),a.gain.linearRampToValueAtTime(.5,t+n*.6),a.gain.linearRampToValueAtTime(0,t+n),r.connect(o),o.connect(a),a.connect(this._musicBus),r.start(t),r.stop(t+n)}_pad(t,e,n){const s=this._ctx;for(const r of e)for(const o of[-6,0,6]){const a=s.createOscillator();a.type="sawtooth",a.frequency.value=r,a.detune.value=o;const c=s.createBiquadFilter();c.type="lowpass",c.frequency.value=1800;const l=s.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.045,t+.35),l.gain.linearRampToValueAtTime(.025,t+n*.8),l.gain.linearRampToValueAtTime(0,t+n),a.connect(c),c.connect(l),l.connect(this._musicBus),a.start(t),a.stop(t+n)}}_melody(t,e,n){const s=this._ctx,r=s.createOscillator();r.type="square",r.frequency.value=e;const o=s.createWaveShaper(),a=new Float32Array(64);for(let l=0;l<64;l++){const h=l*2/64-1;a[l]=Math.tanh(h*2.5)*.75}o.curve=a;const c=s.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.28,t+.02),c.gain.linearRampToValueAtTime(.18,t+n*.65),c.gain.linearRampToValueAtTime(0,t+n),r.connect(o),o.connect(c),c.connect(this._musicBus),r.start(t),r.stop(t+n)}_scheduleBeat(){if(!this._running)return;const e=this._ctx.currentTime,s=60/130,r=s*4,o=[{bass:73.42,pad:[146.83,174.61,220,293.66]},{bass:58.27,pad:[116.54,146.83,174.61,233.08]},{bass:87.31,pad:[174.61,220,261.63,349.23]},{bass:65.41,pad:[130.81,164.81,196,261.63]}],a=[587.33,0,523.25,493.88,440,493.88,440,392,440,0,493.88,523.25,587.33,523.25,440,392],c=Math.floor(this._beatIndex/4),l=this._beatIndex%4,h=o[c%o.length];(l===0||l===2)&&this._kick(e),(l===1||l===3)&&this._snare(e),this._hihat(e),this._hihat(e+s*.5,.5),l===0&&this._bass(e,h.bass,r),l===0&&this._pad(e,h.pad,r);const d=a[this._beatIndex%a.length];d&&this._melody(e,d,s*.75),this._beatIndex++,this._musicTimeout=setTimeout(()=>this._scheduleBeat(),(s-.02)*1e3)}}const $e=new S_;class M_{constructor(t,e,n,s,r,o,a,c,l,h,d){var g;this.camera=t,this.worldData=n,this.worldRenderer=s,this.stats=r,this.inventory=o,this.mining=a,this.farming=c,this.hotbar=l,this.hud=h,this.itemRegistry=d,this.controls=new g_(t,e.domElement),this._keys={},this._vy=0,this._onGround=!1,this._raycaster=new m0,this._raycaster.far=S0,this._mouseDown=!1,this._rightMouseDown=!1,this._currentStation="hand",this.onStationChange=null,this.targetBlock=null,this._bobTimer=0,this._prevBob=0,this._stepTimer=0,this._sprinting=!1,this._attackCooldown=0,this.mounted=!1,this.boat=null,this.onOpenChest=null,this.onSetSpawn=null,this.onOverflow=null,this.onPlanted=null,this.getDimension=()=>"overworld",this.scene=null,this._setupInputListeners(e);const u=Ot/2,f=Nt/2,_=((g=n.solidSurfaceY)==null?void 0:g.call(n,u,f))??n.surfaceY(u,f);t.position.set(u+.5,(_>=0?_:12)+1.8,f+.5)}lock(){this.controls.lock()}get isLocked(){return this.controls.isLocked}_setupInputListeners(t){window.addEventListener("keydown",e=>{this._keys[e.code]=!0;const n=parseInt(e.key);n>=1&&n<=9&&this.hotbar.select(n-1),e.code==="Space"&&this._onGround&&(this._vy=M0,this._onGround=!1),e.code==="KeyQ"&&this._dropHeldItem()}),window.addEventListener("keyup",e=>{this._keys[e.code]=!1}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousedown",e=>{if(this.controls.isLocked){if(e.button===0&&(e.altKey||e.metaKey)){this._handleRightClick();return}e.button===0&&(this._mouseDown=!0),e.button===2&&(e.preventDefault(),this._handleRightClick())}}),window.addEventListener("mouseup",e=>{e.button===0&&(this._mouseDown=!1,this.mining.cancelBreak())}),window.addEventListener("wheel",e=>{this.controls.isLocked&&this.hotbar.scroll(e.deltaY>0?1:-1)})}occupies(t,e,n){const s=Math.floor(this.camera.position.x),r=Math.floor(this.camera.position.z),o=Math.floor(this.camera.position.y-1.8),a=Math.floor(this.camera.position.y+.1);return t===s&&n===r&&e>=o&&e<=a}update(t){var y,T;if(!this.controls.isLocked)return;this._attackCooldown>0&&(this._attackCooldown-=t),this._sprinting=this._keys.ShiftLeft||this._keys.ShiftRight||this._keys.ControlLeft||this._keys.ControlRight;const e=E0*(this._sprinting?1.65:1)*(this.mounted?1.8:1);if(this.mounted&&this.boat){this._updateBoat(t,e),this._updateStation();return}const n=new N;this._keys.KeyW&&(n.z-=1),this._keys.KeyS&&(n.z+=1),this._keys.KeyA&&(n.x-=1),this._keys.KeyD&&(n.x+=1),n.normalize();const s=this.camera.position.x,r=this.camera.position.z;n.length()>0&&(this.controls.moveRight(n.x*e*t),this.controls.moveForward(-n.z*e*t));const o=Math.floor(this.camera.position.y-.6),a=Math.floor(this.camera.position.y-1.6),c=Math.floor(this.camera.position.x),l=Math.floor(this.camera.position.z),h=Math.floor(r);(this.worldData.isSolid(c,o,h)||this.worldData.isSolid(c,a,h))&&(this.camera.position.x=s),(this.worldData.isSolid(Math.floor(this.camera.position.x),o,l)||this.worldData.isSolid(Math.floor(this.camera.position.x),a,l))&&(this.camera.position.z=r);const d=Math.floor(this.camera.position.x),u=Math.floor(this.camera.position.z),f=Math.floor(this.camera.position.y-.5),_=Math.floor(this.camera.position.y-1.6),g=this.worldData.get(d,_,u)===v.WATER||this.worldData.get(d,f,u)===v.WATER,m=this.worldData.get(d,_,u)===v.LAVA||this.worldData.get(d,f,u)===v.LAVA;m&&this.stats.takeDamage(t*8),m?(this._vy=Math.max(this._vy-fs*t*.3,-1.2),this._keys.Space&&(this._vy=2)):g?(this._vy=Math.max(this._vy-fs*t*.3,-3),this._keys.Space&&(this._vy=4)):this._vy-=fs*t;const p=this.camera.position.y+this._vy*t,E=Math.floor(this.camera.position.y-1.8),S=Math.floor(p-1.8),b=(()=>{if(this._vy<=0){const H=Math.min(E,S),z=Math.max(E,S);for(let W=z;W>=H;W--)if(this.worldData.isSolid(d,W,u))return W}return-1})();if(b>=0)this._vy=0,this._onGround=!0,this.camera.position.y=b+1+1.8;else{const H=Math.floor(this.camera.position.y+.15),z=Math.floor(p+.15);let W=!1;if(this._vy>0){const J=Math.min(H,z),G=Math.max(H,z);for(let tt=J;tt<=G;tt++)if(this.worldData.isSolid(d,tt,u)){W=!0;break}}W?this._vy=0:(this._onGround=g,this.camera.position.y=Math.max(1.8,p))}if(this.camera.position.x=Math.max(.5,Math.min(Ot-.5,this.camera.position.x)),this.camera.position.z=Math.max(.5,Math.min(Nt-.5,this.camera.position.z)),this.camera.position.y<2){const H=Ot/2,z=Nt/2,W=((T=(y=this.worldData).solidSurfaceY)==null?void 0:T.call(y,H,z))??this.worldData.surfaceY(H,z);this.camera.position.set(H+.5,(W>=0?W:12)+1.8,z+.5),this._vy=0,this.stats.takeDamage(5),this.hud.showPickup("You fell through the world! (-5 hp)")}const O=this._getHeldItem();if(this._mouseDown){const H=this._raycastBlock();H?this.mining.beginBreak(H.blockPos):this.mining.cancelBreak()}this.mining.update(t,O)&&this.hud.setBreakProgress(0),this._mouseDown&&this.mining._breakingPos?this.hud.setBreakProgress(Math.min(1,this.mining._breakProgress/this.mining._breakDuration)):this._mouseDown||this.hud.setBreakProgress(0);const w=n.length()>0&&this._onGround;w?this._bobTimer+=t*(this._sprinting?14:9):this._bobTimer=0;const D=w?Math.sin(this._bobTimer)*.032:0;if(this.camera.position.y+=D-this._prevBob,this._prevBob=D,w&&(this._stepTimer-=t,this._stepTimer<=0)){this._stepTimer=this._sprinting?.28:.42;const H=Math.floor(this.camera.position.x),z=Math.floor(this.camera.position.z),W=Math.floor(this.camera.position.y-1.9),J=this.worldData.get(H,W,z),G={3:"stone",4:"cobble",7:"sand",15:"gravel",5:"wood",16:"wood",9:"stone"}[J]||"grass";$e.playStep(G)}const j=this._raycastBlock();this.targetBlock=j?j.blockPos:null,this._updateStation()}_raycastBlock(){this._raycaster.setFromCamera({x:0,y:0},this.camera);const t=this.worldRenderer.allMeshes,e=this._raycaster.intersectObjects(t);if(e.length===0)return null;const n=e[0],s=n.point,r=n.face.normal.clone(),o=this._raycaster.ray.direction,a=[Math.floor(s.x+o.x*.01),Math.floor(s.y+o.y*.01),Math.floor(s.z+o.z*.01)],c=a[0],l=a[1],h=a[2],d=s.x-c,u=s.y-l,f=s.z-h,_=[d*(o.x>0?.5:1),(1-d)*(o.x<0?.5:1),u*(o.y>0?.5:1),(1-u)*(o.y<0?.5:1),f*(o.z>0?.5:1),(1-f)*(o.z<0?.5:1)],g=[[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]],m=_.indexOf(Math.min(..._)),[p,E,S]=g[m],b=[c+p,l+E,h+S];return{blockPos:a,adjacentPos:b,normal:r}}_handleRightClick(){var s,r,o,a,c,l;const t=this._getHeldItem();if(this.mounted){this._dismountBoat();return}if(this.boat&&this._nearBoat(3)){this._mountBoat();return}if((t==null?void 0:t.category)==="food"&&this.stats.hunger<this.stats.maxHunger-1){this.stats.eat(t.foodValue),this.inventory.removeSlot(this.inventory.hotbarIndex),this.hud.showPickup(`Ate ${t.name}`);return}const e=this._raycastBlock();if(!e)return;if((t==null?void 0:t.id)==="summoning_stone"){const[h,d,u]=e.blockPos;if(this.worldData.get(h,d,u)===v.ALTAR){(s=this.onUseAltarWithStone)==null||s.call(this),this.inventory.remove("summoning_stone",1);return}this.hud.showPickup("Right-click the Altar in the swamp to use this!");return}if(t!=null&&t.isHoe&&this.mining.tillBlock(e.blockPos)){const d=this.inventory.hotbarIndex;this.inventory.damageTool(d,1,this.itemRegistry);return}if((t==null?void 0:t.category)==="seed"){if(this.farming.plant(t.id,e.blockPos,this.inventory,this.itemRegistry))return;this.farming.plant(t.id,e.adjacentPos,this.inventory,this.itemRegistry);return}const n=this.farming.tryHarvest(e.blockPos);if(n){this._give(n.itemId,n.count),n.seedCount>0&&this._give(n.seedItem,n.seedCount),this.hud.showPickup(((r=this.itemRegistry.getItem(n.itemId))==null?void 0:r.name)??n.itemId);return}{const[h,d,u]=e.blockPos;if(this.worldData.get(h,d,u)===v.CHEST){(o=this.onOpenChest)==null||o.call(this,h,d,u);return}}{const[h,d,u]=e.blockPos;if(this.worldData.get(h,d,u)===v.BED){(a=this.onSetSpawn)==null||a.call(this,{x:h+.5,y:d+1.8,z:u+.5}),(c=this.onSleepInBed)==null||c.call(this);return}}{const[h,d,u]=e.blockPos;if(this.worldData.get(h,d,u)===v.PORTAL){(l=this.onUsePortal)==null||l.call(this);return}}if(t!=null&&t.isBoat){const[h,d,u]=e.adjacentPos;if(this.worldData.get(h,d,u)===v.WATER||this.worldData.get(h,d-1,u)===v.WATER){this._placeBoat(h+.5,(this.worldData.get(h,d,u)===v.WATER?d:d-1)+.2,u+.5),this.inventory.removeSlot(this.inventory.hotbarIndex);return}}(t==null?void 0:t.blockId)>=0&&this.mining.placeBlock(e.adjacentPos,t.blockId)&&this.inventory.removeSlot(this.inventory.hotbarIndex)}_give(t,e){var s;const n=this.inventory.add(t,e,this.itemRegistry);n>0&&((s=this.onOverflow)==null||s.call(this,t,n))}_placeBoat(t,e,n){var a;this._removeBoatMesh();const s=new _n(1.6,.25,1.1),r=new gs({color:9132587}),o=new ye(s,r);o.position.set(t,e,n),(a=this.scene)==null||a.add(o),this.boat={mesh:o,x:t,y:e,z:n},this.hud.showPickup("Raft placed — right-click it to hop on")}_removeBoatMesh(){var t;this.boat&&((t=this.scene)==null||t.remove(this.boat.mesh),this.boat.mesh.geometry.dispose(),this.boat.mesh.material.dispose(),this.boat=null,this.mounted=!1)}_nearBoat(t){if(!this.boat)return!1;const e=this.camera.position,n=this.boat.mesh.position;return Math.hypot(e.x-n.x,e.z-n.z)<t}_mountBoat(){this.mounted=!0,this._vy=0,this.hud.showPickup("Sailing — Space to hop off")}_dismountBoat(){this.mounted=!1,this.camera.position.y+=.6,this.hud.showPickup("You hop off the raft")}_updateBoat(t,e){const n=new N;if(this._keys.KeyW&&(n.z-=1),this._keys.KeyS&&(n.z+=1),this._keys.KeyA&&(n.x-=1),this._keys.KeyD&&(n.x+=1),this._keys.Space){this._dismountBoat();return}n.normalize(),n.length()>0&&(this.controls.moveRight(n.x*e*t),this.controls.moveForward(-n.z*e*t));const s=Math.floor(this.camera.position.x),r=Math.floor(this.camera.position.z);let o=-1;for(let a=le-1;a>=0;a--)if(this.worldData.get(s,a,r)===v.WATER){o=a;break}if(o<0){this._dismountBoat();return}this.camera.position.y=o+1.5,this.camera.position.x=Math.max(.5,Math.min(Ot-.5,this.camera.position.x)),this.camera.position.z=Math.max(.5,Math.min(Nt-.5,this.camera.position.z)),this.boat&&this.boat.mesh.position.set(this.camera.position.x,o+.2,this.camera.position.z)}_getHeldItem(){const t=this.inventory.selectedSlot;return t.itemId?this.itemRegistry.getItem(t.itemId):null}_dropHeldItem(){var s;if(!this.controls.isLocked)return;const t=this.inventory.selectedSlot;if(!t.itemId)return;const e=new N;this.camera.getWorldDirection(e);const n=this.camera.position.clone().add(e.multiplyScalar(1.5));n.y-=1,(s=this.onDropItem)==null||s.call(this,t.itemId,1,n),this.inventory.removeSlot(this.inventory.hotbarIndex)}_updateStation(){var r;const t=Math.floor(this.camera.position.x),e=Math.floor(this.camera.position.y-1.8),n=Math.floor(this.camera.position.z);let s="hand";for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)for(let c=-1;c<=1;c++){const l=this.worldData.get(t+o,e+c,n+a);l===v.CAMPFIRE&&s==="hand"&&(s="campfire"),l===v.CRAFTING_TABLE&&(s==="hand"||s==="campfire")&&(s="crafting_table"),l===v.FORGE&&(s="forge")}s!==this._currentStation&&(this._currentStation=s,(r=this.onStationChange)==null||r.call(this,s))}get currentStation(){return this._currentStation}attackMob(t,e){t.takeDamage(e)}setupAttackListener(t){window.addEventListener("mousedown",e=>{if(!this.controls.isLocked||e.button!==0||this._attackCooldown>0)return;const n=this._getHeldItem(),s=n!=null&&n.isSword||n!=null&&n.isAxe?n.damage:1.5,r=t(),o=this.camera.position;for(const a of r)if(!a.dead&&a.position.distanceTo(o)<4){a.takeDamage(s),this._attackCooldown=.4,n&&this.stats.updateTier(n);break}})}}class E_{constructor({id:t,name:e,category:n,tier:s=0,stackSize:r=64,damage:o=0,durability:a=0,foodValue:c=0,blockId:l=-1,isHoe:h=!1,isAxe:d=!1,isSword:u=!1,isPickaxe:f=!1,isShovel:_=!1,isBoat:g=!1,armorSlot:m=null,defense:p=0}){this.id=t,this.name=e,this.category=n,this.tier=s,this.stackSize=r,this.damage=o,this.durability=a,this.foodValue=c,this.blockId=l,this.isHoe=h,this.isAxe=d,this.isSword=u,this.isPickaxe=f,this.isShovel=_,this.isBoat=g,this.armorSlot=m,this.defense=p}}const T_=[{id:"wood_log",name:"Wood Log",category:"block",stackSize:64,blockId:5},{id:"cobblestone",name:"Cobblestone",category:"block",stackSize:64,blockId:4},{id:"dirt",name:"Dirt",category:"block",stackSize:64,blockId:2},{id:"sand",name:"Sand",category:"block",stackSize:64,blockId:7},{id:"gravel",name:"Gravel",category:"block",stackSize:64,blockId:15},{id:"planks",name:"Wood Planks",category:"block",stackSize:64,blockId:16},{id:"glass",name:"Glass",category:"block",stackSize:64,blockId:17},{id:"crafting_table",name:"Crafting Table",category:"block",stackSize:1,blockId:11},{id:"forge",name:"Forge",category:"block",stackSize:1,blockId:12},{id:"chest",name:"Chest",category:"block",stackSize:1,blockId:18},{id:"campfire",name:"Campfire",category:"block",stackSize:1,blockId:20},{id:"bed",name:"Bed",category:"block",stackSize:1,blockId:21},{id:"obsidian",name:"Obsidian",category:"block",stackSize:64,blockId:25},{id:"nether_portal",name:"Nether Portal",category:"block",stackSize:1,blockId:26},{id:"netherrack",name:"Netherrack",category:"block",stackSize:64,blockId:22},{id:"glowstone",name:"Glowstone",category:"block",stackSize:64,blockId:24},{id:"coral",name:"Coral",category:"block",stackSize:64,blockId:27},{id:"kelp",name:"Kelp",category:"block",stackSize:64,blockId:28},{id:"tall_grass",name:"Tall Grass",category:"misc",stackSize:64},{id:"flower",name:"Flower",category:"misc",stackSize:64},{id:"iron_ore",name:"Iron Ore",category:"misc",stackSize:64},{id:"iron_ingot",name:"Iron Ingot",category:"misc",stackSize:64},{id:"crystal_shard",name:"Crystal Shard",category:"misc",stackSize:64},{id:"stick",name:"Stick",category:"misc",stackSize:64},{id:"torch",name:"Torch",category:"block",stackSize:64,blockId:19},{id:"boat",name:"Raft",category:"misc",stackSize:1,isBoat:!0},{id:"string",name:"String",category:"misc",stackSize:64},{id:"bone",name:"Bone",category:"misc",stackSize:64},{id:"troll_fang",name:"Troll Fang",category:"misc",stackSize:1},{id:"witch_eye",name:"Witch's Eye",category:"misc",stackSize:1},{id:"golem_core",name:"Golem Core",category:"misc",stackSize:1},{id:"summoning_stone",name:"Summoning Stone",category:"misc",stackSize:1},{id:"wheat_seed",name:"Wheat Seed",category:"seed",stackSize:64},{id:"wheat",name:"Wheat",category:"food",stackSize:64,foodValue:2},{id:"bread",name:"Bread",category:"food",stackSize:16,foodValue:5},{id:"carrot_seed",name:"Carrot Seed",category:"seed",stackSize:64},{id:"carrot",name:"Carrot",category:"food",stackSize:64,foodValue:3},{id:"potato_seed",name:"Potato",category:"seed",stackSize:64},{id:"baked_potato",name:"Baked Potato",category:"food",stackSize:16,foodValue:5},{id:"cooked_meat",name:"Cooked Meat",category:"food",stackSize:16,foodValue:8},{id:"raw_meat",name:"Raw Meat",category:"food",stackSize:16,foodValue:2},{id:"raw_fish",name:"Raw Fish",category:"food",stackSize:16,foodValue:2},{id:"cooked_fish",name:"Cooked Fish",category:"food",stackSize:16,foodValue:6},{id:"wooden_axe",name:"Wooden Axe",category:"tool",tier:1,stackSize:1,damage:2.5,durability:60,isAxe:!0},{id:"wooden_pickaxe",name:"Wooden Pickaxe",category:"tool",tier:1,stackSize:1,damage:2,durability:60,isPickaxe:!0},{id:"wooden_hoe",name:"Wooden Hoe",category:"tool",tier:1,stackSize:1,damage:1,durability:60,isHoe:!0},{id:"wooden_shovel",name:"Wooden Shovel",category:"tool",tier:1,stackSize:1,damage:1.5,durability:60,isShovel:!0},{id:"wooden_sword",name:"Wooden Sword",category:"weapon",tier:1,stackSize:1,damage:4,durability:60,isSword:!0},{id:"stone_axe",name:"Stone Axe",category:"tool",tier:2,stackSize:1,damage:3.5,durability:130,isAxe:!0},{id:"stone_pickaxe",name:"Stone Pickaxe",category:"tool",tier:2,stackSize:1,damage:3,durability:130,isPickaxe:!0},{id:"stone_hoe",name:"Stone Hoe",category:"tool",tier:2,stackSize:1,damage:1.5,durability:130,isHoe:!0},{id:"stone_shovel",name:"Stone Shovel",category:"tool",tier:2,stackSize:1,damage:2.5,durability:130,isShovel:!0},{id:"stone_sword",name:"Stone Sword",category:"weapon",tier:2,stackSize:1,damage:5,durability:130,isSword:!0},{id:"iron_axe",name:"Iron Axe",category:"tool",tier:3,stackSize:1,damage:5,durability:250,isAxe:!0},{id:"iron_pickaxe",name:"Iron Pickaxe",category:"tool",tier:3,stackSize:1,damage:4.5,durability:250,isPickaxe:!0},{id:"iron_hoe",name:"Iron Hoe",category:"tool",tier:3,stackSize:1,damage:2,durability:250,isHoe:!0},{id:"iron_shovel",name:"Iron Shovel",category:"tool",tier:3,stackSize:1,damage:3.5,durability:250,isShovel:!0},{id:"iron_sword",name:"Iron Sword",category:"weapon",tier:3,stackSize:1,damage:7,durability:250,isSword:!0},{id:"crystal_axe",name:"Crystal Axe",category:"tool",tier:4,stackSize:1,damage:7,durability:500,isAxe:!0},{id:"crystal_pickaxe",name:"Crystal Pickaxe",category:"tool",tier:4,stackSize:1,damage:6.5,durability:500,isPickaxe:!0},{id:"crystal_shovel",name:"Crystal Shovel",category:"tool",tier:4,stackSize:1,damage:5.5,durability:500,isShovel:!0},{id:"crystal_sword",name:"Crystal Sword",category:"weapon",tier:4,stackSize:1,damage:12,durability:500,isSword:!0},{id:"wooden_helmet",name:"Wooden Helmet",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"helmet",defense:1},{id:"wooden_chestplate",name:"Wooden Chestplate",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"chestplate",defense:2},{id:"wooden_leggings",name:"Wooden Leggings",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"leggings",defense:2},{id:"wooden_boots",name:"Wooden Boots",category:"armor",tier:1,stackSize:1,durability:60,armorSlot:"boots",defense:1},{id:"stone_helmet",name:"Stone Helmet",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"helmet",defense:1},{id:"stone_chestplate",name:"Stone Chestplate",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"chestplate",defense:3},{id:"stone_leggings",name:"Stone Leggings",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"leggings",defense:3},{id:"stone_boots",name:"Stone Boots",category:"armor",tier:2,stackSize:1,durability:130,armorSlot:"boots",defense:2},{id:"iron_helmet",name:"Iron Helmet",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"helmet",defense:2},{id:"iron_chestplate",name:"Iron Chestplate",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"chestplate",defense:4},{id:"iron_leggings",name:"Iron Leggings",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"leggings",defense:4},{id:"iron_boots",name:"Iron Boots",category:"armor",tier:3,stackSize:1,durability:250,armorSlot:"boots",defense:2},{id:"crystal_helmet",name:"Crystal Helmet",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"helmet",defense:3},{id:"crystal_chestplate",name:"Crystal Chestplate",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"chestplate",defense:6},{id:"crystal_leggings",name:"Crystal Leggings",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"leggings",defense:5},{id:"crystal_boots",name:"Crystal Boots",category:"armor",tier:4,stackSize:1,durability:500,armorSlot:"boots",defense:3}];class b_{constructor(){this._db=new Map;for(const t of T_)this._db.set(t.id,new E_(t))}getItem(t){return this._db.get(t)??null}all(){return[...this._db.values()]}}class bt{constructor(t,e,n,s,r,o,a=[]){this.id=t,this.ingredients=e,this.resultItem=n,this.resultCount=s,this.station=r,this.requiredTier=o,this.killedBosses=a}}const ir=["hand","campfire","crafting_table","forge"],A_=[new bt("planks",{wood_log:1},"planks",4,"hand",0),new bt("stick",{planks:1},"stick",4,"hand",0),new bt("crafting_table",{planks:4},"crafting_table",1,"hand",0),new bt("campfire",{wood_log:3},"campfire",1,"hand",0),new bt("bread",{wheat:3},"bread",1,"hand",0),new bt("cooked_meat",{raw_meat:1},"cooked_meat",1,"campfire",0),new bt("cooked_fish",{raw_fish:1},"cooked_fish",1,"campfire",0),new bt("baked_potato",{potato_seed:1},"baked_potato",1,"campfire",0),new bt("wooden_axe",{planks:3,stick:2},"wooden_axe",1,"crafting_table",0),new bt("wooden_pickaxe",{planks:3,stick:2},"wooden_pickaxe",1,"crafting_table",0),new bt("wooden_hoe",{planks:2,stick:2},"wooden_hoe",1,"crafting_table",0),new bt("wooden_shovel",{planks:1,stick:2},"wooden_shovel",1,"crafting_table",0),new bt("wooden_sword",{planks:2,stick:1},"wooden_sword",1,"crafting_table",0),new bt("stone_axe",{cobblestone:3,stick:2},"stone_axe",1,"crafting_table",1),new bt("stone_pickaxe",{cobblestone:3,stick:2},"stone_pickaxe",1,"crafting_table",1),new bt("stone_hoe",{cobblestone:2,stick:2},"stone_hoe",1,"crafting_table",1),new bt("stone_shovel",{cobblestone:1,stick:2},"stone_shovel",1,"crafting_table",1),new bt("stone_sword",{cobblestone:2,stick:1},"stone_sword",1,"crafting_table",1),new bt("iron_axe",{iron_ingot:3,stick:2},"iron_axe",1,"crafting_table",2),new bt("iron_pickaxe",{iron_ingot:3,stick:2},"iron_pickaxe",1,"crafting_table",2),new bt("iron_hoe",{iron_ingot:2,stick:2},"iron_hoe",1,"crafting_table",2),new bt("iron_shovel",{iron_ingot:1,stick:2},"iron_shovel",1,"crafting_table",2),new bt("iron_sword",{iron_ingot:2,stick:1},"iron_sword",1,"crafting_table",2),new bt("glass",{sand:1},"glass",1,"crafting_table",0),new bt("chest",{planks:8},"chest",1,"crafting_table",0),new bt("bed",{planks:3,string:3},"bed",1,"crafting_table",0),new bt("torch",{stick:1},"torch",4,"hand",0),new bt("boat",{planks:5},"boat",1,"crafting_table",0),new bt("forge",{cobblestone:8,iron_ingot:1},"forge",1,"crafting_table",1),new bt("iron_ingot",{iron_ore:1},"iron_ingot",1,"forge",0),new bt("crystal_axe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_axe",1,"forge",3),new bt("crystal_pickaxe",{crystal_shard:3,iron_ingot:1,stick:2},"crystal_pickaxe",1,"forge",3),new bt("crystal_shovel",{crystal_shard:1,iron_ingot:1,stick:2},"crystal_shovel",1,"forge",3),new bt("crystal_sword",{crystal_shard:2,iron_ingot:1},"crystal_sword",1,"forge",3),new bt("wooden_helmet",{planks:5},"wooden_helmet",1,"crafting_table",0),new bt("wooden_chestplate",{planks:8},"wooden_chestplate",1,"crafting_table",0),new bt("wooden_leggings",{planks:7},"wooden_leggings",1,"crafting_table",0),new bt("wooden_boots",{planks:4},"wooden_boots",1,"crafting_table",0),new bt("stone_helmet",{cobblestone:5},"stone_helmet",1,"crafting_table",1),new bt("stone_chestplate",{cobblestone:8},"stone_chestplate",1,"crafting_table",1),new bt("stone_leggings",{cobblestone:7},"stone_leggings",1,"crafting_table",1),new bt("stone_boots",{cobblestone:4},"stone_boots",1,"crafting_table",1),new bt("iron_helmet",{iron_ingot:5},"iron_helmet",1,"crafting_table",2),new bt("iron_chestplate",{iron_ingot:8},"iron_chestplate",1,"crafting_table",2),new bt("iron_leggings",{iron_ingot:7},"iron_leggings",1,"crafting_table",2),new bt("iron_boots",{iron_ingot:4},"iron_boots",1,"crafting_table",2),new bt("crystal_helmet",{crystal_shard:3,iron_ingot:2},"crystal_helmet",1,"forge",3),new bt("crystal_chestplate",{crystal_shard:6,iron_ingot:2},"crystal_chestplate",1,"forge",3),new bt("crystal_leggings",{crystal_shard:5,iron_ingot:2},"crystal_leggings",1,"forge",3),new bt("crystal_boots",{crystal_shard:3,iron_ingot:1},"crystal_boots",1,"forge",3),new bt("obsidian",{cobblestone:4,crystal_shard:2},"obsidian",1,"forge",3),new bt("nether_portal",{obsidian:4},"nether_portal",1,"forge",3),new bt("summoning_stone",{troll_fang:1,witch_eye:1,golem_core:1},"summoning_stone",1,"forge",3,["cave_troll","swamp_witch","stone_golem"])];class w_{constructor(){this.recipes=A_}getAvailable(t,e,n,s=new Set){const r=ir.indexOf(e);return this.recipes.filter(o=>{if(ir.indexOf(o.station)>r||o.requiredTier>n)return!1;for(const c of o.killedBosses)if(!s.has(c))return!1;return t.hasAll(o.ingredients)})}getAllVisible(t,e,n,s=new Set){const r=ir.indexOf(e);return this.recipes.filter(o=>{if(ir.indexOf(o.station)>r||o.requiredTier>n)return!1;for(const c of o.killedBosses)if(!s.has(c))return!1;return!0})}craft(t,e,n){if(!e.hasAll(t.ingredients))return!1;for(const[r,o]of Object.entries(t.ingredients))e.remove(r,o);const s=e.add(t.resultItem,t.resultCount,n);return s===0?!0:s}}class R_{constructor(t,e,n,s,r){this.worldData=t,this.worldRenderer=e,this.inventory=n,this.stats=s,this.itemRegistry=r,this._breakingPos=null,this._breakProgress=0,this._breakDuration=0,this._mineSoundTimer=0,this.onBreakProgress=null,this.onPickup=null,this.onOverflow=null,this.onBroke=null,this.isOccupied=null,this.removeCropAt=null}beginBreak(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r===v.AIR)return;const o=fi[r];!o||o.hardness===999||this._breakingPos&&this._breakingPos[0]===e&&this._breakingPos[1]===n&&this._breakingPos[2]===s||(this._breakingPos=[e,n,s],this._breakProgress=0,this._breakDuration=Math.max(.15,o.hardness*.6),this._mineSoundTimer=0)}cancelBreak(){var t;this._breakingPos=null,this._breakProgress=0,(t=this.onBreakProgress)==null||t.call(this,0)}update(t,e){var h;if(!this._breakingPos)return!1;const[n,s,r]=this._breakingPos,o=this.worldData.get(n,s,r);if(o===v.AIR)return this.cancelBreak(),!1;const a=fi[o],c=this._toolSpeedMult(e,a);this._breakProgress+=t*c,this._mineSoundTimer-=t,this._mineSoundTimer<=0&&($e.playMine(),this._mineSoundTimer=.3);const l=Math.min(1,this._breakProgress/this._breakDuration);return(h=this.onBreakProgress)==null||h.call(this,l),this._breakProgress>=this._breakDuration?(this._completeBreak(n,s,r,a,e),!0):!1}_toolSpeedMult(t,e){if(!t)return e.minTier===0?1:.2;const n=t.tier-e.minTier;return n<0?.3:1+n*.5}_completeBreak(t,e,n,s,r){var h,d,u,f,_;this.worldData.set(t,e,n,v.AIR),(h=this.removeCropAt)==null||h.call(this,[t,e,n]),(d=this.removeCropAt)==null||d.call(this,[t,e-1,n]);const o=Math.floor(t/de),a=Math.floor(n/de);this.worldRenderer.rebuildChunk(o,a),this.cancelBreak();try{$e.playBlockBreak()}catch(g){console.error("playBlockBreak failed:",g)}const c=s.dropItem===null?s.name:s.dropItem,l=this.itemRegistry.getItem(c);if(l)try{const g=this.inventory.add(c,s.dropCount,this.itemRegistry);g>0&&((u=this.onOverflow)==null||u.call(this,c,g)),(f=this.onPickup)==null||f.call(this,l.name),(_=this.onBroke)==null||_.call(this,s,c)}catch(g){console.error("Failed to add mined item to inventory:",g)}if(r&&r.durability>0){const g=this._findHotbarIndex(r);if(g!==-1)try{this.inventory.damageTool(g,1,this.itemRegistry)}catch(m){console.error("Failed to damage tool:",m)}}}_findHotbarIndex(t){for(let e=0;e<9;e++)if(this.inventory.slots[e].itemId===t.id)return e;return-1}placeBlock(t,e){var c;const[n,s,r]=t;if(!this.worldData.inBounds(n,s,r)||this.worldData.get(n,s,r)!==v.AIR||(c=this.isOccupied)!=null&&c.call(this,n,s,r))return!1;this.worldData.set(n,s,r,e);const o=Math.floor(n/de),a=Math.floor(r/de);return this.worldRenderer.rebuildChunk(o,a),!0}tillBlock(t){const[e,n,s]=t,r=this.worldData.get(e,n,s);if(r!==v.GRASS&&r!==v.DIRT)return!1;this.worldData.set(e,n,s,v.FARMLAND);const o=Math.floor(e/de),a=Math.floor(s/de);return this.worldRenderer.rebuildChunk(o,a),!0}}class yo{constructor({id:t,name:e,seedItem:n,harvestItem:s,harvestCount:r,seedDrop:o=1,growthTime:a,stages:c=4}){this.id=t,this.name=e,this.seedItem=n,this.harvestItem=s,this.harvestCount=r,this.seedDrop=o,this.growthTime=a,this.stages=c,this.stageColors=["#8b7a1a","#aaaa22","#88cc44","#44aa22"]}}const ql={wheat:new yo({id:"wheat",name:"Wheat",seedItem:"wheat_seed",harvestItem:"wheat",harvestCount:2,seedDrop:1,growthTime:25}),carrot:new yo({id:"carrot",name:"Carrot",seedItem:"carrot_seed",harvestItem:"carrot",harvestCount:1,seedDrop:1,growthTime:35}),potato:new yo({id:"potato",name:"Potato",seedItem:"potato_seed",harvestItem:"potato_seed",harvestCount:2,seedDrop:0,growthTime:40})};function C_(i){return Object.values(ql).find(t=>t.seedItem===i)??null}class Zc{constructor(t,e,n){this.cropType=t,this.worldPos=e,this.stage=0,this.timer=0;const s=new di(.6,.6),r=new ci({color:t.stageColors[0],side:He});this.mesh=new ye(s,r),this.mesh.rotation.y=Math.PI/4,this.mesh.position.set(e[0]+.5,e[1]+.8,e[2]+.5),n.add(this.mesh)}updateVisual(){this.mesh.material.color.set(this.cropType.stageColors[Math.min(this.stage,3)]);const t=.4+this.stage*.2;this.mesh.scale.setScalar(t),this.mesh.position.y=this.worldPos[1]+.4+this.stage*.15}}class P_{constructor(t,e){this.worldData=t,this.scene=e,this._crops=[],this.onHarvest=null,this.onPlant=null}plant(t,e,n,s){var h;const[r,o,a]=e;if(this.worldData.get(r,o,a)!==v.FARMLAND||this.worldData.get(r,o+1,a)!==v.AIR)return!1;const c=C_(t);if(!c||this._crops.some(d=>d.worldPos[0]===r&&d.worldPos[2]===a))return!1;n.remove(t,1);const l=new Zc(c,[r,o,a],this.scene);return this._crops.push(l),(h=this.onPlant)==null||h.call(this,t),!0}update(t){for(const e of this._crops)e.stage>=e.cropType.stages-1||(e.timer+=t,e.timer>=e.cropType.growthTime&&(e.timer=0,e.stage++,e.updateVisual()))}tryHarvest(t){const[e,n,s]=t,r=this._crops.findIndex(a=>a.worldPos[0]===e&&a.worldPos[2]===s);if(r===-1)return null;const o=this._crops[r];return o.stage<o.cropType.stages-1?null:(this.scene.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),this._crops.splice(r,1),{itemId:o.cropType.harvestItem,count:o.cropType.harvestCount,seedItem:o.cropType.seedItem,seedCount:o.cropType.seedDrop??0})}removeCropAt(t){const e=this._crops.findIndex(s=>s.worldPos[0]===t[0]&&s.worldPos[2]===t[2]);if(e===-1)return;const n=this._crops[e];this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this._crops.splice(e,1)}setVisible(t){for(const e of this._crops)e.mesh.visible=t}serialize(){return this._crops.map(t=>({id:t.cropType.id,pos:t.worldPos,stage:t.stage,timer:t.timer}))}deserialize(t,e){for(const n of this._crops)this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();if(this._crops=[],!!t)for(const n of t){const s=ql[n.id];if(!s)continue;const r=new Zc(s,n.pos,e??this.scene);r.stage=n.stage??0,r.timer=n.timer??0,r.updateVisual(),this._crops.push(r)}}}const sr=[0,.12,.4,.48].map(i=>i/.5),jc=[.55,.95].map(i=>(i-.5)/.5),xo=[[sr[0]*an,.7,.45,.2],[sr[1]*an,.5,.7,1],[sr[2]*an,.35,.6,.95],[sr[3]*an,.65,.4,.2],[an+jc[0]*(1-an),.04,.04,.12],[an+jc[1]*(1-an),.04,.04,.12],[1,.7,.45,.2]];function L_(i){for(let t=0;t<xo.length-1;t++){const[e,n,s,r]=xo[t],[o,a,c,l]=xo[t+1];if(i>=e&&i<=o){const h=(i-e)/(o-e);return{r:n+h*(a-n),g:s+h*(c-s),b:r+h*(l-r)}}}return{r:.5,g:.7,b:1}}class I_{constructor(t,e,n){this.scene=t,this.ambient=e,this.dirLight=n,this.timeOfDay=.05,this.dayNumber=1,this._wasNight=!1,this.onNightBegin=null,this.onDayBegin=null}update(t){var l,h;this.timeOfDay=(this.timeOfDay+t/v0)%1;const{r:e,g:n,b:s}=L_(this.timeOfDay);this.scene.background=new kt(e,n,s),this.scene.fog=new _s(new kt(e,n,s),.007);const r=this.timeOfDay>=an,o=an/2,a=r?.08:.6+(1-Math.abs(this.timeOfDay-o)/o)*.4;this.ambient.intensity=Math.max(.06,a);const c=this.timeOfDay*Math.PI*2;this.dirLight.position.set(Math.cos(c)*30,Math.sin(c)*30,15),this.dirLight.intensity=r?0:.8,r&&!this._wasNight?(l=this.onNightBegin)==null||l.call(this):!r&&this._wasNight&&(this.dayNumber++,(h=this.onDayBegin)==null||h.call(this,this.dayNumber)),this._wasNight=r}get isNight(){return this.timeOfDay>=an}}class En{constructor({id:t,name:e,color:n,health:s,damage:r,speed:o,detectionRange:a,attackRange:c,attackCooldown:l,scale:h=[1,1.8,1],dropItems:d=[]}){this.id=t,this.name=e,this.color=n,this.health=s,this.damage=r,this.speed=o,this.detectionRange=a,this.attackRange=c,this.attackCooldown=l,this.scale=h,this.dropItems=d}}const vs={zombie:new En({id:"zombie",name:"Zombie",color:"#2d5e2d",health:10,damage:2,speed:2.5,detectionRange:18,attackRange:1.8,attackCooldown:1.5,dropItems:[{itemId:"raw_meat",chance:.7,count:1}]}),skeleton:new En({id:"skeleton",name:"Skeleton",color:"#ccccaa",health:8,damage:1.5,speed:2.8,detectionRange:22,attackRange:1.5,attackCooldown:1.2,dropItems:[{itemId:"bone",chance:.8,count:1},{itemId:"string",chance:.4,count:1}]}),spider:new En({id:"spider",name:"Spider",color:"#1a0a0a",health:6,damage:2.5,speed:4,detectionRange:16,attackRange:2,attackCooldown:.8,scale:[1.4,.8,1.4],dropItems:[{itemId:"string",chance:.9,count:2}]}),cow:new En({id:"cow",name:"Cow",color:"#8B4513",health:10,damage:0,speed:1.8,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1.2,1,1.2],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),pig:new En({id:"pig",name:"Pig",color:"#FFB6C1",health:8,damage:0,speed:2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.8,1],dropItems:[{itemId:"raw_meat",chance:1,count:2}]}),sheep:new En({id:"sheep",name:"Sheep",color:"#E8E8E8",health:8,damage:0,speed:1.9,detectionRange:0,attackRange:0,attackCooldown:999,scale:[1,.9,1],dropItems:[{itemId:"raw_meat",chance:1,count:1}]}),chicken:new En({id:"chicken",name:"Chicken",color:"#FFFFFF",health:4,damage:0,speed:2.2,detectionRange:0,attackRange:0,attackCooldown:999,scale:[.6,.7,.6],dropItems:[{itemId:"raw_meat",chance:.8,count:1}]}),fish:new En({id:"fish",name:"Fish",color:"#ff8c1a",health:2,damage:0,speed:1.6,detectionRange:0,attackRange:0,attackCooldown:999,scale:[.6,.42,1.05],dropItems:[{itemId:"raw_fish",chance:1,count:1}]}),shark:new En({id:"shark",name:"Shark",color:"#e8ecef",health:14,damage:3,speed:3.2,detectionRange:12,attackRange:1.8,attackCooldown:1.3,scale:[.9,.7,2.2],dropItems:[{itemId:"raw_fish",chance:.6,count:1},{itemId:"bone",chance:.3,count:1}]})};function xt(i,t,e,n){return new ye(new _n(i,t,e),new gs({color:n}))}class ys{constructor(t,e,n){this.mobType=t,this.scene=n,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this._vy=0,this.onDeath=null,this._parts=[],this.mesh=new zn,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),this._buildAppearance(),this._buildHealthBar(),n.add(this.mesh)}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildAppearance(){const t=this.mobType.id;t==="spider"?this._buildSpider():t==="cow"||t==="pig"||t==="sheep"||t==="chicken"?this._buildAnimal():t==="fish"||t==="shark"?this._buildFish():this._buildHumanoid()}_buildFish(){const t=this.mobType.id==="shark",e=this.mobType.scale,n=this.mobType.color,s=t?"#f5f7f8":"#ffe6a8",r=t?"#3a4850":"#e0600a",o=e[2]*.7/2,a=e[0]*.45,c=e[1]*.55,l=e[0]*.7,h=e[1]*.85,d=e[0]*.32,u=e[1]*.45,f=e[2]*.7/3;this._addPart(xt(a,c,f*1.1,n),0,c*.05,o-f*.55),this._addPart(xt(l,h,f*1.2,n),0,0,o-f*1.6),this._addPart(xt(d,u,f,n),0,-h*.05,o-f*2.7),this._addPart(xt(l*.7,h*.28,f*2.6,s),0,-h*.42,o-f*1.5);const _=-o-.02;for(const S of[-1,1]){const b=xt(.05,u*.85,f*1.3,r);b.rotation.x=S*.5,this._addPart(b,0,S*u*.35,_-f*.4)}const g=h*(t?.95:.6),m=xt(.05,g,f*(t?1.1:.8),r);m.rotation.x=-.35,this._addPart(m,0,h/2+g*.35,o-f*1.4);const p=xt(.04,g*.45,f*.7,r);p.rotation.x=.35,this._addPart(p,0,-h/2-g*.15,o-f*2);for(const S of[-1,1]){const b=xt(l*.35,.05,f*.9,r);b.rotation.z=S*.55,this._addPart(b,S*(l/2+.05),-h*.1,o-f*.9)}for(let S=0;S<3;S++){const b=xt(.02,c*.5,.04,t?"#20282c":"#a03000");b.position.set(a/2+.01,c*.05,o-f*(1+S*.18)),this.mesh.add(b)}const E=t?.06:.08;for(const S of[-a*.4,a*.4]){const b=xt(E,E,.03,t?"#111111":"#1a1a1a");if(b.position.set(S,c*.2,o-f*.2),this.mesh.add(b),!t){const O=xt(.025,.025,.01,"#ffffff");O.position.set(S+.02,c*.25,o-f*.18),this.mesh.add(O)}}if(t){const S=xt(a*.7,.03,.04,"#f5f5f0");S.position.set(0,-c*.22,o-f*.15),this.mesh.add(S)}else for(const S of[-.05,.15]){const b=xt(l*.75,h*.9,.04,"#ffffff");b.position.set(0,0,o-f*(1.2+S)),this.mesh.add(b)}}_buildHumanoid(){const t=this.mobType.id,e=this.mobType.scale[1],n=e/2,s=t==="zombie",r=s?"#3d7a35":"#d8cca0",o=s?"#2a5a24":"#c0b8a0",a=s?"#4a3010":"#c0b080",c=s?"#3a2408":"#a89868",l=s?"#3a2810":"#b8a870",h=e*.27,d=.5;this._addPart(xt(d,h,d,r),0,n-h/2,0),this._addPart(xt(d*1.01,h*.3,d*1.01,o),0,n-h*.85,0);const u=s?"#cc0000":"#333300";for(const w of[-.12,.12]){const D=xt(.1,.08,.02,u);D.position.set(w,n-h/2+.04,d/2),this.mesh.add(D);const j=xt(.12,.03,.02,s?"#1a3010":"#8a8060");j.position.set(w,n-h/2+.1,d/2),this.mesh.add(j)}const f=xt(s?.16:.2,.03,.02,s?"#1a0808":"#3a3020");f.position.set(0,n-h*.78,d/2),this.mesh.add(f);const _=e*.33,g=.65,m=n-h-_/2;if(this._addPart(xt(g,_*.62,.32,a),0,m+_*.18,0),this._addPart(xt(g*.82,_*.4,.3,c),0,m-_*.28,0),s)for(const w of[-g*.3,0,g*.3]){const D=xt(.12,.1,.28,c);D.position.set(w,m-_*.52,0),this.mesh.add(D)}const p=e*.34,E=.2,S=(g+E)/2+.01;for(const w of[-1,1]){const D=xt(E,p,E,r);s&&(D.rotation.x=-.7),this._addPart(D,w*S,m,s?.18:0);const j=xt(E*1.05,p*.22,E*1.05,o);s?j.position.set(w*S,m-p*.15,.18+p*.62):j.position.set(w*S,m-p*.42,0),this.mesh.add(j)}const b=e*.4,O=.26,C=-n+b/2;for(const w of[-1,1])this._addPart(xt(O,b*.75,O,l),w*.18,C+b*.12,0),this._addPart(xt(O*1.05,b*.3,O*1.1,s?"#1a1008":"#5a5040"),w*.18,C-b*.35,.02);if(!s){for(let D=0;D<3;D++){const j=xt(g*.8,.06,.01,D%2?"#ccc090":"#c8bc8a");j.position.set(0,m+_/2-.12-D*.12,.17),this.mesh.add(j)}const w=xt(g*.55,.1,.24,"#c8bc8a");w.position.set(0,m-_*.5,0),this.mesh.add(w)}}_buildAnimal(){const t=this.mobType.id,e=this.mobType.scale,n=this.mobType.color;let s=n,r=n,o=null;t==="cow"?(s="#5C3317",r="#8B4513",o="#F5F5F5"):t==="pig"?(s="#FF9090",r="#FFB6C1"):t==="sheep"?(s="#999999",r="#CCCCCC"):t==="chicken"&&(s="#FF6600",r="#FFFFFF",o="#FF4400");const a=e[0]*.7,c=e[1]*.4,l=e[2]*.9,h=0;if(this._addPart(xt(a,c,l,n),0,h,0),t==="sheep"){this._addPart(xt(a+.12,c+.1,l+.1,"#E8E8E8"),0,h+.05,0);for(const p of[-l*.25,0,l*.25])this._addPart(xt(a*.55,.1,l*.2,"#f0f0f0"),0,h+c*.6,p)}t==="cow"&&o&&(this._addPart(xt(a*.5,c*.6,l*.5,o),0,h-.05,0),this._addPart(xt(a*1.01,c*.35,l*.28,o),0,h+c*.15,-l*.22),this._addPart(xt(a*.4,c*.3,l*.22,o),a*.36,h-c*.05,l*.15));const d=e[0]*(t==="chicken"?.35:.45),u=e[1]*(t==="chicken"?.3:.35),f=e[2]*(t==="pig"?.4:.35),_=-(l/2+f/2);if(this._addPart(xt(d,u,f,r),0,h+c*.15,_),t!=="chicken"){const p=t==="cow"?"#5C3317":t==="pig"?"#FF9090":t==="sheep"?"#CCCCCC":s,E=h+c*.15+u*.55;for(const S of[-1,1]){const b=xt(d*.25,u*.35,f*.2,p);b.rotation.z=S*.3,b.position.set(S*d*.55,E,_+f*.15),this.mesh.add(b)}}if(t==="cow")for(const p of[-1,1]){const E=xt(.05,.16,.05,"#e8e0c8");E.rotation.z=p*.2,E.position.set(p*d*.42,h+c*.15+u*.62,_+f*.2),this.mesh.add(E)}if(t==="pig"){this._addPart(xt(d*.6,u*.4,.08,"#FF8080"),0,h,_-f/2);for(const p of[-.04,.04]){const E=xt(.02,.02,.02,"#a04040");E.position.set(p,h,_-f/2-.03),this.mesh.add(E)}}if(t==="sheep"||t==="cow"){const p=xt(d*.55,u*.35,.06,t==="sheep"?"#e0a0a0":"#3a281a");p.position.set(0,h,_-f/2+.02),this.mesh.add(p)}if(t==="chicken"){const p=xt(.1,.08,.12,"#FFAA00");p.position.set(0,h+c*.1,_-f/2-.04),this.mesh.add(p)}t==="chicken"&&o&&(this._addPart(xt(.08,.12,.06,o),0,h+c*.15+u*.5,_),this._addPart(xt(.1,.08,.04,o),0,h+c*.1,_-f/2-.02));for(const p of[-d*.28,d*.28]){const E=xt(.06,.06,.03,"#1a1a1a");E.position.set(p,h+c*.15+u*.1,_-f/2),this.mesh.add(E)}const g=e[1]*.38,m=h-c/2-g/2;if(t==="chicken"){const p=e[0]*.06,E=e[2]*.06,S=a*.18;for(const b of[-S,S]){this._addPart(xt(p,g,E,s),b,m,0);const O=xt(p*2.2,p*.5,E*2.2,s);O.position.set(b,m-g/2,E*.8),this.mesh.add(O)}}else{const p=e[0]*.14,E=e[2]*.14,S=a*.28,b=l*.28;for(const[O,C]of[[-S,-b],[S,-b],[-S,b],[S,b]])this._addPart(xt(p,g*.7,E,s),O,m+g*.15,C),this._addPart(xt(p*1.05,g*.3,E*1.05,t==="pig"?"#cc6060":"#3a2818"),O,m-g*.35,C)}if(t!=="chicken"&&(this._addPart(xt(.1,.1,.12,s),0,h+c*.3,l/2+.06),t==="pig"&&this._addPart(xt(.06,.06,.06,s),.04,h+c*.4,l/2+.1)),t==="chicken")for(const[p,E,S]of[[0,0,1],[.06,.02,.75],[-.06,.02,.75]])this._addPart(xt(.15*S,.2*S,.08,"#DDDDDD"),0,h+c*.4+p,l/2+.04+E)}_buildSpider(){this._addPart(xt(.85,.4,.6,"#2a1010"),0,.05,-.2),this._addPart(xt(.7,.55,.65,"#150808"),0,.08,.52),this._addPart(xt(.5,.15,.66,"#3a1818"),0,-.1,.52);for(const e of[.28,.5,.72]){const n=xt(.71,.06,.05,"#450e0e");n.position.set(0,.28,e),this.mesh.add(n)}this._addPart(xt(.42,.3,.3,"#1a0808"),0,.08,-.62);for(const e of[-1,1]){const n=xt(.06,.14,.06,"#0a0404");n.rotation.x=.3,n.position.set(e*.1,-.08,-.78),this.mesh.add(n)}for(const[e,n]of[[-.1,.2],[.1,.2],[-.15,.14],[.15,.14]]){const s=xt(.06,.06,.03,"#ff1100");s.position.set(e,n,-.77),this.mesh.add(s)}const t=[-.5,-.2,.15,.45];for(const e of[-1,1])for(let n=0;n<4;n++){const s=e*t[n],r=-.15+n*.2,o=xt(.4,.07,.08,"#0f0606");o.rotation.y=s,o.rotation.z=e*.25,o.position.set(e*.32,.05,r),this.mesh.add(o),this._parts.push(o),o._origColor="#"+o.material.color.getHexString(),o.castShadow=!0;const a=xt(.34,.06,.06,"#150808");a.rotation.y=s,a.rotation.z=e*.7,a.position.set(e*.62,-.1,r),this.mesh.add(a),this._parts.push(a),a._origColor="#"+a.material.color.getHexString(),a.castShadow=!0}}_buildHealthBar(){const t=document.createElement("canvas");t.width=64,t.height=8,this._hbCtx=t.getContext("2d"),this._hbTex=new Vl(t);const e=new wa({map:this._hbTex,depthTest:!1});this._hbSprite=new Hl(e),this._hbSprite.scale.set(1.2,.15,1),this._hbSprite.position.set(0,this.mobType.scale[1]/2+.4,0),this.mesh.add(this._hbSprite),this._updateHealthBar()}_updateHealthBar(){const t=this._hbCtx;t.clearRect(0,0,64,8),t.fillStyle="#400000",t.fillRect(0,0,64,8),t.fillStyle="#e74c3c",t.fillRect(0,0,Math.floor(64*this.health/this.maxHealth),8),this._hbTex.needsUpdate=!0}get position(){return this.mesh.position}takeDamage(t){this.dead||($e.playHit(),this.health=Math.max(0,this.health-t),this._updateHealthBar(),this._parts.forEach(e=>e.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(e=>e.material.color.set(e._origColor))},150),this.health<=0&&this._die())}_die(){var t;this.dead||(this.dead=!0,this._dropLoot(),this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),(t=this.onDeath)==null||t.call(this,this))}_dropLoot(){}applyGravity(t,e){var c;this._vy-=fs*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),o=Math.floor(n.y-this.mobType.scale[1]/2-.1),a=Math.floor(n.z);if(e.isSolid(r,o,a)){this._vy=0;const l=((c=e.solidSurfaceY)==null?void 0:c.call(e,r,a))??e.surfaceY(r,a);l>=0&&(n.y=l+1+this.mobType.scale[1]/2)}else n.y=s}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dead=!0}}const Tn={IDLE:"idle",CHASE:"chase",ATTACK:"attack"};class N_{constructor(t,e,n){this.mob=t,this.player=e,this.worldData=n,this.state=Tn.IDLE,this._attackTimer=0,this._steerAngle=0}update(t){if(this.mob.dead)return;const{mobType:e}=this.mob,n=this.player.camera.position.x-this.mob.position.x,s=this.player.camera.position.y-this.mob.position.y,r=this.player.camera.position.z-this.mob.position.z,o=Math.sqrt(n*n+s*s+r*r);if(this.state===Tn.IDLE)o<e.detectionRange&&this._hasLineOfSight()&&(this.state=Tn.CHASE);else if(this.state===Tn.CHASE){if(o>e.detectionRange*1.6){this.state=Tn.IDLE;return}if(o<=e.attackRange){this.state=Tn.ATTACK;return}this._moveToward(t,n,r,o,e.speed)}else if(this.state===Tn.ATTACK){if(o>e.attackRange*1.4){this.state=Tn.CHASE;return}this._attackTimer-=t,this._attackTimer<=0&&(this._hasLineOfSight()&&this.player.stats.takeDamage(e.damage),this._attackTimer=e.attackCooldown)}this.mob.applyGravity(t,this.worldData),this.state!==Tn.IDLE&&(this.mob.mesh.rotation.y=Math.atan2(n,r))}_hasLineOfSight(){const t=this.mob.position,e=this.player.camera.position,n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.sqrt(n*n+s*s+r*r);if(o===0)return!0;const a=Math.ceil(o/.5);for(let c=1;c<a;c++){const l=c/a,h=Math.floor(t.x+n*l),d=Math.floor(t.y+s*l),u=Math.floor(t.z+r*l);if(this.worldData.isSolid(h,d,u))return!1}return!0}_moveToward(t,e,n,s,r){let o=e/s,a=n/s;const c=this.mob.position,l=1.2,h=Math.floor(c.x+o*l),d=Math.floor(c.y),u=Math.floor(c.z+a*l);if(this.worldData.isSolid(h,d,u)){this._steerAngle+=.15;const f=this._steerAngle;o=Math.cos(f)*o-Math.sin(f)*a,a=Math.sin(f)*o+Math.cos(f)*a}else this._steerAngle*=.9;this.mob.position.x+=o*r*t,this.mob.position.z+=a*r*t}}const Jc=["zombie","skeleton","spider"];class U_{constructor(t,e,n,s,r){this.scene=t,this.worldData=e,this.player=n,this.inventory=s,this.itemRegistry=r,this.mobs=[],this._spawnTimer=0,this.active=!1,this.onMobDeath=null}setNight(t){this.active=t,t||this._despawnAll()}_despawnAll(){for(const{mob:t}of this.mobs)t.dispose();this.mobs=[]}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){this.mobs.splice(e,1);continue}s.update(t)}this.active&&(this.mobs.length>=x0||(this._spawnTimer+=t,!(this._spawnTimer<3)&&(this._spawnTimer=0,this._trySpawn())))}_trySpawn(){var _,g;const t=this.player.camera.position,e=Math.random()*Math.PI*2,n=15+Math.random()*(y0-15),s=t.x+Math.cos(e)*n,r=t.z+Math.sin(e)*n,o=Math.floor(s),a=Math.floor(r);if(o<1||o>=Ot-1||a<1||a>=Nt-1)return;const c=((g=(_=this.worldData).solidSurfaceY)==null?void 0:g.call(_,o,a))??this.worldData.surfaceY(o,a);if(c<0||c<5||this.worldData.get(o,c+1,a)===v.WATER)return;const l=Jc[Math.floor(Math.random()*Jc.length)],h=vs[l],d=new N(s,c+1,r),u=new ys(h,d,this.scene);u.onDeath=m=>{var p;for(const E of m.mobType.dropItems)Math.random()<E.chance&&this.inventory.add(E.itemId,E.count,this.itemRegistry);(p=this.onMobDeath)==null||p.call(this,m)};const f=new N_(u,this.player,this.worldData);this.mobs.push({mob:u,ai:f})}getMobs(){return this.mobs.map(t=>t.mob)}}const Qc=["cow","pig","sheep","chicken"],D_=12,tl=4;class el{constructor(t,e,n=null){this.mob=t,this.worldData=e,this.player=n,this._wanderTimer=Math.random()*tl,this._angle=Math.random()*Math.PI*2,this._moving=!1}update(t){if(!this.mob.dead){if(this.mob.mobType.id==="pig"&&this.player){this._followPlayer(t);return}if(this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=tl*(.5+Math.random()),this._moving=Math.random()<.6,this._moving&&(this._angle+=(Math.random()-.5)*Math.PI*1.2)),this._moving){const e=this.mob.mobType.speed,n=this.mob.position,s=Math.cos(this._angle),r=Math.sin(this._angle),o=n.x+s*e*t,a=n.z+r*e*t;if(o<1||o>=Ot-1||a<1||a>=Nt-1)this._angle+=Math.PI;else{const c=Math.floor(o),l=Math.floor(n.y),h=Math.floor(a);this.worldData.isSolid(c,l,h)?this._angle+=Math.PI*(.5+Math.random()*.5):(n.x=o,n.z=a,this.mob.mesh.rotation.y=Math.atan2(s,r))}}this.mob.applyGravity(t,this.worldData)}}_followPlayer(t){const e=this.player.camera.position,n=this.mob.position,s=e.x-n.x,r=e.z-n.z,o=Math.sqrt(s*s+r*r);if(o>1.2){const a=this.mob.mobType.speed*1.6,c=n.x+s/o*a*t,l=n.z+r/o*a*t;if(!(c<1||c>=Ot-1||l<1||l>=Nt-1)){const h=Math.floor(c),d=Math.floor(n.y),u=Math.floor(l);this.worldData.isSolid(h,d,u)||(n.x=c,n.z=l)}}this.mob.mesh.rotation.y=Math.atan2(s,r),this.mob.applyGravity(t,this.worldData)}}class O_{constructor(t,e,n,s,r=null){this.scene=t,this.worldData=e,this.inventory=n,this.itemRegistry=s,this.player=r,this.mobs=[],this._spawnTimer=0,this._initialised=!1,this._companionSpawned=!1,this.companion=null,this.onCompanionDeath=null,this._isNight=!1,this.allowSpawn=!0}init(){if(!this._initialised){this._initialised=!0;for(let t=0;t<8;t++)this._trySpawn()}}setNight(t){this._isNight=t}update(t){for(let e=this.mobs.length-1;e>=0;e--){const{mob:n,ai:s}=this.mobs[e];if(n.dead){n.isCompanion&&(this.companion=null),this.mobs.splice(e,1);continue}s.update(t)}if(!this._isNight&&this.allowSpawn&&this.mobs.length<D_&&(this._spawnTimer+=t,this._spawnTimer>=8&&(this._spawnTimer=0,this._trySpawn())),!this._companionSpawned&&this.player){const e=this.player.camera.position,n=new N(e.x+2,e.y,e.z+2),s=this.worldData.surfaceY(Math.floor(n.x),Math.floor(n.z));if(s>=0){n.y=s+1;const r=new ys(vs.pig,n,this.scene);r.isCompanion=!0,r.displayName="Hammy",r.onDeath=a=>{var c;(c=this.onCompanionDeath)==null||c.call(this,a);for(const l of a.mobType.dropItems)Math.random()<l.chance&&this.inventory.add(l.itemId,l.count,this.itemRegistry)};const o=new el(r,this.worldData,this.player);this.mobs.push({mob:r,ai:o}),this.companion={mob:r,ai:o},this._companionSpawned=!0}}}_trySpawn(){for(let e=0;e<10;e++){const n=4+Math.random()*(Ot-8),s=4+Math.random()*(Nt-8),r=Math.floor(n),o=Math.floor(s),a=this.worldData.surfaceY(r,o);if(a<5)continue;const c=this.worldData.get(r,a,o);if(c!==1&&c!==2)continue;const l=Qc[Math.floor(Math.random()*Qc.length)],h=vs[l],d=new N(n,a+1,s),u=new ys(h,d,this.scene);u.onDeath=_=>{for(const g of _.mobType.dropItems)Math.random()<g.chance&&this.inventory.add(g.itemId,g.count,this.itemRegistry)};const f=new el(u,this.worldData,this.player);this.mobs.push({mob:u,ai:f});return}}getMobs(){return this.mobs.map(t=>t.mob)}getCompanion(){var t;return(t=this.companion)!=null&&t.mob&&!this.companion.mob.dead?this.companion.mob:null}setWorldData(t){this.worldData=t;for(const{ai:e}of this.mobs)e.worldData=t}despawnAllExceptCompanion(){const t=[];for(const e of this.mobs)e.mob.isCompanion&&!e.mob.dead?t.push(e):e.mob.dispose();this.mobs=t,this.companion=t[0]??null}bringCompanionTo(t,e,n){const s=this.getCompanion();s&&(s.mesh.position.set(t+1.5,e,n),s.mesh.visible=!0)}warnIfDanger(t,e){if(!this.getCompanion())return!1;for(const s of t)if(!s.dead&&s.position.distanceTo(e)<12)return!0;return!1}}function R(i,t,e,n,s,r){const o=new gs({color:n});return s&&(o.emissive=new kt(s),o.emissiveIntensity=r??.5),new ye(new _n(i,t,e),o)}class br{constructor(t,e,n,s,r,o){this.config=t,this.scene=n,this.player=s,this.inventory=r,this.itemRegistry=o,this.health=t.health,this.maxHealth=t.health,this.dead=!1,this.currentPhase=0,this._attackTimer=0,this._vy=0,this.onDeath=null,this.onPhaseChange=null,this._homePos=e.clone(),this._aggroed=!1,this._parts=[],this.mesh=new zn,this.mesh.position.set(e.x,e.y+t.scale[1]/2,e.z),n.add(this.mesh),this._buildMesh(),this._initBossBar()}_addPart(t,e,n,s){return t.position.set(e,n,s),t.castShadow=!0,t._origColor="#"+t.material.color.getHexString(),this.mesh.add(t),this._parts.push(t),t}_buildMesh(){const[t,e,n]=this.config.scale,s=R(t,e,n,this.config.color);s._origColor=this.config.color,s.castShadow=!0,this.mesh.add(s),this._parts.push(s)}_initBossBar(){this._barFill=document.getElementById("boss-bar-fill")}showBar(){const t=document.getElementById("boss-bar-wrap"),e=document.getElementById("boss-name");t&&(t.style.display="block",e.textContent=this.config.name),this._updateBar()}_updateBar(){this._barFill&&(this._barFill.style.width=`${this.health/this.maxHealth*100}%`)}get position(){return this.mesh.position}takeDamage(t){var n;if(this.dead)return;$e.playHit(),this.health=Math.max(0,this.health-t),this._updateBar(),this._parts.forEach(s=>s.material.color.set(16777215)),setTimeout(()=>{this.dead||this._parts.forEach(s=>s.material.color.set(s._origColor))},150);const e=this.config.phases||[];for(let s=0;s<e.length;s++)if(this.currentPhase===s&&this.health/this.maxHealth<e[s]){this.currentPhase=s+1,(n=this.onPhaseChange)==null||n.call(this,this.currentPhase),this._onPhaseChange(this.currentPhase);break}this.health<=0&&this._die()}_onPhaseChange(t){}_die(){var e;if(this.dead)return;this.dead=!0;const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none");for(const n of this.config.drops||[])this.inventory.add(n.itemId,n.count,this.itemRegistry);this.scene.remove(this.mesh),this._parts.forEach(n=>{n.geometry.dispose(),n.material.dispose()}),(e=this.onDeath)==null||e.call(this,this)}applyGravity(t,e){this._vy-=fs*t;const n=this.mesh.position,s=n.y+this._vy*t,r=Math.floor(n.x),o=Math.floor(n.y-this.config.scale[1]/2-.1),a=Math.floor(n.z);if(e.isSolid(r,o,a)){this._vy=0;const c=e.surfaceY(r,a);c>=0&&(n.y=c+1+this.config.scale[1]/2)}else n.y=s}_moveToward(t,e,n){const s=e.x-this.position.x,r=e.z-this.position.z,o=Math.sqrt(s*s+r*r);o<.5||(this.position.x+=s/o*n*t,this.position.z+=r/o*n*t,this.position.x=Math.max(2,Math.min(Ot-2,this.position.x)),this.position.z=Math.max(2,Math.min(Nt-2,this.position.z)),this.mesh.rotation.y=Math.atan2(s,r))}update(t,e){if(!this.dead){if(this.applyGravity(t,e),!this._aggroed){const n=this.config.aggroZoneRadius??this.config.chaseRange??22,s=this.player.camera.position.x-this._homePos.x,r=this.player.camera.position.z-this._homePos.z;Math.sqrt(s*s+r*r)<n&&(this._aggroed=!0)}this._aggroed?this._behaviorUpdate(t):this.position.distanceTo(this._homePos)>2&&this._moveToward(t,this._homePos,1)}}_behaviorUpdate(t){}dispose(){this.mesh.parent&&this.scene.remove(this.mesh),this._parts.forEach(e=>{e.geometry.dispose(),e.material.dispose()});const t=document.getElementById("boss-bar-wrap");t&&(t.style.display="none"),this.dead=!0}}const Bi={id:"cave_troll",name:"⚡ Cave Troll",color:"#3d6e3d",health:200,damage:4,speed:2.5,attackRange:2.5,attackCooldown:2,scale:[2,3,2],phases:[.6,.3],drops:[{itemId:"troll_fang",count:1}],chaseRange:18,aggroZoneRadius:20};class B_ extends br{constructor(t,e,n,s,r,o){super(Bi,t,e,n,s,r),this.mobSpawner=o,this._slamTimer=0}_buildMesh(){const t="#4a5040",e="#2e3828",n="#3a4030",s="#3a5a2a";this._addPart(R(1.35,1.05,1.1,t),0,1.52,0),this._addPart(R(1.5,.28,.45,e),0,1.88,.25),this._addPart(R(.32,.22,.12,e),-.3,1.75,.5),this._addPart(R(.32,.22,.12,e),.3,1.75,.5),this._addPart(R(.16,.14,.08,"#cc9900"),-.3,1.76,.56),this._addPart(R(.16,.14,.08,"#cc9900"),.3,1.76,.56),this._addPart(R(.38,.2,.22,n),0,1.58,.52),this._addPart(R(1.1,.32,.55,n),0,1.14,.35),this._addPart(R(.12,.38,.1,"#d4c88a"),-.28,1.05,.52),this._addPart(R(.12,.38,.1,"#d4c88a"),.28,1.05,.52),this._addPart(R(.18,.4,.12,e),-.75,1.6,0),this._addPart(R(.18,.4,.12,e),.75,1.6,0),this._addPart(R(.75,.3,.7,n),0,1,0),this._addPart(R(2.1,1.7,1.05,t),0,.2,0),this._addPart(R(1.8,1.05,.45,t),0,-.25,.44),this._addPart(R(.7,.55,.18,e),-.45,.55,.5),this._addPart(R(.7,.55,.18,e),.45,.55,.5),this._addPart(R(.55,.35,.12,s),-.6,.1,.5),this._addPart(R(.4,.28,.12,s),.7,.4,.48),this._addPart(R(.45,.3,.12,s),.2,-.3,.5),this._addPart(R(.35,.5,.3,n),-.6,.6,-.5),this._addPart(R(.28,.4,.28,n),.5,.3,-.5),this._addPart(R(.22,.35,.22,n),0,.8,-.5),this._addPart(R(.85,.7,.8,e),-1.25,.85,0);const r=R(.72,2.15,.72,t);r.rotation.z=-.28,this._addPart(r,-1.45,-.35,0),this._addPart(R(.4,.35,.35,n),-1.55,-.5,0),this._addPart(R(.85,.7,.8,n),-1.65,-1.6,0),this._addPart(R(.2,.2,.2,e),-1.45,-1.82,.3),this._addPart(R(.2,.2,.2,e),-1.72,-1.82,.15),this._addPart(R(.18,.18,.18,e),-1.88,-1.82,-.1),this._addPart(R(.85,.7,.8,e),1.25,.85,0);const o=R(.72,2.15,.72,t);o.rotation.z=.28,this._addPart(o,1.45,-.35,0),this._addPart(R(.4,.35,.35,n),1.55,-.5,0),this._addPart(R(.8,.65,.75,n),1.62,-1.58,0),this._addPart(R(.18,1,.18,e),1.62,-2.3,0),this._addPart(R(.55,.55,.55,n),1.62,-2.95,0),this._addPart(R(.2,.5,.2,e),1.62,-3.1,-.1),this._addPart(R(.95,1.15,.95,e),-.58,-1.55,0),this._addPart(R(.95,1.15,.95,e),.58,-1.55,0),this._addPart(R(.45,.35,.3,n),-.58,-1.2,.42),this._addPart(R(.45,.35,.3,n),.58,-1.2,.42),this._addPart(R(1.05,.22,1.15,n),-.58,-2.2,.12),this._addPart(R(1.05,.22,1.15,n),.58,-2.2,.12);for(const[a,c]of[[-.72,.55],[-.45,.58],[-.18,.57]])this._addPart(R(.2,.15,.15,e),a,-2.2,c);for(const[a,c]of[[.18,.55],[.45,.58],[.72,.57]])this._addPart(R(.2,.15,.15,e),a,-2.2,c)}_onPhaseChange(t){var e,n;if(t===1){this._parts.forEach(s=>{s.material.color.set("#bbbbbb"),s._origColor="#bbbbbb"});for(let s=0;s<3;s++)(n=(e=this.mobSpawner)._trySpawn)==null||n.call(e)}t===2&&(this._slamTimer=0)}_behaviorUpdate(t){const e=this.player.camera.position.x-this.position.x,n=this.player.camera.position.z-this.position.z,s=Math.sqrt(e*e+n*n);s>Bi.attackRange&&this._moveToward(t,this.player.camera.position,Bi.speed),this._attackTimer-=t,s<=Bi.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Bi.damage),this._attackTimer=Bi.attackCooldown),this.currentPhase>=2&&(this._slamTimer-=t,this._slamTimer<=0&&(this._slamTimer=4,s<=4&&this.player.stats.takeDamage(6)))}}const Fi={id:"swamp_witch",name:"🔮 Swamp Witch",color:"#6a1a8a",health:150,damage:3,speed:2,attackRange:12,attackCooldown:2.5,scale:[1,2,1],phases:[.4],drops:[{itemId:"witch_eye",count:1}],chaseRange:18,aggroZoneRadius:16};class F_{constructor(t,e,n){const s=new Ra(.3,6,6),r=new ci({color:"#aa44ff"});this.mesh=new ye(s,r),this.mesh.position.copy(t);const o=new N().subVectors(e,t).normalize();this.velocity=o.multiplyScalar(12),n.add(this.mesh),this.scene=n,this.alive=!0,this._life=4}update(t,e,n){if(this.alive){if(this.mesh.position.addScaledVector(this.velocity,t),this._life-=t,this._life<=0){this._destroy();return}this.mesh.position.distanceTo(e)<1.5&&(n(),this._destroy())}}_destroy(){this.alive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose()}}class k_ extends br{constructor(t,e,n,s,r){super(Fi,t,e,n,s,r),this._projectiles=[],this._currentSpeed=Fi.speed}_buildMesh(){const t="#4a3820",e="#5a1a6a",n="#3a0a50",s="#18080e",r="#1a1008",o="#aa8800";this._addPart(R(1.05,.08,1,s),0,1.22,0),this._addPart(R(.68,.28,.65,s),0,1.38,0),this._addPart(R(.5,.28,.48,s),0,1.62,0),this._addPart(R(.34,.28,.34,s),0,1.86,0),this._addPart(R(.18,.28,.18,s),0,2.08,-.04),this._addPart(R(.08,.2,.08,s),0,2.28,-.08),this._addPart(R(.72,.07,.68,o),0,1.26,0),this._addPart(R(.14,.1,.05,o),0,1.27,.34),this._addPart(R(.46,.48,.44,t),0,.8,0),this._addPart(R(.1,.14,.08,"#3a2810"),-.22,.8,.2),this._addPart(R(.1,.14,.08,"#3a2810"),.22,.8,.2),this._addPart(R(.1,.1,.06,"#44ff44","#00aa00",1.2),-.13,.85,.23),this._addPart(R(.1,.1,.06,"#44ff44","#00aa00",1.2),.13,.85,.23),this._addPart(R(.08,.13,.18,"#3a2810"),0,.79,.24),this._addPart(R(.1,.07,.1,"#3a2810"),0,.74,.31),this._addPart(R(.22,.04,.05,"#2a1808"),0,.68,.22),this._addPart(R(.06,.06,.06,"#3a2808"),.06,.62,.22),this._addPart(R(.12,.48,.08,r),-.24,.65,-.1),this._addPart(R(.1,.55,.06,r),-.3,.6,-.05),this._addPart(R(.12,.48,.08,r),.24,.65,-.1),this._addPart(R(.1,.55,.06,r),.3,.6,-.05),this._addPart(R(.22,.2,.2,t),0,.52,0),this._addPart(R(.6,.58,.36,e),0,.22,0),this._addPart(R(.48,.12,.14,"#6a2a7a"),0,.52,.12),this._addPart(R(.64,.1,.38,o),0,-.08,0),this._addPart(R(.14,.14,.1,"#4a3010"),-.22,-.08,.18),this._addPart(R(.12,.16,.1,"#4a3010"),.22,-.09,.18),this._addPart(R(.72,.4,.44,n),0,-.35,0),this._addPart(R(.82,.4,.52,n),0,-.65,0),this._addPart(R(.78,.36,.5,"#2a0840"),0,-.94,0),this._addPart(R(.2,.15,.08,n),-.28,-1.12,.18),this._addPart(R(.16,.18,.07,n),.22,-1.13,.2),this._addPart(R(.12,.12,.07,n),0,-1.14,.22);const a=R(.18,.58,.18,t);a.rotation.z=-.6,a.rotation.x=-.2,this._addPart(a,-.4,.22,0),this._addPart(R(.2,.18,.18,t),-.64,-.04,0),this._addPart(R(.06,.16,.05,t),-.55,-.2,.06),this._addPart(R(.06,.16,.05,t),-.64,-.22,.04),this._addPart(R(.06,.16,.05,t),-.73,-.2,.04),this._addPart(R(.22,.22,.22,"#aa44ff","#6600cc",1.2),-.64,-.38,0);const c=R(.18,.58,.18,t);c.rotation.z=.25,this._addPart(c,.38,.18,0),this._addPart(R(.2,.18,.18,t),.54,-.14,0),this._addPart(R(.07,1.6,.07,"#3a2010"),.56,-.95,0),this._addPart(R(.2,.1,.1,"#4a3010"),.56,-1.78,0),this._addPart(R(.1,.1,.2,"#4a3010"),.56,-1.78,0),this._addPart(R(.16,.22,.16,"#44ffaa","#00cc66",1.5),.56,-1.95,0)}_onPhaseChange(t){t===1&&(this._currentSpeed=Fi.speed*2,this._parts.forEach(e=>{e.material.color.set("#330044"),e._origColor="#330044"}))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);if(n<8?this._moveToward(t,e,-this._currentSpeed):n>14&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,this._attackTimer<=0&&n<=Fi.attackRange){this._attackTimer=Fi.attackCooldown;const s=new F_(new N(this.position.x,this.position.y+1,this.position.z),new N(e.x,e.y,e.z),this.scene);this._projectiles.push(s)}for(let s=this._projectiles.length-1;s>=0;s--){const r=this._projectiles[s];r.update(t,this.player.camera.position,()=>{this.player.stats.takeDamage(Fi.damage)}),r.alive||this._projectiles.splice(s,1)}}}const On={id:"stone_golem",name:"🪨 Stone Golem",color:"#888888",health:300,damage:6,speed:1.5,attackRange:2.5,attackCooldown:3,scale:[2.5,4,2.5],phases:[.5],minTier:3,drops:[{itemId:"golem_core",count:1}],chaseRange:18,aggroZoneRadius:14};class z_ extends br{constructor(t,e,n,s,r){super(On,t,e,n,s,r),this._currentSpeed=On.speed,this._stomp=0}_buildMesh(){const t="#8a9082",e="#4a5040",n="#6a7060",s="#2e3428";this._addPart(R(1.2,.92,.95,t),0,1.55,0),this._addPart(R(1.35,.22,.38,e),0,1.9,.2);const r=R(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(r,-.32,1.65,.44);const o=R(.24,.2,.16,"#44aaff","#2266cc",2);this._addPart(o,.32,1.65,.44),this._eyeMats=[r.material,o.material],this._addPart(R(.35,.3,.1,e),-.32,1.65,.5),this._addPart(R(.35,.3,.1,e),.32,1.65,.5),this._addPart(R(.7,.1,.1,s),0,1.38,.48),this._addPart(R(.18,.16,.08,s),-.22,1.34,.48),this._addPart(R(.18,.16,.08,s),.22,1.34,.48),this._addPart(R(.2,.35,.2,e),-.3,2.06,-.1),this._addPart(R(.18,.28,.18,e),.25,2.1,.05),this._addPart(R(.14,.22,.14,e),0,2.02,-.25),this._addPart(R(2,1.7,1.15,t),0,.22,0),this._addPart(R(.85,.75,.28,n),-.45,.65,.5),this._addPart(R(.85,.75,.28,n),.45,.65,.5),this._addPart(R(1.5,.4,.22,e),0,.12,.56);const a=R(.55,.55,.28,"#44ccff","#2288ff",2.2);this._crystalMat=a.material,this._addPart(a,0,.3,.56),this._addPart(R(.8,.07,.08,"#2266cc","#2266cc",.8),0,.58,.55),this._addPart(R(.06,.6,.06,"#2266cc","#2266cc",.8),0,.1,.55),this._addPart(R(.4,.5,.28,e),-.6,.7,-.55),this._addPart(R(.35,.42,.25,e),.5,.4,-.55),this._addPart(R(.28,.35,.22,n),0,.95,-.55),this._addPart(R(.06,.8,.05,s),-.2,.25,.58),this._addPart(R(.06,.6,.05,s),.3,.15,.58),this._addPart(R(1.3,.65,1,e),-1.65,.95,0),this._addPart(R(1.3,.65,1,e),1.65,.95,0),this._addPart(R(.22,.55,.22,t),-2.12,1.22,0),this._addPart(R(.18,.44,.18,t),-1.85,1.3,.22),this._addPart(R(.22,.55,.22,t),2.12,1.22,0),this._addPart(R(.18,.44,.18,t),1.85,1.3,.22);const c=R(.75,1.9,.75,n);c.rotation.z=-.12,this._addPart(c,-1.5,-.35,0),this._addPart(R(.6,.42,.5,e),-1.58,-.55,0),this._addPart(R(1,.85,.95,t),-1.62,-1.55,0),this._addPart(R(.35,.28,.3,e),-1.35,-1.82,.35),this._addPart(R(.3,.25,.28,e),-1.72,-1.82,.35),this._addPart(R(.28,.22,.25,e),-2,-1.78,.2);const l=R(.75,1.9,.75,n);l.rotation.z=.12,this._addPart(l,1.5,-.35,0),this._addPart(R(.6,.42,.5,e),1.58,-.55,0),this._addPart(R(1,.85,.95,t),1.62,-1.55,0),this._addPart(R(.35,.28,.3,e),1.35,-1.82,.35),this._addPart(R(.3,.25,.28,e),1.72,-1.82,.35),this._addPart(R(.28,.22,.25,e),2,-1.78,.2),this._addPart(R(.92,1.1,.92,n),-.58,-1.52,0),this._addPart(R(.92,1.1,.92,n),.58,-1.52,0),this._addPart(R(.52,.42,.38,e),-.58,-1.18,.44),this._addPart(R(.52,.42,.38,e),.58,-1.18,.44),this._addPart(R(1.1,.28,1.2,t),-.58,-2.22,.12),this._addPart(R(1.1,.28,1.2,t),.58,-2.22,.12),this._addPart(R(.28,.2,.28,e),-1,-2.22,.3),this._addPart(R(.22,.18,.22,e),.95,-2.22,.28),this._addPart(R(.2,.16,.2,e),0,-2.22,.7)}_onPhaseChange(t){t===1&&(this._currentSpeed=On.speed*2.2,this._parts.forEach(e=>{e.material.color.set("#c0c8b8"),e._origColor="#c0c8b8"}),this._crystalMat&&(this._crystalMat.color.set("#88ffff"),this._crystalMat.emissiveIntensity=4),this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}))}_behaviorUpdate(t){const e=this.player.camera.position,n=e.x-this.position.x,s=e.z-this.position.z,r=Math.sqrt(n*n+s*s);r>On.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,r<=On.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(On.damage),this._attackTimer=On.attackCooldown),this.currentPhase>=1&&(this._stomp-=t,this._stomp<=0&&(this._stomp=5,r<=5&&this.player.stats.takeDamage(4)))}takeDamage(t){this.player.stats.tier<On.minTier&&(t*=.15),super.takeDamage(t)}}const Bn={id:"the_conqueror",name:"💀 THE CONQUEROR",color:"#1a0a1a",health:600,damage:8,speed:3,attackRange:3,attackCooldown:1.5,scale:[3,5,3],phases:[.6,.25],drops:[],chaseRange:30};class H_ extends br{constructor(t,e,n,s,r,o){super(Bn,t,e,n,s,r),this.worldData=o,this._currentSpeed=Bn.speed,this._summonTimer=0,this._shockwaveTimer=0,this._minions=[],this.onWin=null}_buildMesh(){const t="#1a0a12",e="#0a0508",n="#3a0808",s="#6a3000",r="#2a1808";this._addPart(R(1.1,.95,.98,t),0,2.18,0),this._addPart(R(1.12,.28,.18,e),0,2.12,.5),this._addPart(R(.35,.07,.06,"#ff0000","#cc0000",1.5),-.22,2.1,.56),this._addPart(R(.35,.07,.06,"#ff0000","#cc0000",1.5),.22,2.1,.56);const o=R(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(o,-.22,2.12,.52);const a=R(.16,.13,.05,"#ff1100","#cc0000",2.5);this._addPart(a,.22,2.12,.52),this._eyeMats=[o.material,a.material],this._addPart(R(.22,.5,.35,e),-.57,2.1,.22),this._addPart(R(.22,.5,.35,e),.57,2.1,.22),this._addPart(R(1,.6,.25,e),0,2.1,-.55),this._addPart(R(1.18,.06,.06,s),0,2.55,0),this._addPart(R(.2,.12,.05,"#880000","#cc0000",1),0,2.38,.5);const c=R(.2,.85,.18,r);c.rotation.z=-.55,c.rotation.x=-.1,this._addPart(c,-.48,2.85,-.05);const l=R(.2,.85,.18,r);l.rotation.z=.55,l.rotation.x=-.1,this._addPart(l,.48,2.85,-.05),this._addPart(R(.12,.3,.12,"#4a2010"),-.78,3.28,-.08),this._addPart(R(.12,.3,.12,"#4a2010"),.78,3.28,-.08),this._addPart(R(.65,.3,.6,e),0,1.68,0),this._addPart(R(.85,.18,.65,t),0,1.55,0),this._addPart(R(2.1,1.9,1.18,t),0,.55,0),this._addPart(R(1.85,1.5,.3,n),0,.62,.56),this._addPart(R(.9,.8,.16,t),-.45,.95,.7),this._addPart(R(.9,.8,.16,t),.45,.95,.7);const h=R(.55,.55,.12,"#880000","#ff0000",1.8);this._glowMat=h.material,this._addPart(h,0,.65,.72),this._addPart(R(1.85,.06,.08,s),0,1.2,.65),this._addPart(R(1.85,.06,.08,s),0,.1,.65),this._addPart(R(1.6,.5,.25,e),0,.02,.62),this._addPart(R(.5,1.6,.2,e),0,.6,-.62),this._addPart(R(.22,.35,.22,r),0,1.5,-.65),this._addPart(R(.18,.3,.18,r),0,1.1,-.65),this._addPart(R(.18,.28,.18,r),0,.7,-.65),this._addPart(R(1.55,.6,.12,"#0a0508"),0,1,-.72),this._addPart(R(1.7,.8,.12,e),0,.3,-.72),this._addPart(R(1.6,.8,.12,"#100610"),0,-.45,-.72),this._addPart(R(1.4,.7,.1,"#0a0408"),0,-1.1,-.7),this._addPart(R(.3,.3,.08,e),-.55,-1.6,-.68),this._addPart(R(.25,.35,.08,e),.3,-1.65,-.68),this._addPart(R(.2,.25,.08,e),-.1,-1.7,-.68),this._addPart(R(1.4,.6,1.1,e),-1.65,1.32,0),this._addPart(R(1.4,.6,1.1,e),1.65,1.32,0),this._addPart(R(.22,.6,.22,r),-2.15,1.6,0),this._addPart(R(.18,.5,.18,r),-1.85,1.7,.22),this._addPart(R(.18,.5,.18,r),-1.85,1.7,-.22),this._addPart(R(.22,.6,.22,r),2.15,1.6,0),this._addPart(R(.18,.5,.18,r),1.85,1.7,.22),this._addPart(R(.18,.5,.18,r),1.85,1.7,-.22),this._addPart(R(1.42,.06,.06,s),-1.65,1.62,0),this._addPart(R(1.42,.06,.06,s),1.65,1.62,0),this._addPart(R(.72,2.1,.72,t),-1.62,-.28,0),this._addPart(R(.22,.4,.22,r),-1.62,-.6,-.38),this._addPart(R(.85,.6,.8,e),-1.62,-1.48,0),this._addPart(R(.15,.25,.14,r),-1.4,-1.7,.35),this._addPart(R(.15,.22,.14,r),-1.65,-1.72,.38),this._addPart(R(.15,.2,.14,r),-1.88,-1.68,.32),this._addPart(R(.08,1.1,.95,n),-2.1,-.22,0),this._addPart(R(.06,1,.85,e),-2.18,-.22,0),this._addPart(R(.05,.2,.2,s),-2.22,-.22,0),this._addPart(R(.72,2.1,.72,t),1.62,-.28,0),this._addPart(R(.22,.4,.22,r),1.62,-.6,-.38),this._addPart(R(.85,.6,.8,e),1.62,-1.48,0),this._addPart(R(.15,.22,.14,r),1.4,-1.7,.35),this._addPart(R(.15,.2,.14,r),1.65,-1.72,.38),this._addPart(R(.15,.18,.14,r),1.88,-1.68,.32),this._addPart(R(.22,2.8,.08,e),1.62,-3.3,0),this._addPart(R(.08,2.6,.05,"#440000","#440000",.5),1.62,-3.3,0),this._addPart(R(.9,.12,.15,e),1.62,-1.98,0),this._addPart(R(.18,.5,.14,r),1.62,-2.15,0),this._addPart(R(.25,.18,.18,e),1.62,-2.44,0),this._addPart(R(.95,1.5,.95,t),-.6,-1.62,0),this._addPart(R(.95,1.5,.95,t),.6,-1.62,0),this._addPart(R(.68,.38,.5,n),-.6,-1.12,.38),this._addPart(R(.68,.38,.5,n),.6,-1.12,.38),this._addPart(R(.72,.8,.2,e),-.6,-1.65,.45),this._addPart(R(.72,.8,.2,e),.6,-1.65,.45),this._addPart(R(1.05,.22,1.2,t),-.6,-2.5,.1),this._addPart(R(1.05,.22,1.2,t),.6,-2.5,.1),this._addPart(R(.14,.14,.3,r),-.6,-2.44,.68),this._addPart(R(.14,.14,.3,r),.6,-2.44,.68)}_onPhaseChange(t){t===1&&(this._currentSpeed=Bn.speed*1.5,this._eyeMats&&this._eyeMats.forEach(e=>{e.emissiveIntensity=4}),this._glowMat&&(this._glowMat.emissiveIntensity=3)),t===2&&(this._currentSpeed=Bn.speed*2,this._parts.forEach(e=>{e.material.color.set("#3a0000"),e._origColor="#3a0000"}),this._eyeMats&&this._eyeMats.forEach(e=>{e.color.set("#ff4400"),e.emissiveIntensity=6}),this._glowMat&&(this._glowMat.color.set("#ff0000"),this._glowMat.emissiveIntensity=5))}_behaviorUpdate(t){const e=this.player.camera.position,n=this.position.distanceTo(e);n>Bn.attackRange&&this._moveToward(t,e,this._currentSpeed),this._attackTimer-=t,n<=Bn.attackRange&&this._attackTimer<=0&&(this.player.stats.takeDamage(Bn.damage),this._attackTimer=Bn.attackCooldown),this.currentPhase>=1&&(this._shockwaveTimer-=t,this._shockwaveTimer<=0&&(this._shockwaveTimer=6,n<=6&&this.player.stats.takeDamage(5))),this.currentPhase>=2&&(this._summonTimer-=t,this._summonTimer<=0&&(this._summonTimer=20,this._summonMinions()));for(let s=this._minions.length-1;s>=0;s--){const r=this._minions[s];if(r.dead){this._minions.splice(s,1);continue}const o=e.x-r.position.x,a=e.z-r.position.z,c=Math.sqrt(o*o+a*a);c>1.5?(r.position.x+=o/c*3*t,r.position.z+=a/c*3*t):r.takeDamage&&this.player.stats.takeDamage(2*t),r.applyGravity(t,this.worldData)}}_summonMinions(){const t=["zombie","skeleton","spider"];for(const e of t){const n=vs[e],s=Math.random()*Math.PI*2,r=5+Math.random()*3,o=new N(this.position.x+Math.cos(s)*r,this.position.y,this.position.z+Math.sin(s)*r),a=new ys(n,o,this.scene);a.onDeath=()=>{},this._minions.push(a)}}_die(){var e;for(const n of this._minions)(e=n.dispose)==null||e.call(n);this._minions=[];const t=this.onWin;super._die(),t==null||t()}}class G_{constructor(){this.healthFill=document.getElementById("health-fill"),this.hungerFill=document.getElementById("hunger-fill"),this.dayCounter=document.getElementById("day-counter"),this.crosshair=document.getElementById("crosshair"),this.hudEl=document.getElementById("hud"),this.breakWrap=document.getElementById("break-progress-wrap"),this.breakFill=document.getElementById("break-progress-fill"),this.pickupFlash=document.getElementById("pickup-flash"),this.minimap=document.getElementById("minimap"),this.questPanel=document.getElementById("quest-panel"),this._flashTimeout=null,this._msgTimeout=null}show(){this.hudEl.style.display="flex",this.crosshair.style.display="block",this.dayCounter.style.display="block",this.minimap.style.display="block",this.questPanel&&(this.questPanel.style.display="block");const t=document.getElementById("vol-toggle");t&&(t.style.display="block")}hide(){this.hudEl.style.display="none",this.crosshair.style.display="none",this.dayCounter.style.display="none",this.minimap.style.display="none",this.questPanel&&(this.questPanel.style.display="none")}updateHealth(t,e){const n=Math.max(0,t/e)*100;this.healthFill.style.width=n+"%"}updateHunger(t,e){const n=Math.max(0,t/e)*100;this.hungerFill.style.width=n+"%"}updateDay(t){this.dayCounter.textContent=`Day ${t}`}setBreakProgress(t){t<=0?(this.breakWrap.style.display="none",this.breakFill.style.width="0%"):(this.breakWrap.style.display="block",this.breakFill.style.width=t*100+"%")}showPickup(t){clearTimeout(this._flashTimeout),this.pickupFlash.textContent=`+ ${t}`,this.pickupFlash.style.opacity="1",this._flashTimeout=setTimeout(()=>{this.pickupFlash.style.opacity="0"},1500)}toggleQuests(){if(!this.questPanel)return;const t=this.questPanel.style.display!=="none";this.questPanel.style.display=t?"none":"block"}refreshQuests(t){if(!this.questPanel)return;const e=t.list().map(n=>{const s=t.done.has(n.id),r=t.progress[n.id]??0,o=s?"✓":`${r}/${n.target}`;return`<div class="quest-row${s?" done":""}"><b>${n.name}</b> <span>${o}</span><div class="quest-desc">${n.desc}</div></div>`}).join("");this.questPanel.innerHTML=`<h3>Jobs (J)</h3>${e}`}}const nl=new Map;function Te(i,t){const e=parseInt(i.replace("#",""),16);let n=e>>16&255,s=e>>8&255,r=e&255;return n=Math.max(0,Math.min(255,n+t)),s=Math.max(0,Math.min(255,s+t)),r=Math.max(0,Math.min(255,r+t)),`rgb(${n},${s},${r})`}function V_(){const i=document.createElement("canvas");return i.width=32,i.height=32,i}const Fe=16,ue=2;function tn(i,t,e,n){i.fillStyle=n,i.fillRect(t*ue,e*ue,ue,ue)}function Z(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t*ue,e*ue,n*ue,s*ue)}function us(i,t,e){for(const[n,s]of t)tn(i,n,s,e)}function W_(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)>>>0;return t||1}function X_(i){let t=i;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function mi(i,t){const e=X_(W_(t));for(let n=0;n<Fe;n++)for(let s=0;s<Fe;s++)tn(i,s,n,Te(t,(e()-.5)*24));for(let n=0;n<10;n++){const s=Math.floor(e()*Fe),r=Math.floor(e()*Fe);tn(i,s,r,Te(t,(e()-.5)*55))}Z(i,0,0,Fe,1,Te(t,55)),Z(i,0,0,1,Fe,Te(t,40)),Z(i,0,Fe-1,Fe,1,Te(t,-55)),Z(i,Fe-1,0,1,Fe,Te(t,-45)),i.strokeStyle=Te(t,-70),i.lineWidth=ue,i.strokeRect(ue/2,ue/2,Fe*ue-ue,Fe*ue-ue)}function Y_(i){mi(i,"#8b5a2b"),Z(i,1,6,14,1,"#5a3010"),Z(i,6,5,4,4,"#c8a020"),Z(i,7,6,2,2,"#7a5010")}function q_(i){mi(i,"#3a3a3a"),Z(i,3,8,4,4,"#ff8800"),Z(i,8,8,4,4,"#ff8800"),Z(i,4,9,2,2,"#ffcc00"),Z(i,9,9,2,2,"#ffcc00")}function K_(i){mi(i,"#c49a40"),Z(i,1,1,14,1,"#7a5010"),Z(i,1,14,14,1,"#7a5010"),Z(i,1,1,1,14,"#7a5010"),Z(i,14,1,1,14,"#7a5010"),Z(i,7,1,1,14,"#7a5010")}function $_(i){mi(i,"#2e1808");const t=[[7,3,2],[6,4,4],[6,5,4],[5,6,6],[5,7,6],[4,8,8],[4,9,8],[4,10,8],[4,11,8]];for(const[n,s,r]of t)Z(i,n,s,r,1,"#cc5500");const e=[[7,5,2],[6,7,4],[6,8,4],[5,9,6],[5,10,6]];for(const[n,s,r]of e)Z(i,n,s,r,1,"#ffcc00")}function Z_(i){Z(i,1,5,14,8,"#7a4a20"),Z(i,2,7,12,5,"#a02020"),Z(i,2,6,4,3,"#e8e0d0"),Z(i,1,12,2,3,"#5a3010"),Z(i,13,12,2,3,"#5a3010")}function j_(i){Z(i,1,1,14,14,"rgba(160,220,255,0.35)"),i.strokeStyle="#7ab0cc",i.lineWidth=ue,i.strokeRect(ue/2,ue/2,Fe*ue-ue,Fe*ue-ue),Z(i,3,3,3,1,"rgba(255,255,255,0.6)"),Z(i,3,3,1,3,"rgba(255,255,255,0.6)")}function J_(i,t){const e={chest:Y_,forge:q_,crafting_table:K_,campfire:$_,glass:j_,bed:Z_};if(e[t.id]){e[t.id](i);return}const n=t.blockId>=0?fi[t.blockId]:null;mi(i,(n==null?void 0:n.color)??"#888888")}const Kl={1:"#c8a44a",2:"#9a9a9a",3:"#cfd6e6",4:"#a866ff"},Q_="#6b4423",tg="#4a2c10";function cs(i,t){t.forEach(([e,n],s)=>tn(i,e,n,s%2===0?Q_:tg))}function eg(i,t){const e=Kl[t.tier]??"#aaaaaa",n=Te(e,45),s=Te(e,-35);if(t.isSword)cs(i,[[2,14],[3,13],[4,12]]),tn(i,2,14,"#2a1808"),Z(i,4,10,3,2,s),us(i,[[6,10],[7,9],[7,8],[8,8],[8,7],[9,7],[9,6],[10,6],[10,5],[11,5],[11,4],[12,4],[12,3]],e),tn(i,13,2,n);else if(t.isAxe){cs(i,[[3,14],[4,13],[5,12],[6,11],[7,10]]);const r=[[9,2,4],[8,3,5],[8,4,5],[8,5,5],[8,6,4],[9,7,2]];for(const[o,a,c]of r)Z(i,o,a,c,1,e);Z(i,12,3,1,3,n),Z(i,8,3,1,3,s)}else t.isPickaxe?(cs(i,[[7,13],[7,11],[8,9],[8,7]]),us(i,[[3,4],[4,3],[5,2],[6,2],[7,1],[8,1],[9,1],[10,2],[11,2],[12,3],[13,4]],e),tn(i,3,4,n),tn(i,13,4,n),tn(i,8,2,s),tn(i,9,2,s)):t.isHoe?(cs(i,[[7,14],[7,12],[8,10],[8,8]]),Z(i,6,1,7,2,e),Z(i,6,1,7,1,n),Z(i,6,2,7,1,s)):t.isShovel&&(cs(i,[[7,15],[7,13],[7,11],[8,9]]),Z(i,6,2,4,3,e),us(i,[[7,5],[8,5]],e),Z(i,6,2,4,1,n),Z(i,6,3,1,2,s),Z(i,9,3,1,2,s))}function ng(i,t){const e=Kl[t.tier]??"#aaaaaa",n=Te(e,45),s=Te(e,-35);t.armorSlot==="helmet"?(Z(i,5,2,6,2,e),Z(i,4,4,8,4,e),Z(i,4,4,8,1,n),Z(i,4,8,3,2,s),Z(i,9,8,3,2,s)):t.armorSlot==="chestplate"?(Z(i,5,2,6,2,e),Z(i,3,4,10,8,e),Z(i,3,4,10,1,n),Z(i,3,4,2,8,s),Z(i,11,4,2,8,s)):t.armorSlot==="leggings"?(Z(i,4,2,8,6,e),Z(i,4,8,3,6,e),Z(i,9,8,3,6,e),Z(i,4,2,8,1,n),Z(i,7,8,2,6,s)):t.armorSlot==="boots"&&(Z(i,3,8,4,5,e),Z(i,3,12,5,2,s),Z(i,9,8,4,5,e),Z(i,9,12,5,2,s),Z(i,3,8,4,1,n),Z(i,9,8,4,1,n))}function ig(i,t,e){const n=[[5,3,6],[4,4,8],[3,5,10],[3,6,10],[3,7,10],[3,8,10],[3,9,10],[4,10,8],[5,11,6]];for(const[s,r,o]of n)Z(i,s,r,o,1,t);Z(i,4,5,2,2,e)}function sg(i){Z(i,2,6,12,6,"#c8863c"),Z(i,2,6,12,1,"#e8b878"),Z(i,3,7,10,2,"#e8b878");for(const t of[5,8,10])Z(i,t,8,1,3,"#8a5820")}function rg(i){const t=[[7,4,2],[7,6,2],[6,8,4],[6,10,4],[7,12,2],[7,13,2]];for(const[e,n,s]of t)Z(i,e,n,s,1,"#ff7722");Z(i,7,4,1,8,"#e05500"),Z(i,6,1,1,3,"#3a9028"),Z(i,9,0,1,4,"#3a9028"),Z(i,8,2,1,2,"#3a9028")}function il(i,t,e){const n=Te(t,-30);Z(i,4,6,7,4,t),Z(i,4,6,7,1,Te(t,35)),us(i,[[1,5],[2,6],[2,7],[1,8],[2,8],[2,9]],n),tn(i,10,7,"#111111"),Z(i,6,5,2,1,n),Z(i,6,10,2,1,n),e&&(Z(i,5,7,1,2,"#c87830"),Z(i,8,7,1,2,"#c87830"))}function So(i,t){Z(i,5,9,6,3,"#3a2810"),Z(i,7,7,2,5,t),Z(i,8,2,1,5,"#2a7020")}function og(i,t){const e=Te(t,-30),n=Te(t,40);Z(i,3,6,10,4,e),Z(i,4,6,8,1,n),Z(i,3,7,10,3,t),Z(i,4,9,8,1,Te(t,-15))}function ag(i,t){const e=Te(t,55),n=[[7,2,2],[6,3,4],[6,4,4],[5,5,6],[5,6,6],[5,7,6],[6,8,4],[6,9,4],[7,10,2]];for(const[s,r,o]of n)Z(i,s,r,o,1,t);Z(i,6,3,1,5,e)}function cg(i){[[3,13],[4,12],[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4]].forEach(([e,n],s)=>tn(i,e,n,s%3===0?"#6a4018":"#8b5a2b"))}function lg(i){us(i,[[3,3],[4,4],[4,5],[5,6],[5,7],[6,8],[6,9],[7,10],[8,10],[9,11],[10,11],[11,12],[12,12]],"#eeddcc")}function hg(i){Z(i,5,7,6,2,"#e8e0c8");for(const[t,e]of[[3,6],[3,8],[11,6],[11,8]])Z(i,t,e,2,2,"#e8e0c8")}function dg(i,t,e){mi(i,t);const n=[[3,3,2],[9,3,2],[5,6,2],[10,8,2],[3,10,2],[8,11,2]];for(const[s,r,o]of n)Z(i,s,r,o,o,e)}function Mo(i,t){const e=Te(t,-40),n=[[6,4,4],[5,5,6],[4,6,8],[4,7,8],[4,8,8],[5,9,6],[6,10,4]];for(const[s,r,o]of n)Z(i,s,r,o,1,t);Z(i,5,6,1,3,e),Z(i,9,6,1,3,e)}function fg(i){const t=[[5,2,6],[5,4,6],[6,6,4],[6,8,4],[7,10,2],[7,12,2]];for(const[e,n,s]of t)Z(i,e,n,s,2,"#eeeecc")}function ug(i){Z(i,2,5,12,6,"#1a0a1a"),Z(i,5,6,6,4,"#8822aa"),Z(i,7,7,2,2,"#44ff44")}function pg(i){Z(i,2,2,12,12,"#333333"),Z(i,3,3,10,10,"#2a2a2a"),Z(i,4,4,8,8,"#44ccff"),Z(i,6,6,2,2,"#ccffff")}function mg(i){const t=[[7,1,2],[6,2,4],[5,3,6],[4,4,8],[3,5,10],[3,6,10],[3,7,10],[3,8,10],[4,9,8],[5,10,6],[6,11,4],[7,12,2]];for(const[e,n,s]of t)Z(i,e,n,s,1,"#220022");Z(i,6,6,4,4,"#cc44ff"),Z(i,7,7,2,2,"#f0aaff")}const sl={bread:sg,carrot:rg,wheat:i=>ig(i,"#cccc44","#eeee88"),baked_potato:i=>Mo(i,"#c87830"),cooked_meat:i=>Mo(i,"#8b4a2a"),raw_meat:i=>Mo(i,"#cc4444"),raw_fish:i=>il(i,"#88aacc",!1),cooked_fish:i=>il(i,"#c8a858",!0),wheat_seed:i=>So(i,"#aaaa22"),carrot_seed:i=>So(i,"#ff8800"),potato_seed:i=>So(i,"#c89050"),iron_ore:i=>dg(i,"#828282","#cc8855"),crystal_shard:i=>ag(i,"#9944ee"),iron_ingot:i=>og(i,"#c0c0d0"),stick:cg,string:lg,bone:hg,troll_fang:fg,witch_eye:ug,golem_core:pg,summoning_stone:mg,torch:i=>{Z(i,7,2,2,6,"#c8a050"),Z(i,6,1,4,3,"#ffaa22"),Z(i,7,0,2,2,"#fff0a0")},boat:i=>{Z(i,2,9,12,3,"#8b5a2b"),Z(i,3,8,10,2,"#a06a38"),Z(i,7,3,2,6,"#dddddd")}};function xs(i){if(!i)return"";const t=nl.get(i.id);if(t)return t;let e;try{const n=V_(),s=n.getContext("2d");s.imageSmoothingEnabled=!1,sl[i.id]?sl[i.id](s):i.category==="block"?J_(s,i):i.category==="tool"||i.category==="weapon"?eg(s,i):i.category==="armor"?ng(s,i):mi(s,"#666666"),e=n.toDataURL()}catch(n){console.error(`Failed to draw icon for item "${i.id}":`,n),e=""}return nl.set(i.id,e),e}class _g{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("hotbar"),this.slotEls=[],this._build(),t.addChangeListener(()=>this.refresh())}_build(){this.el.innerHTML="",this.slotEls=[];for(let t=0;t<9;t++){const e=document.createElement("div");e.className="hotbar-slot",e.innerHTML=`
        <span class="slot-key">${t+1}</span>
        <div class="slot-icon-wrap" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"></div>
        <span class="slot-count"></span>
      `,this.el.appendChild(e),this.slotEls.push(e)}this._updateSelected()}show(){this.el.style.display="flex"}hide(){this.el.style.display="none"}select(t){this.inventory.hotbarIndex=(t%9+9)%9,this._updateSelected()}scroll(t){const e=((this.inventory.hotbarIndex+t)%9+9)%9;this.select(e)}_updateSelected(){this.slotEls.forEach((t,e)=>{t.classList.toggle("selected",e===this.inventory.hotbarIndex)})}refresh(){for(let t=0;t<9;t++){const e=this.inventory.slots[t],n=this.slotEls[t].querySelector(".slot-icon-wrap"),s=this.slotEls[t].querySelector(".slot-count");if(n.innerHTML="",e.itemId&&e.count>0){const r=this.itemRegistry.getItem(e.itemId),o=document.createElement("img");o.className="item-icon",o.src=xs(r),o.title=(r==null?void 0:r.name)??e.itemId,n.appendChild(o),s.textContent=e.count>1?e.count:""}else s.textContent=""}}}class gg{constructor(t,e){this.inventory=t,this.itemRegistry=e,this.el=document.getElementById("inventory-overlay"),this.grid=document.getElementById("inv-grid"),this.armorRow=document.getElementById("armor-row"),this.defenseLabel=document.getElementById("armor-defense-label"),this.pigGrid=document.getElementById("pig-grid"),this.visible=!1,this._selected=null,t.addChangeListener(()=>{this.visible&&this.refresh()})}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){this._refreshArmor(),this._fillGrid(this.grid,this.inventory.slots,t=>t,{hotbar:!0,armorClick:!0}),this.pigGrid&&this._fillGrid(this.pigGrid,this.inventory.pigSlots,t=>`p${t}`,{hotbar:!1,armorClick:!1})}_fillGrid(t,e,n,{hotbar:s,armorClick:r}){if(t){t.innerHTML="";for(let o=0;o<e.length;o++){const a=e[o],c=n(o),l=document.createElement("div");if(l.className="inv-slot",s&&o<9&&(l.style.border="1px solid rgba(255,255,150,0.4)"),this._selected===c&&(l.style.outline="2px solid #fff"),a.itemId&&a.count>0){const h=this.itemRegistry.getItem(a.itemId),d=document.createElement("img");if(d.src=xs(h),d.title=(h==null?void 0:h.name)??a.itemId,l.appendChild(d),a.count>1){const u=document.createElement("span");u.className="slot-count",u.textContent=a.count,l.appendChild(u)}}l.addEventListener("click",()=>{const h=a.itemId?this.itemRegistry.getItem(a.itemId):null;if(r&&(h!=null&&h.armorSlot)&&this._selected===null&&typeof c=="number"){this.inventory.equipArmor(c,this.itemRegistry),this.refresh();return}this._selected===null?a.itemId&&(this._selected=c,this.refresh()):(this.inventory.swapSlots(this._selected,c),this._selected=null,this.refresh())}),t.appendChild(l)}}}_refreshArmor(){if(this.armorRow){this.armorRow.innerHTML="";for(const t of ds){const e=this.inventory.armor[t],n=document.createElement("div");n.className="armor-slot";const s=document.createElement("div");if(s.className="slot-label",s.textContent=t.slice(0,4),n.appendChild(s),e.itemId){const r=this.itemRegistry.getItem(e.itemId),o=document.createElement("img");o.src=xs(r),o.title=(r==null?void 0:r.name)??e.itemId,n.appendChild(o)}n.addEventListener("click",()=>{this.inventory.unequipArmor(t,this.itemRegistry),this.refresh()}),this.armorRow.appendChild(n)}this.defenseLabel&&(this.defenseLabel.textContent=`Defense: ${this.inventory.getArmorDefense(this.itemRegistry)}`)}}}const Ke=150,Ce=48,Eo=.35,vg={zombie:"#ff3b3b",skeleton:"#ff3b3b",spider:"#ff3b3b",cow:"#ffffff",pig:"#ffffff",sheep:"#ffffff",chicken:"#ffffff",fish:"#3bbfff",shark:"#ff9900"};class yg{constructor(t){var e;this.worldData=t,this.canvas=document.getElementById("minimap"),this.ctx=(e=this.canvas)==null?void 0:e.getContext("2d"),this._terrainCanvas=document.createElement("canvas"),this._terrainCanvas.width=Ke,this._terrainCanvas.height=Ke,this._terrainCtx=this._terrainCanvas.getContext("2d"),this._timer=Eo}setWorldData(t){this.worldData=t,this._timer=Eo}update(t,e,n,s=[],r=[]){var h;if(!this.ctx)return;this._timer+=t,this._timer>=Eo&&(this._timer=0,this._drawTerrain(e));const o=this.ctx;o.clearRect(0,0,Ke,Ke),o.drawImage(this._terrainCanvas,0,0);const a=Math.floor(e.x),c=Math.floor(e.z),l=Ke/(Ce*2);for(const d of s){if(!d||d.dead)continue;const u=d.position.x-a,f=d.position.z-c;Math.abs(u)>Ce||Math.abs(f)>Ce||(o.fillStyle=vg[(h=d.mobType)==null?void 0:h.id]??"#dddddd",o.beginPath(),o.arc((u+Ce)*l,(f+Ce)*l,2.5,0,Math.PI*2),o.fill())}for(const d of r){if(!d)continue;const u=d.x-a,f=d.z-c;Math.abs(u)>Ce||Math.abs(f)>Ce||(o.fillStyle=d.color||"#ffff00",o.beginPath(),o.arc((u+Ce)*l,(f+Ce)*l,3.5,0,Math.PI*2),o.fill(),o.strokeStyle="#000",o.lineWidth=1,o.stroke())}o.save(),o.translate(Ke/2,Ke/2),o.rotate(n),o.fillStyle="#ffee66",o.strokeStyle="#000000",o.lineWidth=1,o.beginPath(),o.moveTo(0,-7),o.lineTo(5,6),o.lineTo(0,3),o.lineTo(-5,6),o.closePath(),o.fill(),o.stroke(),o.restore(),o.strokeStyle="rgba(255,255,255,0.4)",o.lineWidth=2,o.beginPath(),o.arc(Ke/2,Ke/2,Ke/2-1,0,Math.PI*2),o.stroke()}_drawTerrain(t){const e=this._terrainCtx,n=this.worldData;if(e.fillStyle="#0a0a0a",e.fillRect(0,0,Ke,Ke),!n)return;const s=Math.floor(t.x),r=Math.floor(t.z),o=Ke/(Ce*2),a=Math.max(1,Math.round(1/o)),c=Math.ceil(o*a);for(let l=-Ce;l<Ce;l+=a)for(let h=-Ce;h<Ce;h+=a){const d=s+l,u=r+h,f=n.surfaceY(d,u);if(f<0)continue;const _=fi[n.get(d,f,u)];_&&(e.fillStyle=_.color,e.fillRect((l+Ce)*o,(h+Ce)*o,c,c))}}}class xg{constructor(t,e,n,s,r,o){this.inventory=t,this.itemRegistry=e,this.recipeRegistry=n,this.getStation=s,this.getPlayerTier=r,this.killedBosses=o,this.el=document.getElementById("crafting-overlay"),this.stationLabel=document.getElementById("crafting-station-label"),this.recipeList=document.getElementById("recipe-list"),this.visible=!1,this.onCraft=null}toggle(){return this.visible?this.hide():this.show(),this.visible}show(){this.visible=!0,this.el.style.display="block",this.refresh()}hide(){this.visible=!1,this.el.style.display="none"}refresh(){const t=this.getStation(),e=this.getPlayerTier();this.stationLabel.textContent=`Station: ${t.replace("_"," ").toUpperCase()}`;const n=this.recipeRegistry.getAllVisible(this.inventory,t,e,this.killedBosses);this.recipeList.innerHTML="";for(const s of n){const r=this.inventory.hasAll(s.ingredients),o=document.createElement("div");o.className=`recipe-row${r?"":" unavailable"}`;const a=this.itemRegistry.getItem(s.resultItem),c=Object.entries(s.ingredients).map(([l,h])=>{var d;return`${h}× ${((d=this.itemRegistry.getItem(l))==null?void 0:d.name)??l}`}).join(", ");o.innerHTML=`
        <img src="${xs(a)}" style="width:32px;height:32px;image-rendering:pixelated;flex-shrink:0;" />
        <div class="recipe-info">
          <div class="recipe-name">${(a==null?void 0:a.name)??s.resultItem}</div>
          <div class="recipe-ingredients">${c}</div>
        </div>
        <div class="recipe-result-count">${s.resultCount>1?"×"+s.resultCount:""}</div>
      `,r&&o.addEventListener("click",()=>{var h;this.recipeRegistry.craft(s,this.inventory,this.itemRegistry)&&((h=this.onCraft)==null||h.call(this,s),this.refresh())}),this.recipeList.appendChild(o)}}}const Sg=1.1,Mg=90,Eg=40;class Tg{constructor(t,e,n,s,r){this.itemId=t,this.count=e,this.position=n.clone(),this.age=0,this.scene=s;const o=r.getItem(t),a=new l0().load(xs(o));a.magFilter=Le,a.minFilter=Le;const c=new wa({map:a,transparent:!0});this.mesh=new Hl(c),this.mesh.scale.set(.5,.5,.5),this.mesh.position.copy(this.position),s.add(this.mesh)}update(t){this.age+=t,this.mesh.position.y=this.position.y+Math.sin(this.age*3)*.08}dispose(){var t;this.scene.remove(this.mesh),(t=this.mesh.material.map)==null||t.dispose(),this.mesh.material.dispose()}}class bg{constructor(t,e,n){this.scene=t,this.inventory=e,this.itemRegistry=n,this.items=[]}spawn(t,e,n){this.items.length>=Eg&&this.items.shift().dispose(),this.items.push(new Tg(t,e,n,this.scene,this.itemRegistry))}update(t,e){for(let n=this.items.length-1;n>=0;n--){const s=this.items[n];s.update(t);const r=s.position.x-e.x,o=s.position.z-e.z,a=Math.hypot(r,o),c=Math.abs(s.position.y-(e.y-1.8))<2.2,l=a<Sg&&c;if(s.age>Mg){s.dispose(),this.items.splice(n,1);continue}if(l){const h=this.inventory.add(s.itemId,s.count,this.itemRegistry);if(h>0){s.count=h;continue}s.dispose(),this.items.splice(n,1)}}}clear(){for(const t of this.items)t.dispose();this.items=[]}}const Ag=16,wg=.8,rl=3;function Rg(i,t,e,n){return i.get(Math.floor(t),Math.floor(e),Math.floor(n))===v.WATER}class Cg{constructor(t,e,n){this.mob=t,this.worldData=e,this.player=n,this._wanderTimer=Math.random()*rl,this._dir=new N(Math.random()-.5,(Math.random()-.5)*.3,Math.random()-.5).normalize(),this._attackTimer=0}update(t){if(this.mob.dead)return;const e=this.mob.mobType,n=this.mob.position;if(e.id==="shark"&&this.player){const s=this.player.camera.position,r=s.x-n.x,o=s.y-n.y,a=s.z-n.z,c=Math.sqrt(r*r+o*o+a*a);if(this.worldData.get(Math.floor(s.x),Math.floor(s.y-1),Math.floor(s.z))===v.WATER&&c<e.detectionRange){if(c<=e.attackRange)this._attackTimer-=t,this._attackTimer<=0&&(this.player.stats.takeDamage(e.damage),this._attackTimer=e.attackCooldown);else{const h=r/c,d=o/c,u=a/c;this._tryMove(n,h,d,u,e.speed,t)}this.mob.mesh.rotation.y=Math.atan2(r,a);return}}this._wanderTimer-=t,this._wanderTimer<=0&&(this._wanderTimer=rl*(.6+Math.random()),this._dir.set(Math.random()-.5,(Math.random()-.5)*.3,Math.random()-.5).normalize()),this._tryMove(n,this._dir.x,this._dir.y,this._dir.z,e.speed*.5,t),this.mob.mesh.rotation.y=Math.atan2(this._dir.x,this._dir.z)}_tryMove(t,e,n,s,r,o){const a=t.x+e*r*o,c=Math.min(ze-.5,t.y+n*r*o),l=t.z+s*r*o;Rg(this.worldData,a,c,l)?(t.x=a,t.y=c,t.z=l):this._wanderTimer=0}}class Pg{constructor(t,e,n,s,r){this.scene=t,this.worldData=e,this.inventory=n,this.itemRegistry=s,this.player=r,this.mobs=[],this._spawnTimer=0,this._initialised=!1}init(){if(!this._initialised){this._initialised=!0;for(let t=0;t<10;t++)this._trySpawn()}}update(t){var n,s;const e=(s=(n=this.player)==null?void 0:n.camera)==null?void 0:s.position;for(let r=this.mobs.length-1;r>=0;r--){const{mob:o,ai:a}=this.mobs[r];if(o.dead){this.mobs.splice(r,1);continue}if(e){const c=o.position.x-e.x,l=o.position.z-e.z;if(c*c+l*l>130*130){o.dispose(),this.mobs.splice(r,1);continue}}a.update(t)}this.mobs.length<Ag&&(this._spawnTimer+=t,this._spawnTimer>=6&&(this._spawnTimer=0,this._trySpawn()))}_trySpawn(){var n,s;const t=(s=(n=this.player)==null?void 0:n.camera)==null?void 0:s.position,e=16;for(let r=0;r<e;r++){let o,a;if(t&&r<e-4){const m=Math.random()*Math.PI*2,p=10+Math.random()*45;o=t.x+Math.cos(m)*p,a=t.z+Math.sin(m)*p}else o=2+Math.random()*(Ot-4),a=2+Math.random()*(Nt-4);const c=Math.floor(o),l=Math.floor(a);if(c<1||c>=Ot-1||l<1||l>=Nt-1)continue;const h=this.worldData.surfaceY(c,l);if(h<0||this.worldData.get(c,h,l)!==v.WATER)continue;const d=Math.random()<wg?"fish":"shark",u=vs[d],f=new N(o,h-1,a),_=new ys(u,f,this.scene);_.onDeath=m=>{for(const p of m.mobType.dropItems)Math.random()<p.chance&&this.inventory.add(p.itemId,p.count,this.itemRegistry)};const g=new Cg(_,this.worldData,this.player);this.mobs.push({mob:_,ai:g});return}}getMobs(){return this.mobs.map(t=>t.mob)}clear(){for(const{mob:t}of this.mobs)t.dispose();this.mobs=[]}}const rr="oliver_game_save";class Lg{constructor(t){this.getState=t.getState,this.worldData=t.worldData,this.inventory=t.inventory,this.stats=t.playerStats,this.dayNight=t.dayNight,this.killedBosses=t.killedBosses,this.getPlayerPos=t.getPlayerPos}hasSave(){return!!localStorage.getItem(rr)}save(){const t=this.getPlayerPos(),e=this.getState?this.getState():{},n={version:2,worldData:this.worldData.serialize(),inventory:this.inventory.serialize(),playerStats:this.stats.serialize(),dayNumber:this.dayNight.dayNumber,timeOfDay:this.dayNight.timeOfDay,killedBosses:[...this.killedBosses],playerPos:{x:t.x,y:t.y,z:t.z},...e};try{localStorage.setItem(rr,JSON.stringify(n))}catch(s){console.warn("Save failed (storage full?):",s)}}load(){const t=localStorage.getItem(rr);if(!t)return null;try{return JSON.parse(t)}catch{return null}}apply(t,e){if(t){this.worldData.deserialize(t.worldData),this.inventory.deserialize(t.inventory),this.stats.deserialize(t.playerStats),this.dayNight.dayNumber=t.dayNumber??1,this.dayNight.timeOfDay=t.timeOfDay??.05;for(const n of t.killedBosses??[])this.killedBosses.add(n);return t.playerPos&&e&&e.camera.position.set(t.playerPos.x,t.playerPos.y,t.playerPos.z),t}}clear(){localStorage.removeItem(rr)}}function ol(i,t,e,n){return`${i}:${t},${e},${n}`}function al(i){const t=3+Math.floor(Math.random()*3),e=i.reduce((r,o)=>r+o[3],0),n=[],s=new Set;for(let r=0;r<t;r++){let o=Math.random()*e;for(const a of i)if(o-=a[3],o<=0&&!s.has(a[0])){n.push(a),s.add(a[0]);break}}return n.map(([r,o,a])=>({itemId:r,count:o+Math.floor(Math.random()*(a-o+1))}))}const Ig=[["bread",2,5,30],["cooked_meat",1,4,25],["iron_ore",2,6,25],["stick",4,12,20],["string",2,6,18],["bone",2,5,18],["cobblestone",6,16,15],["planks",4,10,15],["wheat_seed",3,8,12],["carrot",2,6,12],["torch",2,6,14]],Ng=[["iron_ingot",2,5,40],["crystal_shard",1,2,15],["stone_sword",1,1,20],["stone_pickaxe",1,1,18],["iron_pickaxe",1,1,8],["glass",2,6,12]],Ug=[["crystal_shard",2,4,40],["iron_ingot",4,8,30],["iron_sword",1,1,20],["iron_pickaxe",1,1,18],["crystal_sword",1,1,5],["bread",3,8,20]],Dg=[["glowstone",4,10,40],["netherrack",8,16,30],["crystal_shard",2,5,25],["iron_ingot",3,6,20],["obsidian",1,3,15],["cooked_meat",2,5,15]];class Og{constructor(){this.chests=new Map}open(t,e,n,s){const r=ol(t,e,n,s);return this.chests.has(r)||this.chests.set(r,this._rollLoot(t,e,s)),this.chests.get(r)}takeAll(t,e,n,s){const r=ol(t,e,n,s),o=this.chests.get(r)??[];return this.chests.set(r,[]),o}serialize(){return[...this.chests.entries()].map(([t,e])=>({k:t,items:e}))}deserialize(t){if(this.chests.clear(),!!t)for(const e of t)this.chests.set(e.k,e.items??[])}_rollLoot(t,e,n){if(t==="nether")return al(Dg);const s=Ot/2,r=Nt/2,o=Math.sqrt((e-s)**2+(n-r)**2),a=o>480?Ug:o>240?Ng:Ig;return al(a)}}const ls=[{id:"chop_wood",name:"Chop some wood",desc:"Break 10 wood logs.",type:"mine",itemId:"wood_log",target:10,reward:{stick:4,planks:4}},{id:"plant_wheat",name:"Start a farm",desc:"Plant wheat on farmland.",type:"plant",itemId:"wheat_seed",target:1,reward:{bread:2}},{id:"find_witch",name:"Find the Swamp Witch",desc:"Travel to the south-east swamp.",type:"visit",bossId:"swamp_witch",target:1,reward:{cooked_meat:3,torch:4}}];class Bg{constructor(){this.progress=Object.fromEntries(ls.map(t=>[t.id,0])),this.done=new Set,this.onComplete=null}list(){return ls}noteMine(t,e=1){for(const n of ls)n.type==="mine"&&n.itemId===t&&this._add(n,e)}notePlant(t){for(const e of ls)e.type==="plant"&&e.itemId===t&&this._add(e,1)}noteVisit(t){for(const e of ls)e.type==="visit"&&e.bossId===t&&this._add(e,1)}_add(t,e){var n;this.done.has(t.id)||(this.progress[t.id]=Math.min(t.target,(this.progress[t.id]??0)+e),this.progress[t.id]>=t.target&&(this.done.add(t.id),(n=this.onComplete)==null||n.call(this,t)))}serialize(){return{progress:this.progress,done:[...this.done]}}deserialize(t){t&&(this.progress={...this.progress,...t.progress??{}},this.done=new Set(t.done??[]))}}const Pe={MENU:"menu",PLAYING:"playing",PAUSED:"paused",WIN:"win"};class Fg{constructor(t){this.renderer=t,this.state=Pe.MENU,this.killedBosses=new Set,this.activeBoss=null,this.scene=new e0,this.scene.background=new kt(.5,.7,1),this.scene.fog=new _s(10075135,.007),this.camera=new Qe(70,window.innerWidth/window.innerHeight,.1,220),this.ambientLight=new u0(16777215,.6),this.scene.add(this.ambientLight),this.dirLight=new f0(16777215,.8),this.dirLight.position.set(30,30,15),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=110,this.dirLight.shadow.camera.left=-45,this.dirLight.shadow.camera.right=45,this.dirLight.shadow.camera.top=45,this.dirLight.shadow.camera.bottom=-45,this.dirLight.shadow.bias=-.0015,this.dirLight.target=new xe,this.scene.add(this.dirLight.target),this.scene.add(this.dirLight),this.itemRegistry=new b_,this.recipeRegistry=new w_,this.worldData=new Wc,L0(this.worldData);const e=this._generateAtlas();this._atlasTex=e,this.worldRenderer=new Yc(this.scene,this.worldData,e),this.worldRenderer.streamAround(Ot/2,Nt/2,200),this.currentDimension="overworld",this.overworldData=this.worldData,this.overworldRenderer=this.worldRenderer,this.netherData=null,this.netherRenderer=null,this.stats=new f_,this.inventory=new u_,this.stats.linkArmorSource(this.inventory,this.itemRegistry),this.hud=new G_,this.minimap=new yg(this.worldData),this.hotbar=new _g(this.inventory,this.itemRegistry),this.farmingSystem=new P_(this.worldData,this.scene),this.miningSystem=new R_(this.worldData,this.worldRenderer,this.inventory,this.stats,this.itemRegistry),this.miningSystem.onPickup=n=>this.hud.showPickup(n),this.miningSystem.onOverflow=(n,s)=>this._dropNearPlayer(n,s),this.miningSystem.onBroke=(n,s)=>this.quests.noteMine(s,n.dropCount??1),this.miningSystem.removeCropAt=n=>this.farmingSystem.removeCropAt(n),this.miningSystem.isOccupied=(n,s,r)=>this.player.occupies(n,s,r),this.farmingSystem.onPlant=n=>this.quests.notePlant(n),this.chests=new Og,this.quests=new Bg,this.spawnPoint=null,this._playReady=!1,this._oinkTimer=0,this.player=new M_(this.camera,t,this.worldData,this.worldRenderer,this.stats,this.inventory,this.miningSystem,this.farmingSystem,this.hotbar,this.hud,this.itemRegistry),this.player.scene=this.scene,this.player.getDimension=()=>this.currentDimension,this.player.onOverflow=(n,s)=>this._dropNearPlayer(n,s),this.player.onOpenChest=(n,s,r)=>this._openChest(n,s,r),this.player.onSetSpawn=n=>{this.spawnPoint={...n,dim:this.currentDimension},this._showMsg("Home set. You will wake up here.")},this.inventoryUI=new gg(this.inventory,this.itemRegistry),this.craftingUI=new xg(this.inventory,this.itemRegistry,this.recipeRegistry,()=>this.player.currentStation,()=>this.stats.tier,this.killedBosses),this.craftingUI.onCraft=n=>{const s=this.itemRegistry.getItem(n.resultItem);s&&this.stats.updateTier(s),n.resultItem==="summoning_stone"&&this._showMsg("Summoning Stone crafted! Use it at the Altar in the swamp.")},this.dayNight=new I_(this.scene,this.ambientLight,this.dirLight),this.dayNight.onNightBegin=()=>{this.mobSpawner.setNight(!0),this.passiveSpawner.setNight(!0),this._showMsg("Night falls... they are coming.")},this.dayNight.onDayBegin=n=>{this.mobSpawner.setNight(!1),this.passiveSpawner.setNight(!1),this.hud.updateDay(n)},this.mobSpawner=new U_(this.scene,this.worldData,this.player,this.inventory,this.itemRegistry),this.mobSpawner.onMobDeath=n=>{this.hud.showPickup(`${n.mobType.name} slain!`)},this.passiveSpawner=new O_(this.scene,this.worldData,this.inventory,this.itemRegistry,this.player),this.passiveSpawner.onCompanionDeath=()=>{for(const n of this.inventory.drainPigSlots())this._dropNearPlayer(n.itemId,n.count);this._showMsg("Hammy... you will be missed.")},this.seaLife=new Pg(this.scene,this.worldData,this.inventory,this.itemRegistry,this.player),this.droppedItems=new bg(this.scene,this.inventory,this.itemRegistry),this.player.onDropItem=(n,s,r)=>this.droppedItems.spawn(n,s,r),this.player.setupAttackListener(()=>[...this.mobSpawner.getMobs(),...this.passiveSpawner.getMobs(),...this.seaLife.getMobs(),...(this._activeBossList??[]).filter(n=>!n.dead)]),this.stats.onDeath=()=>this._onPlayerDeath(),this.stats.onChange=()=>{this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger)},this.player.onUseAltarWithStone=()=>{if([...this.killedBosses].filter(n=>["cave_troll","swamp_witch","stone_golem"].includes(n)).length<3){this._showMsg("You must defeat all three guardians first!");return}this._spawnFinalBoss()},this.player.onSleepInBed=()=>{if(!this.dayNight.isNight){this._showMsg("You can only sleep at night.");return}this.dayNight.timeOfDay=.05,this._showMsg("You sleep through the night..."),this.saveSystem.save()},this.player.onUsePortal=()=>this._usePortal(),this.quests.onComplete=n=>{for(const[s,r]of Object.entries(n.reward??{}))this._giveOrDrop(s,r);this._showMsg(`Quest complete: ${n.name}!`),this.hud.refreshQuests(this.quests)},this.saveSystem=new Lg({worldData:this.overworldData,inventory:this.inventory,playerStats:this.stats,dayNight:this.dayNight,killedBosses:this.killedBosses,getPlayerPos:()=>this.camera.position,getState:()=>({spawnPoint:this.spawnPoint,chests:this.chests.serialize(),crops:this.farmingSystem.serialize(),quests:this.quests.serialize(),currentDimension:this.currentDimension})}),this._setupUIKeys(),this._setupMenuButtons(),this._saveTimer=0}_setupMenuButtons(){var e,n,s,r;for(const o of["easy","normal","hard"]){const a=document.getElementById(`btn-${o}`);a&&a.addEventListener("click",()=>{this.saveSystem.clear(),this._startNewGame(o)})}const t=document.getElementById("btn-continue");this.saveSystem.hasSave()&&(t.style.display="block",t.addEventListener("click",()=>this._loadGame())),document.getElementById("btn-restart").addEventListener("click",()=>{this.saveSystem.clear(),location.reload()}),(e=document.getElementById("btn-resume"))==null||e.addEventListener("click",()=>this._resume()),(n=document.getElementById("btn-save-quit"))==null||n.addEventListener("click",()=>{this.saveSystem.save(),location.reload()}),(s=document.getElementById("vol-slider"))==null||s.addEventListener("input",o=>{$e.setVolume(Number(o.target.value)/100)}),(r=document.getElementById("vol-toggle"))==null||r.addEventListener("click",()=>{const o=$e.toggleMute();document.getElementById("vol-toggle").textContent=o?"🔊":"🔇"})}_startNewGame(t="normal"){this.killedBosses.clear(),this.stats.setDifficulty(t),document.getElementById("menu-screen").style.display="none",this.state=Pe.PLAYING,this._enterPlayMode()}_loadGame(){const t=this.saveSystem.load();if(!t){this._startNewGame();return}this.worldRenderer.disposeAll();const e=this.saveSystem.apply(t,this.player);this.chests.deserialize((e==null?void 0:e.chests)??t.chests),this.farmingSystem.deserialize((e==null?void 0:e.crops)??t.crops),this.quests.deserialize((e==null?void 0:e.quests)??t.quests),this.spawnPoint=t.spawnPoint??null,this.worldRenderer.streamAround(this.camera.position.x,this.camera.position.z,200),document.getElementById("menu-screen").style.display="none",this.state=Pe.PLAYING,this._enterPlayMode({isLoad:!0})}_enterPlayMode({isLoad:t=!1}={}){$e.startMusic(),this.hud.show(),this.hotbar.show(),this.hud.updateDay(this.dayNight.dayNumber),this.hud.updateHealth(this.stats.health,this.stats.maxHealth),this.hud.updateHunger(this.stats.hunger,this.stats.maxHunger),this.hotbar.refresh(),this.hud.refreshQuests(this.quests),!t&&this.inventory.countOf("wood_log")===0&&(this.inventory.add("wood_log",8,this.itemRegistry),this.inventory.add("planks",8,this.itemRegistry),this.inventory.add("stick",4,this.itemRegistry),this.inventory.add("wooden_axe",1,this.itemRegistry),this.inventory.add("wooden_pickaxe",1,this.itemRegistry),this.inventory.add("wheat_seed",6,this.itemRegistry),this.inventory.add("carrot_seed",4,this.itemRegistry),this.inventory.add("potato_seed",4,this.itemRegistry),this.inventory.add("bread",3,this.itemRegistry)),this._playReady||(this.renderer.domElement.addEventListener("click",()=>{this.state===Pe.PLAYING&&!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.lock()}),this._setupSky(),this._setupBlockOutline(),this._setupMiniBosses(),this._playReady=!0),this.spawnPoint||(this.spawnPoint={x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,dim:"overworld"}),this.passiveSpawner.init(),this.seaLife.init(),this._showMsg(t?"Welcome back. The island is waiting.":"Stranded! Gather wood, build tools, survive the night.")}_setupMiniBosses(){const e=new N(240,4,240),n=new B_(e,this.scene,this.player,this.inventory,this.itemRegistry,this.mobSpawner);n.onDeath=()=>this._onMiniBossKilled("cave_troll","Cave Troll","Swamp Witch"),this._bossList=[];const s=(l,h)=>{if(this.killedBosses.has(l)){h.dead=!0,this.scene.remove(h.mesh);return}this._bossList.push(h)};s("cave_troll",n);const r=new N(138*8,13,138*8),o=new k_(r,this.scene,this.player,this.inventory,this.itemRegistry);o.onDeath=()=>this._onMiniBossKilled("swamp_witch","Swamp Witch","Stone Golem"),s("swamp_witch",o);const a=new N(150*8,20,44*8),c=new z_(a,this.scene,this.player,this.inventory,this.itemRegistry);c.onDeath=()=>this._onMiniBossKilled("stone_golem","Stone Golem",null),s("stone_golem",c),this.activeBoss=this._bossList[0]??null,this._activeBossList=this._bossList}_onMiniBossKilled(t,e,n){this.killedBosses.add(t),document.getElementById("boss-bar-wrap").style.display="none",this._showMsg(`${e} defeated! ${n?`Seek the ${n}.`:"Craft the Summoning Stone at the Forge!"}`),this.saveSystem.save(),this.activeBoss=null,this.killedBosses.size>=3&&this._showMsg("All guardians slain! Craft the Summoning Stone at the Forge.")}_spawnFinalBoss(){const t=new N(1104,15,1104),e=new H_(t,this.scene,this.player,this.inventory,this.itemRegistry,this.worldData);e.onWin=()=>this._onWin(),e.onDeath=()=>{},this.activeBoss=e,this._activeBossList=[e],this._showMsg("THE CONQUEROR AWAKENS! Fight for your life!")}_onWin(){this.state=Pe.WIN,this.saveSystem.clear(),this.player.controls.unlock(),document.getElementById("end-screen").style.display="flex",document.getElementById("end-title").textContent="🏆 YOU WIN!",document.getElementById("end-title").style.color="#f1c40f",document.getElementById("end-msg").textContent="The Conqueror is defeated. The island is safe."}_usePortal(){const t=this.camera.position,e=Math.floor(t.x),n=Math.floor(t.z),s=this.currentDimension==="nether"?"overworld":"nether";s==="nether"&&!this.netherData?(this._showMsg("The portal roars to life... the Nether is forming (this takes a moment)"),this.player.controls.unlock(),setTimeout(()=>this._switchDimension(s,e,n),50)):this._switchDimension(s,e,n)}_switchDimension(t,e,n){var a,c;this.mobSpawner._despawnAll(),this.passiveSpawner.despawnAllExceptCompanion(),this.seaLife.clear(),this.droppedItems.clear(),this.farmingSystem.setVisible(t==="overworld");for(const l of this._activeBossList??[])l.mesh.visible=t==="overworld";this._sun&&(this._sun.visible=t==="overworld"),this._moon&&(this._moon.visible=t==="overworld");for(const l of this._clouds??[])l.visible=t==="overworld";const s=t==="nether";if(this.currentDimension=t,s?(this.netherData||(this.netherData=new Wc,this.netherRenderer=new Yc(this.scene,this.netherData,this._atlasTex,{ensureChunkData:(l,h)=>go(this.netherData,l,h)})),this.worldData=this.netherData,this.worldRenderer=this.netherRenderer,this.overworldRenderer.group.visible=!1,this.netherRenderer.group.visible=!0,this.scene.fog=new _s(new kt(.35,.08,.03),.022),this.scene.background=new kt(.2,.04,.02),this.ambientLight.intensity=.55,this.ambientLight.color.set(16737843),this.dirLight.intensity=0,document.getElementById("boss-bar-wrap").style.display="none"):(this.worldData=this.overworldData,this.worldRenderer=this.overworldRenderer,this.overworldRenderer.group.visible=!0,this.netherRenderer&&(this.netherRenderer.group.visible=!1),this.ambientLight.color.set(16777215)),this.player.worldData=this.worldData,this.player.worldRenderer=this.worldRenderer,this.miningSystem.worldData=this.worldData,this.miningSystem.worldRenderer=this.worldRenderer,this.farmingSystem.worldData=this.worldData,this.mobSpawner.worldData=this.worldData,this.seaLife.worldData=this.worldData,this.passiveSpawner.setWorldData(this.worldData),this.passiveSpawner.allowSpawn=!s,this.minimap.setWorldData(this.worldData),s){const l=Math.floor(e/de),h=Math.floor(n/de);go(this.worldData,l,h),go(this.worldData,l,h+1)}const r=s?d_(this.worldData,e,n):Math.max(0,((c=(a=this.worldData).solidSurfaceY)==null?void 0:c.call(a,e,n))??this.worldData.surfaceY(e,n));this.worldRenderer.streamAround(e,n,200),this.worldRenderer.rebuildChunk(Math.floor(e/de),Math.floor(n/de));const o=s?n+1:n;this.player.camera.position.set(e+.5,r+1.8,o+.5),this.player._vy=0,this.passiveSpawner.bringCompanionTo(e+.5,r+1,o+.5),this.mobSpawner.setNight(s?!0:this.dayNight.isNight),this._showMsg(s?"You step through into a hostile, burning world. Find the chest by the portal.":"You stumble back into daylight.")}_onPlayerDeath(){var e,n,s,r;this.player.controls.unlock(),this.stats.dead=!1,this.stats.health=Math.max(6,Math.floor(this.stats.maxHealth*.5)),this.stats.hunger=Math.max(8,this.stats.hunger),(n=(e=this.stats).onChange)==null||n.call(e);const t=this.spawnPoint&&this.spawnPoint.dim===this.currentDimension?this.spawnPoint:{x:Ot/2+.5,y:(((r=(s=this.worldData).solidSurfaceY)==null?void 0:r.call(s,Ot/2,Nt/2))??14)+1.8,z:Nt/2+.5};this.camera.position.set(t.x,t.y,t.z),this.player._vy=0,this.state=Pe.PLAYING,this.saveSystem.save(),this._showMsg("You wake up at home, a little worse for wear.")}_setupUIKeys(){window.addEventListener("keydown",t=>{if(t.code==="KeyE"&&this.state===Pe.PLAYING&&(this.inventoryUI.toggle()?(this.craftingUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="KeyC"&&this.state===Pe.PLAYING&&(this.craftingUI.toggle()?(this.inventoryUI.hide(),this.player.controls.unlock()):this.player.lock()),t.code==="KeyJ"&&this.state===Pe.PLAYING&&this.hud.toggleQuests(),t.code==="Escape"){if(this.inventoryUI.visible||this.craftingUI.visible){this.inventoryUI.hide(),this.craftingUI.hide(),this.state===Pe.PLAYING&&this.player.lock();return}this.state===Pe.PLAYING?this._pause():this.state===Pe.PAUSED&&this._resume()}})}_pause(){this.state=Pe.PAUSED,this.player.controls.unlock(),$e.stopMusic();const t=document.getElementById("pause-screen");t&&(t.style.display="flex")}_resume(){const t=document.getElementById("pause-screen");t&&(t.style.display="none"),this.state=Pe.PLAYING,$e.startMusic(),this.player.lock()}_dropNearPlayer(t,e){const n=new N;this.camera.getWorldDirection(n);const s=this.camera.position.clone().add(n.multiplyScalar(1.2));s.y-=1,this.droppedItems.spawn(t,e,s)}_giveOrDrop(t,e){const n=this.inventory.add(t,e,this.itemRegistry);n>0&&this._dropNearPlayer(t,n)}_openChest(t,e,n){const s=this.chests.takeAll(this.currentDimension,t,e,n);if(!s.length){this._showMsg("The chest is empty.");return}const r=[];for(const o of s){this._giveOrDrop(o.itemId,o.count);const a=this.itemRegistry.getItem(o.itemId);r.push(`${o.count}x ${(a==null?void 0:a.name)??o.itemId}`)}this.hud.showPickup(`Chest: ${r.join(", ")}`),this.player.controls.unlock(),this.inventoryUI.show()}update(t){var n;if(this.state!==Pe.PLAYING)return;this.worldRenderer.streamAround(this.camera.position.x,this.camera.position.z),this.stats.update(t),this.currentDimension!=="nether"&&this.dayNight.update(t),this._updateSunFollow(),this.mobSpawner.update(t),this.passiveSpawner.update(t),this.currentDimension!=="nether"&&(this.seaLife.update(t),this.farmingSystem.update(t)),this._updateMinimap(t),this.droppedItems.update(t,this.camera.position);const e=(this._bossList??[]).find(s=>{var r,o,a;return((r=s.config)==null?void 0:r.id)==="swamp_witch"||((a=(o=s.config)==null?void 0:o.name)==null?void 0:a.includes("Witch"))});if(e&&this.camera.position.distanceTo(e.position)<40&&this.quests.noteVisit("swamp_witch"),this._oinkTimer-=t,this._oinkTimer<=0){const s=[...this.mobSpawner.getMobs(),...this.currentDimension==="nether"?[]:this._activeBossList??[]];this.passiveSpawner.warnIfDanger(s,this.camera.position)?((n=$e.playOink)==null||n.call($e),this._oinkTimer=6):this._oinkTimer=1}if(!this.inventoryUI.visible&&!this.craftingUI.visible&&this.player.update(t),this._updateBlockOutline(),this._updateSky(t),this._activeBossList&&this.currentDimension!=="nether"){let s=null,r=1/0;for(const o of this._activeBossList){if(o.dead)continue;o.update(t,this.worldData);const a=o.position.distanceTo(this.camera.position);a<25&&a<r&&(r=a,s=o)}s?s.showBar():document.getElementById("boss-bar-wrap").style.display="none"}this._saveTimer+=t,this._saveTimer>=60&&(this._saveTimer=0,this.state===Pe.PLAYING&&this.currentDimension!=="nether"&&this.saveSystem.save())}_showMsg(t){const e=document.getElementById("pickup-flash");e.textContent=t,e.style.opacity="1",e.style.bottom="140px",e.style.fontSize="13px",clearTimeout(this._msgTimeout),this._msgTimeout=setTimeout(()=>{e.style.opacity="0"},4e3)}_setupBlockOutline(){const t=new r0(new _n(1.002,1.002,1.002)),e=new Gl({color:0,linewidth:1.5,depthTest:!0});this._blockOutline=new s0(t,e),this._blockOutline.visible=!1,this.scene.add(this._blockOutline)}_updateSunFollow(){if(this.dirLight.intensity<=0)return;const t=this.dirLight.position.clone().normalize();this.dirLight.position.copy(this.camera.position).addScaledVector(t,40),this.dirLight.target.position.copy(this.camera.position)}_updateMinimap(t){const e=new N;this.camera.getWorldDirection(e);const n=Math.atan2(e.x,e.z),s=[...this.mobSpawner.getMobs(),...this.passiveSpawner.getMobs(),...this.currentDimension==="nether"?[]:this.seaLife.getMobs()],r=[];this.spawnPoint&&r.push({x:this.spawnPoint.x,z:this.spawnPoint.z,color:"#66ccff"});for(const o of this._bossList??[]){if(o.dead)continue;const a=o._homePos??o.position;r.push({x:a.x,z:a.z,color:"#ff4444"})}this.minimap.update(t,this.camera.position,n,s,r)}_updateBlockOutline(){const t=this.player.targetBlock;t?(this._blockOutline.position.set(t[0]+.5,t[1]+.5,t[2]+.5),this._blockOutline.visible=!0):this._blockOutline.visible=!1}_setupSky(){const t=new di(18,18),e=new ci({color:16772744,side:He,depthWrite:!1});this._sun=new ye(t,e),this.scene.add(this._sun);const n=new di(12,12),s=new ci({color:14544639,side:He,depthWrite:!1});this._moon=new ye(n,s),this.scene.add(this._moon),this._clouds=[];const r=[[[0,0,0,8,2,6],[8,1,0,6,2,5],[-4,1,1,5,2,4]],[[0,0,0,10,2,5],[5,1,0,7,2,4],[-5,0,0,4,2,4]],[[0,0,0,7,2,7],[5,0,1,5,2,5],[0,1,-4,6,2,4]],[[0,0,0,9,2,6],[6,0,0,6,2,5],[-3,1,2,5,2,4],[4,1,-4,4,2,4]]],o=[[60,45,40],[140,48,-20],[30,50,100],[110,46,-60],[-40,44,70],[170,47,150],[90,50,-100],[50,45,-150],[200,46,60],[80,49,200],[-30,48,180],[160,50,120]],a=Ot/2,c=Nt/2;for(let l=0;l<o.length;l++){const h=new zn,d=r[l%r.length];for(const[g,m,p,E,S,b]of d){const O=new _n(E,S,b),C=new ci({color:16777215,transparent:!0,opacity:.82,depthWrite:!1}),w=new ye(O,C);w.position.set(g,m,p),h.add(w)}const[u,f,_]=o[l];h.position.set(a+u,f,c+_),this.scene.add(h),this._clouds.push(h)}}_updateSky(t){const n=(this.dayNight?this.dayNight.timeOfDay??0:0)*Math.PI*2,s=160,r=Ot/2,o=Nt/2;if(this._sun&&(this._sun.position.set(r+Math.cos(n)*s,Math.sin(n)*s+20,o-30),this._sun.lookAt(this.camera.position)),this._moon&&(this._moon.position.set(r+Math.cos(n+Math.PI)*s,Math.sin(n+Math.PI)*s+20,o-30),this._moon.lookAt(this.camera.position)),this._clouds)for(let a=0;a<this._clouds.length;a++)this._clouds[a].position.x+=2*t,this._clouds[a].position.x>r+250&&(this._clouds[a].position.x=r-250)}_generateAtlas(){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.imageSmoothingEnabled=!1;const r=f=>{let _=f;return()=>(_=_*1664525+1013904223>>>0,_/4294967295)},o=(f,_,g)=>{s.fillStyle=g,s.fillRect(f*16,_*16,16,16)},a=(f,_,g,m,p)=>{s.fillStyle=p,s.fillRect(f*16+g,_*16+m,1,1)},c=(f,_,g,m,p,E,S)=>{s.fillStyle=S,s.fillRect(f*16+g,_*16+m,p,E)},l=(f,_,g,m,p)=>{const E=r(p),S=parseInt(g.slice(1),16),b=S>>16&255,O=S>>8&255,C=S&255;for(let w=0;w<16;w++)for(let D=0;D<16;D++){const j=Math.round((E()-.5)*m*2),y=Math.max(0,Math.min(255,b+j)),T=Math.max(0,Math.min(255,O+j)),H=Math.max(0,Math.min(255,C+j));s.fillStyle=`rgb(${y},${T},${H})`,s.fillRect(f*16+D,_*16+w,1,1)}};l(0,0,"#5d9e2f",22,101);const h=r(102);for(let f=0;f<14;f++)a(0,0,Math.floor(h()*16),Math.floor(h()*16),h()>.5?"#3a7010":"#7ac840");l(1,0,"#828282",10,201),s.fillStyle="#9a9a9a",s.fillRect(1*16+1,0*16+1,5,4),s.fillRect(1*16+8,0*16+1,6,3),s.fillRect(1*16+1,0*16+7,4,5),s.fillRect(1*16+7,0*16+8,7,4),s.fillRect(1*16+1,0*16+13,6,2),s.fillRect(1*16+10,0*16+12,5,3),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,0*16+5,16,1),s.fillRect(1*16+0,0*16+12,16,1),s.fillRect(1*16+6,0*16+0,1,5),s.fillRect(1*16+3,0*16+6,1,6),s.fillRect(1*16+10,0*16+5,1,7),s.fillRect(1*16+13,0*16+0,1,12),l(2,0,"#8b5a2b",20,301);const d=r(302);for(let f=0;f<20;f++)a(2,0,Math.floor(d()*16),Math.floor(d()*16),d()>.5?"#5a3010":"#aa7a40");l(3,0,"#8b5a2b",18,401);{const f=r(402);for(let g=0;g<4;g++)for(let m=0;m<16;m++){const p=Math.round((f()-.5)*24),E=[74+p,158+p,40+p];s.fillStyle=`rgb(${Math.max(0,Math.min(255,E[0]))},${Math.max(0,Math.min(255,E[1]))},${Math.max(0,Math.min(255,E[2]))})`,s.fillRect(3*16+m,0*16+g,1,1)}const _=r(403);for(let g=0;g<16;g++)_()>.45&&a(3,0,g,4,"#5a8a22")}l(4,0,"#c49a40",12,501),c(4,0,0,0,16,1,"#7a5010"),c(4,0,0,7,16,1,"#7a5010"),c(4,0,0,8,16,1,"#6a4010"),c(4,0,0,15,16,1,"#7a5010"),c(4,0,7,1,1,6,"#8a6020"),c(4,0,3,9,1,6,"#8a6020");for(let f=2;f<7;f+=2)c(4,0,0,f,16,1,"rgba(0,0,0,0.05)");for(let f=10;f<15;f+=2)c(4,0,0,f,16,1,"rgba(0,0,0,0.05)");l(5,0,"#8b5a2b",18,601),l(6,0,"#4d2e12",14,701);for(let f=2;f<16;f+=4)c(6,0,0,f,16,1,"rgba(0,0,0,0.28)");c(6,0,6,0,4,16,"rgba(20,60,20,0.22)"),o(0,1,"#6e6e6e"),s.fillStyle="#3d3d3d";for(const f of[0,6,10,15])c(0,1,0,f,16,1,"#404040");c(0,1,4,1,1,5,"#404040"),c(0,1,11,1,1,5,"#404040"),c(0,1,7,6,1,4,"#404040"),c(0,1,13,6,1,4,"#404040"),c(0,1,3,10,1,5,"#404040"),c(0,1,9,10,1,5,"#404040"),c(0,1,14,10,1,5,"#404040"),s.fillStyle="#8e8e8e",s.fillRect(0*16+1,1*16+1,3,2),s.fillRect(0*16+5,1*16+2,5,2),s.fillRect(0*16+12,1*16+2,3,2),s.fillRect(0*16+1,1*16+7,5,2),s.fillRect(0*16+8,1*16+7,4,2),s.fillRect(0*16+1,1*16+11,7,3),s.fillRect(0*16+10,1*16+11,4,3),l(2,1,"#d4c27a",14,901);{const f=r(902);for(let _=0;_<22;_++)a(2,1,Math.floor(f()*16),Math.floor(f()*16),f()>.5?"#c4b060":"#e4d090")}o(3,1,"#888877");{const f=r(1001);for(let _=0;_<16;_+=4)for(let g=0;g<16;g+=4){const m=110+Math.floor(f()*55);s.fillStyle=`rgb(${m},${m},${m-8})`,s.fillRect(3*16+g,1*16+_,3,3),s.fillStyle=`rgb(${m-35},${m-35},${m-42})`,s.fillRect(3*16+g+3,1*16+_,1,4),s.fillRect(3*16+g,1*16+_+3,4,1)}}l(4,1,"#7a5428",12,1101);for(const f of[2,7,12])c(4,1,f,0,1,16,"#4a2c0a");for(const f of[4,9,14])c(4,1,f,0,1,16,"#9a6838");c(4,1,8,6,3,3,"#3a1c08"),l(5,1,"#9a6a30",8,1201),s.strokeStyle="#7a4a18",s.lineWidth=1;for(const f of[6,4,2])s.beginPath(),s.arc(5*16+8,1*16+8,f,0,Math.PI*2),s.stroke();c(5,1,7,7,2,2,"#3a1a08"),c(5,1,0,0,16,2,"#5a3818"),c(5,1,0,14,16,2,"#5a3818"),c(5,1,0,2,2,12,"#5a3818"),c(5,1,14,2,2,12,"#5a3818"),l(9,1,"#b48c38",10,1301),c(9,1,0,0,16,2,"#5a3010"),c(9,1,0,14,16,2,"#5a3010"),c(9,1,0,0,2,16,"#5a3010"),c(9,1,14,0,2,16,"#5a3010"),c(9,1,2,8,12,1,"#5a3010"),c(9,1,6,5,4,5,"#c8a020"),c(9,1,7,6,2,3,"#7a5010");for(const f of[3,5,10,12])c(9,1,2,f,12,1,"rgba(0,0,0,0.1)");l(6,1,"#7a4a20",10,1901),c(6,1,0,0,16,3,"#c8c0a8"),c(6,1,0,3,16,1,"#8a8270"),l(7,1,"#a02020",10,2001),c(7,1,0,0,16,4,"#e8e0d0"),c(7,1,0,4,16,1,"#b0a890"),l(1,2,"#828282",8,1401),s.fillStyle="#4d4d4d",s.fillRect(1*16+0,2*16+6,16,1),s.fillRect(1*16+7,2*16+0,1,6);{const f=r(1402);for(let _=0;_<9;_++){const g=1+Math.floor(f()*12),m=1+Math.floor(f()*12),p=2+Math.floor(f()*2);c(1,2,g,m,p,2,f()>.5?"#cc8855":"#dd9966")}for(let _=0;_<4;_++)a(1,2,1+Math.floor(f()*12),1+Math.floor(f()*12),"#ffcc99")}l(2,2,"#6a6a7a",8,1501),s.fillStyle="#45455a",s.fillRect(2*16+0,2*16+6,16,1),s.fillRect(2*16+7,2*16+0,1,6);{const f=r(1502);for(let _=0;_<8;_++)c(2,2,1+Math.floor(f()*12),1+Math.floor(f()*12),2,2,f()>.5?"#9944ee":"#44aacc");for(let _=0;_<4;_++)a(2,2,1+Math.floor(f()*13),1+Math.floor(f()*13),"#ccffee")}l(11,2,"#c49a40",10,1601),c(11,2,0,0,16,2,"#5a3010"),c(11,2,0,0,2,16,"#5a3010"),c(11,2,14,0,2,16,"#5a3010"),c(11,2,7,1,1,14,"#8a6020"),s.fillStyle="#2a1a08",c(11,2,4,9,1,6,"#333"),c(11,2,5,8,1,1,"#333"),c(11,2,6,7,1,1,"#333"),c(11,2,7,5,4,2,"#333"),c(11,2,7,4,2,1,"#333"),c(11,2,9,7,2,1,"#333"),c(11,2,3,6,5,1,"#888");for(let f=0;f<4;f++)a(11,2,3+f,5+f%2,"#888");l(13,2,"#3a3a3a",8,1701),c(13,2,0,0,16,1,"#222"),c(13,2,0,15,16,1,"#222"),c(13,2,0,0,1,16,"#222"),c(13,2,15,0,1,16,"#222"),c(13,2,4,2,8,5,"#1a1a1a"),c(13,2,2,9,5,6,"#ff8800"),c(13,2,9,9,5,6,"#ff8800"),c(13,2,3,10,3,4,"#ffcc00"),c(13,2,10,10,3,4,"#ffcc00"),c(13,2,4,11,1,2,"#ffffff"),c(13,2,11,11,1,2,"#ffffff"),c(13,2,1,8,7,1,"#555"),c(13,2,8,8,7,1,"#555"),l(14,2,"#1a0a2a",8,1801);{const f=r(1802);for(let _=0;_<18;_++)s.fillStyle="rgba(160,50,255,0.3)",s.fillRect(14*16+Math.floor(f()*14)+1,2*16+Math.floor(f()*14)+1,2,1)}s.fillStyle="#cc44ff",c(14,2,4,4,8,1,"#cc44ff"),c(14,2,4,8,8,1,"#cc44ff"),c(14,2,8,4,1,5,"#cc44ff"),c(14,2,4,12,8,1,"#cc44ff"),c(14,2,6,12,1,3,"#cc44ff"),s.fillStyle="rgba(200,100,255,0.18)",s.fillRect(14*16+3,2*16+3,10,10),s.clearRect(1*16,3*16,16,16),s.fillStyle="rgba(145,215,255,0.38)",s.fillRect(1*16,3*16,16,16),s.fillStyle="#7ab0cc",s.fillRect(1*16,3*16,16,1),s.fillRect(1*16,3*16+16-1,16,1),s.fillRect(1*16,3*16,1,16),s.fillRect(1*16+16-1,3*16,1,16),s.fillStyle="rgba(255,255,255,0.7)",s.fillRect(1*16+2,3*16+2,3,1),s.fillRect(1*16+2,3*16+3,1,2),s.fillStyle="rgba(255,255,255,0.4)",s.fillRect(1*16+11,3*16+11,3,1),s.fillRect(1*16+13,3*16+11,1,2),s.clearRect(4*16,3*16,16,16);{const f=r(1901);for(let _=0;_<16;_++)for(let g=0;g<16;g++){const m=f();m<.1||(m<.35?(s.fillStyle="#1a5510",s.fillRect(4*16+g,3*16+_,1,1)):m<.72?(s.fillStyle="#2a7020",s.fillRect(4*16+g,3*16+_,1,1)):(s.fillStyle="#3a9028",s.fillRect(4*16+g,3*16+_,1,1)))}}s.clearRect(0*16,5*16,16,16),c(0,5,7,7,2,9,"#8b5a2b"),c(0,5,6,3,4,5,"#ff8800"),c(0,5,7,1,2,4,"#ffdd00"),a(0,5,7,1,"#ffffff"),o(7,5,"#2e1808"),c(7,5,0,11,16,4,"#5a3618"),c(7,5,2,9,12,3,"#4a2810"),c(7,5,3,6,10,5,"#cc5500"),c(7,5,4,3,8,5,"#ff8800"),c(7,5,5,1,6,4,"#ffcc00"),c(7,5,6,0,4,2,"#ffff88"),s.clearRect(15*16,12*16,16,16),s.fillStyle="rgba(20,80,200,0.75)",s.fillRect(15*16,12*16,16,16),s.fillStyle="rgba(80,160,255,0.5)";for(let f=0;f<16;f+=3)s.fillRect(15*16+f,12*16+4,2,1),s.fillRect(15*16+(f+2)%16,12*16+10,2,1);l(3,2,"#5a2a20",12,2101);{const f=r(2102);for(let _=0;_<12;_++)a(3,2,Math.floor(f()*16),Math.floor(f()*16),f()>.5?"#3a1810":"#7a4030")}s.clearRect(4*16,2*16,16,16),s.fillStyle="rgba(200,50,10,0.9)",s.fillRect(4*16,2*16,16,16),s.fillStyle="rgba(255,180,40,0.8)";for(let f=0;f<16;f+=3)s.fillRect(4*16+f,2*16+4,2,1),s.fillRect(4*16+(f+2)%16,2*16+10,2,1);s.fillStyle="rgba(255,255,150,0.6)",s.fillRect(4*16+6,2*16+7,3,2),l(5,2,"#f0d878",16,2301);{const f=r(2302);for(let _=0;_<10;_++)a(5,2,Math.floor(f()*16),Math.floor(f()*16),f()>.5?"#fff0a0":"#c8a850")}l(6,2,"#1a0e28",8,2401);{const f=r(2402);for(let _=0;_<8;_++)a(6,2,Math.floor(f()*16),Math.floor(f()*16),"#4a2870")}s.clearRect(7*16,2*16,16,16),s.fillStyle="rgba(120,20,200,0.75)",s.fillRect(7*16,2*16,16,16),s.fillStyle="rgba(200,100,255,0.6)";for(let f=0;f<16;f+=2)s.fillRect(7*16+f,2*16+f*3%16,2,2);s.fillStyle="rgba(230,180,255,0.5)",s.fillRect(7*16+6,2*16+6,4,4),s.clearRect(8*16,3*16,16,16);{const f=r(2601),_=["#ff6a8a","#ff9a4a","#ffcc55"];for(let g=0;g<16;g++)for(let m=0;m<16;m++)f()<.55||(s.fillStyle=_[Math.floor(f()*_.length)],s.fillRect(8*16+m,3*16+g,1,1))}s.clearRect(9*16,3*16,16,16);{const f=r(2701);for(let _=0;_<16;_++)for(let g=0;g<16;g++){const m=f();m<.35||(m<.65?(s.fillStyle="#1a5a30",s.fillRect(9*16+g,3*16+_,1,1)):(s.fillStyle="#2a8a4a",s.fillRect(9*16+g,3*16+_,1,1)))}}s.clearRect(10*16,3*16,16,16);{const f=r(2801),_=["#3a7020","#4a8f3f","#5da84e"];for(let g=0;g<7;g++){const m=1+Math.floor(f()*14),p=Math.floor(f()*3)-1,E=8+Math.floor(f()*7),S=_[Math.floor(f()*_.length)];for(let b=0;b<E;b++){const O=m+Math.round(p*b/E);s.fillStyle=S,s.fillRect(10*16+O,3*16+(15-b),1,1)}}}s.clearRect(11*16,3*16,16,16),c(11,3,7,10,2,6,"#3a7020");{const f=[[7,3,"#ff5577"],[5,5,"#ffdd33"],[9,5,"#ffffff"],[7,7,"#ff8844"]];for(const[_,g,m]of f)c(11,3,_,g,2,2,m);a(11,3,7,5,"#ffee88")}const u=new Vl(n);return u.magFilter=Le,u.minFilter=Le,u}}window.addEventListener("error",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`ERROR: ${i.message}
at ${i.filename}:${i.lineno}`,document.body.appendChild(t)});window.addEventListener("unhandledrejection",i=>{const t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;",t.textContent=`PROMISE ERROR: ${i.reason}`,document.body.appendChild(t)});const qn=new t0({antialias:!1});qn.setSize(window.innerWidth,window.innerHeight);qn.shadowMap.enabled=!0;qn.shadowMap.type=hl;qn.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.prepend(qn.domElement);window.addEventListener("resize",()=>{qn.setSize(window.innerWidth,window.innerHeight),kn&&(kn.camera.aspect=window.innerWidth/window.innerHeight,kn.camera.updateProjectionMatrix())});let kn,cl=!1;async function kg(){await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));try{kn=new Fg(qn),window.__game__=kn}catch(e){const n=document.createElement("div");throw n.style.cssText="position:fixed;top:50px;left:0;right:0;background:#c0392b;color:#fff;padding:16px;font:13px monospace;z-index:9999;white-space:pre-wrap;",n.textContent=`GAME INIT ERROR:
${e.stack||e.message}`,document.body.appendChild(n),e}document.getElementById("loading-screen").style.display="none",document.getElementById("menu-screen").style.display="flex";const i=new p0;function t(){requestAnimationFrame(t);const e=Math.min(i.getDelta(),.1);try{kn.update(e)}catch(n){if(!cl){cl=!0,console.error("Update error:",n);const s=document.createElement("div");s.style.cssText="position:fixed;bottom:0;left:0;right:0;background:#c0392b;color:#fff;padding:8px;font:12px monospace;z-index:9999;",s.textContent=`Update error: ${n.message}`,document.body.appendChild(s)}}qn.render(kn.scene,kn.camera)}t()}kg();
