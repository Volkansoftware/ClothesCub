
import Home from "./components/Home/Home";

function App() {

const Clothes= [
  {
    id:1,
    gender: "female",
    type: "shoes",
    color:"red",
    desc: "kadın kırmızı ayakkabı",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYCrKhcFMHioqdsj2uu98aa9j49CLA4D2KA&usqp=CAU"
  },
  {
    id:2,
    gender: "male",
    type: "shoes",
    color:"blue",
    desc:"erkek mavi ayakkabı",
    img: "https://floimages.mncdn.com/media/catalog/product/21-11/09/101ax_5_mavi_1-1636454651.jpg"
  },

  {
    id:3,
    gender: "male",
    type: "shirt",
    color:"black",
    desc:"erkek siyah gömlek",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqLTPn2xlWqK1IY86RMeNUarf6iGS6JiM0Q&usqp=CAU"
  },
  {
    id:4,
    gender: "female",
    type: "skirt",
    color:"blue",
    desc:"kadın mavi gömlek",
    img:"https://cdn.lutvelizade.com.tr/gorseller/cizgili-oversize-mavi-kadin-gomlek.jpg"
  },
  {
    id:5,
    gender: "male",
    type: "short",
    color:"green",
    desc:"erkek yeşil şort",
    img:"https://vardarspor.com/Uploads/Urunler/3112-44e4bfe7-9b32-4ca2-9d8b-9f5129cf5a42.jpg"
  },
  {
    id:6,
    gender: "female",
    type: "short",
    color:"pink",
    desc:"kadın pembe şort",
    img:"https://romancdn.sysrun.net/Content/ProductImage/Original/637882971185372128-8681822237175_(2).jpg"
  },

]

 
  return (
<div className="bg-slate-200">
  
 <Home Clothes={Clothes} />
  </div>
  );
}

export default App;
