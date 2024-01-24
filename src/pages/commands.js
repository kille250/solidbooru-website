import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | Solidbooru-AI</title>
        <meta
          name="description"
          content="Commands page | Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/imagine prompt: model: lora: style: resolution: clip_skip: steps: amount: image:</kbd> -{" "}
                  <span className="p-color">Generate Images</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Search 🔎
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/search images search: position:</kbd> -{" "}
                  <span className="p-color">Search for approved images</span>
                </li>
                <li>
                  <kbd>/search likes search: position:</kbd> -{" "}
                  <span className="p-color">Search for liked images</span>
                </li>
                <li>
                  <kbd>/search all search: position:</kbd> -{" "}
                  <span className="p-color">Search for created images</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Template ⚙
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/template edit name: model: lora: style: resolution: steps: clip_skip:</kbd> -{" "}
                  <span className="p-color">Edit a specific template</span>
                </li>
                <li>
                  <kbd>/template set name:</kbd> -{" "}
                  <span className="p-color">Set a template as default</span>
                </li>
                <li>
                  <kbd>/template unset</kbd> -{" "}
                  <span className="p-color">Unset a template as default</span>
                </li>
                <li>
                  <kbd>/template show name:</kbd> -{" "}
                  <span className="p-color">Show a specific template from a user</span>
                </li>
                <li>
                  <kbd>/template show name:</kbd> -{" "}
                  <span className="p-color">Show a specific template from a user</span>
                </li>
                <li>
                  <kbd>/template add name: model: resolution: steps: clip_skip: lora: style:</kbd> -{" "}
                  <span className="p-color">Add a new template</span>
                </li>
                <li>
                  <kbd>/template list</kbd> -{" "}
                  <span className="p-color">List all templates of the user</span>
                </li>
                <li>
                  <kbd>/template remove name:</kbd> -{" "}
                  <span className="p-color">Remove a template</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
