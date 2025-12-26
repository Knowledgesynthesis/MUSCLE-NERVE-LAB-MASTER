import { Zap } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function NeurogenicPage() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Neurogenic Atrophy</CardTitle>
              <CardDescription>
                Muscle changes secondary to denervation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                When motor neurons or their axons are damaged, the muscle fibers they innervate
                undergo characteristic changes. The pattern of changes depends on whether
                denervation is acute, chronic, or if reinnervation has occurred.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="p-3 bg-muted rounded-lg text-center">
                  <h4 className="font-semibold text-sm">Acute</h4>
                  <p className="text-xs text-muted-foreground mt-1">Angular atrophic fibers</p>
                </div>
                <div className="p-3 bg-muted rounded-lg text-center">
                  <h4 className="font-semibold text-sm">Chronic</h4>
                  <p className="text-xs text-muted-foreground mt-1">Group atrophy</p>
                </div>
                <div className="p-3 bg-muted rounded-lg text-center">
                  <h4 className="font-semibold text-sm">Reinnervation</h4>
                  <p className="text-xs text-muted-foreground mt-1">Fiber type grouping</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'acute',
      title: 'Acute Denervation',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Angular Atrophic Fibers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Characteristics</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Angular shape</strong> (not rounded)</li>
                    <li>• Scattered distribution</li>
                    <li>• Both fiber types affected</li>
                    <li>• Dark staining on NADH ("dark angular fibers")</li>
                    <li>• Increased esterase activity</li>
                    <li>• May be pyknotic nuclei</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => {
                      const isAngular = [2, 7, 11, 14].includes(i)
                      return (
                        <div
                          key={i}
                          className={`aspect-square ${
                            isAngular
                              ? 'bg-blue-700 rotate-45 scale-75'
                              : 'bg-pink-500 rounded-sm'
                          }`}
                        />
                      )
                    })}
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Scattered angular atrophic fibers (synthetic)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Staining Pattern</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                  <div>• NADH: dark staining</div>
                  <div>• Esterase: increased activity</div>
                  <div>• ATPase: either fiber type</div>
                  <div>• H&E: angular, hypereosinophilic</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Target Fibers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Three concentric zones on NADH</li>
                    <li>• Central pale zone</li>
                    <li>• Dark intermediate zone</li>
                    <li>• Normal peripheral zone</li>
                    <li>• Indicates active denervation</li>
                    <li>• More specific than cores</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-blue-500"></div>
                    <div className="absolute inset-2 rounded-full bg-blue-800"></div>
                    <div className="absolute inset-4 rounded-full bg-blue-200"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Target vs Core:</strong> Target fibers have three zones and are associated
                with denervation. Cores lack the intermediate dark zone and are seen in
                central core disease.
              </p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'chronic',
      title: 'Chronic Changes',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Group Atrophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Groups of atrophic fibers together</li>
                    <li>• Reflects loss of entire motor units</li>
                    <li>• Small angular fibers in clusters</li>
                    <li>• May become extremely small (nuclear clumps)</li>
                    <li>• Indicates chronic/severe denervation</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(25)].map((_, i) => {
                      const isAtrophicGroup = [6, 7, 11, 12].includes(i)
                      return (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${
                            isAtrophicGroup
                              ? 'bg-pink-300 scale-50'
                              : 'bg-pink-500'
                          }`}
                        />
                      )
                    })}
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Group atrophy (synthetic)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Fiber Type Grouping</CardTitle>
              <CardDescription>Evidence of reinnervation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Mechanism</h4>
                  <p className="text-sm text-muted-foreground">
                    When denervated fibers are reinnervated by collateral sprouting from
                    adjacent motor neurons, they convert to the fiber type of the new motor unit.
                    This creates groups of same-type fibers instead of the normal checkerboard.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="bg-muted rounded-lg p-2">
                    <p className="text-xs font-medium mb-1 text-center">Normal (checkerboard)</p>
                    <div className="grid grid-cols-5 gap-0.5">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${
                            Math.random() > 0.5 ? 'bg-blue-500' : 'bg-red-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-2">
                    <p className="text-xs font-medium mb-1 text-center">Fiber type grouping</p>
                    <div className="grid grid-cols-5 gap-0.5">
                      <div className="aspect-square rounded-sm bg-blue-500" />
                      <div className="aspect-square rounded-sm bg-blue-500" />
                      <div className="aspect-square rounded-sm bg-blue-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-blue-500" />
                      <div className="aspect-square rounded-sm bg-blue-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-red-500" />
                      <div className="aspect-square rounded-sm bg-blue-500" />
                      <div className="aspect-square rounded-sm bg-blue-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Definition</h4>
                <p className="text-sm text-muted-foreground">
                  Fiber type grouping is defined as ≥15-20 fibers of the same type clustered together.
                  Best seen on ATPase stains at pH 9.4 or 4.3.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'patterns',
      title: 'Patterns',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Causes of Neurogenic Atrophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Motor Neuron Disease</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ALS</li>
                    <li>• Spinal muscular atrophy</li>
                    <li>• Poliomyelitis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Peripheral Neuropathy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Axonal neuropathies</li>
                    <li>• Nerve compression/trauma</li>
                    <li>• CMT (Charcot-Marie-Tooth)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Radiculopathy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Disc herniation</li>
                    <li>• Spinal stenosis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Other</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Guillain-Barré syndrome</li>
                    <li>• CIDP</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Neurogenic vs Myopathic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Feature</th>
                      <th className="text-left p-2">Neurogenic</th>
                      <th className="text-left p-2">Myopathic</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Atrophic fibers</td>
                      <td className="p-2">Angular</td>
                      <td className="p-2">Round</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Distribution</td>
                      <td className="p-2">Grouped or scattered</td>
                      <td className="p-2">Random</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Hypertrophy</td>
                      <td className="p-2">Compensatory</td>
                      <td className="p-2">May be prominent</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Fiber type grouping</td>
                      <td className="p-2">Present (reinnervation)</td>
                      <td className="p-2">Absent</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Target fibers</td>
                      <td className="p-2">May be present</td>
                      <td className="p-2">Absent</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium text-foreground">Necrosis/regen</td>
                      <td className="p-2">Usually absent</td>
                      <td className="p-2">Often present</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium text-foreground">Internal nuclei</td>
                      <td className="p-2">Not prominent</td>
                      <td className="p-2">Increased</td>
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
      title="Neurogenic Atrophy"
      description="Muscle changes secondary to denervation and reinnervation"
      icon={<Zap className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Angular atrophic fibers indicate acute/active denervation',
        'Target fibers have three zones on NADH (specific for denervation)',
        'Group atrophy indicates chronic denervation',
        'Fiber type grouping indicates reinnervation has occurred',
        'Esterase stain highlights denervated fibers',
      ]}
      clinicalPearls={[
        'Angular fibers can be from either fiber type - check ATPase',
        'Target fibers differ from cores (cores lack intermediate dark zone)',
        'Fiber type grouping of >15-20 same-type fibers is significant',
        'Mixed neurogenic and myopathic features can occur in IBM',
        'Severe neurogenic disease may show "nuclear clumps" (end-stage atrophy)',
      ]}
    />
  )
}
