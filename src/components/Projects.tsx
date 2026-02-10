import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Shield, GitBranch, Database, Container, Network } from "lucide-react";

const projects = [
  {
    icon: Server,
    title: "Migration plateforme de paie",
    company: "Groupe BASAN",
    description:
      "Migration complète de la plateforme de paie vers une infrastructure modernisée avec haute disponibilité.",
    tags: ["vSphere", "Windows Server", "Active Directory"],
  },
  {
    icon: Shield,
    title: "Restauration post-cyberattaque",
    company: "Groupe BASAN",
    description:
      "Restauration des services IT critiques (AD, Exchange, DNS) suite à une cyberattaque majeure.",
    tags: ["Active Directory", "Exchange", "Sécurité"],
  },
  {
    icon: GitBranch,
    title: "Migration CI/CD Jenkins → GitLab CI",
    company: "Groupe BASAN",
    description:
      "Migration des pipelines CI/CD de Jenkins vers GitLab CI avec intégration ArgoCD pour le déploiement GitOps.",
    tags: ["GitLab CI", "ArgoCD", "GitOps"],
  },
  {
    icon: Database,
    title: "Refonte système de sauvegarde",
    company: "Groupe BASAN",
    description:
      "Refonte complète du système de sauvegarde avec Veeam Backup & Replication et Dell PPDM.",
    tags: ["Veeam B&R", "Dell PPDM", "PowerStore"],
  },
  {
    icon: Container,
    title: "Pipeline CI/CD & Cluster Kubernetes",
    company: "TicketPlace — NextHope",
    description:
      "Mise en place d'un pipeline CI/CD complet et d'un cluster Kubernetes pour l'application TicketPlace.",
    tags: ["Kubernetes", "Docker", "Terraform", "Jenkins"],
  },
  {
    icon: Network,
    title: "Remplacement switches ToR",
    company: "Distributeur hydrocarbure — NextHope",
    description:
      "Remplacement des switches Top-of-Rack pour un distributeur d'hydrocarbure avec migration réseau.",
    tags: ["Dell Switches", "VLAN", "Réseau"],
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Projets</h2>
          <p className="text-muted-foreground mb-12">
            Projets clés réalisés au cours de mon parcours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-2">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
