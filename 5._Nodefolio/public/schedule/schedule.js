$(document).ready(function(){

    $('#confirmation').hide()

    $('#date').datetimepicker({
        inline: true,
        weeks: true,
        allowTimes: [
            '10:00', '11:00', '12:00', '13:00',  
            '14:00', '15:00', '16:00', '17:00'
        ]
    });

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']

    $('#submit').click(function(){
        const date = $('#date').datetimepicker("getValue");
        const dateFormatted = `You have scheduled a meeting ${days[date.getDay()]} ${months[date.getMonth()]}
            ${date.getDate()} ${date.getFullYear()} at ${date.getHours()}:00`;
        $('#confirmation').text(dateFormatted);
        $('#confirmation').show();
    });
}); 