'use client'
// import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
export default function ProjectModal() {
    const [button, setButton] = useState(<AiFillCloseCircle></AiFillCloseCircle>)
    const projects = [{
        "id": 1,
        'description': 'description 1'
    },
    {
        "id": 2,
        'description': 'description 2'
    },
    {
        "id": 3,
        'description': 'description 3'
    },
    ]
    return (
        <>
            {/* <div>
                <button
                    onMouseEnter={() => setButton(<AiOutlineCloseCircle></AiOutlineCloseCircle>)}
                    onMouseLeave={() => setButton(<AiFillCloseCircle></AiFillCloseCircle>)}
                >
                    {button}
                </button>
                <div>
                    <img src="" alt="" />
                </div>
            </div> */}
            {projects.map(x=<{

            })}
            
        </>
    )
}