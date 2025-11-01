import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  details,
  imgUrl,
  githubUrl,
  liveUrl,
  isExpanded,
  onExpand,
}) => {
  return (
    <motion.div
      className="project-card bg-gray-900 text-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative">
        <img src={imgUrl} alt={title} className="w-full h-56 object-cover" />
      </div>

      <div className="p-4">
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-300 mb-3">{description}</p>

        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onExpand}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none"
          >
            {isExpanded ? "Show Less ▲" : "Learn More ▼"}
          </button>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-xl"
                title="View on GitHub"
              >
                <FaGithub />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 text-sm flex items-center gap-1"
                title="View Live Demo"
              >
                <FaExternalLinkAlt />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-3 bg-gray-800 p-3 rounded-lg overflow-y-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ maxHeight: "220px" }}
            >
              <ul className="list-disc pl-4 space-y-1 text-sm text-gray-300">
                {details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
