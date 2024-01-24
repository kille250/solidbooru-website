import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Solidbooru-AI</h1>
        <h2 className="showcase-header-text h-color">
          Generate awesome images or chat via AI for free!
        </h2>
        <p className="showcase-para p-color">
          Feel free to browse, like and share thousands of created images.
        </p>

        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1186728006891343913&scope=bot">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/invite/aFsdveRv2R">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
