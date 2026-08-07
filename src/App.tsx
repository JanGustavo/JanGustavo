import React, { useEffect, useRef, useState } from 'react'

const RESUME_URL = 'https://drive.google.com/file/d/12wqMWjRZH9ga4APb3r7pRg4s7kitIsMh/view?usp=sharing'

function ProjectAvatars({ projectId, color }: { projectId: string; color: string }) {
  // Retorna os ícones correspondentes de acordo com o projeto
  const getAvatars = () => {
    switch (projectId) {
      case 'cronflow':
        return [
              {
                key: 'cron-logo',
                bg: '#111413',
                element: (
                  <img 
                    src="/logoCron.svg" 
                    alt="Cron Logo" 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                ),
                title: 'Cron Logo'
              },
          {
            key: 'redis',
            bg: '#D82C20',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#fff' }}>
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 17 22 17" />
              </svg>
            ),
            title: 'Redis'
          }
        ]
      case 'metemarcha':
        return [
          {
            key: 'metemarcha-logo',
            bg: '#111413',
            element: (
              <img 
                src="/metemacha_app_icon.png" 
                alt="Mete Marcha Logo" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
              />
            ),
            title: 'Mete Marcha'
          },
          {
            key: 'android',
            bg: '#3DDC84',
            element: (
              <svg viewBox="0 0 24 24" fill="#0c0f0d" style={{ width: '14px', height: '14px' }}>
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-8.5-5.5C8.38 2.5 6 4.88 6 7.85h12c0-2.97-2.38-5.35-6-5.35zm3.25 3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm-6.5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
              </svg>
            ),
            title: 'Android Nativo'
          }
        ]
      case 'stockwise':
        return [
          {
            key: 'csharp',
            bg: '#512BD4',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#fff' }}>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            ),
            title: 'C# / .NET'
          },
          {
            key: 'db',
            bg: '#336791',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#fff' }}>
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
              </svg>
            ),
            title: 'PostgreSQL'
          }
        ]
      case 'adotapet':
        return [
          {
            key: 'csharp',
            bg: '#512BD4',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#fff' }}>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            ),
            title: 'C# / .NET'
          },
          {
            key: 'pet',
            bg: '#4afa8a',
            element: (
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '13px', height: '13px', color: '#0d0f0e' }}>
                <circle cx="12" cy="14" r="4" />
                <circle cx="6.5" cy="8.5" r="2" />
                <circle cx="10.5" cy="5.5" r="2" />
                <circle cx="15.5" cy="6.5" r="2" />
                <circle cx="18.5" cy="10.5" r="2" />
              </svg>
            ),
            title: 'Adoção de Pets'
          }
        ]
      case 'moletom':
        return [
          {
            key: 'moletom-logo',
            bg: '#111413',
            element: (
              <img 
                src="/logoMoletom.png" 
                alt="MoleTom Store Logo" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
              />
            ),
            title: 'MoleTom Store'
          },
          {
            key: 'ai',
            bg: '#f5a623',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#0d0f0e' }}>
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.3-6.3l-.7.7M6.7 17.3l-.7.7m12.6 0l-.7-.7M6.7 6.7l-.7-.7" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            ),
            title: 'IA Generativa'
          }
        ]
      case 'radar':
        return [
          {
            key: 'telegram',
            bg: '#229ED9',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#fff' }}>
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            ),
            title: 'Telegram API'
          },
          {
            key: 'chrome',
            bg: '#4285F4',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#fff' }}>
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="8" x2="12" y2="2" />
                <line x1="8.6" y1="14" x2="3.4" y2="11" />
                <line x1="15.4" y1="14" x2="20.6" y2="11" />
              </svg>
            ),
            title: 'Extensão de Navegador'
          }
        ]
      case 'worldcup':
        return [
          {
            key: 'soccer',
            bg: '#111413',
            element: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', color: '#fff' }}>
                <circle cx="12" cy="12" r="10" />
                <path d="m12 2-2 3v4l4 2 2-3V2" />
                <path d="M12 22v-3l2-2v-4l-4-2-2 3v6" />
                <path d="m2 12 3-2h4l2 4-3 2H2" />
                <path d="m22 12-3 2h-4l-2-4 3-2h6" />
              </svg>
            ),
            title: 'Simulação Estatística'
          },
          {
            key: 'python',
            bg: '#1e1e24',
            element: (
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '13px', height: '13px' }}>
                <path d="M11.89 2c-2.3 0-4.22.18-4.22.18s-2.02.26-2.02 2.05v2.3H9.7v.88H5.65c-1.8 0-2.05.9-2.05.9s-.28.84-.28 2.05c0 1.2.22 2.05.28 2.05s.38.86 2.05.86h1.22v-1.74c0-1.87 1.57-2.05 1.57-2.05h4.22s2.05-.1 2.05-2.05V6.26c0-1.95-1.9-2.05-1.9-2.05L11.89 2zm.23 1.3a.62.62 0 1 1 0 1.25.62.62 0 0 1 0-1.25zM12.1 22c2.3 0 4.22-.18 4.22-.18s2.02-.26 2.02-2.05v-2.3h-4.05v-.88h4.05c1.8 0 2.05-.9 2.05-.9s.28-.84.28-2.05c0-1.2-.22-2.05-.28-2.05s-.38-.86-2.05-.86h-1.22v1.74c0 1.87-1.57 2.05-1.57 2.05h-4.22s-2.05.1-2.05 2.05v2.22c0 1.95 1.9 2.05 1.9 2.05L12.1 22zm-.23-1.3a.62.62 0 1 1 0-1.25.62.62 0 0 1 0 1.25z" fill="#ffd43b"/>
              </svg>
            ),
            title: 'Python / Streamlit'
          }
        ]
      default:
        return []
    }
  }

  const avatars = getAvatars()

  if (avatars.length === 0) return null

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginRight: '8px',
      marginTop: '2px',
    }}>
      {avatars.map((av, index) => (
        <div
          key={av.key}
          title={av.title}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: av.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid var(--bg-card)`,
            overflow: 'hidden',
            marginLeft: index > 0 ? '-12px' : '0',
            boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
            zIndex: 10 - index,
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.15)'
            e.currentTarget.style.borderColor = color
            e.currentTarget.style.boxShadow = `0 6px 14px ${color}44`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.borderColor = 'var(--bg-card)'
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)'
          }}
        >
          {av.element}
        </div>
      ))}
    </div>
  )
}

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
    id: 'metemarcha',
    name: 'Mete Marcha',
    tagline: 'Gym Tracker mobile em Flutter com widgets interativos, serviço foreground e IA',
    description:
      'Aplicativo de registro e acompanhamento de treinos (Gym Tracker) em Flutter com banco de dados SQLite reativo (Drift) e gerenciamento de estado com Riverpod. Destaca-se pelas integrações nativas no Android: widgets de home screen interativos (Streak/Treino do dia) integrados via HomeWidget, serviço em primeiro plano (Foreground Service) persistente para cronometragem, e ações em segundo plano integradas diretamente nas notificações do sistema (+30s/Pular) via IsolateNameServer. Conta também com suporte a Deep Linking, player de música integrado e inteligência artificial (Groq/Llama3) para formatar e importar treinos em texto livre.',
    highlight: 'Flutter + SQLite (Drift) + Widgets Nativos + Foreground Service + Groq AI + System Notifications',
    tech: ['Flutter', 'Dart', 'SQLite', 'Drift', 'Riverpod', 'Android Widgets', 'Foreground Tasks', 'Groq AI'],
    tags: ['Mobile', 'Flutter', 'SQLite', 'IA Generativa', 'Nativo Android'],
    github: 'https://github.com/JanGustavo/MeteMarcha',
    color: '#ff4a4a',
    accentVar: 'red',
    status: 'live',
    hasCI: true,
    featured: true,
  },
  {
    id: 'stockwise',
    name: 'StockWise.NET',
    tagline: 'Sistema de controle de estoque fullstack em .NET 10 com Clean Architecture e CI/CD automatizado',
    description:
      'Sistema completo de controle de estoque (StockWise) em .NET 10 estruturado sob os princípios de Clean Architecture e DDD. Implementa consumo assíncrono de API RESTful em Blazor WebAssembly, persistência de dados otimizada com Entity Framework Core e PostgreSQL, e injeção de dependência nativa com tratamento global de exceções. O fluxo de entrega contínua é automatizado de ponta a ponta através de um pipeline robusto de CI/CD no GitHub Actions para build, testes automatizados e deploy.',
    highlight: '.NET 10 (Web API) + Clean Architecture + Blazor WASM + Entity Framework Core + PostgreSQL + GitHub Actions',
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
    tagline: 'API RESTful em .NET 8 para adoção de pets com feed de match e autenticação JWT',
    description:
      'API RESTful de alto desempenho para plataforma de adoção de animais estilo Tinder. Desenvolvida em .NET 8 com Minimal APIs e arquitetura em camadas, implementa autenticação JWT segura com criptografia BCrypt. Conta com feed dinâmico e paginado contendo lógica de interações (like/dislike/match), persistência com Entity Framework Core e SQLite, tratamento centralizado de exceções (Problem Details) e documentação interativa via Swagger.',
    highlight: '.NET 8 Minimal APIs + JWT / BCrypt + Entity Framework Core + SQLite + Swagger UI',
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
    tagline: 'E-commerce print-on-demand em Flask com IA generativa resiliente e emissor de PIX dinâmico',
    description:
      'Plataforma completa de e-commerce print-on-demand onde usuários geram estampas personalizadas via inteligência artificial (Pollinations.ai/Flux). O sistema é estruturado em Flask com templates modulares Jinja2 e arquitetura tolerante a falhas: pipeline de geração de imagens resiliente com retentativas e fallback local (Pillow), banco de dados com failover automático e desvio de conexão (PostgreSQL / SQLite), e persistência de estado (Auto-resume UX) para retenção de carrinho pós-login. Os pagamentos são processados de forma nativa via geração de BR Code/EMV dinâmico com validador de integridade CRC-16.',
    highlight: 'Flask + SQLAlchemy + IA Generativa (Flux/Failover) + Banco Self-Healing + Emissor PIX (EMV/CRC-16)',
    tech: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'Pillow',
      'PIX/EMV',
      'Pollinations.ai',
      'SQLite / PostgreSQL',
      'Jinja2'
    ],
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
    tagline: 'Monitor de ofertas do Telegram em FastAPI com extensão de navegador Chrome e raspagem assíncrona',
    description:
      'Solução fullstack para monitoramento em tempo real e raspagem automatizada de ofertas em canais e grupos do Telegram. O backend é construído em FastAPI utilizando processamento assíncrono (Asyncio) com biblioteca Telethon (MTProto API) e raspagem estruturada via BeautifulSoup. O ecossistema inclui uma extensão de navegador (Chrome Extension) em vanilla JavaScript com design moderno em glassmorphism, filtros e blacklist dinâmicos em segundo plano, e sincronização de estado assíncrona. O deploy é otimizado através de containers Docker.',
    highlight: 'FastAPI + Telethon (MTProto) + Asyncio + Chrome Extension (Glassmorphism) + Docker',
    tech: ['Python', 'FastAPI', 'Telethon', 'BeautifulSoup', 'Asyncio', 'JavaScript', 'Docker'],
    tags: ['Bot', 'Telegram', 'Web Scraping', 'Fullstack'],
    github: 'https://github.com/JanGustavo/telegram-PromoPulse-extension',
    color: '#f5a623',
    accentVar: 'amber',
    status: 'wip',
    hasCI: false,
  },
  {
    id: 'worldcup',
    name: 'World Cup Simulator',
    tagline: 'Simulador estatístico da Copa do Mundo de 48 seleções com Monte Carlo e Streamlit',
    description:
      'Plataforma analítica e estatística para simulação de cenários e probabilidades da Copa do Mundo FIFA 2026. Desenvolvida em Python com motor de simulação vetorizado via NumPy e Pandas, executa simulações de Monte Carlo (1 milhão de iterações) estimando gols através de Distribuição de Poisson, ponderada exponencialmente pelo Rating FIFA das seleções. O algoritmo mapeia de forma otimizada as complexas regras de desempate e a repescagem dos melhores terceiros colocados, servindo os dados em tempo real em um painel interativo em Streamlit com visualizações em Matplotlib.',
    highlight: 'Python + Streamlit + Monte Carlo Simulations + Poisson Distribution + NumPy & Pandas',
    tech: ['Python', 'Streamlit', 'NumPy', 'Pandas', 'Matplotlib'],
    tags: ['Data Science', 'Estatística', 'Python', 'Web App'],
    github: 'https://github.com/JanGustavo/world-cup-simulator',
    live: 'https://world-cup-simulator-python.streamlit.app/',
    color: '#4afa8a',
    accentVar: 'green',
    status: 'live',
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

function matchTech(techArray: string[], search: string): boolean {
  const s = search.toLowerCase();
  return techArray.some(t => {
    const tech = t.toLowerCase();
    
    // Custom database mapping for SQL
    if (s === 'sql') {
      return tech.includes('sql');
    }
    
    // Custom mapping for ASP.NET / .NET
    if (s === 'asp.net') {
      return tech.includes('asp.net') || tech.includes('.net');
    }
    
    // Custom mapping for Entity Framework / EF Core
    if (s === 'entity framework') {
      return tech.includes('entity framework') || tech.includes('ef core');
    }
    
    // Custom mapping for Tailwind CSS
    if (s === 'tailwind css') {
      return tech.includes('tailwind');
    }
    
    // Custom mapping for React
    if (s === 'react') {
      return tech.includes('react');
    }
    
    // Default fallback: exact match or search string contained within the tech item
    return tech === s || tech.includes(s);
  });
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




function ProjectCard({ project, delay, index, selectedSkill }: { project: Project; delay: number; index: number; selectedSkill: string | null }) {
  const { ref, visible } = useVisible()
  const [hovered, setHovered] = useState(false)
  const isFeatured = project.featured;

  const isActiveFilter = selectedSkill !== null;
  const isMatching = selectedSkill ? matchTech(project.tech, selectedSkill) : false;

  // Comandos de terminal customizados para destacar a individualidade de cada projeto
  const commandMap: Record<string, string> = {
    cronflow: 'go run cmd/scheduler/main.go',
    metemarcha: 'flutter run --release',
    stockwise: 'dotnet run --project StockWise.NET',
    adotapet: 'dotnet run --project AdotaPet.Api',
    moletom: 'python app.py',
    radar: 'uvicorn main:app --reload',
    worldcup: 'streamlit run world_cup_simulator/main.py',
  }
  const projectCmd = commandMap[project.id] || (isFeatured ? 'project --featured' : 'project --name')
  const terminalCommand = `$ projects[${index}].run() // ${projectCmd}`

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible 
          ? (isActiveFilter ? (isMatching ? 1 : 0.2) : 1) 
          : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        border: `1px solid ${
          isActiveFilter && isMatching 
            ? project.color 
            : (hovered ? project.color + 'aa' : isFeatured ? project.color + '33' : 'var(--border)')
        }`,
        background: isActiveFilter && isMatching
          ? `radial-gradient(circle at top right, ${project.color}15 0%, var(--bg-hover) 85%)` 
          : (hovered 
            ? `radial-gradient(circle at top right, ${project.color}15 0%, var(--bg-hover) 85%)` 
            : isFeatured 
              ? 'linear-gradient(135deg, var(--bg-card) 0%, rgba(0, 217, 255, 0.02) 100%)' 
              : 'var(--bg-card)'),
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        boxShadow: isActiveFilter && isMatching
          ? `0 12px 36px ${project.color}44, inset 0 0 15px ${project.color}15`
          : (isFeatured && hovered 
            ? `0 10px 30px ${project.color}25, inset 0 0 12px ${project.color}08` 
            : hovered
              ? `0 8px 24px ${project.color}15, inset 0 0 8px ${project.color}05`
              : isFeatured 
                ? `0 4px 15px ${project.color}05` 
                : 'none'),
        filter: isActiveFilter && !isMatching ? 'grayscale(0.6) blur(0.3px)' : 'none',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s, background 0.3s, box-shadow 0.3s, filter 0.3s`,
      }}
    >
      {/* linha de cor lateral */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: hovered ? '6px' : '3px',
        background: project.color,
        opacity: hovered ? 1 : 0.45,
        boxShadow: hovered ? `0 0 12px ${project.color}` : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }} />

      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <ProjectAvatars projectId={project.id} color={project.color} />
          <div>
            <div style={{ color: 'var(--text-dim)', fontSize: '11px', marginBottom: '4px', letterSpacing: '0.1em', fontFamily: 'var(--mono)' }}>
              {terminalCommand}
            </div>
            <h3 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              color: project.color,
              fontWeight: 900,
              lineHeight: 1.1,
              textShadow: hovered ? `0 0 12px ${project.color}33` : 'none',
              transition: 'text-shadow 0.3s ease',
            }}>
              {project.name}
            </h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '12px', marginTop: '4px', fontStyle: 'italic' }}>
              {project.tagline}
            </p>
          </div>
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
        {project.tech.map(t => {
          const isThisTechSelected = selectedSkill ? matchTech([t], selectedSkill) : false;
          return (
            <span key={t} style={{
              fontSize: '11px',
              padding: '2px 10px',
              border: isThisTechSelected 
                ? `1px solid ${project.color}` 
                : (hovered ? `1px solid ${project.color}44` : '1px solid var(--border-lit)'),
              color: isThisTechSelected 
                ? 'var(--text-bright)' 
                : (hovered ? 'var(--text-bright)' : 'var(--text-dim)'),
              background: isThisTechSelected 
                ? `${project.color}33` 
                : (hovered ? `${project.color}08` : 'transparent'),
              boxShadow: isThisTechSelected ? `0 0 8px ${project.color}66` : 'none',
              fontWeight: isThisTechSelected ? 'bold' : 'normal',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
            }}>
              {t}
            </span>
          );
        })}
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
        {project.id === 'metemarcha' && downloadRelease('https://github.com/JanGustavo/MeteMarcha/releases/latest/download/app-release.apk', project.color, 'Baixar APK (.apk) ↓')}
        {project.live && project.id !== 'cronflow' && deployButton(project.live, project.color, 'ver ao vivo →')}
      </div>

    </div>
  )
  


}

function SkillsSection({ selectedSkill, setSelectedSkill }: { selectedSkill: string | null; setSelectedSkill: (skill: string | null) => void }) {
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
        {Object.entries(SKILLS).map(([category, items], ci) => {
          return (
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
                {items.map(item => {
                  const isSelected = selectedSkill === item;
                  return (
                    <span 
                      key={item} 
                      onClick={() => {
                        if (isSelected) {
                          setSelectedSkill(null);
                        } else {
                          setSelectedSkill(item);
                          const hasProjects = PROJECTS.some(p => matchTech(p.tech, item));
                          if (hasProjects) {
                            const el = document.getElementById('projetos');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      style={{
                        fontSize: '13px',
                        color: isSelected ? 'var(--green)' : 'var(--text)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        padding: '4px 8px',
                        marginLeft: '-8px',
                        borderRadius: '4px',
                        background: isSelected ? 'rgba(0, 245, 212, 0.08)' : 'transparent',
                        border: isSelected ? '1px solid rgba(0, 245, 212, 0.3)' : '1px solid transparent',
                        transition: 'all 0.2s ease',
                        fontWeight: isSelected ? 'bold' : 'normal',
                        boxShadow: isSelected ? '0 0 10px rgba(0, 245, 212, 0.15)' : 'none',
                      }}
                      onMouseEnter={e => {
                        if (!isSelected) {
                          e.currentTarget.style.color = 'var(--green)';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isSelected) {
                          e.currentTarget.style.color = 'var(--text)';
                          e.currentTarget.style.transform = 'none';
                        }
                      }}
                    >
                      <span style={{ 
                        color: isSelected ? 'var(--green)' : 'var(--text-dim)',
                        transition: 'color 0.2s'
                      }}>
                        {isSelected ? '●' : '▸'}
                      </span>
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
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
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isResumeOpen]);

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
                Desenvolvedor Backend focado em Go, .NET e Python, construindo sistemas distribuídos, APIs RESTful, integrações e produtos SaaS. Comprometido com rigor de engenharia de software e raciocínio arquitetural. Atuando diretamente de João Pessoa, PB.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#projetos"
                  style={{
                    fontSize: '13px',
                    color: 'var(--bg)',
                    background: 'var(--green)',
                    padding: '8px 24px',
                    letterSpacing: '0.06em',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  ver projetos ↓
                </a>
                <a
                  href="https://wa.me/5583998442632"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '13px',
                    color: '#0d0f0e',
                    background: '#25D366',
                    padding: '8px 24px',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minWidth: '140px',
                    border: '1px solid #25D366',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#25D366'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#25D366'
                    e.currentTarget.style.color = '#0d0f0e'
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.489 4.936 1.49 5.428 0 9.85-4.414 9.853-9.842.002-2.63-1.012-5.101-2.858-6.95S14.654 1.83 12.023 1.83C6.593 1.83 2.17 6.244 2.167 11.672c-.001 1.745.474 3.447 1.378 4.908l-.946 3.454 3.552-.924zm10.967-5.293c-.277-.139-1.64-.81-1.894-.901-.255-.093-.44-.139-.624.139-.186.278-.717.901-.88 1.088-.163.186-.326.21-.603.07-1.127-.563-1.95-.98-2.73-2.312-.206-.35-.206-.575-.022-.76.164-.165.326-.382.49-.573.164-.19.219-.324.329-.54.109-.217.055-.407-.028-.546-.082-.14-1.64-3.942-1.902-4.571-.256-.613-.518-.529-.71-.529-.182-.001-.392-.001-.602-.001-.21 0-.553.079-.844.397-.29.317-1.11 1.084-1.11 2.644 0 1.56 1.137 3.064 1.294 3.275.158.21 2.238 3.418 5.423 4.793.757.327 1.348.523 1.81.669.76.241 1.452.207 2.001.125.61-.092 1.64-.67 1.871-1.286.232-.617.232-1.146.163-1.258-.07-.112-.256-.15-.533-.29z"/>
                  </svg>
                  falar comigo
                </a>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  style={{
                    fontSize: '13px',
                    color: 'var(--green)',
                    border: '1px solid var(--green)',
                    background: 'transparent',
                    padding: '8px 24px',
                    letterSpacing: '0.06em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minWidth: '110px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--green-dim)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  resumo
                </button>
              </div>
            </div>
          </section>

          {/* ── PROJETOS ── */}
          <section id="projetos" style={{ padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
            <div style={{ color: 'var(--text-dim)', fontSize: '12px', marginBottom: '0.4rem' }}>
              $ git log --oneline --all
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: 'var(--text-bright)',
                fontWeight: 700,
                margin: 0,
              }}>
                Projetos
              </h2>
              {selectedSkill && (
                <button
                  onClick={() => setSelectedSkill(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-dim)',
                    padding: '4px 12px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'var(--text-bright)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = 'var(--text-dim)';
                  }}
                >
                  Filtrado por: <strong style={{ color: 'var(--green)' }}>{selectedSkill}</strong> ✕
                </button>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROJECTS.map((project, i) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  delay={i * 120} 
                  index={i} 
                  selectedSkill={selectedSkill}
                />
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section id="skills">
            <SkillsSection selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
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
              Aberto a oportunidades de estágio e desenvolvimento júnior. Me manda um email, me chama no WhatsApp ou conecta no GitHub.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { label: 'email', value: 'jeeh2200@gmail.com', isEmail: true },
                { label: 'whatsapp', value: '+55 (83) 99844-2632', href: 'https://wa.me/5583998442632' },
                { label: 'github', value: 'github.com/JanGustavo', href: 'https://github.com/JanGustavo' },
                { label: 'localização', value: 'João Pessoa, Paraíba — Brasil' },
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
            <span>© 2026 Janderson Gustavo · João Pessoa, PB</span>
            <span style={{ color: 'var(--green-dim)' }}>
              feito com {'<'}código{'>'} e café
            </span>
          </footer>

        </div>
      </main>

      {/* RESUME MODAL */}
      {isResumeOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 1000,
          background: 'rgba(13, 15, 14, 0.95)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'clamp(1rem, 3vw, 2rem)',
        }}>
          {/* Modal Card */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            height: '90vh',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            animation: 'fadeUp 0.3s ease both',
          }}>
            {/* Header / Control Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 1.5rem',
              borderBottom: '1px solid var(--border)',
              flexWrap: 'wrap',
              gap: '0.8rem',
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--green)' }}>
                resumo.pdf
              </span>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <a
                  href="https://drive.google.com/uc?export=download&id=12wqMWjRZH9ga4APb3r7pRg4s7kitIsMh"
                  download="Janderson_Gustavo_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    color: 'var(--bg)',
                    background: 'var(--green)',
                    padding: '6px 16px',
                    letterSpacing: '0.06em',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  baixar pdf
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    color: 'var(--text-dim)',
                    padding: '6px 12px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--green)';
                    e.currentTarget.style.color = 'var(--green)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-dim)';
                  }}
                >
                  fechar ✕
                </button>
              </div>
            </div>

            {/* Document Content (Iframe) */}
            <div style={{ flex: 1, background: '#1e2421', position: 'relative' }}>
              <iframe
                src="https://drive.google.com/file/d/12wqMWjRZH9ga4APb3r7pRg4s7kitIsMh/preview"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                title="Visualizador de Currículo"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
