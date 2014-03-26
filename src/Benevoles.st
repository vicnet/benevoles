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

!FdJAssociation class methodsFor: 'as yet unclassified'!

test
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

!FdJBenevole class methodsFor: 'as yet unclassified'!

test
	^ self new nom: 'OSELE';
			 prenom: 'Vincent';
			 association: (FdJAssociation test);
			 yourself
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
	html div class: 'identite';
		with: [ html div class: 'prenom'; with: benevole prenom.
				html div class: 'nom'; with: benevole nom]
!

renderOn: html
	div := html div class: 'benevole'.
	div with: [ self renderIdentiteOn: html.
				self renderAssociationOn: html]
! !

