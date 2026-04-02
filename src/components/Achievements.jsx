import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const achievements = [
  {
    title: 'GetWork Outstanding Newcomer Award',
    desc: 'Recognized for exceptional early product delivery at GetWork.',
    date: 'Oct 2025',
    emoji: '🏆',
    color: 'var(--yellow)',
  },
  {
    title: 'Competitive Programming',
    desc: 'Solved 1000+ DSA problems across LeetCode, GeeksForGeeks and other platforms.',
    date: 'Ongoing',
    emoji: '💻',
    color: 'var(--green)',
  },
  {
    title: 'Smart India Hackathon — Team Lead',
    desc: 'Led team to final round among thousands of nationwide participants.',
    date: '2024',
    emoji: '🚀',
    color: 'var(--purple)',
  },
  {
    title: 'HACK36 — Top 5 Rank',
    desc: 'Secured rank under 5 among 1000+ students after rigorous screening.',
    date: 'Feb 2024',
    emoji: '🥇',
    color: 'var(--cyan)',
  },
  {
    title: 'Physics Wallah Skills Hackathon',
    desc: 'Achieved Top 100 team status among national-level participants.',
    date: 'Nov 2023',
    emoji: '⚡',
    color: 'var(--pink)',
  },
  {
    title: 'Training & Placement Representative',
    desc: 'Coordinated placements and internships for 2000+ students of the 2025 batch at MNNIT.',
    date: '2024–2025',
    emoji: '👔',
    color: '#f97316',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView()

  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="section" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements & Positions</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px', marginTop: '48px',
        }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 12px 40px ${a.color}20` }}
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${a.color}25`,
                borderRadius: '16px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '80px', height: '80px',
                background: `radial-gradient(circle, ${a.color}15, transparent 70%)`,
                borderRadius: '50%',
              }} />
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{a.emoji}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '8px', lineHeight: 1.4 }}>
                {a.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.7, marginBottom: '16px' }}>
                {a.desc}
              </p>
              <span style={{
                fontSize: '11px', fontFamily: 'var(--mono)', fontWeight: 600,
                color: a.color, padding: '3px 10px',
                background: `${a.color}15`, borderRadius: '50px',
                border: `1px solid ${a.color}25`,
              }}>
                {a.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
