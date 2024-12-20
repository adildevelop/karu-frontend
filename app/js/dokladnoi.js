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
                        '<option value="Ботаники">Ботаники</option>\n' +
                        '<option value="Зоологии">Зоологии</option>\n' +
                        '<option value="Физиологии">Физиологии</option>\n' +
                        '<option value="Географии">Географии</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ИсФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Истории Казахстана и Ассамблеи народа Казахстана">Истории Казахстана и Ассамблеи народа Казахстана</option>\n' +
                        '<option value="Археологии, этнологии и отечественной истории">Археологии, этнологии и отечественной истории</option>\n' +
                        '<option value="Всемирной истории и международных отношений">Всемирной истории и международных отношений</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ИнЯз') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Иностранной филологии">Иностранной филологии</option>\n' +
                        '<option value="Иностранных языков">Иностранных языков</option>\n' +
                        '<option value="Теории и практики перевода">Теории и практики перевода</option>\n' +
                        '<option value="Теории и методики иноязычной подготовки">Теории и методики иноязычной подготовки</option>\n' +
                        '<option value="Практического курса иностранного языка">Практического курса иностранного языка</option>'
                    );
                }

                if (facultySelectDropdown.value == 'МиИТ') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Алгебры, математической логики и геометрии имени проф. Т.Г.Мустафина">Алгебры, математической логики и геометрии имени проф. Т.Г.Мустафина</option>\n' +
                        '<option value="Математического анализа и дифференциальных уравнений">Математического анализа и дифференциальных уравнений</option>\n' +
                        '<option value="Прикладной математики и информатика">Прикладной математики и информатика</option>\n' +
                        '<option value="Методики преподавания математики и информатики">Методики преподавания математики и информатики</option>'
                    );
                }

                if (facultySelectDropdown.value == 'Пед') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Педагогика и методика начального обучения">Педагогика и методика начального обучения</option>\n' +
                        '<option value="Дошкольной и психолого-педагогической подготовки">Дошкольной и психолого-педагогической подготовки</option>\n' +
                        '<option value="Специального и инклюзивного образования">Специального и инклюзивного образования</option>\n' +
                        '<option value="Изобразительного искусства и дизайна">Изобразительного искусства и дизайна</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФизТех') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Инженерной теплофизики имени профессора Акылбаева Ж.С.">Инженерной теплофизики имени профессора Акылбаева Ж.С.</option>\n' +
                        '<option value="Радиофизики и электроники">Радиофизики и электроники</option>\n' +
                        '<option value="Физики и нанотехнологий">Физики и нанотехнологий</option>\n' +
                        '<option value="Транспорта и логистических систем">Транспорта и логистических систем</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФКиС') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Начальной военной подготовки и единоборств">Начальной военной подготовки и единоборств</option>\n' +
                        '<option value="Теории и методики физической культуры и спорта">Теории и методики физической культуры и спорта</option>\n' +
                        '<option value="Физического воспитания">Физического воспитания</option>\n' +
                        '<option value="Спортивно-педагогических дисциплин">Спортивно-педагогических дисциплин</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФилФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Казахского языкознания">Казахского языкознания</option>\n' +
                        '<option value="Казахской литературы">Казахской литературы</option>\n' +
                        '<option value="Практического курса казахского языка">Практического курса казахского языка</option>\n' +
                        '<option value="Русского языка и литературы имени профессора Г.А. Мейрамова">Русского языка и литературы имени профессора Г.А. Мейрамова</option>\n' +
                        '<option value="Журналистики">Журналистики</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ФиП') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Политологии и социологии">Политологии и социологии</option>\n' +
                        '<option value="Психологии">Психологии</option>\n' +
                        '<option value="Социальной работы и социальной педагогики">Социальной работы и социальной педагогики</option>\n' +
                        '<option value="Философии и теории культуры">Философии и теории культуры</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ХимФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Физической и аналитической химии">Физической и аналитической химии</option>\n' +
                        '<option value="Органической химии и полимеров">Органической химии и полимеров</option>\n' +
                        '<option value="Неорганической и технической химии">Неорганической и технической химии</option>\n' +
                        '<option value="Химической технологии и нефтехимии">Химической технологии и нефтехимии</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ЭкономФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Экономики и международного бизнеса">Экономики и международного бизнеса</option>\n' +
                        '<option value="Менеджмента">Менеджмента</option>\n' +
                        '<option value="Маркетинга">Маркетинга</option>\n' +
                        '<option value="Финансов">Финансов</option>\n' +
                        '<option value="Бухгалтерского учета и аудита">Бухгалтерского учета и аудита</option>'
                    );
                }

                if (facultySelectDropdown.value == 'ЮрФак') {
                    $('#departmentSelect').html(
                        '<option selected>Кафедра</option>\n' +
                        '<option value="Теории и истории государства и права">Теории и истории государства и права</option>\n' +
                        '<option value="Конституционного и международного права">Конституционного и международного права</option>\n' +
                        '<option value="Гражданского и трудового права">Гражданского и трудового права</option>\n' +
                        '<option value="Уголовного права, процесса и криминалистики">Уголовного права, процесса и криминалистики</option> '
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

                let faculty = '';
                switch (document.getElementById('doklFacultySelect').value) {
                    case 'БГФ':
                        faculty = 'биолого-географического факультета';
                        break;
                    case 'ИсФак':
                        faculty = 'исторического факультета';
                        break;
                    case 'ИнЯз':
                        faculty = 'факультета иностранных языков';
                        break;
                    case 'МиИТ':
                        faculty = 'факультета математики и информационных технологий';
                        break;
                    case 'Пед':
                        faculty = 'педагогического факультета';
                        break;
                    case 'ФизТех':
                        faculty = 'физико-технического факультета';
                        break;
                    case 'ФКиС':
                        faculty = 'факультета физической культуры и спорта';
                        break;
                    case 'ФилФак':
                        faculty = 'филологического факультета';
                        break;
                    case 'ФиП':
                        faculty = 'факультета философии и психологии';
                        break;
                    case 'ХимФак':
                        faculty = 'химического факультета';
                        break;
                    case 'ЭкономФак':
                        faculty = 'экономического факультета';
                        break;
                    case 'ЮрФак':
                        faculty = 'юридического факультета';
                        break;
                    default:
                        faculty = 'Выберите факультет';
                        break;
                }

                let data = {
                    name: document.getElementById('nameInput').value,
                    date: moment(document.getElementById('dateInput').value, 'YYYY-MM-DD').format('DD.MM.YYYY'),
                    faculty: faculty,
                    dean: dean,
                    department: document.getElementById('departmentSelect').value,
                    group: document.getElementById('groupInput').value,
                    lesson_name: document.getElementById('subjectInput').value,
                    lesson_type: document.getElementById('subjectTypeSelect').value,
                    start_time: document.getElementById('timeStart').value,
                    end_time: document.getElementById('timeEnd').value,
                }

                document.querySelector('.loader-parent').classList.remove('d-none');

                $.ajax({
                    url: apiUrl,
                    method: 'get',
                    contentType: 'application/pdf',
                    xhrFields: {
                        responseType: 'blob'
                    },
                    data: data,
                    success: function(blob){
                        document.querySelector('.loader-parent').classList.add('d-none');
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