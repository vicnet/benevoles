define("benevoles/Benevoles", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Web", "amber_core/Kernel-Announcements"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Benevoles');
smalltalk.packages["Benevoles"].transport = {"type":"amd","amdNamespace":"benevoles"};

smalltalk.addClass('FdJAnnonceur', globals.Announcer, [], 'Benevoles');

globals.FdJAnnonceur.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=globals.FdJAnnonceur.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.FdJAnnonceur.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.FdJAnnonceur.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.FdJAnnonceur.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.FdJAnnonceur.klass);


smalltalk.addClass('FdJApplication', globals.Object, ['w'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@w"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.FdJApplication)})},
args: [],
source: "clear\x0a\x09w remove",
messageSends: ["remove"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $FdJWidgetBenevole(){return globals.FdJWidgetBenevole||(typeof FdJWidgetBenevole=="undefined"?nil:FdJWidgetBenevole)}
return smalltalk.withContext(function($ctx1) { 
globals.FdJApplication.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@w"]=_st($FdJWidgetBenevole())._new();
_st(self["@w"])._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.FdJApplication)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09w := FdJWidgetBenevole new.\x0a\x09w appendToJQuery: 'body' asJQuery",
messageSends: ["initialize", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: ["FdJWidgetBenevole"]
}),
globals.FdJApplication);



smalltalk.addClass('FdJBenevole', globals.Object, ['nom', 'prenom', 'assoc', 'tshirt', 'etat'], 'Benevoles');
globals.FdJBenevole.comment="tshirt: un TShirt\x0aetat: pas encore venu, en cours de traitement, terminé";
smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJAnnounceur(){return globals.FdJAnnounceur||(typeof FdJAnnounceur=="undefined"?nil:FdJAnnounceur)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($FdJAnnounceur())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},globals.FdJBenevole)})},
args: [],
source: "announcer\x0a\x09^ FdJAnnounceur current",
messageSends: ["current"],
referencedClasses: ["FdJAnnounceur"]
}),
globals.FdJBenevole);



smalltalk.addClass('FdJBenevoles', globals.Object, ['liste'], 'Benevoles');


smalltalk.addClass('FdJStock', globals.Object, ['tshirts'], 'Benevoles');


smalltalk.addClass('FdJTShirt', globals.Object, ['type', 'taille', 'spec'], 'Benevoles');
globals.FdJTShirt.comment="type: H(omme) ou F(emme)\x0ataille: XS, S, M...\x0aspec: vide, lsf, dv...";


smalltalk.addClass('FdJWidgetBenevole', globals.Widget, ['div'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@div"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.FdJWidgetBenevole)})},
args: [],
source: "remove\x0a\x09div asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
globals.FdJWidgetBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIdentiteOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1;
$2=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($2)._class_("identite");
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($4)._class_("prenom");
$ctx2.sendIdx["class:"]=2;
return _st(_st(html)._div())._class_("nom");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderIdentiteOn: html\x0a\x09^ html div class: 'identite';\x0a\x09\x09with: [ html div class: 'prenom'.\x0a\x09\x09\x09\x09html div class: 'nom' ]",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
globals.FdJWidgetBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@div"]=_st(_st(html)._div())._class_("benevole");
_st(self["@div"])._with_(self._renderIdentiteOn_(html));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: 'benevole'.\x0a\x09div with: (self renderIdentiteOn: html)",
messageSends: ["class:", "div", "with:", "renderIdentiteOn:"],
referencedClasses: []
}),
globals.FdJWidgetBenevole);


});
