import Image from 'next/image'
import Header from './components/header.js'
import uglyMe from '../../images/41AE497E-8D5A-46DE-8679-1C35226F5747.jpg'
export default function Home() {
  return (
    <main className="flex flex-col">
<Header></Header>
<div className=' bg-gray-800 border border-indigo-600 bg-no-repeat flex flex-row'>
<div></div>
<Image id='portrait' src={uglyMe} alt="" className='w-48'/>
</div>
    </main>
  )
}
