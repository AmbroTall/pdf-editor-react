
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

// import './App.css';
// // import { Button } from '@mui/material';
// import BrushIcon from '@mui/icons-material/Brush';
// import ImageIcon from '@mui/icons-material/Image';
// import ShortTextIcon from '@mui/icons-material/ShortText';
// import CreateIcon from '@mui/icons-material/Create';
// import UndoIcon from '@mui/icons-material/Undo';
// import RedoIcon from '@mui/icons-material/Redo';
// import HomeIcon from '@mui/icons-material/Home';
// import { TextField } from '@mui/material';

// // Import Worker
// import { Worker } from '@react-pdf-viewer/core';
// // Import the main Viewer component
// import { Viewer } from '@react-pdf-viewer/core';
// // Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// // default layout plugin
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// // Import styles of default layout plugin
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// function App() {

//   // creating new plugin instance
//   // const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   // pdf file onChange state
//   const [pdfFile, setPdfFile]=useState(null);

//   // pdf file error state
//   const [pdfError, setPdfError]=useState('');
//   const [name, setName] = useState('')
//   let nameSave = ''
//   { name !== ''? nameSave = name.name.split(".")[0]: nameSave = ''}
//   console.log(nameSave)


//   // handle file onChange event
//   const allowedFiles = ['application/pdf'];
  // const handleFile = (e) =>{
  //   let selectedFile = e.target.files[0];
  //   setName(selectedFile)
  //   // console.log(selectedFile.type);
  //   if(selectedFile){
  //     if(selectedFile&&allowedFiles.includes(selectedFile.type)){

  //       let reader = new FileReader();
  //       reader.readAsDataURL(selectedFile);
  //       reader.onloadend=(e)=>{
  //         setPdfError('');
  //         setPdfFile(e.target.result);
  //       }
  //     }
  //     else{
  //       setPdfError('Not a valid pdf: Please select only PDF');
  //       setPdfFile('');
  //     }
  //   }
  //   else{
  //     console.log('please select a PDF');
  //   }
  // }

//   return (
//     <div className="App">
    //   <div className="header">
    //     <div className='file-button'>
          // <form>
          //   <label htmlFor='fileInput'>
          //     <p className="choose-pdf-long">Choose PDF</p>
          //   </label>
          //   <input type="file" id="fileInput" style={{display:"none"}} onChange={handleFile} />
          // </form>
    //     </div>
    //     <div className='icons-top'>
    //       <ImageIcon className="icon" style={{color: 'black', cursor:"pointer", }}/>
    //       <ShortTextIcon className="icon" style={{color: 'black',marginLeft:{xs:"2px", md: "5px"}, cursor:"pointer"  }}/>
    //       <BrushIcon className="icon" style={{color: 'black', cursor:"pointer",}}/>
    //       <CreateIcon className="icon" style={{color: 'black', cursor:"pointer",marginLeft:{xs:"2px", md: "5px"}}}/>
    //       {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
    //       {/* <FontAwesomeIcon icon={regular('coffee')} />
    //       <FontAwesomeIcon icon={brands('twitter')} /> */}
    //       <UndoIcon className="icon" style={{color: 'black', cursor:"pointer",marginLeft:{xs:"2px", md: "5px"}}}/>
    //       <RedoIcon  style={{color: 'black', cursor:"pointer",marginLeft:{xs:"2px", md: "5px"}}}/>
    //     </div>
    //     <div className='input-save'>
    //       <input type='text' className="name" placeholder="Rename your PDF here" value={nameSave} onChange={(e)=>setName(e.target.value)}/>
    //       <p className="choose-pdf">Save</p>
    //     </div>
    //     <HomeIcon style={{color: 'black', cursor:"pointer",fontSize:"40px",display:"flex",alignItems:"center"}} onClick={()=> window.location.reload()}/>
    //   </div>
    //   <TextField sx={{display:{sm:"none", md:"none", lg:"none"}}} className="name-sm" id="filled-basic" placeholder="Rename your PDF here" value={nameSave} onChange={(e)=>setName(e.target.value)} variant="filled" />

//       {/* <input type='text'  placeholder="Rename your PDF here" onChange={(e)=>setName(e.target.value)}/> */}

//       {pdfError&&<span className='text-danger'>{pdfError}</span>}
      
//       <div className="viewer container mt-3">

//         {/* render this if we have a pdf file */}
//         {pdfFile&&(
//           <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
//             {/* <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]}></Viewer> */}
//             <Viewer fileUrl={pdfFile}></Viewer>
//           </Worker>
//         )}

//         {/* render this if we have pdfFile state null   */}
//         {!pdfFile&&<>No file is selected yet</>}

//       </div>

//     </div>
//   );
// }

// export default App;
