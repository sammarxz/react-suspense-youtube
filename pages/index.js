import { Suspense } from "react";
import { motion } from "framer-motion";

import TwitterStats from "../components/twitter-stats";
import InstagramStats from "../components/instagram-stats";
import YouTubeStats from "../components/youtube-stats";
import Loading from "../components/loading";

let parent = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

let stat = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Home() {
  return (
    <div className="p-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Dashboard</h3>

      <Suspense fallback={<Loading />}>
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-3"
        >
          <motion.div variants={stat}>
            <TwitterStats />
          </motion.div>
          <motion.div variants={stat}>
            <YouTubeStats />
          </motion.div>
          <motion.div variants={stat}>
            <InstagramStats />
          </motion.div>
        </motion.div>
      </Suspense>
    </div>
  );
}
