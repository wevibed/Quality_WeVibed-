import React, {useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const WA="263778439881";
const phone="077 843 9881";
const images=[
"https://images.pexels.com/photos/6766308/pexels-photo-6766308.jpeg?auto=compress&cs=tinysrgb&w=1200",
"https://images.pexels.com/photos/8670488/pexels-photo-8670488.jpeg?auto=compress&cs=tinysrgb&w=1000",
"https://images.pexels.com/photos/26988386/pexels-photo-26988386.jpeg?auto=compress&cs=tinysrgb&w=1000",
"https://images.pexels.com/photos/14928731/pexels-photo-14928731.jpeg?auto=compress&cs=tinysrgb&w=1000"
];

const products=[
["Men's Formal","Classic Oxford",images[0]],
["Men's Formal","Brown Dress Shoe",images[1]],
["Women's Formal","Elegant Heels",images[2]],
["Smart Casual","Leather Detail",images[3]]
];

function App(){
 const [menu,setMenu]=useState(false);
 const [q,setQ]=useState("");
 const filtered=useMemo(()=>products.filter(p=>p.join(" ").toLowerCase().includes(q.toLowerCase())),[q]);
 const wa=(msg)=>`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
 return <div>
  <div className="top">Eastgate Market • Stall E3 • Harare <a href={`tel:${phone.replace(/\s/g,"")}`}>{phone}</a></div>
  <header>
   <button className="icon" onClick={()=>setMenu(!menu)} aria-label="Menu">☰</button>
   <a className="logo" href="#home">QUALITY<br/><span>FORMAL SHOES</span></a>
   <div className="actions"><button className="icon" onClick={()=>document.getElementById("search").focus()} aria-label="Search">⌕</button><a className="icon" href={wa("Hello Quality Formal Shoes. I would like to check shoe availability.")} aria-label="WhatsApp">◔</a></div>
  </header>
  {menu&&<nav className="menu"><a href="#collection" onClick={()=>setMenu(false)}>Collection</a><a href="#categories" onClick={()=>setMenu(false)}>Categories</a><a href="#store" onClick={()=>setMenu(false)}>Visit Store</a></nav>}
  <main id="home">
   <section className="hero">
    <img src={images[0]} alt="Premium brown formal Oxford shoes"/>
    <div className="heroShade"/>
    <div className="heroText"><p className="eyebrow">QUALITY FORMAL SHOES</p><h1>Step Into<br/><i>Confidence.</i></h1><p>Premium formal footwear for work, events and everyday elegance.</p><div className="buttons"><a href="#collection" className="btn gold">SHOP COLLECTION</a><a href={wa("Hello Quality Formal Shoes. I would like to see your current collection.")} className="btn outline">CHAT ON WHATSAPP</a></div></div>
   </section>
   <section className="values"><div>QUALITY<br/><small>Footwear</small></div><div>GREAT<br/><small>Prices</small></div><div>MEN &<br/><small>Women</small></div><div>EASTGATE<br/><small>Market</small></div></section>
   <section id="categories" className="section"><div className="sectionHead"><p className="eyebrow">EXPLORE</p><h2>Shop by Category</h2></div><div className="cats">{["Men's Formal","Women's Formal","Office Shoes","Smart Casual","New Arrivals"].map((x,i)=><a href="#collection" key={x}><span>0{i+1}</span>{x}<b>→</b></a>)}</div></section>
   <section id="collection" className="section collection"><div className="sectionHead"><p className="eyebrow">THE COLLECTION</p><h2>Featured Footwear</h2><p>Images shown are demonstration references. Ask us about current stock and sizes.</p></div>
    <div className="search"><span>⌕</span><input id="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search footwear"/></div>
    <div className="grid">{filtered.map(([cat,name,img])=><article className="card" key={name}><div className="pic"><img src={img} alt={name}/></div><p>{cat}</p><h3>{name}</h3><a href={wa(`Hello Quality Formal Shoes. Is the ${name} available?`)}>ASK ON WHATSAPP →</a></article>)}</div>
   </section>
   <section id="store" className="store"><div><p className="eyebrow">VISIT OUR STORE</p><h2>Eastgate Market<br/>Stall E3, Harare</h2><p>Come through and view our footwear collection in person.</p><div className="buttons"><a className="btn gold" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Eastgate+Market+Harare">GET DIRECTIONS</a><a className="btn outline" href={wa("Hello Quality Formal Shoes. I'd like to visit your Eastgate Market store.")}>WHATSAPP US</a></div></div></section>
  </main>
  <footer><div className="logo">QUALITY<br/><span>FORMAL SHOES</span></div><p>Eastgate Market, Stall E3 • Harare</p><a href={`tel:${phone.replace(/\s/g,"")}`}>{phone}</a><small>© 2026 Quality Formal Shoes</small></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
