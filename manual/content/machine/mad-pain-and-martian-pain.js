// manual/content/machine/mad-pain-and-martian-pain.js
//
// Original retelling of Mad Pain and Martian Pain — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome; this
// file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Meet Maddy. Her pain doesn't show up when her body is damaged — it
    shows up when she does moderate exercise or lets her stomach go empty.
    And where our pain distracts and bothers us, hers instead sets her mind
    wandering pleasantly toward mathematics. She has pain, by all accounts,
    but it plays none of pain's usual causal role: not the typical trigger,
    not the typical effect. Call this mad pain.</p>
    <p>Now meet Marty. His pain plays exactly the role ours does — a pinch
    to his skin causes it, and it motivates him to avoid further pinching,
    just as it would for us. But Marty has no neurons at all. His mind runs
    on hydraulics: a network of inflatable cavities whose inflation opens
    and closes valves. When you pinch his foot, certain cavities inflate,
    and he experiences that process as pain. Call this Martian pain.</p>
    <p>David Lewis argued that any credible theory of mind needs to make
    room for both possibilities — pain that keeps the physical substrate
    but drops the causal role, and pain that keeps the causal role but
    drops the physical substrate. The trouble is that the two leading
    physicalist theories of the time each seem able to capture only one.
    The identity theory, which says pain is identical to a specific
    physical state (traditionally, c-fiber stimulation), easily explains
    Maddy's mad pain — her c-fibers still fire, just with atypical
    downstream effects — but it seems to rule Marty out entirely, since he
    has no c-fibers to be identical with anything. Functionalism has the
    opposite problem: it happily grants Marty pain, since whatever plays
    the role counts, hydraulics included, but it seems to rule Maddy out,
    since nothing in her plays pain's role at all.</p>
  `,

  stakes: `
    <p>The puzzle targets two mainstream physicalist accounts of mind at
    once. If neither the identity theory nor functionalism alone can
    accommodate both mad pain and Martian pain, physicalists need either a
    hybrid theory or a reason to give up one of the two possibilities as
    merely apparent.</p>
  `,

  tension: [
    {
      targets: "Lewis's own solution",
      label: "Analytic functionalism, relativized to species",
      text: "Lewis proposed analytic functionalism, which splits the work in two: the concept of pain is defined by its typical causal role, but pain itself is identified with whatever state actually plays that role in a given population. Marty has pain because his hydraulic states play the pain role among Martians generally. Maddy has pain because she has the neural state — c-fiber stimulation — that typically plays the pain role among humans generally, even though in her particular case it fails to play that role. The theory can even explain mad Martian pain this way, by relativizing the causal role to the Martian population rather than the human one.",
      reply: "Lewis acknowledges a real cost: this makes whether an individual feels pain depend partly on facts about their species or population, not solely on what's happening inside them — which strikes many as an odd result, since it seems facts about an individual's own experience shouldn't hinge on how typical members of their group are wired.",
    },
    {
      targets: "The theory's own limiting case",
      label: "Mad, alien, and unique pain",
      text: "Lewis considers a creature that is mad like Maddy, physiologically alien like Marty, and the sole member of its own species — with no population to be relativized to at all. Analytic functionalism cannot explain how this creature's pain is possible: it isn't playing the causal role (so it's not functionally qualifying), it doesn't have the human physical state (so it's not qualifying via human physiology), and there's no population of its own kind for its physical state to be typical within.",
      reply: "Lewis concludes that mad, alien, unique pain is in fact impossible, despite seeming no less conceivable at first than Maddy's or Marty's pain on their own — a cost he judges worth accepting given what the theory otherwise explains.",
    },
    {
      targets: "Broader methodological payoff",
      label: "Multiple realizability as a desideratum",
      text: "Martian pain is often read as a vivid illustration of the multiple realizability of mental states — the idea that a single mental kind like pain can be realized by brain states in humans, different biological states in other animals, hydraulics in Martians, or silicon in machines. Many philosophers treat accommodating multiple realizability as a central requirement any good theory of mind must meet, though some are more skeptical that the requirement is as demanding as it's often made out to be.",
    },
  ],

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Multiple Realizability", url: "https://plato.stanford.edu/entries/multiple-realizability/", note: "situates Martian pain within the broader multiple-realizability debate" },
    { label: "Stanford Encyclopedia of Philosophy — The Mind/Brain Identity Theory", url: "https://plato.stanford.edu/entries/mind-identity/", note: "background on the identity theory that mad and Martian pain jointly put pressure on" },
  ],
};
