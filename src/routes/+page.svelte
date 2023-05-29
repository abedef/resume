<script lang="ts">
    let courses = [
        { code: "CSC209", name: "Software Tools and Systems Programming" },
        { code: "CSC236", name: "Introduction to the Theory of Computation" },
        { code: "CSC258", name: "Computer Organization" },
        { code: "CSC263", name: "Data Structures and Analysis" },
        { code: "CSC300", name: "Computers and Society" },
        { code: "CSC301", name: "Introduction to Software Engineering" },
        { code: "CSC302", name: "Engineering Large Software Systems" },
        { code: "CSC309", name: "Programming on the Web" },
        { code: "CSC318", name: "Design of Interactive Computational Media" },
        { code: "CSC324", name: "Programming Languages" },
        { code: "CSC343", name: "Introduction to Databases" },
        { code: "CSC369", name: "Operating Systems" },
        { code: "CSC373", name: "Algorithm Design, Analysis and Complexity" },
        { code: "CSC384", name: "Introduction to Artificial Intelligence" },
        { code: "CSC401", name: "Natural Language Computing" },
        { code: "CSC404", name: "Video Game Design" },
        { code: "CSC418", name: "Computer Graphics (Audited)" },
        { code: "CSC458", name: "Computer Networking Systems" },
        { code: "CSC469", name: "Advanced Operating Systems (Audited)" },
        { code: "CSC488", name: "Compilers and Interpreters" },
    ];

    let experience = [
        {
            company: "Postscriptions Inc.",
            years: "2021–Present",
            description:
                "In my last semester of university, I began designing and prototyping an online delivery pharmacy solution with a long-time friend. While he managed the pharmacy and regulatory side of business, I handled our technical requirements and built a stack to fulfill our patients' needs. By September of 2021 we had the vision, timeline and funding to allow me to pursue our venture full-time, with the end goal of leading our operational stack to a comfortable level of maturity and autonomy. At this point in time we operate out of a location in Toronto, offering prescription delivery all over the GTA.",
            roles: [
                {
                    title: "Founding Engineer, Chief Technical Officer",
                    subtitle: "Full Stack Development",
                    responsibilities: [
                        "Took ownership of technical business requirements including planning, implementation and release",
                        "Accomplished goals by collaborating with designers and other engineers in a fast-paced startup environment",
                        "Designed and built iOS client application in Swift/SwiftUI, allowing patients to manage prescriptions and coordinate deliveries",
                        "Captured larger user base by migrating iOS app functionality to cross-platform SvelteKit web application",
                        "Provided maximum control to pharmacists through custom web applications designed to queue and automate common tasks",
                        "Kept operating costs at a minimum by leveraging credits and free tiers offered by cloud providers such as AWS and GCP",
                        "Reduced development and iteration cycles by migrating from the prototype Java Spring backend to a Golang and Node.js stack",
                        "Adapted to technical requirements and limitations relating to data storage laws with creative, cost-effective solutions",
                        "Supported self-hosted tools relating to pharmacy operations, both for our own security practices and for PIPEDA-compliance",
                        "Implemented login methods balancing convenience and security such as magic links, one-time codes, OAuth and WebAuthn",
                        "Improved continuity in pharmacist-patient communication by integrating our text message service with our internal chat platform",
                        "Developed notification system to reach out to patients over text message and email",
                        "Interfaced with Google Cloud SQL PostgreSQL instance, along with in-memory cache to reduce accesses",
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
                        "Supported a nationwide telecommunications company's geo-redundant charging systems capable of withstanding sustained loads of upwards of 60 TPS",
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

    let skills = [
        "Web development: Javascript, Typescript, HTML/CSS; building Svelte applications",
        "Scripting languages: Python, Ruby",
        "Systems programming languages: Go, Java, C/C++, Rust",
        "Functional programming languages: Racket, Elm",
        "Other programming languages: Swift; building interfaces with SwiftUI",
        "Databases: PostgreSQL, PocketBase; setting up and optimizing MongoDB clusters",
        "Automation tools: Ansible, Jenkins, Gitlab CI/CD",
        "Infrastructure tools: Docker, Packer, Vagrant, Terraform, HAProxy, Nginx, Traefik",
        "Cloud providers and hypervisors: Openshift, Openstack, Google Cloud (GCP)",
        "Operating systems: comfortable using, maintaining and troubleshooting Unix-based environments (Linux, macOS)",
        "User interface design and development",
        "Creative coding, graphics programming and game engine architecture",
        "Quick to pick up new frameworks and languages",
        "Home server administration (self-hosted services, build servers, chat bots)",
        "Languages: English, Arabic, Russian",
    ];
</script>

<svelte:head>
    <title>Resume | Abed Fayyad</title>
</svelte:head>

<header>
    <div id="header-left">
        <div>
            <a href="mailto:Abed <hello@abedef.ca>">hello@abedef.ca</a>
        </div>
        <div>
            <a href="tel:+1 (416) 452-1467">+1 (416) 452-1467</a>
        </div>
    </div>

    <div id="header-center">
        <h1>Abed Fayyad</h1>
    </div>

    <div id="header-right">
        <div>
            <a href="https://gitlab.com/abed">gitlab.com/abed</a>
        </div>
        <div>
            <a href="https://github.com/abedef">github.com/abedef</a>
        </div>
    </div>
</header>

<section>
    <h3>Summary</h3>
    <div>
        <p class="summary">
            Cloud software & infrastructure specialist with 5+ years of
            experience developing, deploying and maintaining large microservice
            systems in telecommunications and telehealth.
        </p>
    </div>
</section>

<!-- TODO: Include "I am comfortable working with XYZ languages..." -->

<section>
    <h3>
        Experience <h3 style="color: #00000000; position: absolute">
            Work History
        </h3>
    </h3>
    <div>
        {#each experience as gig}
            <div class="company">
                <h3 class="company-name">{gig.company}</h3>
                <h3 class="years">{gig.years}</h3>
            </div>
            {#if "description" in gig}
                <p class="company-description">{gig.description}</p>
            {/if}

            {#each gig.roles as role}
                <div class="role">
                    <h4>{role.title}</h4>
                    <em>{role.subtitle}</em>
                </div>

                {#if "responsibilities" in role}
                    <ul class="responsibilities">
                        {#each role.responsibilities as responsibility}
                            <li>{responsibility}</li>
                        {/each}
                    </ul>
                {/if}
            {/each}
        {/each}
    </div>
</section>

<section>
    <h3>Skills</h3>
    <div>
        <ul>
            {#each skills as skill}
                <li>{skill}</li>
            {/each}
        </ul>
    </div>
</section>

<section>
    <h3>Education</h3>
    <div>
        <div class="company">
            <h3>University of Toronto</h3>
            <h3>2014–2019</h3>
        </div>

        <div class="role">
            <h4>Honours Bachelor of Science (HBSc) with Distinction</h4>
            <em>Computer Science Specialist Program</em>
        </div>

        <ul id="coursework">
            {#each courses as course}
                <li>{course.code} <em>{course.name}</em></li>
            {/each}
        </ul>
    </div>
</section>

<section>
    <h3>Open Source Contribution</h3>
    <div>
        <div class="company">
            <h3>Ansible</h3>
        </div>

        <p class="company-description">
            During my time at Bell, our team made heavy use of automation tools
            like Red Hat's Ansible. During one of our runs, the tool misbehaved
            in a consistent way, so I opened an issue <a
                href="https://github.com/ansible/ansible/issues/32906">[1]</a
            >. In the meantime, I was able to pinpoint the code responsible for
            the problem and submit a fix that handled my use-case. Though my
            particular fix
            <a href="https://github.com/ansible/ansible/pull/32909">[2]</a> was not
            merged, my report was acknowledged and a similar fix was employed.
        </p>

        <div class="company">
            <h3>Lockwise</h3>
        </div>

        <p class="oss-description">
            I tracked down a user interface bug in Mozilla's iOS password
            manager app, Lockwise, and submitted a fix <a
                href="https://github.com/mozilla-lockwise/lockwise-ios/pull/1102"
                >[3]</a
            >
            which <em>was</em> merged!
        </p>
    </div>
</section>

<section>
    <h3 />
    <div>
        <ul class="links">
            <li>[1] https://github.com/ansible/ansible/issues/32906</li>
            <li>[2] https://github.com/ansible/ansible/pull/32909</li>
            <li>
                [3] https://github.com/mozilla-lockwise/lockwise-ios/pull/1102
            </li>
        </ul>
    </div>
</section>

<footer>
    <p>
        built <a href="https://github.com/abedef/resume"
            ><span>✨</span> from scratch <span>✨</span></a
        >
        with
        <a href="https://svelte.dev">Svelte</a>
        and hosted with <a href="https://pages.github.com">GitHub Pages</a>
    </p>
</footer>

<style>
    header {
        display: flex;
        align-items: end;
    }

    header > * {
        flex: 1;
    }

    footer > p {
        color: #ddd;
    }

    footer > p > a {
        text-decoration: none;
        color: currentColor;
    }

    header,
    section,
    footer {
        max-width: 50rem;
        margin: 0 auto;
    }

    section {
        display: flex;
        margin-top: 1rem;
    }

    section > h3 {
        min-width: 7rem;
        max-width: 7rem;
        color: #ddd;
    }

    section > div {
        flex: 1;
    }

    div.company {
        display: flex;
        justify-content: space-between;
    }

    h3.years {
        flex: 1;
    }

    div.role {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3.years,
    div.role > em {
        text-align: end;
    }

    footer {
        text-align: center;
    }

    ul.links {
        list-style: none;
        text-align: start;
        padding-left: 0;
        margin-bottom: 1rem;
    }

    header a {
        text-decoration: none;
        color: currentColor;
    }

    p,
    h1,
    h2,
    h3,
    h4 {
        margin: 0;
    }

    p.company-description {
        margin-bottom: 1rem;
        text-align: justify;
    }

    p.oss-description {
        text-align: justify;
    }

    p.summary {
        text-align: justify;
    }

    ul {
        margin: 0;
        padding-left: 1rem;
    }

    ul.responsibilities {
        margin: 0;
        margin-bottom: 1rem;
    }

    #header-center {
        text-align: center;
    }

    #header-right {
        text-align: right;
    }

    #coursework {
        column-count: 2;
    }

    .role > em,
    .role > h4 {
        font-size: 0.9rem;
    }

    p,
    ul,
    header > div {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 700px) {
        section > h3 {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            min-width: unset;
        }
    }

    @media screen and (max-width: 620px) {
        #coursework {
            column-count: 1;
        }
    }
</style>
