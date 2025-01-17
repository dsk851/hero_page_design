let icon = document.getElementById('icon');

// icon.addEventListener('click', function() {
//     document.body.classList.toggle("dark-theme");
// });

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}