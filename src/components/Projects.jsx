import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'

const projects = [
  {
    title: 'Intelligent Investment Advisor',
    subtitle: 'Multi-Agent AI & LLM System',
    year: '2026',
    description: 'A sophisticated multi-agent AI system featuring Market Data, Analysis, Memory, and LLM agents delivering personalized stock recommendations with 80% improved discovery capability.',
    highlights: [
      'Multi-agent orchestration (Market Data, Analysis, Memory, LLM agents)',
      'Real-time APIs (Alpha Vantage, Yahoo Finance) with fallback handling',
      'Vector memory (ChromaDB) for contextual insights & personalization',
      'SSE-based real-time tracking with sentiment + volatility ranking',
    ],
    tags: ['React', 'Django', 'LLMs', 'Groq', 'HuggingFace', 'ChromaDB', 'JWT', 'Multi-Agent'],
    color: 'var(--purple)',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(34,211,238,0.08))',
    githubLink: 'https://github.com/anupamxy',
    featured: true,
    metric: { value: '80%', label: 'Better Stock Discovery' },
  },
  {
    title: 'AI Quiz Builder',
    subtitle: 'LLM-based PDF to Quiz System',
    year: '2026',
    description: 'An AI-powered quiz platform that converts PDFs into structured MCQs with answers and explanations using LLMs and intelligent chunking algorithms.',
    highlights: [
      'PDF-to-MCQ conversion using LLMs with chunking strategies',
      'Django REST + React full-stack implementation',
      'File upload, quiz interaction, and result evaluation',
      '50% efficiency improvement across 10K+ users',
    ],
    tags: ['Django REST', 'React', 'LLMs', 'PDF Parsing', 'REST API'],
    color: 'var(--cyan)',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(168,85,247,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: true,
    metric: { value: '10K+', label: 'Users Served' },
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.15 }}
      style={{ position: 'relative' }}
    >
      <div
        style={{
          background: project.gradient,
          border: `1px solid ${project.color}30`,
          borderRadius: '20px',
          padding: '32px',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'default',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${project.color}60`
          e.currentTarget.style.transform = 'translateY(-8px)'
          e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}20`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = `${project.color}30`
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Glow orb */}
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '160px', height: '160px',
          background: `radial-gradient(circle, ${project.color}20, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            {project.featured && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                fontSize: '11px', fontWeight: 600, fontFamily: 'var(--mono)',
                color: project.color, marginBottom: '10px',
                letterSpacing: '0.1em',
              }}>
                <FiStar size={11} /> FEATURED PROJECT
              </div>
            )}
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-bright)', marginBottom: '4px' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '13px', color: project.color, fontFamily: 'var(--mono)', fontWeight: 500 }}>
              {project.subtitle} · {project.year}
            </p>
          </div>

          {/* Metric badge */}
          <div style={{
            textAlign: 'center', padding: '12px 16px',
            background: `${project.color}15`, borderRadius: '12px',
            border: `1px solid ${project.color}30`,
            flexShrink: 0,
          }}>
            <div style={{ fontSize: '22px', fontWeight: 800, color: project.color, fontFamily: 'var(--mono)' }}>
              {project.metric.value}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text)', fontWeight: 500 }}>
              {project.metric.label}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.8, marginBottom: '20px' }}>
          {project.description}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          {project.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--text)', lineHeight: 1.6 }}>
              <span style={{ color: project.color, flexShrink: 0 }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map(tag => (
              <span key={tag} className="tag" style={{ borderColor: `${project.color}30`, color: project.color }}>
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <motion.a
              href={project.githubLink}
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.1, color: 'var(--text-bright)' }}
              style={{ color: 'var(--text)', fontSize: '20px', display: 'flex' }}
            >
              <FiGithub />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="section" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Things I&apos;ve Built</p>
          <h2 className="section-title">Featured Projects</h2>
          <p style={{ color: 'var(--text)', maxWidth: '600px', fontSize: '16px', lineHeight: 1.8, marginBottom: '48px' }}>
            A selection of my recent projects — focused on AI/ML integration, full-stack development, and building systems that scale.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '28px' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <a
            href="https://github.com/anupamxy"
            target="_blank" rel="noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex' }}
          >
            <FiGithub /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
