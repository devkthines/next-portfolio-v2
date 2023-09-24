'use client'

import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

export default function Resume(){
    return(
        <>
  <Timeline onChange={onChange}>
    <Timeline.Item>Sample</Timeline.Item>
  </Timeline></>
    )
}