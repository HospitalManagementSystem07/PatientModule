import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="navbar bg-base-100 text-white " style={{ backgroundColor: '#1e293b' }}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a >Services</a></li>
              <li><a>Contact</a></li>
              <li><a>Emergency</a></li>
              <li><a>Career</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Health.Care</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
            <li><a>Emergency</a></li>
            <li><a>Career</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn  ">Appointment</a>
        </div>
      </div>

     
      
      <div className="flex h-auto mt-20  "  >



        <div className="w-1/2 ">
        <h1 class="mb-4 text-2xl font-bold leading-none tracking-tight  md:text-5xl lg:text-5xl dark:text-white  mt-10 ml-20   " style={{ color: '#0f172a' }}> <div className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 2048 2048"><path fill="#38bdf8" d="M347 1024h-39l716 716l588-588h181l-769 769l-865-864q-35-35-62-75t-47-86h243l283-282l448 447l320-319l155 154h355q32-51 49-108t17-117q0-87-32-162t-89-130t-132-87t-163-32q-84 0-149 26t-120 70t-105 97t-106 111q-54-54-105-109t-106-99t-121-72t-148-28q-86 0-161 32t-132 89t-89 132t-33 162q0 47 11 97H9q-5-24-6-48t-2-48q0-113 42-212t116-173t173-116t212-43q83 0 148 19t120 52t106 81t106 103q55-56 105-103t106-80t121-53t148-19q112 0 211 42t172 116t116 172t43 211q0 97-34 188t-97 167h-470l-101-102l-320 321l-448-449z"/></svg>Health, </div><div className="flex gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#38bdf8" d="M29.121 16.879A2.98 2.98 0 0 0 27.01 16H27a2.98 2.98 0 0 0-2.121.879l-4.901 4.901A2.994 2.994 0 0 0 17 19h-7a5.006 5.006 0 0 0-5 5v.667l-3 3.996l1.6 1.2l3.4-4.53V24a3.003 3.003 0 0 1 3-3h7a1 1 0 0 1 0 2h-4v2h4.929a3.97 3.97 0 0 0 2.828-1.172l5.536-5.535A1 1 0 0 1 27 18h.003a1 1 0 0 1 .704 1.707l-7.414 7.414a2.98 2.98 0 0 1-2.122.879H11v2h7.171a4.97 4.97 0 0 0 3.536-1.465l7.414-7.414a3 3 0 0 0 0-4.242m-7.535-8.293L18 12V2h-2v10l-3.586-3.414L11 10l6 6l6-6z"/></svg>
        Hope, </div><div className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#38bdf8" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5.945 6.168l-1.11 1.664L10.697 14l-1.752 1.168l1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832l1.11-1.664L21.303 14l1.752-1.168zM9 19s1.605 5 7 5s7-5 7-5z"/></svg>    Happiness</div></h1>

        <p className="text-sm font-normal text-gray-900  dark:text-gray-900 ml-20">
  Your Health is our Priority. We are Committed To providing Patient-centric care Your Health is our Priority. We are Committed To providing Patient-centric care Your Health is our Priority. We are Committed To providing Patient-centric care.
</p>



        <button className="btn btn-wide  mt-4 text-white" style={{marginLeft:'100px', backgroundColor:'#38bdf8'}}>Read More</button>
        </div>

       

        <div className="flex  w-auto  ml-20" >
          <div className=" relative h-96 rounded-tl-full  " style={{height:'420px', backgroundColor:'#020617', width:'675px'}}>

          </div>

          <div className="absolute">
          <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src="https://media.istockphoto.com/id/1201645655/photo/human-digestive-system-on-scientific-background.jpg?s=1024x1024&w=is&k=20&c=-M_-MQYMVpHs3ikLx2XJBsbjObrd6cLJnIKckVHIXzs="
      alt="nature image"
    />
          </div>
        </div>
      </div>

    </div>

    
  );
}
