async function fetchMessages() {
    const url = "https://lucifer-quotes.vercel.app/api/quotes"
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                location.reload();
            }
        });
            for (let i = 0; i< 30; i++ ) { 
            const response = await fetch(url);
            const data = await response.json();
            const element = document.querySelector(".quote");
            console.log(data)
            element.innerHTML +="<p>" + data[0].quote + "</p>";
        }
    }
    
    fetchMessages()
    
    
    