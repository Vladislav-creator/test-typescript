"use strict";(self.webpackChunktest_typescript=self.webpackChunktest_typescript||[]).push([[37],{245:(e,s,i)=>{i.r(s),i.d(s,{default:()=>J});var t=i(43),c=i(213);var r=i(3),a=i(866);const l="PizzaItem_item__w4e3R",n="PizzaItem_image__CM9lH",o="PizzaItem_containerImg__-DZFH",d="PizzaItem_overlay__1b9Ty",h="PizzaItem_pizzaComposition__qMgxR",m="PizzaItem_weightAndPrice__n59wu",p="PizzaItem_nameDishes__4quAt",x="PizzaItem_containerForButtonToOrder__7ldrZ",g="PizzaItem_toOrder__fJ-hP",u="PizzaItem_weightAndPriceButton__-iC68",v="PizzaItem_active__o4erl",w="PizzaItem_priceFromWeight__joLDG",j="PizzaItem_message__ymDwu";var f=i(105),_=i(579);const z=e=>{let{pizza:s}=e;const i=""!==s["weight-small"]?"weight-small":"weight",[c,z]=(0,t.useState)(i),[b,y]=(0,t.useState)(!1),[N,C]=(0,t.useState)(null),k=(0,r.wA)(),I=(0,r.d4)((e=>(0,a.rk)(e))),A=(e,s)=>""!==e&&0!==s,S=e=>{switch(e){case"weight-small":return"\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0443";case"weight-average":return"\u0441\u0435\u0440\u0435\u0434\u043d\u044e";case"weight-big":return"\u0432\u0435\u043b\u0438\u043a\u0443";case"weight-mega":return"\u043c\u0435\u0433\u0430";default:return""}};return(0,_.jsxs)("div",{className:l,children:[(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("img",{src:s.img,alt:s.name,className:n}),(0,_.jsx)("div",{className:d,children:(0,_.jsx)("p",{className:h,children:s.composition})})]}),(0,_.jsx)("h3",{className:p,children:s.name}),(0,_.jsxs)("div",{className:m,children:[A(s["weight-small"],s["price-small"])&&(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("button",{className:"weight-small"===c?v:"",onClick:()=>z("weight-small"),children:[(0,_.jsx)("p",{children:"\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430:"})," ",(0,_.jsx)("p",{children:s["weight-small"]})]}),(0,_.jsxs)("p",{className:w,children:[s["price-small"]," ",(0,_.jsx)(f.A,{width:11,height:11})]})]}),A(s["weight-average"],s["price-average"])&&(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("button",{className:"weight-average"===c?v:"",onClick:()=>z("weight-average"),children:[(0,_.jsx)("p",{children:"\u0441\u0435\u0440\u0435\u0434\u043d\u044f:"})," ",(0,_.jsx)("p",{children:s["weight-average"]})]}),(0,_.jsxs)("p",{className:w,children:[s["price-average"]," ",(0,_.jsx)(f.A,{width:11,height:11})]})]}),A(s["weight-big"],s["price-big"])&&(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("button",{className:"weight-big"===c?v:"",onClick:()=>z("weight-big"),children:[(0,_.jsx)("p",{children:"\u0432\u0435\u043b\u0438\u043a\u0430:"})," ",(0,_.jsx)("p",{children:s["weight-big"]})]}),(0,_.jsxs)("p",{className:w,children:[s["price-big"]," ",(0,_.jsx)(f.A,{width:11,height:11})]})]}),A(s["weight-mega"],s["price-mega"])&&(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("button",{className:"weight-mega"===c?v:"",onClick:()=>z("weight-mega"),children:[(0,_.jsx)("p",{children:"\u043ce\u0433a:"})," ",(0,_.jsx)("p",{children:s["weight-mega"]})]}),(0,_.jsxs)("p",{className:w,children:[s["price-mega"]," ",(0,_.jsx)(f.A,{width:11,height:11})]})]}),A(s.weight,s.price)&&(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("button",{className:"weight"===c?v:"",onClick:()=>z("weight"),children:[(0,_.jsx)("p",{children:"\u0432\u0430\u0433\u0430:"})," ",(0,_.jsx)("p",{children:s.weight})]}),(0,_.jsxs)("p",{className:w,children:[s.price," ",(0,_.jsx)(f.A,{width:11,height:11})]})]})]}),(0,_.jsx)("div",{className:x,children:(0,_.jsx)("button",{className:g,onClick:()=>{const e=s[c.replace("weight","price")];k((0,a.Mr)({id:s.id,name:s.name,weight:c,price:e}));const i=S(c),t=(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:"\u0412\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438:"}),(0,_.jsxs)("p",{children:[" ",i," '",s.name,"' - ",e," ",(0,_.jsx)(f.A,{width:11,height:11})]}),(0,_.jsxs)("p",{children:["\u0421\u0443\u043c\u0430 \u0432\u0430\u0448\u043e\u0433\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f: ",I+e," ",(0,_.jsx)(f.A,{width:11,height:11})]})]});C(t),y(!0),setTimeout((()=>y(!1)),1e4)},children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"})}),b&&(0,_.jsx)("div",{className:j,children:N})]})},b="Category_subTitle__AOgNK",y=e=>{let{category:s,pizzas:i}=e;return(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{className:b,children:s}),(0,_.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:i.map((e=>(0,_.jsx)(z,{pizza:e},e.id)))})]})},N="ImagesSlider_sliderContainer__wCue2",C="ImagesSlider_slider__cBs3D",k="ImagesSlider_slide__e80Mv",I=e=>{let{images:s,interval:i=3e3}=e;const[c,r]=(0,t.useState)(1),a=(0,t.useRef)(null),l=[s[s.length-1],...s,s[0]];return(0,t.useEffect)((()=>{const e=setInterval((()=>{r((e=>e+1))}),i);return()=>clearInterval(e)}),[i]),(0,t.useEffect)((()=>{c===l.length-1?setTimeout((()=>{a.current&&(a.current.style.transition="none",r(1),setTimeout((()=>{a.current&&(a.current.style.transition="transform 0.5s ease-in-out")}),50))}),500):0===c&&setTimeout((()=>{a.current&&(a.current.style.transition="none",r(l.length-2),setTimeout((()=>{a.current&&(a.current.style.transition="transform 0.5s ease-in-out")}),50))}),500)}),[c,l.length]),(0,_.jsx)("div",{className:N,children:(0,_.jsx)("div",{ref:a,className:C,style:{transform:"translateX(-".concat(100*c,"%)")},children:l.map(((e,s)=>(0,_.jsx)("div",{className:k,children:(0,_.jsx)("img",{src:e,alt:"Slide ".concat(s)})},s)))})})},A=i.p+"static/media/web_papa_jon_tree_pizza_53-grn_1514_300.86c82ee15501a0cb95ee.jpg",S=i.p+"static/media/week_offer_delivery_page_1414_300_papa-dzhon.aa7a799f23450523512d.jpg",M=i.p+"static/media/deliveryC.ae4097aabbdbf9873c81.jpg",P=i.p+"static/media/web_-50_na_drugu_1314_300B.d62ce78ee72dcdb6ae86.jpg",T=e=>{let{width:s}=e;const i={width:s||"100px"};return(0,_.jsxs)("svg",{viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:[(0,_.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"violet"}),(0,_.jsx)("text",{x:"50%",y:"52%",textAnchor:"middle",alignmentBaseline:"middle",fontSize:"140",fill:"white",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"bold",children:"ALL"})]})},B=e=>{let{width:s}=e;const i={width:s||"100px"};return(0,_.jsxs)("svg",{id:"\u0421\u043b\u043e\u0439_1",viewBox:"0 0 419.6 420",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:[(0,_.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"green"}),(0,_.jsx)("path",{d:"M49.8,279.1c30.7-75.1,76.9-135.4,157.6-162.5c-16.5-2.5-33-0.4-49.2,4.4c-31,9.2-57,27-80.7,48.4c-28.1,25.3-51.4,54.4-71.4,86.4c-0.9,1.4-1.7,2.7-3.8,4c-0.7-8.2-1.7-16.3-2-24.5c-2.8-60.6,11-116.3,49.3-164.6c27.8-35,64.5-55.5,107.6-65.1c34.8-7.8,69.8-6.6,104.8-1.5c30,4.4,59.8,9.6,89.8,13.7c21.9,3,43.9,2.5,65.5-3.1c0.5-0.1,1,0,2.2,0c-1.6,7.9-3.1,15.7-4.7,23.4c-9.1,41.9-21.1,82.9-40.3,121.4c-17.6,35.4-40.6,66.4-73.4,89.4c-29.6,20.7-62.8,31.7-98.2,36.5c-39.9,5.4-79.8,3.7-119.6-0.6c-10.7-1.2-21.4-2.5-32.2-3.8C50.7,280.4,50.3,279.8,49.8,279.1z",transform:"translate(107,145) scale(0.50)"})]})},E=e=>{let{width:s}=e;const i={width:s||"100px"};return(0,_.jsx)("svg",{viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:(0,_.jsxs)("g",{fill:"white",children:[(0,_.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"gray"}),(0,_.jsx)("path",{d:"M60.1 83.8c2 0 3.6.2 4.8.7 1.3.5 2.3 1.2 3.1 2.1.8.9 1.4 2.1 1.7 3.6.4 1.5.5 3.4.5 5.8v19.4c0 1.3.2 2.4.5 3.1.3.8.8 1.3 1.4 1.6.7.3 1.6.5 2.7.5v1.5c-4.8-.2-7.9-.3-9.5-.3-1.5 0-4.6.1-9.4.3v-1.5c1 0 1.8-.2 2.3-.5.6-.3 1-.8 1.2-1.6.2-.8.4-1.8.4-3.1V92.9c0-2-.3-3.5-1-4.5-.6-1-1.8-1.5-3.5-1.5-1.3 0-2.5.4-3.6 1.1-1.1.7-2 1.7-2.6 3-.6 1.3-.9 2.7-.9 4.2v20c0 1.3.1 2.4.4 3.1.3.8.7 1.3 1.2 1.6.6.3 1.3.5 2.3.5v1.5c-4.4-.2-7.4-.3-8.9-.3s-4.8.1-9.9.3v-1.5c1.1 0 2.1-.2 2.7-.5.7-.3 1.1-.8 1.4-1.6.3-.8.4-1.8.4-3.1V92.6c0-2.2-.3-3.8-1-4.8s-1.9-1.5-3.6-1.5v-1.5c1.5.1 3 .2 4.5.2 4.2 0 7.7-.3 10.5-1v6.5c2.3-4.5 6.2-6.7 11.9-6.7zM89.4 103.1c0 3.2.4 5.8 1.3 7.9.9 2.1 2 3.6 3.5 4.6 1.4 1 2.9 1.5 4.6 1.5 4 0 7.1-1.9 9.5-5.8l1.3.4c-.6 2-1.6 3.8-2.8 5.5-1.3 1.7-2.9 3.1-4.9 4.1-2 1.1-4.2 1.6-6.7 1.6-3.3 0-6.2-.7-8.7-2.1-2.5-1.4-4.4-3.5-5.8-6.4-1.4-2.9-2.1-6.4-2.1-10.7 0-4.4.8-8 2.3-11 1.5-3 3.6-5.2 6.2-6.7s5.7-2.3 9.2-2.3c9 0 13.5 5.3 13.5 16H89.5c-.1.7-.1 1.9-.1 3.4zM99.5 89c-.8-2.5-2.1-3.7-3.8-3.7-1.7 0-3.1 1.1-4.3 3.2-1.1 2.1-1.8 5.4-2.1 9.9h11.3c.1-3.8-.3-6.9-1.1-9.4zM162.6 85c2.4 0 4.2-.1 5.5-.2v1.4c-1 .3-1.9.9-2.7 1.8-.8.9-1.5 2.4-2.1 4.4l-9.6 29.7c-.8-.1-1.6-.1-2.4-.1-.8 0-1.5 0-2.3.1l-9.8-26.7-8 26.7c-.7-.1-1.5-.1-2.3-.1-.8 0-1.5 0-2.4.1l-11.4-31.8c-.9-2.7-2.3-4-4.1-4v-1.5c3.1.3 6.5.4 10.2.4 2.4 0 5.5-.1 9.4-.4v1.5c-1.1 0-1.9 0-2.5.1-.6.1-1.1.3-1.5.6-.4.3-.5.8-.5 1.4 0 .5.1 1.1.4 1.9l6.5 20.4 7.8-26h5.2l9.3 27.5 4.6-14.4c.7-2.1 1-3.9 1-5.5 0-3.7-1.9-5.7-5.7-6v-1.4c2.3 0 4.7.1 7.4.1z",transform:"translate(-38, -40) scale(2.50)"})]})})},R=e=>{let{width:s}=e;const i={width:s||"100px"};return(0,_.jsxs)("svg",{id:"\u0421\u043b\u043e\u0439_1",viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:[(0,_.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"yellow"}),(0,_.jsx)("path",{d:"M12.1,14.2c4.3,4.5,4.9,9.9,4.3,15.8c3.8-4.8,5.5-10,4.5-15.9c-1-5.8-3.8-10.6-8.8-14.1c2.1,0.1,4,0.4,5.8,1.1c4.7,1.7,8.6,4.6,11.9,8.2c5,5.4,8.5,11.7,10,19c1.1,5.3,0.9,10.5-1.3,15.6c0,0.1-0.1,0.2-0.2,0.5c0.4-0.2,0.7-0.3,0.9-0.4c1.9-1.1,3.2-2.8,4.1-4.8c1.5-3.2,2.1-6.6,1.5-10.1c0-0.1,0-0.2,0-0.5c0.2,0.2,0.3,0.3,0.3,0.4c2.6,4.1,4,8.5,4,13.4c0,11.9-9.3,23.2-21.1,25c-9.7,1.4-18.1-1.6-24-9.7C-1.1,50.6-1.2,43,3.2,35.4c1.3-2.3,3.1-4.3,4.6-6.4c1.1-1.6,2.2-3.1,3.1-4.8c1.6-2.9,1.9-6.1,1.2-9.3c0-0.1-0.1-0.2-0.1-0.4C12,14.4,12,14.4,12.1,14.2z",fill:"red",transform:"translate(112,70) scale(4)"})]})},F=e=>{let{width:s}=e;const i={width:s||"100px"};return(0,_.jsxs)("svg",{viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:i,children:[(0,_.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"gray"}),(0,_.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:"white",transform:"translate(95.0, 105.0) scale(10)"})]})},H="Home_iconsAndSlider__9KrPQ",L="Home_icons__9MTaM",O="Home_buttonIcons__qvTJw",Y="Home_mainTitleFromFilter__bEp3X",D="ScrollToTopButton_scrollToTopButton__pQS8g",q="ScrollToTopButton_hidden__wdPXz",W=e=>{let{onClick:s}=e;const[i,c]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=()=>{c(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,_.jsx)("button",{className:"".concat(D," ").concat(i?"":q),onClick:s,children:"Scroll to Top"})};var Z=i(421);const V={control:(e,s)=>({...e,border:"1px solid #d3a27f",borderRadius:"10px",boxShadow:s.isFocused?"0 0 0 1px #d3a27f":"none","&:hover":{borderColor:"brown"}}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(e,s)=>({...e,transition:"all .3s ease",transform:s.selectProps.menuIsOpen?"rotate(0)":"rotate(-180deg)",color:"brown",cursor:"pointer"}),menu:e=>({...e,border:"1px solid #d3a27f",background:"white",borderRadius:"10px"}),option:(e,s)=>({...e,color:s.isSelected?"white":"black",backgroundColor:s.isSelected?"#d3a27f":"white","&:hover":{backgroundColor:"#d3a27f",color:"white",cursor:"pointer"},"&:focus":{backgroundColor:"#d3a27f",color:"white"}}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none"})},X=e=>(0,_.jsx)(Z.Ay,{...e,styles:V,placeholder:"\u041f\u0435\u0440\u0435\u0445\u0456\u0434 \u0434\u043e \u0440\u043e\u0437\u0434\u0456\u043b\u0456\u0432 \u0431\u043b\u044e\u0434..."}),J=()=>{const e=[A,S,M,P],[s,i]=(0,t.useState)([]),[r,a]=(0,t.useState)([]),[l,n]=(0,t.useState)(!1),[o,d]=(0,t.useState)(!0),[h,m]=(0,t.useState)([]),[p,x]=(0,t.useState)(null),g=[{value:"",label:"All"},...Array.from(new Set(r.map((e=>e.categories)))).map(((e,s)=>({value:"category-".concat(s),label:e})))],u=(e,s)=>{x(s),m([e])},v=(0,t.useCallback)((async()=>{n(!0);try{const e=await(async e=>{const{data:s}=await c.A.get("https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/pizza-buratino?page=".concat(e,"&limit=9"));return s})(Math.ceil(s.length/9+1));0===e.length?d(!1):i((s=>[...s,...e].filter(((e,s,i)=>s===i.findIndex((s=>s.id===e.id)))).sort(((e,s)=>e.level-s.level))))}catch(e){console.error("Error fetching pizzas:",e)}finally{n(!1)}}),[s.length]);(0,t.useEffect)((()=>{v()}),[v]),(0,t.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&!l&&o&&v()}));return e.observe(document.querySelector("#loadMore")),()=>e.disconnect()}),[l,o,v]);const w=(0,t.useCallback)((()=>{const e=s.filter((e=>0===h.length||h.every((s=>{switch(s){case"vegetarian":return!0===e.vegetarian;case"new":return!0===e.new;case"spicy":return!0===e.spicy;case"popular":return!0===e.popular;default:return!0}}))));console.log("Filtered Pizzas:",e),a(e)}),[s,h]);(0,t.useEffect)((()=>{w()}),[w,h]);return(0,_.jsxs)("div",{className:"container",children:[(0,_.jsx)("h1",{children:"PIZZA BURATINO"}),(0,_.jsxs)("div",{className:H,children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)("div",{className:O,"data-description":"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0435",onClick:()=>u("vegetarian","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0435"),children:(0,_.jsx)(B,{width:"50px"})}),(0,_.jsx)("div",{className:O,"data-description":"\u041d\u043e\u0432\u0438\u043d\u043a\u0430",onClick:()=>u("new","\u041d\u043e\u0432\u0438\u043d\u043a\u0430"),children:(0,_.jsx)(E,{width:"50px"})}),(0,_.jsx)("div",{className:O,"data-description":"\u0413\u043e\u0441\u0442\u0440\u0435",onClick:()=>u("spicy","\u0413\u043e\u0441\u0442\u0440\u0435"),children:(0,_.jsx)(R,{width:"50px"})}),(0,_.jsx)("div",{className:O,"data-description":"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0435",onClick:()=>u("popular","\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0435"),children:(0,_.jsx)(F,{width:"50px"})}),(0,_.jsx)("div",{className:O,"data-description":"\u0423c\u0435",onClick:()=>u("","\u0412\u0441\u0456 \u043d\u0430\u0448\u0456 \u0441\u043c\u0430\u043a\u043e\u043b\u0438\u043a\u0438 \u0434\u043b\u044f \u0412\u0430\u0441 \u0448\u0430\u043d\u043e\u0432\u043d\u0456)"),children:(0,_.jsx)(T,{width:"50px"})})]}),(0,_.jsx)(X,{className:"selectCategories",options:g,onChange:e=>{const s=null===e||void 0===e?void 0:e.value;if(s){const e=document.getElementById(s);e&&e.scrollIntoView({behavior:"smooth"})}}})]}),(0,_.jsx)(I,{images:e,interval:3e3})]}),p&&(0,_.jsx)("h2",{className:Y,children:p}),(0,_.jsxs)("div",{children:[Array.from(new Set(r.map((e=>e.level)))).sort(((e,s)=>e-s)).map(((e,s)=>{var i,t;return(0,_.jsx)("div",{id:"category-".concat(s),children:(0,_.jsx)(y,{category:null!==(i=null===(t=r.find((s=>s.level===e)))||void 0===t?void 0:t.categories)&&void 0!==i?i:"",pizzas:r.filter((s=>s.level===e))})},e)})),(0,_.jsx)("div",{id:"loadMore",style:{height:"1px"}}),l&&(0,_.jsx)("p",{children:"Loading more pizzas..."}),!o&&(0,_.jsx)("p",{children:"No more pizzas to load."})]}),!l&&(0,_.jsx)(W,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}})]})}}}]);
//# sourceMappingURL=37.f5267793.chunk.js.map