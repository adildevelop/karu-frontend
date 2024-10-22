function createDokladnoi() {
    $.ajax({
        url: window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/dokladnoi.html',
        method: 'get',
        success: function (data) {
            document.querySelector('.main-form').innerHTML = data;

            document.getElementById('back-to-menu').addEventListener('click', event => {
                openMainMenu();
            });
            document.getElementById('dateInput').value = moment().format('YYYY-MM-DD');

            const facultySelectDropdown = document.getElementById('facultySelect');
            facultySelectDropdown.addEventListener('change', event => {
                if (facultySelectDropdown.value == 'БГФ') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>' +
                        '<option value="Бот">Ботаники</option>\n' +
                        '<option value="Зоо">Зоологии</option>\n' +
                        '<option value="Физ">Физиологии</option>\n' +
                        '<option value="Гео">Географии</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ИсФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ИКАНК">Истории Казахстана и Ассамблеи народа Казахстана</option>\n' +
                        '<option value="АЭОИ">Археологии, этнологии и отечественной истории</option>\n' +
                        '<option value="ВИМО">Всемирной истории и международных отношений</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ИнЯз') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ИнФ">Иностранной филологии</option>\n' +
                        '<option value="ИноЯз">Иностранных языков</option>\n' +
                        '<option value="ТПП">Теории и практики перевода</option>\n' +
                        '<option value="ТМИП">Теории и методики иноязычной подготовки</option>\n' +
                        '<option value="ПКИЯ">Практического курса иностранного языка</option>'
                    );
                }

                if (facultySelectDropdown.value == 'МиИТ') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="АМЛГ">Алгебры, математической логики и геометрии имени проф. Т.Г.Мустафина</option>\n' +
                        '<option value="МАДУ">Математического анализа и дифференциальных уравнений</option>\n' +
                        '<option value="ПМИИ">Прикладной математики и информатика</option>\n' +
                        '<option value="МПМИ">Методики преподавания математики и информатики</option>'
                    );
                }

                if (facultySelectDropdown.value == 'Пед') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ПМНО">Педагогика и методика начального обучения</option>\n' +
                        '<option value="ДППП">Дошкольной и психолого-педагогической подготовки</option>\n' +
                        '<option value="СИО">Специального и инклюзивного образования</option>\n' +
                        '<option value="ИИД">Изобразительного искусства и дизайна</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФизТех') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ИТИПА">Инженерной теплофизики имени профессора Акылбаева Ж.С.</option>\n' +
                        '<option value="РЭ">Радиофизики и электроники</option>\n' +
                        '<option value="ФН">Физики и нанотехнологий</option>\n' +
                        '<option value="ТЛС">Транспорта и логистических систем</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФКиС') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="НВПЕ">Начальной военной подготовки и единоборств</option>\n' +
                        '<option value="ТМФКС">Теории и методики физической культуры и спорта</option>\n' +
                        '<option value="ФВ">Физического воспитания</option>\n' +
                        '<option value="СПД">Спортивно-педагогических дисциплин</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФилФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="КЯ">Казахского языкознания</option>\n' +
                        '<option value="КЛ">Казахской литературы</option>\n' +
                        '<option value="ПККЯ">Практического курса казахского языка</option>\n' +
                        '<option value="РЯЛПМ">Русского языка и литературы имени профессора Г.А. Мейрамова</option>\n' +
                        '<option value="ЖУР">Журналистики</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФиП') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ПИС">Политологии и социологии</option>\n' +
                        '<option value="Псих">Психологии</option>\n' +
                        '<option value="СРСП">Социальной работы и социальной педагогики</option>\n' +
                        '<option value="ФТК">Философии и теории культуры</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ХимФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ФАХ">Физической и аналитической химии</option>\n' +
                        '<option value="ОХП">Органической химии и полимеров</option>\n' +
                        '<option value="НТХ">Неорганической и технической химии</option>\n' +
                        '<option value="ХТН">Химической технологии и нефтехимии</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ЭкономФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ЭМБ">Экономики и международного бизнеса</option>\n' +
                        '<option value="Мен">Менеджмента</option>\n' +
                        '<option value="Мар">Маркетинга</option>\n' +
                        '<option value="Фин">Финансов</option>\n' +
                        '<option value="БУУ">Бухгалтерского учета и аудита</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ЮрФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="ТИГП">Теории и истории государства и права</option>\n' +
                        '<option value="КМП">Конституционного и международного права</option>\n' +
                        '<option value="ГТП">Гражданского и трудового права</option>\n' +
                        '<option value="УППК">Уголовного права, процесса и криминалистики</option> '
                    );
                }
            });

            document.getElementById('doc-save-btn').addEventListener('click', function (event) {
                event.preventDefault();

                let dean = '';
                switch (document.getElementById('doklFacultySelect').value) {
                    case 'БГФ':
                        dean = 'Жуминой А.Г.';
                        break;
                    case 'ИсФак':
                        dean = 'Джумабекову Д.А.';
                        break;
                    case 'ИнЯз':
                        dean = 'Тлеужановой Г.К.';
                        break;
                    case 'МиИТ':
                        dean = 'Танину Ә.О.';
                        break;
                    case 'Пед':
                        dean = 'Салтанат А.М.';
                        break;
                    case 'ФизТех':
                        dean = 'Зейниденову А.К.';
                        break;
                    case 'ФКиС':
                        dean = 'Аданову К.Б.';
                        break;
                    case 'ФилФак':
                        dean = 'Түйте Е.Е.';
                        break;
                    case 'ФиП':
                        dean = 'Макатовой А.Д.';
                        break;
                    case 'ХимФак':
                        dean = 'Ибраеву М.К.';
                        break;
                    case 'ЭкономФак':
                        dean = 'Ламбековой А.Н.';
                        break;
                    case 'ЮрФак':
                        dean = 'Серикбаеву А.М.';
                        break;
                    default:
                        dean = 'Иванову И.И.';
                        break;
                }

                let data = {
                    name: document.getElementById('nameInput').value,
                    date: document.getElementById('dateInput').value,
                    faculty: document.getElementById('doklFacultySelect').value,
                    dean: dean,
                    department: document.getElementById('departmentSelect').value,
                    group: document.getElementById('groupInput').value,
                    lesson_name: document.getElementById('subjectInput').value,
                    lesson_type: document.getElementById('subjectTypeSelect').value,
                    start_time: document.getElementById('timeStart').value,
                    end_time: document.getElementById('timeEnd').value,
                }

                $.ajax({
                    url: apiUrl,
                    method: 'get',
                    contentType: 'application/pdf',
                    xhrFields: {
                        responseType: 'blob'
                    },
                    data: data,
                    success: function(blob){
                        let link=document.createElement('a');
                        link.href=window.URL.createObjectURL(blob);
                        link.download="dokladnoi.pdf";
                        link.click();
                    }
                });
            });
        }
    });
}