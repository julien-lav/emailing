title: L'email
# We can even add meta tags to the page! This sets the keywords meta tag.
# <meta name="keywords" content="bBsic emailing"/>
meta:
  - name: keywords
  - content: Basic emailing
---

## L'Emailing

1/ Changer une image dans le template
--------

```html
<img align="middle" border="0" src="images/mon_image_event.jpg" alt="EVENEMENT LE 5 MAI"
style="display:block;outline:none;border: none;white-space:pre-line;" height="33" width="434">
```
Pour ne pas déformer l'image, il faut que le `height` et le `width` correspondant à la taille de la nouvelle image.

Le align="middle" sert à centrer l'image par rapport à la cellule qui le contient donc a un `<td>`.

::: warning Note
Si le lien provient d'internet et qu'il disparait, il ne sera plus visible dans l'email, le mieux pour les nouvelles images étant de charger l'ensemble dans splio dans un fichier .zip (cf-3/ Ajout dans splio)
:::

::: warning Note
Aux dimensions de l'image celle-ci peuvent venir changer le design de l'email si elles sont différentes de l'image initiale.
:::

Style css, très fréquent pour les balises `<img>`.

```css
style="display: block; outline: none; border: none;white-space:pre-line;"
```

2/ Les textes et polices 
--------

```html
<span style="font: bold 18px/35px Arial, Helvetica, sans-serif;letter-spacing: 1.5px;text-transform:uppercase;">New Shop</span>
```
Ici la police est en gras, `font: bold` le premier chiffre indique la taille de celle-ci, le second la line-heigth, c'est à dire l'espace en dessous et au dessus de chaque ligne de texte.

`text-transform:uppercase;"` Transforme tous les caractères en lettre capitale 

`letter-spacing: 1.5px;` correspond à l'espace entre les lettres.

- Ici à 2.5px

<span style="font: bold 18px/35px Arial, Helvetica, sans-serif;letter-spacing: 2.5px;text-transform:uppercase;">New Shop In Las Vegas</span>

- Là à 0.5px

<span style="font: bold 18px/35px Arial, Helvetica, sans-serif;letter-spacing: 0.5px;text-transform:uppercase;">New Shop In Las Vegas</span>

Certains clients, ne lisent pas les caractères spéciaux (é, è, à, û, ô, €...), c'est pour cela qu'on les remplace par des entités HTML.

La liste existe ici, colonne code texte :

>https://alexandre.alapetite.fr/doc-alex/alx_special.html

- Exemple :

```html
Dès cet été devient donc => D&egrave;s cet &eacute;t&eacute;
``` 

Les balises qui contiennnent le texte peuvent parfois avoir les propriétés suivante `align` et `valign` en fonction des besoins.

::: tip Info
- `align=right`, `align=left` ou `align=center`  
- `valign=top`, `valign=bottom` ou `valign=middle` 
:::

 Et de ce fait, se positionner différemment dans la cellule.

La couleur du texte peut être changé en modifiant la valeur héxadecimal de l'attribut :  


`color:#000000;` #000000 pour du noir, <br />
`color:#ffffff;` #ffffff pour du blanc

Il existe plein d'outil sur le web pour les couleurs, notament :

>https://www.w3schools.com/colors/colors_picker.asp
>https://color.adobe.com/fr/create/color-wheel/

L'idéale étant d'ajouter au navigateur (chrome), l'extention colorZilla.
 
Dans les `<table>` bgcolor="#ffffff", permet de définir une couleur d'arrière plan. Cela permet de s'assurer que le mail soit dans la bonne couleur, et d'eviter d'avoir la mauvaise couleur de fond, quand les images sont soit transparantes, soit quand t'elles n'ont pas chargées.    

Certain `<td>` peuvent avoir une couleur d'arrière plan également.

```css
style="background-color: #f31d1d"
```
Cette arrière plan, peut correspondre à la couleur du cadre de l'email, ici #f31d1d donne un cadre rouge, changer cette couleur par #B2F0FF donne un cadre bleu.  

- #f31d1d (rouge)
- #b2f0ff (bleu)
- #fff101 (jaune)

Une table contient généralement les éléments suivant :

```html
  <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;" width="100%">
  	<tr>
  		<td>...</td>
  	</tr>
  </table>
```

3/ Ajout dans splio  
--------

Généralement on import un fichier .zip qui contient, 

``` 
/index.html
/images/
      |
      - /image_01.jpg
      - /image_02.jpg
      - /...
      - /image_10.jpg
      - /image_11.jpg
      - /...
``` 

Importer, confirmer l'importation, enregistrer.



4/ Les testes 
--------

Une étape essentielle reside dans la vérification de l'affichage dans les différents clients, pour cela il éxiste deux outils :

- Email on acid
- Litmus

Dans slio, pour lancer les testes, dans le champs des emails mettre le mail claravista pour Litmus. 

En faissant un tour sur les differents clients dans Litmus, on sait si notre email s'affichera convenablement pour le plus grand nombre d'utilisateurs. 

::: tip Les principaux ouvreurs (jul 2017) :
01 - Apple iPhone 31%<br />
02 - Gmail 22%             
03 - Apple iPad 11%<br />
04 - Apple Mail 7%  
05 - Outlook 6%   <br />
06 - Samsumg Email App 5%    <br />
07 - Outlook.com 5%   <br />
08 - Google Android 4%   <br />
09 - Yahoo! Mail 3%   <br />
10 - Windows Live Mail 4%

_https://www.leptidigital.fr/webmarketing/parts-de-marche-messageries-boites-mail-11774/_

:::

<br />

5/ Structure de l'email 
--------
Grossièrement pour le moment,

`<table>` servent de conteneur

`<tr>` ce sont les rangés

`<td>` ce sont les colonnes


```html
<table border="0" cellpadding="0" cellspacing="0" width="100%">
 <tbody>
  <tr>
   <td align="center">
   <table border="0" cellpadding="0" cellspacing="0"
   style="border-collapse:collapse;" width="620">
    <tbody>
     <tr>
      <td align="center" class="normal-raleway"
       style="text-align:center;
       font: normal 10px/15px Arial, Helvetica, sans-serif; 
       color:#9b9b9b;">...</td>
     </tr>
    </tbody>
   </table>
   </td>
  </tr>
 </tbody>
</table>
```

À venir...




