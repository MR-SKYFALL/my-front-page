<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dawid Matras</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    
</head>

<body>

    <div class="back-all-card back-all-card-js">

    </div>

    <nav class="navbar navbar-contact-RWD navbar-js">
        <input type="checkbox" class="hamburger__checkbox" id="toggle-nav">
        <label for="toggle-nav">
            <div class="hamburger hamburger-contact-RWD hamburger-js">
                <div class="hamburger__line hamburger__line--1 hamburger__line--1-js"></div>
                <div class="hamburger__line hamburger__line--2 hamburger__line--2-js"></div>
                <div class="hamburger__line hamburger__line--3 hamburger__line--3-js"></div>
            </div>
        </label>
        <div class="menu menu-js ">
            <div class="menu__line"></div>
            <div class="menu__item">
                <a href="./index.html">Strona Główna</a>
            </div>
            <div class="menu__line"></div>
            <div class="menu__item">
                <a href="./kontakt.php">Kontakt</a>
            </div>
            <div class="menu__line"></div>
            <div class="menu__item">
                <a href="https://github.com/MR-SKYFALL?tab=repositories">Mój GitHub</a>
            </div>
            <div class="menu__line"></div>
        </div>
    </nav>


    <div class="contact">
        <div class="contact__front contact__side contact__front-js ">
            <h1 class="contact__header">Kontakt</h1>
            <div class="contact__info">
                <div class="contact__name-surname contact__info-item">
                    <div class="contact__name-surname-title">
                        Imię i Nazwisko:
                    </div>
                     <div class="contact__name-surname-data">
                         Dawid Matras
                     </div>
                </div>
                <div class="contact__email contact__info-item">
                    <div class="contact__email-title">
                        E-mail:
                    </div>
                    <div class="contact__email-data">
                        <a class="contact__email-link" href="mailto:dawid.matras75@gmail.com">dawid.matras75@gmail.com</a>
                    
                        <svg class="contact__email-copy-icon copy-button-js" data-clipboard-action="copy" data-clipboard-text="dawid.matras75@gmail.com">
                            <use xlink:href="img/sprite.svg#icon-content_copy"></use>
                        </svg>
                    </div>
                        
                </div>
                <div class="contact__github contact__info-item">
                    <div class="contact__github-title">
                        GitHub: 
                    </div>
                    <a class="contact__github-link" target="_blank"
                        href="https://github.com/MR-SKYFALL?tab=repositories">https://github.com/MR-SKYFALL</a>
                </div>
            </div>
            <div class="contact__btn contact__btn-js">Napisz do mnie</div>
        </div>
        <div class="contact__back contact__side contact__back-js ">
            <h1 class="contact__header-back">Napisz do mnie</h1>
            <svg class="contact__back-icon contact__back-icon-js">
                <use xlink:href="img/sprite.svg#icon-back"></use>
            </svg>

            <form class="form" action="./php/send.php" method="POST">
                <div class="form__your-name-surname">
                    <label for="name-surname">
                        <svg class="form__user-icon">
                            <use xlink:href="img/sprite.svg#icon-user-tie"></use>
                        </svg>
                    </label>
                    <input id="name-surname" name="name_surname" class="form__input-name-surname" placeholder="<?php echo $_SESSION['name_surname_error'] ?>"
                        type="text">

                </div>
                <div class="form__your-email">
                    <label for="input-email">
                        <svg class="form__email-icon">
                            <use xlink:href="img/sprite.svg#icon-mail"></use>
                        </svg>
                    </label>
                    <input id="input-email" name="email" class="form__input-email" placeholder="E-mail" type="text">
                </div>
                <div class="form__your-message">
                    <label for="textarea-message">
                        <svg class="form__message-icon">
                            <use xlink:href="img/sprite.svg#icon-message"></use>
                        </svg>
                    </label>
                    <textarea id="textarea-message" name="message" placeholder="Twoja Wiadomość" class="form__textarea-message"
                        name=""></textarea>
                </div>
                <button type="submit" class="form__btn-send">Wyślij</button>
            </form>

        </div>
    </div>
    
    <script src="./JS/clipboard.min.js"></script>
    <script src="./JS/contact-page.js"></script>
</body>

</html>