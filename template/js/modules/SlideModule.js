export default function SlideModule() {
    function slideOne() {

        if (document.querySelector('.slide-one')) {
            const swiper = document.querySelector('.slide-one');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-one').length && slideOne();

    function slideRow() {
        if (document.querySelector('.slide-row')) {
            const swiper = document.querySelector('.slide-row');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: false,
                    spaceBetween: 15,
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row',


                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },



                    breakpoints: {
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                            slidesPerColumn: 2,
                            allowTouchMove: false,
                        },
                        768: {
                            slidesPerView: 4,
                            slidesPerColumn: 2,
                        },
                        450: {
                            slidesPerView: 3,
                            slidesPerColumn: 2,
                        },

                    },

                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-row').length && slideRow();

    if ($('.swiper-chung').length) {
        let Slide = document.querySelectorAll('.swiper-chung');
        Slide.forEach((s, i, a) => {
            let sCon = s.querySelector('.swiper-container');
            let sPag = s.querySelector('.swiper-pagination');
            let sNext = s.querySelector('.swiper-button-next');
            let sPrev = s.querySelector('.swiper-button-prev');
            let cter = s.querySelector('.autocenter');
            // fade
            let fade = s.querySelector('.sFade');
            let sEffect = 'slide';
            if (fade) {
                sEffect = 'fade';
            }
            // direction
            let direction = s.querySelector('.sVer');
            let sDir = 'horizontal';
            if (direction) {
                sDir = 'vertical';
            }

            // loop
            let sCheckLoop = s.querySelector('.noloop');
            let sLoop = true;
            if (sCheckLoop) {
                sLoop = false;
            }

            // check Item to enable slide
            let sItem = s.querySelectorAll('.swiper-slide');
            let checkItem = 0;
            sItem.forEach((i) => {
                checkItem += i.offsetWidth;
            });

            if (checkItem > sCon.offsetWidth) {
                //enable swiper
                // sNext.style.display = 'block';
                // sPrev.style.display = 'block';

                let swiper = new Swiper(sCon, {
                    direction: sDir,
                    loop: sLoop,
                    slidesPerView: 'auto',
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    effect: sEffect,
                    speed: 1200,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    // Navigation dot
                    pagination: {
                        el: sPag,
                        // type: 'progressbar',
                    },
                    // Navigation arrows
                    navigation: {
                        nextEl: sNext,
                        prevEl: sPrev,
                    },
                    // observeParents: true,
                    // observeSlideChildren: true,
                    // observer: true,
                });
                // move slide to center
                if (cter) {
                    swiper.slideTo(1);
                }
                if (direction) {
                    swiper.allowTouchMove = false;
                }
            } else if (sItem.length >= 1) {
                sItem[0].classList.add('swiper-slide-active');
            }
        });



    }

    function slideCenter() {
        if (document.querySelector('.slide-center')) {
            const swiper = document.querySelector('.slide-center');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // spaceBetween: 90,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },



                    breakpoints: {
                        320: {
                            spaceBetween: 40,
                        },
                        992: {
                            spaceBetween: 60,
                        },
                        1440: {
                            spaceBetween: 90,

                        },
                    }

                });

                swiper.slideTo(1);

                swiper.on('slideChangeTransitionStart', function () {
                    if (swiper.el.querySelector('.swiper-slide-active video')) {
                        swiper.el.querySelectorAll('.swiper-slide video').forEach((x) => x.pause());
                    }
                });

                const muteVideoWhenOverScroll = () => {
                    const pinStopVideo = document.querySelector('.home-hacom-video .home-slide').offsetHeight;
                    if (window.scrollY >= pinStopVideo) {
                        document
                            .querySelectorAll('.home-slide .swiper-slide-active video')
                            .forEach((v) => v.pause());
                    }
                    // else {
                    //     document
                    //         .querySelectorAll('.achi-wrapper .swiper-slide-active video')
                    //         .forEach((v) => v.play());
                    // }

                    // if (window.scrollY = pinStopVideo) {
                    //     document
                    //         .querySelectorAll('.achievements .achi-wrap .swiper-slide-active video')
                    //         .forEach((v) => v.play());
                    // }
                    // console.log(window.scrollY );
                    // console.log(pinStopVideo );
                };
                window.addEventListener('scroll', muteVideoWhenOverScroll);
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-center').length && slideCenter();


    document.querySelectorAll('.swiper-custom').forEach(el => {
        const slider = el.querySelector('.swiper-container');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');
        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                autoplay: {
                    delay: 4000,
                },

                pagination: {
                    el: pagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                loop: true,
            });
        } catch (err) {
            console.log(err);
        }
    })

    function slideRows() {
        if (document.querySelector('.slide-row-2')) {
            const swiper = document.querySelector('.slide-row-2');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: false,
                    spaceBetween: 0,
                    // slidesPerView: 5,
                    // slidesPerColumn: 2,
                    // slidesPerColumnFill: 'row',
                    // allowTouchMove : false,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    breakpoints: {
                        1200: {
                            slidesPerView: 5,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: 'row',
                            allowTouchMove : false,
                        },
                        800: {
                            slidesPerView: 4,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: 'row',
                            allowTouchMove : true,
                        },
                        450: {
                            slidesPerView: 3,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: 'row',
                        },
                        320: {
                            slidesPerView: 2,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: 'row',
                        },

                    },

                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-row-2').length && slideRows();

    if (document.querySelector('#slideasd')) {
        const swiper = document.querySelector('#slideasd');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    function slideCer() {

        if (document.querySelector('.swiper-certifi')) {
            const swiper = document.querySelector('.swiper-certifi');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.swiper-certifi').length && slideCer();

    
}