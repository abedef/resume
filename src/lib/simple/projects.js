export const projects = [
  {
    name: "Ansible",
    description:
      "Found and reported a bug in Red Hat's Ansible automation tool https://github.com/ansible/ansible/issues/32906 . Submitted a fix https://github.com/ansible/ansible/pull/32909 that influenced the final solution adopted by the maintainers.",
  },
  {
    name: "Lockwise",
    description:
      "Fixed a UI bug in Mozilla's Lockwise iOS password manager. My pull request https://github.com/mozilla-lockwise/lockwise-ios/pull/1102 was merged into the main codebase.",
  },
  {
    name: "boop https://github.com/abedef/boop-go",
    description:
      "Created an open-source information capture system as an alternative to commercial offerings https://www.tatatap.com . Supports multiple input methods (web, SMS, email, even DNS) with fast indexing and retrieval.",
  },
  {
    name: "PocketBase https://pocketbase.io/ Passkey Authentication",
    description:
      "Implemented WebAuthn passkey authentication https://abedef.ca/blog/nginx-oauth/ in Go and JavaScript. Currently working to add native passkey support to PocketBase, expanding beyond its current email and OAuth methods.",
  },
  {
    name: "Lie to Me – A Wikipedia Game https://github.com/abedef/wikigame",
    description:
      "Built a multiplayer Wikipedia trivia game where players must identify who read which article. Implemented Jackbox-style lobbies https://www.jackboxgames.com/how-to-play/ using WebSockets for real-time updates. Solved Wikipedia API latency issues with creative Nginx reverse-proxy rules.",
  },
];
