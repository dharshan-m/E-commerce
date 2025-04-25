import BGimage from '../assets/Images/BGimage.jpg';
type Props = {}

export default function HeroSection({}: Props) {
  return (
    <div className='relative'>
        <div className=' w-[100%] h-[615px] bg-black'>
            <img className='image-fit w-[100%] h-[615px] opacity-50' src={BGimage} alt="BG Image" />
        </div>
        <div className='absolute top-[20%] left-[10%] flex flex-col gap-3 mt-20 '>
            <text className="text-5xl font-bold text-white">TimeLess Fassion,</text>
            <text className='text-5xl font-light text-white'>Conscious Choices</text>
            <p className='w-[450px] text-sm font-medium mt-3 text-white'>Sustainable designed, effortlessly worn. Our pieces are made with premium materials, and wardrobe that stands the test of time</p>
            <div className='bg-black w-[200px] h-[50px] rounded-4xl text-center flex justify-center items-center mt-5'>
                <button className='text-white cursor-pointer'>Explore the Collections</button>
            </div>
        </div>
    </div>
  )
}