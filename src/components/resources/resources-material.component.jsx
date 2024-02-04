const ResourcesMaterial = () => {
  const openFullscreen = (url) => {
    // Open the URL in a new tab
    const newTab = window.open(url, '_blank');
    if (newTab) {
      newTab.focus();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
          <div className="flex flex-col space-y-4 m-4 sm:flex-row sm:space-x-4">
              <iframe className="w-full sm:w-1/2" width="560" height="315" src="https://www.youtube.com/embed/QCvL-DWcojc?si=5pY2LxRTByRmfjht" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <div className="relative w-full sm:w-1/2">
                  <iframe id="googleDriveIframe1" className="w-full" src="https://docs.google.com/document/d/1IELpJ1y_ihPGE2w-6jISfym3_W27xtQsUZeE-thi88Y/edit?usp=sharing" height="260" allowFullScreen></iframe>
                  <button className="absolute top-0 left-0 p-2 cursor-pointer bg-black text-white"  onClick={() =>  openFullscreen('https://docs.google.com/document/d/1IELpJ1y_ihPGE2w-6jISfym3_W27xtQsUZeE-thi88Y/edit?usp=sharing')}>Click To Open</button>
              </div>
          </div>
      </div>
      <div className="flex items-center justify-center mt-10">
          <div className="flex flex-col space-y-4 m-4 sm:flex-row sm:space-x-4">
            <iframe className="w-full sm:w-1/2"  width="560"  height="315"  src="https://www.youtube.com/embed/e9Eg0CmboFU?si=ypkGLWHTEwVDe6hX"  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            <div className="relative w-full sm:w-1/2">
                <iframe id="googleDriveIframe2" className="w-full" src="https://docs.google.com/document/d/1Nxt4U9638FM7C_VvK7GqnqdvQLp62YRIIKKZwkBwdl8/edit?usp=sharing" height="260" allowFullScreen ></iframe>
                <button className="absolute top-0 left-0 p-2 cursor-pointer transition duration-300 bg-black text-white border-solid" onClick={() => openFullscreen('https://docs.google.com/document/d/1Nxt4U9638FM7C_VvK7GqnqdvQLp62YRIIKKZwkBwdl8/edit?usp=sharing')}>Click To Open</button>
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 text-4xl sm:text-4xl font-bold text-gray-200">
        <h1>KBS StepWise Tasks</h1>
      </div>
      <div className="flex items-center justify-center mt-10">
          <div className="flex flex-col space-y-0 m-4 sm:flex-row sm:space-x-4">
              <div className="relative w-full sm:w-1/2 ">
                <iframe  id="googleDriveIframe3" className="w-full" src="https://docs.google.com/document/d/1y46AlPITaEtPKptfhdYXcFELTup4qy7vJhGT5TYQe0I/edit?usp=sharing " height="315" allowFullScreen></iframe>
                <button className="absolute top-0 left-0 p-2 cursor-pointer bg-black text-white" onClick={() => openFullscreen('https://docs.google.com/document/d/1y46AlPITaEtPKptfhdYXcFELTup4qy7vJhGT5TYQe0I/edit?usp=sharing ')}>Click To Open</button>
                <p className="mt-3 m-4 text-gray-400 flex items-center justify-center text-2xl "><span className="bg-white p-1">Task-1</span></p>
              </div>
              <div className="relative w-full sm:w-1/2">
                <iframe id="googleDriveIframe4" className="w-full" src="https://docs.google.com/document/d/1Jcq6kBbC5475qhNQWVzDFJl5kKXdiL8BDhiUlDd-pb4/edit?usp=sharing " height="315" allowFullScreen></iframe>
                <button className="absolute top-0 left-0 p-2 cursor-pointer bg-black text-white" onClick={() => openFullscreen('https://docs.google.com/document/d/1Jcq6kBbC5475qhNQWVzDFJl5kKXdiL8BDhiUlDd-pb4/edit?usp=sharing')}>Click To Open</button>
                <p className="mt-3 m-4 text-gray-400 flex items-center justify-center text-2xl"> <span className="bg-white p-1">Task-2</span></p>
              </div>
              <div className="relative w-full sm:w-1/2 " >
                <iframe id="googleDriveIframe5" className="w-full " src="https://docs.google.com/document/d/1FxILfjCsoN4M_jviGPTLZSz9hQ9nw8B_K2wVOt9MxDA/edit?usp=sharing" height="315" allowFullScreen></iframe>
                <button className="absolute top-0 left-0 p-2 cursor-pointer bg-black text-white"onClick={() =>openFullscreen('https://docs.google.com/document/d/1FxILfjCsoN4M_jviGPTLZSz9hQ9nw8B_K2wVOt9MxDA/edit?usp=sharing')}>Click To Open</button>
                <p className="mt-3 m-4 text-gray-400 flex items-center justify-center text-2xl"><span className="bg-white p-1">Task-3</span></p> 
              </div>
          </div>
      </div>
    </div>
)
}
export default ResourcesMaterial;