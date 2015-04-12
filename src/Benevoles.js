define("amber-benevoles/Benevoles", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "papaparse/papaparse"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects", "amber_core/Kernel-Announcements", "amber/web/Web", "amber_core/Kernel-Collections"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Benevoles');
$core.packages["Benevoles"].innerEval = function (expr) { return eval(expr); };
$core.packages["Benevoles"].imports = ["papaparse/papaparse"];
$core.packages["Benevoles"].transport = {"type":"amd","amdNamespace":"amber-benevoles"};

$core.addClass('FdJAnnonce', $globals.Object, [], 'Benevoles');


$core.addClass('FdJBenevoleChangeEtat', $globals.FdJAnnonce, ['benevole'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "benevole",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@benevole"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "benevole\x0a\x09^ benevole",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevoleChangeEtat);

$core.addMethod(
$core.method({
selector: "benevole:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@benevole"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "benevole: anObject\x0a\x09benevole := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevoleChangeEtat);



$core.addClass('FdJAnnonceur', $globals.Announcer, [], 'Benevoles');

$globals.FdJAnnonceur.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJAnnonceur.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.FdJAnnonceur.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.FdJAnnonceur.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.FdJAnnonceur.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.FdJAnnonceur.klass);


$core.addClass('FdJApplication', $globals.Object, ['benevoles', 'selectionneur', 'distributeur', 'importeur', 'historique'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "charge",
protocol: 'initialization',
fn: function (){
var self=this;
function $FdJStockage(){return $globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
function $FdJHistorique(){return $globals.FdJHistorique||(typeof FdJHistorique=="undefined"?nil:FdJHistorique)}
function $FdJAssociations(){return $globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
function $FdJBenevoles(){return $globals.FdJBenevoles||(typeof FdJBenevoles=="undefined"?nil:FdJBenevoles)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@historique"]=$recv($FdJStockage())._charge_sinon_($FdJHistorique(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($FdJHistorique())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charge:sinon:"]=1;
//>>excludeEnd("ctx");
$recv($FdJStockage())._charge_sinon_($recv($FdJAssociations())._instance(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($FdJAssociations())._exemple();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["exemple"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["charge:sinon:"]=2;
//>>excludeEnd("ctx");
self["@benevoles"]=$recv($FdJStockage())._charge_sinon_($FdJBenevoles(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($FdJBenevoles())._exemple();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charge",{},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "charge\x0a\x09\x22Charge le modele (ou créé un exemple)\x22\x0a\x09historique := FdJStockage\x0a\x09\x09charge: FdJHistorique\x0a\x09\x09sinon: [ FdJHistorique new ].\x0a\x09FdJStockage\x0a\x09\x09charge: FdJAssociations instance\x0a\x09\x09sinon: [ FdJAssociations exemple ].\x0a\x09benevoles := FdJStockage\x0a\x09\x09charge: FdJBenevoles\x0a\x09\x09sinon: [ FdJBenevoles exemple ]",
referencedClasses: ["FdJStockage", "FdJHistorique", "FdJAssociations", "FdJBenevoles"],
//>>excludeEnd("ide");
messageSends: ["charge:sinon:", "new", "instance", "exemple"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "filtre:",
protocol: 'initialization',
fn: function (texte){
var self=this;
var max,liste;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
max=(4);
liste=$recv(self["@benevoles"])._filtre_max_(texte,$recv(max).__plus((1)));
$1=$recv($recv(liste)._size()).__lt_eq(max);
if($core.assert($1)){
$recv(self["@selectionneur"])._selectionne_max_(liste,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectionne:max:"]=1;
//>>excludeEnd("ctx");
} else {
$recv(liste)._removeLast();
$recv(self["@selectionneur"])._selectionne_max_(liste,true);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filtre:",{texte:texte,max:max,liste:liste},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["texte"],
source: "filtre: texte\x0a\x09| max liste |\x0a\x09max := 4.\x0a\x09liste := benevoles filtre: texte max: max+1.\x0a\x09(liste size <= max)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09selectionneur selectionne: liste max: false ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09liste removeLast.\x0a\x09\x09\x09selectionneur selectionne: liste max: true ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filtre:max:", "+", "ifTrue:ifFalse:", "<=", "size", "selectionne:max:", "removeLast"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "importe:",
protocol: 'initialization',
fn: function (texte){
var self=this;
var results,fields,rows,imp;
function $FdJImporteur(){return $globals.FdJImporteur||(typeof FdJImporteur=="undefined"?nil:FdJImporteur)}
function $FdJStockage(){return $globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
function $FdJAssociations(){return $globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
imp=$recv($FdJImporteur())._new();
results=$recv(imp)._importe_(texte);
fields=$recv($recv(results)._meta())._fields();
rows=$recv(results)._data();
$1=$recv(fields)._includes_("Taille");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=self._importeTShirts_(rows);
return $2;
};
$3=$recv(fields)._includes_("Association");
if($core.assert($3)){
$recv(imp)._importeAssociations_(rows);
$recv($FdJStockage())._sauve_($recv($FdJAssociations())._instance());
};
$recv(self["@benevoles"])._ajouteUnique_($recv(imp)._importeBenevoles_(rows));
self._sauve();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importe:",{texte:texte,results:results,fields:fields,rows:rows,imp:imp},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["texte"],
source: "importe: texte\x0a\x09| results fields rows imp |\x0a\x09imp := FdJImporteur new.\x0a\x09results := imp importe: texte.\x0a\x0a\x09fields := results meta fields.\x0a\x09rows := results data.\x0a\x0a\x09(fields includes: 'Taille')\x0a\x09\x09ifTrue: [ ^ self importeTShirts: rows ].\x0a\x09\x0a\x09(fields includes: 'Association')\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09imp importeAssociations: rows.\x0a\x09\x09\x09FdJStockage sauve: FdJAssociations instance ].\x0a\x0a\x09benevoles ajouteUnique: (imp importeBenevoles: rows).\x0a\x09self sauve.",
referencedClasses: ["FdJImporteur", "FdJStockage", "FdJAssociations"],
//>>excludeEnd("ide");
messageSends: ["new", "importe:", "fields", "meta", "data", "ifTrue:", "includes:", "importeTShirts:", "importeAssociations:", "sauve:", "instance", "ajouteUnique:", "importeBenevoles:", "sauve"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "importeTShirts:",
protocol: 'initialization',
fn: function (rows){
var self=this;
var tshirts,key;
function $FdJImporteur(){return $globals.FdJImporteur||(typeof FdJImporteur=="undefined"?nil:FdJImporteur)}
function $FdJTShirt(){return $globals.FdJTShirt||(typeof FdJTShirt=="undefined"?nil:FdJTShirt)}
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4;
tshirts=$recv($recv($FdJImporteur())._new())._importeTShirts_(rows);
$recv($recv(self["@benevoles"])._benevoles())._do_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($recv(b)._nom()).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(b)._prenom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
key=$recv($1)._asLowercase();
key;
return $recv(tshirts)._at_ifPresent_(key,(function(t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(b)._tshirt_($recv($FdJTShirt())._at_(t));
return $recv(tshirts)._remove_(key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({t:t},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(tshirts)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($Transcript())._show_("TShirts non importés:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$3=$recv($Transcript())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv($recv(tshirts)._keys())._do_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($Transcript())._show_("- ".__comma(b));
$4=$recv($Transcript())._cr();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,4)});
//>>excludeEnd("ctx");
}));
self._sauve();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importeTShirts:",{rows:rows,tshirts:tshirts,key:key},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rows"],
source: "importeTShirts: rows\x0a\x09| tshirts key |\x0a\x09tshirts := FdJImporteur new importeTShirts: rows.\x0a\x09benevoles benevoles do: [ :b |\x0a\x09\x09key := (b nom, ' ', b prenom) asLowercase.\x0a\x09\x09tshirts at: key ifPresent: [ :t |\x0a\x09\x09\x09\x09b tshirt: (FdJTShirt at: t).\x0a\x09\x09\x09\x09tshirts remove: key\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09tshirts ifNotEmpty: [ Transcript show: 'TShirts non importés:'; cr ].\x0a\x09tshirts keys do: [ :b | Transcript show: ('- ', b);cr ].\x0a\x09self sauve",
referencedClasses: ["FdJImporteur", "FdJTShirt", "Transcript"],
//>>excludeEnd("ide");
messageSends: ["importeTShirts:", "new", "do:", "benevoles", "asLowercase", ",", "nom", "prenom", "at:ifPresent:", "tshirt:", "at:", "remove:", "ifNotEmpty:", "show:", "cr", "keys", "sauve"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var barre;
function $FdJWidgetBarre(){return $globals.FdJWidgetBarre||(typeof FdJWidgetBarre=="undefined"?nil:FdJWidgetBarre)}
function $FdJWidgetSelectionneur(){return $globals.FdJWidgetSelectionneur||(typeof FdJWidgetSelectionneur=="undefined"?nil:FdJWidgetSelectionneur)}
function $FdJWidgetImporteur(){return $globals.FdJWidgetImporteur||(typeof FdJWidgetImporteur=="undefined"?nil:FdJWidgetImporteur)}
function $FdJWidgetBenevoles(){return $globals.FdJWidgetBenevoles||(typeof FdJWidgetBenevoles=="undefined"?nil:FdJWidgetBenevoles)}
function $FdJWidgetLegende(){return $globals.FdJWidgetLegende||(typeof FdJWidgetLegende=="undefined"?nil:FdJWidgetLegende)}
function $FdJAnnonceur(){return $globals.FdJAnnonceur||(typeof FdJAnnonceur=="undefined"?nil:FdJAnnonceur)}
function $FdJBenevoleChangeEtat(){return $globals.FdJBenevoleChangeEtat||(typeof FdJBenevoleChangeEtat=="undefined"?nil:FdJBenevoleChangeEtat)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5,$6,$8,$9,$7;
$2="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._children();
$recv($1)._remove();
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJApplication.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._charge();
$3=$recv($FdJWidgetBarre())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
barre=$recv($3)._presentateur_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["presentateur:"]=1;
//>>excludeEnd("ctx");
self["@selectionneur"]=$recv($FdJWidgetSelectionneur())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv(barre)._ajoute_(self["@selectionneur"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ajoute:"]=1;
//>>excludeEnd("ctx");
self["@importeur"]=$recv($FdJWidgetImporteur())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv(barre)._ajoute_(self["@importeur"]);
$4=barre;
$5="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($4)._appendToJQuery_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToJQuery:"]=1;
//>>excludeEnd("ctx");
$6=$recv($FdJWidgetBenevoles())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($6)._presentateur_(self);
$8=$6;
$9="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._appendToJQuery_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToJQuery:"]=2;
//>>excludeEnd("ctx");
self["@distributeur"]=$7;
$recv($recv($FdJWidgetLegende())._new())._appendToJQuery_("body"._asJQuery());
$recv($recv($FdJAnnonceur())._current())._on_do_($FdJBenevoleChangeEtat(),(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onBenevoleChangeEtat_($recv(evt)._benevole());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@distributeur"])._associe_($recv(self["@benevoles"])._selectionnes());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{barre:barre},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| barre |\x0a\x09'body' asJQuery children remove.\x0a\x09super initialize.\x0a\x09\x0a\x09\x22Modele\x22\x0a\x09self charge.\x0a\x09\x0a\x09\x22Widgets\x22\x0a\x09barre := FdJWidgetBarre new\x0a\x09\x09presentateur: self.\x0a\x0a\x09selectionneur := FdJWidgetSelectionneur\x09new.\x0a\x09barre ajoute: selectionneur.\x0a\x09\x0a\x09importeur := FdJWidgetImporteur new.\x0a\x09barre ajoute: importeur.\x0a\x0a\x09barre appendToJQuery: 'body' asJQuery.\x0a\x0a\x09distributeur := FdJWidgetBenevoles new\x0a\x09\x09presentateur: self;\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x09\x0a\x09FdJWidgetLegende new\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x0a\x09FdJAnnonceur current on: FdJBenevoleChangeEtat do: [ :evt |\x0a\x09\x09self onBenevoleChangeEtat: evt benevole ].\x0a\x0a\x09\x22init\x22\x0a\x09distributeur associe: (benevoles selectionnes)",
referencedClasses: ["FdJWidgetBarre", "FdJWidgetSelectionneur", "FdJWidgetImporteur", "FdJWidgetBenevoles", "FdJWidgetLegende", "FdJAnnonceur", "FdJBenevoleChangeEtat"],
//>>excludeEnd("ide");
messageSends: ["remove", "children", "asJQuery", "initialize", "charge", "presentateur:", "new", "ajoute:", "appendToJQuery:", "on:do:", "current", "onBenevoleChangeEtat:", "benevole", "associe:", "selectionnes"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "onBenevoleChangeEtat:",
protocol: 'initialization',
fn: function (benevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._filtre_($recv(self["@selectionneur"])._filtre());
$1=$recv(benevole)._estEncours();
if($core.assert($1)){
$recv(self["@selectionneur"])._defiltre();
$recv(self["@distributeur"])._ajoute_(benevole);
};
$2=$recv(benevole)._estDistribue();
if($core.assert($2)){
$recv(self["@distributeur"])._supprime_(benevole);
};
self._sauve();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onBenevoleChangeEtat:",{benevole:benevole},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["benevole"],
source: "onBenevoleChangeEtat: benevole\x0a\x09self filtre: (selectionneur filtre).\x0a\x09benevole estEncours ifTrue: [\x0a\x09\x09selectionneur defiltre.\x0a\x09\x09distributeur ajoute: benevole ].\x0a\x09benevole estDistribue ifTrue: [\x0a\x09\x09distributeur supprime: benevole ].\x0a\x09self sauve",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filtre:", "filtre", "ifTrue:", "estEncours", "defiltre", "ajoute:", "estDistribue", "supprime:", "sauve"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "reinit",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@benevoles"])._reinit();
self._sauve();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reinit",{},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reinit\x0a\x09benevoles reinit.\x0a\x09self sauve",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reinit", "sauve"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "sauve",
protocol: 'initialization',
fn: function (){
var self=this;
function $FdJStockage(){return $globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($FdJStockage())._sauve_(self["@benevoles"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sauve",{},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sauve\x0a\x09FdJStockage sauve: benevoles",
referencedClasses: ["FdJStockage"],
//>>excludeEnd("ide");
messageSends: ["sauve:"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "selectionne:",
protocol: 'initialization',
fn: function (benevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(benevole)._estDisponible();
if($core.assert($1)){
$2=$recv(benevole)._encours();
return $2;
};
$3=$recv(benevole)._estEncours();
if($core.assert($3)){
$4=$recv(benevole)._distribue();
return $4;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionne:",{benevole:benevole},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["benevole"],
source: "selectionne: benevole\x0a\x09benevole estDisponible ifTrue: [\x0a\x09\x09^ benevole encours ].\x0a\x09benevole estEncours ifTrue: [\x0a\x09\x09^ benevole distribue ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "estDisponible", "encours", "estEncours", "distribue"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "termine",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@selectionneur"])._supprime();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["supprime"]=1;
//>>excludeEnd("ctx");
$recv(self["@distributeur"])._supprime();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"termine",{},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "termine\x0a\x09selectionneur supprime.\x0a\x09distributeur supprime\x0a\x09\x22'body' asJQuery children remove\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["supprime"]
}),
$globals.FdJApplication);

$core.addMethod(
$core.method({
selector: "vide",
protocol: 'initialization',
fn: function (){
var self=this;
function $FdJStockage(){return $globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($FdJStockage())._vide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["vide"]=1;
//>>excludeEnd("ctx");
$recv(self["@benevoles"])._vide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vide",{},$globals.FdJApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vide\x0a\x09FdJStockage vide.\x0a\x09benevoles vide",
referencedClasses: ["FdJStockage"],
//>>excludeEnd("ide");
messageSends: ["vide"]
}),
$globals.FdJApplication);


$globals.FdJApplication.klass.iVarNames = ['accents'];
$core.addMethod(
$core.method({
selector: "accents",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@accents"];
if(($receiver = $2) == null || $receiver.isNil){
self["@accents"]=$globals.HashedCollection._newFromPairs_(["[àáâãäå]","a","æ","ae","ç","c","[èéêë]","e","[ìíîï]","i","ñ","n","[òóôõö]","o","œ","oe","[ùúûü]","u","[ýÿ]","y"," ","","-",""]);
$1=self["@accents"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accents",{},$globals.FdJApplication.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "accents\x0a\x09^ accents ifNil: [\x0a\x09\x09accents := #{\x0a\x09\x09\x09'[àáâãäå]' -> 'a'.\x0a\x09    \x09'æ' -> 'ae'.\x0a\x09    \x09'ç' -> 'c'.\x0a\x09    \x09'[èéêë]' -> 'e'.\x0a\x09    \x09'[ìíîï]' -> 'i'.\x0a\x09    \x09'ñ' -> 'n'.\x0a\x09    \x09'[òóôõö]' -> 'o'.\x0a\x09    \x09'œ' -> 'oe'.\x0a\x09    \x09'[ùúûü]' -> 'u'.\x0a\x09    \x09'[ýÿ]' -> 'y'.\x0a\x09    \x09' ' -> ''.\x0a\x09\x09\x09'-' -> ''\x0a\x09\x09}\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.FdJApplication.klass);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.FdJApplication.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09self new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.FdJApplication.klass);


$core.addClass('FdJAssociation', $globals.Object, ['nom', 'logo'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["nom",self["@nom"]]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09^ #{ 'nom'->nom }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJAssociation);

$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'accessing',
fn: function (variables){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@nom"]=$recv(variables)._at_("nom");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},$globals.FdJAssociation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["variables"],
source: "fromJSON: variables\x0a\x09nom := variables at: 'nom'.\x0a\x09\x22logo := variables at: 'logo'\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.FdJAssociation);

$core.addMethod(
$core.method({
selector: "logo",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@logo"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "logo\x0a\x09^ logo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJAssociation);

$core.addMethod(
$core.method({
selector: "logo:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@logo"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "logo: anObject\x0a\x09logo := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJAssociation);

$core.addMethod(
$core.method({
selector: "nom",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@nom"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nom\x0a\x09^ nom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJAssociation);

$core.addMethod(
$core.method({
selector: "nom:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@nom"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nom: anObject\x0a\x09nom := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJAssociation);

$core.addMethod(
$core.method({
selector: "nomSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return $globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@nom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$2=$recv(self["@nom"])._remplaceAvec_($recv($FdJApplication())._accents());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nomSansAccent",{},$globals.FdJAssociation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nomSansAccent\x0a\x09nom ifNil: [ ^ '' ].\x0a\x09^ nom remplaceAvec: FdJApplication accents",
referencedClasses: ["FdJApplication"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "remplaceAvec:", "accents"]
}),
$globals.FdJAssociation);


$core.addMethod(
$core.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._nom_("Joc-ere");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exemple",{},$globals.FdJAssociation.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exemple\x0a\x09\x22Genère un échantillon\x22\x0a\x09^ self new nom: 'Joc-ere'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nom:", "new"]
}),
$globals.FdJAssociation.klass);

$core.addMethod(
$core.method({
selector: "festival",
protocol: 'exemples',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._nom_("Festival");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"festival",{},$globals.FdJAssociation.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "festival\x0a\x09^ self new nom: 'Festival'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nom:", "new"]
}),
$globals.FdJAssociation.klass);


$core.addClass('FdJAssociations', $globals.Object, ['liste'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (uneAssociation){
var self=this;
var association;
function $FdJAssociation(){return $globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(uneAssociation)._isString();
if($core.assert($1)){
association=$recv($recv($FdJAssociation())._new())._nom_(uneAssociation);
} else {
association=uneAssociation;
};
$recv(self["@liste"])._at_put_($recv(association)._nomSansAccent(),association);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajoute:",{uneAssociation:uneAssociation,association:association},$globals.FdJAssociations)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["uneAssociation"],
source: "ajoute: uneAssociation\x0a\x09| association |\x0a\x09association := uneAssociation isString\x0a\x09\x09ifTrue: [ FdJAssociation new nom: uneAssociation ]\x0a\x09\x09ifFalse: [ uneAssociation ].\x0a\x09liste at: association nomSansAccent put: association",
referencedClasses: ["FdJAssociation"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isString", "nom:", "new", "at:put:", "nomSansAccent"]
}),
$globals.FdJAssociations);

$core.addMethod(
$core.method({
selector: "associations:",
protocol: 'as yet unclassified',
fn: function (desAssociations){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@liste"]=$recv($HashedCollection())._new();
$recv(desAssociations)._do_((function(a){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._ajoute_(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"associations:",{desAssociations:desAssociations},$globals.FdJAssociations)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desAssociations"],
source: "associations: desAssociations\x0a\x09liste := HashedCollection new.\x0a\x09desAssociations do: [ :a | self ajoute: a ]",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "ajoute:"]
}),
$globals.FdJAssociations);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (nom){
var self=this;
function $FdJApplication(){return $globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@liste"])._at_ifAbsent_($recv(nom)._remplaceAvec_($recv($FdJApplication())._accents()),(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{nom:nom},$globals.FdJAssociations)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nom"],
source: "at: nom\x0a\x09^ liste\x0a\x09\x09at: (nom remplaceAvec: FdJApplication accents)\x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: ["FdJApplication"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "remplaceAvec:", "accents"]
}),
$globals.FdJAssociations);

$core.addMethod(
$core.method({
selector: "festival",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._at_("Festival");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"festival",{},$globals.FdJAssociations)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "festival\x0a\x09^ self at: 'Festival'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.FdJAssociations);

$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (variables){
var self=this;
function $FdJAssociation(){return $globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@liste"]=$recv($recv(variables)._at_("liste"))._collect_((function(v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($FdJAssociation())._new())._fromJSON_(v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},$globals.FdJAssociations)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["variables"],
source: "fromJSON: variables\x0a\x09liste := (variables at: 'liste') collect: [ :v |\x0a\x09\x09\x09FdJAssociation new fromJSON: v\x0a\x09\x09]",
referencedClasses: ["FdJAssociation"],
//>>excludeEnd("ide");
messageSends: ["collect:", "at:", "fromJSON:", "new"]
}),
$globals.FdJAssociations);


$globals.FdJAssociations.klass.iVarNames = ['instance'];
$core.addMethod(
$core.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $FdJAssociation(){return $globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instance())._associations_($recv($Array())._with_with_($recv($FdJAssociation())._festival(),$recv($FdJAssociation())._exemple()));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exemple",{},$globals.FdJAssociations.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exemple\x0a\x09^ self instance\x0a\x09\x09associations: (Array with: FdJAssociation festival with: FdJAssociation exemple)",
referencedClasses: ["Array", "FdJAssociation"],
//>>excludeEnd("ide");
messageSends: ["associations:", "instance", "with:with:", "festival", "exemple"]
}),
$globals.FdJAssociations.klass);

$core.addMethod(
$core.method({
selector: "instance",
protocol: 'exemples',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@instance"];
if(($receiver = $2) == null || $receiver.isNil){
self["@instance"]=self._new();
$1=self["@instance"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.FdJAssociations.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.FdJAssociations.klass);


$core.addClass('FdJBenevole', $globals.Object, ['nom', 'prenom', 'assoc', 'tshirt', 'etat', 'inscrit'], 'Benevoles');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.FdJBenevole.comment="- tshirt: un TShirt\x0a- etat: pas encore venu, en cours de traitement, terminé";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "affiche",
protocol: 'accessing',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $9,$8,$7,$6,$11,$10,$5,$4,$13,$12,$3,$2,$1,$14,$receiver;
$9=$recv($recv(self["@nom"]).__comma(",")).__comma(self["@prenom"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$8=$recv($9).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$7=$recv($8).__comma($recv(self["@assoc"])._nom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$11=self["@tshirt"];
if(($receiver = $11) == null || $receiver.isNil){
$10="";
} else {
var t;
t=$receiver;
$10=$recv(t)._id();
};
$5=$recv($6).__comma($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$13=self["@etat"];
if(($receiver = $13) == null || $receiver.isNil){
$12="";
} else {
$12=$13;
};
$3=$recv($4).__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(self["@inscrit"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
$14=$recv($Transcript())._cr();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"affiche",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "affiche\x0a\x09Transcript show:\x0a\x09\x09        nom, ',', prenom\x0a\x09\x09, ',',  assoc nom\x0a\x09\x09, ',', (tshirt ifNil: [ '' ] ifNotNil: [ :t | t id ])\x0a\x09\x09, ',', (etat ifNil: [ '' ])\x0a\x09\x09, ',', inscrit\x0a\x09\x09; cr",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:", ",", "nom", "ifNil:ifNotNil:", "id", "ifNil:", "cr"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "annonce",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJBenevoleChangeEtat(){return $globals.FdJBenevoleChangeEtat||(typeof FdJBenevoleChangeEtat=="undefined"?nil:FdJBenevoleChangeEtat)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($FdJBenevoleChangeEtat())._new();
$recv($1)._benevole_(self);
$2=$recv($1)._yourself();
$recv(self._annonceur())._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"annonce",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "annonce\x0a\x09self annonceur announce: (FdJBenevoleChangeEtat new benevole: self; yourself)",
referencedClasses: ["FdJBenevoleChangeEtat"],
//>>excludeEnd("ide");
messageSends: ["announce:", "annonceur", "benevole:", "new", "yourself"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "annonceur",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJAnnonceur(){return $globals.FdJAnnonceur||(typeof FdJAnnonceur=="undefined"?nil:FdJAnnonceur)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($FdJAnnonceur())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"annonceur",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "annonceur\x0a\x09^ FdJAnnonceur current",
referencedClasses: ["FdJAnnonceur"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'accessing',
fn: function (){
var self=this;
var variables;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
variables=$recv($HashedCollection())._new();
$recv(variables)._at_put_("nom",self["@nom"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(variables)._at_put_("prenom",self["@prenom"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$1=self["@etat"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(variables)._at_put_("etat",self["@etat"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
};
$recv(variables)._at_put_("assoc",$recv(self["@assoc"])._nom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$2=self["@tshirt"];
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(variables)._at_put_("tshirt",$recv(self["@tshirt"])._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
};
$recv(variables)._at_put_("inscrit",self["@inscrit"]);
$3=variables;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09variables at: 'nom' put: nom.\x0a\x09variables at: 'prenom' put: prenom.\x0a\x09etat ifNotNil: [ variables at: 'etat' put: etat ].\x0a\x09variables at: 'assoc' put: assoc nom.\x0a\x09tshirt ifNotNil: [ variables at: 'tshirt' put: tshirt id ].\x0a\x09variables at: 'inscrit' put: inscrit.\x0a\x09^ variables",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "ifNotNil:", "nom", "id"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "association",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@assoc"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "association\x0a\x09^ assoc",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "association:",
protocol: 'accessing',
fn: function (uneAssoc){
var self=this;
self["@assoc"]=uneAssoc;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["uneAssoc"],
source: "association: uneAssoc\x0a\x09assoc := uneAssoc",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "correspond:",
protocol: 'accessing',
fn: function (unBenevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._indexDe_($recv(unBenevole)._identiteSansAccent())).__eq((1));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"correspond:",{unBenevole:unBenevole},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unBenevole"],
source: "correspond: unBenevole\x0a\x09\x22Retourne vrai si nom sans accent correspond\x22\x0a\x09^ (self indexDe: unBenevole identiteSansAccent) = 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "indexDe:", "identiteSansAccent"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "distribue",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@etat"]="distribue";
self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"distribue",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "distribue\x0a\x09etat := #distribue.\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["annonce"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "encours",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@etat"]="encours";
self._annonce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"encours",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "encours\x0a\x09etat := #encours.\x0a\x09self annonce",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["annonce"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "estDisponible",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@etat"]).__eq_eq(nil);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"estDisponible",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "estDisponible\x0a\x09^ etat==nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=="]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "estDistribue",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@etat"]).__eq_eq("distribue");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"estDistribue",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "estDistribue\x0a\x09^ etat==#distribue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=="]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "estEncours",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@etat"]).__eq_eq("encours");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"estEncours",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "estEncours\x0a\x09^ etat==#encours",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=="]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "estInscrit",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inscrit"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "estInscrit\x0a\x09^ inscrit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'accessing',
fn: function (variables){
var self=this;
function $FdJAssociations(){return $globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
function $FdJTShirt(){return $globals.FdJTShirt||(typeof FdJTShirt=="undefined"?nil:FdJTShirt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@nom"]=$recv(variables)._at_("nom");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
self["@prenom"]=$recv(variables)._at_("prenom");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
self["@etat"]=$recv(variables)._at_ifPresent_ifAbsent_("etat",(function(v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(v)._asSymbol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=1;
//>>excludeEnd("ctx");
self["@assoc"]=$recv(variables)._at_ifPresent_ifAbsent_("assoc",(function(v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($FdJAssociations())._instance();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instance"]=1;
//>>excludeEnd("ctx");
return $recv($1)._at_(v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,3)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($FdJAssociations())._instance())._festival();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifPresent:ifAbsent:"]=2;
//>>excludeEnd("ctx");
self["@tshirt"]=$recv(variables)._at_ifPresent_ifAbsent_("tshirt",(function(v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($FdJTShirt())._at_(v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,5)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
self["@inscrit"]=$recv(variables)._at_ifAbsent_("inscrit",(function(){
return true;

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["variables"],
source: "fromJSON: variables\x0a\x09nom := variables at: 'nom'.\x0a\x09prenom := variables at: 'prenom'.\x0a\x09etat := variables at: 'etat'\x0a\x09\x09ifPresent: [ :v | v asSymbol ]\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09assoc := variables at: 'assoc'\x0a\x09\x09ifPresent: [ :v | FdJAssociations instance at: v ]\x0a\x09\x09ifAbsent: [ FdJAssociations instance festival ].\x0a\x09tshirt := variables at: 'tshirt'\x0a\x09\x09ifPresent: [ :v | FdJTShirt at: v ]\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09inscrit := variables at: 'inscrit'\x0a\x09\x09ifAbsent: [ true ]",
referencedClasses: ["FdJAssociations", "FdJTShirt"],
//>>excludeEnd("ide");
messageSends: ["at:", "at:ifPresent:ifAbsent:", "asSymbol", "instance", "festival", "at:ifAbsent:"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "identiteSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return $globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=self["@nom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$3=$recv($recv(self["@nom"]).__comma(" ")).__comma(self["@prenom"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._remplaceAvec_($recv($FdJApplication())._accents());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"identiteSansAccent",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "identiteSansAccent\x0a\x09nom ifNil: [ ^ '' ].\x0a\x09^ (nom, ' ', prenom) remplaceAvec: FdJApplication accents",
referencedClasses: ["FdJApplication"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "remplaceAvec:", ",", "accents"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "indexDe:",
protocol: 'accessing',
fn: function (chaine){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._identiteSansAccent())._indexOfSubString_(chaine);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexDe:",{chaine:chaine},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["chaine"],
source: "indexDe: chaine\x0a\x09\x22Retourne l'index de la chaine dans le nom sans accent, 0 si chaine pas trouvée, \x22\x0a\x09^ (self identiteSansAccent) indexOfSubString: chaine",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOfSubString:", "identiteSansAccent"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "indexDes:",
protocol: 'accessing',
fn: function (chaines){
var self=this;
var posPrenom,posNom;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$7,$8;
$1=$recv($recv(chaines)._size()).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$3=$recv(chaines)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=self._indexDe_($3);
return $2;
};
$4=self._prenomSansAccent();
$5=$recv(chaines)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
posPrenom=$recv($4)._indexOfSubString_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOfSubString:"]=1;
//>>excludeEnd("ctx");
$6=$recv(posPrenom).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($6)){
return (0);
};
posNom=$recv(self._nomSansAccent())._indexOfSubString_($recv(chaines)._at_((1)));
$7=$recv(posNom).__eq((0));
if($core.assert($7)){
return (0);
};
$8=$recv((20).__star(posNom)).__plus(posPrenom);
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexDes:",{chaines:chaines,posPrenom:posPrenom,posNom:posNom},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["chaines"],
source: "indexDes: chaines\x0a\x09| posPrenom posNom |\x0a\x09\x22Retourne l'index des chaines dans le nom sans accent, 0 si chaines pas trouvée, \x22\x0a\x09\x22si chaine seule, comme indexDe\x22\x0a\x09(chaines size = 1)\x0a\x09\x09ifTrue: [ ^ self indexDe: (chaines at: 1) ].\x0a\x09\x22sinon test du prenom d'abord\x22\x0a\x09posPrenom := (self prenomSansAccent) indexOfSubString: (chaines at: 2).\x0a\x09(posPrenom = 0) ifTrue: [ ^ 0 ].\x0a\x09\x22si prenom ok, test le nom\x22\x0a\x09posNom := (self nomSansAccent) indexOfSubString: (chaines at: 1).\x0a\x09(posNom = 0) ifTrue: [ ^ 0 ].\x0a\x09\x22et renvoie la position dans le nom augmenté de la position dans le prenom\x22\x0a\x09^ (20*posNom) + posPrenom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "size", "indexDe:", "at:", "indexOfSubString:", "prenomSansAccent", "nomSansAccent", "+", "*"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "inscrit:",
protocol: 'accessing',
fn: function (estInscrit){
var self=this;
self["@inscrit"]=estInscrit;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["estInscrit"],
source: "inscrit: estInscrit\x0a\x09inscrit := estInscrit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "nom",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@nom"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nom\x0a\x09^ nom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "nom:",
protocol: 'accessing',
fn: function (chaine){
var self=this;
self["@nom"]=chaine;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["chaine"],
source: "nom: chaine\x0a\x09nom := chaine",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "nomSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return $globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@nom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$2=$recv(self["@nom"])._remplaceAvec_($recv($FdJApplication())._accents());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nomSansAccent",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nomSansAccent\x0a\x09nom ifNil: [ ^ '' ].\x0a\x09^ nom remplaceAvec: FdJApplication accents",
referencedClasses: ["FdJApplication"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "remplaceAvec:", "accents"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "normalise",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@nom"]=$recv(self["@nom"])._asUppercase();
self["@prenom"]=$recv(self["@prenom"])._capitalized();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normalise",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normalise\x0a\x09\x22passe le nom en majuscule et le prénom avec la 1ere lettre en majuscule\x22\x0a\x09nom := nom asUppercase.\x0a\x09prenom := prenom capitalized",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asUppercase", "capitalized"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "prenom",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@prenom"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prenom\x0a\x09^ prenom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "prenom:",
protocol: 'accessing',
fn: function (chaine){
var self=this;
self["@prenom"]=chaine;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["chaine"],
source: "prenom: chaine\x0a\x09prenom := chaine",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "prenomSansAccent",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJApplication(){return $globals.FdJApplication||(typeof FdJApplication=="undefined"?nil:FdJApplication)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@prenom"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
$1;
};
$2=$recv(self["@prenom"])._remplaceAvec_($recv($FdJApplication())._accents());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prenomSansAccent",{},$globals.FdJBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prenomSansAccent\x0a\x09prenom ifNil: [ ^ '' ].\x0a\x09^ prenom remplaceAvec: FdJApplication accents",
referencedClasses: ["FdJApplication"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "remplaceAvec:", "accents"]
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "reinit",
protocol: 'accessing',
fn: function (){
var self=this;
self["@etat"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reinit\x0a\x09etat := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "tshirt",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@tshirt"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tshirt\x0a\x09^ tshirt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);

$core.addMethod(
$core.method({
selector: "tshirt:",
protocol: 'accessing',
fn: function (unTShirt){
var self=this;
self["@tshirt"]=unTShirt;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unTShirt"],
source: "tshirt: unTShirt\x0a\x09tshirt := unTShirt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevole);


$globals.FdJBenevole.klass.iVarNames = ['accents'];
$core.addMethod(
$core.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
function $FdJAssociation(){return $globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
function $FdJTShirt(){return $globals.FdJTShirt||(typeof FdJTShirt=="undefined"?nil:FdJTShirt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._nom_("OSELE");
$recv($2)._prenom_("Vincent");
$recv($2)._association_($recv($FdJAssociation())._exemple());
$recv($2)._tshirt_($recv($FdJTShirt())._at_("h-m"));
$recv($2)._inscrit_(true);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exemple",{},$globals.FdJBenevole.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exemple\x0a\x09^ self new nom: 'OSELE';\x0a\x09\x09\x09 prenom: 'Vincent';\x0a\x09\x09\x09 association: (FdJAssociation exemple);\x0a\x09\x09\x09 tshirt: (FdJTShirt at: 'h-m');\x0a\x09\x09\x09 inscrit: true;\x0a\x09\x09\x09 yourself",
referencedClasses: ["FdJAssociation", "FdJTShirt"],
//>>excludeEnd("ide");
messageSends: ["nom:", "new", "prenom:", "association:", "exemple", "tshirt:", "at:", "inscrit:", "yourself"]
}),
$globals.FdJBenevole.klass);

$core.addMethod(
$core.method({
selector: "exemples",
protocol: 'exemples',
fn: function (){
var self=this;
var benevoles,association;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $FdJAssociations(){return $globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
function $FdJAssociation(){return $globals.FdJAssociation||(typeof FdJAssociation=="undefined"?nil:FdJAssociation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5,$6,$7;
benevoles=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($FdJAssociations())._exemple();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exemple"]=1;
//>>excludeEnd("ctx");
association=$recv($FdJAssociation())._exemple();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["exemple"]=2;
//>>excludeEnd("ctx");
$recv(benevoles)._add_(self._exemple());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$1=benevoles;
$3=self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($3)._nom_("DUPOND");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nom:"]=1;
//>>excludeEnd("ctx");
$recv($3)._prenom_("Gérard");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["prenom:"]=1;
//>>excludeEnd("ctx");
$recv($3)._association_(association);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["association:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._inscrit_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inscrit:"]=1;
//>>excludeEnd("ctx");
$2=$4;
$recv($1)._add_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$5=self._new();
$recv($5)._nom_("MEILLEIS");
$recv($5)._prenom_("George");
$recv($5)._association_($recv($recv($FdJAssociations())._instance())._festival());
$6=$recv($5)._inscrit_(true);
$recv(benevoles)._add_($6);
$7=benevoles;
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exemples",{benevoles:benevoles,association:association},$globals.FdJBenevole.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exemples\x0a\x09| benevoles association |\x0a\x09benevoles := Array new.\x0a\x09FdJAssociations exemple.\x0a\x09association := FdJAssociation exemple.\x0a\x09benevoles add: self exemple.\x0a\x09benevoles add: (self new nom: 'DUPOND';\x0a\x09\x09\x09 prenom: 'Gérard';\x0a\x09\x09\x09 association: association;\x0a\x09\x09\x09 inscrit: false).\x0a\x09benevoles add: (self new nom: 'MEILLEIS';\x0a\x09\x09\x09 prenom: 'George';\x0a\x09\x09\x09 association: FdJAssociations instance festival;\x0a\x09\x09\x09 inscrit: true).\x0a\x09^ benevoles",
referencedClasses: ["Array", "FdJAssociations", "FdJAssociation"],
//>>excludeEnd("ide");
messageSends: ["new", "exemple", "add:", "nom:", "prenom:", "association:", "inscrit:", "festival", "instance"]
}),
$globals.FdJBenevole.klass);


$core.addClass('FdJBenevoles', $globals.Object, ['liste'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@liste"])._add_(unBenevole);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajoute:",{unBenevole:unBenevole},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unBenevole"],
source: "ajoute: unBenevole\x0a\x09liste add: unBenevole",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "ajouteTous:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@liste"])._addAll_(desBenevoles);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajouteTous:",{desBenevoles:desBenevoles},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desBenevoles"],
source: "ajouteTous: desBenevoles\x0a\x09liste addAll: desBenevoles",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "ajouteUnique:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$recv($Transcript())._show_("Benevoles déjà existants:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$1=$recv($Transcript())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$recv(self["@liste"])._addAll_($recv(desBenevoles)._select_thenCollect_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._contient_(b);
if($core.assert($2)){
$4=$recv("- ".__comma($recv(b)._nom())).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(b)._prenom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($3);
$5=$recv($Transcript())._cr();
$5;
return false;
} else {
return true;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(b)._normalise();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,4)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajouteUnique:",{desBenevoles:desBenevoles},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desBenevoles"],
source: "ajouteUnique: desBenevoles\x0a\x09Transcript show: 'Benevoles déjà existants:'; cr.\x0a\x09liste addAll:\x0a\x09\x09(desBenevoles\x0a\x09\x09\x09\x09select: [ :b |\x0a\x09\x09\x09\x09\x09(self contient: b)\x0a\x09\x09\x09\x09\x09\x09ifTrue: [ Transcript show: '- ', b nom, ' ', b prenom; cr. false ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ true ]\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09thenCollect: [ :b | b normalise ])",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:", "cr", "addAll:", "select:thenCollect:", "ifTrue:ifFalse:", "contient:", ",", "nom", "prenom", "normalise"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "benevoles",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var $1;
$1=self["@liste"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "benevoles\x0a\x09^ liste",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "benevoles:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
self["@liste"]=desBenevoles;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desBenevoles"],
source: "benevoles: desBenevoles\x0a\x09liste := desBenevoles",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "contient:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@liste"])._anySatisfy_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(b)._correspond_(unBenevole);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contient:",{unBenevole:unBenevole},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unBenevole"],
source: "contient: unBenevole\x0a\x09^ liste anySatisfy: [ :b | b correspond: unBenevole ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["anySatisfy:", "correspond:"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "filtre:max:",
protocol: 'as yet unclassified',
fn: function (texte,max){
var self=this;
var parties,selection,result,valeur;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$8,$7,$10,$9,$6,$11,$12,$13;
var $early={};
try {
$1=$recv(texte)._isEmpty();
if($core.assert($1)){
$2=[];
return $2;
};
parties=$recv($recv(texte)._tokenize_(" "))._collect_((function(p){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(p)._sansAccent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
selection=$recv(self["@liste"])._collect_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
valeur=$recv(b)._indexDes_(parties);
valeur;
$3=$recv($recv(valeur).__tild_eq((0))).__and($recv($recv(b)._estInscrit())._not());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["&"]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
valeur=$recv(valeur).__plus((100));
valeur;
};
return [valeur,b];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(selection)._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(a)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$5=$recv(b)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return $recv($4).__lt_eq($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,5)});
//>>excludeEnd("ctx");
}));
result=[];
$recv(selection)._do_((function(s){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$8=$recv(s)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__gt((0));
$10=$recv(s)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$9=$recv($10)._estDisponible();
$6=$recv($7).__and($9);
if($core.assert($6)){
$recv(result)._add_($recv(s)._at_((2)));
$11=$recv($recv(result)._size()).__gt_eq(max);
if($core.assert($11)){
$12=result;
throw $early=[$12];
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1,6)});
//>>excludeEnd("ctx");
}));
$13=result;
return $13;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filtre:max:",{texte:texte,max:max,parties:parties,selection:selection,result:result,valeur:valeur},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["texte", "max"],
source: "filtre: texte max: max\x0a\x09| parties selection result valeur |\x0a\x09texte isEmpty ifTrue: [ ^ #() ].\x0a\x09\x22teste le nom\x22\x0a\x09parties := (texte tokenize: ' ') collect: [ :p | p sansAccent ].\x0a\x09selection := liste collect: [ :b |\x0a\x09\x09valeur := b indexDes: parties.\x0a\x09\x09(valeur ~= 0) & (b estInscrit not) ifTrue: [ valeur := valeur + 100 ].\x0a\x09\x09{ valeur. b }\x0a\x09].\x0a\x09selection sort: [ :a :b | (a at: 1) <= (b at: 1) ].\x0a\x09result := #().\x0a\x09selection do: [ :s |\x0a\x09\x09((s at: 1) > 0) & ((s at: 2) estDisponible) ifTrue: [\x0a\x09\x09\x09result add: (s at: 2).\x0a\x09\x09\x09(result size >= max) ifTrue: [ ^ result ]\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isEmpty", "collect:", "tokenize:", "sansAccent", "indexDes:", "&", "~=", "not", "estInscrit", "+", "sort:", "<=", "at:", "do:", ">", "estDisponible", "add:", ">=", "size"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (variables){
var self=this;
function $FdJBenevole(){return $globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@liste"]=$recv($recv(variables)._at_("liste"))._collect_((function(v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($FdJBenevole())._new())._fromJSON_(v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["variables"],
source: "fromJSON: variables\x0a\x09liste := (variables at: 'liste') collect: [ :v |\x0a\x09\x09\x09FdJBenevole new fromJSON: v\x0a\x09\x09]",
referencedClasses: ["FdJBenevole"],
//>>excludeEnd("ide");
messageSends: ["collect:", "at:", "fromJSON:", "new"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "reinit",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@liste"])._do_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(b)._reinit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reinit",{},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reinit\x0a\x09liste do: [ :b | b reinit ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "reinit"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "selectionnes",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@liste"])._select_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(b)._estEncours();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionnes",{},$globals.FdJBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectionnes\x0a\x09^ liste select: [ :b | b estEncours ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "estEncours"]
}),
$globals.FdJBenevoles);

$core.addMethod(
$core.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@liste"]=[];
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vide\x0a\x09liste := #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJBenevoles);


$core.addMethod(
$core.method({
selector: "exemple",
protocol: 'exemples',
fn: function (){
var self=this;
function $FdJBenevole(){return $globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._benevoles_($recv($FdJBenevole())._exemples());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exemple",{},$globals.FdJBenevoles.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exemple\x0a\x09^ self new benevoles: FdJBenevole exemples",
referencedClasses: ["FdJBenevole"],
//>>excludeEnd("ide");
messageSends: ["benevoles:", "new", "exemples"]
}),
$globals.FdJBenevoles.klass);


$core.addClass('FdJHistorique', $globals.Object, ['liste'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "affiche",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var date,sdate;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$11,$10,$12,$9,$8,$13,$7,$6,$14,$5,$4,$15,$3,$2,$17,$16,$18;
$recv($Transcript())._clear();
$recv(self["@liste"])._do_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(e)._at_("date");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
date=$recv($Date())._new_($1);
date;
$11=$recv($recv(date)._dayOfMonth())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$10=$recv($11).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=10;
//>>excludeEnd("ctx");
$12=$recv($recv(date)._month())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
$9=$recv($10).__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=9;
//>>excludeEnd("ctx");
$8=$recv($9).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=8;
//>>excludeEnd("ctx");
$13=$recv($recv(date)._year())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=3;
//>>excludeEnd("ctx");
$7=$recv($8).__comma($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=7;
//>>excludeEnd("ctx");
$6=$recv($7).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=6;
//>>excludeEnd("ctx");
$14=$recv($recv(date)._hours())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=5;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$15=$recv($recv(date)._minutes())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=5;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
sdate=$recv($2).__comma($recv($recv(date)._seconds())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
sdate;
$17=$recv($recv(sdate).__comma(",")).__comma($recv(e)._at_("evennement"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=12;
//>>excludeEnd("ctx");
$16=$recv($17).__comma("'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=11;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($16);
$18=$recv($Transcript())._cr();
return $18;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"affiche",{date:date,sdate:sdate},$globals.FdJHistorique)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "affiche\x0a\x09| date sdate |\x0a\x09Transcript clear.\x0a\x09liste do: [ :e |\x0a\x09\x09date := Date new: (e at: 'date').\x0a\x09\x09sdate :=\x0a\x09\x09\x09  date dayOfMonth asString, '/', date month asString, '/', date year asString\x0a\x09\x09\x09, ' '\x0a\x09\x09\x09, date hours asString, ':', date minutes asString, ':', date seconds asString.\x0a\x09\x09Transcript show: sdate, ',', (e at: 'evennement'), '''';cr ]",
referencedClasses: ["Transcript", "Date"],
//>>excludeEnd("ide");
messageSends: ["clear", "do:", "new:", "at:", ",", "asString", "dayOfMonth", "month", "year", "hours", "minutes", "seconds", "show:", "cr"]
}),
$globals.FdJHistorique);

$core.addMethod(
$core.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (texte){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@liste"])._add_($globals.HashedCollection._newFromPairs_(["date",$recv($recv($Date())._now())._asString(),"evennement",texte]));
self._sauve();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajoute:",{texte:texte},$globals.FdJHistorique)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["texte"],
source: "ajoute: texte\x0a\x09liste add: #{\x0a\x09\x09\x09'date' -> Date now asString.\x0a\x09\x09\x09'evennement' -> texte\x0a\x09\x09}.\x0a\x09self sauve",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["add:", "asString", "now", "sauve"]
}),
$globals.FdJHistorique);

$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (variables){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@liste"]=$recv(variables)._at_("liste");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{variables:variables},$globals.FdJHistorique)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["variables"],
source: "fromJSON: variables\x0a\x09liste := variables at: 'liste'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.FdJHistorique);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $FdJAnnonceur(){return $globals.FdJAnnonceur||(typeof FdJAnnonceur=="undefined"?nil:FdJAnnonceur)}
function $FdJBenevoleChangeEtat(){return $globals.FdJBenevoleChangeEtat||(typeof FdJBenevoleChangeEtat=="undefined"?nil:FdJBenevoleChangeEtat)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@liste"]=[];
$recv($recv($FdJAnnonceur())._current())._on_do_($FdJBenevoleChangeEtat(),(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onBenevoleChangeEtat_($recv(evt)._benevole());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.FdJHistorique)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09liste := #().\x0a\x09FdJAnnonceur current\x0a\x09\x09on: FdJBenevoleChangeEtat\x0a\x09\x09do: [ :evt |\x0a\x09\x09\x09self onBenevoleChangeEtat: evt benevole ]",
referencedClasses: ["FdJAnnonceur", "FdJBenevoleChangeEtat"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "current", "onBenevoleChangeEtat:", "benevole"]
}),
$globals.FdJHistorique);

$core.addMethod(
$core.method({
selector: "onBenevoleChangeEtat:",
protocol: 'as yet unclassified',
fn: function (benevole){
var self=this;
var nom;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv($recv(benevole)._nom()).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
nom=$recv($1).__comma($recv(benevole)._prenom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv(benevole)._estEncours();
if($core.assert($2)){
$3="Debut distribution '".__comma(nom);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
self._ajoute_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ajoute:"]=1;
//>>excludeEnd("ctx");
};
$4=$recv(benevole)._estDistribue();
if($core.assert($4)){
self._ajoute_("Fin distribution '".__comma(nom));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onBenevoleChangeEtat:",{benevole:benevole,nom:nom},$globals.FdJHistorique)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["benevole"],
source: "onBenevoleChangeEtat: benevole\x0a\x09| nom |\x0a\x09nom := benevole nom, ' ', benevole prenom.\x0a\x09benevole estEncours ifTrue: [ \x0a\x09\x09self ajoute: 'Debut distribution ''', nom ].\x0a\x09benevole estDistribue ifTrue: [\x0a\x09\x09self ajoute: 'Fin distribution ''', nom ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "nom", "prenom", "ifTrue:", "estEncours", "ajoute:", "estDistribue"]
}),
$globals.FdJHistorique);

$core.addMethod(
$core.method({
selector: "sauve",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $FdJStockage(){return $globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($FdJStockage())._sauve_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sauve",{},$globals.FdJHistorique)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sauve\x0a\x09FdJStockage sauve: self",
referencedClasses: ["FdJStockage"],
//>>excludeEnd("ide");
messageSends: ["sauve:"]
}),
$globals.FdJHistorique);



$core.addClass('FdJImporteur', $globals.Object, [], 'Benevoles');
$core.addMethod(
$core.method({
selector: "importe:",
protocol: 'as yet unclassified',
fn: function (texte){
var self=this;
var tous,fields,rows;
function $Papa(){return $globals.Papa||(typeof Papa=="undefined"?nil:Papa)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tous=$recv($Papa())._parse_config_(texte,$globals.HashedCollection._newFromPairs_(["delimiter",",","header",true,"dynamicTyping",false]));
$1=tous;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importe:",{texte:texte,tous:tous,fields:fields,rows:rows},$globals.FdJImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["texte"],
source: "importe: texte\x0a\x09| tous fields rows |\x0a\x09tous := Papa\x0a\x09\x09parse: texte\x0a\x09\x09config: #{ 'delimiter'->','. 'header'->true. 'dynamicTyping'->false }.\x0a\x09^ tous",
referencedClasses: ["Papa"],
//>>excludeEnd("ide");
messageSends: ["parse:config:"]
}),
$globals.FdJImporteur);

$core.addMethod(
$core.method({
selector: "importeAssociation:",
protocol: 'as yet unclassified',
fn: function (row){
var self=this;
function $FdJAssociations(){return $globals.FdJAssociations||(typeof FdJAssociations=="undefined"?nil:FdJAssociations)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$recv(row)._at_ifPresent_("Association",(function(assoc){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($FdJAssociations())._instance();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["instance"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_(assoc);
if(($receiver = $1) == null || $receiver.isNil){
return $recv($recv($FdJAssociations())._instance())._ajoute_(assoc);
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importeAssociation:",{row:row},$globals.FdJImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["row"],
source: "importeAssociation: row\x0a\x09row at: 'Association' ifPresent: [ :assoc |\x0a\x09\x09(FdJAssociations instance at: assoc) ifNil: [\x0a\x09\x09\x09FdJAssociations instance ajoute: assoc\x0a\x09\x09\x09]\x0a\x09\x09]",
referencedClasses: ["FdJAssociations"],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:", "ifNil:", "at:", "instance", "ajoute:"]
}),
$globals.FdJImporteur);

$core.addMethod(
$core.method({
selector: "importeAssociations:",
protocol: 'as yet unclassified',
fn: function (rows){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(rows)._do_((function(row){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._importeAssociation_(row);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importeAssociations:",{rows:rows},$globals.FdJImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rows"],
source: "importeAssociations: rows\x0a\x09rows do: [ :row | self importeAssociation: row ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "importeAssociation:"]
}),
$globals.FdJImporteur);

$core.addMethod(
$core.method({
selector: "importeBenevole:",
protocol: 'as yet unclassified',
fn: function (row){
var self=this;
function $FdJStockage(){return $globals.FdJStockage||(typeof FdJStockage=="undefined"?nil:FdJStockage)}
function $FdJBenevole(){return $globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(row)._at_("Nom");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$globals.HashedCollection._newFromPairs_(["nom",$3,"prenom",$recv(row)._at_("Prénom"),"assoc",$recv(row)._at_ifAbsent_("Association",(function(){
return "Festival";

})),"inscrit",$recv(row)._at_ifPresent_ifAbsent_("Inscrit",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(r)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
return true;

}))]);
$1=$recv($FdJStockage())._charge_depuis_($FdJBenevole(),$2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importeBenevole:",{row:row},$globals.FdJImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["row"],
source: "importeBenevole: row\x0a\x09^ FdJStockage charge: FdJBenevole depuis: #{\x0a\x09\x09'nom' -> (row at: 'Nom').\x0a\x09\x09'prenom' -> (row at: 'Prénom').\x0a\x09\x09'assoc' -> (row at: 'Association' ifAbsent: [ 'Festival']).\x0a\x09\x09'inscrit' -> (row at: 'Inscrit'\x0a\x09\x09\x09\x09\x09\x09  ifPresent: [ :r | r isEmpty ]\x0a\x09\x09\x09\x09\x09  \x09  ifAbsent: [ true ])\x0a\x09\x09}",
referencedClasses: ["FdJStockage", "FdJBenevole"],
//>>excludeEnd("ide");
messageSends: ["charge:depuis:", "at:", "at:ifAbsent:", "at:ifPresent:ifAbsent:", "isEmpty"]
}),
$globals.FdJImporteur);

$core.addMethod(
$core.method({
selector: "importeBenevoles:",
protocol: 'as yet unclassified',
fn: function (rows){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(rows)._collect_((function(row){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._importeBenevole_(row);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importeBenevoles:",{rows:rows},$globals.FdJImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rows"],
source: "importeBenevoles: rows\x0a\x09^ rows collect: [ :row | self importeBenevole: row ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "importeBenevole:"]
}),
$globals.FdJImporteur);

$core.addMethod(
$core.method({
selector: "importeTShirt:",
protocol: 'as yet unclassified',
fn: function (row){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$8,$7,$6,$10,$9,$5,$4,$1;
$3=$recv(row)._at_("Nom");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._asLowercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asLowercase"]=1;
//>>excludeEnd("ctx");
$8=$recv(row)._at_("Cintré");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ifEmpty_ifNotEmpty_((function(){
return "h";

}),(function(){
return "f";

}));
$6=$recv($7).__comma("-");
$10=$recv(row)._at_("Taille");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._asLowercase();
$5=$recv($6).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($recv($recv(row)._at_("LSF"))._ifNotEmpty_((function(){
return "-lsf";

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__minus_gt($4);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importeTShirt:",{row:row},$globals.FdJImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["row"],
source: "importeTShirt: row\x0a\x09^ ((row at: 'Nom') asLowercase)\x0a\x09\x09->\x0a\x09  (((row at: 'Cintré') ifEmpty: [ 'h' ] ifNotEmpty: [ 'f' ] )\x0a\x09\x09, '-', ((row at: 'Taille') asLowercase)\x0a\x09\x09, ((row at: 'LSF') ifNotEmpty: [ '-lsf' ])\x0a\x09\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["->", "asLowercase", "at:", ",", "ifEmpty:ifNotEmpty:", "ifNotEmpty:"]
}),
$globals.FdJImporteur);

$core.addMethod(
$core.method({
selector: "importeTShirts:",
protocol: 'as yet unclassified',
fn: function (rows){
var self=this;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($HashedCollection())._from_($recv(rows)._collect_((function(row){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._importeTShirt_(row);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importeTShirts:",{rows:rows},$globals.FdJImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["rows"],
source: "importeTShirts: rows\x0a\x09^ HashedCollection from:\x0a\x09\x09(rows collect: [ :row | self importeTShirt: row ])",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["from:", "collect:", "importeTShirt:"]
}),
$globals.FdJImporteur);



$core.addClass('FdJStock', $globals.Object, ['tshirts'], 'Benevoles');


$core.addClass('FdJStockage', $globals.Object, ['stockage'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "charge:",
protocol: 'as yet unclassified',
fn: function (entite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._charge_depuis_(entite,self._jsonPour_(entite));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charge:",{entite:entite},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["entite"],
source: "charge: entite\x0a\x09^ self charge: entite depuis: (self jsonPour: entite)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["charge:depuis:", "jsonPour:"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "charge:depuis:",
protocol: 'as yet unclassified',
fn: function (entite,json){
var self=this;
var objet;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(entite)._isClass();
if($core.assert($1)){
objet=$recv(entite)._new();
} else {
objet=entite;
};
$2=$recv(objet)._fromJSON_(json);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charge:depuis:",{entite:entite,json:json,objet:objet},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["entite", "json"],
source: "charge: entite depuis: json\x0a\x09|objet|\x0a\x09objet := entite isClass\x0a\x09\x09ifTrue: [ entite new ]\x0a\x09\x09ifFalse: [ entite ].\x0a\x09^ objet fromJSON: json",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isClass", "new", "fromJSON:"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "charge:sinon:",
protocol: 'as yet unclassified',
fn: function (entite,block){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._jsonPour_(entite);
if(($receiver = $1) == null || $receiver.isNil){
$2=$recv(block)._value();
return $2;
} else {
var s;
s=$receiver;
$3=self._charge_depuis_(entite,s);
return $3;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charge:sinon:",{entite:entite,block:block},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["entite", "block"],
source: "charge: entite sinon: block\x0a\x09(self jsonPour: entite)\x0a\x09\x09ifNil: [\x0a\x09\x09\x09^ block value ]\x0a\x09\x09ifNotNil: [:s |\x0a\x09\x09\x09^ self charge: entite depuis: s ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "jsonPour:", "value", "charge:depuis:"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "existe:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@stockage"])._getItem_(self._nomPour_(objet)))._isNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"existe:",{objet:objet},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["objet"],
source: "existe: objet\x0a\x09^ (stockage getItem: (self nomPour: objet)) isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil", "getItem:", "nomPour:"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@stockage"]=localStorage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09stockage := localStorage\x0a\x09\x22stockage := sessionStorage\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "jsonPour:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._stockagePour_(objet);
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
var s;
s=$receiver;
$2=self._variablesPour_($recv($JSON())._parse_(s));
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsonPour:",{objet:objet},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["objet"],
source: "jsonPour: objet\x0a\x09(self stockagePour: objet)\x0a\x09\x09ifNil: [ ^ nil ]\x0a\x09\x09ifNotNil: [ :s |\x0a\x09\x09\x09^ self variablesPour: (JSON parse: s) ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "stockagePour:", "variablesPour:", "parse:"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "nomPour:",
protocol: 'as yet unclassified',
fn: function (entite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(entite)._isClass();
if($core.assert($1)){
$2=$recv(entite)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $2;
};
$3=$recv(entite)._isString();
if($core.assert($3)){
return entite;
};
$4=$recv($recv(entite)._class())._name();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nomPour:",{entite:entite},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["entite"],
source: "nomPour: entite\x0a\x09entite isClass ifTrue: [ ^ entite name ].\x0a\x09entite isString ifTrue: [ ^ entite ].\x0a\x09^ entite class name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isClass", "name", "isString", "class"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "sauve:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@stockage"])._setItem_value_(self._nomPour_(objet),$recv(objet)._asJSONString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sauve:",{objet:objet},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["objet"],
source: "sauve: objet\x0a\x09stockage\x0a\x09\x09setItem: (self nomPour: objet)\x0a\x09\x09value: objet asJSONString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setItem:value:", "nomPour:", "asJSONString"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "stockagePour:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@stockage"])._getItem_(self._nomPour_(objet));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stockagePour:",{objet:objet},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["objet"],
source: "stockagePour: objet\x0a\x09\x22objet peut être une classe, une chaine ou un objet\x22\x0a\x09^ stockage getItem: (self nomPour: objet)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getItem:", "nomPour:"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "variablesPour:",
protocol: 'as yet unclassified',
fn: function (json){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Smalltalk())._readJSObject_(json);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variablesPour:",{json:json},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "variablesPour: json\x0a\x09^ Smalltalk readJSObject: json",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["readJSObject:"]
}),
$globals.FdJStockage);

$core.addMethod(
$core.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@stockage"])._clear();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vide",{},$globals.FdJStockage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vide\x0a\x09stockage clear",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clear"]
}),
$globals.FdJStockage);


$globals.FdJStockage.klass.iVarNames = ['instance'];
$core.addMethod(
$core.method({
selector: "charge:",
protocol: 'as yet unclassified',
fn: function (entite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instance())._charge_(entite);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charge:",{entite:entite},$globals.FdJStockage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["entite"],
source: "charge: entite\x0a\x09^ self instance charge: entite",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["charge:", "instance"]
}),
$globals.FdJStockage.klass);

$core.addMethod(
$core.method({
selector: "charge:depuis:",
protocol: 'as yet unclassified',
fn: function (entite,json){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instance())._charge_depuis_(entite,json);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charge:depuis:",{entite:entite,json:json},$globals.FdJStockage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["entite", "json"],
source: "charge: entite depuis: json\x0a\x09^ self instance charge: entite depuis: json",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["charge:depuis:", "instance"]
}),
$globals.FdJStockage.klass);

$core.addMethod(
$core.method({
selector: "charge:sinon:",
protocol: 'as yet unclassified',
fn: function (entite,block){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instance())._charge_sinon_(entite,block);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charge:sinon:",{entite:entite,block:block},$globals.FdJStockage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["entite", "block"],
source: "charge: entite sinon: block\x0a\x09^ self instance charge: entite sinon: block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["charge:sinon:", "instance"]
}),
$globals.FdJStockage.klass);

$core.addMethod(
$core.method({
selector: "instance",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@instance"];
if(($receiver = $2) == null || $receiver.isNil){
self["@instance"]=self._new();
$1=self["@instance"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.FdJStockage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.FdJStockage.klass);

$core.addMethod(
$core.method({
selector: "sauve:",
protocol: 'as yet unclassified',
fn: function (objet){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instance())._sauve_(objet);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sauve:",{objet:objet},$globals.FdJStockage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["objet"],
source: "sauve: objet\x0a\x09^ self instance sauve: objet",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sauve:", "instance"]
}),
$globals.FdJStockage.klass);

$core.addMethod(
$core.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._instance())._vide();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vide",{},$globals.FdJStockage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vide\x0a\x09^ self instance vide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vide", "instance"]
}),
$globals.FdJStockage.klass);


$core.addClass('FdJTShirt', $globals.Object, ['type', 'taille', 'spec'], 'Benevoles');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.FdJTShirt.comment="type: H(omme) ou F(emme)\x0ataille: XS, S, M...\x0aspec: vide, lsf, dv...";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$1,$receiver;
$3=$recv(self["@type"]).__comma("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(self["@taille"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$5=self["@spec"];
if(($receiver = $5) == null || $receiver.isNil){
$4="";
} else {
$4="-".__comma(self["@spec"]);
};
$1=$recv($2).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{},$globals.FdJTShirt)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ type, '-', taille, (spec ifNotNil: [ '-', spec ] ifNil: [ '' ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "ifNotNil:ifNil:"]
}),
$globals.FdJTShirt);

$core.addMethod(
$core.method({
selector: "spec",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@spec"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "spec\x0a\x09^ spec",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJTShirt);

$core.addMethod(
$core.method({
selector: "spec:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@spec"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "spec: anObject\x0a\x09spec := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJTShirt);

$core.addMethod(
$core.method({
selector: "taille",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@taille"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "taille\x0a\x09^ taille",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJTShirt);

$core.addMethod(
$core.method({
selector: "taille:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@taille"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "taille: anObject\x0a\x09taille := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJTShirt);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@type"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ type",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJTShirt);

$core.addMethod(
$core.method({
selector: "type:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@type"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "type: anObject\x0a\x09type := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJTShirt);


$globals.FdJTShirt.klass.iVarNames = ['tshirts'];
$core.addMethod(
$core.method({
selector: "at:",
protocol: 'as yet unclassified',
fn: function (id){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._tshirts())._at_(id);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{id:id},$globals.FdJTShirt.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "at: id\x0a\x09^ self tshirts at: id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "tshirts"]
}),
$globals.FdJTShirt.klass);

$core.addMethod(
$core.method({
selector: "tshirts",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var t;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$receiver;
$1=self["@tshirts"];
if(($receiver = $1) == null || $receiver.isNil){
self["@tshirts"]=$recv($HashedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@tshirts"];
["h", "f"]._do_((function(genre){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return ["xs", "s", "m", "l", "xl", "xxl", "3xl"]._do_((function(taille){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($2)._type_(genre);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["type:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._taille_(taille);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["taille:"]=1;
//>>excludeEnd("ctx");
t=$3;
t;
$4=self["@tshirts"];
$5=$recv(t)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_($5,t);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$6=self._new();
$recv($6)._type_(genre);
$recv($6)._taille_(taille);
$7=$recv($6)._spec_("lsf");
t=$7;
t;
return $recv(self["@tshirts"])._at_put_($recv(t)._id(),t);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({taille:taille},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({genre:genre},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
} else {
$1;
};
$8=self["@tshirts"];
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tshirts",{t:t},$globals.FdJTShirt.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tshirts\x0a\x09| t |\x0a\x09tshirts ifNil: [\x0a\x09\x09tshirts := HashedCollection new.\x0a\x09\x09#(#h #f) do: [ :genre |\x0a\x09\x09\x09#(#xs #s #m #l #xl #xxl '3xl') do: [ :taille |\x0a\x09\x09\x09\x09t := self new type: genre; taille: taille.\x0a\x09\x09\x09\x09tshirts at: t id put: t.\x0a\x09\x09\x09\x09t := self new type: genre; taille: taille; spec: 'lsf'.\x0a\x09\x09\x09\x09tshirts at: t id put: t\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09^ tshirts",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new", "do:", "type:", "taille:", "at:put:", "id", "spec:"]
}),
$globals.FdJTShirt.klass);

$core.addMethod(
$core.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
self["@tshirts"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vide\x0a\x09tshirts := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJTShirt.klass);


$core.addClass('FdJWidget', $globals.Widget, ['presentateur', 'widgets', 'div'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (unWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(unWidget)._presentateur_(self["@presentateur"]);
$recv(self["@widgets"])._add_(unWidget);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajoute:",{unWidget:unWidget},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unWidget"],
source: "ajoute: unWidget\x0a\x09unWidget presentateur: presentateur.\x0a\x09widgets add: unWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["presentateur:", "add:"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "ajouteClasse:",
protocol: 'as yet unclassified',
fn: function (nom){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@div"];
$2=$recv($recv($recv($recv(self["@div"])._element())._className()).__comma(" ")).__comma(nom);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._class_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajouteClasse:",{nom:nom},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nom"],
source: "ajouteClasse: nom\x0a\x09div class: (div element className, ' ', nom)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", ",", "className", "element"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJWidget.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@widgets"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09widgets := #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "nom",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._class())._asString())._trimLeft_("FdJWidget"))._asLowercase();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nom",{},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nom\x0a\x09^ (self class asString trimLeft: 'FdJWidget') asLowercase",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asLowercase", "trimLeft:", "asString", "class"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "presentateur:",
protocol: 'as yet unclassified',
fn: function (unPresentateur){
var self=this;
self["@presentateur"]=unPresentateur;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unPresentateur"],
source: "presentateur: unPresentateur\x0a\x09presentateur := unPresentateur",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@div"]=$recv($recv(html)._div())._class_(self._nom());
$recv(self["@div"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderWidgetsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: self nom.\x0a\x09div with: [ self renderWidgetsOn: html]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "nom", "with:", "renderWidgetsOn:"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "renderWidgetsOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@widgets"])._do_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(b)._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderWidgetsOn:",{html:html},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderWidgetsOn: html\x0a\x09widgets do: [ :b | b renderOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "renderOn:"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "supprime",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@div"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv($recv(self["@div"])._asJQuery())._remove();
};
self["@div"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"supprime",{},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "supprime\x0a\x09div ifNotNil: [ div asJQuery remove ].\x0a\x09div := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "remove", "asJQuery"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "supprime:",
protocol: 'as yet unclassified',
fn: function (unWidget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(unWidget)._supprime();
$recv(self["@widgets"])._remove_(unWidget);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"supprime:",{unWidget:unWidget},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unWidget"],
source: "supprime: unWidget\x0a\x09\x22suppression html\x22\x0a\x09unWidget supprime.\x0a\x09\x22suppression liste\x22\x0a\x09widgets remove: unWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["supprime", "remove:"]
}),
$globals.FdJWidget);

$core.addMethod(
$core.method({
selector: "vide",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@widgets"])._do_((function(w){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(w)._supprime();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({w:w},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@widgets"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vide",{},$globals.FdJWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vide\x0a\x09\x22supprime les widgets mais laisse la racine\x22\x0a\x09widgets do: [ :w | w supprime ].\x0a\x09widgets := #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "supprime"]
}),
$globals.FdJWidget);



$core.addClass('FdJWidgetBarre', $globals.FdJWidget, [], 'Benevoles');


$core.addClass('FdJWidgetBenevole', $globals.FdJWidget, ['benevole'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "associe:",
protocol: 'rendering',
fn: function (unBenevole){
var self=this;
self["@benevole"]=unBenevole;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unBenevole"],
source: "associe: unBenevole\x0a\x09benevole := unBenevole",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJWidgetBenevole);

$core.addMethod(
$core.method({
selector: "benevole",
protocol: 'rendering',
fn: function (){
var self=this;
var $1;
$1=self["@benevole"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "benevole\x0a\x09^ benevole",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FdJWidgetBenevole);

$core.addMethod(
$core.method({
selector: "renderAssociationOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var nom;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(self["@benevole"])._association();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["association"]=1;
//>>excludeEnd("ctx");
nom=$recv($1)._nom();
$2=$recv($recv(nom)._size()).__gt((30));
if($core.assert($2)){
nom=$recv($recv(nom)._first_((30))).__comma("...");
nom;
};
$3=$recv(html)._div();
$recv($3)._class_("association");
$4=$recv($3)._with_(nom);
self._ajouteClasse_($recv($recv(self["@benevole"])._association())._nomSansAccent());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderAssociationOn:",{html:html,nom:nom},$globals.FdJWidgetBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderAssociationOn: html\x0a\x09| nom |\x0a\x09nom := benevole association nom.\x0a\x09(nom size > 30) ifTrue: [ nom := (nom first: 30), '...' ].\x0a\x09html div class: 'association';\x0a\x09\x09\x09 with: nom.\x0a\x09self ajouteClasse: (benevole association nomSansAccent)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nom", "association", "ifTrue:", ">", "size", ",", "first:", "class:", "div", "with:", "ajouteClasse:", "nomSansAccent"]
}),
$globals.FdJWidgetBenevole);

$core.addMethod(
$core.method({
selector: "renderIdentiteOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("identite");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("nom");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_($recv(self["@benevole"])._nom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._div();
$recv($5)._class_("prenom");
$6=$recv($5)._with_($recv(self["@benevole"])._prenom());
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:",{html:html},$globals.FdJWidgetBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderIdentiteOn: html\x0a\x09html div class: 'identite';\x0a\x09\x09with: [ html div class: 'nom'; with: benevole nom.\x0a\x09\x09\x09\x09html div class: 'prenom'; with: benevole prenom ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "nom", "prenom"]
}),
$globals.FdJWidgetBenevole);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJWidgetBenevole.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@div"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
$recv($1)._class_("info");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._renderIdentiteOn_(html);
return self._renderAssociationOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$2;
return self._renderTShirtOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv(self["@benevole"])._estInscrit();
if(!$core.assert($3)){
self._ajouteClasse_("noninscrit");
};
$recv(self["@div"])._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@presentateur"])._selectionne_(self["@benevole"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.FdJWidgetBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09html div class: 'info'; with: [\x0a\x09\x09\x09self renderIdentiteOn: html.\x0a\x09\x09\x09self renderAssociationOn: html ].\x0a\x09\x09self renderTShirtOn: html ].\x0a\x09benevole estInscrit ifFalse: [\x09\x09\x09\x0a\x09\x09self ajouteClasse: 'noninscrit' ].\x0a\x09div onClick: [ presentateur selectionne: benevole ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "with:", "class:", "div", "renderIdentiteOn:", "renderAssociationOn:", "renderTShirtOn:", "ifFalse:", "estInscrit", "ajouteClasse:", "onClick:", "selectionne:"]
}),
$globals.FdJWidgetBenevole);

$core.addMethod(
$core.method({
selector: "renderTShirtOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7,$9,$8,$10,$receiver;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._class_("tshirt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv(self["@benevole"])._tshirt();
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
var t;
t=$receiver;
$recv(d)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$5=$recv(t)._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["type"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._asUppercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asUppercase"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$6=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($6)._with_($recv($recv(t)._taille())._asUppercase());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$7=$recv(html)._div();
$9=$recv(t)._spec();
if(($receiver = $9) == null || $receiver.isNil){
$8="";
} else {
$8=$9;
};
return $recv($7)._with_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$10=$recv($recv(t)._type()).__eq("h");
if($core.assert($10)){
$recv(d)._class_("tshirt homme");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
} else {
$recv(d)._class_("tshirt femme");
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTShirtOn:",{html:html,d:d},$globals.FdJWidgetBenevole)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTShirtOn: html\x0a\x09| d |\x0a\x09d := html div class: 'tshirt'.\x0a\x09benevole tshirt ifNotNil: [ :t |\x0a\x09\x09d with: [\x0a\x09\x09\x09html div with: t type asUppercase.\x0a\x09\x09\x09html div with: t taille asUppercase.\x0a\x09\x09\x09html div with: (t spec ifNil: [ '' ])\x0a\x09\x09\x09].\x0a\x09\x09t type = #h\x0a\x09\x09\x09ifTrue: [d class: 'tshirt homme']\x0a\x09\x09\x09ifFalse: [d class: 'tshirt femme']\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "ifNotNil:", "tshirt", "with:", "asUppercase", "type", "taille", "ifNil:", "spec", "ifTrue:ifFalse:", "="]
}),
$globals.FdJWidgetBenevole);



$core.addClass('FdJWidgetBenevoles', $globals.FdJWidget, [], 'Benevoles');
$core.addMethod(
$core.method({
selector: "ajoute:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._creeWidget_(unBenevole);
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajoute:",{unBenevole:unBenevole},$globals.FdJWidgetBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unBenevole"],
source: "ajoute: unBenevole\x0a\x09self creeWidget: unBenevole.\x0a\x09self update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["creeWidget:", "update"]
}),
$globals.FdJWidgetBenevoles);

$core.addMethod(
$core.method({
selector: "associe:",
protocol: 'as yet unclassified',
fn: function (desBenevoles){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._vide();
$recv(desBenevoles)._do_((function(b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._creeWidget_(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"associe:",{desBenevoles:desBenevoles},$globals.FdJWidgetBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["desBenevoles"],
source: "associe: desBenevoles\x0a\x09\x22liste de modele Benevole\x22\x0a\x09self vide.\x0a\x09desBenevoles do: [ :b | self creeWidget: b ].\x0a\x09self update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vide", "do:", "creeWidget:", "update"]
}),
$globals.FdJWidgetBenevoles);

$core.addMethod(
$core.method({
selector: "creeWidget:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
function $FdJWidgetBenevole(){return $globals.FdJWidgetBenevole||(typeof FdJWidgetBenevole=="undefined"?nil:FdJWidgetBenevole)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJWidgetBenevoles.superclass.fn.prototype._ajoute_.apply($recv(self), [$recv($recv($FdJWidgetBenevole())._new())._associe_(unBenevole)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"creeWidget:",{unBenevole:unBenevole},$globals.FdJWidgetBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unBenevole"],
source: "creeWidget: unBenevole\x0a\x09super ajoute:\x0a\x09\x09(FdJWidgetBenevole new associe: unBenevole)",
referencedClasses: ["FdJWidgetBenevole"],
//>>excludeEnd("ide");
messageSends: ["ajoute:", "associe:", "new"]
}),
$globals.FdJWidgetBenevoles);

$core.addMethod(
$core.method({
selector: "renderBenevolesOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._renderWidgetsOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBenevolesOn:",{html:html},$globals.FdJWidgetBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBenevolesOn: html\x0a\x09self renderWidgetsOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderWidgetsOn:"]
}),
$globals.FdJWidgetBenevoles);

$core.addMethod(
$core.method({
selector: "supprime:",
protocol: 'as yet unclassified',
fn: function (unBenevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJWidgetBenevoles.superclass.fn.prototype._supprime_.apply($recv(self), [$recv(self["@widgets"])._detect_ifNone_((function(w){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(w)._benevole()).__eq_eq(unBenevole);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({w:w},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
throw $early=[self];

}))]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"supprime:",{unBenevole:unBenevole},$globals.FdJWidgetBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unBenevole"],
source: "supprime: unBenevole\x0a\x09super supprime: (\x0a\x09\x09widgets detect: [ :w | w benevole == unBenevole ] ifNone: [ ^ self ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["supprime:", "detect:ifNone:", "==", "benevole"]
}),
$globals.FdJWidgetBenevoles);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@div"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@div"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderBenevolesOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.FdJWidgetBenevoles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09div contents: [ :html |\x0a\x09\x09div with: [ self renderBenevolesOn: html ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:", "renderBenevolesOn:"]
}),
$globals.FdJWidgetBenevoles);



$core.addClass('FdJWidgetImporteur', $globals.FdJWidget, ['input', 'dlg'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "input",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@input"])._asJQuery())._val();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"input",{},$globals.FdJWidgetImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "input\x0a\x09^ input asJQuery val",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val", "asJQuery"]
}),
$globals.FdJWidgetImporteur);

$core.addMethod(
$core.method({
selector: "renderActionsOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
var vide;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5;
$1=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("checkbox");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._input();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["input"]=1;
//>>excludeEnd("ctx");
vide=$recv($3)._type_("checkbox");
vide;
return $recv($recv(html)._span())._with_("Vide");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$4=$recv(html)._button();
$recv($4)._with_("import");
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv($recv(vide)._element())._checked();
if($core.assert($6)){
$recv(self["@presentateur"])._vide();
};
$recv(self["@presentateur"])._importe_(self._input());
return $recv($recv(self["@dlg"])._asJQuery())._fadeOut();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderActionsOn:",{html:html,vide:vide},$globals.FdJWidgetImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderActionsOn: html\x0a\x09| vide |\x0a\x09html span class: 'checkbox'; with: [ \x0a\x09\x09vide := html input type: 'checkbox'.\x0a\x09\x09html span with: 'Vide'\x0a\x09].\x0a\x09html button with: 'import';\x0a\x09\x09onClick: [\x0a\x09\x09\x09vide element checked ifTrue: [\x0a\x09\x09\x09\x09\x09presentateur vide\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09presentateur importe: self input.\x0a\x09\x09\x09dlg asJQuery fadeOut\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "span", "with:", "type:", "input", "button", "onClick:", "ifTrue:", "checked", "element", "vide", "importe:", "fadeOut", "asJQuery"]
}),
$globals.FdJWidgetImporteur);

$core.addMethod(
$core.method({
selector: "renderDlgOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("dialog");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@input"]=$recv(html)._textarea();
self["@input"];
$3=$recv(html)._div();
$recv($3)._class_("actions");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderActionsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@dlg"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderDlgOn:",{html:html},$globals.FdJWidgetImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderDlgOn: html\x0a\x09dlg := html div\x0a\x09\x09class: 'dialog';\x0a\x09\x09with: [\x0a\x09\x09\x09input := html textarea.\x0a\x09\x09\x09html div class: 'actions';\x0a\x09\x09\x09\x09 with: [ self renderActionsOn: html ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "textarea", "renderActionsOn:"]
}),
$globals.FdJWidgetImporteur);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJWidgetImporteur.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@div"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderDlgOn_(html);
$1=$recv(html)._button();
$recv($1)._class_("boutton");
$recv($1)._with_("I");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(self["@dlg"])._asJQuery())._fadeToggle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.FdJWidgetImporteur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09self renderDlgOn: html.\x0a\x09\x09html button\x0a\x09\x09\x09class: 'boutton';\x0a\x09\x09\x09with: 'I';\x0a\x09\x09\x09onClick: [ dlg asJQuery fadeToggle ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "with:", "renderDlgOn:", "class:", "button", "onClick:", "fadeToggle", "asJQuery"]
}),
$globals.FdJWidgetImporteur);



$core.addClass('FdJWidgetLegende', $globals.FdJWidget, [], 'Benevoles');
$core.addMethod(
$core.method({
selector: "enderTShirtOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("tshirt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_("H/F");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($3)._with_("taille");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $recv($recv(html)._div())._with_("lsf");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$4=$recv($1)._class_("tshirt homme");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enderTShirtOn:",{html:html},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "enderTShirtOn: html\x0a\x09html div class: 'tshirt';\x0a\x09\x09with: [\x0a\x09\x09\x09html div with: 'H/F'.\x0a\x09\x09\x09html div with: 'taille'.\x0a\x09\x09\x09html div with: 'lsf' ];\x0a\x09\x09class: 'tshirt homme'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:"]
}),
$globals.FdJWidgetLegende);

$core.addMethod(
$core.method({
selector: "renderAssociationOn:texte:",
protocol: 'as yet unclassified',
fn: function (html,texte){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("association");
$2=$recv($1)._with_(texte);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderAssociationOn:texte:",{html:html,texte:texte},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html", "texte"],
source: "renderAssociationOn: html texte: texte\x0a\x09html div class: 'association';\x0a\x09\x09with: texte",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:"]
}),
$globals.FdJWidgetLegende);

$core.addMethod(
$core.method({
selector: "renderBenevoleOn:type:",
protocol: 'as yet unclassified',
fn: function (html,benevole){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$8,$7,$9,$5;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$2=$1;
$4=$recv(benevole)._at_("type");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$3="benevole ".__comma($4);
$recv($2)._class_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$5=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(html)._div();
$recv($6)._class_("info");
$7=$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(benevole)._at_ifPresent_ifAbsent_("nom",(function(t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._renderIdentiteOn_texte_(html,t);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({t:t},$ctx3,3)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._renderIdentiteOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
$8=$recv(benevole)._at_("assoc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return self._renderAssociationOn_texte_(html,$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$7;
$9=$recv($recv(benevole)._at_("type")).__eq("auteur");
if(!$core.assert($9)){
return self._renderTShirtOn_(html);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBenevoleOn:type:",{html:html,benevole:benevole},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html", "benevole"],
source: "renderBenevoleOn: html type: benevole\x0a\x09html div class: 'benevole ',(benevole at: #type); with: [\x0a\x09\x09html div class: 'info'; with: [\x0a\x09\x09\x09benevole at: #nom\x0a\x09\x09\x09\x09ifPresent: [ :t | self renderIdentiteOn: html texte: t ]\x0a\x09\x09\x09\x09ifAbsent: [ self renderIdentiteOn: html ].\x0a\x09\x09\x09self renderAssociationOn: html\x0a\x09\x09\x09\x09texte: (benevole at: #assoc)\x0a\x09\x09\x09].\x0a\x09\x09((benevole at: #type) = 'auteur') ifFalse: [\x0a\x09\x09\x09self renderTShirtOn: html ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", ",", "at:", "with:", "at:ifPresent:ifAbsent:", "renderIdentiteOn:texte:", "renderIdentiteOn:", "renderAssociationOn:texte:", "ifFalse:", "=", "renderTShirtOn:"]
}),
$globals.FdJWidgetLegende);

$core.addMethod(
$core.method({
selector: "renderContenuOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("texte");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("1) Sélectionner un bénévole avec une partie de son nom et/ou prénom en bas de l'écran");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($4)._with_("2) Cliquer dessus pour commencer la distribution");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=4;
//>>excludeEnd("ctx");
$recv($5)._with_("3) Cliquer sur l'étiquette pour terminer la distribution");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $recv($recv(html)._div())._with_("Code des couleurs:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._renderBenevoleOn_type_(html,$globals.HashedCollection._newFromPairs_(["type","festival","assoc","association"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderBenevoleOn:type:"]=1;
//>>excludeEnd("ctx");
self._renderBenevoleOn_type_(html,$globals.HashedCollection._newFromPairs_(["type","auteur","nom","Auteur","assoc","distri speciale"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderBenevoleOn:type:"]=2;
//>>excludeEnd("ctx");
self._renderBenevoleOn_type_(html,$globals.HashedCollection._newFromPairs_(["type","noninscrit","nom","Non-inscrit","assoc","vérif stock"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderContenuOn:",{html:html},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderContenuOn: html\x0a\x09html div class: 'texte'; with: [\x0a\x09\x09html div with: '1) Sélectionner un bénévole avec une partie de son nom et/ou prénom en bas de l''écran'.\x0a\x09\x09html div with: '2) Cliquer dessus pour commencer la distribution'.\x0a\x09\x09html div with: '3) Cliquer sur l''étiquette pour terminer la distribution'.\x0a\x09\x09html div with: 'Code des couleurs:' ].\x0a\x09self renderBenevoleOn: html type: #{\x0a\x09\x09#type->'festival'. #assoc->'association' }.\x0a\x09self renderBenevoleOn: html type: #{\x0a\x09\x09#type->'auteur'. #nom->'Auteur'. #assoc->'distri speciale' }.\x0a\x09self renderBenevoleOn: html type: #{\x0a\x09\x09\x09#type->'noninscrit'. #nom->'Non-inscrit'. #assoc->'vérif stock' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderBenevoleOn:type:"]
}),
$globals.FdJWidgetLegende);

$core.addMethod(
$core.method({
selector: "renderIdentiteOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("identite");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("nom");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_("Nom");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._div();
$recv($5)._class_("prenom");
$6=$recv($5)._with_("Prenom");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:",{html:html},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderIdentiteOn: html\x0a\x09html div class: 'identite';\x0a\x09\x09with: [ html div class: 'nom'; with: 'Nom'.\x0a\x09\x09\x09\x09html div class: 'prenom'; with: 'Prenom' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:"]
}),
$globals.FdJWidgetLegende);

$core.addMethod(
$core.method({
selector: "renderIdentiteOn:texte:",
protocol: 'as yet unclassified',
fn: function (html,texte){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("identite");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("nom");
$4=$recv($3)._with_(texte);
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderIdentiteOn:texte:",{html:html,texte:texte},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html", "texte"],
source: "renderIdentiteOn: html texte: texte\x0a\x09html div class: 'identite';\x0a\x09\x09with: [ html div class: 'nom'; with: texte ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:"]
}),
$globals.FdJWidgetLegende);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
var contenu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJWidgetLegende.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@div"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("bouton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Aide");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(contenu)._asJQuery())._fadeToggle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$2;
$3=$recv(html)._div();
$recv($3)._class_("contenu");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderContenuOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
contenu=$4;
return contenu;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,contenu:contenu},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| contenu |\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09html div\x0a\x09\x09\x09class: 'bouton';\x0a\x09\x09\x09with: 'Aide';\x0a\x09\x09\x09onClick: [ contenu asJQuery fadeToggle ].\x0a\x09\x09contenu := html div\x0a\x09\x09\x09class: 'contenu';\x0a\x09\x09\x09with: [ self renderContenuOn: html ]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "with:", "class:", "div", "onClick:", "fadeToggle", "asJQuery", "renderContenuOn:"]
}),
$globals.FdJWidgetLegende);

$core.addMethod(
$core.method({
selector: "renderTShirtOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("tshirt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_("H/F");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($3)._with_("taille");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $recv($recv(html)._div())._with_("lsf?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$4=$recv($1)._class_("tshirt homme");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTShirtOn:",{html:html},$globals.FdJWidgetLegende)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTShirtOn: html\x0a\x09html div class: 'tshirt';\x0a\x09\x09with: [\x0a\x09\x09\x09html div with: 'H/F'.\x0a\x09\x09\x09html div with: 'taille'.\x0a\x09\x09\x09html div with: 'lsf?' ];\x0a\x09\x09class: 'tshirt homme'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:"]
}),
$globals.FdJWidgetLegende);



$core.addClass('FdJWidgetSelectionneur', $globals.FdJWidget, ['liste', 'input', 'suite'], 'Benevoles');
$core.addMethod(
$core.method({
selector: "defiltre",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@input"])._asJQuery())._val_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defiltre",{},$globals.FdJWidgetSelectionneur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defiltre\x0a\x09input asJQuery val: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val:", "asJQuery"]
}),
$globals.FdJWidgetSelectionneur);

$core.addMethod(
$core.method({
selector: "filtre",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@input"])._asJQuery())._val();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filtre",{},$globals.FdJWidgetSelectionneur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "filtre\x0a\x09^ input asJQuery val",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val", "asJQuery"]
}),
$globals.FdJWidgetSelectionneur);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
function $FdJWidgetBenevoles(){return $globals.FdJWidgetBenevoles||(typeof FdJWidgetBenevoles=="undefined"?nil:FdJWidgetBenevoles)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.FdJWidgetSelectionneur.superclass.fn.prototype._renderOn_.apply($recv(self), [html]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["renderOn:"]=1;
//>>excludeEnd("ctx");
$recv(self["@div"])._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@input"]=$recv(html)._input();
self["@input"];
$recv(self["@input"])._onKeyUp_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@presentateur"])._filtre_(self._filtre());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("menu");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("suite");
$4=$recv($3)._with_("...");
self["@suite"]=$4;
self["@suite"];
self["@liste"]=$recv($FdJWidgetBenevoles())._new();
self["@liste"];
$recv(self["@liste"])._presentateur_(self["@presentateur"]);
return $recv(self["@liste"])._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.FdJWidgetSelectionneur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.\x0a\x09div with: [\x0a\x09\x09input := html input.\x0a\x09\x09input onKeyUp: [ presentateur filtre: (self filtre) ].\x0a\x09\x09\x0a\x09\x09html div class: 'menu'; with: [\x0a\x09\x09\x09suite := html div class: 'suite'; with: '...'.\x0a\x09\x09\x09\x0a\x09\x09\x09liste := FdJWidgetBenevoles new.\x0a\x09\x09\x09liste presentateur: presentateur.\x0a\x09\x09\x09liste renderOn: html\x0a\x09\x09\x09]\x0a\x09\x09]",
referencedClasses: ["FdJWidgetBenevoles"],
//>>excludeEnd("ide");
messageSends: ["renderOn:", "with:", "input", "onKeyUp:", "filtre:", "filtre", "class:", "div", "new", "presentateur:"]
}),
$globals.FdJWidgetSelectionneur);

$core.addMethod(
$core.method({
selector: "selectionne:",
protocol: 'as yet unclassified',
fn: function (benevoles){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@suite"])._asJQuery())._show_((400));
$recv(self["@liste"])._associe_(benevoles);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionne:",{benevoles:benevoles},$globals.FdJWidgetSelectionneur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["benevoles"],
source: "selectionne: benevoles\x0a\x09suite asJQuery show: 400.\x0a\x09liste associe: benevoles",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show:", "asJQuery", "associe:"]
}),
$globals.FdJWidgetSelectionneur);

$core.addMethod(
$core.method({
selector: "selectionne:max:",
protocol: 'as yet unclassified',
fn: function (benevoles,max){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if($core.assert(max)){
$1=$recv(self["@suite"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._fadeIn();
} else {
$recv($recv(self["@suite"])._asJQuery())._fadeOut();
};
$recv(self["@liste"])._associe_(benevoles);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectionne:max:",{benevoles:benevoles,max:max},$globals.FdJWidgetSelectionneur)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["benevoles", "max"],
source: "selectionne: benevoles max: max\x0a\x09max\x09ifTrue:  [ suite asJQuery fadeIn ]\x0a\x09\x09ifFalse: [ suite asJQuery fadeOut ].\x0a\x09liste associe: benevoles",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "fadeIn", "asJQuery", "fadeOut", "associe:"]
}),
$globals.FdJWidgetSelectionneur);


$core.addMethod(
$core.method({
selector: "indexOfSubString:",
protocol: '*Benevoles',
fn: function (subString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.indexOf(subString) + 1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOfSubString:",{subString:subString},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["subString"],
source: "indexOfSubString: subString\x0a\x09<return self.indexOf(subString) + 1>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "remplaceAvec:",
protocol: '*Benevoles',
fn: function (dict){
var self=this;
var s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
s=self._asLowercase();
$recv(dict)._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
s=$recv(s)._replace_with_(k,v);
return s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=s;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remplaceAvec:",{dict:dict,s:s},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dict"],
source: "remplaceAvec: dict\x0a\x09| s |\x0a  \x09s := self asLowercase.\x0a\x09dict keysAndValuesDo: [ :k :v |\x0a\x09\x09s := s replace: k with: v\x0a\x09].\x0a\x09^ s",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asLowercase", "keysAndValuesDo:", "replace:with:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "sansAccent",
protocol: '*Benevoles',
fn: function (){
var self=this;
var s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
s=self._asLowercase();
$recv($globals.HashedCollection._newFromPairs_(["[àáâãäå]","a","æ","ae","ç","c","[èéêë]","e","[ìíîï]","i","ñ","n","[òóôõö]","o","œ","oe","[ùúûü]","u","[ýÿ]","y"," ",""]))._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
s=$recv(s)._replace_with_(k,v);
return s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=s;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sansAccent",{s:s},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sansAccent\x0a\x09| s |\x0a  \x09s := self asLowercase.\x0a\x09#{ '[àáâãäå]' -> 'a'.\x0a\x09   'æ' -> 'ae'.\x0a\x09   'ç' -> 'c'.\x0a\x09   '[èéêë]' -> 'e'.\x0a\x09   '[ìíîï]' -> 'i'.\x0a\x09   'ñ' -> 'n'.\x0a\x09   '[òóôõö]' -> 'o'.\x0a\x09   'œ' -> 'oe'.\x0a\x09   '[ùúûü]' -> 'u'.\x0a\x09   '[ýÿ]' -> 'y'.\x0a\x09   ' ' -> ''\x0a\x09} keysAndValuesDo: [ :k :v |\x0a\x09\x09s := s replace: k with: v\x0a\x09].\x0a\x09^ s",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asLowercase", "keysAndValuesDo:", "replace:with:"]
}),
$globals.String);

});
