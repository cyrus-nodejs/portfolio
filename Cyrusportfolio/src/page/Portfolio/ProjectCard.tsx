
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  details: string[];
  stack:string;
  githubUrl?: string;
  liveUrl?: string;
  isExpanded: boolean;
  onExpand: () => void;
};

export const ProjectCard = ({
  title,
  description,
  details,
  stack,
  githubUrl,
  liveUrl,
  isExpanded,
  onExpand,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="card bg-dark text-light rounded-4 shadow-lg h-100"
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-body p-4 d-flex flex-column">
        {/* Title */}
        <h5 className="card-title mb-2 fw-semibold">
          {title}
        </h5>
       
           {/* Short Description */}
        <p className="card-text text-secondary small mb-3">
          {description}
        </p>
         {/* Tech stack */}
        <p className="card-text text-secondary small mb-3">
          {stack}
        </p>
          
        {/* Actions */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button
            onClick={onExpand}
            className="btn btn-link p-0 text-info fw-medium text-decoration-none"
          >
            {isExpanded ? "Show Less ▲" : "Learn More ▼"}
          </button>

          <div className="d-flex align-items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
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
                className="text-info small d-flex align-items-center gap-1 text-decoration-none"
                title="View Live Demo"
              >
                <FaExternalLinkAlt />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="bg-secondary bg-opacity-25 rounded-3 p-3 mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <ul className="mb-0 ps-3 small text-light">
                {details.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
