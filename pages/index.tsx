import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Context = React.createContext<number>(0);

const duration = "transition-all duration-500";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Adam Juhasz</title>
      </Head>

      <header className="sticky top-0 w-full flex justify-end p-4 font-bold z-50 pointer-events-none">
        <h1 className="text-3xl">Adam Juhasz</h1>
      </header>

      <main
        className={[
          "flex flex-col w-full px-7 font-medium text-white hover:text-zinc-600 min-h-full lg:mt-20 text-5xl",
          duration,
        ].join(" ")}
      >
        <SectionIndex>
          <Context.Consumer>
            {(val) => (
              <a href={`#${val}`}>
                <ShowIndex index={val} />
                Haskell
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href={`#${val}`}>
                <ShowIndex index={val} />
                Typescript
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href="https://github.com/adamjuhasz">
                <ShowIndex index={val} />
                Github
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href="https://www.linkedin.com/in/ajuhasz/">
                <ShowIndex index={val} />
                Linked In
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href="mailto:adam@ajuhasz.io">
                <ShowIndex index={val} />
                Email
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href={`#${val}`}>
                <ShowIndex index={val} />
                Pay Tgthr
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href={`#${val}`}>
                <ShowIndex index={val} />
                Figure Eight
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href={`#${val}`}>
                <ShowIndex index={val} />
                Alana
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href={`#${val}`}>
                <ShowIndex index={val} />
                LenSx Lasers
              </a>
            )}
          </Context.Consumer>

          <Context.Consumer>
            {(val) => (
              <a href={`#${val}`}>
                <ShowIndex index={val} />
                Alcon
              </a>
            )}
          </Context.Consumer>
        </SectionIndex>
      </main>

      <div className="fixed top-0 w-full h-1/6 lg:h-40 bg-gradient-to-b from-black z-10 pointer-events-none" />
      <div className="fixed bottom-0 w-full h-1/6 lg:h-56 bg-gradient-to-t from-black z-10 pointer-events-none" />
    </div>
  );
};

export default Home;

function SectionIndex(props: React.PropsWithChildren<unknown>) {
  const sections = React.Children.map(props.children, (ch, idx) => {
    return (
      <Context.Provider value={idx}>
        <Section>{ch}</Section>
      </Context.Provider>
    );
  });

  if (!sections) return <></>;

  return <>{sections}</>;
}

function Section(props: React.PropsWithChildren<unknown>) {
  return (
    <section
      className={[
        "hover:text-white cursor-pointer py-1.5 transition-all duration-500 hover:z-20",
        duration,
      ].join(" ")}
    >
      {props.children}
    </section>
  );
}

function ShowIndex({ index }: { index: number }) {
  return (
    <>
      <span className="font-mono">{index.toString().padStart(2, "0")}.</span>{" "}
    </>
  );
}
