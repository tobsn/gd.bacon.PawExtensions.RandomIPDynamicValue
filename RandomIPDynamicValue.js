var RandomIPDynamicValue = function(){
	this.getoct = function(){return Math.round(Math.random()*255)};
	this.title = function(){return 'Random IP'};
	this.evaluate = function(){return this.getoct()+'.'+this.getoct()+'.'+this.getoct()+'.'+this.getoct()}
}
RandomIPDynamicValue.identifier = 'gd.bacon.PawExtensions.RandomIPDynamicValue';
RandomIPDynamicValue.title = 'Random IP Dynamic Value';
RandomIPDynamicValue.inputs = [];
registerDynamicValueClass(RandomIPDynamicValue);