import React from 'react'
import iconn_1 from '../assets/iconn_1.png'
import iconn_2 from '../assets/iconn_2.png'
import iconn_3 from '../assets/iconn_3.png'
import iconn_4 from '../assets/iconn_4.png'
import iconn_5 from '../assets/iconn_5.png'
import iconn_6 from '../assets/iconn_6.png'
import iconn_7 from '../assets/iconn_7.png'
import iconn_8 from '../assets/iconn_8.png'
import iconn_9 from '../assets/iconn_9.png'
export default function SuppliersByRegion() {
    return (
        <div className='SuppliersByRegion-block-all'>
            <div className="continer">
                <h1>Suppliers by region</h1>
                <div className="SuppliersByRegion-flagg">
                    <div className="SuppliersByRegion-flag">
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_1} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>Arabic Emirates</p>
                                <span>shopname.ae</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_2} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>Australia</p>
                                <span>shopname.ae</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_3} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>United States</p>
                                <span>shopname.ae</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_4} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>Russia</p>
                                <span>shopname.ru</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_5} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>Italy</p>
                                <span>shopname.it</span>
                            </div>
                        </div>
                    </div>
                    <div className="SuppliersByRegion-flag">
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_6} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>Denmark</p>
                                <span>denmark.com.dk</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_7} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>France</p>
                                <span>shopname.com.fr</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_1} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>Arabic Emirates</p>
                                <span>shopname.ae</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_8} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>China</p>
                                <span>shopname.ae</span>
                            </div>
                        </div>
                        <div className="SuppliersByRegion-flag-block">
                            <img src={iconn_9} alt="" />
                            <div className="SuppliersByRegion-flag-block-text">
                                <p>Great Britain</p>
                                <span>shopname.co.uk</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
