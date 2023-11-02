function getData() {
    fetch("http://127.0.0.1:5069/auth/tweets")
      .then((response) => response.json())
      .then((json) => {
        const posts = document.getElementById("posts");

        console.log(json);

        let array = json.documents;

        array.forEach((element) => {
            const username = element.username;
            const content = element.content;

            const tweetHTML = `
              <div>
                <h2>${username}</h2>
                <p>${content}</p>
                <button onclick="deleteFn(${element._id})">Delete</button>
              </div>
            `;
            

            // Create a new div element and set its innerHTML to tweetHTML
            const tweetElement = document.createElement("div");
            tweetElement.innerHTML = tweetHTML;

            // Append the tweetElement to the posts container
            posts.appendChild(tweetElement);
            tweetElement.style.backgroundColor="lightblue";
            tweetElement.style.alignItems="center";
            tweetElement.style.padding="5px";
            tweetElement.style.margin="10px";
            tweetElement.style.width="400px";
            tweetElement.style.justifyContent="space-around";
            tweetElement.style.borderRadius="10px";
        });
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


const deleteFn = async(id)=> {
  const result = await fetch("http://localhost:5069/auth/tweets" + id , {
    method : "DELETE"
  } );
  
} 
getData();

