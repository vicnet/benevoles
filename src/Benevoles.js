define("benevoles/Benevoles", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Announcements", "amber_core/Web", "amber_core/Kernel-Collections"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
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


smalltalk.addClass('FdJApplication', globals.Object, ['benevoles', 'selectionneur', 'distributeur', 'importeur', 'historique'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "charge",
protocol: 'initialization',
fn: function (){
var self=this;
function $FdJStockage(){return globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
function $FdJHistorique(){return globals.FdJHistorique||(typeof FdJHistorique=="undefined"?nil:FdJHistorique)}
function $FdJAssociations(){return globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
function $FdJBenevoles(){return globals.FdJBenevoles||(typeof FdJBenevoles=="undefined"?nil:FdJBenevoles)}
return smalltalk.withContext(function($ctx1) { 
self["@historique"]=_st($FdJStockage())._charge_sinon_($FdJHistorique(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st($FdJHistorique())._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["charge:sinon:"]=1;
_st($FdJStockage())._charge_sinon_(_st($FdJAssociations())._instance(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st($FdJAssociations())._exemple();
$ctx2.sendIdx["exemple"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["charge:sinon:"]=2;
self["@benevoles"]=_st($FdJStockage())._charge_sinon_($FdJBenevoles(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st($FdJBenevoles())._exemple();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"charge",{},globals.FdJApplication)})},
args: [],
source: "charge\x0a\x09\x22Charge le modele (ou créé un exemple)\x22\x0a\x09historique := FdJStockage\x0a\x09\x09charge: FdJHistorique\x0a\x09\x09sinon: [ FdJHistorique new ].\x0a\x09FdJStockage\x0a\x09\x09charge: FdJAssociations instance\x0a\x09\x09sinon: [ FdJAssociations exemple ].\x0a\x09benevoles := FdJStockage\x0a\x09\x09charge: FdJBenevoles\x0a\x09\x09sinon: [ FdJBenevoles exemple ]",
messageSends: ["charge:sinon:", "new", "instance", "exemple"],
referencedClasses: ["FdJStockage", "FdJHistorique", "FdJAssociations", "FdJBenevoles"]
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "filtre:",
protocol: 'initialization',
fn: function (texte){
var self=this;
var max,liste;
return smalltalk.withContext(function($ctx1) { 
var $1;
max=(4);
liste=_st(self["@benevoles"])._filtre_max_(texte,_st(max).__plus((1)));
$1=_st(_st(liste)._size()).__lt_eq(max);
if(smalltalk.assert($1)){
_st(self["@selectionneur"])._selectionne_max_(liste,false);
$ctx1.sendIdx["selectionne:max:"]=1;
} else {
_st(liste)._removeLast();
_st(self["@selectionneur"])._selectionne_max_(liste,true);
};
return self}, function($ctx1) {$ctx1.fill(self,"filtre:",{texte:texte,max:max,liste:liste},globals.FdJApplication)})},
args: ["texte"],
source: "filtre: texte\x0a\x09| max liste |\x0a\x09max := 4.\x0a\x09liste := benevoles filtre: texte max: max+1.\x0a\x09(liste size <= max)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09selectionneur selectionne: liste max: false ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09liste removeLast.\x0a\x09\x09\x09selectionneur selectionne: liste max: true ]",
messageSends: ["filtre:max:", "+", "ifTrue:ifFalse:", "<=", "size", "selectionne:max:", "removeLast"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "importe:",
protocol: 'initialization',
fn: function (texte){
var self=this;
var results,fields,rows,imp;
function $FdJImporteur(){return globals.FdJImporteur||(typeof FdJImporteur=="undefined"?nil:FdJImporteur)}
function $FdJStockage(){return globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
function $FdJAssociations(){return globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
imp=_st($FdJImporteur())._new();
results=_st(imp)._importe_(texte);
fields=_st(results)._fields();
rows=_st(results)._rows();
$1=_st(fields)._includes_("Taille");
$ctx1.sendIdx["includes:"]=1;
if(smalltalk.assert($1)){
$2=self._importeTShirts_(rows);
return $2;
};
$3=_st(fields)._includes_("Association");
if(smalltalk.assert($3)){
_st(imp)._importeAssociations_(rows);
_st($FdJStockage())._sauve_(_st($FdJAssociations())._instance());
};
_st(self["@benevoles"])._ajouteUnique_(_st(imp)._importeBenevoles_(rows));
self._sauve();
return self}, function($ctx1) {$ctx1.fill(self,"importe:",{texte:texte,results:results,fields:fields,rows:rows,imp:imp},globals.FdJApplication)})},
args: ["texte"],
source: "importe: texte\x0a\x09| results fields rows imp |\x0a\x09imp := FdJImporteur new.\x0a\x09results := imp importe: texte.\x0a\x0a\x09fields := results fields.\x0a\x09rows := results rows.\x0a\x0a\x09(fields includes: 'Taille')\x0a\x09\x09ifTrue: [ ^ self importeTShirts: rows ].\x0a\x09\x0a\x09(fields includes: 'Association')\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09imp importeAssociations: rows.\x0a\x09\x09\x09FdJStockage sauve: FdJAssociations instance ].\x0a\x0a\x09benevoles ajouteUnique: (imp importeBenevoles: rows).\x0a\x09self sauve.\x0a\x09",
messageSends: ["new", "importe:", "fields", "rows", "ifTrue:", "includes:", "importeTShirts:", "importeAssociations:", "sauve:", "instance", "ajouteUnique:", "importeBenevoles:", "sauve"],
referencedClasses: ["FdJImporteur", "FdJStockage", "FdJAssociations"]
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "importeTShirts:",
protocol: 'initialization',
fn: function (rows){
var self=this;
var tshirts,key;
function $FdJImporteur(){return globals.FdJImporteur||(typeof FdJImporteur=="undefined"?nil:FdJImporteur)}
function $FdJTShirt(){return globals.FdJTShirt||(typeof FdJTShirt=="undefined"?nil:FdJTShirt)}
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
tshirts=_st(_st($FdJImporteur())._new())._importeTShirts_(rows);
_st(_st(self["@benevoles"])._benevoles())._do_((function(b){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(b)._nom()).__comma(" ");
$ctx2.sendIdx[","]=2;
$1=_st($2).__comma(_st(b)._prenom());
$ctx2.sendIdx[","]=1;
key=_st($1)._asLowercase();
key;
return _st(tshirts)._at_ifPresent_(key,(function(t){
return smalltalk.withContext(function($ctx3) {
_st(b)._tshirt_(_st($FdJTShirt())._at_(t));
return _st(tshirts)._remove_(key);
}, function($ctx3) {$ctx3.fillBlock({t:t},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st(tshirts)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._show_("TShirts non importés:");
$ctx2.sendIdx["show:"]=1;
$3=_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=1;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
_st(_st(tshirts)._keys())._do_((function(b){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._show_("- ".__comma(b));
$4=_st($Transcript())._cr();
return $4;
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,4)})}));
self._sauve();
return self}, function($ctx1) {$ctx1.fill(self,"importeTShirts:",{rows:rows,tshirts:tshirts,key:key},globals.FdJApplication)})},
args: ["rows"],
source: "importeTShirts: rows\x0a\x09| tshirts key |\x0a\x09tshirts := FdJImporteur new importeTShirts: rows.\x0a\x09benevoles benevoles do: [ :b |\x0a\x09\x09key := (b nom, ' ', b prenom) asLowercase.\x0a\x09\x09tshirts at: key ifPresent: [ :t |\x0a\x09\x09\x09\x09b tshirt: (FdJTShirt at: t).\x0a\x09\x09\x09\x09tshirts remove: key\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09tshirts ifNotEmpty: [ Transcript show: 'TShirts non importés:'; cr ].\x0a\x09tshirts keys do: [ :b | Transcript show: ('- ', b);cr ].\x0a\x09self sauve",
messageSends: ["importeTShirts:", "new", "do:", "benevoles", "asLowercase", ",", "nom", "prenom", "at:ifPresent:", "tshirt:", "at:", "remove:", "ifNotEmpty:", "show:", "cr", "keys", "sauve"],
referencedClasses: ["FdJImporteur", "FdJTShirt", "Transcript"]
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var barre;
function $FdJWidgetBarre(){return globals.FdJWidgetBarre||(typeof FdJWidgetBarre=="undefined"?nil:FdJWidgetBarre)}
function $FdJWidgetSelectionneur(){return globals.FdJWidgetSelectionneur||(typeof FdJWidgetSelectionneur=="undefined"?nil:FdJWidgetSelectionneur)}
function $FdJWidgetImporteur(){return globals.FdJWidgetImporteur||(typeof FdJWidgetImporteur=="undefined"?nil:FdJWidgetImporteur)}
function $FdJWidgetBenevoles(){return globals.FdJWidgetBenevoles||(typeof FdJWidgetBenevoles=="undefined"?nil:FdJWidgetBenevoles)}
function $FdJWidgetLegende(){return globals.FdJWidgetLegende||(typeof FdJWidgetLegende=="undefined"?nil:FdJWidgetLegende)}
function $FdJAnnonceur(){return globals.FdJAnnonceur||(typeof FdJAnnonceur=="undefined"?nil:FdJAnnonceur)}
function $FdJBenevoleChangeEtat(){return globals.FdJBenevoleChangeEtat||(typeof FdJBenevoleChangeEtat=="undefined"?nil:FdJBenevoleChangeEtat)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4,$5,$6,$8,$9,$7;
$2="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st($2)._children();
_st($1)._remove();
($ctx1.supercall = true, globals.FdJApplication.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._charge();
$3=_st($FdJWidgetBarre())._new();
$ctx1.sendIdx["new"]=1;
barre=_st($3)._presentateur_(self);
$ctx1.sendIdx["presentateur:"]=1;
self["@selectionneur"]=_st($FdJWidgetSelectionneur())._new();
$ctx1.sendIdx["new"]=2;
_st(barre)._ajoute_(self["@selectionneur"]);
$ctx1.sendIdx["ajoute:"]=1;
self["@importeur"]=_st($FdJWidgetImporteur())._new();
$ctx1.sendIdx["new"]=3;
_st(barre)._ajoute_(self["@importeur"]);
$4=barre;
$5="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($4)._appendToJQuery_($5);
$ctx1.sendIdx["appendToJQuery:"]=1;
$6=_st($FdJWidgetBenevoles())._new();
$ctx1.sendIdx["new"]=4;
_st($6)._presentateur_(self);
$8=$6;
$9="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=3;
$7=_st($8)._appendToJQuery_($9);
$ctx1.sendIdx["appendToJQuery:"]=2;
self["@distributeur"]=$7;
_st(_st($FdJWidgetLegende())._new())._appendToJQuery_("body"._asJQuery());
_st(_st($FdJAnnonceur())._current())._on_do_($FdJBenevoleChangeEtat(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._onBenevoleChangeEtat_(_st(evt)._benevole());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
_st(self["@distributeur"])._associe_(_st(self["@benevoles"])._selectionnes());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{barre:barre},globals.FdJApplication)})},
args: [],
source: "initialize\x0a\x09| barre |\x0a\x09'body' asJQuery children remove.\x0a\x09super initialize.\x0a\x09\x0a\x09\x22Modele\x22\x0a\x09self charge.\x0a\x09\x0a\x09\x22Widgets\x22\x0a\x09barre := FdJWidgetBarre new\x0a\x09\x09presentateur: self.\x0a\x0a\x09selectionneur := FdJWidgetSelectionneur\x09new.\x0a\x09barre ajoute: selectionneur.\x0a\x09\x0a\x09importeur := FdJWidgetImporteur new.\x0a\x09barre ajoute: importeur.\x0a\x0a\x09barre appendToJQuery: 'body' asJQuery.\x0a\x0a\x09distributeur := FdJWidgetBenevoles new\x0a\x09\x09presentateur: self;\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x09\x0a\x09FdJWidgetLegende new\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x0a\x09FdJAnnonceur current on: FdJBenevoleChangeEtat do: [ :evt |\x0a\x09\x09self onBenevoleChangeEtat: evt benevole ].\x0a\x0a\x09\x22init\x22\x0a\x09distributeur associe: (benevoles selectionnes)",
messageSends: ["remove", "children", "asJQuery", "initialize", "charge", "presentateur:", "new", "ajoute:", "appendToJQuery:", "on:do:", "current", "onBenevoleChangeEtat:", "benevole", "associe:", "selectionnes"],
referencedClasses: ["FdJWidgetBarre", "FdJWidgetSelectionneur", "FdJWidgetImporteur", "FdJWidgetBenevoles", "FdJWidgetLegende", "FdJAnnonceur", "FdJBenevoleChangeEtat"]
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
_st(self["@selectionneur"])._defiltre();
_st(self["@distributeur"])._ajoute_(benevole);
};
$2=_st(benevole)._estDistribue();
if(smalltalk.assert($2)){
_st(self["@distributeur"])._supprime_(benevole);
};
self._sauve();
return self}, function($ctx1) {$ctx1.fill(self,"onBenevoleChangeEtat:",{benevole:benevole},globals.FdJApplication)})},
args: ["benevole"],
source: "onBenevoleChangeEtat: benevole\x0a\x09self filtre: (selectionneur filtre).\x0a\x09benevole estEncours ifTrue: [\x0a\x09\x09selectionneur defiltre.\x0a\x09\x09distributeur ajoute: benevole ].\x0a\x09benevole estDistribue ifTrue: [\x0a\x09\x09distributeur supprime: benevole ].\x0a\x09self sauve",
messageSends: ["filtre:", "filtre", "ifTrue:", "estEncours", "defiltre", "ajoute:", "estDistribue", "supprime:", "sauve"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "reinit",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@benevoles"])._reinit();
self._sauve();
return self}, function($ctx1) {$ctx1.fill(self,"reinit",{},globals.FdJApplication)})},
args: [],
source: "reinit\x0a\x09benevoles reinit.\x0a\x09self sauve",
messageSends: ["reinit", "sauve"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "sauve",
protocol: 'initialization',
fn: function (){
var self=this;
function $FdJStockage(){return globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
return smalltalk.withContext(function($ctx1) { 
_st($FdJStockage())._sauve_(self["@benevoles"]);
return self}, function($ctx1) {$ctx1.fill(self,"sauve",{},globals.FdJApplication)})},
args: [],
source: "sauve\x0a\x09FdJStockage sauve: benevoles",
messageSends: ["sauve:"],
referencedClasses: ["FdJStockage"]
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

smalltalk.addMethod(
smalltalk.method({
selector: "vide",
protocol: 'initialization',
fn: function (){
var self=this;
function $FdJStockage(){return globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
return smalltalk.withContext(function($ctx1) { 
_st($FdJStockage())._vide();
$ctx1.sendIdx["vide"]=1;
_st(self["@benevoles"])._vide();
return self}, function($ctx1) {$ctx1.fill(self,"vide",{},globals.FdJApplication)})},
args: [],
source: "vide\x0a\x09FdJStockage vide.\x0a\x09benevoles vide",
messageSends: ["vide"],
referencedClasses: ["FdJStockage"]
}),
globals.FdJApplication);


globals.FdJApplication.klass.iVarNames = ['accents'];
smalltalk.addMethod(
smalltalk.method({
selector: "accents",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@accents"];
if(($receiver = $2) == null || $receiver.isNil){
self["@accents"]=globals.HashedCollection._newFromPairs_(["[àáâãäå]","a","æ","ae","ç","c","[èéêë]","e","[ìíîï]","i","ñ","n","[òóôõö]","o","œ","oe","[ùúûü]","u","[ýÿ]","y"," ","","-",""]);
$1=self["@accents"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"accents",{},globals.FdJApplication.klass)})},
args: [],
source: "accents\x0a\x09^ accents ifNil: [\x0a\x09\x09accents := #{\x0a\x09\x09\x09'[àáâãäå]' -> 'a'.\x0a\x09    \x09'æ' -> 'ae'.\x0a\x09    \x09'ç' -> 'c'.\x0a\x09    \x09'[èéêë]' -> 'e'.\x0a\x09    \x09'[ìíîï]' -> 'i'.\x0a\x09    \x09'ñ' -> 'n'.\x0a\x09    \x09'[òóôõö]' -> 'o'.\x0a\x09    \x09'œ' -> 'oe'.\x0a\x09    \x09'[ùúûü]' -> 'u'.\x0a\x09    \x09'[ýÿ]' -> 'y'.\x0a\x09    \x09' ' -> ''.\x0a\x09\x09\x09'-' -> ''\x0a\x09\x09}\x0a\x09]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.FdJApplication.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._new();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},globals.FdJApplication.klass)})},
args: [],
source: "open\x0a\x09self new",
messageSends: ["new"],
referencedClasses: []
}),
globals.FdJApplication.klass);


smalltalk.addClass('FdJAssociation', globals.Object, ['nom', 'logo'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["nom",self["@nom"]]);
return $1;
},
args: [],
source: "asJSON\x0a\x09^ #{ 'nom'->nom }",
messageSends: [],
referencedClasses: []
}),
globals.FdJAssociation);

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
selector: "nomSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@nom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$2=_st(self["@nom"])._remplaceAvec_(_st($FdJApplication())._accents());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nomSansAccent",{},globals.FdJAssociation)})},
args: [],
source: "nomSansAccent\x0a\x09nom ifNil: [ ^ '' ].\x0a\x09^ nom remplaceAvec: FdJApplication accents",
messageSends: ["ifNil:", "remplaceAvec:", "accents"],
referencedClasses: ["FdJApplication"]
}),
globals.FdJAssociation);


smalltalk.addMethod(
smalltalk.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._nom_("Joc-ere");
return $1;
}, function($ctx1) {$ctx1.fill(self,"exemple",{},globals.FdJAssociation.klass)})},
args: [],
source: "exemple\x0a\x09\x22Genère un échantillon\x22\x0a\x09^ self new nom: 'Joc-ere'",
messageSends: ["nom:", "new"],
referencedClasses: []
}),
globals.FdJAssociation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "festival",
protocol: 'exemples',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._nom_("Festival");
return $1;
}, function($ctx1) {$ctx1.fill(self,"festival",{},globals.FdJAssociation.klass)})},
args: [],
source: "festival\x0a\x09^ self new nom: 'Festival'",
messageSends: ["nom:", "new"],
referencedClasses: []
}),
globals.FdJAssociation.klass);


smalltalk.addClass('FdJAssociations', globals.Object, ['liste'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (uneAssociation){
var self=this;
var association;
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(uneAssociation)._isString();
if(smalltalk.assert($1)){
association=_st(_st($FdJAssociation())._new())._nom_(uneAssociation);
} else {
association=uneAssociation;
};
_st(self["@liste"])._at_put_(_st(association)._nomSansAccent(),association);
return self}, function($ctx1) {$ctx1.fill(self,"ajoute:",{uneAssociation:uneAssociation,association:association},globals.FdJAssociations)})},
args: ["uneAssociation"],
source: "ajoute: uneAssociation\x0a\x09| association |\x0a\x09association := uneAssociation isString\x0a\x09\x09ifTrue: [ FdJAssociation new nom: uneAssociation ]\x0a\x09\x09ifFalse: [ uneAssociation ].\x0a\x09liste at: association nomSansAccent put: association",
messageSends: ["ifTrue:ifFalse:", "isString", "nom:", "new", "at:put:", "nomSansAccent"],
referencedClasses: ["FdJAssociation"]
}),
globals.FdJAssociations);

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
return self._ajoute_(a);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"associations:",{desAssociations:desAssociations},globals.FdJAssociations)})},
args: ["desAssociations"],
source: "associations: desAssociations\x0a\x09liste := HashedCollection new.\x0a\x09desAssociations do: [ :a | self ajoute: a ]",
messageSends: ["new", "do:", "ajoute:"],
referencedClasses: ["HashedCollection"]
}),
globals.FdJAssociations);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (nom){
var self=this;
function $FdJApplication(){return globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@liste"])._at_ifAbsent_(_st(nom)._remplaceAvec_(_st($FdJApplication())._accents()),(function(){
return nil;
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{nom:nom},globals.FdJAssociations)})},
args: ["nom"],
source: "at: nom\x0a\x09^ liste\x0a\x09\x09at: (nom remplaceAvec: FdJApplication accents)\x0a\x09\x09ifAbsent: [ nil ]",
messageSends: ["at:ifAbsent:", "remplaceAvec:", "accents"],
referencedClasses: ["FdJApplication"]
}),
globals.FdJAssociations);

smalltalk.addMethod(
smalltalk.method({
selector: "festival",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._at_("Festival");
return $1;
}, function($ctx1) {$ctx1.fill(self,"festival",{},globals.FdJAssociations)})},
args: [],
source: "festival\x0a\x09^ self at: 'Festival'",
messageSends: ["at:"],
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
$1=_st(self._instance())._associations_(_st($Array())._with_with_(_st($FdJAssociation())._festival(),_st($FdJAssociation())._exemple()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"exemple",{},globals.FdJAssociations.klass)})},
args: [],
source: "exemple\x0a\x09^ self instance\x0a\x09\x09associations: (Array with: FdJAssociation festival with: FdJAssociation exemple)",
messageSends: ["associations:", "instance", "with:with:", "festival", "exemple"],
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
var $2,$1,$receiver;
$2=self["@instance"];
if(($receiver = $2) == null || $receiver.isNil){
self["@instance"]=self._new();
$1=self["@instance"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.FdJAssociations.klass)})},
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.FdJAssociations.klass);


smalltalk.addClass('FdJBenevole', globals.Object, ['nom', 'prenom', 'assoc', 'tshirt', 'etat', 'inscrit'], 'Benevoles');
globals.FdJBenevole.comment="- tshirt: un TShirt\x0a- etat: pas encore venu, en cours de traitement, terminé";
smalltalk.addMethod(
smalltalk.method({
selector: "affiche",
protocol: 'accessing',
fn: function (){
var self=this;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $9,$8,$7,$6,$11,$10,$5,$4,$13,$12,$3,$2,$1,$14,$receiver;
$9=_st(_st(self["@nom"]).__comma(",")).__comma(self["@prenom"]);
$ctx1.sendIdx[","]=9;
$8=_st($9).__comma(",");
$ctx1.sendIdx[","]=8;
$7=_st($8).__comma(_st(self["@assoc"])._nom());
$ctx1.sendIdx[","]=7;
$6=_st($7).__comma(",");
$ctx1.sendIdx[","]=6;
$11=self["@tshirt"];
if(($receiver = $11) == null || $receiver.isNil){
$10="";
} else {
var t;
t=$receiver;
$10=_st(t)._id();
};
$5=_st($6).__comma($10);
$ctx1.sendIdx[","]=5;
$4=_st($5).__comma(",");
$ctx1.sendIdx[","]=4;
$13=self["@etat"];
if(($receiver = $13) == null || $receiver.isNil){
$12="";
} else {
$12=$13;
};
$3=_st($4).__comma($12);
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma(",");
$ctx1.sendIdx[","]=2;
$1=_st($2).__comma(self["@inscrit"]);
$ctx1.sendIdx[","]=1;
_st($Transcript())._show_($1);
$14=_st($Transcript())._cr();
return self}, function($ctx1) {$ctx1.fill(self,"affiche",{},globals.FdJBenevole)})},
args: [],
source: "affiche\x0a\x09Transcript show:\x0a\x09\x09        nom, ',', prenom\x0a\x09\x09, ',',  assoc nom\x0a\x09\x09, ',', (tshirt ifNil: [ '' ] ifNotNil: [ :t | t id ])\x0a\x09\x09, ',', (etat ifNil: [ '' ])\x0a\x09\x09, ',', inscrit\x0a\x09\x09; cr",
messageSends: ["show:", ",", "nom", "ifNil:ifNotNil:", "id", "ifNil:", "cr"],
referencedClasses: ["Transcript"]
}),
globals.FdJBenevole);

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
var $1,$2,$3,$receiver;
variables=_st($HashedCollection())._new();
_st(variables)._at_put_("nom",self["@nom"]);
$ctx1.sendIdx["at:put:"]=1;
_st(variables)._at_put_("prenom",self["@prenom"]);
$ctx1.sendIdx["at:put:"]=2;
$1=self["@etat"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(variables)._at_put_("etat",self["@etat"]);
$ctx1.sendIdx["at:put:"]=3;
};
_st(variables)._at_put_("assoc",_st(self["@assoc"])._nom());
$ctx1.sendIdx["at:put:"]=4;
$2=self["@tshirt"];
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
_st(variables)._at_put_("tshirt",_st(self["@tshirt"])._id());
$ctx1.sendIdx["at:put:"]=5;
};
_st(variables)._at_put_("inscrit",self["@inscrit"]);
$3=variables;
return $3;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},globals.FdJBenevole)})},
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09variables at: 'nom' put: nom.\x0a\x09variables at: 'prenom' put: prenom.\x0a\x09etat ifNotNil: [ variables at: 'etat' put: etat ].\x0a\x09variables at: 'assoc' put: assoc nom.\x0a\x09tshirt ifNotNil: [ variables at: 'tshirt' put: tshirt id ].\x0a\x09variables at: 'inscrit' put: inscrit.\x0a\x09^ variables",
messageSends: ["new", "at:put:", "ifNotNil:", "nom", "id"],
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
selector: "correspond:",
protocol: 'accessing',
fn: function (unBenevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._indexDe_(_st(unBenevole)._identiteSansAccent())).__eq((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"correspond:",{unBenevole:unBenevole},globals.FdJBenevole)})},
args: ["unBenevole"],
source: "correspond: unBenevole\x0a\x09\x22Retourne vrai si nom sans accent correspond\x22\x0a\x09^ (self indexDe: unBenevole identiteSansAccent) = 1",
messageSends: ["=", "indexDe:", "identiteSansAccent"],
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
selector: "estInscrit",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inscrit"];
return $1;
},
args: [],
source: "estInscrit\x0a\x09^ inscrit",
messageSends: [],
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
function $FdJTShirt(){return globals.FdJTShirt||(typeof FdJTShirt=="undefined"?nil:FdJTShirt)}
return smalltalk.withContext(function($ctx1) { 
var $1;
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
$1=_st($FdJAssociations())._instance();
$ctx2.sendIdx["instance"]=1;
return _st($1)._at_(v);
$ctx2.sendIdx["at:"]=3;
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,3)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($FdJAssociations())._instance())._festival();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=2;
self["@tshirt"]=_st(variables)._at_ifPresent_ifAbsent_("tshirt",(function(v){
return smalltalk.withContext(function($ctx2) {
return _st($FdJTShirt())._at_(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,5)})}),(function(){
return nil;
}));
self["@inscrit"]=_st(variables)._at_ifAbsent_("inscrit",(function(){
return true;
}));
return self}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},globals.FdJBenevole)})},
args: ["variables"],
source: "fromJSON: variables\x0a\x09nom := variables at: 'nom'.\x0a\x09prenom := variables at: 'prenom'.\x0a\x09etat := variables at: 'etat'\x0a\x09\x09ifPresent: [ :v | v asSymbol ]\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09assoc := variables at: 'assoc'\x0a\x09\x09ifPresent: [ :v | FdJAssociations instance at: v ]\x0a\x09\x09ifAbsent: [ FdJAssociations instance festival ].\x0a\x09tshirt := variables at: 'tshirt'\x0a\x09\x09ifPresent: [ :v | FdJTShirt at: v ]\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09inscrit := variables at: 'inscrit'\x0a\x09\x09ifAbsent: [ true ]",
messageSends: ["at:", "at:ifPresent:ifAbsent:", "asSymbol", "instance", "festival", "at:ifAbsent:"],
referencedClasses: ["FdJAssociations", "FdJTShirt"]
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "identiteSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$receiver;
$1=self["@nom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$3=_st(_st(self["@nom"]).__comma(" ")).__comma(self["@prenom"]);
$ctx1.sendIdx[","]=1;
$2=_st($3)._remplaceAvec_(_st($FdJApplication())._accents());
return $2;
}, function($ctx1) {$ctx1.fill(self,"identiteSansAccent",{},globals.FdJBenevole)})},
args: [],
source: "identiteSansAccent\x0a\x09nom ifNil: [ ^ '' ].\x0a\x09^ (nom, ' ', prenom) remplaceAvec: FdJApplication accents",
messageSends: ["ifNil:", "remplaceAvec:", ",", "accents"],
referencedClasses: ["FdJApplication"]
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "indexDe:",
protocol: 'accessing',
fn: function (chaine){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._identiteSansAccent())._indexOfSubString_(chaine);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexDe:",{chaine:chaine},globals.FdJBenevole)})},
args: ["chaine"],
source: "indexDe: chaine\x0a\x09\x22Retourne l'index de la chaine dans le nom sans accent, 0 si chaine pas trouvée, \x22\x0a\x09^ (self identiteSansAccent) indexOfSubString: chaine",
messageSends: ["indexOfSubString:", "identiteSansAccent"],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "indexDes:",
protocol: 'accessing',
fn: function (chaines){
var self=this;
var posPrenom,posNom;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6,$7,$8;
$1=_st(_st(chaines)._size()).__eq((1));
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
$3=_st(chaines)._at_((1));
$ctx1.sendIdx["at:"]=1;
$2=self._indexDe_($3);
return $2;
};
$4=self._prenomSansAccent();
$5=_st(chaines)._at_((2));
$ctx1.sendIdx["at:"]=2;
posPrenom=_st($4)._indexOfSubString_($5);
$ctx1.sendIdx["indexOfSubString:"]=1;
$6=_st(posPrenom).__eq((0));
$ctx1.sendIdx["="]=2;
if(smalltalk.assert($6)){
return (0);
};
posNom=_st(self._nomSansAccent())._indexOfSubString_(_st(chaines)._at_((1)));
$7=_st(posNom).__eq((0));
if(smalltalk.assert($7)){
return (0);
};
$8=_st((20).__star(posNom)).__plus(posPrenom);
return $8;
}, function($ctx1) {$ctx1.fill(self,"indexDes:",{chaines:chaines,posPrenom:posPrenom,posNom:posNom},globals.FdJBenevole)})},
args: ["chaines"],
source: "indexDes: chaines\x0a\x09| posPrenom posNom |\x0a\x09\x22Retourne l'index des chaines dans le nom sans accent, 0 si chaines pas trouvée, \x22\x0a\x09\x22si chaine seule, comme indexDe\x22\x0a\x09(chaines size = 1)\x0a\x09\x09ifTrue: [ ^ self indexDe: (chaines at: 1) ].\x0a\x09\x22sinon test du prenom d'abord\x22\x0a\x09posPrenom := (self prenomSansAccent) indexOfSubString: (chaines at: 2).\x0a\x09(posPrenom = 0) ifTrue: [ ^ 0 ].\x0a\x09\x22si prenom ok, test le nom\x22\x0a\x09posNom := (self nomSansAccent) indexOfSubString: (chaines at: 1).\x0a\x09(posNom = 0) ifTrue: [ ^ 0 ].\x0a\x09\x22et renvoie la position dans le nom augmenté de la position dans le prenom\x22\x0a\x09^ (20*posNom) + posPrenom",
messageSends: ["ifTrue:", "=", "size", "indexDe:", "at:", "indexOfSubString:", "prenomSansAccent", "nomSansAccent", "+", "*"],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "inscrit:",
protocol: 'accessing',
fn: function (estInscrit){
var self=this;
self["@inscrit"]=estInscrit;
return self},
args: ["estInscrit"],
source: "inscrit: estInscrit\x0a\x09inscrit := estInscrit",
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
selector: "nomSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@nom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$2=_st(self["@nom"])._remplaceAvec_(_st($FdJApplication())._accents());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nomSansAccent",{},globals.FdJBenevole)})},
args: [],
source: "nomSansAccent\x0a\x09nom ifNil: [ ^ '' ].\x0a\x09^ nom remplaceAvec: FdJApplication accents",
messageSends: ["ifNil:", "remplaceAvec:", "accents"],
referencedClasses: ["FdJApplication"]
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "normalise",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nom"]=_st(self["@nom"])._asUppercase();
self["@prenom"]=_st(self["@prenom"])._capitalized();
return self}, function($ctx1) {$ctx1.fill(self,"normalise",{},globals.FdJBenevole)})},
args: [],
source: "normalise\x0a\x09\x22passe le nom en majuscule et le prénom avec la 1ere lettre en majuscule\x22\x0a\x09nom := nom asUppercase.\x0a\x09prenom := prenom capitalized",
messageSends: ["asUppercase", "capitalized"],
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
selector: "prenomSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@prenom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$2=_st(self["@prenom"])._remplaceAvec_(_st($FdJApplication())._accents());
return $2;
}, function($ctx1) {$ctx1.fill(self,"prenomSansAccent",{},globals.FdJBenevole)})},
args: [],
source: "prenomSansAccent\x0a\x09prenom ifNil: [ ^ '' ].\x0a\x09^ prenom remplaceAvec: FdJApplication accents",
messageSends: ["ifNil:", "remplaceAvec:", "accents"],
referencedClasses: ["FdJApplication"]
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "reinit",
protocol: 'accessing',
fn: function (){
var self=this;
self["@etat"]=nil;
return self},
args: [],
source: "reinit\x0a\x09etat := nil",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "tshirt",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@tshirt"];
return $1;
},
args: [],
source: "tshirt\x0a\x09^ tshirt",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "tshirt:",
protocol: 'accessing',
fn: function (unTShirt){
var self=this;
self["@tshirt"]=unTShirt;
return self},
args: ["unTShirt"],
source: "tshirt: unTShirt\x0a\x09tshirt := unTShirt",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);


globals.FdJBenevole.klass.iVarNames = ['accents'];
smalltalk.addMethod(
smalltalk.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
function $FdJTShirt(){return globals.FdJTShirt||(typeof FdJTShirt=="undefined"?nil:FdJTShirt)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._nom_("OSELE");
_st($2)._prenom_("Vincent");
_st($2)._association_(_st($FdJAssociation())._exemple());
_st($2)._tshirt_(_st($FdJTShirt())._at_("h-m"));
_st($2)._inscrit_(true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"exemple",{},globals.FdJBenevole.klass)})},
args: [],
source: "exemple\x0a\x09^ self new nom: 'OSELE';\x0a\x09\x09\x09 prenom: 'Vincent';\x0a\x09\x09\x09 association: (FdJAssociation exemple);\x0a\x09\x09\x09 tshirt: (FdJTShirt at: 'h-m');\x0a\x09\x09\x09 inscrit: true;\x0a\x09\x09\x09 yourself",
messageSends: ["nom:", "new", "prenom:", "association:", "exemple", "tshirt:", "at:", "inscrit:", "yourself"],
referencedClasses: ["FdJAssociation", "FdJTShirt"]
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
function $FdJAssociations(){return globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
function $FdJAssociation(){return globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$6,$7;
benevoles=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
_st($FdJAssociations())._exemple();
$ctx1.sendIdx["exemple"]=1;
association=_st($FdJAssociation())._exemple();
$ctx1.sendIdx["exemple"]=2;
_st(benevoles)._add_(self._exemple());
$ctx1.sendIdx["add:"]=1;
$1=benevoles;
$3=self._new();
$ctx1.sendIdx["new"]=2;
_st($3)._nom_("DUPOND");
$ctx1.sendIdx["nom:"]=1;
_st($3)._prenom_("Gérard");
$ctx1.sendIdx["prenom:"]=1;
_st($3)._association_(association);
$ctx1.sendIdx["association:"]=1;
$4=_st($3)._inscrit_(false);
$ctx1.sendIdx["inscrit:"]=1;
$2=$4;
_st($1)._add_($2);
$ctx1.sendIdx["add:"]=2;
$5=self._new();
_st($5)._nom_("MEILLEIS");
_st($5)._prenom_("George");
_st($5)._association_(_st(_st($FdJAssociations())._instance())._festival());
$6=_st($5)._inscrit_(true);
_st(benevoles)._add_($6);
$7=benevoles;
return $7;
}, function($ctx1) {$ctx1.fill(self,"exemples",{benevoles:benevoles,association:association},globals.FdJBenevole.klass)})},
args: [],
source: "exemples\x0a\x09| benevoles association |\x0a\x09benevoles := Array new.\x0a\x09FdJAssociations exemple.\x0a\x09association := FdJAssociation exemple.\x0a\x09benevoles add: self exemple.\x0a\x09benevoles add: (self new nom: 'DUPOND';\x0a\x09\x09\x09 prenom: 'Gérard';\x0a\x09\x09\x09 association: association;\x0a\x09\x09\x09 inscrit: false).\x0a\x09benevoles add: (self new nom: 'MEILLEIS';\x0a\x09\x09\x09 prenom: 'George';\x0a\x09\x09\x09 association: FdJAssociations instance festival;\x0a\x09\x09\x09 inscrit: true).\x0a\x09^ benevoles",
messageSends: ["new", "exemple", "add:", "nom:", "prenom:", "association:", "inscrit:", "festival", "instance"],
referencedClasses: ["Array", "FdJAssociations", "FdJAssociation"]
}),
globals.FdJBenevole.klass);


smalltalk.addClass('FdJBenevoles', globals.Object, ['liste'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@liste"])._add_(unBenevole);
return self}, function($ctx1) {$ctx1.fill(self,"ajoute:",{unBenevole:unBenevole},globals.FdJBenevoles)})},
args: ["unBenevole"],
source: "ajoute: unBenevole\x0a\x09liste add: unBenevole",
messageSends: ["add:"],
referencedClasses: []
}),
globals.FdJBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "ajouteTous:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@liste"])._addAll_(desBenevoles);
return self}, function($ctx1) {$ctx1.fill(self,"ajouteTous:",{desBenevoles:desBenevoles},globals.FdJBenevoles)})},
args: ["desBenevoles"],
source: "ajouteTous: desBenevoles\x0a\x09liste addAll: desBenevoles",
messageSends: ["addAll:"],
referencedClasses: []
}),
globals.FdJBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "ajouteUnique:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
_st($Transcript())._show_("Benevoles déjà existants:");
$ctx1.sendIdx["show:"]=1;
$1=_st($Transcript())._cr();
$ctx1.sendIdx["cr"]=1;
_st(self["@liste"])._addAll_(_st(desBenevoles)._select_thenCollect_((function(b){
return smalltalk.withContext(function($ctx2) {
$2=self._contient_(b);
if(smalltalk.assert($2)){
$4=_st("- ".__comma(_st(b)._nom())).__comma(" ");
$ctx2.sendIdx[","]=2;
$3=_st($4).__comma(_st(b)._prenom());
$ctx2.sendIdx[","]=1;
_st($Transcript())._show_($3);
$5=_st($Transcript())._cr();
$5;
return false;
} else {
return true;
};
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}),(function(b){
return smalltalk.withContext(function($ctx2) {
return _st(b)._normalise();
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,4)})})));
return self}, function($ctx1) {$ctx1.fill(self,"ajouteUnique:",{desBenevoles:desBenevoles},globals.FdJBenevoles)})},
args: ["desBenevoles"],
source: "ajouteUnique: desBenevoles\x0a\x09Transcript show: 'Benevoles déjà existants:'; cr.\x0a\x09liste addAll:\x0a\x09\x09(desBenevoles\x0a\x09\x09\x09\x09select: [ :b |\x0a\x09\x09\x09\x09\x09(self contient: b)\x0a\x09\x09\x09\x09\x09\x09ifTrue: [ Transcript show: '- ', b nom, ' ', b prenom; cr. false ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ true ]\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09thenCollect: [ :b | b normalise ])",
messageSends: ["show:", "cr", "addAll:", "select:thenCollect:", "ifTrue:ifFalse:", "contient:", ",", "nom", "prenom", "normalise"],
referencedClasses: ["Transcript"]
}),
globals.FdJBenevoles);

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
selector: "contient:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@liste"])._anySatisfy_((function(b){
return smalltalk.withContext(function($ctx2) {
return _st(b)._correspond_(unBenevole);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"contient:",{unBenevole:unBenevole},globals.FdJBenevoles)})},
args: ["unBenevole"],
source: "contient: unBenevole\x0a\x09^ liste anySatisfy: [ :b | b correspond: unBenevole ]\x0a\x09\x09",
messageSends: ["anySatisfy:", "correspond:"],
referencedClasses: []
}),
globals.FdJBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "filtre:max:",
protocol: 'as yet unclassified',
fn: function (texte,max){
var self=this;
var parties,selection,result,valeur;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$8,$7,$10,$9,$6,$11,$12,$13;
var $early={};
try {
$1=_st(texte)._isEmpty();
if(smalltalk.assert($1)){
$2=[];
return $2;
};
parties=_st(_st(texte)._tokenize_(" "))._collect_((function(p){
return smalltalk.withContext(function($ctx2) {
return _st(p)._sansAccent();
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,2)})}));
$ctx1.sendIdx["collect:"]=1;
selection=_st(self["@liste"])._collect_((function(b){
return smalltalk.withContext(function($ctx2) {
valeur=_st(b)._indexDes_(parties);
valeur;
$3=_st(_st(valeur).__tild_eq((0))).__and(_st(_st(b)._estInscrit())._not());
$ctx2.sendIdx["&"]=1;
if(smalltalk.assert($3)){
valeur=_st(valeur).__plus((100));
valeur;
};
return [valeur,b];
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,3)})}));
_st(selection)._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {
$4=_st(a)._at_((1));
$ctx2.sendIdx["at:"]=1;
$5=_st(b)._at_((1));
$ctx2.sendIdx["at:"]=2;
return _st($4).__lt_eq($5);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,5)})}));
result=[];
_st(selection)._do_((function(s){
return smalltalk.withContext(function($ctx2) {
$8=_st(s)._at_((1));
$ctx2.sendIdx["at:"]=3;
$7=_st($8).__gt((0));
$10=_st(s)._at_((2));
$ctx2.sendIdx["at:"]=4;
$9=_st($10)._estDisponible();
$6=_st($7).__and($9);
if(smalltalk.assert($6)){
_st(result)._add_(_st(s)._at_((2)));
$11=_st(_st(result)._size()).__gt_eq(max);
if(smalltalk.assert($11)){
$12=result;
throw $early=[$12];
};
};
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,6)})}));
$13=result;
return $13;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"filtre:max:",{texte:texte,max:max,parties:parties,selection:selection,result:result,valeur:valeur},globals.FdJBenevoles)})},
args: ["texte", "max"],
source: "filtre: texte max: max\x0a\x09| parties selection result valeur |\x0a\x09texte isEmpty ifTrue: [ ^ #() ].\x0a\x09\x22teste le nom\x22\x0a\x09parties := (texte tokenize: ' ') collect: [ :p | p sansAccent ].\x0a\x09selection := liste collect: [ :b |\x0a\x09\x09valeur := b indexDes: parties.\x0a\x09\x09(valeur ~= 0) & (b estInscrit not) ifTrue: [ valeur := valeur + 100 ].\x0a\x09\x09{ valeur. b }\x0a\x09].\x0a\x09selection sort: [ :a :b | (a at: 1) <= (b at: 1) ].\x0a\x09result := #().\x0a\x09selection do: [ :s |\x0a\x09\x09((s at: 1) > 0) & ((s at: 2) estDisponible) ifTrue: [\x0a\x09\x09\x09result add: (s at: 2).\x0a\x09\x09\x09(result size >= max) ifTrue: [ ^ result ]\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09^ result",
messageSends: ["ifTrue:", "isEmpty", "collect:", "tokenize:", "sansAccent", "indexDes:", "&", "~=", "not", "estInscrit", "+", "sort:", "<=", "at:", "do:", ">", "estDisponible", "add:", ">=", "size"],
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
selector: "reinit",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@liste"])._do_((function(b){
return smalltalk.withContext(function($ctx2) {
return _st(b)._reinit();
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reinit",{},globals.FdJBenevoles)})},
args: [],
source: "reinit\x0a\x09liste do: [ :b | b reinit ]",
messageSends: ["do:", "reinit"],
referencedClasses: []
}),
globals.FdJBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionnes",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@liste"])._select_((function(b){
return smalltalk.withContext(function($ctx2) {
return _st(b)._estEncours();
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionnes",{},globals.FdJBenevoles)})},
args: [],
source: "selectionnes\x0a\x09^ liste select: [ :b | b estEncours ]",
messageSends: ["select:", "estEncours"],
referencedClasses: []
}),
globals.FdJBenevoles);

smalltalk.addMethod(
smalltalk.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@liste"]=[];
return self},
args: [],
source: "vide\x0a\x09liste := #()",
messageSends: [],
referencedClasses: []
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


smalltalk.addClass('FdJHistorique', globals.Object, ['liste'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "affiche",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var date,sdate;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1,$11,$10,$12,$9,$8,$13,$7,$6,$14,$5,$4,$15,$3,$2,$17,$16,$18;
_st($Transcript())._clear();
_st(self["@liste"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(e)._at_("date");
$ctx2.sendIdx["at:"]=1;
date=_st($Date())._new_($1);
date;
$11=_st(_st(date)._dayOfMonth())._asString();
$ctx2.sendIdx["asString"]=1;
$10=_st($11).__comma("/");
$ctx2.sendIdx[","]=10;
$12=_st(_st(date)._month())._asString();
$ctx2.sendIdx["asString"]=2;
$9=_st($10).__comma($12);
$ctx2.sendIdx[","]=9;
$8=_st($9).__comma("/");
$ctx2.sendIdx[","]=8;
$13=_st(_st(date)._year())._asString();
$ctx2.sendIdx["asString"]=3;
$7=_st($8).__comma($13);
$ctx2.sendIdx[","]=7;
$6=_st($7).__comma(" ");
$ctx2.sendIdx[","]=6;
$14=_st(_st(date)._hours())._asString();
$ctx2.sendIdx["asString"]=4;
$5=_st($6).__comma($14);
$ctx2.sendIdx[","]=5;
$4=_st($5).__comma(":");
$ctx2.sendIdx[","]=4;
$15=_st(_st(date)._minutes())._asString();
$ctx2.sendIdx["asString"]=5;
$3=_st($4).__comma($15);
$ctx2.sendIdx[","]=3;
$2=_st($3).__comma(":");
$ctx2.sendIdx[","]=2;
sdate=_st($2).__comma(_st(_st(date)._seconds())._asString());
$ctx2.sendIdx[","]=1;
sdate;
$17=_st(_st(sdate).__comma(",")).__comma(_st(e)._at_("evennement"));
$ctx2.sendIdx[","]=12;
$16=_st($17).__comma("'");
$ctx2.sendIdx[","]=11;
_st($Transcript())._show_($16);
$18=_st($Transcript())._cr();
return $18;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"affiche",{date:date,sdate:sdate},globals.FdJHistorique)})},
args: [],
source: "affiche\x0a\x09| date sdate |\x0a\x09Transcript clear.\x0a\x09liste do: [ :e |\x0a\x09\x09date := Date new: (e at: 'date').\x0a\x09\x09sdate :=\x0a\x09\x09\x09  date dayOfMonth asString, '/', date month asString, '/', date year asString\x0a\x09\x09\x09, ' '\x0a\x09\x09\x09, date hours asString, ':', date minutes asString, ':', date seconds asString.\x0a\x09\x09Transcript show: sdate, ',', (e at: 'evennement'), '''';cr ]",
messageSends: ["clear", "do:", "new:", "at:", ",", "asString", "dayOfMonth", "month", "year", "hours", "minutes", "seconds", "show:", "cr"],
referencedClasses: ["Transcript", "Date"]
}),
globals.FdJHistorique);

smalltalk.addMethod(
smalltalk.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (texte){
var self=this;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@liste"])._add_(globals.HashedCollection._newFromPairs_(["date",_st(_st($Date())._now())._asString(),"evennement",texte]));
self._sauve();
return self}, function($ctx1) {$ctx1.fill(self,"ajoute:",{texte:texte},globals.FdJHistorique)})},
args: ["texte"],
source: "ajoute: texte\x0a\x09liste add: #{\x0a\x09\x09\x09'date' -> Date now asString.\x0a\x09\x09\x09'evennement' -> texte\x0a\x09\x09}.\x0a\x09self sauve",
messageSends: ["add:", "asString", "now", "sauve"],
referencedClasses: ["Date"]
}),
globals.FdJHistorique);

smalltalk.addMethod(
smalltalk.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (variables){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@liste"]=_st(variables)._at_("liste");
return self}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},globals.FdJHistorique)})},
args: ["variables"],
source: "fromJSON: variables\x0a\x09liste := variables at: 'liste'.",
messageSends: ["at:"],
referencedClasses: []
}),
globals.FdJHistorique);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $FdJAnnonceur(){return globals.FdJAnnonceur||(typeof FdJAnnonceur=="undefined"?nil:FdJAnnonceur)}
function $FdJBenevoleChangeEtat(){return globals.FdJBenevoleChangeEtat||(typeof FdJBenevoleChangeEtat=="undefined"?nil:FdJBenevoleChangeEtat)}
return smalltalk.withContext(function($ctx1) { 
self["@liste"]=[];
_st(_st($FdJAnnonceur())._current())._on_do_($FdJBenevoleChangeEtat(),(function(evt){
return smalltalk.withContext(function($ctx2) {
return self._onBenevoleChangeEtat_(_st(evt)._benevole());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.FdJHistorique)})},
args: [],
source: "initialize\x0a\x09liste := #().\x0a\x09FdJAnnonceur current\x0a\x09\x09on: FdJBenevoleChangeEtat\x0a\x09\x09do: [ :evt |\x0a\x09\x09\x09self onBenevoleChangeEtat: evt benevole ]",
messageSends: ["on:do:", "current", "onBenevoleChangeEtat:", "benevole"],
referencedClasses: ["FdJAnnonceur", "FdJBenevoleChangeEtat"]
}),
globals.FdJHistorique);

smalltalk.addMethod(
smalltalk.method({
selector: "onBenevoleChangeEtat:",
protocol: 'as yet unclassified',
fn: function (benevole){
var self=this;
var nom;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(_st(benevole)._nom()).__comma(" ");
$ctx1.sendIdx[","]=2;
nom=_st($1).__comma(_st(benevole)._prenom());
$ctx1.sendIdx[","]=1;
$2=_st(benevole)._estEncours();
if(smalltalk.assert($2)){
$3="Debut distribution '".__comma(nom);
$ctx1.sendIdx[","]=3;
self._ajoute_($3);
$ctx1.sendIdx["ajoute:"]=1;
};
$4=_st(benevole)._estDistribue();
if(smalltalk.assert($4)){
self._ajoute_("Fin distribution '".__comma(nom));
};
return self}, function($ctx1) {$ctx1.fill(self,"onBenevoleChangeEtat:",{benevole:benevole,nom:nom},globals.FdJHistorique)})},
args: ["benevole"],
source: "onBenevoleChangeEtat: benevole\x0a\x09| nom |\x0a\x09nom := benevole nom, ' ', benevole prenom.\x0a\x09benevole estEncours ifTrue: [ \x0a\x09\x09self ajoute: 'Debut distribution ''', nom ].\x0a\x09benevole estDistribue ifTrue: [\x0a\x09\x09self ajoute: 'Fin distribution ''', nom ]",
messageSends: [",", "nom", "prenom", "ifTrue:", "estEncours", "ajoute:", "estDistribue"],
referencedClasses: []
}),
globals.FdJHistorique);

smalltalk.addMethod(
smalltalk.method({
selector: "sauve",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $FdJStockage(){return globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
return smalltalk.withContext(function($ctx1) { 
_st($FdJStockage())._sauve_(self);
return self}, function($ctx1) {$ctx1.fill(self,"sauve",{},globals.FdJHistorique)})},
args: [],
source: "sauve\x0a\x09FdJStockage sauve: self",
messageSends: ["sauve:"],
referencedClasses: ["FdJStockage"]
}),
globals.FdJHistorique);



smalltalk.addClass('FdJImporteur', globals.Object, [], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "importe:",
protocol: 'as yet unclassified',
fn: function (texte){
var self=this;
var tous,fields,rows;
return smalltalk.withContext(function($ctx1) { 
var $1;
tous=_st(jQuery)._parse_config_(texte,globals.HashedCollection._newFromPairs_(["delimiter",",","header",true,"dynamicTyping",false]));
$1=_st(tous)._results();
return $1;
}, function($ctx1) {$ctx1.fill(self,"importe:",{texte:texte,tous:tous,fields:fields,rows:rows},globals.FdJImporteur)})},
args: ["texte"],
source: "importe: texte\x0a\x09| tous fields rows |\x0a\x09tous := jQuery\x0a\x09\x09parse: texte\x0a\x09\x09config: #{ 'delimiter'->','. 'header'->true. 'dynamicTyping'->false }.\x0a\x09^ tous results",
messageSends: ["parse:config:", "results"],
referencedClasses: []
}),
globals.FdJImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "importeAssociation:",
protocol: 'as yet unclassified',
fn: function (row){
var self=this;
function $FdJAssociations(){return globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
_st(row)._at_ifPresent_("Association",(function(assoc){
return smalltalk.withContext(function($ctx2) {
$2=_st($FdJAssociations())._instance();
$ctx2.sendIdx["instance"]=1;
$1=_st($2)._at_(assoc);
if(($receiver = $1) == null || $receiver.isNil){
return _st(_st($FdJAssociations())._instance())._ajoute_(assoc);
} else {
return $1;
};
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"importeAssociation:",{row:row},globals.FdJImporteur)})},
args: ["row"],
source: "importeAssociation: row\x0a\x09row at: 'Association' ifPresent: [ :assoc |\x0a\x09\x09(FdJAssociations instance at: assoc) ifNil: [\x0a\x09\x09\x09FdJAssociations instance ajoute: assoc\x0a\x09\x09\x09]\x0a\x09\x09]",
messageSends: ["at:ifPresent:", "ifNil:", "at:", "instance", "ajoute:"],
referencedClasses: ["FdJAssociations"]
}),
globals.FdJImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "importeAssociations:",
protocol: 'as yet unclassified',
fn: function (rows){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(rows)._do_((function(row){
return smalltalk.withContext(function($ctx2) {
return self._importeAssociation_(row);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"importeAssociations:",{rows:rows},globals.FdJImporteur)})},
args: ["rows"],
source: "importeAssociations: rows\x0a\x09rows do: [ :row | self importeAssociation: row ]",
messageSends: ["do:", "importeAssociation:"],
referencedClasses: []
}),
globals.FdJImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "importeBenevole:",
protocol: 'as yet unclassified',
fn: function (row){
var self=this;
function $FdJStockage(){return globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
function $FdJBenevole(){return globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$3=_st(row)._at_("Nom");
$ctx1.sendIdx["at:"]=1;
$2=globals.HashedCollection._newFromPairs_(["nom",$3,"prenom",_st(row)._at_("Prénom"),"assoc",_st(row)._at_ifAbsent_("Association",(function(){
return "Festival";
})),"inscrit",_st(row)._at_ifPresent_ifAbsent_("Inscrit",(function(r){
return smalltalk.withContext(function($ctx2) {
return _st(r)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}),(function(){
return true;
}))]);
$1=_st($FdJStockage())._charge_depuis_($FdJBenevole(),$2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"importeBenevole:",{row:row},globals.FdJImporteur)})},
args: ["row"],
source: "importeBenevole: row\x0a\x09^ FdJStockage charge: FdJBenevole depuis: #{\x0a\x09\x09'nom' -> (row at: 'Nom').\x0a\x09\x09'prenom' -> (row at: 'Prénom').\x0a\x09\x09'assoc' -> (row at: 'Association' ifAbsent: [ 'Festival']).\x0a\x09\x09'inscrit' -> (row at: 'Inscrit'\x0a\x09\x09\x09\x09\x09\x09  ifPresent: [ :r | r isEmpty ]\x0a\x09\x09\x09\x09\x09  \x09  ifAbsent: [ true ])\x0a\x09\x09}",
messageSends: ["charge:depuis:", "at:", "at:ifAbsent:", "at:ifPresent:ifAbsent:", "isEmpty"],
referencedClasses: ["FdJStockage", "FdJBenevole"]
}),
globals.FdJImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "importeBenevoles:",
protocol: 'as yet unclassified',
fn: function (rows){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(rows)._collect_((function(row){
return smalltalk.withContext(function($ctx2) {
return self._importeBenevole_(row);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"importeBenevoles:",{rows:rows},globals.FdJImporteur)})},
args: ["rows"],
source: "importeBenevoles: rows\x0a\x09^ rows collect: [ :row | self importeBenevole: row ]",
messageSends: ["collect:", "importeBenevole:"],
referencedClasses: []
}),
globals.FdJImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "importeTShirt:",
protocol: 'as yet unclassified',
fn: function (row){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$8,$7,$6,$10,$9,$5,$4,$1;
$3=_st(row)._at_("Nom");
$ctx1.sendIdx["at:"]=1;
$2=_st($3)._asLowercase();
$ctx1.sendIdx["asLowercase"]=1;
$8=_st(row)._at_("Cintré");
$ctx1.sendIdx["at:"]=2;
$7=_st($8)._ifEmpty_ifNotEmpty_((function(){
return "h";
}),(function(){
return "f";
}));
$6=_st($7).__comma("-");
$10=_st(row)._at_("Taille");
$ctx1.sendIdx["at:"]=3;
$9=_st($10)._asLowercase();
$5=_st($6).__comma($9);
$ctx1.sendIdx[","]=2;
$4=_st($5).__comma(_st(_st(row)._at_("LSF"))._ifNotEmpty_((function(){
return "-lsf";
})));
$ctx1.sendIdx[","]=1;
$1=_st($2).__minus_gt($4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"importeTShirt:",{row:row},globals.FdJImporteur)})},
args: ["row"],
source: "importeTShirt: row\x0a\x09^ ((row at: 'Nom') asLowercase)\x0a\x09\x09->\x0a\x09  (((row at: 'Cintré') ifEmpty: [ 'h' ] ifNotEmpty: [ 'f' ] )\x0a\x09\x09, '-', ((row at: 'Taille') asLowercase)\x0a\x09\x09, ((row at: 'LSF') ifNotEmpty: [ '-lsf' ])\x0a\x09\x09)",
messageSends: ["->", "asLowercase", "at:", ",", "ifEmpty:ifNotEmpty:", "ifNotEmpty:"],
referencedClasses: []
}),
globals.FdJImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "importeTShirts:",
protocol: 'as yet unclassified',
fn: function (rows){
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HashedCollection())._from_(_st(rows)._collect_((function(row){
return smalltalk.withContext(function($ctx2) {
return self._importeTShirt_(row);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)})})));
return $1;
}, function($ctx1) {$ctx1.fill(self,"importeTShirts:",{rows:rows},globals.FdJImporteur)})},
args: ["rows"],
source: "importeTShirts: rows\x0a\x09^ HashedCollection from:\x0a\x09\x09(rows collect: [ :row | self importeTShirt: row ])",
messageSends: ["from:", "collect:", "importeTShirt:"],
referencedClasses: ["HashedCollection"]
}),
globals.FdJImporteur);



smalltalk.addClass('FdJStock', globals.Object, ['tshirts'], 'Benevoles');


smalltalk.addClass('FdJStockage', globals.Object, ['stockage'], 'Benevoles');
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
selector: "charge:sinon:",
protocol: 'as yet unclassified',
fn: function (entite,block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$receiver;
$1=self._jsonPour_(entite);
if(($receiver = $1) == null || $receiver.isNil){
$2=_st(block)._value();
return $2;
} else {
var s;
s=$receiver;
$3=self._charge_depuis_(entite,s);
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"charge:sinon:",{entite:entite,block:block},globals.FdJStockage)})},
args: ["entite", "block"],
source: "charge: entite sinon: block\x0a\x09(self jsonPour: entite)\x0a\x09\x09ifNil: [\x0a\x09\x09\x09^ block value ]\x0a\x09\x09ifNotNil: [:s |\x0a\x09\x09\x09^ self charge: entite depuis: s ]",
messageSends: ["ifNil:ifNotNil:", "jsonPour:", "value", "charge:depuis:"],
referencedClasses: []
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "existe:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@stockage"])._getItem_(self._nomPour_(objet)))._isNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"existe:",{objet:objet},globals.FdJStockage)})},
args: ["objet"],
source: "existe: objet\x0a\x09^ (stockage getItem: (self nomPour: objet)) isNil",
messageSends: ["isNil", "getItem:", "nomPour:"],
referencedClasses: []
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@stockage"]=localStorage;
return self},
args: [],
source: "initialize\x0a\x09stockage := localStorage\x0a\x09\x22stockage := sessionStorage\x22",
messageSends: [],
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
var $1,$2,$receiver;
$1=self._stockagePour_(objet);
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
var s;
s=$receiver;
$2=self._variablesPour_(_st($JSON())._parse_(s));
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"jsonPour:",{objet:objet},globals.FdJStockage)})},
args: ["objet"],
source: "jsonPour: objet\x0a\x09(self stockagePour: objet)\x0a\x09\x09ifNil: [ ^ nil ]\x0a\x09\x09ifNotNil: [ :s |\x0a\x09\x09\x09^ self variablesPour: (JSON parse: s) ]",
messageSends: ["ifNil:ifNotNil:", "stockagePour:", "variablesPour:", "parse:"],
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
_st(self["@stockage"])._setItem_value_(self._nomPour_(objet),_st(objet)._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"sauve:",{objet:objet},globals.FdJStockage)})},
args: ["objet"],
source: "sauve: objet\x0a\x09stockage\x0a\x09\x09setItem: (self nomPour: objet)\x0a\x09\x09value: objet asJSONString",
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
$1=_st(self["@stockage"])._getItem_(self._nomPour_(objet));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stockagePour:",{objet:objet},globals.FdJStockage)})},
args: ["objet"],
source: "stockagePour: objet\x0a\x09\x22objet peut être une classe, une chaine ou un objet\x22\x0a\x09^ stockage getItem: (self nomPour: objet)",
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
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Smalltalk())._readJSObject_(json);
return $1;
}, function($ctx1) {$ctx1.fill(self,"variablesPour:",{json:json},globals.FdJStockage)})},
args: ["json"],
source: "variablesPour: json\x0a\x09^ Smalltalk readJSObject: json",
messageSends: ["readJSObject:"],
referencedClasses: ["Smalltalk"]
}),
globals.FdJStockage);

smalltalk.addMethod(
smalltalk.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stockage"])._clear();
return self}, function($ctx1) {$ctx1.fill(self,"vide",{},globals.FdJStockage)})},
args: [],
source: "vide\x0a\x09stockage clear",
messageSends: ["clear"],
referencedClasses: []
}),
globals.FdJStockage);


globals.FdJStockage.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "charge:",
protocol: 'as yet unclassified',
fn: function (entite){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._charge_(entite);
return $1;
}, function($ctx1) {$ctx1.fill(self,"charge:",{entite:entite},globals.FdJStockage.klass)})},
args: ["entite"],
source: "charge: entite\x0a\x09^ self instance charge: entite",
messageSends: ["charge:", "instance"],
referencedClasses: []
}),
globals.FdJStockage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "charge:depuis:",
protocol: 'as yet unclassified',
fn: function (entite,json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._charge_depuis_(entite,json);
return $1;
}, function($ctx1) {$ctx1.fill(self,"charge:depuis:",{entite:entite,json:json},globals.FdJStockage.klass)})},
args: ["entite", "json"],
source: "charge: entite depuis: json\x0a\x09^ self instance charge: entite depuis: json",
messageSends: ["charge:depuis:", "instance"],
referencedClasses: []
}),
globals.FdJStockage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "charge:sinon:",
protocol: 'as yet unclassified',
fn: function (entite,block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._charge_sinon_(entite,block);
return $1;
}, function($ctx1) {$ctx1.fill(self,"charge:sinon:",{entite:entite,block:block},globals.FdJStockage.klass)})},
args: ["entite", "block"],
source: "charge: entite sinon: block\x0a\x09^ self instance charge: entite sinon: block",
messageSends: ["charge:sinon:", "instance"],
referencedClasses: []
}),
globals.FdJStockage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@instance"];
if(($receiver = $2) == null || $receiver.isNil){
self["@instance"]=self._new();
$1=self["@instance"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.FdJStockage.klass)})},
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.FdJStockage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sauve:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._sauve_(objet);
return $1;
}, function($ctx1) {$ctx1.fill(self,"sauve:",{objet:objet},globals.FdJStockage.klass)})},
args: ["objet"],
source: "sauve: objet\x0a\x09^ self instance sauve: objet",
messageSends: ["sauve:", "instance"],
referencedClasses: []
}),
globals.FdJStockage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._vide();
return $1;
}, function($ctx1) {$ctx1.fill(self,"vide",{},globals.FdJStockage.klass)})},
args: [],
source: "vide\x0a\x09^ self instance vide",
messageSends: ["vide", "instance"],
referencedClasses: []
}),
globals.FdJStockage.klass);


smalltalk.addClass('FdJTShirt', globals.Object, ['type', 'taille', 'spec'], 'Benevoles');
globals.FdJTShirt.comment="type: H(omme) ou F(emme)\x0ataille: XS, S, M...\x0aspec: vide, lsf, dv...";
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$5,$4,$1,$receiver;
$3=_st(self["@type"]).__comma("-");
$ctx1.sendIdx[","]=3;
$2=_st($3).__comma(self["@taille"]);
$ctx1.sendIdx[","]=2;
$5=self["@spec"];
if(($receiver = $5) == null || $receiver.isNil){
$4="";
} else {
$4="-".__comma(self["@spec"]);
};
$1=_st($2).__comma($4);
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},globals.FdJTShirt)})},
args: [],
source: "id\x0a\x09^ type, '-', taille, (spec ifNotNil: [ '-', spec ] ifNil: [ '' ])",
messageSends: [",", "ifNotNil:ifNil:"],
referencedClasses: []
}),
globals.FdJTShirt);

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


globals.FdJTShirt.klass.iVarNames = ['tshirts'];
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._tshirts())._at_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{id:id},globals.FdJTShirt.klass)})},
args: ["id"],
source: "at: id\x0a\x09^ self tshirts at: id",
messageSends: ["at:", "tshirts"],
referencedClasses: []
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tshirts",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var t;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$receiver;
$1=self["@tshirts"];
if(($receiver = $1) == null || $receiver.isNil){
self["@tshirts"]=_st($HashedCollection())._new();
$ctx1.sendIdx["new"]=1;
self["@tshirts"];
["h", "f"]._do_((function(genre){
return smalltalk.withContext(function($ctx2) {
return ["xs", "s", "m", "l", "xl", "xxl", "3xl"]._do_((function(taille){
return smalltalk.withContext(function($ctx3) {
$2=self._new();
$ctx3.sendIdx["new"]=2;
_st($2)._type_(genre);
$ctx3.sendIdx["type:"]=1;
$3=_st($2)._taille_(taille);
$ctx3.sendIdx["taille:"]=1;
t=$3;
t;
$4=self["@tshirts"];
$5=_st(t)._id();
$ctx3.sendIdx["id"]=1;
_st($4)._at_put_($5,t);
$ctx3.sendIdx["at:put:"]=1;
$6=self._new();
_st($6)._type_(genre);
_st($6)._taille_(taille);
$7=_st($6)._spec_("lsf");
t=$7;
t;
return _st(self["@tshirts"])._at_put_(_st(t)._id(),t);
}, function($ctx3) {$ctx3.fillBlock({taille:taille},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({genre:genre},$ctx1,2)})}));
$ctx1.sendIdx["do:"]=1;
} else {
$1;
};
$8=self["@tshirts"];
return $8;
}, function($ctx1) {$ctx1.fill(self,"tshirts",{t:t},globals.FdJTShirt.klass)})},
args: [],
source: "tshirts\x0a\x09| t |\x0a\x09tshirts ifNil: [\x0a\x09\x09tshirts := HashedCollection new.\x0a\x09\x09#(#h #f) do: [ :genre |\x0a\x09\x09\x09#(#xs #s #m #l #xl #xxl '3xl') do: [ :taille |\x0a\x09\x09\x09\x09t := self new type: genre; taille: taille.\x0a\x09\x09\x09\x09tshirts at: t id put: t.\x0a\x09\x09\x09\x09t := self new type: genre; taille: taille; spec: 'lsf'.\x0a\x09\x09\x09\x09tshirts at: t id put: t\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09^ tshirts",
messageSends: ["ifNil:", "new", "do:", "type:", "taille:", "at:put:", "id", "spec:"],
referencedClasses: ["HashedCollection"]
}),
globals.FdJTShirt.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@tshirts"]=nil;
return self},
args: [],
source: "vide\x0a\x09tshirts := nil",
messageSends: [],
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
selector: "ajouteClasse:",
protocol: 'as yet unclassified',
fn: function (nom){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@div"];
$2=_st(_st(_st(_st(self["@div"])._element())._className()).__comma(" ")).__comma(nom);
$ctx1.sendIdx[","]=1;
_st($1)._class_($2);
return self}, function($ctx1) {$ctx1.fill(self,"ajouteClasse:",{nom:nom},globals.FdJWidget)})},
args: ["nom"],
source: "ajouteClasse: nom\x0a\x09div class: (div element className, ' ', nom)",
messageSends: ["class:", ",", "className", "element"],
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
var nom;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self["@benevole"])._association();
$ctx1.sendIdx["association"]=1;
nom=_st($1)._nom();
$2=_st(_st(nom)._size()).__gt((30));
if(smalltalk.assert($2)){
nom=_st(_st(nom)._first_((30))).__comma("...");
nom;
};
$3=_st(html)._div();
_st($3)._class_("association");
$4=_st($3)._with_(nom);
self._ajouteClasse_(_st(_st(self["@benevole"])._association())._nomSansAccent());
return self}, function($ctx1) {$ctx1.fill(self,"renderAssociationOn:",{html:html,nom:nom},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderAssociationOn: html\x0a\x09| nom |\x0a\x09nom := benevole association nom.\x0a\x09(nom size > 30) ifTrue: [ nom := (nom first: 30), '...' ].\x0a\x09html div class: 'association';\x0a\x09\x09\x09 with: nom.\x0a\x09self ajouteClasse: (benevole association nomSansAccent)",
messageSends: ["nom", "association", "ifTrue:", ">", "size", ",", "first:", "class:", "div", "with:", "ajouteClasse:", "nomSansAccent"],
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
_st($3)._class_("nom");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_(_st(self["@benevole"])._nom());
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._div();
_st($5)._class_("prenom");
$6=_st($5)._with_(_st(self["@benevole"])._prenom());
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderIdentiteOn: html\x0a\x09html div class: 'identite';\x0a\x09\x09with: [ html div class: 'nom'; with: benevole nom.\x0a\x09\x09\x09\x09html div class: 'prenom'; with: benevole prenom ]",
messageSends: ["class:", "div", "with:", "nom", "prenom"],
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
var $1,$2,$3;
($ctx1.supercall = true, globals.FdJWidgetBenevole.superclass.fn.prototype._renderOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_("info");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderIdentiteOn_(html);
return self._renderAssociationOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$2;
return self._renderTShirtOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$3=_st(self["@benevole"])._estInscrit();
if(! smalltalk.assert($3)){
self._ajouteClasse_("noninscrit");
};
_st(self["@div"])._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@presentateur"])._selectionne_(self["@benevole"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09html div class: 'info'; with: [\x0a\x09\x09\x09self renderIdentiteOn: html.\x0a\x09\x09\x09self renderAssociationOn: html ].\x0a\x09\x09self renderTShirtOn: html ].\x0a\x09benevole estInscrit ifFalse: [\x09\x09\x09\x0a\x09\x09self ajouteClasse: 'noninscrit' ].\x0a\x09div onClick: [ presentateur selectionne: benevole ]",
messageSends: ["renderOn:", "with:", "class:", "div", "renderIdentiteOn:", "renderAssociationOn:", "renderTShirtOn:", "ifFalse:", "estInscrit", "ajouteClasse:", "onClick:", "selectionne:"],
referencedClasses: []
}),
globals.FdJWidgetBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTShirtOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$6,$7,$9,$8,$10,$receiver;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
d=_st($1)._class_("tshirt");
$ctx1.sendIdx["class:"]=1;
$2=_st(self["@benevole"])._tshirt();
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
var t;
t=$receiver;
_st(d)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
$5=_st(t)._type();
$ctx2.sendIdx["type"]=1;
$4=_st($5)._asUppercase();
$ctx2.sendIdx["asUppercase"]=1;
_st($3)._with_($4);
$ctx2.sendIdx["with:"]=2;
$6=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($6)._with_(_st(_st(t)._taille())._asUppercase());
$ctx2.sendIdx["with:"]=3;
$7=_st(html)._div();
$9=_st(t)._spec();
if(($receiver = $9) == null || $receiver.isNil){
$8="";
} else {
$8=$9;
};
return _st($7)._with_($8);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
$10=_st(_st(t)._type()).__eq("h");
if(smalltalk.assert($10)){
_st(d)._class_("tshirt homme");
$ctx1.sendIdx["class:"]=2;
} else {
_st(d)._class_("tshirt femme");
};
};
return self}, function($ctx1) {$ctx1.fill(self,"renderTShirtOn:",{html:html,d:d},globals.FdJWidgetBenevole)})},
args: ["html"],
source: "renderTShirtOn: html\x0a\x09| d |\x0a\x09d := html div class: 'tshirt'.\x0a\x09benevole tshirt ifNotNil: [ :t |\x0a\x09\x09d with: [\x0a\x09\x09\x09html div with: t type asUppercase.\x0a\x09\x09\x09html div with: t taille asUppercase.\x0a\x09\x09\x09html div with: (t spec ifNil: [ '' ])\x0a\x09\x09\x09].\x0a\x09\x09t type = #h\x0a\x09\x09\x09ifTrue: [d class: 'tshirt homme']\x0a\x09\x09\x09ifFalse: [d class: 'tshirt femme']\x0a\x09\x09]",
messageSends: ["class:", "div", "ifNotNil:", "tshirt", "with:", "asUppercase", "type", "taille", "ifNil:", "spec", "ifTrue:ifFalse:", "="],
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
source: "update\x0a\x09div contents: [ :html |\x0a\x09\x09div with: [ self renderBenevolesOn: html ] ]",
messageSends: ["contents:", "with:", "renderBenevolesOn:"],
referencedClasses: []
}),
globals.FdJWidgetBenevoles);



smalltalk.addClass('FdJWidgetImporteur', globals.FdJWidget, ['input', 'dlg'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "input",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@input"])._asJQuery())._val();
return $1;
}, function($ctx1) {$ctx1.fill(self,"input",{},globals.FdJWidgetImporteur)})},
args: [],
source: "input\x0a\x09^ input asJQuery val",
messageSends: ["val", "asJQuery"],
referencedClasses: []
}),
globals.FdJWidgetImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "renderActionsOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
var vide;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5;
$1=_st(html)._span();
$ctx1.sendIdx["span"]=1;
_st($1)._class_("checkbox");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._input();
$ctx2.sendIdx["input"]=1;
vide=_st($3)._type_("checkbox");
vide;
return _st(_st(html)._span())._with_("Vide");
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$4=_st(html)._button();
_st($4)._with_("import");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(_st(vide)._element())._checked();
if(smalltalk.assert($6)){
_st(self["@presentateur"])._vide();
};
_st(self["@presentateur"])._importe_(self._input());
return _st(_st(self["@dlg"])._asJQuery())._fadeOut();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderActionsOn:",{html:html,vide:vide},globals.FdJWidgetImporteur)})},
args: ["html"],
source: "renderActionsOn: html\x0a\x09| vide |\x0a\x09html span class: 'checkbox'; with: [ \x0a\x09\x09vide := html input type: 'checkbox'.\x0a\x09\x09html span with: 'Vide'\x0a\x09].\x0a\x09html button with: 'import';\x0a\x09\x09onClick: [\x0a\x09\x09\x09vide element checked ifTrue: [\x0a\x09\x09\x09\x09\x09presentateur vide\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09presentateur importe: self input.\x0a\x09\x09\x09dlg asJQuery fadeOut\x0a\x09\x09]",
messageSends: ["class:", "span", "with:", "type:", "input", "button", "onClick:", "ifTrue:", "checked", "element", "vide", "importe:", "fadeOut", "asJQuery"],
referencedClasses: []
}),
globals.FdJWidgetImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDlgOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("dialog");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@input"]=_st(html)._textarea();
self["@input"];
$3=_st(html)._div();
_st($3)._class_("actions");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderActionsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@dlg"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderDlgOn:",{html:html},globals.FdJWidgetImporteur)})},
args: ["html"],
source: "renderDlgOn: html\x0a\x09dlg := html div\x0a\x09\x09class: 'dialog';\x0a\x09\x09with: [\x0a\x09\x09\x09input := html textarea.\x0a\x09\x09\x09html div class: 'actions';\x0a\x09\x09\x09\x09 with: [ self renderActionsOn: html ]\x0a\x09\x09]",
messageSends: ["class:", "div", "with:", "textarea", "renderActionsOn:"],
referencedClasses: []
}),
globals.FdJWidgetImporteur);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
($ctx1.supercall = true, globals.FdJWidgetImporteur.superclass.fn.prototype._renderOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderDlgOn_(html);
$1=_st(html)._button();
_st($1)._class_("boutton");
_st($1)._with_("I");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@dlg"])._asJQuery())._fadeToggle();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetImporteur)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09self renderDlgOn: html.\x0a\x09\x09html button\x0a\x09\x09\x09class: 'boutton';\x0a\x09\x09\x09with: 'I';\x0a\x09\x09\x09onClick: [ dlg asJQuery fadeToggle ]\x0a\x09\x09]",
messageSends: ["renderOn:", "with:", "renderDlgOn:", "class:", "button", "onClick:", "fadeToggle", "asJQuery"],
referencedClasses: []
}),
globals.FdJWidgetImporteur);



smalltalk.addClass('FdJWidgetLegende', globals.FdJWidget, [], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "enderTShirtOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("tshirt");
$ctx1.sendIdx["class:"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($2)._with_("H/F");
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($3)._with_("taille");
$ctx2.sendIdx["with:"]=3;
return _st(_st(html)._div())._with_("lsf");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$4=_st($1)._class_("tshirt homme");
return self}, function($ctx1) {$ctx1.fill(self,"enderTShirtOn:",{html:html},globals.FdJWidgetLegende)})},
args: ["html"],
source: "enderTShirtOn: html\x0a\x09html div class: 'tshirt';\x0a\x09\x09with: [\x0a\x09\x09\x09html div with: 'H/F'.\x0a\x09\x09\x09html div with: 'taille'.\x0a\x09\x09\x09html div with: 'lsf' ];\x0a\x09\x09class: 'tshirt homme'",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAssociationOn:texte:",
protocol: 'as yet unclassified',
fn: function (html,texte){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("association");
$2=_st($1)._with_(texte);
return self}, function($ctx1) {$ctx1.fill(self,"renderAssociationOn:texte:",{html:html,texte:texte},globals.FdJWidgetLegende)})},
args: ["html", "texte"],
source: "renderAssociationOn: html texte: texte\x0a\x09html div class: 'association';\x0a\x09\x09with: texte",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBenevoleOn:type:",
protocol: 'as yet unclassified',
fn: function (html,benevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$6,$8,$7,$9,$5;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
$2=$1;
$4=_st(benevole)._at_("type");
$ctx1.sendIdx["at:"]=1;
$3="benevole ".__comma($4);
_st($2)._class_($3);
$ctx1.sendIdx["class:"]=1;
$5=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(html)._div();
_st($6)._class_("info");
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(benevole)._at_ifPresent_ifAbsent_("nom",(function(t){
return smalltalk.withContext(function($ctx4) {
return self._renderIdentiteOn_texte_(html,t);
}, function($ctx4) {$ctx4.fillBlock({t:t},$ctx3,3)})}),(function(){
return smalltalk.withContext(function($ctx4) {
return self._renderIdentiteOn_(html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$8=_st(benevole)._at_("assoc");
$ctx3.sendIdx["at:"]=2;
return self._renderAssociationOn_texte_(html,$8);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$7;
$9=_st(_st(benevole)._at_("type")).__eq("auteur");
if(! smalltalk.assert($9)){
return self._renderTShirtOn_(html);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderBenevoleOn:type:",{html:html,benevole:benevole},globals.FdJWidgetLegende)})},
args: ["html", "benevole"],
source: "renderBenevoleOn: html type: benevole\x0a\x09html div class: 'benevole ',(benevole at: #type); with: [\x0a\x09\x09html div class: 'info'; with: [\x0a\x09\x09\x09benevole at: #nom\x0a\x09\x09\x09\x09ifPresent: [ :t | self renderIdentiteOn: html texte: t ]\x0a\x09\x09\x09\x09ifAbsent: [ self renderIdentiteOn: html ].\x0a\x09\x09\x09self renderAssociationOn: html\x0a\x09\x09\x09\x09texte: (benevole at: #assoc)\x0a\x09\x09\x09].\x0a\x09\x09((benevole at: #type) = 'auteur') ifFalse: [\x0a\x09\x09\x09self renderTShirtOn: html ]\x0a\x09\x09]",
messageSends: ["class:", "div", ",", "at:", "with:", "at:ifPresent:ifAbsent:", "renderIdentiteOn:texte:", "renderIdentiteOn:", "renderAssociationOn:texte:", "ifFalse:", "=", "renderTShirtOn:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContenuOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("texte");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._with_("1) Sélectionner un bénévole avec une partie de son nom et/ou prénom en bas de l'écran");
$ctx2.sendIdx["with:"]=2;
$4=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($4)._with_("2) Cliquer dessus pour commencer la distribution");
$ctx2.sendIdx["with:"]=3;
$5=_st(html)._div();
$ctx2.sendIdx["div"]=4;
_st($5)._with_("3) Cliquer sur l'étiquette pour terminer la distribution");
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._div())._with_("Code des couleurs:");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self._renderBenevoleOn_type_(html,globals.HashedCollection._newFromPairs_(["type","festival","assoc","association"]));
$ctx1.sendIdx["renderBenevoleOn:type:"]=1;
self._renderBenevoleOn_type_(html,globals.HashedCollection._newFromPairs_(["type","auteur","nom","Auteur","assoc","distri speciale"]));
$ctx1.sendIdx["renderBenevoleOn:type:"]=2;
self._renderBenevoleOn_type_(html,globals.HashedCollection._newFromPairs_(["type","noninscrit","nom","Non-inscrit","assoc","vérif stock"]));
return self}, function($ctx1) {$ctx1.fill(self,"renderContenuOn:",{html:html},globals.FdJWidgetLegende)})},
args: ["html"],
source: "renderContenuOn: html\x0a\x09html div class: 'texte'; with: [\x0a\x09\x09html div with: '1) Sélectionner un bénévole avec une partie de son nom et/ou prénom en bas de l''écran'.\x0a\x09\x09html div with: '2) Cliquer dessus pour commencer la distribution'.\x0a\x09\x09html div with: '3) Cliquer sur l''étiquette pour terminer la distribution'.\x0a\x09\x09html div with: 'Code des couleurs:' ].\x0a\x09self renderBenevoleOn: html type: #{\x0a\x09\x09#type->'festival'. #assoc->'association' }.\x0a\x09self renderBenevoleOn: html type: #{\x0a\x09\x09#type->'auteur'. #nom->'Auteur'. #assoc->'distri speciale' }.\x0a\x09self renderBenevoleOn: html type: #{\x0a\x09\x09\x09#type->'noninscrit'. #nom->'Non-inscrit'. #assoc->'vérif stock' }",
messageSends: ["class:", "div", "with:", "renderBenevoleOn:type:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIdentiteOn:",
protocol: 'as yet unclassified',
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
_st($3)._class_("nom");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_("Nom");
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._div();
_st($5)._class_("prenom");
$6=_st($5)._with_("Prenom");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:",{html:html},globals.FdJWidgetLegende)})},
args: ["html"],
source: "renderIdentiteOn: html\x0a\x09html div class: 'identite';\x0a\x09\x09with: [ html div class: 'nom'; with: 'Nom'.\x0a\x09\x09\x09\x09html div class: 'prenom'; with: 'Prenom' ]",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIdentiteOn:texte:",
protocol: 'as yet unclassified',
fn: function (html,texte){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("identite");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("nom");
$4=_st($3)._with_(texte);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:texte:",{html:html,texte:texte},globals.FdJWidgetLegende)})},
args: ["html", "texte"],
source: "renderIdentiteOn: html texte: texte\x0a\x09html div class: 'identite';\x0a\x09\x09with: [ html div class: 'nom'; with: texte ]",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
var contenu;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
($ctx1.supercall = true, globals.FdJWidgetLegende.superclass.fn.prototype._renderOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($1)._class_("bouton");
$ctx2.sendIdx["class:"]=1;
_st($1)._with_("Aide");
$ctx2.sendIdx["with:"]=2;
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(contenu)._asJQuery())._fadeToggle();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$2;
$3=_st(html)._div();
_st($3)._class_("contenu");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderContenuOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
contenu=$4;
return contenu;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,contenu:contenu},globals.FdJWidgetLegende)})},
args: ["html"],
source: "renderOn: html\x0a\x09| contenu |\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09html div\x0a\x09\x09\x09class: 'bouton';\x0a\x09\x09\x09with: 'Aide';\x0a\x09\x09\x09onClick: [ contenu asJQuery fadeToggle ].\x0a\x09\x09contenu := html div\x0a\x09\x09\x09class: 'contenu';\x0a\x09\x09\x09with: [ self renderContenuOn: html ]\x0a\x09\x09]",
messageSends: ["renderOn:", "with:", "class:", "div", "onClick:", "fadeToggle", "asJQuery", "renderContenuOn:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTShirtOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("tshirt");
$ctx1.sendIdx["class:"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($2)._with_("H/F");
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($3)._with_("taille");
$ctx2.sendIdx["with:"]=3;
return _st(_st(html)._div())._with_("lsf?");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$4=_st($1)._class_("tshirt homme");
return self}, function($ctx1) {$ctx1.fill(self,"renderTShirtOn:",{html:html},globals.FdJWidgetLegende)})},
args: ["html"],
source: "renderTShirtOn: html\x0a\x09html div class: 'tshirt';\x0a\x09\x09with: [\x0a\x09\x09\x09html div with: 'H/F'.\x0a\x09\x09\x09html div with: 'taille'.\x0a\x09\x09\x09html div with: 'lsf?' ];\x0a\x09\x09class: 'tshirt homme'",
messageSends: ["class:", "div", "with:"],
referencedClasses: []
}),
globals.FdJWidgetLegende);



smalltalk.addClass('FdJWidgetSelectionneur', globals.FdJWidget, ['liste', 'input', 'suite'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "defiltre",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@input"])._asJQuery())._val_("");
return self}, function($ctx1) {$ctx1.fill(self,"defiltre",{},globals.FdJWidgetSelectionneur)})},
args: [],
source: "defiltre\x0a\x09input asJQuery val: ''",
messageSends: ["val:", "asJQuery"],
referencedClasses: []
}),
globals.FdJWidgetSelectionneur);

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
var $1,$3,$4,$2;
($ctx1.supercall = true, globals.FdJWidgetSelectionneur.superclass.fn.prototype._renderOn_.apply(_st(self), [html]));
$ctx1.supercall = false;
$ctx1.sendIdx["renderOn:"]=1;
_st(self["@div"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@input"]=_st(html)._input();
self["@input"];
_st(self["@input"])._onKeyUp_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@presentateur"])._filtre_(self._filtre());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$1=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($1)._class_("menu");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._div();
_st($3)._class_("suite");
$4=_st($3)._with_("...");
self["@suite"]=$4;
self["@suite"];
self["@liste"]=_st($FdJWidgetBenevoles())._new();
self["@liste"];
_st(self["@liste"])._presentateur_(self["@presentateur"]);
return _st(self["@liste"])._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=2;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.FdJWidgetSelectionneur)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09input := html input.\x0a\x09\x09input onKeyUp: [ presentateur filtre: (self filtre) ].\x0a\x09\x09\x0a\x09\x09html div class: 'menu'; with: [\x0a\x09\x09\x09suite := html div class: 'suite'; with: '...'.\x0a\x09\x09\x09\x0a\x09\x09\x09liste := FdJWidgetBenevoles new.\x0a\x09\x09\x09liste presentateur: presentateur.\x0a\x09\x09\x09liste renderOn: html\x0a\x09\x09\x09]\x0a\x09\x09]",
messageSends: ["renderOn:", "with:", "input", "onKeyUp:", "filtre:", "filtre", "class:", "div", "new", "presentateur:"],
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
_st(_st(self["@suite"])._asJQuery())._show_((400));
_st(self["@liste"])._associe_(benevoles);
return self}, function($ctx1) {$ctx1.fill(self,"selectionne:",{benevoles:benevoles},globals.FdJWidgetSelectionneur)})},
args: ["benevoles"],
source: "selectionne: benevoles\x0a\x09suite asJQuery show: 400.\x0a\x09liste associe: benevoles",
messageSends: ["show:", "asJQuery", "associe:"],
referencedClasses: []
}),
globals.FdJWidgetSelectionneur);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionne:max:",
protocol: 'as yet unclassified',
fn: function (benevoles,max){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
if(smalltalk.assert(max)){
$1=_st(self["@suite"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._fadeIn();
} else {
_st(_st(self["@suite"])._asJQuery())._fadeOut();
};
_st(self["@liste"])._associe_(benevoles);
return self}, function($ctx1) {$ctx1.fill(self,"selectionne:max:",{benevoles:benevoles,max:max},globals.FdJWidgetSelectionneur)})},
args: ["benevoles", "max"],
source: "selectionne: benevoles max: max\x0a\x09max\x09ifTrue:  [ suite asJQuery fadeIn ]\x0a\x09\x09ifFalse: [ suite asJQuery fadeOut ].\x0a\x09liste associe: benevoles",
messageSends: ["ifTrue:ifFalse:", "fadeIn", "asJQuery", "fadeOut", "associe:"],
referencedClasses: []
}),
globals.FdJWidgetSelectionneur);


smalltalk.addMethod(
smalltalk.method({
selector: "indexOfSubString:",
protocol: '*Benevoles',
fn: function (subString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.indexOf(subString) + 1;
return self}, function($ctx1) {$ctx1.fill(self,"indexOfSubString:",{subString:subString},globals.String)})},
args: ["subString"],
source: "indexOfSubString: subString\x0a\x09<return self.indexOf(subString) + 1>",
messageSends: [],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "remplaceAvec:",
protocol: '*Benevoles',
fn: function (dict){
var self=this;
var s;
return smalltalk.withContext(function($ctx1) { 
var $1;
s=self._asLowercase();
_st(dict)._keysAndValuesDo_((function(k,v){
return smalltalk.withContext(function($ctx2) {
s=_st(s)._replace_with_(k,v);
return s;
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,1)})}));
$1=s;
return $1;
}, function($ctx1) {$ctx1.fill(self,"remplaceAvec:",{dict:dict,s:s},globals.String)})},
args: ["dict"],
source: "remplaceAvec: dict\x0a\x09| s |\x0a  \x09s := self asLowercase.\x0a\x09dict keysAndValuesDo: [ :k :v |\x0a\x09\x09s := s replace: k with: v\x0a\x09].\x0a\x09^ s",
messageSends: ["asLowercase", "keysAndValuesDo:", "replace:with:"],
referencedClasses: []
}),
globals.String);

smalltalk.addMethod(
smalltalk.method({
selector: "sansAccent",
protocol: '*Benevoles',
fn: function (){
var self=this;
var s;
return smalltalk.withContext(function($ctx1) { 
var $1;
s=self._asLowercase();
_st(globals.HashedCollection._newFromPairs_(["[àáâãäå]","a","æ","ae","ç","c","[èéêë]","e","[ìíîï]","i","ñ","n","[òóôõö]","o","œ","oe","[ùúûü]","u","[ýÿ]","y"," ",""]))._keysAndValuesDo_((function(k,v){
return smalltalk.withContext(function($ctx2) {
s=_st(s)._replace_with_(k,v);
return s;
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,1)})}));
$1=s;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sansAccent",{s:s},globals.String)})},
args: [],
source: "sansAccent\x0a\x09| s |\x0a  \x09s := self asLowercase.\x0a\x09#{ '[àáâãäå]' -> 'a'.\x0a\x09   'æ' -> 'ae'.\x0a\x09   'ç' -> 'c'.\x0a\x09   '[èéêë]' -> 'e'.\x0a\x09   '[ìíîï]' -> 'i'.\x0a\x09   'ñ' -> 'n'.\x0a\x09   '[òóôõö]' -> 'o'.\x0a\x09   'œ' -> 'oe'.\x0a\x09   '[ùúûü]' -> 'u'.\x0a\x09   '[ýÿ]' -> 'y'.\x0a\x09   ' ' -> ''\x0a\x09} keysAndValuesDo: [ :k :v |\x0a\x09\x09s := s replace: k with: v\x0a\x09].\x0a\x09^ s",
messageSends: ["asLowercase", "keysAndValuesDo:", "replace:with:"],
referencedClasses: []
}),
globals.String);

});
