Smalltalk createPackage: 'Benevoles'!
(Smalltalk packageAt: 'Benevoles') imports: {'Papa' -> 'papaparse'}!
Object subclass: #FdJAnnonce
	instanceVariableNames: ''
	package: 'Benevoles'!

FdJAnnonce subclass: #FdJApplicationChangeEtat
	instanceVariableNames: 'etat'
	package: 'Benevoles'!

!FdJApplicationChangeEtat methodsFor: 'as yet unclassified'!

etat
	^ etat
!

etat: nouveau
	etat := nouveau
! !

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
	instanceVariableNames: 'benevoles selectionneur distributeur importeur historique cacheFiltre'
	package: 'Benevoles'!

!FdJApplication methodsFor: 'initialization'!

annonce: etat
	FdJAnnonceur current announce: (FdJApplicationChangeEtat new etat: etat; yourself)
!

annule: benevole
	benevole reinit
!

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

defiltre
	selectionneur defiltre.
	cacheFiltre := ''
!

filtre: texte
	| max liste |
	cacheFiltre=texte ifTrue: [ ^ self ].
	cacheFiltre := texte.
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

	fields := results meta fields.
	rows := results data.
"Differents fichiers 2014 
	(fields includes: 'Taille')
		ifTrue: [ self importeTShirts: rows ].
	
	(fields includes: 'asso')
		ifTrue: [
			imp importeAssociations: rows.
			FdJStockage sauve: FdJAssociations instance ].

	(fields includes: 'Vendredi midi')
		ifTrue: [ self importeRepas: rows ].

	(fields includes: 'Nom')
		ifTrue: [
			benevoles ajouteUnique: (imp importeBenevoles: rows) ].
"
"Fichiers unique 2015"
	(fields includes: 'asso')
		ifTrue: [
			imp importeAssociations: rows.
			FdJStockage sauve: FdJAssociations instance ].

	(fields includes: 'nom')
		ifTrue: [
			benevoles ajouteTous: (imp importeComplets: rows) ].

	self sauve
!

initialize
	| barre |
	'body' asJQuery children remove.
	window onunload: [ self termine ].

	super initialize.
	
	cacheFiltre	:= ''.

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
	distributeur associe: (benevoles selectionnes).
	
	"notifie le début de l'application"
	self annonce: true
!

onBenevoleChangeEtat: benevole
	benevole estEncours
		ifTrue: [
			"un benevole vient de passer en cours, on a clique dessus dans la selection"
			self defiltre.
			distributeur ajoute: benevole ]
	 	ifFalse: [
			"annulation ou fin de distribution"
			self filtre: (selectionneur filtre).
			distributeur supprime: benevole ].
	self sauve
!

reinit
	benevoles reinit".
	self sauve"
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
	"notifie la fin de l'application"
	self annonce: false.
"	'body' asJQuery children remove"
!

vide
	FdJStockage vide.
	benevoles vide
! !

!FdJApplication methodsFor: 'obsolete'!

importeRepas: rows
	| repas key |
	repas := FdJImporteur new importeRepass: rows.
	benevoles benevoles do: [ :b |
		key := (b nom, ' ', b prenom) asLowercase.
		repas at: key ifPresent: [ :t |
				b repas: t.
				repas remove: key
			]
		].
	repas ifNotEmpty: [ Transcript show: 'Repas non importés:'; cr ].
	repas keys do: [ :b | Transcript show: ('- ', b);cr ].
	self sauve
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
! !

FdJApplication class instanceVariableNames: 'instance accents'!

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
!

instance
	^ instance ifNil: [ instance := super new ]
!

new
	self shouldNotImplement
!

open
	^ self instance
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
	instanceVariableNames: 'nom prenom assoc tshirt repas etat inscrit nomSansAccent prenomSansAccent'
	package: 'Benevoles'!
!FdJBenevole commentStamp!
- tshirt: un TShirt
- etat: pas encore venu (nil), en cours de traitement (en cours), terminé (distribue)!

!FdJBenevole methodsFor: 'accessing'!

affiche
	Transcript show:
		        nom, ',', prenom
		, ',',  assoc nom
		, ',', (tshirt ifNil: [ '' ] ifNotNil: [ :t | t id ])
		, ',', (etat ifNil: [ '' ])
		, ',', inscrit
		; cr
!

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
	repas ifNotNil: [ variables at: 'repas' put: repas asJSON ].
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
	^ etat isNil
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
	self nom: (variables at: 'nom').
	self prenom: (variables at: 'prenom').
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
		ifAbsent: [ true ].
	repas := variables at: 'repas'
		ifPresent: [ :v | FdJRepas new fromJSON: v ]
		ifAbsent: [ nil ].
	"force le recalcule de nom sans accent"
	self nomSansAccent.
	self prenomSansAccent
!

identite
	"retourne une chaine avec le nom et le prenom"
	^ self nom, ' ', self prenom
!

identiteSansAccent
	"retourne une chaine avec le nom et le prenom sans accent"
	^ self nomSansAccent, ' ', self prenomSansAccent
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
	nom := chaine.
	nomSansAccent := nil
!

nomSansAccent
	nomSansAccent ifNil: [
		nom ifNil: [ ^ '' ].
		nomSansAccent := nom remplaceAvec: FdJApplication accents ].
	^ nomSansAccent
!

normalise
	"passe le nom en majuscule et le prénom avec la 1ere lettre en majuscule"
	self nom: nom asUppercase.
	self prenom: prenom capitalized
!

prenom
	^ prenom
!

prenom: chaine
	prenom := chaine.
	prenomSansAccent := nil
!

prenomSansAccent
	prenomSansAccent ifNil: [
		prenom ifNil: [ ^ '' ].
		prenomSansAccent := prenom remplaceAvec: FdJApplication accents ].
	^ prenomSansAccent
!

reinit
	etat := nil.
	self annonce
!

repas
	^ repas
!

repas: jours
	repas := jours
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
			 repas: (FdJRepas new ajouteJour: true;  ajouteJour: false );
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
	instanceVariableNames: 'liste cache'
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

asJSON
	"Ne sauve pas le cache"
	^ #{ 'liste' -> liste asJSON }
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
	"renvoie un tableau de taille maximum a max des benevoles correspondant a texte"
	| result |
	"teste le nom"
	texte isEmpty ifTrue: [ ^ #() ].
	"recherche benevoles repondant au critere"
	"Restriction a max item"
	result := #().
	(self filtreCacheMaj: texte) do: [ :s |
		(s estDisponible) ifTrue: [
			result add: s.
			(result size >= max) ifTrue: [ ^ result ]
			]
		].
	^ result
!

filtreBrut: benevoles avec: parties
	"renvoie un tableau de taille maximum a max des benevoles correspondant a texte"
	| selection valeur |
	"Selection est une liste de paire valeur-benevole (tableau de 2 valeurs)"
	selection := benevoles collect: [ :b |
		valeur := b indexDes: parties.
		(valeur ~= 0) & (b estInscrit not) ifTrue: [ valeur := valeur + 100 ].
		{ valeur. b }
	].
	"la liste est triee par valeur"
	selection sort: [ :a :b | (a at: 1) <= (b at: 1) ].
	^ selection
		select: [ :s | (s at: 1) > 0 ]
		thenCollect: [ :s | s at: 2]
!

filtreCache: texte
	"Filtre en utilisant si possible le cache"
	| parties sansaccent result |
	sansaccent := texte sansAccent.
	parties := (sansaccent tokenize: ' ').

	"si pas de cache, recherche complete"
	cache ifNil: [ ^ self filtreBrut: liste avec: parties ].
"	cache ifNil: [ cache := HashedCollection new ]."

	"recherche benevoles repondant au critere dans le cache"
	(sansaccent size min: 2) to: 1 by:-1 do: [ :n |
		cache at: (sansaccent first: n)
			ifPresent: [ :s |
				(n = sansaccent size) ifTrue: [ ^ s ].
				^ self filtreBrut: s avec: parties ]
		].
	result := self filtreBrut: liste avec: parties.
"	sansaccent size <= 2 ifTrue: [
		Transcript show: 'maj',sansaccent.
		cache at: sansaccent put: result
		]."
	^ result
!

filtreCacheMaj: texte
	"Filtre en utilisant si possible le cache et met a jour le cache"
	| sansaccent result |
	sansaccent := texte sansAccent.

	"si pas de cache, on le créé"
	cache ifNil: [ cache := HashedCollection new ].

	"recherche benevoles repondant au critere dans le cache"
	result := self filtreCache: sansaccent.
	"cache maj si taille petite"
	sansaccent size <= 2 ifTrue: [
		Transcript show: 'maj',sansaccent.
		cache at: sansaccent put: result
		].
	^ result
!

fromJSON: variables
	liste := (variables at: 'liste') collect: [ :v |
			FdJBenevole new fromJSON: v
		]
!

majCache
	| chars |
	chars := ((97 to: 122) collect: [ :c | String fromCharCode: c ]).
	cache := HashedCollection new.
	chars do: [ :c1 |
		self majCacheAvec: c1.
		self majCacheAvec: c1,' '.
		chars do: [ :c2 | self majCacheAvec: c1,c2 ]
		].
	^ cache
!

majCacheAvec: c
	^ cache at: c put: (self filtreCache: c )
!

reinit
	liste do: [ :b | b reinit ]
!

selectionnes
	^ liste select: [ :b | b estEncours ]
!

vide
	liste := #().
	self videCache
!

videCache
	cache := nil
! !

!FdJBenevoles class methodsFor: 'exemples'!

exemple
	^ self new benevoles: FdJBenevole exemples
! !

Object subclass: #FdJHistorique
	instanceVariableNames: 'liste'
	package: 'Benevoles'!

!FdJHistorique methodsFor: 'as yet unclassified'!

affiche
	| date sdate |
	Transcript clear.
	liste do: [ :e |
		date := Date new: (e at: 'date').
		sdate :=
			  date dayOfMonth asString, '/', date month asString, '/', date year asString
			, ' '
			, date hours asString, ':', date minutes asString, ':', date seconds asString.
		Transcript show: sdate, ',', (e at: 'evennement');cr ]
!

ajoute: texte
	liste add: #{
			'date' -> Date now asString.
			'evennement' -> texte
		}.
	self sauve
!

fromJSON: variables
	liste := variables at: 'liste'
!

initialize
	liste := #().
	FdJAnnonceur current
		on: FdJBenevoleChangeEtat
		do: [ :evt |
			self onBenevoleChangeEtat: evt benevole ].
	FdJAnnonceur current
		on: FdJApplicationChangeEtat
		do: [ :evt |
			self onApplicationChangeEtat: evt etat ]
!

onApplicationChangeEtat: etat
	self ajoute:
		(etat ifTrue: ['Debut'] ifFalse: ['Fin'])
		, ' de l''application'
!

onBenevoleChangeEtat: benevole
	| action |
	benevole estEncours ifTrue: [ action := 'Debut distribution' ].
	benevole estDistribue ifTrue: [ action := 'Fin distribution' ].
	benevole estDisponible ifTrue: [ action := 'Annulation' ].
	action ifNotNil: [ self ajoute: action, ' ''', benevole identite, '''' ]
!

sauve
	FdJStockage sauve: self
!

vide
	liste := #().
	self sauve
! !

Object subclass: #FdJImporteur
	instanceVariableNames: ''
	package: 'Benevoles'!

!FdJImporteur methodsFor: 'as yet unclassified'!

importe: texte
	| tous fields rows |
	tous := Papa
		parse: texte
		config: #{ 'header'->true. 'dynamicTyping'->false }.
	^ tous
!

importeAssociation: row
	row at: 'asso' ifPresent: [ :assoc |
		(FdJAssociations instance at: assoc) ifNil: [
			FdJAssociations instance ajoute: assoc
			]
		]
!

importeAssociations: rows
	rows do: [ :row | self importeAssociation: row ]
!

importeBooleen: value
	value ifNil: [ ^ false].
	value ifEmpty: [ ^ false].
	^ (#( 'false' 'n' 'non') includes: value asLowercase) not
!

importeComplet: row
	| benevole participe |
	participe := self importeBooleen: (row at: 'participe').
	benevole := FdJStockage charge: FdJBenevole depuis: #{
		'nom' -> (row at: 'nom').
		'prenom' -> (row at: 'prenom').
		'assoc' -> (row at: 'asso' ifAbsent: [ 'Festival']).
		'inscrit' -> participe
		}.
	(row at: 'repas') ifNotEmpty: [
		benevole repas: (self importeRepas: row) ].
	benevole tshirt: (self importeTShirt: row).
	^ benevole
!

importeComplets: rows
	^ rows
		select: [ :row | (row at: 'nom') isEmpty not ]
		thenCollect: [ :row | self importeComplet: row ]
!

importeRepas: row
	| repas |
	repas := FdJRepas new.
	"Les repas du vendredi midi et dimanche soir ne sont pas pris en compte d'ou le signe - devant le texte"
	#('-Ven 8 Mai MIDI' 'Ven 8 Mai SOIR' 'Sam 9 Mai MIDI' 'Sam 9 Mai SOIR' 'Dim 10 Mai MIDI' '-Dim 10 Mai SOIR')
		do: [ :jour |
			repas ajouteJour: ((row at: 'repas') includesSubString: jour) ].
	repas vegetarien: (self importeBooleen: (row at: 'repas_vegetarien')).
	^ repas
!

importeTShirt: row
	| ts |
	(row at: 'taille') = 'Aucune' ifTrue: [ ^ nil ].
	ts := (self importeBooleen: (row at: 't_shirt_cintre')) ifTrue: [ 'f' ] ifFalse: [ 'h' ].
	ts := ts, '-', ((row at: 'taille') asLowercase).
	(self importeBooleen: (row at: 'lsf')) ifTrue: [ ts := ts,'-lsf' ].
	^ FdJTShirt at: ts
! !

!FdJImporteur methodsFor: 'obsolete'!

importeBenevole: row
	"Import standart pour les listes simples spéciales: auteurs, ..."
	^ FdJStockage charge: FdJBenevole depuis: #{
		'nom' -> (row at: 'Nom').
		'prenom' -> (row at: 'Prénom').
		'assoc' -> (row at: 'Association' ifAbsent: [ 'Festival']).
		'inscrit' -> (row at: 'Inscrit'
						  ifPresent: [ :r | r isEmpty ]
					  	  ifAbsent: [ true ])
		}
!

importeBenevoles: rows
	^ rows
		select: [ :row | (row at: 'Nom') isEmpty not ]
		thenCollect: [ :row | self importeBenevole: row ]
!

importeNomTShirt: row
	^ ((row at: 'Nom') asLowercase)
		->
	  (((row at: 'Cintré') ifEmpty: [ 'h' ] ifNotEmpty: [ 'f' ] )
		, '-', ((row at: 'Taille') asLowercase)
		, ((row at: 'LSF') ifNotEmpty: [ '-lsf' ])
		)
!

importeRepass: rows
	^ HashedCollection from:
		(rows collect: [ :row | self importeRepas: row ])
!

importeTShirts: rows
	^ HashedCollection from:
		(rows collect: [ :row | self importeNomTShirt: row ])
! !

Object subclass: #FdJRepas
	instanceVariableNames: 'jours vegetarien'
	package: 'Benevoles'!

!FdJRepas methodsFor: 'as yet unclassified'!

ajouteJour: repasPris
	"Ajoute un jour avec si le repas est pris ou non"
	jours add: repasPris
!

asJSON
	^ #{ 'jours'->jours. 'vegetarien'->vegetarien }
!

fromJSON: variables
	jours := variables at: 'jours'.
	vegetarien := variables at: 'vegetarien'
							ifAbsent: [ false ]
!

initialize
	jours := #().
	vegetarien := false
!

jours
	^ jours
!

vegetarien
	^ vegetarien
!

vegetarien: estVeg
	vegetarien := estVeg
! !

Object subclass: #FdJStock
	instanceVariableNames: 'tshirts'
	package: 'Benevoles'!

Object subclass: #FdJStockage
	instanceVariableNames: 'stockage'
	package: 'Benevoles'!

!FdJStockage methodsFor: 'as yet unclassified'!

chaine: entite depuis: texte
	^ self charge: entite depuis: (self variablesPour: (JSON parse: texte))
!

chaine: objet sauve: texte
	stockage
		setItem: (self nomPour: objet)
		value: texte
!

chainePour: objet
	^ (self stockagePour: objet) replace: '''' with: ''''''
!

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
	stockage := localStorage
	"stockage := sessionStorage"
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
	^ instance ifNil: [ instance := super new ]
!

new
	self shouldNotImplement
!

sauve: objet
	self instance sauve: objet
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
	instanceVariableNames: 'benevole annulation'
	package: 'Benevoles'!

!FdJWidgetBenevole methodsFor: 'rendering'!

associe: unBenevole
	benevole := unBenevole
!

benevole
	^ benevole
!

renderAnnulationOn: html
	| btn |
	annulation := false.
	btn := html div class: 'annul'; with: 'X'.
	btn onClick: [ annulation := true ]
!

renderAssociationOn: html
	| nom |
	nom := benevole association nom.
	(nom size > 25) ifTrue: [ nom := (nom first: 25), '...' ].
	html div class: 'association';
			 with: nom.
	self ajouteClasse: (benevole association nomSansAccent)
!

renderIdentiteOn: html
	| prenom size |
	prenom :=  benevole prenom.
	size := ((benevole nom size) * 1.31) + 1 + prenom size.
	size := (25 - size + benevole prenom size) floor.
	(size<0) ifTrue: [ prenom := '...' ].
	(size > 0) & (size < prenom size) ifTrue: [ prenom := (prenom first: size),'...' ].
	html div class: 'identite';
		with: [ html div class: 'nom'; with: benevole nom.
				html div class: 'prenom'; with: prenom ]
!

renderOn: html
	super renderOn: html.
	div with: [
		html div class: 'info'; with: [
			self renderIdentiteOn: html.
			self renderAssociationOn: html ].
		self renderTShirtOn: html.
		self renderRepasOn: html.
		self renderAnnulationOn: html ].
	benevole estInscrit ifFalse: [			
		self ajouteClasse: 'noninscrit' ].
	div onClick: [ self selectionne ]
!

renderRepasOn: html
	| d jours t tooltip |
	jours := { 'Dimanche soir'. 'Dimanche midi'. 'Samedi soir'. 'Samedi midi'. 'Vendredi soir'. 'Vendredi midi' }.
	d := html div class: 'repas';
			      with: [ html div class: 'img' ].
	benevole repas ifNotNil: [ :repas |
		repas vegetarien ifTrue: [ d ajouteClasse: 'vegetarien' ].
		d with: [
			repas jours do: [ :r |
				t := html div
					with: (r ifTrue: [ 'O' ] ifFalse: [ 'N' ]);
					class: (r ifTrue: [ 'pris' ] ifFalse: [ 'aucun' ]).
				tooltip := self renderToolipOn: html
					with: (jours removeLast)
					on: t.
				tooltip with: [html br]; with: (r ifTrue: [ 'Repas pris' ] ifFalse: [ 'Repas non pris' ]);
						with: [html br]; with: (repas vegetarien ifTrue: [ 'Végétarien' ] ifFalse: [ '' ])
				]
			]
		]
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
			ifTrue: [d ajouteClasse: 'homme']
			ifFalse: [d ajouteClasse: 'femme']
		]
!

renderToolipOn: html with: tooltip on: adiv
	| span |
	adiv
		ajouteClasse: 'tooltip';
		with: [
			span := html span
			with: [ html img class: 'callout'; src: 'img/callout.gif'];
			with: tooltip
		].
		^ span
!

selectionne
	annulation
		ifTrue: [ presentateur annule: benevole ]
		ifFalse: [ presentateur selectionne: benevole ].
	annulation := false
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
		((benevole at: #type) = 'auteur') ifFalse: [
			self renderTShirtOn: html ]
		]
!

renderContenuOn: html
	html div class: 'texte'; with: [
		html div with: '1) Sélectionner un bénévole avec une partie de son nom et/ou prénom en bas de l''écran'.
		html div with: '2) Cliquer dessus pour commencer la distribution'.
		html div with: '3) Cliquer sur l''étiquette pour terminer la distribution'.
		html div with: 'Code des couleurs:' ].
	self renderBenevoleOn: html type: #{
		#type->'festival'. #assoc->'association' }.
	self renderBenevoleOn: html type: #{
		#type->'auteur'. #nom->'Auteur'. #assoc->'distri speciale' }.
	self renderBenevoleOn: html type: #{
			#type->'noninscrit'. #nom->'Non-inscrit'. #assoc->'vérif stock' }
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
	| contenu |
	super renderOn: html.
	div with: [
		html div
			class: 'bouton';
			with: 'Aide';
			onClick: [ contenu asJQuery fadeToggle ].
		contenu := html div
			class: 'contenu';
			with: [ self renderContenuOn: html ]
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
	input asJQuery val: ''.
	liste associe: #{}.
	suite asJQuery hide
!

filtre
	^ input asJQuery val
!

renderOn: html
	super renderOn: html.
	div with: [
		self renderSelectionneurOn: html.
		
		html div class: 'menu'; with: [
			suite := html div class: 'suite'; with: '...'.
			
			liste := FdJWidgetBenevoles new.
			liste presentateur: presentateur.
			liste renderOn: html
			]
		]
!

renderSelectionneurOn: html
	html span class: 'deleteicon';
		with: [
			input := html input.
			input onKeyUp: [ presentateur filtre: (self filtre) ].
			html span onClick: [ presentateur defiltre. input element focus ]
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
	   '[ýÿ]' -> 'y'".
	   ' ' -> ''"
	} keysAndValuesDo: [ :k :v |
		s := s replace: k with: v
	].
	^ s
! !

!TagBrush methodsFor: '*Benevoles'!

ajouteClasse: nom
	self class: element className,' ', nom
! !

