---
title: Git
---

# GIT REBASE

```txt
A---B---C---D ← master
             \
              E---F---G ← discussion
```
Notez que rebaser discussion n'a strictement aucun effet sur master. En revanche, la fusion de discussion dans master est maintenant triviale (fast forward). On obtient enfin :

```txt

A---B---C---D---E---F---G ← master
                         \
                          discussion
```

```txt
          F---G ← bug2
         /
A---B---E---H---I ← master
     \
      C---D ← bug1
```

```sh
git rebase master bug1 #git rebase master checkout bug1
git checkout master
git merge bug1
git branch -d bug1
git rebase master bug2
git checkout master
git merge bug2
git branch -d bug2
```

En utilisant un rebase avant chaque fusion, on obtient l'historique suivant :
```txt
A---B---E---H---I---C---D---F---G ← master
```

```txt
          F---G ← newsletter
         /
A---B---E---H---I ← master
     \
      C---D ← password_reset
```
Un historique plat, c'est bien, mais on perd de l'information. Plus moyen de savoir en un coup d'œil que telle liste de commits a été réalisée sur une branche spécifique.

Pour pallier à ce problème, on va utilise une option de merge : --no-ff (pour « no fast forward »).

```sh
git rebase master password_reset
git checkout master
git merge password_reset --no-ff
git branch -d password_reset
git rebase master newsletter
git checkout master
git merge newsletter --no-ff
git branch -d newsletter
```

```txt
A---B---E---H---I-------J-------K ← master
                 \     / \     /
                  C---D   F---G
```

>https://www.miximum.fr/blog/git-rebase/
>https://git-scm.com/docs/git-rebase

# GIT FETCH / GIT PULL 

- Download objects and refs from another repository

Les deux commandes permettent de mettre à jour un répertoire local avec les données d'un repository distant. Elles n'ont cependant pas le même fonctionnement.

Récupère les données distantes mais sans les fusionner avec la branche locale. Pour la mettre a jour il faut utiliser git merge.

Ainsi git fetch permet de garder le répertoire à jour mais de contrôler le moment où l'on souhaite fusionner les données.


# GIT DIFF 
```sh
 git diff <source_branch> <target_branch>
```

# GIT GREP
```sh
git grep "nom_a_trouver"
```

# GITK
=>interface graphique
```sh
gitk 
```

# GIT ARCHIVE
```sh
git archive --format=tar master
```

# GIT PRUNE / GOT FSCK

--

# GIT MERGETOOL

--

git blame - Show what revision and author last modified each line of a file
git bisect - Use binary search to find the commit that introduced a bug
git show - Show various types of objects

# GIT WORKTREE