import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Activity,
  Droplets,
  AlertTriangle,
  Flame,
  Dna,
  Baby,
  Battery,
  Zap,
  Cable,
  CircleDot,
  Microscope,
  TestTube,
  HelpCircle,
  FolderOpen,
  ClipboardCheck,
  Settings,
} from 'lucide-react'

const modules = [
  {
    title: 'Normal Muscle',
    description: 'Fiber types, histology basics',
    path: '/normal-muscle',
    icon: Activity,
    color: 'bg-blue-500',
  },
  {
    title: 'Muscle Lab Stains',
    description: 'H&E, trichrome, NADH, COX/SDH',
    path: '/stains',
    icon: Droplets,
    color: 'bg-purple-500',
  },
  {
    title: 'Artifacts',
    description: 'Freezing, orientation, pitfalls',
    path: '/artifacts',
    icon: AlertTriangle,
    color: 'bg-yellow-500',
  },
  {
    title: 'Inflammatory Myopathies',
    description: 'DM, PM, IBM, IMNM',
    path: '/inflammatory',
    icon: Flame,
    color: 'bg-red-500',
  },
  {
    title: 'Dystrophies',
    description: 'Duchenne, Becker, LGMD',
    path: '/dystrophies',
    icon: Dna,
    color: 'bg-pink-500',
  },
  {
    title: 'Congenital Myopathies',
    description: 'Central core, nemaline, centronuclear',
    path: '/congenital-myopathies',
    icon: Baby,
    color: 'bg-teal-500',
  },
  {
    title: 'Metabolic & Mito',
    description: 'Glycogen, lipid, mitochondrial',
    path: '/metabolic',
    icon: Battery,
    color: 'bg-orange-500',
  },
  {
    title: 'Neurogenic Atrophy',
    description: 'Denervation, reinnervation patterns',
    path: '/neurogenic',
    icon: Zap,
    color: 'bg-amber-500',
  },
  {
    title: 'Peripheral Nerve',
    description: 'Axonal vs demyelinating',
    path: '/nerve',
    icon: Cable,
    color: 'bg-indigo-500',
  },
  {
    title: 'NMJ',
    description: 'Neuromuscular junction',
    path: '/nmj',
    icon: CircleDot,
    color: 'bg-cyan-500',
  },
  {
    title: 'EM Concepts',
    description: 'Ultrastructural features',
    path: '/em',
    icon: Microscope,
    color: 'bg-violet-500',
  },
  {
    title: 'IHC Framework',
    description: 'Dystrophin, sarcoglycans, MHC-I',
    path: '/ihc',
    icon: TestTube,
    color: 'bg-emerald-500',
  },
  {
    title: 'Pitfalls & Mimics',
    description: 'Common diagnostic errors',
    path: '/pitfalls',
    icon: HelpCircle,
    color: 'bg-rose-500',
  },
  {
    title: 'Case Bank',
    description: 'Integrated synthetic cases',
    path: '/cases',
    icon: FolderOpen,
    color: 'bg-sky-500',
  },
  {
    title: 'Assessment',
    description: 'Test your knowledge',
    path: '/assessment',
    icon: ClipboardCheck,
    color: 'bg-green-500',
  },
  {
    title: 'Settings',
    description: 'Theme, about, disclaimers',
    path: '/settings',
    icon: Settings,
    color: 'bg-slate-500',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <div className="flex justify-center mb-4">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
            <Activity className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Muscle & Nerve Lab Master
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A comprehensive educational platform for muscle and nerve biopsy pathology.
          Designed for pathology residents and neuromuscular pathology trainees.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-muted">Mobile-First</span>
          <span className="px-3 py-1 rounded-full bg-muted">Offline-Ready</span>
          <span className="px-3 py-1 rounded-full bg-muted">Dark Mode</span>
          <span className="px-3 py-1 rounded-full bg-muted">Educational Only</span>
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((module) => (
          <Link key={module.path} to={module.path}>
            <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`${module.color} p-2 rounded-lg text-white`}>
                    <module.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{module.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Disclaimer Banner */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground">
            <strong className="text-foreground">Educational Use Only:</strong>{' '}
            This application is for educational purposes and should not be used for clinical diagnosis or patient care.
            All images are synthetic/diagrammatic representations with no PHI.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
