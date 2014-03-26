define("benevoles/Benevoles", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Announcements", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
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
function $FdJBenevole(){return globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
return smalltalk.withContext(function($ctx1) { 
globals.FdJApplication.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@w"]=_st($FdJWidgetBenevole())._new();
_st(self["@w"])._associe_(_st($FdJBenevole())._test());
_st(self["@w"])._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.FdJApplication)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09w := FdJWidgetBenevole new.\x0a\x09w associe: FdJBenevole test.\x0a\x09w appendToJQuery: 'body' asJQuery",
messageSends: ["initialize", "new", "associe:", "test", "appendToJQuery:", "asJQuery"],
referencedClasses: ["FdJWidgetBenevole", "FdJBenevole"]
}),
globals.FdJApplication);



smalltalk.addClass('FdJAssociation', globals.Object, ['nom', 'logo'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "logo",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@logo"];
return $1;
},
args: [],
source: "logo\x0a\x09^ logo",
messageSends: [],
referencedClasses: []
}),
globals.FdJAssociation);

smalltalk.addMethod(
smalltalk.method({
selector: "logo:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@logo"]=anObject;
return self},
args: ["anObject"],
source: "logo: anObject\x0a\x09logo := anObject",
messageSends: [],
referencedClasses: []
}),
globals.FdJAssociation);

smalltalk.addMethod(
smalltalk.method({
selector: "nom",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@nom"];
return $1;
},
args: [],
source: "nom\x0a\x09^ nom",
messageSends: [],
referencedClasses: []
}),
globals.FdJAssociation);

smalltalk.addMethod(
smalltalk.method({
selector: "nom:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@nom"]=anObject;
return self},
args: ["anObject"],
source: "nom: anObject\x0a\x09nom := anObject",
messageSends: [],
referencedClasses: []
}),
globals.FdJAssociation);


smalltalk.addMethod(
smalltalk.method({
selector: "test",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._nom_("Joc-ere");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"test",{},globals.FdJAssociation.klass)})},
args: [],
source: "test\x0a\x09\x22Genère un échantillon\x22\x0a\x0a\x09^ self new nom: 'Joc-ere'; yourself",
messageSends: ["nom:", "new", "yourself"],
referencedClasses: []
}),
globals.FdJAssociation.klass);


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

smalltalk.addMethod(
smalltalk.method({
selector: "association",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@assoc"];
return $1;
},
args: [],
source: "association\x0a\x09^ assoc",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "association:",
protocol: 'accessing',
fn: function (uneAssoc){
var self=this;
self["@assoc"]=uneAssoc;
return self},
args: ["uneAssoc"],
source: "association: uneAssoc\x0a\x09assoc := uneAssoc",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "nom",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@nom"];
return $1;
},
args: [],
source: "nom\x0a\x09^ nom",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "nom:",
protocol: 'accessing',
fn: function (chaine){
var self=this;
self["@nom"]=chaine;
return self},
args: ["chaine"],
source: "nom: chaine\x0a\x09nom := chaine",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "prenom",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@prenom"];
return $1;
},
args: [],
source: "prenom\x0a\x09^ prenom",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "prenom:",
protocol: 'accessing',
fn: function (chaine){
var self=this;
self["@prenom"]=chaine;
return self},
args: ["chaine"],
source: "prenom: chaine\x0a\x09prenom := chaine",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);


smalltalk.addMethod(
smalltalk.method({
selector: "test",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._nom_("OSELE");
_st($2)._prenom_("Vincent");
_st($2)._association_(_st($FdJAssociation())._test());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"test",{},globals.FdJBenevole.klass)})},
args: [],
source: "test\x0a\x09^ self new nom: 'OSELE';\x0a\x09\x09\x09 prenom: 'Vincent';\x0a\x09\x09\x09 association: (FdJAssociation test);\x0a\x09\x09\x09 yourself",
messageSends: ["nom:", "new", "prenom:", "association:", "test", "yourself"],
referencedClasses: ["FdJAssociation"]
}),
globals.FdJBenevole.klass);


smalltalk.addClass('FdJBenevoles', globals.Object, ['liste'], 'Benevoles');


smalltalk.addClass('FdJStock', globals.Object, ['tshirts'], 'Benevoles');


smalltalk.addClass('FdJTShirt', globals.Object, ['type', 'taille', 'spec'], 'Benevoles');
globals.FdJTShirt.comment="type: H(omme) ou F(emme)\x0ataille: XS, S, M...\x0aspec: vide, lsf, dv...";


smalltalk.addClass('FdJWidgetBenevole', globals.Widget, ['benevole', 'div'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "associe:",
protocol: 'rendering',
fn: function (unBenevole){
var self=this;
self["@benevole"]=unBenevole;
return self},
args: ["unBenevole"],
source: "associe: unBenevole\x0a\x09benevole := unBenevole",
messageSends: [],
referencedClasses: []
}),
globals.FdJWidgetBenevole);

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
selector: "renderAssociationOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("association");
$2=_st($1)._with_(_st(_st(self["@benevole"])._association())._nom());
return self}, function($ctx1) {$ctx1.fill(self,"renderAssociationOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderAssociationOn: html\x0a\x09html div class: 'association';\x0a\x09\x09with: benevole association nom",
messageSends: ["class:", "div", "with:", "nom", "association"],
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
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("identite");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("prenom");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_(_st(self["@benevole"])._prenom());
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._div();
_st($5)._class_("nom");
$6=_st($5)._with_(_st(self["@benevole"])._nom());
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderIdentiteOn: html\x0a\x09html div class: 'identite';\x0a\x09\x09with: [ html div class: 'prenom'; with: benevole prenom.\x0a\x09\x09\x09\x09html div class: 'nom'; with: benevole nom]",
messageSends: ["class:", "div", "with:", "prenom", "nom"],
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
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderIdentiteOn_(html);
return self._renderAssociationOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: 'benevole'.\x0a\x09div with: [ self renderIdentiteOn: html.\x0a\x09\x09\x09\x09self renderAssociationOn: html]",
messageSends: ["class:", "div", "with:", "renderIdentiteOn:", "renderAssociationOn:"],
referencedClasses: []
}),
globals.FdJWidgetBenevole);


});
