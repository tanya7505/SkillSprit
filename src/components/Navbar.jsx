import {Link , NavLink} from 'react-router-dom';




export default function NavBar(){
return(
    <div className='flex justify-between items-center bg-gradient-to-br from-[#8ed2ff] to-[#F9FAFB] py-3 px-8 shadow-sm'>
        <div className="flex items-center space-x-3">
        <h1 className=" text-3xl font-extrabold tracking-wide text-blue-700">SkillSpirit</h1>
       </div>
        <ul className='flex space-x-8 list-none text-base '>
            <li>
                <NavLink 
                to="/"
                className = {({isActive}) =>
                `hover:text-blue-600 font-medium text-lg cursor-pointer transition-colors duration-200 ${isActive? 'text-orange-700 hover:text-orange-700 ':'text-gray-700'}`}
                
                >
                    Home
                  
                 </NavLink>
               
            </li>
                
       
            <li>
                <NavLink 
                to="/features"
                className = {({isActive}) =>
                `hover:text-blue-600 font-medium cursor-pointer text-lg transition-colors duration-200 ${isActive? 'text-orange-700 hover:text-orange-700 ':'text-gray-700'}`}
                
                >
                    Features
                  
                 </NavLink>
               
            </li>
                
       
            <li>
                <NavLink 
                to="/about"
                className = {({isActive}) =>
                `hover:text-blue-600 font-medium cursor-pointer text-lg transition-colors duration-200 ${isActive? 'text-orange-700 hover:text-orange-700 ':'text-gray-700'}`}
                
                >
                    About
                  
                 </NavLink>
               
            </li>
                
       
            <li>
                <NavLink 
                to="/contact"
                className = {({isActive}) =>
                `hover:text-blue-600 font-medium cursor-pointer text-lg transition-colors duration-200 ${isActive? 'text-orange-700 hover:text-orange-700 ':'text-gray-700'}`}
                
                >
                    Contact
                  
                 </NavLink>
               
            </li>
                
        </ul>
    </div>
)
}