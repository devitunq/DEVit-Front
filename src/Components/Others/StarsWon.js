import React from "react";
import { Grid, Container, Button } from "@material-ui/core";

const emptyStart = () => {
  <svg
    viewBox='0 0 512 512'>
    <title> Star</title>
    <path d='M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z'
      fill='none'
      stroke='currentColor'
      stroke-linejoin='round'
      stroke-width='32' />
  </svg>
}

const StarsWon = (stars) => (
  <div>
    {emptyStart()}
  </div>
)





export default StarsWon;