import { Droplets } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const stains = [
  {
    name: 'H&E (Hematoxylin & Eosin)',
    color: 'bg-pink-500',
    purpose: 'General morphology',
    findings: [
      'Fiber shape and size',
      'Nuclear position',
      'Necrosis (pale eosinophilic fibers)',
      'Regeneration (basophilic fibers)',
      'Inflammation',
      'Fibrosis',
    ],
  },
  {
    name: 'Gomori Trichrome (Modified)',
    color: 'bg-green-500',
    purpose: 'Connective tissue and inclusions',
    findings: [
      'Ragged red fibers (mitochondrial myopathy)',
      'Nemaline rods (red granules)',
      'Rimmed vacuoles',
      'Fibrosis (green staining)',
      'Cytoplasmic bodies',
    ],
  },
  {
    name: 'NADH-TR',
    color: 'bg-blue-500',
    purpose: 'Oxidative enzyme activity / fiber typing',
    findings: [
      'Type I fibers: dark',
      'Type II fibers: light',
      'Target fibers (denervation)',
      'Cores (central core disease)',
      'Moth-eaten fibers',
      'Mitochondrial aggregates',
    ],
  },
  {
    name: 'SDH (Succinate Dehydrogenase)',
    color: 'bg-purple-500',
    purpose: 'Mitochondrial enzyme activity',
    findings: [
      'Subsarcolemmal accumulations',
      'Ragged blue fibers',
      'Combined with COX for dual stain',
    ],
  },
  {
    name: 'COX (Cytochrome C Oxidase)',
    color: 'bg-amber-500',
    purpose: 'Mitochondrial respiratory chain',
    findings: [
      'COX-negative fibers (mtDNA mutations)',
      'Normal: brown staining',
      'Deficient: unstained/pale',
    ],
  },
  {
    name: 'COX/SDH Combined',
    color: 'bg-gradient-to-r from-amber-500 to-purple-500',
    purpose: 'Identify respiratory chain defects',
    findings: [
      'COX-negative/SDH-positive fibers = blue',
      'Best for detecting mitochondrial myopathy',
      'Normal fibers appear brown',
    ],
  },
  {
    name: 'ATPase (pH 9.4)',
    color: 'bg-slate-500',
    purpose: 'Fiber typing',
    findings: [
      'Type I: light',
      'Type II: dark',
      'Identifies fiber type grouping (reinnervation)',
    ],
  },
  {
    name: 'ATPase (pH 4.3/4.6)',
    color: 'bg-slate-600',
    purpose: 'Fiber subtyping',
    findings: [
      'pH 4.3: Type I dark, Type II light',
      'pH 4.6: Differentiates IIA (light) from IIB (intermediate)',
      'Reverse pattern from pH 9.4',
    ],
  },
  {
    name: 'PAS (Periodic Acid-Schiff)',
    color: 'bg-rose-500',
    purpose: 'Glycogen detection',
    findings: [
      'Glycogen storage diseases (increased)',
      'Normal glycogen content',
      'Diastase-sensitive',
    ],
  },
  {
    name: 'Oil Red O',
    color: 'bg-red-600',
    purpose: 'Lipid detection',
    findings: [
      'Lipid storage myopathies',
      'Increased in CPT II deficiency',
      'Requires frozen sections',
    ],
  },
  {
    name: 'Acid Phosphatase',
    color: 'bg-orange-500',
    purpose: 'Lysosomal activity',
    findings: [
      'Increased in necrosis',
      'Regenerating fibers',
      'Acid maltase deficiency (Pompe)',
      'Macrophages',
    ],
  },
  {
    name: 'Esterase (Non-specific)',
    color: 'bg-teal-500',
    purpose: 'Denervation',
    findings: [
      'Denervated fibers show increased activity',
      'Type-grouping assessment',
      'Angular atrophic fibers',
    ],
  },
]

export default function StainsPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Muscle Biopsy Stain Panel</CardTitle>
              <CardDescription>
                Standard stains used in muscle pathology evaluation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {stains.map((stain) => (
                  <div
                    key={stain.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <div className={`w-3 h-3 rounded-full ${stain.color}`} />
                    <div>
                      <p className="text-sm font-medium">{stain.name}</p>
                      <p className="text-xs text-muted-foreground">{stain.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Processing Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Frozen Sections (Required)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All enzyme histochemistry</li>
                    <li>• Oil Red O (lipids)</li>
                    <li>• NADH, SDH, COX</li>
                    <li>• ATPase</li>
                    <li>• Esterase</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Formalin-Fixed OK</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• H&E</li>
                    <li>• Gomori Trichrome</li>
                    <li>• PAS</li>
                    <li>• Immunohistochemistry</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'routine',
      title: 'Routine Stains',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                H&E
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="normal">
                  <AccordionTrigger>Normal Appearance</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Polygonal fibers with eosinophilic cytoplasm</li>
                      <li>• Peripheral nuclei (subsarcolemmal)</li>
                      <li>• Minimal endomysial connective tissue</li>
                      <li>• Uniform fiber size (40-80 μm)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="abnormal">
                  <AccordionTrigger>Abnormal Findings</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Necrosis:</strong> Pale, fragmented fibers with macrophages</li>
                      <li>• <strong>Regeneration:</strong> Basophilic fibers with large nuclei</li>
                      <li>• <strong>Atrophy:</strong> Small, angular fibers</li>
                      <li>• <strong>Hypertrophy:</strong> Enlarged, rounded fibers</li>
                      <li>• <strong>Internal nuclei:</strong> &gt;3% abnormal</li>
                      <li>• <strong>Inflammation:</strong> Lymphocytic infiltrates</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                Gomori Trichrome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Color Key</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <span className="text-green-500 font-medium">Green:</span> Collagen, fibrosis</li>
                      <li>• <span className="text-red-500 font-medium">Red:</span> Muscle fibers, mitochondria</li>
                      <li>• <span className="text-purple-500 font-medium">Purple:</span> Nuclei</li>
                    </ul>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-4 rounded bg-gradient-to-r from-red-500 to-red-700"></div>
                        <span className="text-muted-foreground">Ragged red fiber</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-4 rounded bg-green-600"></div>
                        <span className="text-muted-foreground">Fibrosis</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  <h4 className="font-semibold mb-2">Key Findings</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• <strong>Ragged red fibers:</strong> Subsarcolemmal red accumulations (mitochondrial)</li>
                    <li>• <strong>Nemaline rods:</strong> Red granules/rods</li>
                    <li>• <strong>Rimmed vacuoles:</strong> Red-rimmed vacuoles (IBM)</li>
                    <li>• <strong>Cytoplasmic bodies:</strong> Red inclusions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'enzyme',
      title: 'Enzyme Stains',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Oxidative Enzyme Stains</CardTitle>
              <CardDescription>NADH-TR, SDH, COX - require frozen sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="nadh">
                  <AccordionTrigger>NADH-TR</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Shows oxidative enzyme distribution. Best for fiber typing and structural abnormalities.
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2 text-sm">
                        <div>
                          <h5 className="font-medium">Normal</h5>
                          <ul className="text-muted-foreground">
                            <li>• Type I: Dark staining</li>
                            <li>• Type II: Light staining</li>
                            <li>• Checkerboard pattern</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Abnormal</h5>
                          <ul className="text-muted-foreground">
                            <li>• Target fibers (three zones)</li>
                            <li>• Central cores (pale center)</li>
                            <li>• Moth-eaten fibers</li>
                            <li>• Whorled fibers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cox-sdh">
                  <AccordionTrigger>COX/SDH Combined</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Gold standard for detecting mitochondrial respiratory chain defects.
                      </p>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-amber-700"></div>
                            <span>Normal: Brown (COX+/SDH+)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-blue-600"></div>
                            <span>Abnormal: Blue (COX-/SDH+)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Blue fibers</strong> indicate COX-negative/SDH-positive status,
                        suggesting mtDNA mutations or respiratory chain defects.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">ATPase Fiber Typing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">pH</th>
                      <th className="text-left p-2">Type I</th>
                      <th className="text-left p-2">Type IIA</th>
                      <th className="text-left p-2">Type IIB</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-medium">pH 9.4</td>
                      <td className="p-2">Light</td>
                      <td className="p-2">Dark</td>
                      <td className="p-2">Dark</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">pH 4.6</td>
                      <td className="p-2">Dark</td>
                      <td className="p-2">Light</td>
                      <td className="p-2">Intermediate</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">pH 4.3</td>
                      <td className="p-2">Dark</td>
                      <td className="p-2">Light</td>
                      <td className="p-2">Light</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'special',
      title: 'Special Stains',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                PAS (Glycogen)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Detects glycogen and other polysaccharides. Diastase digestion confirms glycogen.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Increased PAS</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Glycogen storage diseases</li>
                      <li>• Type V (McArdle)</li>
                      <li>• Type II (Pompe)</li>
                      <li>• Denervation (small fibers)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Decreased PAS</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Post-exercise biopsy</li>
                      <li>• Debrancher deficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600" />
                Oil Red O (Lipid)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Stains neutral lipids red. Must use frozen sections (lipids dissolve in fixatives).
                </p>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Increased Lipid</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Carnitine deficiency (primary or secondary)</li>
                    <li>• CPT II deficiency</li>
                    <li>• Lipid storage myopathy</li>
                    <li>• Multiple acyl-CoA dehydrogenase deficiency</li>
                    <li>• Steroid myopathy (type II fibers)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                Acid Phosphatase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Lysosomal enzyme marker. Increased activity indicates cellular breakdown/phagocytosis.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Necrotic fibers:</strong> High activity with macrophage invasion</li>
                  <li>• <strong>Regenerating fibers:</strong> Moderate increase</li>
                  <li>• <strong>Pompe disease:</strong> Vacuoles with positive staining</li>
                  <li>• <strong>Inflammatory myopathies:</strong> Increased in damaged fibers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-500" />
                Non-specific Esterase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Increased in denervated fibers. Helpful for identifying early denervation changes
                and confirming neurogenic atrophy. Angular atrophic fibers show dark staining.
              </p>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Muscle Lab Stains"
      description="Comprehensive guide to histochemical and special stains in muscle pathology"
      icon={<Droplets className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Enzyme histochemistry requires frozen sections',
        'H&E and trichrome show basic morphology and connective tissue',
        'NADH/ATPase are essential for fiber typing',
        'COX/SDH combined is gold standard for mitochondrial disease',
        'Ragged red fibers on trichrome indicate mitochondrial myopathy',
        'Oil Red O for lipid storage, PAS for glycogen storage',
      ]}
      clinicalPearls={[
        'Always correlate findings across multiple stains',
        'Target fibers on NADH suggest denervation',
        'COX-negative/SDH-positive (blue) fibers indicate respiratory chain defects',
        'Increased acid phosphatase in vacuoles suggests lysosomal storage (Pompe)',
        'Fiber type grouping on ATPase indicates reinnervation',
      ]}
    />
  )
}
