// manual/content/perception/change-blindness.js
//
// Original retelling of Change Blindness — a paraphrase of the book's
// chapter, not a quotation. Credit lives in the page chrome; this file
// holds only the paraphrased content.

export const entry = {
  case: `
    <p>You're shown drawing A, then drawing B. They look identical. You look
    again — still nothing. On a third look, it finally jumps out: in
    drawing B, a person in the scene is missing their glasses. This is
    change blindness, and it isn't a lab curiosity confined to artificial
    stimuli. In one field study, an experimenter stopped a pedestrian to ask
    for directions; midway through the conversation, two confederates
    carrying a door walked between them, and the original experimenter
    swapped places with one of the door-carriers while hidden behind it.
    About half the pedestrians kept giving directions to a completely
    different person, in different clothes, without noticing the switch.</p>
    <p>A related phenomenon, inattentional blindness, doesn't even require
    comparing two scenes. Subjects asked to count basketball passes between
    players wearing white, while ignoring players wearing black, often fail
    entirely to notice a person in a gorilla suit who walks through the
    middle of the game, thumps their chest, and walks off — about half the
    subjects in the classic version of this study report afterward that
    they never saw the gorilla at all.</p>
    <p>What should we conclude from cases like these? Did you consciously
    see the glasses, before the third look? Did the pedestrian consciously
    see that the person they were talking to had changed? Did the gorilla
    ever show up in anyone's conscious visual experience? One tempting
    conclusion is that conscious visual perception is sparse — far less rich
    and complete than it feels like it is. We tend to assume our conscious
    visual field captures roughly everything a color photograph would, but
    that assumption may just be an illusion generated the same way the
    inside of a running refrigerator seems to always be lit: you only ever
    check when the light is already on, so you never catch the gap. Likewise,
    whenever you wonder whether you're seeing something, you turn your
    attention to it and immediately do — which makes it feel like
    everything in the visual field was already consciously present all
    along, even if most of it wasn't.</p>
  `,

  stakes: `
    <p>The default model of conscious vision treats it like a continuously
    running color photograph or video of whatever's in front of your eyes,
    missing only a small blind spot where the optic nerve attaches to the
    retina. Change blindness and inattentional blindness directly challenge
    that model. If subjects routinely fail to notice an eighth person
    joining a group, or a change to a scene, or a gorilla walking through a
    basketball game, conscious perception may be a far more selective,
    attention-gated process than the photograph model suggests — raising
    the question of whether what we don't notice was ever consciously
    experienced in the first place, or whether it was experienced but simply
    inaccessible to report.</p>
  `,

  tension: [
    {
      targets: "Defends the sparse view",
      label: "Conscious perception is more like drawing than photographing",
      text: "Michael Tye argues that consciously seeing works less like taking a photograph and more like a constructive process akin to drawing a picture — a process that necessarily leaves things out. Tye holds that unconscious vision may register far more than conscious vision does, so our visual field, taken as a whole including unconscious processing, has no gaps, even though conscious perception itself is genuinely sparse.",
    },
    {
      targets: "Complicates the sparse view empirically",
      label: "Forced-choice tests show the visual system registers more than subjects notice",
      text: "When subjects who claim two pictures look identical are forced to guess, in a forced-choice task, which of several pairs actually differ, they pick the genuinely different pairs at above-chance rates. This shows the visual system is registering and representing information about the unnoticed change on some level — which makes it misleading to say, flatly, that the subject is blind to it in every sense.",
      reply: "This result doesn't settle whether the registration is conscious. It's consistent with the information being picked up entirely unconsciously, with conscious awareness only kicking in once attention is specifically directed at the changed item — exactly what the sparse view would predict.",
    },
    {
      targets: "Defends the rich view",
      label: "You do consciously see it — you just don't notice that you do",
      text: "Fred Dretske argues conscious perception is in fact rich, roughly as rich as naively assumed, and that failures like change blindness reflect a failure to notice, not a failure to see. His case: if an unnoticed added element in a scene had instead been a strikingly different color or orientation, you would have spotted the difference instantly, which shows you already know things about that element based on how it looks — and knowing something about an item based on how it looks is exactly what seeing it consists in. You saw the eighth person at the table; you just didn't notice that you did.",
      reply: "Dretske's argument can be resisted on a couple of fronts: everything he describes is compatible with the color and orientation of the unnoticed item being detected only unconsciously, and there's a difference between knowing how a scene looks taken collectively and knowing how each individual element in it looks, which the forced-choice evidence doesn't clearly distinguish.",
    },
    {
      targets: "Reframes the puzzle",
      label: "Phenomenal overflow: rich experience, poor access",
      text: "Ned Block proposes a middle path he calls phenomenal overflow: conscious experience may in fact be rich, representing far more than we can report, while our cognitive access to the details of that experience is comparatively poor. Block points to classic experiments where subjects briefly shown a grid of letters report seeing most or all of them, yet can only accurately report about half — unless a cue, given right after the display disappears, tells them which specific row to report, in which case they get that row right. This suggests the whole grid may have been consciously experienced all along, with only access to its details being limited — and the same pattern, Block suggests, may be exactly what's happening in change blindness.",
    },
  ],

  furtherReading: [
    { label: "Wikipedia — Change blindness", url: "https://en.wikipedia.org/wiki/Change_blindness", note: "overview of the empirical phenomenon, including the door and gorilla studies" },
  ],
};
