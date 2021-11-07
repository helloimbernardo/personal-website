import Head from "next/head";

import ConsistentHead from "../components/ConsistentHead";

export default function FourOhFour() {
  return (
    <div>
      <Head>
        <title>Page Not Found | Bernardo Oliveira</title>
        <ConsistentHead />
      </Head>

      <div className="w-screen h-screen bg-gray-800 grid place-items-center">
        <div className="m-4 font-sans text-center text-white text-5xl">
          <h1 className="text-8xl font-bold">404</h1>
          <h2>Seems like the page you are looking for doesn't exist</h2>
          <h3>
            Visit the{" "}
            <a
              className="font-mono text-white border-purple-400 border-b-4"
              href="https://helloimbernardo.ml"
            >
              homepage
            </a>{" "}
            to try to find what you're looking for
          </h3>
        </div>
      </div>
    </div>
  );
}
