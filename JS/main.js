// Master-classes
(function () {
    const masterclasses = [
        {
            id: 1,
            name: "Вишивка на рушниках",
            img: 'img/1.jpg',
            data: "Лютий 20, 2023",
            time:"10:30 - 13:30",
            link:"Зареєструватись"
        },
        {
            id: 2,
            name: "Вишивка гладдю",
            img: 'img/2.png',
            data: "Березень 16, 2023",
            time:"11:00 - 14:00",
            link:"Зареєструватись"
        },
        {
            id: 3,
            name: "Вишивка на одязі",
            img: 'img/3.jpg',
            data: "Червень 12, 2023",
            time:"16:30 - 18:00",
            link:"Зареєструватись"
        },
        {
            id: 4,
            name: "Вишивка серветок",
            img: 'img/4.jpg',
            data: "Липень 21, 2023",
            time:"10:30 - 13:30",
            link:"Зареєструватись"
        }
    ]

    function renderMasterclasses(masterclasses) {
        const masterclassesContainer = document.querySelector('.masterclasses_blocks');
        for (const masterclass of masterclasses) {
            masterclassesContainer.innerHTML += 
                `<article class="masterclass">
                    <div class="img_masterclass_block" style="background-image: url(${masterclass.img})"></div>
                    <div class="text_inside_masterclasses">
                        <p class="header-text-color masterclasses_data">${masterclass.data}</p>
                        <p class="header-text-color masterclasses_time">${masterclass.time}</p>
                        <div class="space_before_masterclasses_header">
                            <h3 id="h3-size" class="header_font-family header-text-color masterclasses_description">${masterclass.name}</h3>
                        </div>
                        <div class="space_before_masterclasses_a">
                            <a class="a_masterclasses_blocks" href="#">${masterclass.link}</a>
                        </div>
                    </div>
                </article>`;
        }   
    }
    renderMasterclasses(masterclasses);
})();


// Vyshyvanky
(function () {
    const vyshyvanky = [
        {
            id: 1,
            name: "Тернопільска область",
            img: 'img/ternopilska.jpg',
            separator: "img/separator.png",
            location:"Терно́пільска область знаходиться у західній частині України.",
            description: 'Виразний рельєфний візерунок – такими були вишиванки у Тернопільській області. Орнаменти вишивали бавовняними нитками згущеними стібками. Кольоровими бавовняними нитками обводили певні візерунки уздовж усього рукава сорочки. Особливо відомими є вишиванки з міста Борщів. Вони вирізняються густо вишитими рукавами, які зазвичай вишиті чорним кольором. Тут його пов’язують з чорними сторінками історії краю – на нього часто нападали турки та татари.'
        },
        {
            id: 2,
            name: "Луганська область",
            img: 'img/luhanska.jpg',
            separator: "img/separator.png",
            location:" Луганська область знаходиться на сході України.",
            description: 'Сорочку, переважно полтавського типу, оздоблювали по нижньому краю плетеною “мережкою”. Своєрідність вишивки закладена у багатоколірних орнаментах, виконаних дрібним хрестиком та півхрестиком, іноді грубою ниткою. Домінують геометричні та рослинно-геометричні візерунки.'
        },
        {
            id: 3,
            name: "Донецька область",
            img: 'img/donetska.jpg',
            separator: "img/separator.png",
            location:"Донецька область знаходиться на сході України.",
            description: 'Тут полюбляли поєднання червоно-чорного кольору на світлому(білому) тлі. Оздоблювали вишиванки мережкою та вирізуванням. Якщо були рослинні мотиви – то це пишні квіти, цілі букети і дерева. Зображали й птахів. (На весільних рушниках, наприклад, птахи сприймаються як елемент чарівності, казковості). На Донеччині вишивали різними техніками, окрім хіба що яворівки і низинки. Кольори ниток, якими вишивали жіночі й чоловічі сорочки – традиційно червоний, чорний і білий. Оздоблювали рукави, рідше коміри та поділ.'
        },
        {
            id: 4,
            name: "Чернівецька область",
            img: 'img/chernivetska.jpg',
            separator: "img/separator.png",
            location:"Чернівецька область розташована у південно-західній частині України.",
            description: 'Вишиванка має пишно вишиті рукави з характерними косими смугами. Також використовували техніку гладі, дрібного хрестика та крученого шва. Орнаменти наносили переважно чорними та бордовими нитками, які добре виділялись на тлі барвистого вбрання. Дехто вишивав шовковими нитками. Для оздоблення брали бісер, срібні і золоті нитки, шовк, вовну та блискітки. Також тут вишивали особливо заквітчані сорочки.'
        },
        {
            id: 5,
            name: "Вінницька область",
            img: 'img/vinnytska.jpg',
            separator: "img/separator.png",
            location:"Область розташована в центральній частині Правобережної України.",
            description: 'На Вінничині не обмежувались у кольоровій гамі. Та на кожній сорочці можна зустріти колір, який веде – переважаючий у візерунках. Тут майстерно поєднували ледь не всі техніки виконання та стилі відображення елементів: низь, хрестик, вишивка розписом, настилання, вирізування; різноманітні види мережок. Контурними швами обрамляли та з’єднували окремі орнаменти композиції.'
        },
        {
            id: 6,
            name: "Львівська область",
            img: 'img/lvivska.jpg',
            separator: "img/separator.png",
            location:"Львівська область розташована в західній частині України",
            description: 'Львівська вишита сорочка славиться різноманітністю візерунків у різних районах. Цікаво, що, наприклад, на півночі та на півдні Львівщини традиційна вишивка була зовсім не схожою, незважаючи на невелику відстань. Через таку строкатість вишиванок, спільні риси визначити досить складно. Найвідомішими є вишиванки Сокальського, Яворівського та Городоцього району.'
        },
        {
            id: 7,
            name: "Полтавська область",
            img: 'img/poltavska.jpg',
            separator: "img/separator.png",
            location:"Полтавська області розташована в центральній і північно-східній частинах України",
            description: 'Для Полтавської вишивки характерна ніжна кольорова гама, пастельні тони. Найчастіше це вишиття білим по білому геометричних орнаментів (у народі асоціювалось із морозними візерунками), а також поєднання їх з рослинними. Щоб підсилити ефект – додавали нитки попелястих кольорів. Кажуть, саме полтавська вишивка є найскладнішою зі всіх українських. «Рідною» для полтавчанок здавна була техніка лічильна гладь (лиштва). Наприклад, жіночу полтавську вишиванку можна впізнати за дуже багатим, складним, та водночас ніжним за кольорами, «тонким» оздобленням рукавів.'
        }
    ]

    function renderVyshyvanky(vyshyvanky) {
        const vyshyvankyContainer = document.querySelector('.vyshyvanky_blocks');
        for (const vyshyvanka of vyshyvanky) {
            vyshyvankyContainer.innerHTML += 
                `<div class="vyshyvanky_section" id="${vyshyvanka.id}">
                <div class="vyshyvanky_container">
                    <div class="vyshyvanky_img">
                        <img src="${vyshyvanka.img}" alt="vyshyvanka">
                    </div>
                    <div class="vyshyvanky_content-section">
                        <div class="vyshyvanky_title">
                            <h2>${vyshyvanka.name}<span class="point">.</span></h2>
                        </div>
                        <div class="vyshyvanky_content">
                            <img src="${vyshyvanka.separator}" alt="separator" class="second-separator">
                            <p class="first-paragraph">${vyshyvanka.location}</p>
                            <p class="second-paragraph">${vyshyvanka.description}</p>
                        </div>
                    </div>
                </div>`;
        }   
    }
    renderVyshyvanky(vyshyvanky);
})();

// Carousel. Our Work
(function () {
    const slides = [
      '<img src="img/slide-1.png" alt="slide-1">',
      '<img src="img/slide-2.png" alt="slide-2">',
      '<img src="img/slide-3.png" alt="slide-3">',
      '<img src="img/slide-4.png" alt="slide-4">',
      '<img src="img/slide-5.png" alt="slide-5">',
    ];
  
    let currentSlide = 0;
  
    function showCurrentSlide() {
      const slideBasket = document.querySelector(".carousel-team-work .slide-basket");
      let html = '';
      html = slides[currentSlide];
      const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
      html += slides[nextSlide];
      const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
      html += slides[next2Slide];
      slideBasket.innerHTML = html;
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) currentSlide = 0;
      showCurrentSlide();
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      showCurrentSlide();
    }
  
    showCurrentSlide();

    const btnPrev = document.querySelector(".carousel-team-work .slide-prev");
    btnPrev.addEventListener("click", prevSlide);
  
    const btnNext = document.querySelector(".carousel-team-work .slide-next");
    btnNext.addEventListener("click", nextSlide);
})();
