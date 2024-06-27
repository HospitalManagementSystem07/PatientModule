"use Client";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
export default function Home() {

  // const router = useRouter();
   

  return (

  

    <div>
    <div className="navbar bg-base-100 text-white sticky z-10 top-0" style={{ backgroundColor: '#1e293b' }}>
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
        <li> <a>Services</a></li>
        <li><a>Contact</a></li>
        <li><a>Emergency</a></li>
        <li><a>Career</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Health.Care</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#home">Home</a></li>
      <li ><a href='#about'>About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#expert">Our Experts</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a>Emergency</a></li>
   
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/appointment" className="btn"  id="home">Appointment</Link>
  </div>
</div>


<div className="flex h-auto mt-20  "  >



<div className="w-1/2 ">
<h1 class="mb-4 text-2xl font-bold leading-none tracking-tight  md:text-5xl lg:text-5xl dark:text-white  mt-10 ml-20   " style={{ color: '#0f172a' }}> <div className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 2048 2048"><path fill="#0077B6" d="M347 1024h-39l716 716l588-588h181l-769 769l-865-864q-35-35-62-75t-47-86h243l283-282l448 447l320-319l155 154h355q32-51 49-108t17-117q0-87-32-162t-89-130t-132-87t-163-32q-84 0-149 26t-120 70t-105 97t-106 111q-54-54-105-109t-106-99t-121-72t-148-28q-86 0-161 32t-132 89t-89 132t-33 162q0 47 11 97H9q-5-24-6-48t-2-48q0-113 42-212t116-173t173-116t212-43q83 0 148 19t120 52t106 81t106 103q55-56 105-103t106-80t121-53t148-19q112 0 211 42t172 116t116 172t43 211q0 97-34 188t-97 167h-470l-101-102l-320 321l-448-449z"/></svg>Health, </div><div className="flex gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#0077B6" d="M29.121 16.879A2.98 2.98 0 0 0 27.01 16H27a2.98 2.98 0 0 0-2.121.879l-4.901 4.901A2.994 2.994 0 0 0 17 19h-7a5.006 5.006 0 0 0-5 5v.667l-3 3.996l1.6 1.2l3.4-4.53V24a3.003 3.003 0 0 1 3-3h7a1 1 0 0 1 0 2h-4v2h4.929a3.97 3.97 0 0 0 2.828-1.172l5.536-5.535A1 1 0 0 1 27 18h.003a1 1 0 0 1 .704 1.707l-7.414 7.414a2.98 2.98 0 0 1-2.122.879H11v2h7.171a4.97 4.97 0 0 0 3.536-1.465l7.414-7.414a3 3 0 0 0 0-4.242m-7.535-8.293L18 12V2h-2v10l-3.586-3.414L11 10l6 6l6-6z"/></svg>
Hope, </div><div className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#0077B6" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5.945 6.168l-1.11 1.664L10.697 14l-1.752 1.168l1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832l1.11-1.664L21.303 14l1.752-1.168zM9 19s1.605 5 7 5s7-5 7-5z"/></svg>    Happiness</div></h1>

<p className="text-sm font-normal text-gray-900  dark:text-gray-900 ml-20">
Your Health is our Priority. We are Committed To providing Patient-centric care Your Health is our Priority. We are Committed To providing Patient-centric care Your Health is our Priority. We are Committed To providing Patient-centric care.
</p>



<button className="btn btn-wide  mt-4 text-white" style={{marginLeft:'100px', backgroundColor:'#0077B6'}}>Read More</button>
</div>



<div className="flex  w-auto  ml-20" >
  <div className=" relative h-96 rounded-tl-full  " style={{height:'420px', backgroundColor:'#1e293b', width:'675px'}}>

  </div>

  <div className="absolute">
  <img
className="h-96 w-96 rounded-full object-cover object-center shadow-2xl"
src="https://media.istockphoto.com/id/1201645655/photo/human-digestive-system-on-scientific-background.jpg?s=1024x1024&w=is&k=20&c=-M_-MQYMVpHs3ikLx2XJBsbjObrd6cLJnIKckVHIXzs="
alt="nature image"
/>
  </div>
</div>
</div>

<div className="divider m-10" id="about"></div>

      


      <h1 class="mb-4 text-2xl  leading-none tracking-tight  md:text-5xl lg:text-5xl dark:text-white   flex justify-center mt-5 " style={{ color: '#0f172a' }} >Improving the quality of Life from better care</h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 flex justify-center ">we believe in providing exceptional healthcare experiences. We go beyond treating illness to focus on your overall well-being. Our team of dedicated professionals utilizes the latest advancements in medicine to deliver personalized care that gets you back on your feet faster and feeling your best.</p>



      <br>
      </br>
      <br>
      </br>






      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <div>
          <h1 className="text-9xl flex justify-center" style={{ color: '#0077B6' }}>30</h1>
          <p className=" text-2xl flex justify-center">Years of experiences</p>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400 " >For three decades, we've been dedicated to excellence. With 30 years of experience, we've honed our skills, grown our knowledge base, and witnessed the evolution of [your field]. This extensive experience allows us to provide you with a depth of expertise that is unmatched.We understand the intricacies of [your field] and the challenges you face.

            pen_spark
          </p>
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ height: '600px' }} alt="" />
        </div>
        <div  >

          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 26 26" style={{ marginLeft: '200px', marginTop: '50px' }}><path fill="#0077B6" d="M10 1C8.355 1 7 2.355 7 4v2h2V4c0-.563.437-1 1-1h6c.563 0 1 .437 1 1v2h2V4c0-1.645-1.355-3-3-3zM3 7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h20c1.656 0 3-1.344 3-3V10a3 3 0 0 0-3-3zm10 2.906A6.089 6.089 0 0 1 19.094 16A6.089 6.089 0 0 1 13 22.094A6.089 6.089 0 0 1 6.906 16A6.089 6.089 0 0 1 13 9.906M12 13v2h-2v2h2v2h2v-2h2v-2h-2v-2z" /></svg>

          <p class=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400 mr-8  flex justify-start" >
            At HealthCare, we believe in providing exceptional healthcare experiences. We go beyond treating illness to focus on your overall well-being. Our team of dedicated professionals utilizes the latest advancements in medicine to deliver personalized care that gets you back on your feet faster and feeling your best
          </p>




        </div>


      </div>


      <div className="divider m-10" id="services"></div>


      <h1 class="text-2xl leading-none tracking-tight  md:text-5xl lg:text-5xl dark:text-white flex justify-center " style={{ color: '#0f172a' }} >Our Services</h1>

      <div className="container mx-auto p-4 mt-5">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#0284c7" d="M17 5v2a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V5zm-4 6h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2zm6-9v2H5V2z" /></svg>

            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Angioplasty</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">  Angioplasty, also known as percutaneous transluminal angioplasty (PTA)
            </p>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>
          </a>

          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64"><path fill="#0284c7" d="M55.641.512H8.857C4.273.512.544 4.243.544 8.829v46.78c0 4.586 3.729 8.315 8.313 8.315h46.784c4.586 0 8.315-3.729 8.315-8.315V8.829c0-4.586-3.729-8.317-8.315-8.317m-23.256 55.32s-11.956-7.724-18.556-19.451h2.591c.451.674 2.682 4.032 2.682 4.032a.92.92 0 0 0 1.682-.405l1.625-14.441l2.379 9.983a.92.92 0 0 0 .849.705a.912.912 0 0 0 .915-.611s.75-2.125 1.414-4l1.523 4.135c.131.36.477.602.862.602h3.693c.451.674 2.682 4.032 2.682 4.032a.92.92 0 0 0 .983.384a.918.918 0 0 0 .7-.789l1.626-14.448l2.384 9.989a.912.912 0 0 0 .846.705a.914.914 0 0 0 .915-.61l1.41-4l1.523 4.135a.92.92 0 0 0 .863.602h3.285c-6.705 11.725-18.877 19.45-18.877 19.45zm20.048-21.66l-.192.368h-3.623c-.363-.994-2.182-5.928-2.182-5.928a.917.917 0 0 0-1.729.01l-1.227 3.466l-2.88-12.074a.92.92 0 0 0-1.81.11s-1.5 13.348-1.932 17.166l-1.555-2.342a.924.924 0 0 0-.767-.41h-3.544c-.364-.994-2.18-5.928-2.18-5.928a.919.919 0 0 0-1.731.01l-1.224 3.466l-2.881-12.074a.917.917 0 0 0-.948-.704a.924.924 0 0 0-.862.814s-1.5 13.347-1.931 17.166c-.777-1.166-1.555-2.341-1.555-2.341a.924.924 0 0 0-.768-.41h-4.084l-.174-.323c-1.044-2.36-3.082-8.106-3.082-12.761C9.572 16.063 13.396 10 20.523 10c10.55 0 11.859 9.841 11.859 9.841s1.357-9.889 11.914-9.889c7.388 0 11.179 6.293 11.179 11.502c.001 4.082-1.284 9.689-3.044 12.716z" /></svg>
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Cardiology</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Our Cardiology Department is dedicated to providing comprehensive care for heart and blood vessel disorders.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>
          </a>

          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64"><path fill="#0284c7" d="M55.455.339H8.67C4.085.339.356 4.069.356 8.655v46.781c0 4.587 3.73 8.316 8.314 8.316h46.785c4.583 0 8.314-3.729 8.314-8.316V8.655c0-4.586-3.731-8.316-8.314-8.316M44.667 32.394c-.397 2.565.411 5.439-.352 11.216c-.791 5.835-2.162 10.955-4.83 10.955c-3.155 0-2.732-5.823-2.364-10.561c.108-1.426.188-2.658.112-3.502c-.32-3.53-1.839-6.016-5.114-6.016c-3.256 0-4.796 2.486-5.115 6.016c-.076.845.004 2.077.112 3.502c.368 4.738.789 10.561-2.364 10.561c-2.668 0-4.039-5.119-4.83-10.955c-.764-5.777.045-8.651-.353-11.216c-.76-4.86-5.001-9.217-3.692-15.414c.727-3.437 2.62-5.054 4.493-5.734c4.321-1.572 7.11 1.457 11.747 1.457c4.638 0 7.427-3.029 11.746-1.457c1.875.679 3.767 2.296 4.493 5.734c1.311 6.197-2.932 10.554-3.691 15.414z" /></svg>
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Dental</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">  Our dental department provides comprehensive care for maintaining oral health.      </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>
          </a>

          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64"><path fill="#231f20" d="M62 32S51.9 52 32 52S2 32 2 32s10.1-20 30-20s30 20 30 20" /><path fill="#fff" d="M57 32s-8.4 16.7-25 16.7S7 32 7 32s8.4-16.7 25-16.7S57 32 57 32" /><path fill="#42ade2" d="M45.4 32c0 7.5-6 13.5-13.5 13.5s-13.5-6-13.5-13.5s6-13.5 13.5-13.5s13.5 6 13.5 13.5" /><path fill="#231f20" d="M39.4 32c0 4.1-3.4 7.5-7.5 7.5s-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" /></svg>
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Eye Care</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">    Our eye care department is dedicated to maintaining and improving your vision health. We offer routine eye exams,    </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>
          </a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="#0284c7" d="M212 76v-4a44 44 0 0 0-74.86-31.31a3.93 3.93 0 0 0-1.14 2.8v88.72a4 4 0 0 0 6.2 3.33a47.67 47.67 0 0 1 25.48-7.54a8.18 8.18 0 0 1 8.31 7.58a8 8 0 0 1-8 8.42a32 32 0 0 0-32 32v33.88a4 4 0 0 0 1.49 3.12a47.92 47.92 0 0 0 74.21-17.16a4 4 0 0 0-4.49-5.56A68 68 0 0 1 192 192h-7.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h8a51.6 51.6 0 0 0 24-5.88A52 52 0 0 0 212 76m-12 36h-4a36 36 0 0 1-36-36v-4a8 8 0 0 1 16 0v4a20 20 0 0 0 20 20h4a8 8 0 0 1 0 16M88 28a44.05 44.05 0 0 0-44 44v4a52 52 0 0 0-4 94.12A51.6 51.6 0 0 0 64 176h7.73a8.18 8.18 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53h-8a67.5 67.5 0 0 1-15.21-1.73a4 4 0 0 0-4.5 5.55A47.93 47.93 0 0 0 118.51 213a4 4 0 0 0 1.49-3.12V176a32 32 0 0 0-32-32a8 8 0 0 1-8-8.42a8.18 8.18 0 0 1 8.32-7.58a47.67 47.67 0 0 1 25.48 7.54a4 4 0 0 0 6.2-3.33V43.49a4 4 0 0 0-1.14-2.81A43.85 43.85 0 0 0 88 28m8 48a36 36 0 0 1-36 36h-4a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-4a8 8 0 0 1 16 0Z" /></svg>
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Endocrinology</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"> Our endocrinology department specializes in diagnosing
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>

          </a>

          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="#0284c7" opacity=".5"><path d="M17.804 9.11L14.89 6.196c-.8-.8-1.2-1.2-1.654-1.365a2.182 2.182 0 0 0-1.492 0c-.455.165-.855.565-1.654 1.365l-4.543 4.543a5.455 5.455 0 0 0 7.714 7.714l4.543-4.543c.8-.8 1.2-1.2 1.365-1.654a2.182 2.182 0 0 0 0-1.492c-.165-.455-.565-.855-1.365-1.654" /><path fill-rule="evenodd" d="M16.556 3.233a.795.795 0 0 1 1.125 0l3.086 3.086a.796.796 0 1 1-1.125 1.125l-3.086-3.086a.796.796 0 0 1 0-1.125" clip-rule="evenodd" /></g><path fill="#0284c7" d="m17.73 13.985l-7.715-7.714L8.89 7.396l7.714 7.714zM5.026 17.85a5.5 5.5 0 0 0 1.125 1.125l-1.793 1.792a.796.796 0 1 1-1.125-1.125zM16.91 8.215L15.783 7.09l1.752-1.752l1.125 1.125zm-1.543 8.133l-3.06-3.06a.796.796 0 1 0-1.126 1.124l3.061 3.06zm-1.736 1.736l-1.746-1.746a.795.795 0 1 0-1.125 1.125l1.672 1.672c.293-.196.571-.423.83-.682z" /></svg>
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Orthopaedics</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">  Our specialized orthopaedics services include pediatric orthopaedics, trauma care, orthopaedic oncology,
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>
          </a>

          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path fill="#0284c7" d="M.813 0A1 1 0 0 0 0 1v3a1 1 0 1 0 2 0V2h2a1 1 0 1 0 0-2H1a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zm20.906 0A1.004 1.004 0 0 0 22 2h2v2a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1h-3a1 1 0 0 0-.094 0a1.001 1.001 0 0 0-.093 0a1.004 1.004 0 0 0-.094 0M13 1C4.801 1 3.85 9.008 4.031 12.813C3.413 13.254 3 13.969 3 15H1a1 1 0 0 0-.094 0a1.001 1.001 0 0 0-.094 0A1.004 1.004 0 0 0 1 17h24a1 1 0 1 0 0-2h-2c0-.982-.376-1.746-1.031-2.219C22.142 8.964 21.176 1 13 1m-3 7c0 3.16 9 1.827 9 4v2.375l1.125-.125c.015-.001.04 0 .094 0c.71 0 .781.344.781.75h-3.094c.054-.154.094-.327.094-.5a1.5 1.5 0 0 0-3 0c0 .173.04.346.094.5h-4.188c.054-.154.094-.327.094-.5a1.5 1.5 0 0 0-3 0c0 .173.04.346.094.5H5c0-.275.003-.75.906-.75L7 14.375V12c0-2.723 1.824-1.115 3-4M5.125 18c1.94 4.639 4.594 7 7.875 7c3.282 0 5.936-2.36 7.875-7h-2.188c-1.54 3.315-3.454 5-5.687 5s-4.146-1.685-5.688-5H5.126zM.906 20.969A1 1 0 0 0 .781 21A1 1 0 0 0 0 22v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2H2v-2a1 1 0 0 0-1.094-1.031m24 0a1 1 0 0 0-.125.031A1 1 0 0 0 24 22v2h-2a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1.094-1.031" /></svg>
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Skin Care</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">   Our dermatology department offers comprehensive care for skin, hair, and nail disorders.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>
          </a>

          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#0284c7" d="M256 16C159 16 80 95 80 192v206.57a97.6 97.6 0 0 0 28 68.49A94.5 94.5 0 0 0 176 496c36.86 0 67.18-15.62 90.12-46.42c4.48-6 9.55-14.74 15.42-24.85c15.32-26.37 36.29-62.47 63.17-80.74c25.77-17.51 47.23-39.54 62-63.72C423.51 252.94 432 223.24 432 192c0-97-78.95-176-176-176m96 184a16 16 0 0 1-16-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.42c27.19-7.84 58.4-6.72 64.28-6.42a48 48 0 0 1 38.6 75.9c-.3.41-.61.81-.95 1.2c-16.55 19-36 45.48-38.46 55a16 16 0 0 1-30.94-8.14c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 0 0 239.82 240h-.88c-16.6-.89-45.89.8-62.94 8.31V304a16 16 0 0 1-32 0V184c0-57.35 50.24-104 112-104s112 46.65 112 104a16 16 0 0 1-16 16" /></svg>
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">Ear care</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ef4444" d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z" /></svg>
          </a>
        </div>
      </div> 

      <div className="divider m-10" id="expert"></div>




      <h1 class="mb-4 text-2xl leading-none tracking-tight  md:text-5xl lg:text-5xl dark:text-white flex justify-center  " style={{ color: '#0f172a' }}>Meet Our Expert Doctors </h1>
      <div className="flex mt-20">


        <img
          src="https://media.istockphoto.com/id/998313080/photo/smiling-medical-team-standing-together-outside-a-hospital.jpg?s=612x612&w=0&k=20&c=fXzbjAoStQ_8jTM4TQxbHBEjhETI3vq5_7d_JL19eCA="
          className="w-full max-w-xl rounded-2xl ml-40 my-px"
          alt="Medical equipment"
        />

        <div  >
          <p className=" text-2xl flex justify-center">Your Health, Our Priority</p>
          <p class="  font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400 text-xs " >Our team of experts at Health Care is dedicated to providing comprehensive, patient-centered care. From primary care physicians to specialized surgeons, each member of our medical staff brings a wealth of knowledge and experience to ensure you receive the highest quality of care. We are committed to guiding you through every step of your healthcare journey, with a focus on compassion, innovation, and excellence.
          </p>
          <button className="btn btn-wide  place-content-center ml-64 text-white " style={{backgroundColor:'#0077B6'}}>View Profile</button>


        </div>


      </div>


      <div className="divider m-10"></div>




      <div className="bg-CustomColors-main w-auto  ">

        <h1 class=" text-2xl  leading-none tracking-tight  md:text-5xl lg:text-5xl flex justify-center text-white  pt-10 "> What Our users Say... </h1>


        <p class="mb-6  font-normal text-sm sm:px-16 dark:text-gray-400 text-white  flex justify-center pt-5" >"Read testimonials from patients who have trusted [Hospital Name] with their health and well-being. Their honest accounts showcase our hospital's dedication to quality care and patient satisfaction.
</p>

        <div className="flex">

          <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-60 h-64 m-3  ">
            <p class="font-normal text-gray-700  dark:text-gray-400">I recently visited HelthCare for a routine check-up and was impressed by the professionalism of the staff. </p>


            <div class="flex-shrink-0 flex">
              <img class="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.jpg?s=612x612&w=0&k=20&c=Og7mZPpLzby9Cfs5jFgxGz6xGowpjV3Pl4WD_vtL7Sw=" alt="Bonnie image" />
              <h1 className="font-bold">Ravindra</h1>
            </div>
            

          </a>

          <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-60 h-64 mt-5 m-3">

            <p class="font-normal text-gray-700 dark:text-gray-400">I recently visited HelthCare for a routine check-up and was impressed by the professionalism of the staff.</p>
            <div class="flex-shrink-0 flex">
              <img class="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1358997053/photo/young-man-stock-phooto.jpg?s=612x612&w=0&k=20&c=Kskttzr6QK73-XqgHbVLHKIPCt__pr399wVTivSiRcM=" alt="Bonnie image" />
              <h1 className="font-bold">Tanmay</h1>
            </div>
          </a>

          <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-60 h-64 mt-5 m-3">

            <p class="font-normal text-gray-700 dark:text-gray-400">I recently visited HelthCare for a routine check-up and was impressed by the professionalism of the staff. </p>
            <div class="flex-shrink-0 flex">
              <img class="w-10 h-10 rounded-full" src="https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww" alt="Bonnie image" />
              <h1 className="font-bold">Rudra</h1>
            </div>
          </a>

          <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-60 h-64 mt-5 m-3">

            <p class="font-normal text-gray-700 dark:text-gray-400">I recently visited HelthCare for a routine check-up and was impressed by the professionalism of the staff.</p>
            <div class="flex-shrink-0 flex">
              <img class="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1951711154/photo/photo-of-young-women-in-winter-wear-standing-on-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=nUgDW26lW0Y-qTbMuUOVLadq_kuX3CHVUGJow9n_bOM=" alt="Bonnie image" />
              <h1 className="font-bold">Somya</h1>
            </div>
          </a>

          <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-60 h-64 mt-5 m-3">

            <p class="font-normal text-gray-700 dark:text-gray-400">I recently visited HelthCare for a routine check-up and was impressed by the professionalism of the staff.</p>
            <div class="flex-shrink-0 flex">
              <img class="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1418107519/photo/businesswoman-using-laptop-and-drinking-coffee.jpg?s=612x612&w=0&k=20&c=6mOwlEv8lLYecbIIn0zUhWX14_YzkbY4Z7S1bIcsQmw=" alt="Bonnie image" />
              <h1 className="font-bold">kriti</h1>
            </div>
          </a>

          <a href="#" class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-60 h-64 mt- m-3">


            <p class="font-normal text-gray-700 dark:text-gray-400">I recently visited HelthCare for a routine check-up and was impressed by the professionalism of the staff..</p>
            <div class="flex-shrink-0 flex">
              <img class="w-10 h-10 rounded-full" src="https://media.istockphoto.com/id/1446032808/photo/confident-businessman-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=UdAvz06FHNq3eiX0hKbT98HlhFlex0OMdUEFgTm0asQ=" alt="Bonnie image" />
              <h1 className="font-bold">Rahul</h1>
            </div>
          </a>


        </div>






      </div>

      <div className="divider m-10" id="contact"></div>


<div className="flex ">
  <div>
  <h1 class=" text-2xl  leading-none tracking-tight  md:text-5xl lg:text-5xl flex justify-center text-black  pt-10 "> Contact us  </h1>

  <p class=" font-normal text-s sm:px-16 dark:text-gray-400 text-black  flex justify-center pt-5" >we look forward to providing you with the highest quality care possible.
  </p>

<div className="flex gap-5 mt-4 ml-40">

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 258"><defs><linearGradient id="IconifyId1905083b3dae26114" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="IconifyId1905083b3dae26115" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#IconifyId1905083b3dae26114)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#IconifyId1905083b3dae26115)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>





<svg xmlns="http://www.w3.org/2000/svg" width="40.79" height="50" viewBox="0 0 256 209"><path fill="#55acee" d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"/></svg>

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 768"><path fill="#dc2626" d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37M693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25"/></svg>

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53"/><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/></svg>




  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#IconifyId1905083b3dae26110)" rx="60"/><rect width="256" height="256" fill="url(#IconifyId1905083b3dae26111)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="IconifyId1905083b3dae26110" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="IconifyId1905083b3dae26111" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></g></svg>

</div>


  </div>

  <div className="divider lg:divider-horizontal"></div>


  <div className="gap-5 flex">

  
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 " style={{backgroundColor:'#f1f5f9'}}>

<div className="flex gap-3" >
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#0891b2" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"/></svg>
  </div>
  <div>
<h3 className="font-bold">  Call us</h3>
  </div>
  
</div>
<div><h1 className="w-32 mt-5">1 (234)-567 891</h1></div>
<div><h1 className="w-32 ">1 (234)-567 891</h1></div>
<div><h1 className="w-32 ">1 (234)-567 891</h1></div>
</a>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{backgroundColor:'#f1f5f9'}}>

<div className="flex gap-3" >
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#0891b2" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32"/></svg>
  </div>
  <div>
<h3 className="font-bold"> Working Hours</h3>
  </div>
  
</div>
<div><h1 className="w-44 mt-5">Mon-Fri...11am to 8pm <br></br>sat-sun...6am to 8am</h1></div>


</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{backgroundColor:'#f1f5f9'}}>

<div className="flex gap-3" >
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#0891b2" d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13m0-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
  </div>
  <div>
<h3 className="font-bold">Location</h3>
  </div>
  
</div>
<div><h1 className="w-48 mt-5">121 Roc
  k Street, 21 Avenue,New York, NY <br></br>91273923456</h1></div>

</a>





  </div>
</div>

<div className="divider m-10"></div>

<footer className="footer bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>

    </div>


  );
}
