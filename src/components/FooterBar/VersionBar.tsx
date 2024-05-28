import React from 'react'

import { Space } from 'antd'
import dayjs from 'dayjs'

import config from '@/config'

export interface VersionBarProps {
  className?: string
}
const VersionBar = (props: VersionBarProps) => {
  const { className } = props
  const generatedTime = dayjs(config.GENERATED_TIME).format('YYYY-MM-DD HH:mm:DD')

  return (
    <Space className={className} size={[46, 0]}>
      <span>UNNC IT Services © For Internal Use ONLY</span>
    </Space>
  )
}

export default VersionBar
