//-----------------------------navbar----------------------//
function opennav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle('overflow_hidden');
    document.getElementById("menubtn-icon").classList.toggle("cross");
}
//----------------------back-to-top-------------------------//
document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//------------------------------preloader-------------------------------
setTimeout(() => {
    console.log("Delayed for 5 second.");
    document.getElementById("preloder").classList.add("opacity-0");
    document.getElementById("preloder").classList.add("pointer_event_none");
    document.body.classList.remove("overflow-hidden")
}, 5000);

