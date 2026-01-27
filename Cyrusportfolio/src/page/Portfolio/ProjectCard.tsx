import { motion, AnimatePresence } from "framer-motion";
import { Button, Badge } from "react-bootstrap";

interface Metric {
  label: string;
  value: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  details: string[];
  metrics?: Metric[];
  githubUrl?: string;
  liveUrl?: string;
  isExpanded: boolean;
  onExpand: () => void;
}

export const ProjectCard = ({
  title,
  description,
  stack,
  details,
  metrics,
  githubUrl,
  liveUrl,
  isExpanded,
  onExpand,
}: ProjectCardProps) => {
  return (
    <motion.div
      layout
      className="p-4 bg-dark text-light rounded-4 h-100 d-flex flex-column"
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h5 className="fw-semibold mb-0">{title}</h5>
        <Button size="sm" variant="outline-primary" onClick={onExpand}>
          {isExpanded ? "Hide" : "Details"}
        </Button>
      </div>

      {/* Description */}
      <p className="small text-secondary mb-2">{description}</p>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mb-3">
          {metrics.map((m) => (
            <Badge key={m.label} bg="secondary" className="fw-normal">
              {m.label}: {m.value}
            </Badge>
          ))}
        </div>
      )}

      {/* Stack */}
      <p className="small mb-3">
        <strong>Stack:</strong> {stack}
      </p>

      {/* Expandable Details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.ul
            className="small ps-3 mb-3 flex-grow-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Links */}
      <div className="mt-auto d-flex gap-3 flex-wrap">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
};
