import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-purple-soft border-t border-purple-100">
      <div className="container px-4 md:px-6 py-16 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Hurri Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered website renovation. Transform your digital presence in minutes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Get Started</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-200 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Hurri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

