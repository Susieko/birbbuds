import { motion } from 'motion/react'

type BirbProps = {
  name?: string
}

export default function Birb({ name = 'Pip' }: BirbProps) {
  return (
    <motion.button
      type="button"
      aria-label={`Say hello to ${name}`}
      className="group relative flex h-44 w-44 items-center justify-center focus:outline-none"
      animate={{ y: [0, -6, 0] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        y: {
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <svg
        viewBox="0 0 220 220"
        className="h-full w-full overflow-visible drop-shadow-[0_20px_22px_rgba(45,72,60,0.16)]"
      >
        {/* Tail */}
        <path
          d="M64 150C42 166 32 183 36 187C46 190 68 177 83 160Z"
          fill="#597867"
        />

        {/* Body */}
        <ellipse
          cx="111"
          cy="128"
          rx="64"
          ry="67"
          fill="#789c86"
        />

        {/* Belly */}
        <ellipse
          cx="116"
          cy="144"
          rx="42"
          ry="46"
          fill="#f4ead7"
        />

        {/* Wing */}
        <motion.path
          d="M65 122C48 132 49 158 70 167C88 162 96 145 91 125C82 119 73 118 65 122Z"
          fill="#557866"
          animate={{ rotate: [0, -3, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '82px 132px' }}
        />

        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            times: [0, 0.44, 0.47, 0.5, 1],
          }}
          style={{ transformOrigin: '111px 92px' }}
        >
          <circle cx="91" cy="91" r="7" fill="#26352f" />
          <circle cx="132" cy="91" r="7" fill="#26352f" />

          <circle cx="89" cy="88" r="2" fill="#ffffff" />
          <circle cx="130" cy="88" r="2" fill="#ffffff" />
        </motion.g>

        {/* Beak */}
        <path
          d="M105 103L118 103L111 114Z"
          fill="#d99b58"
        />

        {/* Feet */}
        <path
          d="M93 186V197M93 197L85 202M93 197L101 202"
          stroke="#b77649"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M130 186V197M130 197L122 202M130 197L138 202"
          stroke="#b77649"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute -bottom-5 rounded-full bg-[#355647] px-3 py-1 text-xs font-bold text-white opacity-0 transition duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
        {name}
      </span>
    </motion.button>
  )
}