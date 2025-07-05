import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Leaf
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#' },
    { name: 'Nos solutions', href: '#' },
    { name: 'Partenariats', href: '#' },
    { name: 'Incubateur Agritech', href: '#' },
    { name: 'Nous contacter', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold">KijaniLab</h3>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Startup dédiée à la transformation digitale de l'agriculture africaine. 
              Nous développons des solutions technologiques, formons les acteurs du secteur, 
              et accompagnons les projets innovants en agro-tech.
            </p>
            <div className="flex items-center space-x-2 text-green-200">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Bénin 🇧🇯</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-300">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-green-100">
                <Mail className="h-4 w-4 text-green-400" />
                <a href="mailto:contact@kijanilab.com" className="text-sm hover:text-green-300 transition-colors">
                  contact@kijanilab.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-green-100">
                <Phone className="h-4 w-4 text-green-400" />
                <div className="text-sm">
                  <div>+229 67 65 97 17</div>
                  <div>+229 47 14 61 61</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-green-100">
                <Globe className="h-4 w-4 text-green-400" />
                <a href="https://www.kijanilab.com" className="text-sm hover:text-green-300 transition-colors">
                  www.kijanilab.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-300">Liens rapides</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-sm text-green-100 hover:text-green-300 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-300">Suivez-nous</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-green-200 ${social.color} transition-all duration-200 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-green-800/50 rounded-lg border border-green-700">
              <p className="text-sm text-green-200 font-medium">
                🌱 Transformons l'agriculture africaine ensemble
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 bg-green-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-green-200">
              © 2024 KijaniLab. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-200 hover:text-green-300 transition-colors">
                Mentions légales
              </a>
              <span className="text-green-600">•</span>
              <a href="#" className="text-green-200 hover:text-green-300 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;