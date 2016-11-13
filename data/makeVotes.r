candidates = c("Hilary Duff", "Donald Glover", "Harry Johnson", "Frank N. Stein", "Harambe")



data = matrix(1:50000,ncol = 5)
for(i in 1:10000){
  x = sample(candidates,5)
  data[i,1] = x[1]
  data[i,2] = x[2]
  data[i,3] = x[3]
  data[i,4] = x[4]
  data[i,5] = x[5]
}
write.csv(data, "data/votes.csv")


