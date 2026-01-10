import { ReactNode } from 'react'
import { Header } from './Header'
import { ScrollArea } from '@/components/ui/scroll-area'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background transition-theme">
      <Header />
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <main className="container mx-auto px-4 py-6 pb-20 md:px-6 lg:px-8">
          {children}
        </main>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          <p className="mb-2 font-medium">Educational Use Only</p>
          <p className="text-xs max-w-2xl mx-auto px-4">
            This application is for educational purposes only and should not be used for clinical diagnosis or patient care.
            All images are synthetic/diagrammatic representations.
          </p>
        </footer>
      </ScrollArea>
    </div>
  )
}
