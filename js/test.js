'use strict';

let arr = [];
$.ajax('data/page-1.json').then(peopleData => {

  peopleData.forEach(val => {

    let newPerson = new Person(val);
    newPerson.renderName();
    arr.push(val.keyword);
  })
  $('.person-template').first().remove();

  arr = [...new Set(arr)];
  renderOption();
  console.log(arr);
})

function Person(name) {
  this.title = name.title;
  this.image_url = name.image_url;
  this.description = name.description;
  this.keyword = name.keyword;
  this.horns = name.horns;
  Person.all.push(this);
}
Person.all = [];

Person.prototype.renderName = function() {

  let info = $('.person-template').first().clone();
  info.find('span').text(this.title);
  info.find('img').attr('src', this.image_url);
  info.find('p').text(this.description);
  info.find('.p1').text(this.keyword);
  info.find('div').text(`Horns Number: ${this.horns}`);
  $('main').append(info);
}

const renderOption = function() {

  arr.forEach((item)=> {
    let Options = $('<option class = "option"></option>').text(item);
    $('select').append(Options);
  });
}
$('select').on('change', function () {

  let option=$(this).val();

  optionRender(option);
});
function optionRender (key){
  $('nav').remove();

  Person.all.forEach(element => {
    if(element.keyword === key){
      console.log(element.image_url);
      let info = $('.person-template').first().clone();

      info.find('span').text(element.title);
      info.find('img').attr('src', element.image_url);
      info.find('p').text(element.description);
      info.find('.p1').text(element.keyword);
      info.find('div').text(`Horns Number: ${element.horns}`);

      $('main').append(info);

    }


  });
}









