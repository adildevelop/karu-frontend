function createUmk() {
    $.ajax({
        url: window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/umk.html',
        method: 'get',
        success: function(data){
            var currentTextarea = '';
            document.querySelector('.main-form').innerHTML = data;
            enableTooltips();

            document.getElementById('back-to-menu').addEventListener('click', event => {
                openMainMenu();
            });
            document.getElementById('tematics-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const tematicsCountInput = document.getElementById('tematics-count');

                let text = '';

                for (let i = 1; i <= tematicsCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <div class="w-100">\n' +
                        '             <input type="text" class="theme-input form-control" id="theme-input-' + 1 + '" placeholder="Наименование темы">\n' +
                        '             <div class="d-flex mt-3">\n' +
                        '                  <input type="number" class="lection-count form-control me-3" id="lection-count-' + 1 + '" min="0" placeholder="Лекции">\n' +
                        '                  <input type="number" class="seminar-count form-control me-3" id="seminar-count-' + 1 + '" min="0" placeholder="Семинары">\n' +
                        '                  <input type="number" class="lab-count form-control me-3" id="lab-count-' + 1 + '" min="0" placeholder="Лабораторные">\n' +
                        '                  <input type="number" class="srsp-count form-control me-3" id="srsp-count-' + 1 + '" min="0" placeholder="СРСП">\n' +
                        '                  <input type="number" class="srs-count form-control" id="srs-count-' + 1 + '" min="0" placeholder="СРС">\n' +
                        '             </div>\n' +
                        '        </div>\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const firstPageContent = document.getElementById('first-page-content');
                firstPageContent.innerHTML = text;
            });

            document.getElementById('lecturer-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const lecturerCountInput = document.getElementById('lecturer-count');

                let text = '';

                for (let i = 1; i <= lecturerCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="lecturer-input form-control" id="lecturer-input-' + 1 + '" placeholder="Информация о преподавателе">\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const secondPageLecturerContent = document.getElementById('second-page-lecturer-content');
                secondPageLecturerContent.innerHTML = text;
            });

            document.getElementById('lo-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const loCountInput = document.getElementById('lo-count');

                let text = '';

                for (let i = 1; i <= loCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <textarea type="text" class="lo-input form-control me-2" id="lo-input-' + 1 + '" placeholder="Результаты обучения"></textarea>\n' +
                        '        <textarea type="text" class="methods-input form-control" id="methods-input-' + 1 + '" placeholder="Методы оценки"></textarea>\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const thirdPageLoContent = document.getElementById('third-page-lo-content');
                thirdPageLoContent.innerHTML = text;
            });

            document.getElementById('bl-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const blCountInput = document.getElementById('bl-count');

                let text = '';

                for (let i = 1; i <= blCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="bl-input form-control me-2" id="bl-input-' + 1 + '" placeholder="Основная литература">\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const fifthPageBlContent = document.getElementById('fifth-page-bl-content');
                fifthPageBlContent.innerHTML = text;
            });

            document.getElementById('al-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const alCountInput = document.getElementById('al-count');

                let text = '';

                for (let i = 1; i <= alCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="al-input form-control me-2" id="al-input-' + 1 + '" placeholder="Дополнительная литература">\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const fifthPageAlContent = document.getElementById('fifth-page-al-content');
                fifthPageAlContent.innerHTML = text;
            });

            document.getElementById('ll-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const llCountInput = document.getElementById('ll-count');

                let text = '';

                for (let i = 1; i <= llCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <textarea type="text" class="ls-input form-control me-2" id="ls-input-' + 1 + '" placeholder="Тема лекции"></textarea>\n' +
                        '        <textarea type="text" class="lp-input form-control" id="lp-input-' + 1 + '" placeholder="План лекции"></textarea>\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const sixthPageLlContent = document.getElementById('sixth-page-ll-content');
                sixthPageLlContent.innerHTML = text;
            });

            document.getElementById('sp-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const spCountInput = document.getElementById('sp-count');

                let text = '';

                for (let i = 1; i <= spCountInput.value; i++) {
                    text += '<div class="d-flex mt-3" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="sps-input form-control me-2" id="sps-input-' + 1 + '" placeholder="Тема занятия">\n' +
                        '        <textarea type="text" class="spq-input form-control me-2" id="spq-input-' + 1 + '" placeholder="Вопросы и задания"></textarea>\n' +
                        '        <textarea type="text" class="spr-input form-control me-2" id="spr-input-' + 1 + '" placeholder="Методические рекомендации"></textarea>\n' +
                        '        <input type="text" class="spl-input form-control" id="spl-input-' + 1 + '" placeholder="Ссылка на перечень рекомендованных источников">\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const seventhPageSpContent = document.getElementById('seventh-page-sp-content');
                seventhPageSpContent.innerHTML = text;

                let spqInputs = document.querySelectorAll('.spq-input');
                let sprInputs = document.querySelectorAll('.spr-input');

                for (let i = 0; i < spqInputs.length; i++) {
                    spqInputs[i].addEventListener('focus', function (event) {
                        currentTextarea = event.target;
                    });
                    sprInputs[i].addEventListener('focus', function (event) {
                        currentTextarea = event.target;
                    });
                }
            });

            document.getElementById('lab-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const labCountInput = document.getElementById('lab-count');

                let text = '';

                for (let i = 1; i <= labCountInput.value; i++) {
                    text += '<div class="d-flex mt-3" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="slab-input form-control me-2" id="slab-input-' + 1 + '" placeholder="Тема занятия">\n' +
                        '        <textarea type="text" class="qlab-input form-control me-2" id="qlab-input-' + 1 + '" placeholder="Лабораторное задание"></textarea>\n' +
                        '        <textarea type="text" class="rlab-input form-control me-2" id="rlab-input-' + 1 + '" placeholder="Методические рекомендации"></textarea>\n' +
                        '        <input type="text" class="llab-input form-control" id="llab-input-' + 1 + '" placeholder="Ссылка на перечень рекомендованных источников">\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const eighthPageLabContent = document.getElementById('eighth-page-lab-content');
                eighthPageLabContent.innerHTML = text;

                let qlabInputs = document.querySelectorAll('.qlab-input');
                let rlabInputs = document.querySelectorAll('.rlab-input');

                for (let i = 0; i < qlabInputs.length; i++) {
                    qlabInputs[i].addEventListener('focus', function (event) {
                        currentTextarea = event.target;
                    });
                    rlabInputs[i].addEventListener('focus', function (event) {
                        currentTextarea = event.target;
                    });
                }
            });

            document.getElementById('srop-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const sropCountInput = document.getElementById('srop-count');

                let text = '';

                for (let i = 1; i <= sropCountInput.value; i++) {
                    text += '<div class="d-flex mt-3" xmlns="http://www.w3.org/1999/html">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="srops-input form-control me-2" id="srops-input-' + 1 + '" placeholder="Тема занятия">\n' +
                        '        <textarea type="text" class="sropq-input form-control me-2" id="sropq-input-' + 1 + '" placeholder="Задания"></textarea>\n' +
                        '        <textarea type="text" class="sropr-input form-control" id="sropr-input-' + 1 + '" placeholder="Методические рекомендации"></textarea>\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const ninthPageSropContent = document.getElementById('ninth-page-srop-content');
                ninthPageSropContent.innerHTML = text;

                let sropqInputs = document.querySelectorAll('.sropq-input');

                for (let i = 0; i < sropqInputs.length; i++) {
                    sropqInputs[i].addEventListener('focus', function (event) {
                        currentTextarea = event.target;
                    });
                }
            });

            document.getElementById('sro-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const sroCountInput = document.getElementById('sro-count');

                let text = '';

                for (let i = 1; i <= sroCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="sros-input form-control me-2" id="sros-input-' + 1 + '" placeholder="Тема занятия">\n' +
                        '        <textarea type="text" class="sroq-input form-control me-2" id="sroq-input-' + 1 + '" placeholder="Задания"></textarea>\n' +
                        '        <textarea type="text" class="sror-input form-control" id="sror-input-' + 1 + '" placeholder="Методические рекомендации"></textarea>\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const ninthPageSroContent = document.getElementById('ninth-page-sro-content');
                ninthPageSroContent.innerHTML = text;

                let sroqInputs = document.querySelectorAll('.sroq-input');

                for (let i = 0; i < sroqInputs.length; i++) {
                    sroqInputs[i].addEventListener('focus', function (event) {
                        currentTextarea = event.target;
                    });
                }
            });

            document.getElementById('pw-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const pwCountInput = document.getElementById('pw-count');

                let text = '';

                for (let i = 1; i <= pwCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="pw-input form-control me-2" id="pw-input-' + 1 + '" placeholder="Тематика письменных работ">\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const tenthPagePwContent = document.getElementById('tenth-page-pw-content');
                tenthPagePwContent.innerHTML = text;
            });

            document.getElementById('gp-count-btn').addEventListener('click', function (event) {
                event.preventDefault();

                const gpCountInput = document.getElementById('gp-count');

                let text = '';

                for (let i = 1; i <= gpCountInput.value; i++) {
                    text += '<div class="d-flex mt-3">\n' +
                        '        <label class="me-2">' + i + '. </label>\n' +
                        '        <input type="text" class="gps-input form-control me-2" id="gps-input-' + 1 + '" placeholder="Тема занятия">\n' +
                        '        <input type="text" class="gpt-input form-control me-2" id="gpt-input-' + 1 + '" placeholder="Тип занятия">\n' +
                        '        <input type="text" class="gpf-input form-control me-2" id="gpf-input-' + 1 + '" placeholder="Вид занятия">\n' +
                        '        <input type="text" class="gpr-input form-control me-2" id="gpr-input-' + 1 + '" placeholder="Форма отчета">\n' +
                        '        <input type="text" class="gpd-input form-control me-2" id="gpd-input-' + 1 + '" placeholder="Срок сдачи (неделя)">\n' +
                        '        <input type="text" class="gpb-input form-control me-2" id="gpb-input-' + 1 + '" placeholder="Баллы">\n' +
                        '    </div>\n' +
                        '    <hr>';
                }

                const eleventhPageGpContent = document.getElementById('eleventh-page-gp-content');
                eleventhPageGpContent.innerHTML = text;
            });

            document.getElementById('umk-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let data = {
                    language: document.getElementById('languageSelect').value,
                }

                $.ajax({
                    url: apiUrl + '/umk',
                    method: 'post',
                    data: data,
                    success: function(token){
                        localStorage.setItem("umkToken", token)
                        document.getElementById('umk-language').classList.add('d-none');
                        document.getElementById('umk-index').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-index-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let data = {
                    faculty: document.getElementById('facultyInput').value,
                    department: document.getElementById('departmentInput').value,
                    subject: document.getElementById('subjectInput').value,
                    group: document.getElementById('groupInput').value,
                    course: document.getElementById('courseSelect').value,
                    study_time: document.getElementById('studyTimeSelect').value,
                    credits: document.getElementById('creditsSelect').value,
                }

                $.ajax({
                    url: apiUrl + '/umk-index',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-index').classList.add('d-none');
                        document.getElementById('umk-first').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-first-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let themeInputs = document.querySelectorAll('.theme-input');
                let lectionCounts = document.querySelectorAll('.lection-count');
                let seminarCounts = document.querySelectorAll('.seminar-count');
                let labCounts = document.querySelectorAll('.lab-count');
                let srspCounts = document.querySelectorAll('.srsp-count');
                let srsCounts = document.querySelectorAll('.srs-count');

                let themes = '';
                let lections = '';
                let seminars = '';
                let labs = '';
                let srsps = '';
                let srss = '';

                for (let i = 0; i < themeInputs.length; i++) {
                    themes += themeInputs[i].value;
                    lections += lectionCounts[i].value;
                    seminars += seminarCounts[i].value;
                    labs += labCounts[i].value;
                    srsps += srspCounts[i].value;
                    srss += srsCounts[i].value;

                    if (i !== themeInputs.length - 1) {
                        themes += '/;-;/ ';
                        lections += '/;-;/ ';
                        seminars += '/;-;/ ';
                        labs += '/;-;/ ';
                        srsps += '/;-;/ ';
                        srss += '/;-;/ ';
                    }
                }

                let data = {
                    counts: themeInputs.length,
                    themes: themes,
                    lections: lections,
                    seminars: seminars,
                    labs: labs,
                    srsps: srsps,
                    srss: srss
                }

                $.ajax({
                    url: apiUrl + '/umk/first',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-first').classList.add('d-none');
                        document.getElementById('umk-second').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-first-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-first').classList.add('d-none');
                document.getElementById('umk-index').classList.remove('d-none');
            });

            document.getElementById('umk-second-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let lecturerInputs = document.querySelectorAll('.lecturer-input');
                let prerequisites = document.getElementById('prerequisites');
                let postRequisites = document.getElementById('post-requisites');

                let lecturers = '';

                for (let i = 0; i < lecturerInputs.length; i++) {
                    lecturers += lecturerInputs[i].value;

                    if (i !== lecturerInputs.length - 1) {
                        lecturers += '/;-;/ ';
                    }
                }

                let data = {
                    counts: lecturerInputs.length,
                    lecturers: lecturers,
                    prerequisites: prerequisites.value,
                    postRequisites: postRequisites.value
                }

                $.ajax({
                    url: apiUrl + '/umk/second',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-second').classList.add('d-none');
                        document.getElementById('umk-third').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-second-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-second').classList.add('d-none');
                document.getElementById('umk-first').classList.remove('d-none');
            });

            document.getElementById('umk-third-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let loInputs = document.querySelectorAll('.lo-input');
                let methodsInputs = document.querySelectorAll('.methods-input');
                let courseDescription = document.getElementById('course-description');

                let los = '';
                let methods = '';

                for (let i = 0; i < loInputs.length; i++) {
                    los += loInputs[i].value;
                    methods += methodsInputs[i].value;

                    if (i !== loInputs.length - 1) {
                        los += '/;-;/ ';
                        methods += '/;-;/ ';
                    }
                }

                let data = {
                    counts: loInputs.length,
                    los: los,
                    methods: methods,
                    courseDescription: courseDescription.value
                }

                $.ajax({
                    url: apiUrl + '/umk/third',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-third').classList.add('d-none');
                        document.getElementById('umk-fourth').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-third-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-third').classList.add('d-none');
                document.getElementById('umk-second').classList.remove('d-none');
            });

            document.getElementById('umk-fourth-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let teachingMethods = document.getElementById('teaching-methods');
                let gradeMethods = document.getElementById('grade-methods');

                let data = {
                    teachingMethods: teachingMethods.value,
                    gradeMethods: gradeMethods.value
                }

                $.ajax({
                    url: apiUrl + '/umk/fourth',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-fourth').classList.add('d-none');
                        document.getElementById('umk-fifth').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-fourth-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-fourth').classList.add('d-none');
                document.getElementById('umk-third').classList.remove('d-none');
            });

            document.getElementById('umk-fifth-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let blInputs = document.querySelectorAll('.bl-input');
                let alInputs = document.querySelectorAll('.al-input');

                let bls = '';
                let als = '';

                for (let i = 0; i < blInputs.length; i++) {
                    bls += blInputs[i].value;

                    if (i !== blInputs.length - 1) {
                        bls += '/;-;/ ';
                    }
                }

                for (let i = 0; i < alInputs.length; i++) {
                    als += alInputs[i].value;

                    if (i !== alInputs.length - 1) {
                        als += '/;-;/ ';
                    }
                }

                let data = {
                    blCounts: blInputs.length,
                    alCounts: alInputs.length,
                    bls: bls,
                    als: als
                }

                $.ajax({
                    url: apiUrl + '/umk/fifth',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-fifth').classList.add('d-none');
                        document.getElementById('umk-sixth').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-fifth-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-fifth').classList.add('d-none');
                document.getElementById('umk-fourth').classList.remove('d-none');
            });

            document.getElementById('umk-sixth-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let lsInputs = document.querySelectorAll('.ls-input');
                let lpInputs = document.querySelectorAll('.lp-input');

                let lss = '';
                let lps = '';

                for (let i = 0; i < lsInputs.length; i++) {
                    lss += lsInputs[i].value;
                    lps += lpInputs[i].value;

                    if (i !== lsInputs.length - 1) {
                        lss += '/;-;/ ';
                        lps += '/;-;/ ';
                    }
                }

                let data = {
                    counts: lsInputs.length,
                    lss: lss,
                    lps: lps
                }

                $.ajax({
                    url: apiUrl + '/umk/sixth',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-sixth').classList.add('d-none');
                        document.getElementById('umk-seventh').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-sixth-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-sixth').classList.add('d-none');
                document.getElementById('umk-fifth').classList.remove('d-none');
            });

            document.getElementById('umk-seventh-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let spsInputs = document.querySelectorAll('.sps-input');
                let spqInputs = document.querySelectorAll('.spq-input');
                let sprInputs = document.querySelectorAll('.spr-input');
                let splInputs = document.querySelectorAll('.spl-input');


                let spss = '';
                let spqs = '';
                let sprs = '';
                let spls = '';

                for (let i = 0; i < spsInputs.length; i++) {
                    spss += spsInputs[i].value;
                    spqs += spqInputs[i].value;
                    sprs += sprInputs[i].value;
                    spls += splInputs[i].value;

                    if (i !== spsInputs.length - 1) {
                        spss += '/;-;/ ';
                        spqs += '/;-;/ ';
                        sprs += '/;-;/ ';
                        spls += '/;-;/ ';
                    }
                }

                let data = {
                    counts: spsInputs.length,
                    spss: spss,
                    spqs: spqs,
                    sprs: sprs,
                    spls: spls
                }

                $.ajax({
                    url: apiUrl + '/umk/seventh',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-seventh').classList.add('d-none');
                        document.getElementById('umk-eighth').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-seventh-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-seventh').classList.add('d-none');
                document.getElementById('umk-sixth').classList.remove('d-none');
            });

            document.getElementById('umk-eighth-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let slabInputs = document.querySelectorAll('.slab-input');
                let qlabInputs = document.querySelectorAll('.qlab-input');
                let rlabInputs = document.querySelectorAll('.rlab-input');
                let llabInputs = document.querySelectorAll('.llab-input');

                let slabs = '';
                let qlabs = '';
                let rlabs = '';
                let llabs = '';

                for (let i = 0; i < slabInputs.length; i++) {
                    slabs += slabInputs[i].value;
                    qlabs += qlabInputs[i].value;
                    rlabs += rlabInputs[i].value;
                    llabs += llabInputs[i].value;

                    if (i !== slabInputs.length - 1) {
                        slabs += '/;-;/ ';
                        qlabs += '/;-;/ ';
                        rlabs += '/;-;/ ';
                        llabs += '/;-;/ ';
                    }
                }

                let data = {
                    counts: slabInputs.length,
                    slabs: slabs,
                    qlabs: qlabs,
                    rlabs: rlabs,
                    llabs: llabs
                }

                $.ajax({
                    url: apiUrl + '/umk/eighth',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-eighth').classList.add('d-none');
                        document.getElementById('umk-ninth').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-eighth-question-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-eighth').classList.add('d-none');
                document.getElementById('umk-seventh').classList.remove('d-none');
            });

            document.getElementById('umk-eighth-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-eighth').classList.add('d-none');
                document.getElementById('umk-seventh').classList.remove('d-none');
            });

            document.getElementById('umk-ninth-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let sropsInputs = document.querySelectorAll('.srops-input');
                let sropqInputs = document.querySelectorAll('.sropq-input');
                let sroprInputs = document.querySelectorAll('.sropr-input');
                let srosInputs = document.querySelectorAll('.sros-input');
                let sroqInputs = document.querySelectorAll('.sroq-input');
                let srorInputs = document.querySelectorAll('.sror-input');

                let sropss = '';
                let sropqs = '';
                let sroprs = '';
                let sross = '';
                let sroqs = '';
                let srors = '';

                for (let i = 0; i < sropsInputs.length; i++) {
                    sropss += sropsInputs[i].value;
                    sropqs += sropqInputs[i].value;
                    sroprs += sroprInputs[i].value;

                    if (i !== sropsInputs.length - 1) {
                        sropss += '/;-;/ ';
                        sropqs += '/;-;/ ';
                        sroprs += '/;-;/ ';
                    }
                }

                for (let i = 0; i < srosInputs.length; i++) {
                    sross += srosInputs[i].value;
                    sroqs += sroqInputs[i].value;
                    srors += srorInputs[i].value;

                    if (i !== srosInputs.length - 1) {
                        sross += '/;-;/ ';
                        sroqs += '/;-;/ ';
                        srors += '/;-;/ ';
                    }
                }

                let data = {
                    sropCounts: sropsInputs.length,
                    sroCounts: srosInputs.length,
                    sropss: sropss,
                    sropqs: sropqs,
                    sroprs: sroprs,
                    sross: sross,
                    sroqs: sroqs,
                    srors: srors
                }

                $.ajax({
                    url: apiUrl + '/umk/ninth',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-ninth').classList.add('d-none');
                        document.getElementById('umk-tenth').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-ninth-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-ninth').classList.add('d-none');
                document.getElementById('umk-eighth').classList.remove('d-none');
            });

            document.getElementById('umk-tenth-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let pwInputs = document.querySelectorAll('.pw-input');

                let pws = '';

                for (let i = 0; i < pwInputs.length; i++) {
                    pws += pwInputs[i].value;

                    if (i !== pwInputs.length - 1) {
                        pws += '/;-;/ ';
                    }
                }

                let data = {
                    counts: pwInputs.length,
                    pws: pws,
                }

                $.ajax({
                    url: apiUrl + '/umk/tenth',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-tenth').classList.add('d-none');
                        document.getElementById('umk-eleventh').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-tenth-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-tenth').classList.add('d-none');
                document.getElementById('umk-ninth').classList.remove('d-none');
            });

            document.getElementById('umk-eleventh-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let gpsInputs = document.querySelectorAll('.gps-input');
                let gptInputs = document.querySelectorAll('.gpt-input');
                let gpfInputs = document.querySelectorAll('.gpf-input');
                let gprInputs = document.querySelectorAll('.gpr-input');
                let gpdInputs = document.querySelectorAll('.gpd-input');
                let gpbInputs = document.querySelectorAll('.gpb-input');

                let gps = '';
                let gpt = '';
                let gpf = '';
                let gpr = '';
                let gpd = '';
                let gpb = '';

                for (let i = 0; i < gpsInputs.length; i++) {
                    gps += gpsInputs[i].value;
                    gpt += gptInputs[i].value;
                    gpf += gpfInputs[i].value;
                    gpr += gprInputs[i].value;
                    gpd += gpdInputs[i].value;
                    gpb += gpbInputs[i].value;

                    if (i !== gpsInputs.length - 1) {
                        gps += '/;-;/ ';
                        gpt += '/;-;/ ';
                        gpf += '/;-;/ ';
                        gpr += '/;-;/ ';
                        gpd += '/;-;/ ';
                        gpb += '/;-;/ ';
                    }
                }

                let data = {
                    counts: gpsInputs.length,
                    gps: gps,
                    gpt: gpt,
                    gpf: gpf,
                    gpr: gpr,
                    gpd: gpd,
                    gpb: gpb
                }

                $.ajax({
                    url: apiUrl + '/umk/eleventh',
                    method: 'post',
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(msg){
                        document.getElementById('umk-eleventh').classList.add('d-none');
                        document.getElementById('umk-twelfth').classList.remove('d-none');
                    }
                });
            });

            document.getElementById('umk-eleventh-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-eleventh').classList.add('d-none');
                document.getElementById('umk-tenth').classList.remove('d-none');
            });

            document.getElementById('umk-twelfth-continue').addEventListener('click', function (event) {
                event.preventDefault();

                let dataArray = [];
                let texts = '';

                dataArray.push(document.getElementById('ac-a'));
                dataArray.push(document.getElementById('ac-a-minus'));
                dataArray.push(document.getElementById('ac-b-plus'));
                dataArray.push(document.getElementById('ac-b'));
                dataArray.push(document.getElementById('ac-b-minus'));
                dataArray.push(document.getElementById('ac-c-plus'));
                dataArray.push(document.getElementById('ac-c'));
                dataArray.push(document.getElementById('ac-c-minus'));
                dataArray.push(document.getElementById('ac-d-plus'));
                dataArray.push(document.getElementById('ac-d'));
                dataArray.push(document.getElementById('ac-fx'));
                dataArray.push(document.getElementById('ac-f'));

                for (let i = 0; i < 12; i++) {
                    texts += dataArray[i].value;

                    if (i !== 11) {
                        texts += '/;-;/ ';
                    }
                }

                let data = {
                    texts: texts
                }

                $.ajax({
                    url: apiUrl + '/umk/twelfth',
                    method: 'post',
                    xhrFields: {
                        responseType: 'blob'
                    },
                    headers: {
                        "Umk-token": localStorage.getItem("umkToken")
                    },
                    data: data,
                    success: function(blob){
                        let link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.download = "umk.pdf";
                        link.click();
                    }
                });
            });

            document.getElementById('umk-twelfth-back').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-twelfth').classList.add('d-none');
                document.getElementById('umk-eleventh').classList.remove('d-none');
            });

            // EIGHTH PAGE LAB QUESTION FUNCTIONALITY

            document.getElementById('umk-eighth-yes').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('eighth-question-div').classList.remove('d-block');
                document.getElementById('eighth-content-div').classList.remove('d-none');
                document.getElementById('eighth-question-div').classList.add('d-none');
                document.getElementById('eighth-content-div').classList.add('d-block');
            });

            document.getElementById('umk-eighth-no').addEventListener('click', function (event) {
                event.preventDefault();

                document.getElementById('umk-eighth').classList.add('d-none');
                document.getElementById('umk-ninth').classList.remove('d-none');
            });

            // EIGHTH PAGE LAB QUESTION FUNCTIONALITY END

            document.getElementById('seventh-math-insert-formula').addEventListener('click', function () {
                currentTextarea.value += '[:' + document.getElementById('seventh-math-editor').value + ':]';
            });
            document.getElementById('eighth-math-insert-formula').addEventListener('click', function () {
                currentTextarea.value += '[:' + document.getElementById('eighth-math-editor').value + ':]';
            });
            document.getElementById('ninth-math-insert-formula').addEventListener('click', function () {
                currentTextarea.value += '[:' + document.getElementById('ninth-math-editor').value + ':]';
            });
        }
    });
}