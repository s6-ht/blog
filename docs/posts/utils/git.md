---
title: git详解
date: 2020-09-24 21:46:42
tags: git
---

#### 一、先有本地库，后关联远程库
* HEAD指向当前分支

1. `ls -ah`查看.git 目录 
1. `git diff filename`显示暂存区和工作区的差异
1. `git log  / git log --pretty=oneline(只查看一行)`查看最近到最远的提交日志 
1. `git reset --hard HEAD^`回退到上一次提交版本   
1. 在知道版本号之后，可以通过`git reset --hard 版本号`回退到指定版本
##### 工作区和暂存区的区别：
==工作区==：电脑上看到的目录，除了.git隐藏目录<br>
==版本库==：工作区有一个隐藏目录.git，这不属于工作区，这是版本库，其中存了暂存区，还有git为我们自动创建了第一个分支master以及指向master的一个指针HEAD。<br>
使用git commit提交更改，实际上是把暂存区的所有内容提交到当前分支上<br>
1. `git checkout -- 文件名` 将文件在工作区做的修改全部取消，这里有两种情况:
1. 当文件修改之后还未添加到暂存区，使用撤销修改则回到和版本库一样的状态
<font color=red>当文件修改之后被添加到了暂存区，在暂存区又进行了修改</font>，此时使用撤销命令则回到<font color=red>添加到暂存区后的状态</font>

1. `rm 文件名` 删除文件，如果要从版本库里面删掉此文件，需执行commit命令
1. 删除文件后还未执行commit命令，恢复文件`git checkout -- 文件名`
关联远程仓库

    git remote add tag(远程仓库别名)  url(远程仓库地址)

##### 把本地版本库的内容推送到远程库并且把本地的分支和远程相应的分支联系起来

    git push -u 远程库名（默认origin) tag(本地分支名)
    远程库为空时，第一次推送时添加-u参数

----

创建一个分支并切换到当前分支发生的变化：
- 创建一个新的分支
- 如果切换到新分支，HEAD指向变为这个新分支
1. 创建并切换分支`git checkout -b 分支名`
1. 查看所有分支，带*号的为当前分支`git branch`
1. 合并分支到当前分支     `git merge 分支名`

1. 将本地的dev分支与远程的dev分支关联`git checkout –b dev origin/dev`
1. 在使用git pull失败，未指定本地分支与远程origin/本地分支的链接,建立追踪关系，在现有分支与指定的远程分支之间`git branch --set-upstream 本地分支名 origin/本地分支`
1. 删除工作区文件，并且将这次删除放入暂存区`git rm [fileName]`
1. 停止追踪指定文件，但该文件会保留在工作区`git rm --cached file`
1. 改名文件，并且将这个改名放入暂存区`git mv [file-original] [file-renamed]`

1. 下载远程仓库的所有变动 `git fetch [remote]`
`git rm --cached 文件名`（将暂存区的文件移动到工作区）

1. `git remote add origin url`先有本地库，再有远程库，将本地仓库和远程仓库联系起来
1. `git branch -d dev` 删除dev分支
1. `git branch -r` 查看所有远程分支
1. `git branch` 查看本地分支
1. `git branch -a` 查看远程和本地的所有分支
1. `git checkout -b 本地分支 origin/远程分支`拉取远程分支，创建切换到本地分支
1. `git fetch -a` 拉取远程所有的更新
1. `git fetch origin 远程分支名：本地分支名`拉取远程分支，并创建本地分支
2. `git fetch origin branch` 拉取远程分支
