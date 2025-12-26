import { TestTube } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const ihcMarkers = [
  { marker: 'Dystrophin (C-term)', target: 'C-terminus', pattern: 'Sarcolemma', disease: 'DMD/BMD' },
  { marker: 'Dystrophin (N-term)', target: 'N-terminus', pattern: 'Sarcolemma', disease: 'DMD/BMD' },
  { marker: 'Dystrophin (Rod)', target: 'Rod domain', pattern: 'Sarcolemma', disease: 'DMD/BMD' },
  { marker: 'α-Sarcoglycan', target: 'SGC complex', pattern: 'Sarcolemma', disease: 'LGMD R3' },
  { marker: 'β-Sarcoglycan', target: 'SGC complex', pattern: 'Sarcolemma', disease: 'LGMD R4' },
  { marker: 'γ-Sarcoglycan', target: 'SGC complex', pattern: 'Sarcolemma', disease: 'LGMD R5' },
  { marker: 'δ-Sarcoglycan', target: 'SGC complex', pattern: 'Sarcolemma', disease: 'LGMD R6' },
  { marker: 'Dysferlin', target: 'Membrane repair', pattern: 'Sarcolemma', disease: 'LGMD R2/Miyoshi' },
  { marker: 'Merosin (Laminin-α2)', target: 'Basal lamina', pattern: 'Sarcolemma/BM', disease: 'MDC1A' },
  { marker: 'MHC-I', target: 'Immune marker', pattern: 'Sarcolemma', disease: 'Inflammatory myopathy' },
  { marker: 'MAC (C5b-9)', target: 'Complement', pattern: 'Capillaries or sarcolemma', disease: 'DM, IMNM' },
  { marker: 'p62', target: 'Autophagy', pattern: 'Cytoplasmic', disease: 'IBM' },
]

export default function IHCPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">IHC in Muscle Pathology</CardTitle>
              <CardDescription>
                Immunohistochemistry for protein localization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                IHC is essential for identifying protein deficiencies in muscular dystrophies
                and inflammatory markers in myopathies. Proper interpretation requires
                understanding normal staining patterns and appropriate controls.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Frozen Sections</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Preferred for most muscle IHC. Better antigen preservation.
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">FFPE Sections</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Antigen retrieval may be needed. Some markers work well.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common IHC Markers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Marker</th>
                      <th className="text-left p-2">Pattern</th>
                      <th className="text-left p-2">Disease</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {ihcMarkers.map((m) => (
                      <tr key={m.marker} className="border-b">
                        <td className="p-2 font-medium text-foreground">{m.marker}</td>
                        <td className="p-2">{m.pattern}</td>
                        <td className="p-2">{m.disease}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'dystrophin',
      title: 'Dystrophin Panel',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dystrophin IHC</CardTitle>
              <CardDescription>Triple antibody panel essential</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Use antibodies to all three domains (C-terminus, N-terminus, rod) because
                in-frame deletions may preserve some epitopes.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 mx-auto rounded-full bg-green-500 border-4 border-green-600"></div>
                  <p className="text-sm font-medium mt-2">Normal</p>
                  <p className="text-xs text-muted-foreground">Complete sarcolemmal</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 mx-auto rounded-full bg-pink-300 border-4 border-pink-300"></div>
                  <p className="text-sm font-medium mt-2">DMD</p>
                  <p className="text-xs text-muted-foreground">Absent</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 mx-auto rounded-full bg-green-300 border-4 border-green-400"></div>
                  <p className="text-sm font-medium mt-2">BMD</p>
                  <p className="text-xs text-muted-foreground">Reduced/patchy</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Important Notes</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Revertant fibers (&lt;1%) may show staining in DMD</li>
                  <li>• Female carriers may show mosaic pattern</li>
                  <li>• Secondary sarcoglycan reduction occurs in dystrophinopathies</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'sarcoglycan',
      title: 'Sarcoglycans',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sarcoglycan Complex</CardTitle>
              <CardDescription>α, β, γ, δ subunits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The sarcoglycan complex is interdependent - loss of one subunit often
                leads to secondary reduction of others. Full panel needed.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Primary Defect</th>
                      <th className="text-left p-2">LGMD Type</th>
                      <th className="text-left p-2">Secondary Changes</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">α-Sarcoglycan</td>
                      <td className="p-2">LGMD R3</td>
                      <td className="p-2">↓ β, γ, δ</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">β-Sarcoglycan</td>
                      <td className="p-2">LGMD R4</td>
                      <td className="p-2">↓ α, γ, δ (severe)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">γ-Sarcoglycan</td>
                      <td className="p-2">LGMD R5</td>
                      <td className="p-2">↓ α, β, δ</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-foreground">δ-Sarcoglycan</td>
                      <td className="p-2">LGMD R6</td>
                      <td className="p-2">↓ α, β, γ (severe)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Other Sarcolemmal Markers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Dysferlin</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Membrane repair protein. Absent in dysferlinopathy (LGMD R2/Miyoshi).
                    May show inflammatory infiltrates mimicking PM.
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Merosin (Laminin-α2)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Basement membrane protein. Complete absence in MDC1A (congenital MD).
                    Partial deficiency exists. Also stains intramuscular nerves/vessels.
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Caveolin-3</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Reduced in caveolinopathy (LGMD R1 or rippling muscle disease).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'inflammatory',
      title: 'Inflammatory',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MHC-I (HLA Class I)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Normal</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Absent on mature muscle fibers</li>
                    <li>• Present on regenerating fibers</li>
                    <li>• Present on capillaries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Abnormal</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>DM:</strong> Perifascicular enhancement</li>
                    <li>• <strong>PM/IBM:</strong> Diffuse sarcolemmal</li>
                    <li>• <strong>IMNM:</strong> Necrotic/regenerating fibers</li>
                    <li>• <strong>Dystrophies:</strong> Variable, necrotic fibers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Complement (MAC/C5b-9)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">On Capillaries</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Characteristic of dermatomyositis. Capillary damage.
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">On Sarcolemma</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Seen in IMNM. Also on necrotic fibers in various conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">IBM Markers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">p62/SQSTM1</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Aggregates in vacuolated fibers. Autophagy marker.
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">TDP-43</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cytoplasmic accumulation (normally nuclear).
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">SMI-31 (Phospho-tau)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Highlights inclusions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'interpretation',
      title: 'Interpretation',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">IHC Interpretation Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">1. Always Use Controls</h4>
                  <p className="text-sm text-muted-foreground">
                    Include positive control (normal muscle) on same slide.
                    Evaluate internal positive control (capillaries, nerves).
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">2. Assess All Fibers</h4>
                  <p className="text-sm text-muted-foreground">
                    Look for mosaic patterns, revertant fibers, or selective loss.
                    Note regenerating fibers (may normally lack some proteins).
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">3. Correlate with H&E</h4>
                  <p className="text-sm text-muted-foreground">
                    IHC findings must match morphologic patterns.
                    Necrotic fibers often have non-specific staining.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">4. Consider Secondary Effects</h4>
                  <p className="text-sm text-muted-foreground">
                    Primary dystrophin loss causes secondary sarcoglycan reduction.
                    Primary sarcoglycan defect shows mutual reduction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pitfalls</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Edge artifact causing false-negative staining</li>
                <li>• Regenerating fibers lacking normal proteins</li>
                <li>• Necrotic fibers with non-specific staining</li>
                <li>• Technical issues (overfixation, antigen retrieval)</li>
                <li>• Mosaic patterns in carriers mistaken for disease</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="IHC Framework"
      description="Immunohistochemistry for muscle and nerve pathology"
      icon={<TestTube className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Dystrophin panel: use all three epitopes (C, N, rod)',
        'Sarcoglycan complex is interdependent - check all subunits',
        'MHC-I absent on normal mature fibers, upregulated in inflammation',
        'MAC on capillaries = DM; MAC on sarcolemma = IMNM',
        'p62/TDP-43 positive in IBM inclusions',
      ]}
      clinicalPearls={[
        'Always include normal control on same slide',
        'Revertant fibers in DMD can cause false hope - they are rare (<1%)',
        'Female carriers show mosaic pattern - not disease',
        'Secondary sarcoglycan reduction in dystrophinopathy is common',
        'IHC guides genetic testing but does not replace it',
      ]}
    />
  )
}
