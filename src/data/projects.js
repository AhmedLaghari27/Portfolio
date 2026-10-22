// Replace each `github` value with the exact repository URL.
// Use `github: null` for private or client projects: the card then shows a note instead of a link.

export const projects = [
  {
    title: 'AutoCares',
    subtitle: 'Smart Roadside Assistance App · Final Year Project',
    description:
      'A React Native app with a Node.js, Express.js and MongoDB backend that connects drivers with nearby mechanics in real time. It includes Google Maps navigation, Socket.IO live updates, Firebase auth and push notifications, an AI troubleshooting chatbot, OBD-II diagnostics and an admin dashboard.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Firebase', 'Google Maps'],
    github: `https://github.com/AhmedLaghari27/Autocares`,
    featured: true,
  },
  {
    title: 'ConnectPK',
    subtitle: 'Professional Networking App',
    description:
      'A mobile-first networking app for professionals in Pakistan with verified profiles, a professional feed, offer-based private messaging and real-time notifications, plus a Next.js moderation portal.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Next.js'],
    github: `https://github.com/AhmedLaghari27/ConnectPK`,
  },
  {
    title: 'Loan Eligibility Prediction',
    subtitle: 'Full-stack web app',
    description:
      'A full-stack app with a responsive UI and API integration that returns real-time loan eligibility decisions.',
    tags: ['JavaScript', 'REST API', 'Python'],
    github: `https://github.com/AhmedLaghari27/Loan-Predictor`,
  },
  {
    title: 'University AI Chatbot',
    subtitle: 'Iqra University',
    description:
      'A RAG-based chatbot with semantic search and a real-time web interface that gives accurate university information.',
    tags: ['RAG', 'Semantic Search', 'LLM APIs', 'Python'],
    github: `https://github.com/AhmedLaghari27/Iqra-University-Chatbot`,
  },
  {
    title: 'WhatsApp AI Chatbot',
    subtitle: 'Skyline',
    description:
      'An AI-powered WhatsApp chatbot that answers customer queries automatically through messaging APIs, in real time.',
    tags: ['LLM APIs', 'WhatsApp API', 'Node.js'],
    github: `https://github.com/AhmedLaghari27/Skyline-whatsapp-chatbots`,
  },
]