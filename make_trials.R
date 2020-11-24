library(tidyverse)

setwd("/Users/adkinsty/Desktop/change-localization")

N <- 50
K <- 5

height <- .05
width <- .05

# Colors:        Black      Orange     Skyblue   BluGreen    Yellow      Blue    Vermillion  RedPurple
all_colors <- c("#000000", "#e69f00", "#56b4e9", "#009e73", "#f0e442", "#0072b2", "#d55e00", "#cc79a7")
all_pos <- expand.grid(x=seq(-.2,.2,.1),y=seq(-.2,.2,.1))[-13,]

dat <- tibble()

for (i in 1:N) {

  pos_i <- all_pos[sample(x = 1:nrow(all_pos), size = K, replace = FALSE),]
  color_i <- sample(all_colors, size = K, replace = FALSE)
  switch_i <- sample(x = 1:K, size = 1)
  new_color_i <- sample(x = all_colors[!all_colors %in% color_i], size = 1)

  dat_i <- tibble(trial = i, answer = sprintf("probe%s",switch_i), height = height, width = width)

  for (k in 1:K) {

    probe_color = ifelse(k == switch_i, new_color_i, color_i[k])
    col_names <- paste0(c("x","y","stim_color","probe_color"),as.character(k))
    columns <- t(c(pos_i[k,"x"],pos_i[k,"y"],color_i[k],probe_color))
    colnames(columns) <- col_names
    dat_k <- as.data.frame(columns)
    dat_i <- dat_i %>% bind_cols(dat_k)

  }

  dat <- dat %>% bind_rows(dat_i)

}

write_csv(dat,"trials.csv")

dat