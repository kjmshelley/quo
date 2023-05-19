import "./style.small.device.css";
import "./style.css";

function Header() {
    return (
        <header>
            <div className="header-border">
                <div className="header-img">
                    <div>
                        <img src="/assets/img/animal.png" alt="Poly Logo" />
                    </div>
                </div>
                <div className="header-info">
                    <div className="header-info-language">
                        <div>
                            <img src="/assets/img/china2.png" alt="Chinese Language" />
                        </div>
                    </div>
                    <div className="header-info-tokens">
                        <div>
                            <img src="/assets/img/dollar.png" alt="Tokens" />
                        </div>
                        <div className="header-info-tokens-amount">
                            <span>64</span>
                        </div>
                    </div>
                    <div className="header-info-level">
                        <div className="header-info-level-text">A1 - Newbie</div>
                        <div className="header-info-level-img">
                            <img src="/assets/img/down-arrow.png" alt="Down" />
                        </div>
                    </div>
                    <div className="header-profile">
                        <div>
                            <img src="/assets/img/user.png" alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;