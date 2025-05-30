const app = document.getElementById("app");
document.getElementById("app").innerHTML = createRevuMainSection();

function createRevuMainSection() {
    return `
    
    <div class="all-section">
        <div class="header-section">
            <div class="header-logo">
                <img src="https://www.revu.net/assets/img/logo/logo-revu.svg" alt="logo"  class="header-logo-img">
            </div>
            <div class="header-menu">
                <div class="header-menu-left">
                <p>제품</p>
                <p>지역</p>
                <p>기자단</p>
                <p>저금통</p>
                </div>

                <div class="header-menu-right">
                <div class="header-menu-logo">
                    <img src="https://www.revu.net/assets/img/ai/ai-gnb-q.gif" alt="logo"  class="header-menu-logo-img">
                </div>
                <div class="header-menu-logo-icons">
                <div class="header-menu-logo">
                    <img src="https://www.revu.net/assets/img/user/avatar.svg" alt="logo"  class="header-menu-logo-happy-img    ">
                </div>
                <div class="header-menu-logo-icon">
                    <img src="../images/bell.svg" alt="icon" class="header-menu-logo-icon-img">
                </div>
                <div class="header-menu-logo-icon">
                    <img src="../images/search.svg" alt="icon" class="header-menu-logo-icon-img">  
                </div>
                </div>
            </div>
            </div>
    </div>
    
    <div class="nav-section">
        <div class="news-section-left">
            <img src="../images/menu.svg" alt="menu" class="menu-img">
            <p>오늘의 오픈</p>
            <p>프리미어</p>
            <p>유튜브</p>
            <p>구매평</p>
            <p>클립</p>
            <p>커뮤니티</p>
        </div>
        <div class="news-section-right">
            <p>신청한 캠페인</p> <P class="news-section-right-num">0</P>
            <p>선택한 캠페인</p> <P class="news-section-right-num">0</P>
            <p>캠페인 참여 현황</p> <P class="news-section-right-num">0</P>
        </div>
    </div>
    </div>
    `;
}