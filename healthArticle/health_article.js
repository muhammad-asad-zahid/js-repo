
let xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open("GET", url, true)

xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    console.log(xhr.response);
    let articlesDiv = document.getElementById('articles');


    articles.forEach(article => {
        let articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';


        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);


    });


}


xhr.send();



// // Step 1: Initialize the request
// console.log("Step 1: Initializing XMLHttpRequest...");
// let xhr = new XMLHttpRequest();

// var url = './health_article.json';

// // Step 2: Configure the request
// console.log("Step 2: Opening GET request to path:", url);
// xhr.open("GET", url, true);
// xhr.responseType = 'json';

// // Step 3: Define success/onload handler
// xhr.onload = function () {
//     console.log("Step 3: Response received. HTTP Status Code:", xhr.status);

//     // Check if the HTTP request was successful (200 OK)
//     if (xhr.status === 200) {
//         // Ensure response and response.articles exist
//         if (xhr.response && xhr.response.articles) {
//             var articles = xhr.response.articles;
//             console.log("Step 4: JSON parsed successfully! Found", articles.length, "articles.");

//             let articlesDiv = document.getElementById('articles');
            
//             if (!articlesDiv) {
//                 console.error("Error: Could not find container element with id='articles' in your HTML!");
//                 return;
//             }

//             // Loop through each article (using 'article' instead of 'element' to fix variable mismatch)
//             articles.forEach((article, index) => {
//                 console.log(`Step 5 [Article ${index + 1}]: Processing "${article.title}"`);

//                 let articleDiv = document.createElement('div');
//                 articleDiv.classList.add('article');

//                 var title = document.createElement('h2');
//                 title.textContent = article.title;

//                 var description = document.createElement('p');
//                 description.textContent = article.description;

//                 var waysHeader = document.createElement('h3');
//                 waysHeader.textContent = 'Ways to Achieve:';

//                 var waysList = document.createElement('ul');
//                 if (Array.isArray(article.ways_to_achieve)) {
//                     article.ways_to_achieve.forEach(function (way) {
//                         var listItem = document.createElement('li');
//                         listItem.textContent = way;
//                         waysList.appendChild(listItem);
//                     });
//                 }

//                 var benefitsHeader = document.createElement('h3');
//                 benefitsHeader.textContent = 'Benefits:';

//                 var benefitsList = document.createElement('ul');
//                 if (Array.isArray(article.benefits)) {
//                     article.benefits.forEach(function (benefit) {
//                         var listItem = document.createElement('li');
//                         listItem.textContent = benefit;
//                         benefitsList.appendChild(listItem);
//                     });
//                 }

//                 // Append elements to article wrapper
//                 articleDiv.appendChild(title);
//                 articleDiv.appendChild(description);
//                 articleDiv.appendChild(waysHeader);
//                 articleDiv.appendChild(waysList);
//                 articleDiv.appendChild(benefitsHeader);
//                 articleDiv.appendChild(benefitsList);

//                 // Append to main container
//                 articlesDiv.appendChild(articleDiv);
//             });

//             console.log("Step 6: All articles rendered to the DOM successfully!");

//         } else {
//             console.error("Error: Connected successfully (200 OK), but the JSON response format is missing the 'articles' array.", xhr.response);
//         }
//     } else {
//         console.error(`HTTP Error (${xhr.status}): The server returned an error status. Check if '${url}' exists at the specified path.`);
//     }
// };

// // Step 4: Define network error handler
// xhr.onerror = function () {
//     console.error("Network Error: Failed to reach the server. Check your connection or relative file path.");
// };

// // Step 5: Send the request
// console.log("Step 7: Sending the XHR request...");
// xhr.send();