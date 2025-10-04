import React from 'react'

const Pricing = () => {
  return (
    <div className='Plans'>
        <h2 className='Heading'>Discover the Full Potential of CoinXC</h2>
        <p>14 days money-back guarentee .Cancel anytime,anywhere for any reason.</p>
        <div className='plan-grid'>
            <div className='Basic'>
                <h3>Basic</h3>
                <p>Free</p>
                <button className='basic-btn'>Select</button>
                <li>✅Portfolio Heatmap</li>
                <li>✅Asset Allocation Analytics</li>
                <li>✅Profit&Loss</li>
                <li>✅Custom Alerts</li>
                <li>❌Add Free</li>
                <li>❌Portfolio Performance Analysis</li>
                <li>❌Wallet Analyser</li>
                <li>❌Coin Insights</li>
                <li>❌Token Risks</li>
            </div>

            <div className='Premium'>
                <h3>Premium</h3>
                <div>
                    <p>$1.66</p>
                    <p>/months</p>
                </div>
                <p>You are saving 58% with the Yeartly plan</p>
                <button className='premium-btn'>Select</button>
                <li>✅Portfolio Heatmap</li>
                <li>✅Asset Allocation Analytics</li>
                <li>✅Profit&Loss</li>
                <li>✅Custom Alerts</li>
                <li>✅Add Free</li>
                <li>✅Portfolio Performance Analysis</li>
                <li>✅Wallet Analyser</li>
                <li>❌Coin Insights</li>
                <li>❌Token Risks</li>
            </div>

             <div className='Degen'>
                <h3>Degen</h3>
                <div>
                    <p>$15.91</p>
                    <p>/months</p>
                </div>
                <p>You are saving 49% with the Yeartly plan</p>
                <button className='Degen-btn'>Select</button>
                <li>✅Portfolio Heatmap</li>
                <li>✅Asset Allocation Analytics</li>
                <li>✅Profit&Loss</li>
                <li>✅Custom Alerts</li>
                <li>✅Add Free</li>
                <li>✅Portfolio Performance Analysis</li>
                <li>✅Wallet Analyser</li>
                <li>✅Coin Insights</li>
                <li>✅Token Risks</li>
            </div>
        </div>
    </div>
  )
}

export default Pricing