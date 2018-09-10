---
title: Git
---

# GIT


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

>https://git-scm.com/docs/git-rebase