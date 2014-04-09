window.JST = {};
window.JST["phones/index"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<ul class=\'phones\'></ul>\n';
}
return __p;
};
window.JST["phones/index_list_phone"] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+=''+
((__t=( get('name') ))==null?'':_.escape(__t))+
'\n<p>'+
((__t=( get('snippet') ))==null?'':_.escape(__t))+
'</p>\n';
}
return __p;
};
