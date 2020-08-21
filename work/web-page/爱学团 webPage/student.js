$(document).ready(function(){
    // 固定导航条
    $(document).scroll(function(){
        let x = $(document).scrollTop();
        if(x > 100){
            $('.nav-box').addClass('nav-box1')
        }else if(x < 100){
            $('.nav-box').removeClass('nav-box1')
        }
    });


    // 导航条项目
    function sameFunction(index, hei){
        $(".nav").eq(index).find('.hide-box').stop().animate({height:hei+"px"},"fast");
        console.log($(".nav").eq(index).find('.hide-box'))
    };
    let heightArr = [0,164,82,0,0,82,0,0,0,0,0,0];
    let index = 0;

    $(".nav").hover(function(){
        index = $(this).index();
        sameFunction(index, heightArr[index]);
    },function(){
        sameFunction(index, 0); 
    });

    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination:{
            el: '.swiper-pagination',
            bulletActiveClass: 'pagination-dot',
        },
        });

     // 新闻资讯
     let data = [
        {
            newData : {
                newImg : "./studentImg/gf_img2.jpg",
                headline : "岳华峰书记调研沣河桥南污水处理站运行情况",
                content : "3月28日，西安市政协主席、西咸新区党工委书记岳华峰在世纪大道沣河桥南污水处理站调研项目运行情况。西咸新区管委会副主任刘优军，西咸集团党委书记、董事长周东参加调研。在世纪大道沣河桥南污水处理站，岳华峰仔细了解污水处理工艺流程、排放标准及沣河水质情况。岳华峰强调，污水... ",
                timeBig : "2019-07-26"
            },
            titleData: [  
                {
                    title : "岳华峰书记调研沣河桥南污水处理站运行情况",
                    time : "2019-07-26"
                },
                {
                    title : "岳华峰书记调研沣河桥南污水处理站运行情况",
                    time : "2019-07-26"
                },
                {
                    title : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                    time : "2019-07-26"
                },
                {
                    title : "岳华峰书记调研沣河桥南污水处理站运行情况",
                    time : "2019-07-26"
                },
                {
                    title : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                    time : "2019-07-26"
                }
            ]
        },
        {
            newData : {
                newImg : "./studentImg/gf_img3.jpg",
                headline : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                content : " 2月20日，西咸新区召开2019年追赶超越攻坚动员大会。西安市政协主席、西咸新区党工委书记岳华峰出席并讲话，强调要牢牢扭住追赶超越不放松，聚焦高质量发展不动摇，以更大的魄力抓产业，以更高的标准优环境，努力开创新区高质量高速度发展新局面。会议由西咸新区管委会主任康军主持... ",
                timeBig : ""
            },
            titleData: [
                {
                    title : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                    time : "2019-07-26"
                },
                {
                    title : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                    time : "2019-07-26"
                },
                {
                    title : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                    time : "2019-07-26"
                },
                {
                    title : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                    time : "2019-07-26"
                },
                {
                    title : "砥砺奋进再出发！西咸新区召开2019年追赶超越攻坚动员大会",
                    time : "2019-07-26"
                }
            ]
        }
    ];
    function newFunction(index){
        let newItem = "";
        let titleList = "";
        let item = "";
        newItem =   `<div class="new-text-box1">
                        <div class="text-img">
                            <img src="${data[index].newData.newImg}" alt="">
                        </div>
                        <div class="new-text">
                            <span>${data[index].newData.headline}</span>
                            <p>${data[index].newData.content}</p>
                            <strong>${data[index].newData.timeBig}</strong>
                        </div>
                    </div>`;
        for (const item of data[index].titleData) {
            titleList +=`<li class="item">
                            <span class="port"></span>
                            <a href="javascript:;">${item.title}</a>
                            <span class="flex_1"></span>
                            <span class="time">${item.time}</span> 
                        </li>`
        };
        $(".new-list").empty().append(titleList);
        $(".new-text-box").empty().append(newItem);
        titleList = "";
    };
    newFunction(0);
    $(".new-item-btn").eq(0).addClass("new-item-btn1");
    $(".new-item-btn").mouseenter(
        function(){
            let index = $(this).index();
            console.log(index);
            newFunction(index);
            // 移除
            $(this).siblings().removeClass("new-item-btn1");
            // 添加
            $(this).addClass("new-item-btn1"); 
    });

    // 职业规划老师
    let projectData = [
        {
            teachImg : "./studentImg/peo.png",
            teachName : "张老师",
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "李老师",
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "杨老师",
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "孙老师",
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "刘老师",
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "王老师",
        }
    ];
    let project = "";
    for (const pp of projectData) {
        project += `<li class="item">
                        <div class="teach-box">
                            <img src="${pp.teachImg}" alt=""/>
                        </div>
                        <h4 class="advisory-teach">${pp.teachName}</h4>
                        <div class="advisory-btn-box">
                            <a href="javascript:;" class="advisory-btn advisory-btn1">在线咨询</a>
                            <a href="javascript:;" class="advisory-btn advisory-btn2">了解详情</a>
                        </div>
                    </li>`;
        $(".advisory-banner").empty().append(project);
    }
    let left = 0;
    setInterval(function(){
        left -= 215;
        leftS = -($(".advisory-banner>li").length - 4 + 1) *  215;
        if(leftS >= left){
            left = 0;
            $(".advisory-banner").animate({"left":left+'px'},1,function(){
                left -= 215;
                $(".advisory-banner").animate({"left":left+'px'},500);
            });
        }else {
            $(".advisory-banner").animate({"left":left+'px'},500);
        }   
    },3000)
    
    // 十大热门行业
    let specialtyData = [
        {
            schoolImg: "./studentImg/5d4004ebb71b0.jpg",
            schoolSpecialty: "轨道机车运用与检测",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        },
        {
            schoolImg: "./studentImg/5d4005481312d.jpg",
            schoolSpecialty: "现代酒店管理",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        },
        {
            schoolImg: "./studentImg/5d4005a8d59f8.jpg",
            schoolSpecialty: "播音主持",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        },
        {
            schoolImg: "./studentImg/5d400617d59f8aodi.jpg",
            schoolSpecialty: "汽车维修与检测",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        },
        {
            schoolImg: "./studentImg/5d4006616ea05youer.jpg",
            schoolSpecialty: "幼儿教育",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        },
        {
            schoolImg: "./studentImg/5d4007f5a4083yiliao.jpg",
            schoolSpecialty: "医学高级护理（中德国际）",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        },
        {
            schoolImg: "./studentImg/5d40084c7a120day.jpg",
            schoolSpecialty: "3D打印技术",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        },
        {
            schoolImg: "./studentImg/5d40089c3d090jq.jpg",
            schoolSpecialty: "机器人自动化应用技术",
            schoolNumber: "助学院校：2所（1所国家重点公办院校",
            schoolMoney: "助学金额：1000元-6000元",
        }
    ]
    let specialty = "";
    for (const item of specialtyData) { 
        specialty += `<li class="list-item">
                        <img src="${item.schoolImg}" alt="">
                        <span>${item.schoolSpecialty}</span>
                        <p>${item.schoolNumber}</p>
                        <p>${item.schoolMoney}</p>
                        <div class="btn-box">
                            <a class="btn btn1" href="">在线咨询</a>
                            <a class="btn btn2" href="">了解详情</a>
                        </div>
                    </li>`;
                    
        $(".hot-list1").empty().append(specialty);
    }
    $('.list-item').hover(function(){
        $(this).css("background","#de5b64");
        $(this).find('span').css("color","#FFFFFF");
        $(this).find('p').css("color","#FFFFFF");
    },function(){
        $(this).css("background","none");
        $(".list-item>span").css("color","#333");
        $(".list-item p").css("color","#999");
    });
  
     // 助学专员
     let attacheData = [
        {
            teachImg : "./studentImg/peo.png",
            teachName : "张老师",
            teachYear : "5"
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "李老师",
            teachYear : "10"
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "杨老师",
            teachYear : "9"
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "孙老师",
            teachYear : "6"
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "刘老师",
            teachYear : "7"
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "严老师",
            teachYear : "8"
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "王老师",
            teachYear : "8"
        },
        {
            teachImg : "./studentImg/peo.png",
            teachName : "李老师",
            teachYear : "8"
        }
    ];
    let attache = "";
    for (const pp of attacheData) {
        attache += `<li class="attache-item">
                        <img class="attache-img" src="${pp.teachImg}" alt="">
                        <div class="attache-text">
                            <h5>${pp.teachName}</h5>
                            <h6>${pp.teachYear}年从业经验</h6>
                            <span class="attache-tel">联系TA</span>
                        </div>
                    </li>`;
        $(".attache-box").empty().append(attache);
    };
    $('.attache-item').hover(function(){
        $(this).find('.attache-img').addClass("attache-img1");
        $(this).find('.attache-text').css("height","160px");
    },function(){
        $(this).find('.attache-img').removeClass("attache-img1");
        $(this).find('.attache-text').css("height","60px");
    });
    // 助学专员，问题动画
    let callerData = [
        {
            callerSite: "宁夏 银川",
            callerIssue: "女生适合什么专业？",
            callerTime: "2分钟前",
        },
        {
            callerSite: "甘肃 庆阳",
            callerIssue: "男生适合什么专业？",
            callerTime: "3分钟前",
        },
        {
            callerSite: "陕西 西安",
            callerIssue: "女生适合什么专业？",
            callerTime: "2分钟前",
        },
        {
            callerSite: "甘肃 张掖",
            callerIssue: "申请助学金的流程是什么？",
            callerTime: "1分钟前",
        },
        {
            callerSite: "陕西 咸阳",
            callerIssue: "女生适合什么专业？",
            callerTime: "5分钟前",
        },
        {
            callerSite: "山西 太原",
            callerIssue: "为什么发放助学金？",
            callerTime: "5秒前",
        },
        {
            callerSite: "陕西 商洛",
            callerIssue: "申请助学金的流程是什么？",
            callerTime: "2秒前",
        },
        {
            callerSite: "宁夏 银川",
            callerIssue: "女生适合什么专业？",
            callerTime: "2分钟前",
        },
        {
            callerSite: "甘肃 庆阳",
            callerIssue: "男生适合什么专业？",
            callerTime: "1分钟前",
        },
        {
            callerSite: "陕西 西安",
            callerIssue: "热门专业有哪些？",
            callerTime: "10秒前",
        },
        {
            callerSite: "甘肃 张掖",
            callerIssue: "2018哪些专业比较热门？",
            callerTime: "8秒前",
        },
        {
            callerSite: "陕西 咸阳",
            callerIssue: "哪些专业就业前景好？",
            callerTime: "9秒前",
        }
    ];
    let caller = "";
    for (const pp of callerData) {
        caller += `<li>
                        <div class="visiter">${pp.callerSite} 访客说：</div>
                        <div class="visiter-issue">${pp.callerIssue}
                            <p>${pp.callerTime}</p>
                        </div>
                    </li>`;
        $(".contact-banner").empty().append(caller);
    };
    let top = 0;
    setInterval(function(){
        top -= 44;
        topS = -($(".contact-banner>li").length -4 + 1) *  44;
        if(topS >= top){
            top = 0;
            $(".contact-banner").animate({"top":top+'px'},1,function(){
                top -= 44;
                $(".contact-banner").animate({"top":top+'px'},500);
            });
        }else {
            $(".contact-banner").animate({"top":top+'px'},500);
        }   
    },3000)

    // 学院
    $('.college-box').hover(function(){
        $(this).find('.college-img').addClass('college-img1');
    },function(){
        $(this).find('.college-img').removeClass('college-img1');
    })
    // 学院列表
    let introData = [
        {
            introImg:"./studentImg/5d4011d803d09.jpg",
            introTitle:"陕西交通技师学院",
            introText:"学校简介: 陕西交通技师学院是陕西省教育厅直属的一所培养中高级实用型技能人才的国家级重点技工学院、中国交通教育研究会常务理事单位、技工分会副理事长单位；陕西省技工教育研究会交通、能源、建筑分会会长单位。学院创建于1965年，文革期间停办，1978年恢复办学，2015年划归省教育厅管理。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理     ",
        },
        {
            introImg:"./studentImg/5d400fd600000.jpg",
            introTitle:"陕西长城科技技师学院",
            introText:"学校简介:  陕西长城科技技术学校是国家重点扶持的一所全日制综合性院校。学院占地面积1000多亩，建筑面积60万平方米，学院设有图书馆、电子阅览室、多媒体实验室、综合大礼堂、形体室、游泳池及室内活动中心、小吃城、超市等完善的教学及生活配套设施，校园绿化面积约占70%，素有生态校园之美称。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理      ",
        },
        {
            introImg:"./studentImg/5d4011d803d09.jpg",
            introTitle:"西安技师学院",
            introText:"学校简介: 陕西交通技师学院是陕西省教育厅直属的一所培养中高级实用型技能人才的国家级重点技工学院、中国交通教育研究会常务理事单位、技工分会副理事长单位；陕西省技工教育研究会交通、能源、建筑分会会长单位。学院创建于1965年，文革期间停办，1978年恢复办学，2015年划归省教育厅管理。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理     ",
        },
        {
            introImg:"./studentImg/5d4011d803d09.jpg",
            introTitle:"陕西交通技师学院",
            introText:"学校简介: 陕西交通技师学院是陕西省教育厅直属的一所培养中高级实用型技能人才的国家级重点技工学院、中国交通教育研究会常务理事单位、技工分会副理事长单位；陕西省技工教育研究会交通、能源、建筑分会会长单位。学院创建于1965年，文革期间停办，1978年恢复办学，2015年划归省教育厅管理。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理     ",
        },
        {
            introImg:"./studentImg/5d400fd600000.jpg",
            introTitle:"洛阳科技职业学院",
            introText:"学校简介: 陕西交通技师学院是陕西省教育厅直属的一所培养中高级实用型技能人才的国家级重点技工学院、中国交通教育研究会常务理事单位、技工分会副理事长单位；陕西省技工教育研究会交通、能源、建筑分会会长单位。学院创建于1965年，文革期间停办，1978年恢复办学，2015年划归省教育厅管理。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理     ",
        },
        {
            introImg:"./studentImg/5d4011d803d09.jpg",
            introTitle:"四川西南航空职业学院",
            introText:"学校简介: 陕西交通技师学院是陕西省教育厅直属的一所培养中高级实用型技能人才的国家级重点技工学院、中国交通教育研究会常务理事单位、技工分会副理事长单位；陕西省技工教育研究会交通、能源、建筑分会会长单位。学院创建于1965年，文革期间停办，1978年恢复办学，2015年划归省教育厅管理。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理     ",
        },
        {
            introImg:"./studentImg/5d400fd600000.jpg",
            introTitle:"陕西新纪元烹饪学校",
            introText:"学校简介: 陕西交通技师学院是陕西省教育厅直属的一所培养中高级实用型技能人才的国家级重点技工学院、中国交通教育研究会常务理事单位、技工分会副理事长单位；陕西省技工教育研究会交通、能源、建筑分会会长单位。学院创建于1965年，文革期间停办，1978年恢复办学，2015年划归省教育厅管理。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理     ",
        },
        {
            introImg:"./studentImg/5d4011d803d09.jpg",
            introTitle:"测试",
            introText:"学校简介: 陕西交通技师学院是陕西省教育厅直属的一所培养中高级实用型技能人才的国家级重点技工学院、中国交通教育研究会常务理事单位、技工分会副理事长单位；陕西省技工教育研究会交通、能源、建筑分会会长单位。学院创建于1965年，文革期间停办，1978年恢复办学，2015年划归省教育厅管理。",
            introItem:"助学专业：1、城市轨道运营与管理    2、城市轨道运营与管理    3、城市轨道运营与    4、城市轨道运营与管理     5、城市轨道运营与管理    6、城市轨道运营与管理     ",
        }
    ]
    let introList = "";
    for(list of introData){
    introList +=`<li class="intro-box">
                    <img class="intro-img" src="${list.introImg}">
                    <a class="intro-title" href="javascript:;">${list.introTitle}</a>
                    <p class="intro-content">${list.introText}</p>
                    <p class="intro-content">${list.introItem}</p>
                    <div class="intro-btn-box">
                        <a href="javascript:;"><span  class="college-btn college-btn1 college-btn4">了解详情</span></a>
                        <a href="javascript:;"><span  class="college-btn college-btn1 college-btn4">助学申请</span></a>
                        <a href="javascript:;"><span  class="college-btn college-btn2 college-btn4">在线咨询</span></a>
                    </div>
                </li>`
    
    };
    $(".college-intro-box").empty().append(introList);
    $('.intro-box').hover(function(){
        $(this).addClass('intro-box1');
        $(this).find('.intro-img').addClass('intro-img1');
    },function(){
        $(this).removeClass('intro-box1');
        $(this).find('.intro-img').removeClass('intro-img1');
    });

    // 助学学员列表
    $('.study-hover').hover(function(){
        $(this).find('.study-font').addClass('study-font1');
        $(this).find('.study-hide').addClass('study-hide1');
    },function(){
        $(this).find('.study-font').removeClass('study-font1');
        $(this).find('.study-hide').removeClass('study-hide1');
    });

});