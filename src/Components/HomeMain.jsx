import React from "react";
import "./HomeMain.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const HomeMain = () => {
  return (
    <div className="main">
      <div className="links">
        <h1>30% Off! LIMITED TIME OFFER</h1>

        <Stack spacing={2} direction="row">
          <Button variant="contained">Shop Now!</Button>
        </Stack>
      </div>
      <div className="info">
        <article>
          Welcome to our delightful Ecommerce Bird Store, where your avian
          companions' happiness takes flight! Here, you'll find a world of
          feathered wonder waiting to brighten your home and garden. From
          vibrant canaries to majestic parrots, our diverse selection of birds
          and bird-related products will capture the hearts of bird enthusiasts
          and nature lovers alike. Explore our aviary of quality cages,
          nourishing feeds, and an array of toys and accessories that will
          transform your space into a bird-friendly haven. Whether you're an
          experienced avian aficionado or just starting your feathered journey,
          our Ecommerce Bird Store is the perfect destination to bring a touch
          of nature's beauty into your life. So spread your wings and embark on
          a shopping adventure filled with chirps, colors, and endless
          possibilities!
        </article>
      </div>
    </div>
  );
};

export default HomeMain;
