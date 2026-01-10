import { Dna } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function DystrophiesPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Muscular Dystrophies</CardTitle>
              <CardDescription>
                Inherited myopathies with progressive muscle degeneration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Muscular dystrophies are characterized by progressive muscle weakness and degeneration
                  due to mutations in genes encoding structural proteins of the muscle fiber membrane
                  (sarcolemma) and associated complexes.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-semibold text-sm">Dystrophinopathies</h4>
                    <p className="text-xs text-muted-foreground mt-1">Duchenne, Becker</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-semibold text-sm">Sarcoglycanopathies</h4>
                    <p className="text-xs text-muted-foreground mt-1">LGMD2C-F</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-semibold text-sm">Dysferlinopathy</h4>
                    <p className="text-xs text-muted-foreground mt-1">LGMD2B, Miyoshi</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-semibold text-sm">Merosin Deficiency</h4>
                    <p className="text-xs text-muted-foreground mt-1">Congenital MD</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">General Histologic Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Fiber size variation:</strong> Hypertrophic and atrophic fibers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Internal nuclei:</strong> Increased (&gt;3%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Necrosis and regeneration:</strong> Active ongoing damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Fibrosis:</strong> Endomysial and perimysial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Fatty replacement:</strong> In advanced disease</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Fiber splitting:</strong> Hypertrophic fibers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'dystrophin',
      title: 'Dystrophinopathies',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Duchenne Muscular Dystrophy (DMD)</CardTitle>
              <CardDescription>X-linked, complete absence of dystrophin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Pathology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Marked fiber size variation</li>
                    <li>• Prominent necrosis/regeneration</li>
                    <li>• Increased internal nuclei</li>
                    <li>• Hypertrophic fibers (hypercontracted)</li>
                    <li>• Progressive fibrosis and fat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">IHC Pattern</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Dystrophin:</strong> Absent</li>
                    <li>• All three epitopes (N, C, rod)</li>
                    <li>• Revertant fibers (&lt;1%)</li>
                    <li>• Secondary sarcoglycan reduction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Dystrophin IHC Pattern</h4>
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-pink-300 border-4 border-green-500"></div>
                    <p className="text-xs text-muted-foreground mt-1">Normal</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-pink-300 border-4 border-pink-300"></div>
                    <p className="text-xs text-muted-foreground mt-1">DMD (absent)</p>
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Sarcolemmal staining pattern (synthetic)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Becker Muscular Dystrophy (BMD)</CardTitle>
              <CardDescription>X-linked, reduced/abnormal dystrophin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Pathology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Similar to DMD but milder</li>
                    <li>• Less severe fiber size variation</li>
                    <li>• Less fibrosis/fat replacement</li>
                    <li>• Slower progression</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">IHC Pattern</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Dystrophin:</strong> Reduced/patchy</li>
                    <li>• Variable intensity between fibers</li>
                    <li>• May have mosaic pattern</li>
                    <li>• Milder sarcoglycan reduction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">BMD vs DMD</h4>
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-pink-300 border-4 border-green-300"></div>
                    <p className="text-xs text-muted-foreground mt-1">BMD (reduced)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-pink-300">
                      <div className="h-full flex flex-wrap">
                        <div className="w-1/2 h-1/2 border-2 border-green-500"></div>
                        <div className="w-1/2 h-1/2 border-2 border-green-200"></div>
                        <div className="w-1/2 h-1/2 border-2 border-green-300"></div>
                        <div className="w-1/2 h-1/2 border-2 border-green-400"></div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">BMD (mosaic)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dystrophin Complex</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-right font-medium">Extracellular:</div>
                    <div className="flex-1 h-6 bg-purple-500 rounded flex items-center px-2 text-white text-xs">
                      Laminin-α2 (Merosin)
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-right font-medium">Membrane:</div>
                    <div className="flex-1 h-6 bg-blue-500 rounded flex items-center px-2 text-white text-xs">
                      α/β-Dystroglycan • Sarcoglycans (α,β,γ,δ)
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-right font-medium">Cytoplasm:</div>
                    <div className="flex-1 h-6 bg-green-500 rounded flex items-center px-2 text-white text-xs">
                      Dystrophin
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-right font-medium">Cytoskeleton:</div>
                    <div className="flex-1 h-6 bg-orange-500 rounded flex items-center px-2 text-white text-xs">
                      F-Actin
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Dystrophin-associated glycoprotein complex (conceptual)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'lgmd',
      title: 'LGMD',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Limb-Girdle Muscular Dystrophies</CardTitle>
              <CardDescription>Heterogeneous group with proximal weakness</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sarcoglycan">
                  <AccordionTrigger>Sarcoglycanopathies (LGMD R3-R6)</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Mutations in α, β, γ, or δ-sarcoglycan genes. Often presents similar to dystrophinopathy.
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2 text-sm">
                        <div>
                          <h5 className="font-medium">IHC Pattern</h5>
                          <ul className="text-muted-foreground">
                            <li>• Primary sarcoglycan: absent/reduced</li>
                            <li>• Secondary reduction of others</li>
                            <li>• Dystrophin usually normal</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Key Points</h5>
                          <ul className="text-muted-foreground">
                            <li>• AR inheritance</li>
                            <li>• Loss of one affects complex</li>
                            <li>• Need full panel for diagnosis</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="dysferlin">
                  <AccordionTrigger>Dysferlinopathy (LGMD R2)</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Membrane repair protein deficiency. Can present as LGMD or Miyoshi myopathy (distal).
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2 text-sm">
                        <div>
                          <h5 className="font-medium">Pathology</h5>
                          <ul className="text-muted-foreground">
                            <li>• Dystrophic pattern</li>
                            <li>• Prominent inflammation (may mimic PM)</li>
                            <li>• Amyloid deposits (rare)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">IHC</h5>
                          <ul className="text-muted-foreground">
                            <li>• Dysferlin: absent sarcolemmal</li>
                            <li>• Dystrophin: normal</li>
                            <li>• MAC deposition on sarcolemma</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="calpain">
                  <AccordionTrigger>Calpainopathy (LGMD R1)</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Most common LGMD. Calpain-3 is a muscle-specific protease.
                      </p>
                      <ul className="text-sm text-muted-foreground">
                        <li>• Non-specific dystrophic changes</li>
                        <li>• Lobulated fibers on NADH</li>
                        <li>• Diagnosis requires Western blot</li>
                        <li>• IHC for calpain-3 unreliable</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">IHC Panel for Dystrophies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Antibody</th>
                      <th className="text-left p-2">Target</th>
                      <th className="text-left p-2">Disease if Abnormal</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Dystrophin (C-term)</td>
                      <td className="p-2">C-terminus</td>
                      <td className="p-2">DMD/BMD</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Dystrophin (N-term)</td>
                      <td className="p-2">N-terminus</td>
                      <td className="p-2">DMD/BMD</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Dystrophin (Rod)</td>
                      <td className="p-2">Rod domain</td>
                      <td className="p-2">DMD/BMD</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">α-Sarcoglycan</td>
                      <td className="p-2">SGC complex</td>
                      <td className="p-2">LGMD R3</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">β-Sarcoglycan</td>
                      <td className="p-2">SGC complex</td>
                      <td className="p-2">LGMD R4</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">γ-Sarcoglycan</td>
                      <td className="p-2">SGC complex</td>
                      <td className="p-2">LGMD R5</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Dysferlin</td>
                      <td className="p-2">Membrane repair</td>
                      <td className="p-2">LGMD R2/Miyoshi</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-foreground">Merosin</td>
                      <td className="p-2">Laminin-α2</td>
                      <td className="p-2">MDC1A</td>
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
      id: 'other',
      title: 'Other Dystrophies',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Merosin-Deficient CMD (MDC1A)</CardTitle>
              <CardDescription>Congenital muscular dystrophy with laminin-α2 deficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Severe congenital presentation</li>
                    <li>• Marked dystrophic changes</li>
                    <li>• White matter abnormalities on MRI</li>
                    <li>• High CK</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">IHC</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Merosin:</strong> Absent (complete) or reduced (partial)</li>
                    <li>• Stains basement membrane</li>
                    <li>• Secondary α-dystroglycan reduction</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Emery-Dreifuss MD</CardTitle>
              <CardDescription>Nuclear envelope protein defects</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Mutations in <strong>emerin</strong> (X-linked) or <strong>lamin A/C</strong> (AD/AR)</li>
                <li>• Early contractures, cardiac involvement</li>
                <li>• Mild dystrophic changes on biopsy</li>
                <li>• IHC: emerin absent from nuclear membrane (X-linked form)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Facioscapulohumeral MD (FSHD)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• D4Z4 repeat contraction on chromosome 4</li>
                <li>• Facial and shoulder girdle weakness</li>
                <li>• Asymmetric involvement</li>
                <li>• Biopsy: variable - may show inflammation, moth-eaten fibers</li>
                <li>• Diagnosis primarily genetic</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Myotonic Dystrophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Type 1 (DM1) - DMPK CTG expansion</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Increased internal nuclei (chains)</li>
                    <li>• Ring fibers</li>
                    <li>• Sarcoplasmic masses</li>
                    <li>• Type 1 fiber atrophy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Type 2 (DM2) - CNBP CCTG expansion</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Type 2 fiber atrophy (differs from DM1)</li>
                    <li>• Nuclear clumps</li>
                    <li>• Milder changes overall</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Muscular Dystrophies"
      description="Inherited muscle diseases with progressive degeneration"
      icon={<Dna className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'DMD: Complete absence of dystrophin on IHC',
        'BMD: Reduced/patchy dystrophin staining',
        'Sarcoglycanopathies: Loss of one affects entire complex',
        'Dysferlinopathy: May have prominent inflammation mimicking PM',
        'Always use dystrophin panel (C-term, N-term, rod domain)',
      ]}
      clinicalPearls={[
        'Secondary sarcoglycan reduction occurs in dystrophinopathies - check all markers',
        'Female carriers of DMD may show mosaic dystrophin pattern',
        'Inflammatory infiltrates in dysferlinopathy should not lead to PM diagnosis',
        'Revertant fibers (<1%) in DMD should not be mistaken for BMD',
        'Genetic testing is gold standard; IHC guides genetic workup',
      ]}
    />
  )
}
