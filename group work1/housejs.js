    //house intro
    function toggleTextAndImage(button) {
        var groupElements = button.parentNode.querySelectorAll('.toggle-text, .toggle-image');

        groupElements.forEach(function(element) {
            element.style.display = (element.style.display === 'none') ? 'block' : 'none';
        });
    }

    function validateLogin() {
          var username = document.getElementById("username").value;
          var email = document.getElementById("email").value;
          var password = document.getElementById("password").value;


          if (username === "username" && email === "email" && password === "password" ) {
              alert("Login successful!");
          } 
          else {
            alert("Invalid username ,email or password. Please try again.");
          }
      }

    window.onscroll = function() {
        toggleScrollToTopBtn();
    };

    function toggleScrollToTopBtn() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //sorting result
    function jcalculateResult() {
        var totalScore = 0;

        for (var i = 1; i <= 8; i++) {
            var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
            if (selectedOption) {
                totalScore += parseInt(selectedOption.value);
            } else {
                alert('Please answer all questions.');
                return;
            }
        }


        jshowResult(totalScore);
    }
    
    function jshowResult(totalScore) {
        document.getElementById('questionnaire').style.display = 'none';

        if (totalScore >= 8 && totalScore <= 14) {
            jshowResultDetails('result1');
        } 

        else if (totalScore > 14 && totalScore <= 20) {
            jshowResultDetails('result2');
        } 

        else if (totalScore >= 20 && totalScore <= 26) {
            jshowResultDetails('result3');
        }

        else if (totalScore <= 32) {
            jshowResultDetails('result4');
        }

        else {
            alert('Unable to determine result.');
            return;
        }
    }

    function jshowResultDetails(resultId) {
        // Display the result details
        var resultElement = document.getElementById(resultId);
        if (resultElement) {
            resultElement.style.display = 'block';
        }
    }

    //sign up
    function validateSignup() {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var usernameRegex = /[A-Z]/;
        var emailRegex = /@/;
        var passwordRegex = /^(?!123)[A-Za-z0-9]{8,}$/;

        var isValid = true;

        if (!usernameRegex.test(username)) {
            alert('Username must contain at least one uppercase letter.');
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            alert('Email must contain "@" symbol.');
            isValid = false;
        }

        if (!passwordRegex.test(password)) {
            alert('Password must not start with "123", must contain at least one uppercase letter, and be at least 8 characters long.');
            isValid = false;
        }

        if (isValid) {
            alert('Signup successful!');
            // Perform further actions, e.g., submit form
        }
    }




    //sl
    var currentIndex = 1;

  function showMap(divisionIndex) {
    // Show the larger map content for the corresponding division
    var map = document.getElementById(`cmap${divisionIndex}`);
    map.style.display = 'flex';
    currentIndex = divisionIndex;
  }

  function hideMap(divisionIndex) {
    // Hide the larger map content for the corresponding division
    const map = document.getElementById(`cmap${divisionIndex}`);
    map.style.display = 'none';
  }



  /* global document, setTimeout */
/* eslint-disable no-undef */
"use strict";
var d = document.getElementById('cletter');

setTimeout(function () {
    d.classList.add('loaded');
}, 500);

document.body.addEventListener('click', function () {
    d.classList.toggle('loaded');
});
 
var animateButton = function (e) {
    e.preventDefault();
    
    var target = e.target;
    target.classList.remove('animate');
    target.classList.add('animate');
    setTimeout(function () {
        target.classList.remove('animate');
        var anchor = target.querySelector('a');
        if (anchor) {
            location.href = anchor.href;
        }
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");
var i;
for (i = 0; i < bubblyButtons.length; i += 1) { bubblyButtons[i].addEventListener('click', animateButton, false);
}



function greeting(){
    var week = new Date().getDay();
    switch( week ){
        case 1 :
            document.getElementById('cgreeting').innerHTML='Happy Monday!';
            break;
        case 2 :
            document.getElementById('cgreeting').innerHTML='Happy Tuesday!';
            break;
        case 3:
            document.getElementById('cgreeting').innerHTML='Happy Wednesday';
            break;
        case 4:
            document.getElementById('cgreeting').innerHTML='Happy Thursday';
            break;
        case 5:
            document.getElementById('cgreeting').innerHTML='Happy Friday';
            break;
        case 6:
            document.getElementById('cgreeting').innerHTML='Happy Saturday';
            break;
        case 0:
            document.getElementById('cgreeting').innerHTML='Happy Sunday';
            break;
        default:
        
    }
    
}




const questions = [
                "Professor McGonagall's first name was Matilda.",
                "The subject that McGonagall taught at Hogwarts was Arithmancy.",
                "Of the four Hogwarts houses, McGonagall was the Head of Gryffindor.",
                "When working at the Ministry of Magic, McGonagall worked for the Department of Magical Law Enforcement.",
                "Both of McGonagall's parents were from wizarding families.",
                "The name of McGonagall's husband was Elphinstone Urquart.",
                "Minerva McGonagall's Animagus form was a black and white cat with oval spectacle markings around the eyes.",
                "Malcolm and Robert Junior were the names of McGonagall's younger brothers.",
                "In Harry's first Transfiguration lesson, McGonagall turned her desk into a pig and back again.",
                "In Harry's first year, McGonagall sent him a Nimbus Two Thousand and One."
            ];

            const answers = [false, false, true, true, true, false, true, false, true, false];

            
            let currentQuestion = 0;
            let correctAnswers = 0;

            
            function checkA(selectedAnswer) {
                const userAnswer = selectedAnswer === 'true';
                checkAnswer(userAnswer);
                showNextQuestion();
            }

            // 验证
            function checkAnswer(userAnswer) {
                if (userAnswer === answers[currentQuestion]) {
                    correctAnswers++;
                }
            }   

            // 下一题
            function showNextQuestion() {
                const currentQuestionElement = document.getElementById(`question${currentQuestion + 1}`);
                currentQuestionElement.style.display = 'none';

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion(currentQuestion);
                } else {
                    showResult();
                }
            }

            // 问题
            function showQuestion(questionIndex) {
                const questionElement = document.getElementById(`question${questionIndex + 1}`);
                questionElement.style.display = 'block';
            }

            // 结果
            function showResult() {
                const resultElement = document.getElementById('result');
                const accuracy = (correctAnswers / questions.length) * 100;
                resultElement.innerHTML = `Quiz completed! Your accuracy: ${accuracy.toFixed(2)}%  Congratulation!!!`;
                resultElement.style.display = 'block';
            }

            document.addEventListener('DOMContentLoaded', () => {
                showQuestion(0);
            });



