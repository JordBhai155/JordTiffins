let price_value = document.getElementById('price_value');
let filter = document.getElementById('filterPrice');

filter.addEventListener('input', function () {
    price_value.innerHTML = filter.value;
});

// Select all elements with the specified class
var filterIcons = document.querySelectorAll('.dropdown');
var filterContents = document.querySelectorAll('.filter_content');
var filterFilters = document.querySelectorAll('.filter_filter');

// Add event listeners to each element with the specified class
filterIcons.forEach(function (chevronIcon, index) {
    // Add an event listener for each chevronIcon
    chevronIcon.addEventListener('click', function () {
        filterContents[index].style.display = (filterContents[index].style.display === 'none' || filterContents[index].style.display === '') ? 'flex' : 'none';

        // Toggle the class
        filterFilters[index].classList.toggle('h30');
        if (filterContents[index].style.display === "flex") {
            filterIcons[index].classList.add("fa-chevron-up");
            filterIcons[index].classList.remove("fa-chevron-down");
        } else{

            filterIcons[index].classList.add("fa-chevron-down")
            filterIcons[index].classList.remove("fa-chevron-up")
        }
    });
});
