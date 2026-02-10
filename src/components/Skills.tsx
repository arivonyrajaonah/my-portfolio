import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "DevOps & Conteneurisation",
    skills: ["Kubernetes", "Docker", "Terraform", "Ansible", "Helm", "Powershell", "Python", "Bash"],
  },
  {
    title: "CI/CD & GitOps",
    skills: ["Jenkins", "GitLab CI", "ArgoCD", "Git", "GitHub Actions"],
  },
  {
    title: "Systèmes",
    skills: ["Windows Server", "Linux (Ubuntu, CentOS, Rocky)", "Active Directory", "DNS", "DHCP", "GPO"],
  },
  {
    title: "Infrastructure & Cloud",
    skills: ["VMware vSphere", "VMware Tanzu", "OVHcloud", "Oracle Cloud (OCI)", "Proxmox"],
  },
  {
    title: "Stockage & Sauvegarde",
    skills: ["Dell PowerStore", "Dell PPDM", "Veeam B&R", "NAS Synology"],
  },
  {
    title: "Réseaux & Monitoring",
    skills: ["TCP/IP", "VLAN", "Cisco", "Dell Switches", "Zabbix", "Grafana", "Prometheus"],
  },
];

const Skills = () => {
  return (
    <section id="competences" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Compétences</h2>
          <p className="text-muted-foreground mb-12">
            Technologies et outils que je maîtrise au quotidien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
