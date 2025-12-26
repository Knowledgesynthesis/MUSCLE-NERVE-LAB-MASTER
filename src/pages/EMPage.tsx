import { Microscope } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function EMPage() {
  const sections = [
    {
      id: 'normal',
      title: 'Normal Structure',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Normal Muscle Ultrastructure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-slate-600"></div>
                    <span>Z-line (electron dense)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-4 bg-slate-400"></div>
                    <span>A-band (thick + thin filaments)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-4 bg-slate-200"></div>
                    <span>I-band (thin filaments only)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-slate-500"></div>
                    <span>M-line (center of A-band)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-3 bg-slate-300"></div>
                    <span>H-zone (thick filaments only)</span>
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Sarcomere ultrastructure (conceptual)
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Structures</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Myofibrils (organized sarcomeres)</li>
                    <li>• Mitochondria (subsarcolemmal, intermyofibrillar)</li>
                    <li>• Sarcoplasmic reticulum</li>
                    <li>• T-tubules (triads at A-I junction)</li>
                    <li>• Glycogen granules</li>
                    <li>• Lipid droplets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Normal Measurements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sarcomere: 2.0-2.5 μm</li>
                    <li>• Z-line width: 50-100 nm</li>
                    <li>• Mitochondria: orderly arrangement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'myofibrillar',
      title: 'Myofibrillar',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Z-line Abnormalities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Z-line Streaming</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Extension of Z-line material into sarcomere</li>
                    <li>• Loss of normal sharp Z-line borders</li>
                    <li>• Seen in various myopathies</li>
                    <li>• May be artifact if severe</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Associated Conditions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Myofibrillar myopathies</li>
                    <li>• Central core disease</li>
                    <li>• Inflammatory myopathies</li>
                    <li>• Muscular dystrophies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nemaline Rods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">EM Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Electron-dense rod-shaped structures</li>
                    <li>• Continuous with Z-line material</li>
                    <li>• Lattice structure similar to Z-line</li>
                    <li>• Contain α-actinin</li>
                    <li>• Variable size (0.3-7 μm length)</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center">
                    <div className="relative w-20 h-20">
                      <div className="absolute top-2 left-4 w-2 h-8 bg-slate-700 rotate-12"></div>
                      <div className="absolute top-4 right-4 w-2 h-6 bg-slate-700 -rotate-6"></div>
                      <div className="absolute bottom-3 left-6 w-2 h-7 bg-slate-700 rotate-45"></div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Nemaline rods (synthetic)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cytoplasmic Bodies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Spherical, electron-dense structures</li>
                <li>• Similar composition to Z-lines</li>
                <li>• May have halo or filamentous periphery</li>
                <li>• Seen in myofibrillar myopathies</li>
                <li>• Also seen in other myopathies (non-specific)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'mitochondrial',
      title: 'Mitochondrial',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mitochondrial Abnormalities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Paracrystalline Inclusions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• "Parking lot" inclusions</li>
                    <li>• Regular crystalline arrays</li>
                    <li>• Within mitochondria</li>
                    <li>• Highly characteristic of mito disease</li>
                    <li>• Also called "parking garage" pattern</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded bg-slate-300 flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-0.5">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-slate-600"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Paracrystalline inclusions (synthetic)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Other Mitochondrial Changes</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Increased number:</strong> Subsarcolemmal accumulation</li>
                  <li>• <strong>Enlarged (megamitochondria):</strong> Giant mitochondria</li>
                  <li>• <strong>Abnormal cristae:</strong> Concentric, circular arrangements</li>
                  <li>• <strong>Electron-dense bodies:</strong> Within matrix</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'inclusions',
      title: 'Inclusions',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filamentous Inclusions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">15-18 nm Filaments (IBM)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tubulofilamentous inclusions</li>
                    <li>• In cytoplasm and nuclei</li>
                    <li>• Characteristic of inclusion body myositis</li>
                    <li>• Also called "paired helical filaments"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Desmin Aggregates</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Granulofilamentous deposits</li>
                    <li>• Myofibrillar myopathies</li>
                    <li>• Subsarcolemmal location</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tubular Aggregates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Derived from sarcoplasmic reticulum</li>
                    <li>• Tightly packed tubular profiles</li>
                    <li>• Type II fibers predominant</li>
                    <li>• Associated with periodic paralysis</li>
                    <li>• Also drug-induced, myasthenic syndromes</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 flex flex-wrap gap-0.5">
                      {[...Array(36)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full border border-slate-500"></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Tubular aggregates (synthetic)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Storage Material</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Glycogen</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dense granules (15-30 nm)</li>
                    <li>• Normal: scattered</li>
                    <li>• GSD: massive accumulation</li>
                    <li>• May be membrane-bound (Pompe)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Lipid</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Electron-lucent droplets</li>
                    <li>• Variable size</li>
                    <li>• Lipid storage myopathies</li>
                    <li>• Between myofibrils</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'nerve',
      title: 'Nerve EM',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Peripheral Nerve Ultrastructure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Normal Myelinated Fiber</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Compact myelin lamellae</li>
                    <li>• Major dense line (fused cytoplasm)</li>
                    <li>• Intraperiod line (apposed membranes)</li>
                    <li>• Schwann cell cytoplasm at edges</li>
                    <li>• Axon with neurofilaments/microtubules</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Normal Unmyelinated Fibers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multiple axons per Schwann cell</li>
                    <li>• Schwann cell pockets (mesaxon)</li>
                    <li>• Small caliber axons</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Abnormal Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Demyelination</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Uncompacted myelin</li>
                    <li>• Myelin splitting/separation</li>
                    <li>• Thin myelin relative to axon size</li>
                    <li>• Onion bulbs (Schwann cell layers)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Axonal Degeneration</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Myelin ovoids</li>
                    <li>• Axonal swelling</li>
                    <li>• Accumulation of organelles</li>
                    <li>• Denervated Schwann cell bands (of Büngner)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Specific Findings</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Tomacula:</strong> Sausage-shaped myelin thickenings (HNPP)</li>
                    <li>• <strong>Amyloid fibrils:</strong> 8-10 nm fibrils in endoneurium</li>
                    <li>• <strong>Giant axons:</strong> Axonal swelling with neurofilaments</li>
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
      title="EM Concepts"
      description="Ultrastructural features of muscle and nerve pathology"
      icon={<Microscope className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Paracrystalline inclusions ("parking lot") are characteristic of mitochondrial disease',
        'Nemaline rods are continuous with Z-line material',
        'Tubular aggregates are SR-derived, associated with periodic paralysis',
        '15-18 nm filaments in IBM (cytoplasmic and nuclear)',
        'Z-line streaming occurs in cores and various myopathies',
      ]}
      clinicalPearls={[
        'EM is essential for confirming congenital myopathy type',
        'Mitochondrial inclusions support but do not prove mtDNA mutation',
        'Storage material requires correlation with histochemistry',
        'Tomacula on nerve EM suggests HNPP (PMP22 deletion)',
        'EM findings should always correlate with light microscopy',
      ]}
    />
  )
}
