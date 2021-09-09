---
title: Writing documentation
description: Primer documentation should express the voices and contributions of different people, but for it to be useful it’s important to be consistent in tone and structure. 
---

Please read and follow these guidelines carefully when writing documentation, so that as many people as possible can benefit from Primer.

## Primer documentation principles

### Concise but friendly
A large proportion of readers want to find an answer that helps them complete a task, so don't waste their time with unnecessary words. That doesn't mean talking like a robot though: a sprinkling of humor is fine as long as it doesn't make the documentation harder to parse or distract from instructions.

### Universally understood
Avoid using phrases or referencing examples that are only familiar internally at GitHub. Assume readers are either members of the public or new to GitHub.

### Production quality
Code examples should promote what we'd like to see used in production. People copy and paste code examples as a starting point for building interfaces, and/or reference the guidelines for examples of correct implementation. While examples might be simpler than what we'd use in production, the code should promote best practices and follow our principles and accessibility standards.

## Audience
Primer documentation is primarily aimed at GitHub designers and engineers at various levels of experience, but folks in other areas will also benefit from and use the guidelines.

### Assumed knowledge

**Do:**
- In design docs, assume the reader knows basic design concepts and principles, such as the need for consistency, and terms such as “white space” or “scale”.
- When referring to GitHub-specific terminology, link to a glossary of terms, or another document where the reader can learn more.
- When referring to terms and ideas the reader may want to know more about, link to authoritative sources, such as [MDN](https://developer.mozilla.org/en-US/) and the [W3C](https://www.w3.org/).
- In non-engineering docs, use code examples as necessary to ensure consistency and appropriate usage, but don't assume expertise in any programming language.

**Don’t:**
- Don’t assume the reader knows about internal GitHub terminology.

## Aspirational guidelines

Guidelines can be aspirational, as long as what is documented is possible to implement with Primer. Guidelines should document and promote what we want folks to do with Primer, and not cover all possible variations.

Design guidelines should not document patterns that are not possible to create with the current system. If you're writing guidelines for a feature that is upcoming, but not yet ready in implementation, you can have the content ready in a pull request, to be published when the implementation ships.

## Voice and tone

- Write as you speak, then tidy it up.
- Write affirmative sentences wherever possible. 
- Be clear and concise. 
- Use [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood), so that instructions are clear. 
- Remove  unnecessary words, like adverbs, and keep sentences and paragraphs short.
- Don’t sound like a robot or too formal.
- Don’t use sarcasm or irony, they may not translate well.
- Avoid double negatives.
- Avoid using expressions like “easy”, “simply”, “quick”, “just”. 
- Avoid idioms, they can be hard to understand and translate.
  - **Do:** “As a general rule”
  - **Don’t:** “As a rule of thumb”
- Don't use the passive voice to avoid using the word “you” (but remove it if unnecessary).
  - **Do:** “Open Figma”, “Submit an issue if you find a bug”
  - **Don’t:** “Figma can be opened”, “You can open Figma”, “If a bug is found, submit an issue”
- Avoid the possessive "our", and avoid addressing Primer as "our design system”.
	- **Do:** “In the Figma library…”
	- **Don’t:** “In our Figma library…”
- Use "we" consistently to refer to the Design Systems / Infrastructure team, not to GitHub as a whole.

## Grammar and usage

Follow the [GitHub content guidelines](https://brand.github.com/content/), in particular:

- Follow US spelling.
  - **Do:** “Color palette”
  - **Don’t:** “Colour palette”
- Use sentence case for titles.
  - **Do:** “Utility classes”
  - **Don’t:** “Utility Classes”
- Capitalize only [proper nouns](https://en.wikipedia.org/wiki/Proper_noun) and [product names](https://brand.github.com/content/terminology#products-ecosystem-and-programs).
  - **Do:** “Open a pull request"
  - **Don't:** "Open a Pull Request"
- Avoid positional language.
  - **Do:** “The list that follows”
  - **Don’t:** “The list below”
- Use contractions.
  - **Do:** “Don’t use this class”, “We’re happy to see you!”
  - **Don’t:** “Do not use this class”, “We are happy to see you.”
- Exclamation points are OK, in moderation.

## Images and other examples

Use this [Figma template](https://www.figma.com/file/YQT3nlmvSdZRPBnkDXvTFk/Doctocat-content-template?node-id=0%3A1) (GitHub staff only) to create images that are consistent across Primer documentation.

When creating images with example UI for docs make sure that:
- All documentation examples should be of real github.com examples
- Examples only include the most important part of the UI, and don't try to show the entire UI
- Do not include fake copy (for example, say "New issue" instead of "Button" as the text inside a button)

## References

- If mentioning or referring to other styles and documentation, always link to the source.
- Reference an existing guide by linking to it, rather than duplicating the content. However, if this makes the documentation harder to follow, consider providing that reference in the document itself (for example: spacing scale, abbreviations).

## Publishing checklist

- Spellcheck text with an automated tool
- Spellcheck UI text in image examples
- Ask someone else to proofread the document including images - they may catch something you missed
- Test all the links
  - Indicate links that only work for GitHub staff (for example, "for GitHub staff only", or "only accessible to GitHub staff")
- Verify there isn’t any private or sensitive information
- Verify that all images include an alt text

## Review process

All pull requests for new and updated guidelines should be reviewed and approved by a member of the Design Infrastructure team. 

## Design guidelines template
Even though some guidelines follow a different format, most can use the following template as a starting point. Required sections are indicated.

💡 The [action list component](https://primer.style/design/components/action-list) documentation is a good example of design guidelines.

| Section                  | Description                                                                        | Notes                                                                                                                                           |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Name / Title (required)         | Name of the component                                                                                                        | Use the singular form. Keep it as short as possible. Use sentence case ("Select menu", and not "SelectMenu").                                                                                                   |
| Description (required)  | In a sentence, what is this component used for.                      | It should allow the reader to decide if they should continue reading or move on. Avoid going into specific usage and implementation detail. Don’t include guidelines. Don’t repeat words from the title to describe the content. |
| Anatomy (required)       | A labelled image of the most representative view(s) of the component, followed by a glossary of the constituent parts.                                                               | What smaller components constitute the larger pattern.                  |
| Usage (required)         | List of dos and donts covering the most important ways of how to (and not) use the component. This section can also be referred to as **Options**.        | Consider when and how this component could be used incorrectly, what are the ideal ways of using it, special cases, alternative components (include links if needed).                                        |
| Hierarchy and placement            | Where to use the component and how it interacts with the rest of the UI.                                                                              | Include images and dos and donts of how the component should be used within the UI.         |
| Accessibility            | Accessibility considerations when using the component.                                                                              | Include keyboard navigation, descriptions, common mistakes to avoid.         |
