import './App.css'
import img from "./assets/images/img.jpeg"

function App() {
 
  return (
    <>
     <div className='min-h-screen flex justify-center items-center  bg-[hsl(0,0%,8%)]'>

      <div className='bg-[hsl(0,0%,12%)] flex- flex-col inter w-[340px] p-4 rounded-lg'>
          <div className='flex justify-center items-center mt-4'>
            <img src={img} alt="Jessica Randall Image" className='rounded-full w-[60px]'/>
          </div>
          <p className='text-[hsl(0,0%,100%)] text-center text-xl font-bold mt-4'>Jessica Randall</p>
          <p className='mt-2 text-xs text-[hsl(75,94%,57%)] text-center font-semibold mb-4'>London,United Kingdom</p>
          <p className='text-[hsl(0,0%,100%)] text-center mb-4 text-xs'>"Front-end developer and avid reader."</p>

          <div className='w-full flex flex-col gap-4 py-2 cursor-pointer'>

            <div className='bg-[hsl(0,0%,20%)] text-center py-2 p rounded-md text-[hsl(0,0%,100%)] hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,20%)] font-bold'>
              Github
            </div>
    

            <div className='bg-[hsl(0,0%,20%)] text-center py-2  rounded-md text-[hsl(0,0%,100%)] hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,20%)] font-bold'>
              Frontend Mentor
            </div>

            <div className='bg-[hsl(0,0%,20%)] text-center py-2  rounded-md text-[hsl(0,0%,100%)] hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,20%)] font-bold'>
              LinkedIn
            </div>

            <div className='bg-[hsl(0,0%,20%)] text-center py-2  rounded-md text-[hsl(0,0%,100%)] hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,20%)] font-bold'>
              Twitter
            </div>

            <div className='bg-[hsl(0,0%,20%)] text-center py-2  rounded-md text-[hsl(0,0%,100%)] hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,20%)] font-bold'>
              Instagram
            </div>


          </div>
      </div>

     </div>
    </>
  )
}

export default App
