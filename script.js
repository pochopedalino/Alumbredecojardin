document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll(".carousel-image");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };
});
