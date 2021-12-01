import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var booksDB = {
    science: [
      { book: "Mutation", rating: "4/5" },
      { book: "Around the World in 80 Days", rating: "4.2/5" }
    ],
    romance: [
      { book: "Life Is What You Make It", rating: "4.5/5" },
      { book: "The promise", rating: "4.4/5" },
      { book: "The One You Cannot Have", rating: "4.3/5" },
      { book: "It Happens for a Reason", rating: "4/5" }
    ],
    fantacy: [
      { book: "The Lightning Thief", rating: "4/5" },
      { book: "The Sea of Monsters", rating: "4/5" }
    ]
  };

  var g = ["science", "romance", "fantacy"];
  const [genre, setgenre] = useState("romance");
  var captureGenre = (g) => {
    setgenre(g);
  };

  // var [active, setActive] = useState(true);
  // var toggleClass = () => {
  //   setActive(!active);
  // };

  return (
    <div className="App">
      <h1>📚 My Books Collection</h1>
      <h5>Checkout my favorite books. Select a genre to get started</h5>
      {g.map((done) => {
        return (
          <button
            key={done}
            className={done === genre ? "active" : ""}
            onClick={() => {
              captureGenre(done);
            }}
          >
            {done}
          </button>
        );
      })}
      <hr></hr>
      <ul>
        {booksDB[genre].map((event) => {
          return (
            <li key={event.book}>
              {event.book}
              <br></br>
              <span>{event.rating}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
