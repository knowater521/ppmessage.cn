import React from 'react'

import NavDropdown  from "../components/navdropdown.js";
import EnterYourMobile from "../components/enteryourmobile";
import Hamburger from "../components/hamburger";

import styles from "../pages/about-css-modules.module.css";
import "./navheader.css"

import { Location } from '@reach/router'

class NavHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll_top: 0
        }

        this.scroll = this.scroll.bind(this);
    }

    scroll() {
        let _scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        this.setState({scroll_top: _scroll_top});
    }
    
    componentWillUnmount() {       
        window.removeEventListener('scroll', this.scroll);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
        this.scroll();
    }

    render() {
        
        let _navClass = "navheader";
        if (this.state.scroll_top > 20) {
            _navClass = "navheader-fixed";
        }

        let _header = (
            <div className={styles.heiti} style={{"position": "relative"}}>                        
                <div className={_navClass}>
                    <div className={styles.container}>
                        <a href="/" className={styles.brand__logo} >
                            <img src={require("../images/ppmessage-logo-black.png")} alt="PPMESSAGE-新一代全渠道智能在线客服系统_网站客服系统"/>
                        </a> 
                        <div className={styles.nav__content}>
                            <div className={styles.Hamburger_div}>
                                <Hamburger>
                                    <div style={{
                                        display: "flex",
                                        flex: "0 1 auto",
                                        flexWrap: "wrap",
                                        flexDirection: "row"
                                    }}>
                                        <div className={styles.g__c7_s}>
                                            <div className={styles.t__h4}>
                                                产品
                                            </div>
                                            <div className={styles.hr__grey}></div>
                                            <div style={{height:"10px"}}></div>                                    
                                            <a href="/product" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    智能客服
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/cloud-call-center" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    云呼叫中心
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/intelligent-customer-service-robot" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    智能客服机器人
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/intelligent-speech-robot" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    智能语音机器人
                                                </div>
                                            </a>
                                            <div style={{height:"10px"}}></div>
                                            <a href="/business-custom" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                    业务定制
                                                </div>
                                            </a>

                                            {/*

                                                <div style={{height:"30px"}}></div>
                                                <div className={styles.t__h4}>
                                                <font>
                                                行业解决方案
                                                </font>
                                                </div>                                                               
                                                <div className={styles.hr__grey}></div>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/quick-sale-product-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                快消品解决方案
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/commerce-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                电商行业解决方案  
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/manufacturing-sulotions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                制造业解决方案  
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/automotive-service-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                汽车服务解决方案   
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/education-training-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                教育培训解决方案
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/finacial-insurance-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                金融保险解决方案                                                              </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/medical-health-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                医疗健康解决方案                                                                 </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/restaurant-chain-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                餐饮连锁解决方案                                                           </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/local-living-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                本地生活解决方案                                                           </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/real-estate-proper-solution" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                房产物业解决方案
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/tourism-hotel-industry-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                旅游酒店行业解决方案  
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="/government-solutions" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                政府与事业单位解决方案  
                                                </font>
                                                </div>
                                                </a>
                                                </div>
                                                <div className={styles.g__c5_layouts}>
                                                <div className={styles.t__h4}>
                                                <font>
                                                应用场景
                                                </font>
                                                </div>
                                                <div className={styles.hr__grey}></div>
                                                <div style={{height:"10px"}}></div>                                    
                                                <a href="/transform-customs" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                获取和转化销售线索
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>                                    
                                                <a href="/guide-attract-customers" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                引导和吸引客户
                                                </font>
                                                </div>
                                                </a>
                                                <div style={{height:"10px"}}></div>                                    
                                                <a href="/conversion-business" className={styles.f__no_und_aways}>
                                                <div className={styles.f__medium}>
                                                <font style={{color:"black",fontSize:"16px"}}>
                                                支持客户并提高客户满意度
                                                </font>
                                                </div>
                                                </a>
                                              */}

                                                {/* <div style={{height:"30px"}}></div>

                                                    <div className={styles.t__h4}>
                                                    <font>
                                                    产品资源
                                                    </font>
                                                    </div>
                                                    <div className={styles.hr__grey}></div>
                                                    <div style={{height:"10px"}}></div>
                                                    <a href="/doc/" className={styles.f__no_und_aways}>
                                                    <div className={styles.f__medium}>
                                                    <font style={{color:"black",fontSize:"16px"}}>
                                                    开发者文档  
                                                    </font>
                                                    </div>
                                                    </a>
                                                  */}
                                                <div style={{height:"30px"}}></div>
                                                <a href="/pricing" className={styles.f__no_und_aways}>
                                                    <font style={{color:"black"}}>
                                                        <div className={styles.t__h4}>
                                                            定价
                                                        </div>
                                                    </font>
                                                </a>
                                                <div style={{height:"10px"}}></div>
                                                <a href="https://ppmessage.cn/ppkefu/#!/app/signin"
                                                   target="_blank" rel="noopener noreferrer"
                                                   className={styles.f__no_und_aways}>
                                                    <font style={{color:"black"}}>
                                                        <div className={styles.t__h4}>
                                                            登录
                                                        </div>
                                                    </font>
                                                </a>
                                                </div>
                                    </div>
                                </Hamburger>
                            </div>
                            <a className="navheader-link">
                                <NavDropdown title="产品">
                                    <div style={{
                                        display: "flex",
                                        flex: "0 1 auto",
                                        flexWrap: "wrap",
                                        flexDirection: "row"
                                    }}>
                                        <a href="/product" className={styles.f__no_und_aways}>
                                            <div className="navheader-dropdown-item-title">
                                                智能客服
                                            </div>
                                            <div className="navheader-dropdown-item-desc">
                                                一个界面管理来自网页、邮件、电话和社交媒体的所有客户消息
                                            </div>
                                        </a>

                                        <a href="/cloud-call-center" className={styles.f__no_und_aways}>
                                            <div className="navheader-dropdown-item-title">
                                                云呼叫中心
                                            </div>
                                            <div className="navheader-dropdown-item-desc">
                                                支持跨时区、跨地域、多语言分布式组网，真正All-in-One的客户体验与联络中心
                                            </div>
                                        </a>

                                        <a href="/intelligent-customer-service-robot" className={styles.f__no_und_aways}>
                                            <div className="navheader-dropdown-item-title">
                                                智能客服机器人
                                            </div>
                                            <div className="navheader-dropdown-item-desc">
                                                自主学习、人机无缝协作，提高客服满意度
                                            </div>
                                        </a>

                                        <a href="/intelligent-speech-robot" className={styles.f__no_und_aways}>
                                            <div className="navheader-dropdown-item-title">
                                                智能语音机器人
                                            </div>
                                            <div className="navheader-dropdown-item-desc">
                                                基于智能语音交互的人机融合平台，替代人工销售，延伸售后服务
                                            </div>
                                        </a>

                                        <a href="/business-custom" className={styles.f__no_und_aways}>
                                            <div className="navheader-dropdown-item-title">
                                                业务定制
                                            </div>
                                            <div className="navheader-dropdown-item-desc">
                                                独有的流程生成器与应用集成结合，快速满足企业业务定制需求
                                            </div>
                                        </a>
                                    </div>

                                </NavDropdown>

                            </a>

                            <a className="navheader-link">

                                <NavDropdown title="场景">
                                    <div style={{
                                        display: "flex",
                                        flex: "0 1 auto",
                                        flexWrap: "wrap",
                                        flexDirection: "row"
                                    }}>
                                        <div>
                                            <a href="/transform-customs" className={styles.f__no_und_aways}>
                                                <div className="navheader-dropdown-item-title">
                                                    获取和转化销售线索
                                                </div>
                                                <div className="navheader-dropdown-item-desc">
                                                    获取更多商机并达成更多交易
                                                </div>
                                            </a>

                                            <a href="/guide-attract-customers" style={{textDecoration:"none"}}>
                                                <div className="navheader-dropdown-item-title">
                                                    引导和吸引客户
                                                </div>
                                                <div className="navheader-dropdown-item-desc">
                                                    将更多注册用户转化为活跃的消费客户
                                                </div>
                                            </a>

                                            <a href="/conversion-business" style={{textDecoration:"none"}}>
                                                <div className="navheader-dropdown-item-title">
                                                    支持并提高客户满意度
                                                </div>
                                                <div className="navheader-dropdown-item-desc">
                                                    通过集成多个渠道，自助服务和自动化的现代服务台提高客户满意度并提高效率
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </NavDropdown>

                            </a>

                            
                            <a href="/pricing" className="navheader-link">
                                定价
                            </a>
                            <a href="https://ppmessage.cn/ppkefu/#!/app/signin"
                               target="_blank" rel="noopener noreferrer"
                               className="navheader-link" style={{paddingRight:"50px"}}>
                                登录
                            </a>
                            <div className="navheader-enter-mobile">
                                <EnterYourMobile size="small"/>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        );

        return (
            <Location>
                {({location}) => {
                     if (location.search=="?sheet=true") {
                         return <div/>
                     }
                     return _header
                }}
            </Location>
        )
}
}


export default NavHeader

