import React, { useEffect, useState } from 'react';
import Logo from './Shein-logo.png'
import Search from './Search.png'
import Chel from './Image/Person.png'
import Mag from './Image/Mag.png'
import Heart from "./Image/Heart.png"
import Airpods from './Image/Airpod-Case.png'
import Mir from './Image/mir.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Grid from '@mui/material/Grid';

export default function Home() {
   const[tabs,setTabs] = useState([])
   useEffect(()=> {
      async function gettabs(){
      const authAxios = axios.create({
         baseUrl: "https://unofficial-shein.p.rapidapi.com",
         params: {
            language: 'en',
            country: 'US',
            currency: 'USD'
          },
          headers: {
            'X-RapidAPI-Key': '65f1b8e81emsh53212e99df13068p1b4338jsn43ecd4a0ae7b',
            'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
          }
      })
      try {
         const response = await authAxios.get ('https://unofficial-shein.p.rapidapi.com/navigations/get-tabs')
         const result = response.data
         console.log(response.data)
         setTabs(response.data)
         return result;
      } catch(err) {
         console.log(err)
      }
   }
   })
   

   return (
      <>
         <section className='section-logo'>
            <div className='Logo'>
               <img className='Logotip' src={Logo} alt="" />
               <div className='Navv'>
                  <input className='input' type="text" placeholder='' />
                  <button className='Click'> <img src={Search} alt="" /></button>
                  <div className='chel'>
                     <img src={Chel} alt="" />
                     <img src={Mag} alt="" />
                     <img src={Heart} alt="" />
                     <img src={Airpods} alt="" />
                     <img src={Mir} alt="" />
                  </div>
               </div>

            </div>
            <div className='Nav'>
               <Link to="/"> Catigories</Link>
               <Link to="/"> New In</Link>
               <Link to="/"> Sale</Link>
               <Link to="/"> Women Clothing</Link>
               <Link to="/"> Curve</Link>
               <Link to="/"> Kids</Link>
               <Link to="/"> Men Fashion</Link>
               <Link to="/"> Women Lingerie & Sleep</Link>
               <Link to="/"> Women Jewelry & Accessories</Link>
               <Link to="/"> Women Shoes</Link>
               <Link to="/"> Home & Kitchen</Link>
               <Link to="/"> Sports & Outdoors</Link>
               <Link to="/"> Baby & Maternity</Link>
            </div>
            <div className='wrapper-catigory'>
               <div className=''>
                  <div className='catigory-sps'>
                     <Grid container spacing={1}>
                        <Grid item xs={2}>
                           <div className='catigory_list'>
                              <Link to="/"> New In</Link>
                              <Link to="/"> Sale</Link>
                              <Link to="/"> Women Clothing</Link>
                              <Link to="/"> Curve</Link>
                              <Link to="/"> Kids</Link>
                              <Link to="/"> Men Fashion</Link>
                              <Link to="/"> Women Lingerie & Sleep</Link>
                              <Link to="/"> Women Jewelry & Accessories</Link>
                              <Link to="/"> Women Shoes</Link>
                              <Link to="/"> Home & Kitchen</Link>
                              <Link to="/"> Sports & Outdoors</Link>
                              <Link to="/"> Baby & Maternity</Link>

                           </div>
                        </Grid>
                        <Grid item xs={3}>
                           <div className='catigory-shop'>
                              <div className='aaa'>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/db/1700553625a14b286cacab8748932c40bbd8630e67.png" alt="" /></li>
                                    <span className='nadpis'>View all</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/11/7b/1702296303e000429113bc063377f03b273ce1d730.png" alt="" /></li>
                                    <span className='nadpis'>Dresses</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/07/4c/170195229326b32ac9efb811f6edd79e973aa63509.png" alt="" /></li>
                                    <span className='nadpis'>Tops</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/01/77/1701422431dc5456b6aac847a49ff9de18d66f30c2.png" alt="" /></li>
                                    <span className='nadpis'>Blouses</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/01/91/170143245504bc347f855a0a03b6c56e3e4063ce98.png" alt="" /></li>
                                    <span className='nadpis'>Bottoms</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/10/11/170219505124e0bee2d739403cb799fa9d4fe9d0bf.png" alt="" /></li>
                                    <span className='nadpis'>Twopiece</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/08/a3/1702037436b278333bce585d9f8f5c57766b85a49d.png" alt="" /></li>
                                    <span className='nadpis'>Knitwear</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/13/0e/1702433551b47800618ea547b08e4ab4d116af42ab.png" alt="" /></li>
                                    <span className='nadpis'>Sweatshirts</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/01/78/1701432570c1c50d1b7d828d9d9faf5cd9981fe049.png" alt="" /></li>
                                    <span className='nadpis'>Outerwear</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/11/10/170223069161fb9c1c66545dc387eed0ae4023c3d2.png" alt="" /></li>
                                    <span className='nadpis'>Denim</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/13/53/17024509526877cf97a3cbde379d00fb1b8ffe0fd0.png" alt="" /></li>
                                    <span className='nadpis'>Jumpsuits</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/14/15/17025392711b3acfe3f231eeac68618ac0e7d71561.png" alt="" /></li>
                                    <span className='nadpis'>Beachwear</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/11/28/79/17011587911e2aeb11d2ce103710d00def6b6076a3.png" alt="" /></li>
                                    <span className='nadpis'>Bodysuits</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/06/21/168734955149615f1787bb3c864e574d7c2d3e3a66.png" alt="" /></li>
                                    <span className='nadpis'>Lingerie</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/10/67/17021936707c6fd691c998f351f81cf97256c32623.png" alt="" /></li>
                                    <span className='nadpis'>Loungewear</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/13/bb/1702450893f62830227cee2761928c44257df740c0.png" alt="" /></li>
                                    <span className='nadpis'>Maternity<br />clothing</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/11/30/a6/17013277517a4734b7f8f8cc1fc39ca0961cdc058f.png" alt="" /></li>
                                    <span className='nadpis'>Wedding</span>
                                 </div>
                                 <div>
                                    <li><img src="https://img.ltwebstatic.com/images3_abc/2023/06/05/16859483412988fbda31028676909edfd745006d13.png" alt="" /></li>
                                    <span className='nadpis'>Party wear</span>
                                 </div>

                              </div>

                           </div>
                        </Grid>
                        <Grid item xs={6}>
                           <div className='shop'>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_pi/2023/11/21/db/1700553625a14b286cacab8748932c40bbd8630e67.png" alt="" /></li>
                                 <span className='nadpis'>View all</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/06/08/16861681210b47972be1e99e2bb6ec5923dc004d53.png" alt="" /></li>
                                 <span className='nadpis'>Dresses</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/14/b0/17025564319f129d02f7d3da3682189453b0c7fc60.png" alt="" /></li>
                                 <span className='nadpis'>Tops</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/12/41/1702347092860a4291a0bb3802b4d933fe4739483d.png" alt="" /></li>
                                 <span className='nadpis'>Bottoms</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/11/29/fd/1701245855c2edede7fcaba62ff6fbc82b6f1831ec.png" alt="" /></li>
                                 <span className='nadpis'>Denim</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/11/27/ba/1701078030ce1cb7e63c77af14b513ae0c1694df50.png" alt="" /></li>
                                 <span className='nadpis'>Co-ords</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/11/26/17022782110dfe91fff46abfb78303e3107b3374a0.png" alt="" /></li>
                                 <span className='nadpis'>Sweatshirts</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/11/08/4f/16994367930cbc11e53eb5e62bf5021f4656d438e3.png" alt="" /></li>
                                 <span className='nadpis'>Sweaters</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/10/3d/1702194992bfb887375f3d106cd11155e8b48a17bf.png" alt="" /></li>
                                 <span className='nadpis'>Outerwear</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_pi/2023/06/14/1686739472a19e7c190d496a4a455d27eda12e0656.png" alt="" /></li>
                                 <span className='nadpis'>Beachwear</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/01/c3/1701419430704446c306d2df43ec083f2977a9ca34.png" alt="" /></li>
                                 <span className='nadpis'>Lingerie</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/11/03/13/1698946532c15b3c2aec238707c306bde29a6019ef.png" alt="" /></li>
                                 <span className='nadpis'>Lounge & sleep</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/12/b2/1702347034b7ba9924535530598b8f0f458738119d.png" alt="" /></li>
                                 <span className='nadpis'>Blouses</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2023/12/14/f6/1702556850f36e0859f15d3305403e554ce9398f12.png" alt="" /></li>
                                 <span className='nadpis'>Bodysuits & jumpsuits</span>
                              </div>
                              <div>
                                 <li><img src="https://img.ltwebstatic.com/images3_abc/2022/11/29/1669734429ac9f6315d9510294c138145449a44018.png" alt="" /></li>
                                 <span className='nadpis'>Weddings & events</span>
                              </div>
                           </div>
                        </Grid>
                     </Grid>
                  </div>

               </div>
            </div>

         </section>




      </>
   )
}