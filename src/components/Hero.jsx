import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'

const roles = [
  'Full Stack Developer',
  'GenAI Engineer',
  'SDE-1 @ GetWork',
  'Multi-Agent Systems Builder',
  'LLM Applications Dev',
]

function TypeWriter({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = words[idx]
    const speed = deleting ? 50 : 90
    timeout.current = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          setDeleting(false)
          setIdx((idx + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout.current)
  }, [text, deleting, idx, words])

  return (
    <span style={{ color: 'var(--cyan)', fontFamily: 'var(--mono)' }}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        style={{ marginLeft: '2px', color: 'var(--purple)' }}
      >|</motion.span>
    </span>
  )
}

// Floating particle
function Particle({ style }) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        width: '4px', height: '4px',
        borderRadius: '50%',
        background: 'var(--purple)',
        ...style,
      }}
    />
  )
}

export default function Hero() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }))

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '80px',
    }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(168,85,247,0.15) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '20%', right: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
      }} />

      {/* Floating particles */}
      {particles.map(p => (
        <Particle key={p.id} style={{ left: p.left, top: p.top }} />
      ))}

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        position: 'relative', zIndex: 1, width: '100%',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '20px' }}
        >
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '14px',
            color: 'var(--cyan)', letterSpacing: '0.15em',
          }}>
            👋 Hello World, I&apos;m
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(42px, 8vw, 88px)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #ffffff 0%, rgba(168,85,247,0.9) 60%, var(--cyan) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Anupam Singh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: 'clamp(20px, 3.5vw, 32px)',
            fontWeight: 600,
            marginBottom: '24px',
            color: 'var(--text-bright)',
            minHeight: '44px',
          }}
        >
          <TypeWriter words={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'var(--text)',
            maxWidth: '600px',
            marginBottom: '40px',
          }}
        >
          Graduate from <span style={{ color: 'var(--purple-light)', fontWeight: 600 }}>MNNIT Allahabad</span>.
          Building production-grade full-stack systems and GenAI applications.
          Currently shipping AI-powered features for <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>50K+ users at GetWork</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
        >
          <a href="#projects" className="btn-primary">
            <span>View My Work</span>
            <FiArrowRight />
          </a>
          <a
            href="mailto:anupam2k321@gmail.com"
            className="btn-outline"
          >
            <FiMail /> Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
        >
          {[
            { href: 'https://github.com/anupamxy', icon: FiGithub, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/anupamsingh3/', icon: FiLinkedin, label: 'LinkedIn' },
            { href: 'mailto:anupam2k321@gmail.com', icon: FiMail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover={{ y: -4, color: 'var(--purple)' }}
              title={label}
              style={{
                fontSize: '22px', color: 'var(--text)',
                transition: 'color 0.2s',
                display: 'flex', alignItems: 'center',
              }}
            >
              <Icon />
            </motion.a>
          ))}
          <div style={{ width: '60px', height: '1px', background: 'var(--border)' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--text)', letterSpacing: '0.1em' }}>
            anupam2k321@gmail.com
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: 'absolute', bottom: '-80px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text)', letterSpacing: '0.1em' }}>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: '24px', height: '40px',
              border: '2px solid rgba(168,85,247,0.4)',
              borderRadius: '12px',
              display: 'flex', justifyContent: 'center', paddingTop: '6px',
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ width: '4px', height: '8px', background: 'var(--purple)', borderRadius: '2px' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
