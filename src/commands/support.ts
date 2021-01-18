import { CustomCommand } from 'vtex'
import authSupport from '../modules/login'

export default class Support extends CustomCommand {
  static description = 'Login as support into another VTEX account'

  static examples = ['vtex support storecomponents']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = [{ name: 'account', required: true }]

  async run() {
    const {
      args: { account },
    } = this.parse(Support)

    await authSupport(account)
  }
}
