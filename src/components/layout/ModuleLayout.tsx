import { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Section {
  id: string
  title: string
  content: ReactNode
}

interface ModuleLayoutProps {
  title: string
  description: string
  icon: ReactNode
  sections: Section[]
  keyPoints?: string[]
  clinicalPearls?: string[]
}

export function ModuleLayout({
  title,
  description,
  icon,
  sections,
  keyPoints,
  clinicalPearls,
}: ModuleLayoutProps) {
  return (
    <div className="space-y-6">
      {/* Module Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          {icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {/* Key Points Summary */}
      {keyPoints && keyPoints.length > 0 && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-xl">📌</span> Key Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Main Content Tabs */}
      <Tabs defaultValue={sections[0]?.id} className="w-full">
        <TabsList className="w-full flex-wrap h-auto gap-1 p-1">
          {sections.map((section) => (
            <TabsTrigger
              key={section.id}
              value={section.id}
              className="flex-1 min-w-[100px] text-xs sm:text-sm"
            >
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="mt-4">
            {section.content}
          </TabsContent>
        ))}
      </Tabs>

      {/* Clinical Pearls */}
      {clinicalPearls && clinicalPearls.length > 0 && (
        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-xl">💡</span> Clinical Pearls
            </CardTitle>
            <CardDescription>Important tips for practice</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {clinicalPearls.map((pearl, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-yellow-500 mt-1">★</span>
                  <span>{pearl}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
