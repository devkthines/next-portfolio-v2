'use client'

import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function Resume(){
 const items = [{ children: 'sample', label: 'sample' }];
  return(
        <>
 <Timeline items={items} /></>
    )
}