ttp://hi.baidu.com/petercao2008/item/43f5bd03412fc8d01ff046c7

ʹ��GitHub���裺
1������GitHub�ʻ� xxx ��������Ϊnew-project����Repository 

2����װGit�ͻ��ˣ�Linux��
#yum install git git-gui

3�� ������Կ�ԣ�������Ŀ����push�� GitHub��
#ssh-keygen -t rsa -C "xxx@gmail.com"
4����.ssh/id_rsa.pub������GitHub��վ


5��Ϊ�˷��㣬����ssh���������
# eval `ssh-agent`
# ssh-add
������passphrase��

6�������Ƿ�����ͨGitHub
#ssh git@github.com
���������ȷ����ʾ
ERROR: Hi xxx! You've successfully authenticated, but GitHub does not provide shell access
Connection to github.com closed.

7������Gitȫ���û�����
# git config --global user.name "xxx"
# git config --global user.email xxx@gmail.com

8��������������Ŀ������
# mkdir new-project
# cd new-project
# git init
# touch README
# git add README
# git commit -m 'first commit'
����Զ�̷���������origin
#  git remote add origin git@github.com:xxx/new-project.git   
���غ�Զ�̺ϲ�������Ĭ�Ϸ�֧Ϊmaster
# git push origin master  

GitHub��վ�ϾͿ��Կ����ˣ� http://github.com/xxx/new-project

9. �����ļ�
# vi README
�Զ�commit�����ļ�
# git commit -a     
������Զ��
# git push origin master

10. �����ͺϲ���֧
#git branch ��ʾ��ǰ��֧��master
#git branch new-feature  ������֧
# git checkout new-feature �л����·�֧
# vi page_cache.inc.php
# git add page_cache.inc.php
Commit ������GIT
# git commit -a -m "added initial version of page cache"
�ϲ���Զ�̷�����
# git push origin new-feature

���new-feature��֧�����ˣ������б�Ҫ�ϲ���master
#git checkout master
#git merge new-feature
#git branch
#git push 
��master��Ҳ�ϲ���new-feature �Ĵ���

�ٵ�¼��GitHub���Կ���"Switch Branches"�µķ�֧ѡ�



GitHub����һ����ʵ�õĹ��ܣ��鿴������������ͼ��Network����
