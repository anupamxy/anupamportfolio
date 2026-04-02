import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    company: 'GetWork',
    role: 'Software Development Engineer - 1',
    period: 'Dec 2024 – Present',
    location: 'Onsite',
    type: 'Full-time',
    color: 'var(--purple)',
    points: [
      'Delivered payments, subscriptions & schedulers for 3 production apps (50K+ users) using Razorpay, Go, Python, React & AWS SES/S3',
      'Designed GenAI semantic search with Azure OpenAI embeddings + Azure AI Search, boosting resume–job relevance by 50%',
      'Enabled AI features: audio-to-JD, resume parsing, chatbot integration for end users',
      'Managed backend authentication (JWT, OTP, SSO with Redis) integrated with React + Redux flows',
      'Delivered end-to-end analytics for 2 platforms (70K+ users) with Chart.js, lazy loading, pagination & infinite scroll',
      'Orchestrated FCM push notifications (+30% engagement) and Go backend jobs for data migration & third-party job ingestion',
    ],
    tags: ['Go', 'Python', 'React', 'Azure OpenAI', 'Redis', 'AWS', 'Razorpay', 'JWT'],
    award: 'Outstanding Newcomer Award — Oct 2025',
  },
  {
    company: 'WATI.IO',
    role: 'Software Development Engineer Intern',
    period: 'Jan 2024 – Jul 2024',
    location: 'Remote',
    type: 'Internship',
    color: 'var(--cyan)',
    points: [
      'Architected a Zoom Server-to-Server OAuth boilerplate using Node.js, Express.js, React & Redis token caching, reducing integration time by 40%',
      'Developed a real-time drag-and-drop chatbot flow builder with Node.js, React & WebSockets enabling collaborative live synchronization',
      'Resolved 100+ production issues across frontend and backend services improving reliability for enterprise clients',
    ],
    tags: ['Node.js', 'Express.js', 'React', 'WebSockets', 'Redis', 'OAuth'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience">
      <div className="section" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Where I&apos;ve Worked</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div style={{ marginTop: '60px', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '20px', top: '8px', bottom: '8px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--purple), var(--cyan), transparent)',
            borderRadius: '2px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                style={{ paddingLeft: '60px', position: 'relative' }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
                  style={{
                    position: 'absolute', left: '12px', top: '24px',
                    width: '18px', height: '18px', borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}`,
                    border: '3px solid var(--bg)',
                  }}
                />

                <div className="card" style={{ borderLeft: `3px solid ${exp.color}` }}>
                  {/* Header */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '4px' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: exp.color }}>
                        {exp.company}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--mono)' }}>
                        <FiCalendar size={13} />{exp.period}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text)' }}>
                        <FiMapPin size={13} />{exp.location}
                      </div>
                      <span style={{
                        fontSize: '11px', fontWeight: 600, padding: '2px 10px',
                        borderRadius: '50px', fontFamily: 'var(--mono)',
                        background: `${exp.color}22`, color: exp.color,
                        border: `1px solid ${exp.color}44`,
                      }}>{exp.type}</span>
                    </div>
                  </div>

                  {/* Award badge */}
                  {exp.award && (
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '6px 14px', borderRadius: '8px',
                      background: 'rgba(250,204,21,0.08)',
                      border: '1px solid rgba(250,204,21,0.25)',
                      color: 'var(--yellow)',
                      fontSize: '13px', fontWeight: 600,
                      marginBottom: '16px',
                    }}>
                      🏆 {exp.award}
                    </div>
                  )}

                  {/* Bullet points */}
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    {exp.points.map((pt, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.15 + j * 0.05 }}
                        style={{ display: 'flex', gap: '12px', fontSize: '15px', color: 'var(--text)', lineHeight: 1.7 }}
                      >
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: '4px' }}>▸</span>
                        <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-bright)">$1</strong>') }} />
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
