library(tidyverse)

setwd("/Users/adkinsty/Desktop/change-localization")

N <- 5
set_size <- 5

height <- .05
width <- .05

# Colors:      Black      Orange     Skyblue   BluGreen    Yellow      Blue    Vermillion  RedPurple
all_colors <- c("#000000", "#e69f00", "#56b4e9", "#009e73", "#f0e442", "#0072b2", "#d55e00", "#cc79a7")
all_pos <- expand.grid(x=seq(-.3,.3,.15),y=seq(-.3,.3,.15))

dat <- tibble()

for (i in 1:N) {

  pos_i <- all_pos[sample(x = 1:nrow(all_pos), size = set_size, replace = FALSE),]
  color_i <- all_colors[sample(x = 1:length(all_colors), size = set_size, replace = FALSE)]
  switch_i <- sample(x = 1:set_size, size = 1)
  new_color_i <- sample(x = all_colors[!all_colors %in% color_i], size = 1)

  dat_i <- tibble(trial = i, answer = switch_i, height = height, width = width)

  for (k in 1:set_size) {

    if (k == switch_i) {
      probe_color <- new_color_i
    } else {
      probe_color <- color_i[k]
    }

    col_names <- paste0(c("x","y","stim_color","probe_color"),as.character(k))
    columns <- t(c(pos_i[k,"x"],pos_i[k,"y"],color_i[k],probe_color))
    colnames(columns) <- col_names
    dat_k <- as.data.frame(columns)
    dat_i <- dat_i %>% bind_cols(dat_k)

  }

  dat <- dat %>% bind_rows(dat_i)

}

write_csv(dat,"trials.csv")