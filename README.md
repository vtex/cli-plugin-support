# VTEX CLI Plugin Support

Extend the `vtex` toolbelt!

## Developing

1. Clone `vtex/toolbelt` and follow the steps on the Contributing section.
2. Clone/Create a plugin with this template.
3. Change the template name under this project's `package.json`.
2. Run `yarn link` on this project.
3. Now run `vtex link @vtex/cli-plugin-support` (or the new name) on the `vtex/toolbelt` project.
4. Run `yarn watch` on the `vtex/toolbelt`
5. Test the command on a VTEX IO app with `vtex-test hello`

For more information, read [Ocliff Docs](https://oclif.io/docs/introduction).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-support)

<!-- toc -->
* [VTEX CLI Plugin Support](#vtex-cli-plugin-support)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @vtex/cli-plugin-support
$ vtex COMMAND
running command...
$ vtex (-v|--version|version)
@vtex/cli-plugin-support/0.0.1 linux-x64 node-v12.21.0
$ vtex --help [COMMAND]
USAGE
  $ vtex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vtex support ACCOUNT`](#vtex-support-account)

## `vtex support ACCOUNT`

Logs in as support to another VTEX account.

```
USAGE
  $ vtex support ACCOUNT

ARGUMENTS
  ACCOUNT  Name of the account to give support.

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced

EXAMPLE
  vtex support storecomponents
```

_See code: [build/commands/support.ts](https://github.com/vtex/cli-plugin-support/blob/v0.0.1/build/commands/support.ts)_
<!-- commandsstop -->
