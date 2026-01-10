import { useState } from 'react'
import { FolderOpen, ChevronRight, Eye, EyeOff } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Case {
  id: string
  title: string
  category: string
  clinical: string
  findings: {
    he: string
    trichrome?: string
    nadh?: string
    atpase?: string
    pas?: string
    oilRedO?: string
    coxSdh?: string
    ihc?: string[]
    em?: string
  }
  diagnosis: string
  explanation: string
  keyPoints: string[]
}

const cases: Case[] = [
  {
    id: 'case1',
    title: 'Case 1: Young Boy with Proximal Weakness',
    category: 'Dystrophy',
    clinical: '5-year-old boy with progressive proximal weakness, Gowers sign positive, CK 15,000. Family history negative.',
    findings: {
      he: 'Marked fiber size variation with hypertrophic and atrophic fibers. Scattered necrotic and regenerating fibers. Increased internal nuclei. Endomysial fibrosis.',
      trichrome: 'Green fibrotic tissue between fibers. No ragged red fibers.',
      nadh: 'Loss of normal checkerboard pattern. Whorled and moth-eaten fibers.',
      ihc: ['Dystrophin (all 3 epitopes): ABSENT', 'Sarcoglycans: Secondarily reduced', 'Spectrin: Normal (control)'],
    },
    diagnosis: 'Duchenne Muscular Dystrophy (DMD)',
    explanation: 'Complete absence of dystrophin with secondary sarcoglycan reduction is diagnostic. High CK, early onset proximal weakness, and Gowers sign are classic clinical features.',
    keyPoints: [
      'Complete dystrophin absence = DMD',
      'Use all three dystrophin epitopes',
      'Secondary sarcoglycan reduction is expected',
      'Genetic confirmation recommended',
    ],
  },
  {
    id: 'case2',
    title: 'Case 2: Middle-aged Woman with Skin Rash',
    category: 'Inflammatory',
    clinical: '45-year-old woman with heliotrope rash, proximal weakness, elevated CK (800), positive ANA.',
    findings: {
      he: 'Perifascicular atrophy (2-4 layers of small fibers at fascicle periphery). Perivascular inflammation with lymphocytes.',
      trichrome: 'No rimmed vacuoles. Mild perimysial fibrosis.',
      nadh: 'Perifascicular fibers show loss of oxidative enzyme activity.',
      ihc: ['MHC-I: Strong perifascicular upregulation', 'MAC (C5b-9): Positive on capillaries', 'CD4/CD8: Perivascular CD4+ predominant'],
    },
    diagnosis: 'Dermatomyositis (DM)',
    explanation: 'Perifascicular atrophy with MAC deposition on capillaries is pathognomonic. Perivascular CD4+ T cell and B cell infiltrates with perifascicular MHC-I upregulation support the diagnosis.',
    keyPoints: [
      'Perifascicular atrophy is the hallmark',
      'MAC on capillaries (not sarcolemma)',
      'Perivascular inflammation (not endomysial)',
      'Screen for malignancy in adults',
    ],
  },
  {
    id: 'case3',
    title: 'Case 3: Elderly Man with Finger Weakness',
    category: 'Inflammatory',
    clinical: '68-year-old man with asymmetric finger flexor and quadriceps weakness. CK mildly elevated (400). Not responding to immunosuppression.',
    findings: {
      he: 'Endomysial inflammation with lymphocytes invading non-necrotic fibers. Fiber size variation. Occasional vacuoles.',
      trichrome: 'Rimmed vacuoles (red-lined) in multiple fibers.',
      nadh: 'Scattered COX-negative fibers present.',
      coxSdh: 'COX-negative/SDH-positive (blue) fibers (~5%).',
      ihc: ['MHC-I: Diffuse sarcolemmal upregulation', 'CD8: Endomysial, invading non-necrotic fibers', 'p62: Positive aggregates in vacuolated fibers', 'TDP-43: Cytoplasmic accumulation'],
    },
    diagnosis: 'Inclusion Body Myositis (IBM)',
    explanation: 'Rimmed vacuoles + CD8+ T cell invasion + COX-negative fibers + p62/TDP-43 positive inclusions = IBM. Treatment-resistant course and finger flexor/quad weakness are classic.',
    keyPoints: [
      'Rimmed vacuoles on trichrome are key',
      'CD8+ invasion like PM but with vacuoles',
      'COX-negative fibers (mitochondrial component)',
      'p62/TDP-43 aggregates in inclusions',
      'Treatment-resistant - distinguish from PM',
    ],
  },
  {
    id: 'case4',
    title: 'Case 4: Infant with Hypotonia',
    category: 'Congenital',
    clinical: 'Newborn with severe hypotonia, weak cry, respiratory distress. Mother has mild ptosis.',
    findings: {
      he: 'Marked fiber size variation with Type 1 predominance. Central nuclei in >80% of fibers.',
      trichrome: 'No rods or other inclusions.',
      nadh: 'Central pallor with radial spoke-like pattern around nuclei.',
      atpase: 'Type 1 fiber predominance and hypotrophy.',
      em: 'Central nuclei with perinuclear accumulation of organelles.',
    },
    diagnosis: 'X-linked Myotubular Myopathy (MTM1)',
    explanation: 'Central nuclei in majority of fibers with spoke-wheel pattern on NADH in a severely affected male infant suggests X-linked form. Mother with mild symptoms suggests carrier status.',
    keyPoints: [
      'Central nuclei in >25% of fibers',
      'Spoke-wheel pattern on NADH',
      'X-linked form is severe (MTM1)',
      'AD form (DNM2) is milder',
      'Type 1 predominance common',
    ],
  },
  {
    id: 'case5',
    title: 'Case 5: Exercise Intolerance with Rhabdomyolysis',
    category: 'Metabolic',
    clinical: '35-year-old with exercise intolerance, muscle cramps, and episode of rhabdomyolysis after fasting. CK elevated during episode.',
    findings: {
      he: 'Near-normal appearance. Occasional small vacuoles.',
      trichrome: 'Normal.',
      nadh: 'Normal fiber typing.',
      oilRedO: 'Markedly increased lipid droplets throughout fibers.',
      coxSdh: 'Normal.',
    },
    diagnosis: 'Lipid Storage Myopathy (CPT II Deficiency)',
    explanation: 'Exercise and fasting-induced rhabdomyolysis with increased lipid on Oil Red O suggests fatty acid oxidation defect. CPT II is most common in adults. Biopsy may be normal between episodes.',
    keyPoints: [
      'Oil Red O shows lipid accumulation',
      'Biopsy may be normal between episodes',
      'CPT II most common adult lipid myopathy',
      'Triggered by fasting/prolonged exercise',
      'Genetic confirmation needed',
    ],
  },
  {
    id: 'case6',
    title: 'Case 6: Chronic Progressive Weakness',
    category: 'Neurogenic',
    clinical: '55-year-old with slowly progressive weakness over 10 years. EMG shows chronic denervation with reinnervation.',
    findings: {
      he: 'Large group atrophy with angular atrophic fibers. Compensatory hypertrophy.',
      trichrome: 'No specific findings.',
      nadh: 'Loss of normal checkerboard - fiber type grouping present.',
      atpase: 'Large groups of same-type fibers (>20 fibers grouped).',
    },
    diagnosis: 'Chronic Neurogenic Atrophy',
    explanation: 'Group atrophy + fiber type grouping indicates chronic denervation with reinnervation. Pattern suggests motor neuron disease or chronic neuropathy. Clinical correlation needed.',
    keyPoints: [
      'Group atrophy = chronic denervation',
      'Fiber type grouping = reinnervation',
      'Angular fibers = active/recent denervation',
      'Consider ALS, SMA, or neuropathy',
      'Correlate with EMG findings',
    ],
  },
  {
    id: 'case7',
    title: 'Case 7: Ragged Red Fibers',
    category: 'Mitochondrial',
    clinical: '40-year-old with ptosis, ophthalmoplegia, exercise intolerance, and mild proximal weakness. Lactate elevated.',
    findings: {
      he: 'Mild fiber size variation. Occasional fibers with subsarcolemmal basophilic material.',
      trichrome: 'Ragged red fibers (~8%) with subsarcolemmal red accumulation.',
      nadh: 'Subsarcolemmal accumulation of oxidative enzyme activity.',
      coxSdh: 'COX-negative/SDH-positive (blue) fibers (~15%).',
      em: 'Paracrystalline inclusions within enlarged mitochondria.',
    },
    diagnosis: 'Mitochondrial Myopathy (CPEO/KSS spectrum)',
    explanation: 'Ragged red fibers + COX-negative/SDH-positive fibers + paracrystalline inclusions is classic mitochondrial myopathy. CPEO with elevated lactate suggests mtDNA mutation.',
    keyPoints: [
      'Ragged red fibers on trichrome',
      'COX-/SDH+ (blue) fibers on combined stain',
      'Paracrystalline inclusions on EM',
      'Single deletion common in CPEO',
      'Check for cardiac, endocrine involvement',
    ],
  },
  {
    id: 'case8',
    title: 'Case 8: Severe Proximal Weakness with High CK',
    category: 'Inflammatory',
    clinical: '50-year-old with acute severe proximal weakness, CK 10,000, started statins 6 months ago. Minimal improvement off statins.',
    findings: {
      he: 'Scattered necrotic and regenerating fibers. Minimal lymphocytic inflammation.',
      trichrome: 'No rimmed vacuoles.',
      nadh: 'No specific pattern abnormality.',
      ihc: ['MHC-I: Positive on necrotic/regenerating fibers only', 'MAC (C5b-9): Positive on sarcolemma of non-necrotic fibers', 'CD68: Macrophages in necrotic fibers', 'CD8: Minimal'],
    },
    diagnosis: 'Immune-Mediated Necrotizing Myopathy (IMNM)',
    explanation: 'Necrotizing myopathy with minimal inflammation + MAC on sarcolemma (not capillaries) + statin exposure suggests anti-HMGCR IMNM. Antibody testing recommended.',
    keyPoints: [
      'Necrosis >> inflammation',
      'MAC on sarcolemma (not capillaries)',
      'Anti-HMGCR or anti-SRP antibodies',
      'May persist after stopping statins',
      'Responds to immunosuppression',
    ],
  },
]

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const categories = [...new Set(cases.map((c) => c.category))]

  const handleCaseSelect = (c: Case) => {
    setSelectedCase(c)
    setShowAnswer(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <FolderOpen className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Integrated Case Bank</h1>
          <p className="text-muted-foreground mt-1">
            Synthetic neuromuscular cases with LM, IHC, and EM findings
          </p>
        </div>
      </div>

      {!selectedCase ? (
        <div className="space-y-6">
          {categories.map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg">{category} Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {cases
                    .filter((c) => c.category === category)
                    .map((c) => (
                      <Button
                        key={c.id}
                        variant="ghost"
                        className="w-full justify-between h-auto py-3"
                        onClick={() => handleCaseSelect(c)}
                      >
                        <span className="text-left">{c.title}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <Button variant="outline" onClick={() => setSelectedCase(null)}>
            Back to Cases
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>{selectedCase.title}</CardTitle>
              <CardDescription>Category: {selectedCase.category}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Clinical History</h3>
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                  {selectedCase.clinical}
                </p>
              </div>

              <Tabs defaultValue="he" className="w-full">
                <TabsList className="w-full flex-wrap h-auto gap-1 p-1">
                  <TabsTrigger value="he" className="text-xs">H&E</TabsTrigger>
                  {selectedCase.findings.trichrome && (
                    <TabsTrigger value="trichrome" className="text-xs">Trichrome</TabsTrigger>
                  )}
                  {selectedCase.findings.nadh && (
                    <TabsTrigger value="nadh" className="text-xs">NADH</TabsTrigger>
                  )}
                  {selectedCase.findings.atpase && (
                    <TabsTrigger value="atpase" className="text-xs">ATPase</TabsTrigger>
                  )}
                  {selectedCase.findings.oilRedO && (
                    <TabsTrigger value="oil" className="text-xs">Oil Red O</TabsTrigger>
                  )}
                  {selectedCase.findings.coxSdh && (
                    <TabsTrigger value="cox" className="text-xs">COX/SDH</TabsTrigger>
                  )}
                  {selectedCase.findings.ihc && (
                    <TabsTrigger value="ihc" className="text-xs">IHC</TabsTrigger>
                  )}
                  {selectedCase.findings.em && (
                    <TabsTrigger value="em" className="text-xs">EM</TabsTrigger>
                  )}
                </TabsList>

                <TabsContent value="he" className="mt-4">
                  <p className="text-sm text-muted-foreground">{selectedCase.findings.he}</p>
                </TabsContent>
                {selectedCase.findings.trichrome && (
                  <TabsContent value="trichrome" className="mt-4">
                    <p className="text-sm text-muted-foreground">{selectedCase.findings.trichrome}</p>
                  </TabsContent>
                )}
                {selectedCase.findings.nadh && (
                  <TabsContent value="nadh" className="mt-4">
                    <p className="text-sm text-muted-foreground">{selectedCase.findings.nadh}</p>
                  </TabsContent>
                )}
                {selectedCase.findings.atpase && (
                  <TabsContent value="atpase" className="mt-4">
                    <p className="text-sm text-muted-foreground">{selectedCase.findings.atpase}</p>
                  </TabsContent>
                )}
                {selectedCase.findings.oilRedO && (
                  <TabsContent value="oil" className="mt-4">
                    <p className="text-sm text-muted-foreground">{selectedCase.findings.oilRedO}</p>
                  </TabsContent>
                )}
                {selectedCase.findings.coxSdh && (
                  <TabsContent value="cox" className="mt-4">
                    <p className="text-sm text-muted-foreground">{selectedCase.findings.coxSdh}</p>
                  </TabsContent>
                )}
                {selectedCase.findings.ihc && (
                  <TabsContent value="ihc" className="mt-4">
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {selectedCase.findings.ihc.map((finding, i) => (
                        <li key={i}>• {finding}</li>
                      ))}
                    </ul>
                  </TabsContent>
                )}
                {selectedCase.findings.em && (
                  <TabsContent value="em" className="mt-4">
                    <p className="text-sm text-muted-foreground">{selectedCase.findings.em}</p>
                  </TabsContent>
                )}
              </Tabs>

              <div className="pt-4 border-t">
                <Button
                  variant={showAnswer ? 'secondary' : 'default'}
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="w-full"
                >
                  {showAnswer ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" /> Hide Answer
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" /> Show Answer
                    </>
                  )}
                </Button>

                {showAnswer && (
                  <div className="mt-4 space-y-4">
                    <Card className="border-primary">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-primary">Diagnosis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold">{selectedCase.diagnosis}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Explanation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{selectedCase.explanation}</p>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-500/30 bg-yellow-500/5">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Key Points</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm">
                          {selectedCase.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-yellow-500">★</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground">
            <strong>Note:</strong> All cases are synthetic and for educational purposes only.
            Real clinical decision-making requires additional information and clinical correlation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
