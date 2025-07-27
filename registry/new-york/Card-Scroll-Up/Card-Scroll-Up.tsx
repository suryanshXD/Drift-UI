"use client";
import { motion } from "framer-motion";

interface content {
  img1: any;
  img2: any;
  img3: any;
  width: number;
}

export default function CardScrollUp({ img1, img2, img3, width }: content) {
  return (
    <>
      <motion.div
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
      >
        <motion.img
          variants={{
            initial: { opacity: 0, y: -20 },
            inView: { opacity: 1, x: -300 },
          }}
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 1.4 }}
          className="absolute"
          src={`${img1}`}
          alt="img"
          width={`${width}`}
        />
        <motion.img
          variants={{
            initial: { opacity: 0, y: -20 },
            inView: { opacity: 1, x: 0 },
          }}
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 1.4 }}
          className="absolute"
          src={`${img2}`}
          alt="img"
          width={`${width}`}
        />
        <motion.img
          variants={{
            initial: { opacity: 0, y: -20 },
            inView: { opacity: 1, x: 300 },
          }}
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 1.4 }}
          className="absolute"
          src={`${img3}`}
          alt="img"
          width={`${width}`}
        />
      </motion.div>
    </>
  );
}
