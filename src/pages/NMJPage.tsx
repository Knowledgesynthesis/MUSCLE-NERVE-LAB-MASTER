import { CircleDot } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function NMJPage() {
  const sections = [
    {
      id: 'anatomy',
      title: 'Anatomy',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Neuromuscular Junction Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-full h-8 bg-yellow-500 rounded flex items-center px-3">
                      <span className="text-xs text-yellow-900 font-medium">Motor Nerve Terminal</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-muted-foreground ml-2">ACh vesicles</span>
                  </div>
                  <div className="h-2 bg-gray-400 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-700">Synaptic Cleft (AChE)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full h-12 bg-pink-500 rounded relative">
                      <div className="absolute top-0 left-0 right-0 flex justify-around">
                        <div className="w-1 h-4 bg-pink-300"></div>
                        <div className="w-1 h-4 bg-pink-300"></div>
                        <div className="w-1 h-4 bg-pink-300"></div>
                        <div className="w-1 h-4 bg-pink-300"></div>
                        <div className="w-1 h-4 bg-pink-300"></div>
                      </div>
                      <span className="absolute bottom-1 left-3 text-xs text-pink-100">Junctional Folds (AChR)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  NMJ structure (synthetic diagram)
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Presynaptic</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Motor nerve terminal</li>
                    <li>• ACh vesicles</li>
                    <li>• Voltage-gated Ca2+ channels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Synaptic Cleft</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Basal lamina</li>
                    <li>• Acetylcholinesterase</li>
                    <li>• Collagen, agrin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Postsynaptic</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Junctional folds</li>
                    <li>• ACh receptors</li>
                    <li>• MuSK, rapsyn</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'acquired',
      title: 'Acquired',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Myasthenia Gravis</CardTitle>
              <CardDescription>Autoimmune attack on postsynaptic NMJ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Antibodies</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Anti-AChR:</strong> ~85% of cases</li>
                    <li>• <strong>Anti-MuSK:</strong> ~5-10%</li>
                    <li>• <strong>Anti-LRP4:</strong> Small percentage</li>
                    <li>• Seronegative: ~5%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Muscle Biopsy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Often normal or near-normal</li>
                    <li>• Type II fiber atrophy</li>
                    <li>• Lymphorrhages (rare)</li>
                    <li>• Not routinely performed</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">EM Features (If Done)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Simplified junctional folds</li>
                  <li>• Widened synaptic cleft</li>
                  <li>• Reduced AChR density</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Lambert-Eaton Myasthenic Syndrome (LEMS)</CardTitle>
              <CardDescription>Presynaptic disorder</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anti-VGCC antibodies</li>
                    <li>• Proximal weakness, autonomic dysfunction</li>
                    <li>• Associated with SCLC (~60%)</li>
                    <li>• Facilitation with exercise</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Pathology</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Reduced active zones on EM</li>
                    <li>• Presynaptic membrane changes</li>
                    <li>• Muscle biopsy often normal</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Botulism</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Clostridium botulinum toxin</li>
                <li>• Blocks ACh release (presynaptic)</li>
                <li>• Muscle biopsy: type II atrophy, denervation-like changes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'congenital',
      title: 'Congenital',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Congenital Myasthenic Syndromes (CMS)</CardTitle>
              <CardDescription>Genetic defects affecting NMJ function</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Rare inherited disorders affecting various components of the NMJ.
                Not autoimmune - genetic mutations in NMJ proteins.
              </p>

              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Presynaptic CMS</h4>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• ChAT deficiency (choline acetyltransferase)</li>
                    <li>• SNAP25B mutations</li>
                    <li>• Synaptotagmin mutations</li>
                  </ul>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Synaptic CMS</h4>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• AChE deficiency (endplate AChE)</li>
                    <li>• Prolonged channel opening</li>
                    <li>• Basal lamina defects</li>
                  </ul>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Postsynaptic CMS</h4>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• AChR subunit mutations (most common)</li>
                    <li>• Slow-channel syndrome</li>
                    <li>• Fast-channel syndrome</li>
                    <li>• Rapsyn deficiency</li>
                    <li>• DOK7 mutations</li>
                    <li>• MuSK deficiency</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Endplate Pathology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Special staining techniques may reveal endplate abnormalities:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• AChE staining for endplate localization</li>
                <li>• α-Bungarotoxin for AChR distribution</li>
                <li>• EM for ultrastructural changes</li>
                <li>• Simplified or absent junctional folds</li>
                <li>• Small nerve terminals</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'diagnosis',
      title: 'Diagnosis',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Diagnostic Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">1. Clinical Assessment</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fatigable weakness, ptosis, diplopia, bulbar symptoms
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">2. Antibody Testing</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Anti-AChR, anti-MuSK, anti-LRP4, anti-VGCC
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">3. Electrophysiology</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>• Repetitive nerve stimulation (decrement/increment)</li>
                    <li>• Single-fiber EMG (jitter)</li>
                  </ul>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">4. Muscle Biopsy</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Rarely needed for acquired MG. May help in CMS or atypical cases.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">5. Genetic Testing</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    For suspected congenital myasthenic syndromes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">When is Muscle Biopsy Helpful?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Exclude myopathy mimicking NMJ disorder</li>
                <li>• Suspected CMS (with specialized techniques)</li>
                <li>• Seronegative cases with atypical features</li>
                <li>• Research/specialized centers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Neuromuscular Junction"
      description="Anatomy, acquired and congenital disorders of the NMJ"
      icon={<CircleDot className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'MG: Anti-AChR (85%), anti-MuSK (5-10%), postsynaptic disorder',
        'LEMS: Anti-VGCC, presynaptic, paraneoplastic association',
        'CMS: Genetic, not autoimmune, various NMJ components affected',
        'Muscle biopsy often normal in NMJ disorders',
        'Diagnosis primarily clinical + antibodies + EMG',
      ]}
      clinicalPearls={[
        'Muscle biopsy rarely needed for typical myasthenia gravis',
        'Type II atrophy without other findings may suggest NMJ disorder',
        'Anti-MuSK MG has different clinical features (bulbar predominant)',
        'CMS should be considered in seronegative pediatric/young patients',
        'LEMS: always search for underlying malignancy (SCLC)',
      ]}
    />
  )
}
