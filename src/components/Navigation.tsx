import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Height of nav
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  const navLinks = [
    { name: 'Home', target: 'top' },
    { name: 'How We Work', target: 'our-approach' },
    { name: 'Work with Us', target: 'investment' },
  ]
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer"
            onClick={() => scrollToSection('top')}
          >
            Qusudi<span className="text-blue-600">.</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button 
              variant="primary" 
              size="sm"
              href="https://calendly.com/cchuaga-qusudiconsulting"
            >
              Schedule a Call
            </Button>
          </nav>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="text-left text-base font-medium text-gray-600 hover:text-blue-600 py-2"
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant="primary" 
            className="w-full justify-center"
            href="#calendly-placeholder"
          >
            Schedule a Call
          </Button>
        </div>
      )}
    </header>
  )
}