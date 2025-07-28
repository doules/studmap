document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const categoriesScreen = document.getElementById('categories-screen');
    const swipeScreen = document.getElementById('swipe-screen');
    const resultsScreen = document.getElementById('results-screen');
    const nextBtn = document.getElementById('next-btn');
    const errorMessage = document.getElementById('error-message');
    const cardDeck = document.getElementById('card-deck');
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');
    const matchesGrid = document.getElementById('matches-grid');
    const exportBtn = document.getElementById('export-btn');
    const restartBtn = document.getElementById('restart-btn');
    const buttonsContainer = document.getElementById('buttons-container');

    // Club data organized by categories
    const clubsData = {
        science: [
            {
                name: "Студенческое научное общество РГГМУ",
                description: "Объединение для тех, кто интересуется научной деятельностью. Проводим конференции, семинары и помогаем с публикациями.",
                link: "https://vk.com/rshusno",
                image: "images/science.jpg"
            },
            {
                name: "Интеллектуальный клуб «Порт» СНО РГГМУ",
                description: "Место для любителей интеллектуальных игр. Участвуем в турнирах по «Что? Где? Когда?» и другим играм.",
                link: "https://vk.com/club198616849",
                image: "images/intellect.jpg"
            }
        ],
        creative: [
            {
                name: "Культурно-досуговый клуб «Браво»",
                description: "Организуем культурные мероприятия, концерты и творческие вечера в университете.",
                link: "https://vk.com/kdkbravo",
                image: "images/bravo.jpg"
            },
            {
                name: "Студенческий театр «В одной лодке»",
                description: "Театральная студия для тех, кто хочет попробовать себя на сцене или за кулисами.",
                link: "https://vk.com/hydromettheatre",
                image: "images/theatre.jpg"
            },
            {
                name: "Хор «АТМОСФЕРА» РГГМУ",
                description: "Вокальный коллектив университета. Участвуем в концертах и конкурсах.",
                link: "https://vk.com/club215786557",
                image: "images/choir.jpg"
            },
            {
                name: "Коллектив народного вокала «Птичка певчая»",
                description: "Исполняем народные песни и участвуем в конкурсах и фестивалях.",
                link: "https://vk.com/im/convo/515820771?entrypoint=list_all&z=video-250783_456239156%2F9fae44af5d8dc06ca5",
                image: "images/vocal.jpg"
            },
            {
                name: "Коллектив современной хореографии «Preparation»",
                description: "Танцевальный коллектив, работающий в современных стилях. Участвуем в конкурсах и фестивалях, выступаем на концертах.",
                link: "https://vk.com/preparationrshu",
                image: "images/dance.jpg"
            },
            {
                name: "Танцевальный коллектив «Княженика»",
                description: "Исполняем национальные танцы коренных народов Камчатки под живое вокальное сопровождение.",
                link: "https://vk.com/knyazhenikadance",
                image: "images/knyazhenika.jpg"
            },
            {
                name: "Этнический танцевальный ансамбль «Байн Цаг»",
                description: "Изучаем и исполняем традиционные танцы разных народов мира.",
                link: "https://vk.com/club149122480?from=search",
                image: "images/ethnic.jpg"
            },
            {
                name: "Студенческая медиа-студия",
                description: "Создаем фото- и видеоконтент о жизни университета, ведем соцсети.",
                link: "https://vk.com/mediastud_rshu",
                image: "images/media.jpg"
            }
        ],
        sport: [
            {
                name: "Студенческий спортивный клуб «Стихия»",
                description: "Объединяет все спортивные секции университета. Организует соревнования и мероприятия.",
                link: "https://vk.com/sport.rshu",
                image: "images/sport.jpg"
            },
            {
                name: "Парусный спорт | ССК Стихия РГГМУ",
                description: "Яхтинг и водные виды спорта для студентов Российского государственного гидрометеорологического университета.",
                link: "https://vk.com/rshusailing",
                image: "images/sailing.jpg"
            },
            {
                name: "Фан-клуб «Зенит» РГГМУ",
                description: "Для болельщиков футбольного клуба «Зенит». Помогаем БК 'Зенит' в организации мероприятий.",
                link: "https://vk.com/rshu_zenit_fans",
                image: "images/zenit.jpg"
            },
            {
                name: "Киберспортивный клуб «Циклон»",
                description: "Проводим турниры по киберспортивным дисциплинам среди студентов.",
                link: "https://vk.com/cyclone_rshu",
                image: "images/cyber.jpg"
            },
            {
                name: "ТСК «Гидромет» (Спортивный туризм РГГМУ)",
                description: "Ходим в спортивные маршруты, участвуем в соревнованиях на дистанциях и обучаемся навыкам выживания.",
                link: "https://vk.com/tourismrshu",
                image: "images/tourism.jpg"
            },
            {
                name: "Команда по чирлидингу «Торнадо»",
                description: "Наша команда танцует на турнирах студенческих клубов, выступает на концертах, фестивалях, а также ежегодно участвует в соревнованиях.",
                link: "https://vk.com/tornado_rshu",
                image: "images/cheer.jpg"
            }
        ],
        social: [
            {
                name: "Единый волонтёрский центр РГГМУ",
                description: "Координируем волонтерскую деятельность студентов в различных сферах.",
                link: "https://vk.com/evc_rshu",
                image: "images/volunteer.jpg"
            },
            {
                name: "Социальное добровольческое объединение «ЗОВ»",
                description: "Помогаем нуждающимся, организуем благотворительные акции и мероприятия.",
                link: "https://vk.com/dobrozov",
                image: "images/zov.jpg"
            },
            {
                name: "Экологический волонтёрский центр «ЗЕЛЁНЫЙ ВЕК»",
                description: "Занимаемся экологическим просвещением и организацией экологических акций.",
                link: "https://vk.com/greenrshu",
                image: "images/green.jpg"
            },
            {
                name: "Донорская ячейка «ЗОВ КРОВИ»",
                description: "Организуем День Донора в РГГМУ",
                link: "https://vk.com/zovkrovi_rshu",
                image: "images/blood.jpg"
            },
            {
                name: "Волонтёры Победы РГГМУ",
                description: "Сохраняем историческую память, помогаем ветеранам, организуем патриотические мероприятия.",
                link: "https://vk.com/victoryvolunteersrshu",
                image: "images/victory.jpg"
            },
            {
                name: "Студенческие отряды РГГМУ",
                description: "Объединяем различные студенческие отряды университета.",
                link: "https://vk.com/so_rshy",
                image: "images/squads.jpg"
            },
            {
                name: "Студенческий педагогический отряд «Море»",
                description: "Работаем в детских лагерях в качестве вожатых и организаторов.",
                link: "https://vk.com/spo_sea",
                image: "images/sea.jpg"
            },
            {
                name: "Студенческий строительный отряд «РОК»",
                description: "Участвуем в строительных проектах в летний период.",
                link: "https://vk.com/rokovoy_otryad",
                image: "images/rock.jpg"
            },
            {
                name: "Студенческий биологический отряд «Новая Земля»",
                description: "Мы ездим в различные заповедники, где нас ожидает множество интересной работы.",
                link: "https://vk.com/sbo_nz",
                image: "images/earth.jpg"
            },
            {
                name: "Студенческий экологический отряд «Полярная Звезда»",
                description: "Мы дружной командой выезжаем работать в заповедник и участвуем в жизни студенческих отрядов Санкт-Петербурга.",
                link: "https://vk.com/seo_pz",
                image: "images/star.jpg"
            },
            {
                name: "Ячейка ассоциации «Покров» в РГГМУ",
                description: "Наша команда принимает участие в общепокровских мероприятиях, помогает в их организации.",
                link: "https://vk.com/rshupokrov",
                image: "images/pokrov.jpg"
            }
        ]
    };

    // State variables
    let selectedCategories = [];
    let clubsToShow = [];
    let currentCardIndex = 0;
    let matchedClubs = [];
    let startX, moveX;
    let isDragging = false;

    // Event listeners
    nextBtn.addEventListener('click', proceedToSwipe);
    likeBtn.addEventListener('click', () => handleSwipe('like'));
    dislikeBtn.addEventListener('click', () => handleSwipe('dislike'));
    exportBtn.addEventListener('click', exportToPDF);
    restartBtn.addEventListener('click', restartProcess);

    // Initialize swipe cards touch events
    cardDeck.addEventListener('touchstart', handleTouchStart, { passive: false });
    cardDeck.addEventListener('touchmove', handleTouchMove, { passive: false });
    cardDeck.addEventListener('touchend', handleTouchEnd);

    // Functions
    function proceedToSwipe() {
        const checkedBoxes = document.querySelectorAll('input[name="category"]:checked');

        if (checkedBoxes.length === 0) {
            errorMessage.classList.remove('hidden');
            return;
        }

        errorMessage.classList.add('hidden');
        selectedCategories = Array.from(checkedBoxes).map(box => box.value);

        // Prepare clubs to show based on selected categories
        clubsToShow = [];
        selectedCategories.forEach(category => {
            clubsToShow = clubsToShow.concat(clubsData[category]);
        });

        // Shuffle clubs to show
        clubsToShow = shuffleArray(clubsToShow);

        // Show first card
        showNextCard();

        // Switch screens
        categoriesScreen.classList.remove('active');
        swipeScreen.classList.add('active');
    }

    function showNextCard() {
        if (currentCardIndex >= clubsToShow.length) {
            // No more cards, show results
            showResults();
            return;
        }

        const club = clubsToShow[currentCardIndex];
        const card = createClubCard(club);

        // Clear previous cards
        cardDeck.innerHTML = '';
        cardDeck.appendChild(card);
    }

    function createClubCard(club) {
        const card = document.createElement('div');
        card.className = 'club-card';

        card.innerHTML = `
            <img src="${club.image}" alt="${club.name}">
            <h3>${club.name}</h3>
            <p>${club.description}</p>
            ${club.link ? `<a href="${club.link}" target="_blank">Подробнее ВКонтакте</a>` : ''}
        `;

        return card;
    }

    function handleSwipe(action) {
        const currentClub = clubsToShow[currentCardIndex];

        if (action === 'like') {
            matchedClubs.push(currentClub);
            animateCardSwipe('right');
        } else {
            animateCardSwipe('left');
        }

        currentCardIndex++;

        // Show next card after animation
        setTimeout(() => {
            showNextCard();
        }, 300);
    }

    function animateCardSwipe(direction) {
        const card = document.querySelector('.club-card');
        if (!card) return;

        const transformValue = direction === 'right' ? 'translateX(200%) rotate(30deg)' : 'translateX(-200%) rotate(-30deg)';
        card.style.transform = transformValue;
        card.style.opacity = '0';
        card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    }

    function showResults() {
        swipeScreen.classList.remove('active');
        resultsScreen.classList.add('active');

        matchesGrid.innerHTML = '';
        const noMatchesContainer = document.getElementById('no-matches-container');
        const buttonsContainer = document.getElementById('buttons-container');
        const resultsTitle = document.getElementById('results-title');
        const exportBtn = document.getElementById('export-btn');

        if (matchedClubs.length === 0) {
            noMatchesContainer.style.display = 'block';
            resultsTitle.style.display = 'none';
            exportBtn.style.display = 'none';
        } else {
            noMatchesContainer.style.display = 'none';
            resultsTitle.style.display = 'block';
            exportBtn.style.display = 'block';

            matchedClubs.forEach(club => {
                const matchCard = document.createElement('div');
                matchCard.className = 'match-card';
                matchCard.innerHTML = `
                <img src="${club.image}" alt="${club.name}">
                <h3>${club.name}</h3>
            `;

                matchCard.addEventListener('click', () => {
                    if (club.link) {
                        window.open(club.link, '_blank');
                    } else {
                        const modal = document.createElement('div');
                        modal.className = 'modal';
                        modal.innerHTML = `
                        <div class="modal-content">
                            <span class="close-modal">&times;</span>
                            <img src="${club.image}" alt="${club.name}" class="modal-image">
                            <div class="modal-text">
                                <h3 class="modal-title">${club.name}</h3>
                                <p class="modal-description">${club.description}</p>
                            </div>
                        </div>
                    `;
                        document.body.appendChild(modal);

                        modal.querySelector('.close-modal').addEventListener('click', () => {
                            modal.remove();
                        });

                        modal.addEventListener('click', (e) => {
                            if (e.target === modal) {
                                modal.remove();
                            }
                        });
                    }
                });

                matchesGrid.appendChild(matchCard);
            });
        }
    }

    function exportToPDF() {
        if (matchedClubs.length === 0) {
            alert('Нет выбранных объединений для экспорта');
            return;
        }

        const element = document.createElement('div');
        element.innerHTML = `
            <h1 style="text-align: center; color: #2c7873;">Ваши подходящие объединения</h1>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px;">
                ${matchedClubs.map(club => `
                    <div style="text-align: center; padding: 10px;">
                        <img src="${club.image}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; margin-bottom: 5px;" alt="${club.name}">
                        <h3 style="font-size: 14px; color: #2c7873;">${club.name}</h3>
                    </div>
                `).join('')}
            </div>
        `;

        const opt = {
            margin: 10,
            filename: 'студенческие_объединения.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    }

    function restartProcess() {
        // Reset state
        selectedCategories = [];
        clubsToShow = [];
        currentCardIndex = 0;
        matchedClubs = [];

        // Uncheck all checkboxes
        document.querySelectorAll('input[name="category"]').forEach(box => {
            box.checked = false;
        });

        // Switch screens
        resultsScreen.classList.remove('active');
        categoriesScreen.classList.add('active');
    }

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Touch event handlers for swipe
    function handleTouchStart(e) {
        const card = document.querySelector('.club-card');
        if (!card) return;

        startX = e.touches[0].clientX;
        card.style.transition = 'none';
        isDragging = true;
    }

    function handleTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        const card = document.querySelector('.club-card');
        if (!card) return;

        moveX = e.touches[0].clientX - startX;
        const rotate = moveX / 20;

        card.style.transform = `translateX(${moveX}px) rotate(${rotate}deg)`;
    }

    function handleTouchEnd() {
        if (!isDragging) return;
        isDragging = false;

        const card = document.querySelector('.club-card');
        if (!card) return;

        card.style.transition = 'transform 0.3s ease';

        const threshold = 100;
        if (Math.abs(moveX) > threshold) {
            if (moveX > 0) {
                handleSwipe('like');
            } else {
                handleSwipe('dislike');
            }
        } else {
            card.style.transform = '';
        }
    }
});