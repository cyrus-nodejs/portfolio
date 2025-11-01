import { Container, Row, Col } from "react-bootstrap";
import { motion, Variants } from "framer-motion";
import TrackVisibility from "react-on-screen";
import { ExternalLink } from "lucide-react";
import { useUnifiedBlogs } from "../../hooks/useUnifiedBlogs";
import "animate.css";
import "./Blog.css";

const BlogSection = () => {
  const { blogs, loading } = useUnifiedBlogs("emmanueladeyemi", "yourhashnodeusername"); // ← replace with your handles

  // ✅ Define variants as plain objects (no functions)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="blog" id="blog">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-4"
                  >
                    Blog & Insights
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center text-muted mb-5"
                  >
                    Thoughts on engineering, backend architecture, and AI systems — directly from Dev.to and Hashnode.
                  </motion.p>

                  {loading ? (
                    <p className="text-center text-muted">Loading latest posts...</p>
                  ) : (
                    <Row>
                      {blogs.map((blog, index) => (
                        <motion.div
                          key={blog.id}
                          className="col-md-6 col-lg-4 mb-4"
                          variants={fadeUp}
                          initial="hidden"
                          animate="visible"
                          transition={{
                            delay: index * 0.15, // ✅ staggered effect per card
                            duration: 0.6,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="blog-card p-4 rounded-3 shadow-sm h-100 bg-white hover:shadow-lg transition-all duration-300">
                            {blog.cover_image && (
                              <img
                                src={blog.cover_image}
                                alt={blog.title}
                                className="img-fluid rounded mb-3"
                                style={{ objectFit: "cover", height: "180px", width: "100%" }}
                              />
                            )}
                            <h5 className="fw-bold mb-2">{blog.title}</h5>
                            <p className="text-muted small mb-2">
                              {new Date(blog.date).toLocaleDateString()} — {blog.platform}
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                              {blog.tags.map((tag, i) => (
                                <span key={i} className="badge bg-light text-dark border">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <p className="text-muted">
                              {blog.description?.substring(0, 120)}...
                            </p>
                            <div className="mt-3">
                              <a
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2"
                              >
                                <ExternalLink size={16} />
                                Read More
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </Row>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
