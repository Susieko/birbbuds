import { motion } from 'motion/react'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#dff1e8]">
      {/* Sky glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#fff8d8]/70 blur-3xl" />

      {/* Clouds */}
      <motion.div
        className="absolute left-[8%] top-[18%] h-10 w-28 rounded-full bg-white/55 blur-[1px]"
        animate={{ x: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-[12%] top-[27%] h-8 w-20 rounded-full bg-white/45 blur-[1px]"
        animate={{ x: [0, -14, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Navigation */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10">
        <a
          href="/"
          className="text-lg font-black tracking-[-0.04em] text-[#213a31]"
        >
          BirbBuds
        </a>

        <button
          type="button"
          className="rounded-full border border-[#213a31]/15 bg-white/35 px-4 py-2 text-sm font-semibold text-[#213a31] backdrop-blur-md transition hover:bg-white/60"
        >
          Collection
        </button>
      </header>

      {/* World */}
      <section className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#55756a]">
            Somewhere in the little woods
          </p>

          <h1 className="text-4xl font-black tracking-[-0.055em] text-[#213a31] md:text-6xl">
            Meet your first Birb.
          </h1>
        </motion.div>

        {/* Birb */}
        <motion.button
          type="button"
          aria-label="Say hello to the Birb"
          className="group relative flex h-40 w-40 items-center justify-center rounded-[45%] border border-[#213a31]/10 bg-[#fffaf0] shadow-[0_24px_70px_rgba(56,88,73,0.14)]"
          animate={{ y: [0, -7, 0] }}
          whileHover={{ scale: 1.04, rotate: -2 }}
          whileTap={{ scale: 0.95, rotate: 3 }}
          transition={{
            y: {
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <span className="text-7xl transition-transform duration-300 group-hover:rotate-3">
            🐦
          </span>

          <span className="absolute -bottom-3 h-3 w-20 rounded-[100%] bg-[#52705f]/15 blur-sm" />
        </motion.button>

        {/* Perch */}
        <div className="mt-4 h-3 w-52 rotate-[-2deg] rounded-full bg-[#795c42]" />

        <motion.div
          className="mt-10 rounded-full border border-[#213a31]/10 bg-white/35 px-5 py-3 text-sm font-medium text-[#55756a] backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Birb seems curious...
        </motion.div>
      </section>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 h-28 w-full rounded-t-[50%] bg-[#8fbd91]" />
      <div className="absolute bottom-0 left-0 h-16 w-full rounded-t-[45%] bg-[#699b73]" />
    </main>
  )
}

export default App