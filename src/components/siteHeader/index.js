import React from 'react'

import { DragIcon, ExpandIcon } from '@jetbrains/ring-ui/components/icon'

import Header, {
  Logo,
  Tray,
  TrayIcon

} from '@jetbrains/ring-ui/components/header/header'
import Link from '@jetbrains/ring-ui/components/link/link'
import Input from '@jetbrains/ring-ui/components/input/input'
import Button from '@jetbrains/ring-ui/components/button/button'
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown'
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu'

class SiteHeader extends Component {
  render () {
    return (
      <Header>
        <a href='/'>
          <Logo size={Logo.Size.Size48} />
        </a>
        <Link active href='#'>
          Users
        </Link>
        <Link href='#'>Groups</Link>
        <Link href='#'>Spaces</Link>
        <Link href='#'>Services</Link>
        <Tray>
          <TrayIcon primary title='Create issue' icon={ExpandIcon} />
          <Dropdown
            anchor={({ active }) => <TrayIcon active={active} icon={DragIcon} />}>
            <PopupMenu
              top={-12}
              closeOnSelect
              data={[{ label: 'Test' }, { label: 'Test2' }]}
            />
          </Dropdown>

        </Tray>
      </Header>
    )
  }
}

export default SiteHeader
