
$(document).ready(function(){
  console.log('works');
  $.ajax({
    url: 'https://swapi.co/api/people',
    dataType: 'json'
  }).done((result) => {
    result.results.forEach((person) => {
    $('#character').append(`
      <option value="${person.name}">${person.name}</option>`);
    });
    //attach to the form submit
    $('#sw-form').submit(function(event){
      event.preventDefault();
      let char = $('#character').val();
      console.log(char);

      result.results.forEach((person) => {
        if(person.name == char){
          let profile = '';
          Object.keys(person).forEach((item) => {
            profile += `<strong>${item}:</strong><span>${person[item]}</span>`;
          });
          $('.results').html(profile);
        }
      });
    });

    });
});















// $.ajax({
//     url: 'https://swapi.co/api/people',
//     dataType: 'json'
// }).done((result) => {
//   const peopleArray = result.results;
//   peopleArray.forEach( ( person ) => {
//     $('#character').append(
//     `<option value="${person.name}">${person.name}</option>`
//     );
//   });
//
//   $('#sw-form').submit( (event) => {
//     event.preventDefault();
//     $('.results').empty();
//     const character_name = $('#character').val();
//     for(let i=0; i < peopleArray.length; i++) {
//       if(peopleArray[i].name == character_name) {
//         let person = peopleArray[i];
//         for( item in person ){
//           let key = item;
//           let val = person[item];
//           let keyAry = ['homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited', 'url'];
//           if( keyAry.indexOf(key) === -1) {
//             $('.results').append(
//               `<dl>
//                 <dt>${ key }</dt>
//                 <dd>${ val }</dd>
//               </dl>`
//             );
//           }
//         }
//       }
//     }
//   });
// });
