import './Sidebar.css';
import logo from '../../imgs/logo.png';
import { SidebarData } from '../../dashboarddata/data';
import {motion} from 'framer-motion';
import {  useState } from 'react';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import {UilBars} from '@iconscout/react-unicons';
//mport Bar from '../Bar/Bar';

const Sidebar = () => {
    const [selected,setSelected] = useState(0);
    const [expanded,setExpanded] = useState(false);

    const sidebarVariants = {
      true: {
        left :'0'
      },
      false : {
        left : '-60%'
      }
    }

    return ( 
      <>
      <div className="bars" style={expanded ? {left:'60%'} : {left : '5%'} }
       onClick={()=> {setExpanded(!expanded)}}  >
        <UilBars/>
      </div>
        <motion.div className="sidebar"
         variants={sidebarVariants}
         animate = {window.innerWidth <= 768 ? `${expanded}` : ''} >

            <header>
                <img src={logo} alt="logo" />
              <span>Sh<span>o</span>ps</span>
            </header>
              <div className="menu">
             {SidebarData.map((sidebar,index)=> (
                <div className={selected === index ? 'menu-preview active' : 'menu-preview'} key={index}
                  onClick={()=>setSelected(index)}  >
                <sidebar.icon/>
                    <span>{sidebar.title}</span>
                </div>
             ))}

             <div className="menu-preview bottom">
                <UilSignOutAlt/> 
                  <span>Logout</span>
             </div>
                 
           </div>
        </motion.div>
        </>
     );
}
 
export default Sidebar;