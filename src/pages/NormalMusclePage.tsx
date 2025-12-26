import { Activity } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function NormalMusclePage() {
  const sections = [
    {
      id: 'fiber-types',
      title: 'Fiber Types',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Type I Fibers (Slow-Twitch)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Rich in mitochondria (oxidative metabolism)</li>
                    <li>• Dark on NADH/SDH stains</li>
                    <li>• Light on ATPase at pH 9.4</li>
                    <li>• Dark on ATPase at pH 4.3</li>
                    <li>• Fatigue-resistant</li>
                    <li>• Slow contraction speed</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center min-h-[150px]">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mb-2">
                      <span className="text-blue-500 font-bold">I</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Type I Fiber Icon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Type II Fibers (Fast-Twitch)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Subtypes</h4>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="iia">
                      <AccordionTrigger>Type IIA (Fast Oxidative)</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Intermediate oxidative capacity</li>
                          <li>• Medium on NADH/SDH</li>
                          <li>• Dark on ATPase at pH 9.4</li>
                          <li>• Light on ATPase at pH 4.6</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="iib">
                      <AccordionTrigger>Type IIB/IIX (Fast Glycolytic)</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Low oxidative capacity</li>
                          <li>• Light on NADH/SDH</li>
                          <li>• Relies on glycolytic metabolism</li>
                          <li>• Fatigues quickly</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center min-h-[150px]">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mb-2">
                        <span className="text-red-500 font-bold text-sm">IIA</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center mb-2">
                        <span className="text-orange-500 font-bold text-sm">IIB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Fiber Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Normal muscle shows a "checkerboard" pattern with random distribution of fiber types.
                Each motor unit contains fibers of the same type, but motor units are intermingled.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <div className="grid grid-cols-6 gap-1 max-w-xs mx-auto">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-sm ${
                        Math.random() > 0.5
                          ? 'bg-blue-500'
                          : Math.random() > 0.5
                          ? 'bg-red-500'
                          : 'bg-orange-500'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Checkerboard pattern (synthetic diagram)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'histology',
      title: 'Basic Histology',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Normal Muscle Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Polygonal shape</strong> in cross-section</li>
                    <li>• <strong>Peripheral nuclei</strong> (subsarcolemmal)</li>
                    <li>• <strong>Uniform fiber size</strong> (40-80 μm diameter)</li>
                    <li>• <strong>Endomysium</strong> surrounds individual fibers</li>
                    <li>• <strong>Perimysium</strong> surrounds fascicles</li>
                    <li>• <strong>Epimysium</strong> surrounds entire muscle</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-pink-500 rounded-sm"></div>
                      <span>Muscle fibers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-blue-500/30 rounded-sm"></div>
                      <span>Endomysium</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-green-500/30 rounded-sm"></div>
                      <span>Perimysium</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Internal Nuclei</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Normal muscle should have <strong>&lt;3% internal nuclei</strong>.
                Increased internal nuclei suggest:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Myotonic dystrophy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Centronuclear myopathy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Regeneration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Chronic myopathy
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Connective Tissue</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="endomysium">
                  <AccordionTrigger>Endomysium</AccordionTrigger>
                  <AccordionContent>
                    Delicate connective tissue surrounding individual muscle fibers.
                    Contains capillaries and satellite cells. Increased in chronic myopathies.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="perimysium">
                  <AccordionTrigger>Perimysium</AccordionTrigger>
                  <AccordionContent>
                    Thicker connective tissue surrounding fascicles (bundles of fibers).
                    Contains larger blood vessels and nerves.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="epimysium">
                  <AccordionTrigger>Epimysium</AccordionTrigger>
                  <AccordionContent>
                    Dense connective tissue surrounding the entire muscle.
                    Continuous with tendons at muscle insertions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'ultrastructure',
      title: 'Ultrastructure',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Sarcomere Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The sarcomere is the basic contractile unit, spanning from Z-line to Z-line.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-right text-xs font-medium">Z-line</div>
                    <div className="flex-1 h-4 bg-slate-600 rounded"></div>
                    <div className="w-4"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-right text-xs font-medium">I-band</div>
                    <div className="flex-1 h-4 bg-blue-400/50 rounded"></div>
                    <div className="text-xs text-muted-foreground">Thin filaments only</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-right text-xs font-medium">A-band</div>
                    <div className="flex-1 h-4 bg-red-500/50 rounded"></div>
                    <div className="text-xs text-muted-foreground">Thick + thin</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-right text-xs font-medium">H-zone</div>
                    <div className="flex-1 h-4 bg-red-300/50 rounded"></div>
                    <div className="text-xs text-muted-foreground">Thick only</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 text-right text-xs font-medium">M-line</div>
                    <div className="flex-1 h-4 bg-slate-500 rounded"></div>
                    <div className="text-xs text-muted-foreground">Center</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Proteins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold">Thick Filaments</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Myosin (heavy chains)</li>
                    <li>• Myosin-binding protein C</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Thin Filaments</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Actin</li>
                    <li>• Tropomyosin</li>
                    <li>• Troponin complex</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Z-line</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Alpha-actinin</li>
                    <li>• Desmin</li>
                    <li>• Filamin</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Sarcolemma Complex</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dystrophin</li>
                    <li>• Dystroglycan</li>
                    <li>• Sarcoglycans</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'nmj',
      title: 'Motor Unit',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Motor Unit Concept</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                A motor unit consists of a single motor neuron and all the muscle fibers it innervates.
                All fibers in a motor unit are of the same histochemical type.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-xs font-bold">MN</span>
                  </div>
                  <div className="w-0.5 h-8 bg-yellow-500"></div>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-yellow-500"></div>
                        <div className="w-6 h-6 rounded bg-red-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-center mt-3 text-muted-foreground">
                  Motor neuron (MN) innervating multiple fibers of same type
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Neuromuscular Junction</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Presynaptic:</strong> Motor nerve terminal with synaptic vesicles (ACh)</li>
                <li>• <strong>Synaptic cleft:</strong> Contains basal lamina and acetylcholinesterase</li>
                <li>• <strong>Postsynaptic:</strong> Junctional folds with ACh receptors</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Normal Muscle Histology"
      description="Understanding normal skeletal muscle architecture and fiber types"
      icon={<Activity className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Normal muscle fibers are polygonal with peripheral nuclei',
        'Type I fibers are slow-twitch, oxidative (dark on NADH)',
        'Type II fibers are fast-twitch, glycolytic (light on NADH)',
        'Normal fiber size is 40-80 μm with <3% internal nuclei',
        'Checkerboard pattern indicates normal fiber type distribution',
      ]}
      clinicalPearls={[
        'Loss of checkerboard pattern suggests reinnervation (fiber type grouping)',
        'Increased internal nuclei suggest chronic myopathy or dystrophy',
        'Angular atrophic fibers suggest denervation',
        'Always assess fiber size variation - increased variation is abnormal',
      ]}
    />
  )
}
