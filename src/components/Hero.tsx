import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center pt-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2 text-sm tracking-wide uppercase">
            Bonjour, je suis
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Rajaonah Mamy Sandratra
            <span className="block text-primary">(Arivony)</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Ingénieur DevOps & Systèmes
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Administrateur systèmes et DevOps avec 2 ans d'expérience dans la gestion
            d'infrastructures, l'automatisation CI/CD, la conteneurisation et
            l'orchestration Kubernetes en environnements on-premise et cloud.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:arivonyrajaonah@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              arivonyrajaonah@gmail.com
            </a>
            <a
              href="tel:+261341234567"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +261 34 05 839 24
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Antananarivo, Madagascar
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
              <img
                src={profilePhoto}
                alt="Arivony Rajaonah"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-primary/20 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
