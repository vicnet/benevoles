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
	instanceVariableNames: 'w'
	package: 'Benevoles'!

!FdJApplication methodsFor: 'initialization'!

clear
	w remove
!

initialize
	super initialize.

	w := FdJWidgetBenevole new.
	w associe: FdJBenevole test.
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
	association := FdJAssociation exemple
	benevoles add: self exemple.
	benevoles add: self new nom: 'DUPOND';
			 prenom: 'Gérard';
			 association: association.
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

remove
	div asJQuery remove
!

renderAssociationOn: html
	html div class: 'association';
		with: benevole association nom
!

renderIdentiteOn: html
	div := html div class: 'identite'.
	div with: [ html div class: 'prenom'; with: benevole prenom.
				html div class: 'nom'; with: benevole nom]
!

renderOn: html
	html div class: 'benevole';
		with: [ self renderIdentiteOn: html.
				self renderAssociationOn: html]
! !

Widget subclass: #FdJWidgetBenevoles
	instanceVariableNames: 'benevoles'
	package: 'Benevoles'!

!FdJWidgetBenevoles methodsFor: 'as yet unclassified'!

associe: desBenevoles
	benevoles := desBenevoles
!

renderBenevolesOn: html
	benevoles do: [ :b | b renderOn: html ]
!

renderOn: html
	html div class: 'benevoles';
		with: [ self renderBenevolesOn: html]
! !

