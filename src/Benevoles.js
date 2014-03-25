define("benevoles/Benevoles", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Benevoles');
smalltalk.packages["Benevoles"].transport = {"type":"amd","amdNamespace":"benevoles"};

smalltalk.addClass('Application', globals.Object, ['w'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@w"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.Application)})},
args: [],
source: "clear\x0a\x09w remove",
messageSends: ["remove"],
referencedClasses: []
}),
globals.Application);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $WidgetBenevole(){return globals.WidgetBenevole||(typeof WidgetBenevole=="undefined"?nil:WidgetBenevole)}
return smalltalk.withContext(function($ctx1) { 
globals.Application.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@w"]=_st($WidgetBenevole())._new();
_st(self["@w"])._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Application)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09w := WidgetBenevole new.\x0a\x09w appendToJQuery: 'body' asJQuery",
messageSends: ["initialize", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: ["WidgetBenevole"]
}),
globals.Application);



smalltalk.addClass('Benevole', globals.Object, ['nom', 'prenom', 'assoc', 'tshirt'], 'Benevoles');
globals.Benevole.comment="tshirt: un TShirt";


smalltalk.addClass('Benevoles', globals.Object, ['liste'], 'Benevoles');


smalltalk.addClass('Stock', globals.Object, ['tshirts'], 'Benevoles');


smalltalk.addClass('TShirt', globals.Object, ['type', 'taille', 'spec'], 'Benevoles');
globals.TShirt.comment="type: H(omme) ou F(emme)\x0ataille: XS, S, M...\x0aspec: vide, lsf, dv...";


smalltalk.addClass('WidgetBenevole', globals.Widget, ['div'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@div"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.WidgetBenevole)})},
args: [],
source: "remove\x0a\x09div asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
globals.WidgetBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("benevole");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("identite");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
$ctx3.sendIdx["div"]=3;
_st($5)._class_("prenom");
$ctx3.sendIdx["class:"]=3;
return _st(_st(html)._div())._class_("nom");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@div"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.WidgetBenevole)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: 'benevole';\x0a\x09\x09with: [\x0a\x09\x09\x09html div class: 'identite';\x0a\x09\x09\x09\x09with: [ html div class: 'prenom'.\x0a\x09\x09\x09\x09\x09\x09html div class: 'nom' ]\x0a\x09\x09\x09\x09\x09]",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
globals.WidgetBenevole);


});
