import React,{useRef,useState,useEffect} from "react";
import Webcam from "react-webcam";

const frameOptions=[
    "/assets/frames/heart-frame.png",
    "/assets/frames/heart-frame-2.png",
    "/assets/frames/heart-frame-3.png",
"/assets/frames/heart-frame-4.png",

]

const stickerOptions=[
    "/assets/stickers/leaf.png",
    "/assets/stickers/sparkles.png"
];

const videoConstraints={width: 953,height:599,facingMode:"user"};
const SLOT_WIDTH=953;   
const SLOT_HEIGHT=599;

export default function PhotoBooth(){
    const webcamRef=useRef(null);
    const canvasRef=useRef(null);
    const frameImgRef=useRef(null);

    const slots=[
        {x: 123,y:78},
        {x:123,y:697},
        {x: 123, y:1286},
        {x: 123, y:1885},
    ]
    const[selectedFrame, setSelectedFrame]=useState(null);
    const[mode,setMode]=useState("photo");

    return(
        <div style={centerCol}>

        
            <div style={topBar}>
                <button style={{
                    ...buttonStyle,
                    position:"absolute",
                    left:0,
                    top:10,
                    height:40,
                    padding:"0 16px",
                    lineHeight:"40px",
                    display:"flex",
                    alignItems: "center",
                    justifyContent:"center",
                }}
                
                
                onClick={handleBack}
                >Back 
                </button>
                <h1 style={titleBar}>

                
                {
                    !selectedFrame
                        ? "₊✩‧₊˚ Select a frame౨ৎ ˚₊✩‧₊"
                        : mode === "photo"
                            ? "⋆｡‧˚ʚ Smile :)ɞ˚‧｡⋆"
                            : ". ݁₊ ⊹ . ݁Let's decorate . ⊹ ₊ ݁."
                }
                </h1>
                
        </div>
        <div style={mainContent}> </div>
        {!selectedFrame ?(
            <div style={{display:"flex",gap:24}}>
                {frameOptions.map((src)=>{
                    const isSelected=selectedFrame===src;

                    return(
                        <img
                        key={src}
                        src={src}
                        alt="frame"
                        onClick={()=> setSelectedFrame(src)} 
                        onMouseEnter={(e)=>{
                            e.currentTarget.style.transform="scale(1.08)";
                            e.currentTarget.style.boxShadow="0 12px 30px rgb(255,122,162,0.45)";

                        }}
                        onMouseLeave={(e)=>{
                            e.currentTarget.style.transform="scale(1)";
                            e.currentTarget.style.boxShadow=frameThumb.boxShadow;

                        
                        }}

style={{
    ...frameThumb,
    transform: isSelected? "scale(1.08)": "scale(1)",
    transition:"transform 0.25s ease,box-shadow 0.25s ease",
    boxShadow:isSelected? "0 12px 30px rgba(255,122,162,0.45)" :frameThumb.boxShadow,

}}
                        
                        
                        
                        />
                    
                        
                    )
                })}



                
                </div>
                
        ): (
            <div>
                
            </div>
        )
    }
        </div>
    )
    
}


