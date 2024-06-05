import React from 'react'

import { CompressOutlined, ExpandOutlined, GithubOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'
import cs from 'classnames'
import { useFullScreen } from '@/hooks'

import styles from './index.module.less'

export interface HeaderBarProps {
  className?: string
  children?: React.ReactNode
}

const { Link } = Typography

const { Header } = Layout

const HeaderBar = (props: HeaderBarProps) => {
  const { className, children } = props
  const { fullScreen, toggleFullScreen } = useFullScreen()

  return (
    <>
      <Header className={cs(styles.header, className)}> 
        <div className={styles.logoBar}>
          <Link href="/">
            <img alt="logo" src="https://it230609teststr.blob.core.windows.net/itchatbot230619essentials/unilogo.png" />
            <h1>Microsoft Azure AI</h1>
          </Link>
        </div>
        {children}
        <Space className={styles.right} size={0}>
          <span className={styles.action} onClick={toggleFullScreen}>
            {fullScreen ? (
              <CompressOutlined style={{ fontSize: 16 }} />
            ) : (
              <ExpandOutlined style={{ fontSize: 16 }} />
            )}
          </span>
        </Space>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar
