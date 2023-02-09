import Image from "next/image"
import Link from "next/link"
import {MdKeyboardArrowDown} from 'react-icons/md'
import {HiOutlineBars3} from 'react-icons/hi2'
import { useState } from "react"
import {AiOutlineCloseCircle} from 'react-icons/ai'


const Header = () => {

  const [DropMenu, setDropMenu] = useState(false);
  const [Open, setOpen] = useState(false);



  



  return (
    <header className="HeaderContainer">
        <Image src={`/logo.png`} width={80} height={55}></Image>

        <div className="RightHeader">


 
            <Link href="#">الرئيسية</Link>
            <Link href="#">من نحن</Link>
            <div>
              <Link href="#" className="DropDownLink">مشاريعنا <MdKeyboardArrowDown className="Icon" /></Link>

              <ul>
                <a><li>GGEG Gaming Platform</li> <span className="BackgroundA"></span></a>
                <a><li>GGEG Business</li> <span className="BackgroundA"></span></a>
                <a><li>GGEG Advertiser</li> <span className="BackgroundA"></span></a>
              </ul>
            </div>
            <Link href="#">تواصل معنا</Link>
            
        </div>


        {
          Open ?         <div className="RightDivForScreens">
          
      

          <div className="InnerScreens">
              <AiOutlineCloseCircle onClick={()=> setOpen(false)} className="closeIcon" />


    

              <Link href="#">الرئيسية</Link>
  
              <Link href="#">من نحن</Link>

              <div>
                <Link href="#" onClick={()=> setDropMenu(!DropMenu)} className="DropDownLink"><MdKeyboardArrowDown className="Icon" /> مشاريعنا </Link>

                <ul style={DropMenu ? {animation: `.3s OpenDrop ease-in forwards`} : {                        animation: `.1s CloseDrop ease-in forwards`}}>
                  <a><li>GGEG Gaming Platform</li> <span className="BackgroundA"></span></a>
                  <a><li>GGEG Business</li> <span className="BackgroundA"></span></a>
                  <a><li>GGEG Advertiser</li> <span className="BackgroundA"></span></a>
                </ul>
              </div>

              <Link href="#">تواصل معنا</Link>

          </div>

      </div> : <></> 
        }

        <HiOutlineBars3 onClick={()=> setOpen(true)} className="BarsIcon" />
    </header>
  )
}

export default Header
