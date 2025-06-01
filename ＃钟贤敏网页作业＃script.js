// script.js
// 部门数据（实际项目中应从外部JSON文件加载）
const departments = [
    {
        id: 1,
        name: "服装鞋包",
        description: "时尚服装、鞋履、箱包及配饰，打造完美造型",
        image: "https://img95.699pic.com/photo/60071/7843.jpg_wh860.jpg",
        hotItems: ["春季新款连衣裙", "男士休闲皮鞋", "时尚双肩包"],
        newItems: ["夏季透气T恤", "设计师联名款手袋", "春季针织开衫"],
        saleItems: ["羽绒服5折", "运动鞋7折", "真皮钱包6折"],
        points: [2000, 1500, 1000],
        memberDiscount: "8折",
        memberDays: [5, 15, 25]
    },
    {
        id: 2,
        name: "美妆护肤",
        description: "高端护肤品、彩妆及美容工具，呵护您的肌肤",
        image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.JEIqarXRmR2A3VCDYPNTUAHaEx?rs=1&pid=ImgDetMain",
        hotItems: ["保湿精华液", "口红套装", "防晒隔离霜"],
        newItems: ["抗老面霜", "持久粉底液", "眼影盘"],
        saleItems: ["面膜买一送一", "精华液7折", "彩妆套装85折"],
        points: [1500, 1200, 800],
        memberDiscount: "75折",
        memberDays: [8, 18, 28]
    },
    {
        id: 3,
        name: "家居生活",
        description: "家纺、厨具、收纳及装饰，打造舒适生活空间",
        image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.ljM20uioOOJxSu7rA_c_ugHaEl?rs=1&pid=ImgDetMain",
        hotItems: ["记忆棉枕头", "不粘锅套装", "香薰加湿器"],
        newItems: ["智能扫地机器人", "空气净化器", "多功能料理机"],
        saleItems: ["床品四件套6折", "厨房用具满减", "收纳箱买二送一"],
        points: [1800, 1000, 600],
        memberDiscount: "85折",
        memberDays: [3, 13, 23]
    },
    {
        id: 4,
        name: "数码电器",
        description: "手机、电脑、家电及智能设备，科技改变生活",
        image: "https://pic.616pic.com/ys_bnew_img/00/04/85/Jab2fqMlHW.jpg",
        hotItems: ["智能手机", "笔记本电脑", "无线耳机"],
        newItems: ["4K智能电视", "游戏主机", "智能手表"],
        saleItems: ["手机限时特惠", "电脑套装85折", "家电以旧换新"],
        points: [3000, 2500, 2000],
        memberDiscount: "9折",
        memberDays: [7, 17, 27]
    },
    {
        id: 5,
        name: "食品生鲜",
        description: "新鲜蔬果、进口食品、酒水饮料及地方特产",
        image: "https://ts1.tc.mm.bing.net/th/id/R-C.4ab0383fa1c661ce610617ae553d0310?rik=IkqpjBlp3AzE%2bQ&riu=http%3a%2f%2fheadscm.com%2fuserimages%2f20190313%2f5c886caec43622.70477893.png&ehk=xNoctSAN8kiaY2I7d4wsTd0r647H2qva0V37uVZjbmw%3d&risl=&pid=ImgRaw&r=0",
        hotItems: ["进口水果礼盒", "有机蔬菜", "精酿啤酒"],
        newItems: ["季节限定甜品", "健康轻食", "特色调味料"],
        saleItems: ["生鲜满100减20", "零食买一送一", "酒水8折"],
        points: [1000, 800, 500],
        memberDiscount: "88折",
        memberDays: [10, 20, 30]
    },
    {
        id: 6,
        name: "母婴玩具",
        description: "婴幼儿用品、玩具、童装及孕产妇专用商品",
        image: "https://ts1.tc.mm.bing.net/th/id/R-C.35bd1a89bc372525f3397e8b04930270?rik=%2fjKaU8exggmCBQ&riu=http%3a%2f%2fy0.ifengimg.com%2f784169bbbbe5ca1b%2f2015%2f0506%2frdn_5549bffb71e2b.jpg&ehk=ho6gvvQX39wFq%2f%2bn1eLx4affT0BVM2Iq0iGH0KO8jIY%3d&risl=&pid=ImgRaw&r=0",
        hotItems: ["婴儿推车", "益智积木", "儿童安全座椅"],
        newItems: ["智能学习机器人", "孕妇护理套装", "婴儿监控器"],
        saleItems: ["童装5折起", "玩具满300减50", "母婴用品套装特惠"],
        points: [1200, 900, 700],
        memberDiscount: "8折",
        memberDays: [6, 16, 26]
    }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const departmentsGrid = document.getElementById('departmentsGrid');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // 渲染部门卡片
    function renderDepartments(type = 'all') {
        departmentsGrid.innerHTML = '';
        
        departments.forEach(dept => {
            const card = document.createElement('div');
            card.className = 'department-card';
            
            // 根据类型生成不同内容
            let contentHTML = '';
            let tagHTML = '';
            
            switch(type) {
                case 'all':
                    contentHTML = `
                        <div class="card-image" style="background-image: url(${dept.image})">
                            <div class="card-overlay">
                                <h3 style="color: white;">${dept.name}</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>${dept.name}</h3>
                            <p>${dept.description}</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">浏览商品</button>
                                <button class="btn btn-outline">查看优惠</button>
                            </div>
                        </div>
                    `;
                    break;
                
                case 'hot':
                    const hotItem = dept.hotItems[Math.floor(Math.random() * dept.hotItems.length)];
                    tagHTML = `<div class="tag hot-tag"><i class="fas fa-fire"></i> 热门</div>`;
                    contentHTML = `
                        <div class="card-image" style="background-image: url(${dept.image})">
                            ${tagHTML}
                            <div class="card-overlay">
                                <h3 style="color: white;">${hotItem}</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>${hotItem}</h3>
                            <p>${dept.name} · 热卖推荐</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">立即购买</button>
                                <button class="btn btn-outline">加入购物车</button>
                            </div>
                        </div>
                    `;
                    break;
                
                case 'new':
                    const newItem = dept.newItems[Math.floor(Math.random() * dept.newItems.length)];
                    tagHTML = `<div class="tag new-tag"><i class="fas fa-star"></i> 新品</div>`;
                    contentHTML = `
                        <div class="card-image" style="background-image: url(${dept.image})">
                            ${tagHTML}
                            <div class="card-overlay">
                                <h3 style="color: white;">${newItem}</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>${newItem}</h3>
                            <p>${dept.name} · 新品上市</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">抢先体验</button>
                                <button class="btn btn-outline">查看详情</button>
                            </div>
                        </div>
                    `;
                    break;
                
                case 'sale':
                    const saleIndex = Math.floor(Math.random() * dept.saleItems.length);
                    const saleItem = dept.saleItems[saleIndex];
                    const salePoints = dept.points[saleIndex];
                    tagHTML = `<div class="tag sale-tag"><i class="fas fa-tag"></i> 促销</div>`;
                    contentHTML = `
                        <div class="card-image" style="background-image: url(${dept.image})">
                            ${tagHTML}
                            <div class="card-overlay">
                                <h3 style="color: white;">${saleItem}</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>${saleItem}</h3>
                            <p>${dept.name} · 积分兑换: ${salePoints}分</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">立即抢购</button>
                                <button class="btn btn-outline">积分兑换</button>
                            </div>
                        </div>
                    `;
                    break;
                
                case 'member':
                    tagHTML = `<div class="tag member-tag"><i class="fas fa-crown"></i> 会员</div>`;
                    const memberDays = dept.memberDays.map(d => `${d}日`).join('、');
                    contentHTML = `
                        <div class="card-image" style="background-image: url(${dept.image})">
                            ${tagHTML}
                            <div class="card-overlay">
                                <h3 style="color: white;">${dept.name}会员日</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>${dept.name}会员专享</h3>
                            <p>会员日: 每月${memberDays}</p>
                            <p>会员折扣: ${dept.memberDiscount}</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">加入会员</button>
                                <button class="btn btn-outline">查看权益</button>
                            </div>
                        </div>
                    `;
                    break;
            }
            
            card.innerHTML = contentHTML;
            departmentsGrid.appendChild(card);
        });
    }
    
    // 初始渲染
    renderDepartments();
    
    // 导航按钮事件
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // 为当前按钮添加active类
            this.classList.add('active');
            
            // 获取按钮类型并渲染相应内容
            const type = this.getAttribute('data-type');
            renderDepartments(type);
        });
    });
    
    // 搜索框聚焦效果
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 6px 20px rgba(37, 117, 252, 0.2)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });
});