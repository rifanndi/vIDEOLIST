$(document).ready(function () {
  $.ajax({
    url: "https://api.jikan.moe/v4/anime?q=Naruto&limit=10",
    type: "GET",
    success: function (result) {
      let htmlContent = `<h2 class="nimotsu-title">Nimotsu Food</h2><div class="row">`;
      result.data.forEach((anime) => {
        htmlContent += `
            <div class="col-md-4 anime-card">
              <div class="card h-100">
                <img src="${
                  anime.images.jpg.image_url
                }" class="card-img-top" alt="${anime.title}">
                <div class="card-body">
                  <h5 class="card-title">${anime.title}</h5>
                  <p class="card-text">Durasi: ${
                    anime.duration ? anime.duration : "Tidak diketahui"
                  }</p>
                  <p class="card-text">Score: ${anime.score}</p>
                  <a href="https://myanimelist.net/anime/${
                    anime.mal_id
                  }" class="btn btn-primary" target="_blank">Detail</a>
                </div>
              </div>
            </div>
          `;
      });
      htmlContent += "</div>";
      $("#data-container").html(htmlContent);
    },
    error: function (error) {
      console.log("Error:", error);
      $("#data-container").html("<p>Terjadi kesalahan saat memuat data.</p>");
    },
  });
});
