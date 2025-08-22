<script lang="ts">
  import {
    education as raw_education,
    experience as raw_experience,
    skills as raw_skills,
    summary as raw_summary,
    projects as raw_projects,
  } from "$lib";

  import {
    education as simple_education,
    experience as simple_experience,
    skills as simple_skills,
    summary as simple_summary,
    projects as simple_projects,
  } from "$lib/simple";

  import ResumeToggle from "$lib/components/ResumeToggle.svelte";
  import { isSimplified } from "$lib/resumeStore";

  let links: string[] = [];

  function addLink(url: string) {
    let reference = links.length + 1;
    links.push(url);
    return reference;
  }

  function addLinks(obj: any, resetLinks: boolean = false) {
    if (resetLinks) {
      links = [];
    }

    switch (typeof obj) {
      case "string":
        const matcher = /((?<!href=")https?:\/\/[^ ,]*)/;
        let match = obj.match(matcher);
        while (match) {
          obj = obj.replace(
            match[0],
            `<a href="${match[0]}">[${addLink(match[0])}]</a>`
          );
          match = obj.match(matcher);
        }
        return obj;

      case "object":
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            obj[key] = addLinks(element);
          }
        }
        return obj;

      default:
        console.error(`addLinks() not implemented for type ${typeof obj}`);
        break;
    }
  }

  $: currentData = $isSimplified
    ? {
        summary: simple_summary,
        skills: simple_skills,
        experience: simple_experience,
        education: simple_education,
        projects: simple_projects,
      }
    : {
        summary: raw_summary,
        skills: raw_skills,
        experience: raw_experience,
        education: raw_education,
        projects: raw_projects,
      };

  $: summary = addLinks(currentData.summary, true);
  $: skills = addLinks(currentData.skills);
  $: experience = addLinks(currentData.experience);
  $: education = addLinks(currentData.education);
  $: projects = addLinks(currentData.projects);

  $: midpoint = Math.ceil(skills.length / 2);
  $: skillsLeft = skills.slice(0, midpoint);
  $: skillsRight = skills.slice(midpoint);

  const showCoursework = false;
</script>

<svelte:head>
  <title>Resume | Abed Fayyad</title>
</svelte:head>

<header>
  <div id="header-left">
    <div>
      <a href="https://www.toronto.ca">Toronto</a>
    </div>
    <div>
      <a href="mailto:Abed <hello@abedef.ca>">hello@abedef.ca</a>
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
    <div class="skills">
      <ul class="skills-single">
        {#each skills as skill}
          <li>
            {#if "title" in skill}
              <strong>{skill.title}</strong>
            {/if}
            {skill.body}
          </li>
        {/each}
      </ul>
      <ul class="skills">
        {#each skillsLeft as skill}
          <li>
            {#if "title" in skill}
              <strong>{skill.title}</strong>
            {/if}
            {skill.body}
          </li>
        {/each}
      </ul>
      <ul class="skills">
        {#each skillsRight as skill}
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

  <section>
    <h3>Experience</h3>
    <div>
      {#each experience as gig}
        <div class="company">
          <h3 class="company-name">{gig.company}</h3>
          <h3 class="years">{gig.years}</h3>
        </div>
        {#if "description" in gig}
          <p class="company-description">{@html gig.description}</p>
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
      {#each education as edu}
        <div class="company">
          <h3>{edu.school}</h3>
          <h3>{edu.years}</h3>
        </div>

        <div class="role">
          <h4>{edu.degree}</h4>
          <em>{edu.program}</em>
        </div>

        {#if showCoursework}
          <ul id="coursework">
            {#each edu.courses as course}
              <li>{course.code} <em>{course.name}</em></li>
            {/each}
          </ul>
        {/if}
      {/each}
    </div>
  </section>

  <section>
    <h3>Open Source</h3>
    <div>
      {#each projects as project}
        <div class="company">
          <h3>{@html project.name}</h3>
        </div>

        <p class="company-description">
          {@html project.description}
        </p>
      {/each}
    </div>
  </section>

  <section>
    <!-- svelte-ignore a11y-missing-content -->
    <h3 />
    <div class="links">
      <ul class="links">
        {#each links as link, i}
          <li>[{i + 1}] <a href={link}>{link}</a></li>
        {:else}
          <p style="text-align: center;">
            changes detected – links will be displayed once the page is
            refreshed
          </p>
        {/each}
      </ul>
      <p>
        please find the latest, most up-to-date version of my resume at
        <a href="https://resume.abedef.ca">https://resume.abedef.ca</a>
      </p>
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
    and hosted on <a href="https://pages.github.com">GitHub Pages</a>
  </p>
</footer>

<ResumeToggle />

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

  div.skills {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ul.skills,
  ul.skills-single {
    list-style: none;
    padding: 0;
  }

  ul.skills {
    width: 50%;
  }

  ul.skills-single {
    display: none;
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

  div.links {
    display: none;
  }

  div.links p {
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
  h3,
  h4 {
    margin: 0;
  }

  p.company-description {
    margin-bottom: 1rem;
    text-align: justify;
  }

  p.company-description:last-child {
    margin-bottom: 0;
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
    -webkit-column-count: 2;
    -moz-column-count: 2;
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

    ul#coursework {
      padding-left: 0;
      list-style: none;
    }
  }

  @media screen and (max-width: 620px) {
    ul.skills-single {
      display: block;
    }

    ul.skills {
      display: none;
    }

    #coursework {
      column-count: 1;
      -webkit-column-count: 1;
      -moz-column-count: 1;
    }
  }

  @media print {
    footer {
      visibility: hidden;
    }

    #coursework {
      column-count: 2;
      -webkit-column-count: 2;
      -moz-column-count: 2;
    }

    .role > em,
    .role > h4 {
      font-size: 0.7rem;
    }

    p,
    ul,
    header > div {
      font-size: 0.6rem;
    }

    section {
      page-break-inside: avoid;
    }

    div.links {
      display: block;
    }
  }
</style>
