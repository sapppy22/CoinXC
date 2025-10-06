import React,{useState} from 'react'
import "./Pricing.css"

const Pricing = () => {
    const[billing,setBilling]=useState("yearly");
  return (
    <div className='pricing-container'>
        <h2 className='Heading'>Discover the Full Potential of CoinXC</h2>
        <p className="pricing-para">14 days money-back guarentee .Cancel anytime for any reason.
            Explore coinXC without any limitations with all features🚀.
        </p>

        <div className="billing-toggle">
        <button className={billing==="monthly"?"active":""}
         onClick={()=>setBilling("monthly")}>
            1 Month
         </button>

         <button 
         className={billing==="yearly"?"active":""}
         onClick={()=>setBilling("yearly")}>
            12 Months <span>(save up to 58% with Yearly)</span>
         </button>
        </div>


        <div className='plan-grid'>
            <div className='plan-card Basic-card'>
                <p className="current plan">CURRENT PLAN</p>
                <h3>Basic</h3>
                <p>Free</p>
                <button className='plan-btn basic-btn'>Select</button>
                <p>✅Portfolio Heatmap</p>

                <p> ✅Asset Allocation Analytics</p>

                <p> ✅Profit&Loss</p>
                    
                <p> ✅Custom Alerts</p>

                <p> ❌Add Free</p>

                <p> ❌Portfolio Performance Analysis</p>

                <p>❌Wallet Analyser</p>

                <p>❌Coin Insights</p>

                <p>❌Token Risks</p>
                
            </div>

            <div className='plan-card Premium-card'>
                <div className="best-value">BEST VALUE</div>
                <h3>Premium</h3>
                <p className="price">
                    ${billing==="yearly"?"1.66":"3.99"}
                    <span>/month</span>
                </p>
                <p className='saving-text'>
                    you're saving 58% with yearly plan
                </p>
                <button className='plan-btn premium-btn'>Select</button>
                <a href='#' className='crypto-link'>Pay with Crypto </a>
                <p>✅Portfolio Heatmap</p>
                <p>✅Asset Allocation Analytics</p>
                <p>✅Profit&Loss</p>
                <p>✅Custom Alerts</p>
                <p>✅Add Free</p>
                <p>✅Portfolio Performance Analysis</p>
                <p>✅Wallet Analyser</p>
                <p>❌Coin Insights</p>
                <p>❌Token Risks</p>
            </div>

             <div className='plan-card Degen-card'>
                <h3>Degen</h3>
                <p className="price">
                    ${billing==="yearly"?"62.91" : "89.99"}
                    <span>/month</span>
                </p>
                <p className="saving-text">
                You are saving 29% with the Yearly plan
                </p>
                <button className='plan-btn degen-btn'>Select</button>
                <a href="#" className='crypto-link'>Pay with Crypto</a>
                <p>✅Portfolio Heatmap</p>
                <p>✅Asset Allocation Analytics</p>
                <p>✅Profit&Loss</p>
                <p>✅Custom Alerts</p>
                <p>✅Add Free</p>
                <p>✅Portfolio Performance Analysis</p>
                <p>✅Wallet Analyser</p>
                <p>✅Coin Insights</p>
                <p>✅Token Risks</p>
            </div>
        </div>
    </div>
  )
}

export default Pricing;