window.JST = {};
window.JST["phones/filter"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='Search: \n<input class=\'query\'>\nSort by: \n<select class=\'sort\'>\n    ';
 _.each(order_options, function (option) { 
__p+='\n        <option value="'+
((__t=( option.value ))==null?'':_.escape(__t))+
'" '+
((__t=( option.selected ? 'selected': ''))==null?'':_.escape(__t))+
'>'+
((__t=( option.text ))==null?'':_.escape(__t))+
'</option>\n    ';
 }) 
__p+='\n</select>';
}
return __p;
};
window.JST["phones/index"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class=\'container-fluid\'>\n    <div class=\'row-fluid\'>\n        <div class=\'span2 filter\'>\n        </div>\n        <div class=\'span10\'>\n            <ul class=\'phones\'></ul>\n        </div>\n    </div>\n</div>';
}
return __p;
};
window.JST["phones/index_list_phone"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<a href="/phones/'+
((__t=( get('id') ))==null?'':_.escape(__t))+
'" class=\'thumb\'><img src="'+
((__t=( '/' + get('imageUrl') ))==null?'':_.escape(__t))+
'"></a>\n<a href="/phones/'+
((__t=( get('id') ))==null?'':_.escape(__t))+
'">'+
((__t=( get('name') ))==null?'':_.escape(__t))+
'</a>\n<p>'+
((__t=( get('snippet') ))==null?'':_.escape(__t))+
'</p>';
}
return __p;
};
window.JST["phones/show"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class=\'phone-images\'></div>\n<h1>'+
((__t=( get('name') ))==null?'':_.escape(__t))+
'</h1>\n<p>'+
((__t=( get('description') ))==null?'':_.escape(__t))+
'</p>\n<ul class=\'phone-thumbs\'></ul>\n<ul class=\'specs\'></ul>';
}
return __p;
};
window.JST["phones/show_image"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<img src="'+
((__t=( '/' + get('path') ))==null?'':_.escape(__t))+
'" class=\'phone\'>';
}
return __p;
};
window.JST["phones/show_images_list_image"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<img src="'+
((__t=( '/' + get('path') ))==null?'':_.escape(__t))+
'">';
}
return __p;
};
window.JST["phones/show_specs"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<li>\n    <span>Availability and Networks</span>\n    <dl>\n        <dt>Availability</dt>\n        <dd>'+
((__t=( get('availability') ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Battery</span>\n    <dl>\n        <dt>Type</dt>\n        <dd>'+
((__t=( get('battery').type ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Talk Time</dt>\n        <dd>'+
((__t=( get('battery').talkTime ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Standby time (max)</dt>\n        <dd>'+
((__t=( get('battery').standbyTime ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Storage and Memory</span>\n    <dl>\n        <dt>RAM</dt>\n        <dd>'+
((__t=( get('storage').ram ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Internal Storage</dt>\n        <dd>'+
((__t=( get('storage').flash ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Connectivity</span>\n    <dl>\n        <dt>Network Support</dt>\n        <dd>'+
((__t=( get('connectivity').cell ))==null?'':_.escape(__t))+
'</dd>\n        <dt>WiFi</dt>\n        <dd>'+
((__t=( get('connectivity').wifi ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Bluetooth</dt>\n        <dd>'+
((__t=( get('connectivity').bluetooth ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Infrared</dt>\n        <dd>'+
((__t=( PhonesHelper.checkmark(get('connectivity').infrared) ))==null?'':_.escape(__t))+
'</dd>\n        <dt>GPS</dt>\n        <dd>'+
((__t=( PhonesHelper.checkmark(get('connectivity').gps) ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Android</span>\n    <dl>\n        <dt>OS Version</dt>\n        <dd>'+
((__t=( get('android').os ))==null?'':_.escape(__t))+
'</dd>\n        <dt>UI</dt>\n        <dd>'+
((__t=( get('android').ui ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Size and Weight</span>\n    <dl>\n        <dt>Dimensions</dt>\n        ';
 _.each(get('sizeAndWeight').dimensions, function(dimension) { 
__p+='\n            <dd>'+
((__t=( dimension ))==null?'':_.escape(__t))+
'</dd>\n        ';
 }) 
__p+='\n        <dt>Weight</dt>\n        <dd>'+
((__t=( get('sizeAndWeight').weight ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Display</span>\n    <dl>\n        <dt>Screen size</dt>\n        <dd>'+
((__t=( get('display').screenSize ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Screen resolution</dt>\n        <dd>'+
((__t=( get('display').screenResolution ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Touch screen</dt>\n        <dd>'+
((__t=( PhonesHelper.checkmark(get('display').touchScreen) ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Hardware</span>\n    <dl>\n        <dt>CPU</dt>\n        <dd>'+
((__t=( get('hardware').cpu ))==null?'':_.escape(__t))+
'</dd>\n        <dt>USB</dt>\n        <dd>'+
((__t=( get('hardware').usb ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Audio / headphone jack</dt>\n        <dd>'+
((__t=( get('hardware').audioJack ))==null?'':_.escape(__t))+
'</dd>\n        <dt>FM Radio</dt>\n        <dd>'+
((__t=( PhonesHelper.checkmark(get('hardware').fmRadio) ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Accelerometer</dt>\n        <dd>'+
((__t=( PhonesHelper.checkmark(get('hardware').accelerometer) ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Camera</span>\n    <dl>\n        <dt>Primary</dt>\n        <dd>'+
((__t=( get('camera').primary ))==null?'':_.escape(__t))+
'</dd>\n        <dt>Features</dt>\n        <dd>'+
((__t=( get('camera').features.join(', ') ))==null?'':_.escape(__t))+
'</dd>\n    </dl>\n</li>\n\n<li>\n    <span>Additional Features</span>\n    <dd>'+
((__t=( get('additionalFeatures') ))==null?'':_.escape(__t))+
'</dd>\n</li>\n\n<li></li>';
}
return __p;
};
