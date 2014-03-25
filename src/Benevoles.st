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
	w appendToJQuery: 'body' asJQuery
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
	instanceVariableNames: 'div'
	package: 'Benevoles'!

!FdJWidgetBenevole methodsFor: 'rendering'!

remove
	div asJQuery remove
!

renderIdentiteOn: html
	^ html div class: 'identite';
		with: [ html div class: 'prenom'.
				html div class: 'nom' ]
!

renderOn: html
	div := html div class: 'benevole'.
	div with: (self renderIdentiteOn: html)
! !

