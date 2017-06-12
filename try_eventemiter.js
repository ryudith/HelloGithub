'use strict';


let emitter = require('events'), 
	event = new emitter.EventEmitter(),
	util = require('util');

function alarm (str_time) {
	console.log('alarm sound at ' + str_time);
}

event.on('setAlarm', alarm);

event.emit('setAlarm', '23:30');
console.log('\n\n');


function Door (colour) {
	this.colour = colour;
	emitter.EventEmitter.call(this);

	this.open = function () {
		this.emit('open');
	}
}
Door.prototype.__proto__ = emitter.EventEmitter.prototype;

let frontDoor = new Door('brown');
frontDoor.on('open', function(){
	console.log('ring... ring... ring...');
});
frontDoor.open();
console.log('\n\n');


let id = 1, 
	database = {
		users:[
			{id: id++, name:"Joe Smith", occupation:"developer"},
			{id: id++, name:"Jane Doe", occupation:"data analyst"},
			{id: id++, name:"John Henry", occupation:"designer"}
		]
};

function UserList () {
	emitter.EventEmitter.call(this);
}
util.inherits(UserList, emitter.EventEmitter);
UserList.prototype.save = function (obj) {
	obj.id = id++;
	database.users.push(obj);
	this.emit('saved-user', obj);
}
UserList.prototype.all = function(){
	return database.users;
}

let users = new UserList();
users.on('saved-user', function(user){
	console.log('saved: ' + user.name + ' (' + user.id + ')');
});

users.save({name:'Marry Jane', occupation:'manager'});
users.save({name:'john Jacob', occupation:'developer'});
console.log('\n\n');


let listener1 = function () {
	console.log('listener1 executed.');
}, 
	listener2 = function () {
	console.log('listener2 executed.');
};

event.addListener('connection', listener1);
event.addListener('connection', listener2);

let countListener = emitter.listenerCount(event, 'connection');
console.log(countListener + ' Listener(s) listening to connection event.');

event.emit('connection');
event.removeListener('connection', listener1);
console.log('Listener1 will not listen now.');

event.emit('connection');
countListener = emitter.listenerCount(event, 'connection');
console.log(countListener + ' Listener(s) listening to connection event');