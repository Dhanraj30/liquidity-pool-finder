import React, {useState, useEffect} from "react";
import {GoCopy} from "react-icons/go";

//internal import
import { shorttenAddress } from "../utils/shortaddress";
import {Promo} from "../components/index";

const GetLiqudity = ({ setActiveComponent}) => {
  const [liqudityDetails, setLiqudityDetails] = useState([]);

  useEffect(() => {
    const liqudity = JSON.parse(localStorage.getItem("liqudityHistory"));

    setLiqudityDetails(liqudity?.reverse());
  }, []);
  return (
    <section id="price" className="pt-32">
      <div className="container">
        {liqudityDetails ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2
           grid-cols-1 gap-10">
            {liqudityDetails?.map((pool, index) => (
              <div>
                <div className="bg-slate-950/40 rounded-xl
                 hover:-translate-y-2 transition-all duration-500">
                  <div className="border border-white/10 rounded-xl">
                    <div className="p-6">
                      <a className="flex items-center
                       justify-center gap-2 boreder border-white/10
                        text-white py-2 px-6 mt-6 rounded-lg hover:bg-primary-hover transition-all
                         duration-300">
                          {pool.network}
                         </a>
                         <hr className="my-5 border-dashed
                          border-white/10" />
                          <ul className="mt-3 text-sm text-default-700" 
                           role="list">
                            <li className="flex items-center gap-2 py-2">
                              <i 
                                onClick={() => 
                                  navigator.clipboard.writeText(pool.token_A)
                                }
                                className="inline-block w-5 text-primary">
                                  <GoCopy />
                                  
                                </i>
                                <span className="text-default-50">
                                    Token A: {shorttenAddress(pool.token_A)}
                                  </span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                              <i 
                                onClick={() => 
                                  navigator.clipboard.writeText(pool.token_B)
                                }
                                className="inline-block w-5 text-primary">
                                  <GoCopy />
              
                                </i>
                                <span className="text-default-50">
                                    Token B: {shorttenAddress(pool.token_B)}
                                  </span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                              <i 
                                onClick={() => 
                                  navigator.clipboard.writeText(pool.fee)
                                }
                                className="inline-block w-5 text-primary">
                                  <GoCopy />
                                  
                                </i>
                                <span className="text-default-50">
                                    fee: {pool.fee}
                                  </span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                              <i 
                                onClick={() => 
                                  navigator.clipboard.writeText(pool.liquidity)
                                }
                                className="inline-block w-5 text-primary">
                                  <GoCopy />
                                  
                                </i>
                                <span className="text-default-50">
                                    Liquidity: {pool.liquidity}
                                  </span>
                            </li>
                            <li className="flex items-center gap-2 py-2">
                              <i 
                                onClick={() => 
                                  navigator.clipboard.writeText(pool.poolAddress)
                                }
                                className="inline-block w-5 text-primary">
                                  <GoCopy />
                                  
                                </i>
                                <span className="text-default-50">
                                    PoolAddress: {shorttenAddress(pool.poolAddress)}
                                  </span>
                            </li>
                           </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div> 
        ) : (
          <Promo setActiveComponent={setActiveComponent} />
        )}
      </div>
    </section>
  );
};

export default GetLiqudity;
