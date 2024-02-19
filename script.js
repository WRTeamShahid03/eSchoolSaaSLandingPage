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




