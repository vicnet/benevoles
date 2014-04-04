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


smalltalk.addClass('FdJApplication', globals.Object, ['benevoles', 'selectionneur', 'distributeur'], 'Benevoles');
smalltalk.addMethod(
smalltalk.method({
selector: "filtre:",
protocol: 'initialization',
fn: function (texte){
var self=this;
var selectionnes;
return smalltalk.withContext(function($ctx1) { 
selectionnes=_st(self["@benevoles"])._select_((function(b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(b)._estDisponible()).__and(_st(_st(b)._nom())._includesSubString_(texte));
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
_st(self["@selectionneur"])._selectionne_(selectionnes);
return self}, function($ctx1) {$ctx1.fill(self,"filtre:",{texte:texte,selectionnes:selectionnes},globals.FdJApplication)})},
args: ["texte"],
source: "filtre: texte\x0a\x09| selectionnes |\x0a\x09selectionnes := benevoles select: [ :b | b estDisponible & (b nom includesSubString: texte)].\x0a\x09selectionneur selectionne: selectionnes",
messageSends: ["select:", "&", "estDisponible", "includesSubString:", "nom", "selectionne:"],
referencedClasses: []
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var liste;
function $FdJBenevole(){return globals.FdJBenevole||(typeof FdJBenevole=="undefined"?nil:FdJBenevole)}
function $FdJWidgetSelectionneur(){return globals.FdJWidgetSelectionneur||(typeof FdJWidgetSelectionneur=="undefined"?nil:FdJWidgetSelectionneur)}
function $FdJWidgetBenevoles(){return globals.FdJWidgetBenevoles||(typeof FdJWidgetBenevoles=="undefined"?nil:FdJWidgetBenevoles)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$6;
globals.FdJApplication.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@benevoles"]=_st($FdJBenevole())._exemples();
$1=_st($FdJWidgetSelectionneur())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._presentateur_(self);
$ctx1.sendIdx["presentateur:"]=1;
$3=$1;
$4="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._appendToJQuery_($4);
$ctx1.sendIdx["appendToJQuery:"]=1;
self["@selectionneur"]=$2;
$5=_st($FdJWidgetBenevoles())._new();
_st($5)._presentateur_(self);
$6=_st($5)._appendToJQuery_("body"._asJQuery());
self["@distributeur"]=$6;
self._filtre_("OS");
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{liste:liste},globals.FdJApplication)})},
args: [],
source: "initialize\x0a\x09| liste |\x0a\x09super initialize.\x0a\x09\x0a\x09benevoles := FdJBenevole exemples.\x0a\x09\x0a\x09selectionneur := FdJWidgetSelectionneur\x09new\x0a\x09\x09presentateur: self;\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09distributeur := FdJWidgetBenevoles new\x0a\x09\x09presentateur: self;\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x0a\x09self filtre: 'OS'",
messageSends: ["initialize", "exemples", "presentateur:", "new", "appendToJQuery:", "asJQuery", "filtre:"],
referencedClasses: ["FdJBenevole", "FdJWidgetSelectionneur", "FdJWidgetBenevoles"]
}),
globals.FdJApplication);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionne:",
protocol: 'initialization',
fn: function (benevole){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(benevole)._estDisponible();
if(smalltalk.assert($1)){
_st(benevole)._encours();
self._filtre_(_st(self["@selectionneur"])._filtre());
_st(self["@distributeur"])._ajoute_(benevole);
};
return self}, function($ctx1) {$ctx1.fill(self,"selectionne:",{benevole:benevole},globals.FdJApplication)})},
args: ["benevole"],
source: "selectionne: benevole\x0a\x09benevole estDisponible ifTrue: [\x0a\x09\x09benevole encours.\x0a\x09\x09self filtre: (selectionneur filtre).\x0a\x09\x09distributeur ajoute: benevole ]",
messageSends: ["ifTrue:", "estDisponible", "encours", "filtre:", "filtre", "ajoute:"],
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
source: "termine\x0a\x09selectionneur supprime.\x0a\x09distributeur supprime",
messageSends: ["supprime"],
referencedClasses: []
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


smalltalk.addClass('FdJBenevole', globals.Object, ['nom', 'prenom', 'assoc', 'tshirt', 'etat'], 'Benevoles');
globals.FdJBenevole.comment="- tshirt: un TShirt\x0a- etat: pas encore venu, en cours de traitement, terminé";
smalltalk.addMethod(
smalltalk.method({
selector: "announceur",
protocol: 'accessing',
fn: function (){
var self=this;
function $FdJAnnounceur(){return globals.FdJAnnounceur||(typeof FdJAnnounceur=="undefined"?nil:FdJAnnounceur)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($FdJAnnounceur())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announceur",{},globals.FdJBenevole)})},
args: [],
source: "announceur\x0a\x09^ FdJAnnounceur current",
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
selector: "distribue",
protocol: 'accessing',
fn: function (){
var self=this;
self["@etat"]="distribue";
return self},
args: [],
source: "distribue\x0a\x09etat := #distribue",
messageSends: [],
referencedClasses: []
}),
globals.FdJBenevole);

smalltalk.addMethod(
smalltalk.method({
selector: "encours",
protocol: 'accessing',
fn: function (){
var self=this;
self["@etat"]="encours";
return self},
args: [],
source: "encours\x0a\x09etat := #encours",
messageSends: [],
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


smalltalk.addClass('FdJStock', globals.Object, ['tshirts'], 'Benevoles');


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
_st(self["@widgets"])._do_((function(b){
return smalltalk.withContext(function($ctx2) {
return _st(b)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({b:b},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBenevolesOn:",{html:html},globals.FdJWidgetBenevoles)})},
args: ["html"],
source: "renderBenevolesOn: html\x0a\x09widgets do: [ :b | b renderOn: html ]",
messageSends: ["do:", "renderOn:"],
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
