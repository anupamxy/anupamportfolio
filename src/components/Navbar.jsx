import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 24px',
        height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5,5,16,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '20px',
          fontWeight: 700,
          background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        AS
      </motion.a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            whileHover={{ color: 'var(--purple)' }}
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text)',
              transition: 'color 0.2s',
              fontFamily: 'var(--mono)',
            }}
          >
            <span style={{ color: 'var(--purple)', marginRight: '4px' }}>0{i + 1}.</span>
            {l.label}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '8px 20px',
            border: '1px solid var(--purple)',
            borderRadius: '6px',
            color: 'var(--purple)',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'var(--mono)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.1)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          Hire Me
        </motion.a>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        style={{ background: 'none', border: 'none', color: 'var(--purple)', fontSize: '24px' }}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '250px',
              background: 'rgba(10,10,26,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '32px',
              borderLeft: '1px solid var(--border)',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: 'var(--purple)', fontSize: '24px' }}
            >
              <FiX />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', fontFamily: 'var(--mono)' }}
              >
                <span style={{ color: 'var(--purple)', marginRight: '6px' }}>0{i + 1}.</span>
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </motion.nav>
  )
}
