import { Settings, Moon, Sun, Info, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useTheme } from '@/context/ThemeContext'

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Settings className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Settings</h1>
          <p className="text-muted-foreground mt-1">Configure your experience</p>
        </div>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            Appearance
          </CardTitle>
          <CardDescription>Customize the look and feel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">
                Toggle between dark and light themes
              </p>
            </div>
            <Switch
              id="dark-mode"
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Info className="h-5 w-5" />
            About the App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Muscle & Nerve Lab Master</h3>
            <p className="text-sm text-muted-foreground mt-1">Version 1.0.0</p>
          </div>

          <Separator />

          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Purpose:</strong> A comprehensive educational platform
              designed for pathology residents and neuromuscular pathology trainees covering muscle
              and nerve biopsy pathology.
            </p>

            <p>
              <strong className="text-foreground">Content:</strong> This app covers normal muscle and
              nerve histology, special stains, inflammatory myopathies, muscular dystrophies,
              congenital myopathies, metabolic/mitochondrial myopathies, neurogenic changes,
              peripheral nerve pathology, EM concepts, and IHC interpretation.
            </p>

            <p>
              <strong className="text-foreground">Target Audience:</strong>
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>PGY1-4 Pathology residents</li>
              <li>Neuropathology fellows</li>
              <li>Neuromuscular pathology trainees</li>
              <li>Medical students interested in pathology</li>
            </ul>

            <p>
              <strong className="text-foreground">Features:</strong>
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Mobile-first, responsive design</li>
              <li>Dark mode support</li>
              <li>Offline capability</li>
              <li>Integrated case studies</li>
              <li>Self-assessment quizzes</li>
              <li>Pattern-based learning approach</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm">
            <div className="p-4 bg-background rounded-lg border">
              <h4 className="font-semibold mb-2">Educational Use Only</h4>
              <p className="text-muted-foreground">
                This application is designed exclusively for educational purposes. It is intended
                to supplement formal medical education and should not be used as the sole source
                of clinical information.
              </p>
            </div>

            <div className="p-4 bg-background rounded-lg border">
              <h4 className="font-semibold mb-2">Not for Clinical Diagnosis</h4>
              <p className="text-muted-foreground">
                The content in this application should NOT be used for clinical diagnosis,
                treatment decisions, or patient care. Always consult qualified healthcare
                professionals and use appropriate clinical guidelines for patient care.
              </p>
            </div>

            <div className="p-4 bg-background rounded-lg border">
              <h4 className="font-semibold mb-2">Synthetic Content</h4>
              <p className="text-muted-foreground">
                All images, diagrams, and case studies in this application are synthetic and
                diagrammatic representations created for educational purposes. They do not
                contain real patient data or protected health information (PHI).
              </p>
            </div>

            <div className="p-4 bg-background rounded-lg border">
              <h4 className="font-semibold mb-2">No Data Collection</h4>
              <p className="text-muted-foreground">
                This application does not collect, store, or transmit any user data.
                All assessment scores and progress are session-only and are not retained
                after closing the application.
              </p>
            </div>

            <div className="p-4 bg-background rounded-lg border">
              <h4 className="font-semibold mb-2">Content Accuracy</h4>
              <p className="text-muted-foreground">
                While every effort has been made to ensure the accuracy of the content,
                medical knowledge evolves continuously. Users should verify information
                with current textbooks and peer-reviewed literature.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Credits */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Acknowledgments</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This educational application draws conceptual inspiration from standard neuromuscular
            pathology references including works by Dubowitz, Prayson, and WHO classifications.
            All content has been synthesized for educational purposes.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
