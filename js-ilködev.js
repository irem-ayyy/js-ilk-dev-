window.onload = function() {
    showGreeting();
};

function showGreeting() {
    // Kullanıcıdan isim alınıyor
    var isim = prompt("Merhaba! İsminiz nedir?");
    
    // Anlık tarih ve saat bilgisi alınıyor
    var simdikiZaman = new Date();
    var gun = simdikiZaman.toLocaleDateString('tr-TR', { weekday: 'long' });
    var saat = simdikiZaman.toLocaleTimeString('tr-TR');
    
    // Karşılama metni oluşturuluyor
    var karşılamaMetni = "Merhaba, " + isim + "!\nBugün günlerden " + gun + ", saat " + saat + ".";
    
    // Karşılama metni HTML içine yerleştiriliyor
    document.getElementById("karşılama").innerText = karşılamaMetni;
}
