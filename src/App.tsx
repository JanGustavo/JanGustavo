import React, { useEffect, useRef, useState } from 'react'

/* ─── tipos ─── */
interface Project {
  id: string
  name: string
  tagline: string
  description: string
  highlight: string
  tech: string[]
  tags: string[]
  github: string
  live?: string
  color: string
  accentVar: string
  status: 'live' | 'wip' | 'mvp'
  hasCI: boolean
  featured?: boolean
}

/* ─── dados ─── */
const PROJECTS: Project[] = [
  {
    id: 'cronflow',
    name: 'CronFlow',
    tagline: 'Plataforma SaaS de agendamento de tarefas e webhooks em Go',
    description:
      'Plataforma completa de agendamento de requisições HTTP e webhooks (CronTab as a Service). Desenvolvida em Go com arquitetura distribuída de múltiplos binários: API RESTful Chi, Scheduler com distributed locking no Redis, e Workers assíncronos de alto rendimento com Asynq. O ecossistema é integrado a um painel SPA em React 19 + TypeScript + Tailwind CSS v4 com quadro Kanban interativo, telemetria de logs de execução e controle de limites por planos.',
    highlight: 'Go (Chi) + Redis (Asynq) + PostgreSQL + React 19 + Tailwind v4 + Docker',
    tech: ['Go', 'Redis', 'PostgreSQL', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Docker', 'Asynq'],
    tags: ['SaaS', 'Backend', 'Fullstack', 'Micro-serviços', 'DevOps'],
    github: 'https://github.com/JanGustavo/Cron',
    live: 'https://cron.jangustavo.me',
    color: '#00d9ff',
    accentVar: 'cyan',
    status: 'live',
    hasCI: true,
    featured: true,
  },
  {
    id: 'metemacha',
    name: 'MeteMacha',
    tagline: 'Aplicativo mobile para registro de treinos com cronômetro inteligente e IA',
    description:
      'Aplicativo completo de treino (Gym Tracker) desenvolvido em Flutter com banco de dados local reativo SQLite (Drift) e gerência de estado avançada com Riverpod. Possui cronômetro inteligente de descanso persistente com notificações nativas em segundo plano, reprodutor de rádio integrado e funcionalidade assistida por IA (Groq/Llama3) para formatar e importar treinos em texto livre.',
    highlight: 'Flutter + SQLite (Drift) + Riverpod + Groq/Llama3 AI + Background Notifications',
    tech: ['Flutter', 'Dart', 'SQLite', 'Drift', 'Riverpod', 'Groq AI', 'Llama 3'],
    tags: ['Mobile', 'Flutter', 'SQLite', 'IA Generativa', 'Android'],
    github: 'https://github.com/JanGustavo/MeteMachaFit',
    color: '#ff4a4a',
    accentVar: 'red',
    status: 'live',
    hasCI: true,
    featured: true,
  },
  {
    id: 'stockwise',
    name: 'StockWise.NET',
    tagline: 'Sistema de controle de estoque com CI/CD automatizado',
    description:
      'Aplicação fullstack em .NET 10 com arquitetura em camadas (Clean Architecture), CRUD completo de produtos, gestão de pedidos (vendas e reposições), injeção de dependência nativa, exceções customizadas e pipeline CI/CD automatizado via GitHub Actions. Frontend responsivo em Blazor WebAssembly com consumo assíncrono da API RESTful.',
    highlight: 'Clean Architecture + GitHub Actions CI/CD + PostgreSQL + EF Core + Blazor WASM',
    tech: ['C#', '.NET 10', 'PostgreSQL', 'EF Core', 'GitHub Actions', 'Blazor WASM'],
    tags: ['Backend', 'CI/CD', '.NET', 'Fullstack'],
    github: 'https://github.com/JanGustavo/CRUD-Controle-de-estoque',
    color: '#4afa8a',
    accentVar: 'green',
    status: 'live',
    hasCI: true,
  },
  {
    id: 'adotapet',
    name: 'AdotaPet API',
    tagline: 'Backend RESTful com feed estilo Tinder para adoção de pets',
    description:
      'API RESTful robusta em .NET 8 para plataforma de adoção de animais. Implementa autenticação JWT com hash BCrypt, feed paginado com lógica de interações (like/dislike), arquitetura em camadas (Minimal APIs), Entity Framework Core com migrations, documentação interativa via Swagger e tratamento de erros estruturado.',
    highlight: 'JWT + BCrypt + EF Core Migrations + Swagger + Arquitetura em Camadas',
    tech: ['C#', '.NET 8', 'Entity Framework', 'SQLite', 'JWT', 'Swagger'],
    tags: ['API REST', 'Backend', '.NET', 'Autenticação'],
    github: 'https://github.com/JanGustavo/AdotaPet-Api',
    color: '#4afa8a',
    accentVar: 'green',
    status: 'mvp',
    hasCI: false,
  },
  {
    id: 'moletom',
    name: 'MoleTom Store',
    tagline: 'E-commerce print-on-demand com IA generativa e PIX nativo',
    description:
      'Plataforma de e-commerce inovadora onde usuários criam estampas personalizadas via IA generativa. O sistema integra geração de imagens (Pollinations.ai), composição de mockups com Pillow, pagamentos PIX com geração dinâmica de BR Code/EMV + CRC-16, autenticação completa e galeria comunitária com votação. Deploy em Render com PostgreSQL via Supabase.',
    highlight: 'IA Generativa (Pollinations.ai) + PIX Real (BR Code/EMV) + Pillow Compositing',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'Pillow', 'PIX/EMV', 'Pollinations.ai'],
    tags: ['E-commerce', 'IA Generativa', 'Pagamento', 'Python'],
    github: 'https://github.com/JanGustavo/MoleTom-store',
    color: '#f5a623',
    accentVar: 'amber',
    status: 'mvp',
    hasCI: false,
  },
  {
    id: 'radar',
    name: 'Telegram Radar',
    tagline: 'Monitor de ofertas em tempo real com extensão de navegador',
    description:
      'Solução completa fullstack para monitoramento automatizado de grupos e canais do Telegram. Backend em FastAPI com Telethon para integração MTProto, processamento assíncrono com Asyncio, web scraping com BeautifulSoup. Extensão de navegador moderna com design glassmorphism, filtros inteligentes, blacklist dinâmica e sincronização de estado em tempo real. Deploy containerizado com Docker.',
    highlight: 'Telegram MTProto API + FastAPI + Telethon + Chrome Extension + Docker',
    tech: ['Python', 'FastAPI', 'Telethon', 'BeautifulSoup', 'Asyncio', 'JavaScript', 'Docker'],
    tags: ['Bot', 'Telegram', 'Web Scraping', 'Fullstack'],
    github: 'https://github.com/JanGustavo/telegram-PromoPulse-extension',
    color: '#f5a623',
    accentVar: 'amber',
    status: 'wip',
    hasCI: false,
  }
]

const SKILLS = {
  'Linguagens': ['Go', 'C#', 'Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  'Frameworks': ['React', 'ASP.NET', 'Entity Framework', 'Flask', 'FastAPI', 'Angular', 'Tailwind CSS'],
  'Banco de dados': ['PostgreSQL', 'Redis', 'SQLite', 'SQL Server', 'Supabase'],
  'Ferramentas & DevOps': ['Git', 'GitHub Actions', 'Docker', 'Swagger', 'Asynq', 'VS Code'],
}

/* ─── hook: música retro ─── */
function useChiptune() {
  const audioContextRef = useRef<AudioContext | null>(null)
  const oscillatorsRef = useRef<OscillatorNode[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [bars, setBars] = useState([0, 0, 0, 0])

  const playNote = (frequency: number, duration: number, time: number) => {
    if (!audioContextRef.current) return
    const ctx = audioContextRef.current
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = frequency
    osc.connect(gain)
    gain.connect(ctx.destination)
    gain.gain.setValueAtTime(0.1, time)
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration)
    osc.start(time)
    osc.stop(time + duration)
    oscillatorsRef.current.push(osc)
  }

  const playMelody = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    const ctx = audioContextRef.current
    const now = ctx.currentTime
    const tempo = 0.15
    
    // Melodia clássica retro (tipo Super Mario)
    const notes = [
      { freq: 330, dur: tempo },
      { freq: 330, dur: tempo },
      { freq: 330, dur: tempo },
      { freq: 262, dur: tempo },
      { freq: 330, dur: tempo },
      { freq: 392, dur: tempo * 2 },
      { freq: 196, dur: tempo * 2 },
      { freq: 262, dur: tempo },
      { freq: 196, dur: tempo },
      { freq: 165, dur: tempo },
      { freq: 220, dur: tempo },
      { freq: 247, dur: tempo },
      { freq: 262, dur: tempo * 2 },
    ]

    let time = now
    notes.forEach(note => {
      playNote(note.freq, note.dur, time)
      time += note.dur
    })

    // Animar equalizer
    const animateBars = () => {
      setBars([
        Math.random() * 100,
        Math.random() * 80,
        Math.random() * 90,
        Math.random() * 70,
      ])
    }
    const interval = setInterval(animateBars, 100)
    setTimeout(() => clearInterval(interval), time - now)
  }

  const toggleMusic = () => {
    if (isPlaying) {
      oscillatorsRef.current.forEach(osc => {
        try { osc.stop() } catch (e) {}
      })
      oscillatorsRef.current = []
      setIsPlaying(false)
      setBars([0, 0, 0, 0])
    } else {
      setIsPlaying(true)
      playMelody()
      setTimeout(() => {
        setIsPlaying(false)
        setBars([0, 0, 0, 0])
      }, 3000)
    }
  }

  return { toggleMusic, isPlaying, bars }
}

/* ─── hook: typewriter ─── */
function useTypewriter(lines: string[], speed = 45) {
  const [displayed, setDisplayed] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    if (lineIdx >= lines.length) { setDone(true); return }

    const current = lines[lineIdx]
    if (charIdx < current.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => prev + current[charIdx])
        setCharIdx(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setDisplayed(prev => prev + '\n')
        setLineIdx(l => l + 1)
        setCharIdx(0)
      }, 320)
      return () => clearTimeout(t)
    }
  }, [charIdx, lineIdx, done, lines, speed])

  return { displayed, done }
}

/* ─── hook: intersection observer ─── */
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─── componentes ─── */

function CopyEmailLink({ email, defaultText, style }: { email: string; defaultText: string; style?: React.CSSProperties }) {
  const [copied, setCopied] = useState(false)
  return (
    <a
      href={`mailto:${email}`}
      onClick={(e) => {
        e.preventDefault()
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      style={{ ...style, cursor: 'pointer' }}
      title="Copia o endereço de email para a área de transferência"
    >
      {copied ? 'email copiado!' : defaultText}
    </a>
  )
}

function Cursor() {
  return (
    <span style={{
      display: 'inline-block',
      width: '10px',
      height: '1.1em',
      background: 'var(--green)',
      verticalAlign: 'text-bottom',
      animation: 'blink 1s step-end infinite',
      marginLeft: '2px',
    }} />
  )
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    live: { label: 'live', color: '#4afa8a' },
    mvp:  { label: 'mvp',    color: '#f5a623' },
    wip:  { label: 'wip',    color: '#888' },
  }
  const s = map[status]
  return (
    <span style={{
      fontSize: '11px',
      color: s.color,
      border: `1px solid ${s.color}`,
      padding: '2px 8px',
      borderRadius: '3px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontWeight: 600,
    }}>
      {status === 'live' && (
        <span style={{
          display: 'inline-block',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: s.color,
          marginRight: '5px',
          animation: 'blink 1.5s ease-in-out infinite',
        }} />
      )}
      {s.label}
    </span>
  )
}

function CIBadge({ active }: { active?: boolean }) {
  if (!active) return null;
  return (
    <span style={{
      fontSize: '10px',
      color: '#4db8ff',
      border: '1px solid #4db8ff',
      padding: '2px 8px',
      borderRadius: '3px',
      marginLeft: '8px',
      textTransform: 'uppercase',
      fontWeight: 600,
    }}>
      ⚙️ CI/CD
    </span>
  );
}

function RenderButton() {
  return (
    <a
      href="https://moletom-store.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: '12px',
        color: 'purple',
        border: '1px solid purple',
        padding: '5px 16px',
        letterSpacing: '0.08em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'background 0.2s, color 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = 'purple'
        ;(e.currentTarget as HTMLElement).style.color = '#0d0f0e'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = 'transparent'
        ;(e.currentTarget as HTMLElement).style.color = 'purple'
      }}
    >
      ↗ Render
    </a>
  );
}

function deployButton(url: string, color = 'red', label = 'Deploy →') {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: '12px',
        color: color,
        border: `1px solid ${color}`,
        padding: '5px 16px',
        letterSpacing: '0.08em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'background 0.2s, color 0.2s',
      }}

      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = color
        ;(e.currentTarget as HTMLElement).style.color = '#0d0f0e'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = 'transparent'
        ;(e.currentTarget as HTMLElement).style.color = color
      }}
    >
      {label}
    </a>
  );
}

function downloadRelease(url: string, color = '#00d9ff', label = 'Baixar Release ↓') {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: '12px',
        color: color,
        border: `1px solid ${color}`,
        padding: '5px 16px',
        letterSpacing: '0.08em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'background 0.2s, color 0.2s',
      }}

      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = color
        ;(e.currentTarget as HTMLElement).style.color = '#0d0f0e'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = 'transparent'
        ;(e.currentTarget as HTMLElement).style.color = color
      }}
    >
      {label}
    </a>
  );
}




function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, visible } = useVisible()
  const [hovered, setHovered] = useState(false)
  const isFeatured = project.featured;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        border: `1px solid ${hovered ? project.color + '55' : isFeatured ? project.color + '33' : 'var(--border)'}`,
        background: hovered 
          ? 'var(--bg-hover)' 
          : isFeatured 
            ? 'linear-gradient(135deg, var(--bg-card) 0%, rgba(0, 217, 255, 0.02) 100%)' 
            : 'var(--bg-card)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        boxShadow: isFeatured && hovered 
          ? `0 0 25px ${project.color}15` 
          : isFeatured 
            ? `0 0 15px ${project.color}05` 
            : 'none',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s, background 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* linha de cor lateral */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '3px',
        background: project.color,
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.3s',
      }} />

      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <div style={{ color: 'var(--text-dim)', fontSize: '11px', marginBottom: '4px', letterSpacing: '0.1em' }}>
            {isFeatured ? '$ project --featured' : '$ project --name'}
          </div>
          <h3 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            color: project.color,
            fontWeight: 900,
            lineHeight: 1.1,
          }}>
            {project.name}
          </h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '12px', marginTop: '4px', fontStyle: 'italic' }}>
            {project.tagline}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {isFeatured && (
            <span style={{
              fontSize: '10px',
              color: project.color,
              border: `1px solid ${project.color}`,
              padding: '2px 8px',
              borderRadius: '3px',
              textTransform: 'uppercase',
              fontWeight: 800,
              letterSpacing: '0.08em',
              animation: 'pulse 2s infinite ease-in-out',
            }}>
              ★ DESTAQUE
            </span>
          )}
          <StatusBadge status={project.status} />
          <CIBadge active={project.hasCI} />
        </div>
      </div>

      {/* descrição */}
      <p style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '13px' }}>
        {project.description}
      </p>

      {/* highlight técnico */}
      <div style={{
        background: project.color + '11',
        border: `1px solid ${project.color}33`,
        padding: '0.6rem 0.9rem',
        marginBottom: '1.2rem',
        fontSize: '12px',
        color: project.color,
      }}>
        <span style={{ color: 'var(--text-dim)' }}>// highlight: </span>
        {project.highlight}
      </div>

      {/* tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontSize: '11px',
            padding: '2px 10px',
            border: '1px solid var(--border-lit)',
            color: 'var(--text-dim)',
            letterSpacing: '0.05em',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* links */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px',
            color: project.color,
            border: `1px solid ${project.color}`,
            padding: '5px 16px',
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = project.color
            ;(e.currentTarget as HTMLElement).style.color = '#0d0f0e'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLElement).style.color = project.color
          }}
        >
          ↗ GitHub
        </a>
        {project.id === 'cronflow' && deployButton('https://cron.jangustavo.me', project.color, '↗ Dashboard Ao Vivo')}
        {project.id === 'moletom' && <RenderButton />}
        {project.id === 'radar' && deployButton('https://jangustavo.me/apis/promopulse/docs')}
        {project.id === 'stockwise' && deployButton('https://jangustavo.me/apis/stockwise/scalar/v1')}
        {project.id === 'stockwise' && <a href="https://jangustavo.me/stockwise" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: 'purple', border: '1px solid purple', padding: '5px 16px', letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'background 0.2s, color 0.2s' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'purple'; (e.currentTarget as HTMLElement).style.color = '#0d0f0e' }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'purple' }}>↗ CRUD in Action</a>}
        {project.id === 'radar' && downloadRelease('https://github.com/JanGustavo/telegram-PromoPulse-extension/releases/latest/download/PromoPulse-Extension.zip', project.color, 'Baixar Extensão (.zip) ↓')}
        {project.id === 'metemacha' && downloadRelease('https://github.com/JanGustavo/MeteMachaFit/releases/latest/download/app-release.apk', project.color, 'Baixar APK (.apk) ↓')}
        {project.live && project.id !== 'cronflow' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '12px', color: 'var(--text-dim)' }}
          >
            ver ao vivo →
          </a>
        )}
      </div>

    </div>
  )
  


}

function SkillsSection() {
  const { ref, visible } = useVisible()
  return (
    <section ref={ref} style={{ padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
      <div style={{ color: 'var(--text-dim)', fontSize: '12px', marginBottom: '0.4rem' }}>
        $ skills --list
      </div>
      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        color: 'var(--text-bright)',
        fontWeight: 700,
        marginBottom: '2.5rem',
      }}>
        Stack
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
      }}>
        {Object.entries(SKILLS).map(([category, items], ci) => (
          <div
            key={category}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${ci * 100}ms, transform 0.5s ease ${ci * 100}ms`,
            }}
          >
            <div style={{
              fontSize: '11px',
              color: 'var(--green)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.8rem',
              borderBottom: '1px solid var(--green-dim)',
              paddingBottom: '0.4rem',
            }}>
              {category}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {items.map(item => (
                <span key={item} style={{
                  fontSize: '13px',
                  color: 'var(--text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ color: 'var(--text-dim)' }}>▸</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function MusicPlayer() {
  const { toggleMusic, isPlaying, bars } = useChiptune()

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 50,
      display: 'flex',
      alignItems: 'flex-end',
      gap: '0.5rem',
    }}>
      {/* Equalizer */}
      <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'flex-end',
        height: '30px',
      }}>
        {bars.map((height, i) => (
          <div
            key={i}
            style={{
              width: '4px',
              height: `${height}%`,
              background: 'var(--green)',
              borderRadius: '2px',
              transition: 'height 0.1s ease',
              boxShadow: isPlaying ? `0 0 8px var(--green)` : 'none',
            }}
          />
        ))}
      </div>

      {/* Botão */}
      <button
        onClick={toggleMusic}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: `2px solid var(--green)`,
          background: isPlaying ? 'var(--green-dim)' : 'transparent',
          color: 'var(--green)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          transition: 'all 0.2s ease',
          boxShadow: isPlaying ? `0 0 12px var(--green)` : 'none',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px var(--green)'
          ;(e.currentTarget as HTMLElement).style.background = 'var(--green-dim)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = isPlaying ? '0 0 12px var(--green)' : 'none'
          ;(e.currentTarget as HTMLElement).style.background = isPlaying ? 'var(--green-dim)' : 'transparent'
        }}
        title="Toca uma música retro!"
        aria-label="Tocar música retrô"
      >
        {isPlaying ? '🎵' : '🎮'}
      </button>
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(13,15,14,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s',
      padding: '0 clamp(1.5rem, 5vw, 4rem)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '56px',
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '13px',
          color: 'var(--green)',
        }}>
          jangustavo.me<span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
        </span>

        <div style={{ display: 'flex', gap: '2rem', fontSize: '12px', color: 'var(--text-dim)' }}>
          <a href="#projetos" style={{ color: 'var(--text-dim)' }}>projetos</a>
          <a href="#skills" style={{ color: 'var(--text-dim)' }}>stack</a>
          <a href="#contato" style={{ color: 'var(--text-dim)' }}>contato</a>
          <a
            href="https://github.com/JanGustavo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--green)' }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ─── App ─── */
export default function App() {
  const BOOT_LINES = [
    '> iniciando sistema...',
    '> carregando módulos: [Go] [C#] [Python] [.NET] [FastAPI] [React]',
    '> conectando ao banco: PostgreSQL + Redis ✓',
    '> build: OK — nenhum erro encontrado',
    '> olá, mundo.',
  ]

  const { displayed, done } = useTypewriter(BOOT_LINES, 38)

  return (
    <>
      <Navbar />
      <MusicPlayer />

      {/* scanline overlay sutil */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      }} />

      <main style={{ position: 'relative', zIndex: 1, padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* ── HERO ── */}
          <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '80px',
          }}>
            {/* terminal de boot */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '1.2rem 1.5rem',
              marginBottom: '3rem',
              maxWidth: '560px',
              animation: 'fadeUp 0.5s ease both',
            }}>
              <div style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '0.8rem',
              }}>
                {['#ff5f57','#ffbd2e','#28ca42'].map(c => (
                  <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
              </div>
              <pre style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                color: 'var(--green)',
                whiteSpace: 'pre-wrap',
                lineHeight: 1.8,
                minHeight: '7.5em',
              }}>
                {displayed}{!done && <Cursor />}
              </pre>
            </div>

            {/* nome e bio */}
            <div style={{ animation: 'fadeUp 0.6s ease 0.3s both' }}>
              <div style={{ color: 'var(--text-dim)', fontSize: '12px', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                // desenvolvedor backend
              </div>
              <h1 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                fontWeight: 900,
                lineHeight: 1.0,
                color: 'var(--text-bright)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}>
                Jan<br />
                <span style={{ color: 'var(--green)' }}>Gustavo</span>
              </h1>
              <p style={{
                maxWidth: '500px',
                color: 'var(--text)',
                lineHeight: 1.8,
                fontSize: '14px',
                marginBottom: '2rem',
              }}>
                Desenvolvedor Backend com foco em arquitetura robusta e escalabilidade. Especialista em ecossistemas Go, .NET e Python, construindo APIs RESTful, sistemas de CI/CD, integrações com IA generativa e soluções fullstack. Baseado em Bayeux, PB.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="#projetos"
                  style={{
                    fontSize: '13px',
                    color: 'var(--bg)',
                    background: 'var(--green)',
                    padding: '8px 24px',
                    letterSpacing: '0.06em',
                    fontWeight: 500,
                  }}
                >
                  ver projetos ↓
                </a>
                <CopyEmailLink
                  email="jeeh2200@gmail.com"
                  defaultText="falar comigo"
                  style={{
                    fontSize: '13px',
                    color: 'var(--green)',
                    border: '1px solid var(--green)',
                    padding: '8px 24px',
                    letterSpacing: '0.06em',
                    display: 'inline-block',
                    textAlign: 'center',
                    minWidth: '140px',
                  }}
                />
              </div>
            </div>
          </section>

          {/* ── PROJETOS ── */}
          <section id="projetos" style={{ padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
            <div style={{ color: 'var(--text-dim)', fontSize: '12px', marginBottom: '0.4rem' }}>
              $ git log --oneline --all
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: 'var(--text-bright)',
              fontWeight: 700,
              marginBottom: '2.5rem',
            }}>
              Projetos
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} delay={i * 120} />
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section id="skills">
            <SkillsSection />
          </section>

          {/* ── FORMAÇÃO ── */}
          <section style={{ padding: 'clamp(2rem, 6vw, 4rem) 0', borderTop: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--text-dim)', fontSize: '12px', marginBottom: '0.4rem' }}>
              $ cat formacao.txt
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: 'var(--text-bright)',
              fontWeight: 700,
              marginBottom: '2rem',
            }}>
              Formação
            </h2>
            <div style={{
              border: '1px solid var(--border)',
              padding: '1.5rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
            }}>
              <div>
                <div style={{ color: 'var(--green)', fontSize: '13px', marginBottom: '4px' }}>
                  Tecnólogo em Análise e Desenvolvimento de Sistemas
                </div>
                <div style={{ color: 'var(--text)', fontSize: '14px', fontFamily: 'var(--serif)', fontWeight: 700 }}>
                  Uninassau — João Pessoa
                </div>
                <div style={{ color: 'var(--text-dim)', fontSize: '12px', marginTop: '6px' }}>
                  Lógica de programação · Estruturas de dados · POO · Banco de dados · Engenharia de software
                </div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
                Fev 2025 → Dez 2026
              </div>
            </div>
          </section>

          {/* ── CONTATO ── */}
          <section id="contato" style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', borderTop: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--text-dim)', fontSize: '12px', marginBottom: '0.4rem' }}>
              $ ping jangustavo
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: 'var(--text-bright)',
              fontWeight: 700,
              marginBottom: '2rem',
            }}>
              Contato
            </h2>
            <p style={{ color: 'var(--text)', marginBottom: '2rem', maxWidth: '440px', lineHeight: 1.8 }}>
              Aberto a oportunidades de estágio e desenvolvimento júnior. Me manda um email ou conecta no GitHub.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { label: 'email', value: 'jeeh2200@gmail.com', isEmail: true },
                { label: 'github', value: 'github.com/JanGustavo', href: 'https://github.com/JanGustavo' },
                { label: 'localização', value: 'Bayeux, Paraíba — Brasil' },
              ].map(({ label, value, href, isEmail }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-dim)', minWidth: '90px', fontSize: '11px', letterSpacing: '0.08em' }}>
                    {label}
                  </span>
                  {isEmail ? (
                    <CopyEmailLink
                      email={value}
                      defaultText={value}
                      style={{ color: 'var(--green)' }}
                    />
                  ) : href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)' }}>
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text)' }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            fontSize: '11px',
            color: 'var(--text-dim)',
          }}>
            <span>© 2025 Janderson Gustavo · Bayeux, PB</span>
            <span style={{ color: 'var(--green-dim)' }}>
              feito com {'<'}código{'>'} e café
            </span>
          </footer>

        </div>
      </main>
    </>
  )
}
