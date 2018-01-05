###本地仓库创建和代码管理
1.git init:把工作空间转换为git管理（.git）
2.git status :查看文件状态
3.git add 文件名 /git add . :将代码从从公共区放到暂存区
4.git commit -m "提交描述信息" ：将代码从暂存区放到本地仓库

---
###建立远程仓库
1.在gitHub上面新建一个repository
2.如果不想每次提交代码输入用户名和密码（创建证书（密钥））
        在Git命令窗口输入以下命令：
        用户名模式：
        ssh-keygen -t rsa -C "username"
        或者邮箱模式：
        ssh-keygen -t rsa -C "email@domain.com"
        生成密匙后添加到gitHub上的(settings --->SSH and GPG keys)
3.建立本地和远程的链接
    git remote add origin git@github.com:yourname/app_test.git
    git push -u origin master
    (以上两步操作只需第一次创建链接时使用)
4.后续从本地提交到远程只需要：git push(git pull:从远程更新到本地)

---
###撤销修改和版本回退（时光穿梭机）
1.撤销修改：git checkout -- file
2.版本回退
.已经git add 后删除了文件 ：
找回：git checkout -- fileName file1Name file2Name...

.已经git add ,还没有git commit,希望撤销
找回：git rm --cached fileName

.已经git commit,希望撤销
版本回退：
git reset --hard HAND^(回到上一个版本)
git reset --hard 版本号(彻底回退，覆盖暂存区和工作区)
（git log/git log --pretty=oneline查看版本号git reflog查看删除的版本号考）
git reset --soft 版本号 (回退commit消息，不覆盖暂存区和工作区)
git reset --mixed 版本号(回退commit消息，覆盖暂存区不覆盖工作区)

.已经git push origin master了，希望撤销
直接将本地的文件DELETE,然后add,commit，push就ok了
备注：
如果删除文件后，远程已经没有了，你的本地又将文件找回了，name修改你提交到远程的时候先执行：git push -f(强制推送)

3.回到未来
查看所有commit信息：git reflog
git reset 版本号

