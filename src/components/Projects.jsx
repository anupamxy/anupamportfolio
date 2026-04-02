import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiGithub, FiStar, FiCalendar } from 'react-icons/fi'

const projects = [
  {
    title: 'Intelligent Investment Advisor',
    subtitle: 'Multi-Agent AI & LLM System',
    period: 'Jan 2026 – Mar 2026',
    category: 'AI/GenAI',
    description: 'Built an intelligent AI-powered investment advisor generating personalized stock recommendations using a multi-agent architecture and LLMs. Designed a scalable Django REST backend with JWT auth, allowing users to define investment preferences (risk tolerance, budget, sectors).',
    highlights: [
      'Multi-agent pipeline: Market Data, Analysis, Memory, and LLM agents',
      'Custom scoring algorithm combining sentiment, momentum & volatility for dynamic budget allocation',
      'Long-term memory via ChromaDB vector embeddings for context-aware personalized outputs',
      'LLMs via Groq + Hugging Face with fallback mechanisms; real-time SSE streaming',
      'Integrated Alpha Vantage & Yahoo Finance APIs for real-time stock & sentiment data',
    ],
    tags: ['React', 'Django', 'Zustand', 'Tailwind CSS', 'ChromaDB', 'Groq', 'Hugging Face', 'JWT', 'SSE'],
    color: 'var(--purple)',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(34,211,238,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: true,
    metric: { value: '80%', label: 'Better Discovery' },
  },
  {
    title: 'AI-Powered PDF Quiz Generator',
    subtitle: 'LLM-based PDF to Quiz System',
    period: 'Jan 2026 – Feb 2026',
    category: 'AI/GenAI',
    description: 'Full-stack AI-powered quiz generation platform that converts PDF documents into interactive MCQs using LLMs. Handles large documents via chunking and supports multiple fallback models.',
    highlights: [
      'Django REST backend with PyPDF text extraction and chunking for large documents',
      'Fallback mechanism across Llama, Qwen, Mistral, Phi-3 for high availability',
      'Generates structured quiz data: questions, options, answers & explanations',
      'React (Vite) frontend with configurable difficulty & question count',
      '50% quiz creation efficiency improvement across 10K+ users',
    ],
    tags: ['React', 'Django', 'Hugging Face', 'PyPDF', 'SQLite', 'Axios'],
    color: 'var(--cyan)',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(168,85,247,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: true,
    metric: { value: '10K+', label: 'Users Served' },
  },
  {
    title: 'AI PDF Summarizer',
    subtitle: 'Django + React + NLP',
    period: 'Jan 2026 – Jan 2026',
    category: 'AI/GenAI',
    description: 'Full-stack AI-powered PDF summarization platform using transformer-based NLP. Stateless Django REST API with PyMuPDF and Hugging Face BART model for efficient summarization.',
    highlights: [
      'Stateless Django REST API with in-memory PDF processing via PyMuPDF',
      'BART-based summarization with chunk-based processing for large inputs',
      'Singleton model loading for optimized performance',
      'React frontend with drag-and-drop upload, real-time loading states & copy functionality',
    ],
    tags: ['React', 'Django', 'PyMuPDF', 'Hugging Face', 'PyTorch', 'Axios'],
    color: 'var(--pink)',
    gradient: 'linear-gradient(135deg, rgba(244,114,182,0.12), rgba(168,85,247,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: false,
    metric: { value: 'NLP', label: 'BART Model' },
  },
  {
    title: 'BrewsTest',
    subtitle: 'Test Case Management Platform',
    period: '',
    category: 'Full Stack',
    description: 'A collaborative test case management platform with admin-controlled access, real-time collaboration, and advanced analytics.',
    highlights: [
      'Secure login with admin-verified credentials and team-specific test cases',
      'CRUD operations on test cases with offline download support',
      'Analytics page with graphs & charts for test case performance',
      'Real-time writing pad + chat for team collaboration via WebSockets',
      'Google login integration and customizable real-time chatbot',
    ],
    tags: ['MongoDB', 'Socket.io', 'React', 'Node.js', 'Express'],
    color: 'var(--green)',
    gradient: 'linear-gradient(135deg, rgba(74,222,128,0.10), rgba(34,211,238,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: false,
    metric: { value: 'RT', label: 'Real-time Collab' },
  },
  {
    title: 'SafetyNet360',
    subtitle: 'Comprehensive Road Safety Solution',
    period: 'Feb 2024',
    category: 'IoT/Hardware',
    description: 'A complete safety and accident mitigation system reducing vehicle accident risk and improving emergency response. Integrates Arduino, real-time data analysis, predictive analytics, and advanced communication protocols.',
    highlights: [
      'Collision detection and drowsiness monitoring using Arduino sensors',
      'Real-time accident mapping and predictive analytics',
      'Emergency response with real-time consultation with medical professionals',
      'Secured Top 5 rank at HACK36 among 1000+ participants',
    ],
    tags: ['MongoDB', 'Arduino IDE', 'React', 'Node.js', 'IoT'],
    color: 'var(--yellow)',
    gradient: 'linear-gradient(135deg, rgba(250,204,21,0.10), rgba(249,115,22,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: false,
    metric: { value: 'Top 5', label: 'HACK36' },
  },
  {
    title: 'Money Memento',
    subtitle: 'Transaction Management System',
    period: '',
    category: 'Full Stack',
    description: 'Seamless transaction management web app with unparalleled UX, ready for production deployment. Built for startups with scalable infrastructure.',
    highlights: [
      'Comprehensive transaction recording, tracking and analytics',
      'PayPal-powered payment gateway integration',
      'Admin dashboard with full order and user management',
      'Scalable MongoDB backend with real-time updates',
    ],
    tags: ['MongoDB', 'React', 'Node.js', 'Express', 'ChakraUI', 'PayPal'],
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.10), rgba(250,204,21,0.06))',
    githubLink: 'https://github.com/anupamxy/Money_memento_webster',
    featured: false,
    metric: { value: 'FinTech', label: 'Production Ready' },
  },
  {
    title: 'App Ki Dukan',
    subtitle: 'E-Commerce Platform (Make in India)',
    period: '',
    category: 'Full Stack',
    description: 'Innovative e-commerce platform supporting local businesses under the Make in India initiative. Full admin and user flows with PayPal payment gateway.',
    highlights: [
      'Admin: product creation, pricing, tagging, image management and order tracking',
      'User: category/price filtering, cart with live total, user profiles',
      'PayPal-powered secure payment gateway',
      'Fully responsive design with MongoDB for scalable data storage',
    ],
    tags: ['MongoDB', 'React', 'Node.js', 'Express', 'Bootstrap', 'PayPal'],
    color: 'var(--cyan)',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.10), rgba(74,222,128,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: false,
    metric: { value: 'MERN', label: 'Full Stack' },
  },
  {
    title: 'GmeetByAnupam',
    subtitle: 'Real-time Video Communication App',
    period: '',
    category: 'Real-time',
    description: 'Web application for real-time video communication using React, Node.js and Express. Users join rooms by entering a room number and name, enabling seamless video calls.',
    highlights: [
      'Room-based video calling with real-time peer-to-peer communication',
      'WebSocket-powered real-time signaling and lobby management',
      'Built with React frontend and Node/Express backend',
    ],
    tags: ['React', 'Node.js', 'Express', 'Socket.io', 'WebRTC'],
    color: 'var(--purple)',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.10), rgba(244,114,182,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: false,
    metric: { value: 'P2P', label: 'Video Calls' },
  },
  {
    title: 'WE CHAT',
    subtitle: 'Real-time Chat Application',
    period: '',
    category: 'Real-time',
    description: 'Dynamic and interactive chat application with React and WebSockets enabling real-time communication and seamless collaboration.',
    highlights: [
      'Instant messaging with WebSocket real-time data transmission',
      'Secure chat with responsive React frontend',
      'Interactive and immersive chat experience',
    ],
    tags: ['React', 'WebSocket', 'Node.js'],
    color: 'var(--green)',
    gradient: 'linear-gradient(135deg, rgba(74,222,128,0.10), rgba(34,211,238,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: false,
    metric: { value: 'RT', label: 'WebSocket' },
  },
  {
    title: 'College Study Hub',
    subtitle: 'MERN Stack Student Platform',
    period: '',
    category: 'Full Stack',
    description: 'Comprehensive study platform for college students with personalized study plans, note management, and communication features. Built solo on the MERN stack.',
    highlights: [
      'Personalized study plans and note management system',
      'Student communication and collaboration features',
      'Responsive design with Bootstrap',
      'MongoDB-backed scalable data management',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap'],
    color: 'var(--pink)',
    gradient: 'linear-gradient(135deg, rgba(244,114,182,0.10), rgba(168,85,247,0.06))',
    githubLink: 'https://github.com/anupamxy',
    featured: false,
    metric: { value: 'MERN', label: 'Solo Build' },
  },
]

const categories = ['All', 'AI/GenAI', 'Full Stack', 'Real-time', 'IoT/Hardware']

function ProjectCard({ project, inView, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      style={{ height: '100%' }}
    >
      <div
        style={{
          background: project.gradient,
          border: `1px solid ${project.color}25`,
          borderRadius: '16px',
          padding: '24px',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${project.color}55`
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = `0 16px 48px ${project.color}18`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = `${project.color}25`
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* glow */}
        <div style={{
          position: 'absolute', top: '-30px', right: '-30px',
          width: '120px', height: '120px',
          background: `radial-gradient(circle, ${project.color}18, transparent 70%)`,
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
              {project.featured && (
                <span style={{
                  fontSize: '10px', fontWeight: 700, fontFamily: 'var(--mono)',
                  color: project.color, letterSpacing: '0.1em',
                  display: 'flex', alignItems: 'center', gap: '3px',
                }}>
                  <FiStar size={10} /> FEATURED
                </span>
              )}
              <span style={{
                fontSize: '10px', padding: '2px 8px', borderRadius: '50px',
                background: `${project.color}15`, color: project.color,
                border: `1px solid ${project.color}25`, fontFamily: 'var(--mono)', fontWeight: 600,
              }}>
                {project.category}
              </span>
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-bright)', marginBottom: '3px', lineHeight: 1.3 }}>
              {project.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '12px', color: project.color, fontFamily: 'var(--mono)', fontWeight: 500 }}>
                {project.subtitle}
              </p>
              {project.period && (
                <span style={{ fontSize: '11px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '3px', fontFamily: 'var(--mono)' }}>
                  <FiCalendar size={10} /> {project.period}
                </span>
              )}
            </div>
          </div>
          <div style={{
            textAlign: 'center', padding: '8px 12px',
            background: `${project.color}12`, borderRadius: '10px',
            border: `1px solid ${project.color}25`, flexShrink: 0,
          }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: project.color, fontFamily: 'var(--mono)' }}>
              {project.metric.value}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text)', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {project.metric.label}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.7, marginBottom: '14px' }}>
          {project.description}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px', flex: 1 }}>
          {project.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--text)', lineHeight: 1.6 }}>
              <span style={{ color: project.color, flexShrink: 0 }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '10px', padding: '2px 8px', borderRadius: '50px',
                background: `${project.color}10`, color: project.color,
                border: `1px solid ${project.color}20`, fontFamily: 'var(--mono)',
              }}>
                {tag}
              </span>
            ))}
          </div>
          <motion.a
            href={project.githubLink}
            target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.15, color: 'var(--text-bright)' }}
            style={{ color: 'var(--text)', fontSize: '18px', display: 'flex', flexShrink: 0 }}
          >
            <FiGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="section" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Things I&apos;ve Built</p>
          <h2 className="section-title">Projects</h2>
          <p style={{ color: 'var(--text)', maxWidth: '600px', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
            A full collection of my work — from AI/GenAI systems to full-stack platforms and real-time apps.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '50px',
                border: `1px solid ${activeCategory === cat ? 'var(--purple)' : 'var(--border)'}`,
                background: activeCategory === cat ? 'rgba(168,85,247,0.15)' : 'transparent',
                color: activeCategory === cat ? 'var(--purple)' : 'var(--text)',
                fontSize: '13px', fontWeight: 600, fontFamily: 'var(--mono)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {cat}
              <span style={{
                marginLeft: '6px', fontSize: '11px',
                color: activeCategory === cat ? 'var(--purple)' : 'var(--text)',
                opacity: 0.7,
              }}>
                {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '20px',
            }}
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '52px' }}
        >
          <a href="https://github.com/anupamxy" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex' }}>
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
