/*
 * UPDATED LOGO REQUIREMENTS:
 * - Logo is ONLY the image (no “EEAA” text next to it)
 * - Twice bigger than before
 * - No light/white box behind it (transparent container)
 * - Keeps: mobile menu overlay scroll + body scroll lock
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Mission & Vision", href: "/about" },
      { name: "Founding Act", href: "/founding-act" },
      { name: "Founders", href: "/founders" },
      { name: "International Cooperation", href: "/about" },
    ],
  },
  {
    name: "Organization",
    href: "/organization",
    children: [
      { name: "Board of Directors", href: "/directors" },
      {
        name: "Departments",
        href: "",
        children: [
          { name: "IT", href: "/it-department" },
          { name: "Wine and Spirit", href: "/wine-and-spirit" },
          { name: "PR & Media", href: "/pr-and-media" },
        ],
      },
    ],
  },
  {
    name: "Membership",
    href: "/membership",
    children: [
      { name: "Overview", href: "/membership" },
      { name: "Apply Now", href: "/membership/apply" },
    ],
  },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Market Hub", href: "/market-hub" },
  {
    name: "News & Events",
    href: "/news",
    children: [{ name: "Archive", href: "/archive" }],
  },
  { name: "Contact", href: "/contact" },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menus on route change
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        )}
      >
        <nav className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo (image only, bigger, no background box) */}
            <Link href="/" className="flex items-center group">
              <img
                src="/images/logo1.png"
                alt="EEAA"
                className="h-14 sm:h-16 w-auto object-contain group-hover:opacity-90 transition-opacity"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map(item => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => {
                    setOpenDropdown(null);
                    setOpenSubDropdown(null);
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1",
                      location === item.href ||
                        item.children?.some(c => location === c.href)
                        ? "text-[var(--color-copper)]"
                        : "text-[var(--color-navy)] hover:text-[var(--color-copper)]"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-3 h-3 opacity-50" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white rounded shadow-lg border border-[var(--color-stone-dark)] py-2 w-[200px]">
                        {item.children.map(child => (
                          <div
                            key={child.name}
                            className="relative"
                            onMouseEnter={() =>
                              child.children && setOpenSubDropdown(child.name)
                            }
                            onMouseLeave={() => setOpenSubDropdown(null)}
                          >
                            <Link
                              href={child.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                location === child.href
                                  ? "text-[var(--color-copper)] bg-[var(--color-stone)]"
                                  : "text-[var(--color-navy)] hover:bg-[var(--color-stone)] hover:text-[var(--color-copper)]"
                              )}
                            >
                              <span className="inline-flex items-center gap-1">
                                {child.name}
                                {child.children && (
                                  <ChevronDown className="w-3 h-3 opacity-50" />
                                )}
                              </span>
                            </Link>

                            {/* Second-level dropdown */}
                            {child.children &&
                              openSubDropdown === child.name && (
                                <div className="absolute top-0 left-full ml-1">
                                  <div className="bg-white rounded shadow-lg border border-[var(--color-stone-dark)] py-2 w-[200px]">
                                    {child.children.map(sub => (
                                      <Link
                                        key={sub.href}
                                        href={sub.href}
                                        className="block px-4 py-2 text-sm text-[var(--color-navy)] hover:bg-[var(--color-stone)] hover:text-[var(--color-copper)] transition-colors"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/membership/apply"
                className="inline-flex items-center px-5 py-2.5 bg-[var(--color-navy)] text-white text-sm font-medium rounded hover:bg-[var(--color-navy-light)] transition-colors"
              >
                Become a Member
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[var(--color-navy)]"
              onClick={() => setMobileMenuOpen(v => !v)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation (fixed overlay + internal scroll) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col">
            {/* Mobile Menu Header - Fixed at top of overlay */}
            <div className="flex items-center justify-between h-20 px-4 border-b border-[var(--color-stone-dark)] shrink-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src="/images/logo1.png"
                  alt="EEAA"
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <button
                className="p-2 text-[var(--color-navy)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto overscroll-contain bg-white">
              <div className="container py-4 space-y-1">
                {navigation.map(item => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded transition-colors",
                        location === item.href
                          ? "text-[var(--color-copper)] bg-[var(--color-stone)]"
                          : "text-[var(--color-navy)] hover:bg-[var(--color-stone)]"
                      )}
                    >
                      {item.name}
                    </Link>

                    {item.children && (
                      <div className="pl-4">
                        {item.children.map(child => (
                          <div key={child.name}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                location === child.href
                                  ? "text-[var(--color-copper)]"
                                  : "text-[var(--color-gray-cool)] hover:text-[var(--color-copper)]"
                              )}
                            >
                              {child.name}
                            </Link>

                            {child.children && (
                              <div className="pl-4">
                                {child.children.map(sub => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className={cn(
                                      "block px-4 py-2 text-sm transition-colors",
                                      location === sub.href
                                        ? "text-[var(--color-copper)]"
                                        : "text-[var(--color-gray-cool)] hover:text-[var(--color-copper)]"
                                    )}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 px-4 pb-10">
                  <Link
                    href="/membership/apply"
                    className="block w-full text-center px-5 py-3 bg-[var(--color-navy)] text-white text-sm font-medium rounded hover:bg-[var(--color-navy-light)] transition-colors"
                  >
                    Become a Member
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/logo1.png"
                  alt="EEAA"
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                European Economic Alliance for Cooperation with Asia — A unified
                platform supporting companies, institutions, and investors in
                developing strong and sustainable economic relations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Membership", href: "/membership" },
                  { name: "Market Hub", href: "/market-hub" },
                ].map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-[var(--color-copper)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-serif text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                {[
                  { name: "News & Events", href: "/news" },
                  { name: "Projects", href: "/projects" },
                  { name: "Founding Act", href: "/founding-act" },
                  { name: "Contact", href: "/contact" },
                ].map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-[var(--color-copper)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg mb-4">Headquarters</h4>
              <address className="not-italic text-white/70 text-sm space-y-2">
                <p>Omladinska staza 2b</p>
                <p>Vrnjačka Banja, Serbia</p>
                <p className="pt-2">
                  <a
                    href="mailto:office@eeaa-alliance.com"
                    className="hover:text-[var(--color-copper)] transition-colors"
                  >
                    office@eeaa-alliance.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} European Economic Alliance for
                Cooperation with Asia. All rights reserved. Developed by{" "}
                <a
                  href="https://pixels2pixels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PIXELS2PIXELS
                </a>
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/founding-act"
                  className="text-white/50 text-sm hover:text-white/70 transition-colors"
                >
                  Legal
                </Link>
                <span className="text-white/30">|</span>
                <span className="text-white/50 text-sm">
                  Non-profit Association
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
