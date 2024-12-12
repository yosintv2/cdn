window.onload = function() {
    const adsterraLink = 'https://hailofficemeasure.com/pknh01myw?key=230e9c2f0c55dc422d8a9f2b5c638d27'; // Replace with your Adsterra link
    
    // Create an invisible iframe
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none'; // Make the iframe invisible
    iframe.src = adsterraLink; // Set the Adsterra direct link URL
    document.body.appendChild(iframe); // Append the iframe to the body
};
