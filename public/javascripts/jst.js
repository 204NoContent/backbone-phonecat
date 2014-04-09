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
__p+='\n</select>\n';
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
__p+=''+
((__t=( get('name') ))==null?'':_.escape(__t))+
'\n<p>'+
((__t=( get('snippet') ))==null?'':_.escape(__t))+
'</p>\n';
}
return __p;
};
