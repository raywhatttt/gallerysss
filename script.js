const images = [
    { src: '1.png', keywords: 'แมว สีดำ' },
    { src: '2.png', keywords: 'แมว ส้ม' },
    { src: '3.png', keywords: 'สุนัข หมา ขนสีขาว' },
    { src: '4.png', keywords: 'สุนัข ลูกหมา ขนสีน้ำตาล' },
    { src: '5.png', keywords: 'กระต่าย ขนสีเทา' },
    { src: '6.png', keywords: 'กระต่าย ขนปุย ขนสีขาว' },
    { src: '7.png', keywords: 'กระรอก สัตว์เล็ก' },
    { src: '8.png', keywords: 'ปลา ใต้น้ำ ปลานีโม่' },
    { src: '9.png', keywords: 'แมงกะพรุน สัตว์น้ำ' },
    { src: '10.png', keywords: 'หมู ขนสีชมพู' },
    { src: '11.png', keywords: 'กวาง สัตว์ป่า' },
    { src: '12.png', keywords: 'นก สัตว์ปีก' },
];

const gallery = document.getElementById('gallery');

function displayImages(imagesToDisplay) {
    gallery.innerHTML = ''; 
    imagesToDisplay.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        gallery.appendChild(imgElement);
    });
}

displayImages(images);

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredImages = images.filter(image => image.keywords.toLowerCase().includes(query));
    displayImages(filteredImages);
});
