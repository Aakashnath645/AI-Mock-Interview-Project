import {ReactNode} from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className ="auth-layout">{children}</div>
  )
}

export default layout