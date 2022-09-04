import bannerPhoto from './banner.png'
import './style.scss'

const Banner = () => {
    return (
    <div style = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url(${bannerPhoto})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '475px'
    }}>
        <div className="wrap">
        <div className="round">
            <span className="arrow">&#60;</span>
        </div>
        <div className="innerWrap">
        <div className="Layer-3">
            <div className="frase">ALUMINIUM CLUB</div>
        </div>
        <div className="Layer-3">
            <div className="frase1">EXPERIENCE RAY-BAN</div>
        </div>
        </div>
        </div>
        <div className="round">
        <span className="arrow">&#62;</span>
        </div>
    </div>
    )

}

export default Banner;