export const experience = [
    {
        company: "Postscriptions Inc.",
        years: "2021–Present",
        description:
            "Postscriptions https://postscriptions.ca is an online pharmacy I first prototyped in 2019. While my co-founder managed the pharmaceutical and regulatory aspects of the startup, I handled the technical requirements to fulfill our patients' and pharmacists' needs. By September of 2021 – with the goal of leading our stack to a comfortable level of maturity and autonomy – we had the vision, timeline and funding to permit me to pursue our venture full-time. We currently operate out of a location in Toronto, offering prescription delivery all over the GTA.",
        roles: [
            {
                title: "Founding Engineer, Chief Technical Officer",
                subtitle: "Full Stack Development",
                responsibilities: [
                    "Took ownership of technical business requirements including planning, implementation and release",
                    // "Accomplished goals by collaborating with designers and other engineers in a fast-paced startup environment",
                    "Designed and built iOS client application in Swift/SwiftUI, allowing patients to manage prescriptions and coordinate deliveries",
                    "Captured larger user base by migrating iOS app functionality to cross-platform SvelteKit web application",
                    "Built custom workflows and interfaces to allow pharmacists to automate common tasks",
                    "Maintained low operating costs by leveraging credits and free tiers offered by cloud providers",
                    "Reduced development and iteration cycles by migrating from prototype Java Spring backend to Golang and Node.js stack",
                    "Supplemented Google Cloud SQL with in-memory cache to reduce unnecessary accesses",
                    "Adapted to technical requirements and limitations relating to data storage laws with creative, cost-effective solutions",
                    "Supported self-hosted tools relating to pharmacy operations, both for our own security practices and for PIPEDA-compliance",
                    "Implemented login methods such as magic links, one-time codes, OAuth and WebAuthn to balance convenience and security",
                    "Developed notification system to reach out to patients over text message and email",
                    "Improved continuity in pharmacist-patient communication by integrating our text message service with our internal chat platform",
                ],
            },
        ],
    },
    {
        company: "Bell Canada",
        years: "2017–2021",
        description:
            "After graduating I was recruited by a fairly new Agile team at Bell to help deliver on an ambitious project with a tight, government-mandated deadline. In response to the CRTC's updates to the wireless code of conduct – which all telecommunications companies must follow – my team made sure Bell was the first in the country to meet the new requirements without delay, and we were recognized for our quick execution. All this was achieved while we implemented new features and phased out legacy system components, replacing them with a new microservice architecture supported by the geo-redundant infrastructure my team also built and managed. Later, I transferred to a remote, high-performance team responsible for Bell's rollout of 5G, where I supported our adoption of and migration to Kubernetes.",
        roles: [
            {
                title: "DevOps Engineer",
                subtitle: "Infrastructure & Pipeline Automation",
                responsibilities: [
                    "Supported a nationwide geo-redundant online charging systems (OCS) capable of withstanding sustained loads of upwards of 60 TPS",
                    "Sped up delivery iteration cycles by 1.5-2x by tracing blockers and performance hogs to enhance developer and QA experience",
                    "Gave presentations to directors and to other teams promoting organization-wide “open-source” development practices to reduce redundancy",
                    "Created and took ownership of several highly referenced team knowledge base pages documenting environment details and practices",
                    "Reduced incidence of errors and sped up deployments by developing multi-stage pipelines which run automated integration tests and deployments",
                    "Presented training sessions focused on development environments, automation and general productivity enhancements with tools such as tmux and vim",
                    "Independentely trialled, introduced and rolled out what would eventually become several of our team's key infrastructure and development tools",
                    // "Independentely trialled, introduced and rolled out what would eventually become several of our team's key infrastructure and development tools, including but not limited to Terraform and Portainer",
                    "Built and configured our team's first development Docker swarm, along with several staging environments",
                ],
            },
            {
                title: "Software Developer",
                subtitle: "Java Spring Development",
                responsibilities: [
                    // "Capacity & cost estimation project",
                    // "Pipeline templating project",
                    "Docker and Kubernetes (OpenShift) Ansible Terraform Jenkins, later GitLab CI Vagrant OpenStack Zabbix Graylog",
                    "Took charge in setting up automated development environment deployments ",
                    "Wrote and took ownership of deployment scripts for setting up development and production environments",
                    "Maintained scripts for production environment management",
                    "Worked with DBAs to automate geo-redundant MongoDB deployments",
                    "Collaborated with our RDBMS specialists and Mongo's on-site support team to optimize MongoDB deployments",
                    "Responsible for key project deliverables pertaining to infrastructure and deployment (Terraform, Ansible)",
                    "Created reproducible geo-redundant multi-node cluster deployments capable of supporting enormous streams of data.",
                    "Developed features within an Agile-managed microservice architecture ",
                    "Know design patterns, implemented a bunch of features with minimal guidance",
                    // "Developed a deep understanding of systems and was able to poke around to get the results we were looking for",
                    // "Wrote a lot of reconciliation scripts that are probably still there today",
                    // "Supported application deployments to Openshift and their integration",
                    // "Go-to person for handling development or deployment issues",
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