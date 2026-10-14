// manual/content/consciousness/hornswoggle-problem.js
//
// Original retelling of The Hornswoggle Problem — a paraphrase of the
// book's chapter, not a quotation. Credit lives in the page chrome;
// this file holds only the paraphrased content.

export const entry = {
  case: `
    <p>Picture a team of astronomers working in the late 1700s, tracking
    the orbits of the planets. Every planet's orbit precesses — the
    point of closest approach to the sun gradually shifts position over
    time — and Newtonian mechanics predicts those precessions well,
    except for one holdout. Mercury's orbit precesses by about 43
    seconds of arc per century more than Newton's theory says it should.
    The astronomers aren't especially worried: maybe it's the pull of
    some undetected planet, maybe interplanetary dust, maybe something
    else mundane. It looks like a problem that more time and more data
    will clear up.</p>
    <p>Meanwhile, the same astronomers are far more pessimistic about a
    different question: what are stars actually made of? There seems to
    be no conceivable way to get a sample of stellar material to
    analyze, so this looks less like a problem awaiting more data and
    more like a problem that might never be solvable at all.</p>
    <p>History reversed their judgment completely. The "easy" Mercury
    problem turned out to need nothing less than Einstein's general
    relativity — specifically, the insight that spacetime itself is
    curved — and took over a century to resolve. The "impossible" stellar
    composition problem turned out to be comparatively straightforward
    once spectroscopy let scientists read the chemical signatures in
    starlight, revealing — to everyone's initial surprise — that stars are
    mostly hydrogen and helium, the two lightest elements, rather than
    the heavier elements that make up planets like Earth. Patricia
    Churchland takes the moral to be blunt: those 18th-century
    astronomers had no reliable way to tell, in advance, which problem
    was really the hard one. They got hornswoggled — fooled into a
    confident judgment about difficulty that the actual science later
    overturned.</p>
  `,

  stakes: `
    <p>Churchland aims this directly at philosophers who treat the hard
    problem of consciousness as uniquely intractable, perhaps even
    unsolvable in principle. Her point isn't that consciousness is
    definitely easy; it's that philosophers' confident intuitions about
    which problems science can and can't crack have a poor track record,
    and the history of science is, as she puts it, full of phenomena once
    pronounced permanently mysterious that eventually got explained
    anyway. Her advice: don't put too much weight on anyone's heartfelt
    conviction about what's scientifically tractable when so little is
    actually known yet — learn the science, do the science, and see what
    happens.</p>
  `,

  tension: [
    {
      targets: "Draws a parallel to vitalism",
      label: "Life looked irreducible too, once",
      text: "Dennett makes a related move without using Churchland's term: vitalists once thought that life itself required something over and above biological function — some additional substance, élan vital — to explain it. They were simply wrong; a complete functional story turned out to explain life after all. Why, Dennett and Churchland both ask, should consciousness be any different?",
    },
    {
      targets: "Classifies the response within Chalmers's taxonomy",
      label: "A premature peace between easy and hard",
      text: "Chalmers's own taxonomy of responses to the hard problem distinguishes type-A materialists (who think explaining the functions dissolves the problem entirely), type-B materialists (who accept a real explanatory gap but deny it signals any non-physical reality), and type-C materialists (who attribute the apparent gap to our current ignorance, without saying the problem is impossible in principle). Churchland's hornswoggle argument fits most naturally as type-C.",
      reply: "Chalmers argues type-C materialism is an unstable resting point that collapses into one of the other categories — and on this diagnosis, Churchland's view collapses into type-A: the eventual solution will just be a functional explanation, one we currently can't anticipate only because we don't yet have it, with our present inability to see the explanation hornswoggling us into overrating the problem's difficulty.",
    },
    {
      targets: "Challenges the scientific analogies as disanalogous",
      label: "Those analogies assumed function was all there was",
      text: "A further objection targets Churchland's historical analogies directly: the Mercury and stellar-composition cases, like the vitalism case, were always, at bottom, questions about function — how blood circulates, what starlight reveals, how an orbit precesses. Nobody doubted a functional explanation would eventually settle them. Consciousness poses a different kind of puzzle: the trouble isn't that we can't yet see how to explain the relevant functions, but that something seems to remain even once every function is explained. If so, the historical precedents may not transfer to the case they're meant to illuminate.",
    },
  ],

  furtherReading: [
    { label: "Wikipedia — Patricia Churchland", url: "https://en.wikipedia.org/wiki/Patricia_Churchland", note: "background on the philosopher who coined the hornswoggle problem" },
    { label: "Wikipedia — Hard problem of consciousness", url: "https://en.wikipedia.org/wiki/Hard_problem_of_consciousness", note: "the target of Churchland's hornswoggle argument" },
  ],
};
