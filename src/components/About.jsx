import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiAward, FiCode, FiUsers, FiZap } from 'react-icons/fi'

const stats = [
  { icon: FiCode, value: '1000+', label: 'DSA Problems', color: 'var(--purple)' },
  { icon: FiUsers, value: '70K+', label: 'Users Served', color: 'var(--cyan)' },
  { icon: FiZap, value: '3', label: 'Production Apps', color: 'var(--pink)' },
  { icon: FiAward, value: '7.47', label: 'CGPA / 10', color: 'var(--green)' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="section" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginTop: '48px' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--text)', marginBottom: '20px' }}>
              I&apos;m a <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>Full Stack Developer and GenAI Engineer</span> currently working as SDE-1 at GetWork, where I build AI-powered features that impact thousands of users daily.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--text)', marginBottom: '20px' }}>
              I graduated from <span style={{ color: 'var(--purple-light)', fontWeight: 600 }}>MNNIT Allahabad</span>. My expertise spans across full-stack development, GenAI integration, and multi-agent AI systems.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--text)', marginBottom: '32px' }}>
              When I&apos;m not coding, I solve competitive programming challenges — having cracked <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>1000+ DSA problems</span> across LeetCode and GeeksForGeeks. I love building things that scale.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['React', 'Node.js', 'Go', 'Python', 'GenAI', 'LangChain', 'AWS', 'Docker'].map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Avatar / Code block */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '32px',
              fontFamily: 'var(--mono)',
              fontSize: '14px',
              lineHeight: 1.8,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '40px',
                background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px',
              }}>
                {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
                  <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
                ))}
                <span style={{ fontSize: '12px', color: 'var(--text)', marginLeft: '8px' }}>anupam.js</span>
              </div>
              <div style={{ marginTop: '40px' }}>
                <div><span style={{ color: '#7c85ff' }}>const</span> <span style={{ color: 'var(--cyan)' }}>anupam</span> <span style={{ color: 'var(--text)' }}>=</span> <span style={{ color: '#f97316' }}>{'{'}</span></div>
                <div style={{ paddingLeft: '20px' }}>
                  <div><span style={{ color: 'var(--purple-light)' }}>name</span><span style={{ color: 'var(--text)' }}>: </span><span style={{ color: 'var(--green)' }}>&quot;Anupam Singh&quot;</span><span style={{ color: 'var(--text)' }}>,</span></div>
                  <div><span style={{ color: 'var(--purple-light)' }}>role</span><span style={{ color: 'var(--text)' }}>: </span><span style={{ color: 'var(--green)' }}>&quot;SDE-1 @ GetWork&quot;</span><span style={{ color: 'var(--text)' }}>,</span></div>
                  <div><span style={{ color: 'var(--purple-light)' }}>college</span><span style={{ color: 'var(--text)' }}>: </span><span style={{ color: 'var(--green)' }}>&quot;MNNIT Allahabad&quot;</span><span style={{ color: 'var(--text)' }}>,</span></div>
                  <div><span style={{ color: 'var(--purple-light)' }}>focus</span><span style={{ color: 'var(--text)' }}>: [</span></div>
                  <div style={{ paddingLeft: '20px' }}>
                    <div><span style={{ color: 'var(--green)' }}>&quot;Full Stack Dev&quot;</span><span style={{ color: 'var(--text)' }}>,</span></div>
                    <div><span style={{ color: 'var(--green)' }}>&quot;GenAI Engineering&quot;</span><span style={{ color: 'var(--text)' }}>,</span></div>
                    <div><span style={{ color: 'var(--green)' }}>&quot;Multi-Agent Systems&quot;</span><span style={{ color: 'var(--text)' }}>,</span></div>
                  </div>
                  <div><span style={{ color: 'var(--text)' }}>],</span></div>
                  <div><span style={{ color: 'var(--purple-light)' }}>available</span><span style={{ color: 'var(--text)' }}>: </span><span style={{ color: '#f97316' }}>true</span><span style={{ color: 'var(--text)' }}>,</span></div>
                </div>
                <div><span style={{ color: '#f97316' }}>{'}'}</span></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px', marginTop: '64px',
          }}
        >
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                cursor: 'default',
              }}
            >
              <div style={{ fontSize: '28px', color, marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                <Icon />
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color, fontFamily: 'var(--mono)', marginBottom: '6px' }}>{value}</div>
              <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
