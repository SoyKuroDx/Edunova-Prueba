import { useState, useEffect } from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Clock,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bus,
  Handshake,
  Timer,
  Sprout,
  Dumbbell,
  Lock,
  GraduationCap,
  Globe
} from 'lucide-react';

import footerImg from './assets/footer.png';
import logoImg from './assets/logo.png';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Educación del Presente',
      subtitle: 'Que Forma tu Futuro',
      description: 'Instituto EDUNOVA'
    },
    {
      image: 'https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Excelencia Académica',
      subtitle: 'En todos los Niveles',
      description: 'Preescolar a Bachillerato'
    },
    {
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Sistema Bilingüe',
      subtitle: 'Certificado AMCO',
      description: 'Preparando líderes globales'
    },
    {
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Tecnología Educativa',
      subtitle: 'Instalaciones Modernas',
      description: 'Aprendizaje del siglo XXI'
    },
    {
      image: 'https://images.pexels.com/photos/8923128/pexels-photo-8923128.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Desarrollo Integral',
      subtitle: 'Más que Académico',
      description: 'Formación en valores'
    }
  ];

  const services = [
    {
      icon: Bus,
      title: 'Transporte Privado',
      description: 'Nuestro transporte garantiza el traslado seguro de nuestros alumnos desde su hogar hasta nuestras instalaciones y viceversa.'
    },
    {
      icon: Handshake,
      title: 'Alianzas Comerciales',
      description: 'Nuestros socios estratégicos nos permiten ofrecer una gran variedad de servicios adicionales a nuestros alumnos.'
    },
    {
      icon: Timer,
      title: 'Horario Extendido',
      description: 'Los alumnos que así lo requieran, pueden permanecer dentro de las instalaciones después de clases.'
    },
    {
      icon: Sprout,
      title: 'Huerto Escolar',
      description: 'Fomentamos el contacto con la naturaleza y estudiamos el crecimiento y desarrollo a través de las plantas.'
    },
    {
      icon: Dumbbell,
      title: 'Academias Extras',
      description: 'Todos nuestros alumnos gozan de una academia incluida en su colegiatura para fomentar un estilo de vida sano.'
    },
    {
      icon: Lock,
      title: 'Renta de Lockers',
      description: 'Este servicio ayuda a organizar mejor los libros. Disponible en el Instituto EDUNOVA.'
    },
    {
      icon: GraduationCap,
      title: 'Becas',
      description: 'El fomento a la educación es primordial; nuestras becas muestran el compromiso con nuestros alumnos.'
    },
    {
      icon: Globe,
      title: 'Sistema Bilingüe',
      description: 'En Edunova contamos con un modelo educativo bilingüe con tres características clave.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div
        className={`bg-gray-50 border-b border-gray-200 transition-all duration-300 ${isTopBarVisible ? 'translate-y-0' : '-translate-y-full'
          } fixed top-0 left-0 right-0 z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Instagram size={18} />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <span>477 7 70 11 30 / 477 7 70 11 45</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>admisiones@edunova.com.mx</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-600" />
                <span>Lun-Vie 8:00-16:00</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a href="#" className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all font-medium text-sm">
                AMCO
              </a>
              <a href="#" className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-700 hover:to-red-800 transition-all font-medium text-sm">
                Admisiones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header/Navbar */}
      <header className={`bg-white shadow-md sticky ${isTopBarVisible ? 'top-[56px]' : 'top-0'} z-40 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="EDUNOVA Logo"
                className="w-48 h-12 object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold relative group transition-colors">
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>

              <div className="relative group">
                <button className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
                  Oferta Educativa
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg">Preescolar</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Primaria</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Secundaria</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors last:rounded-b-lg">Bachillerato</a>
                </div>
              </div>

              <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold relative group transition-colors">
                Cursos de Verano
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold relative group transition-colors">
                Galería
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold relative group transition-colors">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-800"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <nav className="flex flex-col gap-2">
              <a href="#" className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">Inicio</a>
              <div className="px-4 py-2 text-gray-800">
                <div className="font-semibold mb-2">Oferta Educativa</div>
                <div className="pl-4 flex flex-col gap-1">
                  <a href="#" className="py-1 text-gray-700 hover:text-blue-600 transition-colors">Preescolar</a>
                  <a href="#" className="py-1 text-gray-700 hover:text-blue-600 transition-colors">Primaria</a>
                  <a href="#" className="py-1 text-gray-700 hover:text-blue-600 transition-colors">Secundaria</a>
                  <a href="#" className="py-1 text-gray-700 hover:text-blue-600 transition-colors">Bachillerato</a>
                </div>
              </div>
              <a href="#" className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">Cursos de Verano</a>
              <a href="#" className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">Galería</a>
              <a href="#" className="px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <div className="relative h-[70vh] overflow-hidden bg-gray-900">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent"></div>

              {/* Animated Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center text-white max-w-4xl">
                  <div
                    className={`transition-all duration-1000 ${currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                      }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                  </div>

                  <div
                    className={`transition-all duration-1000 ${currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                      }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-red-400">
                      {slide.subtitle}
                    </h2>
                  </div>

                  <div
                    className={`transition-all duration-1000 ${currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                      }`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <p className="text-xl md:text-2xl text-gray-200">
                      {slide.description}
                    </p>
                  </div>

                  <div
                    className={`mt-8 transition-all duration-1000 ${currentSlide === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                      }`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    <a
                      href="#servicios"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                    >
                      Conoce Más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all hover:scale-110"
        >
          <ChevronLeft className="text-white" size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all hover:scale-110"
        >
          <ChevronRight className="text-white" size={32} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${currentSlide === index
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="section-badge">Nuestros Servicios</div>
            <p className="text-gray-600 text-lg mt-6">Servicios diseñados para el desarrollo integral de nuestros alumnos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Barra superior animada */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-red-600 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>

                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-badge">Nuestra Ubicación</div>
            <div className="flex items-center justify-center gap-2 text-gray-600 mt-6">
              <MapPin className="text-blue-600" size={20} />
              <p className="text-lg">Juárez 2103, La Luz, C.P. 37458, León, Gto.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=21.114379084182553,-101.68684752581626&hl=es&z=17&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center">
                <img
                  src={footerImg}
                  alt="EDUNOVA Footer"
                  className="w-48 h-12 object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Educación del presente que forma tu futuro
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Juárez 2103, La Luz, C.P. 37458<br />León, Gto.</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} className="text-blue-400 flex-shrink-0" />
                  <span>477 7 70 11 30 / 45</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} className="text-blue-400 flex-shrink-0" />
                  <span>admisiones@edunova.com.mx</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Horarios</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Lunes a Viernes: 8:00 - 16:00</p>
                <p>Sábados: 10:00 - 14:00</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociales</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="font-semibold text-white mb-2">INSTITUTO EDUNOVA – EDUCACIÓN DEL PRESENTE QUE FORMA TU FUTURO</p>
            <p>© {new Date().getFullYear()} Derechos Reservados</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;
