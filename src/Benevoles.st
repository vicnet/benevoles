Smalltalk createPackage: 'Benevoles'!
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
	instanceVariableNames: 'benevoles w'
	package: 'Benevoles'!

!FdJApplication methodsFor: 'initialization'!

initialize
	| liste |
	super initialize.
	
	benevoles := FdJBenevole exemples.
	
	FdJSelectionneur new appendToJQuery: 'body' asJQuery.

	"liste := benevoles collect: [ :b | FdJWidgetBenevole new associe: b. ]."
	w := FdJWidgetBenevoles new.
	w appendToJQuery: 'body' asJQuery
! !

Object subclass: #FdJAssociation
	instanceVariableNames: 'nom logo'
	package: 'Benevoles'!

!FdJAssociation methodsFor: 'accessing'!

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

Object subclass: #FdJBenevole
	instanceVariableNames: 'nom prenom assoc tshirt etat'
	package: 'Benevoles'!
!FdJBenevole commentStamp!
tshirt: un TShirt
etat: pas encore venu, en cours de traitement, terminé!

!FdJBenevole methodsFor: 'accessing'!

announcer
	^ FdJAnnounceur current
!

association
	^ assoc
!

association: uneAssoc
	assoc := uneAssoc
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

Object subclass: #FdJStock
	instanceVariableNames: 'tshirts'
	package: 'Benevoles'!

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

Widget subclass: #FdJWidgetBenevole
	instanceVariableNames: 'benevole div'
	package: 'Benevoles'!

!FdJWidgetBenevole methodsFor: 'rendering'!

associe: unBenevole
	benevole := unBenevole
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
	div := html div class: 'benevole'.
	div with: [ self renderIdentiteOn: html.
				self renderAssociationOn: html]
!

supprime
	div asJQuery remove
! !

Widget subclass: #FdJWidgetBenevoles
	instanceVariableNames: 'benevoles div'
	package: 'Benevoles'!

!FdJWidgetBenevoles methodsFor: 'as yet unclassified'!

associe: desBenevoles
	benevoles := desBenevoles
!

renderBenevolesOn: html
	benevoles do: [ :b | b renderOn: html ]
!

renderOn: html
	div := html div class: 'benevoles'.
	div with: [ self renderBenevolesOn: html]
!

supprime
	"supprime le tag de base"
	div asJQuery remove
!

vide
	"supprime les widgets Benevole mais laisse la racine"
	benevoles do: [ :b | b supprime ]
! !

!FdJWidgetBenevoles methodsFor: 'initialization'!

initialize
	super initialize.

	benevoles := #()
! !

Widget subclass: #FdJWidgetSelectionneur
	instanceVariableNames: 'div'
	package: 'Benevoles'!

!FdJWidgetSelectionneur methodsFor: 'as yet unclassified'!

renderOn: html
	| i |
	i := html input class: 'selectionneur'.
	i onKeyUp: [ Transcript show: i; cr ]
! !

