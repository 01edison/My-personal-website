import React from "react";
import StackCard from "../misc/StackCard";
import { stack } from "./tech-stack";
import "./stack.css";

const Stack = ({ screenWidth }) => {
  return (
    <div id="stack">
      <section className="tech-stack-section container">
        <h1 className="text-center stack-title pt-3">Tech Stack</h1>
        <p className="text-center stack-subtitle">
          These are some of the technologies that I work with.
        </p>
        <div className="stack-cards-container">
          {screenWidth <= 1024 ? (
            <div className="row">
              {stack.map((s, i) => (
                <StackCard
                  key={i}
                  img={s.img}
                  text={s.text}
                  col={"col-lg-2 col-md-2 col-sm-3 mx-4"}
                />
              ))}
            </div>
          ) : (
            <>
              <div className="row-1">
                <StackCard img={"/img/stack-imgs/html.png"} text={"HTML5"} />
                <StackCard img={"/img/stack-imgs/css.png"} text={"CSS3"} />
                <StackCard
                  img={"/img/stack-imgs/React-icon.png"}
                  text={"REACT.js"}
                />
                <StackCard
                  img={"/img/stack-imgs/bootstrap.jpg"}
                  text={"BOOTSTRAP"}
                />
                <StackCard
                  img={"/img/stack-imgs/nodejs.png"}
                  text={"NODE.js"}
                />
                <StackCard
                  img={"/img/stack-imgs/express.png"}
                  text={"EXPRESS.js"}
                />
              </div>
              <div className="row-2">
                <StackCard
                  img={"/img/stack-imgs/nextjs.png"}
                  text={"NEXT.js"}
                />
                <StackCard
                  img={"/img/stack-imgs/mongodb.png"}
                  text={"MONGODB"}
                />
                <StackCard
                  img={"/img/stack-imgs/solidity.png"}
                  text={"SOLIDITY"}
                />
                <StackCard
                  img={"/img/stack-imgs/moralis.jpg"}
                  text={"MORALIS"}
                />
                <StackCard
                  img={"/img/stack-imgs/hardhat.png"}
                  text={"HARDHAT"}
                />
                <StackCard
                  img={"/img/stack-imgs/ethers.png"}
                  text={"ETHERS.js"}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Stack;
