import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    label: 'Frontend',
    color: 'var(--cyan)',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'WebSocket', 'Chart.js', 'Framer Motion'],
  },
  {
    label: 'Backend',
    color: 'var(--purple)',
    skills: ['Node.js', 'Express.js', 'Go (Golang)', 'Python', 'Django', 'Spring Boot', 'REST APIs', 'JWT/Auth'],
  },
  {
    label: 'AI / GenAI',
    color: 'var(--pink)',
    skills: ['LLMs', 'LangChain', 'RAG', 'Prompt Engineering', 'Multi-Agent Systems', 'Hugging Face', 'Ollama', 'ChromaDB', 'MCP', 'Azure OpenAI', 'Groq'],
  },
  {
    label: 'Databases',
    color: 'var(--green)',
    skills: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL', 'Azure AI Search'],
  },
  {
    label: 'DevOps & Cloud',
    color: 'var(--yellow)',
    skills: ['AWS (SES, S3)', 'Docker', 'Git', 'CI/CD', 'Nginx', 'Netlify', 'Vercel'],
  },
  {
    label: 'CS Fundamentals',
    color: '#f97316',
    skills: ['DSA', 'LLD', 'HLD', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  },
]

const languages = [
  { name: 'JavaScript', level: 95, color: '#f7df1e' },
  { name: 'TypeScript', level: 88, color: '#3178c6' },
  { name: 'Python', level: 85, color: '#3776ab' },
  { name: 'Go', level: 80, color: '#00add8' },
  { name: 'C/C++', level: 82, color: '#659ad2' },
  { name: 'Java', level: 72, color: '#ed8b00' },
]

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-bright)', fontFamily: 'var(--mono)' }}>{name}</span>
        <span style={{ fontSize: '12px', color: 'var(--text)', fontFamily: 'var(--mono)' }}>{level}%</span>
      </div>
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{ height: '100%', background: `linear-gradient(90deg, ${color}, ${color}99)`, borderRadius: '3px' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills">
      <div className="section" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">My Toolkit</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px', marginTop: '48px' }}>
          {/* Language proficiency */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--purple)' }}>{'</>'}</span> Languages
            </h3>
            {languages.map((l, i) => (
              <SkillBar key={l.name} {...l} delay={0.3 + i * 0.08} inView={inView} />
            ))}
          </motion.div>

          {/* Skill categories grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--cyan)' }}>⚡</span> Tech Stack
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {skillCategories.map((cat, ci) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + ci * 0.08 }}
                  style={{ padding: '16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', borderLeft: `3px solid ${cat.color}` }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 700, color: cat.color, fontFamily: 'var(--mono)', letterSpacing: '0.12em', marginBottom: '10px' }}>
                    {cat.label.toUpperCase()}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cat.skills.map(s => (
                      <motion.span
                        key={s}
                        whileHover={{ scale: 1.08, background: `${cat.color}20` }}
                        style={{
                          fontSize: '12px', padding: '3px 10px',
                          borderRadius: '50px',
                          background: `${cat.color}10`,
                          color: cat.color,
                          border: `1px solid ${cat.color}25`,
                          fontFamily: 'var(--mono)',
                          cursor: 'default', transition: 'all 0.2s',
                        }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
