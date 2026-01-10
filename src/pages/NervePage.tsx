import { Cable } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function NervePage() {
  const sections = [
    {
      id: 'anatomy',
      title: 'Anatomy',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Peripheral Nerve Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-yellow-500"></div>
                    <span className="text-sm"><strong>Epineurium:</strong> Outermost connective tissue</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-green-500"></div>
                    <span className="text-sm"><strong>Perineurium:</strong> Surrounds each fascicle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-blue-500"></div>
                    <span className="text-sm"><strong>Endoneurium:</strong> Surrounds individual axons</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Myelinated Fibers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Large (Aα, Aβ) and small (Aδ) fibers</li>
                    <li>• Schwann cell wraps around single axon</li>
                    <li>• Myelin sheath visible</li>
                    <li>• Fast saltatory conduction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Unmyelinated Fibers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• C fibers (pain, autonomic)</li>
                    <li>• Multiple axons per Schwann cell</li>
                    <li>• No myelin sheath</li>
                    <li>• Slow continuous conduction</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nerve Biopsy Stains</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">H&E</h4>
                  <p className="text-xs text-muted-foreground">General morphology, inflammation</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Toluidine Blue (Semithin)</h4>
                  <p className="text-xs text-muted-foreground">Myelin quality, fiber density</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Congo Red</h4>
                  <p className="text-xs text-muted-foreground">Amyloid deposits</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Teased Fibers</h4>
                  <p className="text-xs text-muted-foreground">Segmental changes, paranodal changes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'axonal',
      title: 'Axonal',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Axonal Neuropathy</CardTitle>
              <CardDescription>
                Primary damage to the axon with secondary myelin loss
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Histologic Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Decreased fiber density</strong></li>
                    <li>• Wallerian degeneration</li>
                    <li>• Myelin ovoids (digestion chambers)</li>
                    <li>• Regenerating clusters</li>
                    <li>• Thin myelin on regenerating fibers</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center gap-2 flex-wrap">
                    <div className="w-6 h-6 rounded-full border-4 border-blue-500 bg-blue-200"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-blue-400 bg-blue-100"></div>
                    <div className="w-5 h-5 rounded-full border-3 border-blue-500 bg-blue-200"></div>
                    <div className="w-3 h-3 rounded-full border border-blue-300 bg-blue-100"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-blue-400 bg-blue-100"></div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Reduced fiber density (synthetic)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Regenerating Clusters</h4>
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center justify-center">
                      <div className="relative w-12 h-12">
                        <div className="absolute top-0 left-2 w-3 h-3 rounded-full border border-blue-500 bg-blue-200"></div>
                        <div className="absolute top-2 left-5 w-3 h-3 rounded-full border border-blue-500 bg-blue-200"></div>
                        <div className="absolute top-5 left-1 w-3 h-3 rounded-full border border-blue-500 bg-blue-200"></div>
                        <div className="absolute top-5 left-4 w-3 h-3 rounded-full border border-blue-500 bg-blue-200"></div>
                        <div className="absolute top-3 left-3 w-2 h-2 rounded-full border border-blue-400 bg-blue-100"></div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-1">Cluster</p>
                  </div>
                  <p className="text-sm text-muted-foreground flex-1">
                    Groups of small, thinly myelinated fibers sharing a common basement membrane.
                    Indicates axonal regeneration after injury.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Causes of Axonal Neuropathy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Metabolic</h4>
                  <p className="text-xs text-muted-foreground">Diabetes, uremia, vitamin deficiency</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Toxic</h4>
                  <p className="text-xs text-muted-foreground">Chemotherapy, alcohol, heavy metals</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Hereditary</h4>
                  <p className="text-xs text-muted-foreground">CMT2 (axonal forms)</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Inflammatory</h4>
                  <p className="text-xs text-muted-foreground">Vasculitis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'demyelinating',
      title: 'Demyelinating',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Demyelinating Neuropathy</CardTitle>
              <CardDescription>
                Primary damage to myelin/Schwann cells with preserved axons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Histologic Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Onion bulbs</strong> (Schwann cell proliferation)</li>
                    <li>• Thin myelin for axon caliber</li>
                    <li>• Preserved fiber density initially</li>
                    <li>• Segmental demyelination (teased fibers)</li>
                    <li>• Remyelination evident</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-2 border-yellow-600"></div>
                      <div className="absolute inset-1 rounded-full border-2 border-yellow-500"></div>
                      <div className="absolute inset-2 rounded-full border-2 border-yellow-400"></div>
                      <div className="absolute inset-3 rounded-full border-2 border-yellow-300"></div>
                      <div className="absolute inset-4 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Onion bulb (synthetic)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Onion Bulbs</h4>
                <p className="text-sm text-muted-foreground">
                  Concentric layers of Schwann cell processes around an axon, resulting from
                  repeated demyelination and remyelination. Characteristic of chronic
                  demyelinating neuropathies (CMT1, CIDP).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Causes of Demyelinating Neuropathy</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="acquired">
                  <AccordionTrigger>Acquired</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>GBS:</strong> Acute inflammatory demyelinating polyradiculoneuropathy</li>
                      <li>• <strong>CIDP:</strong> Chronic inflammatory demyelinating polyradiculoneuropathy</li>
                      <li>• <strong>MGUS/paraprotein:</strong> Anti-MAG neuropathy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="hereditary">
                  <AccordionTrigger>Hereditary</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>CMT1A:</strong> PMP22 duplication (most common)</li>
                      <li>• <strong>CMT1B:</strong> MPZ mutations</li>
                      <li>• <strong>HNPP:</strong> PMP22 deletion (tomaculous neuropathy)</li>
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
      id: 'inflammatory',
      title: 'Inflammatory',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vasculitic Neuropathy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Inflammation of epineurial blood vessels</li>
                  <li>• Fibrinoid necrosis of vessel wall</li>
                  <li>• Axonal loss with asymmetric fascicular involvement</li>
                  <li>• "Centrofascicular" loss pattern</li>
                  <li>• May see hemosiderin deposits</li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Systemic Vasculitis</h4>
                  <p className="text-xs text-muted-foreground">PAN, EGPA, MPA, GPA</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Non-systemic (NSVN)</h4>
                  <p className="text-xs text-muted-foreground">Isolated to peripheral nerve</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Amyloid Neuropathy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Amyloid deposits in endoneurium/vessel walls</li>
                <li>• Congo red positive with apple-green birefringence</li>
                <li>• TTR (transthyretin) or AL amyloid most common</li>
                <li>• Preferential small fiber loss</li>
                <li>• May have autonomic involvement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Leprosy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Mycobacterium leprae in Schwann cells</li>
                <li>• Granulomatous inflammation (tuberculoid)</li>
                <li>• Foamy macrophages with organisms (lepromatous)</li>
                <li>• Acid-fast staining for organisms</li>
              </ul>
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
              <CardTitle className="text-lg">Axonal vs Demyelinating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Feature</th>
                      <th className="text-left p-2">Axonal</th>
                      <th className="text-left p-2">Demyelinating</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Fiber density</td>
                      <td className="p-2">Reduced</td>
                      <td className="p-2">Preserved initially</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Myelin</td>
                      <td className="p-2">Secondary loss</td>
                      <td className="p-2">Primary target</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Onion bulbs</td>
                      <td className="p-2">Absent</td>
                      <td className="p-2">Present (chronic)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Regeneration clusters</td>
                      <td className="p-2">Present</td>
                      <td className="p-2">Absent/rare</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Wallerian degeneration</td>
                      <td className="p-2">Present</td>
                      <td className="p-2">Absent</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-foreground">EMG pattern</td>
                      <td className="p-2">Reduced amplitudes</td>
                      <td className="p-2">Slowed conduction</td>
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
      title="Peripheral Nerve Pathology"
      description="Axonal and demyelinating neuropathies, inflammatory conditions"
      icon={<Cable className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Axonal neuropathy: reduced fiber density, regenerating clusters',
        'Demyelinating neuropathy: onion bulbs, preserved fiber density',
        'Onion bulbs indicate chronic demyelination/remyelination',
        'Regenerating clusters indicate prior axonal damage',
        'Vasculitis shows vessel inflammation with asymmetric axonal loss',
      ]}
      clinicalPearls={[
        'Semithin (toluidine blue) sections are essential for nerve evaluation',
        'Teased fiber preparations show segmental demyelination',
        'Mixed axonal and demyelinating features can occur',
        'Congo red essential if amyloid suspected (TTR vs AL)',
        'HNPP shows "tomaculous" (sausage-shaped) swellings',
      ]}
    />
  )
}
