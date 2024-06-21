import "./Notes.css"


const ZIP_FILE_URL = 'http://localhost:5173/EnglishNotes.zip'
function EnglishNote(){

    const downloadFileAtURL=(url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return(
        <>
            <div className="noteContainer">
                <div className="noteHeading">
                    <h2>Downloadable Notes</h2>
                </div>

                <div className="downloadableNotes">
                    <button onClick={()=>{downloadFileAtURL(ZIP_FILE_URL)}}>Download Note 1</button>
                </div>
            </div>
        
        </>
    );
}

export default EnglishNote