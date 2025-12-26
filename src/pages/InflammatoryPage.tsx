import { Flame } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const myopathies = [
  {
    name: 'Dermatomyositis (DM)',
    pattern: 'Perifascicular atrophy',
    inflammation: 'Perivascular, perimysial (B cells, CD4+ T cells)',
    ihc: 'MHC-I upregulation (especially perifascicular)',
    key: 'MAC on capillaries, reduced capillary density',
    clinical: 'Skin rash, proximal weakness, lung/malignancy association',
  },
  {
    name: 'Polymyositis (PM)',
    pattern: 'Endomysial CD8+ T cells invading non-necrotic fibers',
    inflammation: 'Endomysial (CD8+ T cells)',
    ihc: 'MHC-I diffuse upregulation',
    key: 'CD8+ T cells partially surrounding and invading fibers',
    clinical: 'Proximal weakness, elevated CK, now rare diagnosis',
  },
  {
    name: 'Inclusion Body Myositis (IBM)',
    pattern: 'Rimmed vacuoles, endomysial inflammation',
    inflammation: 'CD8+ T cells invading non-necrotic fibers',
    ihc: 'MHC-I diffuse, p62/TDP-43/SMI-31 in inclusions',
    key: 'Rimmed vacuoles on trichrome, COX-negative fibers',
    clinical: 'Finger flexor/quad weakness, age >50, treatment-resistant',
  },
  {
    name: 'Immune-Mediated Necrotizing Myopathy (IMNM)',
    pattern: 'Prominent necrosis with minimal/no inflammation',
    inflammation: 'Minimal lymphocytic infiltrate',
    ihc: 'MHC-I on necrotic/regenerating fibers, MAC on sarcolemma',
    key: 'Necrosis >>> inflammation, anti-SRP or anti-HMGCR antibodies',
    clinical: 'Severe weakness, very high CK, statin association',
  },
]

export default function InflammatoryPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Classification of Inflammatory Myopathies</CardTitle>
              <CardDescription>
                Major categories based on pathologic patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {myopathies.map((m) => (
                  <div
                    key={m.name}
                    className="p-4 rounded-lg bg-muted/50 border"
                  >
                    <h4 className="font-semibold text-sm">{m.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{m.pattern}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Diagnostic Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="font-medium">Assess inflammation pattern</p>
                    <p className="text-muted-foreground">Endomysial vs perimysial vs perivascular</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <p className="font-medium">Evaluate fiber changes</p>
                    <p className="text-muted-foreground">Necrosis, regeneration, atrophy pattern, vacuoles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="font-medium">Characterize inflammatory cells</p>
                    <p className="text-muted-foreground">CD4 vs CD8, B cells, macrophages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <div>
                    <p className="font-medium">IHC for MHC-I and complement</p>
                    <p className="text-muted-foreground">Sarcolemmal vs capillary deposition</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'dm',
      title: 'Dermatomyositis',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dermatomyositis (DM)</CardTitle>
              <CardDescription>Complement-mediated microangiopathy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Hallmark Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Perifascicular atrophy</strong> (2-10 layers)</li>
                    <li>• Reduced capillary density</li>
                    <li>• Perivascular/perimysial inflammation</li>
                    <li>• MAC (C5b-9) on capillaries</li>
                    <li>• MHC-I perifascicular upregulation</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-center">
                    <div className="inline-block border-2 border-dashed border-muted-foreground/50 rounded-lg p-4">
                      <div className="grid grid-cols-5 gap-1">
                        {/* Perifascicular atrophy pattern */}
                        {[...Array(25)].map((_, i) => {
                          const row = Math.floor(i / 5)
                          const col = i % 5
                          const isEdge = row === 0 || row === 4 || col === 0 || col === 4
                          return (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-sm ${
                                isEdge ? 'bg-red-400/50 w-3 h-3' : 'bg-pink-500'
                              }`}
                            />
                          )
                        })}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Perifascicular atrophy (synthetic)
                    </p>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="pathogenesis">
                  <AccordionTrigger>Pathogenesis</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Complement-mediated microangiopathy targeting intramuscular capillaries.
                      MAC deposition leads to capillary damage, ischemia, and perifascicular
                      fiber damage. Type I interferon signature prominent.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ihc">
                  <AccordionTrigger>IHC Pattern</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>MHC-I:</strong> Perifascicular enhancement, may extend diffusely</li>
                      <li>• <strong>MAC (C5b-9):</strong> Capillary deposition (key finding)</li>
                      <li>• <strong>MxA:</strong> Perifascicular positivity (interferon marker)</li>
                      <li>• <strong>CD4/CD20:</strong> Perivascular B and T cells</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'pm-ibm',
      title: 'PM & IBM',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Polymyositis (PM)</CardTitle>
              <CardDescription>CD8+ T cell-mediated cytotoxicity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> "Pure" polymyositis is now considered rare. Many previously
                  diagnosed as PM are reclassified as antisynthetase syndrome, overlap myositis,
                  or IMNM. Strict criteria require CD8+ invasion of non-necrotic fibers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Diagnostic Criteria</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Endomysial CD8+ T cell infiltrate</li>
                  <li>• CD8+ T cells invading non-necrotic fibers</li>
                  <li>• Diffuse MHC-I upregulation</li>
                  <li>• Absence of rimmed vacuoles</li>
                  <li>• No perifascicular atrophy</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Inclusion Body Myositis (IBM)</CardTitle>
              <CardDescription>Combined inflammatory and degenerative features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Pathologic Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Rimmed vacuoles</strong> (red-lined on trichrome)</li>
                    <li>• Endomysial CD8+ inflammation</li>
                    <li>• CD8+ invasion of non-necrotic fibers</li>
                    <li>• COX-negative fibers (mitochondrial)</li>
                    <li>• Eosinophilic cytoplasmic inclusions</li>
                    <li>• Fiber size variation, chronic changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">IHC Markers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>p62:</strong> Accumulates in inclusions</li>
                    <li>• <strong>TDP-43:</strong> Cytoplasmic aggregates</li>
                    <li>• <strong>SMI-31:</strong> Phosphorylated tau</li>
                    <li>• <strong>MHC-I:</strong> Diffuse upregulation</li>
                    <li>• <strong>Congo red:</strong> May show amyloid</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Rimmed Vacuole Appearance</h4>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-pink-500 relative">
                      <div className="absolute inset-2 rounded bg-white/80 border-2 border-red-500"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Trichrome</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-pink-300 relative">
                      <div className="absolute inset-2 rounded bg-white/60 border border-purple-500"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">H&E</p>
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Red-rimmed vacuoles on Gomori trichrome (synthetic)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'imnm',
      title: 'IMNM',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Immune-Mediated Necrotizing Myopathy (IMNM)</CardTitle>
              <CardDescription>Necrotizing myopathy with minimal inflammation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Prominent necrosis</strong> and regeneration</li>
                    <li>• <strong>Minimal/absent</strong> lymphocytic infiltrate</li>
                    <li>• Scattered necrotic fibers throughout</li>
                    <li>• Macrophage invasion of necrotic fibers</li>
                    <li>• May have perifascicular enhancement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Antibody Associations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Anti-SRP:</strong> Severe, rapid progression</li>
                    <li>• <strong>Anti-HMGCR:</strong> Statin-associated</li>
                    <li>• <strong>Seronegative:</strong> ~30% of cases</li>
                  </ul>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="ihc">
                  <AccordionTrigger>IHC Pattern</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>MHC-I:</strong> Upregulated on necrotic/regenerating fibers</li>
                      <li>• <strong>MAC (C5b-9):</strong> Sarcolemmal deposition (not capillaries)</li>
                      <li>• <strong>CD68:</strong> Macrophages in necrotic fibers</li>
                      <li>• Minimal CD4/CD8 lymphocytes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ddx">
                  <AccordionTrigger>Differential Diagnosis</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Toxic/drug-induced myopathy</li>
                      <li>• Active dystrophy</li>
                      <li>• Viral myositis</li>
                      <li>• Paraneoplastic myopathy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Necrosis Pattern</h4>
                <div className="grid grid-cols-6 gap-1 max-w-xs mx-auto">
                  {[...Array(36)].map((_, i) => {
                    const isNecrotic = [3, 8, 15, 22, 28, 33].includes(i)
                    const isRegenerating = [5, 12, 19, 25, 31].includes(i)
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-sm ${
                          isNecrotic
                            ? 'bg-gray-400'
                            : isRegenerating
                            ? 'bg-blue-400'
                            : 'bg-pink-500'
                        }`}
                      />
                    )
                  })}
                </div>
                <div className="flex justify-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div> Necrotic
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-sm"></div> Regenerating
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'comparison',
      title: 'Comparison',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Inflammatory Myopathy Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Feature</th>
                      <th className="text-left p-2">DM</th>
                      <th className="text-left p-2">PM</th>
                      <th className="text-left p-2">IBM</th>
                      <th className="text-left p-2">IMNM</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Atrophy</td>
                      <td className="p-2">Perifascicular</td>
                      <td className="p-2">Variable</td>
                      <td className="p-2">Variable</td>
                      <td className="p-2">Variable</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Inflammation</td>
                      <td className="p-2">Perivascular</td>
                      <td className="p-2">Endomysial</td>
                      <td className="p-2">Endomysial</td>
                      <td className="p-2">Minimal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">T cell type</td>
                      <td className="p-2">CD4+</td>
                      <td className="p-2">CD8+</td>
                      <td className="p-2">CD8+</td>
                      <td className="p-2">Few</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Invasion</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Yes</td>
                      <td className="p-2">Yes</td>
                      <td className="p-2">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Vacuoles</td>
                      <td className="p-2">No</td>
                      <td className="p-2">No</td>
                      <td className="p-2">Rimmed</td>
                      <td className="p-2">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">MAC location</td>
                      <td className="p-2">Capillaries</td>
                      <td className="p-2">Variable</td>
                      <td className="p-2">Variable</td>
                      <td className="p-2">Sarcolemma</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-foreground">MHC-I</td>
                      <td className="p-2">Perifascicular</td>
                      <td className="p-2">Diffuse</td>
                      <td className="p-2">Diffuse</td>
                      <td className="p-2">Necrotic fibers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Inflammatory Myopathies"
      description="Dermatomyositis, polymyositis, IBM, and immune-mediated necrotizing myopathy"
      icon={<Flame className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'DM: Perifascicular atrophy + MAC on capillaries',
        'PM: CD8+ T cells invading non-necrotic fibers (now rare diagnosis)',
        'IBM: Rimmed vacuoles + CD8+ inflammation + protein aggregates',
        'IMNM: Necrosis >> inflammation, MAC on sarcolemma',
        'MHC-I upregulation is a sensitive but not specific marker',
      ]}
      clinicalPearls={[
        'Perifascicular atrophy can occur without skin findings (amyopathic DM)',
        'IBM is treatment-resistant - distinguish from PM for prognosis',
        'Consider IMNM in any necrotizing myopathy with minimal inflammation',
        'Anti-HMGCR IMNM may persist after stopping statins',
        'Always check for malignancy in adult-onset DM',
      ]}
    />
  )
}
