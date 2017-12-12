import React from "react";

function Body(props){


    return(
      <div className="main">
      <section className="info">
      <img src={require("./assets/welcome-to-hell.jpg")}/>
      <p><b>Info section,</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </section>

 <div className="products">
        <figure>
            <img className="main-product" src={require("./assets/zinn-book.jpg")}/>
              <figcaption className="cap1">
                A People's History of the United States<br></br>
                <b>Author:</b> Howard Zinn<br></br>
                <b>Price:</b> $20.00
              </figcaption>
        </figure>
        <figure>
            <img className="main-product"src={require("./assets/zinn-book2.jpg")}/>
              <figcaption className="cap1">
                You Can't Be Neutral on a Moving Train<br></br>
                <b>Author:</b> Howard Zinn<br></br>
                <b>Price:</b> $20.00
              </figcaption>
        </figure>
        <figure>
            <img className="main-product"src={require("./assets/chomsky-book.jpg")}/>
              <figcaption className="cap1">
                On Empire, Occupy and the Arab Spring<br></br>
                <b>Author:</b> Noam Chomsky<br></br>
                <b>Price:</b> $13.00
              </figcaption>
        </figure>

      </div>
    </div>
  )
}

export default Body;
