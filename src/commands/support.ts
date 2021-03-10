import { CustomCommand, ColorifyConstants } from 'vtex'
import authSupport from '../modules/login'

export default class Support extends CustomCommand {
  static description = `Logs in as support to another ${ColorifyConstants.ID('VTEX account')}.`

  static examples = [`${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex support')} storecomponents`]

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = [
    { name: 'account', required: true, description: `Name of the ${ColorifyConstants.ID('account')} to give support.` },
  ]

  async run() {
    const {
      args: { account },
    } = this.parse(Support)

    await authSupport(account)
  }
}
