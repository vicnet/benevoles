Smalltalk createPackage: 'Benevoles'!
Object subclass: #FdJAnnonce
	instanceVariableNames: ''
	package: 'Benevoles'!

FdJAnnonce subclass: #FdJBenevoleChangeEtat
	instanceVariableNames: 'benevole'
	package: 'Benevoles'!

!FdJBenevoleChangeEtat methodsFor: 'accessing'!

benevole
	^ benevole
!

benevole: anObject
	benevole := anObject
! !

Announcer subclass: #FdJAnnonceur
	instanceVariableNames: ''
	package: 'Benevoles'!

FdJAnnonceur class instanceVariableNames: 'current'!

!FdJAnnonceur class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := super new ]
! !

!FdJAnnonceur class methodsFor: 'instance creation'!

new
	self shouldNotImplement
! !

Object subclass: #FdJApplication
	instanceVariableNames: 'benevoles selectionneur distributeur importeur'
	package: 'Benevoles'!

!FdJApplication methodsFor: 'initialization'!

charge
	"Charge le modele (ou créé un exemple)"
	FdJStockage charge: FdJAssociations sinon: [ FdJAssociations exemple ].
	benevoles := FdJStockage charge: FdJBenevoles sinon: [ FdJBenevoles exemple ]
!

filtre: texte
	| max liste |
	max := 1.
	liste := benevoles filtre: texte max: max+1.
	(liste size <= max)
		ifTrue: [
			selectionneur selectionne: liste max: false ]
		ifFalse: [
			liste removeLast.
			selectionneur selectionne: liste max: true ]
!

importe: texte
	Transcript show: texte; cr
!

initialize
	| barre |
	'body' asJQuery children remove.
	super initialize.
	
	"Modele"
	self charge.
	
	"Widgets"
	barre := FdJWidgetBarre new
		presentateur: self.

	selectionneur := FdJWidgetSelectionneur	new.
	barre ajoute: selectionneur.
	
	importeur := FdJWidgetImporteur new.
	barre ajoute: importeur.

	barre appendToJQuery: 'body' asJQuery.

	distributeur := FdJWidgetBenevoles new
		presentateur: self;
		appendToJQuery: 'body' asJQuery.

	FdJAnnonceur current on: FdJBenevoleChangeEtat do: [ :evt |
		self onBenevoleChangeEtat: evt benevole ].

	"init"
	distributeur associe: (benevoles selectionnes)
!

onBenevoleChangeEtat: benevole
	self filtre: (selectionneur filtre).
	benevole estEncours ifTrue: [
		selectionneur defiltre.
		distributeur ajoute: benevole ].
	benevole estDistribue ifTrue: [
		distributeur supprime: benevole ].
	self sauve
!

sauve
	FdJStockage sauve: benevoles
!

selectionne: benevole
	benevole estDisponible ifTrue: [
		^ benevole encours ].
	benevole estEncours ifTrue: [
		^ benevole distribue ]
!

termine
	selectionneur supprime.
	distributeur supprime
	"'body' asJQuery children remove"
! !

Object subclass: #FdJAssociation
	instanceVariableNames: 'nom logo'
	package: 'Benevoles'!

!FdJAssociation methodsFor: 'accessing'!

fromJSON: variables
	nom := variables at: 'nom'.
	"logo := variables at: 'logo'"
!

logo
	^ logo
!

logo: anObject
	logo := anObject
!

nom
	^ nom
!

nom: anObject
	nom := anObject
! !

!FdJAssociation class methodsFor: 'exemples'!

exemple
	"Genère un échantillon"
	^ self new nom: 'Joc-ere'; yourself
! !

Object subclass: #FdJAssociations
	instanceVariableNames: 'liste'
	package: 'Benevoles'!

!FdJAssociations methodsFor: 'as yet unclassified'!

associations: desAssociations
	liste := HashedCollection new.
	desAssociations do: [ :a |
		liste at: a nom put: a ]
!

at: nom
	^ liste at: nom ifAbsent: [ nil ]
!

fromJSON: variables
	liste := (variables at: 'liste') collect: [ :v |
			FdJAssociation new fromJSON: v
		]
! !

FdJAssociations class instanceVariableNames: 'instance'!

!FdJAssociations class methodsFor: 'exemples'!

exemple
	^ self instance
		associations: (Array with: FdJAssociation exemple)
!

instance
	instance ifNil: [ instance := self new ].
	^ instance
! !

Object subclass: #FdJBenevole
	instanceVariableNames: 'nom prenom assoc tshirt etat'
	package: 'Benevoles'!
!FdJBenevole commentStamp!
- tshirt: un TShirt
- etat: pas encore venu, en cours de traitement, terminé!

!FdJBenevole methodsFor: 'accessing'!

annonce
	self annonceur announce: (FdJBenevoleChangeEtat new benevole: self; yourself)
!

annonceur
	^ FdJAnnonceur current
!

asJSON
	| variables |
	variables := HashedCollection new.
	variables at: 'nom' put: nom.
	variables at: 'prenom' put: prenom.
	etat ifNotNil: [ variables at: 'etat' put: etat ].
	variables at: 'assoc' put: assoc nom.
"	variables at: 'tshirt' put: ."
	^ variables
!

association
	^ assoc
!

association: uneAssoc
	assoc := uneAssoc
!

distribue
	etat := #distribue.
	self annonce
!

encours
	etat := #encours.
	self annonce
!

estDisponible
	^ etat==nil
!

estDistribue
	^ etat==#distribue
!

estEncours
	^ etat==#encours
!

fromJSON: variables
	nom := variables at: 'nom'.
	prenom := variables at: 'prenom'.
	etat := variables at: 'etat'
		ifPresent: [ :v | v asSymbol ]
		ifAbsent: [ nil ].
	assoc := variables at: 'assoc'
		ifPresent: [ :v | FdJAssociations instance at: v ]
		ifAbsent: [ nil ].
	"tshirt :="
!

nom
	^ nom
!

nom: chaine
	nom := chaine
!

prenom
	^ prenom
!

prenom: chaine
	prenom := chaine
! !

!FdJBenevole class methodsFor: 'exemples'!

exemple
	^ self new nom: 'OSELE';
			 prenom: 'Vincent';
			 association: (FdJAssociation exemple);
			 yourself
!

exemples
	| benevoles association |
	benevoles := Array new.
	association := FdJAssociation exemple.
	benevoles add: self exemple.
	benevoles add: (self new nom: 'DUPOND';
			 prenom: 'Gérard';
			 association: association).
	benevoles add: (self new nom: 'MEILLEIS';
			 prenom: 'George';
			 association: association).
	^ benevoles
! !

Object subclass: #FdJBenevoles
	instanceVariableNames: 'liste'
	package: 'Benevoles'!

!FdJBenevoles methodsFor: 'as yet unclassified'!

benevoles
	^ liste
!

benevoles: desBenevoles
	liste := desBenevoles
!

filtre: texte max: max
	| minus cpt |
	texte isEmpty ifTrue: [ ^  #() ].
	cpt := max.
	"teste le nom"
	minus := texte asLowercase.
	^ self filtre: minus max: max avec: [ :b :m |
		b nom asLowercase includesSubString: m ]
!

filtre: texte max: max avec: block
	| cpt |
	cpt := max.
	"teste le block"
	^ liste select: [ :b |
		b estDisponible & (cpt>0) & (block value: b value: texte)
			ifTrue: [ cpt := cpt-1. true]
			ifFalse: [ false ]
		]
!

fromJSON: variables
	liste := (variables at: 'liste') collect: [ :v |
			FdJBenevole new fromJSON: v
		]
!

selectionnes
	^ liste select: [ :b | b estEncours ]
! !

!FdJBenevoles class methodsFor: 'exemples'!

exemple
	^ self new benevoles: FdJBenevole exemples
! !

Object subclass: #FdJStock
	instanceVariableNames: 'tshirts'
	package: 'Benevoles'!

Object subclass: #FdJStockage
	instanceVariableNames: ''
	package: 'Benevoles'!

!FdJStockage methodsFor: 'as yet unclassified'!

charge: entite
	^ self charge: entite depuis: (self jsonPour: entite)
!

charge: entite depuis: json
	|objet|
	objet := entite isClass
		ifTrue: [ entite new ]
		ifFalse: [ entite ].
	^ objet fromJSON: json
!

charge: entite sinon: block
	(self jsonPour: entite)
		ifNil: [
			^ block value ]
		ifNotNil: [:s |
			^ self charge: entite depuis: s ]
!

existe: objet
	^ (sessionStorage getItem: (self nomPour: objet)) isNil
!

jsonPour: objet
	(self stockagePour: objet)
		ifNil: [ ^ nil ]
		ifNotNil: [ :s |
			^ self variablesPour: (JSON parse: s) ]
!

nomPour: entite
	entite isClass ifTrue: [ ^ entite name ].
	entite isString ifTrue: [ ^ entite ].
	^ entite class name
!

sauve: objet
	sessionStorage
		setItem: (self nomPour: objet)
		value: objet asJSONString
!

stockagePour: objet
	"objet peut être une classe, une chaine ou un objet"
	^ sessionStorage getItem: (self nomPour: objet)
!

variablesPour: json
	| variables |
	(json class == JSObjectProxy) ifTrue: [
		variables := HashedCollection new.
		json keysAndValuesDo: [ :k :v |
			variables at: k put: (self variablesPour: v) ].
		^ variables
		].
	(json isKindOf: Array) ifTrue: [
		^ json collect: [ :o |
			self variablesPour: o ]
			].
	^ json
!

vide
	sessionStorage clear
! !

FdJStockage class instanceVariableNames: 'instance'!

!FdJStockage class methodsFor: 'as yet unclassified'!

charge: entite
	^ self instance charge: entite
!

charge: entite sinon: block
	^ self instance charge: entite sinon: block
!

instance
	instance ifNil: [ instance := self new ].
	^ instance
!

sauve: objet
	^ self instance sauve: objet
!

vide
	^ self instance vide
! !

Object subclass: #FdJTShirt
	instanceVariableNames: 'type taille spec'
	package: 'Benevoles'!
!FdJTShirt commentStamp!
type: H(omme) ou F(emme)
taille: XS, S, M...
spec: vide, lsf, dv...!

!FdJTShirt methodsFor: 'accessing'!

spec
	^ spec
!

spec: anObject
	spec := anObject
!

taille
	^ taille
!

taille: anObject
	taille := anObject
!

type
	^ type
!

type: anObject
	type := anObject
! !

!FdJTShirt class methodsFor: 'as yet unclassified'!

h3xl
	^ self new type: #H; taille: #X3L; yourself
!

hl
	^ self new type: #H; taille: #L; yourself
!

hm
	^ self new type: #H; taille: #M; yourself
!

hs
	^ self new type: #H; taille: #S; yourself
!

hxl
	^ self new type: #H; taille: #XL; yourself
!

hxs
	^ self new type: #H; taille: #XS; yourself
!

hxxl
	^ self new type: #H; taille: #XXL; yourself
! !

Widget subclass: #FdJWidget
	instanceVariableNames: 'presentateur widgets div'
	package: 'Benevoles'!

!FdJWidget methodsFor: 'as yet unclassified'!

ajoute: unWidget
	unWidget presentateur: presentateur.
	widgets add: unWidget
!

initialize
	super initialize.

	widgets := #()
!

nom
	^ (self class asString trimLeft: 'FdJWidget') asLowercase
!

presentateur: unPresentateur
	presentateur := unPresentateur
!

renderOn: html
	div := html div class: self nom.
	div with: [ self renderWidgetsOn: html]
!

renderWidgetsOn: html
	widgets do: [ :b | b renderOn: html ]
!

supprime
	div ifNotNil: [ div asJQuery remove ].
	div := nil
!

supprime: unWidget
	"suppression html"
	unWidget supprime.
	"suppression liste"
	widgets remove: unWidget
!

vide
	"supprime les widgets mais laisse la racine"
	widgets do: [ :w | w supprime ].
	widgets := #()
! !

FdJWidget subclass: #FdJWidgetBarre
	instanceVariableNames: ''
	package: 'Benevoles'!

FdJWidget subclass: #FdJWidgetBenevole
	instanceVariableNames: 'benevole'
	package: 'Benevoles'!

!FdJWidgetBenevole methodsFor: 'rendering'!

associe: unBenevole
	benevole := unBenevole
!

benevole
	^ benevole
!

renderAssociationOn: html
	html div class: 'association';
		with: benevole association nom
!

renderIdentiteOn: html
	html div class: 'identite';
		with: [ html div class: 'prenom'; with: benevole prenom.
				html div class: 'nom'; with: benevole nom]
!

renderOn: html
	super renderOn: html.
	div with: [ self renderIdentiteOn: html.
				self renderAssociationOn: html].
	div onClick: [ presentateur selectionne: benevole ]
! !

FdJWidget subclass: #FdJWidgetBenevoles
	instanceVariableNames: ''
	package: 'Benevoles'!

!FdJWidgetBenevoles methodsFor: 'as yet unclassified'!

ajoute: unBenevole
	self creeWidget: unBenevole.
	self update
!

associe: desBenevoles
	"liste de modele Benevole"
	self vide.
	desBenevoles do: [ :b | self creeWidget: b ].
	self update
!

creeWidget: unBenevole
	super ajoute:
		(FdJWidgetBenevole new associe: unBenevole)
!

renderBenevolesOn: html
	self renderWidgetsOn: html
!

supprime: unBenevole
	super supprime: (
		widgets detect: [ :w | w benevole == unBenevole ] ifNone: [ ^ self ])
!

update
	div contents: [ :html | div with: [ self renderBenevolesOn: html ] ]
! !

FdJWidget subclass: #FdJWidgetImporteur
	instanceVariableNames: 'input dlg'
	package: 'Benevoles'!

!FdJWidgetImporteur methodsFor: 'as yet unclassified'!

input
	^ input asJQuery val
!

renderDlgOn: html
	dlg := html div
		class: 'dialog';
		with: [
			input := html textarea.
			html div class: 'actions';
				 with: [
					 html button with: 'import';
					 	  onClick: [
							  presentateur importe: self input.
							  dlg asJQuery fadeOut
							  ]
					 ]
		]
!

renderOn: html
	super renderOn: html.
	div with: [
		self renderDlgOn: html.
		html button
			class: 'boutton';
			with: 'I';
			onClick: [ dlg asJQuery fadeToggle ]
		]
! !

FdJWidget subclass: #FdJWidgetSelectionneur
	instanceVariableNames: 'liste input suite'
	package: 'Benevoles'!

!FdJWidgetSelectionneur methodsFor: 'as yet unclassified'!

defiltre
	input asJQuery val: ''
!

filtre
	^ input asJQuery val
!

renderOn: html
	super renderOn: html.
	div with: [
		input := html input.
		input onKeyUp: [ presentateur filtre: (self filtre) ].
		
		liste := FdJWidgetBenevoles new.
		liste presentateur: presentateur.
		liste renderOn: html.

		suite := html div class: 'suite'; with: '...']
!

selectionne: benevoles
	suite asJQuery show: 400.
	liste associe: benevoles
!

selectionne: benevoles max: max
	max	ifTrue:  [ suite asJQuery fadeIn ]
		ifFalse: [ suite asJQuery fadeOut ].
	liste associe: benevoles
! !

