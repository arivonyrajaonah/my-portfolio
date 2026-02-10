import { motion } from "framer-motion";

const experiences = [
  {
    period: "Juil. 2024 — Aujourd'hui",
    title: "Ingénieur Systèmes & DevOps",
    company: "Groupe BASAN",
    location: "Antananarivo",
    tasks: [
      "Migration de la plateforme de paie vers une infrastructure modernisée",
      "Restauration des services IT post-cyberattaque (Active Directory, Exchange, DNS)",
      "Migration CI/CD de Jenkins vers GitLab CI avec ArgoCD",
      "Refonte du système de sauvegarde avec Veeam B&R et Dell PPDM",
      "Administration vSphere, stockage Dell PowerStore, monitoring Zabbix",
      "Gestion Active Directory, GPO et sécurité réseau",
    ],
  },
  {
    period: "Déc. 2023 — Mai 2024",
    title: "Ingénieur IT",
    company: "Groupe NextHope",
    location: "Antananarivo",
    tasks: [
      "Pipeline CI/CD et cluster Kubernetes pour le projet TicketPlace",
      "Mise en place de conteneurisation Docker et orchestration K8s",
      "Automatisation d'infrastructure avec Terraform et Ansible",
    ],
  },
  {
    period: "Juin — Nov. 2023",
    title: "Stagiaire Ingénieur IT",
    company: "Groupe NextHope",
    location: "Antananarivo",
    tasks: [
      "Remplacement de switches ToR pour un distributeur d'hydrocarbure",
      "Support infrastructure et réseau",
    ],
  },
  {
    period: "Mars — Mai 2021",
    title: "Stagiaire Admin Systèmes & Réseaux",
    company: "APMF",
    location: "Fianarantsoa",
    tasks: [
      "Administration systèmes et réseaux",
      "Support technique utilisateurs",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="py-24 px-6 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Expériences professionnelles
          </h2>
          <p className="text-muted-foreground mb-12">
            Mon parcours professionnel dans l'IT et le DevOps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="bg-card border border-border rounded-xl p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.company} — {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
