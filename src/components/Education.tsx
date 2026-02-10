import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    year: "2025",
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    org: "Oracle",
  },
  {
    year: "2024",
    title: "VMware Tanzu Kubernetes Grid 2.0",
    org: "VMware",
  },
];

const education = [
  {
    period: "2021 — 2023",
    title: "Master en Informatique",
    school: "ENI — École Nationale d'Informatique",
    location: "Fianarantsoa",
  },
  {
    period: "2018 — 2021",
    title: "Licence en Informatique",
    school: "ENI — École Nationale d'Informatique",
    location: "Fianarantsoa",
  },
];

const Education = () => {
  return (
    <section id="formation" className="py-24 px-6 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Formation & Certifications
          </h2>
          <p className="text-muted-foreground mb-12">
            Mon parcours académique et mes certifications professionnelles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <span className="text-xs text-primary font-medium">
                    {cert.year}
                  </span>
                  <h4 className="font-medium text-foreground mt-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              Diplômes
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <span className="text-xs text-primary font-medium">
                    {edu.period}
                  </span>
                  <h4 className="font-medium text-foreground mt-1">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.school} — {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
