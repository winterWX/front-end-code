# git 命令提交代码

# git pull 拉代码
# git add .
# git commit -m 'XXX'
# git push origin 分支名


回退到上个版本
# git reset -hard HEAD^

回退到指定版本
git log 
git show dde8c25694f34acf8971f0782b1a676f39bf0a46

git reset -hard dde8c25694f34acf8971f0782b1a676f39bf0a46 

# 部分代码从本分支提交到另一个分支

1. 在本分支提交之后通过 git log 拿到提交记录的 提交码  dde8c25694f34acf8971f0782b1a676f39bf0a46
2. 通过 git checkout 切换到另一个分支  
3. 通过 git cherry-pick  dde8c25694f34acf8971f0782b1a676f39bf0a46 将部分代码合并到当前分支

