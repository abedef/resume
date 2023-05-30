export const experience = [
    {
        company: "Postscriptions Inc.",
        years: "2021–Present",
        description:
            "In my last semester of university, I began designing and prototyping an online delivery pharmacy solution with a long-time friend. While he managed the pharmaceutical and regulatory aspects of the startup, I handled our technical requirements and built a stack to fulfill our patients' and pharmacists' needs. By September of 2021 we had the vision, timeline and funding to allow me to pursue our venture full-time, with the goal of leading our operational stack to a comfortable level of maturity and autonomy. We currently operate out of a location in Toronto, offering prescription delivery all over the GTA.",
        roles: [
            {
                title: "Founding Engineer, Chief Technical Officer",
                subtitle: "Full Stack Development",
                responsibilities: [
                    "Took ownership of technical business requirements including planning, implementation and release",
                    // "Accomplished goals by collaborating with designers and other engineers in a fast-paced startup environment",
                    "Designed and built iOS client application in Swift/SwiftUI, allowing patients to manage prescriptions and coordinate deliveries",
                    "Captured larger user base by migrating iOS app functionality to cross-platform SvelteKit web application",
                    "Provided maximum control to pharmacists through custom web applications designed to queue and automate common tasks",
                    "Maintained low operating costs by leveraging credits and free tiers offered by cloud providers",
                    "Reduced development and iteration cycles by migrating from prototype Java Spring backend to Golang and Node.js stack",
                    "Supplemented Google Cloud SQL with in-memory cache to reduce unnecessary accesses",
                    "Adapted to technical requirements and limitations relating to data storage laws with creative, cost-effective solutions",
                    "Supported self-hosted tools relating to pharmacy operations, both for our own security practices and for PIPEDA-compliance",
                    "Implemented login methods such as magic links, one-time codes, OAuth and WebAuthn to balance convenience and security",
                    "Improved continuity in pharmacist-patient communication by integrating our text message service with our internal chat platform",
                    "Developed notification system to reach out to patients over text message and email",
                ],
            },
        ],
    },
    {
        company: "Bell Canada",
        years: "2017–2021",
        description:
            "After graduating I was recruited by a fairly new Agile team at Bell to help deliver on an ambitious project with a tight, government-mandated deadline. In response to the CRTC's updates to the wireless code of conduct – which all telecommunications companies must follow – my team made sure Bell was the first in the country to meet the new requirements without delay, and we were recognized for our quick execution. All this was achieved while we implemented new features and phased out legacy system components, replacing them with a new microservice architecture supported by the geo-redundant infrastructure my team also built and managed. I later transferred to a remote, high-performance team responsible for Bell's rollout of 5G, where I supported our adoption of and migration to Kubernetes.",
        roles: [
            {
                title: "Software Developer",
                subtitle: "Infrastructure & Pipeline Automation",
                responsibilities: [
                    "Supported a nationwide geo-redundant online charging systems (OCS) capable of withstanding sustained loads of upwards of 60 TPS",
                    "Sped up testing and delivery iteration cycles by 1.5-2x and enhanced developer and QA experience by tracing blockers and performance hogs",
                    "Gave presentations to my team of 50 and to company directors advocating for knowledge sharing and reduced redundancy by means of organization-wide “open-source” development practices",
                    "Created and took ownership of several highly referenced team knowledge base pages documenting key deployment environment details, best practices and troubleshooting steps",
                    "Reduce incidence of errors and rollbacks and sped up deployments by developing multi-stage pipelines which run automated integration tests and deployments",
                    "Presented knowledge-sharing talks and demos to my team on the topics of development environments, automation and general Linux productivity enhancements with tools such as tmux and vim",
                    "Took initiative to trial, introduce and roll out what eventually would be several key infrastructure and development tools, including but not limited to Terraform and Portainer",
                    "Built and configured our team's first development Docker swarm, along with several staging environments",
                ],
            },
            {
                title: "DevOps Engineer",
                subtitle: "DevOps and Java Spring Development",
                responsibilities: [
                    "Docker and Kubernetes (OpenShift) Ansible Terraform Jenkins, later GitLab CI Vagrant OpenStack Zabbix Graylog",
                    "Took charge in setting up automated development environment deployments ",
                    "Wrote and took ownership of deployment scripts for setting up development and production environments",
                    "Maintained scripts for production environment management",
                    "Worked with DBAs to automate geo-redundant MongoDB deployments",
                    "As well during my time at Bell I wrote a script which was a key project deliverable. It provided a Terraform template and Ansible playbook to deploy a geo-redundant multi-node cluster that would support enormous streams of data. Later, I collaborated with our RDBMS specialists and Mongo's on-site support team to optimize the deployments. This consisted of dozens of test deployments, experimenting with a number of our server's OS configurations (THP, security policies, hypervisor considerations).",
                    "Developed features within an Agile-managed microservice architecture ",
                    "Know design patterns, implemented a bunch of features with minimal guidance",
                    "Developed a deep understanding of systems and was able to poke around to get the results we were looking for",
                    "Wrote a lot of reconciliation scripts that are probably still there today",
                    "Supported application deployments to Openshift and their integration",
                    "Go-to person for handling development or deployment issues",
                ],
            },
        ],
    },
    {
        company: "University of Toronto",
        years: "2016–2017",
        roles: [
            {
                title: "Teaching Assistant",
                subtitle: "Introduction to Computer Science",
            },
        ],
    },
];