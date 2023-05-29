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
            years: "2021 – Present",
            description:
                "Since my last semester of university, I spent my evenings and weekends designing and prototyping an online pharmacy solution with a friend from high school. While he managed the pharmacy and regulation side of things, I handled our technical requirements and built up a stack to fulfil our patients' needs. In September of 2021, we were well-off enough that I could afford to go full-time. This was a significant undertaking and one of my most difficult experiences, but I am glad I did it nonetheless. The project forced me to pick up many new skills including web and app development.",
            roles: [
                {
                    title: "Founding Engineer, Chief Technical Officer",
                    subtitle: "Full Stack Development",
                    responsibilities: [
                        "Online delivery pharmacy built with SvelteKit",
                        "Recently migrated from a Go API with a native iOS client",
                        "With over two years of experience building a custom online pharmacy solution, I have encountered many obstacles that come with this undertaking. Due to the nature of the data we work with, we are forced to rely on PIPEDA-compliant tools, or tools with self-hosted distributions that I can deploy and support locally. Additionally, we implemented password-less login via a variety of methods including magic links, one-time-code verification, OAuth and WebAuthn. Pharmacists communicate with patients through our custom portal, interfacing with our internal chat platform, and Twilio’s SMS and Email services for notification purposes.",
                        "due to the nature of the data we were working with, we relied mainly on tools with self-hosted versions and I supported those services",
                        "passwordless login (magic link, code verification, oauth, webauthn)",
                        "notifications (Twilio and SendGrid)",
                        "SMS messaging integration with Mattermost",
                        "Patients can view and manage their prescriptions or coordinate deliveries",
                        "SvelteKit, Go, Swift/SwiftUI, PostgreSQL, GCP",
                        "At this stage our application is supported by a Go API with a native iOS client, and web app written in Svelte. Patients can view and manage their prescriptions, and coordinate deliveries. Features passwordless login via SMS or email, implemented from scratch with Twilio's APIs.",
                        "co-founded an online pharmacy and took ownership of the technical side of the business, interfacing with designers and other engineers to accomplish our goals in a fast-paced startup environment with a focus on keeping GCP operating costs to a minimum ",
                        "Technical requirements to build up a stack to fulfil our patients' needs",
                        "Created prototype API in Java Spring and eventually transitioned to Go to make use of fast build and deploy times, and supports a tier on GCP that makes things cheap for us",
                        "Built front end app in iOS SwiftUI",
                        "Built back end management app for pharmacists in Svelte",
                        "Migrated to full SvelteKit backend, lighter and cheaper",
                    ],
                },
            ],
        },
        {
            company: "Bell Canada",
            years: "2017 – 2021",
            description:
                "After graduating I was recruited by a small and fairly new Agile team at Bell that was set to deliver on an ambitious project with a tight, government-mandated deadline. In response to the CRTC's updates to the wireless code of conduct – which all telecommunications companies must follow – my team at Bell succeeded in being the first to implement the new requirements without delay. All this was achieved by swapping out components of our legacy system with a new microservice architecture, supported by the geo-redundant infrastructure we built and managed. Later, I transferred to a team responsible for the rollout of 5G onto Bell's network, where I supported our Kubernetes environments and eliminated blockers in a high performance remote team setting.",
            roles: [
                {
                    title: "Software Developer",
                    subtitle: "Infrastructure & Pipeline Automation",
                    responsibilities: [
                        "Supported high redundancy charging systems for a nationwide telecommunications company withstanding high TPS",
                        "Shortened testing and delivery iteration cycles by tracing blockers and performance hogs to enhance developer and QA experience",
                        "Presented a talk to my team and to our directors to advocate for knowledge sharing and reduced redundancy by means of organization-wide “open-source” development practices",
                        "Troubleshooted development and production environment issues, providing technical support where required, and documenting fixes and best practices in our team’s shared knowledge base",
                        "Independently introduced, trialed and rolled out what would eventually be several key infrastructure and development tools (i.e. Terraform, Portainer)",

                        "Know design patterns, implemented a bunch of features with minimal guidance",
                        "Wrote a lot of reconciliation scripts that are probably still there today",
                        "Supported application deployments to Openshift and their integration",

                        "Minimized human error and sped up deployments by developing multi-stage pipelines which can run automated integration tests and deploy to any environment",
                        "Gave knowledge-sharing talks and demos to my team on the topics of development environments, automation and general Linux productivity enhancements with tools such as tmux and vim",
                    ],
                },
                {
                    title: "DevOps Engineer",
                    subtitle: "DevOps and Java Spring Development",
                    responsibilities: [
                        "Built and configured first development Docker swarm",
                        "Built multiple QA and production environments (Ansible, Terraform)",
                        "I introduced (or was instrumental in the adoption of) a number of tools to the team's stack, from which I can proudly say several still remain foundational to the team's infrastructure (i.e. Terraform, Portainer, GitLab CI).",
                        "Docker and Kubernetes (OpenShift) Ansible Terraform Jenkins, later GitLab CI Vagrant OpenStack Zabbix Graylog",
                        "Took charge in setting up automated development environment deployments ",
                        "Wrote and took ownership of deployment scripts for setting up development and production environments",
                        "Maintained scripts for production environment management",
                        "Worked with DBAs to automate geo-redundant MongoDB deployments",
                        "As well during my time at Bell I wrote a script which was a key project deliverable. It provided a Terraform template and Ansible playbook to deploy a geo-redundant multi-node cluster that would support enormous streams of data. Later, I collaborated with our RDBMS specialists and Mongo's on-site support team to optimize the deployments. This consisted of dozens of test deployments, experimenting with a number of our server's OS configurations (THP, security policies, hypervisor considerations).",
                        "Developed features within an Agile-managed microservice architecture ",
                    ],
                },
            ],
        },
        {
            company: "University of Toronto",
            years: "2016 – 2017",
            roles: [
                {
                    title: "Teaching Assistant",
                    subtitle: "Introduction to Computer Science",
                },
            ],
        },
    ];

    let skills = [
        "Server administration: comfortable using Linux environment as a daily driver",
        "Web: Javascript, Typescript, HTML/CSS; building Svelte/SvelteKit applications",
        "Functional programming: Racket, Elm",
        "Scripting: Python, Ruby",
        "Systems programming: Go, Java, Rust",
        "Other programming: Swift; building interfaces with SwiftUI",
        "Databases: PostgreSQL; setting up and optimizing MongoDB clusters",
        "Automation tools: Ansible, Jenkins, Gitlab CI/CD",
        "Infrastructure tools: Docker, Packer, Vagrant, Terraform, HAProxy, Nginx, Traefik",
        "Cloud providers and hypervisors: Openshift, Openstack, Google Cloud (GCP)",
        "Operating systems: comfortable using Linux, Windows and macOS as a daily driver",
        "User interface design and development",
        "Creative coding, graphics programming and game engine architecture",
        "In a personal capacity, I enjoy coding and am usually hacking away at a few side projects at any given time, which I occasionally showcase on my Github/GitLab. I like to explore new frameworks and languages and am always excited to add a new language to my tool belt.",
        "In terms of hobbies, since I was first taught to set up and use SSH, I have been maintaining a number of home servers for the purpose of supporting self-hosted services. Although my first few servers' OS is Canonical's Ubuntu, I prefer Arch Linux for personal use. Some of my favourite self-hosted tools are MinIO and Proxmox, which I make generous use of in my personal projects.",
        "Know my way around the command line and have set up enough Linux machines and Hackintoshes to feel comfortable",
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
        <p>
            Cloud software & infrastructure specialist with 5+ years of
            experience developing, deploying and maintaining large microservice
            systems in telecommunications and telehealth.
        </p>
    </div>
</section>

<!-- TODO: Include "I am comfortable working with XYZ languages..." -->

<section>
    <h3>Experience</h3>
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
            <h3>2014 – 2019</h3>
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
            >. In the meantime, I was able to pinpoint the erroneous code and
            submit a fix that handled my use-case. Though my particular fix
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
        built <a href="https://github.com/abedef/resume"><span>✨</span> from scratch <span>✨</span></a> with
        <a href="https://svelte.dev">Svelte</a>
        and hosted with <a href="https://pages.github.com">GitHub Pages</a>
    </p>
</footer>

<style>
    header {
        display: flex;
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

    @media (max-width: 700px) {
        section > h3 {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            min-width: unset;
        }
    }

    @media (max-width: 620px) {
        #coursework {
            column-count: 1;
        }
    }
</style>
