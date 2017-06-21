//Picks a random image to display 
//NOTE: For best results use an image with transparent background.

function getRandomImage() 
{
	//Image array: Add more images here with a comma.
	var images = ['media/mascot/1.png', 'media/mascot/2.png', 'media/mascot/3.png'];
	var image = images[Math.floor(Math.random()*images.length)];
	 
	return image;

}
 
function displayRandomImage() 
{

	var htmlImage = document.getElementById("mascotImage");
	htmlImage.src = getRandomImage();

}

displayRandomImage();
