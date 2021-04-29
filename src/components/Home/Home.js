import React from "react";
import ReactTypingEffect from "react-typing-effect";
import galaxy from "./galaxy.jpg"

const home = () => {
  return (
    <main>
      <img
        src={galaxy}
        alt=""
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive">
          <ReactTypingEffect
            text={[
              "Hello, welcome to my page! My name is Patrick, I am a software engineer by day and a coding addict by night! Please feel free to check out my projects! and thank you for stopping by!"
            ]}
            eraseSpeed={100}
            speed={80}
            eraseDelay={100000}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span key={key}>{char}</span>;
                  })}
                </h1>
              );
            }}
          />
        </h1>
      </section>
    </main>
  );
};

export default home;
