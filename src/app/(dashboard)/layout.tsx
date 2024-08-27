import { Sparkles } from 'lucide-react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='container max-w-6xl mx-auto min-h-screen p-20 md:p-30'>
      <div className='grid grid-cols-[1fr_auto]'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            Natural <br /> Language <br /> Processing with Python
          </h1>

          <p className='text-gray-500 text-xl md:text-2xl my-10 pr-10'>
            Answer your questions with our AI agent, ask it anything you want to
            know about the course.
          </p>

          <button className='flex gap-2 text-xl items-center font-light justify-center p-3 bg-black text-white rounded-lg hover:bg-gray-800 duration-100 ease-in w-[250px]'>
            <Sparkles />
            Get Started
          </button>
        </div>

        {children}
      </div>
    </main>
  )
}
