// manual/content/meaning/swampman.js
//
// Original retelling of Swampman — a paraphrase of the book's chapter,
// not a quotation. Credit lives in the page chrome; this file holds only
// the paraphrased content.

export const entry = {
  case: `
    <p>Donald is out walking near a swamp when lightning strikes. The bolt
    does two things at once: it vaporizes Donald completely, and it fuses a
    nearby dead tree into a molecule-for-molecule replica of him. Call the
    replica Swampman. Swampman's body and brain are, down to the last
    detail, identical to Donald's an instant before he died — scan them
    side by side and you'd see no difference besides the timestamp. Ask
    Swampman his name, his opinions, his memories, and he answers exactly
    as Donald would have. The resemblance is a pure accident of physics,
    astronomically unlikely but exactly what happened.</p>
    <p>Here is the catch. Before the lightning, Donald's beliefs and
    perceptions were about things — his belief that grass is green was
    about grass and about greenness. On a family of theories called
    teleological theories of content, that "aboutness" depends on history:
    Donald's grass-related brain states count as being about green things
    partly because states of that type have, over his lifetime (and over
    evolutionary time), reliably tracked encounters with green things. Take
    away that track record and, according to these theories, there's
    nothing left to anchor the content.</p>
    <p>Swampman has no track record at all. He popped into existence a
    moment ago; nothing in his history has ever co-varied with grass, or
    with anything else, because he has no history. Yet it feels obviously
    wrong to say that when Swampman says "grass is green," he isn't
    thinking about grass — or thinking anything in particular. The same
    tension spreads to consciousness itself, for anyone who holds that the
    felt quality of an experience just is its representational content: if
    teleological theories are required to explain that content, and
    Swampman can't have the right kind of history, it would seem to follow
    that there's nothing it's like to be Swampman at all — he'd be
    behaviorally identical to a person but experientially blank.</p>
  `,

  stakes: `
    <p>The puzzle targets theories that try to explain mental content —
    why a thought is about grass rather than about nothing, or about
    something else entirely — using only naturalistic resources, without
    smuggling in some unexplained primitive "aboutness." Teleological
    theories, most influentially developed by Ruth Millikan, do this by
    tying content to function, and function to a thing's selection
    history: a state represents what it was selected (by evolution, or an
    analogous process) for tracking. That's an attractive way to keep
    mental representation inside the natural world. Swampman is a stress
    test: a being who is physically and behaviorally a perfect match for a
    normal thinker, but who utterly lacks the selection history the theory
    says content depends on.</p>
  `,

  tension: [
    {
      targets: "Keep teleology, drop the history",
      label: "Function without a past",
      text: "Some theorists, including Bence Nanay, try to save the appeal to function while cutting its tie to actual history: a trait has a function if having it would contribute to the organism's fitness, whether or not it has ever actually done so in the past. On this ahistorical version of teleology, Swampman's states can have functions, and therefore content, the moment he springs into existence, since fitness-contribution doesn't require a track record.",
    },
    {
      targets: "Deny the intuition",
      label: "Trust the theory over the gut reaction",
      text: "Karen Neander argues the honest move is to accept that Swampman has no mental content, however strange that sounds, and to explain away the contrary intuition rather than defer to it. She points to a precedent: we have a strong intuitive pull to think there could be a substance just like water in every observable respect that still isn't water, yet that intuition turns out false, since water simply is H2O. Likewise, our intuition that Swampman must have thoughts about grass may just be mistaken about what representational content actually requires.",
    },
    {
      targets: "Restrict the theory's scope",
      label: "Hypothetical cases don't count",
      text: "David Papineau suggests that teleological theories were only ever meant to explain actual cases of representation, so a merely hypothetical, freakish case like Swampman's simply falls outside what the theory is answerable for.",
    },
    {
      targets: "Add a ceteris paribus clause",
      label: "Other things aren't equal here",
      text: "Michael Tye defends representationalism about phenomenal character by pointing out that the causal co-variation story, like most scientific generalizations, implicitly carries an \"other things being equal\" clause — the way \"mixing an acid and a base produces salt\" isn't refuted by a dropped beaker that spills the mixture before the reaction completes. Swampman is exactly this kind of non-optimal case: his existence doesn't falsify the general co-variational account of representation, because, in Tye's words, \"ceteris is not paribus\" for him.",
    },
  ],

  note: `
    <p>The example first appears in Donald Davidson's 1987 paper "Knowing
    One's Own Mind" (the name "Donald" for the pre-lightning man is an
    echo of Davidson's own first name), though related worries about
    teleological theories and freak duplicates had already circulated
    before that, including a case Karen Neander later called
    "Swampcow."</p>
  `,

  furtherReading: [
    { label: "Stanford Encyclopedia of Philosophy — Teleological Theories of Mental Content", url: "https://plato.stanford.edu/entries/content-teleological/", note: "surveys teleosemantics and the Swampman objection in detail" },
  ],
};
