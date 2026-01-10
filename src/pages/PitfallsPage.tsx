import { HelpCircle } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const pitfalls = [
  {
    title: 'Freezing Artifact vs Vacuolar Myopathy',
    mimic: 'Pompe disease, vacuolar myopathy',
    clue: 'Uniform distribution, honeycomb pattern throughout all fibers',
    solution: 'True vacuoles are membrane-bound, PAS/acid phosphatase positive in Pompe',
  },
  {
    title: 'Contraction Bands vs Necrosis',
    mimic: 'Active necrosis',
    clue: 'At biopsy edges, hypercontracted fibers without macrophage invasion',
    solution: 'True necrosis shows macrophage invasion, fragmentation',
  },
  {
    title: 'Oblique Section vs Fiber Size Variation',
    mimic: 'Atrophy',
    clue: 'Elongated/elliptical fibers, apparent variation in well-preserved biopsy',
    solution: 'Request true cross-section, examine multiple levels',
  },
  {
    title: 'Type II Atrophy vs Neurogenic',
    mimic: 'Denervation',
    clue: 'Selective Type II atrophy is usually steroid, disuse, or cachexia',
    solution: 'Neurogenic shows angular atrophy of both types, esterase+',
  },
  {
    title: 'Inflammation in Dysferlinopathy vs PM',
    mimic: 'Polymyositis',
    clue: 'Prominent inflammation can occur in dysferlinopathy',
    solution: 'Check dysferlin IHC before diagnosing PM',
  },
  {
    title: 'Cores vs Target Fibers',
    mimic: 'Each other',
    clue: 'Cores lack intermediate dark zone on NADH',
    solution: 'Target fibers have three zones, indicate denervation',
  },
  {
    title: 'Mitochondrial Changes with Age vs Disease',
    mimic: 'Mitochondrial myopathy',
    clue: 'COX-negative fibers increase with age',
    solution: 'Context matters: age, number, clinical picture',
  },
  {
    title: 'Perifascicular Atrophy vs Artifact',
    mimic: 'Edge effect',
    clue: 'True perifascicular affects multiple fascicles consistently',
    solution: 'Correlate with MHC-I pattern, capillary changes',
  },
  {
    title: 'Regenerating Fibers vs Basophilic Fibers',
    mimic: 'Neoplasm (rare concern)',
    clue: 'Regenerating fibers have large vesicular nuclei, basophilic cytoplasm',
    solution: 'Immunoreactive for embryonic myosin, part of dystrophic process',
  },
  {
    title: 'Granulomatous Myositis vs IBM',
    mimic: 'IBM (rimmed vacuoles present in both occasionally)',
    clue: 'Granulomas with giant cells suggest sarcoid, infection',
    solution: 'Different clinical context, may need special stains for organisms',
  },
]

export default function PitfallsPage() {
  const sections = [
    {
      id: 'artifacts',
      title: 'Artifact Mimics',
      content: (
        <div className="space-y-4">
          {pitfalls.slice(0, 4).map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-yellow-500" />
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold text-destructive">May Mimic</h4>
                    <p className="text-sm text-muted-foreground">{p.mimic}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Clue to Artifact</h4>
                    <p className="text-sm text-muted-foreground">{p.clue}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">Solution</h4>
                    <p className="text-sm text-muted-foreground">{p.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'disease',
      title: 'Disease Mimics',
      content: (
        <div className="space-y-4">
          {pitfalls.slice(4, 8).map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-yellow-500" />
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold text-destructive">May Mimic</h4>
                    <p className="text-sm text-muted-foreground">{p.mimic}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Clue</h4>
                    <p className="text-sm text-muted-foreground">{p.clue}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">Solution</h4>
                    <p className="text-sm text-muted-foreground">{p.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'interpretation',
      title: 'Interpretation',
      content: (
        <div className="space-y-4">
          {pitfalls.slice(8).map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-yellow-500" />
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold text-destructive">May Mimic</h4>
                    <p className="text-sm text-muted-foreground">{p.mimic}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Clue</h4>
                    <p className="text-sm text-muted-foreground">{p.clue}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">Solution</h4>
                    <p className="text-sm text-muted-foreground">{p.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'checklist',
      title: 'Checklist',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pre-Diagnosis Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <p className="font-medium">Is this finding uniform or selective?</p>
                    <p className="text-sm text-muted-foreground">Artifacts affect all fibers; disease is usually selective</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <p className="font-medium">Is the finding at the edge or center?</p>
                    <p className="text-sm text-muted-foreground">Edge artifacts are common - evaluate central areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <p className="font-medium">Is this consistent across stains?</p>
                    <p className="text-sm text-muted-foreground">True pathology should correlate on multiple stains</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold shrink-0">4</div>
                  <div>
                    <p className="font-medium">Does it fit the clinical picture?</p>
                    <p className="text-sm text-muted-foreground">Unexpected findings may be artifacts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold shrink-0">5</div>
                  <div>
                    <p className="font-medium">Have I excluded artifact/technical issues?</p>
                    <p className="text-sm text-muted-foreground">Consider repeat staining or deeper sections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold shrink-0">6</div>
                  <div>
                    <p className="font-medium">Am I missing a common mimic?</p>
                    <p className="text-sm text-muted-foreground">Check dysferlin before PM, cores vs targets, etc.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardHeader>
              <CardTitle className="text-lg">Golden Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">★</span>
                  <span>Never diagnose dystrophy without IHC panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">★</span>
                  <span>Check dysferlin before diagnosing polymyositis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">★</span>
                  <span>Consider age-related changes in mitochondrial findings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">★</span>
                  <span>Target fibers = denervation; cores = congenital myopathy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">★</span>
                  <span>Clinical correlation is always essential</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Pitfalls & Dangerous Mimics"
      description="Common diagnostic errors and how to avoid them"
      icon={<HelpCircle className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Freezing artifact creates uniform honeycomb pattern - not true vacuoles',
        'Dysferlinopathy can have prominent inflammation mimicking PM',
        'Target fibers (3 zones) indicate denervation; cores (2 zones) are congenital',
        'COX-negative fibers increase with age - interpret in context',
        'Always evaluate central biopsy areas, not edges',
      ]}
      clinicalPearls={[
        'When uncertain, request deeper sections or re-cut',
        'IHC panel before dystrophy diagnosis is mandatory',
        'Clinical correlation prevents most pitfalls',
        'Perifascicular changes should be consistent across fascicles',
        'Type II atrophy alone is usually steroid/disuse, not denervation',
      ]}
    />
  )
}
