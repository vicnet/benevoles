Smalltalk createPackage: 'Benevoles'!
Object subclass: #Application
	instanceVariableNames: 'w'
	package: 'Benevoles'!

!Application methodsFor: 'initialization'!

clear
	w remove
!

initialize
	super initialize.

	w := WidgetBenevole new.
	w appendToJQuery: 'body' asJQuery
! !

Object subclass: #Benevole
	instanceVariableNames: 'nom prenom assoc tshirt'
	package: 'Benevoles'!
!Benevole commentStamp!
tshirt: un TShirt!

Object subclass: #Benevoles
	instanceVariableNames: 'liste'
	package: 'Benevoles'!

Object subclass: #Stock
	instanceVariableNames: 'tshirts'
	package: 'Benevoles'!

Object subclass: #TShirt
	instanceVariableNames: 'type taille spec'
	package: 'Benevoles'!
!TShirt commentStamp!
type: H(omme) ou F(emme)
taille: XS, S, M...
spec: vide, lsf, dv...!

Widget subclass: #WidgetBenevole
	instanceVariableNames: 'div'
	package: 'Benevoles'!

!WidgetBenevole methodsFor: 'rendering'!

remove
	div asJQuery remove
!

renderOn: html
	div := html div class: 'benevole';
		with: [
			html div class: 'identite';
				with: [ html div class: 'prenom'.
						html div class: 'nom' ]
					]
! !

