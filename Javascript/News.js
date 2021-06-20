// dbaabfb249eb44eeac24f0f9a178b462 - api key

let sources = "techcrunch";
let apikey = "dbaabfb249eb44eeac24f0f9a178b462";

let xhr = new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apikey}`,true);
xhr.getResponseHeader('content-type','application/json');

xhr.onload = function() {
    if(this.status == 200) {

        let json = JSON.parse(this.responseText);
        newsArticles = json.articles;

        let uiStringForBtn = "";
        let uiStringForSlide = "";
        // newsArticles.foreach(function(){});
        newsArticles.forEach((articles,index) => {

            if(index == 0) {

                uiStringForBtn += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
            }
            else {
                uiStringForBtn += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}"  aria-label="Slide ${index + 1}"></button>`;
            }
            
            if(index == 0) {
                uiStringForSlide +=`<div class="carousel-item active">
                                        <img src="${articles.urlToImage}" class="d-block w-100"  alt="...">
                                        <div class="carousel-caption d-none d-md-block">
                                            <a href="${articles.url}" target="_blank" style="color:white;"><h3>${articles.title}</h3></a>
                                        </div>
                                    </div>`;
            }
            else {
                uiStringForSlide +=`<div class="carousel-item">
                                        <img src="${articles.urlToImage}" class="d-block w-100"  alt="...">
                                        <div class="carousel-caption d-none d-md-block">
                                        <a href="${articles.url}" target="_blank" style="color:white;"><h3>${articles.title}</h3></a>
                                        </div>
                                    </div>`;
            }
           

        });
        document.getElementById('btnForSlide').innerHTML = uiStringForBtn;
        document.getElementById('newsSlide').innerHTML = uiStringForSlide;
    } else {
        console.error(this.responseText);
    }
}
xhr.send();
