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

const[photos,setPhotos]=useState([]);
const [photoCount,setPhotoCount]=useState(0);
const [canTakePhoto,setCanTakePhoto]=useState(true);
const [draggingPhoto,setDraggingPhoto]=useState(null);
const[dragoffset,setDragonoffset]=useState({x:0,y:0});
const[countdown,setCountdown]=useState(null);

const row={display:"flex", gap:40, alignItems:"flex-start"};



useEffects(()=>{
    if(!selectedFrame)return;
    const img=new Image();
    img.src=selectedFrame;

img.onLoad=()=>{
    frameimgRef.current=img;
    drawCanvas();

}
},[selectedFrame]);

const drawCanvas=()=>{
    const canvas=canvasRef.current;
    if(canvas||!frameImgRef.current) return;

    const ctx=canvas.getContext("2d");
    const frameWidth=frameImgRef.current.width;
    const frameHeight=frameImgRef.current.height;
    canvas.width=frameWidth;
    canvas.height=frameHeight;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    photos.forEach(p=>{
        const drawH= p.img.height*p.scale;
        const dx= slot.x +p.offsetX;
        const dy=slot.y+p.offsetY;

        ctx.save()
        ctx.beginPath();
        ctx.rect(slot.x,slot.y,SLOTH_WIDTH,SLOT_HEIGHT);
        ctx.clip();
        ctx.drawImage(p.img,dx,dy,drawW,drawH);
        ctx.restore();







    });

    ctx.drawImage(frameImgRef.current,0,0,frameWidth,frameHeight);


};
useEffect(drawCanvas,[photo,photoCount]);

//photo
const addPhoto=img=>{
if(photoCount >=4) return;

const scale= SLOTH_WIDTH/img.width;
const drawH=img.height * scale;
  const offsetY= drawH>SLOT_HEIGHT ? (SLOT_HEIGHT-drawH)/ 2:0;

  setPhotos(p =>[
    ...p,
    {img,slotIndex:photoCount,scale,offsetX:0,offsetY}

  ]);
setCanTakePhoto(true);

setPhotoCount(c=>{
    const next=c+1;
    if(next===4) setMode("decorate");
    return next;
});

};
const takePhotoNow=()=>{
    
}



return(
    <div style={centerCol}>
        {/*top bar with back*/}

<div style={topBar}>
<button
  style={{
    ...buttonStyle,
    position:"absolute",
    left:0,
    top:10,
    height:40,
    padding:"0 16px",
    lineHeight:"40px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

  }}
  

>Back</button>
<h1>
{!selectedFrame
                        ? "₊✩‧₊˚ Select a frame౨ৎ ˚₊✩‧₊"
                        : mode === "photo"
                        ? "⋆｡‧˚ʚ Smile :)ɞ˚‧｡⋆"
                            : ". ݁₊ ⊹ . ݁Let's decorate . ⊹ ₊ ݁."}



</h1>

</div>
<div style={mainContent}>
{!selectedFrame ? (
    <div style={{display:"flex",gap:24}}>
{frameOptions.map((src)=>{
    const isSelected=selectedFrame===src;

    return(
        <img
        key={src}
        src={src}
        alt="frame "
        onClick={()=> setSelectedFrame(src)}
        onMouseEnter={(e)=> {
            e.currentTarget.style.transform="scale(1.08)";
            e.currentTarget.style.boxShadow="0 12px 30px rgba(255,122,162,0.45)";

        }}
        onMouseLeave={(e)=> {
          
            e.currentTarget.style.transform="scale(1)";
            e.currentTarget.style.boxShadow=frameThumb.boxShadow;
    

 }}

 style={{
    ...frameThumb,
    transform:isSelected ? "scale(1.08)" : "scale(1)",
    transition: "transform 0.25s ease, box-shadow 0.25 ease",
    boxShadow: isSelected ? "0 12px 30px rgba(255,122,162,0.45)" : frameThumb.boxShadow,

 }}
        
        />
        
    )
})}

    </div>
):(
    <div></div>
)

}
</div>



    </div>

)








}

const centerCol={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:20

};
const topBar={
    width:700,
    height:60,
    position: "relative",
    marginBottom:20,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}

const buttonStyle={
    padding:"10px 20px",
    fontSize:20,
    cursor:"pointer",
    fontFamily:"CantikaCute",
    color:"#8c5b4a",
    border:"2px solid #8c5b4a",
    borderRadius:8,
    background:"white"

};
const row={ display:"flex", gap:40, alignItems:"flex-start"};
const frameThumb={
    width:180,
    cursor:"pointer",
    borderRadius:12,
    boxShadow:"0 8px 8px rgba(0,0,0,0.15)"
};

const titleBar={
    margin:0,
    lineHeight:"60px",
    textAlign:"center",
    width:"100%",
}
const mainContent={
    height:600,
    width:700,
    justifyContent:"center",
    alignItems:"flex-start",
display:"flex",
}
