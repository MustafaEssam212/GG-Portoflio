
import {BsWhatsapp, BsFacebook, BsDiscord} from 'react-icons/bs'
import {GoArrowDown, GoArrowUp} from 'react-icons/go'
import { useEffect, useRef, useState } from 'react';
import Header from '@/Components/Header';
import { useMousePosition } from '@/Components/useMousePosition';


export default function Home() {

  const position = useMousePosition()

  const outsider = useRef()
 

  const [Height, setHeight] = useState(0);
  const [StartPoint, setStartPoint] = useState(0);
  const [EndPoint, setEndPoint] = useState(0);
  const [ScreenWidth, setScreenWidth] = useState(0);

  useEffect(()=>{
    setHeight(screen.height)
    setScreenWidth(screen.width)
  }, [])

  function scrollTop() {
    outsider.current.scrollBy({
      top: -Height,
      behavior: 'smooth'
    });
  }


  function scrollDown() {
    outsider.current.scrollBy({
      top: Height,
      behavior: 'smooth'
    });
  }



const handleClickingMove = () => {
  setEndPoint(position.y)
}


const handleMoving = () => {
  if(EndPoint > StartPoint){
    scrollDown()
  }else{
    scrollTop()
  }
}

/* 
onMouseDown={()=> handleClickingMove()} onMouseUp={()=> handleMoving()} onClick={()=> setStartPoint(position.y)}
*/


  return (
    <div className='HomeContainer'  ref={outsider} >

 

        <div className="First">
        <Header />
              <video muted autoPlay loop>
                  <source src="/video.mp4" type="video/mp4"></source>
              </video>


              <div className="BlackScreen"></div>


              <div className='OnVideo'>
                  <h1>GG<span>EG</span></h1>
                  <h2>شركة رائدة في تقديم خدمات وحلول لمجتمع <span>الرياضة الالكترونية</span> في مصر</h2>
       

                  <div className='FooterOnVideo'>

                      <div className='LeftFooterOnVideo'>
                          <a href='#' title='GG WhatsAPP'><BsWhatsapp className='VideoIcon' /></a>
                          <a href='#' title='GG Discord Server'><BsDiscord className='VideoIcon' /></a>
                          <a href='#' title='GG Facebook Page'><BsFacebook className='VideoIcon' /></a>
                      </div>




                  </div>
              </div>
        </div>


        <div className='RightFooterOnVideo' style={ScreenWidth > 1005 ? {top: `${(Height / 2) - 41.5}px`} : Height < 650 ? {top: `${Height - 130.5}px`} : {top: `${Height - 210.5}px`}}>
            <button onClick={()=> scrollTop()}><GoArrowUp className='ArrowIcon' /></button>
            <button onClick={()=> scrollDown()}><GoArrowDown className='ArrowIcon' /></button>
        </div>



        <div className='Second'>

             <h1><img src='/user.gif' width="80" height="80"></img> <span>نَحنُ؟</span> مَن  </h1>
          



            <div className='SecondContainer'>

                <div className='LeftSecond'>
                    <img src='/we.png'></img>
                </div>


                <div className='RightSecond'>

                    <h1>GGEG</h1>

                    <p className='AfterH'>:هي فكرة براند وشركة ناشئة لخدمة المجتمع الرياضة الإلكترونية في مصر وتتكون من</p>


            
                      <h2>منصة</h2>
                      <p>تنظيم الفرق والنوادي الالكترونية وتسهيل اشتراك الفرد في البطولات والمسابقات المحلية في مجال الرياضةالالكترونية <span className='Circle'></span></p>
                      <p>سوق ومتجر الكتروني للمستلزمات والاجهزة الالكترونية يربط بين اللاعبين والبراندات والموزعين بشكل آمن وموثق <span className='Circle'></span></p>


                      <h2>علامة تجارية لمقاهي انترنت تنافسيه</h2>
                      <p>يوفر امتياز لمقاهي الإنترنت -سايبرات- لتنظم بطولات وفعاليات الرياضات الإلكترونية بشكل أمن ومراقب ورياضي وتصنيفها ك حلبات رياضية <span className='Circle'></span></p>
                      <p>جهة داعمة  للرياضات الإلكترونية تسعي للتعميم ثقافه مقاهي الانترنت الموثقة داخل النوادي و مركز الشباب تحت اشراف الجهات المسئولة لدعم المسابقات و البطولات الالكترونية <span className='Circle'></span></p>

                </div>

            </div>



        </div>

    </div>
  )
}
