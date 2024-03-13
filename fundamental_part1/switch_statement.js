const day = 'saturday';

// SWITCH STATEMENT
switch (day) { //day === 'monday'
    case 'monday':
        console.log('Plan my course structure');
        console.log('Go to coding meeting');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

//ELSE IF STATEMENT
if (day === 'monday') {
    console.log('Plan my course structure');
    console.log('Go to coding meeting');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === "wednesday" || day === 'thursday') {
    console.log('Write code examples');
} else  if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}









