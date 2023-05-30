export const projects = [
    {
        name: "Ansible",
        description: "During my time at Bell, our team made heavy use of automation tools like Red Hat's Ansible. During one of our runs, the tool misbehaved in a consistent way, so I opened an issue https://github.com/ansible/ansible/issues/32906 outlining the problem. In the meantime, I was able to pinpoint the code responsible for the problem and submit a fix that handled my use-case. Though my particular fix https://github.com/ansible/ansible/pull/32909 was not merged, my report was acknowledged and a similar fix was employed."
    },
    {
        name: "Lockwise",
        description: "I tracked down a user interface bug in Mozilla's iOS password manager app, Lockwise, and submitted a fix https://github.com/mozilla-lockwise/lockwise-ios/pull/1102 which <em>was</em> merged!"
    },
    {
        name: "boop https://github.com/abedef/boop-go",
        description: "An experimental information capture and recall system I created as an open-source alternative to a commercial product https://www.tatatap.com with similar offerings. Annotated text-based submissions (called <em>boop</em>s) are transmitted to the system over web interface, SMS, or email (or, just for fun: over DNS) and indexed, providing lightning-fast information storage and retrieval."
    },
    {
        name: "Passkey-based authentication",
        description: "I have taken a keen interest in WebAuthn – the new-ish standard for logins on the web – and have implemented my own passkey authentication https://genieindex.ca in Go and Javascript for various services I manage for friends and family. My current goal is to bring native passkey authentication support to backend frameworks such as PocketBase, which currently only supports popular login methods such as email and OAuth."
    },
    {
        name: "Lie to Me – A Wikipedia Game https://github.com/abedef/wikigame",
        description: "Variation of a game called <em>Balderdash</em>. Players in a lobby are each given a random Wikipedia article to read within some time limit. At the start of each round, an article title is randomly selected from the pool of articles, and the guesser is tasked with testing each player's knowledge on the topic in order to intuit who had originally been assigned that article. Points are awarded to guessers who correctly guess the player to whom the article was assigned, and bonus points to players who manage to convince the guesser that they had read another player's assigned article.<br><br>I encountered a number of technical challenges during this project that were new to me. For example, two-way client/server updates – needed to implement Jackbox-style game lobbies https://www.jackboxgames.com/how-to-play/ – which I achieved with the help of WebSockets. Certain limitations also forced me to come up with creative workarounds. For example, the random article selector had initially exhibited noticable latency when pulling articles from Wikipedia. After trying a number of solutions, I significantly reduced the delay by implementing a reverse-proxy rule on the Nginx server that hosts the game."
    },
];