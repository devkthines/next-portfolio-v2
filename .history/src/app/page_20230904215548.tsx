import Image from 'next/image'
import Header from './components/header.js'
import uglyMe from '../../images/41AE497E-8D5A-46DE-8679-1C35226F5747.jpg'
export default function Home() {
  return (
    <main className="flex flex-col">
<Header></Header>
<div className=' bg-stone-800 border border-indigo-600 bg-no-repeat flex flex-row justify-between'>
<div>
  <h1>Hello, my name is Korey, a web developer/creative person</h1>
</div>
<Image id='portrait' src={uglyMe} alt="" className='w-48'/>
</div>
<div id='about'>
  <div><h1>About </h1>
  <div><p>lorem</p></div>
  </div>
</div>
<div><h1>Project tiles</h1></div>
    </main>
  )
}
