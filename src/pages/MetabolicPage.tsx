import { Battery } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function MetabolicPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Metabolic Myopathies</CardTitle>
              <CardDescription>
                Disorders of energy metabolism affecting muscle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-rose-500 mx-auto flex items-center justify-center text-white font-bold mb-2">
                    G
                  </div>
                  <h4 className="font-semibold text-sm">Glycogen Storage</h4>
                  <p className="text-xs text-muted-foreground mt-1">PAS-positive material</p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-red-600 mx-auto flex items-center justify-center text-white font-bold mb-2">
                    L
                  </div>
                  <h4 className="font-semibold text-sm">Lipid Storage</h4>
                  <p className="text-xs text-muted-foreground mt-1">Oil Red O positive</p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500 mx-auto flex items-center justify-center text-white font-bold mb-2">
                    M
                  </div>
                  <h4 className="font-semibold text-sm">Mitochondrial</h4>
                  <p className="text-xs text-muted-foreground mt-1">Ragged red fibers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'glycogen',
      title: 'Glycogen Storage',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Glycogen Storage Diseases (GSD)</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pompe">
                  <AccordionTrigger>Type II - Pompe Disease (Acid Maltase Deficiency)</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        GAA gene mutation causing lysosomal glycogen accumulation.
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2 text-sm">
                        <div>
                          <h5 className="font-medium">Histology</h5>
                          <ul className="text-muted-foreground">
                            <li>• Vacuolar myopathy</li>
                            <li>• PAS-positive vacuoles</li>
                            <li>• Acid phosphatase positive</li>
                            <li>• Autophagic vacuoles</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Forms</h5>
                          <ul className="text-muted-foreground">
                            <li>• Infantile: severe, cardiac</li>
                            <li>• Late-onset: respiratory/limb-girdle</li>
                            <li>• Enzyme replacement available</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mcardle">
                  <AccordionTrigger>Type V - McArdle Disease (Myophosphorylase Deficiency)</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        PYGM gene mutation. Most common glycogenosis affecting muscle.
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2 text-sm">
                        <div>
                          <h5 className="font-medium">Histology</h5>
                          <ul className="text-muted-foreground">
                            <li>• Subsarcolemmal glycogen blebs</li>
                            <li>• Increased PAS staining</li>
                            <li>• Absent myophosphorylase stain</li>
                            <li>• May be near-normal</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">Clinical</h5>
                          <ul className="text-muted-foreground">
                            <li>• Exercise intolerance</li>
                            <li>• "Second wind" phenomenon</li>
                            <li>• Rhabdomyolysis risk</li>
                            <li>• Forearm ischemic test</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="other">
                  <AccordionTrigger>Other GSDs</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Type III (Debrancher):</strong> Liver and muscle glycogenosis</li>
                      <li>• <strong>Type IV (Brancher):</strong> Polyglucosan bodies (basophilic)</li>
                      <li>• <strong>Type VII (Tarui):</strong> PFK deficiency, similar to McArdle</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Staining for Glycogen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">PAS Staining</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Magenta/pink staining of glycogen</li>
                    <li>• Diastase digestion confirms glycogen</li>
                    <li>• Subsarcolemmal blebs in McArdle</li>
                    <li>• Vacuolar in Pompe</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded bg-rose-400 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-rose-600"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">PAS+</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded bg-rose-200 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-rose-200"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">+Diastase</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'lipid',
      title: 'Lipid Storage',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Lipid Storage Myopathies</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="carnitine">
                  <AccordionTrigger>Primary Carnitine Deficiency</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        SLC22A5 mutation. Carnitine transport defect.
                      </p>
                      <ul className="text-sm text-muted-foreground">
                        <li>• Massive lipid droplet accumulation</li>
                        <li>• Type I fibers preferentially affected</li>
                        <li>• Oil Red O: intensely positive</li>
                        <li>• Treatable with carnitine supplementation</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cpt2">
                  <AccordionTrigger>CPT II Deficiency</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        CPT2 gene mutation. Defect in long-chain fatty acid transport into mitochondria.
                      </p>
                      <ul className="text-sm text-muted-foreground">
                        <li>• Most common lipid myopathy in adults</li>
                        <li>• Exercise/fasting-induced rhabdomyolysis</li>
                        <li>• Biopsy often normal between episodes</li>
                        <li>• Variable lipid accumulation</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="madd">
                  <AccordionTrigger>MADD (Multiple Acyl-CoA Dehydrogenase Deficiency)</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        ETFA, ETFB, or ETFDH mutations. Glutaric aciduria type II.
                      </p>
                      <ul className="text-sm text-muted-foreground">
                        <li>• Marked lipid accumulation</li>
                        <li>• May respond to riboflavin</li>
                        <li>• Also called riboflavin-responsive myopathy</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Oil Red O Staining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Technical Notes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Requires frozen sections</strong></li>
                    <li>• Lipids dissolve in fixatives/alcohols</li>
                    <li>• Red/orange droplets in cytoplasm</li>
                    <li>• Type I fibers normally have more lipid</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-lg bg-pink-200 relative">
                      <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="absolute top-3 right-2 w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="absolute bottom-2 left-3 w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Lipid droplets (synthetic)
                  </p>
                </div>
              </div>
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
              <CardTitle className="text-lg">Mitochondrial Myopathies</CardTitle>
              <CardDescription>
                Defects in oxidative phosphorylation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Key Histologic Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Ragged red fibers (RRF):</strong> Subsarcolemmal red accumulations on Gomori trichrome</li>
                  <li>• <strong>COX-negative fibers:</strong> Lack cytochrome c oxidase activity</li>
                  <li>• <strong>SDH-hyperreactive fibers:</strong> "Ragged blue" on SDH stain</li>
                  <li>• <strong>COX-negative/SDH-positive:</strong> Blue fibers on combined stain</li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2 text-center">Ragged Red Fiber</h4>
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-green-600 relative">
                      <div className="absolute inset-0 rounded-full border-4 border-red-500"></div>
                      <div className="absolute top-1 left-0 w-full h-1 bg-red-400"></div>
                      <div className="absolute bottom-1 left-0 w-full h-1 bg-red-400"></div>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Trichrome (synthetic)
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2 text-center">COX-/SDH+</h4>
                  <div className="flex justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber-700"></div>
                    <div className="w-10 h-10 rounded-full bg-blue-600"></div>
                    <div className="w-10 h-10 rounded-full bg-amber-700"></div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Brown = normal, Blue = abnormal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common Syndromes</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="melas">
                  <AccordionTrigger>MELAS</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes.
                      Most commonly m.3243A&gt;G in MT-TL1. RRF and COX-negative fibers present.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="merrf">
                  <AccordionTrigger>MERRF</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Myoclonic Epilepsy with Ragged Red Fibers. m.8344A&gt;G in MT-TK most common.
                      Prominent RRF, myoclonus, ataxia.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cpeo">
                  <AccordionTrigger>CPEO/KSS</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Chronic Progressive External Ophthalmoplegia. Often single large mtDNA deletion.
                      KSS adds cardiac, retinal, endocrine involvement. RRF and COX-negative fibers.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">EM Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Paracrystalline inclusions:</strong> "Parking lot" pattern</li>
                <li>• <strong>Increased mitochondrial number:</strong> Subsarcolemmal accumulation</li>
                <li>• <strong>Abnormal cristae:</strong> Circular, concentric arrangements</li>
                <li>• <strong>Enlarged mitochondria:</strong> Megamitochondria</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Metabolic & Mitochondrial Myopathies"
      description="Disorders of glycogen, lipid, and mitochondrial metabolism"
      icon={<Battery className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Pompe: vacuolar myopathy with PAS+ and acid phosphatase+ vacuoles',
        'McArdle: subsarcolemmal glycogen blebs, absent myophosphorylase',
        'Lipid storage: Oil Red O on frozen sections only',
        'Mitochondrial: Ragged red fibers + COX-negative/SDH-positive fibers',
        'COX/SDH combined stain is gold standard for mitochondrial disease',
      ]}
      clinicalPearls={[
        'CPT II deficiency biopsy may be normal between episodes',
        'Riboflavin trial may help MADD (riboflavin-responsive myopathy)',
        'Pompe disease has enzyme replacement therapy available',
        'mtDNA mutations are maternally inherited; some are sporadic (deletions)',
        'COX-negative fibers increase with age - interpret in clinical context',
      ]}
    />
  )
}
