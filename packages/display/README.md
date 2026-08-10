# @tailor-cms/ce-page-break-display

End-user component for the **Section Break** content element in [Tailor CMS](https://github.com/tailor-cms/author).

Renders the element as learners see it in published content.

## Installation

```sh
npm install @tailor-cms/ce-page-break-display
```

## Usage

Content elements are normally registered with Tailor through the element
registry rather than imported directly, but the package can be consumed on its
own:

```ts
import { Display } from '@tailor-cms/ce-page-break-display';
```

## Element

| Property | Value |
| --- | --- |
| Name | Section Break |
| Type | `BREAK` |
| Icon | [`mdi-format-page-break`](https://pictogrammers.com/library/mdi/) |
| Composite | No |

## Packages

This element ships as four packages, published together from the
[`ce-page-break`](https://github.com/tailor-cms/ce-page-break) repository:

| Package | Role |
| --- | --- |
| [`@tailor-cms/ce-page-break-manifest`](https://www.npmjs.com/package/@tailor-cms/ce-page-break-manifest) | Shared element definition |
| [`@tailor-cms/ce-page-break-edit`](https://www.npmjs.com/package/@tailor-cms/ce-page-break-edit) | Authoring component |
| [`@tailor-cms/ce-page-break-display`](https://www.npmjs.com/package/@tailor-cms/ce-page-break-display) | End-user component |
| [`@tailor-cms/ce-page-break-server`](https://www.npmjs.com/package/@tailor-cms/ce-page-break-server) | Server-side module |

## Development

```sh
pnpm install
pnpm dev     # start the Content Element Kit runtime
pnpm build   # build all packages
pnpm test    # Playwright end-to-end suite
```

Changes are released with [changesets](https://github.com/changesets/changesets);
run `pnpm changeset` to record one.
