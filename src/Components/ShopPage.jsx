import "./ShopPage.css";
import Header from "./Header";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import DrawerList from "./Drawer";
import React, { useState } from "react";
import { Button } from "@mui/material";

const ShopPage = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };
  const [cart, setCart] = useState([]);
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    // Determine which bird's quantity to check based on the item name
    let birdQuantity;
    switch (item.name) {
      case "Bald Eagle":
        birdQuantity = quantityBird1;
        break;
      case "Horned Owl":
        birdQuantity = quantityBird2;
        break;
      case "Peregrine Falcon":
        birdQuantity = quantityBird3;
        break;
      case "Red Tailed Hawk":
        birdQuantity = quantityBird4;
        break;
      default:
        birdQuantity = 0;
    }
    if (birdQuantity > 0) {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      handleSnackbarOpen(`${item.name} added to the cart!`); // Display the item name in the Snackbar
      console.log(item);
    } else {
      console.log("No item");
    }
  };

  const [quantityBird1, setQuantityBird1] = useState(0);
  const [quantityBird2, setQuantityBird2] = useState(0);
  const [quantityBird3, setQuantityBird3] = useState(0);
  const [quantityBird4, setQuantityBird4] = useState(0);

  const handleIncrementBird1 = () => {
    setQuantityBird1(quantityBird1 + 1);
  };

  const handleDecrementBird1 = () => {
    if (quantityBird1 > 0) {
      setQuantityBird1(quantityBird1 - 1);
    }
  };

  const handleIncrementBird2 = () => {
    setQuantityBird2(quantityBird2 + 1);
  };

  const handleDecrementBird2 = () => {
    if (quantityBird2 > 0) {
      setQuantityBird2(quantityBird2 - 1);
    }
  };

  const handleIncrementBird3 = () => {
    setQuantityBird3(quantityBird3 + 1);
  };

  const handleDecrementBird3 = () => {
    if (quantityBird3 > 0) {
      setQuantityBird3(quantityBird3 - 1);
    }
  };

  const handleIncrementBird4 = () => {
    setQuantityBird4(quantityBird4 + 1);
  };

  const handleDecrementBird4 = () => {
    if (quantityBird4 > 0) {
      setQuantityBird4(quantityBird4 - 1);
    }
  };

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleSnackbarClose}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <Header cart={cart} setCart={setCart} />
      <div className="hero">
        <div className="container1">
          <h1>Songbirds</h1>
          <article>
            Songbirds, also known as passerines, are known for their melodious
            songs and beautiful plumage. They belong to the largest order of
            birds and include a wide variety of species. From the cheerful
            melodies of the American Robin to the enchanting tunes of the
            Nightingale, songbirds fill the air with music. Canaries are prized
            for their sweet songs, while Blue Jays are known for their striking
            blue feathers. Sparrows, with their subtle beauty, can be found in
            urban and rural environments worldwide.
          </article>
        </div>
        <div className="container2">
          <h1>Waterfowl</h1>
          <article>
            Waterfowl are a diverse group of birds that thrive in aquatic
            habitats. Mallard Ducks are one of the most recognizable, with their
            vibrant green heads and quacks. Graceful Swans are known for their
            elegant presence on lakes and ponds. Canada Geese are famous for
            their V-shaped formations during migration. Wood Ducks display
            stunning iridescent colors, and Mandarin Ducks are celebrated for
            their ornate plumage.
          </article>
        </div>
        <div className="container3">
          <h1>Birds of Prey</h1>
          <article>
            Birds of prey, or raptors, are formidable hunters with sharp beaks
            and talons. The Bald Eagle, a symbol of strength and freedom, is the
            national bird of the United States. Red-tailed Hawks soar high above
            fields, while Peregrine Falcons are known for their incredible speed
            during hunting dives. Great Horned Owls, with their tufted "horns,"
            are nocturnal hunters, and Ospreys are expert fishers with
            distinctive black eye markings.
          </article>
        </div>
        <div className="container4">
          <h1>Parrots</h1>
          <article>
            Parrots are renowned for their vibrant plumage, intelligence, and
            ability to mimic sounds. The African Grey Parrot is famous for its
            exceptional talking abilities and problem-solving skills. Macaws are
            strikingly colorful, with species like the Scarlet Macaw captivating
            with their red and blue hues. Cockatoos are known for their crest of
            feathers and playful personalities. Budgerigars, or Budgies, are
            small parrots cherished as pets for their sociable nature and chirpy
            conversations. Lovebirds are named for their strong pair bonds and
            affectionate behaviors.
          </article>
        </div>
      </div>
      <div className="shop">
        <div className="birdsofprey">
          <div className="container">
            <div className="bird1">
              <div className="shopLink">
                <h1>Bald Eagle</h1>
                <p>Price :99USD</p>
                <button onClick={handleIncrementBird1}>+</button>
                <input type="number" value={quantityBird1} min="0" />
                <button onClick={handleDecrementBird1}>-</button>

                <Button
                  className="addBtn"
                  onClick={() => addToCart({ name: "Bald Eagle" })}
                >
                  Add to Cart
                  <i className="bx bx-cart-add"></i>
                </Button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bird2">
              <div className="shopLink">
                <h1>Horned Owl</h1>
                <p>Price :99USD</p>
                <button type="button" onClick={handleIncrementBird2}>
                  +
                </button>
                <input type="text" min="0" value={quantityBird2} />
                <button type="button" onClick={handleDecrementBird2}>
                  -
                </button>
                <Button
                  className="addBtn"
                  onClick={() => addToCart({ name: "Horned Owl" })}
                >
                  Add to Cart
                  <i className="bx bx-cart-add"></i>
                </Button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bird3">
              <div className="shopLink">
                <h1>Peregrine Falcon</h1>
                <p>Price :99USD</p>
                <button type="button" onClick={handleIncrementBird3}>
                  +
                </button>
                <input type="text" min="0" value={quantityBird3} />
                <button type="button" onClick={handleDecrementBird3}>
                  -
                </button>
                <Button
                  className="addBtn"
                  onClick={() => addToCart({ name: "Peregrine Falcon" })}
                >
                  Add to Cart
                  <i className="bx bx-cart-add"></i>
                </Button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bird4">
              <div className="shopLink">
                <h1>Red Tailed Hawk</h1>
                <p>Price :99USD</p>
                <button type="button" onClick={handleIncrementBird4}>
                  +
                </button>
                <input type="text" min="0" value={quantityBird4} />
                <button type="button" onClick={handleDecrementBird4}>
                  -
                </button>
                <Button
                  className="addBtn"
                  onClick={() => addToCart({ name: "Red Tailed Hawk" })}
                >
                  Add to Cart
                  <i className="bx bx-cart-add"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="parrot">
          <div className="container">
            <div className="bird1">
              <div className="shopLink">
                <h1>African Parrot</h1>
                <p>Price :99USD</p>
                <button type="button">+</button>
                <input type="text" placeholder="0" />
                <button type="button">-</button>
                <a href="">
                  <i className="bx bx-cart-add"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bird2">
              <div className="shopLink">
                <h1>Budgerigar</h1>
                <p>Price :99USD</p>
                <button type="button">+</button>
                <input type="text" placeholder="0" />
                <button type="button">-</button>
                <a href="">
                  <i className="bx bx-cart-add"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bird3">
              <div className="shopLink">
                <h1>Cockatoo</h1>
                <p>Price :99USD</p>
                <button type="button">+</button>
                <input type="text" placeholder="0" />
                <button type="button">-</button>
                <a href="">
                  <i class="bx bx-cart-add"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bird4">
              <div className="shopLink">
                <h1>Macaw</h1>
                <p>Price :99USD</p>
                <button type="button">+</button>
                <input type="text" placeholder="0" />
                <button type="button">-</button>
                <a href="">
                  <i className="bx bx-cart-add"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="songbird"></div>
        <div className="waterfowl"></div>
      </div>
    </div>
  );
};

export default ShopPage;
