
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/favicon.png"
                alt="Murer Slagelse Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-montserrat font-bold text-xl">
                Murer Slagelse
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professionel murermester i Slagelse med speciale i facaderenovering, 
              badeværelser og flisearbejde. Vi leverer altid kvalitet til tiden.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-terracotta" />
                <a href={`tel:${PHONE_LINK}`} className="hover:text-terracotta transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-terracotta" />
                        <a href="mailto:infomurerslagelse@gmail.com" className="hover:text-terracotta transition-colors">
          infomurerslagelse@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>Slagelse, Sjælland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Hurtiglinks</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-terracotta transition-colors">Forside</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-terracotta transition-colors">Services</Link></li>
              <li><Link to="/services/facaderenovering" className="text-gray-300 hover:text-terracotta transition-colors">Facaderenovering</Link></li>
              <li><Link to="/services/badevaerelsesrenovering" className="text-gray-300 hover:text-terracotta transition-colors">Badeværelsesrenovering</Link></li>
              <li><Link to="/services/flisearbejde" className="text-gray-300 hover:text-terracotta transition-colors">Flisearbejde</Link></li>
              <li><Link to="/kontakt" className="text-gray-300 hover:text-terracotta transition-colors">Kontakt</Link></li>
              <li><Link to="/politik" className="text-gray-300 hover:text-terracotta transition-colors">Privatliv &amp; Cookies</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Murværk</span></li>
              <li><span className="text-gray-300">Flisearbejde</span></li>
              <li><span className="text-gray-300">Facaderenovering</span></li>
              <li><span className="text-gray-300">Tilbygninger</span></li>
              <li><span className="text-gray-300">Reparationer</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Murer Slagelse. Alle rettigheder forbeholdes.
            </p>
            {/* Removed privacy & cookies links as requested */}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-xs text-center">
              murerslagelse.dk formidler kontakt til autoriserede murermestre i Slagelse. 
              Vi udfører ikke selv murerarbejde.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
