import { Baby } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const congenitalMyopathies = [
  {
    name: 'Central Core Disease',
    gene: 'RYR1',
    inheritance: 'AD (most), AR',
    histology: 'Central cores (single, well-defined)',
    stains: 'NADH: central pallor in Type 1 fibers',
    em: 'Myofibrillar disorganization, Z-line streaming, mitochondria absence',
    clinical: 'Hypotonia, proximal weakness, malignant hyperthermia risk',
  },
  {
    name: 'Multi-minicore Disease',
    gene: 'SEPN1, RYR1, others',
    inheritance: 'AR',
    histology: 'Multiple small cores (minicores)',
    stains: 'NADH: multiple small pale areas',
    em: 'Small focal areas of myofibrillar disruption',
    clinical: 'Axial weakness, respiratory involvement, rigid spine',
  },
  {
    name: 'Nemaline Myopathy',
    gene: 'NEB, ACTA1, TPM2/3, others',
    inheritance: 'AD or AR',
    histology: 'Nemaline rods (red on trichrome)',
    stains: 'Trichrome: red/purple rod-shaped inclusions',
    em: 'Electron-dense rods derived from Z-line material',
    clinical: 'Variable severity, facial weakness, respiratory issues',
  },
  {
    name: 'Centronuclear/Myotubular Myopathy',
    gene: 'MTM1 (X-linked), DNM2 (AD), BIN1 (AR)',
    inheritance: 'X-linked, AD, AR',
    histology: 'Central nuclei in majority of fibers',
    stains: 'NADH: central pallor with spoke-like pattern',
    em: 'Central nuclei, perinuclear organelle accumulation',
    clinical: 'X-linked severe (neonatal), AD milder',
  },
  {
    name: 'Congenital Fiber Type Disproportion',
    gene: 'Multiple (ACTA1, TPM3, RYR1, SEPN1)',
    inheritance: 'Variable',
    histology: 'Type 1 fibers ≥25% smaller than Type 2',
    stains: 'ATPase: small Type 1, normal/large Type 2',
    em: 'Usually non-specific',
    clinical: 'Hypotonia, may improve with age',
  },
]

export default function CongenitalPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Congenital Myopathies</CardTitle>
              <CardDescription>
                Inherited muscle diseases defined by structural abnormalities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Congenital myopathies are a heterogeneous group of inherited muscle disorders
                characterized by specific structural abnormalities on muscle biopsy. Unlike
                dystrophies, they typically show static or slowly progressive weakness with
                characteristic histologic features rather than active necrosis/regeneration.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {congenitalMyopathies.map((cm) => (
                  <div key={cm.name} className="p-3 bg-muted rounded-lg">
                    <h4 className="font-semibold text-sm">{cm.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{cm.gene}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">General Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Common to All</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Type 1 fiber predominance/atrophy</li>
                    <li>• Minimal necrosis/regeneration</li>
                    <li>• Little fibrosis</li>
                    <li>• Increased internal nuclei (some)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Stains</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• NADH-TR: cores, whorls</li>
                    <li>• Gomori trichrome: rods, inclusions</li>
                    <li>• ATPase: fiber typing</li>
                    <li>• H&E: nuclear position</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'cores',
      title: 'Core Myopathies',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Central Core Disease</CardTitle>
              <CardDescription>RYR1 mutations - malignant hyperthermia risk</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Histology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Single central core per fiber</li>
                    <li>• Well-defined, runs length of fiber</li>
                    <li>• Predominantly Type 1 fibers</li>
                    <li>• Type 1 predominance common</li>
                    <li>• Cores lack oxidative enzyme activity</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-blue-200"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">NADH</p>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full bg-pink-400 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-pink-200"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">H&E</p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Central cores (synthetic)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Clinical Alert</h4>
                <p className="text-sm text-muted-foreground">
                  RYR1 mutations associated with malignant hyperthermia susceptibility.
                  Anesthesia precautions required.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Multi-minicore Disease</CardTitle>
              <CardDescription>Multiple small cores - SEPN1, RYR1</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Histology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multiple small cores (minicores)</li>
                    <li>• Short segments, do not span fiber</li>
                    <li>• Both fiber types affected</li>
                    <li>• Less well-defined than central cores</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-500 relative">
                      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-200"></div>
                      <div className="absolute top-4 right-3 w-2 h-2 rounded-full bg-blue-200"></div>
                      <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-blue-200"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-blue-200"></div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Minicores on NADH (synthetic)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Core vs Minicore Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Feature</th>
                      <th className="text-left p-2">Central Core</th>
                      <th className="text-left p-2">Minicore</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Number</td>
                      <td className="p-2">Single</td>
                      <td className="p-2">Multiple</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Size</td>
                      <td className="p-2">Large</td>
                      <td className="p-2">Small</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Length</td>
                      <td className="p-2">Spans fiber</td>
                      <td className="p-2">Short segments</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Location</td>
                      <td className="p-2">Central</td>
                      <td className="p-2">Variable</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-foreground">Fiber type</td>
                      <td className="p-2">Type 1</td>
                      <td className="p-2">Both</td>
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
      id: 'nemaline',
      title: 'Nemaline',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nemaline Myopathy</CardTitle>
              <CardDescription>Rod bodies derived from Z-line material</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Histology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Nemaline rods:</strong> red on Gomori trichrome</li>
                    <li>• Purple/blue on H&E (may be subtle)</li>
                    <li>• Subsarcolemmal or throughout fiber</li>
                    <li>• May cluster near nuclei</li>
                    <li>• Type 1 fiber predominance</li>
                    <li>• Variable fiber size</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-lg bg-green-700/50 relative">
                      <div className="absolute top-2 left-2 w-1 h-3 bg-red-500 rotate-12"></div>
                      <div className="absolute top-3 right-3 w-1 h-2 bg-red-500 -rotate-6"></div>
                      <div className="absolute bottom-2 left-4 w-1 h-3 bg-red-500 rotate-45"></div>
                      <div className="absolute bottom-3 right-2 w-1 h-2 bg-red-500"></div>
                      <div className="absolute top-6 left-6 w-1 h-2 bg-red-500 -rotate-12"></div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Nemaline rods on trichrome (synthetic)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Genetic Subtypes</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-sm">
                  <div className="p-2 bg-muted rounded">
                    <span className="font-medium">NEB:</span>
                    <span className="text-muted-foreground"> Most common (AR), typical form</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <span className="font-medium">ACTA1:</span>
                    <span className="text-muted-foreground"> AD or de novo, variable severity</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <span className="font-medium">TPM2/3:</span>
                    <span className="text-muted-foreground"> AD, often milder</span>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <span className="font-medium">TNNT1:</span>
                    <span className="text-muted-foreground"> AR, Amish form</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">EM Features of Rods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Electron-dense structures continuous with Z-lines</li>
                <li>• Same lattice structure as Z-line (α-actinin containing)</li>
                <li>• May show characteristic periodicity</li>
                <li>• Variable size and distribution</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'centronuclear',
      title: 'Centronuclear',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Centronuclear/Myotubular Myopathy</CardTitle>
              <CardDescription>Central nuclei in majority of fibers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Histology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Central nuclei</strong> in &gt;25% of fibers</li>
                    <li>• Often chains of central nuclei</li>
                    <li>• Type 1 fiber predominance/hypotrophy</li>
                    <li>• Radial arrangement on NADH</li>
                    <li>• "Spoke-wheel" pattern</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full bg-pink-400 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-purple-700"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">H&E</p>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center relative">
                        <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-0.5 bg-blue-300"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center rotate-90">
                          <div className="w-full h-0.5 bg-blue-300"></div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">NADH spoke</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Genetic Forms</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted rounded-lg">
                    <h5 className="font-medium">X-linked Myotubular (MTM1)</h5>
                    <p className="text-muted-foreground">
                      Severe neonatal form. Resembles fetal myotubes. High mortality.
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h5 className="font-medium">Autosomal Dominant (DNM2)</h5>
                    <p className="text-muted-foreground">
                      Milder, later onset. Progressive. Radial sarcoplasmic strands.
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h5 className="font-medium">Autosomal Recessive (BIN1)</h5>
                    <p className="text-muted-foreground">
                      Variable severity. May have abnormal T-tubules on EM.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'cftd',
      title: 'CFTD',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Congenital Fiber Type Disproportion</CardTitle>
              <CardDescription>Type 1 fibers significantly smaller than Type 2</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Diagnostic Criteria</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Type 1 fibers ≥25% smaller than Type 2</li>
                    <li>• (some use ≥12% difference)</li>
                    <li>• Type 1 predominance common</li>
                    <li>• No other structural abnormalities</li>
                    <li>• Diagnosis of exclusion</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center gap-2">
                    <div className="text-center">
                      <div className="w-8 h-8 rounded bg-blue-500"></div>
                      <p className="text-xs text-muted-foreground mt-1">I (small)</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded bg-red-500"></div>
                      <p className="text-xs text-muted-foreground mt-1">II (normal)</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded bg-blue-500"></div>
                      <p className="text-xs text-muted-foreground mt-1">I (small)</p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Fiber type disproportion (synthetic)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Associated Genes</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>TPM3:</strong> Tropomyosin (AD)</li>
                  <li>• <strong>ACTA1:</strong> α-actin</li>
                  <li>• <strong>RYR1:</strong> Ryanodine receptor</li>
                  <li>• <strong>SEPN1:</strong> Selenoprotein N</li>
                  <li>• May be "forme fruste" of other congenital myopathies</li>
                </ul>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Important Note</h4>
                <p className="text-sm text-muted-foreground">
                  CFTD is often a diagnosis of exclusion. Careful evaluation should exclude
                  subtle cores, rods, or other structural abnormalities. Some cases evolve
                  into more specific entities over time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Congenital Myopathies"
      description="Inherited muscle diseases with specific structural abnormalities"
      icon={<Baby className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Central core disease: single large cores in Type 1 fibers (RYR1)',
        'Nemaline myopathy: red rods on Gomori trichrome',
        'Centronuclear: central nuclei + spoke-wheel pattern on NADH',
        'CFTD: Type 1 fibers ≥25% smaller than Type 2',
        'All show minimal necrosis/regeneration unlike dystrophies',
      ]}
      clinicalPearls={[
        'RYR1 mutations carry malignant hyperthermia risk - anesthesia alert',
        'Nemaline rods can be subtle on H&E - always check trichrome',
        'X-linked myotubular myopathy is severe (MTM1) vs milder AD form (DNM2)',
        'CFTD may be a "forme fruste" - look carefully for subtle cores/rods',
        'Type 1 predominance is common across congenital myopathies',
      ]}
    />
  )
}
