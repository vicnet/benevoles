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
	instanceVariableNames: 'benevoles selectionneur distributeur importeur historique'
	package: 'Benevoles'!

!FdJApplication methodsFor: 'initialization'!

charge
	"Charge le modele (ou créé un exemple)"
	historique := FdJStockage
		charge: FdJHistorique
		sinon: [ FdJHistorique new ].
	FdJStockage
		charge: FdJAssociations instance
		sinon: [ FdJAssociations exemple ].
	benevoles := FdJStockage
		charge: FdJBenevoles
		sinon: [ FdJBenevoles exemple ]
!

filtre: texte
	| max liste |
	max := 4.
	liste := benevoles filtre: texte max: max+1.
	(liste size <= max)
		ifTrue: [
			selectionneur selectionne: liste max: false ]
		ifFalse: [
			liste removeLast.
			selectionneur selectionne: liste max: true ]
!

importe: texte
	| results fields rows imp |
	imp := FdJImporteur new.
	results := imp importe: texte.

	fields := results fields.
	rows := results rows.

	(fields includes: 'Taille')
		ifTrue: [ ^ self importeTShirts: rows ].
	
	(fields includes: 'Association')
		ifTrue: [
			imp importeAssociations: rows.
			FdJStockage sauve: FdJAssociations instance ].

	benevoles ajouteUnique: (imp importeBenevoles: rows).
	self sauve.
!

importeTShirts: rows
	| tshirts key |
	tshirts := FdJImporteur new importeTShirts: rows.
	benevoles benevoles do: [ :b |
		key := (b nom, ' ', b prenom) asLowercase.
		tshirts at: key ifPresent: [ :t |
				b tshirt: (FdJTShirt at: t).
				tshirts remove: key
			]
		].
	tshirts ifNotEmpty: [ Transcript show: 'TShirts non importés:'; cr ].
	tshirts keys do: [ :b | Transcript show: ('- ', b);cr ].
	self sauve
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
		
	FdJWidgetLegende new
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

reinit
	benevoles reinit.
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
!

vide
	FdJStockage vide.
	benevoles vide
! !

FdJApplication class instanceVariableNames: 'accents'!

!FdJApplication class methodsFor: 'as yet unclassified'!

accents
	^ accents ifNil: [
		accents := #{
			'[àáâãäå]' -> 'a'.
	    	'æ' -> 'ae'.
	    	'ç' -> 'c'.
	    	'[èéêë]' -> 'e'.
	    	'[ìíîï]' -> 'i'.
	    	'ñ' -> 'n'.
	    	'[òóôõö]' -> 'o'.
	    	'œ' -> 'oe'.
	    	'[ùúûü]' -> 'u'.
	    	'[ýÿ]' -> 'y'.
	    	' ' -> ''.
			'-' -> ''
		}
	]
! !

Object subclass: #FdJAssociation
	instanceVariableNames: 'nom logo'
	package: 'Benevoles'!

!FdJAssociation methodsFor: 'accessing'!

asJSON
	^ #{ 'nom'->nom }
!

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
!

nomSansAccent
	nom ifNil: [ ^ '' ].
	^ nom remplaceAvec: FdJApplication accents
! !

!FdJAssociation class methodsFor: 'exemples'!

exemple
	"Genère un échantillon"
	^ self new nom: 'Joc-ere'
!

festival
	^ self new nom: 'Festival'
! !

Object subclass: #FdJAssociations
	instanceVariableNames: 'liste'
	package: 'Benevoles'!

!FdJAssociations methodsFor: 'as yet unclassified'!

ajoute: uneAssociation
	| association |
	association := uneAssociation isString
		ifTrue: [ FdJAssociation new nom: uneAssociation ]
		ifFalse: [ uneAssociation ].
	liste at: association nomSansAccent put: association
!

associations: desAssociations
	liste := HashedCollection new.
	desAssociations do: [ :a | self ajoute: a ]
!

at: nom
	^ liste
		at: (nom remplaceAvec: FdJApplication accents)
		ifAbsent: [ nil ]
!

festival
	^ self at: 'Festival'
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
		associations: (Array with: FdJAssociation festival with: FdJAssociation exemple)
!

instance
	^ instance ifNil: [ instance := self new ]
! !

Object subclass: #FdJBenevole
	instanceVariableNames: 'nom prenom assoc tshirt etat inscrit'
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
	tshirt ifNotNil: [ variables at: 'tshirt' put: tshirt id ].
	variables at: 'inscrit' put: inscrit.
	^ variables
!

association
	^ assoc
!

association: uneAssoc
	assoc := uneAssoc
!

correspond: unBenevole
	"Retourne vrai si nom sans accent correspond"
	^ (self indexDe: unBenevole identiteSansAccent) = 1
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

estInscrit
	^ inscrit
!

fromJSON: variables
	nom := variables at: 'nom'.
	prenom := variables at: 'prenom'.
	etat := variables at: 'etat'
		ifPresent: [ :v | v asSymbol ]
		ifAbsent: [ nil ].
	assoc := variables at: 'assoc'
		ifPresent: [ :v | FdJAssociations instance at: v ]
		ifAbsent: [ FdJAssociations instance festival ].
	tshirt := variables at: 'tshirt'
		ifPresent: [ :v | FdJTShirt at: v ]
		ifAbsent: [ nil ].
	inscrit := variables at: 'inscrit'
		ifAbsent: [ true ]
!

identiteSansAccent
	nom ifNil: [ ^ '' ].
	^ (nom, ' ', prenom) remplaceAvec: FdJApplication accents
!

indexDe: chaine
	"Retourne l'index de la chaine dans le nom sans accent, 0 si chaine pas trouvée, "
	^ (self identiteSansAccent) indexOfSubString: chaine
!

indexDes: chaines
	| posPrenom posNom |
	"Retourne l'index des chaines dans le nom sans accent, 0 si chaines pas trouvée, "
	"si chaine seule, comme indexDe"
	(chaines size = 1)
		ifTrue: [ ^ self indexDe: (chaines at: 1) ].
	"sinon test du prenom d'abord"
	posPrenom := (self prenomSansAccent) indexOfSubString: (chaines at: 2).
	(posPrenom = 0) ifTrue: [ ^ 0 ].
	"si prenom ok, test le nom"
	posNom := (self nomSansAccent) indexOfSubString: (chaines at: 1).
	(posNom = 0) ifTrue: [ ^ 0 ].
	"et renvoie la position dans le nom augmenté de la position dans le prenom"
	^ (20*posNom) + posPrenom
!

inscrit: estInscrit
	inscrit := estInscrit
!

nom
	^ nom
!

nom: chaine
	nom := chaine
!

nomSansAccent
	nom ifNil: [ ^ '' ].
	^ nom remplaceAvec: FdJApplication accents
!

normalise
	"passe le nom en majuscule et le prénom avec la 1ere lettre en majuscule"
	nom := nom asUppercase.
	prenom := prenom capitalized
!

prenom
	^ prenom
!

prenom: chaine
	prenom := chaine
!

prenomSansAccent
	prenom ifNil: [ ^ '' ].
	^ prenom remplaceAvec: FdJApplication accents
!

reinit
	etat := nil
!

tshirt
	^ tshirt
!

tshirt: unTShirt
	tshirt := unTShirt
! !

FdJBenevole class instanceVariableNames: 'accents'!

!FdJBenevole class methodsFor: 'exemples'!

exemple
	^ self new nom: 'OSELE';
			 prenom: 'Vincent';
			 association: (FdJAssociation exemple);
			 tshirt: (FdJTShirt at: 'h-m');
			 inscrit: true;
			 yourself
!

exemples
	| benevoles association |
	benevoles := Array new.
	FdJAssociations exemple.
	association := FdJAssociation exemple.
	benevoles add: self exemple.
	benevoles add: (self new nom: 'DUPOND';
			 prenom: 'Gérard';
			 association: association;
			 inscrit: false).
	benevoles add: (self new nom: 'MEILLEIS';
			 prenom: 'George';
			 association: FdJAssociations instance festival;
			 inscrit: true).
	^ benevoles
! !

Object subclass: #FdJBenevoles
	instanceVariableNames: 'liste'
	package: 'Benevoles'!

!FdJBenevoles methodsFor: 'as yet unclassified'!

ajoute: unBenevole
	liste add: unBenevole
!

ajouteTous: desBenevoles
	liste addAll: desBenevoles
!

ajouteUnique: desBenevoles
	Transcript show: 'Benevoles déjà existants:'; cr.
	liste addAll:
		(desBenevoles
				select: [ :b |
					(self contient: b)
						ifTrue: [ Transcript show: '- ', b nom, ' ', b prenom; cr. false ]
						ifFalse: [ true ]
					]
				thenCollect: [ :b | b normalise ])
!

benevoles
	^ liste
!

benevoles: desBenevoles
	liste := desBenevoles
!

contient: unBenevole
	^ liste anySatisfy: [ :b | b correspond: unBenevole ]
!

filtre: texte max: max
	| parties selection result |
	texte isEmpty ifTrue: [ ^ #() ].
	"teste le nom"
	parties := (texte tokenize: ' ') collect: [ :p | p sansAccent ].
	selection := liste collect: [ :b |
		{ (b indexDes: parties). b }
	].
	selection sort: [ :a :b | (a at: 1) <= (b at: 1) ].
	result := #().
	selection do: [ :s |
		((s at: 1) > 0) & ((s at: 2) estDisponible) ifTrue: [
			result add: (s at: 2).
			(result size >= max) ifTrue: [ ^ result ]
			]
		].
	^ result
!

fromJSON: variables
	liste := (variables at: 'liste') collect: [ :v |
			FdJBenevole new fromJSON: v
		]
!

reinit
	liste do: [ :b | b reinit ]
!

selectionnes
	^ liste select: [ :b | b estEncours ]
!

vide
	liste := #()
! !

!FdJBenevoles class methodsFor: 'exemples'!

exemple
	^ self new benevoles: FdJBenevole exemples
! !

Object subclass: #FdJHistorique
	instanceVariableNames: 'liste'
	package: 'Benevoles'!

!FdJHistorique methodsFor: 'as yet unclassified'!

ajoute: texte
	liste add: #{
			'date' -> Date now asString.
			'evennement' -> texte
		}.
	self sauve
!

fromJSON: variables
	liste := variables at: 'liste'.
!

initialize
	liste := #().
	FdJAnnonceur current
		on: FdJBenevoleChangeEtat
		do: [ :evt |
			self onBenevoleChangeEtat: evt benevole ]
!

onBenevoleChangeEtat: benevole
	| nom |
	nom := benevole nom, ' ', benevole prenom.
	benevole estEncours ifTrue: [ 
		self ajoute: 'Debut distribution ''', nom ].
	benevole estDistribue ifTrue: [
		self ajoute: 'Fin distribution ''', nom ]
!

sauve
	FdJStockage sauve: self
! !

Object subclass: #FdJImporteur
	instanceVariableNames: ''
	package: 'Benevoles'!

!FdJImporteur methodsFor: 'as yet unclassified'!

importe: texte
	| tous fields rows |
	tous := jQuery
		parse: texte
		config: #{ 'delimiter'->','. 'header'->true. 'dynamicTyping'->false }.
	^ tous results
!

importeAssociation: row
	row at: 'Association' ifPresent: [ :assoc |
		(FdJAssociations instance at: assoc) ifNil: [
			FdJAssociations instance ajoute: assoc
			]
		]
!

importeAssociations: rows
	rows do: [ :row | self importeAssociation: row ]
!

importeBenevole: row
	^ FdJStockage charge: FdJBenevole depuis: #{
		'nom' -> (row at: 'Nom').
		'prenom' -> (row at: 'Prénom').
		'assoc' -> (row at: 'Association' ifAbsent: [ 'Festival'])
		}
!

importeBenevoles: rows
	^ rows collect: [ :row | self importeBenevole: row ]
!

importeTShirt: row
	^ ((row at: 'Nom') asLowercase)
		->
	  (((row at: 'Cintré') ifEmpty: [ 'h' ] ifNotEmpty: [ 'f' ] )
		, '-', ((row at: 'Taille') asLowercase)
		, ((row at: 'LSF') ifNotEmpty: [ '-lsf' ])
		)
!

importeTShirts: rows
	^ HashedCollection from:
		(rows collect: [ :row | self importeTShirt: row ])
! !

Object subclass: #FdJStock
	instanceVariableNames: 'tshirts'
	package: 'Benevoles'!

Object subclass: #FdJStockage
	instanceVariableNames: 'stockage'
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
	^ (stockage getItem: (self nomPour: objet)) isNil
!

initialize
	"stockage := localStorage"
	stockage := sessionStorage
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
	stockage
		setItem: (self nomPour: objet)
		value: objet asJSONString
!

stockagePour: objet
	"objet peut être une classe, une chaine ou un objet"
	^ stockage getItem: (self nomPour: objet)
!

variablesPour: json
	^ Smalltalk readJSObject: json
!

vide
	stockage clear
! !

FdJStockage class instanceVariableNames: 'instance'!

!FdJStockage class methodsFor: 'as yet unclassified'!

charge: entite
	^ self instance charge: entite
!

charge: entite depuis: json
	^ self instance charge: entite depuis: json
!

charge: entite sinon: block
	^ self instance charge: entite sinon: block
!

instance
	^ instance ifNil: [ instance := self new ]
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

id
	^ type, '-', taille, (spec ifNotNil: [ '-', spec ] ifNil: [ '' ])
!

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

FdJTShirt class instanceVariableNames: 'tshirts'!

!FdJTShirt class methodsFor: 'as yet unclassified'!

at: id
	^ self tshirts at: id
!

tshirts
	| t |
	tshirts ifNil: [
		tshirts := HashedCollection new.
		#(#h #f) do: [ :genre |
			#(#xs #s #m #l #xl #xxl '3xl') do: [ :taille |
				t := self new type: genre; taille: taille.
				tshirts at: t id put: t.
				t := self new type: genre; taille: taille; spec: 'lsf'.
				tshirts at: t id put: t
				]
			]
		].
	^ tshirts
!

vide
	tshirts := nil
! !

Widget subclass: #FdJWidget
	instanceVariableNames: 'presentateur widgets div'
	package: 'Benevoles'!

!FdJWidget methodsFor: 'as yet unclassified'!

ajoute: unWidget
	unWidget presentateur: presentateur.
	widgets add: unWidget
!

ajouteClasse: nom
	div class: (div element className, ' ', nom)
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
	| nom |
	nom := benevole association nom.
	(nom size > 30) ifTrue: [ nom := (nom first: 30), '...' ].
	html div class: 'association';
			 with: nom.
	self ajouteClasse: (benevole association nomSansAccent)
!

renderIdentiteOn: html
	html div class: 'identite';
		with: [ html div class: 'nom'; with: benevole nom.
				html div class: 'prenom'; with: benevole prenom ]
!

renderOn: html
	super renderOn: html.
	div with: [
		html div class: 'info'; with: [
			self renderIdentiteOn: html.
			self renderAssociationOn: html ].
		self renderTShirtOn: html ].
	benevole estInscrit ifFalse: [			
		self ajouteClasse: 'noninscrit' ].
	div onClick: [ presentateur selectionne: benevole ]
!

renderTShirtOn: html
	| d |
	d := html div class: 'tshirt'.
	benevole tshirt ifNotNil: [ :t |
		d with: [
			html div with: t type asUppercase.
			html div with: t taille asUppercase.
			html div with: (t spec ifNil: [ '' ])
			].
		t type = #h
			ifTrue: [d class: 'tshirt homme']
			ifFalse: [d class: 'tshirt femme']
		]
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
	div contents: [ :html |
		div with: [ self renderBenevolesOn: html ] ]
! !

FdJWidget subclass: #FdJWidgetImporteur
	instanceVariableNames: 'input dlg'
	package: 'Benevoles'!

!FdJWidgetImporteur methodsFor: 'as yet unclassified'!

input
	^ input asJQuery val
!

renderActionsOn: html
	| vide |
	html span class: 'checkbox'; with: [ 
		vide := html input type: 'checkbox'.
		html span with: 'Vide'
	].
	html button with: 'import';
		onClick: [
			vide element checked ifTrue: [
					presentateur vide
				].
			presentateur importe: self input.
			dlg asJQuery fadeOut
		]
!

renderDlgOn: html
	dlg := html div
		class: 'dialog';
		with: [
			input := html textarea.
			html div class: 'actions';
				 with: [ self renderActionsOn: html ]
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

FdJWidget subclass: #FdJWidgetLegende
	instanceVariableNames: ''
	package: 'Benevoles'!

!FdJWidgetLegende methodsFor: 'as yet unclassified'!

enderTShirtOn: html
	html div class: 'tshirt';
		with: [
			html div with: 'H/F'.
			html div with: 'taille'.
			html div with: 'lsf' ];
		class: 'tshirt homme'
!

renderAssociationOn: html texte: texte
	html div class: 'association';
		with: texte
!

renderBenevoleOn: html type: benevole
	html div class: 'benevole ',(benevole at: #type); with: [
		html div class: 'info'; with: [
			benevole at: #nom
				ifPresent: [ :t | self renderIdentiteOn: html texte: t ]
				ifAbsent: [ self renderIdentiteOn: html ].
			self renderAssociationOn: html
				texte: (benevole at: #assoc)
			].
		self renderTShirtOn: html ]
!

renderIdentiteOn: html
	html div class: 'identite';
		with: [ html div class: 'nom'; with: 'Nom'.
				html div class: 'prenom'; with: 'Prenom' ]
!

renderIdentiteOn: html texte: texte
	html div class: 'identite';
		with: [ html div class: 'nom'; with: texte ]
!

renderOn: html
	super renderOn: html.
	div with: [
		html div class: 'texte'; with: [
			html div with: '1) Sélectionner un bénévole avec une partie de son nom en bas de l''écran'.
			html div with: '2) Cliquer dessus pour commencer la distribution'.
			html div with: '3) Cliquer sur l''étiquette pour terminer la distribution'.
			html div with: 'Code des couleurs:' ].
		self renderBenevoleOn: html type: #{
			#type->'festival'. #assoc->'association' }.
		self renderBenevoleOn: html type: #{
			#type->'auteur'. #nom->'Auteur'. #assoc->'distri speciale' }.
		self renderBenevoleOn: html type: #{
			#type->'noninscrit'. #nom->'Non-inscrit'. #assoc->'vérif stock' }
		]
!

renderTShirtOn: html
	html div class: 'tshirt';
		with: [
			html div with: 'H/F'.
			html div with: 'taille'.
			html div with: 'lsf?' ];
		class: 'tshirt homme'
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
		
		html div class: 'menu'; with: [
			suite := html div class: 'suite'; with: '...'.
			
			liste := FdJWidgetBenevoles new.
			liste presentateur: presentateur.
			liste renderOn: html
			]
		]
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

!String methodsFor: '*Benevoles'!

indexOfSubString: subString
	<return self.indexOf(subString) + 1>
!

remplaceAvec: dict
	| s |
  	s := self asLowercase.
	dict keysAndValuesDo: [ :k :v |
		s := s replace: k with: v
	].
	^ s
!

sansAccent
	| s |
  	s := self asLowercase.
	#{ '[àáâãäå]' -> 'a'.
	   'æ' -> 'ae'.
	   'ç' -> 'c'.
	   '[èéêë]' -> 'e'.
	   '[ìíîï]' -> 'i'.
	   'ñ' -> 'n'.
	   '[òóôõö]' -> 'o'.
	   'œ' -> 'oe'.
	   '[ùúûü]' -> 'u'.
	   '[ýÿ]' -> 'y'.
	   ' ' -> ''
	} keysAndValuesDo: [ :k :v |
		s := s replace: k with: v
	].
	^ s
! !

