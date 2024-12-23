
    function submitForm() {
        alert('Table booked successfully! We look forward to welcoming you.');
        document.getElementById('bookingForm').reset();
    }

  
    function clearForm() {
            document.getElementById('name').value = '';
            document.getElementById('feedbackText').value = '';
        }

        function submitFeedback() {
            const name = document.getElementById('name').value;
            const feedbackText = document.getElementById('feedbackText').value;
            const feedbackMessage = document.getElementById('feedbackMessage');

            if (name && feedbackText) {
                feedbackMessage.textContent = `Thank you, ${name}! We appreciate your feedback: ${feedbackText}`;
                clearForm();
            } else {
                feedbackMessage.textContent = 'Please fill in all fields before submitting.';
            }
    }
    
    function submtForm() {
        alert('Your Message Send successfully!');
        document.getElementById('bookingForm').reset();
    }


    document.querySelectorAll('.toggle-answer').forEach(function (question) {
        question.addEventListener('click', function () {
            var faqItem = this.closest('.faq-item');
            faqItem.classList.toggle('active');
            toggleAnswer(faqItem);
        });
    });

    function toggleAnswer(faqItem) {
        var answer = faqItem.querySelector('.answer');
        var isActive = answer.classList.contains('active');

        if (isActive) {
            answer.style.maxHeight = '0';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

        answer.classList.toggle('active');
    }

   
        const menuContent = {
            drinks: document.getElementById("drinks").innerHTML,
            starters: document.getElementById("starters").innerHTML,
            main_dishes: document.getElementById("main_dishes").innerHTML,
            dessert: document.getElementById("dessert").innerHTML,
        };
        function openmenu(menuname) {
            let html = menuContent[menuname];
            document.getElementById("menu").innerHTML = html;
        }

        document.getElementById("active").click();
 


