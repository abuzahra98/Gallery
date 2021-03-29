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
  console.log(arr);
})

function Person(name) {
  this.title = name.title;
  this.image_url = name.image_url;
  this.description = name.description;
  this.keyword = name.keyword;
  this.horns = name.horns;
}

Person.prototype.renderName = function() {

  let info = $('.person-template').first().clone();
  let Options = $('<option></option>').text(this.keyword);
  $('select').append(Options);
  info.find('span').text(this.title);
  info.find('img').attr('src', this.image_url);
  info.find('p').text(this.description);
  info.find('.p1').text(this.keyword);
  info.find('div').text(`Horns Number: ${this.horns}`);
  $('main').append(info);
}
