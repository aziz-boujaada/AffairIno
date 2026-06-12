export function Footer() {
  return (
    <footer className="bg-muted/30 text-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-6 group">
              <div 
                className="h-10 w-48 bg-accent group-hover:bg-accent-dark transition-colors"
                style={{
                  maskImage: "url('https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/AFFAIRINO_LOGO_pgvlii')",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "left center",
                  WebkitMaskImage: "url('https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/AFFAIRINO_LOGO_pgvlii')",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "left center"
                }}
              />
            </a>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
              Cabinet de communication, marketing, affaires publiques et leadership.
              Construire des marques fortes, valoriser les institutions et créer un impact durable.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">Menu</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-accent transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">À Propos</a></li>
              <li><a href="#expertise" className="text-muted-foreground hover:text-accent transition-colors">Expertise</a></li>
              <li><a href="#methodology" className="text-muted-foreground hover:text-accent transition-colors">Méthodologie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-foreground">Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} AFFAIRINO. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <span>Communication</span>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>Influence</span>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>Leadership</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
