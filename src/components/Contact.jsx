import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiSend } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, label: 'GitHub', value: '@anupamxy', href: 'https://github.com/anupamxy', color: 'var(--text-bright)' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'anupamsingh3', href: 'https://www.linkedin.com/in/anupamsingh3/', color: '#0a66c2' },
  { icon: FiMail, label: 'Email', value: 'anupam2k321@gmail.com', href: 'mailto:anupam2k321@gmail.com', color: 'var(--purple)' },
  { icon: FiPhone, label: 'Phone', value: '+91 8187928603', href: 'tel:+918187928603', color: 'var(--green)' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:anupam2k321@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact">
      <div className="section" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Let&apos;s Work Together</h2>
          <p style={{ color: 'var(--text)', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            I&apos;m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hello — my inbox is always open!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '28px' }}>
              Connect with me
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ x: 8, borderColor: color }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '16px 20px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-bright)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)' }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color, fontSize: '18px', flexShrink: 0,
                  }}>
                    <Icon />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text)', fontWeight: 500, marginBottom: '2px', fontFamily: 'var(--mono)' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-bright)' }}>
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '28px' }}>
              Send a message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(field => (
                <div key={field.name}>
                  <label style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--mono)', display: 'block', marginBottom: '6px' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                    required
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      color: 'var(--text-bright)',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'var(--font)',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--purple)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--mono)', display: 'block', marginBottom: '6px' }}>
                  Message
                </label>
                <textarea
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  rows={5}
                  style={{
                    width: '100%', padding: '12px 16px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    color: 'var(--text-bright)',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'var(--font)',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--purple)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <span>{sent ? '✓ Opening Mail App...' : 'Send Message'}</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--mono)' }}>
          Designed & Built by{' '}
          <span style={{ color: 'var(--purple)', fontWeight: 600 }}>Anupam Singh</span>
          {' '}· {new Date().getFullYear()} · All Rights Reserved
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text)', marginTop: '8px', opacity: 0.6 }}>
          Built with React, Framer Motion & ❤️
        </p>
      </div>
    </section>
  )
}
