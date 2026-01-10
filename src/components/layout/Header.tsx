import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Home, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigationItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Normal Muscle', path: '/normal-muscle' },
  { name: 'Stains', path: '/stains' },
  { name: 'Artifacts', path: '/artifacts' },
  { name: 'Inflammatory', path: '/inflammatory' },
  { name: 'Dystrophies', path: '/dystrophies' },
  { name: 'Congenital', path: '/congenital-myopathies' },
  { name: 'Metabolic', path: '/metabolic' },
  { name: 'Neurogenic', path: '/neurogenic' },
  { name: 'Nerve', path: '/nerve' },
  { name: 'NMJ', path: '/nmj' },
  { name: 'EM', path: '/em' },
  { name: 'IHC', path: '/ihc' },
  { name: 'Pitfalls', path: '/pitfalls' },
  { name: 'Cases', path: '/cases' },
  { name: 'Assessment', path: '/assessment' },
  { name: 'Settings', path: '/settings' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2">
            {!isHome && (
              <Link to="/" className="mr-2">
                <Button variant="ghost" size="icon" aria-label="Go back home">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div className="flex flex-1 items-center justify-center md:justify-start">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                MN
              </div>
              <span className="hidden font-bold sm:inline-block">
                Muscle & Nerve Lab Master
              </span>
              <span className="font-bold sm:hidden">
                MN Lab
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMenuOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />
        <nav
          className={cn(
            "fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-64 bg-background border-r overflow-y-auto transition-transform",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors touch-target",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
