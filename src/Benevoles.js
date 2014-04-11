define("benevoles/Benevoles", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Announcements", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Benevoles');
smalltalk.packages["Benevoles"].transport = {"type":"amd","amdNamespace":"benevoles"};

smalltalk.addClass('FdJAnnonce', globals.Object, [], 'Benevoles');


smalltalk.addClass('FdJBenevoleChangeEtat', globals.FdJAnnonce, ['benevole'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "benevole",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@benevole"];
return $1;
},
args: [],
source: "benevole\x0a\x09^ benevole",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevoleChangeEtat);

smalltalk.addMethod(
smalltalk.method({
selector: "benevole:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@benevole"]=anObject;
return self},
args: ["anObject"],
source: "benevole: anObject\x0a\x09benevole := anObject",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevoleChangeEtat);



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


smalltalk.addClass('FdJApplication', globals.Object, ['benevoles', 'selectionneur', 'distributeur'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "filtre:",
protocol: 'initialization',
fn: function (texte){
var self=this;
var selectionnes;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(texte)._isEmpty();
if(smalltalk.assert($1)){
selectionnes=[];
selectionnes;
} else {
selectionnes=_st(self["@benevoles"])._select_((function(b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(b)._estDisponible()).__and(_st(_st(b)._nom())._includesSubString_(texte));
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,3)})}));
selectionnes;
};
_st(self["@selectionneur"])._selectionne_(selectionnes);
return self}, function($ctx1) {$ctx1.fill(self,"filtre:",{texte:texte,selectionnes:selectionnes},globals.FdJApplication)})},
args: ["texte"],
source: "filtre: texte\x0a\x09| selectionnes |\x0a\x09texte isEmpty\x0a\x09\x09ifTrue: [ selectionnes := #() ]\x0a\x09\x09ifFalse: [ selectionnes := benevoles select: [ :b | b estDisponible & (b nom includesSubString: texte)] ].\x0a\x09selectionneur selectionne: selectionnes",
messageSends: ["ifTrue:ifFalse:", "isEmpty", "select:", "&", "estDisponible", "includesSubString:", "nom", "selectionne:"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var barre;
function $FdJBenevole(){return globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
function $FdJWidgetBarre(){return globals.FdJWidgetBarre||(typeof FdJWidgetBarre=="undefined"?nil:FdJWidgetBarre)}
function $FdJWidgetSelectionneur(){return globals.FdJWidgetSelectionneur||(typeof FdJWidgetSelectionneur=="undefined"?nil:FdJWidgetSelectionneur)}
function $FdJWidgetBenevoles(){return globals.FdJWidgetBenevoles||(typeof FdJWidgetBenevoles=="undefined"?nil:FdJWidgetBenevoles)}
function $FdJAnnonceur(){return globals.FdJAnnonceur||(typeof FdJAnnonceur=="undefined"?nil:FdJAnnonceur)}
function $FdJBenevoleChangeEtat(){return globals.FdJBenevoleChangeEtat||(typeof FdJBenevoleChangeEtat=="undefined"?nil:FdJBenevoleChangeEtat)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
($ctx1.supercall = true, globals.FdJApplication.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@benevoles"]=_st($FdJBenevole())._exemples();
$1=_st($FdJWidgetBarre())._new();
$ctx1.sendIdx["new"]=1;
barre=_st($1)._presentateur_(self);
$ctx1.sendIdx["presentateur:"]=1;
self["@selectionneur"]=_st($FdJWidgetSelectionneur())._new();
$ctx1.sendIdx["new"]=2;
_st(barre)._ajoute_(self["@selectionneur"]);
$2=barre;
$3="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._appendToJQuery_($3);
$ctx1.sendIdx["appendToJQuery:"]=1;
$4=_st($FdJWidgetBenevoles())._new();
_st($4)._presentateur_(self);
$5=_st($4)._appendToJQuery_("body"._asJQuery());
self["@distributeur"]=$5;
_st(_st($FdJAnnonceur())._current())._on_do_($FdJBenevoleChangeEtat(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._onBenevoleChangeEtat_(_st(evt)._benevole());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
_st(_st(self["@benevoles"])._first())._encours();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{barre:barre},globals.FdJApplication)})},
args: [],
source: "initialize\x0a\x09| barre |\x0a\x09super initialize.\x0a\x09\x0a\x09\x22Modele\x22\x0a\x09benevoles := FdJBenevole exemples.\x0a\x09\x0a\x09\x22Widgets\x22\x0a\x09barre := FdJWidgetBarre new\x0a\x09\x09presentateur: self.\x0a\x0a\x09selectionneur := FdJWidgetSelectionneur\x09new.\x0a\x09barre ajoute: selectionneur.\x0a\x0a\x09barre appendToJQuery: 'body' asJQuery.\x0a\x0a\x09distributeur := FdJWidgetBenevoles new\x0a\x09\x09presentateur: self;\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x0a\x09FdJAnnonceur current on: FdJBenevoleChangeEtat do: [ :evt |\x0a\x09\x09self onBenevoleChangeEtat: evt benevole ].\x0a\x0a\x09\x22exemple de filtrage\x22\x0a\x09benevoles first encours",
messageSends: ["initialize", "exemples", "presentateur:", "new", "ajoute:", "appendToJQuery:", "asJQuery", "on:do:", "current", "onBenevoleChangeEtat:", "benevole", "encours", "first"],
referencedClasses: ["FdJBenevole", "FdJWidgetBarre", "FdJWidgetSelectionneur", "FdJWidgetBenevoles", "FdJAnnonceur", "FdJBenevoleChangeEtat"]
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "onBenevoleChangeEtat:",
protocol: 'initialization',
fn: function (benevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._filtre_(_st(self["@selectionneur"])._filtre());
$1=_st(benevole)._estEncours();
if(smalltalk.assert($1)){
_st(self["@distributeur"])._ajoute_(benevole);
};
$2=_st(benevole)._estDistribue();
if(smalltalk.assert($2)){
_st(self["@distributeur"])._supprime_(benevole);
};
return self}, function($ctx1) {$ctx1.fill(self,"onBenevoleChangeEtat:",{benevole:benevole},globals.FdJApplication)})},
args: ["benevole"],
source: "onBenevoleChangeEtat: benevole\x0a\x09self filtre: (selectionneur filtre).\x0a\x09benevole estEncours ifTrue: [\x0a\x09\x09distributeur ajoute: benevole ].\x0a\x09benevole estDistribue ifTrue: [\x0a\x09\x09distributeur supprime: benevole ]",
messageSends: ["filtre:", "filtre", "ifTrue:", "estEncours", "ajoute:", "estDistribue", "supprime:"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionne:",
protocol: 'initialization',
fn: function (benevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(benevole)._estDisponible();
if(smalltalk.assert($1)){
$2=_st(benevole)._encours();
return $2;
};
$3=_st(benevole)._estEncours();
if(smalltalk.assert($3)){
$4=_st(benevole)._distribue();
return $4;
};
return self}, function($ctx1) {$ctx1.fill(self,"selectionne:",{benevole:benevole},globals.FdJApplication)})},
args: ["benevole"],
source: "selectionne: benevole\x0a\x09benevole estDisponible ifTrue: [\x0a\x09\x09^ benevole encours ].\x0a\x09benevole estEncours ifTrue: [\x0a\x09\x09^ benevole distribue ]",
messageSends: ["ifTrue:", "estDisponible", "encours", "estEncours", "distribue"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "termine",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@selectionneur"])._supprime();
$ctx1.sendIdx["supprime"]=1;
_st(self["@distributeur"])._supprime();
return self}, function($ctx1) {$ctx1.fill(self,"termine",{},globals.FdJApplication)})},
args: [],
source: "termine\x0a\x09selectionneur supprime.\x0a\x09distributeur supprime\x0a\x09\x22'body' asJQuery children remove\x22",
messageSends: ["supprime"],
referencedClasses: []
}),
globals.FdJApplication);



smalltalk.addClass('FdJAssociation', globals.Object, ['nom', 'logo'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "fromJSON:",
protocol: 'accessing',
fn: function (variables){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nom"]=_st(variables)._at_("nom");
return self}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},globals.FdJAssociation)})},
args: ["variables"],
source: "fromJSON: variables\x0a\x09nom := variables at: 'nom'.\x0a\x09\x22logo := variables at: 'logo'\x22",
messageSends: ["at:"],
referencedClasses: []
}),
globals.FdJAssociation);

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
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._nom_("Joc-ere");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"exemple",{},globals.FdJAssociation.klass)})},
args: [],
source: "exemple\x0a\x09\x22Genère un échantillon\x22\x0a\x09^ self new nom: 'Joc-ere'; yourself",
messageSends: ["nom:", "new", "yourself"],
referencedClasses: []
}),
globals.FdJAssociation.klass);


smalltalk.addClass('FdJAssociations', globals.Object, ['liste'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "associations:",
protocol: 'as yet unclassified',
fn: function (desAssociations){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@liste"]=_st($HashedCollection())._new();
_st(desAssociations)._do_((function(a){
return smalltalk.withContext(function($ctx2) {
return _st(self["@liste"])._at_put_(_st(a)._nom(),a);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"associations:",{desAssociations:desAssociations},globals.FdJAssociations)})},
args: ["desAssociations"],
source: "associations: desAssociations\x0a\x09liste := HashedCollection new.\x0a\x09desAssociations do: [ :a |\x0a\x09\x09liste at: a nom put: a ]",
messageSends: ["new", "do:", "at:put:", "nom"],
referencedClasses: ["HashedCollection"]
}),
globals.FdJAssociations);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (nom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@liste"])._at_ifAbsent_(nom,(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{nom:nom},globals.FdJAssociations)})},
args: ["nom"],
source: "at: nom\x0a\x09^ liste at: nom ifAbsent: [ nil ]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
globals.FdJAssociations);

smalltalk.addMethod(
smalltalk.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (variables){
var self=this;
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
return smalltalk.withContext(function($ctx1) { 
self["@liste"]=_st(_st(variables)._at_("liste"))._collect_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st($FdJAssociation())._new())._fromJSON_(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},globals.FdJAssociations)})},
args: ["variables"],
source: "fromJSON: variables\x0a\x09liste := (variables at: 'liste') collect: [ :v |\x0a\x09\x09\x09FdJAssociation new fromJSON: v\x0a\x09\x09]",
messageSends: ["collect:", "at:", "fromJSON:", "new"],
referencedClasses: ["FdJAssociation"]
}),
globals.FdJAssociations);


globals.FdJAssociations.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._associations_(_st($Array())._with_(_st($FdJAssociation())._exemple()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"exemple",{},globals.FdJAssociations.klass)})},
args: [],
source: "exemple\x0a\x09^ self instance\x0a\x09\x09associations: (Array with: FdJAssociation exemple)",
messageSends: ["associations:", "instance", "with:", "exemple"],
referencedClasses: ["Array", "FdJAssociation"]
}),
globals.FdJAssociations.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'exemples',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@instance"];
if(($receiver = $1) == null || $receiver.isNil){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.FdJAssociations.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [ instance := self new ].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.FdJAssociations.klass);


smalltalk.addClass('FdJBenevole', globals.Object, ['nom', 'prenom', 'assoc', 'tshirt', 'etat'], 'Benevoles');
globals.FdJBenevole.comment="- tshirt: un TShirt\x0a- etat: pas encore venu, en cours de traitement, terminé";
smalltalk.addMethod(
smalltalk.method({
selector: "annonce",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJBenevoleChangeEtat(){return globals.FdJBenevoleChangeEtat||(typeof FdJBenevoleChangeEtat=="undefined"?nil:FdJBenevoleChangeEtat)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($FdJBenevoleChangeEtat())._new();
_st($1)._benevole_(self);
$2=_st($1)._yourself();
_st(self._annonceur())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"annonce",{},globals.FdJBenevole)})},
args: [],
source: "annonce\x0a\x09self annonceur announce: (FdJBenevoleChangeEtat new benevole: self; yourself)",
messageSends: ["announce:", "annonceur", "benevole:", "new", "yourself"],
referencedClasses: ["FdJBenevoleChangeEtat"]
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "annonceur",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJAnnonceur(){return globals.FdJAnnonceur||(typeof FdJAnnonceur=="undefined"?nil:FdJAnnonceur)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($FdJAnnonceur())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"annonceur",{},globals.FdJBenevole)})},
args: [],
source: "annonceur\x0a\x09^ FdJAnnonceur current",
messageSends: ["current"],
referencedClasses: ["FdJAnnonceur"]
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'accessing',
fn: function (){
var self=this;
var variables;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
variables=_st($HashedCollection())._new();
_st(variables)._at_put_("nom",self["@nom"]);
$ctx1.sendIdx["at:put:"]=1;
_st(variables)._at_put_("prenom",self["@prenom"]);
$ctx1.sendIdx["at:put:"]=2;
_st(variables)._at_put_("etat",self["@etat"]);
$ctx1.sendIdx["at:put:"]=3;
_st(variables)._at_put_("assoc",_st(self["@assoc"])._nom());
$1=variables;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},globals.FdJBenevole)})},
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09variables at: 'nom' put: nom.\x0a\x09variables at: 'prenom' put: prenom.\x0a\x09variables at: 'etat' put: etat.\x0a\x09variables at: 'assoc' put: assoc nom.\x0a\x22\x09variables at: 'tshirt' put: .\x22\x0a\x09^ variables",
messageSends: ["new", "at:put:", "nom"],
referencedClasses: ["HashedCollection"]
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
selector: "distribue",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@etat"]="distribue";
self._annonce();
return self}, function($ctx1) {$ctx1.fill(self,"distribue",{},globals.FdJBenevole)})},
args: [],
source: "distribue\x0a\x09etat := #distribue.\x0a\x09self annonce",
messageSends: ["annonce"],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "encours",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@etat"]="encours";
self._annonce();
return self}, function($ctx1) {$ctx1.fill(self,"encours",{},globals.FdJBenevole)})},
args: [],
source: "encours\x0a\x09etat := #encours.\x0a\x09self annonce",
messageSends: ["annonce"],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "estDisponible",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@etat"]).__eq_eq(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"estDisponible",{},globals.FdJBenevole)})},
args: [],
source: "estDisponible\x0a\x09^ etat==nil",
messageSends: ["=="],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "estDistribue",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@etat"]).__eq_eq("distribue");
return $1;
}, function($ctx1) {$ctx1.fill(self,"estDistribue",{},globals.FdJBenevole)})},
args: [],
source: "estDistribue\x0a\x09^ etat==#distribue",
messageSends: ["=="],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "estEncours",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@etat"]).__eq_eq("encours");
return $1;
}, function($ctx1) {$ctx1.fill(self,"estEncours",{},globals.FdJBenevole)})},
args: [],
source: "estEncours\x0a\x09^ etat==#encours",
messageSends: ["=="],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "fromJSON:",
protocol: 'accessing',
fn: function (variables){
var self=this;
function $FdJAssociations(){return globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
return smalltalk.withContext(function($ctx1) { 
self["@nom"]=_st(variables)._at_("nom");
$ctx1.sendIdx["at:"]=1;
self["@prenom"]=_st(variables)._at_("prenom");
$ctx1.sendIdx["at:"]=2;
self["@etat"]=_st(variables)._at_ifPresent_ifAbsent_("etat",(function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v)._asSymbol();
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}),(function(){
return nil;
}));
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=1;
self["@assoc"]=_st(variables)._at_ifPresent_ifAbsent_("assoc",(function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st($FdJAssociations())._instance())._at_(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,3)})}),(function(){
return nil;
}));
return self}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},globals.FdJBenevole)})},
args: ["variables"],
source: "fromJSON: variables\x0a\x09nom := variables at: 'nom'.\x0a\x09prenom := variables at: 'prenom'.\x0a\x09etat := variables at: 'etat'\x0a\x09\x09ifPresent: [ :v | v asSymbol ]\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09assoc := variables at: 'assoc'\x0a\x09\x09ifPresent: [ :v | FdJAssociations instance at: v ]\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09\x22tshirt :=\x22",
messageSends: ["at:", "at:ifPresent:ifAbsent:", "asSymbol", "instance"],
referencedClasses: ["FdJAssociations"]
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
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._nom_("OSELE");
_st($2)._prenom_("Vincent");
_st($2)._association_(_st($FdJAssociation())._exemple());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"exemple",{},globals.FdJBenevole.klass)})},
args: [],
source: "exemple\x0a\x09^ self new nom: 'OSELE';\x0a\x09\x09\x09 prenom: 'Vincent';\x0a\x09\x09\x09 association: (FdJAssociation exemple);\x0a\x09\x09\x09 yourself",
messageSends: ["nom:", "new", "prenom:", "association:", "exemple", "yourself"],
referencedClasses: ["FdJAssociation"]
}),
globals.FdJBenevole.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "exemples",
protocol: 'exemples',
fn: function (){
var self=this;
var benevoles,association;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$6,$7;
benevoles=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
association=_st($FdJAssociation())._exemple();
$ctx1.sendIdx["exemple"]=1;
_st(benevoles)._add_(self._exemple());
$ctx1.sendIdx["add:"]=1;
$1=benevoles;
$3=self._new();
$ctx1.sendIdx["new"]=2;
_st($3)._nom_("DUPOND");
$ctx1.sendIdx["nom:"]=1;
_st($3)._prenom_("Gérard");
$ctx1.sendIdx["prenom:"]=1;
$4=_st($3)._association_(association);
$ctx1.sendIdx["association:"]=1;
$2=$4;
_st($1)._add_($2);
$ctx1.sendIdx["add:"]=2;
$5=self._new();
_st($5)._nom_("MEILLEIS");
_st($5)._prenom_("George");
$6=_st($5)._association_(association);
_st(benevoles)._add_($6);
$7=benevoles;
return $7;
}, function($ctx1) {$ctx1.fill(self,"exemples",{benevoles:benevoles,association:association},globals.FdJBenevole.klass)})},
args: [],
source: "exemples\x0a\x09| benevoles association |\x0a\x09benevoles := Array new.\x0a\x09association := FdJAssociation exemple.\x0a\x09benevoles add: self exemple.\x0a\x09benevoles add: (self new nom: 'DUPOND';\x0a\x09\x09\x09 prenom: 'Gérard';\x0a\x09\x09\x09 association: association).\x0a\x09benevoles add: (self new nom: 'MEILLEIS';\x0a\x09\x09\x09 prenom: 'George';\x0a\x09\x09\x09 association: association).\x0a\x09^ benevoles",
messageSends: ["new", "exemple", "add:", "nom:", "prenom:", "association:"],
referencedClasses: ["Array", "FdJAssociation"]
}),
globals.FdJBenevole.klass);


smalltalk.addClass('FdJBenevoles', globals.Object, ['liste'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "benevoles",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var $1;
$1=self["@liste"];
return $1;
},
args: [],
source: "benevoles\x0a\x09^ liste",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "benevoles:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
self["@liste"]=desBenevoles;
return self},
args: ["desBenevoles"],
source: "benevoles: desBenevoles\x0a\x09liste := desBenevoles",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (variables){
var self=this;
function $FdJBenevole(){return globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
return smalltalk.withContext(function($ctx1) { 
self["@liste"]=_st(_st(variables)._at_("liste"))._collect_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(_st($FdJBenevole())._new())._fromJSON_(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},globals.FdJBenevoles)})},
args: ["variables"],
source: "fromJSON: variables\x0a\x09liste := (variables at: 'liste') collect: [ :v |\x0a\x09\x09\x09FdJBenevole new fromJSON: v\x0a\x09\x09]",
messageSends: ["collect:", "at:", "fromJSON:", "new"],
referencedClasses: ["FdJBenevole"]
}),
globals.FdJBenevoles);


smalltalk.addMethod(
smalltalk.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
function $FdJBenevole(){return globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._benevoles_(_st($FdJBenevole())._exemples());
return $1;
}, function($ctx1) {$ctx1.fill(self,"exemple",{},globals.FdJBenevoles.klass)})},
args: [],
source: "exemple\x0a\x09^ self new benevoles: FdJBenevole exemples",
messageSends: ["benevoles:", "new", "exemples"],
referencedClasses: ["FdJBenevole"]
}),
globals.FdJBenevoles.klass);


smalltalk.addClass('FdJStock', globals.Object, ['tshirts'], 'Benevoles');


smalltalk.addClass('FdJStockage', globals.Object, [], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "charge:",
protocol: 'as yet unclassified',
fn: function (entite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._charge_depuis_(entite,self._jsonPour_(entite));
return $1;
}, function($ctx1) {$ctx1.fill(self,"charge:",{entite:entite},globals.FdJStockage)})},
args: ["entite"],
source: "charge: entite\x0a\x09^ self charge: entite depuis: (self jsonPour: entite)",
messageSends: ["charge:depuis:", "jsonPour:"],
referencedClasses: []
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "charge:depuis:",
protocol: 'as yet unclassified',
fn: function (entite,json){
var self=this;
var objet;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(entite)._isClass();
if(smalltalk.assert($1)){
objet=_st(entite)._new();
} else {
objet=entite;
};
$2=_st(objet)._fromJSON_(json);
return $2;
}, function($ctx1) {$ctx1.fill(self,"charge:depuis:",{entite:entite,json:json,objet:objet},globals.FdJStockage)})},
args: ["entite", "json"],
source: "charge: entite depuis: json\x0a\x09|objet|\x0a\x09objet := entite isClass\x0a\x09\x09ifTrue: [ entite new ]\x0a\x09\x09ifFalse: [ entite ].\x0a\x09^ objet fromJSON: json",
messageSends: ["ifTrue:ifFalse:", "isClass", "new", "fromJSON:"],
referencedClasses: []
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "jsonPour:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._variablesPour_(_st($JSON())._parse_(self._stockagePour_(objet)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsonPour:",{objet:objet},globals.FdJStockage)})},
args: ["objet"],
source: "jsonPour: objet\x0a\x09^ self variablesPour: (\x0a\x09\x09JSON parse: (self stockagePour: objet))",
messageSends: ["variablesPour:", "parse:", "stockagePour:"],
referencedClasses: ["JSON"]
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "nomPour:",
protocol: 'as yet unclassified',
fn: function (entite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(entite)._isClass();
if(smalltalk.assert($1)){
$2=_st(entite)._name();
$ctx1.sendIdx["name"]=1;
return $2;
};
$3=_st(entite)._isString();
if(smalltalk.assert($3)){
return entite;
};
$4=_st(_st(entite)._class())._name();
return $4;
}, function($ctx1) {$ctx1.fill(self,"nomPour:",{entite:entite},globals.FdJStockage)})},
args: ["entite"],
source: "nomPour: entite\x0a\x09entite isClass ifTrue: [ ^ entite name ].\x0a\x09entite isString ifTrue: [ ^ entite ].\x0a\x09^ entite class name",
messageSends: ["ifTrue:", "isClass", "name", "isString", "class"],
referencedClasses: []
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "sauve:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(sessionStorage)._setItem_value_(self._nomPour_(objet),_st(objet)._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"sauve:",{objet:objet},globals.FdJStockage)})},
args: ["objet"],
source: "sauve: objet\x0a\x09sessionStorage\x0a\x09\x09setItem: (self nomPour: objet)\x0a\x09\x09value: objet asJSONString",
messageSends: ["setItem:value:", "nomPour:", "asJSONString"],
referencedClasses: []
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "stockagePour:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(sessionStorage)._getItem_(self._nomPour_(objet));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stockagePour:",{objet:objet},globals.FdJStockage)})},
args: ["objet"],
source: "stockagePour: objet\x0a\x09\x22objet peut être une classe, une chaine ou un objet\x22\x0a\x09^ sessionStorage getItem: (self nomPour: objet)",
messageSends: ["getItem:", "nomPour:"],
referencedClasses: []
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "variablesPour:",
protocol: 'as yet unclassified',
fn: function (json){
var self=this;
var variables;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(_st(_st(json)._class())._name()).__eq("JSObjectProxy");
if(smalltalk.assert($1)){
variables=_st($HashedCollection())._new();
variables;
_st(json)._keysAndValuesDo_((function(k,v){
return smalltalk.withContext(function($ctx2) {
$2=variables;
$3=self._variablesPour_(v);
$ctx2.sendIdx["variablesPour:"]=1;
return _st($2)._at_put_(k,$3);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,2)})}));
$4=variables;
return $4;
};
$5=_st(json)._isKindOf_($Array());
if(smalltalk.assert($5)){
$6=_st(json)._collect_((function(o){
return smalltalk.withContext(function($ctx2) {
return self._variablesPour_(o);
}, function($ctx2) {$ctx2.fillBlock({o:o},$ctx1,4)})}));
return $6;
};
return json;
}, function($ctx1) {$ctx1.fill(self,"variablesPour:",{json:json,variables:variables},globals.FdJStockage)})},
args: ["json"],
source: "variablesPour: json\x0a\x09| variables |\x0a\x09(json class name = 'JSObjectProxy') ifTrue: [\x0a\x09\x09variables := HashedCollection new.\x0a\x09\x09json keysAndValuesDo: [ :k :v |\x0a\x09\x09\x09variables at: k put: (self variablesPour: v) ].\x0a\x09\x09^ variables\x0a\x09\x09].\x0a\x09(json isKindOf: Array) ifTrue: [\x0a\x09\x09^ json collect: [ :o |\x0a\x09\x09\x09self variablesPour: o ]\x0a\x09\x09\x09].\x0a\x09^ json",
messageSends: ["ifTrue:", "=", "name", "class", "new", "keysAndValuesDo:", "at:put:", "variablesPour:", "isKindOf:", "collect:"],
referencedClasses: ["HashedCollection", "Array"]
}),
globals.FdJStockage);


globals.FdJStockage.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@instance"];
if(($receiver = $1) == null || $receiver.isNil){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.FdJStockage.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [ instance := self new ].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.FdJStockage.klass);


smalltalk.addClass('FdJTShirt', globals.Object, ['type', 'taille', 'spec'], 'Benevoles');
globals.FdJTShirt.comment="type: H(omme) ou F(emme)\x0ataille: XS, S, M...\x0aspec: vide, lsf, dv...";
smalltalk.addMethod(
smalltalk.method({
selector: "spec",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@spec"];
return $1;
},
args: [],
source: "spec\x0a\x09^ spec",
messageSends: [],
referencedClasses: []
}),
globals.FdJTShirt);

smalltalk.addMethod(
smalltalk.method({
selector: "spec:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@spec"]=anObject;
return self},
args: ["anObject"],
source: "spec: anObject\x0a\x09spec := anObject",
messageSends: [],
referencedClasses: []
}),
globals.FdJTShirt);

smalltalk.addMethod(
smalltalk.method({
selector: "taille",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@taille"];
return $1;
},
args: [],
source: "taille\x0a\x09^ taille",
messageSends: [],
referencedClasses: []
}),
globals.FdJTShirt);

smalltalk.addMethod(
smalltalk.method({
selector: "taille:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@taille"]=anObject;
return self},
args: ["anObject"],
source: "taille: anObject\x0a\x09taille := anObject",
messageSends: [],
referencedClasses: []
}),
globals.FdJTShirt);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@type"];
return $1;
},
args: [],
source: "type\x0a\x09^ type",
messageSends: [],
referencedClasses: []
}),
globals.FdJTShirt);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@type"]=anObject;
return self},
args: ["anObject"],
source: "type: anObject\x0a\x09type := anObject",
messageSends: [],
referencedClasses: []
}),
globals.FdJTShirt);


smalltalk.addMethod(
smalltalk.method({
selector: "h3xl",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._type_("H");
_st($2)._taille_("X3L");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"h3xl",{},globals.FdJTShirt.klass)})},
args: [],
source: "h3xl\x0a\x09^ self new type: #H; taille: #X3L; yourself",
messageSends: ["type:", "new", "taille:", "yourself"],
referencedClasses: []
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "hl",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._type_("H");
_st($2)._taille_("L");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hl",{},globals.FdJTShirt.klass)})},
args: [],
source: "hl\x0a\x09^ self new type: #H; taille: #L; yourself",
messageSends: ["type:", "new", "taille:", "yourself"],
referencedClasses: []
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "hm",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._type_("H");
_st($2)._taille_("M");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hm",{},globals.FdJTShirt.klass)})},
args: [],
source: "hm\x0a\x09^ self new type: #H; taille: #M; yourself",
messageSends: ["type:", "new", "taille:", "yourself"],
referencedClasses: []
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "hs",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._type_("H");
_st($2)._taille_("S");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hs",{},globals.FdJTShirt.klass)})},
args: [],
source: "hs\x0a\x09^ self new type: #H; taille: #S; yourself",
messageSends: ["type:", "new", "taille:", "yourself"],
referencedClasses: []
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "hxl",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._type_("H");
_st($2)._taille_("XL");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hxl",{},globals.FdJTShirt.klass)})},
args: [],
source: "hxl\x0a\x09^ self new type: #H; taille: #XL; yourself",
messageSends: ["type:", "new", "taille:", "yourself"],
referencedClasses: []
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "hxs",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._type_("H");
_st($2)._taille_("XS");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hxs",{},globals.FdJTShirt.klass)})},
args: [],
source: "hxs\x0a\x09^ self new type: #H; taille: #XS; yourself",
messageSends: ["type:", "new", "taille:", "yourself"],
referencedClasses: []
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "hxxl",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._type_("H");
_st($2)._taille_("XXL");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hxxl",{},globals.FdJTShirt.klass)})},
args: [],
source: "hxxl\x0a\x09^ self new type: #H; taille: #XXL; yourself",
messageSends: ["type:", "new", "taille:", "yourself"],
referencedClasses: []
}),
globals.FdJTShirt.klass);


smalltalk.addClass('FdJWidget', globals.Widget, ['presentateur', 'widgets', 'div'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (unWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(unWidget)._presentateur_(self["@presentateur"]);
_st(self["@widgets"])._add_(unWidget);
return self}, function($ctx1) {$ctx1.fill(self,"ajoute:",{unWidget:unWidget},globals.FdJWidget)})},
args: ["unWidget"],
source: "ajoute: unWidget\x0a\x09unWidget presentateur: presentateur.\x0a\x09widgets add: unWidget",
messageSends: ["presentateur:", "add:"],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.FdJWidget.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@widgets"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.FdJWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09widgets := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "nom",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._class())._asString())._trimLeft_("FdJWidget"))._asLowercase();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nom",{},globals.FdJWidget)})},
args: [],
source: "nom\x0a\x09^ (self class asString trimLeft: 'FdJWidget') asLowercase",
messageSends: ["asLowercase", "trimLeft:", "asString", "class"],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "presentateur:",
protocol: 'as yet unclassified',
fn: function (unPresentateur){
var self=this;
self["@presentateur"]=unPresentateur;
return self},
args: ["unPresentateur"],
source: "presentateur: unPresentateur\x0a\x09presentateur := unPresentateur",
messageSends: [],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@div"]=_st(_st(html)._div())._class_(self._nom());
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderWidgetsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: self nom.\x0a\x09div with: [ self renderWidgetsOn: html]",
messageSends: ["class:", "div", "nom", "with:", "renderWidgetsOn:"],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWidgetsOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@widgets"])._do_((function(b){
return smalltalk.withContext(function($ctx2) {
return _st(b)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderWidgetsOn:",{html:html},globals.FdJWidget)})},
args: ["html"],
source: "renderWidgetsOn: html\x0a\x09widgets do: [ :b | b renderOn: html ]",
messageSends: ["do:", "renderOn:"],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "supprime",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self["@div"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(_st(self["@div"])._asJQuery())._remove();
};
self["@div"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"supprime",{},globals.FdJWidget)})},
args: [],
source: "supprime\x0a\x09div ifNotNil: [ div asJQuery remove ].\x0a\x09div := nil",
messageSends: ["ifNotNil:", "remove", "asJQuery"],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "supprime:",
protocol: 'as yet unclassified',
fn: function (unWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(unWidget)._supprime();
_st(self["@widgets"])._remove_(unWidget);
return self}, function($ctx1) {$ctx1.fill(self,"supprime:",{unWidget:unWidget},globals.FdJWidget)})},
args: ["unWidget"],
source: "supprime: unWidget\x0a\x09\x22suppression html\x22\x0a\x09unWidget supprime.\x0a\x09\x22suppression liste\x22\x0a\x09widgets remove: unWidget",
messageSends: ["supprime", "remove:"],
referencedClasses: []
}),
globals.FdJWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@widgets"])._do_((function(w){
return smalltalk.withContext(function($ctx2) {
return _st(w)._supprime();
}, function($ctx2) {$ctx2.fillBlock({w:w},$ctx1,1)})}));
self["@widgets"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"vide",{},globals.FdJWidget)})},
args: [],
source: "vide\x0a\x09\x22supprime les widgets mais laisse la racine\x22\x0a\x09widgets do: [ :w | w supprime ].\x0a\x09widgets := #()",
messageSends: ["do:", "supprime"],
referencedClasses: []
}),
globals.FdJWidget);



smalltalk.addClass('FdJWidgetBarre', globals.FdJWidget, [], 'Benevoles');


smalltalk.addClass('FdJWidgetBenevole', globals.FdJWidget, ['benevole'], 'Benevoles');
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
selector: "benevole",
protocol: 'rendering',
fn: function (){
var self=this;
var $1;
$1=self["@benevole"];
return $1;
},
args: [],
source: "benevole\x0a\x09^ benevole",
messageSends: [],
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
_st(self["@div"])._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@presentateur"])._selectionne_(self["@benevole"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: 'benevole'.\x0a\x09div with: [ self renderIdentiteOn: html.\x0a\x09\x09\x09\x09self renderAssociationOn: html].\x0a\x09div onClick: [ presentateur selectionne: benevole ]",
messageSends: ["class:", "div", "with:", "renderIdentiteOn:", "renderAssociationOn:", "onClick:", "selectionne:"],
referencedClasses: []
}),
globals.FdJWidgetBenevole);



smalltalk.addClass('FdJWidgetBenevoles', globals.FdJWidget, [], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._creeWidget_(unBenevole);
self._update();
return self}, function($ctx1) {$ctx1.fill(self,"ajoute:",{unBenevole:unBenevole},globals.FdJWidgetBenevoles)})},
args: ["unBenevole"],
source: "ajoute: unBenevole\x0a\x09self creeWidget: unBenevole.\x0a\x09self update",
messageSends: ["creeWidget:", "update"],
referencedClasses: []
}),
globals.FdJWidgetBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "associe:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._vide();
_st(desBenevoles)._do_((function(b){
return smalltalk.withContext(function($ctx2) {
return self._creeWidget_(b);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
self._update();
return self}, function($ctx1) {$ctx1.fill(self,"associe:",{desBenevoles:desBenevoles},globals.FdJWidgetBenevoles)})},
args: ["desBenevoles"],
source: "associe: desBenevoles\x0a\x09\x22liste de modele Benevole\x22\x0a\x09self vide.\x0a\x09desBenevoles do: [ :b | self creeWidget: b ].\x0a\x09self update",
messageSends: ["vide", "do:", "creeWidget:", "update"],
referencedClasses: []
}),
globals.FdJWidgetBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "creeWidget:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
function $FdJWidgetBenevole(){return globals.FdJWidgetBenevole||(typeof FdJWidgetBenevole=="undefined"?nil:FdJWidgetBenevole)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.FdJWidgetBenevoles.superclass.fn.prototype._ajoute_.apply(_st(self), [_st(_st($FdJWidgetBenevole())._new())._associe_(unBenevole)]));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"creeWidget:",{unBenevole:unBenevole},globals.FdJWidgetBenevoles)})},
args: ["unBenevole"],
source: "creeWidget: unBenevole\x0a\x09super ajoute:\x0a\x09\x09(FdJWidgetBenevole new associe: unBenevole)",
messageSends: ["ajoute:", "associe:", "new"],
referencedClasses: ["FdJWidgetBenevole"]
}),
globals.FdJWidgetBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBenevolesOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderWidgetsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderBenevolesOn:",{html:html},globals.FdJWidgetBenevoles)})},
args: ["html"],
source: "renderBenevolesOn: html\x0a\x09self renderWidgetsOn: html",
messageSends: ["renderWidgetsOn:"],
referencedClasses: []
}),
globals.FdJWidgetBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@div"]=_st(_st(html)._div())._class_("benevoles");
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderBenevolesOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetBenevoles)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: 'benevoles'.\x0a\x09div with: [ self renderBenevolesOn: html]",
messageSends: ["class:", "div", "with:", "renderBenevolesOn:"],
referencedClasses: []
}),
globals.FdJWidgetBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "supprime:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
($ctx1.supercall = true, globals.FdJWidgetBenevoles.superclass.fn.prototype._supprime_.apply(_st(self), [_st(self["@widgets"])._detect_ifNone_((function(w){
return smalltalk.withContext(function($ctx2) {
return _st(_st(w)._benevole()).__eq_eq(unBenevole);
}, function($ctx2) {$ctx2.fillBlock({w:w},$ctx1,1)})}),(function(){
throw $early=[self];
}))]));
$ctx1.supercall = false;
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"supprime:",{unBenevole:unBenevole},globals.FdJWidgetBenevoles)})},
args: ["unBenevole"],
source: "supprime: unBenevole\x0a\x09super supprime: (\x0a\x09\x09widgets detect: [ :w | w benevole == unBenevole ] ifNone: [ ^ self ])",
messageSends: ["supprime:", "detect:ifNone:", "==", "benevole"],
referencedClasses: []
}),
globals.FdJWidgetBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@div"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderBenevolesOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{},globals.FdJWidgetBenevoles)})},
args: [],
source: "update\x0a\x09div contents: [ :html | div with: [ self renderBenevolesOn: html ] ]",
messageSends: ["contents:", "with:", "renderBenevolesOn:"],
referencedClasses: []
}),
globals.FdJWidgetBenevoles);



smalltalk.addClass('FdJWidgetSelectionneur', globals.FdJWidget, ['liste', 'input'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "filtre",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@input"])._asJQuery())._val();
return $1;
}, function($ctx1) {$ctx1.fill(self,"filtre",{},globals.FdJWidgetSelectionneur)})},
args: [],
source: "filtre\x0a\x09^ input asJQuery val",
messageSends: ["val", "asJQuery"],
referencedClasses: []
}),
globals.FdJWidgetSelectionneur);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
function $FdJWidgetBenevoles(){return globals.FdJWidgetBenevoles||(typeof FdJWidgetBenevoles=="undefined"?nil:FdJWidgetBenevoles)}
return smalltalk.withContext(function($ctx1) { 
self["@div"]=_st(_st(html)._div())._class_("selectionneur");
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@input"]=_st(html)._input();
self["@input"];
_st(self["@input"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@presentateur"])._filtre_(self._filtre());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
self["@liste"]=_st($FdJWidgetBenevoles())._new();
self["@liste"];
_st(self["@liste"])._presentateur_(self["@presentateur"]);
return _st(self["@liste"])._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetSelectionneur)})},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: 'selectionneur'.\x0a\x09div with: [\x0a\x09\x09input := html input.\x0a\x09\x09input onKeyUp: [ presentateur filtre: (self filtre) ].\x0a\x09\x09\x0a\x09\x09liste := FdJWidgetBenevoles new.\x0a\x09\x09liste presentateur: presentateur.\x0a\x09\x09liste renderOn: html ]",
messageSends: ["class:", "div", "with:", "input", "onKeyUp:", "filtre:", "filtre", "new", "presentateur:", "renderOn:"],
referencedClasses: ["FdJWidgetBenevoles"]
}),
globals.FdJWidgetSelectionneur);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionne:",
protocol: 'as yet unclassified',
fn: function (benevoles){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@liste"])._associe_(benevoles);
return self}, function($ctx1) {$ctx1.fill(self,"selectionne:",{benevoles:benevoles},globals.FdJWidgetSelectionneur)})},
args: ["benevoles"],
source: "selectionne: benevoles\x0a\x09liste associe: benevoles",
messageSends: ["associe:"],
referencedClasses: []
}),
globals.FdJWidgetSelectionneur);


});
