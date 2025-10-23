<svelte:head>
  <title>Mobile App Portfolio | Abed Fayyad</title>
</svelte:head>

<h1>Mobile App Development Portfolio</h1>

<p>
  Hi Harold,<br /><br />I've compiled a collection of my recent mobile
  applications showcasing development in native iOS and cross-platform
  frameworks. Please reach out to me if you have any questions, or if you'd like
  any additional details.
</p>

<nav class="project-nav">
  <ul>
    <li><a href="#project-1">Postscriptions</a></li>
    <li><a href="#project-2">Calories</a></li>
    <li><a href="#project-3">Five Times</a></li>
    <li><a href="#project-4">Pusher</a></li>
  </ul>
</nav>

<!-- Project 1 -->
<article id="project-1" class="project">
  <div class="project-header">
    <h2>Postscriptions</h2>
    <div class="project-meta">
      <span class="tech-stack">Tech Stack: Swift, SwiftUI, PostgreSQL, GCP</span
      >
      <span class="timeline">2022</span>
    </div>
  </div>

  <div class="project-content">
    <section class="project-description">
      <h3>Overview</h3>
      <p>
        Postscriptions is an online pharmacy platform I cofounded during the
        COVID-19 pandemic. As walk-in pharmacies struggled with phone-based
        prescription requests, I built a digital solution that streamlined
        prescription filling and refilling for patients and their families,
        reducing wait times and improving access to essential medications.
      </p>
    </section>

    <section class="project-highlights">
      <h3>Key Features</h3>
      <ul>
        <li>Secure one-time code authentication</li>
        <li>Smart medication compliance reminders</li>
        <li>Digital prescription uploads</li>
        <li>One-tap prescription refills</li>
        <li>Multi-user family account management</li>
      </ul>
    </section>

    <section class="project-challenges">
      <h3>Technical Highlights</h3>
      <p>
        Built a cloud-native backend in Go hosted on Google Cloud Platform,
        paired with a native iOS client using Swift and SwiftUI. Implemented
        passwordless authentication to ensure security for sensitive patient
        data while maintaining accessibility. Supported multiple iOS versions to
        maximize reach. The platform has since been ported to web and the iOS
        app has been sunset.
      </p>
    </section>

    <section class="project-media">
      <h3>Screenshots & Demo</h3>
      <div class="media-grid">
        <div class="media-placeholder">
          <video
            controls="controls"
            width="100%"
            height="100%"
            src="posty.mov"
          />
        </div>
      </div>
    </section>

    <section class="project-links">
      <h3>Links</h3>
      <ul>
        <li>
          <a href="https://apps.apple.com/ca/app/postscriptions/id1504547619"
            >App Store</a
          >
        </li>
        <li><a href="https://postscriptions.ca">Website</a></li>
      </ul>
    </section>
  </div>
</article>

<!-- Project 2 -->
<article id="project-2" class="project">
  <div class="project-header">
    <h2>Calories</h2>
    <div class="project-meta">
      <span class="tech-stack">Tech Stack: React Native, OpenAI API</span>
      <span class="timeline">2024</span>
    </div>
  </div>

  <div class="project-content">
    <section class="project-description">
      <h3>Overview</h3>
      <p>
        Frustrated by overcomplicated calorie tracking apps, I built a
        streamlined alternative leveraging OpenAI's vision API. Users simply
        snap a photo of their meal or add a quick description, and the app
        estimates calories and macros, logging everything with timestamps. Daily
        summaries help users maintain their nutritional goals without friction.
      </p>
    </section>

    <section class="project-highlights">
      <h3>Key Features</h3>
      <ul>
        <li>AI-powered calorie estimation from photos</li>
        <li>Automatic macro breakdown (protein, carbs, fats)</li>
        <li>Daily intake tracking and summaries</li>
        <li>Meal history with timestamps</li>
      </ul>
    </section>

    <section class="project-challenges">
      <h3>Technical Highlights</h3>
      <p>
        Implemented a multi-step estimation workflow that decomposes meal photos
        into individual components, estimates each separately, then reconciles
        with a holistic vision model prediction. The system learns from user
        corrections, tracking discrepancies between manual inputs and AI
        estimates to improve accuracy over time. Built on CoreData for local
        persistence and integrates OpenAI's GPT-4 Vision API for intelligent
        food recognition.
      </p>
    </section>

    <section class="project-media">
      <h3>Screenshots & Demo</h3>
      <div class="media-grid">
        <img src="./calories2.png" alt="Calories Home Screen" />
        <img src="./calories0.png" alt="Calories Home Screen" />
        <img src="./calories1.png" alt="Calories Home Screen" />
      </div>
    </section>
  </div>
</article>

<!-- Project 3 -->
<article id="project-3" class="project">
  <div class="project-header">
    <h2>Five Times</h2>
    <div class="project-meta">
      <span class="tech-stack">Tech Stack: Swift, SwiftUI</span>
      <span class="timeline">2024</span>
    </div>
  </div>

  <div class="project-content">
    <section class="project-description">
      <h3>Overview</h3>
      <p>
        Five Times is a prayer companion app that helps Muslims maintain their
        daily prayer schedule. Combining a real-time Qibla compass with accurate
        prayer time calculations based on location, it provides a simple,
        reliable tool for staying connected to one's faith throughout the day.
      </p>
    </section>

    <section class="project-highlights">
      <h3>Key Features</h3>
      <ul>
        <li>Real-time Qibla direction compass</li>
        <li>Location-based prayer time calculations</li>
        <li>
          Configurable calculation methods for different schools of thought
        </li>
        <li>Clean, minimal interface focused on functionality</li>
      </ul>
    </section>

    <section class="project-challenges">
      <h3>Technical Highlights</h3>
      <p>
        Distributed via TestFlight for personal use and family. Integrates Core
        Location for GPS positioning and device heading sensors for compass
        functionality. Prayer time calculations powered by a Swift library
        implementing various Islamic calculation methods based on geographic
        location and solar positions.
      </p>
    </section>

    <section class="project-media">
      <h3>Screenshots & Demo</h3>
      <div class="media-grid">
        <img src="./five2.png" alt="Five Home Screen" />
        <img src="./five1.png" alt="Five Configuration Screen" />
        <img src="./five0.png" alt="Five Configuration Screen" />
      </div>
    </section>
  </div>
</article>

<!-- Project 4 -->
<article id="project-4" class="project">
  <div class="project-header">
    <h2>Pusher</h2>
    <div class="project-meta">
      <span class="tech-stack">Tech Stack: Swift, SwiftUI, iOS APIs</span>
      <span class="timeline">2025</span>
    </div>
  </div>

  <div class="project-content">
    <section class="project-description">
      <h3>Overview</h3>
      <p>
        Born from a friendly competition about who could maintain the longest
        pushup streak, Pusher combines Face ID and device motion sensors to
        create a cheat-proof workout tracker. Users compete on real-time
        leaderboards and receive notifications when friends are on hot streaks,
        creating accountability and motivation through friendly rivalry.
      </p>
    </section>

    <section class="project-highlights">
      <h3>Key Features</h3>
      <ul>
        <li>Face ID and gyroscope-based rep validation</li>
        <li>Real-time competitive leaderboards</li>
        <li>Streak tracking and notifications</li>
        <li>Form detection to prevent cheating</li>
      </ul>
    </section>

    <section class="project-challenges">
      <h3>Technical Highlights</h3>
      <p>
        Built as a TestFlight release for a private group. Leverages iOS device
        sensors and Face ID to verify proper pushup form through orientation
        tracking and facial recognition positioning. Backend powered by
        PocketBase for lightweight real-time data synchronization and
        leaderboard management.
      </p>
    </section>

    <section class="project-media">
      <h3>Screenshots & Demo</h3>
      <div class="media-grid">
        <video
          controls="controls"
          width="100%"
          height="100%"
          src="pushuptracker.mp4"
        />
        <img src="./pusher1.png" alt="Pusher Home Screen" />
        <img src="./pusher0.png" alt="Pusher Push Up View" />
      </div>
    </section>
  </div>
</article>

<style>
  /* Main content container with max-width */
  :global(body) {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Navigation */
  nav.project-nav {
    margin: 2rem 0;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 8px;
  }

  nav.project-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav.project-nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  nav.project-nav a:hover {
    background-color: #e0e0e0;
  }

  /* Project sections */
  article.project {
    margin: 3rem 0;
    padding: 2rem 0;
    border-top: 2px solid #e0e0e0;
  }

  article.project:first-of-type {
    border-top: none;
  }

  .project-header {
    margin-bottom: 2rem;
  }

  .project-header h2 {
    margin-bottom: 0.5rem;
  }

  .project-meta {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    color: #666;
    font-size: 0.9rem;
  }

  .tech-stack {
    font-style: italic;
  }

  .timeline {
    font-weight: 500;
  }

  /* Project content sections */
  .project-content section {
    margin-bottom: 2rem;
  }

  .project-content h3 {
    color: #444;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .project-description p,
  .project-challenges p {
    text-align: justify;
    line-height: 1.6;
  }

  .project-highlights ul,
  .project-links ul {
    line-height: 1.8;
  }

  /* Media grid */
  .project-media {
    margin: 2rem 0;
  }

  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
  }

  /* Center single-item grids */
  .media-grid:has(> :only-child) {
    display: flex;
    justify-content: center;
  }

  .media-grid:has(> :only-child) .media-placeholder {
    max-width: 400px;
    width: 100%;
  }

  .media-placeholder {
    aspect-ratio: 9 / 16;
    background-color: #f0f0f0;
    border: 2px dashed #ccc;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-style: italic;
    overflow: hidden;
  }

  .media-placeholder img,
  .media-placeholder video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .project-media img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
    display: block;
  }

  .project-media video {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
    display: block;
  }

  /* Links */
  .project-links ul {
    list-style: none;
    padding: 0;
  }

  .project-links a {
    color: #0066cc;
    text-decoration: none;
  }

  .project-links a:hover {
    text-decoration: underline;
  }

  /* Responsive design */
  @media screen and (max-width: 768px) {
    :global(body) {
      padding: 0 0.5rem;
    }

    nav.project-nav {
      margin: 1rem 0;
      padding: 0.75rem;
    }

    nav.project-nav ul {
      flex-direction: column;
      align-items: stretch;
    }

    nav.project-nav a {
      display: block;
      text-align: center;
    }

    .project-meta {
      flex-direction: column;
      gap: 0.5rem;
    }

    .media-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .media-placeholder {
      width: 100%;
      max-width: 100%;
    }

    article.project {
      padding: 1rem 0;
      margin: 2rem 0;
    }

    .project-content section {
      margin-bottom: 1.5rem;
    }

    .project-description p,
    .project-challenges p {
      text-align: left;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }

  @media print {
    nav.project-nav {
      display: none;
    }

    article.project {
      page-break-inside: avoid;
    }
  }
</style>
