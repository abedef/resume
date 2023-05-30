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
        {
            title: "Web development:",
            body: "Javascript, Typescript, HTML/CSS; Svelte applications",
        },
        { title: "Scripting languages:", body: "Python, Ruby" },
        {
            title: "Systems programming languages:",
            body: "Go, Java, C/C++, Rust",
        },
        { title: "Functional programming languages:", body: "Racket, Elm" },
        {
            title: "Other programming languages:",
            body: "Swift, SwiftUI; user interface design",
        },
        {
            title: "Databases:",
            body: "PostgreSQL, MongoDB, Supabase, PocketBase, Cloud SQL",
        },
        { title: "Automation tools:", body: "Ansible, Jenkins, Gitlab CI/CD" },
        {
            title: "Infrastructure tools:",
            body: "Docker, Packer, Vagrant, Terraform",
        },
        {
            title: "Networking tools:",
            body: "HAProxy, Nginx, Traefik",
        },
        {
            title: "Cloud providers and hypervisors:",
            body: "Openshift, Openstack, Google Cloud (GCP)",
        },
        {
            title: "Operating systems:",
            body: "proficient in using/maintaining/troubleshooting Unix-based environments (Linux, macOS)",
        },
        {
            title: "Linux server administration:",
            body: "self-hosting CI runners, build servers, chat bots",
        },
        { title: "Languages:", body: "English, Arabic, Russian" },
        // { body: "Quick to pick up new frameworks and programming languages" },
        // { body: "Creative coding, graphics programming and game engine architecture", },
    ];

    let summary =
        "Cloud software & infrastructure specialist with 5+ years of experience developing, deploying and maintaining large microservice systems in telecommunications and telehealth. I am a self-starter with a demonstrated history of initiative and communication skills who thrives in collaborative environments. Looking for opportunities to broaden my knowledge and apply my experience while solving interesting problems.";

    let links: string[] = [];

    function addLink(url: string) {
        let reference = links.length + 1;

        links.push(url);

        return reference;
    }
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

<!-- FIXME: Enclosing contents with <article> tag makes reader view display each section correctly -->

<article>
    <section>
        <h3>Summary</h3>
        <div>
            <p class="summary">{summary}</p>
        </div>
    </section>

    <section>
        <h3>Skills</h3>
        <div>
            <ul class="skills">
                {#each skills as skill}
                    <li>
                        {#if "title" in skill}
                            <strong>{skill.title}</strong>
                        {/if}
                        {skill.body}
                    </li>
                {/each}
            </ul>
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
        <h3>Open Source Projects</h3>
        <div>
            <div class="company">
                <h3>Ansible</h3>
            </div>

            <p class="company-description">
                During my time at Bell, our team made heavy use of automation
                tools like Red Hat's Ansible. During one of our runs, the tool
                misbehaved in a consistent way, so I opened an issue [{addLink(
                    "https://github.com/ansible/ansible/issues/32906"
                )}] outlining the problem. In the meantime, I was able to
                pinpoint the code responsible for the problem and submit a fix
                that handled my use-case. Though my particular fix [{addLink(
                    "https://github.com/ansible/ansible/pull/32909"
                )}] was not merged, my report was acknowledged and a similar fix
                was employed.
            </p>

            <div class="company">
                <h3>Lockwise</h3>
            </div>

            <p class="company-description">
                I tracked down a user interface bug in Mozilla's iOS password
                manager app, Lockwise, and submitted a fix [{addLink(
                    "https://github.com/mozilla-lockwise/lockwise-ios/pull/1102"
                )}] which <em>was</em> merged!
            </p>

            <div class="company">
                <h3>boop [{addLink("https://github.com/abedef/boop-go")}]</h3>
            </div>

            <p class="company-description">
                An experimental information capture and recall system I created
                as an open-source alternative to a commercial product with
                similar offerings [{addLink("https://www.tatatap.com")}].
                Annotated text-based submissions (called <em>boop</em>s) are
                transmitted to the system over web interface, SMS, or email (or,
                just for fun: over DNS) and indexed, providing lightning-fast
                information storage and retrieval.
            </p>

            <div class="company">
                <h3>Passkey-based authentication</h3>
            </div>

            <p class="company-description">
                I have taken a keen interest in WebAuthn – the new-ish standard
                for logins on the web – and have implemented my own passkey
                authentication [{addLink("https://genieindex.ca")}] in Go and
                Javascript for various services I manage for friends and family.
                My current goal is to bring native passkey authentication
                support to backend frameworks such as PocketBase, which
                currently only supports popular login methods such as email and
                OAuth.
            </p>

            <div class="company">
                <h3>
                    Lie to Me – A Wikipedia Game [{addLink(
                        "https://github.com/abedef/wikigame"
                    )}]
                </h3>
            </div>

            <p class="company-description">
                Variation of a game called <em>Balderdash</em>. Players in a
                lobby are each given a random Wikipedia article to read within a
                time limit. Each round, an article title is randomly selected
                from the pool of articles, and the guesser is tasked with
                testing each player's knowledge on the topic in order to intuit
                who had originally been assigned that article.
            </p>
            <p class="oss-description">
                This project involved solving many technical challenges I had
                not yet encountered in my line of work. For example, I use
                WebSockets to implement real-time Jackbox-style game lobbies
                that can be joined with a room code. I was also forced to come
                up with creative solutions and workarounds. The random article
                selector had initially exhibited noticable latency when pulling
                articles from Wikipedia. After trying a few options, I was able
                to significantly reduce the delay by implementing a
                reverse-proxy rule on the Nginx server that hosts the game.
            </p>
        </div>
    </section>

    <section>
        <h3 />
        <div>
            <ul class="links">
                {#each links as link, i}
                    <li>[{i + 1}] <a href={link}>{link}</a></li>
                {/each}
            </ul>
        </div>
    </section>
</article>

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

    ul.skills {
        column-count: 1;
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

    ul.skills {
        /* TODO Recieved feedback to make this a single column */
        column-count: 2;
        list-style: none;
        padding: 0;
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
        font-size: 0.8rem;
    }

    p,
    ul,
    header > div {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 700px) {
        section > h3 {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            min-width: unset;
        }

        ul.skills {
            padding-left: 0;
            list-style: none;
        }

        ul#coursework {
            padding-left: 0;
            list-style: none;
        }
    }

    @media screen and (max-width: 620px) {
        #coursework {
            column-count: 1;
        }
    }

    @media print {
        footer {
            visibility: hidden;
        }
    }

    a {
        font-weight: bold;
        text-decoration: none;
        color: currentColor;
    }
</style>
