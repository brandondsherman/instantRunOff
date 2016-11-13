candidates = c("Hillary Duff", "Donald Glover", "My Johnson", "Beer Stein", "HaramBAE")

n = 89000
harambe = 11000


data = matrix(1:50000,ncol = 5)
for(i in 1:10000){
  x = sample(candidates,5,prob=c(.48,.45,.049,.02,.001))
  data[i,1] = x[1]
  data[i,2] = x[2]
  data[i,3] = x[3]
  data[i,4] = x[4]
  data[i,5] = x[5]
}
write.csv(data, "data/votes.csv")


