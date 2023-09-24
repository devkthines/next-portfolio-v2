'use client'

import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { Collapse } from 'antd';
export default function Resume(){
 const items = [{ children: 'sample', label: 'sample' }];
  return(
        <>
 <Timeline items={items} /></>
    )
}