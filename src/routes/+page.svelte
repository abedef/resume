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
</script>

<!-- TODO: Make this page viewable in mobile -->
<!-- TODO: Hide contents when page is too narrow -->

<svelte:head>
    <title>Resume | Abed Fayyad</title>
</svelte:head>

<header>
    <div id="header-left">
        <div>
            <a href="https://gitlab.com/abed">gitlab.com/abed</a>
        </div>
        <div>
            <a href="https://github.com/abedef">github.com/abedef</a>
        </div>
    </div>

    <div id="header-center">
        <h1>Abed Fayyad</h1>
    </div>

    <div id="header-right">
        <div>
            <a href="mailto:Abed <hello@abedef.ca>">hello@abedef.ca</a>
        </div>
        <div>
            <a href="tel:+1 (416) 452-1467">+1 (416) 452-1467</a>
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
        <div class="company">
            <h3>Postscriptions Inc.</h3>
            <h3>2021 – Present</h3>
        </div>
        <p class="company-description">
            Since my last semester of university, I spent my evenings and
            weekends designing and prototyping an online pharmacy solution with
            a friend from high school. While he managed the pharmacy and
            regulation side of things, I handled our technical requirements and
            built up a stack to fulfil our patients' needs. In September of
            2021, we were well-off enough that I could afford to go full-time.
        </p>
        <p>
            This was a significant undertaking and one of my most difficult
            experiences, but I am glad I did it nonetheless. The project forced
            me to pick up many new skills and finally face app- and web-
            development, which I had been neglecting so far. Throughout my time
            working on the project, I had the opportunity to move between
            technical stacks until I found the right fit.
        </p>

        <div class="role">
            <h4>Founding Developer</h4>
            <em>Full Stack Development</em>
        </div>

        <ul class="responsibilities">
            <li>Online delivery pharmacy built with SvelteKit</li>
            <li>Recently migrated from a Go API with a native iOS client</li>
            <li>
                With over two years of experience building a custom online
                pharmacy solution, I have encountered many obstacles that come
                with this undertaking. Due to the nature of the data we work
                with, we are forced to rely on PIPEDA-compliant tools, or tools
                with self-hosted distributions that I can deploy and support
                locally. Additionally, we implemented password-less login via a
                variety of methods including magic links, one-time-code
                verification, OAuth and WebAuthn. Pharmacists communicate with
                patients through our custom portal, interfacing with our
                internal chat platform, and Twilio’s SMS and Email services for
                notification purposes.
            </li>
            <li>
                due to the nature of the data we were working with, we relied
                mainly on tools with self-hosted versions and I supported those
                services
            </li>

            <li>
                passwordless login (magic link, code verification, oauth,
                webauthn)
            </li>
            <li>notifications (Twilio and SendGrid)</li>
            <li>SMS messaging integration with Mattermost</li>
            <li>
                Patients can view and manage their prescriptions or coordinate
                deliveries
            </li>
            <li>SvelteKit, Go, Swift/SwiftUI, PostgreSQL, GCP</li>
            <li>
                At this stage our application is supported by a Go API with a
                native iOS client, and web app written in Svelte. Patients can
                view and manage their prescriptions, and coordinate deliveries.
                Features passwordless login via SMS or email, implemented from
                scratch with Twilio's APIs.
            </li>
            <li>
                co-founded an online pharmacy and took ownership of the
                technical side of the business, interfacing with designers and
                other engineers to accomplish our goals in a fast-paced startup
                environment with a focus on keeping GCP operating costs to a
                minimum
            </li>
            <li>
                Technical requirements to build up a stack to fulfil our
                patients' needs
            </li>
            <li>
                Created prototype API in Java Spring and eventually transitioned
                to Go to make use of fast build and deploy times, and supports a
                tier on GCP that makes things cheap for us
            </li>
            <li>Built front end app in iOS SwiftUI</li>
            <li>Built back end management app for pharmacists in Svelte</li>
            <li>Migrated to full SvelteKit backend, lighter and cheaper</li>
        </ul>

        <div class="company">
            <h3>Bell Canada</h3>
            <h3>2017 – 2021</h3>
        </div>
        <p class="company-description">
            Straight out of school I joined a small and fairly new Agile team at
            Bell that was due to deliver on an ambitious project with a tight,
            government-mandated deadline. The CRTC updated their wireless code
            of conduct – which all telecommunications companies must follow –
            and Bell was the first to implement their requirements without
            delays thanks to the work done by my team. Later, I transferred to a
            team responsible for the rollout of 5G onto Bell's network, where I
            supported our Kubernetes environments. <!-- Something about replacing legacy systems with microservice architecture -->
            <!-- collaborated with people all the way from Dublin to Delhi -->
        </p>

        <div class="role">
            <h4>Software Developer</h4>
            <em>Infrastructure & Pipeline Automation</em>
        </div>

        <ul class="responsibilities">
            <li>
                supported and developed systems supporting high TPS and high
                redundancy for charging systems at a nationwide
                telecommunication company
            </li>
            <li>
                developed and supported high TPS systems with highly redundant
                deployments at a nationwide telecom company
            </li>
            <li>
                tracked down opportunities to improve and speed up development
                and deployment pipelines
            </li>
            <li>
                tracked down opportunities to improve and speed up our
                development and deployment pipelines, with an emphasis on
                enhancing developer and QA experience
            </li>
            <li>
                advocated for knowledge sharing and reduced redundancy by means
                of organization-wide “open-source” development practices
            </li>
            <li>
                troubleshooted development and production environment issues,
                providing technical support where required, and documenting
                fixes and best practices in our team’s shared knowledge base
            </li>
            <li>
                troubleshooted development and production environment issues,
                documenting fixes and best practices in our shared knowledge
                base
            </li>
            <li>
                introduced, trialed and rolled out several eventual key
                infrastructure and development tools (i.e. Terraform)
            </li>

            <li>
                Know design patterns, implemented a bunch of features with
                minimal guidance
            </li>
            <li>
                Wrote a lot of reconciliation scripts that are probably still
                there today
            </li>
            <li>
                Supported application deployments to Openshift and their
                integration
            </li>
            <li>
                Developed pipelines to accelerate deployments and minimize human
                error
            </li>
            <li>
                Presented knowledge-sharing talks and demos on automation and
                Linux tools
            </li>
        </ul>

        <div class="role">
            <h4>DevOps Engineer</h4>
            <em>DevOps and Java Spring Development</em>
        </div>

        <ul class="responsibilities">
            <li>Built and configured first development Docker swarm</li>
            <li>
                Built multiple QA and production environments (Ansible,
                Terraform)
            </li>
            <li>
                I introduced (or was instrumental in the adoption of) a number
                of tools to the team's stack, from which I can proudly say
                several still remain foundational to the team's infrastructure
                (i.e. Terraform, Portainer, GitLab CI).
            </li>
            <li>
                Docker and Kubernetes (OpenShift) Ansible Terraform Jenkins,
                later GitLab CI Vagrant OpenStack Zabbix Graylog
            </li>
            <li>
                Took charge in setting up automated development environment
                deployments
            </li>
            <li>
                Wrote and took ownership of deployment scripts for setting up
                development and production environments
            </li>
            <li>Maintained scripts for production environment management</li>
            <li>
                Worked with DBAs to automate geo-redundant MongoDB deployments
            </li>
            <li>
                As well during my time at Bell I wrote a script which was a key
                project deliverable. It provided a Terraform template and
                Ansible playbook to deploy a geo-redundant multi-node cluster
                that would support enormous streams of data. Later, I
                collaborated with our RDBMS specialists and Mongo's on-site
                support team to optimize the deployments. This consisted of
                dozens of test deployments, experimenting with a number of our
                server's OS configurations (THP, security policies, hypervisor
                considerations).
            </li>
            <li>
                Developed features within an Agile-managed microservice
                architecture
            </li>
        </ul>

        <div class="company">
            <h3>University of Toronto</h3>
            <h3>2016 – 2017</h3>
        </div>
        <div class="role">
            <h4>Teaching Assistant</h4>
            <em>Introduction to Computer Science</em>
        </div>
    </div>
</section>

<section>
    <h3>Skills</h3>
    <div>
        <ul>
            <li>
                Server administration: comfortable using Linux environment as a
                daily driver
            </li>
            <li>
                Home server administration (self-hosted services, build servers,
                chat bots)
            </li>
            <li>boop SvelteKit, Go, Swift/SwiftUI, PostgreSQL, GCP</li>
            <li>
                Javascript, Typescript, Go, Swift, Python, HTML/CSS, Java, Ruby,
                Rust
            </li>
            <li>Functional programming languages such as Racket and Elm</li>
            <li>
                Tools: Docker, Ansible, Packer, Vagrant, Terraform, Linux,
                Openshift, Openstack, Google Cloud, HAProxy, Nginx, Traefik,
                Jenkins, Gitlab CI/CD
            </li>
            <li>User interface design and development</li>
            <li>
                Creative coding, graphics programming and game engine
                architecture
            </li>
            <li>
                In a personal capacity, I enjoy coding and am usually hacking
                away at a few side projects at any given time, which I
                occasionally showcase on my Github/GitLab. I like to explore new
                frameworks and languages and am always excited to add a new
                language to my tool belt.
            </li>
            <li>
                In terms of hobbies, since I was first taught to set up and use
                SSH, I have been maintaining a number of home servers for the
                purpose of supporting self-hosted services. Although my first
                few servers' OS is Canonical's Ubuntu, I prefer Arch Linux for
                personal use. Some of my favourite self-hosted tools are MinIO
                and Proxmox, which I make generous use of in my personal
                projects.
            </li>
            <li>
                Know my way around the command line and have set up enough Linux
                machines and Hackintoshes to feel comfortable
            </li>
            <li>Languages: English, Arabic, Russian</li>
            <li><a href="/portfolio">Visual Portfolio</a></li>
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
    <h3>Open<br />Source<br />Contribution</h3>
    <div>
        <p>
            In terms of larger code bases, my team at Bell made heavy use of
            tools like Ansible, which happens to be written in Python. During
            one of our runs, the tool misbehaved in a consistent way, so I filed
            a <a href="https://github.com/ansible/ansible/issues/32906"
                >bug report</a
            >, and dove into the code to look for a
            <a href="https://github.com/ansible/ansible/pull/32909"
                >possible fix</a
            >. Though my particular fix was not merged, my report was
            acknowledged and a similar fix was employed.
        </p>
    </div>
</section>

<footer>
    This resume is made ✨ from scratch ✨ using <a href="https://svelte.dev"
        >Svelte</a
    >!
</footer>

<style>
    * {
        font-family: Helvetica, sans-serif;
    }

    header {
        display: flex;
    }

    header > * {
        flex: 1;
    }

    section {
        display: flex;
        margin-top: 1rem;
    }

    section > h3 {
        min-width: 8rem;
        opacity: 0.25;
    }

    section > div {
        flex: 1;
    }

    div.company {
        display: flex;
        justify-content: space-between;
    }

    div.role {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    footer {
        text-align: center;
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
</style>
