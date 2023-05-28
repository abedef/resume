<svelte:head>
	<title>Portfolio | Abed Fayyad</title>
</svelte:head>

<h1>Abed's Portfolio</h1>

<p>
	Most projects listed in my <a href="/">resume</a> are available on my
	<a href="https://github.com/abedef/">GitHub</a>
	or <a href="https://gitlab.com/abed/">GitLab</a>. For the handful of notable
	projects that are private or are missing source code, I provide below all
	the relevant material that I could scrounge up.
</p>
<ul>
	<li>
		<a href="#postscriptions">Postscriptions</a>: full stack solo project
	</li>
	<li><a href="#reddit-reader">Reddit Reader</a>: safari extension</li>
	<li><a href="#gd-intwo">Game Development: InTwo</a></li>
	<li><a href="#gd-hackathons">Game Development: Hackathons</a></li>
	<li><a href="#open-source">Open Source Contributions</a></li>
	<li>
		<a href="#home-server">Home Server</a>: how I enhance my online life
		with Linux
	</li>
</ul>

<h2 id="postscriptions">Postscriptions</h2>

<p>
	This is a pharmacy I co-founded in my spare time, focused on providing a
	digital pharmacy service complete with prescription delivery. I represent
	the technical side of the company and have so far delivered a
	cloud-optimized backend written in Go and hosted on Google's Cloud Platform
	(GCP), along with a native iOS client written in Swift.
</p>
<p>
	The app is built from scratch using Apple's SwiftUI framework, and features
	a number of custom-built user interface components <sub
		>to make up for SwiftUI's lack of featured components ☹️</sub
	>. This was so far my greatest challenge in user interface design and
	development and I am quite pleased with the result, especially the landing
	page and login flow (a demo follows).
</p>
<p>
	Another interesting technical challenge was implementing secure user
	authentication. To minimize the possibility of malicious logins and
	forgotten passwords, we opted for an OTC-based login solution, where codes
	are texted or emailed to users using Twilio's SMS and email gateways.
</p>
<p>
	Our next milestone is the web client, which I am currently developing. My
	experience in the web stack has so far been limited to university projects
	and hobby projects, so working on a production-level web app has been a
	learning experience.
</p>
<p>
	Here is our <a href="https://postscriptions.ca">webpage</a> and here is a
	link to our
	<a href="https://apps.apple.com/ca/app/postscriptions/id1504547619"
		>app store page</a
	>.
</p>
<video controls="controls" width="100%" height="100%" src="posty.mov" />

<h2 id="reddit-reader">Reddit Reader</h2>

<video controls="controls" width="100%" height="100%" src="reddit-reader.mov" />

<p>
	During the days of the reddit layout of yore, I yearned for vim-like
	navigation with
	<code>J</code> and <code>K</code> to move between and collapse comments. This
	was not a very complicated project but it was my first Safari extension which
	I finished.
</p>
<p>
	The small amount of code I used to implement this is viewable
	<a href="https://github.com/abedef/redditreader">on GitHub</a>. Of course,
	after all my hard work, Reddit changed its layout and my extension was no
	longer necessary, as they had themselves implemented keyboard navigation. By
	this point, I had moved on to:
</p>

<h2 id="gd-intwo">Game Development: InTwo</h2>
<iframe
	width="100%"
	src="https://www.youtube.com/embed/bsmkVOADfEM"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
				picture-in-picture"
	allowfullscreen
/>
<p style="margin-top: 5%">
	I definitely could have done a better job keeping track of my old projects
	but fortunately I was able to track down my teammate's <a
		href="https://feyla.ca/?portfolio=intwo-a-game-of-hexagons"
	>
		portfolio page</a
	>
	which showcases some screenshots and a trailer for
	<em>InTwo</em>, the game we created for our university game development
	course.
</p>
<p>
	InTwo started as an atmospheric audio-based puzzle game, but technical
	challenges and deadlines forced us to pivot and redesign the game as a couch
	coop puzzle game.
</p>
<p>
	Our class's projects were showcased at the <a
		href="https://www.facebook.com/events/1864898127087351/"
	>
		7th Annual Level Up Showcase</a
	>, and InTwo was used in one of the
	<a
		href="https://www.facebook.com/UofTCSSU/videos/come-level-up-csc404-video-game-design-students-present-their-work-to-the-public/1298622390224588/"
	>
		CSSU's teasers</a
	> for the event.
</p>
<p>
	Thanks to iCloud, I <em>was</em> able to fish out some WIP materials and some
	of my Blender screen captures which I excitedly shared with friends in the past.
</p>

<video controls="controls" width="100%" src="intwo-shader-effect.mov" />
<sub
	>Prototyping shader effects, which were meant to accompany players' shout
	animations.</sub
>

<img src="intwo-firegirl.png" width="100%" />
<video controls="controls" width="100%" src="intwo-waves.mov" />
<video controls="controls" width="100%" src="intwo-obelisk.mov" />

<video controls="controls" width="100%" src="intwo-ghost-butt.mp4" />

<video controls="controls" width="100%" src="intwo-ghost-walk.mp4" />

<video controls="controls" width="100%" src="intwo-run.mp4" />
<sub>A showcase of the game's characters' idle, run and shout animations.</sub>

<video
	controls="controls"
	muted="true"
	width="100%"
	src="intwo-starfield.mp4"
/>
<sub>Using Blender's scripting capabilities to generate a starfield.</sub>

<p>
	I was lucky to work with a talented joint team composed of OCAD students and
	students from UofT's computer science program. However, due to shortages in
	enrolment, we had plenty of programmers and even a sound engineer, but no
	modellers or animators! This project forced me to dip my toes into character
	modelling and animation, and gave me my first experience writing shaders.
</p>

<h2 id="gd-hackathons">Game Development: Hackathons</h2>

<p>
	My team took part in a number of hackathons throughout our course, where we
	practiced using Unity to prototype our games. At the time, I was captivated
	by voxel art and created simple models for our games using
	<a href="https://www.voxelmade.com/magicavoxel/">Magicavoxel</a>.
</p>

<img src="hackathon-pizza.png" width="100%" />
<img src="hackathon-steve.png" width="100%" />
<video controls="controls" width="100%" src="hackathon-voxels.mov" />

<img src="hackathon-granny.png" width="100%" />
<img src="hackathon-hood.png" width="100%" />

<h2 id="open-source">Open Source Contributions</h2>

<h6>Ansible</h6>
<p>
	While using Ansible during my coop I noticed a bug and opened <a
		href="https://github.com/ansible/ansible/issues/32906">an issue</a
	>. Since it is written in Python, I was able to pinpoint the erroneous code
	and submit a fix that handled my use-case. Although my
	<a href="https://github.com/ansible/ansible/pull/32909">submitted fix</a> did
	not cover all edge cases and was therefore not accepted, this was my first interaction
	with the open source community and it left a positive impression on me.
</p>

<h6>Lockwise</h6>
<p>
	I later tracked down a user interface bug in Mozilla's iOS password manager
	app, Lockwise, and <a
		href="https://github.com/mozilla-lockwise/lockwise-ios/pull/1102"
		>submitted a fix</a
	>
	which
	<strong><em>was</em></strong> merged!
</p>

<h2 id="home-server">Home Server</h2>

<p>
	Inspired by the Linux nerds in my university's computer science lounge, I
	tried out many distros during my time as a student and eventually grew
	comfortable with Arch Linux, which I currently run on my servers. Aside from
	the usual use case of running dedicated game servers, I run...
</p>

<h6>CI/CD & Docker</h6>
<p>
	I set up GitLab runners to run pipelines for my projects that use GitLab CI.
	Previously, I ran a Jenkins server for this purpose. Services are deployed
	to my mildly geo-redundant two node Docker swarm. For example, my friends
	and I maintain a bot for our Discord server which allows users to earn
	points while logged in, and gamble or spend points in various pointless
	ways. Whenever a change is pushed, the code is built into an image using a
	GitLab runner deployed on the server, and redeployed.
</p>
<p>
	To make it easier for users to upload their dog photos, I deployed <a
		href="https://min.io">minio</a
	>, an object store, as a Docker service. During some interesting Discord
	events, we thought it would be neat to see a breakdown of user points, so I
	built
	<a href="https://abedef.ddns.net/gambling"> a rough dashboard</a> to show the
	time-series data. I eventually hit some scaling issues impacting the page's load
	time, which I have yet to resolve.
</p>

<h6>Media Server and WebDAV</h6>
<p>
	Since macOS allows you to natively attach a WebDAV volume via its Finder
	application, I set up a secured WebDAV as a simple solution for DIY document
	sharing. I also set up a RAID for my media server, which I maintain with the
	help of scheduled scripts. Among other uses, these scripts allow me to
	receive weekly speedtest and disk space reports to help keep tabs on things.
</p>

<h6>VPN Server</h6>
<p>
	To support my team's remote work needs I deployed strongSwan, an IPsec VPN
	server. This allowed me to create an IKEv2 VPN which can <em>also</em> be natively
	and simply configured on a macOS client. For good measure, I implemented a login
	notification script which notifies me of each login's source IP and other details
	via SMS, silencing notifications for logins from trusted networks.
</p>
