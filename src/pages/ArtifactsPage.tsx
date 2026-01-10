import { AlertTriangle } from 'lucide-react'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const artifacts = [
  {
    name: 'Freezing Artifact',
    description: 'Ice crystal formation during improper freezing',
    appearance: 'Multiple small holes/vacuoles throughout fiber, honeycomb pattern',
    cause: 'Slow freezing, improper isopentane temperature, delay before freezing',
    prevention: 'Rapid freezing in properly cooled isopentane (-150°C to -160°C)',
    mimics: 'Vacuolar myopathy, storage disease',
  },
  {
    name: 'Poor Orientation',
    description: 'Fibers cut obliquely rather than in true cross-section',
    appearance: 'Elongated/elliptical fibers, apparent fiber size variation',
    cause: 'Improper mounting of biopsy, curved tissue',
    prevention: 'Careful orientation before embedding, straight tissue segments',
    mimics: 'True fiber size variation, atrophy',
  },
  {
    name: 'Section Chatter',
    description: 'Periodic lines across sections',
    appearance: 'Parallel lines/ridges across tissue, ladder-like pattern',
    cause: 'Dull blade, vibration, improper blade angle',
    prevention: 'Sharp blade, proper cryostat settings, check blade angle',
    mimics: 'Z-line abnormalities on EM',
  },
  {
    name: 'Crush Artifact',
    description: 'Mechanical damage during handling',
    appearance: 'Distorted fibers, compressed areas, loss of architecture',
    cause: 'Forceps use, rough handling during biopsy',
    prevention: 'Gentle handling, avoid forceps on muscle tissue',
    mimics: 'Necrosis, fiber splitting',
  },
  {
    name: 'Fiber Stretching/Contraction',
    description: 'Altered fiber length from improper tension',
    appearance: 'Contraction bands, hypercontracted fibers, wavy fibers',
    cause: 'Pulling during biopsy, delayed fixation',
    prevention: 'Proper surgical technique, immediate processing',
    mimics: 'Contraction band necrosis, hypercontracted fibers in disease',
  },
  {
    name: 'Drying Artifact',
    description: 'Tissue dehydration before processing',
    appearance: 'Shrunken fibers, dark staining, cracked cytoplasm',
    cause: 'Exposure to air, delayed processing',
    prevention: 'Keep tissue moist, rapid processing',
    mimics: 'Atrophy, hypereosinophilia',
  },
  {
    name: 'Edge Artifact',
    description: 'Damage at tissue margins',
    appearance: 'Disrupted fibers at edges, false vacuolation',
    cause: 'Cutting during biopsy, section handling',
    prevention: 'Evaluate only central portions of biopsy',
    mimics: 'Necrosis, vacuolar change',
  },
  {
    name: 'Overstaining/Understaining',
    description: 'Improper stain intensity',
    appearance: 'Too dark or too pale staining, loss of differentiation',
    cause: 'Incorrect timing, old reagents, temperature variations',
    prevention: 'Standardized protocols, fresh reagents, quality control',
    mimics: 'Abnormal fiber populations, enzyme deficiency',
  },
]

export default function ArtifactsPage() {
  const sections = [
    {
      id: 'common',
      title: 'Common Artifacts',
      content: (
        <div className="space-y-4">
          {artifacts.slice(0, 4).map((artifact) => (
            <Card key={artifact.name}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  {artifact.name}
                </CardTitle>
                <CardDescription>{artifact.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold">Appearance</h4>
                      <p className="text-sm text-muted-foreground">{artifact.appearance}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Cause</h4>
                      <p className="text-sm text-muted-foreground">{artifact.cause}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold">Prevention</h4>
                      <p className="text-sm text-muted-foreground">{artifact.prevention}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-destructive">May Mimic</h4>
                      <p className="text-sm text-muted-foreground">{artifact.mimics}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'technical',
      title: 'Technical Artifacts',
      content: (
        <div className="space-y-4">
          {artifacts.slice(4).map((artifact) => (
            <Card key={artifact.name}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  {artifact.name}
                </CardTitle>
                <CardDescription>{artifact.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold">Appearance</h4>
                      <p className="text-sm text-muted-foreground">{artifact.appearance}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Cause</h4>
                      <p className="text-sm text-muted-foreground">{artifact.cause}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold">Prevention</h4>
                      <p className="text-sm text-muted-foreground">{artifact.prevention}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-destructive">May Mimic</h4>
                      <p className="text-sm text-muted-foreground">{artifact.mimics}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'workflow',
      title: 'Lab Workflow',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Optimal Muscle Biopsy Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold">Biopsy Collection</h4>
                    <p className="text-sm text-muted-foreground">
                      Open biopsy preferred. Handle gently, avoid forceps on tissue.
                      Obtain adequate sample (1-2 cm length, 0.5-1 cm diameter).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold">Orientation</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintain fiber orientation. Mount on cork/tongue depressor.
                      Ensure fibers run perpendicular to cutting surface.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold">Freezing</h4>
                    <p className="text-sm text-muted-foreground">
                      Rapid freezing in isopentane cooled in liquid nitrogen (-150°C to -160°C).
                      Avoid direct immersion in liquid nitrogen (causes fracturing).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold">Cryostat Sectioning</h4>
                    <p className="text-sm text-muted-foreground">
                      Section at 8-10 μm thickness. Cryostat temperature -20°C to -25°C.
                      Use sharp blade, proper angle.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">5</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Processing & Staining</h4>
                    <p className="text-sm text-muted-foreground">
                      Process immediately or store at -80°C. Apply standardized staining protocols.
                      Include controls for enzyme stains.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tissue Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Frozen (-80°C)</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Histochemistry, enzyme stains, some IHC, biochemistry
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Formalin-Fixed</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    H&E, trichrome, most IHC, permanent slides
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Glutaraldehyde</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Electron microscopy (small 1mm cubes)
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm">Snap Frozen (-80°C)</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Molecular studies, Western blot, genetic testing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: 'recognition',
      title: 'Recognition Tips',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How to Recognize Artifacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Distribution Pattern</h4>
                  <p className="text-sm text-muted-foreground">
                    Artifacts typically affect all fibers uniformly or follow a mechanical pattern.
                    True pathology usually shows selective or random fiber involvement.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Location in Section</h4>
                  <p className="text-sm text-muted-foreground">
                    Edge artifacts vs central findings. Always evaluate the best-preserved
                    central areas of the biopsy.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Correlation Across Stains</h4>
                  <p className="text-sm text-muted-foreground">
                    True pathology should be present on multiple stains. Staining artifacts
                    may affect only specific stains.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Clinical Correlation</h4>
                  <p className="text-sm text-muted-foreground">
                    Always correlate histologic findings with clinical presentation.
                    Unexplained findings may represent artifacts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardHeader>
              <CardTitle className="text-lg">Common Pitfalls</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Freezing artifact mistaken for vacuolar myopathy</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Oblique sectioning causing apparent fiber size variation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Contraction bands from handling mistaken for necrosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Edge artifact interpreted as true pathology</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                  <span>Understaining mimicking enzyme deficiency</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <ModuleLayout
      title="Artifacts & Specimen Handling"
      description="Recognizing artifacts and proper muscle biopsy workflow"
      icon={<AlertTriangle className="h-6 w-6" />}
      sections={sections}
      keyPoints={[
        'Freezing artifact creates honeycomb vacuoles - not true vacuolar myopathy',
        'Proper orientation is critical for accurate fiber size assessment',
        'Always evaluate central portions of biopsy, not edges',
        'Rapid freezing in cooled isopentane prevents ice crystal formation',
        'Artifacts affect all fibers uniformly; true pathology is selective',
      ]}
      clinicalPearls={[
        'When in doubt, request deeper sections or re-cut from the block',
        'Contraction bands at biopsy edges are common and should not be over-interpreted',
        'Poor staining quality should prompt repeat staining before diagnosis',
        'Clinical correlation helps distinguish artifact from true pathology',
      ]}
    />
  )
}
