# OvniUtils v0.4.2

![GitHub issues](https://img.shields.io/github/issues/ovniroto/ovniutils)
[![tag](https://img.shields.io/github/tag/ovniroto/ovniutils.svg)](https://github.com/ovniroto/ovni-utils/tags)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/ovniroto/ovniutils)
![GitHub License](https://img.shields.io/github/license/ovniroto/ovniutils)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fovniroto%2Fovni-utils.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fovniroto%2Fovni-utils?ref=badge_shield&issueType=license)

OvniUtils is a small library with utilities that I regularly use in my projects. You are free to use it, collaborate or fork it.

### Resources
- [Documentation](https://github.com/ovniroto/ovni-utils/wiki/Recipebook)
- [Changelog](https://github.com/ovniroto/ovni-utils/blob/main/CHANGELOG.md)

## Installation

Browser:
```html
<script src="https://cdn.jsdelivr.net/npm/ovni-utils@0.4.2/dist/ovniutils.min.js"></script>
```

Deno:
```js
import * as OU from 'https://esm.sh/ovni-utils@0.4.2'
```

Node:
```sh
$ npm i ovni-utils
```
```js
import * as OU from 'ovni-utils'
```

## Configuration

### Change language
Some functions can return text. You can change the language of that text by config.
```js
OU.setConfig({ language: 'es-ES' }) // Valid languages: es-ES, en-US (default: en-US)
OU.formatTimestamp(1695371156, "dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Viernes, Septiembre 22, 2023, 10:25:56 AM"
```