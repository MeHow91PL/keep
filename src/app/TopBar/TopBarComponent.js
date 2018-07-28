//React
import React from 'react'

//Components
import SearchInput from '../SearchInput/SearchComponent';

const TopBar = ({ toggleSidebar, previousSite }) => {
    console.log(toggleSidebar);
    
    return (
        <div className={`top-bar`} >
                <div className="hamburger btn" onClick={toggleSidebar}>
                    <svg viewBox="0 0 24 24">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>
                <div className="back btn" onClick={previousSite}>
                    <svg viewBox="0 0 31.494 31.494">
                        <path  d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                            c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                            c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
                    </svg>
                </div>
                <div className="cancel btn">
                    <svg viewBox="0 0 249.499 249.499">
                        <path d="M7.079,214.851l25.905,26.276c9.536,9.674,25.106,9.782,34.777,0.252l56.559-55.761l55.739,56.548
                        c9.542,9.674,25.112,9.782,34.78,0.246l26.265-25.887c9.674-9.536,9.788-25.106,0.246-34.786l-55.742-56.547l56.565-55.754
                        c9.667-9.536,9.787-25.106,0.239-34.786L216.52,8.375c-9.541-9.667-25.111-9.782-34.779-0.252l-56.568,55.761L69.433,7.331
                        C59.891-2.337,44.32-2.451,34.65,7.079L8.388,32.971c-9.674,9.542-9.791,25.106-0.252,34.786l55.745,56.553l-56.55,55.767
                        C-2.343,189.607-2.46,205.183,7.079,214.851z"/>
                    </svg>
                </div>
            <div className="logo">
                <span>Mehow</span>
                <span>Keep </span>
            </div>
            <SearchInput />
            <div className="odswiez btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    fill="#000000">
                    <path d="m0 0h18v18h-18z" fill="none" />
                    <path
                        d="m9 13.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5c1.24 0 2.36 0.52 3.17 1.33l-2.17 2.17h5v-5l-1.76 1.76c-1.09-1.08-2.58-1.76-4.24-1.76-3.31 0-5.99 2.69-5.99 6s2.68 6 5.99 6c2.97 0 5.43-2.16 5.9-5h-1.52c-0.46 2-2.24 3.5-4.38 3.5z" />
                </svg>
            </div>
            <div className="widok btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="m1 16h18v-6h-18v6zm0-13v6h18v-6h-18z" />
                </svg>
            </div>
            <div className="profil btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000">
                    <g>
                        <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path
                            d="M4571.3,4991.4c-408.7-38.8-887-145.1-1240.5-273.9c-288.2-106.3-780.7-353.6-1017.8-513c-733.7-488.4-1312.1-1142.4-1696.3-1919c-175.8-355.6-273.8-613.1-355.6-936C46.6,515.7,46.6-271.1,259.1-1119.3c159.4-637.6,498.7-1314.1,931.9-1847.5c169.6-210.5,523.2-566.1,731.6-735.7c494.6-402.6,1203.7-764.4,1802.5-919.7c887-230.9,1759.6-222.8,2624.1,22.5c803.2,228.9,1528.7,660.1,2129.5,1269.1c844,854.3,1318.2,1902.7,1410.1,3126.9c47,629.5-59.3,1379.5-280,1980.3c-502.7,1361.1-1579.8,2438.1-2938.8,2940.9C6036.7,4950.5,5239.6,5054.8,4571.3,4991.4z M5603.4,3051.9c218.7-69.5,363.8-155.3,496.6-294.3c288.2-298.4,406.7-764.3,353.6-1375.4c-16.3-192.1-18.4-300.4-6.1-327c40.9-73.6,108.3-116.5,192.1-120.6c75.6-4.1,87.9-10.2,102.2-61.3c55.2-194.2-87.9-474.1-353.6-690.8C6304.4,113.1,6263.5,62,6237-9.5c-114.4-302.5-284.1-570.2-488.4-766.4l-145.1-139v-365.8c0-443.5-4.1-435.3,294.3-533.4c108.3-34.7,200.3-67.4,204.4-71.5c38.8-32.7-412.8-341.3-631.5-431.2c-183.9-75.6-423-128.8-590.6-128.8c-263.6,0-588.6,96.1-850.2,249.3c-143.1,83.8-335.2,220.7-337.2,241.2c0,6.1,130.8,57.2,290.2,112.4c212.6,75.6,298.4,116.5,327,153.3c30.7,42.9,38.8,106.3,49.1,359.7c20.4,427.1,18.4,433.3-161.5,566.1c-224.8,165.5-367.9,376-476.2,696.9c-42.9,122.6-67.4,157.4-218.7,306.6c-192.1,188-275.9,331.1-294.3,506.8c-14.3,145.1,14.3,204.4,94,188c69.5-14.3,175.8,34.7,208.5,98.1c18.4,34.7,18.4,114.4-2.1,341.3c-38.8,455.8,10.2,803.2,155.3,1097.5c124.7,255.5,331.1,447.6,584.5,543.6c214.6,81.7,351.5,96,792.9,89.9C5409.2,3098.9,5478.7,3092.8,5603.4,3051.9z M7054.4-2245.3c224.8-87.9,468-190.1,539.5-226.8c126.7-63.4,132.8-69.5,179.8-198.2c55.2-145.1,149.2-517.1,149.2-582.5c0-83.8-551.8-470-946.2-662.2c-441.5-214.6-868.6-349.5-1352.9-423c-306.6-47-942.1-47-1246.6,0c-815.4,124.7-1565.5,453.7-2194.9,962.6l-149.2,120.6l14.3,92c16.3,104.2,118.5,515,149.2,596.7c22.5,57.2,202.3,141,756.2,353.6l286.1,110.4l59.3-61.3c102.2-108.3,441.4-351.5,609-439.4c868.6-445.5,1741.2-296.3,2544.4,439.4c81.7,75.6,122.6,100.1,153.3,92C6627.3-2077.7,6829.6-2155.4,7054.4-2245.3z" /></g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default TopBar
