// // for admin features 
// document.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tab');
//     const contents = document.querySelectorAll('.content');

//     function switchTab(event, tabNumber) {
//         // Remove active class from all tabs
//         tabs.forEach((tab) => {
//             tab.classList.remove('active');
//         });

//         // Add active class to the selected tab
//         event.target.classList.add('active');

//         // Hide all content divs
//         contents.forEach((content) => {
//             content.classList.remove('active');
//         });

//         // Show the content div corresponding to the selected tab
//         contents[tabNumber - 1].classList.add('active');
//     }

//     // Add click event listeners to all tabs
//     tabs.forEach((tab, index) => {
//         tab.addEventListener('click', (event) => {
//             switchTab(event, index + 1);
//         });
//     });

//     // Set the initial active tab
//     tabs[0].click();
// });

// for admin features 
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.adminFeatures .tab');
    const contents = document.querySelectorAll('.adminFeatures .content');

    function switchTab(event, tabNumber) {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        event.target.classList.add('active');

        contents.forEach((content) => {
            content.classList.remove('active');
        });

        contents[tabNumber - 1].classList.add('active');
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            switchTab(event, index + 1);
        });
    });

    tabs[0].click();
});

// for admissManagement 
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.admissManagement .tab');
    const contents = document.querySelectorAll('.admissManagement .content');

    function switchTab(event, tabNumber) {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        event.target.classList.add('active');

        contents.forEach((content) => {
            content.classList.remove('active');
        });

        contents[tabNumber - 1].classList.add('active');
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            switchTab(event, index + 1);
        });
    });

    tabs[0].click();
});

// for administration 
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.administration .tab');
    const contents = document.querySelectorAll('.administration .content');

    function switchTab(event, tabNumber) {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        event.target.classList.add('active');

        contents.forEach((content) => {
            content.classList.remove('active');
        });

        contents[tabNumber - 1].classList.add('active');
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            switchTab(event, index + 1);
        });
    });

    tabs[0].click();
});

// for studyManagement
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.studyManagement .tab');
    const contents = document.querySelectorAll('.studyManagement .content');

    function switchTab(event, tabNumber) {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        event.target.classList.add('active');

        contents.forEach((content) => {
            content.classList.remove('active');
        });

        contents[tabNumber - 1].classList.add('active');
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            switchTab(event, index + 1);
        });
    });

    tabs[0].click();
});


// for swiperSection
$(document).ready(function () {
    // Initialize each carousel separately
    $(".swiperSect .slider-content.owl-carousel").each(function () {
        var owl = $(this).owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplaySpeed: 2000,
            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        });

        // Custom navigation buttons for this specific carousel
        $(this)
            .closest(".commonSlider")
            .find(".prev")
            .click(function () {
                owl.trigger("prev.owl.carousel");
            });

        $(this)
            .closest(".commonSlider")
            .find(".next")
            .click(function () {
                owl.trigger("next.owl.carousel");
            });
    });
});

// for pricingSection
$(document).ready(function () {
    // Initialize each carousel separately
    $(".pricing .slider-content.owl-carousel").each(function () {
        var owl = $(this).owlCarousel({
            loop: false,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplaySpeed: 2000,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });

        // Custom navigation buttons for this specific carousel
        $(this)
            .closest(".commonSlider")
            .find(".prev")
            .click(function () {
                owl.trigger("prev.owl.carousel");
            });

        $(this)
            .closest(".commonSlider")
            .find(".next")
            .click(function () {
                owl.trigger("next.owl.carousel");
            });
    });
});




// for counter

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.numb');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                entry.target.innerText = 0;
                const updateCounter = () => {
                    const value = +entry.target.innerText;
                    const increment = target / 150; // Adjust the speed of the counter by changing the denominator

                    if (value < target) {
                        entry.target.innerText = Math.ceil(value + increment);
                        setTimeout(updateCounter, 10); // Adjust the interval for smoother animation
                    } else {
                        entry.target.innerText = target;
                    }
                };

                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});



